import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BeveragePage } from './beverage';

@NgModule({
  declarations: [
    BeveragePage,
  ],
  imports: [
    IonicPageModule.forChild(BeveragePage),
  ],
})
export class BeveragePageModule {}
