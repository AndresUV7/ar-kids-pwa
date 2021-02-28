import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partida } from '../models/Partida';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  constructor(private http:HttpClient) { }

  Url="https://ar-kids.herokuapp.com/persona/";


  insertPartida(partida: Partida){

    return this.http.post<Partida>(this.Url, partida);
   
  }
}
