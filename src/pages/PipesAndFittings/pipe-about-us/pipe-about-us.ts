import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pipe-about-us',
  templateUrl: 'pipe-about-us.html',
})
export class PipeAboutUsPage {
  title = 'About Us';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PipeAboutUsPage');
  }

}
