import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AboutPage } from '../../pages/RealEstate/about/about';

@Component({
  selector: 'about-us',
  templateUrl: 'about-us.html'
})
export class AboutUsComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    this.text = 'About Us';
  }

  openPage() {
    this.navCtrl.push(AboutPage);
  }


}
