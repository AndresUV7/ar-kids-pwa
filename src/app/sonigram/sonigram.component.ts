import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
declare function pares(): any;
import Phaser from 'phaser';
import { Juego } from '../models/Juego';
import { JuegoService } from '../services/juegos/juego.service';
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
  selector: 'app-sonigram',
  templateUrl: './sonigram.component.html',
  styleUrls: ['./sonigram.component.css']
})
export class SonigramComponent implements OnInit, DoCheck, OnDestroy {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  juego: Juego
  constructor(public juegoService: JuegoService) {
    
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
    }; }

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
  }

  ngDoCheck(){
    pares();
  }

  ngOnDestroy(){
    this.phaserGame.destroy(true);

  }
}
