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
  titulo1: string;
  titulo2: string;
  titulo3: string;
  juego: Juego;
  juego2: Juego;

  constructor(
    private _formBuilder: FormBuilder,
    private router: Router,
    private juegoService: JuegoService
  ) {}

  ngOnInit() {

    if (localStorage.getItem("tip_act") == "CEPILLA2") {
      this.instruccion1 = "Mueve el cepillo alrededor de los dientes.😁"
      this.instruccion2 = "Suma puntos cepillando dientes y muelas. 🦷"
      this.instruccion3 = "Limpia toda la boca antes de que se acabe el tiempo.🕑"   
      this.titulo1 = "Agarra el cepillo de dientes"
      this.titulo2 = "Limpia dientes y muelas"
      this.titulo3 = "Fijate en el tiempo"
    }

    if (localStorage.getItem("tip_act") == "A VESTIR") {
      this.instruccion1 = "Encuentra prendas de vestir en el dormitorio.👕"
      this.instruccion2 = "Arrastra las prendas de vestir hacia el personaje.🕺"
      this.instruccion3 = "Escucha a la voz luego de cada acción.🔊"   
      this.titulo1 = "Busca prendas de vestir"
      this.titulo2 = "Viste al personaje"
      this.titulo3 = "Guíate en la voz de ayuda"
    }

    if (localStorage.getItem("tip_act") == "LUNCH TIME") {
      this.instruccion1 = "Mantén presionado el dedo pulgar para activar el juego. (en celular).👍🏻"
      this.instruccion2 = "Señala los ingredientes que se pide para armar el sandwich.🥪"
      this.instruccion3 = "Si sueltas el pulgar el juego se pausará (en celular).📏"   
      this.titulo1 = "Activa el juego"
      this.titulo2 = "Arma el sandwich"
      this.titulo3 = "Cumple con las reglas"
    }

    if (localStorage.getItem("tip_act") == "LA MESA") {
      this.instruccion1 = "Ubica a los utensilios cuando pasen por su lugar.🍽️"
      this.instruccion2 = "Atrapa los utensilios con un movimiento de pinza (celular).👌"
      this.instruccion3 = "Sirve la mesa sin que se te acaben las vidas.❤️"   
      this.titulo1 = "Sigue a la vajilla"
      this.titulo2 = "Pellizca la vajilla"
      this.titulo3 = "Fijate en las vidas"
    }

    if (localStorage.getItem("tip_act") == "PREGUNTA2") {
      this.instruccion1 = "Enfoca la cámara hacia la lámina impresa.📸"
      this.instruccion2 = "Responde sobre el nombre del objeto, o pregunta al personaje.🔊"
      this.instruccion3 = "Explora los diferentes objetos que estén disponibles.🔍"   
      this.titulo1 = "Enfoca la lámina"
      this.titulo2 = "Pregunta o responde"
      this.titulo3 = "Explora los objetos"
    }

    if (localStorage.getItem("tip_act") == "CLASIFÍCALO") {
      this.instruccion1 = "Enfoca la cámara hacia la figura impresa.📸"
      this.instruccion2 = "Mueve la figura para guíar la dirección de las prendas.↗️"
      this.instruccion3 = "Dirige las prendas a donde correspondan según su estado.🎯"   
      this.titulo1 = "Enfoca la figura"
      this.titulo2 = "Mueve la figura"
      this.titulo3 = "Clasifica las prendas"
    }

    if (localStorage.getItem("tip_act") == "ENCUÉNTRALO") {
      this.instruccion1 = "Revisa la lista de ingredientes solicitados.📋"
      this.instruccion2 = "Busca los ingredientes alrededor de tu ubicación.🍉"
      this.instruccion3 = "Toca cada ingrediente para ir cumpliendo con la lista.👆"   
      this.titulo1 = "Lee la lista"
      this.titulo2 = "Encuentra ingredientes"
      this.titulo3 = "Cumple con la lista"
    }

    if (localStorage.getItem("tip_act") == "SONIGRAMA") {
      this.instruccion1 = "Enfoca con la cámara hacia las figuras hasta que se carguen.📸"
      this.instruccion2 = "Voltea figuras de 2 en 2, si son iguales separalas sino voltéalas.2️⃣"
      this.instruccion3 = "Empareja la palabra y la animación que la representa.🔠"   
      this.titulo1 = "Enfoca las figuras"
      this.titulo2 = "Voltea las figuras"
      this.titulo3 = "Encuentra las parejas"
    }

    if (localStorage.getItem("tip_act") == "AR-BOX") {
      this.instruccion1 = "Enfoca con la cámara hacia la caja.📸"
      this.instruccion2 = "Toca una cara de la caja e interactua con el video.👆"   
      this.instruccion3 = "Explora la caja y los distintos videos disponibles.🎥"
      this.titulo1 = "Enfoca la caja"
      this.titulo2 = "Interactua con los videos"
      this.titulo3 = "Explora la caja"
    }

    if (localStorage.getItem("tip_act") == "PICTOGRAM") {
      this.instruccion1 = "Enfoca con la cámara hacia las figuras impresas.📸"
      this.instruccion2 = "Ordena los pictogramas según los pasos de la actividad.🖼️"
      this.instruccion3 = "Prueba ordenando los pasos de otras actividades.🔄"   
      this.titulo1 = "Enfoca las figuras"
      this.titulo2 = "Arma el proceso"
      this.titulo3 = "Cambia actividad"
    }

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
