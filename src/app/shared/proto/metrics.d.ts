import * as $protobuf from "protobufjs";

/** Properties of a Metric. */
export interface IMetric {

    /** Metric metric */
    metric?: string;

    /** Metric microservice */
    microservice?: string;

    /** Metric node */
    node?: string;

    /** Metric value */
    value?: number;

    /** Metric date */
    date?: (number|Long);
}

/** Represents a Metric. */
export class Metric {

    /**
     * Constructs a new Metric.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMetric);

    /** Metric metric. */
    public metric: string;

    /** Metric microservice. */
    public microservice: string;

    /** Metric node. */
    public node: string;

    /** Metric value. */
    public value: number;

    /** Metric date. */
    public date: (number|Long);

    /**
     * Creates a new Metric instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Metric instance
     */
    public static create(properties?: IMetric): Metric;

    /**
     * Encodes the specified Metric message. Does not implicitly {@link Metric.verify|verify} messages.
     * @param message Metric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Metric message, length delimited. Does not implicitly {@link Metric.verify|verify} messages.
     * @param message Metric message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMetric, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Metric message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Metric;

    /**
     * Decodes a Metric message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Metric
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Metric;

    /**
     * Verifies a Metric message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Metric message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Metric
     */
    public static fromObject(object: { [k: string]: any }): Metric;

    /**
     * Creates a plain object from a Metric message. Also converts values to other types if specified.
     * @param message Metric
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Metric, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Metric to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MetricsList. */
export interface IMetricsList {

    /** MetricsList metrics */
    metrics?: IMetric[];
}

/** Represents a MetricsList. */
export class MetricsList {

    /**
     * Constructs a new MetricsList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMetricsList);

    /** MetricsList metrics. */
    public metrics: IMetric[];

    /**
     * Creates a new MetricsList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MetricsList instance
     */
    public static create(properties?: IMetricsList): MetricsList;

    /**
     * Encodes the specified MetricsList message. Does not implicitly {@link MetricsList.verify|verify} messages.
     * @param message MetricsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMetricsList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MetricsList message, length delimited. Does not implicitly {@link MetricsList.verify|verify} messages.
     * @param message MetricsList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMetricsList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MetricsList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MetricsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MetricsList;

    /**
     * Decodes a MetricsList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MetricsList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MetricsList;

    /**
     * Verifies a MetricsList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MetricsList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MetricsList
     */
    public static fromObject(object: { [k: string]: any }): MetricsList;

    /**
     * Creates a plain object from a MetricsList message. Also converts values to other types if specified.
     * @param message MetricsList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MetricsList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MetricsList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
