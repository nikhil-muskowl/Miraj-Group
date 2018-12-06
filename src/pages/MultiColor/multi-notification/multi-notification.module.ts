import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiNotificationPage } from './multi-notification';

@NgModule({
  declarations: [
    MultiNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiNotificationPage),
  ],
})
export class MultiNotificationPageModule {}
