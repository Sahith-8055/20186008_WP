import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './service.service';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { CartComponent } from './cart/cart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ContactComponent } from './contact/contact.component';
import { FilterPipe } from './filter.pipe';
import { ProfileComponent } from './profile/profile.component';

const routes : Routes = [
  { path : '', component: HomeComponent },
  { path : 'home', component: HomeComponent },
  { path : 'navbar', component: NavbarComponent},
  { path : 'login', component: LoginComponent },
  { path : 'register', component: RegisterComponent },
  { path : 'products', component: ProductsDisplayComponent },
  { path : 'products/:id', component: ProductViewComponent},
  { path : 'cart/:id', component: CartComponent},
  { path : 'checkoutPage/:id', component: CheckoutComponent},
  { path : 'contact', component: ContactComponent},
  { path : 'profile/:id', component: ProfileComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ProductsDisplayComponent,
    LoginComponent,
    HomeComponent,
    ProductViewComponent,
    CartComponent,
    NavbarComponent,
    CheckoutComponent,
    ContactComponent,
    FilterPipe,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
