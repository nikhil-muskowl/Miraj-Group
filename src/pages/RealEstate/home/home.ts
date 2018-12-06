import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, AlertController } from 'ionic-angular';
import { ProjectsPage } from '../../../pages/RealEstate/projects/projects';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  title = 'home';
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform: Platform,
    public alert: AlertController,    
  ) {
    // this.onNotification();
  }

  ionViewDidLoad() {

  }

  // async onNotification() {
  //   try {
  //     await this.platform.ready();

  //     this.fcm.onNotification().subscribe(data=>{
  //       this.alert.create({
  //         message: data.message
  //       }).present();
  //     });
     

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }


  openPage() {
    this.navCtrl.push(ProjectsPage);
  }
}
