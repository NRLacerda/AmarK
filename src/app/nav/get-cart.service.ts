import { productCardservice } from './../project-card/productCard.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetCartService {

  constructor() { }
  CartList(){
    return ['Teste']
  }
}
