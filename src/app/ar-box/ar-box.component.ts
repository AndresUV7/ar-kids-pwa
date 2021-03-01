import {
  Component,
  OnInit,
  DoCheck,
  HostListener,
  AfterViewChecked,
} from "@angular/core";
import { Router } from "@angular/router";
import { Video } from "../models/Video";
import { HIGIENE_VIDEOS, VESTIR_VIDEOS, COCINA_VIDEOS, HOGAR_VIDEOS } from "../../utils/videos";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
declare function getTime(p): any;
declare function getActive(): any;
declare function mediaPlayer(p, q): any;
import Phaser from "phaser";
import { OnDestroy } from '@angular/core';
import { JuegoService } from '../services/juegos/juego.service';
import { Juego } from '../models/Juego';

class NewScene extends Phaser.Scene {
  text: any;
  question: string;
  palabra1: any;
  palabra2: any;
  palabra3: any;
  palabra4: any;
  palabra5: any;
  palabra6: any;
  correcta1: any;
  correcta2: any;
  correcta3: any;
  correcta4: any;
  correcta5: any;
  correcta6: any;
  incorrecta1: any;
  incorrecta2: any;
  incorrecta3: any;
  incorrecta4: any;
  incorrecta5: any;
  incorrecta6: any;
  timeOK: any;
  rand: any;
  positions: any[];
  redirect: number;
  static trigger: boolean;
  constructor() {
    super("NewScene");
    this.timeOK = false;
    NewScene.trigger = false;
    this.redirect = -1;
  }

  preload() {
    this.load.path = "/ar-kids-pwa/assets/img/";

    if(this.redirect==0){
      this.load.image("palabra1", "tapados.PNG");
      this.load.image("palabra2", "cortauñas.PNG");
      this.load.image("palabra3", "facil.PNG");
      this.load.image("palabra4", "toalla.PNG");
      this.load.image("palabra5", "lengua.PNG");
      this.load.image("palabra6", "agua.PNG");
  
      this.load.image("correcto1", "si.PNG");
      this.load.image("incorrecto1", "no.PNG");
  
      this.load.image("correcto2", "todos-los-dias.jpg");
      this.load.image("incorrecto2", "2-veces-semana.jpg");
  
      this.load.image("correcto3", "manos.png");
      this.load.image("incorrecto3", "pies.png");
  
      this.load.image("incorrecto4", "solo-agua.jpg");
      this.load.image("correcto4", "agua-y-jabon.png");
  
      this.load.image("correcto5", "dos.png");
      this.load.image("incorrecto5", "uno.png");
  
      this.load.image("correcto6", "diez.png");
      this.load.image("incorrecto6", "cinco.jpg");
  
    }else if (this.redirect==1){
      this.load.image("palabra1", "vestido.PNG");
      this.load.image("palabra2", "cintura.PNG");
      this.load.image("palabra3", "botones.PNG");
      this.load.image("palabra4", "hora.PNG");
      this.load.image("palabra5", "ordenado.PNG");
      this.load.image("palabra6", "cordones.PNG");
  
      this.load.image("correcto1", "cintura-picto.png");
      this.load.image("incorrecto1", "cuello.png");
  
      this.load.image("correcto2", "pinzas-plastico.png");
      this.load.image("incorrecto2", "pinzas-madera.png");

      this.load.image("correcto3", "puño-camisa.png");
      this.load.image("incorrecto3", "cuello-camisa.png");
  
      this.load.image("correcto4", "por-color.png");
      this.load.image("incorrecto4", "por-tamaño.jpg");
  
      this.load.image("incorrecto5", "numero-3.png");
      this.load.image("correcto5", "numero-4.png");
  
      this.load.image("correcto6", "pulgar-indice.jpg");
      this.load.image("incorrecto6", "pulgar-menique.jpg");
  
      
    }else if (this.redirect==2){
      this.load.image("palabra1", "desayuno.PNG");
      this.load.image("palabra2", "naranjas.PNG");
      this.load.image("palabra3", "espatula.PNG");
      this.load.image("palabra4", "primavera.PNG");
      this.load.image("palabra5", "sopa.PNG");
      this.load.image("palabra6", "doradas.PNG");
  
      this.load.image("correcto1", "uno.png");
      this.load.image("incorrecto1", "dos.png");
  
      this.load.image("correcto2", "cascara.png");
      this.load.image("incorrecto2", "solo cascara.png");

      this.load.image("correcto3", "diez.png");
      this.load.image("incorrecto3", "cinco.jpg");
  
      this.load.image("correcto4", "lechuga y tomate.png");
      this.load.image("incorrecto4", "lechuga.jpg");
  
      this.load.image("correcto5", "diez.png");
      this.load.image("incorrecto5", "dos.png");
  
      this.load.image("correcto6", "media-libra.jpg");
      this.load.image("incorrecto6", "libra.jpg");
    }else if (this.redirect==3){
      this.load.image("palabra1", "ambiente.PNG");
      this.load.image("palabra2", "edredon.PNG");
      this.load.image("palabra3", "papel.PNG");
      this.load.image("palabra4", "tenedor.PNG");
      this.load.image("palabra5", "agarrador.PNG");
      this.load.image("palabra6", "todos.PNG");
  
      this.load.image("correcto1", "enjuagado.jpg");
      this.load.image("incorrecto1", "enjabonado.jpg");
  
      this.load.image("correcto2", "almohadas.jpg");
      this.load.image("incorrecto2", "cobijas.jpg");

      this.load.image("correcto3", "arriba-abajo.jpg");
      this.load.image("incorrecto3", "izq-der.jpg");
  
      this.load.image("correcto4", "plato.jpg");
      this.load.image("incorrecto4", "vaso.jpg");
  
      this.load.image("incorrecto5", "solo-agua.jpg");
      this.load.image("correcto5", "esponja.png");
  
      this.load.image("correcto6", "no.PNG");
      this.load.image("incorrecto6", "si.PNG");
    }
    
    this.positions = [true, false];
  }

