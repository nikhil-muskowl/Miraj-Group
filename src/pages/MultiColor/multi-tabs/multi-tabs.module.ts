import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiTabsPage } from './multi-tabs';

@NgModule({
  declarations: [
    MultiTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiTabsPage),
  ],
})
export class MultiTabsPageModule {}
