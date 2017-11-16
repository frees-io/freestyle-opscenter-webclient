import { Injectable } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from 'environments/environment';
import { Microservice, MicroserviceList } from 'app/shared/proto/microservices_pb';


@Injectable()
export class NavTreeDataService {

  constructor(private http: Http) { }

  public getProto(): Observable<any> {
    return this.http.get(environment.microservicesEndpoint, { responseType: ResponseContentType.ArrayBuffer })
      .map((data: any) => {
        /**
         * The ArrayBuffer object is used to represent a generic, fixed-length raw binary data buffer.
         * You cannot directly manipulate the contents of an ArrayBuffer; instead, you create one of the
         * typed array objects or a DataView object which represents the buffer in a specific format,
         * and use that to read and write the contents of the buffer.
         *
         * google-protobuf/protobuf.js requires a byte-level view on the data, which is provided by Uint8Array
         * in the browser (falls back to Array in older browsers) or Buffer under node.js.
         * You are actually not converting the ArrayBuffer, just wrapping it in a byte-level view.
         * Basically, you tell JS how to interpret the raw binary data.
         *
         * This is done because decoders work pretty much the same in all environments with a few exceptions,
         * and an additional check-and-wrap for ArrayBuffer (as either Buffer or Uint8Array), while certainly possible,
         * would usually be unnecessary overhead under node.js / in older browsers / where Uint8Array is used anyway.
         */
        const serializedData = new Uint8Array(data.arrayBuffer());
        const microserviceList = MicroserviceList.deserializeBinary(serializedData);
        return microserviceList.toObject();
      });
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/nav-tree-data.json')
      .map((data: any) => data.json());
  }

}
