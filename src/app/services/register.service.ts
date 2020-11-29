import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  Url="https://192.168.100.4:3000/persona/";
  
  registerUser(credenciales){
    
    const usuario ={
      usuario:{
      _id : "guest",
      contrasena : credenciales.contrasena
      }
    }


    return this.http.put<any>(this.Url + credenciales.cedula, usuario);
   
  }

}
