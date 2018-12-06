import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';

import { MultiHomePage } from '../../../pages/MultiColor/multi-home/multi-home';
import { MultiStaionaryPage } from '../../../pages/MultiColor/multi-staionary/multi-staionary'
import { MultiPrintingPage } from '../../../pages/MultiColor/multi-printing/multi-printing';
import { MultiEnquiryPage } from '../../../pages/MultiColor/multi-enquiry/multi-enquiry';
import { MultiContactPage } from '../../../pages/MultiColor/multi-contact/multi-contact';

@IonicPage()
@Component({
  selector: 'page-multi-tabs',
  templateUrl: 'multi-tabs.html',
})
export class MultiTabsPage {

  // set the root pages for each tab
  tab1Root: any = MultiHomePage;
  tab2Root: any = MultiStaionaryPage;
  tab3Root: any = MultiPrintingPage;
  tab4Root: any = MultiEnquiryPage;
  tab5Root: any = MultiContactPage;
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
