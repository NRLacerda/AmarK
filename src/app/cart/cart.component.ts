import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() Cart = 'A';

  constructor() { 
    let CartList:string[]
  }

  ngOnInit(): void {
  }
}
