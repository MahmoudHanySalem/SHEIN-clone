import { Component, inject, Input, OnInit } from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons/faStar';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { ShortenNumberPipe } from '../../shorten-number-pipe.pipe';
import { CartManagerService } from '../../services/cart-manager.service';
import { Cart } from '../../interfaces/cart';
import { JsonPipe } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-store',
  imports: [
    RouterModule,
    FontAwesomeModule,
    StarRatingComponent,
    ShortenNumberPipe,
    JsonPipe,
    ProductCardComponent,
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css',
})
export class StoreComponent implements OnInit {
  @Input() cardsNum?: number;
  @Input() startIndex: number= 0;
  productService: ProductService = inject(ProductService);
  products: Product[] = [];

  ngOnInit() {
  this.productService.getAllProducts().subscribe((data) => {
    let limit = this.cardsNum && this.cardsNum > 0 ? this.cardsNum : data.length;
    let start = this.startIndex ?? 0;

    this.products = data.slice(start, start + limit);
  });
}

}

