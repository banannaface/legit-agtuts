import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { AppsetProvider } from '../appset/appset';
@Injectable()
export class AgtutsmongoProvider {

  apiurl = this.appset.getapiurl();
  constructor(public http: Http, public appset: AppsetProvider) {
  }

  public getuts(){
    return this.http.get(this.apiurl + 'edituts')
    .map(response => response.json().result);
  }
}
