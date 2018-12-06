import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeNotificationPage } from './pipe-notification';

@NgModule({
  declarations: [
    PipeNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeNotificationPage),
  ],
})
export class PipeNotificationPageModule {}
