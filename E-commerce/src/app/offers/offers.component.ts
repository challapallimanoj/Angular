import { Component, OnInit } from '@angular/core';

declare const myfunction:any;

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {


  ngOnInit(): void {
  }

  onClick(){
    myfunction();
  }


}
