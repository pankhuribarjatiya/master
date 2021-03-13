import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Menu } from 'src/app/models/menu';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [];

  cartTotal = 0

  custEmailId: string = "asupekar@seattleu.edu";

  constructor(
    private msg: MessengerService,
    private cartService: CartService
  ) { }

  ngOnInit() {
    this.handleSubscription();
    this.loadCartItems(this.custEmailId);
  }

  handleSubscription() {
    // this.msg.getMsg().subscribe((item: Menu) => {
    //   this.addMenuToCart(item);   
    // })
    this.addMenuToCart
  }


  calcCartTotal() {
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  addMenuToCart(product : Menu){

    let productExists = false;

    for (let index in this.cartItems){
      if(this.cartItems[index].productId === product._id){
        this.cartItems[index].qty++;
        productExists = true;
        break;
      }
    }

    if(!productExists){
      this.cartItems.push({
        productId: product._id,
        productName: product.itemName,
        price: product.itemPrice,
        qty: 1
      }) 
    }
    this.calcCartTotal();
  }


  loadCartItems(custEmailId : string) {
    this.cartService.retrieveCartDetails(custEmailId).subscribe((items: CartItem[]) => {
      this.cartItems = JSON.parse(JSON.stringify(items));
      this.calcCartTotal();
    })
  }
}