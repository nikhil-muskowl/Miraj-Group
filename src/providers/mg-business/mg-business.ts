import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { ConfigProvider } from '../config/config';

@Injectable()
export class MgBusinessProvider {
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();

  constructor(public http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }
public view(id: Number): any {
    // return this.http.get('http://app1.mirajgroup.in/MirajWebApi/api/Project/ProjectDetails?projectID=' + id);
    return this.http.get('http://app1.mirajgroup.in/MirajWebApi/api/Project/ProjectDetails?projectID=' + 1);
  }
}
