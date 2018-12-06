import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MgBusinessPage } from '../mg-business/mg-business';

@IonicPage()
@Component({
  selector: 'page-mg-our-business',
  templateUrl: 'mg-our-business.html',
})
export class MgOurBusinessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MgOurBusinessPage');
  }

  goToPage(id: any) {
    console.log('id: ' + id);

    if (id == '1')
      this.navCtrl.push(MgBusinessPage, { id: id });

    if (id == '2')
      this.navCtrl.push(MgBusinessPage, { id: id });

    if (id == '3')
      this.navCtrl.push(MgBusinessPage, { id: id });

    if (id == '4')
      this.navCtrl.push(MgBusinessPage, { id: id });

    if (id == '5')
      this.navCtrl.push(MgBusinessPage, { id: id });

    if (id == '6')
      this.navCtrl.push(MgBusinessPage, { id: id });

    if (id == '7')
      this.navCtrl.push(MgBusinessPage, { id: id });

    if (id == '8')
      this.navCtrl.push(MgBusinessPage, { id: id });
  }
}
