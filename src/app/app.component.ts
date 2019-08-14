import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // rootPage: any = HomePage;
  rootPage: any = PromotionPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      // { title: 'Home', component: HomePage },
      // { title: 'List', component: ListPage },
      { title: 'เข้าสู่ระบบ | สมัครสมาชิก', component: RegisterPage },
      { title: 'โปรโมชั่น', component: PromotionPage },
      { title: 'ชุดเบนโตะ', component: BentoPage },
      { title: 'อาหารทานเล่น', component: SnackPage },
      { title: 'ข้าวหน้าและซุปต่าง ๆ', component: RicePage },
      { title: 'ซูชิ', component: SushiPage },
      { title: 'อาหารสำเร็จรูป', component: DelicatessenPage },
      { title: 'เครื่องดื่ม', component: BeveragePage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
