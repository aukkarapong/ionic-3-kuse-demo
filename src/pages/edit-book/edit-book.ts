import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

@IonicPage()
@Component({
  selector: 'page-edit-book',
  templateUrl: 'edit-book.html',
})
export class EditBookPage {

  selectedBook: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.selectedBook = navParams.get('book')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditBookPage');
  }

  updateBook() {
    this.restProvider.updateBook(this.selectedBook).then(
      result => {
        this.navCtrl.pop()
      },
      err => {
        console.log(err)
      }
    )
  }

}
