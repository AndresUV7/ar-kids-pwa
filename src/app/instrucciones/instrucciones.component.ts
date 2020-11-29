import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { JuegoService } from '../services/juegos/juego.service';
import { Juego } from '../models/Juego';
@Component({
  selector: 'app-instrucciones',
  templateUrl: './instrucciones.component.html',
  styleUrls: ['./instrucciones.component.css']
})
export class InstruccionesComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  juego : Juego;
  juego2 : Juego;

  constructor(private _formBuilder: FormBuilder, private router:Router, private juegoService:JuegoService) {}

  ngOnInit() {

    this.juegoService.selectJuego(localStorage.getItem("id_juego")).subscribe( res =>{
      this.juego = res;
 
    });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    

    
  }

  jugar(){

    
    if (localStorage.getItem("tip_act") == "GAME"){
      
      if (localStorage.getItem("cat_act")== "1"){

        this.router.navigate(['actividades/dientes']);
      }
      if (localStorage.getItem("cat_act")== "2"){

        this.router.navigate(['actividades/vestir']);
      }
      if (localStorage.getItem("cat_act")== "3"){

        this.router.navigate(['actividades/sandwich']);
      }
      if (localStorage.getItem("cat_act")== "4"){

        this.router.navigate(['actividades/mesa']);
      }
    }
    
    if (localStorage.getItem("tip_act") == "PREGUNTADOS"){
      
        this.router.navigate(['actividades/asistente']);
     
    }
    // this.router.navigate(['actividades/vestir']);
    
  }

}
