import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantListsComponent } from './components/restaurant/restaurant-lists/restaurant-lists.component';
import { RestaurantItemComponent} from "./components/restaurant/restaurant-lists/restaurant-item/restaurant-item.component";
import { RestaurantMenuComponent } from './components/restaurant/restaurant-menu/restaurant-menu.component';
import { CartComponent } from './components/restaurant/cart/cart.component';
import { CartItemComponent } from './components/restaurant/cart/cart-item/cart-item.component';
import { ItemsComponent } from './components/restaurant/restaurant-menu/items/items.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';



@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    RestaurantComponent,
    RestaurantListsComponent,
    RestaurantItemComponent,
    RestaurantMenuComponent,
    CartComponent,
    CartItemComponent,
    ItemsComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
