import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Persona } from '../../models/Persona';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  Url="https://192.168.100.14:3000/persona";

  insertPersona(persona:Persona){
    console.log(persona);
    return this.http.post<Persona>(this.Url, persona);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/actualizar/"+persona._id, persona);
  } 
  
  deletePersona(persona:Persona){
    return this.http.put<Persona>(this.Url+"/eliminar/"+persona._id, persona);
  }

  selectPersona(id_persona: string) {
    return this.http.get<Persona>(this.Url+"s/"+id_persona);
  }

  selectPersonas() {
    return this.http.get<Persona[]>(this.Url+"s/");
  }

  
}
