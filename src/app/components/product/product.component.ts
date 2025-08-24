import {
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  inject,
  Input,
} from '@angular/core';
import { ProductService, Product } from '../../services/product.service';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { NgClass } from '@angular/common';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { StoreComponent } from '../store/store.component';
import { GlobalService } from '../../services/global.service';
import { RouterModule } from '@angular/router';
import { CartManagerService } from '../../services/cart-manager.service';
import { Cart } from '../../interfaces/cart';

@Component({
  selector: 'app-product',
  imports: [RouterModule,StarRatingComponent, NgClass, ReactiveFormsModule, StoreComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductComponent implements OnInit {
  productService: ProductService = inject(ProductService);
  globalService : GlobalService = inject(GlobalService);
  cartManagerService : CartManagerService = inject(CartManagerService);


  @Input() id = '';
  country!:string;
  product!: Product;
  randomDiscountPercentage!: number;
  sn = 'sm25073030275177151';
  colors: string[] = ['black', '#767676', 'rgb(72, 72, 154)', '#E86D45'];
  selectedColor!: string;
  sizeBtnHover: boolean = false;
  cart : Cart=this.cartManagerService.cart;

storeConfigs = [
    { cardsNum: 15, startIndex: 0 }
  ];

  addMore() {
    this.storeConfigs.push({ cardsNum: 5, startIndex: 15 });
  }

  addProduct(){
    this.cartManagerService.addProduct(Number(this.id));
  }

  btnClicked() {
    this.sizeBtnHover = !this.sizeBtnHover;
  }


  setColor(color: string) {
    this.selectedColor = color;
    this.cartForm.get('color')?.setValue(color);
  }

  setSize(size : string){
    this.cartForm.get('size')?.setValue(size);
    this.getByClass('sizeError')?.classList.add('disabled');
  }

  async ngOnInit() {
    this.productService.getProductById(Number(this.id)).subscribe((data) => {
      this.product = data;
    });
    this.setColor(this.colors[0]);

    this.country = await this.globalService.getUserCountry();
}

  get integerPart(): string {
    return Math.floor(this.product.price).toString();
  }

  get fractionalPart(): string {
    // ensure two decimal places for consistency
    const parts = this.product.price.toFixed(2).split('.');
    return parts[1];
  }

  getRandomDiscountPercentage(min: number = 0.1, max: number = 0.5): number {
    return Math.random() * (max - min) + min;
  }

  getRandomDiscount(): string {
    this.randomDiscountPercentage = this.getRandomDiscountPercentage();
    return (
      '$' +
      (
        this.product.price +
        this.product.price * this.randomDiscountPercentage
      ).toFixed(2)
    );
  }

  snCopy() {
    navigator.clipboard
      .writeText(this.sn)
      .then(() => {
        alert('Copied: ' + this.sn); // optional feedback
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
      });
  }
  getRandRatingNumber(): string {
    let values: string[] = ['100', '1000'];
    return values[Math.round(Math.random() * (1 - 0 + 1) + 0)];
  }

  cartForm = new FormGroup({
    color: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
  });

  cartSubmet($event: Event) {
    if (this.cartForm.valid) {
      console.log(this.cartForm.value);
    } else {
      this.shake('size-box');
    }
  }

  getByClass(className: string): HTMLElement | null {
    return document.querySelector('.' + className) as HTMLElement | null;
  }

  shake(className: string) {
    const el = this.getByClass(className);
    if (el) {
      this.getByClass('sizeError')?.classList.remove('disabled');
      el.classList.add('shake');

    // Remove it after animation ends so it can be re-triggered
    el.addEventListener('animationend', () => {
      el.classList.remove('shake');
    }, { once: true });
    }
  }
}
