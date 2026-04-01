
import { Component } from '@angular/core';
import { Sidebar } from './sidebar/sidebar';
import { Searchbar } from './searchbar/searchbar';
import { WeatherCard } from './weather-card/weather-card';
import { Highlights } from './highlights/highlights';
import { HourlyForecast } from './hourly-forecast/hourly-forecast';

@Component({
  selector: 'app-root',
  standalone:true,
  imports : [Sidebar,Searchbar,WeatherCard,Highlights,HourlyForecast],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  WeatherData:any;

  getData(data:any){
    this.WeatherData=data;
  }
}
