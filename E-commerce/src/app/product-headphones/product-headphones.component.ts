import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-headphones',
  templateUrl: './product-headphones.component.html',
  styleUrls: ['./product-headphones.component.css']
})
export class ProductHeadphonesComponent implements OnInit {
  menu=[
    {"name":"JBL Tune Headphones","price":"RS 599/-","description":"JBL Tune 700BT Over-Ear Wireless Headphones.",imageUrl:"/assets/Headphones-component assets/images/1.png"},
    {"name":"Zinq Headphones","price":"RS 899/-","description":"Zinq Technologies Erupt 4155 Super Bass Bluetooth On-Ear Headphones.",imageUrl:"/assets/Headphones-component assets/images/2.png"},
    {"name":"Noise Headphones","price":"RS 999/-","description":"Noise Tune Sport 2 in-Ear Wireless Bluetooth Earphones.",imageUrl:"/assets/Headphones-component assets/images/3.png"},
    {"name":"boAt Headphones","price":"RS 1799/-","description":"boAt Rockerz 450 Bluetooth On-Ear Headphone.",imageUrl:"/assets/Headphones-component assets/images/4.png"},
    {"name":"Infinity Headphones","price":"RS 1599/-","description":"nfinity Glide 500 Wireless Headphones.",imageUrl:"/assets/Headphones-component assets/images/5.png"},
    {"name":"JBL Headphones","price":"RS 699/-","description":"JBL C100SI In-Ear Deep Bass Headphones.",imageUrl:"/assets/Headphones-component assets/images/6.png"},
    {"name":"JBL Tune Headphones","price":"RS 599/-","description":"JBL Tune 700BT Over-Ear Wireless Headphones.",imageUrl:"/assets/Headphones-component assets/images/7.png"},
    {"name":"Sony Headphones","price":"RS 1499/-","description":"Sony MDR-XB450AP Wired Extra Bass On-Ear Headphone.",imageUrl:"/assets/Headphones-component assets/images/8.png"},
    {"name":"Sony Headphones","price":"RS 1899/-","description":"Sony WI-C200 Wireless In-Ear Headphones.",imageUrl:"/assets/Headphones-component assets/images/9.png"},
    {"name":"Sony Headphones","price":"RS 3899/-","description":"Sony WH-CH510 Wireless Headphones.",imageUrl:"/assets/Headphones-component assets/images/10.png"},
    {"name":"Sony Headphones","price":"RS 3999/-","description":"Sony Wireless Headphones WH-CH510: Wireless Bluetooth.",imageUrl:"/assets/Headphones-component assets/images/11.png"},
    {"name":"Zebronics Headphones","price":"RS 799/-","description":"Zebronics Zeb-Bang Foldable Wireless BT Headphone .",imageUrl:"/assets/Headphones-component assets/images/12.png"},
    {"name":"Zebronics Headphones","price":"RS 1199/-","description":"Zebronics Zeb-Dynamic with Bluetooth Supporting Headphone.",imageUrl:"/assets/Headphones-component assets/images/13.png"},
    {"name":"Boult Headphones","price":"RS 1099/-","description":"Boult Audio ProBass Groove Neckband in-Ear Wireless Earphones.",imageUrl:"/assets/Headphones-component assets/images/14.png"},
    {"name":"Boult Headphones","price":"RS 1799/-","description":"Boult Audio Probass Boost Over-Ear Wireless Bluetooth Headphones.",imageUrl:"/assets/Headphones-component assets/images/15.png"},
    {"name":"Boult Headphones","price":"RS 1399/-","description":"Boult Audio ProBass FluidX Over-Ear Unbreakable Wireless Bluetooth Headphones .",imageUrl:"/assets/Headphones-component assets/images/16.png"},
    {"name":"Boult Tune Headphones","price":"RS 2599/-","description":"Boult audio AirBass Zigbuds True-Wireless Earbuds.",imageUrl:"/assets/Headphones-component assets/images/17.png"},
    {"name":"pTron Headphones","price":"RS 1299/-","description":"pTron Studio Classic Over Ear Wireless Headphones.",imageUrl:"/assets/Headphones-component assets/images/18.png"},
    {"name":"pTRon Headphones","price":"RS 999/-","description":"pTron Tangentbeat Bluetooth 5.0 Wireless Headphones.",imageUrl:"/assets/Headphones-component assets/images/19.png"},
    {"name":"Sony Headphones","price":"RS 16,999/-","description":"Sony WH-XB900N Wireless Bluetooth.",imageUrl:"/assets/Headphones-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
