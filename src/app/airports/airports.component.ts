import { Component, OnInit } from '@angular/core';
import {Airport} from "../models/airport";
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Airportlist } from '../models/airportlist';
@Component({
  selector: 'app-airports',
  templateUrl: './airports.component.html',
  styleUrls: ['./airports.component.css']
})
export class AirportsComponent implements OnInit {

  airport: Airport=new Airport();

  constructor(private httpService: HttpClient) { }


  configUrl = 'http://localhost:8080/airports?cityname=londyn';

  getConfig() {
    return this.httpService.get(this.configUrl);
  }

  showConfig() {
    this.getConfig()
      .subscribe((data: Airportlist) => {
        console.log(data);
     
this.airport=data.airportListResponse[0];
        // this.trip.kurs=data.kurs;
      });
  }

  ngOnInit() {
    this.showConfig();
  }

}
