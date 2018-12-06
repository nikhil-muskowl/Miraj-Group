import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactValidator } from '../../../validators/contact';
import { MultiContactProvider } from '../../../providers/multi-contact/multi-contact';

@IonicPage()
@Component({
  selector: 'page-multi-enquiry',
  templateUrl: 'multi-enquiry.html',
})
export class MultiEnquiryPage {
  searchTerm: string = '';
  submitAttempt;
  multiEnqForm: FormGroup;
  private formData: any;

  private NameError;
  private EmailError;
  private MessageError;
  private ContactError;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loader: LoaderProvider,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider,
    public multiContactctrl: MultiContactProvider) {

    this.NameError = '';
    this.EmailError = '';
    this.MessageError = '';
    this.ContactError = '';

    this.multiEnqForm = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      contact: ['', ContactValidator.isValid],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  save() {
    this.submitAttempt = true;

    this.formData = this.multiEnqForm.valid;
    if (this.multiEnqForm.valid) {
      this.multiContactctrl.postEnq(this.multiEnqForm.value)
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
      this.EmailError = 'Please enter a valid email';
      this.ContactError = 'Please enter a valid contact';
      this.MessageError = 'Please enter message';
    }
    // this.toastCtrl.presentToast(this.message);
  }

  dismiss() {
    this.navCtrl.pop();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiEnquiryPage');
  }

}
