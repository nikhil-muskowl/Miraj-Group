import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ProjectsProvider } from '../../../providers/projects/projects';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';
import { LoanPage } from '../loan/loan';

@IonicPage()
@Component({
  selector: 'page-project-view',
  templateUrl: 'project-view.html',
})
export class ProjectViewPage {
  title = 'project detail';
  public records;
  public images;
  public id;
  public banner;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ProjectsProvider: ProjectsProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider
  ) {
    if (this.network.checkStatus() == true) {
      this.getServerData();
    }
  }

  ionViewDidLoad() {

  }

  public getServerData() {
    this.id = this.navParams.data.id;
    this.loader.present();
    this.ProjectsProvider.view(this.id).subscribe(
      response => {
        this.records = response[0];
        console.log(this.records);
        this.images = response[0].Images;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  loan(Pid: any) {
    console.log('Project id' + Pid);
    this.navCtrl.push(LoanPage, { id: Pid });
  }
}
