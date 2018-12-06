import { HttpClient, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';


@Injectable()
export class LoanProvider {

  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public search;

  constructor(public http: HttpClient) {
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');

    this.formData.append('start', '0');
    this.formData.append('length', '10');
  }

  load(searchValue, pid): any {

    this.search = searchValue;
    this.formData.append('search[value]', this.search);
    let url = '';
    if (pid !== undefined && pid != '') {
      url = 'http://app1.mirajgroup.in/MirajWebApi/api/Project/GetBanksProjectWise?ProjectID=' + pid;
    }
    else {
      url = 'http://app1.mirajgroup.in/MirajWebApi/api/Project/GetAllBanks';
    }
    return this.http.get(url,
    {
        headers: this.headers,
    });
  }

  public view(id: Number): any {
    return this.http.get(ConfigProvider.BASE_URL + 'story/ajax_view/' + id);
  }
}
