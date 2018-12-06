import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgNotificationPage } from './mg-notification';

@NgModule({
  declarations: [
    MgNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(MgNotificationPage),
  ],
})
export class MgNotificationPageModule {}
