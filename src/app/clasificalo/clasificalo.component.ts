import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  DoCheck,
} from "@angular/core";
declare function movimiento(): any;
declare function validar(): any;
import Phaser from "phaser";
import { OnDestroy } from '@angular/core';
import { JuegoService } from '../services/juegos/juego.service';
import { Juego } from '../models/Juego';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
class NewScene extends Phaser.Scene {
  cursor: any;
  recta: any;
  recta2: any;
  recta3: any;
  recta4: any;
  rectas: any[];
  prenda: any;
  prendas: any[];
  destinos: any[];
  rand: number;
  audio1: any;
  audio2: any;
  audio3: any;
  audio4: any;
  randArray: number[];

  constructor() {
    super("NewScene");
  }

  preload() {
    this.load.path = "/assets/img/";
    this.load.audio("audio1", ["ropa_arrugada.mp3"]);
    this.load.audio("audio2", ["ropa_doblada.mp3"]);
    this.load.audio("audio3", ["ropa_mojada.mp3"]);
    this.load.audio("audio4", ["ropa_sucia.mp3"]);

    this.load.image("armario", "armario.png");
    this.load.image("planchar", "planchar.png");
    this.load.image("tendedero", "tendedero.png");
    this.load.image("lavar", "lavar.png");
    this.load.image("camisa_doblada", "camisa doblada.png");
    this.load.image("camiseta_arrugada", "camiseta arrugada.png");
    this.load.image("camiseta_mojada", "camiseta mojada.png");
    this.load.image("casaca_sucia", "casaca sucia.png");
    this.load.image("pantalon_mojado", "pantalon mojado.png");
    this.load.image("pantalon_arrugado", "pantalon arrugado.png");
    this.load.image("pantalon_doblado", "pantalon doblado.png");
    this.load.image("pantalon_sucio", "pantalon sucio.png");
    this.rectas = [null, null, null, null, null, null, null, null];
    this.destinos = [null, null, null, null];
    this.prendas = [null, null, null, null];
    this.randArray = [null];
    this.rand = -1;

  }

  create() {
    this.audio1 =  this.sound.add("audio1");
    this.audio2 =  this.sound.add("audio2");
    this.audio3 =  this.sound.add("audio3");
    this.audio4 =  this.sound.add("audio4");

    this.destinos[0] = this.physics.add.image(55, 60, "armario");
    this.destinos[1] = this.physics.add.image(595, 60, "lavar");
    this.destinos[2] = this.physics.add.image(583, 315, "planchar");
    this.destinos[3] = this.physics.add.image(65, 315, "tendedero");

    // this.jean = this.physics.add.image(350, 50, "jean")
    this.recta = this.add.rectangle(0, 0, 1300, 20, 0x6666ff);
    this.recta2 = this.add.rectangle(0, 0, 20, 700, 0x6666ff);
    this.recta3 = this.add.rectangle(0, 355, 1300, 10, 0x6666ff);
    this.recta4 = this.add.rectangle(635, 5, 10, 700, 0x6666ff);
    this.rectas[0] = this.add.rectangle(315, 125, 150, 10, 0x6666ff);
    this.rectas[1] = this.add.rectangle(385, 185, 10, 120, 0x6666ff);
    this.rectas[2] = this.add.rectangle(245, 185, 10, 120, 0x6666ff);
    this.rectas[3] = this.add.rectangle(315, 245, 150, 10, 0x6666ff);
    this.rectas[4] = this.add.rectangle(530, 310, 10, 120, 0x6666ff);
    this.rectas[5] = this.add.rectangle(105, 60, 10, 120, 0x6666ff);
    this.rectas[6] = this.add.rectangle(605, 125, 150, 10, 0x6666ff);
    this.rectas[7] = this.add.rectangle(55, 245, 110, 10, 0x6666ff);

    // this.jean.name = "jean";
    this.physics.add.existing(this.recta);
    this.physics.add.existing(this.recta2);
    this.physics.add.existing(this.recta3);
    this.physics.add.existing(this.recta4);
    this.physics.add.existing(this.rectas[0]);
    this.physics.add.existing(this.rectas[1]);
    this.physics.add.existing(this.rectas[2]);
    this.physics.add.existing(this.rectas[3]);
    this.physics.add.existing(this.rectas[4]);
    this.physics.add.existing(this.rectas[5]);
    this.physics.add.existing(this.rectas[6]);
    this.physics.add.existing(this.rectas[7]);

    this.asignacion();

    this.recta.body.immovable = true;
    this.recta.body.moves = false;
    this.recta2.body.immovable = true;
    this.recta2.body.moves = false;
    this.recta3.body.immovable = true;
    this.recta3.body.moves = false;
    this.recta4.body.immovable = true;
    this.recta4.body.moves = false;
    this.rectas[0].body.immovable = true;
    this.rectas[0].body.moves = false;
    this.rectas[1].body.immovable = true;
    this.rectas[1].body.moves = false;
    this.rectas[2].body.immovable = true;
    this.rectas[2].body.moves = false;
    this.rectas[3].body.immovable = true;
    this.rectas[3].body.moves = false;
    this.rectas[4].body.immovable = true;
    this.rectas[4].body.moves = false;
    this.rectas[5].body.immovable = true;
    this.rectas[5].body.moves = false;
    this.rectas[6].body.immovable = true;
    this.rectas[6].body.moves = false;
    this.rectas[7].body.immovable = true;
    this.rectas[7].body.moves = false;

    // this.cursor = this.input.keyboard.createCursorKeys();
    // this.cursor.right.on('down', () =>{
    //   this.prenda.body.setVelocityX(100);
    // })

    // this.prenda.body.setCollideWorldBounds(true)
    // this.recta.body.setCollideWorldBounds(true)
    // this.recta2.body.setCollideWorldBounds(true)

    this.physics.add.collider(this.prenda, this.recta);
    this.physics.add.collider(this.prenda, this.recta2);
    this.physics.add.collider(this.prenda, this.recta3);
    this.physics.add.collider(this.prenda, this.recta4);
    this.physics.add.collider(this.prenda, this.rectas[0]);
    this.physics.add.collider(this.prenda, this.rectas[1]);
    this.physics.add.collider(this.prenda, this.rectas[2]);
    this.physics.add.collider(this.prenda, this.rectas[3]);
    this.physics.add.collider(this.prenda, this.rectas[4]);
    this.physics.add.collider(this.prenda, this.rectas[5]);
    this.physics.add.collider(this.prenda, this.rectas[6]);
    this.physics.add.collider(this.prenda, this.rectas[7]);
  }

