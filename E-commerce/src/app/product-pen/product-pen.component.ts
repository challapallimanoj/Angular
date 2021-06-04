import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-pen',
  templateUrl: './product-pen.component.html',
  styleUrls: ['./product-pen.component.css']
})
export class ProductPenComponent implements OnInit {
  menu=[
    {"name":"Pentonic Pen","price":"RS 199/-","description":"Pentonic Linc Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/1.png"},
    {"name":"Cello Butterflow Pen","price":"RS 150/-","description":"Cello Butterflow Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/2.png"},
    {"name":"Cello Finegrip Pen","price":"RS 125/-","description":"Cello Finegrip Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/3.png"},
    {"name":"Cello Pinpoint Pen","price":"RS 178/-","description":"Cello Pinpoint Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/4.png"},
    {"name":"Cello Technotip Pen","price":"RS 139/-","description":"Cello Technotip Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/5.png"},
    {"name":"Classmate BFirst Pen","price":"RS 169/-","description":"Classmate BFirst Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/6.png"},
    {"name":"Classmate Octane Pen","price":"RS 200/-","description":"Classmate Octane Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/7.png"},
    {"name":"Classmate ITC Pen","price":"RS 79/-","description":"Classmate ITC Octane Ball Pen.",imageUrl:"/assets/Pen-component assets/images/8.png"},
    {"name":"Classmate Pulse Pen","price":"RS 199/-","description":"Classmate Pulse Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/9.png"},
    {"name":"Parker Pen","price":"RS 299/-","description":"Parker Anti Microbial Classic Ball Pen.",imageUrl:"/assets/Pen-component assets/images/10.png"},
    {"name":"Parker Jotter Pen","price":"RS 189/-","description":"Parker Jotter Standard CT Ball Pen.",imageUrl:"/assets/Pen-component assets/images/11.png"},
    {"name":"Parker Classic Pen","price":"RS 199/-","description":"Parker Jotter Classic Ball Pen.",imageUrl:"/assets/Pen-component assets/images/12.png"},
    {"name":"Parker Matte Pen","price":"RS 159/-","description":"Parker Matte Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/13.png"},
    {"name":"Linc Glycer Pen","price":"RS 149/-","description":"Linc Glycer Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/14.png"},
    {"name":"Linc Smart Pen","price":"RS 79/-","description":"Linc Smart GL Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/15.png"},
    {"name":"Linc Ocean Pen","price":"RS 169/-","description":"Linc Ocean Classic Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/16.png"},
    {"name":"Linc Pentonic Pen","price":"RS 139/-","description":"Linc Pentonic Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/17.png"},
    {"name":"Linc Majesta Pen","price":"RS 149/-","description":"Linc Majesta Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/18.png"},
    {"name":"Pilot Pen","price":"RS 120/-","description":"Pilot Hi-Tech Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/19.png"},
    {"name":"Pilot Frixion Pen","price":"RS 200/-","description":"Pilot Clicker Rollball Ball Point Pen.",imageUrl:"/assets/Pen-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
