import { Injectable } from '@angular/core';
 
import { Observable, of } from 'rxjs';
 
import { Trip } from './models/trip';
import { Triplist } from './models/triplist'


import { TRIPS } from './trips/trips.component';


 
@Injectable({ providedIn: 'root' })
export class TripService {
 
  
 
  getTrips(): Observable<Trip[]> {

    return of(triplist);
  }
 
  getTrip(id: number): Observable<Trip> {
   
    return of(triplist.find(trip => trip.id === id));
  }
}