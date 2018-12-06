import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Refresher } from 'ionic-angular';
import { ContactDirectoryProvider } from '../../../providers/contact-directory/contact-directory';
import { CallNumber } from '@ionic-native/call-number';
import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-contact-directory',
  templateUrl: 'contact-directory.html',
})
export class ContactDirectoryPage {
  title = 'contact';
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;
  searchTerm: string = '';
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private ContactDirectoryProvider: ContactDirectoryProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    private callNumber: CallNumber,
    public network: NetworkProvider
  ) {
    
    if (this.network.checkStatus() == true) {
      this.getServerData(this.searchTerm);
    }
   
  }

  ionViewDidLoad() {

  }

  public getServerData(search: any) {
    this.loader.present();
    this.ContactDirectoryProvider.load(search).subscribe(
      response => {
        // this.message = response.data.message;
        this.records = response;
        // this.recordsFiltered = response.data.recordsFiltered;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  public call(data: any) {
    this.callNumber.callNumber(data.MobileNo, true)
      .then(() => console.log('Launched dialer!'))
      .catch(() => console.log('Error launching dialer'));
  }

  dismiss() {
    this.navCtrl.pop();
  }
  
}
