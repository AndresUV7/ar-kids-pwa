import { Injectable } from '@angular/core';
import { Juego } from '../models/Juego';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private http:HttpClient) { }

  Url="http://localhost:3000/juego";


  insertJuego(juego:Juego){
    return this.http.post<Juego>(this.Url, juego);
   
  }

}
