import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-chocolates',
  templateUrl: './product-chocolates.component.html',
  styleUrls: ['./product-chocolates.component.css']
})
export class ProductChocolatesComponent implements OnInit {
  menu=[
    {"name":"Cadbury Chocolate","price":"RS 450/-","description":"Cadbury Dairy Milk Silk Chocolate Bar.",imageUrl:"/assets/Chocolates-component assets/images/1.png"},
    {"name":"Cadbury Chocolate","price":"RS 341/-","description":"Cadbury Celebrations Premium Assorted Chocolate Gift Pack.",imageUrl:"/assets/Chocolates-component assets/images/2.png"},
    {"name":"Fabelle Chocolate","price":"RS 880/-","description":"Fabelle Exquisite Chocolates, The Bars Trilogy Gift Box.",imageUrl:"/assets/Chocolates-component assets/images/3.png"},
    {"name":"Kit Kat Chocolate","price":"RS 120/-","description":"Nestle Kitkat 2 Finger Chocolate Covered Wafer Bar.",imageUrl:"/assets/Chocolates-component assets/images/4.png"},
    {"name":"Ferrero Rocher Chocolate","price":"RS 329/-","description":"Ferrero Rocher Moments.",imageUrl:"/assets/Chocolates-component assets/images/5.png"},
    {"name":"Amul Chocolate","price":"RS 170/-","description":"Amul 99% Cacao Chocolate.",imageUrl:"/assets/Chocolates-component assets/images/6.png"},
    {"name":"Cadbury Chocolate","price":"RS 260/-","description":"Cadbury Dairy Milk Chocolate Shots.",imageUrl:"/assets/Chocolates-component assets/images/7.png"},
    {"name":"Amul Chocolate","price":"RS 300/-","description":"Amul India Origin Chocolate.",imageUrl:"/assets/Chocolates-component assets/images/8.png"},
    {"name":"Snickers Chocolate","price":"RS 150/-","description":"Snickers Chocolate Miniatures.",imageUrl:"/assets/Chocolates-component assets/images/9.png"},
    {"name":"Sunfeast Chocolate","price":"RS 125/-","description":"Cadbury Dairy Milk Silk Chocolate Bar.",imageUrl:"/assets/Chocolates-component assets/images/10.png"},
    {"name":"Hershey's Chocolate","price":"RS 275/-","description":"Hershey's Kisses Moments Chocolate Gift Pack.",imageUrl:"/assets/Chocolates-component assets/images/11.png"},
    {"name":"Amul Chocolate","price":"RS 350/-","description":"Amul Dark Chocolate: Assorted Pack.",imageUrl:"/assets/Chocolates-component assets/images/12.png"},
    {"name":"Bounty Chocolate","price":"RS 420/-","description":"Bounty Miniatures Coconut Filled Chocolates Gift Pack.",imageUrl:"/assets/Chocolates-component assets/images/13.png"},
    {"name":"Snickers Chocolate","price":"RS 480/-","description":"Snickers Almond Filled Chocolates Gift Pack.",imageUrl:"/assets/Chocolates-component assets/images/14.png"},
    {"name":"Snickers Chocolate","price":"RS 420/-","description":"Snickers Miniatures Peanut Filled Chocolates Gift Pack.",imageUrl:"/assets/Chocolates-component assets/images/15.png"},
    {"name":"Cadbury Chocolate","price":"RS 50/-","description":"Cadbury Choclairs Gold Home Pack.",imageUrl:"/assets/Chocolates-component assets/images/16.png"},
    {"name":"Hershey's Chocolate","price":"RS 357/-","description":"Hershey's Kisses Cookies n Crème, Almonds & Milk Chocolate.",imageUrl:"/assets/Chocolates-component assets/images/17.png"},
    {"name":"Eclairs Chocolate","price":"RS 150/-","description":"Dukes Eclairs Chocolate.",imageUrl:"/assets/Chocolates-component assets/images/18.png"},
    {"name":"Hershey's Chocolate","price":"RS 450/-","description":"Hershey's Exotic Dark Chocolate Pomegranate.",imageUrl:"/assets/Chocolates-component assets/images/19.png"},
    {"name":"Zevic Chocolate","price":"RS 185/-","description":"Zevic 70% Dark Belgian Sugar Free Keto Chocolate.",imageUrl:"/assets/Chocolates-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
