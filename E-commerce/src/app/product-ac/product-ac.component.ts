import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-ac',
  templateUrl: './product-ac.component.html',
  styleUrls: ['./product-ac.component.css']
})
export class ProductAcComponent implements OnInit {
  menu=[
    {"name":"Blue Star AC","price":"RS 37,999/-","description":"Blue Star 1.5 Ton 5 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/1.png"},
    {"name":"LG AC","price":"RS 42,999/-","description":"LG 1.5 Ton 3 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/2.png"},
    {"name":"Daikin AC","price":"RS 37,999/-","description":"Daikin 0.8 Ton 3 Star Split AC.",imageUrl:"/assets/AC-component assets/images/3.png"},
    {"name":"Whirlpool Star AC","price":"RS 25,599/-","description":"Whirlpool 1 Ton 3 Star 2020 Split AC with Copper Condenser",imageUrl:"/assets/AC-component assets/images/4.png"},
    {"name":"Voltas AC","price":"RS 32,999/-","description":"Voltas 1.5 Ton 3 Star Split AC.",imageUrl:"/assets/AC-component assets/images/5.png"},
    {"name":"Carrier AC","price":"RS 29,699/-","description":"Carrier 1.5 Ton 3 Star Split AC.",imageUrl:"/assets/AC-component assets/images/6.png"},
    {"name":"Haier AC","price":"RS 31,999/-","description":"Haier 1 Ton 3 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/7.png"},
    {"name":"Godrej AC","price":"RS 27,990/-","description":"Godrej 1.5 Ton 2 Star Hot & Cold Split AC.",imageUrl:"/assets/AC-component assets/images/8.png"},
    {"name":"Godrej AC","price":"RS 29,999/-","description":"Godrej 1.5 Ton 3 Star Split AC.",imageUrl:"/assets/AC-component assets/images/9.png"},
    {"name":"Sanyo AC","price":"RS 24,949/-","description":"Sanyo 1 Ton 3 Star Inverter Split AC .",imageUrl:"/assets/AC-component assets/images/10.png"},
    {"name":"Sanyo AC","price":"RS 36,489/-","description":"Sanyo 2 Ton 3 Star Dual Inverter Wide Split AC.",imageUrl:"/assets/AC-component assets/images/11.png"},
    {"name":"Panasonic AC","price":"RS 41,099/-","description":"Panasonic 1.5 Ton 5 Star Wi-Fi Twin Cool Inverter Split AC .",imageUrl:"/assets/AC-component assets/images/12.png"},
    {"name":"Panasonic Star AC","price":"RS 34,219/-","description":"Panasonic 1.5 Ton 3 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/13.png"},
    {"name":"Panasonic AC","price":"RS 50,999/-","description":"Panasonic 2 Ton 5 Star Wi-Fi Twin Cool Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/14.png"},
    {"name":"Panasonic AC","price":"RS 47,912/-","description":"Panasonic 2 Ton 3 Star Wi-Fi Twin Cool Inverter Split AC .",imageUrl:"/assets/AC-component assets/images/15.png"},
    {"name":"Blue Star AC","price":"RS 33,999/-","description":"Blue Star 1.5 Ton 4 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/16.png"},
    {"name":"LG AC","price":"RS 45,999/-","description":"LG 1.5 Ton 5 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/17.png"},
    {"name":"Carrier AC","price":"RS 32,999/-","description":"Carrier Ton 3 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/18.png"},
    {"name":"Blue Star AC","price":"RS 35,589/-","description":"Carrier 1.5 Ton 4 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/19.png"},
    {"name":"Blue Star AC","price":"RS 39,999/-","description":"Carrier 1.5 Ton 5 Star Inverter Split AC.",imageUrl:"/assets/AC-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
