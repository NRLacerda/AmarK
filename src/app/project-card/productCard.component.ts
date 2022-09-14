import { Component, OnInit } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

import { productCardservice } from './productCard.service';// importa o serviço que pega os dados
import { product } from './product';// importa a tipificação do produto
import { CartComponent } from '../cart/cart.component'; 

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
<<<<<<< HEAD
  constructor(public productCardservice: productCardservice) { 
=======
  
  constructor(private productCardservice: productCardservice) { 
>>>>>>> 70a987903bfa53399d02c30f3eb07b9e8c4b529d
      this.productNames=productCardservice.getProducts();
    // declara a variavel sendo igual a uma função do serviço
  }
  ngOnInit(): void {
  }
  // Adiciona item clickado ao carrinho de compras
  addCart(){
    let Cart:any = [] 
    //= ["Maça","Queijo suico","Vinho bordo"]
    let amount:number= 0
    let amountItem:number = amount + 1
    Cart.push(this.productNames) //coloca o item dentro do array Cart
    window.alert('Produto Adicionado ao Carrinho! ' + Cart +'Quantidade ' + amountItem)
    console.log(Cart + "Quantidade " +  amountItem)
  }
}