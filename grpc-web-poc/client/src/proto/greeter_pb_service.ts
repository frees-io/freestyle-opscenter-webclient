// package: greeter
// file: greeter.proto

import * as greeter_pb from "./greeter_pb";
export class GreeterService {
  static serviceName = "greeter.GreeterService";
}
export namespace GreeterService {
  export class SayHello {
    static readonly methodName = "SayHello";
    static readonly service = GreeterService;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = greeter_pb.HelloRequest;
    static readonly responseType = greeter_pb.HelloReply;
  }
}
