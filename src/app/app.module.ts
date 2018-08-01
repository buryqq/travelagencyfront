import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TripsComponent } from './trips/trips.component';

import { HttpClientModule } from '@angular/common/http';
import { AirportsComponent } from './airports/airports.component';
  
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
    AirportsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
