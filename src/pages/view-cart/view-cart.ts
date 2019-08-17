import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

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

  /* cartItems = [
    {
      productId: "1",
      productName: "B02 ซูชิ บัดดี้ เซท",
      category: "ซูชิ",
      price: "470.00",
      image: "https://oishidelivery.com/storage/uploads/menus/51b980d1d9b0857c902cc83283fef7a6.jpg",
      selectedQty: "1"
    },
    {
      productId: "2",
      productName: "C08 ข้าวหน้าแซลม่อน ย่างซีอิ๊ว",
      category: "ข้าวหน้าและซุปต่าง ๆ",
      price: "169.00",
      image: "https://oishidelivery.com/storage/uploads/menus/c2412bb8fcb70a289c2456a3f3a628fb.jpg",
      selectedQty: "1"
    },
    {
      productId: "3",
      productName: "A02 ซาบะ เบนโตะ เซท",
      category: "เบนโตะ",
      price: "189.00",
      image: "https://oishidelivery.com/storage/uploads/menus/5b95874936f69c5b0aef051e6a375a48.jpg",
      selectedQty: "1"
    }
  ]; */
  cartItems: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    private storage: Storage) {
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

}
