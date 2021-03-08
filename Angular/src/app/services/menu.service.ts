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
  

  // getMenus(): Observable <Menu[]> {
  //   //TODO: Populate products from an API and return an Observable
  //   return this.http.get<Menu[]>(this.url);
  // }
  getMenus(id:String) {
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

  // Menus : Menu[] = [
  //   new Menu(1, 'Pancakes', 'seattle',8.47,'https://bakingamoment.com/wp-content/uploads/2020/10/IMG_9322-chocolate-chip-pancakes.jpg'),
  //   new Menu(2, 'waffles', 'seattle',7.99,'https://www.cookedbyjulie.com/wp-content/uploads/2020/03/blueberry-waffles-one-500x500.jpg'),
  //   new Menu(3, 'Classic Omelette', 'seattle',9.99,'https://www.glutenfreestories.com/wp-content/uploads/2020/12/20201208-IMG_3959-500x500.jpg'),
  //   new Menu(4, 'Hash Browns', 'seattle',5.99,'https://i5.walmartimages.com/asr/319b5b23-8b3b-43f9-b80f-82315edf351b_1.fc992fad516f6b3003950ceabdcd2ecb.jpeg'),
  //   new Menu(5, 'Scrambled Eggs', 'seattle',6.99,'https://www.theworktop.com/wp-content/uploads/2019/03/Scrambled-Eggs-Cream-Cheese-low-carb-breakfast-500x500.jpg'),
  //   new Menu(6, 'Breakfast Tacos', 'seattle',12.97,'https://www.lemonblossoms.com/wp-content/uploads/2019/06/Breakfast-Tacos-S5-500x500.jpg'),
  //   new Menu(7, 'Brewed Coffee', 'seattle',6.99,'https://www.willowcrestlane.com/wp-content/uploads/2020/04/Maple-Cinnamon-Latte-5-500x500.jpg'),
  //   new Menu(8, 'Matcha Latte', 'seattle',7.99,'https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg'),
  // ]

  // constructor() { }

  // getMenus(): Menu[] {
  //   //TODO: Populate products from an API and return an Observable
  //   return this.Menus
  // }
}
// export interface Restaurant {
//   _id: number;
//   restaurantName: string;
//   restaurantAddress: string;
//   phoneNumber: string;
//   restaurantImageUrl: string;
// }
// export interface Menu {
  
//   _id:number;
//   restaurantId: number;
//   itemName: String;
//   itemDescription: String;
//   itemPrice: Number;

// }

// export interface MenuItem {
//   _id:number;
//   restaurantId: number;
//   itemName: String;
//   itemDescription: String;
//   itemPrice: Number;
//   menuItemImageUrl:String,
// }




