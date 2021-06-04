import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-laptop',
  templateUrl: './product-laptop.component.html',
  styleUrls: ['./product-laptop.component.css']
})
export class ProductLaptopComponent implements OnInit {
  menu=[
    {"name":"HP Laptop","price":"RS 56,999/-","description":"HP 14s core i5 10th Gen 14 inch FHD Laptop.",imageUrl:"/assets/Laptop-component assets/images/1.png"},
    {"name":"ASUS Laptop","price":"RS 64,999/-","description":"ASUS VivoBook 15 Intel Core i5-1035G1 10th Gen 15.6-inch FHD Thin and Light Laptop.",imageUrl:"/assets/Laptop-component assets/images/2.png"},
    {"name":"LG Laptop","price":"RS 98,999/-","description":"LG Gram 10th Gen Intel Core i7-1065G7 17-inch IPS WQXGA Thin and Light Laptop.",imageUrl:"/assets/Laptop-component assets/images/3.png"},
    {"name":"MI Laptop","price":"RS 54,999/-","description":"Mi Notebook Horizon Edition 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop.",imageUrl:"/assets/Laptop-component assets/images/4.png"},
    {"name":"Lenovo Laptop","price":"RS 63,999/-","description":"Lenovo ThinkPad E15 Intel Core i5 10th Gen 15.6-inch Full HD IPS Thin and Light Laptop.",imageUrl:"/assets/Laptop-component assets/images/5.png"},
    {"name":"Dell Laptop","price":"RS 51,999/-","description":"Dell Inspiron 5406 2in1 Touch 14 FHD Laptop/ TGL-U i3 / 4 GB / 256 SSD / Integrated Graphics .",imageUrl:"/assets/Laptop-component assets/images/6.png"},
    {"name":"ASUS Laptop","price":"RS 89,999/-","description":"ASUS ZenBook Duo UX481FL-BM5811T Intel Core i5 10th Gen 14-inch FHD Thin and Light Laptop.",imageUrl:"/assets/Laptop-component assets/images/7.png"},
    {"name":"MSI Laptop","price":"RS 99,999/-","description":"MSI GF65 Thin 9SEXR-438IN Intel Core i5-9300H 9th Gen Processor 15.6-inch Laptop(8GB/512GB NVMe SSD/Windows 10).",imageUrl:"/assets/Laptop-component assets/images/8.png"},
    {"name":"Lenovo Laptop","price":"RS 1,18,999/-","description":"Lenovo Legion Y540 81SX0042IN 15.6-inch Gaming Laptop(9th Gen Core i5-9300H/8GB/1TB HDD + 256GB SSD/Windows 10 Home).",imageUrl:"/assets/Laptop-component assets/images/9.png"},
    {"name":"Dell Laptop","price":"RS 73,999/-","description":"Dell G3 3500 Gaming 15.6-inch Laptop (10th Gen Core i5-10300H/8GB/1TB + 256GB SSD/Win 10).",imageUrl:"/assets/Laptop-component assets/images/10.png"},
    {"name":"Lenovo Laptop","price":"RS 29,999/-","description":"Lenovo IdeaPad Slim 3 AMD 3020e 15.6 inch HD Thin and Light Laptop.",imageUrl:"/assets/Laptop-component assets/images/11.png"},
    {"name":"Dell Laptop","price":"RS 62,999/-","description":"Dell Inspiron 7380 13.3-inch FHD Thin & Light Laptop(Core i5 8th Gen/8GB/512GB SSD/Windows 10 + MS Office).",imageUrl:"/assets/Laptop-component assets/images/12.png"},
    {"name":"Lenovo Laptop","price":"RS 67,999/-","description":"Lenovo IdeaPad Gaming 3 AMD Ryzen 5 4600H 15.6-inch Full HD IPS Gaming Laptop (8GB/512GB SSD/Windows 10.",imageUrl:"/assets/Laptop-component assets/images/13.png"},
    {"name":"Dell Laptop","price":"RS 1,05,999/-","description":"Dell Inspiron 7400 14-inch FHD Touch Laptop (11th Gen i5-1135G7/8GB/512GB SSD/2GB Graphics/Win 10 + MS Office/Silver).",imageUrl:"/assets/Laptop-component assets/images/14.png"},
    {"name":"Acer Laptop","price":"RS 54,999/-","description":"Acer Aspire 5 14 Full HD IPS Display Thin and Light Notebook (Intel i5-11th Gen/8GB Ram/512GB SSD/Win10).",imageUrl:"/assets/Laptop-component assets/images/15.png"},
    {"name":"Acer Laptop","price":"RS 72,999/-","description":"Acer Predator Triton 300 PT315-51 2019 15.6-inch Gaming Laptop (9th Gen Core i7 9750H/16GB/1TB HDD + 256GB SSD/Windows 10).",imageUrl:"/assets/Laptop-component assets/images/16.png"},
    {"name":"Acer Laptop","price":"RS 57,999/-","description":"Acer Nitro 5 Intel Core i5-9th Gen 15.6-inch Display 1920 x 1080 Thin and Light Gaming Laptop (8GB Ram+16GB Optane/1TB HDD/Windows 10).",imageUrl:"/assets/Laptop-component assets/images/17.png"},
    {"name":"Dell Laptop","price":"RS 28,999/-","description":"Dell Inspiron 3595 15.6-inch HD Laptop (A9-9425/4GB/1TB HDD/Win 10).",imageUrl:"/assets/Laptop-component assets/images/18.png"},
    {"name":"Lenovo Laptop","price":"RS 34,999/-","description":"HP 14s core i5 10th Gen 14 inch FHD Laptop.",imageUrl:"/assets/Laptop-component assets/images/19.png"},
    {"name":"MI Laptop","price":"RS 43,999/-","description":"Mi Notebook 14 Intel Core i5-10210U 10th Gen Thin and Light Laptop.",imageUrl:"/assets/Laptop-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
