/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Microservice = (function() {

    /**
     * Properties of a Microservice.
     * @exports IMicroservice
     * @interface IMicroservice
     * @property {string} [name] Microservice name
     * @property {string} [node] Microservice node
     */

    /**
     * Constructs a new Microservice.
     * @exports Microservice
     * @classdesc Represents a Microservice.
     * @constructor
     * @param {IMicroservice=} [properties] Properties to set
     */
    function Microservice(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Microservice name.
     * @member {string}name
     * @memberof Microservice
     * @instance
     */
    Microservice.prototype.name = "";

    /**
     * Microservice node.
     * @member {string}node
     * @memberof Microservice
     * @instance
     */
    Microservice.prototype.node = "";

    /**
     * Creates a new Microservice instance using the specified properties.
     * @function create
     * @memberof Microservice
     * @static
     * @param {IMicroservice=} [properties] Properties to set
     * @returns {Microservice} Microservice instance
     */
    Microservice.create = function create(properties) {
        return new Microservice(properties);
    };

    /**
     * Encodes the specified Microservice message. Does not implicitly {@link Microservice.verify|verify} messages.
     * @function encode
     * @memberof Microservice
     * @static
     * @param {IMicroservice} message Microservice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Microservice.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && message.hasOwnProperty("name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.node != null && message.hasOwnProperty("node"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.node);
        return writer;
    };

    /**
     * Encodes the specified Microservice message, length delimited. Does not implicitly {@link Microservice.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Microservice
     * @static
     * @param {IMicroservice} message Microservice message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Microservice.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Microservice message from the specified reader or buffer.
     * @function decode
     * @memberof Microservice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Microservice} Microservice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Microservice.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Microservice();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.name = reader.string();
                break;
            case 2:
                message.node = reader.string();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Microservice message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Microservice
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Microservice} Microservice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Microservice.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Microservice message.
     * @function verify
     * @memberof Microservice
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Microservice.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.node != null && message.hasOwnProperty("node"))
            if (!$util.isString(message.node))
                return "node: string expected";
        return null;
    };

    /**
     * Creates a Microservice message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Microservice
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Microservice} Microservice
     */
    Microservice.fromObject = function fromObject(object) {
        if (object instanceof $root.Microservice)
            return object;
        var message = new $root.Microservice();
        if (object.name != null)
            message.name = String(object.name);
        if (object.node != null)
            message.node = String(object.node);
        return message;
    };

    /**
     * Creates a plain object from a Microservice message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Microservice
     * @static
     * @param {Microservice} message Microservice
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Microservice.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.node = "";
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.node != null && message.hasOwnProperty("node"))
            object.node = message.node;
        return object;
    };

    /**
     * Converts this Microservice to JSON.
     * @function toJSON
     * @memberof Microservice
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Microservice.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Microservice;
})();

$root.MicroserviceList = (function() {

    /**
     * Properties of a MicroserviceList.
     * @exports IMicroserviceList
     * @interface IMicroserviceList
     * @property {Array.<IMicroservice>} [microservices] MicroserviceList microservices
     */

    /**
     * Constructs a new MicroserviceList.
     * @exports MicroserviceList
     * @classdesc Represents a MicroserviceList.
     * @constructor
     * @param {IMicroserviceList=} [properties] Properties to set
     */
    function MicroserviceList(properties) {
        this.microservices = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MicroserviceList microservices.
     * @member {Array.<IMicroservice>}microservices
     * @memberof MicroserviceList
     * @instance
     */
    MicroserviceList.prototype.microservices = $util.emptyArray;

    /**
     * Creates a new MicroserviceList instance using the specified properties.
     * @function create
     * @memberof MicroserviceList
     * @static
     * @param {IMicroserviceList=} [properties] Properties to set
     * @returns {MicroserviceList} MicroserviceList instance
     */
    MicroserviceList.create = function create(properties) {
        return new MicroserviceList(properties);
    };

    /**
     * Encodes the specified MicroserviceList message. Does not implicitly {@link MicroserviceList.verify|verify} messages.
     * @function encode
     * @memberof MicroserviceList
     * @static
     * @param {IMicroserviceList} message MicroserviceList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MicroserviceList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.microservices != null && message.microservices.length)
            for (var i = 0; i < message.microservices.length; ++i)
                $root.Microservice.encode(message.microservices[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MicroserviceList message, length delimited. Does not implicitly {@link MicroserviceList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MicroserviceList
     * @static
     * @param {IMicroserviceList} message MicroserviceList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MicroserviceList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MicroserviceList message from the specified reader or buffer.
     * @function decode
     * @memberof MicroserviceList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MicroserviceList} MicroserviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MicroserviceList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MicroserviceList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.microservices && message.microservices.length))
                    message.microservices = [];
                message.microservices.push($root.Microservice.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MicroserviceList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MicroserviceList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MicroserviceList} MicroserviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MicroserviceList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MicroserviceList message.
     * @function verify
     * @memberof MicroserviceList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MicroserviceList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.microservices != null && message.hasOwnProperty("microservices")) {
            if (!Array.isArray(message.microservices))
                return "microservices: array expected";
            for (var i = 0; i < message.microservices.length; ++i) {
                var error = $root.Microservice.verify(message.microservices[i]);
                if (error)
                    return "microservices." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MicroserviceList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MicroserviceList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MicroserviceList} MicroserviceList
     */
    MicroserviceList.fromObject = function fromObject(object) {
        if (object instanceof $root.MicroserviceList)
            return object;
        var message = new $root.MicroserviceList();
        if (object.microservices) {
            if (!Array.isArray(object.microservices))
                throw TypeError(".MicroserviceList.microservices: array expected");
            message.microservices = [];
            for (var i = 0; i < object.microservices.length; ++i) {
                if (typeof object.microservices[i] !== "object")
                    throw TypeError(".MicroserviceList.microservices: object expected");
                message.microservices[i] = $root.Microservice.fromObject(object.microservices[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MicroserviceList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MicroserviceList
     * @static
     * @param {MicroserviceList} message MicroserviceList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MicroserviceList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.microservices = [];
        if (message.microservices && message.microservices.length) {
            object.microservices = [];
            for (var j = 0; j < message.microservices.length; ++j)
                object.microservices[j] = $root.Microservice.toObject(message.microservices[j], options);
        }
        return object;
    };

    /**
     * Converts this MicroserviceList to JSON.
     * @function toJSON
     * @memberof MicroserviceList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MicroserviceList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MicroserviceList;
})();

module.exports = $root;
