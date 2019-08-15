start project
```
ionic start oishi --type=ionic-angular sidemenu
```

goto project folder
```
cd oishi
```

test start ionic project
```
ionic serve
```

เพิ่ม side menu
> แก้ไขไฟล์ /src/app/app.component.ts

สร้างหน้าใหม่ เพื่อรองรับแต่ละเมนู
:: https://ionicframework.com/docs/cli/commands/generate
```
ionic generate page register
```

เชื่อม menu ที่สร้าง ไปยัง page ใหม่
> แก้ไขไฟล์ /src/app/app.component.ts
> แก้ไขไฟล์ /src/app/app.module.ts

เพิ่ม Toggle Menu ในหน้าใหม่
> แก้ไฟล์ /src/pages/{page-folder}/{page-name}.html

แก้ไขหน้า default ที่ต้องการให้เข้ามาใน application
> แก้ไฟล์  /src/app/app.component.ts (rootPage)

test บน mobile view
> Firefox >> Tools > Web Developer > Responsive Design Mode

https://ionicframework.com/img/ionic-logo-white.svg

สร้าง MyHeader component

```
ionic generate component MyHeader
```
- add MyHeaderComponent ใน app.module.ts
- ใช้งาน MyHeaderComponent 
>> ใส่ <my-header></my-header> ใน ?.html เพื่อแทน header เดิม จะได้ไม่ต้องตามแก้ไข header ทุกหน้า

สร้าง Page ต่าง ๆ ให้ครบ และสร้าง link แต่ละ menu ไปยัง page ต่าง ๆ เหมือนขั้นตอนด้านบน
```
ionic generate page {page name}
```

แก้ไข Header โดยเอา component header มาใช้ เหมือนขั้นตอนด้านบน
> src/pages/{page folder}/{page}.html

สร้าง view (ไฟล์ .html)
> src/pages/promotion/promotion.html

สร้าง Mockup Data (ไฟล์ .ts)
> src/pages/promotion/promotion.ts

ทำการวนลูปแสดง Mockup Data และทำ event click เพื่อให้ไปแสดงรายละเอียดสินค้า
> src/pages/promotion/promotion.html

create new page ที่จะใช้แสดงรายละเอียดสินค้า โดยใช้ command 
```
ionic generate page product-detail
```

add page ที่สร้างเข้า promotion.module.ts, app.module.ts

ทำการส่งค่าสินค้าที่เลือกจากหน้า promotion ไปยังหน้า product-detail
> src/pages/promotion/promotion.ts, src/pages/promotion/promotion.html<br />
> src/pages/product-detail/product-detail.ts, src/pages/product-detail/product-detail.html

ดึงข้อมูลสินค้าจาก api มาแสดง

ลง package เพิ่มดังนี้
```
npm install @angular/common@latest --save
npm install @angular/compiler@latest --save
npm install @angular/compiler-cli@latest --save
npm install @angular/core@latest --save
npm install @angular/forms@latest --save
npm install @angular/http@latest --save
npm install @angular/platform-browser@latest --save
npm install @angular/platform-browser-dynamic@latest --save
```

แก้ไข src/app/app.module.ts
```
import { HttpClientModule } from '@angular/common/http';
...
imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
```