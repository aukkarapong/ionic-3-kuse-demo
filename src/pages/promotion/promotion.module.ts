import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PromotionPage } from './promotion';

@NgModule({
  declarations: [
    PromotionPage,
  ],
  imports: [
    IonicPageModule.forChild(PromotionPage),
  ],
})
export class PromotionPageModule {}
