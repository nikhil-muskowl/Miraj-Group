import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Tabs } from 'ionic-angular';

import { HomePage } from '../home/home';
import { ProjectsPage } from '../projects/projects';
import { LoanPage } from '../loan/loan';
import { CustomerPage } from '../customer/customer';
import { AgentPage } from '../agent/agent';
import { SegmentPage } from '../segment/segment';

@Component({
  selector: 'page-real-tabs',
  templateUrl: 'real-tabs.html',
})
export class RealTabsPage {

  tab1Root: any = HomePage;
  // tab2Root: any = ProjectsPage;
  tab2Root: any = SegmentPage;
  tab3Root: any = CustomerPage;
  tab4Root: any = LoanPage;
  tab5Root: any = AgentPage;
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
