import { Component } from '@angular/core';
import { CustomerReviewProvider } from '../../providers/customer-review/customer-review';

import { ToastProvider } from '../../providers/toast/toast';
import { LoaderProvider } from '../../providers/loader/loader';
import { NetworkProvider } from '../../providers/network/network';

@Component({
  selector: 'customer-review',
  templateUrl: 'customer-review.html'
})
export class CustomerReviewComponent {

  text: string;
  public records;
  public recordsTotal;
  public recordsFiltered;
  public message;


  constructor(
    private customerReviewProvider: CustomerReviewProvider,
    public loader: LoaderProvider,
    public toastCtrl: ToastProvider,
    public network: NetworkProvider
  ) {

    this.text = 'Happy Customers';

    if (this.network.checkStatus() == true) {
      // this.getServerData();
    }
  }

  public getServerData() {
    this.loader.present();
    this.customerReviewProvider.getList().subscribe(
      response => {
        // this.message = response.data.message;
        this.records = response.data;
        // this.recordsFiltered = response.data.recordsFiltered;
      },
      err => console.error(err),
      () => {
        this.loader.dismiss();
      }
    );
    return event;
  }
}
