import { Component, OnInit } from '@angular/core';

import { productCardservice } from './productCard.service';

@Component({
  selector: 'app-productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.css']
})
export class productCardComponent implements OnInit {
  productName:any
  productBrand:any
  productValue:any
  productWeight:any
  constructor(private productCardservice: productCardservice) { 
    this.productName=productCardservice.getProduct();
  }
  ngOnInit(): void {
  }
  addCart(){
    
  }
}
