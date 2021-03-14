import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'src/app/models/restaurant';
import { RestaurantService } from "src/app/services/restaurant.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  restaurant: Restaurant;
  restId: number = 1;
  emailId: string = "asupekar@seattleu.edu";

  constructor(private RestaurantService: RestaurantService) { }

  ngOnInit() {
    this.RestaurantService.retrieveRestaurantDetails(this.restId).subscribe((restaurantInfo) =>{
      console.log("restaurantInfo is " +JSON.stringify(restaurantInfo));
      //this.restaurant = {_id:restaurantInfo._id, restaurantName: restaurantInfo.restaurantName, restaurantAddress: restaurantInfo.restaurantAddress, phoneNumber: restaurantInfo.phoneNumber, restaurantImageUrl: restaurantInfo.restaurantImageUrl}
    this.restaurant = JSON.parse(JSON.stringify(restaurantInfo[0]))
    console.log(this.restaurant);
  });
 }
}
