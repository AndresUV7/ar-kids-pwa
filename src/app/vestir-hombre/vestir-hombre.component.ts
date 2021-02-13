import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import Phaser from "phaser";
import { Router } from "@angular/router";
import { DetallePartida } from '../models/DetallePartida';
import { JuegoService } from '../services/juegos/juego.service';
import { Juego } from '../models/Juego';

class NewScene extends Phaser.Scene {
  // joven: any;
  camiseta: any;
  pantalon: any;
  calcetines: any;
  bividi: any;
  gorra: any;
  zapatos: any;
  cabeza: any;
  tronco: any;
  piernas: any;
  pies: any;
  correcto: boolean[];
  aux: any[];
  tracker: any;


  constructor() {
    super("NewScene");
  }

  preload() {
    this.tracker = { error: false, objetivo: "", accion: ""};
    this.correcto = [false, false, false, false, false, false];

    this.load.path = "/assets/img/";

    this.load.audio("bividi_c", ["bividi_c.mp3"]);
    this.load.audio("bividi_e_l", ["bividi_e_l.mp3"]);
    this.load.audio("calcetines_c", ["calcetines_c.mp3"]);
    this.load.audio("calcetines_e_l", ["calcetines_e_l.mp3"]);
    this.load.audio("camiseta_e_b", ["camiseta_e_b.mp3"]);
    this.load.audio("camiseta_e_l", ["camiseta_e_l.mp3"]);
    this.load.audio("camiseta_c", ["camiseta_c.mp3"]);
    this.load.audio("gorra_c", ["gorra_c.mp3"]);
    this.load.audio("gorra_e_c", ["gorra_e_c.mp3"]);
    this.load.audio("gorra_e_l", ["gorra_e_l.mp3"]);
    this.load.audio("pantalon_c", ["pantalon_c.mp3"]);
    this.load.audio("pantalon_e_l", ["pantalon_e_l.mp3"]);
    this.load.audio("zapatos_e_c", ["zapatos_e_c.mp3"]);
    this.load.audio("zapatos_e_l", ["zapatos_e_l.mp3"]);
    this.load.audio("zapatos_e_p", ["zapatos_e_p.mp3"]);
    this.load.audio("zapatos_c", ["zapatos_c.mp3"]);



    this.load.image("habitacion", "habitacion.png");
    // this.load.image("joven", "hombre1.png");
    this.load.image("camiseta", "camiseta1.png");
    this.load.image("pantalon", "pantalon1.png");
    this.load.image("calcetines", "calcetines1.png");
    this.load.image("bividi", "bividi1.png");
    this.load.image("gorra", "gorra1.png");
    this.load.image("zapatos", "zapatos1.png");
    this.load.image("cabeza", "hombre1_01_.png");
    this.load.image("tronco", "hombre1_02.png");
    this.load.image("piernas", "hombre1_03.png");
    this.load.image("pies", "hombre1_04.png");
  }

