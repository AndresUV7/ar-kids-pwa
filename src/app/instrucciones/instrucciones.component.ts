import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { JuegoService } from "../services/juegos/juego.service";
import { Juego } from "../models/Juego";
@Component({
  selector: "app-instrucciones",
  templateUrl: "./instrucciones.component.html",
  styleUrls: ["./instrucciones.component.css"],
})
export class InstruccionesComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  juego: Juego;
  juego2: Juego;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private juegoService: JuegoService
  ) {}

  ngOnInit() {
    this.juegoService
      .selectJuego(localStorage.getItem("id_juego"))
      .subscribe((res) => {
        this.juego = res;
      });

    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ["", Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ["", Validators.required],
    });
  }

  jugar() {
    if (localStorage.getItem("tip_act") == "CEPILLA2") {
      this.router.navigate(["actividades/dientes"]);
    }

    if (localStorage.getItem("tip_act") == "A VESTIR") {
      if (localStorage.getItem("gender") == "F") {
        this.router.navigate(["actividades/vestir-f"]);
      } else {
        this.router.navigate(["actividades/vestir-m"]);
      }
    }

    if (localStorage.getItem("tip_act") == "LUNCH TIME") {
      this.router.navigate(["actividades/sandwich"]);
    }

    if (localStorage.getItem("tip_act") == "LA MESA") {
      this.router.navigate(["actividades/mesa"]);
    }

    if (localStorage.getItem("tip_act") == "PREGUNTA2") {
      this.router.navigate(["actividades/asistente"]);
    }
    // this.router.navigate(['actividades/vestir']);
  }
}
