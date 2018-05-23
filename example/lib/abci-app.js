let createABCIServer = require('../../index');
let decodeTx = require('./tx-encoding.js').decode;
let jsondiffpatch = require('jsondiffpatch');
let getRoot = require('./get-root.js');
let { stringify } = require('./json.js');
let { EventEmitter } = require('events');
let merk = require('merk');

// turn on debug logging
require('debug').enable('abci*');

async function runTx(txMiddleware, store, tx, chainInfo, allowMutation = false){
  let stateMutated = false
  // TODO: mutate store then use merk.rollback instead of cloning state
  let newChainInfo = jsondiffpatch.clone(chainInfo)
  let newState = jsondiffpatch.clone(store)
  let proxy = {
    get: (target, name) => {
      if (typeof target[name] === 'object' && target[name] !== null) {
        return new Proxy(target[name], proxy)
      }
      return target[name]
    },
    set: (target, name, newValue) => {
      let oldValue = target[name]
      target[name] = newValue
      if (newValue !== oldValue) {
        stateMutated = true
      }
      return true
    }
  }
  let hookedState = new Proxy(newState, proxy)
  let hookedChainInfo = new Proxy(chainInfo, proxy)
  // run middleware stack
  try {
    for (let txHandler of txMiddleware) {
      await txHandler(hookedState, tx, hookedChainInfo)
    }
  } catch (e) {
    return [false, e.toString()]
  }
  if (allowMutation) {
    Object.assign(chainInfo, newChainInfo)
    Object.assign(store, newState)
  } else {
    // TODO: merk.rollback(store)
  }
  return [
    stateMutated,
    stateMutated ? '' : 'transaction must mutate state to be valid'
  ]
}

class AbciApp {
  constructor() {}
}

module.exports = function configureABCIServer({
  txMiddleware,
  blockMiddleware,
  store,
  initialAppHash
}) {
  let chainInfo = {
    height: 1,
    validators: {}
  }
  let lastValidatorState = {}
  let abciApp = new AbciApp()
  abciApp.checkTx = async function(req) {
    let rawTx = req.tx
    try {
      let tx = decodeTx(rawTx)
      let [isValid, log] = await runTx(txMiddleware, store, tx, chainInfo, false)
      let code = isValid ? 0 : 2
      return { code, log }
    } catch (e) {
      return { code: 2, log: 'Invalid tx encoding for checkTx' }
    }
  }

  abciApp.deliverTx = async function(req) {
    let rawTx = req.tx
    try {
      let tx = decodeTx(rawTx)
      let [isValid, log] = await runTx(txMiddleware, store, tx, chainInfo, true)
      if (isValid) {
        return { code: 0 }
      } else {
        return { code: 2, log }
      }
    } catch (e) {
      return { code: 2, log: 'Invalid tx encoding for deliverTx' }
    }
  }

  abciApp.commit = async function() {
    chainInfo.height++
    blockMiddleware.forEach(blockHandler => {
      blockHandler(store, chainInfo)
    })
    let appHash = await getRoot(store)
    return { data: appHash }
  }

  abciApp.initChain = function({ validators }) {
    validators.forEach(tmValidator => {
      let pubKey = tmValidator.pubKey.toString('hex')
      let power = tmValidator.power.toNumber()
      chainInfo.validators[pubKey] = power
    })
    Object.assign(lastValidatorState, chainInfo.validators)
    return {}
  }

  abciApp.endBlock = function() {
    let diffs = []
    for (let key in chainInfo.validators) {
      if (lastValidatorState[key] !== chainInfo.validators[key]) {
        diffs.push({
          pubKey: Buffer.from(key, 'hex'),
          power: { low: chainInfo.validators[key], high: 0 }
        })
      }
    }
    lastValidatorState = Object.assign({}, chainInfo.validators)
    return { validatorUpdates: diffs }
  }

  abciApp.submitBlock = function(a, b, c) {
    console.log('submitBlock: ', a, b, c);
    return { txHash: '0x1234' };
  }

  abciApp.getBlock = function(a) {
    console.log('submitBlock: ', a, b, c);
    return { height: 0 };
  }

  abciApp.query = function() {
    try {
      return {
        value: stringify(store),
        height: chainInfo.height - 1,
        proof: '',
        key: '',
        index: 0,
        code: 0,
        log: ''
      }
    } catch (e) {
      return { code: 2, log: 'invalid query: ' + e.message }
    }
  }

  abciApp.info = async function() {
    let rootHash = await getRoot(store)
    return { lastBlockAppHash: rootHash }
  }

  let abciServer = createABCIServer(abciApp)
  return abciServer
}