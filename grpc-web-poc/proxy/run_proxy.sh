#!/bin/bash

./grpcwebproxy \
    --server_tls_cert_file=../misc/cert/localhost.crt \
    --server_tls_key_file=../misc/cert/localhost.key \
    --backend_addr=localhost:50051 \
    --backend_tls_noverify