  create() {
    // console.log('enter create');
    const bividiAudio1 = this.sound.add("bividi_c");
    const bividiAudio2 = this.sound.add("bividi_e_l");
    const calcetinesAudio1 = this.sound.add("calcetines_c");
    const calcetinesAudio2 = this.sound.add("calcetines_e_l");
    const camisetaAudio1 = this.sound.add("camiseta_c");
    const camisetaAudio2 = this.sound.add("camiseta_e_l");
    const camisetaAudio3 = this.sound.add("camiseta_e_b");
    const gorraAudio1 = this.sound.add("gorra_c");
    const gorraAudio2 = this.sound.add("gorra_e_l");
    const gorraAudio3 = this.sound.add("gorra_e_c");
    const pantalonAudio1 = this.sound.add("pantalon_c");
    const pantalonAudio2 = this.sound.add("pantalon_e_l");
    const zapatosAudio1 = this.sound.add("zapatos_c");
    const zapatosAudio2 = this.sound.add("zapatos_e_l");
    const zapatosAudio3 = this.sound.add("zapatos_e_c");
    const zapatosAudio4 = this.sound.add("zapatos_e_p");



    this.add.image(320, 180, "habitacion").setDepth(-1);
    this.cabeza = this.add.image(100, 70, "cabeza").setInteractive();
    this.tronco = this.add.image(100, 140, "tronco").setInteractive();
    this.piernas = this.add.image(100, 257, "piernas").setInteractive();
    this.pies = this.add.image(100, 347, "pies").setInteractive();
    this.pantalon = this.add
      .image(575, 110, "pantalon")
      .setInteractive()
      .setRotation(0.2);
    this.bividi = this.add.image(185, 210, "bividi").setInteractive();
    this.camiseta = this.add
      .image(330, 120, "camiseta")
      .setInteractive()
      .setFlipX(true)
      .setRotation(-0.09);
    this.calcetines = this.add
      .image(425, 210, "calcetines")
      .setInteractive()
      .setRotation(0.1);
    this.gorra = this.add
      .image(430, 165, "gorra")
      .setInteractive()
      .setFlipX(true)
      .setRotation(-0.7);
    this.zapatos = this.add.image(380, 315, "zapatos").setInteractive();

    this.pantalon.name = "pantalon";
    this.camiseta.name = "camiseta";
    this.calcetines.name = "calcetines";
    this.zapatos.name = "zapatos";
    this.bividi.name = "bividi";
    this.gorra.name = "gorra";

    this.pies.name = "pies";
    this.piernas.name = "piernas";
    this.cabeza.name = "cabeza";
    this.tronco.name = "tronco";

    this.cabeza.input.dropZone = true;
    this.tronco.input.dropZone = true;
    this.piernas.input.dropZone = true;
    this.pies.input.dropZone = true;

    this.input.setDraggable([
      this.pantalon,
      this.camiseta,
      this.gorra,
      this.calcetines,
      this.zapatos,
      this.bividi,
    ]);

    const eventos = Phaser.Input.Events;

    this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
      if (obj.name == "pantalon" && !this.correcto[0]) {
        window.navigator.vibrate(200);

        obj.setScale(0.9);
      }

      if (obj.name == "camiseta" && !this.correcto[1]) {
        window.navigator.vibrate(200);
        obj.setScale(0.9);
      }

      if (obj.name == "calcetines" && !this.correcto[2]) {
        window.navigator.vibrate(200);
        obj.setScale(0.9);
      }

      if (obj.name == "zapatos" && !this.correcto[3]) {
        window.navigator.vibrate(200);
        obj.setScale(0.9);
      }

      if (obj.name == "bividi" && !this.correcto[4]) {
        window.navigator.vibrate(200);
        obj.setScale(0.9);
      }

      if (obj.name == "gorra" && !this.correcto[5]) {
        window.navigator.vibrate(200);
        obj.setScale(0.9);
      }
    });

    this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
      this.sound.stopAll();

      if (obj.name == "pantalon" && !this.correcto[0]) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "camiseta" && !this.correcto[1]) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "calcetines" && !this.correcto[2]) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "zapatos" && !this.correcto[3]) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "bividi" && !this.correcto[4]) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "gorra" && !this.correcto[5]) {
        obj.x = dragX;
        obj.y = dragY;
      }
    });

    // this.input.on(eventos.GAMEOBJECT_DOWN,(pointer, gameObject)=>{

    //     this.aux = true;
    // });

    this.input.on(eventos.DROP, (pointer, obj, target) => {
      let bandera = false;
      this.tracker.accion = target.name;
      // console.log(obj.name);
      // console.log(target.name);
      if (obj.name == "pantalon") {

        this.tracker.objetivo = "pantalon";

        if (target.name == "piernas") {
          this.pantalon.setRotation(0);
          obj.x = 102.5;
          obj.y = 260;
          pantalonAudio1.play();
          this.correcto[0] = true;
          bandera = true;
        }else{
          pantalonAudio2.play();
          this.tracker.error = true;
        }
      }

      if (obj.name == "camiseta") {
        this.tracker.objetivo = "camiseta";

        if(target.name == "tronco"){
          if (this.correcto[4]) {
            this.camiseta.setFlipX(false).setRotation(0);
            obj.x = 97.5;
            obj.y = 149.5;
            camisetaAudio1.play();
            this.correcto[1] = true;
            bandera = true;
          }else{
            camisetaAudio3.play();
            this.tracker.accion = this.tracker.accion +" (falta bividi)";
            this.tracker.error = true;
          }
        }else{
          camisetaAudio2.play();
          this.tracker.error = true;

        }
      }
       
    

      if (obj.name == "calcetines" ) {
        this.tracker.objetivo = "calcetines";

        if (target.name == "pies"){
        this.calcetines.setRotation(0);
        obj.x = 104;
        obj.y = 355;
        calcetinesAudio1.play();
        this.correcto[2] = true;
        bandera = true;
      }else{
        calcetinesAudio2.play();
        this.tracker.error = true;
      }}

      if (obj.name == "zapatos") {
        this.tracker.objetivo = "zapatos";

        if(target.name == "pies"){
        if (this.correcto[2]) {
          if (this.correcto[0]){
          obj.x = 102;
          obj.y = 354;
          zapatosAudio1.play();
          this.correcto[3] = true;
          bandera = true;
        }else{
          zapatosAudio4.play();
          this.tracker.accion = this.tracker.accion +" (falta pantalon)";
          this.tracker.error = true;
        }
      }else{
        zapatosAudio3.play();
        this.tracker.accion = this.tracker.accion +" (falta calcetines)";
        this.tracker.error = true;
        }
      }else{
        zapatosAudio2.play();
        this.tracker.error = true;
      }}

      if (obj.name == "bividi") {
        this.tracker.objetivo = "bividi";

        if (target.name == "tronco"){
        obj.x = 99;
        obj.y = 153.5;
        bividiAudio1.play();
        this.correcto[4] = true;
        bandera = true;
      }else{
        bividiAudio2.play();
        this.tracker.error = true;

      }}

      if (obj.name == "gorra") {
        this.tracker.objetivo = "gorra";

        if ( target.name == "cabeza"){
        if (this.correcto[1]) {
          this.gorra.setFlipX(false).setRotation(0);
          obj.x = 104;
          obj.y = 47;
          gorraAudio1.play();
          this.correcto[5] = true;
          bandera = true;
        }else{
          gorraAudio3.play();
          this.tracker.accion = this.tracker.accion +" (falta bividi y/o camiseta)";
          this.tracker.error = true;
        }
      }else{
        gorraAudio2.play();
        this.tracker.error = true;
      }
      }

      if (!bandera) {
        obj.x = obj.input.dragStartX;
        obj.y = obj.input.dragStartY;
      }

      obj.setScale(1);
    });
  }

  update(time, delta) {}
}

