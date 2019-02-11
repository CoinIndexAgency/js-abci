import * as $protobuf from "protobufjs";
/** Namespace types. */
export namespace types {

    /** Properties of a Request. */
    interface IRequest {

        /** Request echo */
        echo?: (types.IRequestEcho|null);

        /** Request flush */
        flush?: (types.IRequestFlush|null);

        /** Request info */
        info?: (types.IRequestInfo|null);

        /** Request setOption */
        setOption?: (types.IRequestSetOption|null);

        /** Request initChain */
        initChain?: (types.IRequestInitChain|null);

        /** Request query */
        query?: (types.IRequestQuery|null);

        /** Request beginBlock */
        beginBlock?: (types.IRequestBeginBlock|null);

        /** Request checkTx */
        checkTx?: (types.IRequestCheckTx|null);

        /** Request deliverTx */
        deliverTx?: (types.IRequestDeliverTx|null);

        /** Request endBlock */
        endBlock?: (types.IRequestEndBlock|null);

        /** Request commit */
        commit?: (types.IRequestCommit|null);
    }

    /** Represents a Request. */
    class Request implements IRequest {

        /**
         * Constructs a new Request.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequest);

        /** Request echo. */
        public echo?: (types.IRequestEcho|null);

        /** Request flush. */
        public flush?: (types.IRequestFlush|null);

        /** Request info. */
        public info?: (types.IRequestInfo|null);

        /** Request setOption. */
        public setOption?: (types.IRequestSetOption|null);

        /** Request initChain. */
        public initChain?: (types.IRequestInitChain|null);

        /** Request query. */
        public query?: (types.IRequestQuery|null);

        /** Request beginBlock. */
        public beginBlock?: (types.IRequestBeginBlock|null);

        /** Request checkTx. */
        public checkTx?: (types.IRequestCheckTx|null);

        /** Request deliverTx. */
        public deliverTx?: (types.IRequestDeliverTx|null);

        /** Request endBlock. */
        public endBlock?: (types.IRequestEndBlock|null);

        /** Request commit. */
        public commit?: (types.IRequestCommit|null);

        /** Request value. */
        public value?: ("echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit");

        /**
         * Creates a new Request instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Request instance
         */
        public static create(properties?: types.IRequest): types.Request;

        /**
         * Encodes the specified Request message. Does not implicitly {@link types.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Request message, length delimited. Does not implicitly {@link types.Request.verify|verify} messages.
         * @param message Request message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Request message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Request;

        /**
         * Decodes a Request message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Request
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Request;

        /**
         * Verifies a Request message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Request message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Request
         */
        public static fromObject(object: { [k: string]: any }): types.Request;

        /**
         * Creates a plain object from a Request message. Also converts values to other types if specified.
         * @param message Request
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Request to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestEcho. */
    interface IRequestEcho {

        /** RequestEcho message */
        message?: (string|null);
    }

    /** Represents a RequestEcho. */
    class RequestEcho implements IRequestEcho {

        /**
         * Constructs a new RequestEcho.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestEcho);

        /** RequestEcho message. */
        public message: string;

        /**
         * Creates a new RequestEcho instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestEcho instance
         */
        public static create(properties?: types.IRequestEcho): types.RequestEcho;

        /**
         * Encodes the specified RequestEcho message. Does not implicitly {@link types.RequestEcho.verify|verify} messages.
         * @param message RequestEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestEcho message, length delimited. Does not implicitly {@link types.RequestEcho.verify|verify} messages.
         * @param message RequestEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestEcho message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestEcho;

        /**
         * Decodes a RequestEcho message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestEcho;

        /**
         * Verifies a RequestEcho message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestEcho message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestEcho
         */
        public static fromObject(object: { [k: string]: any }): types.RequestEcho;

        /**
         * Creates a plain object from a RequestEcho message. Also converts values to other types if specified.
         * @param message RequestEcho
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestEcho to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestFlush. */
    interface IRequestFlush {
    }

    /** Represents a RequestFlush. */
    class RequestFlush implements IRequestFlush {

        /**
         * Constructs a new RequestFlush.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestFlush);

        /**
         * Creates a new RequestFlush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestFlush instance
         */
        public static create(properties?: types.IRequestFlush): types.RequestFlush;

        /**
         * Encodes the specified RequestFlush message. Does not implicitly {@link types.RequestFlush.verify|verify} messages.
         * @param message RequestFlush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestFlush message, length delimited. Does not implicitly {@link types.RequestFlush.verify|verify} messages.
         * @param message RequestFlush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestFlush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestFlush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestFlush;

        /**
         * Decodes a RequestFlush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestFlush;

        /**
         * Verifies a RequestFlush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestFlush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestFlush
         */
        public static fromObject(object: { [k: string]: any }): types.RequestFlush;

        /**
         * Creates a plain object from a RequestFlush message. Also converts values to other types if specified.
         * @param message RequestFlush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestFlush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestInfo. */
    interface IRequestInfo {

        /** RequestInfo version */
        version?: (string|null);

        /** RequestInfo blockVersion */
        blockVersion?: (number|Long|null);

        /** RequestInfo p2pVersion */
        p2pVersion?: (number|Long|null);
    }

    /** Represents a RequestInfo. */
    class RequestInfo implements IRequestInfo {

        /**
         * Constructs a new RequestInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestInfo);

        /** RequestInfo version. */
        public version: string;

        /** RequestInfo blockVersion. */
        public blockVersion: (number|Long);

        /** RequestInfo p2pVersion. */
        public p2pVersion: (number|Long);

        /**
         * Creates a new RequestInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestInfo instance
         */
        public static create(properties?: types.IRequestInfo): types.RequestInfo;

        /**
         * Encodes the specified RequestInfo message. Does not implicitly {@link types.RequestInfo.verify|verify} messages.
         * @param message RequestInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestInfo message, length delimited. Does not implicitly {@link types.RequestInfo.verify|verify} messages.
         * @param message RequestInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestInfo;

        /**
         * Decodes a RequestInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestInfo;

        /**
         * Verifies a RequestInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestInfo
         */
        public static fromObject(object: { [k: string]: any }): types.RequestInfo;

        /**
         * Creates a plain object from a RequestInfo message. Also converts values to other types if specified.
         * @param message RequestInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestSetOption. */
    interface IRequestSetOption {

        /** RequestSetOption key */
        key?: (string|null);

        /** RequestSetOption value */
        value?: (string|null);
    }

    /** Represents a RequestSetOption. */
    class RequestSetOption implements IRequestSetOption {

        /**
         * Constructs a new RequestSetOption.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestSetOption);

        /** RequestSetOption key. */
        public key: string;

        /** RequestSetOption value. */
        public value: string;

        /**
         * Creates a new RequestSetOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestSetOption instance
         */
        public static create(properties?: types.IRequestSetOption): types.RequestSetOption;

        /**
         * Encodes the specified RequestSetOption message. Does not implicitly {@link types.RequestSetOption.verify|verify} messages.
         * @param message RequestSetOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestSetOption message, length delimited. Does not implicitly {@link types.RequestSetOption.verify|verify} messages.
         * @param message RequestSetOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestSetOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestSetOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestSetOption;

        /**
         * Decodes a RequestSetOption message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestSetOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestSetOption;

        /**
         * Verifies a RequestSetOption message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestSetOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestSetOption
         */
        public static fromObject(object: { [k: string]: any }): types.RequestSetOption;

        /**
         * Creates a plain object from a RequestSetOption message. Also converts values to other types if specified.
         * @param message RequestSetOption
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestSetOption to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestInitChain. */
    interface IRequestInitChain {

        /** RequestInitChain time */
        time?: (google.protobuf.ITimestamp|null);

        /** RequestInitChain chainId */
        chainId?: (string|null);

        /** RequestInitChain consensusParams */
        consensusParams?: (types.IConsensusParams|null);

        /** RequestInitChain validators */
        validators?: (types.IValidatorUpdate[]|null);

        /** RequestInitChain appStateBytes */
        appStateBytes?: (Uint8Array|null);
    }

    /** Represents a RequestInitChain. */
    class RequestInitChain implements IRequestInitChain {

        /**
         * Constructs a new RequestInitChain.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestInitChain);

        /** RequestInitChain time. */
        public time?: (google.protobuf.ITimestamp|null);

        /** RequestInitChain chainId. */
        public chainId: string;

        /** RequestInitChain consensusParams. */
        public consensusParams?: (types.IConsensusParams|null);

        /** RequestInitChain validators. */
        public validators: types.IValidatorUpdate[];

        /** RequestInitChain appStateBytes. */
        public appStateBytes: Uint8Array;

        /**
         * Creates a new RequestInitChain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestInitChain instance
         */
        public static create(properties?: types.IRequestInitChain): types.RequestInitChain;

        /**
         * Encodes the specified RequestInitChain message. Does not implicitly {@link types.RequestInitChain.verify|verify} messages.
         * @param message RequestInitChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestInitChain message, length delimited. Does not implicitly {@link types.RequestInitChain.verify|verify} messages.
         * @param message RequestInitChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestInitChain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestInitChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestInitChain;

        /**
         * Decodes a RequestInitChain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestInitChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestInitChain;

        /**
         * Verifies a RequestInitChain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestInitChain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestInitChain
         */
        public static fromObject(object: { [k: string]: any }): types.RequestInitChain;

        /**
         * Creates a plain object from a RequestInitChain message. Also converts values to other types if specified.
         * @param message RequestInitChain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestInitChain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestQuery. */
    interface IRequestQuery {

        /** RequestQuery data */
        data?: (Uint8Array|null);

        /** RequestQuery path */
        path?: (string|null);

        /** RequestQuery height */
        height?: (number|Long|null);

        /** RequestQuery prove */
        prove?: (boolean|null);
    }

    /** Represents a RequestQuery. */
    class RequestQuery implements IRequestQuery {

        /**
         * Constructs a new RequestQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestQuery);

        /** RequestQuery data. */
        public data: Uint8Array;

        /** RequestQuery path. */
        public path: string;

        /** RequestQuery height. */
        public height: (number|Long);

