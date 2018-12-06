import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactDirectoryPage } from './contact-directory';

@NgModule({
  declarations: [
    ContactDirectoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactDirectoryPage),
  ],
})
export class ContactDirectoryPageModule {}
