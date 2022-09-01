import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { productCardComponent } from './project-card/productCard.component'; 
import { productCardservice } from './project-card/productCard.service';


@NgModule({

  declarations: [
    AppComponent,
    productCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
  ],
  providers: [productCardservice],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
