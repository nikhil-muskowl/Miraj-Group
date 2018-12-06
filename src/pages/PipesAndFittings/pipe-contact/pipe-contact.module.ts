import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeContactPage } from './pipe-contact';

@NgModule({
  declarations: [
    PipeContactPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeContactPage),
  ],
})  
export class PipeContactPageModule {}
