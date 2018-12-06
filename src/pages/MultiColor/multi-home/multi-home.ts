import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController, Slides } from 'ionic-angular';
import { MultiChairmanPage } from '../multi-chairman/multi-chairman';
import { MultiStaionaryPage } from '../multi-staionary/multi-staionary';
import { MultiPrintingPage } from '../multi-printing/multi-printing';

@IonicPage()
@Component({
  selector: 'page-multi-home',
  templateUrl: 'multi-home.html',
})
export class MultiHomePage {
  title = 'Home';
  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public alert: AlertController,
  ) {

  }

  // ionViewDidEnter() {
  //   this.slides.autoplayDisableOnInteraction = false;
  // }

  // ngAfterViewInit() {
  //   this.slides.freeMode = true;
  // }

  openChairman() {
    this.navCtrl.push(MultiChairmanPage);
  }

  openStationary() {
    this.navCtrl.push(MultiStaionaryPage);
  }
  
  openPrinting() {
    this.navCtrl.push(MultiPrintingPage);
  }
}
