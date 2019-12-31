import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
//import {WeatherProvider} from '../../providers/weather/weather';
//import {WeatherProvider} from '../../providers/weather/weather';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage  {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
  
  
}
