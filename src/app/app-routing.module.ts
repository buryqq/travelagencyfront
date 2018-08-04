import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripsComponent } from './trips/trips.component';
import { AirportsComponent } from './airports/airports.component';
import { TripDetailComponent } from './trip-detail/trip-detail.component';





const routes: Routes = [
  { path: 'airports', component: AirportsComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'detail/:id', component: TripDetailComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}




