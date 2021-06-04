import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

   registerProductData={}
  constructor(private _auth: AuthService,private _router:Router) { }

  ngOnInit(): void {
  }

  registerProduct() 
  {
    this._auth.registerProduct(this.registerProductData)
      .subscribe(
        res => {
          console.log(res)
          this._router.navigate(['/admin'])
        },
        err => console.log(err)
      )

  }


}
