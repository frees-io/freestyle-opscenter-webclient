import * as $protobuf from "protobufjs";

/** Properties of a Microservice. */
export interface IMicroservice {

    /** Microservice name */
    name?: string;

    /** Microservice node */
    node?: string;
}

/** Represents a Microservice. */
export class Microservice {

    /**
     * Constructs a new Microservice.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMicroservice);

    /** Microservice name. */
    public name: string;

    /** Microservice node. */
    public node: string;

    /**
     * Creates a new Microservice instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Microservice instance
     */
    public static create(properties?: IMicroservice): Microservice;

    /**
     * Encodes the specified Microservice message. Does not implicitly {@link Microservice.verify|verify} messages.
     * @param message Microservice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMicroservice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Microservice message, length delimited. Does not implicitly {@link Microservice.verify|verify} messages.
     * @param message Microservice message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMicroservice, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Microservice message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Microservice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Microservice;

    /**
     * Decodes a Microservice message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Microservice
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Microservice;

    /**
     * Verifies a Microservice message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a Microservice message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Microservice
     */
    public static fromObject(object: { [k: string]: any }): Microservice;

    /**
     * Creates a plain object from a Microservice message. Also converts values to other types if specified.
     * @param message Microservice
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Microservice, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Microservice to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a MicroserviceList. */
export interface IMicroserviceList {

    /** MicroserviceList microservices */
    microservices?: IMicroservice[];
}

/** Represents a MicroserviceList. */
export class MicroserviceList {

    /**
     * Constructs a new MicroserviceList.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMicroserviceList);

    /** MicroserviceList microservices. */
    public microservices: IMicroservice[];

    /**
     * Creates a new MicroserviceList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MicroserviceList instance
     */
    public static create(properties?: IMicroserviceList): MicroserviceList;

    /**
     * Encodes the specified MicroserviceList message. Does not implicitly {@link MicroserviceList.verify|verify} messages.
     * @param message MicroserviceList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMicroserviceList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MicroserviceList message, length delimited. Does not implicitly {@link MicroserviceList.verify|verify} messages.
     * @param message MicroserviceList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMicroserviceList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MicroserviceList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MicroserviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MicroserviceList;

    /**
     * Decodes a MicroserviceList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MicroserviceList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MicroserviceList;

    /**
     * Verifies a MicroserviceList message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MicroserviceList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MicroserviceList
     */
    public static fromObject(object: { [k: string]: any }): MicroserviceList;

    /**
     * Creates a plain object from a MicroserviceList message. Also converts values to other types if specified.
     * @param message MicroserviceList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MicroserviceList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MicroserviceList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}
