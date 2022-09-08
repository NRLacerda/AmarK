import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

import { productCardservice } from './productCard.service';
import { product } from './product'; // importa a tipificação do produto
// importa o serviço que pega os dados

@Component({
  selector: 'app-productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.css']
})
export class productCardComponent implements OnInit {
  // forma de colocar varios tipos em uma variavel
  // product[] = []; (ele vai puxar as variaveis dessa classe)
  productBrand:string="Quinta do Morgado"
  productValue:any= "€19,22"
  productWeight:string="0,75lt"
  productNames:string[]
  constructor(public productCardservice: productCardservice) { 
      this.productNames=productCardservice.getProducts();
    // declara a variavel sendo igual a uma função do serviço
  }
  ngOnInit(): void {
  }
  // Adiciona item clickado ao carrinho de compras
  addCart(){
    let Cart:any = [] 
    let amount:number= 0
    let amountItem:number = amount + 1
    Cart.push(this.productNames)
    window.alert('Produto Adicionado ao Carrinho! ' + Cart +'Quantidade ' + amountItem)
  }
}
