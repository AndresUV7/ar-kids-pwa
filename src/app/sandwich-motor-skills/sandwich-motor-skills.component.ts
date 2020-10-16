import { Component, OnInit, DoCheck, OnDestroy } from "@angular/core";
import Phaser from "phaser";
import { Juego } from "../models/Juego";
import { JuegoService } from "../services/juegos/juego.service";

class NewScene extends Phaser.Scene {
  indice: any;
  medio: any;
  anular: any;
  menique: any;
  pulgar: any;
  ingrediente: any;
  ingredienteAux: any;
  ingrediente_: any;
  pulgarPresionado: boolean;
  bandera: boolean;
  static touch: boolean;
  contador: number = 0;
  checkpoints: boolean[] = [true, true, true, true, true, true];
  platoSandwich: any;
  _x: number;
  _y: number;
  static x_: number;
  static y_: number;
  checkT: boolean[] = [false, false, false, false, false, false];
  track: any;
  trackT: any;

  graphics: Phaser.GameObjects.Graphics;
  graphicsPath: any = [];
  isMouseDown = false;

  posiciones: number[][] = [
    [100, 280],
    [200, 90],
    [280, 55],
    [360, 90],
    [420, 180],
  ];
  ingredientes: string[] = ["pan", "lechuga", "jamon", "queso", "tomate"];

  constructor() {
    super("NewScene");
  }

  preload() {
    // this.load.path = '/ar-kids-pwa/assets/img/'
    this.track = { ok: false, objetivo: "", accion: "", on: false };
    this.trackT = { ok: false, objetivo: "", accion: "", on: false };
    this.load.path = "/assets/img/";

    this.load.image("indice", "indice.png");
    this.load.image("medio", "medio.png");
    this.load.image("anular", "anular.png");
    this.load.image("menique", "menique.png");
    this.load.image("pulgar", "pulgar.png");
    this.load.image("table", "table.jpg");
    this.load.image("pan", "pan.png");
    this.load.image("tomate", "tomate.png");
    this.load.image("queso", "queso.png");
    this.load.image("queso", "queso.png");
    this.load.image("jamon", "jamon.png");
    this.load.image("lechuga", "lechuga.png");
    this.load.image("plato", "plato_sandwich.png");
  }

