import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { MgHomePage } from '../../../pages/MirajGroup/mg-home/mg-home';
import { MgAboutUsPage } from '../../../pages/MirajGroup/mg-about-us/mg-about-us'
import { MgOurBusinessPage } from '../../../pages/MirajGroup/mg-our-business/mg-our-business'
import { MgEnquiryPage } from '../../../pages/MirajGroup/mg-enquiry/mg-enquiry';
import { MgcontactUsPage } from '../../../pages/MirajGroup/mgcontact-us/mgcontact-us';

@IonicPage()
@Component({
  selector: 'page-mg-tabs',
  templateUrl: 'mg-tabs.html',
})
export class MgTabsPage {

  // set the root pages for each tab
  tab1Root: any = MgHomePage;
  tab2Root: any = MgAboutUsPage;
  tab3Root: any = MgOurBusinessPage;
  tab4Root: any = MgEnquiryPage;
  tab5Root: any = MgcontactUsPage;
  mySelectedIndex: number;

  constructor(public params: NavParams, public navCtrl: NavController) {
    if (params.data.tabIndex) {
      this.mySelectedIndex = params.data.tabIndex || 0;
    } else {
      this.mySelectedIndex = 0;
    }
  }

  @ViewChild('myTabs') tabRef: Tabs;

  ionViewDidLoad() {
    this.tabRef.select(0);
  }


}
