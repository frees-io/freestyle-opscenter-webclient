import {grpc, Code, Metadata} from 'grpc-web-client';
import {GreeterService} from './proto/greeter_pb_service';
import {HelloRequest, HelloReply} from './proto/greeter_pb';

declare const USE_TLS: boolean;
const host = USE_TLS ? 'https://localhost:8443' : 'http://localhost:8080';

// Basic prompt to get
function namePrompt(process: (name: string) => void): void {
    let person = prompt('Please enter your name:', 'Harry Potter');
    if (person != null && person != '') {
        process(person);
    }
}

// Attach prompt function to button click listener
const sendNameElement: HTMLElement | null = document.getElementById('sendName');
if (sendNameElement) {
  sendNameElement.onclick = namePrompt.bind(this, sayHello);
}

// gRPC communication
function sayHello(name: string): void {
  const helloRequest = new HelloRequest();
  helloRequest.setName(name);
  grpc.unary(GreeterService.SayHello, {
    request: helloRequest,
    host: host,
    onEnd: res => {
      console.log(res);
      const { status, statusMessage, headers, message, trailers } = res;
      console.log('sayHello.onEnd.status', status, statusMessage);
      console.log('sayHello.onEnd.headers', headers);
      console.log('sayHello.onEnd.trailers', trailers);
      if (status === Code.OK && message) {
        console.log('sayHello.onEnd.message', message.toObject());
      }
    }
  });
}

// First call passing a generic text value
sayHello('world, from gRPC');
