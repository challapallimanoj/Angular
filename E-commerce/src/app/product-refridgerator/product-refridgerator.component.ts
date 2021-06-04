import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-refridgerator',
  templateUrl: './product-refridgerator.component.html',
  styleUrls: ['./product-refridgerator.component.css']
})
export class ProductRefridgeratorComponent implements OnInit {
  menu=[
    {"name":"Whirlpool Refrigerator","price":"RS 21,690/-","description":"Whirlpool 265 Star Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/1.png"},
    {"name":"Whirlpool Refrigerator","price":"RS 18,490/-","description":"Whirlpool 245 L 2 Star Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/2.png"},
    {"name":"LG Refrigerator","price":"RS 21,999/-","description":"LG 260 L 2 Star Inverter Frost-Free Double-Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/3.png"},
    {"name":"LG Refrigerator","price":"RS 14,390/-","description":"LG 235 L 4 Star Inverter Direct Cool Single Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/4.png"},
    {"name":"LG Refrigerator","price":"RS 12,695/-","description":"LG 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/5.png"},
    {"name":"Whirlpool Refrigerator","price":"RS 14,490/-","description":"Whirlpool 190 L 4 Star Inverter Direct-Cool Single Door Refrigerator .",imageUrl:"/assets/Refridgerator-component assets/images/6.png"},
    {"name":"Whirlpool Refrigerator","price":"RS 27,690/-","description":"Whirlpool 292 L 3 Star Inverter Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/7.png"},
    {"name":"Samsung Refrigerator","price":"RS 21,490/-","description":"Samsung 253 L 1 Star Frost Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/8.png"},
    {"name":"Haier Refrigerator","price":"RS 29,990/-","description":"Haier 320 L 2 Star Inverter Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/9.png"},
    {"name":"AmazonBasics Refrigerator","price":"RS 12,690/-","description":"AmazonBasics 43L Mini Refrigerato.",imageUrl:"/assets/Refridgerator-component assets/images/10.png"},
    {"name":"Godrej Refrigerator","price":"RS 11,990/-","description":"Godrej 190 L 2 Star Direct-Cool Single Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/11.png"},
    {"name":"Godrej Refrigerator","price":"RS 22,990/-","description":"Godrej 260 L 3 Star Inverter Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/12.png"},
    {"name":"Godrej Refrigerator","price":"RS 12,590/-","description":"Godrej 190 L 3 Star Inverter Direct-Cool Single Door Refrigerato.",imageUrl:"/assets/Refridgerator-component assets/images/13.png"},
    {"name":"Godrej Refrigerator","price":"RS 28,590/-","description":"Godrej 236 L 2 Star Inverter Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/14.png"},
    {"name":"Panasonic Refrigerator","price":"RS 30,670/-","description":"Panasonic 336 L 3 Star 6-Stage Inverter Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/15.png"},
    {"name":"Panasonic Refrigerator","price":"RS 25,570/-","description":"Panasonic 307 L 3 Star 6-Stage Inverter Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/16.png"},
    {"name":"Panasonic Refrigerator","price":"RS 59,690/-","description":"Panasonic 584 L Inverter Frost-Free Side by Side Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/17.png"},
    {"name":"Panasonic Refrigerator","price":"RS 22,990/-","description":"Panasonic 268 L 2 Star 6-Stage Inverter Frost Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/18.png"},
    {"name":"Haier Refrigerator","price":"RS 24,290/-","description":"Haier 320 L 2 Star Inverter Frost-Free Double Door Refrigerator.",imageUrl:"/assets/Refridgerator-component assets/images/19.png"},
    {"name":"Haier Refrigerator","price":"RS 23,999/-","description":"Haier 256 L 3 Star Inverter Frost-Free Double Door Refrigerator .",imageUrl:"/assets/Refridgerator-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
