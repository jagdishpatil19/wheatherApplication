import { Component } from '@angular/core';
import { ApiCallService } from './services/api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'wheather-project';
  search: any = '';
  constructor(private apiCall: ApiCallService) {}

  boxHide: boolean = false;
  date: any = new Date().toDateString();
  time: any = new Date().toLocaleTimeString();
  wheatherData: any;
  main: any = '';
  temprature: any = '';
  cityName: any = '';
  sys: any = '';
  wind: any = '';
  base: any = '';
  marque:boolean=true
   async showData(data:any) {
    this.search=data
    this.wheatherData=await this.apiCall.getApiCAll(this.search).toPromise()
      this.main = this.wheatherData.main;
      console.log(this.wheatherData);
      this.cityName = this.wheatherData.name;
      this.sys = this.wheatherData.sys;
      this.temprature = Math.floor(this.main.temp);
      this.wind = this.wheatherData.wind;
      this.base = this.wheatherData.base;
      this.boxHide = true;
if( this.search==''){
this.marque=true
}
else{
  this.marque=false
}
    ;
  }
}