  create() {
    // console.log('enter create');
    this.input.addPointer(1);
    this.add.image(320, 180, "table").setDepth(-1);
    this.pulgar = this.add
      .image(100, 280, "pulgar")
      .setInteractive()
      .setDepth(-1);
    this.indice = this.add
      .image(200, 90, "indice")
      .setInteractive()
      .setDepth(-1);
    this.medio = this.add.image(280, 55, "medio").setInteractive().setDepth(-1);
    this.anular = this.add
      .image(360, 90, "anular")
      .setInteractive()
      .setDepth(-1);
    this.menique = this.add
      .image(420, 180, "menique")
      .setInteractive()
      .setDepth(-1);
    this.platoSandwich = this.add
      .image(550, 300, "plato")
      .setInteractive()
      .setDepth(-1);
    this.pulgar.name = "pulgar";
    this.pulgarPresionado = false;
    this.bandera = false;
    NewScene.touch = true;

    if (!this.game.device.input.touch) {
      console.log("entro");
      // this.pulgarPresionado=true;
      NewScene.touch = false;
    }

    console.log(NewScene.touch);

    let x, y, z;

    if (!NewScene.touch) {
      x = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      while (this.ingredientes[z] == "pan") {
        z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      }
      this.ingredienteAux = this.add
        .image(
          this.posiciones[x][0],
          this.posiciones[x][1],
          this.ingredientes[z]
        )
        .setInteractive();
      y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      while (x == y) {
        y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
      }
      this.ingrediente = this.add
        .image(this.posiciones[y][0], this.posiciones[y][1], "pan")
        .setInteractive();
      this.ingrediente.name = "pan";
    }

    // this.lechuga=this.add.image(380,80,"lechuga").setInteractive();
    // this.jamon=this.add.image(380,80,"jamon").setInteractive();
    // this.queso=this.add.image(200,80,"queso").setInteractive();
    // this.tomate=this.add.image(300,45,"tomate").setInteractive();
    // this.pan2=this.add.image(300,45,"pan").setInteractive();

    // this.input.setDraggable(this.pan);
    // this.input.setDraggable(this.tomate);
    // this.input.setDraggable(this.jamon);
    // this.input.setDraggable(this.lechuga);
    // this.input.setDraggable(this.queso);
    // this.input.setDraggable(this.pan2);

    // console.log(this.angular1.x);

    const eventos = Phaser.Input.Events;

    this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
      


      if (NewScene.touch) {
        if (gameObject.name == "pulgar") {
          this.pulgarPresionado = true;
          
        }

        if (this.pulgarPresionado && !this.bandera) {
          
          x = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          while (this.ingredientes[z] == "pan") {
            z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          }
          this.ingredienteAux = this.add
            .image(
              this.posiciones[x][0],
              this.posiciones[x][1],
              this.ingredientes[z]
            )
            .setInteractive();

          this.ingredienteAux.name = this.ingredientes[z];
          y = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          while (x == y) {
            y = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          }
          this.ingrediente = this.add
            .image(this.posiciones[y][0], this.posiciones[y][1], "pan")
            .setInteractive();
          this.ingrediente.name = "pan";
          this.bandera = true;
        }

        if (
          gameObject.name == "pan" &&
          this.pulgarPresionado &&
          !this.checkT[0]
        ) {
          gameObject.x = 560 - 10;
          gameObject.y = 300;
          gameObject.setScale(1.5);
          this.ingredienteAux.destroy();
          x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          while (z == 1) {
            z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          }
          this.ingredienteAux = this.add
            .image(
              this.posiciones[x][0],
              this.posiciones[x][1],
              this.ingredientes[z]
            )
            .setInteractive();
          this.ingredienteAux.name = this.ingredientes[z];

          y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          while (x == y) {
            y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          }
          this.ingrediente = this.add
            .image(this.posiciones[y][0], this.posiciones[y][1], "lechuga")
            .setInteractive();
          this.ingrediente.name = "lechuga";
          this.checkT[0] = true;
          this.track.ok = true;
          this.track.on = true;
          this.track.objetivo = "pan";
          this.track.accion = this.track.objetivo;
          
        } else {
          this.track.ok = false;
          if (this.track.accion == ""){
            this.track.on = false;

          }else{
            this.track.on = true;

          }
          this.track.objetivo = "pan";
          if (this.pulgarPresionado) {
            
            if (gameObject.name == this.ingredienteAux.name) {
              this.track.accion = this.ingredienteAux.name;

            } else if (gameObject.name != "pulgar") {
              this.track.accion = "vacío";
            }
          } else {
            this.track.accion = "Suelta pulgar";

          }
        }

        if (
          gameObject.name == "lechuga" &&
          this.pulgarPresionado &&
          this.checkT[0] &&
          !this.checkT[1]
        ) {
          gameObject.x = 557 - 10;
          gameObject.y = 303;
          gameObject.setScale(1.5);

          this.ingredienteAux.destroy();
          x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          while (z == 2) {
            z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
          }
          this.ingredienteAux = this.add
            .image(
              this.posiciones[x][0],
              this.posiciones[x][1],
              this.ingredientes[z]
            )
            .setInteractive();
          this.ingredienteAux.name = this.ingredientes[z];

          y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          while (x == y) {
            y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          }
          this.ingrediente = this.add
            .image(this.posiciones[y][0], this.posiciones[y][1], "jamon")
            .setInteractive();
          this.ingrediente.name = "jamon";
          this.checkT[1] = true;
          this.track.ok = true;
          this.track.on = true;
          this.track.objetivo = "lechuga";
          this.track.accion = this.track.objetivo;
        } else if (this.checkT[0] && !this.track.on) {
          this.track.ok = false;
          this.track.on = true;
          this.track.objetivo = "lechuga";
          if (this.pulgarPresionado) {
            if (gameObject.name == this.ingredienteAux.name) {
              this.track.accion = this.ingredienteAux.name;

            } else if (gameObject.name != "pulgar") {
              this.track.accion = "vacío";

            }
          } else {
            this.track.accion = "Suelta pulgar";
          }
        }

        if (
          gameObject.name == "jamon" &&
          this.pulgarPresionado &&
          !this.checkT[2] &&
          this.checkT[1]
        ) {
          gameObject.x = 558 - 10;
          gameObject.y = 303;
          gameObject.setScale(1.5);

          this.ingredienteAux.destroy();
          x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          while (z == 3) {
            z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          }
          this.ingredienteAux = this.add
            .image(
              this.posiciones[x][0],
              this.posiciones[x][1],
              this.ingredientes[z]
            )
            .setInteractive();
          this.ingredienteAux.name = this.ingredientes[z];

          y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          while (x == y) {
            y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          }
          this.ingrediente = this.add
            .image(this.posiciones[y][0], this.posiciones[y][1], "queso")
            .setInteractive();
          this.ingrediente.name = "queso";
          this.checkT[2] = true;
          this.track.ok = true;
          this.track.on = true;
          this.track.objetivo = "jamón";
          this.track.accion = this.track.objetivo;
        } else if (this.checkT[1] && !this.track.on){
          this.track.ok = false;
          this.track.on = true;
          this.track.objetivo = "jamón";
          if (this.pulgarPresionado) {
            if (gameObject.name == this.ingredienteAux.name) {
              this.track.accion = this.ingredienteAux.name;

            } else if (gameObject.name != "pulgar") {
              this.track.accion = "vacío";

            }
          } else {
            this.track.accion = "Suelta pulgar";
          }
        }

        if (
          gameObject.name == "queso" &&
          this.pulgarPresionado &&
          !this.checkT[3] &&
          this.checkT[2]
        ) {
          gameObject.x = 560 - 10;
          gameObject.y = 300;
          gameObject.setScale(1.5);

          this.ingredienteAux.destroy();
          x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          while (z == 4) {
            z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          }
          this.ingredienteAux = this.add
            .image(
              this.posiciones[x][0],
              this.posiciones[x][1],
              this.ingredientes[z]
            )
            .setInteractive();

          this.ingredienteAux.name = this.ingredientes[z];

          y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          while (x == y) {
            y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          }
          this.ingrediente = this.add
            .image(this.posiciones[y][0], this.posiciones[y][1], "tomate")
            .setInteractive();
          this.ingrediente.name = "tomate";
          this.checkT[3] = true;
          this.track.ok = true;
          this.track.on = true;
          this.track.objetivo = "queso";
          this.track.accion = this.track.objetivo;
        } else if (this.checkT[2] && !this.track.on){
          this.track.ok = false;
          this.track.on = true;
          this.track.objetivo = "queso";
          if (this.pulgarPresionado) {
            if (gameObject.name == this.ingredienteAux.name) {
              this.track.accion = this.ingredienteAux.name;
            } else if (gameObject.name != "pulgar") {
              this.track.accion = "vacío";
            }
          } else {
            this.track.accion = "Suelta pulgar";
          }
        }

        if (
          gameObject.name == "tomate" &&
          this.pulgarPresionado &&
          !this.checkT[4] &&
          this.checkT[3]
        ) {
          gameObject.x = 560 - 10;
          gameObject.y = 300;
          gameObject.setScale(1.5);

          this.ingredienteAux.destroy();
          x = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          while (z == 0) {
            z = Math.floor(Math.random() * (4 - 1 + 1) + 1);
          }
          this.ingredienteAux = this.add
            .image(
              this.posiciones[x][0],
              this.posiciones[x][1],
              this.ingredientes[z]
            )
            .setInteractive();
          this.ingredienteAux.name = this.ingredientes[z];

          y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          while (x == y) {
            y = Math.floor(Math.random() * (3 - 1 + 1) + 1);
          }
          this.ingrediente = this.add
            .image(this.posiciones[y][0], this.posiciones[y][1], "pan")
            .setInteractive();
          this.ingrediente.name = "pan2";
          this.checkT[4] = true;
          this.track.ok = true;
          this.track.on = true;
          this.track.objetivo = "tomate";
          this.track.accion = this.track.objetivo;
        } else if (this.checkT[3] && !this.track.on){
          this.track.ok = false;
          this.track.on = true;
          this.track.objetivo = "tomate";
          if (this.pulgarPresionado) {
            if (gameObject.name == this.ingredienteAux.name) {
              this.track.accion = this.ingredienteAux.name;

            } else if (gameObject.name != "pulgar") {
              this.track.accion = "vacío";
            }
          } else {
            this.track.accion = "Suelta pulgar";
          }
        }

        if (
          gameObject.name == "pan2" &&
          this.pulgarPresionado &&
          !this.checkT[5] &&
          this.checkT[4]
        ) {
          gameObject.x = 560 - 10;
          gameObject.y = 290;
          gameObject.setScale(1.5);

          this.ingredienteAux.destroy();
          this.checkT[5] = true;
          this.track.ok = true;
          this.track.on = true;
          this.track.objetivo = "pan 2";
          this.track.accion = this.track.objetivo;
        } else if (this.checkT[4] && !this.track.on){
          this.track.ok = false;
          this.track.on = true;
          this.track.objetivo = "pan 2";
          if (this.pulgarPresionado) {
            if (gameObject.name == this.ingredienteAux.name) {
              this.track.accion = this.ingredienteAux.name;

            } else if (gameObject.name != "pulgar") {
              this.track.accion = "vacío";
            }
          } else {
            this.track.accion = "Suelta pulgar";
          }
        }
      }
    });

    this.input.on(eventos.GAMEOBJECT_UP, (pointer, gameObject) => {
      if (gameObject.name == "pulgar" && NewScene.touch) {
        this.pulgarPresionado = false;
      }
    });

    // this.graphics = this.add.graphics();

    // this.add.text(10, 10, 'Multi touch drag test', { font: '16px Courier', fill: '#000000' });

    if (!NewScene.touch) {
      this.graphics = this.add.graphics({ x: 0, y: 0 });

      this.input.on("pointerdown", function (pointer) {
        NewScene.x_ = pointer.x;
        NewScene.y_ = pointer.y;
      });

      this.input.on(
        "pointermove",
        function (pointer) {
          if (pointer.isDown) {
            this.checkpoints[0] = true;
            this.checkpoints[1] = true;
            this.checkpoints[2] = true;
            this.checkpoints[3] = true;
            this.checkpoints[4] = true;
            this.checkpoints[5] = true;

            this.graphicsPath.push({ x: pointer.x, y: pointer.y });

            // if (pointer.x>this.posiciones[y][0]-40 && pointer.x<this.posiciones[y][0]+40 && pointer.y>this.posiciones[y][1]-40 && pointer.y<this.posiciones[y][1]+40 && this.contador==0){

            //   this.contador=1;

            // }

            if (
              pointer.x > 460 &&
              pointer.x < 630 &&
              pointer.y > 250 &&
              pointer.y < 340 &&
              this._x > this.posiciones[y][0] - 40 &&
              this._x < this.posiciones[y][0] + 40 &&
              this._y > this.posiciones[y][1] - 40 &&
              this._y < this.posiciones[y][1] + 40 &&
              this.contador == 0
            ) {
              this.contador = 1;
            }

            if (
              pointer.x > 460 &&
              pointer.x < 630 &&
              pointer.y > 250 &&
              pointer.y < 340 &&
              this._x > this.posiciones[y][0] - 40 &&
              this._x < this.posiciones[y][0] + 40 &&
              this._y > this.posiciones[y][1] - 40 &&
              this._y < this.posiciones[y][1] + 40 &&
              this.contador == 2
            ) {
              this.contador = 3;
            }

            if (
              pointer.x > 460 &&
              pointer.x < 630 &&
              pointer.y > 250 &&
              pointer.y < 340 &&
              this._x > this.posiciones[y][0] - 40 &&
              this._x < this.posiciones[y][0] + 40 &&
              this._y > this.posiciones[y][1] - 40 &&
              this._y < this.posiciones[y][1] + 40 &&
              this.contador == 4
            ) {
              this.contador = 5;
            }

            if (
              pointer.x > 460 &&
              pointer.x < 630 &&
              pointer.y > 250 &&
              pointer.y < 340 &&
              this._x > this.posiciones[y][0] - 40 &&
              this._x < this.posiciones[y][0] + 40 &&
              this._y > this.posiciones[y][1] - 40 &&
              this._y < this.posiciones[y][1] + 40 &&
              this.contador == 6
            ) {
              this.contador = 7;
            }

            if (
              pointer.x > 460 &&
              pointer.x < 630 &&
              pointer.y > 250 &&
              pointer.y < 340 &&
              this._x > this.posiciones[y][0] - 40 &&
              this._x < this.posiciones[y][0] + 40 &&
              this._y > this.posiciones[y][1] - 40 &&
              this._y < this.posiciones[y][1] + 40 &&
              this.contador == 8
            ) {
              this.contador = 9;
            }

            if (
              pointer.x > 460 &&
              pointer.x < 630 &&
              pointer.y > 250 &&
              pointer.y < 340 &&
              this._x > this.posiciones[y][0] - 40 &&
              this._x < this.posiciones[y][0] + 40 &&
              this._y > this.posiciones[y][1] - 40 &&
              this._y < this.posiciones[y][1] + 40 &&
              this.contador == 10
            ) {
              this.contador = 11;
            }
          } else {
            this._y = pointer.y;
            this._x = pointer.x;

            if (this.contador == 1) {
              this.ingredienteAux.destroy();
              this.ingrediente.destroy();
              this.ingrediente_ = this.add
                .image(560 - 10, 300, "pan")
                .setScale(1.3)
                .setInteractive();
              x = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (this.ingredientes[z] == "lechuga") {
                z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingredienteAux = this.add
                .image(
                  this.posiciones[x][0],
                  this.posiciones[x][1],
                  this.ingredientes[z]
                )
                .setInteractive()
                .setDepth(-1);
              y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (x == y) {
                y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingrediente = this.add
                .image(this.posiciones[y][0], this.posiciones[y][1], "lechuga")
                .setInteractive()
                .setDepth(-1);
              this.contador = 2;
              this.checkpoints[1] = false;
              this.track.ok = true;
              this.track.on = true;
              this.track.objetivo = "pan";
              this.track.accion = this.track.objetivo;
            } else if (this.contador < 1 && this.checkpoints[0]) {
              if (NewScene.x_ > 0 && NewScene.y_ > 0) {
                if (
                  NewScene.x_ > this.ingredienteAux.x - 40 &&
                  NewScene.x_ < this.ingredienteAux.x + 40 &&
                  NewScene.y_ > this.ingredienteAux.y - 40 &&
                  NewScene.y_ < this.ingredienteAux.y + 40
                ) {
                  this.track.accion = this.ingredienteAux.texture.key;
                } else {
                  this.track.accion = "vacío";
                }

                this.checkpoints[0] = false;
                this.track.on = true;
                this.track.ok = false;
                this.track.objetivo = "pan";
              }
            }

            if (this.contador == 3) {
              console.log("object");
              this.ingredienteAux.destroy();
              this.ingrediente.destroy();
              this.ingrediente_ = this.add
                .image(555 - 10, 305, "lechuga")
                .setScale(1.3)
                .setInteractive();
              x = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (this.ingredientes[z] == "jamon") {
                z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingredienteAux = this.add
                .image(
                  this.posiciones[x][0],
                  this.posiciones[x][1],
                  this.ingredientes[z]
                )
                .setInteractive()
                .setDepth(-1);
              y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (x == y) {
                y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingrediente = this.add
                .image(this.posiciones[y][0], this.posiciones[y][1], "jamon")
                .setInteractive()
                .setDepth(-1);
              this.contador = 4;
              this.checkpoints[2] = false;
              this.track.ok = true;
              this.track.on = true;
              this.track.objetivo = "lechuga";
              this.track.accion = this.track.objetivo;
            } else if (this.contador == 2 && this.checkpoints[1]) {
              if (
                NewScene.x_ > this.ingredienteAux.x - 40 &&
                NewScene.x_ < this.ingredienteAux.x + 40 &&
                NewScene.y_ > this.ingredienteAux.y - 40 &&
                NewScene.y_ < this.ingredienteAux.y + 40
              ) {
                this.track.accion = this.ingredienteAux.texture.key;
              } else {
                this.track.accion = "vacío";
              }
              this.checkpoints[1] = false;
              this.track.on = true;
              this.track.ok = false;
              this.track.objetivo = "lechuga";
            }

            if (this.contador == 5) {
              console.log("object");
              this.ingredienteAux.destroy();
              this.ingrediente.destroy();
              this.ingrediente_ = this.add
                .image(558 - 10, 303, "jamon")
                .setScale(1.3)
                .setInteractive();
              x = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (this.ingredientes[z] == "queso") {
                z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingredienteAux = this.add
                .image(
                  this.posiciones[x][0],
                  this.posiciones[x][1],
                  this.ingredientes[z]
                )
                .setInteractive()
                .setDepth(-1);
              y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (x == y) {
                y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingrediente = this.add
                .image(this.posiciones[y][0], this.posiciones[y][1], "queso")
                .setInteractive()
                .setDepth(-1);
              this.contador = 6;
              this.checkpoints[3] = false;
              this.track.ok = true;
              this.track.on = true;
              this.track.objetivo = "jamón";
              this.track.accion = this.track.objetivo;
            } else if (this.contador == 4 && this.checkpoints[2]) {
              if (
                NewScene.x_ > this.ingredienteAux.x - 40 &&
                NewScene.x_ < this.ingredienteAux.x + 40 &&
                NewScene.y_ > this.ingredienteAux.y - 40 &&
                NewScene.y_ < this.ingredienteAux.y + 40
              ) {
                this.track.accion = this.ingredienteAux.texture.key;
              } else {
                this.track.accion = "vacío";
              }
              this.checkpoints[2] = false;
              this.track.on = true;
              this.track.ok = false;
              this.track.objetivo = "jamón";
            }

            if (this.contador == 7) {
              console.log("object");
              this.ingredienteAux.destroy();
              this.ingrediente.destroy();
              this.ingrediente_ = this.add
                .image(558 - 10, 303, "queso")
                .setScale(1.3)
                .setInteractive();
              x = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (this.ingredientes[z] == "tomate") {
                z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingredienteAux = this.add
                .image(
                  this.posiciones[x][0],
                  this.posiciones[x][1],
                  this.ingredientes[z]
                )
                .setInteractive()
                .setDepth(-1);
              y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (x == y) {
                y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingrediente = this.add
                .image(this.posiciones[y][0], this.posiciones[y][1], "tomate")
                .setInteractive()
                .setDepth(-1);
              this.contador = 8;
              this.checkpoints[4] = false;
              this.track.ok = true;
              this.track.on = true;
              this.track.objetivo = "queso";
              this.track.accion = this.track.objetivo;
            } else if (this.contador == 6 && this.checkpoints[3]) {
              if (
                NewScene.x_ > this.ingredienteAux.x - 40 &&
                NewScene.x_ < this.ingredienteAux.x + 40 &&
                NewScene.y_ > this.ingredienteAux.y - 40 &&
                NewScene.y_ < this.ingredienteAux.y + 40
              ) {
                this.track.accion = this.ingredienteAux.texture.key;
              } else {
                this.track.accion = "vacío";
              }
              this.checkpoints[3] = false;
              this.track.on = true;
              this.track.ok = false;
              this.track.objetivo = "queso";
            }

            if (this.contador == 9) {
              this.ingredienteAux.destroy();
              this.ingrediente.destroy();
              this.ingrediente_ = this.add
                .image(560 - 10, 300, "tomate")
                .setScale(1.3)
                .setInteractive();
              x = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (this.ingredientes[z] == "pan") {
                z = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingredienteAux = this.add
                .image(
                  this.posiciones[x][0],
                  this.posiciones[x][1],
                  this.ingredientes[z]
                )
                .setInteractive()
                .setDepth(-1);
              y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              while (x == y) {
                y = Math.floor(Math.random() * (4 - 0 + 1) + 0);
              }
              this.ingrediente = this.add
                .image(this.posiciones[y][0], this.posiciones[y][1], "pan")
                .setInteractive()
                .setDepth(-1);
              this.contador = 10;
              this.checkpoints[5] = false;
              this.track.ok = true;
              this.track.on = true;
              this.track.objetivo = "tomate";
              this.track.accion = this.track.objetivo;
            } else if (this.contador == 8 && this.checkpoints[4]) {
              if (
                NewScene.x_ > this.ingredienteAux.x - 40 &&
                NewScene.x_ < this.ingredienteAux.x + 40 &&
                NewScene.y_ > this.ingredienteAux.y - 40 &&
                NewScene.y_ < this.ingredienteAux.y + 40
              ) {
                this.track.accion = this.ingredienteAux.texture.key;
              } else {
                this.track.accion = "vacío";
              }
              this.checkpoints[4] = false;
              this.track.on = true;
              this.track.ok = false;
              this.track.objetivo = "tomate";
            }

            if (this.contador == 11) {
              this.ingredienteAux.destroy();
              this.ingrediente.destroy();
              this.ingrediente_ = this.add
                .image(560 - 10, 290, "pan")
                .setScale(1.3)
                .setInteractive();
              this.track.ok = true;
              this.track.on = true;
              this.track.objetivo = "pan 2";
              this.track.accion = this.track.objetivo;
            } else if (this.contador == 10 && this.checkpoints[5]) {
              if (
                NewScene.x_ > this.ingredienteAux.x - 40 &&
                NewScene.x_ < this.ingredienteAux.x + 40 &&
                NewScene.y_ > this.ingredienteAux.y - 40 &&
                NewScene.y_ < this.ingredienteAux.y + 40
              ) {
                this.track.accion = this.ingredienteAux.texture.key;
              } else {
                this.track.accion = "vacío";
              }
              this.checkpoints[5] = false;
              this.track.on = true;
              this.track.ok = false;
              this.track.objetivo = "pan 2";
            }

            this.graphics.clear();
            this.graphicsPath.length = 0;
          }
        },
        this
      );
    }
  }

  update(time, delta) {
    // if(this.input.pointer1.x==0 && this.input.pointer1.x && this.input.pointer1.x && this.input.pointer1.x){

    //   this.angular1.destroy();

    // }
    // if (this.input.pointer1.x==)

    // if (this.input.pointer1.isDown || this.input.pointer2.isDown)
    // {
    //     this.graphics.clear();
    // }

    // this.graphics.fillStyle(0xff0000, 1);
    // this.graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 44, 44);

    // this.graphics.fillStyle(0x00ff00, 1);
    // this.graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 44, 44);

    if (!NewScene.touch) {
      let x, y, z;
      var length = this.graphicsPath.length;
      this.graphics.clear();
      this.graphics.lineStyle(10.0, 0xffff00, 1.0);
      this.graphics.beginPath();
      for (var i = 0; i < length; ++i) {
        var node = this.graphicsPath[i];

        if (i !== 0) {
          this.graphics.lineTo(node.x, node.y);
        } else {
          this.graphics.moveTo(node.x, node.y);
        }

        // x= Math.floor(Math.random()*(3-0+1)+0);
        // z= Math.floor(Math.random()*(3-0+1)+0);
        // y= Math.floor(Math.random()*(4-0+1)+0);

        // if (node.x>this.posiciones[x][0] && node.y>this.posiciones[x][1] ){

        //     this.ingrediente=this.add.image(560,300,"pan").setScale(1.3).setInteractive();

        // }
      }
      this.graphics.strokePath();
      this.graphics.closePath();
    }
  }
}

@Component({
  selector: "app-sandwich-motor-skills",
  templateUrl: "./sandwich-motor-skills.component.html",
  styleUrls: ["./sandwich-motor-skills.component.css"],
})
export class SandwichMotorSkillsComponent
  implements OnInit, DoCheck, OnDestroy {
  // juego: Juego={

  //   id:6667,
  //   nombre:'Valio',
  //   descripcion:'Si que valio'

  // }

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  juego: Juego;

  banderas: boolean[];

  constructor(private juegoService: JuegoService) {
    this.scene = new NewScene();
    this.banderas = [false, false, false, false, false, false];

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
        parent: "sandwichMotorSkills",
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
    if (!this.banderas[0]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[0] = true;
          }
        }
      }
    } else if (!this.banderas[1]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[1] = true;
          }
        }
      }
    } else if (!this.banderas[2]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[2] = true;
          }
        }
      }
    } else if (!this.banderas[3]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[3] = true;
          }
        }
      }
    } else if (!this.banderas[4]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[4] = true;
          }
        }
      }
    } else if (!this.banderas[5]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[5] = true;
          }
        }
      }
    }
    
    if (!this.banderas[0]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[0] = true;
          }
        }
      }
    } else if (!this.banderas[1]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[1] = true;
          }
        }
      }
    } else if (!this.banderas[2]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[2] = true;
          }
        }
      }
    } else if (!this.banderas[3]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[3] = true;
          }
        }
      }
    } else if (!this.banderas[4]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[4] = true;
          }
        }
      }
    } else if (!this.banderas[5]) {
      if (this.scene.track) {
        if (this.scene.track.on) {
          console.log(this.scene.track);
          this.scene.track.on = false;
          if (this.scene.track.ok) {
            this.banderas[5] = true;
          }
        }
      }
    }
  }

  ngOnDestroy() {
    this.phaserGame.destroy(true);
  }
}
