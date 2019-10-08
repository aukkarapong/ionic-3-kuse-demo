# การใช้งาน Google Maps บน Ionic 3

## 1. Document จาก Ionic Framework
```
https://github.com/ionic-team/ionic-native-google-maps/blob/master/documents/README.md
```

## 2. ตัวอย่าง Source Code การใช้งาน Google Maps บน Ionic Framework 3 แบบต่าง ๆ
```
https://github.com/mapsplugin/cordova-plugin-googlemaps
```

## 3. สิ่งที่ต้องเตรียมก่อนใช้งาน Google Maps บน Ionic Framework
```
3.1 สร้าง Google API Key
  3.1.1 สร้าง Key สำหรับ Javascript API
  3.1.2 สร้าง Key สำหรับ iOS API
  3.1.3 สร้าง Key สำหรับ Android API 
```

### **3.1.1 สร้าง Key สำหรับ Javascript API (ที่เราจะเรียนกันในวันนี้)**
```
https://developers.google.com/maps/documentation/javascript/tutorial
```

### 3.1.2 สร้าง Key สำหรับ iOS API
```
https://developers.google.com/maps/documentation/ios-sdk/intro
```

### 3.1.3 สร้าง Key สำหรับ Android API 
```
https://developers.google.com/maps/documentation/android-sdk/intro
```

### Key ตัวอย่างที่สร้างไว้แล้ว 
```
Android     :: AIzaSyAMTWAEPTLd3zV8MvCvCwOR_-h7m2-C6uQ
iOS         :: AIzaSyBOT7Z8bfbFtjDq9HOPmLZANb0QivxXUIY
Javascript  :: AIzaSyCeLt4q_rdFcYI6iAvEwq3m-QNtWh7iQSc
```

## 4. Plugin ที่ต้องลง
### 4.1 cordova-plugin-googlemaps
```
ionic cordova plugin add cordova-plugin-googlemaps --variable API_KEY_FOR_ANDROID="AIzaSyAMTWAEPTLd3zV8MvCvCwOR_-h7m2-C6uQ" --variable API_KEY_FOR_IOS="AIzaSyBOT7Z8bfbFtjDq9HOPmLZANb0QivxXUIY"
```
### 4.2 @ionic-native/core **(สำหรับ ionic3 จะใช้ได้ที่ version 4.17.0)**
```
npm i --save @ionic-native/core@4.17.0
```
### 4.3 @ionic-native/google-maps **(สำหรับ ionic3 จะใช้ได้ที่ version 4.15.1)
```
npm i --save @ionic-native/google-maps@4.15.1
```

<br />
<hr />
<br />

# เริ่มต้นเขียน Ionic Frame 3 ใช้งาน Google Maps

## 1. สร้าง page ใหม่
```
ionic generate page google-maps
```
สร้าง page เสร็จแล้วต้องทำการ declarations ที่ app.component.ts และ app.module.ts

## 2. แก้ไข html เพื่อกำหนดพื้นที่วาด maps
```
<div id="map_canvas">
  <button ion-button (click)="gotoCurrentPosition($event)">ตำแหน่งปัจจุบัน</button>
</div>
```

## 3. แก้ไข css เพื่อให้ maps มีขนาดแบบ full screen
```
#map_canvas {
  height: 100%;
}
```

## 4. แก้ไขไฟล์ ts 

### 4.1 import google maps library
```
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  GoogleMapOptions,
  CameraPosition,
  MarkerOptions,
  Marker,
  Environment,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';
```

### 4.2 สร้างตัวแปรเพื่อมารับค่า
```
map: GoogleMap;
location: any;
```

### 4.3 ใน ionViewDidLoad เขียนให้ดึงตำแหน่งปัจจุบัน และทำการ Load Map
```
Promise.resolve()
  .then( () => {
    this.getLocations()
  })
  .then( () => {
    this.loadMap()
  })
```

### 4.4 getLocation
```
getLocations() {
  
}
```

### 4.5 loadMap
```
loadMap() {
  Environment.setEnv({
    'API_KEY_FOR_BROWSER_RELEASE': 'AIzaSyCeLt4q_rdFcYI6iAvEwq3m-QNtWh7iQSc',
    'API_KEY_FOR_BROWSER_DEBUG': 'AIzaSyCeLt4q_rdFcYI6iAvEwq3m-QNtWh7iQSc'
  })

  this.map = GoogleMaps.create('map_canvas', {
    camera: {
      target: {
        lat: 13.736717,
        lng: 100.523186
      },
      zoom: 18,
      tilt: 30
    }
  })
}
```

### 4.6 การดัก event ในการ click ที่ map
```
this.map.one(GoogleMapsEvent.MAP_READY)
  .then( () => {
    console.log(">>>> MAP_READY <<<<")
    this.map.on(GoogleMapsEvent.MAP_LONG_CLICK).subscribe( (data) => {
      console.log(data)
    })
  })
```

### 4.7 การ add marker
```
this.map.addMarker({
  title: `Click lat = ${data[0].lat} lng = ${data[0].lng}`,
  icon: 'blue',
  position: {
    lat: data[0].lat,
    lng: data[0].lng
  },
  snippet: 'click to save'
})
.then( marker => {
  this.map.animateCamera({
    target: data[0],
    zoom: 18,
    duration: 1000
  })

  marker.on( GoogleMapsEvent.INFO_CLICK ).subscribe( () => {
    console.log('INFO_CLICK')
  })
})
```

### 4.8 เพิ่มปุ่มและ function ให้ไปยังตำแหน่งปัจจุบัน
```
gotoCurrentPosition() {
  this.map.clear();
  // Get the location of you
  this.map.getMyLocation()
    .then((location: MyLocation) => {
      console.log('##### location #####');
      console.log(location);

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 17,
        tilt: 30
      })
      .then(() => {
        // add a marker
        let marker: Marker = this.map.addMarkerSync({
          title: '@ionic-native/google-maps plugin!',
          snippet: 'This plugin is awesome!',
          position: location.latLng,
          animation: GoogleMapsAnimation.BOUNCE
        });

        // show the infoWindow
        marker.showInfoWindow();

        // If clicked it, display the alert
        marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          console.log('##### MARKER_CLICK #####');
        });
      });
    });
}
```

## 5. การรันผ่าน web browser
```
ionic cordova run browser
```

## 6. trip สำหรับเครื่อง mac ในการ kill process
```
killall -9 node
```