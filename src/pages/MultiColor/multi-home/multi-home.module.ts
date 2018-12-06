import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiHomePage } from './multi-home';

@NgModule({
  declarations: [
    MultiHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MultiHomePage),
  ],
})
export class MultiHomePageModule {}
