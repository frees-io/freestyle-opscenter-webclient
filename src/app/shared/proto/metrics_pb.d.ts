// package: 
// file: metrics.proto

import * as jspb from "google-protobuf";

export class Metric extends jspb.Message {
  getMetric(): string;
  setMetric(value: string): void;

  getMicroservice(): string;
  setMicroservice(value: string): void;

  getNode(): string;
  setNode(value: string): void;

  getValue(): number;
  setValue(value: number): void;

  getDate(): number;
  setDate(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Metric.AsObject;
  static toObject(includeInstance: boolean, msg: Metric): Metric.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Metric, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Metric;
  static deserializeBinaryFromReader(message: Metric, reader: jspb.BinaryReader): Metric;
}

export namespace Metric {
  export type AsObject = {
    metric: string,
    microservice: string,
    node: string,
    value: number,
    date: number,
  }
}

export class MetricsList extends jspb.Message {
  clearMetricsList(): void;
  getMetricsList(): Array<Metric>;
  setMetricsList(value: Array<Metric>): void;
  addMetrics(value?: Metric, index?: number): Metric;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MetricsList.AsObject;
  static toObject(includeInstance: boolean, msg: MetricsList): MetricsList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MetricsList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MetricsList;
  static deserializeBinaryFromReader(message: MetricsList, reader: jspb.BinaryReader): MetricsList;
}

export namespace MetricsList {
  export type AsObject = {
    metricsList: Array<Metric.AsObject>,
  }
}

