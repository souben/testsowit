import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import * as mapboxgl from 'mapbox-gl';
import * as MapboxDraw from '@mapbox/mapbox-gl-draw';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {
  map!: mapboxgl.Map;
  draw!: MapboxDraw;
  style = 'mapbox://styles/mapbox/streets-v11';
  lat = 30.5731;
  lng = 4.0926;

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = 'pk.eyJ1Ijoic291YmVuIiwiYSI6ImNrb3h3MHY4eDAzcmoycHE3aXpnMmc3bXQifQ.4jl6I6b-BegJ-c3nH32d5g';
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/souben/ckp1giv3s5ehr17qeraxfyamp',
      zoom: 5,
      center: [this.lng, this.lat]
    });

    // create a draw feature:
    this.draw = new MapboxDraw({})

    // Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());
    this.map.addControl(this.draw);
    
    this.map.on('draw.create', updateArea);
    this.map.on('draw.update', updateArea);
    this.map.on('draw.delete', updateArea);

    

  }
}
