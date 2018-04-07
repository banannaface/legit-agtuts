import { Injectable } from '@angular/core';


const CONFIG = {
  apiURL: 'https://raw.githubusercontent.com/banannaface/editor/master/'
};

@Injectable()
export class AppsetProvider {

  constructor() {}

  public getapiurl(){
    return CONFIG.apiURL;
  }
  
}
