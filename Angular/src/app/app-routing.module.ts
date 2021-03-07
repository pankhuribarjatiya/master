import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantListsComponent } from './components/restaurant/restaurant-lists/restaurant-lists.component';
import { MenuComponent} from "./components/menu/menu.component";
import { RestaurantMenulistComponent } from './components/menu/restaurant-menulist/restaurant-menulist.component';
import { LoginComponent } from './components/login/login.component';
//import { CartComponent } from './components/restaurant/cart/cart.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [

  { path: '', redirectTo: 'restaurant', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurantList', component: RestaurantListsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menulist', component: RestaurantMenulistComponent},
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
