import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: 'main', component: HomeComponent, title: 'FlowersMain' },
    { path: 'cart', component: CartComponent, title: 'Cart' },
    {path: 'category/:categoryId',component: ProductDetailsComponent, title: 'Album Details' },
];
