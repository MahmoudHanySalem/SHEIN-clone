import { Component, HostListener, inject, OnInit } from '@angular/core';
import { CartManagerService } from '../../services/cart-manager.service';
import { Cart } from '../../interfaces/cart';
import { GlobalService } from '../../services/global.service';
import { StoreComponent } from '../store/store.component';

@Component({
  selector: 'app-cart',
  imports: [StoreComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit{
  cartManagerService : CartManagerService = inject(CartManagerService);
  globalService : GlobalService = inject(GlobalService);
  country !: string;
  cart : Cart=this.cartManagerService.cart;
  showFreeOnDelivery : boolean = true;
  scrolly = 0;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolly = window.scrollY; // updates on every scroll
  }

  async ngOnInit() {
    this.cartManagerService.checkCart();
    this.country = await this.globalService.getUserCountry();
  }

  removeProduct(id : number){
  this.cartManagerService.removeProduct(id);
}
  
totop() {
    scrollTo(0, 0);
  }
}
