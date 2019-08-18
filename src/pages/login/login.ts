import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { PromotionPage } from '../promotion/promotion';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: String
  password: String

  response: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public restProvider: RestProvider,
    public alertCtrl: AlertController,
    private storage: Storage,
    public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signIn(){
    console.log('email = ', this.email);
    console.log('password = ', this.password);
    const requestData = {
      email: this.email,
      password: this.password
    }

    this.restProvider.login(requestData).then(
      data => {
        this.response = data
        if (this.response.status == 'error') {
          const alert = this.alertCtrl.create({
            title: 'Login Fail',
            subTitle: this.response.message,
            buttons: ['Close']
          });
          alert.present();
        } else {
          this.storage.set('userProfile', this.response.member).then(() => {
            this.events.publish('login:loginSuccess');
          }).then(() => {
            this.navCtrl.setRoot(PromotionPage);
            this.navCtrl.popToRoot();
          })
          
        }
      },
      err => {
        console.log(err)
      }
    )
  }

}
