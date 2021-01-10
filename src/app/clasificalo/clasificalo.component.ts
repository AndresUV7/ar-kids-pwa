import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  DoCheck,
} from "@angular/core";
declare function movimiento(): any;
declare function validar(): any;
import Phaser from 'phaser';
class NewScene extends Phaser.Scene {
  cursor: any;
  recta: any;
  recta2: any;
  recta3: any;
  recta4: any;
  rectas: any[];
  prenda: any;
  destinos: any[];
  rand: number;

  constructor() {
    super("NewScene");
  }

  preload() {
    this.load.path = "/assets/img/";
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
    this.destinos = [null, null, null, null];
  }

  create() {
    this.destinos[0] = this.physics.add.image(55, 60, "armario");
    this.destinos[1] = this.physics.add.image(595, 60, "lavar");
    this.destinos[2] = this.physics.add.image(583, 315, "planchar");
    this.destinos[3] = this.physics.add.image(65, 315, "tendedero");

    this.rand = Math.floor(Math.random() * (7 - 0) + 0);

    switch (this.rand) {
      case 0:
        this.prenda = this.physics.add.image(315, 60, "camisa_doblada");
        this.prenda.name = "camisa_doblada";

        break;
      case 1:
        this.prenda = this.physics.add.image(315, 60, "camiseta_arrugada");
        this.prenda.name = "camiseta_arrugada";

        break;
      case 2:
        this.prenda = this.physics.add.image(315, 60, "camiseta_mojada");
        this.prenda.name = "camiseta_mojada";
        break;
      case 3:
        this.prenda = this.physics.add.image(315, 60, "casaca_sucia");
        this.prenda.name =  "casaca_sucia";
        break;
      case 4:
        this.prenda = this.physics.add.image(315, 60, "pantalon_mojado");
        this.prenda.name =  "pantalon_mojado";
        break;
      case 5:
        this.prenda = this.physics.add.image(315, 60, "pantalon_arrugado");
        this.prenda.name =  "pantalon_arrugado";
        break;
      case 6:
        this.prenda = this.physics.add.image(315, 60, "pantalon_doblado");
        this.prenda.name =  "pantalon_doblado";
        break;
      case 7:
        this.prenda = this.physics.add.image(315, 60, "pantalon_doblado");
        this.prenda.name =  "pantalon_doblado";
        break;

      default:
        break;
    }


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

  update() {}

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
export class ClasificaloComponent implements OnInit, DoCheck {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;

  checkpoints: boolean[];

  constructor() {
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
  }

  probar() {}
}
