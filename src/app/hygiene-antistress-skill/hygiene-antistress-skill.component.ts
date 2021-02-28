import { Component, DoCheck, OnInit, OnDestroy, AfterViewChecked } from '@angular/core';
import { Juego } from '../models/Juego';
import { JuegoService } from '../services/juegos/juego.service';
import { DetallePartida } from '../models/DetallePartida';
import { DataService } from '../services/data.service';
import { HIGIENE } from '../../utils/recursos';
import Phaser from 'phaser';


class NewScene extends Phaser.Scene {
  boca_der_sup: any;
  boca_der_sup_2: any;
  boca_izq_sup: any;
  boca_izq_sup_2: any;
  boca_der_inf: any;
  boca_der_inf_2: any;
  boca_izq_inf: any;
  boca_izq_inf_2: any;
  boca_abierta_1_1: any;
  boca_abierta_1_2: any;
  boca_abierta_2_1: any;
  boca_abierta_2_2: any;
  boca_abierta_3_1: any;
  boca_abierta_3_2: any;
  boca_abierta_4_1: any;
  boca_abierta_4_2: any;
  cepillo: any;
  contador1: number[];
  contador2: number[];
  timer : any;
  text : any;
  textP : any;
  initialTime : number;
  puntaje: number;
  gameOver : boolean;

  constructor() {
    super("NewScene");
  }

  preload() {
    
    this.gameOver = false;
    this.contador1 = [0, 0, 0, 0, 0, 0, 0, 0];
    this.contador2 = [0, 0, 0, 0, 0, 0, 0, 0];
    this.load.path = "/assets/img/";
    this.load.path = "/ar-kids-pwa/assets/img/";
    // this.load.image("font", "font.png");
    // this.load.json("font_json", "font.json")

  
    this.load.audio("cancion", ["cancion_dientes.mp3"]);
    
    this.load.image("boca_der_sup_01_x", "boca-der-sup_01_x.png");
    this.load.image("boca_der_sup_01", "boca-der-sup_01.png");
    this.load.image("boca_der_sup_02", "boca-der-sup_02.png");
    this.load.image("boca_der_sup_02_x", "boca-der-sup_02_x.png");
    this.load.image("boca_izq_sup_01_x", "boca-izq-sup_01_x.png");
    this.load.image("boca_izq_sup_01", "boca-izq-sup_01.png");
    this.load.image("boca_izq_sup_02_x", "boca-izq-sup_02_x.png");
    this.load.image("boca_izq_sup_02", "boca-izq-sup_02.png");

    this.load.image("boca_der_inf_01", "boca-der-inf_01.png");
    this.load.image("boca_der_inf_01_x", "boca-der-inf_01_x.png");
    this.load.image("boca_der_inf_02", "boca-der-inf_02.png");
    this.load.image("boca_der_inf_02_x", "boca-der-inf_02_x.png");
    this.load.image("boca_izq_inf_01", "boca-izq-inf_01.png");
    this.load.image("boca_izq_inf_01_x", "boca-izq-inf_01_x.png");
    this.load.image("boca_izq_inf_02", "boca-izq-inf_02.png");
    this.load.image("boca_izq_inf_02_x", "boca-izq-inf_02_x.png");

    this.load.image("boca_abierta_1_1_x", "boca-abierta_01_01_x.png");
    this.load.image("boca_abierta_1_2_x", "boca-abierta_01_02_x.png");
    this.load.image("boca_abierta_2_1_x", "boca-abierta_02_01_x.png");
    this.load.image("boca_abierta_2_2_x", "boca-abierta_02_02_x.png");
    this.load.image("boca_abierta_3_1_x", "boca-abierta_03_01_x.png");
    this.load.image("boca_abierta_3_2_x", "boca-abierta_03_02_x.png");
    this.load.image("boca_abierta_4_1_x", "boca-abierta_04_01_x.png");
    this.load.image("boca_abierta_4_2_x", "boca-abierta_04_02_x.png");

    this.load.image("boca_abierta_1_1", "boca-abierta_01_01.png");
    this.load.image("boca_abierta_1_2", "boca-abierta_01_02.png");
    this.load.image("boca_abierta_2_1", "boca-abierta_02_01.png");
    this.load.image("boca_abierta_2_2", "boca-abierta_02_02.png");
    this.load.image("boca_abierta_3_1", "boca-abierta_03_01.png");
    this.load.image("boca_abierta_3_2", "boca-abierta_03_02.png");
    this.load.image("boca_abierta_4_1", "boca-abierta_04_01.png");
    this.load.image("boca_abierta_4_2", "boca-abierta_04_02.png");

    this.load.image("cepillo", "cepillo_dientes.png");

  
  }

