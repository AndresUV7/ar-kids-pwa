import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partida } from '../models/Partida';

@Injectable({
  providedIn: 'root'
})
export class PartidaService {

  constructor(private http:HttpClient) { }

  Url="https://192.168.100.4:3000/persona/";


  insertPartida(partida: Partida){

    return this.http.post<Partida>(this.Url, partida);
   
  }
}
