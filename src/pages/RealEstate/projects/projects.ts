import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProjectsProvider } from '../../../providers/projects/projects';

import { ProjectViewPage } from '../project-view/project-view';
import 'rxjs/add/operator/debounceTime';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-projects',
  templateUrl: 'projects.html',
})
export class ProjectsPage {
  public pageStart = 1;
  public pageLength = 5;
  public filterData;

  title = 'projects';
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;

  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;
  public model: any[] = [];
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ProjectsProvider: ProjectsProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider
  ) {
    this.searchControl = new FormControl();

    this.searching = false;
    if (this.network.checkStatus() == true) {
      this.getServerData();
    }
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.getServerData();
    });

  }

  onSearchInput(searchData) {
    this.searching = true;
    this.searchTerm = searchData;
  }

  public getServerData() {
    this.filterData = { 'start': this.pageStart, 'length': this.pageLength, 'searchTerm': this.searchTerm };
    this.loader.present();
    
    this.ProjectsProvider.load(this.filterData).subscribe(
      response => {
        // this.message = response.data.message;
        this.records = response;
        // this.recordsFiltered = response.data.recordsFiltered;
        console.log('Records :' + this.records);
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
    this.navCtrl.push(ProjectViewPage, { id: data.PID });
  }

  onScrollDown(infiniteScroll) {
    if(this.records.length > 0){
      // this.pageStart += this.pageLength;
      this.pageStart ++;
      this.getServerData();
    }      
    infiniteScroll.complete();
  }

}