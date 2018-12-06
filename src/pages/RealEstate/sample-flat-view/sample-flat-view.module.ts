import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SampleFlatViewPage } from './sample-flat-view';

@NgModule({
  declarations: [
    SampleFlatViewPage,
  ],
  imports: [
    IonicPageModule.forChild(SampleFlatViewPage),
  ],
})
export class SampleFlatViewPageModule {}
