import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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


/**
 * Generated class for the GoogleMapsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-google-maps',
  templateUrl: 'google-maps.html',
})
export class GoogleMapsPage {

  map: GoogleMap;
  location: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    Promise.resolve()
    .then( () => {
      this.getLocations()
    })
    .then( () => {
      this.loadMap()
    })
  }

  getLocations() {
    
  }

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

    this.map.one(GoogleMapsEvent.MAP_READY)
    .then( () => {
      console.log(">>>> MAP_READY <<<<")
      this.map.on(GoogleMapsEvent.MAP_LONG_CLICK).subscribe( (data) => {
        console.log(data)
        this.map.clear()

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

      })
    })
  }

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

}
