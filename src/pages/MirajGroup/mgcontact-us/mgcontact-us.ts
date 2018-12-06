import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mgcontact-us',
  templateUrl: 'mgcontact-us.html',
})

export class MgcontactUsPage {
  public title='Contact Us';

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
    ) {

    
  }

}
