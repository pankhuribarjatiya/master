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
    console.log("Inside NgOnINIT()");
    //this.handleSubscription();
    this.loadCartItems(this.custEmailId);
  }

  // handleSubscription() {
  //   this.addMenuToCart
  // }


  calcCartTotal() {
    console.log("Inside cart total");
    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.itemPrice)
    })
  }

  // addMenuToCart(product : Menu){

  //   let productExists = false;

  //   for (let index in this.cartItems){
  //     if(this.cartItems[index].productId === product._id){
  //       this.cartItems[index].qty++;
  //       productExists = true;
  //       break;
  //     }
  //   }

  //   if(!productExists){
  //     this.cartItems.push({
  //       productId: product._id,
  //       productName: product.itemName,
  //       price: product.itemPrice,
  //       qty: 1
  //     }) 
  //   }
  //   this.calcCartTotal();
  // }


  loadCartItems(custEmailId : string) {
    console.log("Inside load cart items");
    this.cartService.retrieveCartDetails(custEmailId).subscribe((items: CartItem[]) => {
      this.cartItems = JSON.parse(JSON.stringify(items));
      console.log("Cartitems in cart components is " + JSON.stringify(this.cartItems) );
      this.calcCartTotal();
    })
  }
}