  update() {

    // if (!this.checkpoint){
    //   this.inicializa();
    // }
    if (this.randArray.length !== 4 ) {
      console.log(this.prenda.name, this.prenda.x, this.prenda.y)
      if (
        this.prenda.name == "pantalon_doblado" ||
        this.prenda.name == "camisa_doblada"
      ) {
        if (
          this.prenda.x > 25 &&
          this.prenda.x < 75 &&
          this.prenda.y > 60 &&
          this.prenda.y < 80
        ) {
          this.randArray.push(this.rand);
          this.asignacion();
          this.colliders();
        }
      } else if (
        this.prenda.name == "pantalon_arrugado" ||
        this.prenda.name == "camiseta_arrugada"
      ) {
        if (
          this.prenda.x > 555 &&
          this.prenda.x < 609 &&
          this.prenda.y > 300 &&
          this.prenda.y < 335
        ) {
          this.randArray.push(this.rand);
          this.asignacion();
          this.colliders();
        }
      } else if (
        this.prenda.name == "pantalon_sucio" ||
        this.prenda.name == "casaca_sucia"
      ) {
        if (
          this.prenda.x > 565 &&
          this.prenda.x < 615 &&
          this.prenda.y > 55 &&
          this.prenda.y < 80
        ) {
          this.randArray.push(this.rand);
          this.asignacion();
          this.colliders();
        }
      } else if (
        this.prenda.name == "pantalon_mojado" ||
        this.prenda.name == "camiseta_mojada"
      ) {
        if (
          this.prenda.x > 30 &&
          this.prenda.x < 95 &&
          this.prenda.y > 310 &&
          this.prenda.y < 335
        ) {
          this.randArray.push(this.rand);
          this.asignacion();
          this.colliders();
        }
      }
    }else{
      this.scene.pause();
      
    }
  }

  asignacion() {
    // while(this.randArray.length < 5){
    // do {
    // this.checkpoint = true;
    do{
      this.rand = Math.floor(Math.random() * (7 - 0) + 0);
    }while(this.randArray.includes(this.rand))

    if (this.rand == 0) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "camisa_doblada")
        .setScale(1.2);

