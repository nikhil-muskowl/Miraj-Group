import { HttpClient,HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

@Injectable()
export class NotificationProvider {
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public search;

  constructor(public http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');

    this.formData.append('start', '0');
    this.formData.append('length', '10');
  }

  load(): any {    
    return this.http.post(ConfigProvider.BASE_URL + 'notification/autocomplete',
      this.formData,
      {
        headers: this.headers,
      }
    );
  }

  public view(id: Number): any {
    return this.http.get(ConfigProvider.BASE_URL + 'notification/ajax_view/' + id);
  }

}
