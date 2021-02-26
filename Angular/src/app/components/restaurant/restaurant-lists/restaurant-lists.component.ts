import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "src/app/services/restaurant.service";
import { Restaurant } from "../../../models/restaurant";

@Component({
  selector: 'app-restaurant-lists',
  templateUrl: './restaurant-lists.component.html',
  styleUrls: ['./restaurant-lists.component.css']
})
export class RestaurantListsComponent implements OnInit {

  restaurantlist: Restaurant[] = []
  constructor(private RestaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.restaurantlist = this.RestaurantService.getRestaurants()
  }
}
