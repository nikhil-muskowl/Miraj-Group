import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipeProductsPage } from './pipe-products';

@NgModule({
  declarations: [
    PipeProductsPage,
  ],
  imports: [
    IonicPageModule.forChild(PipeProductsPage),
  ],
})
export class PipeProductsPageModule {}
