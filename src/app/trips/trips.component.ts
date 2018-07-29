import { Component, OnInit } from '@angular/core';
import {Trip} from "../trip";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Triplist } from '../triplist';

@Component({
  selector: 'new-trips',
  templateUrl: './trips.component.html',
  styleUrls: ['./trips.component.css']
})
export class TripsComponent implements OnInit {



  trip: Trip=new Trip();
  
  // name = 'New name';
  constructor(private httpService: HttpClient) { }


  configUrl = 'http://127.0.0.1:8080/kurseuro';

  getConfig() {
    return this.httpService.get(this.configUrl);
  }

  showConfig() {
    this.getConfig()
      .subscribe((data: Triplist) => {
        console.log(data);
     
this.trip=data.kursy[0];
        // this.trip.kurs=data.kurs;
      });
  }



  ngOnInit() {
  
    this.showConfig();



    


  }

}
