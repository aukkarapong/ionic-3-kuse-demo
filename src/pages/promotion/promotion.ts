import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductDetailPage } from '../product-detail/product-detail'

import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';

import { Events } from 'ionic-angular';

/**
 * Generated class for the PromotionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promotion',
  templateUrl: 'promotion.html',
})
export class PromotionPage {
  /* items = [
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

  items: any

  minOrder: number = 1
  maxOrder: number = 10

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public restProvider: RestProvider, 
    private storage: Storage,
    public events: Events) {
    
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad PromotionPage');
  }

  ionViewDidEnter(){
    // this.getUsersTest();
    this.getPromotionProducts();
  }

  getUsersTest() {
    this.restProvider.getUsersTest()
    .then(data => {
      console.log('#####')
      console.log(data)
      console.log('#####')
    });
  }

  getPromotionProducts() {
    this.restProvider.getPromotionProducts()
    .then(data => {
      this.items = data
      this.items.map((item, index) => {
        item.selectedQty = "1"
        this.items[index] = item
      })
    });
  }

  itemSelected(selectedProduct) {
    // console.log("Selected Item", item);
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
