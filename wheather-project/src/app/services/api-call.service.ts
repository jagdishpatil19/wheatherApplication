import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor( private httpClient:HttpClient) { }

  url1:any='https://api.openweathermap.org/data/2.5/weather?q='
  url2:any='&appid=f55aae9c73d921df1d624da9dabe9373&units=metric'

  getApiCAll(cityName:any){
   return this.httpClient.get(this.url1+cityName+this.url2)
  }
}
