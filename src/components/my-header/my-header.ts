import { Component } from '@angular/core';
import { Events, ModalController, Platform, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ViewCartPage } from '../../pages/view-cart/view-cart'

/**
 * Generated class for the MyHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-header',
  templateUrl: 'my-header.html'
})
export class MyHeaderComponent {

  // text: string;
  totalCartQty = 0

  constructor(
    public events: Events,
    private storage: Storage,
    public modalCtrl: ModalController) {
    // console.log('Hello MyHeaderComponent Component');
    // this.text = 'Hello World';
    this.updateCart()

    events.subscribe('cart:updateCart', () => {
      this.updateCart();
    });
  }

  updateCart(){
    this.storage.get('cart').then((cart) => {
      if (cart == null) {
        this.totalCartQty = 0
      } else {
        this.totalCartQty = cart.totalQty
      }
    });
  }

  viewCart() {
    let modal = this.modalCtrl.create(ViewCartPage);
    modal.present();
    // console.log('call view cart')
  }

}