  create() {
    this.rand = Math.floor(Math.random() * (1 - 0) + 0);
    this.palabra1 = this.add
      .image(320, 250, "palabra1")
      .setDisplaySize(400, 100);
    this.palabra2 = this.add
      .image(320, 250, "palabra2")
      .setDisplaySize(400, 100);
    this.palabra3 = this.add
      .image(320, 250, "palabra3")
      .setDisplaySize(400, 100);
    this.palabra4 = this.add
      .image(320, 250, "palabra4")
      .setDisplaySize(400, 100);
    this.palabra5 = this.add
      .image(320, 250, "palabra5")
      .setDisplaySize(400, 100);
    this.palabra6 = this.add
      .image(320, 250, "palabra6")
      .setDisplaySize(400, 100);

    if (this.positions[this.rand]) {
      this.correcta1 = this.add
        .image(150, 250, "correcto1")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta1 = this.add
        .image(450, 250, "incorrecto1")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta2 = this.add
        .image(450, 250, "correcto2")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta2 = this.add
        .image(150, 250, "incorrecto2")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta3 = this.add
        .image(450, 250, "correcto3")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta3 = this.add
        .image(150, 250, "incorrecto3")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta4 = this.add
        .image(150, 250, "correcto4")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta4 = this.add
        .image(450, 250, "incorrecto4")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta5 = this.add
        .image(150, 250, "correcto5")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta5 = this.add
        .image(450, 250, "incorrecto5")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta6 = this.add
        .image(450, 250, "correcto6")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta6 = this.add
        .image(150, 250, "incorrecto6")
        .setDisplaySize(150, 150)
        .setInteractive();
    } else {
      this.correcta1 = this.add
        .image(450, 250, "correcto1")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta1 = this.add
        .image(150, 250, "incorrecto1")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta2 = this.add
        .image(150, 250, "correcto2")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta2 = this.add
        .image(450, 250, "incorrecto2")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta3 = this.add
        .image(150, 250, "correcto3")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta3 = this.add
        .image(450, 250, "incorrecto3")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta4 = this.add
        .image(450, 250, "correcto4")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta4 = this.add
        .image(150, 250, "incorrecto4")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta5 = this.add
        .image(150, 250, "correcto5")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta5 = this.add
        .image(450, 250, "incorrecto5")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.correcta6 = this.add
        .image(450, 250, "correcto6")
        .setDisplaySize(150, 150)
        .setInteractive();
      this.incorrecta6 = this.add
        .image(150, 250, "incorrecto6")
        .setDisplaySize(150, 150)
        .setInteractive();
    }

    this.correcta1.name = "r1";
    this.correcta2.name = "r2";
    this.correcta3.name = "r3";
    this.correcta4.name = "r4";
    this.correcta5.name = "r5";
    this.correcta6.name = "r6";

    console.log(this.correcta1.name);
    this.palabra1.setVisible(false);
    this.palabra2.setVisible(false);
    this.palabra3.setVisible(false);
    this.palabra4.setVisible(false);
    this.palabra5.setVisible(false);
    this.palabra6.setVisible(false);
    this.correcta1.setVisible(false);
    this.incorrecta1.setVisible(false);
    this.correcta2.setVisible(false);
    this.incorrecta2.setVisible(false);
    this.correcta3.setVisible(false);
    this.incorrecta3.setVisible(false);
    this.correcta4.setVisible(false);
    this.incorrecta4.setVisible(false);
    this.correcta5.setVisible(false);
    this.incorrecta5.setVisible(false);
    this.correcta6.setVisible(false);
    this.incorrecta6.setVisible(false);

    this.text = this.add.text(0, 30, "", {
      color: "#3f51b5",
      fontSize: 35,
      fontFamily: 'Roboto',
      fontStyle: "bold",
      wordWrap: { width: 640, useAdvancedWrap: true },
    });

    const eventos = Phaser.Input.Events;

    //  this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
    //         gameObject.setTint(0x00ff00);
    //     });
    this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
      if (gameObject.name == "r1" || gameObject.name == "r2" || gameObject.name == "r3" || gameObject.name == "r4" || gameObject.name == "r5" || gameObject.name == "r6") {
        gameObject.setTint(0x00ff00);

        setTimeout(() => {
          NewScene.trigger = true;
        }, 3000);
      } else {
        gameObject.setTint(0xf70000);
      }
    });
  }

  update() {}

  actualizaPregunta(pregunta: string) {
    this.text.setText(pregunta);
  }
}
@Component({
  selector: "app-ar-box",
  templateUrl: "./ar-box.component.html",
  styleUrls: ["./ar-box.component.css"],
})
export class ArBoxComponent implements OnInit, AfterViewChecked, OnDestroy {
  name = "Set iframe source";
  url: string = "http://127.0.0.1:8081/prueba.html";
  urlSafe: SafeResourceUrl;