      this.prendas[this.randArray.length-1].name = "camisa_doblada";
      this.audio2.play();

    } else if (this.rand == 1) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "camiseta_arrugada")
        .setScale(1.2);
      this.prendas[this.randArray.length-1].name = "camiseta_arrugada";
      this.audio1.play();

    } else if (this.rand == 2) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "camiseta_mojada")
        .setScale(1.2);
      this.prendas[this.randArray.length-1].name = "camiseta_mojada";
      this.audio3.play();

    } else if (this.rand == 3) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "casaca_sucia")
        .setScale(1.2);
      this.prendas[this.randArray.length-1].name = "casaca_sucia";
      this.audio4.play();

    } else if (this.rand == 4) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "pantalon_mojado")
        .setScale(1.2);
      this.prendas[this.randArray.length-1].name = "pantalon_mojado";
      this.audio3.play();

    } else if (this.rand == 5) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "pantalon_arrugado")
        .setScale(1.2);
      this.prendas[this.randArray.length-1].name = "pantalon_arrugado";
      this.audio1.play();

    } else if (this.rand == 6) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "pantalon_doblado")
        .setScale(1.2);
      this.prendas[this.randArray.length-1].name = "pantalon_doblado";
      this.audio2.play();

    } else if (this.rand == 7) {
      this.prendas[this.randArray.length-1] = this.physics.add
        .image(315, 60, "pantalon_sucio")
        .setScale(1.2);
      this.prendas[this.randArray.length-1].name = "pantalon_sucio";
      this.audio4.play();

    }

    this.prenda= this.prendas[this.randArray.length-1];
    // this.randArray.push(this.rand);

    // console.log(this.prenda.name);
  }


  colliders() {
    this.physics.add.collider(this.prenda, this.recta);
    this.physics.add.collider(this.prenda, this.recta2);
    this.physics.add.collider(this.prenda, this.recta3);
    this.physics.add.collider(this.prenda, this.recta4);
    this.physics.add.collider(this.prenda, this.rectas[0]);
    this.physics.add.collider(this.prenda, this.rectas[1]);
    this.physics.add.collider(this.prenda, this.rectas[2]);
    this.physics.add.collider(this.prenda, this.rectas[3]);
    this.physics.add.collider(this.prenda, this.rectas[4]);
    this.physics.add.collider(this.prenda, this.rectas[5]);
    this.physics.add.collider(this.prenda, this.rectas[6]);
    this.physics.add.collider(this.prenda, this.rectas[7]);
  }

  izquierda() {
    this.prenda.body.setVelocityX(-50);
  }

  // mover(){
  //   this.prenda.x = this.prenda.x +3;
  // }
  derecha() {
    this.prenda.body.setVelocityX(50);
  }
  arriba() {
    this.prenda.body.setVelocityY(-50);
  }
  abajo() {
    this.prenda.body.setVelocityY(50);
  }
}

@Component({
  selector: "app-clasificalo",
  templateUrl: "./clasificalo.component.html",
  styleUrls: ["./clasificalo.component.css"],
})
export class ClasificaloComponent implements OnInit, DoCheck, OnDestroy {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;

  checkpoints: boolean[];
  juego: Juego;

  constructor(public juegoService: JuegoService, private _snackBar: MatSnackBar, private router: Router) {
    this.scene = new NewScene();

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
    this.phaserGame = new Phaser.Game(this.config);

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
    // window.onbeforeunload = () => this.ngOnDestroy();
  }

  ngDoCheck() {
    if (this.scene.prenda) {
      if (validar()) {
        const x = movimiento().x * (180 / Math.PI);
        const y = movimiento().y * (180 / Math.PI);

        if (x > -110 && x < -70) {
          console.log("abajo");
          this.scene.abajo();
        } else if (x < 110 && x > 70) {
          this.scene.arriba();
        } else if (y > -110 && y < -70) {
          this.scene.derecha();
        } else if (y < 110 && y > 70) {
          this.scene.izquierda();
        }
      } else {
        this.scene.prenda.body.setVelocityX(0);
        this.scene.prenda.body.setVelocityY(0);
      }
    }

    if (this.scene.randArray.length == 5){
      this.scene.randArray = null;
      this.openSnackBar("GAME OVER","🚩")
      setTimeout(() => {
        this.router.navigate(["actividades/principal"]);
      }, 5000);

    }
  }

  probar() {

  
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: "top",
    });
  }

  ngOnDestroy(){
    this.phaserGame.destroy(true);
  }
}
