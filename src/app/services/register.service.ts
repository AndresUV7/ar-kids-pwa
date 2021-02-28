import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  Url="https://ar-kids.herokuapp.com/persona/";
  
  registerUser(credenciales){
    
    const usuario ={
      usuario:{
      _id : "guest",
      contrasena : credenciales.contrasena
      }
    }


    return this.http.put<any>(this.Url + credenciales.cedula, usuario);
   
  }

  registerUser2(credenciales){
    
    const usuario ={
      usuario:{
      _id : "guest",
      contrasena : credenciales.contrasena
      }
    }


    return this.http.put<any>(this.Url + "contrasena/"+credenciales.cedula, usuario);
   
  }

}
