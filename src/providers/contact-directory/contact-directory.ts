import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ConfigProvider } from '../config/config';

@Injectable()
export class ContactDirectoryProvider {
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public search;

  constructor(public http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');

    // this.formData.append('start', '0');
    // this.formData.append('length', '10');
  }

  load(searchValue): any {
    this.search = searchValue;
    this.formData.append('search[value]', this.search);
   
    // return this.http.post(ConfigProvider.BASE_URL + 'contact_directory/autocomplete',
    return this.http.get('http://app1.mirajgroup.in/MirajWebApi/api/Project/GetProjectContacts',  
    // this.formData,
      {
        headers: this.headers,
      }
    );  

  }

  
}
