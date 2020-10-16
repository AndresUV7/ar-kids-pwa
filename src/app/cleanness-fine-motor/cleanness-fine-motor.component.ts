import { AfterViewInit, Component, OnDestroy, OnInit } from "@angular/core";

class NewScene extends Phaser.Scene {
  cuchara: any;
  cuchillo: any;
  plato: any;
  plato_hondo: any;
  vaso: any;
  aux1: any;
  aux2: any;
  aux3: any;
  tenedor: any;
  servilleta: any;
  cuchara_s: any;
  cuchillo_s: any;
  plato_s: any;
  plato_hondo_s: any;
  vaso_s: any;
  tenedor_s: any;
  servilleta_s: any;

  check_cuchara: boolean;
  check_cuchillo: boolean;
  check_tenedor: boolean;
  check_servilleta: boolean;
  check_plato: boolean;
  check_plato_hondo: boolean;
  check_vaso: boolean;

  static touch: boolean;

  constructor() {
    super("NewScene");
  }

  preload() {
    this.load.path = "/assets/img/";
    // this.load.path = "/ar-kids-pwa/assets/img/";
    this.load.image("fondo", "fondo-mesa.jpg");
    this.load.image("cuchara", "cuchara.png");
    this.load.image("tenedor", "tenedor.png");
    this.load.image("cuchillo", "cuchillo.png");
    this.load.image("servilleta", "servilleta.png");
    this.load.image("vaso", "vaso.png");
    this.load.image("plato", "plato.png");
    this.load.image("plato-hondo", "plato-hondo.png");
    this.load.image("cuchara-s", "cuchara-s.png");
    this.load.image("vaso-s", "vaso-s.png");
    this.load.image("servilleta-s", "servilleta-s.png");
    this.load.image("plato-s", "plato-s.png");
    this.load.image("tenedor-s", "tenedor-s.png");
    this.load.image("cuchillo-s", "cuchillo-s.png");
    this.load.image("plato-hondo-s", "plato-hondo-s.png");
  }

  create() {
    NewScene.touch = true;

    if (!this.game.device.input.touch) {
      console.log("entro");
      NewScene.touch = false;
    }

    this.add.image(320, 180, "fondo").setDepth(-1);
    this.check_cuchara = false;
    this.check_cuchillo = false;
    this.check_tenedor = false;
    this.check_servilleta = false;
    this.check_plato = false;
    this.check_plato_hondo = false;
    this.check_vaso = false;

    this.input.addPointer(1);

    this.input.pointer1.position.x = 0;
    this.input.pointer1.position.y = 0;

    // this.aux1 = this.add.image(330, 0, "plato-hondo").setInteractive();
    this.plato = this.add.image(330, 0, "plato").setInteractive();
    this.aux2 = this.add.image(640, 250, "plato-hondo").setInteractive();
    this.aux1 = this.add.image(0, 250, "vaso").setInteractive();
    this.aux3 = this.add.image(0, 340, "vaso").setInteractive();
   
    this.aux3.visible = false;
    this.plato_hondo_s = this.add
      .image(330, 250, "plato-hondo-s")
      .setInteractive();

    this.plato_s = this.add.image(330, 250, "plato-s").setInteractive();
    this.cuchara_s = this.add.image(540, 250, "cuchara-s").setInteractive();
    this.cuchillo_s = this.add.image(470, 250, "cuchillo-s").setInteractive();
    this.tenedor_s = this.add.image(190, 250, "tenedor-s").setInteractive();
    this.servilleta_s = this.add
      .image(120, 250, "servilleta-s")
      .setInteractive();
    this.vaso_s = this.add.image(500, 80, "vaso-s").setInteractive();
  }