  create() {
    
    
    // const fontConfig = this.cache.json.get("font_json");
    // this.cache.bitmapFont.add('myFont', Phaser.GameObjects.RetroFont.Parse(this, fontConfig));
    

    const cancion = this.sound.add("cancion",  {loop: true});
    cancion.play();

    this.puntaje = 0; 
    this.initialTime = 240;
  
    this.timer = this.time.addEvent({ delay: 1000, callback: this.onEvent, callbackScope: this, loop: true });

    // this.text = this.add.bitmapText(0, 0, 'myFont', this.formatTime(this.initialTime), 30, 10).setTint(0x3f51b5);

    this.text = this.add.text(30, 0 ,this.formatTime(this.initialTime), {
      color : "#3f51b5",
      fontSize : 40,
      fontFamily: 'Poppins',
      fontStyle: 'bold'

    });

    this.textP = this.add.text(440, 0 ,"PUNTOS: "+this.puntaje.toString(), {
      color : "#26c998",
      fontSize : 28,
      fontFamily: 'Poppins',
      fontStyle: 'bold'
    });
    this.boca_izq_sup = this.add
      .image(160, 145, "boca_izq_sup_01_x")
      .setInteractive();
    this.boca_izq_sup_2 = this.add
      .image(280, 145, "boca_izq_sup_02_x")
      .setInteractive();
    this.boca_der_sup = this.add
      .image(350, 145, "boca_der_sup_01_x")
      .setInteractive();
    this.boca_der_sup_2 = this.add
      .image(470, 145, "boca_der_sup_02_x")
      .setInteractive();

    this.boca_izq_inf = this.add
      .image(169, 273, "boca_izq_inf_01_x")
      .setInteractive();
    this.boca_izq_inf_2 = this.add
      .image(289, 273, "boca_izq_inf_02_x")
      .setInteractive();
    this.boca_der_inf = this.add
      .image(343, 273, "boca_der_inf_01_x")
      .setInteractive();
    this.boca_der_inf_2 = this.add
      .image(463, 273, "boca_der_inf_02_x")
      .setInteractive();

    this.boca_abierta_1_1 = this.add
      .image(250, 70, "boca_abierta_1_1_x")
      .setInteractive();
    this.boca_abierta_1_2 = this.add
      .image(250, 150, "boca_abierta_1_2_x")
      .setInteractive();
    this.boca_abierta_2_1 = this.add
      .image(365, 70, "boca_abierta_2_1_x")
      .setInteractive();
    this.boca_abierta_2_2 = this.add
      .image(365, 150, "boca_abierta_2_2_x")
      .setInteractive();
    this.boca_abierta_3_1 = this.add
      .image(250, 210, "boca_abierta_3_1_x")
      .setInteractive();
    this.boca_abierta_3_2 = this.add
      .image(250, 290, "boca_abierta_3_2_x")
      .setInteractive();
    this.boca_abierta_4_1 = this.add
      .image(365, 210, "boca_abierta_4_1_x")
      .setInteractive();
    this.boca_abierta_4_2 = this.add
      .image(365, 290, "boca_abierta_4_2_x")
      .setInteractive();

    this.boca_abierta_1_1.visible = false;
    this.boca_abierta_1_2.visible = false;
    this.boca_abierta_2_1.visible = false;
    this.boca_abierta_2_2.visible = false;
    this.boca_abierta_3_1.visible = false;
    this.boca_abierta_3_2.visible = false;
    this.boca_abierta_4_1.visible = false;
    this.boca_abierta_4_2.visible = false;

    this.cepillo = this.add
      .image(463, 273, "cepillo")
      .setInteractive()
      .setDepth(1);

    this.input.setDraggable(this.cepillo);

    const eventos = Phaser.Input.Events;

    this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
      obj.x = dragX;
      obj.y = dragY;

      if (
        this.contador1.reduce(function (a, b) {
          return a + b;
        }, 0) === 808
      ) {
        // console.log("x: " + obj.x);
        // console.log("y: " + obj.y);
        // console.log("Boca limpia")
        this.boca_der_sup.destroy();
        this.boca_der_sup_2.destroy();
        this.boca_der_inf.destroy();
        this.boca_der_inf_2.destroy();
        this.boca_izq_inf.destroy();
        this.boca_izq_inf_2.destroy();
        this.boca_izq_sup.destroy();
        this.boca_izq_sup_2.destroy();

        this.cepillo.rotation = -1.57;

        this.boca_abierta_1_1.visible = true;
        this.boca_abierta_1_2.visible = true;
        this.boca_abierta_2_1.visible = true;
        this.boca_abierta_2_2.visible = true;
        this.boca_abierta_3_1.visible = true;
        this.boca_abierta_3_2.visible = true;
        this.boca_abierta_4_1.visible = true;
        this.boca_abierta_4_2.visible = true;

        if (obj.x > 230 && obj.x < 240 && obj.y > 210 && obj.y < 220) {
          console.log("vale");

          if (this.contador2[0] < 50) {
            this.contador2[0] += 1;
          }
          if (this.contador2[0] == 50) {
            this.boca_abierta_1_1.destroy();
            this.boca_abierta_1_1 = this.add
              .image(250, 70, "boca_abierta_1_1")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[0] = 51

          }
        }

        if (obj.x > 220 && obj.x < 230 && obj.y > 265 && obj.y < 280) {
          console.log("vale2");

          if (this.contador2[1] < 50) {
            this.contador2[1] += 1;
          }
          if (this.contador2[1] == 50) {
            this.boca_abierta_1_2.destroy();
            this.boca_abierta_1_2 = this.add
              .image(250, 150, "boca_abierta_1_2")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[1] = 51


          }
        }

        if (obj.x > 375 && obj.x < 385 && obj.y > 210 && obj.y < 220) {
          console.log("vale3");

          if (this.contador2[2] < 50) {
            this.contador2[2] += 1;
          }
          if (this.contador2[2] == 50) {
            this.boca_abierta_2_1.destroy();
            this.boca_abierta_2_1 = this.add
              .image(365, 70, "boca_abierta_2_1")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[2] = 51


          }
        }

        if (obj.x > 380 && obj.x < 390 && obj.y > 265 && obj.y < 280) {
          console.log("vale4");

          if (this.contador2[3] < 50) {
            this.contador2[3] += 1;
          }
          if (this.contador2[3] == 50) {
            this.boca_abierta_2_2.destroy();
            this.boca_abierta_2_2 = this.add
              .image(365, 150, "boca_abierta_2_2")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[3] = 51


          }
        }

        if (obj.x > 230 && obj.x < 240 && obj.y > 330 && obj.y < 345) {
          console.log("vale5");

          if (this.contador2[4] < 50) {
            this.contador2[4] += 1;
          }
          if (this.contador2[4] == 50) {
            this.boca_abierta_3_1.destroy();
            this.boca_abierta_3_1 = this.add
              .image(250, 210, "boca_abierta_3_1")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[4] = 51


          }
        }

        if (obj.x > 245 && obj.x < 255 && obj.y > 380 && obj.y < 390) {
          console.log("vale6");

          if (this.contador2[5] < 50) {
            this.contador2[5] += 1;
          }
          if (this.contador2[5] == 50) {
            this.boca_abierta_3_2.destroy();
            this.boca_abierta_3_2 = this.add
              .image(250, 290, "boca_abierta_3_2")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[5] = 51


          }
        }

        if (obj.x > 375 && obj.x < 390 && obj.y > 325 && obj.y < 335) {
          console.log("vale7");

          if (this.contador2[6] < 50) {
            this.contador2[6] += 1;
          }
          if (this.contador2[6] == 50) {
            this.boca_abierta_4_1.destroy();
            this.boca_abierta_4_1 = this.add
              .image(365, 210, "boca_abierta_4_1")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[6] = 51


          }
        }

        if (obj.x > 350 && obj.x < 365 && obj.y > 370 && obj.y < 385) {
          console.log("vale8");

          if (this.contador2[7] < 50) {
            this.contador2[7] += 1;
          }
          if (this.contador2[7] == 50) {
            this.boca_abierta_4_2.destroy();
            this.boca_abierta_4_2 = this.add
              .image(365, 290, "boca_abierta_4_2")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador2[7] = 51


          }
        }

        if (
          this.contador2.reduce(function (a, b) {
            return a + b;
          }, 0) === 408
        ) {
          this.gameOver = true;
          this.boca_izq_sup = this.add
            .image(160, 145, "boca_izq_sup_01")
            .setInteractive();
          this.boca_izq_sup_2 = this.add
            .image(280, 145, "boca_izq_sup_02")
            .setInteractive();
          this.boca_der_sup = this.add
            .image(350, 145, "boca_der_sup_01")
            .setInteractive();
          this.boca_der_sup_2 = this.add
            .image(470, 145, "boca_der_sup_02")
            .setInteractive();

          this.boca_izq_inf = this.add
            .image(169, 273, "boca_izq_inf_01")
            .setInteractive();
          this.boca_izq_inf_2 = this.add
            .image(289, 273, "boca_izq_inf_02")
            .setInteractive();
          this.boca_der_inf = this.add
            .image(343, 273, "boca_der_inf_01")
            .setInteractive();
          this.boca_der_inf_2 = this.add
            .image(463, 273, "boca_der_inf_02")
            .setInteractive();

          this.boca_abierta_1_1.visible = false;
          this.boca_abierta_1_2.visible = false;
          this.boca_abierta_2_1.visible = false;
          this.boca_abierta_2_2.visible = false;
          this.boca_abierta_3_1.visible = false;
          this.boca_abierta_3_2.visible = false;
          this.boca_abierta_4_1.visible = false;
          this.boca_abierta_4_2.visible = false;
        }
      } else {
        if (obj.x > 60 && obj.x < 120 && obj.y > 170 && obj.y < 190) {
          console.log("vale");

          if (this.contador1[0] < 100) {
            this.contador1[0] = this.contador1[0] + 1;
          }
          if (this.contador1[0] == 100) {
            this.boca_izq_sup.destroy();
            this.boca_izq_sup = this.add
              .image(160, 145, "boca_izq_sup_01")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador1[0] = 101
          }
        }

        if (obj.x > 100 && obj.x < 180 && obj.y > 170 && obj.y < 190) {
          console.log("vale2");
          if (this.contador1[1] < 100) {
            this.contador1[1] = this.contador1[1] + 1;
          }
          if (this.contador1[1] == 100) {
            this.boca_izq_sup_2.destroy();
            this.boca_izq_sup_2 = this.add
              .image(280, 145, "boca_izq_sup_02")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador1[1] = 101


          }
        }

        if (obj.x > 170 && obj.x < 270 && obj.y > 170 && obj.y < 190) {
          console.log("vale3");
          if (this.contador1[2] < 100) {
            this.contador1[2] = this.contador1[2] + 1;
          }
          if (this.contador1[2] == 100) {
            this.boca_der_sup.destroy();
            this.boca_der_sup = this.add
              .image(350, 145, "boca_der_sup_01")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador1[2] = 101


          }
        }

        if (obj.x > 250 && obj.x < 360 && obj.y > 170 && obj.y < 190) {
          console.log("vale4");
          if (this.contador1[3] < 100) {
            this.contador1[3] = this.contador1[3] + 1;
          }
          if (this.contador1[3] == 100) {
            this.boca_der_sup_2.destroy();
            this.boca_der_sup_2 = this.add
              .image(470, 145, "boca_der_sup_02")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador1[3] = 101


          }
        }

        if (obj.x > 60 && obj.x < 120 && obj.y > 220 && obj.y < 240) {
          console.log("vale5");
          if (this.contador1[4] < 100) {
            this.contador1[4] = this.contador1[4] + 1;
          }
          if (this.contador1[4] == 100) {
            this.boca_izq_inf.destroy();
            this.boca_izq_inf = this.add
              .image(169, 273, "boca_izq_inf_01")
              .setInteractive();
              this.actualizaPuntaje();
              this.contador1[4] = 101


          }
        }

        if (obj.x > 100 && obj.x < 180 && obj.y > 220 && obj.y < 240) {
          console.log("vale6");
          if (this.contador1[5] < 100) {
            this.contador1[5] = this.contador1[5] + 1;
          }
          if (this.contador1[5] == 100) {
            this.boca_izq_inf_2.destroy();
            this.boca_izq_inf_2 = this.add
              .image(289, 273, "boca_izq_inf_02")
              .setInteractive();
              this.actualizaPuntaje()
              this.contador1[5] = 101
              
          }
        }

        if (obj.x > 170 && obj.x < 270 && obj.y > 220 && obj.y < 240) {
          console.log("vale7");
          if (this.contador1[6] < 100) {
            this.contador1[6] = this.contador1[6] + 1;
          }
          if (this.contador1[6] == 100) {
            this.boca_der_inf.destroy();
            this.boca_der_inf = this.add
              .image(343, 273, "boca_der_inf_01")
              .setInteractive();
              this.actualizaPuntaje()
              this.contador1[6] = 101



          }
        }

        if (obj.x > 250 && obj.x < 360 && obj.y > 220 && obj.y < 240) {
          console.log("vale8");
          if (this.contador1[7] < 100) {
            this.contador1[7] = this.contador1[7] + 1;
          }
          if (this.contador1[7] == 100) {
            this.boca_der_inf_2.destroy();
            this.boca_der_inf_2 = this.add
              .image(463, 273, "boca_der_inf_02")
              .setInteractive();
              this.actualizaPuntaje()
              this.contador1[7] = 101


          }
        }
      }
    });

    

    this.cameras.main.setBackgroundColor("#FFFFFF");
  }

  update(time, delta) {
    //logica
    if (this.initialTime == 0){
      this.gameOver = true;
    }

    if (this.gameOver){
      this.scene.pause();
    }
    
    
  }

  formatTime(seconds){
    // Minutes
    var minutes = Math.floor(seconds/60);
    // Seconds
    var partInSeconds = seconds%60;
    // Adds left zeros to seconds
    var partInSeconds2 = partInSeconds.toString().padStart(2,'0');
    // Returns formated time
    return `${minutes}:${partInSeconds2}`;
  }

  onEvent(){

    if (this.initialTime > 0 && !this.gameOver){

      this.initialTime -= 1; // One second
  
      this.text.setText(this.formatTime(this.initialTime))
    
    }
  }

  actualizaPuntaje(){
    this.puntaje+=2;
    window.navigator.vibrate(200);
    this.textP.setText("PUNTOS: "+this.puntaje)

  }
