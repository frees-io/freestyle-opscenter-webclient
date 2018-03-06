// package: 
// file: microservices.proto

import * as jspb from "google-protobuf";

export class Microservice extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getNode(): string;
  setNode(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Microservice.AsObject;
  static toObject(includeInstance: boolean, msg: Microservice): Microservice.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Microservice, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Microservice;
  static deserializeBinaryFromReader(message: Microservice, reader: jspb.BinaryReader): Microservice;
}

export namespace Microservice {
  export type AsObject = {
    name: string,
    node: string,
  }
}

export class MicroserviceList extends jspb.Message {
  clearMicroservicesList(): void;
  getMicroservicesList(): Array<Microservice>;
  setMicroservicesList(value: Array<Microservice>): void;
  addMicroservices(value?: Microservice, index?: number): Microservice;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MicroserviceList.AsObject;
  static toObject(includeInstance: boolean, msg: MicroserviceList): MicroserviceList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MicroserviceList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MicroserviceList;
  static deserializeBinaryFromReader(message: MicroserviceList, reader: jspb.BinaryReader): MicroserviceList;
}

export namespace MicroserviceList {
  export type AsObject = {
    microservicesList: Array<Microservice.AsObject>,
  }
}

