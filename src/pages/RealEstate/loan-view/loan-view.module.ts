import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoanViewPage } from './loan-view';

@NgModule({
  declarations: [
    LoanViewPage,
  ],
  imports: [
    IonicPageModule.forChild(LoanViewPage),
  ],
})
export class LoanViewPageModule {}
