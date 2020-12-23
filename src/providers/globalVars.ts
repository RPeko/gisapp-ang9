import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
  // baseURL = 'http://localhost:8080';
  baseURL = 'http://79.101.21.143:8070/gis-vrbas-2.0.5';
  baseURL1 = 'http://192.168.69.21:8070/gis-vrbas-2.0.5'; // lokalna adresa

  constructor() {
  }

  public setBaseURL(value: string) {
    this.baseURL = value;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }

}
