import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail'

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the SnackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-snack',
  templateUrl: 'snack.html',
})
export class SnackPage {

  items: any

  minOrder: number = 1
  maxOrder: number = 10

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BeveragePage');
  }

  ionViewDidEnter(){
    // this.getUsersTest();
    this.getSnackProducts();
  }

  getSnackProducts() {
    this.restProvider.getSnackProducts()
    .then(data => {
      this.items = data
      this.items.map((item, index) => {
        item.selectedQty = "1"
        this.items[index] = item
      })
    });
  }

  itemSelected(selectedProduct) {
    ProductDetailPage
    this.navCtrl.push(ProductDetailPage, {
      product: selectedProduct
    });
  }
  
  decressQty(index) {
    let selectedQty: number = parseInt(this.items[index].selectedQty) - 1;
    if (this.lessterThanMinOrder(selectedQty)) {
      selectedQty = this.minOrder;
    }
    this.items[index].selectedQty = selectedQty.toString()
  }
  
  incressQty(index) {
    let selectedQty: number = parseInt(this.items[index].selectedQty) + 1;
    if (this.greaterThanMaxOrder(selectedQty)) {
      selectedQty = this.maxOrder;
    }
    this.items[index].selectedQty = selectedQty.toString()
  }

  lessterThanMinOrder(qty) {
    if (qty < this.minOrder) return true
    return false
  }

  greaterThanMaxOrder(qty) {
    if (qty > this.maxOrder) return true
    return false
  }

}
