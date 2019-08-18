import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PromotionPage } from '../promotion/promotion';

/**
 * Generated class for the LogoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-logout',
  templateUrl: 'logout.html',
})
export class LogoutPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LogoutPage');
  }

  ionViewDidEnter() {
    this.storage.remove('userProfile').then(() => {
      this.events.publish('login:loginSuccess');
    }).then(() => {
      this.navCtrl.setRoot(PromotionPage);
      this.navCtrl.popToRoot();
    });   
  }

}
