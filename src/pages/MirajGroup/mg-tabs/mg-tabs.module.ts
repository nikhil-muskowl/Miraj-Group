import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgTabsPage } from './mg-tabs';

@NgModule({
  declarations: [
    MgTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MgTabsPage),
  ],
})
export class MgTabsPageModule {}
