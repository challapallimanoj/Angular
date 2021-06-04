import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-tshirt',
  templateUrl: './product-tshirt.component.html',
  styleUrls: ['./product-tshirt.component.css']
})
export class ProductTshirtComponent implements OnInit {
  menu=[
    {"name":"Jockey T-Shirt","price":"RS 399/-","description":"Jockey Men's Regular Fit T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/1.png"},
    {"name":"Jockey T-Shirt","price":"RS 999/-","description":"Jockey Men's Round Neck Cotton Tshirt.",imageUrl:"/assets/Tshirt-component assets/img/2.png"},
    {"name":"US Polo T-Shirt","price":"RS 599/-","description":"US Polo Men's Regular fit T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/3.png"},
    {"name":"Levi's T-Shirt","price":"RS 649/-","description":"Levi’s Men’s Ultra-Soft Cotton V Neck T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/4.png"},
    {"name":"Levi's T-Shirt","price":"RS 495/-","description":"Levi's Men's Slim Fit Plain Thermal Top.",imageUrl:"/assets/Tshirt-component assets/img/5.png"},
    {"name":"Van Heusen T-Shirt","price":"RS 699/-","description":"Van Heusen Men's Plain Thermal Top.",imageUrl:"/assets/Tshirt-component assets/img/6.png"},
    {"name":"Lux Inferno T-Shirt","price":"RS 799/-","description":"Lux Inferno Mens Cotton Thermal Top.",imageUrl:"/assets/Tshirt-component assets/img/7.png"},
    {"name":"Van Heusen T-Shirt","price":"RS 599/-","description":"Van Heusen Ultra-Soft Cotton V Neck T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/8.png"},
    {"name":"Jockey T-Shirt","price":"RS 579/-","description":"Jockey Men's Slim Fit Plain Thermal Top.",imageUrl:"/assets/Tshirt-component assets/img/9.png"},
    {"name":"Allen Solly T-Shirt","price":"RS 499/-","description":"Allen Solly Regular Fit T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/10.png"},
    {"name":"Allen Solly T-Shirt","price":"RS 1299/-","description":"Allen Solly Men's Solid Fit T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/11.png"},
    {"name":"PrintOctopus T-Shirt","price":"RS 899/-","description":"PrintOctopus Men's Regular Fit T-Shirt .",imageUrl:"/assets/Tshirt-component assets/img/12.png"},
    {"name":"SCOTT T-Shirt","price":"RS 649/-","description":"Scott Men's V Neck T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/13.png"},
    {"name":"SWISS CLUB T-Shirt","price":"RS 545/-","description":"SWISS CLUB Mens Striped Collar Neck Half Sleeves .",imageUrl:"/assets/Tshirt-component assets/img/14.png"},
    {"name":"BULLMER T-Shirt","price":"RS 599/-","description":" BULLMER Men's Plane Coloured T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/15.png"},
    {"name":"BULLMER T-Shirt","price":"RS 399/-","description":"BULLMER Men's Regular Fit T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/16.png"},
    {"name":"BULLMER T-Shirt","price":"RS 499/-","description":"BULLMER Mens Halfsleeve Multi-Coloured Printed Cotton.",imageUrl:"/assets/Tshirt-component assets/img/17.png"},
    {"name":"BULLMER T-Shirt","price":"RS 699/-","description":"BULLMER Mens Halfsleeve Round Neck Printed Cotton.",imageUrl:"/assets/Tshirt-component assets/img/18.png"},
    {"name":"PrintOctopus T-Shirt","price":"RS 789/-","description":"Jockey Men's Classic Fit T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/19.png"},
    {"name":"PrintOctopus T-Shirt","price":"RS 969/-","description":"PrintOctopus Men's Round Neck T-Shirt.",imageUrl:"/assets/Tshirt-component assets/img/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
