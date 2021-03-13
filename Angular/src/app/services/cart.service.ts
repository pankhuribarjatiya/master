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
      map((result: CartItem[]) => {
        console.log("Result is " + JSON.stringify(result));
        let cartItems: CartItem[] = [];

        for (let item of result) {
          console.log("Item is " + JSON.stringify(item));
          item = JSON.parse(JSON.stringify(item));
          let productExists = false

          for (let i in cartItems) {
            if (cartItems[i].menuId === item.menuId && cartItems[i].itemName === item.itemName && cartItems[i].restaurantId === item.restaurantId) {
              cartItems[i].qty++
              productExists = true
              break;
            }
          }

          if (!productExists) {
            console.log("Adding item" + JSON.stringify(item));
            console.log("Check id inside item" + item._id);
            cartItems.push(item);
            console.log("Post add item" + JSON.stringify(item));
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
}