        /** RequestQuery prove. */
        public prove: boolean;

        /**
         * Creates a new RequestQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestQuery instance
         */
        public static create(properties?: types.IRequestQuery): types.RequestQuery;

        /**
         * Encodes the specified RequestQuery message. Does not implicitly {@link types.RequestQuery.verify|verify} messages.
         * @param message RequestQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestQuery message, length delimited. Does not implicitly {@link types.RequestQuery.verify|verify} messages.
         * @param message RequestQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestQuery;

        /**
         * Decodes a RequestQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestQuery;

        /**
         * Verifies a RequestQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestQuery
         */
        public static fromObject(object: { [k: string]: any }): types.RequestQuery;

        /**
         * Creates a plain object from a RequestQuery message. Also converts values to other types if specified.
         * @param message RequestQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestBeginBlock. */
    interface IRequestBeginBlock {

        /** RequestBeginBlock hash */
        hash?: (Uint8Array|null);

        /** RequestBeginBlock header */
        header?: (types.IHeader|null);

        /** RequestBeginBlock lastCommitInfo */
        lastCommitInfo?: (types.ILastCommitInfo|null);

        /** RequestBeginBlock byzantineValidators */
        byzantineValidators?: (types.IEvidence[]|null);
    }

    /** Represents a RequestBeginBlock. */
    class RequestBeginBlock implements IRequestBeginBlock {

        /**
         * Constructs a new RequestBeginBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestBeginBlock);

        /** RequestBeginBlock hash. */
        public hash: Uint8Array;

        /** RequestBeginBlock header. */
        public header?: (types.IHeader|null);

        /** RequestBeginBlock lastCommitInfo. */
        public lastCommitInfo?: (types.ILastCommitInfo|null);

        /** RequestBeginBlock byzantineValidators. */
        public byzantineValidators: types.IEvidence[];

        /**
         * Creates a new RequestBeginBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestBeginBlock instance
         */
        public static create(properties?: types.IRequestBeginBlock): types.RequestBeginBlock;

        /**
         * Encodes the specified RequestBeginBlock message. Does not implicitly {@link types.RequestBeginBlock.verify|verify} messages.
         * @param message RequestBeginBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestBeginBlock message, length delimited. Does not implicitly {@link types.RequestBeginBlock.verify|verify} messages.
         * @param message RequestBeginBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestBeginBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestBeginBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestBeginBlock;

        /**
         * Decodes a RequestBeginBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestBeginBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestBeginBlock;

        /**
         * Verifies a RequestBeginBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestBeginBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestBeginBlock
         */
        public static fromObject(object: { [k: string]: any }): types.RequestBeginBlock;

        /**
         * Creates a plain object from a RequestBeginBlock message. Also converts values to other types if specified.
         * @param message RequestBeginBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestBeginBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCheckTx. */
    interface IRequestCheckTx {

        /** RequestCheckTx tx */
        tx?: (Uint8Array|null);
    }

    /** Represents a RequestCheckTx. */
    class RequestCheckTx implements IRequestCheckTx {

        /**
         * Constructs a new RequestCheckTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestCheckTx);

        /** RequestCheckTx tx. */
        public tx: Uint8Array;

        /**
         * Creates a new RequestCheckTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCheckTx instance
         */
        public static create(properties?: types.IRequestCheckTx): types.RequestCheckTx;

        /**
         * Encodes the specified RequestCheckTx message. Does not implicitly {@link types.RequestCheckTx.verify|verify} messages.
         * @param message RequestCheckTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCheckTx message, length delimited. Does not implicitly {@link types.RequestCheckTx.verify|verify} messages.
         * @param message RequestCheckTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCheckTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCheckTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestCheckTx;

        /**
         * Decodes a RequestCheckTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCheckTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestCheckTx;

        /**
         * Verifies a RequestCheckTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCheckTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCheckTx
         */
        public static fromObject(object: { [k: string]: any }): types.RequestCheckTx;

        /**
         * Creates a plain object from a RequestCheckTx message. Also converts values to other types if specified.
         * @param message RequestCheckTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCheckTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestDeliverTx. */
    interface IRequestDeliverTx {

        /** RequestDeliverTx tx */
        tx?: (Uint8Array|null);
    }

    /** Represents a RequestDeliverTx. */
    class RequestDeliverTx implements IRequestDeliverTx {

        /**
         * Constructs a new RequestDeliverTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestDeliverTx);

        /** RequestDeliverTx tx. */
        public tx: Uint8Array;

        /**
         * Creates a new RequestDeliverTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestDeliverTx instance
         */
        public static create(properties?: types.IRequestDeliverTx): types.RequestDeliverTx;

        /**
         * Encodes the specified RequestDeliverTx message. Does not implicitly {@link types.RequestDeliverTx.verify|verify} messages.
         * @param message RequestDeliverTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestDeliverTx message, length delimited. Does not implicitly {@link types.RequestDeliverTx.verify|verify} messages.
         * @param message RequestDeliverTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestDeliverTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestDeliverTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestDeliverTx;

        /**
         * Decodes a RequestDeliverTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestDeliverTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestDeliverTx;

        /**
         * Verifies a RequestDeliverTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestDeliverTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestDeliverTx
         */
        public static fromObject(object: { [k: string]: any }): types.RequestDeliverTx;

        /**
         * Creates a plain object from a RequestDeliverTx message. Also converts values to other types if specified.
         * @param message RequestDeliverTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestDeliverTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestEndBlock. */
    interface IRequestEndBlock {

        /** RequestEndBlock height */
        height?: (number|Long|null);
    }

    /** Represents a RequestEndBlock. */
    class RequestEndBlock implements IRequestEndBlock {

        /**
         * Constructs a new RequestEndBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestEndBlock);

        /** RequestEndBlock height. */
        public height: (number|Long);

        /**
         * Creates a new RequestEndBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestEndBlock instance
         */
        public static create(properties?: types.IRequestEndBlock): types.RequestEndBlock;

        /**
         * Encodes the specified RequestEndBlock message. Does not implicitly {@link types.RequestEndBlock.verify|verify} messages.
         * @param message RequestEndBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestEndBlock message, length delimited. Does not implicitly {@link types.RequestEndBlock.verify|verify} messages.
         * @param message RequestEndBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestEndBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestEndBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestEndBlock;

        /**
         * Decodes a RequestEndBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestEndBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestEndBlock;

        /**
         * Verifies a RequestEndBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestEndBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestEndBlock
         */
        public static fromObject(object: { [k: string]: any }): types.RequestEndBlock;

        /**
         * Creates a plain object from a RequestEndBlock message. Also converts values to other types if specified.
         * @param message RequestEndBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestEndBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RequestCommit. */
    interface IRequestCommit {
    }

    /** Represents a RequestCommit. */
    class RequestCommit implements IRequestCommit {

        /**
         * Constructs a new RequestCommit.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IRequestCommit);

        /**
         * Creates a new RequestCommit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RequestCommit instance
         */
        public static create(properties?: types.IRequestCommit): types.RequestCommit;

        /**
         * Encodes the specified RequestCommit message. Does not implicitly {@link types.RequestCommit.verify|verify} messages.
         * @param message RequestCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RequestCommit message, length delimited. Does not implicitly {@link types.RequestCommit.verify|verify} messages.
         * @param message RequestCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IRequestCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RequestCommit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RequestCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.RequestCommit;

        /**
         * Decodes a RequestCommit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RequestCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.RequestCommit;

        /**
         * Verifies a RequestCommit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RequestCommit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RequestCommit
         */
        public static fromObject(object: { [k: string]: any }): types.RequestCommit;

        /**
         * Creates a plain object from a RequestCommit message. Also converts values to other types if specified.
         * @param message RequestCommit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.RequestCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RequestCommit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Response. */
    interface IResponse {

        /** Response exception */
        exception?: (types.IResponseException|null);

        /** Response echo */
        echo?: (types.IResponseEcho|null);

        /** Response flush */
        flush?: (types.IResponseFlush|null);

        /** Response info */
        info?: (types.IResponseInfo|null);

        /** Response setOption */
        setOption?: (types.IResponseSetOption|null);

        /** Response initChain */
        initChain?: (types.IResponseInitChain|null);

        /** Response query */
        query?: (types.IResponseQuery|null);

        /** Response beginBlock */
        beginBlock?: (types.IResponseBeginBlock|null);

        /** Response checkTx */
        checkTx?: (types.IResponseCheckTx|null);

        /** Response deliverTx */
        deliverTx?: (types.IResponseDeliverTx|null);

        /** Response endBlock */
        endBlock?: (types.IResponseEndBlock|null);

        /** Response commit */
        commit?: (types.IResponseCommit|null);
    }

    /** Represents a Response. */
    class Response implements IResponse {

        /**
         * Constructs a new Response.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponse);

        /** Response exception. */
        public exception?: (types.IResponseException|null);

        /** Response echo. */
        public echo?: (types.IResponseEcho|null);

        /** Response flush. */
        public flush?: (types.IResponseFlush|null);

        /** Response info. */
        public info?: (types.IResponseInfo|null);

        /** Response setOption. */
        public setOption?: (types.IResponseSetOption|null);

        /** Response initChain. */
        public initChain?: (types.IResponseInitChain|null);

        /** Response query. */
        public query?: (types.IResponseQuery|null);

        /** Response beginBlock. */
        public beginBlock?: (types.IResponseBeginBlock|null);

        /** Response checkTx. */
        public checkTx?: (types.IResponseCheckTx|null);

        /** Response deliverTx. */
        public deliverTx?: (types.IResponseDeliverTx|null);

        /** Response endBlock. */
        public endBlock?: (types.IResponseEndBlock|null);

        /** Response commit. */
        public commit?: (types.IResponseCommit|null);

        /** Response value. */
        public value?: ("exception"|"echo"|"flush"|"info"|"setOption"|"initChain"|"query"|"beginBlock"|"checkTx"|"deliverTx"|"endBlock"|"commit");

        /**
         * Creates a new Response instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Response instance
         */
        public static create(properties?: types.IResponse): types.Response;

