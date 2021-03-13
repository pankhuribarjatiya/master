import {Component, Input, OnInit} from '@angular/core';
import { Menu } from 'src/app/models/menu'
import { MessengerService } from 'src/app/services/messenger.service'
import { Restaurant} from "src/app/models/restaurant";
import { CartService } from 'src/app/services/cart.service'
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CartItem } from 'src/app/models/cart-item';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  form: FormGroup;
  menulist: Menu[];
  restaurant: Restaurant;

  @Input() menuItem: Menu;
  @Input() cartItem: CartItem;
  custEmailId: string = "asupekar@seattleu.edu";

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

  handleAddToCart(cartItem) {
    //var menuItemzzz = JSON.parse(JSON.stringify(this.cartItem));
    //this.menuItem.custEmailId = this.custEmailId;


      // this.cartItem.restaurantId = menuItem.restaurantId;
      // this.cartItem.menuId = menuItem._id;
      // this.cartItem.custEmailId = this.custEmailId;
      // this.cartItem.itemName = menuItem.itemName;
      // this.cartItem.itemPrice = menuItem.itemPrice;

    //this.menuItem._id = id;

    //console.log("HandleAddToCart() item is " +id);
    //this.msg.sendMsg(this.menuItem)

    this.cartService.add(cartItem).subscribe (() => {
      // console.log(JSON.parse(JSON.stringify(cartItem)));
      this.cartItem = JSON.parse(JSON.stringify(cartItem));
    })
  };
}
