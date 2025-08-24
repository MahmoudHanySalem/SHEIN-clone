import { Injectable, OnInit } from '@angular/core';
import { LocationService } from './location.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService{
  userId : string = '1';
  private country!: string ;

 constructor(private http: HttpClient) {}

  async getUserCountry(): Promise<string> {
    if (this.country) {
      return this.country; // return cached value
    }

    const data = await this.http
      .get<any>('https://ipapi.co/json/')
      .toPromise();
      
    this.country = data.country_name;
    return this.country;
  }
}
