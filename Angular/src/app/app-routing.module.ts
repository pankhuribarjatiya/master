import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantListsComponent } from './components/restaurant/restaurant-lists/restaurant-lists.component';
import { RestaurantMenuComponent } from './components/restaurant/restaurant-menu/restaurant-menu.component';
import { LoginComponent } from './components/login/login.component';
//import { CartComponent } from './components/restaurant/cart/cart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '', redirectTo: 'restaurant', pathMatch: 'full' },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurantList', component: RestaurantListsComponent },
  { path: 'restaurantMenu', component: RestaurantMenuComponent},
  //{ path: 'cart', component: CartComponent }
  { path: '', redirectTo: '/shop', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
