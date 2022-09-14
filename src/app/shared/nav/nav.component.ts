import { Component, OnInit } from '@angular/core';

import { GetCartService } from './get-cart.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  providers: [GetCartService]
})
export class NavComponent implements OnInit {

  constructor() {
    //listCart:any[]
    //this.listCart= GetCartService.CartList();
   }

  ngOnInit(): void {
  }

}
