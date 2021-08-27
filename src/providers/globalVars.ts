import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {

  baseURL = 'https://www.vrbasgis.net:8443/gis-3.0.2';
  baseURL1 =  'https://www.vrbasgis.net:8443/gis-3.0.2';


  constructor() {
  }

  public setBaseURL(value: string) {
    this.baseURL = value;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }

}
