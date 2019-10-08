import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegisterPage } from '../pages/register/register';
import { PromotionPage } from '../pages/promotion/promotion';
import { BentoPage } from '../pages/bento/bento';
import { SnackPage } from '../pages/snack/snack';
import { RicePage } from '../pages/rice/rice';
import { SushiPage } from '../pages/sushi/sushi';
import { DelicatessenPage } from '../pages/delicatessen/delicatessen';
import { BeveragePage } from '../pages/beverage/beverage';
import { ProductDetailPage } from '../pages/product-detail/product-detail';
import { ViewCartPage } from '../pages/view-cart/view-cart';
import { LoginPage } from '../pages/login/login';
import { LogoutPage } from '../pages/logout/logout';
import { GoogleMapsPage } from '../pages/google-maps/google-maps';
import { BookPage } from '../pages/book/book';
import { AddBookPage } from '../pages/add-book/add-book';
import { EditBookPage } from '../pages/edit-book/edit-book';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// My Header
import { MyHeaderComponent } from '../components/my-header/my-header'

import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    PromotionPage,
    BentoPage,
    SnackPage,
    RicePage,
    SushiPage,
    DelicatessenPage,
    BeveragePage,
    ProductDetailPage,
    ViewCartPage,
    LoginPage,
    LogoutPage,
    GoogleMapsPage,
    BookPage,
    AddBookPage,
    EditBookPage,
    // My Header
    MyHeaderComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    RegisterPage,
    PromotionPage,
    BentoPage,
    SnackPage,
    RicePage,
    SushiPage,
    DelicatessenPage,
    BeveragePage,
    ProductDetailPage,
    ViewCartPage,
    LogoutPage,
    LoginPage,
    GoogleMapsPage,
    BookPage,
    AddBookPage,
    EditBookPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider
  ]
})
export class AppModule {}
