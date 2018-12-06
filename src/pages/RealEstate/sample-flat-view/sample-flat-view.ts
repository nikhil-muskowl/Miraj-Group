import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { SampleFlatsProvider } from '../../../providers/sample-flats/sample-flats';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-sample-flat-view',
  templateUrl: 'sample-flat-view.html',
})

export class SampleFlatViewPage {
  
  title = 'Sample flates';
  paramData;
  public pageStart = 1;
  public pageLength = 5;
  public filterData;
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;

  public cid;
  private pid;
  private proid;
  private flatid;
  public model: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public sampleFlatCtrl: SampleFlatsProvider,
    public network: NetworkProvider) {

      if (this.network.checkStatus() == true) {
      this.getServerData();
    }
  }

  ionViewDidLoad() {
  }

  public getServerData() {

    this.paramData = this.navParams.data.params;
    this.cid = this.paramData.cid;
    this.pid = this.paramData.pid;
    this.proid = this.paramData.proid;
    this.flatid = this.paramData.flatid;
    console.log("cid : ", this.cid);
    console.log("pid : ", this.pid);
    console.log("proid : ", this.proid);
    console.log("flatid : ", this.flatid);

    this.filterData = { 'start': this.pageStart, 'length': this.pageLength, 'proid':this.proid, 'flatid':this.flatid };
    this.loader.present();
    this.sampleFlatCtrl.load(this.filterData).subscribe(
      response => {
        this.records = response;
        console.error(this.records);
        this.binddata();
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  binddata() {

    for (let index = 0; index < this.records.length; index++) {
      this.model.push({
        // PID: this.records[index].PID,
        // ProjectCategory: this.records[index].ProjectCategory,
        // ProjectName: this.records[index].ProjectName,
        // Title: this.records[index].Title,
        // Description: this.records[index].Description,
        // ShortDescription: this.records[index].ShortDescription,
        // Status: this.records[index].Status,
        // Location: this.records[index].Location,
        // StartDate: this.records[index].StartDate,
        // EndDate: this.records[index].EndDate,
        Image: this.records[index].Image
      });
    }
  }

  onScrollDown(infiniteScroll) {
    if (this.records.length > 0) {
      // this.pageStart += this.pageLength;
      this.pageStart++;
      this.getServerData();
    }
    infiniteScroll.complete();
  }
}