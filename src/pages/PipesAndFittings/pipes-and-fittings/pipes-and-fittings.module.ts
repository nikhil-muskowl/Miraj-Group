import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PipesAndFittingsPage } from './pipes-and-fittings';

@NgModule({
  declarations: [
    PipesAndFittingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PipesAndFittingsPage),
  ],
})
export class PipesAndFittingsPageModule {}