        /**
         * Encodes the specified Response message. Does not implicitly {@link types.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Response message, length delimited. Does not implicitly {@link types.Response.verify|verify} messages.
         * @param message Response message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Response message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Response;

        /**
         * Decodes a Response message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Response
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Response;

        /**
         * Verifies a Response message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Response message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Response
         */
        public static fromObject(object: { [k: string]: any }): types.Response;

        /**
         * Creates a plain object from a Response message. Also converts values to other types if specified.
         * @param message Response
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Response to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseException. */
    interface IResponseException {

        /** ResponseException error */
        error?: (string|null);
    }

    /** Represents a ResponseException. */
    class ResponseException implements IResponseException {

        /**
         * Constructs a new ResponseException.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseException);

        /** ResponseException error. */
        public error: string;

        /**
         * Creates a new ResponseException instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseException instance
         */
        public static create(properties?: types.IResponseException): types.ResponseException;

        /**
         * Encodes the specified ResponseException message. Does not implicitly {@link types.ResponseException.verify|verify} messages.
         * @param message ResponseException message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseException message, length delimited. Does not implicitly {@link types.ResponseException.verify|verify} messages.
         * @param message ResponseException message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseException, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseException message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseException;

        /**
         * Decodes a ResponseException message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseException
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseException;

        /**
         * Verifies a ResponseException message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseException message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseException
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseException;

        /**
         * Creates a plain object from a ResponseException message. Also converts values to other types if specified.
         * @param message ResponseException
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseException, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseException to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseEcho. */
    interface IResponseEcho {

        /** ResponseEcho message */
        message?: (string|null);
    }

    /** Represents a ResponseEcho. */
    class ResponseEcho implements IResponseEcho {

        /**
         * Constructs a new ResponseEcho.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseEcho);

        /** ResponseEcho message. */
        public message: string;

        /**
         * Creates a new ResponseEcho instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseEcho instance
         */
        public static create(properties?: types.IResponseEcho): types.ResponseEcho;

        /**
         * Encodes the specified ResponseEcho message. Does not implicitly {@link types.ResponseEcho.verify|verify} messages.
         * @param message ResponseEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseEcho message, length delimited. Does not implicitly {@link types.ResponseEcho.verify|verify} messages.
         * @param message ResponseEcho message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseEcho, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseEcho message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseEcho;

        /**
         * Decodes a ResponseEcho message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseEcho
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseEcho;

        /**
         * Verifies a ResponseEcho message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseEcho message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseEcho
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseEcho;

        /**
         * Creates a plain object from a ResponseEcho message. Also converts values to other types if specified.
         * @param message ResponseEcho
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseEcho, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseEcho to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseFlush. */
    interface IResponseFlush {
    }

    /** Represents a ResponseFlush. */
    class ResponseFlush implements IResponseFlush {

        /**
         * Constructs a new ResponseFlush.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseFlush);

        /**
         * Creates a new ResponseFlush instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseFlush instance
         */
        public static create(properties?: types.IResponseFlush): types.ResponseFlush;

        /**
         * Encodes the specified ResponseFlush message. Does not implicitly {@link types.ResponseFlush.verify|verify} messages.
         * @param message ResponseFlush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseFlush message, length delimited. Does not implicitly {@link types.ResponseFlush.verify|verify} messages.
         * @param message ResponseFlush message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseFlush, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseFlush message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseFlush;

        /**
         * Decodes a ResponseFlush message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseFlush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseFlush;

        /**
         * Verifies a ResponseFlush message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseFlush message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseFlush
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseFlush;

        /**
         * Creates a plain object from a ResponseFlush message. Also converts values to other types if specified.
         * @param message ResponseFlush
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseFlush, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseFlush to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseInfo. */
    interface IResponseInfo {

        /** ResponseInfo data */
        data?: (string|null);

        /** ResponseInfo version */
        version?: (string|null);

        /** ResponseInfo appVersion */
        appVersion?: (number|Long|null);

        /** ResponseInfo lastBlockHeight */
        lastBlockHeight?: (number|Long|null);

        /** ResponseInfo lastBlockAppHash */
        lastBlockAppHash?: (Uint8Array|null);
    }

    /** Represents a ResponseInfo. */
    class ResponseInfo implements IResponseInfo {

        /**
         * Constructs a new ResponseInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseInfo);

        /** ResponseInfo data. */
        public data: string;

        /** ResponseInfo version. */
        public version: string;

        /** ResponseInfo appVersion. */
        public appVersion: (number|Long);

        /** ResponseInfo lastBlockHeight. */
        public lastBlockHeight: (number|Long);

        /** ResponseInfo lastBlockAppHash. */
        public lastBlockAppHash: Uint8Array;

        /**
         * Creates a new ResponseInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseInfo instance
         */
        public static create(properties?: types.IResponseInfo): types.ResponseInfo;

        /**
         * Encodes the specified ResponseInfo message. Does not implicitly {@link types.ResponseInfo.verify|verify} messages.
         * @param message ResponseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseInfo message, length delimited. Does not implicitly {@link types.ResponseInfo.verify|verify} messages.
         * @param message ResponseInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseInfo;

        /**
         * Decodes a ResponseInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseInfo;

        /**
         * Verifies a ResponseInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseInfo
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseInfo;

        /**
         * Creates a plain object from a ResponseInfo message. Also converts values to other types if specified.
         * @param message ResponseInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseSetOption. */
    interface IResponseSetOption {

        /** ResponseSetOption code */
        code?: (number|null);

        /** ResponseSetOption log */
        log?: (string|null);

        /** ResponseSetOption info */
        info?: (string|null);
    }

    /** Represents a ResponseSetOption. */
    class ResponseSetOption implements IResponseSetOption {

        /**
         * Constructs a new ResponseSetOption.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseSetOption);

        /** ResponseSetOption code. */
        public code: number;

        /** ResponseSetOption log. */
        public log: string;

        /** ResponseSetOption info. */
        public info: string;

        /**
         * Creates a new ResponseSetOption instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseSetOption instance
         */
        public static create(properties?: types.IResponseSetOption): types.ResponseSetOption;

        /**
         * Encodes the specified ResponseSetOption message. Does not implicitly {@link types.ResponseSetOption.verify|verify} messages.
         * @param message ResponseSetOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseSetOption message, length delimited. Does not implicitly {@link types.ResponseSetOption.verify|verify} messages.
         * @param message ResponseSetOption message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseSetOption, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseSetOption message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseSetOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseSetOption;

        /**
         * Decodes a ResponseSetOption message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseSetOption
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseSetOption;

        /**
         * Verifies a ResponseSetOption message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseSetOption message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseSetOption
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseSetOption;

        /**
         * Creates a plain object from a ResponseSetOption message. Also converts values to other types if specified.
         * @param message ResponseSetOption
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseSetOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseSetOption to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseInitChain. */
    interface IResponseInitChain {

        /** ResponseInitChain consensusParams */
        consensusParams?: (types.IConsensusParams|null);

        /** ResponseInitChain validators */
        validators?: (types.IValidatorUpdate[]|null);
    }

    /** Represents a ResponseInitChain. */
    class ResponseInitChain implements IResponseInitChain {

        /**
         * Constructs a new ResponseInitChain.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseInitChain);

        /** ResponseInitChain consensusParams. */
        public consensusParams?: (types.IConsensusParams|null);

        /** ResponseInitChain validators. */
        public validators: types.IValidatorUpdate[];

        /**
         * Creates a new ResponseInitChain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseInitChain instance
         */
        public static create(properties?: types.IResponseInitChain): types.ResponseInitChain;

        /**
         * Encodes the specified ResponseInitChain message. Does not implicitly {@link types.ResponseInitChain.verify|verify} messages.
         * @param message ResponseInitChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseInitChain message, length delimited. Does not implicitly {@link types.ResponseInitChain.verify|verify} messages.
         * @param message ResponseInitChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseInitChain, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseInitChain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseInitChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseInitChain;

        /**
         * Decodes a ResponseInitChain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseInitChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseInitChain;

        /**
         * Verifies a ResponseInitChain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseInitChain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseInitChain
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseInitChain;

        /**
         * Creates a plain object from a ResponseInitChain message. Also converts values to other types if specified.
         * @param message ResponseInitChain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseInitChain, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseInitChain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseQuery. */
    interface IResponseQuery {

        /** ResponseQuery code */
        code?: (number|null);

        /** ResponseQuery log */
        log?: (string|null);

        /** ResponseQuery info */
        info?: (string|null);

        /** ResponseQuery index */
        index?: (number|Long|null);

        /** ResponseQuery key */
        key?: (Uint8Array|null);

        /** ResponseQuery value */
        value?: (Uint8Array|null);

        /** ResponseQuery proof */
        proof?: (merkle.IProof|null);

        /** ResponseQuery height */
        height?: (number|Long|null);

        /** ResponseQuery codespace */
        codespace?: (string|null);
    }

    /** Represents a ResponseQuery. */
    class ResponseQuery implements IResponseQuery {

        /**
         * Constructs a new ResponseQuery.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseQuery);

        /** ResponseQuery code. */
        public code: number;

        /** ResponseQuery log. */
        public log: string;

        /** ResponseQuery info. */
        public info: string;

        /** ResponseQuery index. */
        public index: (number|Long);

        /** ResponseQuery key. */
        public key: Uint8Array;

        /** ResponseQuery value. */
        public value: Uint8Array;

        /** ResponseQuery proof. */
        public proof?: (merkle.IProof|null);

        /** ResponseQuery height. */
        public height: (number|Long);

        /** ResponseQuery codespace. */
        public codespace: string;

        /**
         * Creates a new ResponseQuery instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseQuery instance
         */
        public static create(properties?: types.IResponseQuery): types.ResponseQuery;

