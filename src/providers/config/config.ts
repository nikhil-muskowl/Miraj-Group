import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class ConfigProvider {

  static BASE_URL: string = 'http://www.muskowl.com/';
  // static BASE_URL: string = 'http://localhost/codeigniter/community/';

  constructor(public http: HttpClient) {
    
  }

}
