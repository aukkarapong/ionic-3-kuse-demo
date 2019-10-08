import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { AddBookPage } from '../add-book/add-book';
import { EditBookPage } from '../edit-book/edit-book';

/**
 * Generated class for the BookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book',
  templateUrl: 'book.html',
})
export class BookPage {

  books: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidEnter(){
    this.getBooks();
  }

  getBooks() {
    this.restProvider.getBooks()
    .then(data => {
      this.books = data
    });
  }

  addBook(){
    this.navCtrl.push(AddBookPage);
  }

  deleteBook(event, book) {
    this.restProvider.deleteBook(book.id);
    this.getBooks();
  }

  editBook(event, book) {
    this.navCtrl.push(EditBookPage, {
      book: book
    });
  }

}
