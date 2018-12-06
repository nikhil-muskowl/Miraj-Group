import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

@Injectable()
export class UserProvider {

  constructor(public http: HttpClient) {
  }

  regsiter(data): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    
    let formData: FormData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('contact', data.contact);

    return this.http.post(ConfigProvider.BASE_URL + 'user/ajax_registration',
      formData,
      {
        headers: headers,
      }
    );
  }
}
