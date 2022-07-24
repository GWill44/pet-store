import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomeComponent} from "./component/home/home.component";
import {ProductsComponent} from "./component/products/products.component";
import {ShoppingCartComponent} from "./component/shopping-cart/shopping-cart.component";
import {CheckoutComponent} from "./component/checkout/checkout.component";
import {LoginComponent} from "./component/login/login.component";
import {AdminProductsComponent} from "./component/admin/admin-products/admin-products.component";
import {AdminOrdersComponent} from "./component/admin/admin-orders/admin-orders.component";
import {MyOrdersComponent} from "./component/my-orders/my-orders.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckoutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
  { path: 'my-orders', component: MyOrdersComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
