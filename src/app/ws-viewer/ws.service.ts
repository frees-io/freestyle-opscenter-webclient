import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { WebSocketSubject } from 'rxjs/observable/dom/WebSocketSubject';
// Operators
import 'rxjs/add/observable/dom/webSocket';


@Injectable()
export class WsService {

  private wsUrl = 'ws://localhost:8080/metrics';
  // private wsUrl = 'ws://localhost:3000';
  // private wsUrl = 'ws://echo.websocket.org/';

  private wsc = {
    url: this.wsUrl,
    resultSelector: this.wscResultSelector
  };

  constructor() { }


  /**
   * Here we are customizing the way of handling the websocket data,
   * to handle cases where the message is not a proper JSON. If what we
   * expect receiving from the server is a JSON we can rely on the
   * default implementation of ResultSelector (which does a JSON.parse)
   *
   * Since we are receiving binary data, we need to decode it and then
   * pass it along. The only way to read a blob in JS is through FileReader.
   *
   * Also, sadly, as the wscResultSelector is not typed to expect a function
   * returning a Promise we need to set the returning type as any :'(
   *
   * @param e: MessageEvent
   */
  private wscResultSelector(e: MessageEvent): any {
    const reader = new FileReader();

    const promise = new Promise<string>((resolve, reject) => {
      reader.onloadend = (event) => {
        // const dataResult = event.target.result;
        const dataResult = reader.result;
        resolve(dataResult);
      };

      reader.onerror = (error) => {
        reject(error);
      };

      reader.readAsText(e.data);
    });

    return promise;

  }

  /**
   * By using the WebSocketSubject data type we can abstract from some inner quirky
   * checks and operations that we would need by using ordinary subjects/observables.
   * The WebSocketSubject is basically a wrapper around the w3c compatible object on
   * stereoids, i.e. observable/subjects capabilities
   *
   * This method open a new websocket connection and returns a subject
   *
   * @param handshake T
   */
  getSubject<T = string>(handshake?: T): WebSocketSubject<T> {
    const subject: WebSocketSubject<T> = Observable.webSocket(this.wsc);
    if (handshake) {
      // If the websocket is “cold” we need to send a first message to get it started
      // const handshake = new Blob(['handshake'], {
      //   type: 'text/plain'
      // });
      // subject.next(handshake);
      subject.next(handshake);
    }
    return subject;
  }

}