  update(time, delta) {
    // console.log("pointer x")
    // console.log(this.input.pointer1.x)
    // console.log("pointer y")
    // console.log(this.input.pointer1.y)

    const keyCodes = Phaser.Input.Keyboard.KeyCodes;


    if (this.cuchara) {
      if (this.cuchara.x < 640 && !this.check_cuchara) {
        this.cuchara.x = this.cuchara.x + 4;
        this.cuchara.y = this.cuchara.y + 1.33;
        this.cuchara.rotation+=270;
        // this.cuchillo.x=this.cuchillo.x+1.5;
        // this.tenedor.x=this.tenedor.x-1.5;
        // this.tenedor.y=this.tenedor.y+1;

        if (this.cuchara.x > 520 && this.cuchara.x < 560) {
          if (!NewScene.touch) {
            if (
              Phaser.Input.Keyboard.JustDown(
                this.input.keyboard.addKey(keyCodes.C)
              )
            ) {

              
              this.check_cuchara = true;
              this.servilleta = this.add
                .image(500, 80, "servilleta")
                .setInteractive();
            }
          }

          if (
            this.input.pointer1.x > 480 &&
            this.input.pointer1.y > 250 &&
            this.input.pointer1.x < 600 &&
            this.input.pointer1.y < 370
          ) {
            if (
              this.input.pointer2.x > 480 &&
              this.input.pointer2.y > 250 &&
              this.input.pointer2.x < 600 &&
              this.input.pointer2.y < 370
            ) {
              this.check_cuchara = true;
              this.servilleta = this.add
                .image(500, 80, "servilleta")
                .setInteractive();
            }
          }
        }else{
          if (
            Phaser.Input.Keyboard.JustDown(
              this.input.keyboard.addKey(keyCodes.C)
            )
          ) {
            console.log("-1")
          }
        }
      } else {
        if (!this.check_cuchara) {
          this.cuchara.x = 110;
          this.cuchara.y = 100;
        } else {
          this.cuchara.x = 540;
          this.cuchara.y = 250;
          this.cuchara.rotation=0;
        }
      }
    }

    if (this.cuchillo) {
      if (this.cuchillo.x < 640 && !this.check_cuchillo) {
        this.cuchillo.x = this.cuchillo.x + 2;
        // this.cuchillo.x=this.cuchillo.x+1.5;
        // this.tenedor.x=this.tenedor.x-1.5;
        // this.tenedor.y=this.tenedor.y+1;

        if (this.cuchillo.x > 450 && this.cuchillo.x < 490) {
          if (!NewScene.touch) {
            if (
              Phaser.Input.Keyboard.JustDown(
                this.input.keyboard.addKey(keyCodes.C)
              )
            ) {
              this.check_cuchillo = true;
              
            }
          }
          if (
            this.input.pointer1.x > 410 &&
            this.input.pointer1.y > 250 &&
            this.input.pointer1.x < 540 &&
            this.input.pointer1.y < 370
          ) {
            if (
              this.input.pointer2.x > 410 &&
              this.input.pointer2.y > 250 &&
              this.input.pointer2.x < 540 &&
              this.input.pointer2.y < 370
            ) {
              this.check_cuchillo = true;
            }
          }
        }else{
          if (
            Phaser.Input.Keyboard.JustDown(
              this.input.keyboard.addKey(keyCodes.C)
            )
          ) {
            console.log("-1")
          }
        }
      } else {
        if (!this.check_cuchillo) {
          this.cuchillo.x = 110;
        } else {
          this.cuchillo.x = 470;
          this.cuchillo.y = 250;
        }
      }
    }

    if (this.tenedor) {
      if (this.tenedor.x < 640 && this.tenedor.x > 0 && !this.check_tenedor) {
        this.tenedor.x = this.tenedor.x - 3;
        // this.tenedor.x = this.tenedor.x + 1;
        // this.cuchillo.x=this.cuchillo.x+1.5;
        // this.tenedor.x=this.tenedor.x-1.5;
        // this.tenedor.y=this.tenedor.y+1;

        if (this.tenedor.x > 170 && this.tenedor.x < 210) {
          if (!NewScene.touch) {
            if (
              Phaser.Input.Keyboard.JustDown(
                this.input.keyboard.addKey(keyCodes.T)
              )
            ) {
              this.check_tenedor = true;
              this.cuchara = this.add
                .image(110, 100, "cuchara")
                .setInteractive();
            }
          }
          if (
            this.input.pointer1.x > 130 &&
            this.input.pointer1.y > 250 &&
            this.input.pointer1.x < 250 &&
            this.input.pointer1.y < 370
          ) {
            if (
              this.input.pointer2.x > 130 &&
              this.input.pointer2.y > 250 &&
              this.input.pointer2.x < 250 &&
              this.input.pointer2.y < 370
            ) {
              this.check_tenedor = true;
              this.cuchara = this.add
                .image(110, 100, "cuchara")
                .setInteractive();
            }
          }
        }else{
          if (
            Phaser.Input.Keyboard.JustDown(
              this.input.keyboard.addKey(keyCodes.T)
            )
          ) {
            console.log("-1")
          }
        }
      } else {
        if (!this.check_tenedor) {
          this.tenedor.x = 550;
        } else {
          this.tenedor.x = 190;
          this.tenedor.y = 250;
        }
      }
    }

    if (this.servilleta) {
      if (
        this.servilleta.x < 640 &&
        this.servilleta.x > 0 &&
        !this.check_servilleta
      ) {
        this.servilleta.x = this.servilleta.x - 2;
        this.servilleta.y = this.servilleta.y + 0.9;
        // this.cuchillo.x=this.cuchillo.x+1.5;
        // this.tenedor.x=this.tenedor.x-1.5;
        // this.tenedor.y=this.tenedor.y+1;

        if (this.servilleta.x > 100 && this.servilleta.x < 180) {
          if (!NewScene.touch) {
            if (
              Phaser.Input.Keyboard.JustDown(
                this.input.keyboard.addKey(keyCodes.S)
              )
            ) {
              this.check_servilleta = true;
            }
          }

          if (
            this.input.pointer1.x > 60 &&
            this.input.pointer1.y > 250 &&
            this.input.pointer1.x < 200 &&
            this.input.pointer1.y < 370
          ) {
            if (
              this.input.pointer2.x > 60 &&
              this.input.pointer2.y > 250 &&
              this.input.pointer2.x < 200 &&
              this.input.pointer2.y < 370
            ) {
              this.check_servilleta = true;
            }
          }
        }else{
          if (
            Phaser.Input.Keyboard.JustDown(
              this.input.keyboard.addKey(keyCodes.S)
            )
          ) {
            console.log("-1")
          }
        }
      } else {
        if (!this.check_servilleta) {
          this.servilleta.x = 500;
          this.servilleta.y = 80;
        } else {
          this.servilleta.x = 120;
          this.servilleta.y = 250;
        }
      }
    }

    if (this.plato.y < 500 && !this.check_plato) {
      this.plato.y = this.plato.y + 2;
      this.aux1.x = this.aux1.x + 6;
      this.aux2.x = this.aux2.x - 9;
      this.plato.rotation+=270;
      this.aux1.rotation+=270
      this.aux2.rotation+=270
      // this.aux2.y = this.aux1.y + 12;
      // this.cuchillo.x=this.cuchillo.x+1.5;
      // this.tenedor.x=this.tenedor.x-1.5;
      // this.tenedor.y=this.tenedor.y+1;

      if (this.plato.y > 200 && this.plato.y < 300) {
        if (!NewScene.touch) {
          if (
            Phaser.Input.Keyboard.JustDown(
              this.input.keyboard.addKey(keyCodes.P)
            )
          ) {
            console.log("press");
            this.check_plato = true;
            this.vaso = this.add.image(80, 80, "vaso").setInteractive();
          }
        }

        if (
          this.input.pointer1.x > 210 &&
          this.input.pointer1.y > 250 &&
          this.input.pointer1.x < 450 &&
          this.input.pointer1.y < 370
        ) {
          if (
            this.input.pointer2.x > 210 &&
            this.input.pointer2.y > 250 &&
            this.input.pointer2.x < 450 &&
            this.input.pointer2.y < 370
          ) {
            this.check_plato = true;
            this.vaso = this.add.image(80, 80, "vaso").setInteractive();
          }else{
            console.log("-1")
          }
        }else{
          // console.log("-1")
        }
      }else{
        if (
          Phaser.Input.Keyboard.JustDown(
            this.input.keyboard.addKey(keyCodes.P)
          )
        ) {
          console.log("-1")
        }
      }
    } else {
      if (!this.check_plato) {
        this.plato.y = 0;
        if (this.aux1.x > 640) {
          this.aux1.x = 0;
        }

        if (this.aux2.x < 0) {
          this.aux2.x = 640;
        }
        // this.aux2.y = 0;
      } else {
        this.plato.x = 330;
        this.plato.y = 250;
        this.plato.rotation=0
        this.aux1.destroy();
        this.aux2.destroy();
      }
    }

    if (this.plato_hondo) {
      if (
        this.plato_hondo.y < 360 &&
        this.plato_hondo.y > -100 &&
        !this.check_plato_hondo
      ) {
        this.plato_hondo.y = this.plato_hondo.y - 4;
        this.plato_hondo.rotation+=270;
        // this.cuchillo.x=this.cuchillo.x+1.5;
        // this.tenedor.x=this.tenedor.x-1.5;
        // this.tenedor.y=this.tenedor.y+1;

        if (
          this.plato_hondo.y > 180 &&
          this.plato_hondo.y < 320 &&
          this.check_plato
        ) {
          if (!NewScene.touch) {
            if (
              Phaser.Input.Keyboard.JustDown(
                this.input.keyboard.addKey(keyCodes.P)
              )
            ) {
              this.check_plato_hondo = true;
              this.cuchillo = this.add
                .image(0, 250, "cuchillo")
                .setInteractive();
              this.tenedor = this.add
                .image(640, 250, "tenedor")
                .setInteractive();
            }
          }
          if (
            this.input.pointer1.x > 200 &&
            this.input.pointer1.y > 250 &&
            this.input.pointer1.x < 440 &&
            this.input.pointer1.y < 370
          ) {
            if (
              this.input.pointer2.x > 200 &&
              this.input.pointer2.y > 250 &&
              this.input.pointer2.x < 440 &&
              this.input.pointer2.y < 370
            ) {
              this.check_plato_hondo = true;
              this.cuchillo = this.add
                .image(310, 250, "cuchillo")
                .setInteractive();
              this.tenedor = this.add
                .image(550, 250, "tenedor")
                .setInteractive();
            }
          }
        }else{
          if (
            Phaser.Input.Keyboard.JustDown(
              this.input.keyboard.addKey(keyCodes.P)
            )
          ) {
            console.log("-1")
          }
        }
      } else {
        if (!this.check_plato_hondo) {
          this.plato_hondo.y = 330;
        } else {
          this.plato_hondo.x = 330;
          this.plato_hondo.y = 250;
        }
      }
    }

    if (this.vaso) {
      this.aux3.visible = true;
      if (this.vaso.x < 640 && !this.check_vaso && this.check_plato) {
        this.vaso.x = this.vaso.x + 5;
        this.aux3.x = this.aux3.x + 4;
        this.aux3.y = this.aux3.y - 2;
        this.aux3.rotation+=270
        this.vaso.rotation+=270

        // this.cuchillo.x=this.cuchillo.x+1.5;
        // this.tenedor.x=this.tenedor.x-1.5;
        // this.tenedor.y=this.tenedor.y+1;

        if (this.vaso.x > 440 && this.vaso.x < 560 || (this.aux3.x > 450 && this.aux3.x < 550 && this.aux3.y > 50 && this.aux3.y < 110)) {
          if (!NewScene.touch) {
            if (
              Phaser.Input.Keyboard.JustDown(
                this.input.keyboard.addKey(keyCodes.V)
              )
            ) {
              this.check_vaso = true;
              this.plato_hondo = this.add
                .image(330, 250, "plato-hondo")
                .setInteractive();
            }
          }
          if (
            this.input.pointer1.x > 430 &&
            this.input.pointer1.y > 80 &&
            this.input.pointer1.x < 570 &&
            this.input.pointer1.y < 150
          ) {
            if (
              this.input.pointer2.x > 430 &&
              this.input.pointer2.y > 80 &&
              this.input.pointer2.x < 570 &&
              this.input.pointer2.y < 150
            ) {
              this.check_vaso = true;
              this.plato_hondo = this.add
                .image(330, 250, "plato-hondo")
                .setInteractive();
            }
          }
        }else{
          if (
            Phaser.Input.Keyboard.JustDown(
              this.input.keyboard.addKey(keyCodes.V)
            )
          ) {
            console.log("-1")
          }
        }
      } else {
        if (!this.check_vaso) {
          if (this.aux3.y < 0 && this.aux3.x > 640) {
            this.aux3.x = 0;
            this.aux3.y = 340;
          }

          this.vaso.x = 80;
        } else {
          this.vaso.x = 500;
          this.vaso.y = 80;
          this.vaso.rotation=0
          this.aux3.destroy();
        }
      }
    }

    this.input.pointer1.position.x = 0;
    this.input.pointer1.position.y = 0;

  }

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
}

@Component({
  selector: "app-cleanness-fine-motor",
  templateUrl: "./cleanness-fine-motor.component.html",
  styleUrls: ["./cleanness-fine-motor.component.css"],
})
export class CleannessFineMotorComponent implements OnInit, OnDestroy {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;

  constructor() {
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
        parent: "cleanessFineMotor",
        width: 640,
        height: 360,
      },
    };
  }

  ngOnInit() {

      
    this.phaserGame = new Phaser.Game(this.config);
    
   
  }

  ngOnDestroy(){

    this.phaserGame.destroy(true);
  }

 
  
}
