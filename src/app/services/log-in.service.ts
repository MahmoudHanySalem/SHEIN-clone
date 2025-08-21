import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Gust{
  username : string,
  password : string
}

export interface Token{
  token : string
}

@Injectable({
  providedIn: 'root'
})
export class LogInService {
  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http : HttpClient) { }

  logIn(gest : Gust) : Observable<Token>{
    return this.http.post<Token>(`${this.baseUrl}/auth/login`,gest);
  }
}
