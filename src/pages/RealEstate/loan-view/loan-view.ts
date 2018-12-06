import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoanProvider } from '../../../providers/loan/loan';
import { LoaderProvider } from '../../../providers/loader/loader';
import { NetworkProvider } from '../../../providers/network/network';

@IonicPage()
@Component({
  selector: 'page-Loan-view',
  templateUrl: 'Loan-view.html',
})
export class LoanViewPage {
  title = 'Loan detail';
  public records;
  public reference_links;
  public id;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loanProvider: LoanProvider,
    public loader: LoaderProvider,
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
    this.loanProvider.view(this.id).subscribe(
      response => {
        this.records = response.data;
        this.reference_links = response.data.story_reference_links;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }

}
