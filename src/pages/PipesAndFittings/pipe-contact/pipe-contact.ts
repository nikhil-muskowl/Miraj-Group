import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pipe-contact',
  templateUrl: 'pipe-contact.html',
})
export class PipeContactPage {
  title = 'Contact';
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PipeContactPage');
  }

}
