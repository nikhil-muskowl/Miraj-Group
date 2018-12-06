import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgHomePage } from './mg-home';

@NgModule({
  declarations: [
    MgHomePage,
  ],
  imports: [
    IonicPageModule.forChild(MgHomePage),
  ],
})
export class MgHomePageModule {}
