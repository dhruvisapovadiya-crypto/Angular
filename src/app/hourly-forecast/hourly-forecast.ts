import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hourly-forecast',
  imports: [],
  templateUrl: './hourly-forecast.html',
  styleUrl: './hourly-forecast.css',
})
export class HourlyForecast {
  @Input () data:any;
}
