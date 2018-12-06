import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiColorPage } from './multi-color';

@NgModule({
  declarations: [
    MultiColorPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiColorPage),
  ],
})
export class MultiColorPageModule {}
