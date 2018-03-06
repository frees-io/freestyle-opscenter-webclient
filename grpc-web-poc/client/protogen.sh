#!/bin/bash

mkdir -p ./src/proto

protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  -I ../misc/proto \
  --js_out=import_style=commonjs,binary:./src/proto \
  --ts_out=service=true:./src/proto \
  ../misc/proto/greeter.proto
