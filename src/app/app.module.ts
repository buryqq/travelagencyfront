import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';

import { HttpClientModule } from '@angular/common/http';
  
@NgModule({
  declarations: [
    AppComponent,
    TripsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
