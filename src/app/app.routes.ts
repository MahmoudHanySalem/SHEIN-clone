import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
        {path : '', component : HomeComponent },
        {path : 'store' , component : StoreComponent},
        {path : 'product/:id' , component: ProductComponent}
];