        /**
         * Encodes the specified ResponseQuery message. Does not implicitly {@link types.ResponseQuery.verify|verify} messages.
         * @param message ResponseQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseQuery message, length delimited. Does not implicitly {@link types.ResponseQuery.verify|verify} messages.
         * @param message ResponseQuery message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseQuery, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseQuery message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseQuery;

        /**
         * Decodes a ResponseQuery message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseQuery
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseQuery;

        /**
         * Verifies a ResponseQuery message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseQuery message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseQuery
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseQuery;

        /**
         * Creates a plain object from a ResponseQuery message. Also converts values to other types if specified.
         * @param message ResponseQuery
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseQuery, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseQuery to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseBeginBlock. */
    interface IResponseBeginBlock {

        /** ResponseBeginBlock tags */
        tags?: (common.IKVPair[]|null);
    }

    /** Represents a ResponseBeginBlock. */
    class ResponseBeginBlock implements IResponseBeginBlock {

        /**
         * Constructs a new ResponseBeginBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseBeginBlock);

        /** ResponseBeginBlock tags. */
        public tags: common.IKVPair[];

        /**
         * Creates a new ResponseBeginBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseBeginBlock instance
         */
        public static create(properties?: types.IResponseBeginBlock): types.ResponseBeginBlock;

        /**
         * Encodes the specified ResponseBeginBlock message. Does not implicitly {@link types.ResponseBeginBlock.verify|verify} messages.
         * @param message ResponseBeginBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseBeginBlock message, length delimited. Does not implicitly {@link types.ResponseBeginBlock.verify|verify} messages.
         * @param message ResponseBeginBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseBeginBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseBeginBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseBeginBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseBeginBlock;

        /**
         * Decodes a ResponseBeginBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseBeginBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseBeginBlock;

        /**
         * Verifies a ResponseBeginBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseBeginBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseBeginBlock
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseBeginBlock;

        /**
         * Creates a plain object from a ResponseBeginBlock message. Also converts values to other types if specified.
         * @param message ResponseBeginBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseBeginBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseBeginBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCheckTx. */
    interface IResponseCheckTx {

        /** ResponseCheckTx code */
        code?: (number|null);

        /** ResponseCheckTx data */
        data?: (Uint8Array|null);

        /** ResponseCheckTx log */
        log?: (string|null);

        /** ResponseCheckTx info */
        info?: (string|null);

        /** ResponseCheckTx gasWanted */
        gasWanted?: (number|Long|null);

        /** ResponseCheckTx gasUsed */
        gasUsed?: (number|Long|null);

        /** ResponseCheckTx tags */
        tags?: (common.IKVPair[]|null);

        /** ResponseCheckTx codespace */
        codespace?: (string|null);
    }

    /** Represents a ResponseCheckTx. */
    class ResponseCheckTx implements IResponseCheckTx {

        /**
         * Constructs a new ResponseCheckTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseCheckTx);

        /** ResponseCheckTx code. */
        public code: number;

        /** ResponseCheckTx data. */
        public data: Uint8Array;

        /** ResponseCheckTx log. */
        public log: string;

        /** ResponseCheckTx info. */
        public info: string;

        /** ResponseCheckTx gasWanted. */
        public gasWanted: (number|Long);

        /** ResponseCheckTx gasUsed. */
        public gasUsed: (number|Long);

        /** ResponseCheckTx tags. */
        public tags: common.IKVPair[];

        /** ResponseCheckTx codespace. */
        public codespace: string;

        /**
         * Creates a new ResponseCheckTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCheckTx instance
         */
        public static create(properties?: types.IResponseCheckTx): types.ResponseCheckTx;

        /**
         * Encodes the specified ResponseCheckTx message. Does not implicitly {@link types.ResponseCheckTx.verify|verify} messages.
         * @param message ResponseCheckTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCheckTx message, length delimited. Does not implicitly {@link types.ResponseCheckTx.verify|verify} messages.
         * @param message ResponseCheckTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseCheckTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCheckTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCheckTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseCheckTx;

        /**
         * Decodes a ResponseCheckTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCheckTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseCheckTx;

        /**
         * Verifies a ResponseCheckTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCheckTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCheckTx
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseCheckTx;

        /**
         * Creates a plain object from a ResponseCheckTx message. Also converts values to other types if specified.
         * @param message ResponseCheckTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseCheckTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCheckTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseDeliverTx. */
    interface IResponseDeliverTx {

        /** ResponseDeliverTx code */
        code?: (number|null);

        /** ResponseDeliverTx data */
        data?: (Uint8Array|null);

        /** ResponseDeliverTx log */
        log?: (string|null);

        /** ResponseDeliverTx info */
        info?: (string|null);

        /** ResponseDeliverTx gasWanted */
        gasWanted?: (number|Long|null);

        /** ResponseDeliverTx gasUsed */
        gasUsed?: (number|Long|null);

        /** ResponseDeliverTx tags */
        tags?: (common.IKVPair[]|null);

        /** ResponseDeliverTx codespace */
        codespace?: (string|null);
    }

    /** Represents a ResponseDeliverTx. */
    class ResponseDeliverTx implements IResponseDeliverTx {

        /**
         * Constructs a new ResponseDeliverTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseDeliverTx);

        /** ResponseDeliverTx code. */
        public code: number;

        /** ResponseDeliverTx data. */
        public data: Uint8Array;

        /** ResponseDeliverTx log. */
        public log: string;

        /** ResponseDeliverTx info. */
        public info: string;

        /** ResponseDeliverTx gasWanted. */
        public gasWanted: (number|Long);

        /** ResponseDeliverTx gasUsed. */
        public gasUsed: (number|Long);

        /** ResponseDeliverTx tags. */
        public tags: common.IKVPair[];

        /** ResponseDeliverTx codespace. */
        public codespace: string;

        /**
         * Creates a new ResponseDeliverTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseDeliverTx instance
         */
        public static create(properties?: types.IResponseDeliverTx): types.ResponseDeliverTx;

        /**
         * Encodes the specified ResponseDeliverTx message. Does not implicitly {@link types.ResponseDeliverTx.verify|verify} messages.
         * @param message ResponseDeliverTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseDeliverTx message, length delimited. Does not implicitly {@link types.ResponseDeliverTx.verify|verify} messages.
         * @param message ResponseDeliverTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseDeliverTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseDeliverTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseDeliverTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseDeliverTx;

        /**
         * Decodes a ResponseDeliverTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseDeliverTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseDeliverTx;

        /**
         * Verifies a ResponseDeliverTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseDeliverTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseDeliverTx
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseDeliverTx;

        /**
         * Creates a plain object from a ResponseDeliverTx message. Also converts values to other types if specified.
         * @param message ResponseDeliverTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseDeliverTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseDeliverTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseEndBlock. */
    interface IResponseEndBlock {

        /** ResponseEndBlock validatorUpdates */
        validatorUpdates?: (types.IValidatorUpdate[]|null);

        /** ResponseEndBlock consensusParamUpdates */
        consensusParamUpdates?: (types.IConsensusParams|null);

        /** ResponseEndBlock tags */
        tags?: (common.IKVPair[]|null);
    }

    /** Represents a ResponseEndBlock. */
    class ResponseEndBlock implements IResponseEndBlock {

        /**
         * Constructs a new ResponseEndBlock.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseEndBlock);

        /** ResponseEndBlock validatorUpdates. */
        public validatorUpdates: types.IValidatorUpdate[];

        /** ResponseEndBlock consensusParamUpdates. */
        public consensusParamUpdates?: (types.IConsensusParams|null);

        /** ResponseEndBlock tags. */
        public tags: common.IKVPair[];

        /**
         * Creates a new ResponseEndBlock instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseEndBlock instance
         */
        public static create(properties?: types.IResponseEndBlock): types.ResponseEndBlock;

        /**
         * Encodes the specified ResponseEndBlock message. Does not implicitly {@link types.ResponseEndBlock.verify|verify} messages.
         * @param message ResponseEndBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseEndBlock message, length delimited. Does not implicitly {@link types.ResponseEndBlock.verify|verify} messages.
         * @param message ResponseEndBlock message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseEndBlock, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseEndBlock message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseEndBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseEndBlock;

        /**
         * Decodes a ResponseEndBlock message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseEndBlock
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseEndBlock;

        /**
         * Verifies a ResponseEndBlock message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseEndBlock message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseEndBlock
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseEndBlock;

        /**
         * Creates a plain object from a ResponseEndBlock message. Also converts values to other types if specified.
         * @param message ResponseEndBlock
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseEndBlock, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseEndBlock to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ResponseCommit. */
    interface IResponseCommit {

        /** ResponseCommit data */
        data?: (Uint8Array|null);
    }

    /** Represents a ResponseCommit. */
    class ResponseCommit implements IResponseCommit {

        /**
         * Constructs a new ResponseCommit.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IResponseCommit);

        /** ResponseCommit data. */
        public data: Uint8Array;

        /**
         * Creates a new ResponseCommit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ResponseCommit instance
         */
        public static create(properties?: types.IResponseCommit): types.ResponseCommit;

        /**
         * Encodes the specified ResponseCommit message. Does not implicitly {@link types.ResponseCommit.verify|verify} messages.
         * @param message ResponseCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ResponseCommit message, length delimited. Does not implicitly {@link types.ResponseCommit.verify|verify} messages.
         * @param message ResponseCommit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IResponseCommit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ResponseCommit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ResponseCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ResponseCommit;

        /**
         * Decodes a ResponseCommit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ResponseCommit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ResponseCommit;

        /**
         * Verifies a ResponseCommit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ResponseCommit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ResponseCommit
         */
        public static fromObject(object: { [k: string]: any }): types.ResponseCommit;

        /**
         * Creates a plain object from a ResponseCommit message. Also converts values to other types if specified.
         * @param message ResponseCommit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ResponseCommit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ResponseCommit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConsensusParams. */
    interface IConsensusParams {

        /** ConsensusParams blockSize */
        blockSize?: (types.IBlockSizeParams|null);

        /** ConsensusParams evidence */
        evidence?: (types.IEvidenceParams|null);

        /** ConsensusParams validator */
        validator?: (types.IValidatorParams|null);
    }

    /** Represents a ConsensusParams. */
    class ConsensusParams implements IConsensusParams {

        /**
         * Constructs a new ConsensusParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IConsensusParams);

        /** ConsensusParams blockSize. */
        public blockSize?: (types.IBlockSizeParams|null);

