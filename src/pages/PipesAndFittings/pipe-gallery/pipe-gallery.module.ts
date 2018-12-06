import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeGalleryPage } from './pipe-gallery';

@NgModule({
  declarations: [
    PipeGalleryPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeGalleryPage),
  ],
})
export class PipeGalleryPageModule {}
