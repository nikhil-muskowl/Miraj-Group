import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NotificationProvider } from '../../../providers/notification/notification';

import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html',
})
export class NotificationPage {

  title = 'notification';
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private notificationProvider: NotificationProvider,
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
    this.loader.present();
    this.notificationProvider.load().subscribe(
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
