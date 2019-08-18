import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Events } from 'ionic-angular';

/**
 * Generated class for the ViewCartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-cart',
  templateUrl: 'view-cart.html',
})
export class ViewCartPage {

  cartItems: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    private storage: Storage,
    public events: Events) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ViewCartPage');
  }

  ionViewDidEnter(){
    // console.log(this.product);
    this.loadCart()
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  loadCart() {
    this.storage.get('cart').then((cart) => {
      this.cartItems = cart.items
    });
  }

  deleteCartItem(item){
    this.storage.get('cart').then((cart) => {
      const newItems = cart.items.filter((element, index) => {
        return element.productId != item.productId
      })
      cart.items = newItems

      const newTotalQty = cart.items.reduce((totalQty, element) => {
        return parseInt(totalQty) + parseInt(element.selectedQty)
      }, 0)
      
      const newTotalPrice = cart.items.reduce((totalPrice, element) => {
        return parseFloat(totalPrice) + (parseFloat(element.selectedQty) * parseFloat(element.price))
      }, 0)

      cart.totalQty = newTotalQty
      cart.totalPrice = newTotalPrice
      this.storage.set('cart', cart)
      .then(() => {
        this.events.publish('cart:updateCart');
        this.loadCart()
      })   
    });    
  }

}
