import { Component, OnInit } from '@angular/core';
import { MenuService} from "../../../services/menu.service";
import { Menu } from "../../../models/menu";
@Component({
  selector: 'app-restaurant-menulist',
  templateUrl: './restaurant-menulist.component.html',
  styleUrls: ['./restaurant-menulist.component.css']
})
export class RestaurantMenulistComponent implements OnInit {

  menulist: Menu[] = []
  constructor(private MenuServices: MenuService) { }

  // ngOnInit(): void {
  //   this.menulist = this.MenuServices.getMenus()
  // }

  ngOnInit() {
    this.MenuServices.getMenus().subscribe((menu) =>{
    this.menulist = menu;
  })
  }
}
