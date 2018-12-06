import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactValidator } from '../../../validators/contact';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';
import { MgContactProvider } from '../../../providers/mg-contact/mg-contact';

@IonicPage()
@Component({
  selector: 'page-mg-enquiry',
  templateUrl: 'mg-enquiry.html',
})
export class MgEnquiryPage {

  title = 'Enquiry';
  submitAttempt;
  mgEnqForm: FormGroup;
  private formData: any;

  private NameError;
  private CompanynameError;
  private EmailError;
  private CountryError;
  private AddressError;
  private SubjectError;
  private EnquiryError;
  private ContactError;
  private countries;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public formBuilder: FormBuilder,
     public loader: LoaderProvider,
     public toastCtrl: ToastProvider,
     public network: NetworkProvider,
    public mgEnqctrl: MgContactProvider,) {

    this.NameError = '';
    this.CompanynameError = '';
    this.EmailError = '';
    this.CountryError = '';
    this.AddressError = '';
    this.SubjectError = '';
    this.EnquiryError = '';
    this.ContactError = '';

    this.mgEnqForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      company_name:['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      contact: ['', ContactValidator.isValid],
      email: ['', Validators.required],
      address: ['', Validators.required],
      contry: ['', Validators.required],
      subject: ['', Validators.required],
      enquiry: ['', Validators.required]
    });

    if (this.network.checkStatus() == true) {
      // this.getCountry();
    }
  }
  public getCountry(){
    this.loader.present();
    this.mgEnqctrl.getCountry().subscribe(
      response => {
        // this.message = response.message;
        this.countries = response;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  save() {
    this.submitAttempt = true;

    this.formData = this.mgEnqForm.valid;
    if (this.mgEnqForm.valid) {
      this.mgEnqctrl.postEnq(this.mgEnqForm.value)
        .subscribe(
          response => {
            console.log('Response', response);
            console.log('Response', response.statusText);
            console.log('Response', response.responseText);

          },
          err => console.error(err),
          () => {

            // this.loader.dismiss();
          }
        );
    } else {
      this.NameError = 'Please enter a valid name';
      this.CompanynameError = 'Please enter a valid Company name';
      this.EmailError = 'Please enter a valid email';
      this.ContactError = 'Please enter a valid contact';
      this.CountryError = 'Please select Country';
      this.AddressError = 'Please enter Address';
      this.SubjectError = 'Please select Flat type';
      this.EnquiryError = 'Form Validation Error';
    }
    // this.toastCtrl.presentToast(this.message);
  }


}
