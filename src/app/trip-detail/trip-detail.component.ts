import { Component, OnInit,Input } from '@angular/core';
import {Trip} from "../models/trip";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TripService }  from '../trip.service';


@Component({
  selector: 'app-trip-detail',
  templateUrl: './trip-detail.component.html',
  styleUrls: ['./trip-detail.component.css']
})



export class TripDetailComponent implements OnInit {
  @Input() trip: Trip;
  @Input() dataprzyl: Date;
  @Input() datawyl: Date;
 
  constructor(
    private route: ActivatedRoute,
    private tripservice: TripService,
    private location: Location  
  ) {}


  getTrip(): void {
    console.log('lalala')
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id)
        this.tripservice.getTrip(id)
      .subscribe(trip => this.trip = trip);
      console.log(this.trip)


  
      
  }

 



  ngOnInit() {
       this.getTrip();
       
      }

}
