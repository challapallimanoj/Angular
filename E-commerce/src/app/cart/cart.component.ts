import { Component, OnInit } from '@angular/core';

declare const calculateDiscount:any;

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


    onClick(){
     calculateDiscount();
    }

}
