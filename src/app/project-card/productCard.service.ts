import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";

@Injectable()
export class productCardservice{

    constructor(){}
    getProduct(){
        return ['Pasmados Regional Península de Setúbal Vinho Tinto',
        'Queijo Mussarela Fatiado Tirolez Kg','Queijo Camembert Ile De France 125g']
    }


}