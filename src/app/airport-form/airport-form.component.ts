import { Component } from '@angular/core';

import { City }    from '../models/city';
import { CityList }    from '../models/citylist';

import { Airport }    from '../models/airport';
import { Airportlist }    from '../models/airportlist';



import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-airport-form',
  templateUrl: './airport-form.component.html',
  styleUrls: ['./airport-form.component.css']
})
export class AirportFormComponent   {


  citylist: City[] = new Array<City>();




  configUrl = 'http://localhost:8080/cities';

  getConfig() {
    return this.http.get(this.configUrl);
  }



  showConfig() {
    this.getConfig()
      .subscribe((data: CityList) => {
        console.log(data);

     this.citylist=data.cityListResponse;



      });
  }

  ngOnInit() {
    this.showConfig();
  }

  //  cityname = ['lodz', 'wawa',
  //  'londyn', 'la'];

// model = new Airport('Airportname', 1111111, 22222222,this.cityname[0]);

model = new Airport();

submitted = false;

//onSubmit() { this.submitted = true; }

constructor(private http: HttpClient) { }

onSubmit = function (model) {
  console.log(model);

  var body = JSON.stringify(model);
  this.http.post("http://localhost:8080/airportadd", model).subscribe((data) => {});

}


// TODO: Remove this when we're done
get diagnostic() { return JSON.stringify(this.model); }


newAirport() {
  this.model = new Airport();
}

}
