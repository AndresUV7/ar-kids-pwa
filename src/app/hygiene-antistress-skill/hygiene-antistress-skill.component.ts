import { Component, OnInit } from '@angular/core';

class NewScene extends Phaser.Scene {

  boca_der_sup:any
  boca_izq_sup:any
  boca_der_inf:any
  boca_izq_inf:any
  boca_abierta_1:any
  boca_abierta_2:any
  boca_abierta_3:any
  boca_abierta_4:any

  constructor() {
    super("NewScene");
  }

  preload(){

    this.load.path = "/ar-kids-pwa/assets/img/";
    this.load.path = "/assets/img/";
    this.load.image("boca_der_sup", "boca-der-sup.png");
    this.load.image("boca_izq_sup", "boca-izq-sup.png");
    this.load.image("boca_der_inf", "boca-der-inf.png");
    this.load.image("boca_izq_inf", "boca-izq-inf.png");
    this.load.image("boca_abierta_1", "boca-abierta_01.png");
    this.load.image("boca_abierta_2", "boca-abierta_02.png");
    this.load.image("boca_abierta_3", "boca-abierta_03.png");
    this.load.image("boca_abierta_4", "boca-abierta_04.png");

  }


  create(){

    this.boca_izq_sup = this.add.image(191, 145, "boca_izq_sup").setInteractive();
    this.boca_der_sup = this.add.image(430, 145, "boca_der_sup").setInteractive();
    this.boca_izq_inf = this.add.image(191, 273, "boca_izq_inf").setInteractive();
    this.boca_der_inf = this.add.image(430, 273, "boca_der_inf").setInteractive();

    this.cameras.main.setBackgroundColor("#FFFFFF")
    this.boca_abierta_1 = this.add.image(250, 100, "boca_abierta_1").setInteractive();
    this.boca_abierta_2 = this.add.image(365, 100, "boca_abierta_2").setInteractive();
    this.boca_abierta_3 = this.add.image(250, 261, "boca_abierta_3").setInteractive();
    this.boca_abierta_4 = this.add.image(365, 261, "boca_abierta_4").setInteractive();

  }

  update(time, delta) {
  
  }


}

@Component({
  selector: 'app-hygiene-antistress-skill',
  templateUrl: './hygiene-antistress-skill.component.html',
  styleUrls: ['./hygiene-antistress-skill.component.css']
})
export class HygieneAntistressSkillComponent implements OnInit {

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
        parent: "hygieneAntistressSkill",
        width: 640,
        height: 360,
      },
    };
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

}
