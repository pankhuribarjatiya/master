import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';

import { CartItem } from '../models/cart-item';
import { cartUrl } from '../config/api';
import { Menu } from '../models/menu';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result: any[]) => {
        let cartItems: CartItem[] = [];

        for (let item of result) {
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].menuId === item.menu.id) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            cartItems.push(new CartItem(item.id, item.menu));
          }
        }

        return cartItems;
      })
    );
  }
  
  private handleError(error: HttpErrorResponse) {
    console.error(error.message);
    return throwError('A data error occurred, please try again.');
  }
  
  add(menuItem: Menu) {
    return this.http.post('http://127.0.0.1:8080/app/addOrder', menuItem)
      .pipe(
        catchError(this.handleError)
      );
  }
}
