import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AppAvailability } from '@ionic-native/app-availability';
import { Device } from '@ionic-native/device';
import { DatePipe } from '@angular/common';
// import { FCM } from '@ionic-native/fcm';
import { CallNumber } from '@ionic-native/call-number';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera'
import { Network } from '@ionic-native/network';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MainPage } from '../pages/main/main';
import { RealEstatePage } from '../pages/RealEstate/real-estate/real-estate';
import { HomePage } from '../pages/RealEstate/home/home';
import { AboutPage } from '../pages/RealEstate/about/about';
import { ContactPage } from '../pages/RealEstate/contact/contact';
import { ProjectsPage } from '../pages/RealEstate/projects/projects';
import { ProjectViewPage } from '../pages/RealEstate/project-view/project-view';
import { LoanPage } from '../pages/RealEstate/loan/loan';
import { LoanViewPage } from '../pages/RealEstate/loan-view/loan-view';
import { CustomerPage } from '../pages/RealEstate/customer/customer';
import { CustomerReviewPage } from '../pages/RealEstate/customer-review/customer-review';
import { AgentPage } from '../pages/RealEstate/agent/agent';
import { NotificationPage } from '../pages/RealEstate/notification/notification';
import { ContactInfoPage } from '../pages/RealEstate/contact-info/contact-info';
import { ContactDirectoryPage } from '../pages/RealEstate/contact-directory/contact-directory';
import { SampleFlatsPage } from '../pages/RealEstate/sample-flats/sample-flats';
import { SampleFlatViewPage } from '../pages/RealEstate/sample-flat-view/sample-flat-view';
import { MdlCsrPage } from '../pages/RealEstate/mdl-csr/mdl-csr';
import { RealTabsPage } from '../pages/RealEstate/real-tabs/real-tabs';
import { AboutUsComponent } from '../components/about-us/about-us';
import { RealResidentComponent } from '../components/real-resident/real-resident';
import { SocialLinkComponent } from '../components/social-link/social-link';
import { CustomerReviewComponent } from '../components/customer-review/customer-review';
import { SegmentPage } from '../pages/RealEstate/segment/segment';
import { LocationListComponent } from '../components/location-list/location-list';

import { ProjectsProvider } from '../providers/projects/projects';
import { ConfigProvider } from '../providers/config/config';
import { UserProvider } from '../providers/user/user';
import { LoanProvider } from '../providers/loan/loan';
import { ContactProvider } from '../providers/contact/contact';
import { NotificationProvider } from '../providers/notification/notification';
import { CustomerReviewProvider } from '../providers/customer-review/customer-review';
import { ContactInfoProvider } from '../providers/contact-info/contact-info';
import { ContactDirectoryProvider } from '../providers/contact-directory/contact-directory';
import { ToastProvider } from '../providers/toast/toast';
import { NetworkProvider } from '../providers/network/network';
import { LoaderProvider } from '../providers/loader/loader';
import { AgentProvider } from '../providers/agent/agent';
import { HideHeaderDirective } from '../directives/hide-header/hide-header';
import { SampleFlatsProvider } from '../providers/sample-flats/sample-flats';
import { MdlCsrProvider } from '../providers/mdl-csr/mdl-csr';
import { Ionic2RatingModule } from 'ionic2-rating';

// Pipes and fitting pages
import { PipesAndFittingsPage } from '../pages/PipesAndFittings/pipes-and-fittings/pipes-and-fittings';
import { PandFTabsPage } from '../pages/PipesAndFittings/pand-f-tabs/pand-f-tabs';
import { PipeHomePage } from '../pages/PipesAndFittings/pipe-home/pipe-home';
import { PipeProductsPage } from '../pages/PipesAndFittings/pipe-products/pipe-products';
import { PipeGalleryPage } from '../pages/PipesAndFittings/pipe-gallery/pipe-gallery';
import { PipeEnquiryPage } from '../pages/PipesAndFittings/pipe-enquiry/pipe-enquiry';
import { PipeContactPage } from '../pages/PipesAndFittings/pipe-contact/pipe-contact';
import { PipeProjectSubPage } from '../pages/PipesAndFittings/pipe-project-sub/pipe-project-sub';
import { PipeProjectDetailPage } from '../pages/PipesAndFittings/pipe-project-detail/pipe-project-detail';
import { PipeNotificationPage } from '../pages/PipesAndFittings/pipe-notification/pipe-notification';
import { PipeEnquiryProvider } from '../providers/pipe-enquiry/pipe-enquiry';

