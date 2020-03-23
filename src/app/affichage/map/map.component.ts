
import { Component, AfterViewInit, ViewChild, ElementRef, Input } from '@angular/core';
import { EntrepriseApi } from '../../utilitaires/typesAPI/entrepriseApi';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  @Input() entreprises: EntrepriseApi[];
  @ViewChild('mapContainer', { static: false }) gmap: ElementRef;
  
  title = 'angular-gmap';
  geocoder: any;
  map: google.maps.Map;
  lat = 48.5129;
  lng = 2.1740;
  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 6
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement,
      this.mapOptions);
    //this.createMarker(this.coordinates);
    this.entreprises.forEach(entreprise => {
      this.findLocation(entreprise.adresse);
    });
  }

  createMarker(coord) {
    this.marker = new google.maps.Marker({
      position: this.coordinates,
      map: this.map,
    });
    this.marker.setMap(this.map);
  }


  findLocation(address) {

    if (!this.geocoder) this.geocoder = new google.maps.Geocoder()
    this.geocoder.geocode({
      'address': address
    }, (results, status) => {
      console.log(results);
      if (status == google.maps.GeocoderStatus.OK) {
        if (results[0].geometry.location) {
          this.lat = results[0].geometry.location.lat();
          this.lng = results[0].geometry.location.lng();
          this.coordinates = new google.maps.LatLng(this.lat, this.lng);
          this.marker = new google.maps.Marker({
            position: this.coordinates,
            map: this.map,
          });
        }
      } else {
        alert('Sorry, this search produced no results.' + status);
      }
    })
  }
}
