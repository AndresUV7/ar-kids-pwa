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
  instruccion1: string;
  instruccion2: string;
  instruccion3: string;
  juego: Juego;
  juego2: Juego;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private juegoService: JuegoService
  ) {}

  ngOnInit() {
    this.instruccion1 = "A"
    this.instruccion2 = "B"
    this.instruccion3 = "C"
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

    if (localStorage.getItem("tip_act") == "CLASIFÍCALO") {
      this.router.navigate(["actividades/clasificalo"]);
    }

    if (localStorage.getItem("tip_act") == "ENCUÉNTRALO") {
      this.router.navigate(["actividades/encuentralo"]).then(() => {
        window.location.reload();
      });
    }

    if (localStorage.getItem("tip_act") == "SONIGRAMA") {
      this.router.navigate(["actividades/sonigram"]);
    }

    if (localStorage.getItem("tip_act") == "AR-BOX") {
      this.router.navigate(["actividades/ar-box"]);
    }

    if (localStorage.getItem("tip_act") == "PICTOGRAM") {
      this.router.navigate(["actividades/pictogram"]);
    }
    // this.router.navigate(['actividades/vestir']);
  }
}
