/*eslint-disable block-scoped-var, no-redeclare, no-control-regex, no-prototype-builtins*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Metric = (function() {

    /**
     * Properties of a Metric.
     * @exports IMetric
     * @interface IMetric
     * @property {string} [metric] Metric metric
     * @property {string} [microservice] Metric microservice
     * @property {string} [node] Metric node
     * @property {number} [value] Metric value
     * @property {number|Long} [date] Metric date
     */

    /**
     * Constructs a new Metric.
     * @exports Metric
     * @classdesc Represents a Metric.
     * @constructor
     * @param {IMetric=} [properties] Properties to set
     */
    function Metric(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Metric metric.
     * @member {string}metric
     * @memberof Metric
     * @instance
     */
    Metric.prototype.metric = "";

    /**
     * Metric microservice.
     * @member {string}microservice
     * @memberof Metric
     * @instance
     */
    Metric.prototype.microservice = "";

    /**
     * Metric node.
     * @member {string}node
     * @memberof Metric
     * @instance
     */
    Metric.prototype.node = "";

    /**
     * Metric value.
     * @member {number}value
     * @memberof Metric
     * @instance
     */
    Metric.prototype.value = 0;

    /**
     * Metric date.
     * @member {number|Long}date
     * @memberof Metric
     * @instance
     */
    Metric.prototype.date = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new Metric instance using the specified properties.
     * @function create
     * @memberof Metric
     * @static
     * @param {IMetric=} [properties] Properties to set
     * @returns {Metric} Metric instance
     */
    Metric.create = function create(properties) {
        return new Metric(properties);
    };

    /**
     * Encodes the specified Metric message. Does not implicitly {@link Metric.verify|verify} messages.
     * @function encode
     * @memberof Metric
     * @static
     * @param {IMetric} message Metric message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Metric.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.metric != null && message.hasOwnProperty("metric"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.metric);
        if (message.microservice != null && message.hasOwnProperty("microservice"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.microservice);
        if (message.node != null && message.hasOwnProperty("node"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.node);
        if (message.value != null && message.hasOwnProperty("value"))
            writer.uint32(/* id 4, wireType 5 =*/37).float(message.value);
        if (message.date != null && message.hasOwnProperty("date"))
            writer.uint32(/* id 5, wireType 0 =*/40).int64(message.date);
        return writer;
    };

    /**
     * Encodes the specified Metric message, length delimited. Does not implicitly {@link Metric.verify|verify} messages.
     * @function encodeDelimited
     * @memberof Metric
     * @static
     * @param {IMetric} message Metric message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    Metric.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a Metric message from the specified reader or buffer.
     * @function decode
     * @memberof Metric
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {Metric} Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Metric.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Metric();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                message.metric = reader.string();
                break;
            case 2:
                message.microservice = reader.string();
                break;
            case 3:
                message.node = reader.string();
                break;
            case 4:
                message.value = reader.float();
                break;
            case 5:
                message.date = reader.int64();
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a Metric message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof Metric
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {Metric} Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    Metric.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a Metric message.
     * @function verify
     * @memberof Metric
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    Metric.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.metric != null && message.hasOwnProperty("metric"))
            if (!$util.isString(message.metric))
                return "metric: string expected";
        if (message.microservice != null && message.hasOwnProperty("microservice"))
            if (!$util.isString(message.microservice))
                return "microservice: string expected";
        if (message.node != null && message.hasOwnProperty("node"))
            if (!$util.isString(message.node))
                return "node: string expected";
        if (message.value != null && message.hasOwnProperty("value"))
            if (typeof message.value !== "number")
                return "value: number expected";
        if (message.date != null && message.hasOwnProperty("date"))
            if (!$util.isInteger(message.date) && !(message.date && $util.isInteger(message.date.low) && $util.isInteger(message.date.high)))
                return "date: integer|Long expected";
        return null;
    };

    /**
     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof Metric
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {Metric} Metric
     */
    Metric.fromObject = function fromObject(object) {
        if (object instanceof $root.Metric)
            return object;
        var message = new $root.Metric();
        if (object.metric != null)
            message.metric = String(object.metric);
        if (object.microservice != null)
            message.microservice = String(object.microservice);
        if (object.node != null)
            message.node = String(object.node);
        if (object.value != null)
            message.value = Number(object.value);
        if (object.date != null)
            if ($util.Long)
                (message.date = $util.Long.fromValue(object.date)).unsigned = false;
            else if (typeof object.date === "string")
                message.date = parseInt(object.date, 10);
            else if (typeof object.date === "number")
                message.date = object.date;
            else if (typeof object.date === "object")
                message.date = new $util.LongBits(object.date.low >>> 0, object.date.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a Metric message. Also converts values to other types if specified.
     * @function toObject
     * @memberof Metric
     * @static
     * @param {Metric} message Metric
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    Metric.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.metric = "";
            object.microservice = "";
            object.node = "";
            object.value = 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.date = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.date = options.longs === String ? "0" : 0;
        }
        if (message.metric != null && message.hasOwnProperty("metric"))
            object.metric = message.metric;
        if (message.microservice != null && message.hasOwnProperty("microservice"))
            object.microservice = message.microservice;
        if (message.node != null && message.hasOwnProperty("node"))
            object.node = message.node;
        if (message.value != null && message.hasOwnProperty("value"))
            object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
        if (message.date != null && message.hasOwnProperty("date"))
            if (typeof message.date === "number")
                object.date = options.longs === String ? String(message.date) : message.date;
            else
                object.date = options.longs === String ? $util.Long.prototype.toString.call(message.date) : options.longs === Number ? new $util.LongBits(message.date.low >>> 0, message.date.high >>> 0).toNumber() : message.date;
        return object;
    };

    /**
     * Converts this Metric to JSON.
     * @function toJSON
     * @memberof Metric
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    Metric.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return Metric;
})();

$root.MetricsList = (function() {

    /**
     * Properties of a MetricsList.
     * @exports IMetricsList
     * @interface IMetricsList
     * @property {Array.<IMetric>} [metrics] MetricsList metrics
     */

    /**
     * Constructs a new MetricsList.
     * @exports MetricsList
     * @classdesc Represents a MetricsList.
     * @constructor
     * @param {IMetricsList=} [properties] Properties to set
     */
    function MetricsList(properties) {
        this.metrics = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * MetricsList metrics.
     * @member {Array.<IMetric>}metrics
     * @memberof MetricsList
     * @instance
     */
    MetricsList.prototype.metrics = $util.emptyArray;

    /**
     * Creates a new MetricsList instance using the specified properties.
     * @function create
     * @memberof MetricsList
     * @static
     * @param {IMetricsList=} [properties] Properties to set
     * @returns {MetricsList} MetricsList instance
     */
    MetricsList.create = function create(properties) {
        return new MetricsList(properties);
    };

    /**
     * Encodes the specified MetricsList message. Does not implicitly {@link MetricsList.verify|verify} messages.
     * @function encode
     * @memberof MetricsList
     * @static
     * @param {IMetricsList} message MetricsList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetricsList.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.metrics != null && message.metrics.length)
            for (var i = 0; i < message.metrics.length; ++i)
                $root.Metric.encode(message.metrics[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified MetricsList message, length delimited. Does not implicitly {@link MetricsList.verify|verify} messages.
     * @function encodeDelimited
     * @memberof MetricsList
     * @static
     * @param {IMetricsList} message MetricsList message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    MetricsList.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a MetricsList message from the specified reader or buffer.
     * @function decode
     * @memberof MetricsList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {MetricsList} MetricsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetricsList.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MetricsList();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1:
                if (!(message.metrics && message.metrics.length))
                    message.metrics = [];
                message.metrics.push($root.Metric.decode(reader, reader.uint32()));
                break;
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a MetricsList message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof MetricsList
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {MetricsList} MetricsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    MetricsList.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a MetricsList message.
     * @function verify
     * @memberof MetricsList
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    MetricsList.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.metrics != null && message.hasOwnProperty("metrics")) {
            if (!Array.isArray(message.metrics))
                return "metrics: array expected";
            for (var i = 0; i < message.metrics.length; ++i) {
                var error = $root.Metric.verify(message.metrics[i]);
                if (error)
                    return "metrics." + error;
            }
        }
        return null;
    };

    /**
     * Creates a MetricsList message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof MetricsList
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {MetricsList} MetricsList
     */
    MetricsList.fromObject = function fromObject(object) {
        if (object instanceof $root.MetricsList)
            return object;
        var message = new $root.MetricsList();
        if (object.metrics) {
            if (!Array.isArray(object.metrics))
                throw TypeError(".MetricsList.metrics: array expected");
            message.metrics = [];
            for (var i = 0; i < object.metrics.length; ++i) {
                if (typeof object.metrics[i] !== "object")
                    throw TypeError(".MetricsList.metrics: object expected");
                message.metrics[i] = $root.Metric.fromObject(object.metrics[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a MetricsList message. Also converts values to other types if specified.
     * @function toObject
     * @memberof MetricsList
     * @static
     * @param {MetricsList} message MetricsList
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    MetricsList.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.metrics = [];
        if (message.metrics && message.metrics.length) {
            object.metrics = [];
            for (var j = 0; j < message.metrics.length; ++j)
                object.metrics[j] = $root.Metric.toObject(message.metrics[j], options);
        }
        return object;
    };

    /**
     * Converts this MetricsList to JSON.
     * @function toJSON
     * @memberof MetricsList
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    MetricsList.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    return MetricsList;
})();

module.exports = $root;
