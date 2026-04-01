
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class WeatherService {
  private http = inject(HttpClient);

  getWeatherByCity(cityName: string): Observable<any> {
    const geoUrl = `https://open-meteo.com{cityName}&count=1&language=en&format=json`;

    return this.http.get(geoUrl).pipe(
      switchMap((geoData: any) => {
        if (!geoData.results || geoData.results.length === 0) {
          throw new Error('City not Found');
        }
        const { latitude, longitude, name, country } = geoData.results[0];
        const weatherUrl = `https://open-meteo.com{latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&hourly=temperature_2m,weather_code&daily=sunrise,sunset,uv_index_max,temperature_2m_max,temperature_2m_min&timezone=auto`;
        return this.http.get(weatherUrl).pipe(
          map((weatherData: any) => ({
            location: { name, country },
            current: {
              temp: Math.round(weatherData.current.temperature_2m),
              feels_like: Math.round(weatherData.current.apparent_temperature),
              humidity: weatherData.current.relative_humidity_2m,
              wind: weatherData.current.wind_speed_10m,
              high: Math.round(weatherData.daily.temperature_2m_max[0]),
              low: Math.round(weatherData.daily.temperature_2m_min[0]),
              code: weatherData.current.weather_code // આનાથી આઈકોન નક્કી થશે
            },
            sun: {
              sunrise: weatherData.daily.sunrise[0].split('T')[1],
              sunset: weatherData.daily.sunset[0].split('T')[1],
              uv: weatherData.daily.uv_index_max[0]
            },
            hourly: weatherData.hourly.time.slice(0, 7).map((t: any, i: number) => ({
              time: new Date(t).getHours() + ":00",
              temp: Math.round(weatherData.hourly.temperature_2m[i])
            }))
          }))
        );
      })
    );
  }
}