import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RicePage } from './rice';

@NgModule({
  declarations: [
    RicePage,
  ],
  imports: [
    IonicPageModule.forChild(RicePage),
  ],
})
export class RicePageModule {}
