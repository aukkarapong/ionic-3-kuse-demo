import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditBookPage } from './edit-book';

@NgModule({
  declarations: [
    EditBookPage,
  ],
  imports: [
    IonicPageModule.forChild(EditBookPage),
  ],
})
export class EditBookPageModule {}
