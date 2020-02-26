import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';


class NewScene extends Phaser.Scene {

  cabeza : any
  tronco : any
  piernas : any
  pies : any
  sueter : any
  jean : any
  correcto: boolean
  
  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {

    this.load.path = 'ar-kids-pwa/assets/img/'

    this.load.image("cabeza","mujer1_01.png");
    this.load.image("tronco","mujer1_02.png");
    this.load.image("piernas","mujer1_03.png");
    this.load.image("pies","mujer1_04.png");
    this.load.image("sueter","sueter.png");
    this.load.image("jean","jean.png");
    this.load.image("pajaro2","bird_dos.png");
    this.load.image("back","girlRoon.jpg");
    this.correcto=false;
    
  }

  create() {
    // console.log('enter create');
    this.add.image(320,180,"back").setDepth(-1);
    this.cabeza=this.add.image(210,68,"cabeza").setDepth(-1);
    this.tronco=this.add.image(210,143,"tronco").setDepth(-1).setInteractive();
    this.piernas=this.add.image(210,261,"piernas").setDepth(-1).setInteractive();
    this.pies=this.add.image(210,348,"pies").setDepth(-1);
    // this.sueter=this.add.image(210,150,"sueter").setInteractive();
    this.sueter=this.add.image(410,150,"sueter").setInteractive();
    // this.jean=this.add.image(218,253,"jean").setDepth(-1).setInteractive();
    this.jean=this.add.image(518,253,"jean").setDepth(-1).setInteractive();
    // this.pajaro2=this.add.image(400,240,"pajaro2").setDepth(-1).setInteractive();
    // this.pajaro2.input.dropZone= true;
    // this.pajaro3=this.add.image(400,310,"pajaro2").setDepth(-1).setInteractive();
    this.piernas.input.dropZone = true;
    this.tronco.input.dropZone = true;
    this.piernas.name="hola";
    
    this.input.setDraggable(this.sueter);
    this.input.setDraggable(this.jean);
    // this.input.setDraggable(this.pajaro1);

    const eventos = Phaser.Input.Events;
     
    this.input.on(eventos.DRAG_START,(pointer, obj, dragX, dragY )=>{
        obj.setScale(.9);

    })

    this.input.on(eventos.DRAG,(pointer, obj, dragX, dragY )=>{
      
      if(!this.correcto){
        obj.x = dragX;
        obj.y = dragY;
      }

    })

    this.input.on(eventos.DRAG_OVER,(pointer, obj, target)=>{
      
      console.log(target.name);

      if(target.name==="hola"){
        this.correcto=true;
      }else{
        this.correcto=false;
      }
      obj.setScale(1);

    })


    this.input.on(eventos.DROP,(pointer, obj, dropzone)=>{
      
      if(this.correcto){
        obj.x = 218
        obj.y = 253;
      }else{
        obj.x = obj.input.dragStartX;
        obj.y = obj.input.dragStartY;
      }

    })


    }

  update(time, delta){

  }

}

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;


  constructor() {

    this.config = {
      type: Phaser.AUTO,
      backgroundColor: '#34495e',
      scene: [ NewScene ],
      physics: {
        default: 'arcade',
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'gameContainer',
        width: 640,
        height: 360,  
      }
      
    };
 
  }
  

  ngOnInit() {

    this.phaserGame = new Phaser.Game(this.config);


    
  }

}
