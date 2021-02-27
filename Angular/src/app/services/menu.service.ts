import { Injectable } from '@angular/core';
import { Menu } from "src/app/models/menu"
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  Menus : Menu[] = [
    new Menu(1, 'Redhawk Dinning', 'seattle',80,'https://pbs.twimg.com/profile_images/990973421835071489/ZYY6dIm9_400x400.jpg'),
    new Menu(2, 'Cactus', 'seattle',90,'https://ehc-west-0-bucket.s3.us-west-2.amazonaws.com/web/documents/cactuscoffeeshop/promo_5c8fbfc008184.png'),
    new Menu(3, 'Chipotle', 'seattle',8,'https://pbs.twimg.com/profile_images/970669059917471744/_KaAvCGb_400x400.jpg'),
    new Menu(4, 'Food Truck', 'seattle',56,'https://i.pinimg.com/originals/55/dc/c0/55dcc028a9f7d9e7250c7cc7520c5214.jpg'),
    new Menu(5, 'Mcdonalds', 'seattle',78,'https://yt3.ggpht.com/a-/AAuE7mAME_lpFRR2T0W4e8RF6NHA1o59FKzSDCBqjw=s240-mo-c-c0xffffffff-rj-k-no'),
    new Menu(6, 'dominos', 'seattle',45,'https://ik.imagekit.io/smdxc0e2g3/generic-endpoint/https://pbs.twimg.com/profile_images/1968502170/domisoss_400x400.jpg?tr=w-240,rt-0'),
    new Menu(7, 'Burgur King', 'seattle',34,'https://image.pngaaa.com/920/1924920-small.png'),
    new Menu(8, 'Molly Moons', 'seattle',23,'https://pbs.twimg.com/profile_images/378800000145589863/6d5b0be5bf3701679981a606cf19fd24.jpeg'),
  ]

  constructor() { }

  getMenus(): Menu[] {
    //TODO: Populate products from an API and return an Observable
    return this.Menus
  }
}




