import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeEnquiryPage } from './pipe-enquiry';

@NgModule({
  declarations: [
    PipeEnquiryPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeEnquiryPage),
  ],
})
export class PipeEnquiryPageModule {}
