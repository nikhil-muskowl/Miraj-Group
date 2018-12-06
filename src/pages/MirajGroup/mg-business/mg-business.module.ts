import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgBusinessPage } from './mg-business';

@NgModule({
  declarations: [
    MgBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(MgBusinessPage),
  ],
})
export class MgBusinessPageModule {}