// 
  // plus(){
  //   this.counter=this.counter;
  //   console.log(this.counter);
  // }

}

@Component({
  selector: "app-hygiene-antistress-skill",
  templateUrl: "./hygiene-antistress-skill.component.html",
  styleUrls: ["./hygiene-antistress-skill.component.css"],
})
export class HygieneAntistressSkillComponent implements OnInit, DoCheck, OnDestroy {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  juego: Juego;
  checkpoint: boolean;
  showBar: boolean
  constructor(private juegoService: JuegoService, private data:DataService) {
    this.showBar = false;
    this.checkpoint = false;
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
        parent: "hygieneAntistressSkill",
        width: 640,
        height: 360,
      },
      
    };
  }

  ngOnInit() {

    this.newMessage(false);

    console.log(HIGIENE);
    
    this.phaserGame = new Phaser.Game(this.config);

    this.data.currentBarState.subscribe(message => this.showBar = message);
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

  ngDoCheck(){
    
    if (this.scene.gameOver && !this.checkpoint){
        this.generarDetalle();
    }
  }


  generarDetalle(){

    let complete = false;

    if (this.scene.puntaje == 32){
      complete = true;
    }

    const detalle: DetallePartida = {
      ok: complete,

      objetivo: "Puntaje",

      accion: this.scene.puntaje.toString(),
    };

    const detalle2: DetallePartida = {
      ok: complete,

      objetivo: "Tiempo",

      accion: (180 - this.scene.initialTime).toString(),
    };

    this.juego.partidas.map((p) =>
      p._id === localStorage.getItem("id_partida")
        ? p.detalles_partida.push(detalle, detalle2)
        : p
    );



    this.juegoService.updateJuego(this.juego).subscribe((res2) => {
      console.log(res2);
    });
    this.checkpoint =true;
    
  }


  ngOnDestroy(){
    this.phaserGame.destroy(true);
    this.newMessage(true);

  }



  newMessage(state:boolean) {
    console.log("aqui")
    this.data.changeMessage(state);
  }
}
