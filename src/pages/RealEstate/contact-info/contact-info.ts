import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactInfoProvider } from '../../../providers/contact-info/contact-info';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-contact-info',
  templateUrl: 'contact-info.html',
})
export class ContactInfoPage {
  title = 'contact Info';
  submitAttempt;
  customerInfoForm: FormGroup;
  private formData: any;
  private message;
  private status;
  public records;
  public recordsTotal;
  public recordsFiltered;
  private property_types;
  private project_types;

  private propertyTypeError;
  private projectTypeError;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private ContactInfoProvider: ContactInfoProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider
  ) {

    this.propertyTypeError = '';
    this.projectTypeError = '';
    this.message = '';

    this.customerInfoForm = formBuilder.group({
      property_type_id: ['', Validators.required],
      project_type_id: ['', Validators.required]
    });

    if (this.network.checkStatus() == true) {
      // this.getPropertyType();    
      this.getContactList();
    }
  }

  ionViewDidLoad() {

  }


  public getPropertyType() {
    this.loader.present();
    this.ContactInfoProvider.getPropertyType().subscribe(
      response => {
        this.message = response.message;
        this.property_types = response.data;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  public getProjectType() {
    this.loader.present();
    this.ContactInfoProvider.getProjectType().subscribe(
      response => {
        this.message = response.message;
        this.project_types = response.data;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  getContactList() {

    this.submitAttempt = true;
    this.formData = this.customerInfoForm.valid;

    if (this.customerInfoForm.valid) {
      this.loader.present();
      this.ContactInfoProvider.post(this.customerInfoForm.value).subscribe(
        response => {
          this.message = response.data.message;
          this.records = response.data.records;
          this.recordsFiltered = response.data.recordsFiltered;
        },
        err => console.error(err),
        () => {
          this.loader.dismiss();
        }
      );
      return event;
    }
  }

}
