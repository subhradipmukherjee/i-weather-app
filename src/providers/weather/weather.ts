import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
//import {Observable} from 'rxjs/observable';
import 'rxjs/add/operator/map';
/*
  Generated class for the WeatherProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WeatherProvider {

  apikey='6ef61b3bacad367b2e5cd8541bc17033';
  url1;
  url2;
  constructor(public http: HttpClient) {
    //console.log('Hello WeatherProvider Provider');
    this.url1 = 'https://api.openweathermap.org/data/2.5/forecast?q=';
    this.url2 = 'https://api.openweathermap.org/data/2.5/weather?q=';
    
  }

  forecast(city,country){
  // console.log(this.url+city+','+country+'&mode=JSON&units=metric&APPID=6ef61b3bacad367b2e5cd8541bc17033');
   return this.http.get(this.url1+city+','+country+'&mode=JSON&units=metric&APPID=6ef61b3bacad367b2e5cd8541bc17033');
    
       //api.openweathermap.org/data/2.5/weather?q=London,uk   
       //api.openweathermap.org/data/2.5/forecast?q=Delhi,IN
    
    //console.log(result);
  }
  current(city,country){
    return this.http.get(this.url2+city+','+country+'&mode=JSON&units=metric&APPID=6ef61b3bacad367b2e5cd8541bc17033');

  }

}
