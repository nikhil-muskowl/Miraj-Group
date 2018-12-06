import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PandFTabsPage } from './pand-f-tabs';

@NgModule({
  declarations: [
    PandFTabsPage,
  ],
  imports: [
    IonicPageModule.forChild(PandFTabsPage),
  ],
})
export class PandFTabsPageModule {}
