import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactValidator } from '../../../validators/contact';
import { AgentProvider } from '../../../providers/agent/agent';
import { DatePipe } from '@angular/common';

import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-agent',
  templateUrl: 'agent.html',
})
export class AgentPage {
  title = 'agent enquiry form';
  submitAttempt;
  agentForm: FormGroup;
  private formData: any;
  private message;
  private status;
  private nameError;
  private emailError;
  private contactError;
  private firmError;
  private messgaeError;
  private ReraError;
  private GstError;
  private PanError;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private agentProvider: AgentProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public dateCtrl: DatePipe,
    public network: NetworkProvider
  ) {
    this.nameError = '';
    this.emailError = '';
    this.contactError = '';
    this.firmError = '';
    this.messgaeError = '';
    this.ReraError = '';
    this.GstError = '';
    this.PanError = '';

    this.agentForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.required],
      contact: ['', ContactValidator.isValid],
      firmname: ['', Validators.required],
      message: ['', Validators.required],
      pan_num: ['', Validators.required],
      gst_num: ['', Validators.required],
      rera_num: ['', Validators.required],
    });

    if (this.network.checkStatus() == true) {

    }
  }


  ionViewDidLoad() {
  }

  save() {
    console.log('Clicked', '');
    this.submitAttempt = true;
    this.formData = this.agentForm.valid;
    if (this.agentForm.valid) {
      console.log('Form is valid', '');
      // this.loader.present();
      this.agentProvider.post(this.agentForm.value)
        .subscribe(
          response => {
            console.log('Response', response);
            console.log('Response', response.statusText);
            console.log('Response', response.responseText);
            // this.status = response.status;
            // this.message = response.message;

            // if (!this.status) {
            //   this.submitAttempt = true;
            //   if (response.inputerror.length) {
            //     for (let index = 0; index < response.inputerror.length; index++) {
            //       if (response.inputerror[index] == 'name') {
            //         this.agentForm.controls['name'].setErrors({ 'incorrect': true });
            //         this.nameError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'email') {
            //         this.agentForm.controls['email'].setErrors({ 'incorrect': true });
            //         this.emailError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'contact') {
            //         this.agentForm.controls['contact'].setErrors({ 'incorrect': true });
            //         this.contactError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'project_type_id') {
            //         this.agentForm.controls['project_type_id'].setErrors({ 'incorrect': true });
            //         this.projectTypeError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'city_id') {
            //         this.agentForm.controls['city_id'].setErrors({ 'incorrect': true });
            //         this.cityError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'proj_id') {
            //         this.agentForm.controls['proj_id'].setErrors({ 'incorrect': true });
            //         this.projects_idError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'flat_id') {
            //         this.agentForm.controls['flat_id'].setErrors({ 'incorrect': true });
            //         this.flatError = response.error_string[index];
            //       }
            //     }
            //   }
            // }

          },
          err => console.error(err),
          () => {
            // this.loader.dismiss();
          }
        );
    } else {
      this.nameError = 'Please enter valid name';
      this.emailError = 'Please enter valid email';
      this.contactError = 'Please enter a valid contact';
      this.firmError = 'Please enter Firm Name';
      this.messgaeError = 'Please enter Message';
      this.ReraError = 'Please enter RERA Registration Number';
      this.GstError = 'Please enter GST Number';
      this.PanError = 'Please enter PAN Number';
    }
    this.toastCtrl.presentToast(this.message);
  }
}