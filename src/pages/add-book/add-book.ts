import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'

@IonicPage()
@Component({
  selector: 'page-add-book',
  templateUrl: 'add-book.html',
})
export class AddBookPage {
  
  book = {
    isbn: '',
    name: '',
    releaseDate: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    
  }

  saveBook() {
    this.restProvider.saveBook(this.book).then(
      result => {
        this.navCtrl.pop()
      },
      err => {
        console.log(err)
      }
    )
  }

}
