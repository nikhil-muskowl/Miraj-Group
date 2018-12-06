import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MgOurBusinessPage } from './mg-our-business';

@NgModule({
  declarations: [
    MgOurBusinessPage,
  ],
  imports: [
    IonicPageModule.forChild(MgOurBusinessPage),
  ],
})
export class MgOurBusinessPageModule {}