@Component({
  selector: "app-vestir-hombre",
  templateUrl: "./vestir-hombre.component.html",
  styleUrls: ["./vestir-hombre.component.css"],
})
export class VestirHombreComponent implements OnInit, OnDestroy, DoCheck {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  juego: Juego;

  checkpoints: boolean[];


  constructor(private router: Router, private juegoService: JuegoService) {
    this.checkpoints = [false, false, false, false, false, false];
    this.scene = new NewScene();

    this.config = {
      type: Phaser.AUTO,
      backgroundColor: "#34495e",
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
    this.phaserGame = new Phaser.Game(this.config);

    this.juegoService
      .selectJuego(localStorage.getItem("id_juego"))
      .subscribe((res) => {
        this.juego = res;

        this.juego.partidas.push({
          fecha_inicio: new Date(),
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

  ngDoCheck() {


      if (this.scene.tracker){
  
        if ((this.scene.correcto[0] || this.scene.tracker.error) && !this.checkpoints[0]){
    
         
          this.tracking(0);
        
        }else if ((this.scene.correcto[1] || this.scene.tracker.error) && !this.checkpoints[1]){
    
         
          this.tracking(1);
        
        }else if ((this.scene.correcto[2]|| this.scene.tracker.error) && !this.checkpoints[2]){
    
         
          this.tracking(2);
        
        }else if ((this.scene.correcto[3] || this.scene.tracker.error) && !this.checkpoints[3]){
    
         
          this.tracking(3);
        
        }else if ((this.scene.correcto[4] || this.scene.tracker.error) && !this.checkpoints[4]){
    
         
          this.tracking(4);
        
        }else if ((this.scene.correcto[5] || this.scene.tracker.error) && !this.checkpoints[5]){
    
         
          this.tracking(5);
        
        }
      }
      
  }

  regresar() {
    this.router.navigate(["actividades/listar"]);
  }

  tracking(i) {
    
    console.log("AQUI->  "+i)
    const detalle: DetallePartida = {
      ok: !this.scene.tracker.error,

      objetivo: this.scene.tracker.objetivo,

      accion: this.scene.tracker.accion,
    };

    this.juego.partidas.map((p) =>
      p._id === localStorage.getItem("id_partida")
        ? p.detalles_partida.push(detalle)
        : p
    );

    this.juegoService.updateJuego(this.juego).subscribe((res2) => {
      console.log(res2);
    });

    if (!this.scene.tracker.error) {
      this.checkpoints[i] = true;
    } else {
      this.scene.tracker.error = false;
    }
  }


  
  ngOnDestroy(){
    this.phaserGame.destroy(true);
  }
}
