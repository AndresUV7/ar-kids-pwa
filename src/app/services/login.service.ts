import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  Url="https://192.168.100.7:3000/login";


  login(credenciales){
    return this.http.post<any>(this.Url, credenciales);
  }

  isLogged(){
    return !!localStorage.getItem('token');
  }
  
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('_id');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserPayload() {
    var token = this.getToken();
    if (token) {
      var userPayload = atob(token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else
      return null;
  }

  isLoggedIn() {
    var userPayload = this.getUserPayload();
    if (userPayload)
      return userPayload.exp > Date.now() / 1000;
    else
      return false;
  }
}
