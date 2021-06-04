import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router'

@Injectable()
export class AuthService {
  private _productUrl="http://localhost:3000/product/register"
  private _adminRegUrl = "http://localhost:3000/admin/register";
  private _adminLogUrl = "http://localhost:3000/admin/login";
  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";

  constructor(private http: HttpClient,
              private _router: Router) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user)
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/events'])
  }

  adminUser(admin) {
    return this.http.post<any>(this._adminLogUrl, admin)
  }

  adminRegUser(admin) {
    return this.http.post<any>(this._adminRegUrl, admin)
  }

  registerProduct(product){
    return this.http.post<any>(this._productUrl, product)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
}
