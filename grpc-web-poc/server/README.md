gRPC simple node server /client
===========================

Prerequisites
-------------

- `node`
   This requires node 0.12.x or greater.

Install
-------

   ```sh
   npm install
   ```

Running it
-------

To generate the code needed to work with protocol buffers in Node.js - this approach uses [Protobuf.js](https://github.com/dcodeIO/ProtoBuf.js/) to dynamically generate the code at runtime.

 - Run the server

   ```sh
   # from this directory
   node greeter_server.js &
   ```

 - Run the client

   ```sh
   # from this directory
   node greeter_client.js
   ```

Tutorial
--------
You can find a more detailed tutorial in [gRPC Basics: Node.js][]

[Install gRPC Node]:../../src/node
[gRPC Basics: Node.js]:https://grpc.io/docs/tutorials/basic/node.html
