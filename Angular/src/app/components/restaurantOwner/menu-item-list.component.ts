import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService} from "../../services/menu.service";
import { Menu } from "../../models/menu";

@Component({
  selector: 'mw-menu-item-list',
  templateUrl: './menu-item-list.component.html',
  styleUrls: ['./menu-item-list.component.css']
})
export class MenuItemListComponent implements OnInit {
  menu = '';
  menuItems: Menu[];

  constructor(
    private menuItemService: MenuService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let restaurantId = paramMap.get('id');
        this.getMenuItems(restaurantId);
      });
  }

  onMenuItemDelete(menuItem: Menu) {
    this.menuItemService.delete(menuItem)
      .subscribe(() => {
        this.getMenuItems(menuItem.restaurantId.toString());
      });
  }

  getMenuItems(restaurantId : string) {
    //searchResult: MenuItem[];
    this.menuItemService.retrieveMenuDetails(restaurantId) //model._id;
      .subscribe(menuItems => {
        console.log(JSON.parse(JSON.stringify(menuItems)));
        //JSON.parse(JSON.stringify(menuItems))
        this.menuItems = JSON.parse(JSON.stringify(menuItems));
      });
  }
}
