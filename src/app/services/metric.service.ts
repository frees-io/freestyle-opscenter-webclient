import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { webSocket } from 'rxjs/observable/dom/webSocket';
import { WebSocketSubject, WebSocketSubjectConfig } from 'rxjs/observable/dom/WebSocketSubject';
// Operators
import { of } from 'rxjs/observable/of';

import { environment } from 'environments/environment';
import { Metric } from 'app/shared/proto/metrics_pb';


@Injectable()
export class MetricService {

  private wsc = {
    url: environment.metricsEndpoint,
    resultSelector: this.wscResultSelector,
    /**
     * Here's the thing, WebSocketSubjectConfig's binaryType is not a string,
     * it is instead a String Literal Type (binaryType?: 'blob' | 'arraybuffer')
     * https://github.com/Microsoft/TypeScript/pull/5185
     * “A string literal type can be considered a subtype of the string type.
     * This means that a string literal type is assignable to a plain string,
     * but not vice-versa.”
     * Then, we need to cast our string type to its proper type.
     */
    binaryType: 'arraybuffer' as WebSocketSubjectConfig['binaryType']
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
    const serializedData = new Uint8Array(e.data);
    const metric = Metric.deserializeBinary(e.data);

    return of(metric);
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
  getSubject<T = Metric>(handshake?: T): WebSocketSubject<T> {
    const subject: WebSocketSubject<T> = webSocket(this.wsc);
    if (handshake) {
      // If the websocket is “cold” we need to send an initial message to get it started
      // const handshake = new Blob(['handshake'], {
      //   type: 'text/plain'
      // });
      // subject.next(handshake);
      subject.next(handshake);
    }
    return subject;
  }

}
