import { Component, EventEmitter, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.html',
  styleUrl: './searchbar.css',
})
export class Searchbar {
  city ='';
  @Output() weatherEvent=new EventEmitter<any>();

  constructor(private weatherService:WeatherService){}

  search(){
    if(!this.city) return;

    this.weatherService.getWeatherByCity(this.city).subscribe(res=>{
      this.weatherEvent.emit(res);
    });
  }
}
