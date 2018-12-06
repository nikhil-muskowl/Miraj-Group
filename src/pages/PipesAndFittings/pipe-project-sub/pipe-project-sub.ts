import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PipeProjectDetailPage } from '../pipe-project-detail/pipe-project-detail';
import { PipeProjectsProvider } from '../../../providers/pipe-projects/pipe-projects';
import 'rxjs/add/operator/debounceTime';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-pipe-project-sub',
  templateUrl: 'pipe-project-sub.html',
})
export class PipeProjectSubPage {

  public pageStart = 1;
  public pageLength = 5;
  public filterData;
  public category_id;
  title = 'projects';
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;
  public products;
  public model: any[] = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private PipeProjectsProvider: PipeProjectsProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider
  ) {
    this.category_id = this.navParams.data.category_id;
    if (this.network.checkStatus() == true) {
      this.getServerData();
    }
  }

  ionViewDidLoad() {

  }


  public getServerData() {
    console.log(this.category_id);
    this.filterData = { 
      'id': this.category_id, 
      'start': this.pageStart, 
      'length': this.pageLength 
    };

    this.loader.present();
    
    this.PipeProjectsProvider.subcat(this.filterData).subscribe(
      response => {
        this.records = response;
        this.products = this.records.products;
        console.log('Records :' + this.products);
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
    this.navCtrl.push(PipeProjectDetailPage, { id: data.category_id });
  }

  onScrollDown(infiniteScroll) {
    // if(this.records.length > 0){
    //   // this.pageStart += this.pageLength;
    //   this.pageStart ++;
    //   this.getServerData();
    // }      
    infiniteScroll.complete();
  }
}
