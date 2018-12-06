import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeProjectDetailPage } from './pipe-project-detail';

@NgModule({
  declarations: [
    PipeProjectDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeProjectDetailPage),
  ],
})
export class PipeProjectDetailPageModule {}
