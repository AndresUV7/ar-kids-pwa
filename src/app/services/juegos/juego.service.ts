import { Injectable } from '@angular/core';
import { Juego } from '../../models/Juego';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JuegoService {

  constructor(private http:HttpClient) { }

  Url="https://192.168.100.2:3000/juego";


  insertJuego(juego:Juego){
    return this.http.post<Juego>(this.Url, juego);
  }

  updateJuego(juego:Juego){
    console.log(juego);
    return this.http.put<Juego>(this.Url+"/"+juego._id, juego);
  }

  selectJuego(id_juego: string) {
    return this.http.get<Juego>(this.Url+"s/"+id_juego);
   
  }

}