        /** ConsensusParams evidence. */
        public evidence?: (types.IEvidenceParams|null);

        /** ConsensusParams validator. */
        public validator?: (types.IValidatorParams|null);

        /**
         * Creates a new ConsensusParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConsensusParams instance
         */
        public static create(properties?: types.IConsensusParams): types.ConsensusParams;

        /**
         * Encodes the specified ConsensusParams message. Does not implicitly {@link types.ConsensusParams.verify|verify} messages.
         * @param message ConsensusParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConsensusParams message, length delimited. Does not implicitly {@link types.ConsensusParams.verify|verify} messages.
         * @param message ConsensusParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IConsensusParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConsensusParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConsensusParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ConsensusParams;

        /**
         * Decodes a ConsensusParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConsensusParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ConsensusParams;

        /**
         * Verifies a ConsensusParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConsensusParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConsensusParams
         */
        public static fromObject(object: { [k: string]: any }): types.ConsensusParams;

        /**
         * Creates a plain object from a ConsensusParams message. Also converts values to other types if specified.
         * @param message ConsensusParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ConsensusParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConsensusParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockSizeParams. */
    interface IBlockSizeParams {

        /** BlockSizeParams maxBytes */
        maxBytes?: (number|Long|null);

        /** BlockSizeParams maxGas */
        maxGas?: (number|Long|null);
    }

    /** Represents a BlockSizeParams. */
    class BlockSizeParams implements IBlockSizeParams {

        /**
         * Constructs a new BlockSizeParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IBlockSizeParams);

        /** BlockSizeParams maxBytes. */
        public maxBytes: (number|Long);

        /** BlockSizeParams maxGas. */
        public maxGas: (number|Long);

        /**
         * Creates a new BlockSizeParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockSizeParams instance
         */
        public static create(properties?: types.IBlockSizeParams): types.BlockSizeParams;

        /**
         * Encodes the specified BlockSizeParams message. Does not implicitly {@link types.BlockSizeParams.verify|verify} messages.
         * @param message BlockSizeParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IBlockSizeParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockSizeParams message, length delimited. Does not implicitly {@link types.BlockSizeParams.verify|verify} messages.
         * @param message BlockSizeParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IBlockSizeParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockSizeParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockSizeParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.BlockSizeParams;

        /**
         * Decodes a BlockSizeParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockSizeParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.BlockSizeParams;

        /**
         * Verifies a BlockSizeParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockSizeParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockSizeParams
         */
        public static fromObject(object: { [k: string]: any }): types.BlockSizeParams;

        /**
         * Creates a plain object from a BlockSizeParams message. Also converts values to other types if specified.
         * @param message BlockSizeParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.BlockSizeParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockSizeParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EvidenceParams. */
    interface IEvidenceParams {

        /** EvidenceParams maxAge */
        maxAge?: (number|Long|null);
    }

    /** Represents an EvidenceParams. */
    class EvidenceParams implements IEvidenceParams {

        /**
         * Constructs a new EvidenceParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEvidenceParams);

        /** EvidenceParams maxAge. */
        public maxAge: (number|Long);

        /**
         * Creates a new EvidenceParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EvidenceParams instance
         */
        public static create(properties?: types.IEvidenceParams): types.EvidenceParams;

        /**
         * Encodes the specified EvidenceParams message. Does not implicitly {@link types.EvidenceParams.verify|verify} messages.
         * @param message EvidenceParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EvidenceParams message, length delimited. Does not implicitly {@link types.EvidenceParams.verify|verify} messages.
         * @param message EvidenceParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEvidenceParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EvidenceParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EvidenceParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.EvidenceParams;

        /**
         * Decodes an EvidenceParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EvidenceParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.EvidenceParams;

        /**
         * Verifies an EvidenceParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EvidenceParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EvidenceParams
         */
        public static fromObject(object: { [k: string]: any }): types.EvidenceParams;

        /**
         * Creates a plain object from an EvidenceParams message. Also converts values to other types if specified.
         * @param message EvidenceParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.EvidenceParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EvidenceParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ValidatorParams. */
    interface IValidatorParams {

        /** ValidatorParams pubKeyTypes */
        pubKeyTypes?: (string[]|null);
    }

    /** Represents a ValidatorParams. */
    class ValidatorParams implements IValidatorParams {

        /**
         * Constructs a new ValidatorParams.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IValidatorParams);

        /** ValidatorParams pubKeyTypes. */
        public pubKeyTypes: string[];

        /**
         * Creates a new ValidatorParams instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValidatorParams instance
         */
        public static create(properties?: types.IValidatorParams): types.ValidatorParams;

        /**
         * Encodes the specified ValidatorParams message. Does not implicitly {@link types.ValidatorParams.verify|verify} messages.
         * @param message ValidatorParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValidatorParams message, length delimited. Does not implicitly {@link types.ValidatorParams.verify|verify} messages.
         * @param message ValidatorParams message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IValidatorParams, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValidatorParams message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValidatorParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ValidatorParams;

        /**
         * Decodes a ValidatorParams message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValidatorParams
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ValidatorParams;

        /**
         * Verifies a ValidatorParams message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValidatorParams message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidatorParams
         */
        public static fromObject(object: { [k: string]: any }): types.ValidatorParams;

        /**
         * Creates a plain object from a ValidatorParams message. Also converts values to other types if specified.
         * @param message ValidatorParams
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ValidatorParams, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidatorParams to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LastCommitInfo. */
    interface ILastCommitInfo {

        /** LastCommitInfo round */
        round?: (number|null);

        /** LastCommitInfo votes */
        votes?: (types.IVoteInfo[]|null);
    }

    /** Represents a LastCommitInfo. */
    class LastCommitInfo implements ILastCommitInfo {

        /**
         * Constructs a new LastCommitInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.ILastCommitInfo);

        /** LastCommitInfo round. */
        public round: number;

        /** LastCommitInfo votes. */
        public votes: types.IVoteInfo[];

        /**
         * Creates a new LastCommitInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LastCommitInfo instance
         */
        public static create(properties?: types.ILastCommitInfo): types.LastCommitInfo;

        /**
         * Encodes the specified LastCommitInfo message. Does not implicitly {@link types.LastCommitInfo.verify|verify} messages.
         * @param message LastCommitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LastCommitInfo message, length delimited. Does not implicitly {@link types.LastCommitInfo.verify|verify} messages.
         * @param message LastCommitInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.ILastCommitInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LastCommitInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LastCommitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.LastCommitInfo;

        /**
         * Decodes a LastCommitInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LastCommitInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.LastCommitInfo;

        /**
         * Verifies a LastCommitInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LastCommitInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LastCommitInfo
         */
        public static fromObject(object: { [k: string]: any }): types.LastCommitInfo;

        /**
         * Creates a plain object from a LastCommitInfo message. Also converts values to other types if specified.
         * @param message LastCommitInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.LastCommitInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LastCommitInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Header. */
    interface IHeader {

        /** Header version */
        version?: (types.IVersion|null);

        /** Header chainId */
        chainId?: (string|null);

        /** Header height */
        height?: (number|Long|null);

        /** Header time */
        time?: (google.protobuf.ITimestamp|null);

        /** Header numTxs */
        numTxs?: (number|Long|null);

        /** Header totalTxs */
        totalTxs?: (number|Long|null);

        /** Header lastBlockId */
        lastBlockId?: (types.IBlockID|null);

        /** Header lastCommitHash */
        lastCommitHash?: (Uint8Array|null);

        /** Header dataHash */
        dataHash?: (Uint8Array|null);

        /** Header validatorsHash */
        validatorsHash?: (Uint8Array|null);

        /** Header nextValidatorsHash */
        nextValidatorsHash?: (Uint8Array|null);

        /** Header consensusHash */
        consensusHash?: (Uint8Array|null);

        /** Header appHash */
        appHash?: (Uint8Array|null);

        /** Header lastResultsHash */
        lastResultsHash?: (Uint8Array|null);

        /** Header evidenceHash */
        evidenceHash?: (Uint8Array|null);

        /** Header proposerAddress */
        proposerAddress?: (Uint8Array|null);
    }

    /** Represents a Header. */
    class Header implements IHeader {

        /**
         * Constructs a new Header.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IHeader);

        /** Header version. */
        public version?: (types.IVersion|null);

        /** Header chainId. */
        public chainId: string;

        /** Header height. */
        public height: (number|Long);

        /** Header time. */
        public time?: (google.protobuf.ITimestamp|null);

        /** Header numTxs. */
        public numTxs: (number|Long);

        /** Header totalTxs. */
        public totalTxs: (number|Long);

        /** Header lastBlockId. */
        public lastBlockId?: (types.IBlockID|null);

        /** Header lastCommitHash. */
        public lastCommitHash: Uint8Array;

        /** Header dataHash. */
        public dataHash: Uint8Array;

        /** Header validatorsHash. */
        public validatorsHash: Uint8Array;

        /** Header nextValidatorsHash. */
        public nextValidatorsHash: Uint8Array;

        /** Header consensusHash. */
        public consensusHash: Uint8Array;

        /** Header appHash. */
        public appHash: Uint8Array;

        /** Header lastResultsHash. */
        public lastResultsHash: Uint8Array;

        /** Header evidenceHash. */
        public evidenceHash: Uint8Array;

        /** Header proposerAddress. */
        public proposerAddress: Uint8Array;

        /**
         * Creates a new Header instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Header instance
         */
        public static create(properties?: types.IHeader): types.Header;

        /**
         * Encodes the specified Header message. Does not implicitly {@link types.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@link types.Header.verify|verify} messages.
         * @param message Header message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Header;

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Header;

        /**
         * Verifies a Header message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Header
         */
        public static fromObject(object: { [k: string]: any }): types.Header;

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @param message Header
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Header, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Header to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Version. */
    interface IVersion {

        /** Version Block */
        Block?: (number|Long|null);

        /** Version App */
        App?: (number|Long|null);
    }

