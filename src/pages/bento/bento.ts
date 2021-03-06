import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail'

import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the BentoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bento',
  templateUrl: 'bento.html',
})
export class BentoPage {

  items: any

  minOrder: number = 1
  maxOrder: number = 10

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad BentoPage');
  }

  ionViewDidEnter(){
    // this.getUsersTest();
    this.getBentoProducts();
  }

  getBentoProducts() {
    this.restProvider.getBentoProducts()
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
