import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Storage} from '@ionic/storage';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  city:string;
  country:string;
  constructor(public navCtrl: NavController, private storage:Storage) {
    this.storage.get('location').then((val)=>{
      if(val!=null)
      {
        let location = JSON.parse(val);
        this.city = location.city;
        this.country = location.country;
      }
      else{
        this.city='Noida';
        this.country='IN';
      }
    })
   
  }

  saveform()
  {
    let location = {
      city: this.city,
      country: this.country
    }
    this.storage.set('location',JSON.stringify(location));
    //this.navCtrl.push(HomePage);
  }

}
