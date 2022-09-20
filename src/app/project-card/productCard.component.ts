import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

import { productCardservice } from './productCard.service';// importa o serviço que pega os dados
import { product } from './product';// importa a tipificação do produto
import { CartComponent } from '../cart/cart.component'; 

@Component({
  selector: 'app-productCard',
  templateUrl: './productCard.component.html',
  styleUrls: ['./productCard.component.css']
})
export class productCardComponent{
  // forma de colocar varios tipos em uma variavel
  // product[] = []; (ele vai puxar as variaveis dessa classe)
  productBrand:string="Quinta do Morgado"
  productValue:string= "€19,22"
  productWeight:string="0,75lt"
  productNames[] = [];

  constructor(private productCardservice: productCardservice) { 
      this.productNames=productCardservice.getProducts().subscribe((product)=>(this.productNames = product));
    // declara product name como o GET, numa função assíncrona
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