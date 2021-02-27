import { Component, OnInit, Input } from '@angular/core';
import { Menu } from 'src/app/models/menu'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  @Input() menuItem: Menu
  constructor() { }

  ngOnInit(): void {
  }

}
