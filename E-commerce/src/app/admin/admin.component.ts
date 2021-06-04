import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adminUserData = {}
  constructor(private _auth: AuthService,private _router: Router, private http: HttpClientModule) { }

  ngOnInit(): void {
  }
   
    adminUser() {
      this._auth.adminUser(this.adminUserData)
      .subscribe(
        res => {
          console.log(res)
          localStorage.setItem('token', res.token)
          this._router.navigate(['/adminpanel'])
        },
        err => {console.log(err)
          alert("Invalid Email or Password")}
      )
    }

}


