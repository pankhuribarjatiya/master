import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantListsComponent } from './components/restaurant/restaurant-lists/restaurant-lists.component';
import { MenuComponent} from "./components/menu/menu.component";
import { RestaurantMenulistComponent } from './components/menu/restaurant-menulist/restaurant-menulist.component';
//import { CartComponent } from './components/restaurant/cart/cart.component';

const routes: Routes = [

  { path: '', redirectTo: 'restaurant', pathMatch: 'full' },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurantList', component: RestaurantListsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menulist', component: RestaurantMenulistComponent},
  //{ path: 'cart', component: CartComponent }
];
@NgModule({imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
