import { Component , inject, OnInit} from '@angular/core';
import { ProductService ,Product} from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ShortenNumberPipe } from '../../shorten-number-pipe.pipe';

@Component({
  selector: 'app-store',
  imports: [RouterModule, FontAwesomeModule, StarRatingComponent, ShortenNumberPipe],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent implements OnInit{
  products: Product[] = [];
  productService : ProductService=inject(ProductService);
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
ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data;
    });
    
  }

}