import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiContactPage } from './multi-contact';

@NgModule({
  declarations: [
    MultiContactPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiContactPage),
  ],
})
export class MultiContactPageModule {}
