import { inject, Injectable } from '@angular/core';
import { GlobalService } from './global.service';
import { Product, ProductService} from './product.service';
import { CartService} from './cart.service';
import { Cart , cartProduct} from '../interfaces/cart';
import { map, Observable, of, switchMap, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CartManagerService {

  globalService: GlobalService = inject(GlobalService);
  productService: ProductService = inject(ProductService);
  cartService: CartService = inject(CartService);

  carts !: Cart[];
  userId: string = this.globalService.userId;
  cart !: Cart;

  checkCart(): Observable<Cart> {
  return this.cartService.getAllCarts().pipe(
    map(carts => carts.find(c => c.userId === Number(this.userId))),
    switchMap(cart => {
      if (cart) {
        this.cart = cart;
        return of(cart);
      } else {
        return this.cartService.addNewCart({
          id: Number(this.userId),
          userId: Number(this.userId),
          products: []
        }).pipe(
          tap(newCart => this.cart = newCart)
        );
      }
    })
  );
}

addProduct(productId: number) {
  this.checkCart().subscribe(cart => {
    console.log(this.cart)
    this.productService.getProductById(productId).subscribe(product => {
      const cartProduct: cartProduct = { productId: product.id, quantity: 1 };
      cart.products.push(cartProduct);
      this.updateCart();
    });
  });
}



removeProduct(id : number){
  this.cart.products = this.cart.products.filter(product => product.productId !== id);
  this.updateCart();
}

updateCart(){
  this.cartService.updateCart(this.cart.id,this.cart).subscribe(cart =>{
    console.log("man-cart",this.cart);
    console.log("met-cart",cart);
  });
}
}
