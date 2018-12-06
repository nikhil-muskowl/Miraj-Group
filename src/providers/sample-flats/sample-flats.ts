import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { ConfigProvider } from '../config/config';

@Injectable()
export class SampleFlatsProvider {
  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  
  constructor(public http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  load(data): any {
    var pageNo = data.start;
    var pageSize = data.length;
    var proid = data.proid;
    var flatid = data.flatid;
     console.log('proid:', proid);
     console.log('flatid:', flatid);
     return this.http.get('http://app1.mirajgroup.in/MirajWebApi/api/Project/getSampleFlatImages?ProjectID='+proid+'&flattypeID='+flatid,
       {
         headers: this.headers,
       }
     );
    }
}
