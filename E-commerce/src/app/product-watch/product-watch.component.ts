import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-watch',
  templateUrl: './product-watch.component.html',
  styleUrls: ['./product-watch.component.css']
})
export class ProductWatchComponent implements OnInit {
  menu=[
    {"name":"Fossil Watch","price":"RS 1699/-","description":"Men's Analogue Black Dial Watch.",imageUrl:"/assets/Watch-component assets/images/1.png"},
    {"name":"Realme Watch","price":"RS 3589/-","description":"Realme Smart Watch.",imageUrl:"/assets/Watch-component assets/images/2.png"},
    {"name":"Mi Watch","price":"RS 1999/-","description":"Mi Smart Band 4.",imageUrl:"/assets/Watch-component assets/images/3.png"},
    {"name":"Fasttrack Watch","price":"RS 1799/-","description":"Fastrack reflex 2.0 Watch.",imageUrl:"/assets/Watch-component assets/images/4.png"},
    {"name":"Fossil Watch","price":"RS 4799/-","description":"Fossil Chronograph Watch.",imageUrl:"/assets/Watch-component assets/images/5.png"},
    {"name":"Fossil Watch","price":"RS 5395/-","description":"Fossil Stella Analog Women's Watch.",imageUrl:"/assets/Watch-component assets/images/6.png"},
    {"name":"Honor Watch","price":"RS 11,995/-","description":"HONOR Magic Watch 2.",imageUrl:"/assets/Watch-component assets/images/7.png"},
    {"name":"Noise Watch","price":"RS 3499/-","description":"Noise Colorfit Pro 2 Full Touch Control Smart Watch.",imageUrl:"/assets/Watch-component assets/images/8.png"},
    {"name":"Amazfit Watch","price":"RS 3999/-","description":"Amazfit Bip U Smart Watch.",imageUrl:"/assets/Watch-component assets/images/9.png"},
    {"name":"Casio Watch","price":"RS 5999/-","description":"Casio Digital Black Dial Men's Watch.",imageUrl:"/assets/Watch-component assets/images/10.png"},
    {"name":"Casio Watch","price":"RS 4999/-","description":"Casio G-Shock Digital Black Dial Men's Watch.",imageUrl:"/assets/Watch-component assets/images/11.png"},
    {"name":"Huawei Watch","price":"RS 1899/-","description":"Huawei Band 4.",imageUrl:"/assets/Watch-component assets/images/12.png"},
    {"name":"Honor Watch","price":"RS 2099/-","description":"HONOR Band 5 Waterproof Full Color AMOLED Touchscreen.",imageUrl:"/assets/Watch-component assets/images/13.png"},
    {"name":"Huawei Watch","price":"RS 14,990/-","description":"HUAWEI Watch GT 2 Sport.",imageUrl:"/assets/Watch-component assets/images/14.png"},
    {"name":"Noise Watch","price":"RS 5499/-","description":"Noise NoiseFit Evolve Sport Full Touch Control Smart Watch.",imageUrl:"/assets/Watch-component assets/images/15.png"},
    {"name":"Hauwei Watch","price":"RS 14,789/-","description":"HUAWEI Watch GT 2e Sport.",imageUrl:"/assets/Watch-component assets/images/16.png"},
    {"name":"Noise Watch","price":"RS 4499/-","description":"Noise ColorFit NAV Smart Watch.",imageUrl:"/assets/Watch-component assets/images/17.png"},
    {"name":"Amazefit Watch","price":"RS 3299/-","description":"Amazfit Bip U  Sport Smart Watch.",imageUrl:"/assets/Watch-component assets/images/18.png"},
    {"name":"Amazefit Watch","price":"RS 2699/-","description":"Amazfit Neo Smart Watch, Retro Design.",imageUrl:"/assets/Watch-component assets/images/19.png"},
    {"name":"Mi Watch","price":"RS 9999/-","description":"MI Watch Revolve Midnight Black.",imageUrl:"/assets/Watch-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
