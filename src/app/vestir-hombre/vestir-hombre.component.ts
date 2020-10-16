import { Component, OnInit, OnDestroy } from '@angular/core';
import Phaser from "phaser";
import { Router } from "@angular/router";
import { DataService } from "../services/data.service";

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

  constructor() {
    super("NewScene");
  }

  preload() {
    this.load.path = "/assets/img/";

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
    this.correcto = [false, false, false, false, false, false];
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
        obj.setScale(0.9);
      }

      if (obj.name == "camiseta" && !this.correcto[1]) {
        obj.setScale(0.9);
      }

      if (obj.name == "calcetines" && !this.correcto[2]) {
        obj.setScale(0.9);
      }

      if (obj.name == "zapatos" && !this.correcto[3]) {
        obj.setScale(0.9);
      }

      if (obj.name == "bividi" && !this.correcto[4]) {
        obj.setScale(0.9);
      }

      if (obj.name == "gorra" && !this.correcto[5]) {
        obj.setScale(0.9);
      }
    });

    this.input.on(eventos.DRAG, (pointer, obj, dragX, dragY) => {
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

      // console.log(obj.name);
      // console.log(target.name);
      if (obj.name == "pantalon") {
        if (target.name == "piernas") {
          this.pantalon.setRotation(0);
          obj.x = 102.5;
          obj.y = 260;
          this.correcto[0] = true;
          bandera = true;
        }else{
          
        }
      }

      if (obj.name == "camiseta" && target.name == "tronco") {
        if (this.correcto[4]) {
          this.camiseta.setFlipX(false).setRotation(0);
          obj.x = 97.5;
          obj.y = 149.5;
          this.correcto[1] = true;
          bandera = true;
        }
      }

      if (obj.name == "calcetines" && target.name == "pies") {
        this.calcetines.setRotation(0);
        obj.x = 104;
        obj.y = 355;
        this.correcto[2] = true;
        bandera = true;
      }

      if (obj.name == "zapatos" && target.name == "pies") {
        if (this.correcto[2] && this.correcto[0]) {
          obj.x = 102;
          obj.y = 354;
          this.correcto[3] = true;
          bandera = true;
        }
      }

      if (obj.name == "bividi" && target.name == "tronco") {
        obj.x = 99;
        obj.y = 153.5;
        this.correcto[4] = true;
        bandera = true;
      }

      if (obj.name == "gorra" && target.name == "cabeza") {
        if (this.correcto[1]) {
          this.gorra.setFlipX(false).setRotation(0);
          obj.x = 104;
          obj.y = 47;
          this.correcto[5] = true;
          bandera = true;
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
export class VestirHombreComponent implements OnInit, OnDestroy {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;

  message: any;

  constructor(private router: Router, private service: DataService) {
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
    this.service.currentMessage.subscribe(
      (message) => (this.message = message)
    );
    console.log(this.message);
  }

  ngDoCheck(): void {
    // if (this.scene.aux === true){
    //   this.router.navigate(['actividades/listar']);
    //   this.scene.aux = false;
    // }
  }

  regresar() {
    this.router.navigate(["actividades/listar"]);
  }

  
  ngOnDestroy(){
    this.phaserGame.destroy(true);
  }
}
