import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product, ProductService } from './services/product.service';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartManagerService } from './services/cart-manager.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent,FooterComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  cartManagerService : CartManagerService = inject(CartManagerService);
  ngOnInit(): void {
      this.cartManagerService.checkCart();
  }
  title = 'SHEIN';

}
