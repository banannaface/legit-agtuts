import { Injectable } from '@angular/core';


const CONFIG = {
  apiURL: 'https://desolate-eyrie-84948.herokuapp.com/'
};

@Injectable()
export class AppsetProvider {

  constructor() {}

  public getapiurl(){
    return CONFIG.apiURL;
  }
  
}
