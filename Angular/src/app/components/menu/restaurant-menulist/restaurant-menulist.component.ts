import { Component, OnInit } from '@angular/core';
import { MenuService} from "../../../services/menu.service";
import { RestaurantService} from "../../../services/restaurant.service";
import { Menu } from "../../../models/menu";
import { Restaurant} from "src/app/models/restaurant";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-restaurant-menulist',
  templateUrl: './restaurant-menulist.component.html',
  styleUrls: ['./restaurant-menulist.component.css']
})
export class RestaurantMenulistComponent implements OnInit {

  // menulist: Menu[] = []
  // constructor(private MenuServices: MenuService) { }

  // // ngOnInit(): void {
  // //   this.menulist = this.MenuServices.getMenus()
  // // }

  // ngOnInit() {
  //   this.MenuServices.getMenus().subscribe((menu) =>{
  //   this.menulist = menu;
  // })
  // }
  //menu = '';
  menulist: Menu[];

  constructor(
    private MenuService: MenuService,
    private activatedRoute: ActivatedRoute,
    private RestaurantService: RestaurantService) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let menu = paramMap.get('menu');
        // if (menu.toLowerCase() === 'all') {
        //   menu = '';
        // }
        this.getMenus();
      });
  }
  getMenus() {
    //searchResult: MenuItem[];
    this.MenuService.getMenus(1) //model._id; Menu.restaurantId
      .subscribe(menulist => {
        console.log(JSON.parse(JSON.stringify(menulist)));
        //JSON.parse(JSON.stringify(menuItems))
        this.menulist = JSON.parse(JSON.stringify(menulist));
      });
  }
}

