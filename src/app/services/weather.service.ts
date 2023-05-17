import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {


   constructor(private http: HttpClient) { }

   getWeatherData(cityName: string): Observable <WeatherData>{
    return this.http.get<WeatherData>(environment.weatherApiBaseUrl, {      
      params: new HttpParams()
      .set('q', cityName)
      .set('appid','32bfc69e06e70a04b0f773a20c5ea625')
      .set('units','metric')
      .set('mode','json')
      
    })
  }

}
