import { Component, OnInit } from '@angular/core';
import { MenuService} from "../../../services/menu.service";
import { Menu } from "../../../models/menu";

@Component({
  selector: 'app-restaurant-menu',
  templateUrl: './restaurant-menu.component.html',
  styleUrls: ['./restaurant-menu.component.css']
})
export class RestaurantMenuComponent implements OnInit {

  menulist: Menu[] = []
  constructor(private MenuServices: MenuService) { }

  ngOnInit(): void {
    this.menulist = this.MenuServices.getMenus()
  }

}
