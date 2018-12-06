import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';

@Injectable()
export class LoaderProvider {

  public loader:Loading;

  constructor(public http: HttpClient, public loadingCtrl: LoadingController, ) {
  }

  present(message: string = "Loading Please wait...") {
    if (!this.loader) {
      this.loader = this.loadingCtrl.create({
        content: message,        
      });

      this.loader.present();      
    }
  }

  dismiss() {
    if (this.loader) {
      this.loader.dismiss().catch();
      this.loader = null;
    }

  }
}
