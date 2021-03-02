import {Component, Input, OnInit} from '@angular/core';
import { Menu } from 'src/app/models/menu'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItems: Menu
  constructor() { }

  ngOnInit(): void {
  }
}
