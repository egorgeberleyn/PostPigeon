#!/bin/bash
mkdir -p ./src/protos
protoc ../protos/*.proto \
  --js_out=import_style=commonjs:./src/protos \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:./src/protos \
  --proto_path=../protos