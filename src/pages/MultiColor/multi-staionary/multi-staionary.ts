import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MultiOfficeStnryPage } from '../multi-office-stnry/multi-office-stnry';
import { MultiSchoolStnryPage } from '../multi-school-stnry/multi-school-stnry';

@IonicPage()
@Component({
  selector: 'page-multi-staionary',
  templateUrl: 'multi-staionary.html',
})
export class MultiStaionaryPage {

  constructor(public navCtrl: NavController,
     public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiStaionaryPage');
  }

  openOffice(){
    this.navCtrl.push(MultiOfficeStnryPage);
  }
  
  openSchool(){
    this.navCtrl.push(MultiSchoolStnryPage);
  }
}
