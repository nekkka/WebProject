import { Component } from '@angular/core';
import { Product } from '../models';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  items = this.cartService.getItems();

  constructor (
    private cartService: CartService
  ) {} 
  
  clearCart(){
    this.items = this.cartService.clearCart();
  }
}