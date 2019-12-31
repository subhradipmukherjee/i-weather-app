import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {WeatherProvider} from '../../providers/weather/weather';
import {Storage} from '@ionic/storage';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  weather:any;

  inp:any;
  location:{
    city:string,
    country:string
  }
  
  constructor(public navCtrl: NavController, public weatherprovider: WeatherProvider, private storage: Storage) {

  }
  ionViewWillEnter()
  {
    this.storage.get('location').then((val)=>{
      if(val!=null)
      {
         this.location = JSON.parse(val);
      }
      else{
       
        this.location = {
            city:'Noida',
            country:'IN'
          }
      }

      this.weatherprovider.forecast(this.location.city,this.location.country).subscribe((resp)=>{
        console.log(resp);
        this.weather = resp;
      });
  
    })
   

    
  }
  display()
  {
    //console.log("hello");
    this.weatherprovider.forecast(this.location.city,this.location.country).subscribe((resp)=>{
      console.log(resp);
    });

    console.log(this.inp);
    
  }
  



}
