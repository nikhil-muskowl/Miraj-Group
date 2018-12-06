import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RealEstatePage } from '../RealEstate/real-estate/real-estate';
import { PipesAndFittingsPage } from '../PipesAndFittings/pipes-and-fittings/pipes-and-fittings';
import { MultiColorPage } from '../MultiColor/multi-color/multi-color';
import { MirajGroupPage } from '../MirajGroup/miraj-group/miraj-group';

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    
  }

  goToOtherPage() {    
    this.navCtrl.setRoot(RealEstatePage);
  }

  goToPipePage(){
    this.navCtrl.setRoot(PipesAndFittingsPage);
  }

  goToMultiColor(){
    this.navCtrl.setRoot(MultiColorPage);
  }

  goToMirajGroup(){
    this.navCtrl.setRoot(MirajGroupPage);
  }
}
