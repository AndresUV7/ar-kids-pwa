import { Component, DoCheck, OnInit, OnDestroy } from '@angular/core';
import Phaser from "phaser";
import { JuegoService } from "../services/juegos/juego.service";
import { Juego } from "../models/Juego";
import { DetallePartida } from "../models/DetallePartida";

class NewScene extends Phaser.Scene {
  cabeza: any;
  tronco: any;
  piernas: any;
  pies: any;
  sueter: any;
  jean: any;
  blusa: any;
  botas: any;
  medias: any;
  gorra: any;
  correcto: boolean;
  correcto2: boolean;
  blusaCorrecta: boolean;
  botasCorrectas: boolean;
  mediasCorrectas: boolean;
  gorraCorrecta: boolean;
  tracker: any;

  constructor() {
    super("NewScene");
  }

  preload() {
    this.tracker = { error: false, objetivo: "", accion: ""};
    // this.load.path = '/ar-kids-pwa/assets/img/'
    this.load.path = "/assets/img/";
    this.load.audio("pantalones", ["pantalon_w.mp3"]);
    this.load.audio("pantalones2", ["pantalon_x_w.mp3"]);
    this.load.audio("blusa", ["blusa_w.mp3"]);
    this.load.audio("blusa2", ["blusa_x_w.mp3"]);
    this.load.audio("calcetines", ["calcetines_w.mp3"]);
    this.load.audio("calcetines2", ["calcetines_x_w.mp3"]);
    this.load.audio("zapatos1", ["zapatos_w.mp3"]);
    this.load.audio("zapatos2", ["zapatos_x_w.mp3"]);
    this.load.audio("zapatos3", ["zapatos_x_C_w.mp3"]);
    this.load.audio("zapatos4", ["zapatos_x_P_w.mp3"]);
    this.load.audio("buzo", ["buzo_w.mp3"]);
    this.load.audio("buzo2", ["buzo_x_w.mp3"]);
    this.load.audio("buzo3", ["buzo_x_B_w.mp3"]);
    this.load.audio("gorro", ["gorro_w.mp3"]);
    this.load.audio("gorro2", ["gorro_x_w.mp3"]);
    this.load.audio("gorro3", ["gorro_x_BB_w.mp3"]);
    this.load.image("cabeza", "mujer1_01.png");
    this.load.image("tronco", "mujer1_02.png");
    this.load.image("piernas", "mujer1_03.png");
    this.load.image("pies", "mujer1_04.png");
    this.load.image("sueter", "sueter.png");
    this.load.image("jean", "jean.png");
    this.load.image("blusa", "blusa.png");
    this.load.image("botas", "botas.png");
    this.load.image("medias", "medias.png");
    this.load.image("gorra", "gorra.png");
    this.load.image("back", "girlRoon.jpg");
  }

