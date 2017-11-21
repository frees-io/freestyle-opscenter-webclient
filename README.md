# Freestyler Opscenter

This project is an interactive visual web interface to operate and get metrics and data related with the different Freestyle microservices.

## Installation

The project manage its dependencies through npm. It has been built with Angular 5, relying on RxJs 5.5, and it uses Webpack for build purposes. To get it installed you can run `npm install` or `yarn`.

## Configuration

Generally available configuration parameters can be set per environment. To do so, please edit the files on the environment directory, e.g. to change the default endpoint from which to read metrics go and change the value of the `metricsEndpoint` property on the environment object:

```
export const environment = {
  (...)
  metricsEndpoint: 'ws://localhost:3000'
  (...)
};
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Protocol buffers

### Proto files fetching

Right now two proto file locations are defined and specified as so on the project tasks through npm scripts, these are the `microservices` proto and `metrics` proto. They can be fetched by running `npm run protofetch:microservices` and `npm run protofetch:metrics`, running `npm run protofetch` will get you both. All these commands will get you the proto files at the `proto` path.

Also you can use the build script with `node build-scripts/fetch-proto.js -s <proto-file-source-url> -o <destination-dir>` or `npm run protofetch:custom -- -i <proto-file-source-url> -o <destination-dir>`.

`node build-scripts/fetch-proto.js --help` could help you on how to use the script.

### Proto code generation

If you want to control this step further, you can generate the JS code and TS definitions by running `npm run protodef`, which will search proto files in the `proto` directory, and will generate the code at `src/app/shared/proto` path.

This requires the protocol buffers compiler to be already installed on the system. On GNU/Linux you can probably [manage](https://launchpad.net/ubuntu/+source/protobuf) this [through](https://launchpad.net/%7Emaarten-fonville/+archive/ubuntu/protobuf) some [package manager](https://pkgs.org/download/protobuf-compiler), or equivalent in [other OS](http://brewformulas.org/Protobuf). Otherwise, you can check Google [Protocol Buffers releases](https://github.com/google/protobuf/releases), and look for the `protoc` precompiled zipped binaries, extract and include them in your `PATH`, to have available the `protoc` command.

Also you can use the build script with `node build-scripts/gen-proto-code.js -i <proto-source-dir> -o <destination-dir>` or `npm run protodef:custom -- -i <proto-source-dir> -o <destination-dir>`.

`node build-scripts/gen-proto-code.js --help` could help you on how to use the script.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build, or run `npm run build:prod` to get an already production optimized build.

## Lint

Run `npm run lint` to lint the TypeScript files following the [Angular Style Guide](https://angular.io/guide/styleguide).

## Running unit tests

Run `npm run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `npm run e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.


# Copyright

Freestyle is designed and developed by 47 Degrees

Copyright (C) 2017 47 Degrees. <http://47deg.com>

[comment]: # (End Copyright)
