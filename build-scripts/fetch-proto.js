#! /usr/bin/env node
const package = require('../package.json');
const path = require('path');
const fs = require('fs');
const { URL } = require('url');
const axios = require('axios');
const yargs = require('yargs');
const shell = require('shelljs');
const ora = require('ora');

// Set the directory from where we will be working
const workingDir = path.join(__dirname, '..'); 

// Default URL path from where proto file will fetched (could be changed by params)
let originProtoPath = 'http://localhost:8080/proto/models/microservices';
// Fetched proto file destination (could be changed by params)
let destProtoPath = path.join(workingDir, 'proto');

// Reading params
const argv = yargs
  .usage('fetch-proto\n\nUsage: $0 [options]')
  .help('help').alias('help', 'h')
  .version(package.version).alias('version', 'v')
  .options({
    source: {
      alias: ['s'],
      description: '<proto-file-source-url>',
      requiresArg: true,
      default: originProtoPath,
      string: true,
      coerce: arg => {
        try {
          const urlObject = new URL(arg);
          return urlObject;
        } catch (e) {
          // throw new Error(`Error: ${arg} is not a valid URL path`);
          throw e;
        }
      }
    },
    output: {
      alias: 'o',
      description: '<output-destination-path>',
      requiresArg: true,
      default: destProtoPath,
      string: true,
      normalize: true,
      coerce: arg => {
        if (fs.existsSync(arg)) {
          return arg;
        }
        else {
          throw new Error(`Error: ${arg} is not a valid directory path`);
        }
      }
    }
  })
  .fail((msg, err, yargs) => {
    shell.echo(msg);
    process.exit(1);
  })
  .wrap(Math.min(120, yargs.terminalWidth()))
  .argv;

originProtoPath = new URL(argv.source);
destProtoPath = argv.output;


function fetchProto () {
  const spinner = new ora({
    spinner: 'dots3',
    interval: 60,
    color: 'magenta',
    text: `${originProtoPath} fetching...`
  }).start();
  // GET request for remote proto
  return axios({
    method: 'GET',
    url: originProtoPath.href,
    headers: { 'Accept': 'text/plain'},
    responseType: 'text',
    timeout: 5000
  })
    .then((response) => {
      const protoFilename = `${originProtoPath.pathname.match(/([^\/]*)\/*$/)[1]}.proto`;
      fs.writeFileSync(path.join(destProtoPath, `${protoFilename}`), response.data);
      const successMessage = `${protoFilename} fetched`;
      spinner.succeed(successMessage);
      return successMessage;
    })
    .catch((error) => {
      spinner.fail(`Error connecting to: ${error.config.url}`);
      // shell.echo(`Error connecting to: ${error.config.url}`);
      if (error.response) {
        // The request was made and the server responded with a status code out of range 2xx
        shell.echo(`${error.response.status} - ${error.response.statusText}`);
        shell.echo(error.response.data);
      }
      else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of http.ClientRequest
        shell.echo(`Destination can’t be reached`);
      }
      else {
        // Something happened in setting up the request that triggered an Error
        shell.echo(error.message);
      }
      throw error;
    });
}

try {
  fetchProto();
} catch (e) {}

module.exports.fetchProto = fetchProto;