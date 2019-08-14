import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = navParams.get("product");
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailPage');
  }

  ionViewDidEnter(){
    console.log(this.product);
  }

}
