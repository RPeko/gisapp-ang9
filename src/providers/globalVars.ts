import { Injectable } from '@angular/core';

@Injectable()
export class GlobalVars {
  // baseURL = 'http://localhost:8080';
  // baseURL1 = 'http://localhost:8080';
  // baseURL = 'https://vgis21.herokuapp.com';
  // baseURL1 = 'https://vgis21.herokuapp.com';
  baseURL = 'http://79.101.21.143:8070/gis-vrbas-2.1.2';
  // baseURL = 'https://93.87.76.62:8081';
  baseURL1 = 'http://192.168.69.21:8070/gis-vrbas-2.1.2'; // lokalna adresa
  // baseURL1 = 'https://93.87.76.62:8081';

  constructor() {
  }

  public setBaseURL(value: string) {
    this.baseURL = value;
  }

  public getBaseURL(): string {
    return this.baseURL;
  }

}
