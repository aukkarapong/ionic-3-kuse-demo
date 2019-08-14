import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DelicatessenPage } from './delicatessen';

@NgModule({
  declarations: [
    DelicatessenPage,
  ],
  imports: [
    IonicPageModule.forChild(DelicatessenPage),
  ],
})
export class DelicatessenPageModule {}
