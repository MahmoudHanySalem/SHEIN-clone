import { Component, inject, OnInit, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomeComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  products: Product[] = [];

  ngOnInit() {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
