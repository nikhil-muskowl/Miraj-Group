import { Component, ViewChild } from '@angular/core';
import {
  IonicPage, NavController, NavParams, Events, App, MenuController, Nav,
  Platform, PopoverController, ActionSheetController, ModalController, Refresher, Content
} from 'ionic-angular';
import { MainPage } from '../../../pages/main/main';
import { MultiTabsPage } from '../../../pages/MultiColor/multi-tabs/multi-tabs';
import { MultiStaionaryPage } from '../../../pages/MultiColor/multi-staionary/multi-staionary';
import { MultiPrintingPage } from '../../../pages/MultiColor/multi-printing/multi-printing';
import { MultiHomePage } from '../../../pages/MultiColor/multi-home/multi-home';
import { MultiAboutUsPage } from '../../../pages/MultiColor/multi-about-us/multi-about-us';
import { MultiContactPage } from '../../../pages/MultiColor/multi-contact/multi-contact';
import { MultiNotificationPage } from '../../../pages/MultiColor/multi-notification/multi-notification';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device';
import { ToastProvider } from '../../../providers/toast/toast';
import { NetworkProvider } from '../../../providers/network/network';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@IonicPage()
@Component({
  selector: 'page-multi-color',
  templateUrl: 'multi-color.html',
})
export class MultiColorPage {
  public rootPage: any = MultiTabsPage;

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;
  private tabBarHeight;
  private topOrBottom: string;
  private contentBox;

  public modal: any;

  public appPages: PageInterface[] = [
    { title: 'Home', name: 'MultiTabsPage', component: MultiTabsPage, tabComponent: MultiHomePage, index: 0, icon: 'home' },
    { title: 'About Us', name: 'MultiAboutUsPage', component: MultiAboutUsPage, icon: 'person' },
    { title: 'Stationary', name: 'MultiStaionaryPage', component: MultiStaionaryPage, icon: 'create' },
    { title: 'Printing & Packaging', name: 'MultiPrintingPage', component: MultiPrintingPage, icon: 'people' },
  ];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public events: Events,
    public app: App,
    public menu: MenuController,
    public platform: Platform,
    public popoverCtrl: PopoverController,
    public actionSheetCtrl: ActionSheetController,
    private iab: InAppBrowser,
    private appAvailability: AppAvailability,
    private device: Device,
    public modalCtrl: ModalController,
    public network: NetworkProvider,
    public toastCtrl: ToastProvider,
  ) {
  }

  onScroll(event) {
    alert(JSON.stringify(event));
    console.log(`ScrollEvent: ${event}`);
  }

  ionViewDidLoad() {

  }

  openPage(page: PageInterface) {
    let params = {};

    // The index is equal to the order of our tabs inside tabs.ts
    if (page.index) {
      params = { tabIndex: page.index };
    }

    // The active child nav is our Tabs Navigation
    if (this.nav.getActiveChildNavs() && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      // Tabs are not active, so reset the root page 
      // In this case: moving to or from SpecialPage
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  isActive(page: PageInterface) {
    // Again the Tabs Navigation
    let childNav = this.nav.getActiveChildNav();
    
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    // Fallback needed when there is no active childnav (tabs not active)
    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MultiNotificationPage);
    popover.present({
      ev: myEvent
    });
  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Connect with us',
      buttons: [
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', '963940166963050');
          }
        }, {
          text: 'Google Plus',
          icon: 'logo-googleplus',
          handler: () => {
            this.launchExternalApp('googleplus://', 'com.googleplus.android', 'googleplus://user?screen_name=', 'https://googleplus.com/', '');
          }
        },
        {
          text: 'Twitter',
          icon: 'logo-twitter',
          handler: () => {
            this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', '');
          }
        },
        {
          text: 'Instagram',
          icon: 'logo-instagram',
          handler: () => {
            this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'http://instagram.com/miraj_developer', '')
          }
        }
      ]
    });
    actionSheet.present();
  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.device.platform === 'iOS') {
      app = iosSchemaName;
    } else if (this.device.platform === 'Android') {
      app = androidPackageName;
    } else {
      let browser = this.iab.create(httpUrl + username, '_system');
      return;
    }

    this.appAvailability.check(app).then(
      () => { // success callback
        let browser = this.iab.create(appUrl + username, '_system');
      },
      () => { // error callback
        let browser = this.iab.create(httpUrl + username, '_system');
      }
    );

  }

  backToMain() {
    this.navCtrl.setRoot(MainPage);
  }

}
