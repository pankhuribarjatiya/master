import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';
import { CartService } from 'src/app/services/cart.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  cartItems: CartItem[];
  id : string = "asupekar@seattleu.edu";

  constructor( 
    private CartService : CartService,
    private activatedRoute: ActivatedRoute,
  ) {}

  ngOnInit(){
    this.activatedRoute.paramMap.subscribe(paramMap => {​​​​
      let emailId = paramMap.get('id');
          console.log(emailId);
          this.retrieveCartDetails(emailId);
    }​​​​);
  }

  retrieveCartDetails(id : string) {
    this.CartService.retrieveCartDetails(id) 
      .subscribe(cartItems => {​​​​
      console.log(JSON.parse(JSON.stringify(cartItems)));
      this.cartItems = JSON.parse(JSON.stringify(cartItems));
    }​​​​);
  }

  onCartItemDelete(cartItem: CartItem) {
    this.CartService.delete(cartItem)
      .subscribe(() => {
        this.retrieveCartDetails(cartItem.custEmailId.toString());
      });
  }

}
