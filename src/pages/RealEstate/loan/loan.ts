import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ToastProvider } from '../../../providers/toast/toast';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

import { LoanProvider } from '../../../providers/loan/loan';
import { LoanViewPage } from '../loan-view/loan-view';
import 'rxjs/add/operator/debounceTime';
@IonicPage()
@Component({
  selector: 'page-loan',
  templateUrl: 'loan.html',
})
export class LoanPage {
  title = 'loan';
  public proid;
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;
  searchTerm: string = '';
  searchControl: FormControl;
  searching: any = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loanProvider: LoanProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider
  ) {
    this.searchControl = new FormControl();
    this.searching = false;
    this.proid = this.navParams.data.id;
   
    if (this.network.checkStatus() == true) {
      this.getServerData(this.searchTerm, this.proid);
    }
  }

  ionViewDidLoad() {
    this.searchControl.valueChanges.debounceTime(700).subscribe(search => {
      this.searching = false;
      this.getServerData(this.searchTerm, this.proid);

    });
  }

  onSearchInput(searchData) {
    this.searching = true;
    this.searchTerm = searchData;
  }

  public getServerData(search: any, id: any) {

    this.loader.present();
    this.loanProvider.load(search, id).subscribe(
      response => {
        this.records = response;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

  getDetail(data: any) {
    this.navCtrl.push(LoanViewPage, { id: data.id });
  }

}
