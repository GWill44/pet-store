import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { ProductsComponent } from './component/products/products.component';
import { CheckoutComponent } from './component/checkout/checkout.component';
import { MyOrdersComponent } from './component/my-orders/my-orders.component';
import { AdminProductsComponent } from './component/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './component/admin/admin-orders/admin-orders.component';
import { LoginComponent } from './component/login/login.component';
import { AppRoutingModule } from "./app-routing.module";
import {ShoppingCartComponent} from "./component/shopping-cart/shopping-cart.component";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckoutComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
