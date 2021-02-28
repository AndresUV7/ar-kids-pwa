import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../models/Historial';
import { Juego } from '../models/Juego';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http:HttpClient) { }

  Url="https://ar-kids.herokuapp.com/juegos2";

  
  selectHistorial(user_id) {
    
    return this.http.post<Juego[]>(this.Url, {'usuario': user_id} );
  }

  
}
