import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partida } from '../models/Partida';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:3000/partida";


  insertPartida(partida: Partida){

    return this.http.post<Partida>(this.Url, partida);
   
  }
}
