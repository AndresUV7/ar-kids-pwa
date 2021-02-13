import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';


class NewScene extends Phaser.Scene {

  cepillo : any
  boca : any
  correcto: boolean
  
  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {
    // console.log('enter preload');
    this.load.path = '/assets/img/'
    // this.load.path = '/ar-kids-pwa/assets/img/'

    this.load.image("cepillo","cepillo.png");
    this.load.image("boca","boca2.png");
    this.correcto=false;
    
  }

  create() {
    // console.log('enter create');
    this.input.setDefaultCursor('url(/assets/img/cross.cur), pointer');

    this.cepillo=this.add.image(50,100,"cepillo").setInteractive();
    this.boca=this.add.image(300,180,"boca").setDepth(-1).setInteractive();
    this.boca.input.dropZone= true;
    
    this.boca.name="hola";
    
    const eventos = Phaser.Input.Events;
    
    this.input.setDraggable(this.cepillo);

    this.input.on(eventos.DRAG_START,(pointer, obj, dragX, dragY )=>{

      window.navigator.vibrate(200);

      obj.setScale(.9);

  })

  this.input.on(eventos.DRAG,(pointer, obj, dragX, dragY )=>{
    
   
      obj.x = dragX;
      obj.y = dragY;


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
    
    
    
    
    }

  update(time, delta){
    // console.log(delta);
    // this.pajaro1.x++;

    // if (this.pajaro1.x == 100){
    //   this.pajaro1.x=50;
      
    // }
  }

}

@Component({
  selector: 'app-juego2',
  templateUrl: './juego2.component.html',
  styleUrls: ['./juego2.component.css']
})
export class Juego2Component implements OnInit {

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
        parent: 'gameContainer2',
        width: 640,
        height: 360,  
      }
      
    };
 
  }
  

  ngOnInit() {

    
    this.phaserGame = new Phaser.Game(this.config);

    

  
    
  }



  // @HostListener('window:resize', ['$event'])
  // onResize(event?) {
  //  this.screenHeight = window.innerHeight;
  //  this.screenWidth = window.innerWidth;
  // }

  // @HostListener('window:resize', ['$event'])
  //   getScreenSize(event?) {
  //     this.screenHeight = window.innerHeight;
  //     this.screenWidth = window.innerWidth;
  //     this.config.scale.height=this.screenHeight;
  //     this.config.scale.width=this.screenWidth
  //     console.log("===========>",this.config.scale.height, this.config.scale.width);
  //   }

}
