import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SnackPage } from './snack';

@NgModule({
  declarations: [
    SnackPage,
  ],
  imports: [
    IonicPageModule.forChild(SnackPage),
  ],
})
export class SnackPageModule {}
