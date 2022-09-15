import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { productCardComponent } from './project-card/productCard.component'; 
import { productCardservice } from './project-card/productCard.service';
import { NavComponent } from './shared/nav/nav.component';
import { CartComponent } from './cart/cart.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './shared/user/user.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { GuardsComponent } from './shared/guards/guards.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 

@NgModule({

  declarations: [
    AppComponent,
    productCardComponent,
    NavComponent,
    CartComponent,
    UserComponent,
    SidenavComponent,
    LoadingComponent,
    GuardsComponent,
    HomeComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule,
    MatAutocompleteModule
  ],
  providers: [productCardservice],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
