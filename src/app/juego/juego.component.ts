import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';


class NewScene extends Phaser.Scene {

  pajaro1 : any
  pajaro2 : any
  pajaro3 : any
  correcto: boolean
  
  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {
    // console.log('enter preload');
    // this.load.path = '/assets/img/'
    this.load.path = '/ar-kids-pwa/assets/img/'

    this.load.image("pajaro1","bird.png");
    this.load.image("pajaro2","bird_dos.png");
    this.correcto=false;
    
  }

  create() {
    // console.log('enter create');
    
    this.pajaro1=this.add.image(50,100,"pajaro1").setInteractive();
    this.pajaro2=this.add.image(400,110,"pajaro2").setDepth(-1).setInteractive();
    this.pajaro2.input.dropZone= true;
    this.pajaro3=this.add.image(400,310,"pajaro2").setDepth(-1).setInteractive();
    this.pajaro3.input.dropZone= true;
    this.pajaro3.name="hola";
    
    this.input.setDraggable(this.pajaro1);

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
        console.log("entro")
        obj.x = dropzone.x;
        obj.y = dropzone.y;
      }else{
        obj.x = obj.input.dragStartX;
        obj.y = obj.input.dragStartY;
      }

    })

    // this.input.on(eventos.POINTER_DOWN, (evento) =>{
    //     console.log("Se ha clicado en el canvas");
    //     // console.log(evento);
    // });
    
    // this.input.on(eventos.POINTER_UP, (evento) =>{
    //     console.log("Se ha levantado el puntero en el canvas");
    //     // console.log(evento);
    // });
    
    // this.input.on(eventos.POINTER_MOVE, (evento) =>{
    //     // console.log("Se ha movido el puntero en el canvas");
    //     // console.log(evento);
    //     if (evento.isDown){
    //       this.pajaro1.x = evento.worldX;
    //       this.pajaro1.y = evento.worldY;
    //     }
        
    // });

    // this.input.on(eventos.GAME_OVER,()=>{
    //     console.log("Has entrado en el lienzo")
    // });

    
    // this.input.on(eventos.GAME_OUT,()=>{
    //   console.log("Has salido del lienzo")
    // });

    // this.input.on(eventos.POINTER_DOWN_OUTSIDE,()=>{
    //   console.log("Has clicado fuera del lienzo")
    // });


    // this.input.on(eventos.POINTER_UP_OUTSIDE,()=>{
    //   console.log("Has levantado fuera del lienzo")
    // });

    // // this.input.on(eventos.GAMEOBJECT_DOWN,(pointer, gameObject)=>{
    // //     gameObject.setTint(0x00ff00);
    // // });
    
    // // this.input.on(eventos.GAMEOBJECT_UP,(pointer, gameObject)=>{
    // //     gameObject.clearTint();
    // // });

    // this.pajaro2.on(eventos.POINTER_DOWN, function() {
    //     this.setTint(0x0000ff);
    // });

    
    // this.pajaro2.on(eventos.POINTER_UP, function() {
    //   this.clearTint();
    // });

    // // this.input.setDraggable(this.pajaro1);
    // // this.input.setDraggable(this.pajaro2);

    // // this.input.on('dragstart', function (pointer, gameObject) {

    // //   this.children.bringToTop(gameObject);

    // // }, this);

    // // this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
  
    // //     gameObject.x = dragX;
    // //     gameObject.y = dragY;
  
    // // });
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