  create() {
    // console.log('enter create');
    this.add.image(320, 180, "back").setDepth(-1);
    const pantalonesAudio = this.sound.add("pantalones");
    const pantalonesAudio2 = this.sound.add("pantalones2");
    const blusaAudio = this.sound.add("blusa");
    const blusaAudio2 = this.sound.add("blusa2");
    const calcetinesAudio = this.sound.add("calcetines");
    const calcetinesAudio2 = this.sound.add("calcetines2");
    const zapatosAudio = this.sound.add("zapatos1");
    const zapatosAudio2 = this.sound.add("zapatos2");
    const zapatosAudio3 = this.sound.add("zapatos3");
    const zapatosAudio4 = this.sound.add("zapatos4");
    const buzoAudio = this.sound.add("buzo");
    const buzoAudio2 = this.sound.add("buzo2");
    const buzoAudio3 = this.sound.add("buzo3");
    const gorroAudio = this.sound.add("gorro");
    const gorroAudio2 = this.sound.add("gorro2");
    const gorroAudio3 = this.sound.add("gorro3");
    
    this.cabeza = this.add
      .image(210, 65, "cabeza")
      .setDepth(-1)
      .setInteractive();
    this.tronco = this.add
      .image(210, 140, "tronco")
      .setDepth(-1)
      .setInteractive();
    this.piernas = this.add
      .image(210, 258, "piernas")
      .setDepth(-1)
      .setInteractive();
    this.pies = this.add.image(210, 345, "pies").setDepth(-1).setInteractive();
    // this.sueter=this.add.image(210,150,"sueter").setInteractive();
    this.blusa = this.add
      .image(109, 202, "blusa")
      .setDepth(-1)
      .setInteractive();
    this.sueter = this.add.image(610, 250, "sueter").setInteractive();
    // this.jean=this.add.image(218,253,"jean").setDepth(-1).setInteractive();
    this.jean = this.add.image(450, 160, "jean").setDepth(-1).setInteractive();
    this.medias = this.add
      .image(118, 107, "medias")
      .setDepth(-1)
      .setInteractive();
    this.botas = this.add.image(435, 335, "botas").setInteractive();
    this.gorra = this.add.image(295, 215, "gorra").setInteractive();
    // this.pajaro2=this.add.image(400,240,"pajaro2").setDepth(-1).setInteractive();
    // this.pajaro2.input.dropZone= true;
    // this.pajaro3=this.add.image(400,310,"pajaro2").setDepth(-1).setInteractive();
    this.piernas.name = "piernas";
    this.tronco.name = "tronco";
    this.pies.name = "pies";
    this.cabeza.name = "cabeza";
    this.sueter.name = "sueter";
    this.jean.name = "jean";
    this.blusa.name = "blusa";
    this.botas.name = "botas";
    this.medias.name = "medias";
    this.gorra.name = "gorra";
    this.correcto = false;
    this.correcto2 = false;
    this.blusaCorrecta = false;
    this.botasCorrectas = false;
    this.mediasCorrectas = false;
    this.gorraCorrecta = false;

    this.piernas.input.dropZone = true;
    this.tronco.input.dropZone = true;
    this.pies.input.dropZone = true;
    this.cabeza.input.dropZone = true;

    this.input.setDraggable(this.sueter);
    this.input.setDraggable(this.jean);
    this.input.setDraggable(this.blusa);
    this.input.setDraggable(this.botas);
    this.input.setDraggable(this.medias);
    this.input.setDraggable(this.gorra);
    // this.input.setDraggable(this.pajaro1);

    const eventos = Phaser.Input.Events;

    this.input.on(eventos.DRAG_START, (pointer, obj, dragX, dragY) => {
      if (obj.name == "sueter" && !this.correcto2) {
        obj.setScale(0.9);
      } else if (obj.name == "jean" && !this.correcto) {
        obj.setScale(0.9);
      } else if (obj.name == "blusa" && !this.blusaCorrecta) {
        obj.setScale(0.9);
      } else if (obj.name == "botas" && !this.botasCorrectas) {
        obj.setScale(0.9);
      } else if (obj.name == "medias" && !this.mediasCorrectas) {
        obj.setScale(0.9);
      } else if (obj.name == "gorra" && !this.gorraCorrecta) {
        obj.setScale(0.9);
      }
    });

    this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
      this.sound.stopAll();

      if (obj.name == "jean" && !this.correcto) {
        
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "sueter" && !this.correcto2) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "blusa" && !this.blusaCorrecta) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "botas" && !this.botasCorrectas) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "medias" && !this.mediasCorrectas) {
        obj.x = dragX;
        obj.y = dragY;
      }

      if (obj.name == "gorra" && !this.gorraCorrecta) {
        obj.x = dragX;
        obj.y = dragY;
      }
    });

    this.input.on(eventos.DROP, (pointer, obj, target) => {
      let bandera = false;
      this.tracker.accion = target.name;
      console.log(obj.name);
      console.log(target.name);

      if (obj.name == "sueter") {
        this.tracker.objetivo = "buzo";
        if (target.name == "tronco") {
          if (this.blusaCorrecta) {
            obj.x = 210;
            obj.y = 147;
            buzoAudio.play();
            this.correcto2 = true;
            bandera = true;
          } else {
            buzoAudio3.play();
            this.tracker.accion = this.tracker.accion +" (falta blusa)";
            this.tracker.error = true;
          }
        } else {
          buzoAudio2.play();
          this.tracker.error = true;

        }
      }

      if (obj.name == "jean") {
        this.tracker.objetivo = "pantalón";

        if (target.name == "piernas") {
          obj.x = 218;
          obj.y = 249.5;
          pantalonesAudio.play();
          this.correcto = true;
          bandera = true;
        } else {
          pantalonesAudio2.play();
          this.tracker.error = true;
        }
      }

      if (obj.name == "blusa") {

        this.tracker.objetivo = "blusa";

        if (target.name == "tronco") {
          obj.x = 213;
          obj.y = 141;
          blusaAudio.play();
          this.blusaCorrecta = true;
          bandera = true;
        } else {
          blusaAudio2.play();
          this.tracker.error = true;
        }
      }

      if (obj.name == "botas") {

        this.tracker.objetivo = "zapatos";

        if (target.name == "pies") {
          if (this.mediasCorrectas) {
            if (this.correcto) {
              obj.x = 223;
              obj.y = 340;
              zapatosAudio.play();
              this.botasCorrectas = true;
              bandera = true;
            } else {
              zapatosAudio4.play();
              this.tracker.accion = this.tracker.accion +" (falta pantalón)";
              this.tracker.error = true;
            }
          } else {
            zapatosAudio3.play();
            this.tracker.accion =this.tracker.accion + " (falta calcetines)";
            this.tracker.error = true;
          }
        } else {
          zapatosAudio2.play();
          this.tracker.error = true;
        }
      }

      if (obj.name == "medias") {

        this.tracker.objetivo = "calcetines";

        if (target.name == "pies") {
          obj.x = 225;
          obj.y = 350;
          calcetinesAudio.play();
          this.mediasCorrectas = true;
          bandera = true;
        } else {
          calcetinesAudio2.play();
          this.tracker.error = true;
        }
      }

      if (obj.name == "gorra") {

        this.tracker.objetivo = "gorro";

        if (target.name == "cabeza") {
          if (this.correcto2 && this.blusaCorrecta) {
            obj.x = 215;
            obj.y = 37;
            gorroAudio.play();
            this.gorraCorrecta = true;
            bandera = true;
          } else {
            gorroAudio3.play();
            this.tracker.accion =this.tracker.accion + " (falta blusa y/o buzo)";
            this.tracker.error = true;
          }
        } else {
          gorroAudio2.play();
          this.tracker.error = true;
        }
      }

      if (!bandera) {
        console.log("entro");
        obj.x = obj.input.dragStartX;
        obj.y = obj.input.dragStartY;
      }

      obj.setScale(1);
    });
  }

  update(time, delta) {}
}

