import { Menu } from './../models/menu';
import { Injectable } from '@angular/core';
//import { Menu } from "src/app/models/menu";
import { HttpClient, HttpRequest ,HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  



  hostUrl:string = 'http://localhost:8080/';
  //url:string = 'http://localhost:8080/data/menuList.json';

  constructor(private http: HttpClient) {
  }
  
  retrieveMenuDetails(id:String) {
  return this.http.get<Menu[]>(`http://localhost:8080/app/restaurantMenu/${id}`)
  .pipe(
    map((response: Menu[]) => {
      return response;
    }),
    catchError(this.handleError)
  );
  
}
add(menuItem: Menu) {
  return this.http.post('http://127.0.0.1:8080/app/addRestaurantMenuItem', menuItem)
    .pipe(
      catchError(this.handleError)
    );
}

delete(menuItem: Menu) {
  ///app/restaurantMenuItem/:itemId'
  console.log('deleteing id ', menuItem._id);
  return this.http.delete(`http://127.0.0.1:8080/app/restaurantMenuItem/${menuItem._id}`)
  .pipe(
    catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse) {
  console.error(error.message);
  return throwError('A data error occurred, please try again.');
}

  

  
}

  






