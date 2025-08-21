import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User{
  id : number,
  username : string,
  email : string,
  password : string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http : HttpClient) { }

  getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/users`);
  }

  getUserById(id :number) : Observable<User>{
    return this.http.get<User>(`${this.baseUrl}/users/${id}`);
  }

  addNewUser(user : User) : Observable<User>{
    return this.http.post<User>(`${this.baseUrl}/users`,user);
  }

  updateUser(id : number,user : User) : Observable<User>{
    return this.http.put<User>(`${this.baseUrl}/users/${id}`,user);
  }

  deleteUser(id : number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/users/${id}`);
  }
}