@Component({
  selector: "app-juego",
  templateUrl: "./juego.component.html",
  styleUrls: ["./juego.component.css"],
})
export class JuegoComponent implements OnInit, DoCheck, OnDestroy {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  juego: Juego;

  checkpoints: boolean[];

  constructor(private juegoService: JuegoService) {
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

      if ((this.scene.correcto || this.scene.tracker.error) && !this.checkpoints[0]){
  
       
        this.tracking(0);
      
      }else if ((this.scene.correcto2 || this.scene.tracker.error) && !this.checkpoints[1]){
  
       
        this.tracking(1);
      
      }else if ((this.scene.blusaCorrecta || this.scene.tracker.error) && !this.checkpoints[2]){
  
       
        this.tracking(2);
      
      }else if ((this.scene.botasCorrectas || this.scene.tracker.error) && !this.checkpoints[3]){
  
       
        this.tracking(3);
      
      }else if ((this.scene.mediasCorrectas || this.scene.tracker.error) && !this.checkpoints[4]){
  
       
        this.tracking(4);
      
      }else if ((this.scene.gorraCorrecta || this.scene.tracker.error) && !this.checkpoints[5]){
  
       
        this.tracking(5);
      
      }
    }
    
    

    // if (this.scene.tracker) {
    //   if (this.scene.tracker.on) {
    //     const detalle: DetallePartida = {
    //       ok: !this.scene.tracker.on,

    //       objetivo: this.scene.tracker.objetivo,

    //       accion: this.scene.tracker.accion,
    //     };

    //     this.juego.partidas.map((p) =>
    //       p._id === localStorage.getItem("id_partida")
    //         ? p.detalles_partida.push(detalle)
    //         : p
    //     );

    //     this.juegoService.updateJuego(this.juego).subscribe((res2) => {
    //       console.log(res2);
    //     });

    //     this.scene.tracker.on = false;
    //   }
    // }

    // if (this.scene.correcto){

    //   this.juegoService.selectJuego(localStorage.getItem("id_juego")).subscribe( res =>{
    //   this.juego = res;

    //   this.juego.partidas.push({
    //     fecha_inicio : new Date()
    //   });

    //   this.juegoService.updateJuego(res).subscribe(res2 => {
    //     console.log(res2);
    //   })
    // });
    // }
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
