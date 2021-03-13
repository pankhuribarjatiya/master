import { Injectable } from '@angular/core';
import { HttpClient,HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { throwError } from 'rxjs';

import { CartItem } from '../models/cart-item';
//import { cartUrl } from '../config/api';
import { Menu } from '../models/menu';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  hostUrl:string = `http://localhost:8080/`;
  constructor(private http: HttpClient) { }

  retrieveCartDetails(custEmailId:String): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.hostUrl+ `app/cartDetails/${custEmailId}`).pipe(
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
            cartItems.push(new CartItem(item.id, item.menu, item.qty = 1, item.custEmailId));
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
  
  add(cartItem: CartItem) {
    console.log(cartItem)
    return this.http.post('http://127.0.0.1:8080/app/addCartDetails/', cartItem)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(cartItem: CartItem) {
    ///app/restaurantMenuItem/:itemId'
    console.log('deleteing id ', cartItem._id);
    return this.http.delete(`http://127.0.0.1:8080/app/deleteCart/${cartItem}`)
    .pipe(
      catchError(this.handleError)
    );
  }

  // addProductToCart(item: CartItem): Observable<any> {
  //   return this.add(item);
  // }
}
