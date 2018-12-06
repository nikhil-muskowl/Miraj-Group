import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigProvider } from '../config/config';
import { DatePipe } from '@angular/common';

@Injectable()
export class CustomerReviewProvider {
  public formData: FormData = new FormData();
  constructor(public http: HttpClient,
    public dateCtrl: DatePipe) {    
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

  post(data, ImagePath): any {
    let headers = new HttpHeaders();
    headers.set('Access-Control-Allow-Origin ', '*');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    
    // let formData: FormData = new FormData();
    // formData.append('project_type_id', data.project_type_id);
    // formData.append('property_type_id', data.property_type_id);
    // formData.append('name', data.name);
    // formData.append('email', data.email);
    // formData.append('contact', data.contact);
    // formData.append('description', data.description);

    // return this.http.post(ConfigProvider.BASE_URL + 'contact/ajax_post',
    //   formData,
    //   {
    //     headers: headers,
    //   }
    // );

    var date = new Date();
    var cDate = this.dateCtrl.transform(date, 'dd-MMM-yyyy');

    var FormJson = {
      'ProjectID': '',
      'PersonName': data.name,
      'Email': data.email,
      'MobileNo': data.contact,
      'ReviewText': data.description,
      'RatingValue': data.rating,
      'ImagePath': ImagePath,
      'ReviewDate': cDate
    };

    console.log('FormJson', JSON.stringify(FormJson));
    return this.http.post('http://app1.mirajgroup.in/MirajWebApi/api/Customer/SaveReviewRatings',
      JSON.stringify(FormJson), {
        headers: headers,
        responseType: 'text',
      }
    );

  }


  getList(): any {        
    return this.http.get(ConfigProvider.BASE_URL + 'testimonial/autocomplete');
  }
}
