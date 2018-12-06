import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactValidator } from '../../../validators/contact';
import { ContactProvider } from '../../../providers/contact/contact';
import { DatePipe } from '@angular/common';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
  title = 'customer enquiry form';
  submitAttempt;
  customerForm: FormGroup;
  private formData: any;
  private message;
  private status;
  private project_types;
  private city_ids;
  private projects;
  private flats;
  public cid;
  private pid;
  private proid;
  private flatid;

  private projectTypeError;
  private nameError;
  private emailError;
  private contactError;
  private cityError;
  private projects_idError;
  private flatError;
  private descriptionError;
  public dualValue2: any = { lower: 15, upper: 60 };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private contactProvider: ContactProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public dateCtrl: DatePipe,
    public network: NetworkProvider
  ) {
    this.projectTypeError = '';
    this.nameError = '';
    this.emailError = '';
    this.contactError = '';
    this.cityError = '';
    this.projects_idError = '';
    this.descriptionError = '';
    this.message = '';
    this.flatError = '';

    this.customerForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.required],
      contact: ['', ContactValidator.isValid],
      // title: ['', Validators.required],
      description: ['', Validators.required],
      project_type_id: ['', Validators.required],
      city_id: ['', Validators.required],
      proj_id: ['', Validators.required],
      range: ['', ''],
      flat_id: ['', Validators.required]
    });

    if (this.network.checkStatus() == true) {
      this.getProjectType();
      this.getCities();
    }
  }



  ionViewDidLoad() {
  }

  public getProjectType() {
    this.loader.present();
    this.contactProvider.getProjectType().subscribe(
      response => {
        // this.message = response.message;
        this.project_types = response;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  public getCities() {
    this.loader.present();
    this.contactProvider.getCities().subscribe(
      response => {
        // this.message = response.message;
        this.city_ids = response;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  onCityChange(selectedValue) {
    console.info("City:", selectedValue);
    this.cid = selectedValue;
    console.log(this.cid);
    if (this.pid !== undefined && this.pid !== '') {
      this.getProject();
    }
  }

  onProTypeChange(selectedValue) {
    console.info("ProjetcType:", selectedValue);
    this.pid = selectedValue;
    console.log(this.pid);
    // var date = new Date();
    // var cDate = this.dateCtrl.transform(date, 'dd-MMM-yyyy');
    // console.log('Date', cDate);
    if (this.cid !== undefined && this.cid !== '') {
      this.getProject();
    }
  }

  Budget(data: any) {
    console.log("values", data.lower + ',' + data.upper);
  }

  onProjectChange(selectedValue) {
    console.info("ProjectId:", selectedValue);
    this.proid = selectedValue;
    console.log(this.proid);
    if (this.proid !== undefined && this.proid != '') {
      // this.loader.present();
      this.getFlat();
    }
  }

  onflatChange(selectedValue) {
    console.info("Flat id:", selectedValue);
    this.flatid = selectedValue;
    console.log(this.flatid);

  }

  public getProject() {
    this.loader.present();
    this.contactProvider.getProjects(this.pid, this.cid).subscribe(
      response => {
        // this.message = response.message;
        this.projects = response;
        console.log(response);
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  public getFlat() {
    this.loader.present();
    this.contactProvider.getFlats(this.proid).subscribe(
      response => {
        // this.message = response.message;
        this.flats = response;
        console.log("Flat Resp", response);
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  save() {
    console.log('Clicked', '');
    this.submitAttempt = true;

    this.formData = this.customerForm.valid;
    if (this.customerForm.valid) {
      console.log('Form is valid', '');
      // this.loader.present();
      this.contactProvider.post(this.customerForm.value)
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
            //         this.customerForm.controls['name'].setErrors({ 'incorrect': true });
            //         this.nameError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'email') {
            //         this.customerForm.controls['email'].setErrors({ 'incorrect': true });
            //         this.emailError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'contact') {
            //         this.customerForm.controls['contact'].setErrors({ 'incorrect': true });
            //         this.contactError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'project_type_id') {
            //         this.customerForm.controls['project_type_id'].setErrors({ 'incorrect': true });
            //         this.projectTypeError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'city_id') {
            //         this.customerForm.controls['city_id'].setErrors({ 'incorrect': true });
            //         this.cityError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'proj_id') {
            //         this.customerForm.controls['proj_id'].setErrors({ 'incorrect': true });
            //         this.projects_idError = response.error_string[index];
            //       }
            //       if (response.inputerror[index] == 'flat_id') {
            //         this.customerForm.controls['flat_id'].setErrors({ 'incorrect': true });
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
      this.projectTypeError = 'Please select Project Type';
      this.nameError = 'Please enter a valid name';
      this.emailError = 'Please enter a valid email';
      this.contactError = 'Please enter a valid contact';
      this.cityError = 'Please select City';
      this.projects_idError = 'Please select Project';
      this.flatError = 'Please select Flat type';
      this.message = 'Form Validation Error';
    }
    this.toastCtrl.presentToast(this.message);
  }
}