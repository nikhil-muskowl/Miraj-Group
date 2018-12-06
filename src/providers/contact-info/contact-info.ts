import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';

@Injectable()
export class ContactInfoProvider {
  public formData: FormData = new FormData();

  constructor(public http: HttpClient) {
    console.log('Hello ContactInfoProvider Provider');
  }

  getPropertyType(): any {        
    return this.http.post(ConfigProvider.BASE_URL + 'contact_type/autocomplete',
      this.formData      
    );
  }

  getProjectType(): any {        
    return this.http.post(ConfigProvider.BASE_URL + 'contact_type/autocomplete',
      this.formData      
    );
  }

  post(data): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    
    let formData: FormData = new FormData();
    formData.append('project_type_id', data.project_type_id);
    formData.append('property_type_id', data.property_type_id);

    return this.http.post(ConfigProvider.BASE_URL + 'contact/ajax_post',
      formData,
      {
        headers: headers,
      }
    );
  }
}
