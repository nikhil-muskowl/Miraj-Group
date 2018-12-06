import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-pipe-gallery',
  templateUrl: 'pipe-gallery.html',
})
export class PipeGalleryPage {
  title = 'Gallery';
  public avatars = [{name: 'abc'}, {name: 'abc'},{name: 'abc'},{name: 'abc'}, {name: 'abc'}, {name: 'abc'},{name: 'abc'},{name: 'abc'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PipeGalleryPage');
  }

}
