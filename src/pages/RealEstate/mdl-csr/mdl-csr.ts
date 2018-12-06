import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import 'rxjs/add/operator/debounceTime';
import { MdlCsrProvider } from '../../../providers/mdl-csr/mdl-csr';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-mdl-csr',
  templateUrl: 'mdl-csr.html',
})
export class MdlCsrPage {

  public pageStart = 1;
  public pageLength = 5;
  public filterData;
  title = 'Sample flates';
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;

  public model: any[] = [];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public MdlCsrProvider: MdlCsrProvider,
    public network: NetworkProvider) {

    if (this.network.checkStatus() == true) {
      this.getServerData();
    }
  }

  ionViewDidLoad() {
  }

  public getServerData() {
    this.filterData = { 'start': this.pageStart, 'length': this.pageLength };
    this.loader.present();
    this.MdlCsrProvider.load(this.filterData).subscribe(
      response => {
        this.records = response;
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
        PID: this.records[index].PID,
        ProjectCategory: this.records[index].ProjectCategory,
        ProjectName: this.records[index].ProjectName,
        Title: this.records[index].Title,
        Description: this.records[index].Description,
        ShortDescription: this.records[index].ShortDescription,
        Status: this.records[index].Status,
        Location: this.records[index].Location,
        StartDate: this.records[index].StartDate,
        EndDate: this.records[index].EndDate,
        Image: this.records[index].Image
      });
    }
  }

  getDetail(data: any) {
    // this.navCtrl.push(ProjectViewPage, { id: data.PID });
  }

  onScrollDown(infiniteScroll) {
    if (this.records.length > 0) {
      this.pageStart++;
      this.getServerData();
    }
    infiniteScroll.complete();
  }
}