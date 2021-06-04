import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-Baby-stroller',
  templateUrl: './product-Baby-stroller.component.html',
  styleUrls: ['./product-Baby-stroller.component.css']
})
export class ProductBabyStrollerComponent implements OnInit {
  menu=[
    {"name":"Mee Mee Baby Stroller","price":"RS 4599/-","description":"Mee Mee Baby Pram with Adjustable Seating Positions and Reversible Handle.",imageUrl:"/assets/Baby-stroller-component assets/images/1.png"},
    {"name":"Luvlap Baby Stroller","price":"RS 5890/-","description":"LuvLap Galaxy Stroller Extra Large Seating Space, Easy Fold, for Newborn Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/2.png"},
    {"name":"Luvlap Baby Stroller","price":"RS 5799/-","description":"Luvlap Pram Extra Large Seating Space, Easy Fold, for Newborn Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/3.png"},
    {"name":"StarAndDaisy Baby Stroller","price":"RS 3299/-","description":"StarAndDaisy Multi-Purpose Broad seat & Bed Buggy for 0-36 Months.",imageUrl:"/assets/Baby-stroller-component assets/images/4.png"},
    {"name":"StarAndDaisy Baby Stroller","price":"RS 3499/-","description":"StarAndDaisy Multi-Adjustment Stroller pram Travel Friendly, Broad seat & Bed Buggy for 0-24 Months.",imageUrl:"/assets/Baby-stroller-component assets/images/5.png"},
    {"name":"Luvlap Baby Stroller","price":"RS 3749/-","description":"LuvLap Joy Stroller Compact and Easy Fold, for Newborn Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/6.png"},
    {"name":"Luvlap Baby Stroller","price":"RS 5299/-","description":"Luvlap Starshine Stroller/Pram, Easy Fold for Newborn Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/7.png"},
    {"name":"Luvlap Baby Stroller","price":"RS 3599/-","description":"Luvlap Elite Baby Pram Stroller.",imageUrl:"/assets/Baby-stroller-component assets/images/8.png"},
    {"name":"Luvlap Baby Stroller","price":"RS 4299/-","description":"Luvlap Elite Baby Pram Stroller for 0-3 years.",imageUrl:"/assets/Baby-stroller-component assets/images/9.png"},
    {"name":"Mee Mee Baby Stroller","price":"RS 2399/-","description":"Mee Mee Stylish Light Weight Baby Stroller.",imageUrl:"/assets/Baby-stroller-component assets/images/10.png"},
    {"name":"Chicco Baby Stroller","price":"RS 1999/-","description":"Chicco Mosquito Net for Stroller.",imageUrl:"/assets/Baby-stroller-component assets/images/11.png"},
    {"name":"LifeKrafts Baby Stroller","price":"RS 1299/-","description":"LifeKrafts Stroller Mosquito Net for Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/12.png"},
    {"name":"R for Rabbit Baby Stroller","price":"RS 3799/-","description":"R for Rabbit Lollipop Lite Colorful Baby Stroller.",imageUrl:"/assets/Baby-stroller-component assets/images/13.png"},
    {"name":"R for Rabbit Baby Stroller","price":"RS 7299/-","description":"R for Rabbit Chocolate Ride - The Designer Baby Stroller and Pram .",imageUrl:"/assets/Baby-stroller-component assets/images/14.png"},
    {"name":"Chicco Baby Stroller","price":"RS 14,599/-","description":"Chicco Cortina CX Stroller for newborn babies and toddlers.",imageUrl:"/assets/Baby-stroller-component assets/images/15.png"},
    {"name":"Chicco Baby Stroller","price":"RS 8399/-","description":"Chicco Echo Stroller with Bumper Bar.",imageUrl:"/assets/Baby-stroller-component assets/images/16.png"},
    {"name":"Chicco Baby Stroller","price":"RS 14,799/-","description":"hicco Echo Stroller with Stroller for newborn babies and toddlers.",imageUrl:"/assets/Baby-stroller-component assets/images/17.png"},
    {"name":"Mee Mee Baby Stroller","price":"RS 6899/-","description":"Mee Mee Rock N Roll 2 in 1 Stroller Turn Rocker for Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/18.png"},
    {"name":"Luvlap Baby Stroller","price":"RS 8599/-","description":"R for Rabbit Rock N Roll 2 in 1 Stroller Turn Rocker for Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/19.png"},
    {"name":"R for Rabbit Baby Stroller","price":"RS 11,099/-","description":"R for Rabbit Rock N Roll 2 in 1 Stroller Turn Rocker for Baby.",imageUrl:"/assets/Baby-stroller-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
