import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeAboutUsPage } from './pipe-about-us';

@NgModule({
  declarations: [
    PipeAboutUsPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeAboutUsPage),
  ],
})
export class PipeAboutUsPageModule {}
