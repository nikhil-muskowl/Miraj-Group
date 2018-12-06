import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

@Injectable()
export class MultiContactProvider {

  public headers = new HttpHeaders();
  public formData: FormData = new FormData();

  constructor(public http: HttpClient,
    public dateCtrl: DatePipe) {
      
    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  getCountry(): any {

    return this.http.get('http://app1.mirajgroup.in/MirajWebApi/api/Project/GetFlatTypes?ProjectID=',
      {
        headers: this.headers,
      }
    );
  }

  postEnq(data): any {

    var date = new Date();
    var cDate = this.dateCtrl.transform(date, 'dd-MMM-yyyy');
    var FormJson = {
      'EnquiryID': '0',
      'AgentName': data.name,
      'Email': data.email,
      'MobileNo': data.contact,
      'EnquiryDate': cDate,
      'GSTNo': data.gst_num,
      'PANNo': data.pan_num,
      'ReraRegNo': data.rera_num,
      'FirmName': data.firmname,
      'Message': data.message
    };

    console.log('FormJson', JSON.stringify(FormJson));
    return this.http.post('http://app1.mirajgroup.in/MirajWebApi/api/Enquiry/SaveAgentEnquiry',
      JSON.stringify(FormJson), {
        headers: this.headers,
        responseType: 'text',
      }
    );
  }
}

