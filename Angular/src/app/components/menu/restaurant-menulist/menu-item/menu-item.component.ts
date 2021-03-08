import {Component, Input, OnInit} from '@angular/core';
import { Menu } from 'src/app/models/menu'
import { MessengerService } from 'src/app/services/messenger.service'
import { CartService } from 'src/app/services/cart.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  form: FormGroup;

  @Input() menuItem: Menu

  constructor(private msg: MessengerService,
    private cartService: CartService,
    private formBuilder: FormBuilder,
    ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      itemName: this.formBuilder.control(''),
      itemDescription: this.formBuilder.control(''),
      itemPrice: this.formBuilder.control(''),
      menuItemImageUrl: this.formBuilder.control(''),
    });
  }

  handleAddToCart() {
      console.log("HandleAddToCart() item is " +this.menuItem)
      this.msg.sendMsg(this.menuItem)
    };
}