//Multicolor
import { MultiColorPage } from '../pages/MultiColor/multi-color/multi-color';
import { MultiHomePage } from '../pages/MultiColor/multi-home/multi-home';
import { MultiTabsPage } from '../pages/MultiColor/multi-tabs/multi-tabs';
import { MultiAboutUsPage } from '../pages/MultiColor/multi-about-us/multi-about-us';
import { MultiStaionaryPage } from '../pages/MultiColor/multi-staionary/multi-staionary';
import { MultiPrintingPage } from '../pages/MultiColor/multi-printing/multi-printing';
import { MultiChairmanPage } from '../pages/MultiColor/multi-chairman/multi-chairman';
import { MultiContactPage } from '../pages/MultiColor/multi-contact/multi-contact';
import { MultiEnquiryPage } from '../pages/MultiColor/multi-enquiry/multi-enquiry';
import { MultiNotificationPage } from '../pages/MultiColor/multi-notification/multi-notification';
import { MultiSchoolStnryPage } from '../pages/MultiColor/multi-school-stnry/multi-school-stnry';
import { MultiOfficeStnryPage } from '../pages/MultiColor/multi-office-stnry/multi-office-stnry';

//Miraj Group
import { MirajGroupPage } from '../pages/MirajGroup/miraj-group/miraj-group';
import { MgNotificationPage } from '../pages/MirajGroup/mg-notification/mg-notification';
import { MgTabsPage } from '../pages/MirajGroup/mg-tabs/mg-tabs';
import { MgHomePage } from '../pages/MirajGroup/mg-home/mg-home';
import { MgAboutUsPage } from '../pages/MirajGroup/mg-about-us/mg-about-us';
import { MgOurBusinessPage } from '../pages/MirajGroup/mg-our-business/mg-our-business';
import { MgEnquiryPage } from '../pages/MirajGroup/mg-enquiry/mg-enquiry';
import { MgBusinessPage } from '../pages/MirajGroup/mg-business/mg-business';
import { MgcontactUsPage } from '../pages/MirajGroup/mgcontact-us/mgcontact-us';
import { MgContactProvider } from '../providers/mg-contact/mg-contact';
import { MultiContactProvider } from '../providers/multi-contact/multi-contact';
import { PipeProjectsProvider } from '../providers/pipe-projects/pipe-projects';
import { MgBusinessProvider } from '../providers/mg-business/mg-business';

