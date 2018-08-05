import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';

import { HttpClientModule } from '@angular/common/http';
import { AirportsComponent } from './airports/airports.component';
import { AirportFormComponent } from './airport-form/airport-form.component';

import { FormsModule }   from '@angular/forms';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { AppRoutingModule } from './app-routing.module';
  
const appRoutes: Routes = [
  { path: 'trips', component: TripsComponent },
  { path: 'airports',      component: AirportsComponent ,
     data: { title: 'Airp[orts] List' }
},
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**',  redirectTo: '/',
  pathMatch: 'full' }
];





@NgModule({
  declarations: [
    AppComponent,
    TripsComponent,
    AirportsComponent,
    AirportFormComponent,
    TripDetailComponent,    
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
