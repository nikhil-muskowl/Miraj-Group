import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, App, MenuController, Nav,
  Platform, PopoverController, ActionSheetController, ModalController, Refresher, Content } from 'ionic-angular';
import { MainPage } from '../../../pages/main/main';
import { HomePage } from '../../../pages/RealEstate/home/home';
import { AboutPage } from '../../../pages/RealEstate/about/about';
import { RealTabsPage } from '../../../pages/RealEstate/real-tabs/real-tabs';
import { NotificationPage } from '../../../pages/RealEstate/notification/notification';
import { CustomerReviewPage } from '../../../pages/RealEstate/customer-review/customer-review';
import { ContactInfoPage } from '../../../pages/RealEstate/contact-info/contact-info';
import { ContactDirectoryPage } from '../../../pages/RealEstate/contact-directory/contact-directory';
import { ProjectsPage } from '../../../pages/RealEstate/projects/projects';
import { LoanPage } from '../../../pages/RealEstate/loan/loan';
import { CustomerPage } from '../../../pages/RealEstate/customer/customer';
import { AgentPage } from '../../../pages/RealEstate/agent/agent';
import { MdlCsrPage } from '../../../pages/RealEstate/mdl-csr/mdl-csr';
import { SampleFlatsPage } from '../../../pages/RealEstate/sample-flats/sample-flats';

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

@IonicPage({
  name: 'real-estate',
})
@Component({
  selector: 'page-real-estate',
  templateUrl: 'real-estate.html',
})
export class RealEstatePage {
  public rootPage: any = RealTabsPage;

  @ViewChild(Nav) nav: Nav;
  @ViewChild(Content) content: Content;
  private tabBarHeight;
  private topOrBottom: string;
  private contentBox;

  public modal: any;

  public appPages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: RealTabsPage, tabComponent: HomePage, index: 0, icon: 'home' },
    { title: 'About', name: 'About', component: AboutPage, icon: 'person' },
    { title: 'Review', name: 'Review', component: CustomerReviewPage, icon: 'create' },
    { title: 'MDL CSR', name: 'MdlCsr', component: MdlCsrPage, icon: 'people' },
    { title: 'Sample Flats', name: 'Sample Flats', component: SampleFlatsPage, icon: 'podium' }
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
    if (this.nav.getActiveChildNav() && page.index != undefined) {
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
    let popover = this.popoverCtrl.create(NotificationPage);
    popover.present({
      ev: myEvent
    });
  }

  openContactPage() {
    this.modal = this.modalCtrl.create(ContactDirectoryPage);
    this.modal.present();
    // this.nav.push(ContactDirectoryPage);
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
