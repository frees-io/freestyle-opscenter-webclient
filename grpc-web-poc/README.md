# gRPC-Web-PoC

This is a small proof of concept project based on grpc and grpc-web Improbables implementation, demostrating how any language based grpc server and a TypeScript frontend could work together.

### Needed dependencies

You must have installed on your system:

* [`node`](https://nodejs.org/en/)
   Most of the project dependencies and running scripts are managed though node and its ecosystem, also the final server code is written in node.

* [`go`](https://golang.org/) >= 1.8
   Go language is used to deploy a grpc-web spec compatible proxy server.

* [`protoc`](https://github.com/google/protobuf)
   The protocol buffer compiler is needed since the TypeScript message and services definitions are generated on frontend compilation step out of `proto` files. For the server we are not using it, relying on a runtime generation based on [Protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/) (this dependency is managed through npm, so you don't have to worry about it).
   


### Get started (with HTTP1.1)

* `npm install`
   This command will install all needed dependencies to run the three components of the project (server, proxy and client).
* `npm start`
   This will start the node grpc server, a grpc-web proxy based on go, and a webpack dev server for the TypeScript client.

* Go to `http://localhost:8081` and check the browser console.


### Using HTTP2

HTTP2 requires TLS. This repository contains certificates in the `misc/cert` directory. You can optionally generate your own replacements using the `gen_cert.sh` in the same directory.

Follow [this guide](http://stackoverflow.com/questions/7580508/getting-chrome-to-accept-self-signed-localhost-certificate) to accept the certificates in Chrome/Chromium.

* `npm run start:tls` will start the node grpc server, proxy and specific TLS enabled webpack dev server using the certificates from `misc/cert`.

* Go to `https://localhost:8082` and check the browser console.

----

#### Source

Original projects which this project is based on can be found on:

https://github.com/improbable-eng/grpc-web

https://github.com/grpc/grpc/tree/master/src/node
