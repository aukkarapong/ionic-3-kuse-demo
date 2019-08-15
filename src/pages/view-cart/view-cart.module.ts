import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewCartPage } from './view-cart';

@NgModule({
  declarations: [
    ViewCartPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewCartPage),
  ],
})
export class ViewCartPageModule {}
