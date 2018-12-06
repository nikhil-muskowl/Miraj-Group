import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { SampleFlatsProvider } from '../../../providers/sample-flats/sample-flats';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactValidator } from '../../../validators/contact';
import { ContactProvider } from '../../../providers/contact/contact';
import { NetworkProvider } from '../../../providers/network/network';
import { SampleFlatViewPage } from '../sample-flat-view/sample-flat-view';

@IonicPage()
@Component({
  selector: 'page-sample-flats',
  templateUrl: 'sample-flats.html',
})
export class SampleFlatsPage {

  title = 'Sample flates';
  public paramData;
  submitAttempt;
  public records;
  public message;
  sampleFlats: FormGroup;
  private formData: any;

  private project_types;
  private city_ids;
  private projects;
  private flats;
  public cid;
  private pid;
  private proid;
  private flatid;

  private projectTypeError;
  private cityError;
  private projectError;
  private flatError;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loader: LoaderProvider,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastProvider,
    private contactProvider: ContactProvider,
    public sampleFlatCtrl: SampleFlatsProvider,
    public network: NetworkProvider) {

    this.sampleFlats = formBuilder.group({
      project_type_id: ['', Validators.required],
      city_id: ['', Validators.required],
      proj_id: ['', Validators.required],
      flat_id: ['', Validators.required]
    });

    if (this.network.checkStatus() == true) {
      this.getProjectType();
      this.getCities();
    }

  }

  public getProjectType() {
    this.loader.present();
    this.contactProvider.getProjectType().subscribe(
      response => {
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
    this.cid = selectedValue;
    console.log(this.cid);
    if (this.pid !== undefined && this.pid !== '') {
      this.getProject();
    }
  }

  onProTypeChange(selectedValue) {
    console.info("ProjetcType:", selectedValue);
    this.pid = selectedValue;
    if (this.cid !== undefined && this.cid !== '') {
      this.getProject();
    }
  }

  onProjectChange(selectedValue) {
    this.proid = selectedValue;
    console.log(this.proid);
    if (this.proid !== undefined && this.proid != '') {
      this.getFlat();
    }
  }

  onflatChange(selectedValue) {
    this.flatid = selectedValue;
    console.log(this.flatid);

  }

  public getProject() {
    this.loader.present();
    this.contactProvider.getProjects(this.pid, this.cid).subscribe(
      response => {
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
        this.flats = response;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  ionViewDidLoad() {
  }

  getSampleFlats() {
    this.submitAttempt = true;

    this.formData = this.sampleFlats.valid;
    if (this.sampleFlats.valid) {
      this.paramData = { 'pid': this.pid, 'cid': this.cid, 'proid': this.proid, 'flatid': this.flatid };
      this.navCtrl.push(SampleFlatViewPage, { params: this.paramData });
      //todo send ids to next page
    } else {
      this.projectTypeError = 'Please select Project Type';
      this.cityError = 'Please select Project City';
      this.projectError = 'Please select Project';
      this.flatError = 'Please select Flat type';
      this.message = 'Form Validation Error';
    }
    this.toastCtrl.presentToast(this.message);
  }
}