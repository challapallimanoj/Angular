import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-shoe',
  templateUrl: './product-shoe.component.html',
  styleUrls: ['./product-shoe.component.css']
})
export class ProductShoeComponent implements OnInit {
    menu=[
      {"name":"Nike Shoe","price":"RS 990/-","description":"Nike Air Jordan Footwear basketball sneakers.",imageUrl:"/assets/Shoe-component assets/img/17.png"},
      {"name":"Adidas Shoe","price":"RS 3490/-","description":"Adidas Men's Astound M Running Shoe.",imageUrl:"/assets/Shoe-component assets/img/2.png"},
      {"name":"Bourge Shoe","price":"RS 690/-","description":"Bourge Men's Loire-63 Running Shoes.",imageUrl:"/assets/Shoe-component assets/img/3.png"},
      {"name":"Sparxx Shoe","price":"RS 620/-","description":"Sparx Men's Sd0323g Sneakers.",imageUrl:"/assets/Shoe-component assets/img/4.png"},
      {"name":"T-Rock Shoe","price":"RS 355/-","description":"T-Rock Men's Running Shoes.",imageUrl:"/assets/Shoe-component assets/img/5.png"},
      {"name":"Puma Shoe","price":"RS 2490/-","description":"Puma Caracal Sneakers.",imageUrl:"/assets/Shoe-component assets/img/6.png"},
      {"name":"Reebok Shoe","price":"RS 1690/-","description":"Reebok STRIDE RUNNER Running Shoes For Men.",imageUrl:"/assets/Shoe-component assets/img/7.png"},
      {"name":"Red Tape Shoe","price":"RS 995/-","description":"Red Tape Men's Bsa0176 Walking Shoe.",imageUrl:"/assets/Shoe-component assets/img/8.png"},
      {"name":"Nicholas Shoe","price":"RS 899/-","description":"Nicholas Cricket Shoes For Men.",imageUrl:"/assets/Shoe-component assets/img/9.png"},
      {"name":"Reebok Shoe","price":"RS 1990/-","description":"Reebok TOP SPEED XTREME Running Shoes For Men.",imageUrl:"/assets/Shoe-component assets/img/10.png"},
      {"name":"Skechers Shoe","price":"RS 3299/-","description":"Skechers SOLAR FUSE Walking Shoe.",imageUrl:"/assets/Shoe-component assets/img/11.png"},
      {"name":"Red Tape Shoe","price":"RS 1490/-","description":"Red Tape Men's Rso0784a Walking Shoe.",imageUrl:"/assets/Shoe-component assets/img/12.png"},
      {"name":"Puma Shoe","price":"RS 1599/-","description":"Puma Space Runner Alt Running Shoes For Men.",imageUrl:"/assets/Shoe-component assets/img/13.png"},
      {"name":"Reebok Shoe","price":"RS 999/-","description":"Reebok Top Speed Xtreme Lp Casuals For Men.",imageUrl:"/assets/Shoe-component assets/img/14.png"},
      {"name":"Adidas Shoe","price":"RS 1499/-","description":"Adidas GLENN W Running Shoes.",imageUrl:"/assets/Shoe-component assets/img/15.png"},
      {"name":"Power Shoe","price":"RS 1199/-","description":"Power Men's Aero Running Shoes.",imageUrl:"/assets/Shoe-component assets/img/16.png"},
      {"name":"Puma Shoe","price":"RS 1253/-","description":"Puma Icon IDP Sneakers For Men .",imageUrl:"/assets/Shoe-component assets/img/17.png"},
      {"name":"Adidas Shoe","price":"RS 1590/-","description":"Adidas EASY VULC 2.0 Sneakers For Men.",imageUrl:"/assets/Shoe-component assets/img/18.png"},
      {"name":"Sparx Shoe","price":"RS 699/-","description":"Sparx Men's Mesh Sports Running/Walking.",imageUrl:"/assets/Shoe-component assets/img/19.png"},
      {"name":"Puma Shoe","price":"RS 999/-","description":"Puma Dryflex IDP Walking Shoes For Men.",imageUrl:"/assets/Shoe-component assets/img/20.png"},
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
