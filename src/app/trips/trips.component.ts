import { Component, OnInit } from '@angular/core';
import {Trip} from "../models/trip";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Triplist } from '../models/triplist';
import { TripService } from '../trip.service';

@Component({
  selector: 'new-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})

export class TripsComponent implements OnInit {

  kurs: Trip=new Trip();
  triplist: Trip[]=new Array<Trip>();
    
  // name = 'New name';
  constructor(private httpService: HttpClient) { }

  configUrl = 'http://127.0.0.1:8080/cenaeuro';

  getConfig() {
    return this.httpService.get(this.configUrl);
  }

  showConfig() {
    this.getConfig()
      .subscribe((data: Triplist) => {
        console.log(data);
     
this.kurs=data.kursy[0];
        // this.trip.kurs=data.kurs;
      });
  }

  
  configUrl2 = 'http://localhost:8080/trips';

  getConfig2() {
    return this.httpService.get(this.configUrl2);
  }

  showConfig2() {
    this.getConfig2()
      .subscribe((data2: Triplist) => {
        console.log(data2);
     
this.triplist=data2.tripListResponse;
      
      });
  }

  selectedTrip: Trip;
  dataprzyl: Date;
  datawyl: Date;



onSelect(trip: Trip): void {
  this.selectedTrip = trip;
  this.dataprzyl = new Date(this.selectedTrip.departureDate);
  this.datawyl = new Date(this.selectedTrip.returnDate);
  
}

  ngOnInit() {
    this.showConfig();
    this.showConfig2();
   
  }

}
