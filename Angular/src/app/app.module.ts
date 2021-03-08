import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SharedComponent } from './components/shared/shared.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantListsComponent } from './components/restaurant/restaurant-lists/restaurant-lists.component';
import { RestaurantItemComponent} from "./components/restaurant/restaurant-lists/restaurant-item/restaurant-item.component";
// import { RestaurantMenuComponent } from './components/restaurant/restaurant-menu/restaurant-menu.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart/cart-item/cart-item.component';
// import { ItemsComponent } from './components/restaurant/restaurant-menu/items/items.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { MenuComponent } from './components/menu/menu.component';
import { RestaurantMenulistComponent } from './components/menu/restaurant-menulist/restaurant-menulist.component';
import { MenuItemComponent } from "./components/menu/restaurant-menulist/menu-item/menu-item.component";
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OwnerMenuItemComponent } from './components/restaurantOwner/ownerMenu-item.component';
import { MenuItemListComponent } from './components/restaurantOwner/menu-item-list.component';
import { MenuItemFormComponent } from './components/restaurantOwner/menu-item-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    RestaurantComponent,
    RestaurantListsComponent,
    RestaurantItemComponent,
    CartComponent,
    CartItemComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    MenuComponent,
    MenuItemComponent,
    RestaurantMenulistComponent,
    LoginComponent,
    PageNotFoundComponent,
    OrderDetailsComponent,
    CheckoutComponent,
    OwnerMenuItemComponent,
    MenuItemListComponent,
    MenuItemFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
