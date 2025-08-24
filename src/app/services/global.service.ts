import { Injectable, OnInit } from '@angular/core';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService implements OnInit{
  userId : string = '1'
  country !: string;


  constructor(private locationService: LocationService){}
  
  ngOnInit(): void {
    this.locationService.getUserCountry().subscribe(data => {
      this.country=data.country_name;
    });
  }

}