    /** Represents a Version. */
    class Version implements IVersion {

        /**
         * Constructs a new Version.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVersion);

        /** Version Block. */
        public Block: (number|Long);

        /** Version App. */
        public App: (number|Long);

        /**
         * Creates a new Version instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Version instance
         */
        public static create(properties?: types.IVersion): types.Version;

        /**
         * Encodes the specified Version message. Does not implicitly {@link types.Version.verify|verify} messages.
         * @param message Version message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Version message, length delimited. Does not implicitly {@link types.Version.verify|verify} messages.
         * @param message Version message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVersion, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Version message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Version;

        /**
         * Decodes a Version message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Version
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Version;

        /**
         * Verifies a Version message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Version message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Version
         */
        public static fromObject(object: { [k: string]: any }): types.Version;

        /**
         * Creates a plain object from a Version message. Also converts values to other types if specified.
         * @param message Version
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Version, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Version to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BlockID. */
    interface IBlockID {

        /** BlockID hash */
        hash?: (Uint8Array|null);

        /** BlockID partsHeader */
        partsHeader?: (types.IPartSetHeader|null);
    }

    /** Represents a BlockID. */
    class BlockID implements IBlockID {

        /**
         * Constructs a new BlockID.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IBlockID);

        /** BlockID hash. */
        public hash: Uint8Array;

        /** BlockID partsHeader. */
        public partsHeader?: (types.IPartSetHeader|null);

        /**
         * Creates a new BlockID instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BlockID instance
         */
        public static create(properties?: types.IBlockID): types.BlockID;

        /**
         * Encodes the specified BlockID message. Does not implicitly {@link types.BlockID.verify|verify} messages.
         * @param message BlockID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BlockID message, length delimited. Does not implicitly {@link types.BlockID.verify|verify} messages.
         * @param message BlockID message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IBlockID, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BlockID message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BlockID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.BlockID;

        /**
         * Decodes a BlockID message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BlockID
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.BlockID;

        /**
         * Verifies a BlockID message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BlockID message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BlockID
         */
        public static fromObject(object: { [k: string]: any }): types.BlockID;

        /**
         * Creates a plain object from a BlockID message. Also converts values to other types if specified.
         * @param message BlockID
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.BlockID, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BlockID to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PartSetHeader. */
    interface IPartSetHeader {

        /** PartSetHeader total */
        total?: (number|null);

        /** PartSetHeader hash */
        hash?: (Uint8Array|null);
    }

    /** Represents a PartSetHeader. */
    class PartSetHeader implements IPartSetHeader {

        /**
         * Constructs a new PartSetHeader.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPartSetHeader);

        /** PartSetHeader total. */
        public total: number;

        /** PartSetHeader hash. */
        public hash: Uint8Array;

        /**
         * Creates a new PartSetHeader instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PartSetHeader instance
         */
        public static create(properties?: types.IPartSetHeader): types.PartSetHeader;

        /**
         * Encodes the specified PartSetHeader message. Does not implicitly {@link types.PartSetHeader.verify|verify} messages.
         * @param message PartSetHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PartSetHeader message, length delimited. Does not implicitly {@link types.PartSetHeader.verify|verify} messages.
         * @param message PartSetHeader message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPartSetHeader, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PartSetHeader message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PartSetHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PartSetHeader;

        /**
         * Decodes a PartSetHeader message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PartSetHeader
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PartSetHeader;

        /**
         * Verifies a PartSetHeader message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PartSetHeader message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PartSetHeader
         */
        public static fromObject(object: { [k: string]: any }): types.PartSetHeader;

        /**
         * Creates a plain object from a PartSetHeader message. Also converts values to other types if specified.
         * @param message PartSetHeader
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PartSetHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PartSetHeader to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Validator. */
    interface IValidator {

        /** Validator address */
        address?: (Uint8Array|null);

        /** Validator power */
        power?: (number|Long|null);
    }

    /** Represents a Validator. */
    class Validator implements IValidator {

        /**
         * Constructs a new Validator.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IValidator);

        /** Validator address. */
        public address: Uint8Array;

        /** Validator power. */
        public power: (number|Long);

        /**
         * Creates a new Validator instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Validator instance
         */
        public static create(properties?: types.IValidator): types.Validator;

        /**
         * Encodes the specified Validator message. Does not implicitly {@link types.Validator.verify|verify} messages.
         * @param message Validator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Validator message, length delimited. Does not implicitly {@link types.Validator.verify|verify} messages.
         * @param message Validator message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IValidator, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Validator message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Validator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Validator;

        /**
         * Decodes a Validator message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Validator
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Validator;

        /**
         * Verifies a Validator message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Validator message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Validator
         */
        public static fromObject(object: { [k: string]: any }): types.Validator;

        /**
         * Creates a plain object from a Validator message. Also converts values to other types if specified.
         * @param message Validator
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Validator, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Validator to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ValidatorUpdate. */
    interface IValidatorUpdate {

        /** ValidatorUpdate pubKey */
        pubKey?: (types.IPubKey|null);

        /** ValidatorUpdate power */
        power?: (number|Long|null);
    }

    /** Represents a ValidatorUpdate. */
    class ValidatorUpdate implements IValidatorUpdate {

        /**
         * Constructs a new ValidatorUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IValidatorUpdate);

        /** ValidatorUpdate pubKey. */
        public pubKey?: (types.IPubKey|null);

        /** ValidatorUpdate power. */
        public power: (number|Long);

        /**
         * Creates a new ValidatorUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ValidatorUpdate instance
         */
        public static create(properties?: types.IValidatorUpdate): types.ValidatorUpdate;

        /**
         * Encodes the specified ValidatorUpdate message. Does not implicitly {@link types.ValidatorUpdate.verify|verify} messages.
         * @param message ValidatorUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ValidatorUpdate message, length delimited. Does not implicitly {@link types.ValidatorUpdate.verify|verify} messages.
         * @param message ValidatorUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IValidatorUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ValidatorUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ValidatorUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.ValidatorUpdate;

        /**
         * Decodes a ValidatorUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ValidatorUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.ValidatorUpdate;

        /**
         * Verifies a ValidatorUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ValidatorUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ValidatorUpdate
         */
        public static fromObject(object: { [k: string]: any }): types.ValidatorUpdate;

        /**
         * Creates a plain object from a ValidatorUpdate message. Also converts values to other types if specified.
         * @param message ValidatorUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.ValidatorUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ValidatorUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VoteInfo. */
    interface IVoteInfo {

        /** VoteInfo validator */
        validator?: (types.IValidator|null);

        /** VoteInfo signedLastBlock */
        signedLastBlock?: (boolean|null);
    }

    /** Represents a VoteInfo. */
    class VoteInfo implements IVoteInfo {

        /**
         * Constructs a new VoteInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IVoteInfo);

        /** VoteInfo validator. */
        public validator?: (types.IValidator|null);

        /** VoteInfo signedLastBlock. */
        public signedLastBlock: boolean;

        /**
         * Creates a new VoteInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VoteInfo instance
         */
        public static create(properties?: types.IVoteInfo): types.VoteInfo;

        /**
         * Encodes the specified VoteInfo message. Does not implicitly {@link types.VoteInfo.verify|verify} messages.
         * @param message VoteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VoteInfo message, length delimited. Does not implicitly {@link types.VoteInfo.verify|verify} messages.
         * @param message VoteInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IVoteInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VoteInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VoteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.VoteInfo;

        /**
         * Decodes a VoteInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VoteInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.VoteInfo;

        /**
         * Verifies a VoteInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VoteInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VoteInfo
         */
        public static fromObject(object: { [k: string]: any }): types.VoteInfo;

        /**
         * Creates a plain object from a VoteInfo message. Also converts values to other types if specified.
         * @param message VoteInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.VoteInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VoteInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PubKey. */
    interface IPubKey {

        /** PubKey type */
        type?: (string|null);

        /** PubKey data */
        data?: (Uint8Array|null);
    }

    /** Represents a PubKey. */
    class PubKey implements IPubKey {

        /**
         * Constructs a new PubKey.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IPubKey);

        /** PubKey type. */
        public type: string;

        /** PubKey data. */
        public data: Uint8Array;

        /**
         * Creates a new PubKey instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PubKey instance
         */
        public static create(properties?: types.IPubKey): types.PubKey;

        /**
         * Encodes the specified PubKey message. Does not implicitly {@link types.PubKey.verify|verify} messages.
         * @param message PubKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IPubKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PubKey message, length delimited. Does not implicitly {@link types.PubKey.verify|verify} messages.
         * @param message PubKey message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IPubKey, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PubKey message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PubKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.PubKey;

        /**
         * Decodes a PubKey message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PubKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.PubKey;

        /**
         * Verifies a PubKey message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PubKey message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PubKey
         */
        public static fromObject(object: { [k: string]: any }): types.PubKey;

        /**
         * Creates a plain object from a PubKey message. Also converts values to other types if specified.
         * @param message PubKey
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.PubKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PubKey to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Evidence. */
    interface IEvidence {

        /** Evidence type */
        type?: (string|null);

        /** Evidence validator */
        validator?: (types.IValidator|null);

        /** Evidence height */
        height?: (number|Long|null);

        /** Evidence time */
        time?: (google.protobuf.ITimestamp|null);

        /** Evidence totalVotingPower */
        totalVotingPower?: (number|Long|null);
    }

    /** Represents an Evidence. */
    class Evidence implements IEvidence {

        /**
         * Constructs a new Evidence.
         * @param [properties] Properties to set
         */
        constructor(properties?: types.IEvidence);

        /** Evidence type. */
        public type: string;

        /** Evidence validator. */
        public validator?: (types.IValidator|null);

        /** Evidence height. */
        public height: (number|Long);

        /** Evidence time. */
        public time?: (google.protobuf.ITimestamp|null);

        /** Evidence totalVotingPower. */
        public totalVotingPower: (number|Long);

        /**
         * Creates a new Evidence instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Evidence instance
         */
        public static create(properties?: types.IEvidence): types.Evidence;

