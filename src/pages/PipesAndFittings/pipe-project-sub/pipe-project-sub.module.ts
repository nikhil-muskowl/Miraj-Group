import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeProjectSubPage } from './pipe-project-sub';

@NgModule({
  declarations: [
    PipeProjectSubPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeProjectSubPage),
  ],
})
export class PipeProjectSubPageModule {}
