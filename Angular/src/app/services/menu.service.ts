import { Injectable } from '@angular/core';
import { Menu } from "src/app/models/menu"
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  Menus : Menu[] = [
    new Menu(1, 'Pancakes', 'seattle',8.47,'https://bakingamoment.com/wp-content/uploads/2020/10/IMG_9322-chocolate-chip-pancakes.jpg'),
    new Menu(2, 'waffles', 'seattle',7.99,'https://www.cookedbyjulie.com/wp-content/uploads/2020/03/blueberry-waffles-one-500x500.jpg'),
    new Menu(3, 'Classic Omelette', 'seattle',9.99,'https://www.glutenfreestories.com/wp-content/uploads/2020/12/20201208-IMG_3959-500x500.jpg'),
    new Menu(4, 'Hash Browns', 'seattle',5.99,'https://i5.walmartimages.com/asr/319b5b23-8b3b-43f9-b80f-82315edf351b_1.fc992fad516f6b3003950ceabdcd2ecb.jpeg'),
    new Menu(5, 'Scrambled Eggs', 'seattle',6.99,'https://www.theworktop.com/wp-content/uploads/2019/03/Scrambled-Eggs-Cream-Cheese-low-carb-breakfast-500x500.jpg'),
    new Menu(6, 'Breakfast Tacos', 'seattle',12.97,'https://www.lemonblossoms.com/wp-content/uploads/2019/06/Breakfast-Tacos-S5-500x500.jpg'),
    new Menu(7, 'Brewed Coffee', 'seattle',6.99,'https://www.willowcrestlane.com/wp-content/uploads/2020/04/Maple-Cinnamon-Latte-5-500x500.jpg'),
    new Menu(8, 'Matcha Latte', 'seattle',7.99,'https://gimmedelicious.com/wp-content/uploads/2018/03/Iced-Matcha-Latte2-500x500.jpg'),
  ]

  constructor() { }

  getMenus(): Menu[] {
    //TODO: Populate products from an API and return an Observable
    return this.Menus
  }
}




