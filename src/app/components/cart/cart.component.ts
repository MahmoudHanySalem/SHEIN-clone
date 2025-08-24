import { Component, inject, OnInit } from '@angular/core';
import { CartManagerService } from '../../services/cart-manager.service';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-cart',
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit{
  cartManagerService : CartManagerService = inject(CartManagerService);
  
  cart : Cart=this.cartManagerService.cart;
  
  ngOnInit(): void {
    this.cartManagerService.checkCart();
  }

  removeProduct(id : number){
  this.cartManagerService.removeProduct(id);
}
  

}
