import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BentoPage } from './bento';

@NgModule({
  declarations: [
    BentoPage,
  ],
  imports: [
    IonicPageModule.forChild(BentoPage),
  ],
})
export class BentoPageModule {}
