import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-cricketbat',
  templateUrl: './product-cricketbat.component.html',
  styleUrls: ['./product-cricketbat.component.css']
})
export class ProductCricketbatComponent implements OnInit {
  menu=[
    {"name":"GM Cricket Bat","price":"RS 499/-","description":"GM Octane Mini Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/1.png"},
    {"name":"Sportif Cricket Bat","price":"RS 415/-","description":"Sportif Wooden Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/2.png"},
    {"name":"CEAT Cricket Bat","price":"RS 335/-","description":"GM Octane Mi ni Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/3.png"},
    {"name":"MRF Cricket Bat","price":"RS 1299/-","description":"MRF 1CT15110 Champ Kashmir-Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/4.png"},
    {"name":"MRF Cricket Bat","price":"RS 1999/-","description":"MRF Master Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/5.png"},
    {"name":"SG Cricket Bat","price":"RS 899/-","description":"SG RSD Spark Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/6.png"},
    {"name":"SG Cricket Bat","price":"RS 1599/-","description":"SG Nexus Plus Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/7.png"},
    {"name":"SG Cricket Bat","price":"RS 1399/-","description":"SG Max Cover Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/8.png"},
    {"name":"CEAT Cricket Bat","price":"RS 6499/-","description":"Ceat 8100140 Striker English Willow Bat.",imageUrl:"/assets/Cricketbat-component assets/images/9.png"},
    {"name":"DSC Cricket Bat","price":"RS 2499/-","description":"DSC Condor Winger English Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/10.png"},
    {"name":"DSC Cricket Bat","price":"RS 3699/-","description":"DSC Intense Xhale English Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/11.png"},
    {"name":"GM Cricket Bat","price":"RS 2819/-","description":"GM Diamond Bullet English Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/12.png"},
    {"name":"SS Cricket Bat","price":"RS 1299/-","description":"SS master 100 kw bat Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/13.png"},
    {"name":"SS Cricket Bat","price":"RS 1799/-","description":"SS Magnum Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/14.png"},
    {"name":"SS Cricket Bat","price":"RS 1529/-","description":"SS Magnum English Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/15.png"},
    {"name":"CEAT Cricket Bat","price":"RS 19,999/-","description":"Ceat 8100092 Speed Master English Willow Bat.",imageUrl:"/assets/Cricketbat-component assets/images/16.png"},
    {"name":"CEAT Cricket Bat","price":"RS 22,999/-","description":"Ceat Resolute English Willow Short Handle Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/17.png"},
    {"name":"SG Cricket Bat","price":"RS 1499/-","description":"SG Sierra Plus Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/18.png"},
    {"name":"SS Cricket Bat","price":"RS 1400/-","description":"SS kw Master grade 5 kw Kashmir Willow Cricket Bat.",imageUrl:"/assets/Cricketbat-component assets/images/19.png"},
    {"name":"SM Cricket Bat","price":"RS 1199/-","description":"SM Cricket BAT Kashmir Willow Tennis Super Special.",imageUrl:"/assets/Cricketbat-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
