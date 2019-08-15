import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from '@ionic/storage';

import { Events } from 'ionic-angular';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

  product: any
  minOrder: number = 1
  maxOrder: number = 10

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public events: Events) {
    this.product = navParams.get("product");
    // console.log(this.product);
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ProductDetailPage');
  }

  ionViewDidEnter(){
    // console.log(this.product);
  }

  decressQty() {
    let selectedQty: number = parseInt(this.product.selectedQty) - 1;
    if (this.lessterThanMinOrder(selectedQty)) {
      selectedQty = this.minOrder;
    }
    this.product.selectedQty = selectedQty.toString()
  }
  
  incressQty() {
    let selectedQty: number = parseInt(this.product.selectedQty) + 1;
    if (this.greaterThanMaxOrder(selectedQty)) {
      selectedQty = this.maxOrder;
    }
    this.product.selectedQty = selectedQty.toString()
  }

  lessterThanMinOrder(qty) {
    if (qty < this.minOrder) return true
    return false
  }

  greaterThanMaxOrder(qty) {
    if (qty > this.maxOrder) return true
    return false
  }

  addToCart(item) {
    this.storage.get('cart').then((cart) => {
      if (cart == null) {
        cart = {
          totalQty: item.selectedQty,
          totalPrice: parseFloat(item.selectedQty) * parseFloat(item.price),
          items: [
            item
          ]
        }
        this.storage.set('cart', cart)
        .then(() => {
          this.events.publish('cart:updateCart');
        })
        
      } else {
        const isDuplicate = this.checkProductInCartItems(cart.items, item)
        if ( isDuplicate ) {
          const newItems = cart.items.map((element, index) => {
            if (element.productId != item.productId) {
              return element
            } else {
              element.selectedQty = parseInt(element.selectedQty) + parseInt(item.selectedQty)
              return element
            }
          })
          cart.items = newItems
        } else {
          cart.items.push(item)
        }
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
        })        
      }
    });
  }

  checkProductInCartItems(cartItems, product){
    let isDuplicateProduct = cartItems.find(item => {
      return item.productId == product.productId
    })
    if (isDuplicateProduct === undefined) return false
    return true
  }

}