        /**
         * Encodes the specified Evidence message. Does not implicitly {@link types.Evidence.verify|verify} messages.
         * @param message Evidence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: types.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Evidence message, length delimited. Does not implicitly {@link types.Evidence.verify|verify} messages.
         * @param message Evidence message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: types.IEvidence, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Evidence message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Evidence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.Evidence;

        /**
         * Decodes an Evidence message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Evidence
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.Evidence;

        /**
         * Verifies an Evidence message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Evidence message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Evidence
         */
        public static fromObject(object: { [k: string]: any }): types.Evidence;

        /**
         * Creates a plain object from an Evidence message. Also converts values to other types if specified.
         * @param message Evidence
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: types.Evidence, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Evidence to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a ABCIApplication */
    class ABCIApplication extends $protobuf.rpc.Service {

        /**
         * Constructs a new ABCIApplication service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new ABCIApplication service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): ABCIApplication;

        /**
         * Calls Echo.
         * @param request RequestEcho message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseEcho
         */
        public echo(request: types.IRequestEcho, callback: types.ABCIApplication.EchoCallback): void;

        /**
         * Calls Echo.
         * @param request RequestEcho message or plain object
         * @returns Promise
         */
        public echo(request: types.IRequestEcho): Promise<types.ResponseEcho>;

        /**
         * Calls Flush.
         * @param request RequestFlush message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseFlush
         */
        public flush(request: types.IRequestFlush, callback: types.ABCIApplication.FlushCallback): void;

        /**
         * Calls Flush.
         * @param request RequestFlush message or plain object
         * @returns Promise
         */
        public flush(request: types.IRequestFlush): Promise<types.ResponseFlush>;

        /**
         * Calls Info.
         * @param request RequestInfo message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseInfo
         */
        public info(request: types.IRequestInfo, callback: types.ABCIApplication.InfoCallback): void;

        /**
         * Calls Info.
         * @param request RequestInfo message or plain object
         * @returns Promise
         */
        public info(request: types.IRequestInfo): Promise<types.ResponseInfo>;

        /**
         * Calls SetOption.
         * @param request RequestSetOption message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseSetOption
         */
        public setOption(request: types.IRequestSetOption, callback: types.ABCIApplication.SetOptionCallback): void;

        /**
         * Calls SetOption.
         * @param request RequestSetOption message or plain object
         * @returns Promise
         */
        public setOption(request: types.IRequestSetOption): Promise<types.ResponseSetOption>;

        /**
         * Calls DeliverTx.
         * @param request RequestDeliverTx message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseDeliverTx
         */
        public deliverTx(request: types.IRequestDeliverTx, callback: types.ABCIApplication.DeliverTxCallback): void;

        /**
         * Calls DeliverTx.
         * @param request RequestDeliverTx message or plain object
         * @returns Promise
         */
        public deliverTx(request: types.IRequestDeliverTx): Promise<types.ResponseDeliverTx>;

        /**
         * Calls CheckTx.
         * @param request RequestCheckTx message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseCheckTx
         */
        public checkTx(request: types.IRequestCheckTx, callback: types.ABCIApplication.CheckTxCallback): void;

        /**
         * Calls CheckTx.
         * @param request RequestCheckTx message or plain object
         * @returns Promise
         */
        public checkTx(request: types.IRequestCheckTx): Promise<types.ResponseCheckTx>;

        /**
         * Calls Query.
         * @param request RequestQuery message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseQuery
         */
        public query(request: types.IRequestQuery, callback: types.ABCIApplication.QueryCallback): void;

        /**
         * Calls Query.
         * @param request RequestQuery message or plain object
         * @returns Promise
         */
        public query(request: types.IRequestQuery): Promise<types.ResponseQuery>;

        /**
         * Calls Commit.
         * @param request RequestCommit message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseCommit
         */
        public commit(request: types.IRequestCommit, callback: types.ABCIApplication.CommitCallback): void;

        /**
         * Calls Commit.
         * @param request RequestCommit message or plain object
         * @returns Promise
         */
        public commit(request: types.IRequestCommit): Promise<types.ResponseCommit>;

        /**
         * Calls InitChain.
         * @param request RequestInitChain message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseInitChain
         */
        public initChain(request: types.IRequestInitChain, callback: types.ABCIApplication.InitChainCallback): void;

        /**
         * Calls InitChain.
         * @param request RequestInitChain message or plain object
         * @returns Promise
         */
        public initChain(request: types.IRequestInitChain): Promise<types.ResponseInitChain>;

        /**
         * Calls BeginBlock.
         * @param request RequestBeginBlock message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseBeginBlock
         */
        public beginBlock(request: types.IRequestBeginBlock, callback: types.ABCIApplication.BeginBlockCallback): void;

        /**
         * Calls BeginBlock.
         * @param request RequestBeginBlock message or plain object
         * @returns Promise
         */
        public beginBlock(request: types.IRequestBeginBlock): Promise<types.ResponseBeginBlock>;

        /**
         * Calls EndBlock.
         * @param request RequestEndBlock message or plain object
         * @param callback Node-style callback called with the error, if any, and ResponseEndBlock
         */
        public endBlock(request: types.IRequestEndBlock, callback: types.ABCIApplication.EndBlockCallback): void;

        /**
         * Calls EndBlock.
         * @param request RequestEndBlock message or plain object
         * @returns Promise
         */
        public endBlock(request: types.IRequestEndBlock): Promise<types.ResponseEndBlock>;
    }

    namespace ABCIApplication {

        /**
         * Callback as used by {@link types.ABCIApplication#echo}.
         * @param error Error, if any
         * @param [response] ResponseEcho
         */
        type EchoCallback = (error: (Error|null), response?: types.ResponseEcho) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#flush}.
         * @param error Error, if any
         * @param [response] ResponseFlush
         */
        type FlushCallback = (error: (Error|null), response?: types.ResponseFlush) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#info}.
         * @param error Error, if any
         * @param [response] ResponseInfo
         */
        type InfoCallback = (error: (Error|null), response?: types.ResponseInfo) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#setOption}.
         * @param error Error, if any
         * @param [response] ResponseSetOption
         */
        type SetOptionCallback = (error: (Error|null), response?: types.ResponseSetOption) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#deliverTx}.
         * @param error Error, if any
         * @param [response] ResponseDeliverTx
         */
        type DeliverTxCallback = (error: (Error|null), response?: types.ResponseDeliverTx) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#checkTx}.
         * @param error Error, if any
         * @param [response] ResponseCheckTx
         */
        type CheckTxCallback = (error: (Error|null), response?: types.ResponseCheckTx) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#query}.
         * @param error Error, if any
         * @param [response] ResponseQuery
         */
        type QueryCallback = (error: (Error|null), response?: types.ResponseQuery) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#commit}.
         * @param error Error, if any
         * @param [response] ResponseCommit
         */
        type CommitCallback = (error: (Error|null), response?: types.ResponseCommit) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#initChain}.
         * @param error Error, if any
         * @param [response] ResponseInitChain
         */
        type InitChainCallback = (error: (Error|null), response?: types.ResponseInitChain) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#beginBlock}.
         * @param error Error, if any
         * @param [response] ResponseBeginBlock
         */
        type BeginBlockCallback = (error: (Error|null), response?: types.ResponseBeginBlock) => void;

        /**
         * Callback as used by {@link types.ABCIApplication#endBlock}.
         * @param error Error, if any
         * @param [response] ResponseEndBlock
         */
        type EndBlockCallback = (error: (Error|null), response?: types.ResponseEndBlock) => void;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .gogoproto.goprotoGettersAll */
            ".gogoproto.goprotoGettersAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoEnumPrefixAll */
            ".gogoproto.goprotoEnumPrefixAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoStringerAll */
            ".gogoproto.goprotoStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.verboseEqualAll */
            ".gogoproto.verboseEqualAll"?: (boolean|null);

            /** FileOptions .gogoproto.faceAll */
            ".gogoproto.faceAll"?: (boolean|null);

            /** FileOptions .gogoproto.gostringAll */
            ".gogoproto.gostringAll"?: (boolean|null);

            /** FileOptions .gogoproto.populateAll */
            ".gogoproto.populateAll"?: (boolean|null);

            /** FileOptions .gogoproto.stringerAll */
            ".gogoproto.stringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.onlyoneAll */
            ".gogoproto.onlyoneAll"?: (boolean|null);

            /** FileOptions .gogoproto.equalAll */
            ".gogoproto.equalAll"?: (boolean|null);

            /** FileOptions .gogoproto.descriptionAll */
            ".gogoproto.descriptionAll"?: (boolean|null);

            /** FileOptions .gogoproto.testgenAll */
            ".gogoproto.testgenAll"?: (boolean|null);

            /** FileOptions .gogoproto.benchgenAll */
            ".gogoproto.benchgenAll"?: (boolean|null);

            /** FileOptions .gogoproto.marshalerAll */
            ".gogoproto.marshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unmarshalerAll */
            ".gogoproto.unmarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.stableMarshalerAll */
            ".gogoproto.stableMarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.sizerAll */
            ".gogoproto.sizerAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoEnumStringerAll */
            ".gogoproto.goprotoEnumStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.enumStringerAll */
            ".gogoproto.enumStringerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unsafeMarshalerAll */
            ".gogoproto.unsafeMarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.unsafeUnmarshalerAll */
            ".gogoproto.unsafeUnmarshalerAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoExtensionsMapAll */
            ".gogoproto.goprotoExtensionsMapAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoUnrecognizedAll */
            ".gogoproto.goprotoUnrecognizedAll"?: (boolean|null);

            /** FileOptions .gogoproto.gogoprotoImport */
            ".gogoproto.gogoprotoImport"?: (boolean|null);

            /** FileOptions .gogoproto.protosizerAll */
            ".gogoproto.protosizerAll"?: (boolean|null);

            /** FileOptions .gogoproto.compareAll */
            ".gogoproto.compareAll"?: (boolean|null);

            /** FileOptions .gogoproto.typedeclAll */
            ".gogoproto.typedeclAll"?: (boolean|null);

            /** FileOptions .gogoproto.enumdeclAll */
            ".gogoproto.enumdeclAll"?: (boolean|null);

