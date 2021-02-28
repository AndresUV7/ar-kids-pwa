import { Component, OnInit, DoCheck } from '@angular/core';
import Phaser from 'phaser';
class NewScene extends Phaser.Scene {

  constructor() {
    super("NewScene");
  }

  preload(){

  }


  create(){

  }

  update(){

  }
}

@Component({
  selector: 'app-encuentralo-geo',
  templateUrl: './encuentralo-geo.component.html',
  styleUrls: ['./encuentralo-geo.component.css']
})
export class EncuentraloGeoComponent implements OnInit, DoCheck {
 phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
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

  ngDoCheck(){
    console.log("do it!")
  }

}
