import { Component, OnInit } from '@angular/core';
import { Injectable } from "@angular/core";

@Injectable()
export class productCardservice{

    constructor(){}
    getProducts(){
        return ['Vinho Tinto Seco de Mesa'
   //     'QUEIJO','QUEIJO FRANCÊS']
    ]
    }
}