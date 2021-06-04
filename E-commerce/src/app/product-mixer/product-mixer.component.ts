import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-mixer',
  templateUrl: './product-mixer.component.html',
  styleUrls: ['./product-mixer.component.css']
})
export class ProductMixerComponent implements OnInit {
  menu=[
    {"name":"Butterfly Mixer","price":"RS 2599/-","description":"Butterfly Mixer Grinder Opal 750 W.",imageUrl:"/assets/Mixer-component assets/images/1.png"},
    {"name":"Bajaj Mixer","price":"RS 1949/-","description":"Bajaj GX-1 Mixer Grinder, 500W, 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/2.png"},
    {"name":"Prestige Mixer","price":"RS 2919/-","description":"Prestige Iris 750 Watt Mixer Grinder with 3 Stainless Steel Jar.",imageUrl:"/assets/Mixer-component assets/images/3.png"},
    {"name":"Solidaire Mixer","price":"RS 1499/-","description":"Prestige Tez Mixer Grinder, 550W, 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/4.png"},
    {"name":"Philips Mixer","price":"RS 3195/-","description":"Philips HL7756/00 Mixer Grinder, 750W, 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/5.png"},
    {"name":"AmazonBasics Mixer","price":"RS 2139/-","description":"AmazonBasics Premium 750-Watt Mixer Grinder with 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/6.png"},
    {"name":"Crompton Mixer","price":"RS 2359/-","description":"Crompton Ameo 750-Watt Mixer Grinder with 3 Stainless Steel Jars.",imageUrl:"/assets/Mixer-component assets/images/7.png"},
    {"name":"Wonderchef Mixer","price":"RS 19,999/-","description":"Wonderchef 1000-Watt Stand Mixer.",imageUrl:"/assets/Mixer-component assets/images/8.png"},
    {"name":"LifeLong Mixer","price":"RS 2199/-","description":"Lifelong Power VX 750Watt Juicer Mixer Grinder, 3 Stainless Steel Jar.",imageUrl:"/assets/Mixer-component assets/images/9.png"},
    {"name":"LifeLong Mixer","price":"RS 2549/-","description":"Lifelong Power Pro 500-Watt Mixer Grinder with 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/10.png"},
    {"name":"Bosch Mixer","price":"RS 5499/-","description":"Bosch Appliances TrueMixx Pro Mixer Grinder, 750W, 4 Jars .",imageUrl:"/assets/Mixer-component assets/images/11.png"},
    {"name":"Prestige Mixer","price":"RS 2699/-","description":"Prestige Perfect Mixer Grinder, 750W, 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/12.png"},
    {"name":"Bosch Mixer","price":"RS 3299/-","description":"Bosch Appliances TrueMixx Bold 600-Watt Mixer Grinder.",imageUrl:"/assets/Mixer-component assets/images/13.png"},
    {"name":"LifeLong Mixer","price":"RS 1899/-","description":"Lifelong LLMG74 750 Watt Mixer Grinder with 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/14.png"},
    {"name":"Preethi Mixer","price":"RS 7599/-","description":"Preethi Zodiac MG 218 Mixer Grinder.",imageUrl:"/assets/Mixer-component assets/images/15.png"},
    {"name":"Bosch Mixer","price":"RS 6599/-","description":"Bosch TrueMixx Pro 1000-Watt Mixer Grinder.",imageUrl:"/assets/Mixer-component assets/images/16.png"},
    {"name":"LifeLong Mixer","price":"RS 1699/-","description":"Lifelong PowerPro 500 Watt 3 Jar Mixer Grinder and 1100 Watt Dry Iron Super Combo.",imageUrl:"/assets/Mixer-component assets/images/17.png"},
    {"name":"Prestige Mixer","price":"RS 2290/-","description":"Prestige Tez Mixer Grinder, 550W, 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/18.png"},
    {"name":"Bajaj Mixer","price":"RS 1999/-","description":"Bajaj Rex Mixer Grinder, 500W, 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/19.png"},
    {"name":"Butterfly Mixer","price":"RS 1848/-","description":"Butterfly Hero Mixer Grinder, 500W, 3 Jars.",imageUrl:"/assets/Mixer-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
