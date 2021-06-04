import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-travelbag',
  templateUrl: './product-travelbag.component.html',
  styleUrls: ['./product-travelbag.component.css']
})
export class ProductTravelbagComponent implements OnInit {
  menu=[
    {"name":"AmazonBasics Travel Bag","price":"RS 5499/-","description":"AmazonBasics Premium Hardside Spinner Luggage.",imageUrl:"/assets/Travel-component assets/images/1.png"},
    {"name":"IStorm Travel Bag","price":"RS 949/-","description":"POLESTAR XPLORE 55 ltrs with Rain Cover Rucksack Hiking Backpack .",imageUrl:"/assets/Travel-component assets/images/2.png"},
    {"name":"IStorm Wheeler Travel Bag","price":"RS 1499/-","description":"IStorm Wheeler Travel Duffel Bag.",imageUrl:"/assets/Travel-component assets/images/3.png"},
    {"name":"IStorm Skater Bag","price":"RS 1699/-","description":"IStorm Skater Wheeler Duffle Travel Bag.",imageUrl:"/assets/Travel-component assets/images/4.png"},
    {"name":"Aristocrat Travel Bag","price":"RS 1999/-","description":"Aristocrat Cadet Polyester Blue Travel Duffle.",imageUrl:"/assets/Travel-component assets/images/5.png"},
    {"name":"Lavie Travel Bag","price":"RS 1399/-","description":"Lavie Sport Polyester Travel Duffle.",imageUrl:"/assets/Travel-component assets/images/6.png"},
    {"name":"Safari Travel Bag","price":"RS 2699/-","description":"Safari Ray Polycarbonate Hardsided Check-in Luggage.",imageUrl:"/assets/Travel-component assets/images/7.png"},
    {"name":"Safari Travel Bag","price":"RS 3499/-","description":"Safari Thorium Sharp Antiscratch Polycarbonate Black Hard Suitcase.",imageUrl:"/assets/Travel-component assets/images/8.png"},
    {"name":"Aristocrat Travel Bag","price":"RS 3299/-","description":"Aristocrat Sharp Antiscratch Cabin 4 wheels Hard Suitcase.",imageUrl:"/assets/Travel-component assets/images/9.png"},
    {"name":"Aristocrat Travel Bag","price":"RS 3499/-","description":"Aristocrat Juke Polycarbonate Grey Hard Sided Suitcase.",imageUrl:"/assets/Travel-component assets/images/10.png"},
    {"name":"AmazonBasics Travel Bag","price":"RS 2999/-","description":"AmazonBasics Duffel Trolley Bag.",imageUrl:"/assets/Travel-component assets/images/11.png"},
    {"name":"AmazonBasics Travel Bag","price":"RS 4599/-","description":"AmazonBasics Premium Hardside Spinner Luggage.",imageUrl:"/assets/Travel-component assets/images/12.png"},
    {"name":"Safari Travel Bag","price":"RS 3699/-","description":"Safari Thorium Sharp Antiscratch Polycarbonate Hard Suitcase.",imageUrl:"/assets/Travel-component assets/images/13.png"},
    {"name":"Safari Travel Bag","price":"RS 2349/-","description":"Safari Prisma Polyester Soft Suitcase.",imageUrl:"/assets/Travel-component assets/images/14.png"},
    {"name":"Swiss Gear Travel Bag","price":"RS 2299/-","description":"Swiss Gear ABS Hardsided Cabin Luggage.",imageUrl:"/assets/Travel-component assets/images/15.png"},
    {"name":"Swiss Gear Travel Bag","price":"RS 2679/-","description":"Swiss Gear Hardside Spinner Luggage.",imageUrl:"/assets/Travel-component assets/images/16.png"},
    {"name":"Skybags Travel Bag","price":"RS 2399/-","description":"Skybags Trooper Polycarbonate Blue Hardsided Cabin Luggage.",imageUrl:"/assets/Travel-component assets/images/17.png"},
    {"name":"Skybags Travel Bag","price":"RS 2349/-","description":"Skybags Cardiff Polyester Travel Duffle.",imageUrl:"/assets/Travel-component assets/images/18.png"},
    {"name":"Skyline Travel Bag","price":"RS 5499/-","description":"Skyline Expandable Polyester Soft Case Trolley Bag.",imageUrl:"/assets/Travel-component assets/images/19.png"},
    {"name":"POLESTAR Travel Bag","price":"RS 899/-","description":"POLESTAR XPLORE with Rain Cover Rucksack Hiking Backpack.",imageUrl:"/assets/Travel-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
