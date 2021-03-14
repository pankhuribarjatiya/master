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

  constructor(private RestaurantService: RestaurantService) { }

  ngOnInit() {
    this.RestaurantService.retrieveRestaurantDetails(this.restId).subscribe((restaurantInfo) =>{
    this.restaurant = JSON.parse(JSON.stringify(restaurantInfo));
    console.log(this.restaurant);
  });
 }
}
