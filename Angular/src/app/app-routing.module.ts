import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RestaurantListsComponent } from './components/restaurant/restaurant-lists/restaurant-lists.component';
import { RestaurantMenuComponent } from './components/restaurant/restaurant-menu/restaurant-menu.component';
import { CartComponent } from './components/restaurant/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'restaurant', pathMatch: 'full' },
  { path: 'restaurantList', component: RestaurantListsComponent },
  { path: 'restaurantMenu/:RestId/', component: RestaurantMenuComponent },
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
