import { Injectable } from '@angular/core';
import { Restaurant } from "src/app/models/restaurant";

import { HttpClient, HttpRequest , HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  hostUrl:string = 'http://localhost:8080/';
  url:string = 'http://localhost:8080/data/restaurantList.json';

  constructor(private http: HttpClient) {
  }

  // getRestaurants(): Observable <Restaurant[]> {
  //     //TODO: Populate products from an API and return an Observable
  //     return this.http.get<Restaurant[]>(`http://127.0.0.1:8080/app/restaurant`);
  //     console.log("restauranat");
  //   }

    getRestaurants() {
  
      return this.http.get<Restaurant[]>('http://127.0.0.1:8080/app/restaurantList')
    .pipe(
      map((response: Restaurant[]) => {
        return response;
      }),
      catchError(this.handleError)
    );
    
}
private handleError(error: HttpErrorResponse) {
  console.error(error.message);
  return throwError('A data error occurred, please try again.');
}

}

// export interface Restaurant {
//                 _id: number;
//                 restaurantName: string;
//                 restaurantAddress: string;
//                 phoneNumber: string;
//                 restaurantImageUrl: string;
// }
