#! /usr/bin/env node
const package = require('../package.json');
const path = require('path');
const fs = require('fs');
const yargs = require('yargs');
const shell = require('shelljs');
const ora = require('ora');

// Set the directory from where we will be working
const workingDir = path.join(__dirname, '..'); 
// Add node_modules exec path
process.env.PATH += (path.delimiter + path.join(workingDir, 'node_modules', '.bin'));

// Directory where the proto files are stored (could be changed by params)
let originProtoPath = path.join(workingDir, 'proto');
// Generated JS code and TS definitions directory (could be changed by params)
let destCodePath = path.join(workingDir, 'src', 'app', 'shared', 'proto');

// Reading params
const argv = yargs
  .usage('gen-proto-code\n\nUsage: $0 [options]')
  .help('help').alias('help', 'h')
  .version(package.version).alias('version', 'v')
  .options({
    input: {
      alias: ['i'],
      description: '<input-proto-path>',
      requiresArg: true,
      default: originProtoPath,
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
    },
    output: {
      alias: 'o',
      description: '<output-destination-path>',
      requiresArg: true,
      default: destCodePath,
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

originProtoPath = argv.input;
destCodePath = argv.output;


const funcList = shell.ls('-l', path.join(originProtoPath, '*.proto'))
  .map(file => {

    const protoname = path.basename(file.name, path.extname(file.name));

    const jsCodeFilePath = path.join(destCodePath, `${protoname}.js`);
    const tsCodeFilePath = path.join(destCodePath, `${protoname}.d.ts`);

    const execCommand = `pbjs -t static-module -o ${jsCodeFilePath} -w commonjs ${file.name} &  
                          pbts -o ${tsCodeFilePath} ${jsCodeFilePath}`;

    const processProto = () => {
      return new Promise((resolve, reject) => {
        const spinner = new ora(`Processing ${protoname}`).start();
        shell.exec(execCommand, { async: true }, code => code ? reject(spinner.fail()) : resolve(spinner.succeed()));
      });
    };

    return processProto;

  });

// This function is needed to control the async code of each func of funcList
async function run () {
  shell.echo(`Analyzing ${path.join(originProtoPath)} directory`);
  if (funcList.length > 0) {
    shell.echo(`${funcList.length} proto files found`);
    for (const func of funcList) {
      await func();
    }
    shell.echo(`Generated code stored in ${path.join(destCodePath)}`);
  }
  else {
    shell.echo('No proto files found');
  }
}

run();