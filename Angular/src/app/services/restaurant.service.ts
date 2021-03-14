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
  
  retrieveAllRestaurantLists() {
        return this.http.get<Restaurant[]>('http://127.0.0.1:8080/app/restaurantList')
        .pipe(
         map((response: Restaurant[]) => {
         return response;
      }),
      catchError(this.handleError)
    );
}

retrieveRestaurantDetails(id: Number){
  return this.http.get<Restaurant>(`http://127.0.0.1:8080/app/restaurantList/${id}`)
        .pipe(
         map((response: Restaurant) => {
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

