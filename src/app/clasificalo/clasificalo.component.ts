import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  DoCheck,
} from "@angular/core";
declare function movimiento(): any;
declare function validar(): any;

class NewScene extends Phaser.Scene {
  sueter: any;
  jean: any;
  cursor: any;
  recta: any
  recta2: any
  recta3: any
  recta4: any
  rectas : any[];

  constructor() {
    super("NewScene");
  }

  preload() {
    this.load.path = "/assets/img/";
    this.load.image("sueter", "angular.png");
    this.load.image("jean", "jean.png");
    this.rectas = [null, null, null, null]
  
  }

  create() {
    this.sueter = this.physics.add.image(140, 60, "sueter")
    // this.jean = this.physics.add.image(350, 50, "jean")
    this.sueter.name = "sueter";
    this.recta = this.add.rectangle(0,0, 1300, 20,  0x6666ff);
    this.recta2 = this.add.rectangle(0,0, 20, 700,  0x6666ff);
    this.recta3 = this.add.rectangle(0,355, 1300, 10,  0x6666ff);
    this.recta4 = this.add.rectangle(635,5, 10, 700,  0x6666ff);
    this.rectas[0] = this.add.rectangle(605,240, 150, 10,  0x6666ff);
    this.rectas[1] = this.add.rectangle(530,295, 10, 120,  0x6666ff);

    // this.jean.name = "jean";
    this.physics.add.existing(this.recta);
    this.physics.add.existing(this.recta2);
    this.physics.add.existing(this.recta3);
    this.physics.add.existing(this.recta4);
  
    this.recta.body.immovable = true;
    this.recta.body.moves = false; 
    this.recta2.body.immovable = true;
    this.recta2.body.moves = false 
    this.recta3.body.immovable = true;
    this.recta3.body.moves = false
    this.recta4.body.immovable = true;
    this.recta4.body.moves = false

    // this.cursor = this.input.keyboard.createCursorKeys();
    // this.cursor.right.on('down', () =>{
    //   this.sueter.body.setVelocityX(100);
    // }) 
    
    // this.sueter.body.setCollideWorldBounds(true)
    // this.recta.body.setCollideWorldBounds(true)
    // this.recta2.body.setCollideWorldBounds(true)
    this.physics.add.collider(this.sueter, this.recta);  
    this.physics.add.collider(this.sueter, this.recta2);
    this.physics.add.collider(this.sueter, this.recta3);
    this.physics.add.collider(this.sueter, this.recta4);
  }

  update() {}

  izquierda() {
      this.sueter.body.setVelocityX(-50);
  }

  // mover(){
  //   this.sueter.x = this.sueter.x +3;
  // }
  derecha() {
      this.sueter.body.setVelocityX(50);
  }
  arriba() {
      this.sueter.body.setVelocityY(-50);
  }
  abajo() {
      this.sueter.body.setVelocityY(50);
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
        default: "arcade"
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


    if (this.scene.sueter) {

      if (validar()) {
        const x = movimiento().x *(180/Math.PI)
        const y = movimiento().y *(180/Math.PI)

        if (x > -110 && x < -70) {
          console.log("abajo")
          this.scene.abajo();
        } else if (x < 110 && x>70) {
          this.scene.arriba();
        } else if (y > -110 && y < -70) {
          this.scene.derecha();
        } else if ( y < 110 && y>70) {
          this.scene.izquierda();
        }
      }else{
        this.scene.sueter.body.setVelocityX(0);
        this.scene.sueter.body.setVelocityY(0);
      }
    }
  }

  probar() {}
}
