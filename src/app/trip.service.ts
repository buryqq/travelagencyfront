import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Trip } from './models/trip';
import { Triplist } from './models/triplist'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TripsComponent } from './trips/trips.component';
 
let tripp = new Trip;

@Injectable({ providedIn: 'root' })
export class TripService {
 
  constructor(private http: HttpClient){};
 
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.configUrl2)
  }

  list: Trip[]=new Array<Trip>();

  configUrl2 = 'http://localhost:8080/trips';
 
  dataprzyl: Date;
  datawyl: Date;


  getTrip(id: number): Observable<Trip> {
   
    this.http.get(this.configUrl2).subscribe((data2: Triplist) => {
      this.list=data2.tripListResponse;
      console.log(this.list)
      console.log('kjfdjkfddjkgf')
      console.log(id)
      console.log(this.list)
      if (id !== 0 ) {
      tripp.id=this.list.find(trip => trip.id === id).id
      tripp.departureDate=this.list.find(trip => trip.id === id).departureDate
      tripp.airportFrom=this.list.find(trip => trip.id === id).airportFrom
      tripp.returnDate=this.list.find(trip => trip.id === id).returnDate
      //tripp=this.list.find(trip => trip.id === id)


    }
      console.log(this.list.find(trip => trip.id === id))
      console.log('xxxccc')
    
  });

  if (id !== 0 ) {console.log("if");
  
  return of (tripp);
  }

else{
console.log("else");


return of(this.list.find(trip => trip.id === id));
  }

 
  
  }

}