            /** FileOptions .gogoproto.goprotoRegistration */
            ".gogoproto.goprotoRegistration"?: (boolean|null);

            /** FileOptions .gogoproto.messagenameAll */
            ".gogoproto.messagenameAll"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .gogoproto.goprotoGetters */
            ".gogoproto.goprotoGetters"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoStringer */
            ".gogoproto.goprotoStringer"?: (boolean|null);

            /** MessageOptions .gogoproto.verboseEqual */
            ".gogoproto.verboseEqual"?: (boolean|null);

            /** MessageOptions .gogoproto.face */
            ".gogoproto.face"?: (boolean|null);

            /** MessageOptions .gogoproto.gostring */
            ".gogoproto.gostring"?: (boolean|null);

            /** MessageOptions .gogoproto.populate */
            ".gogoproto.populate"?: (boolean|null);

            /** MessageOptions .gogoproto.stringer */
            ".gogoproto.stringer"?: (boolean|null);

            /** MessageOptions .gogoproto.onlyone */
            ".gogoproto.onlyone"?: (boolean|null);

            /** MessageOptions .gogoproto.equal */
            ".gogoproto.equal"?: (boolean|null);

            /** MessageOptions .gogoproto.description */
            ".gogoproto.description"?: (boolean|null);

            /** MessageOptions .gogoproto.testgen */
            ".gogoproto.testgen"?: (boolean|null);

            /** MessageOptions .gogoproto.benchgen */
            ".gogoproto.benchgen"?: (boolean|null);

            /** MessageOptions .gogoproto.marshaler */
            ".gogoproto.marshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unmarshaler */
            ".gogoproto.unmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.stableMarshaler */
            ".gogoproto.stableMarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.sizer */
            ".gogoproto.sizer"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafeMarshaler */
            ".gogoproto.unsafeMarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.unsafeUnmarshaler */
            ".gogoproto.unsafeUnmarshaler"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoExtensionsMap */
            ".gogoproto.goprotoExtensionsMap"?: (boolean|null);

            /** MessageOptions .gogoproto.goprotoUnrecognized */
            ".gogoproto.goprotoUnrecognized"?: (boolean|null);

            /** MessageOptions .gogoproto.protosizer */
            ".gogoproto.protosizer"?: (boolean|null);

            /** MessageOptions .gogoproto.compare */
            ".gogoproto.compare"?: (boolean|null);

            /** MessageOptions .gogoproto.typedecl */
            ".gogoproto.typedecl"?: (boolean|null);

            /** MessageOptions .gogoproto.messagename */
            ".gogoproto.messagename"?: (boolean|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .gogoproto.nullable */
            ".gogoproto.nullable"?: (boolean|null);

            /** FieldOptions .gogoproto.embed */
            ".gogoproto.embed"?: (boolean|null);

            /** FieldOptions .gogoproto.customtype */
            ".gogoproto.customtype"?: (string|null);

            /** FieldOptions .gogoproto.customname */
            ".gogoproto.customname"?: (string|null);

            /** FieldOptions .gogoproto.jsontag */
            ".gogoproto.jsontag"?: (string|null);

            /** FieldOptions .gogoproto.moretags */
            ".gogoproto.moretags"?: (string|null);

            /** FieldOptions .gogoproto.casttype */
            ".gogoproto.casttype"?: (string|null);

            /** FieldOptions .gogoproto.castkey */
            ".gogoproto.castkey"?: (string|null);

            /** FieldOptions .gogoproto.castvalue */
            ".gogoproto.castvalue"?: (string|null);

            /** FieldOptions .gogoproto.stdtime */
            ".gogoproto.stdtime"?: (boolean|null);

            /** FieldOptions .gogoproto.stdduration */
            ".gogoproto.stdduration"?: (boolean|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .gogoproto.goprotoEnumPrefix */
            ".gogoproto.goprotoEnumPrefix"?: (boolean|null);

            /** EnumOptions .gogoproto.goprotoEnumStringer */
            ".gogoproto.goprotoEnumStringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enumStringer */
            ".gogoproto.enumStringer"?: (boolean|null);

            /** EnumOptions .gogoproto.enumCustomname */
            ".gogoproto.enumCustomname"?: (string|null);

            /** EnumOptions .gogoproto.enumdecl */
            ".gogoproto.enumdecl"?: (boolean|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .gogoproto.enumvalueCustomname */
            ".gogoproto.enumvalueCustomname"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace merkle. */
export namespace merkle {

    /** Properties of a ProofOp. */
    interface IProofOp {

        /** ProofOp type */
        type?: (string|null);

        /** ProofOp key */
        key?: (Uint8Array|null);

        /** ProofOp data */
        data?: (Uint8Array|null);
    }

    /** Represents a ProofOp. */
    class ProofOp implements IProofOp {

        /**
         * Constructs a new ProofOp.
         * @param [properties] Properties to set
         */
        constructor(properties?: merkle.IProofOp);

        /** ProofOp type. */
        public type: string;

        /** ProofOp key. */
        public key: Uint8Array;

        /** ProofOp data. */
        public data: Uint8Array;

        /**
         * Creates a new ProofOp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ProofOp instance
         */
        public static create(properties?: merkle.IProofOp): merkle.ProofOp;

        /**
         * Encodes the specified ProofOp message. Does not implicitly {@link merkle.ProofOp.verify|verify} messages.
         * @param message ProofOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: merkle.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ProofOp message, length delimited. Does not implicitly {@link merkle.ProofOp.verify|verify} messages.
         * @param message ProofOp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: merkle.IProofOp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ProofOp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ProofOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merkle.ProofOp;

        /**
         * Decodes a ProofOp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ProofOp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merkle.ProofOp;

        /**
         * Verifies a ProofOp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ProofOp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ProofOp
         */
        public static fromObject(object: { [k: string]: any }): merkle.ProofOp;

        /**
         * Creates a plain object from a ProofOp message. Also converts values to other types if specified.
         * @param message ProofOp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: merkle.ProofOp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ProofOp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Proof. */
    interface IProof {

        /** Proof ops */
        ops?: (merkle.IProofOp[]|null);
    }

    /** Represents a Proof. */
    class Proof implements IProof {

        /**
         * Constructs a new Proof.
         * @param [properties] Properties to set
         */
        constructor(properties?: merkle.IProof);

        /** Proof ops. */
        public ops: merkle.IProofOp[];

        /**
         * Creates a new Proof instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Proof instance
         */
        public static create(properties?: merkle.IProof): merkle.Proof;

        /**
         * Encodes the specified Proof message. Does not implicitly {@link merkle.Proof.verify|verify} messages.
         * @param message Proof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: merkle.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Proof message, length delimited. Does not implicitly {@link merkle.Proof.verify|verify} messages.
         * @param message Proof message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: merkle.IProof, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Proof message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Proof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): merkle.Proof;

        /**
         * Decodes a Proof message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Proof
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): merkle.Proof;

        /**
         * Verifies a Proof message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Proof message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Proof
         */
        public static fromObject(object: { [k: string]: any }): merkle.Proof;

        /**
         * Creates a plain object from a Proof message. Also converts values to other types if specified.
         * @param message Proof
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: merkle.Proof, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Proof to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace common. */
export namespace common {

    /** Properties of a KVPair. */
    interface IKVPair {

        /** KVPair key */
        key?: (Uint8Array|null);

        /** KVPair value */
        value?: (Uint8Array|null);
    }

    /** Represents a KVPair. */
    class KVPair implements IKVPair {

        /**
         * Constructs a new KVPair.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IKVPair);

        /** KVPair key. */
        public key: Uint8Array;

        /** KVPair value. */
        public value: Uint8Array;

        /**
         * Creates a new KVPair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KVPair instance
         */
        public static create(properties?: common.IKVPair): common.KVPair;

        /**
         * Encodes the specified KVPair message. Does not implicitly {@link common.KVPair.verify|verify} messages.
         * @param message KVPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IKVPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KVPair message, length delimited. Does not implicitly {@link common.KVPair.verify|verify} messages.
         * @param message KVPair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IKVPair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KVPair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KVPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.KVPair;

        /**
         * Decodes a KVPair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KVPair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.KVPair;

        /**
         * Verifies a KVPair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KVPair message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KVPair
         */
        public static fromObject(object: { [k: string]: any }): common.KVPair;

        /**
         * Creates a plain object from a KVPair message. Also converts values to other types if specified.
         * @param message KVPair
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.KVPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KVPair to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a KI64Pair. */
    interface IKI64Pair {

        /** KI64Pair key */
        key?: (Uint8Array|null);

        /** KI64Pair value */
        value?: (number|Long|null);
    }

    /** Represents a KI64Pair. */
    class KI64Pair implements IKI64Pair {

        /**
         * Constructs a new KI64Pair.
         * @param [properties] Properties to set
         */
        constructor(properties?: common.IKI64Pair);

        /** KI64Pair key. */
        public key: Uint8Array;

        /** KI64Pair value. */
        public value: (number|Long);

        /**
         * Creates a new KI64Pair instance using the specified properties.
         * @param [properties] Properties to set
         * @returns KI64Pair instance
         */
        public static create(properties?: common.IKI64Pair): common.KI64Pair;

        /**
         * Encodes the specified KI64Pair message. Does not implicitly {@link common.KI64Pair.verify|verify} messages.
         * @param message KI64Pair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: common.IKI64Pair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified KI64Pair message, length delimited. Does not implicitly {@link common.KI64Pair.verify|verify} messages.
         * @param message KI64Pair message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: common.IKI64Pair, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a KI64Pair message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns KI64Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): common.KI64Pair;

        /**
         * Decodes a KI64Pair message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns KI64Pair
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): common.KI64Pair;

        /**
         * Verifies a KI64Pair message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a KI64Pair message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns KI64Pair
         */
        public static fromObject(object: { [k: string]: any }): common.KI64Pair;

        /**
         * Creates a plain object from a KI64Pair message. Also converts values to other types if specified.
         * @param message KI64Pair
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: common.KI64Pair, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this KI64Pair to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
