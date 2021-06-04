import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-phone',
  templateUrl: './product-phone.component.html',
  styleUrls: ['./product-phone.component.css']
})
export class ProductPhoneComponent implements OnInit {
  menu=[
    {"name":"OPPO F17 Pro","price":"RS 21,590/-","description":"OPPO F17 Pro (Matte Black, 8GB RAM, 128GB Storage).",imageUrl:"/assets/Phone-component assets/1.png"},
    {"name":"Redmi Note 9 Pro","price":"RS 13,999/-","description":"Redmi Note 9 Pro (Interstellar Black, 4GB RAM, 64GB Storage).",imageUrl:"/assets/Phone-component assets/2.png"},
    {"name":"OPPO A5 2020","price":"RS 10,990/-","description":"OPPO A5 2020 (Mirror Black, 3GB RAM, 64GB Storage).",imageUrl:"/assets/Phone-component assets/3.png"},
    {"name":"Samsung M31","price":"RS 16,590/-","description":"Samsung Galaxy M31 (Ocean Blue, 6GB RAM, 64GB Storage).",imageUrl:"/assets/Phone-component assets/4.png"},
    {"name":"OnePlus Nord","price":"RS 27,590/-","description":"OnePlus Nord 5G (Gray Onyx, 8GB RAM, 128GB Storage).",imageUrl:"/assets/Phone-component assets/5.png"},
    {"name":"Vivo Y30","price":"RS 14,590/-","description":"Vivo Y30 (Emerald Black, 4GB RAM, 128GB Storage).",imageUrl:"/assets/Phone-component assets/6.png"},
    {"name":"Realme Nazra 20","price":"RS 12,590/-","description":"Realme Narzo 20 (Victory Blue, 4GB RAM, 64GB Storage).",imageUrl:"/assets/Phone-component assets/7.png"},
    {"name":"Nokia 5.3","price":"RS 14,590/-","description":"Nokia 5.3 Android One Smartphone with Quad Camera, 6 GB RAM and 64 GB Storage.",imageUrl:"/assets/Phone-component assets/8.png"},
    {"name":"Apple iPhone 11","price":"RS 59,590/-","description":"New Apple iPhone 11 (128GB).",imageUrl:"/assets/Phone-component assets/9.png"},
    {"name":"Apple iPhone 12 PRO Max","price":"RS 1,39,590/-","description":"New Apple iPhone 12 Pro Max (256GB)",imageUrl:"/assets/Phone-component assets/10.png"},
    {"name":"Honor 9X","price":"RS 16,590/-","description":"Honor 9X (Midnight Black, 128 GB) (4 GB RAM).",imageUrl:"/assets/Phone-component assets/11.png"},
    {"name":"Motorola Razr","price":"RS 76,590/-","description":"Motorola Razr (Gold, 128 GB)  (6 GB RAM).",imageUrl:"/assets/Phone-component assets/12.png"},
    {"name":"OnePlus 8 Pro","price":"RS 59,990/-","description":"OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage).",imageUrl:"/assets/Phone-component assets/13.png"},
    {"name":"ASUS ROG Phone 3","price":"RS 49,990/-","description":"Asus ROG Phone 3 (Black, 128 GB)  (12 GB RAM).",imageUrl:"/assets/Phone-component assets/14.png"},
    {"name":"Honor 9N","price":"RS 19,590/-","description":"Honor 9N (Midnight Black, 128 GB)  (4 GB RAM).",imageUrl:"/assets/Phone-component assets/15.png"},
    {"name":"Vivo Y50","price":"RS 16,590/-","description":"Vivo Y50 (Pearl White, 8GB RAM, 128GB Storage).",imageUrl:"/assets/Phone-component assets/16.png"},
    {"name":"Apple iPhone 12 Mini","price":"RS 71,590/-","description":"New Apple iPhone 12 Mini (128GB).",imageUrl:"/assets/Phone-component assets/17.png"},
    {"name":"Realme 6","price":"RS 14,549/-","description":"Realme 6 (Comet Blue, 4GB RAM, 64GB Storage).",imageUrl:"/assets/Phone-component assets/18.png"},
    {"name":"Vivo V20 Pro","price":"RS 29,990/-","description":"OPPO F17 Pro Vivo V20 Pro (Midnight Jazz, 8GB RAM, 128GB Storage).",imageUrl:"/assets/Phone-component assets/19.png"},
    {"name":"OnePlus 8T","price":"RS 43,590/-","description":"OnePlus 8T 5G (Aquamarine Green, 8GB RAM, 128GB Storage).",imageUrl:"/assets/Phone-component assets/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
