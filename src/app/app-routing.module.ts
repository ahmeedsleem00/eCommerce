import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { ProductComponent } from './Component/product/product.component';
import { CategoryComponent } from './Component/category/category.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { authGuard } from './auth.guard';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { ProductdetailsComponent } from './Component/productdetails/productdetails.component';
import { CardComponent } from './Component/card/card.component';

const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'home', canActivate: [authGuard], component: HomeComponent },
  { path: 'brands', canActivate: [authGuard], component: BrandsComponent },
  { path: 'product', canActivate: [authGuard], component: ProductComponent },
  { path: 'productdetails/:id', canActivate: [authGuard], component: ProductdetailsComponent },
  { path: 'category', canActivate: [authGuard], component: CategoryComponent },
  { path: 'card', canActivate: [authGuard], component: CardComponent },
  { path: 'wishlist', canActivate: [authGuard], component: WishlistComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetPasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
