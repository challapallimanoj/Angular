import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-washing-machine',
  templateUrl: './product-washing-machine.component.html',
  styleUrls: ['./product-washing-machine.component.css']
})
export class ProductWashingMachineComponent implements OnInit {
  menu=[
    {"name":"Godrej Washing Machine","price":"RS 13,999/-","description":"Godrej 6 Kg 5 Star Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/1.png"},
    {"name":"LG Washing Machine","price":"RS 24,299/-","description":"LG 7.0 Kg Inverter Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/2.png"},
    {"name":"Haier Washing Machine","price":"RS 12,999/-","description":"Haier 6.2 Kg Fully-Automatic Top Loading Washing Machine (HWM62-AE, White with Blue lid).",imageUrl:"/assets/WashingMachine-component assets/images/3.png"},
    {"name":"Whirlpool Washing Machine","price":"RS 14,999/-","description":"Whirlpool 6.5 kg 5 Star Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/4.png"},
    {"name":"Intex Washing Machine","price":"RS 10,999/-","description":"Intex 8 kg Semi-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/5.png"},
    {"name":"Haier Washing Machine","price":"RS 11,399/-","description":"Haier 6.2 Kg Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/6.png"},
    {"name":"Bosch Washing Machine","price":"RS 18,647/-","description":"Bosch 6.5 Kg Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/7.png"},
    {"name":"Panasonic Washing Machine","price":"RS 25,199/-","description":"Panasonic Econavi 7 Kg 5 Star Built-In Heater Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/8.png"},
    {"name":"Onida Washing Machine","price":"RS 5,999/-","description":"Onida 9.0 kg Washer Only (W90W, Lava Red).",imageUrl:"/assets/WashingMachine-component assets/images/9.png"},
    {"name":"Panasonic Washing Machine","price":"RS 28,413/-","description":"Panasonic Econavi 8 Kg 5 Star Built-In Heater Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/10.png"},
    {"name":"Bosch Washing Machine","price":"RS 39,499/-","description":"Bosch 8 Kg Fully Automatic Front Load Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/11.png"},
    {"name":"Panasonic Washing Machine","price":"RS 21,990/-","description":"Panasonic 8 Kg 5 Star Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/12.png"},
    {"name":"Haier Washing Machine","price":"RS 17,799/-","description":"Haier 9.5 Kg Semi-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/13.png"},
    {"name":"Bosch Washing Machine","price":"RS 33,438/-","description":"Bosch 7 kg Fully-Automatic Front Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/14.png"},
    {"name":"Haier Washing Machine","price":"RS 16,569/-","description":"Haier 9.2 Kg Semi-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/15.png"},
    {"name":"Bosch Washing Machine","price":"RS 27,499/-","description":"Bosch 7 kg Fully-Automatic Front Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/16.png"},
    {"name":"Haier Washing Machine","price":"RS 14,999/-","description":"Haier 8 kg Semi-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/17.png"},
    {"name":"LG Washing Machine","price":"RS 17,999/-","description":"LG 7.0 Kg 5 Star Smart Inverter Fully-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/18.png"},
    {"name":"Onida Washing Machine","price":"RS 5048/-","description":"Onida 6.5 kg Washer Only (WS65WLPT1LR Liliput, Lava Red).",imageUrl:"/assets/WashingMachine-component assets/images/19.png"},
    {"name":"Samsung Washing Machine","price":"RS 8,999/-","description":"Samsung 6.0 Kg 5 Star Semi-Automatic Top Loading Washing Machine.",imageUrl:"/assets/WashingMachine-component assets/images/20.png"},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
