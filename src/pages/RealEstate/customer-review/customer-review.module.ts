import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerReviewPage } from './customer-review';

@NgModule({
  declarations: [
    CustomerReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomerReviewPage),
  ],
})
export class CustomerReviewPageModule {}
