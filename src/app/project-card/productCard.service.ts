import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";

@Injectable()
export class productCardservice{

    constructor(){}
    getProducts(){
        return ['Vinho Tinto Seco de Mesa'
   //   Eu tirei os outros pq deve ser pego de um BD, com query SQL, usando ID btw 
   //    'QUEIJO','QUEIJO FRANCÊS']
    ]
    }
}