  timeMins: number[];
  timeMinsAux: number[];
  playList: Video[];
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  videoActive: number;
  static respondio: boolean[];
  completo: boolean[];
  hw: boolean;
  palabra: string;
  objExp: any;
  juego: Juego;

  constructor(private router: Router, public sanitizer: DomSanitizer, public juegoService: JuegoService) {
    this.scene = new NewScene();
    this.objExp = { position: "fixed" };

    this.config = {
      type: Phaser.AUTO,
      transparent: true,
      scene: [this.scene],
      physics: {
        default: "arcade",
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "gameContainer",
        width: 640,
        height: 360,
      },
    };
  }

  ngOnInit() {
    this.hw = false;
    
    if (localStorage.getItem("cat_act") == "1") {
      this.playList = HIGIENE_VIDEOS
    }else if (localStorage.getItem("cat_act") == "2") {
      this.playList = VESTIR_VIDEOS
    }if (localStorage.getItem("cat_act") == "3") {
      this.playList = COCINA_VIDEOS
    }if (localStorage.getItem("cat_act") == "4") {
      this.playList = HOGAR_VIDEOS
    }
    



    this.scene.redirect = 3;
    this.timeMins = [0, 0];
    this.timeMinsAux = [0, 0];
    ArBoxComponent.respondio = [false, false, false, false, false, false];
    this.completo = [false, false, false, false, false, false];

    this.phaserGame = new Phaser.Game(this.config);

    this.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    this.juegoService
      .selectJuego(localStorage.getItem("id_juego"))
      .subscribe((res) => {
        this.juego = res;

        this.juego.partidas.push({
          fecha_inicio: new Date()
        });

        this.juegoService.updateJuego(this.juego).subscribe((res) => {
          this.juego = res;

          localStorage.setItem(
            "id_partida",
            this.juego.partidas.slice(-1)[0]._id
          );
        });
      });
  }

  ngOnDestroy(){
    this.phaserGame.destroy(true);

  }

  @HostListener("window:message", ["$event"])
  onMessage(e) {
    // if (e.origin != "https://192.168.100.4:8081") { // set your origin
    //   return false;
    // }
    if (e.data.for == "user") {
      console.log(e.data.data);
      this.palabra = e.data.data;
      if (
        e.data.data.toLowerCase() ==
        this.playList[getActive()].respuestas2[0].toLowerCase()
      ) {
        this.completar();
      }
    }
  }

