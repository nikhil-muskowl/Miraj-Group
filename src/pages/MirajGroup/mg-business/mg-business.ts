import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';
import { MgBusinessProvider } from '../../../providers/mg-business/mg-business';

@IonicPage()
@Component({
  selector: 'page-mg-business',
  templateUrl: 'mg-business.html',
})
export class MgBusinessPage {

  public id;
  public records;
  public images;
  public banner;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private MgBusinessProvider: MgBusinessProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider) {

    this.id = this.navParams.data.id;
    if (this.network.checkStatus() == true) {
      // this.getServerData();
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MgBusinessPage');
  }

  public getServerData() {
    this.loader.present();
    this.MgBusinessProvider.view(this.id).subscribe(
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

}