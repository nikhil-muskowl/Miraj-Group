import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgAboutUsPage } from './mg-about-us';

@NgModule({
  declarations: [
    MgAboutUsPage,
  ],
  imports: [
    IonicPageModule.forChild(MgAboutUsPage),
  ],
})
export class MgAboutUsPageModule {}