@NgModule({
  declarations: [
    MyApp,
    HideHeaderDirective,
    AboutUsComponent,
    RealResidentComponent,
    SocialLinkComponent,
    CustomerReviewComponent,
    LocationListComponent,
    MainPage,
    RealTabsPage,
    RealEstatePage,
    HomePage,
    AboutPage,
    ContactPage,
    ProjectsPage,
    ProjectViewPage,
    ContactInfoPage,
    LoanPage,
    CustomerReviewPage,
    LoanViewPage,
    CustomerPage,
    AgentPage,
    SegmentPage,
    NotificationPage,
    ContactDirectoryPage,
    SampleFlatsPage,
    SampleFlatViewPage,
    MdlCsrPage,
    PipesAndFittingsPage,
    PandFTabsPage,
    PipeHomePage,
    PipeProductsPage,
    PipeGalleryPage,
    PipeEnquiryPage,
    PipeNotificationPage,
    PipeProjectSubPage,
    PipeContactPage,
    MultiColorPage,
    MultiHomePage,
    MultiTabsPage,
    MultiAboutUsPage,
    MultiChairmanPage,
    MultiPrintingPage,
    MultiStaionaryPage,
    MultiContactPage,
    MultiSchoolStnryPage,
    MultiOfficeStnryPage,
    MirajGroupPage,
    MultiEnquiryPage,
    PipeProjectDetailPage,
    MgNotificationPage,
    MgTabsPage,
    MgHomePage,
    MgBusinessPage,
    MgAboutUsPage,
    MgOurBusinessPage,
    MgEnquiryPage,
    MgcontactUsPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {}, {
      links: [
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: RealTabsPage, name: 'TabsPage', segment: 'real-tabs' },
        { component: AboutPage, name: 'About', segment: 'about' },
        { component: ContactPage, name: 'Contact', segment: 'contact' },
        { component: ProjectsPage, name: 'Projects', segment: 'projects' },
        { component: LoanPage, name: 'Loan', segment: 'loan' },
        { component: CustomerPage, name: 'Customer', segment: 'customer' },
        { component: AgentPage, name: 'Agent', segment: 'agent' },
        { component: CustomerReviewPage, name: 'Review', segment: 'customer-review' },
        { component: ContactInfoPage, name: 'Contact Info', segment: 'ContactInfoPage' },
        { component: SampleFlatsPage, name: 'Sample Flats', segment: 'SampleFlatsPage' },
        { component: MdlCsrPage, name: 'MdlCsr', segment: 'MdlCsrPage' },
        { component: PipesAndFittingsPage, name: 'PipesAndFittingsPage', segment: 'PipesAndFittingsPage' },
        { component: PandFTabsPage, name: 'PandFTabsPage', segment: 'PandFTabsPage' },
        { component: PipeHomePage, name: 'PipeHomePage', segment: 'PipeHomePage' },
        { component: PipeProductsPage, name: 'PipeProductsPage', segment: 'PipeProductsPage' },
        { component: PipeGalleryPage, name: 'PipeGalleryPage', segment: 'PipeGalleryPage' },
        { component: PipeEnquiryPage, name: 'PipeEnquiryPage', segment: 'PipeEnquiryPage' },
        { component: PipeProjectDetailPage, name: 'PipeProjectDetailPage', segment: 'PipeProjectDetailPage' },
        { component: PipeContactPage, name: 'PipeContactPage', segment: 'PipeContactPage' },
        { component: PipeProjectSubPage, name: 'PipeProjectSubPage', segment: 'PipeProjectSubPage' },
        { component: PipeNotificationPage, name: 'PipeNotificationPage', segment: 'PipeNotificationPage' },
        { component: MultiTabsPage, name: 'MultiTabsPage', segment: 'MultiTabsPage' },
        { component: MultiHomePage, name: 'MultiHomePage', segment: 'MultiHomePage' },
        { component: MultiAboutUsPage, name: 'MultiAboutUsPage', segment: 'MultiAboutUsPage' },
        { component: MultiStaionaryPage, name: 'MultiStaionaryPage', segment: 'MultiStaionaryPage' },
        { component: MultiChairmanPage, name: 'MultiChairmanPage', segment: 'MultiChairmanPage' },
        { component: MultiPrintingPage, name: 'MultiPrintingPage', segment: 'MultiPrintingPage' },
        { component: MultiEnquiryPage, name: 'MultiEnquiryPage', segment: 'MultiEnquiryPage' },
        { component: MultiContactPage, name: 'MultiContactPage', segment: 'MultiContactPage' },
        { component: MultiSchoolStnryPage, name: 'MultiSchoolStnryPage', segment: 'MultiSchoolStnryPage' },
        { component: MultiOfficeStnryPage, name: 'MultiOfficeStnryPage', segment: 'MultiOfficeStnryPage' },
        { component: MultiNotificationPage, name: 'MultiNotificationPage', segment: 'MultiNotificationPage' },
        { component: MirajGroupPage, name: 'MirajGroupPage', segment: 'MirajGroupPage' },
        { component: MgNotificationPage, name: 'MgNotificationPage', segment: 'MgNotificationPage' },
        { component: MgTabsPage, name: 'MgTabsPage', segment: 'MgTabsPage' },
        { component: MgBusinessPage, name: 'MgBusinessPage', segment: 'MgBusinessPage' },
        { component: MgHomePage, name: 'MgHomePage', segment: 'MgHomePage' },
        { component: MgAboutUsPage, name: 'MgAboutUsPage', segment: 'MgAboutUsPage' },
        { component: MgOurBusinessPage, name: 'MgOurBusinessPage', segment: 'MgOurBusinessPage' },
        { component: MgEnquiryPage, name: 'MgEnquiryPage', segment: 'MgEnquiryPage' },
        { component: MgcontactUsPage, name: 'MgcontactUsPage', segment: 'MgcontactUsPage' },
      ]
    }),
    Ionic2RatingModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MainPage,
    RealEstatePage,
    HomePage,
    AboutPage,
    ContactPage,
    ProjectsPage,
    ProjectViewPage,
    LoanPage,
    ContactInfoPage,
    LoanViewPage,
    CustomerPage,
    CustomerReviewPage,
    AgentPage,
    RealTabsPage,
    SegmentPage,
    NotificationPage,
    ContactDirectoryPage,
    SampleFlatsPage,
    SampleFlatViewPage,
    MdlCsrPage,
    PipesAndFittingsPage,
    PandFTabsPage,
    PipeHomePage,
    PipeProductsPage,
    PipeProjectSubPage,
    PipeNotificationPage,
    PipeGalleryPage,
    PipeProjectDetailPage,
    PipeEnquiryPage,
    PipeContactPage,
    MultiColorPage,
    MultiHomePage,
    MultiTabsPage,
    MultiAboutUsPage,
    MultiChairmanPage,
    MultiPrintingPage,
    MultiStaionaryPage,
    MultiEnquiryPage,
    MirajGroupPage,
    MultiSchoolStnryPage,
    MultiOfficeStnryPage,
    MultiContactPage,
    MgNotificationPage,
    MgTabsPage,
    MgHomePage,
    MgAboutUsPage,
    MgOurBusinessPage,
    MgBusinessPage,
    MgEnquiryPage,
    MgcontactUsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    AppAvailability,
    Device,
    DatePipe,
    // FCM,
    CallNumber,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ProjectsProvider,
    ConfigProvider,
    UserProvider,
    LoanProvider,
    ContactProvider,
    NotificationProvider,
    CustomerReviewProvider,
    ContactInfoProvider,
    ContactDirectoryProvider,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    Network,
    ToastProvider,
    NetworkProvider,
    LoaderProvider,
    AgentProvider,
    SampleFlatsProvider,
    MdlCsrProvider,
    PipeEnquiryProvider,
    MgContactProvider,
    MultiContactProvider,
    PipeProjectsProvider,
    MgBusinessProvider,
  ]
})
export class AppModule { }
