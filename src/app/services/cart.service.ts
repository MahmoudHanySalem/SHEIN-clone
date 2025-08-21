import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product.service';

export interface Cart{
  id : number,
userId : number,
products : Product[]
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private baseUrl = 'https://fakestoreapi.com';

  constructor(private http : HttpClient) { }

  getAllCarts() : Observable<Cart[]>{
    return this.http.get<Cart[]>(`${this.baseUrl}/carts`);
  }

  getCartById(id :number) : Observable<Cart>{
    return this.http.get<Cart>(`${this.baseUrl}/carts/${id}`);
  }

  addNewCart(cart : Cart) : Observable<Cart>{
    return this.http.post<Cart>(`${this.baseUrl}/carts`,cart);
  }

  updateCart(id : number,cart : Cart) : Observable<Cart>{
    return this.http.put<Cart>(`${this.baseUrl}/carts/${id}`,cart);
  }

  deleteCart(id : number) : Observable<any>{
    return this.http.delete(`${this.baseUrl}/carts/${id}`);
  }
}
