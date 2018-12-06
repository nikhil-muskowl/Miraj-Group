import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import { ConfigProvider } from '../config/config';

@Injectable()
export class PipeProjectsProvider {
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public search;

  constructor(public http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  load(data): any {
    this.search = data.searchValue;
    this.formData.append('search[value]', this.search);
    var pageNo = data.start;
    var pageSize = data.length;
 var id = data.category_id;
    return this.http.get('http://beauty.muskowl.com/index.php?route=json/category',
      {
        headers: this.headers,
      }
    );
  }

  public subcat(data): any {
    var id = data.id;
    console.log(data);
    return this.http.get('http://beauty.muskowl.com/index.php?route=json/category/product&path=' + id);
  }

}
