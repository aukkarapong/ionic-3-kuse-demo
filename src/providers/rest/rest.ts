import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'https://jsonplaceholder.typicode.com';
  oishiApiUrl = 'http://www.zp11107.tld.122.155.17.167.no-domain.name/oishi';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  getUsersTest() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/users').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getPromotionProducts() {
    return new Promise(resolve => {
      this.http.get(this.oishiApiUrl+'/products.php?type=promotions').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getBentoProducts() {
    return new Promise(resolve => {
      this.http.get(this.oishiApiUrl+'/products.php?type=bento').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getSnackProducts() {
    return new Promise(resolve => {
      this.http.get(this.oishiApiUrl+'/products.php?type=snack').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getRiceProducts() {
    return new Promise(resolve => {
      this.http.get(this.oishiApiUrl+'/products.php?type=rice').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getSushiProducts() {
    return new Promise(resolve => {
      this.http.get(this.oishiApiUrl+'/products.php?type=sushi').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getDelicatessenProducts() {
    return new Promise(resolve => {
      this.http.get(this.oishiApiUrl+'/products.php?type=delicatessen').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }
  
  getBeverageProducts() {
    return new Promise(resolve => {
      this.http.get(this.oishiApiUrl+'/products.php?type=beverage').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  login(requestData){
    return new Promise((resolve, reject) => {
      this.http.post(this.oishiApiUrl + '/login.php', JSON.stringify(requestData)).subscribe(data => {
        resolve(data)
      }, err => {
        reject(err)
      });
    });
  }

}
