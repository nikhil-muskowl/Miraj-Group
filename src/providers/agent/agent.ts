import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';


@Injectable()
export class AgentProvider {

  public headers = new HttpHeaders();
  public formData: FormData = new FormData();
  public search;

  constructor(public http: HttpClient,
    public dateCtrl: DatePipe) {

    this.headers.set('Access-Control-Allow-Origin ', '*');
    this.headers.set('Content-Type', 'application/json; charset=utf-8');
  }

  post(data): any {

    // let formData: FormData = new FormData();
    // console.log('In Post method','');
    // // formData.append('project_type_id', data.project_type_id);
    // // formData.append('city_id', data.city_id);
    // formData.append('ProjectID', data.proj_id);
    // formData.append('EnquiryID', '0');
    // formData.append('FlatType', data.flat_id);
    // formData.append('Budget', data.range.lower + 'L to ' + data.range.upper + 'L');
    // console.log('budget range', data.range.lower + 'L to ' + data.range.upper + 'L');
    // formData.append('CustomerName', data.name);
    // formData.append('Email', data.email);
    // formData.append('MobileNo', data.contact);
    // formData.append('Area', '');
    // formData.append('Message', data.description);
    // var date = new Date();
    // var cDate =this.dateCtrl.transform(date, 'dd-MMM-yyyy');
    // console.log('Date', cDate);
    // formData.append('EnquiryDate', cDate);
    // console.log('Form data', JSON.stringify(formData));
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