  ngAfterViewChecked() {
    if (getActive() == -1) {
      this.limpiar();
      this.scene.actualizaPregunta("");
    }

    if (NewScene.trigger) {
      this.responder();

      NewScene.trigger = false;
      
    }

    if (getActive() > -1) {
      this.timeMins = this.playList[getActive()].checkpoints;
      if (JSON.stringify(this.timeMinsAux) !== JSON.stringify(this.timeMins)) {
        this.timeMinsAux = this.timeMins;
        console.log(this.timeMins);
      }

      console.log(Math.floor(getTime(getActive())));
      if (
        Math.floor(getTime(getActive())) == this.timeMins[0] &&
        !ArBoxComponent.respondio[getActive()] 
      ) {
        this.limpiar();
        this.objExp = { position: "fixed", "z-index": 1 };
        this.scene.actualizaPregunta(this.playList[getActive()].preguntas[0]);
        mediaPlayer(0, getActive());
        switch (getActive()) {
          case 0:
            this.scene.correcta1.setVisible(true);
            this.scene.incorrecta1.setVisible(true);
            break;
          case 1:
            this.scene.correcta2.setVisible(true);
            this.scene.incorrecta2.setVisible(true);
            break;
          case 2:
            this.scene.correcta3.setVisible(true);
            this.scene.incorrecta3.setVisible(true);
            break;
          case 3:
            this.scene.correcta4.setVisible(true);
            this.scene.incorrecta4.setVisible(true);
            break;
          case 4:
            this.scene.correcta5.setVisible(true);
            this.scene.incorrecta5.setVisible(true);
            break;
          case 5:
            this.scene.correcta6.setVisible(true);
            this.scene.incorrecta6.setVisible(true);
            break;

          default:
            break;
        }
      } else if (
        Math.floor(getTime(getActive())) == this.timeMins[1] &&
        !this.completo[getActive()]
      ) {
        this.limpiar();
        this.objExp = { position: "fixed", "z-index": 1 };
        mediaPlayer(0, getActive());

        switch (getActive()) {
          case 0:
            this.scene.palabra1.setVisible(true);
            break;
          case 1:
            this.scene.palabra2.setVisible(true);
            break;
          case 2:
            this.scene.palabra3.setVisible(true);
            break;
          case 3:
            this.scene.palabra4.setVisible(true);
            break;
          case 4:
            this.scene.palabra5.setVisible(true);
            break;
          case 5:
            this.scene.palabra6.setVisible(true);
            break;

          default:
            break;
        }

        this.hw = true;
        this.scene.actualizaPregunta(this.playList[getActive()].preguntas[1]);
      }
    }
  }

  salir() {
    this.router.navigate(["/"]);
  }

  responder() {
    ArBoxComponent.respondio[getActive()] = true;
    this.objExp = { position: "fixed" };
    mediaPlayer(1, getActive());
    this.scene.text.setText("");
    console.log(ArBoxComponent.respondio)
    switch (getActive()) {
      case 0:
        this.scene.correcta1.setVisible(false);
        this.scene.incorrecta1.setVisible(false);

        break;
      case 1:
        this.scene.correcta2.setVisible(false);
        this.scene.incorrecta2.setVisible(false);

        break;
      case 2:
        this.scene.correcta3.setVisible(false);
        this.scene.incorrecta3.setVisible(false);

        break;
      case 3:
        this.scene.correcta4.setVisible(false);
        this.scene.incorrecta4.setVisible(false);

        break;
      case 4:
        this.scene.correcta5.setVisible(false);
        this.scene.incorrecta5.setVisible(false);

        break;
      case 5:
        this.scene.correcta6.setVisible(false);
        this.scene.incorrecta6.setVisible(false);

        break;

      default:
        break;
    }
  }

  completar() {
    this.objExp = { position: "fixed" };
    mediaPlayer(1, getActive());
    this.completo[getActive()] = true;
    this.scene.text.setText("");
    switch (getActive()) {
      case 0:
        this.scene.palabra1.setVisible(false);
        break;
      case 1:
        this.scene.palabra2.setVisible(false);
        break;
      case 2:
        this.scene.palabra3.setVisible(false);
        break;
      case 3:
        this.scene.palabra4.setVisible(false);
        break;
      case 4:
        this.scene.palabra5.setVisible(false);
        break;
      case 5:
        this.scene.palabra6.setVisible(false);
        break;

      default:
        break;
    }
    this.hw = false;
  }

  limpiar() {
    this.scene.palabra1.setVisible(false);
    this.scene.palabra2.setVisible(false);
    this.scene.palabra3.setVisible(false);
    this.scene.palabra4.setVisible(false);
    this.scene.palabra5.setVisible(false);

    this.scene.correcta1.setVisible(false);
    this.scene.incorrecta1.setVisible(false);
    this.scene.correcta2.setVisible(false);
    this.scene.incorrecta2.setVisible(false);
    this.scene.correcta3.setVisible(false);
    this.scene.incorrecta3.setVisible(false);
    this.scene.correcta4.setVisible(false);
    this.scene.incorrecta4.setVisible(false);
    this.scene.correcta5.setVisible(false);
    this.scene.incorrecta5.setVisible(false);
    this.scene.correcta6.setVisible(false);
    this.scene.incorrecta6.setVisible(false);
    this.hw = false;
    this.objExp = { position: "fixed" };
  }
}
