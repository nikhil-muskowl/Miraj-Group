import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeHomePage } from './pipe-home';

@NgModule({
  declarations: [
    PipeHomePage,
  ],
  imports: [
    IonicPageModule.forChild(PipeHomePage),
  ],
})
export class PipeHomePageModule {}
