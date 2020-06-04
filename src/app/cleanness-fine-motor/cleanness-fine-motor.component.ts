import { Component, OnInit } from "@angular/core";

class NewScene extends Phaser.Scene {
  cuchara: any;
  cuchillo: any;
  plato: any;
  plato_hondo: any;
  vaso: any;
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

  constructor() {
    super("NewScene");
  }

  preload() {
    // this.load.path = "/assets/img/";
    this.load.path = "/ar-kids-pwa/assets/img/";
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
    this.add.image(320, 180, "fondo").setDepth(-1);
    this.check_cuchara = false;
    this.check_cuchillo = false;
    this.check_tenedor = false;
    this.check_servilleta = false;

    this.input.addPointer(1);

    this.cuchara = this.add.image(310, 250, "cuchara").setInteractive();
    this.cuchillo = this.add.image(310, 250, "cuchillo").setInteractive();
    this.tenedor = this.add.image(310, 250, "tenedor").setInteractive();
    this.plato = this.add.image(310, 250, "plato").setInteractive();
    this.plato_hondo = this.add.image(310, 250, "plato-hondo").setInteractive();
    this.vaso = this.add.image(310, 250, "vaso").setInteractive();
    this.servilleta = this.add.image(80, 250, "servilleta").setInteractive();
    this.plato_s = this.add.image(330, 250, "plato-s").setInteractive();
    this.plato_hondo_s = this.add
      .image(330, 250, "plato-hondo-s")
      .setInteractive();
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
    if (this.cuchara.x < 640 && !this.check_cuchara) {
      this.cuchara.x = this.cuchara.x + 1;
      // this.cuchillo.x=this.cuchillo.x+1.5;
      // this.tenedor.x=this.tenedor.x-1.5;
      // this.tenedor.y=this.tenedor.y+1;

      if (this.cuchara.x > 520 && this.cuchara.x < 560) {
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
          }
        }
      }
    } else {
      if (!this.check_cuchara) {
        this.cuchara.x = 110;
      } else {
        this.cuchara.x = 540;
        this.cuchara.y = 250;
      }
    }

    if (this.cuchillo.x < 640 && !this.check_cuchillo) {
      this.cuchillo.x = this.cuchillo.x + 1;
      // this.cuchillo.x=this.cuchillo.x+1.5;
      // this.tenedor.x=this.tenedor.x-1.5;
      // this.tenedor.y=this.tenedor.y+1;

      if (this.cuchillo.x > 450 && this.cuchillo.x < 490) {
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
      }
    } else {
      if (!this.check_cuchillo) {
        this.cuchillo.x = 110;
      } else {
        this.cuchillo.x = 470;
        this.cuchillo.y = 250;
      }
    }
    
    if (this.tenedor.x < 640 && !this.check_tenedor) {
      this.tenedor.x = this.tenedor.x + 1;
      // this.cuchillo.x=this.cuchillo.x+1.5;
      // this.tenedor.x=this.tenedor.x-1.5;
      // this.tenedor.y=this.tenedor.y+1;

      if (this.tenedor.x > 170 && this.tenedor.x < 210) {
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
          }
        }
      }
    } else {
      if (!this.check_tenedor) {
        this.tenedor.x = 110;
      } else {
        this.tenedor.x = 190;
        this.tenedor.y = 250;
      }
    }
    
    if (this.servilleta.x < 640 && !this.check_servilleta) {
      this.servilleta.x = this.servilleta.x + 1;
      // this.cuchillo.x=this.cuchillo.x+1.5;
      // this.tenedor.x=this.tenedor.x-1.5;
      // this.tenedor.y=this.tenedor.y+1;

      if (this.servilleta.x > 100 && this.servilleta.x < 180) {
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
      }
    } else {
      if (!this.check_servilleta) {
        this.servilleta.x = 80;
      } else {
        this.servilleta.x = 120;
        this.servilleta.y = 250;
      }
    }
    
    if (this.plato.x < 640 && !this.check_plato) {
      this.plato.x = this.plato.x + 1;
      // this.cuchillo.x=this.cuchillo.x+1.5;
      // this.tenedor.x=this.tenedor.x-1.5;
      // this.tenedor.y=this.tenedor.y+1;

      if (this.plato.x > 310 && this.plato.x < 350) {
        if (
          this.input.pointer1.x > 270 &&
          this.input.pointer1.y > 250 &&
          this.input.pointer1.x < 390 &&
          this.input.pointer1.y < 370
        ) {
          if (
            this.input.pointer2.x > 270 &&
            this.input.pointer2.y > 250 &&
            this.input.pointer2.x < 390 &&
            this.input.pointer2.y < 370
          ) {
            this.check_plato = true;
          }
        }
      }
    } else {
      if (!this.check_plato) {
        this.plato.x = 80;
      } else {
        this.plato.x = 330;
        this.plato.y = 250;
      }
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
}

@Component({
  selector: "app-cleanness-fine-motor",
  templateUrl: "./cleanness-fine-motor.component.html",
  styleUrls: ["./cleanness-fine-motor.component.css"],
})
export class CleannessFineMotorComponent implements OnInit {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      backgroundColor: "#34495e",
      scene: [NewScene],
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
}
