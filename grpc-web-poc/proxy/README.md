# gRPC Web Proxy

The `grpcwebproxy` is a binary that can act as a reverse proxy for other gRPC servers (in whatever language), exposing their gRPC functionality to browsers (over HTTP2+TLS+gRPC-Web) without needing to modify their code.

[grpcwebproxy](https://github.com/improbable-eng/grpc-web) is an original effort developed by [Improbable team](https://github.com/improbable-eng).

This is a small reverse proxy that can front existing gRPC servers and expose their functionality using gRPC-Web
protocol, allowing for the gRPC services to be consumed from browsers.

Features:
 * structured logging of proxied requests to stdout
 * debug HTTP endpoint (default on port `8080`)
 * Prometheus monitoring of proxied requests (`/metrics` on debug endpoint)
 * Request (`/debug/requests`) and connection tracing endpoints (`/debug/events`)
 * TLS 1.2 serving (default on port `8443`):
   * with option to enable client side certificate validation
 * both secure (plaintext) and TLS gRPC backend connectivity:
   * with customizeable CA certificates for connections

The indented use is as a companion process for gRPC server contianers.

## Building and running

You need [Go](https://golang.org/) >= 1.8. 

#### Build this version
```
go build -o grpcwebproxy
```

#### Run built version

```
./grpcwebproxy
    --server_tls_cert_file=../misc/cert/localhost.crt \
    --server_tls_key_file=../misc/cert/localhost.key \
    --backend_addr=localhost:50051 \
    --backend_tls_noverify
```

#### Install from source

To install install you should:

```
go get -u github.com/improbable-eng/grpc-web/go/grpcwebproxy
```

#### Running installed version

Here's a simple example that fronts a local, TLS gRPC server:

```
$GOPATH/bin/grpcwebproxy
    --server_tls_cert_file=../misc/cert/localhost.crt \
    --server_tls_key_file=../misc/cert/localhost.key \
    --backend_addr=localhost:50051 \
    --backend_tls_noverify
```