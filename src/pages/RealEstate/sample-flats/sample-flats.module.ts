import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleFlatsPage } from './sample-flats';

@NgModule({
  declarations: [
    SampleFlatsPage,
  ],
  imports: [
    IonicPageModule.forChild(SampleFlatsPage),
  ],
})
export class SampleFlatsPageModule {}
