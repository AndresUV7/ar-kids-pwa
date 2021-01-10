import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Historial } from '../models/Historial';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  constructor(private http:HttpClient) { }

  Url="https://192.168.100.14:3000/historial";

  
  selectHistorial(user_id) {
    
    return this.http.post<Historial[]>(this.Url, {'user_id': user_id} );
  }

  
}
