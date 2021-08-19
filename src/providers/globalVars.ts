import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {

  baseURL = 'http://www.vrbasgis.net:8080/gis-3.0.1';
  baseURL1 =  'http://www.vrbasgis.net:8080/gis-3.0.1';


  constructor() {
  }

  public setBaseURL(value: string) {
    this.baseURL = value;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }

}
