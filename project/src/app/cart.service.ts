import { Injectable } from '@angular/core';
import { Product, CartItem } from './models';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];
  private cart_add_url = 'http://localhost:8000/flower/cart/add/';
  private cart_list_url = 'http://localhost:8000/flower/cart/';

  constructor(private http: HttpClient, private cookieService: CookieService) {
    
  }

    addToCart(product: Product): Observable<any> {
      const accessToken = this.cookieService.get('access_token');

      if (!accessToken) {
        console.error('No access token available');
        throw new Error('Authorization token is required but not available.');
      }

      const headers = new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      });

      return this.http.post(this.cart_add_url, { product_id: product.id }, {
        headers: headers,
        withCredentials: true
      });
    }

    getItems(): Observable<CartItem[]> {
      const accessToken = this.cookieService.get('access_token');
      console.log('Access Token:', accessToken); // Debug: Check what token is received
  
      if (!accessToken) {
        console.error('No access token available');
        throw new Error('Authorization token is required but not available.');
      }
  
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${accessToken}`
      });
  
      return this.http.get<CartItem[]>(this.cart_list_url, { headers: headers, withCredentials: true });
    }

}
