import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlotsComponent } from './plots/plots.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({

  //compoenents
  declarations: [
    AppComponent,
    PlotsComponent,
    MapComponent
  ],

  //modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  //services
  providers: [],

  // main root compnenet
  bootstrap: [AppComponent]
})
export class AppModule { }
