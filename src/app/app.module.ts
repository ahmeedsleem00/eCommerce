import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { ProductComponent } from './Component/product/product.component';
import { CategoryComponent } from './Component/category/category.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './Component/wishlist/wishlist.component';
import { ForgetPasswordComponent } from './Component/forget-password/forget-password.component';
import { ResetpasswordComponent } from './Component/resetpassword/resetpassword.component';
import { ProductdetailsComponent } from './Component/productdetails/productdetails.component';
import { MainsliderComponent } from './Component/mainslider/mainslider.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddtitlePipe } from './addtitle.pipe';
import { SearchPipe } from './search.pipe';
import { CategorysliderComponent } from './Component/categoryslider/categoryslider.component';
import { CardComponent } from './Component/card/card.component';
import { BrandsComponent } from './Component/brands/brands.component';
import { CategoryListComponent } from './category-list/category-list.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    CategoryComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent,
    WishlistComponent,
    ForgetPasswordComponent,
    ResetpasswordComponent,
    ProductdetailsComponent,
    MainsliderComponent,
    AddtitlePipe,
    SearchPipe,
    CategorysliderComponent,
    CardComponent,
    BrandsComponent,
    CategoryListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    CarouselModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
