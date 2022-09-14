import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { productCardComponent } from './project-card/productCard.component'; 
import { productCardservice } from './project-card/productCard.service';
import { product } from './project-card/product';
import { NavComponent } from './nav/nav.component';
import { CartComponent } from './cart/cart.component';
import {Component} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module'; 


@NgModule({

  declarations: [
    AppComponent,
    productCardComponent,
    NavComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    AppRoutingModule
  ],
  providers: [productCardservice],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
