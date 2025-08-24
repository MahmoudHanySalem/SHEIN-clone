import { Component , inject, Input, input, OnInit} from '@angular/core';
import { Product} from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ShortenNumberPipe } from '../../shorten-number-pipe.pipe';
import { CartManagerService } from '../../services/cart-manager.service';
import { Cart } from '../../interfaces/cart';


@Component({
  selector: 'app-product-card',
  imports: [RouterModule, FontAwesomeModule, StarRatingComponent, ShortenNumberPipe],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product !: Product;

cartManagerService : CartManagerService = inject(CartManagerService);

  cart : Cart=this.cartManagerService.cart;
  faStar= faStar;

getRandomDiscount(min: number = 10, max: number = 50): string {
  return  "-" + (Math.round(Math.random() * (max - min + 1) + min)) + "%";
}

getStarRating(min: number = 0, max: number = 2): number {
let values :number[]=[3.5,4,4.5];
return values[Math.round(Math.random() * (max - min + 1) + min)];
}
getRandRatingNumber() : string{
  let values : string[] =['(100+)', '(1000+)'];
  return values[Math.round(Math.random() * (1 - 0 + 1) + 0)];
}
getRandom(): boolean {
  return Boolean( Math.random() < 0.7 ? 0 : 1);
}
getRandomSales(min: number = 300, max: number = 5000) : number{
  return Math.round(Math.random() * (max - min + 1) + min);
}

addProduct(id : number){
    this.cartManagerService.addProduct(Number(id));
  }

}
