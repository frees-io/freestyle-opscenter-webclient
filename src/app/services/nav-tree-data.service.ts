import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// Operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class NavTreeDataService {

  constructor(private http: Http) { }

  public getJSON(): Observable<any> {
    return this.http.get('assets/nav-tree-data.json')
      .map((data: any) => data.json())
      .catch(error => error);
  }

}
