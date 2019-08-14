import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SushiPage } from './sushi';

@NgModule({
  declarations: [
    SushiPage,
  ],
  imports: [
    IonicPageModule.forChild(SushiPage),
  ],
})
export class SushiPageModule {}
