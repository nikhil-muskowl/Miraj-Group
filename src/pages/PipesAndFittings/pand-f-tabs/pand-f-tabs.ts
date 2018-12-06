import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Tabs } from 'ionic-angular';
import { PipeHomePage } from '../../../pages/PipesAndFittings/pipe-home/pipe-home';
import { PipeProductsPage } from '../../../pages/PipesAndFittings/pipe-products/pipe-products';
import { PipeGalleryPage } from '../../../pages/PipesAndFittings/pipe-gallery/pipe-gallery';
import { PipeEnquiryPage } from '../../../pages/PipesAndFittings/pipe-enquiry/pipe-enquiry';
import { PipeContactPage } from '../../../pages/PipesAndFittings/pipe-contact/pipe-contact';

@IonicPage()
@Component({
  selector: 'page-pand-f-tabs',
  templateUrl: 'pand-f-tabs.html',
})
export class PandFTabsPage {

  // set the root pages for each tab
  tab1Root: any = PipeHomePage;
  tab2Root: any = PipeProductsPage;
  tab3Root: any = PipeGalleryPage;
  tab4Root: any = PipeEnquiryPage;
  tab5Root: any = PipeContactPage;
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
