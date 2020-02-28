import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';


class NewScene extends Phaser.Scene {

  cabeza : any
  tronco : any
  piernas : any
  pies : any
  sueter : any
  jean : any
  blusa: any
  botas: any
  medias: any
  gorra: any
  correcto: boolean
  correcto2: boolean
  blusaCorrecta: boolean
  botasCorrectas: boolean
  mediasCorrectas: boolean
  gorraCorrecta: boolean
  
  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {

    this.load.path = '/ar-kids-pwa/assets/img/'
    // this.load.path = '/assets/img/'

    this.load.image("cabeza","mujer1_01.png");
    this.load.image("tronco","mujer1_02.png");
    this.load.image("piernas","mujer1_03.png");
    this.load.image("pies","mujer1_04.png");
    this.load.image("sueter","sueter.png");
    this.load.image("jean","jean.png");
    this.load.image("blusa","blusa.png");
    this.load.image("botas","botas.png");
    this.load.image("medias","medias.png");
    this.load.image("gorra","gorra.png");
    this.load.image("back","girlRoon.jpg");
    
    
    
  }

  create() {
    // console.log('enter create');
    this.add.image(320,180,"back").setDepth(-1);
    this.cabeza=this.add.image(210,65,"cabeza").setDepth(-1).setInteractive();
    this.tronco=this.add.image(210,140,"tronco").setDepth(-1).setInteractive();
    this.piernas=this.add.image(210,258,"piernas").setDepth(-1).setInteractive();
    this.pies=this.add.image(210,345,"pies").setDepth(-1).setInteractive();
    // this.sueter=this.add.image(210,150,"sueter").setInteractive();
    this.blusa=this.add.image(109,202,"blusa").setDepth(-1).setInteractive();
    this.sueter=this.add.image(610,250,"sueter").setInteractive();
    // this.jean=this.add.image(218,253,"jean").setDepth(-1).setInteractive();
    this.jean=this.add.image(450,160,"jean").setDepth(-1).setInteractive();
    this.medias=this.add.image(118,107,"medias").setDepth(-1).setInteractive();
    this.botas=this.add.image(435,335,"botas").setInteractive();
    this.gorra=this.add.image(295,215,"gorra").setInteractive();
    // this.pajaro2=this.add.image(400,240,"pajaro2").setDepth(-1).setInteractive();
    // this.pajaro2.input.dropZone= true;
    // this.pajaro3=this.add.image(400,310,"pajaro2").setDepth(-1).setInteractive();
    this.piernas.name="piernas";
    this.tronco.name="tronco";
    this.pies.name="pies";
    this.cabeza.name="cabeza";
    this.sueter.name="sueter";
    this.jean.name="jean";
    this.blusa.name="blusa";
    this.botas.name="botas";
    this.medias.name="medias";
    this.gorra.name="gorra";
    this.correcto=false;
    this.correcto2=false;
    this.blusaCorrecta=false;
    this.botasCorrectas=false;
    this.mediasCorrectas=false;
    this.gorraCorrecta=false;

    this.piernas.input.dropZone = true;
    this.tronco.input.dropZone = true;
    this.pies.input.dropZone = true;
    this.cabeza.input.dropZone = true;
    
    this.input.setDraggable(this.sueter);
    this.input.setDraggable(this.jean);
    this.input.setDraggable(this.blusa);
    this.input.setDraggable(this.botas);
    this.input.setDraggable(this.medias);
    this.input.setDraggable(this.gorra);
    // this.input.setDraggable(this.pajaro1);

    const eventos = Phaser.Input.Events;
     
    this.input.on(eventos.DRAG_START,(pointer, obj, dragX, dragY )=>{
        
 
      if (obj.name=="sueter" && !this.correcto2 ){
        obj.setScale(.9);

      } else if (obj.name=="jean" && !this.correcto ){
        obj.setScale(.9);

      } else if (obj.name=="blusa" && !this.blusaCorrecta ){
        obj.setScale(.9);
      } else if (obj.name=="botas" && !this.botasCorrectas ){
        obj.setScale(.9);
      }else if (obj.name=="medias" && !this.mediasCorrectas ){
        obj.setScale(.9);
      }else if (obj.name=="gorra" && !this.gorraCorrecta ){
        obj.setScale(.9);
      }

    })

    this.input.on(eventos.DRAG,(pointer, obj, dragX, dragY )=>{
      


      
      if(obj.name=="jean" && !this.correcto){
        obj.x = dragX;
        obj.y = dragY;
      } 
      
      if(obj.name=="sueter" && !this.correcto2){
        obj.x = dragX;
        obj.y = dragY;
      }
      
      
      if(obj.name=="blusa" && !this.blusaCorrecta){
        obj.x = dragX;
        obj.y = dragY;
      }
      
      if(obj.name=="botas" && !this.botasCorrectas){
        obj.x = dragX;
        obj.y = dragY;
      } 
      
      
      if(obj.name=="medias" && !this.mediasCorrectas){
        obj.x = dragX;
        obj.y = dragY;
      }
      
      if(obj.name=="gorra" && !this.gorraCorrecta){
        obj.x = dragX;
        obj.y = dragY;
      }

    })



    this.input.on(eventos.DROP,(pointer, obj, target)=>{
      
      let bandera=false;

      console.log(obj.name);
      console.log(target.name);
      
      if(obj.name=="sueter" && target.name=="tronco"){
        
        if (this.blusaCorrecta){
          
          obj.x = 210
          obj.y = 147;
          this.correcto2=true;
          bandera=true;
        }
      }
      
      if(obj.name=="jean" && target.name=="piernas"){
        obj.x = 218
        obj.y = 250;
        this.correcto=true;
        bandera=true;
      }
      
      
      if(obj.name=="blusa" && target.name=="tronco"){
        obj.x = 213
        obj.y = 141;
        this.blusaCorrecta=true;
        bandera=true;
      }
      
      
      if(obj.name=="botas" && target.name=="pies"){
        
        if (this.mediasCorrectas && this.correcto){
          
          obj.x = 223;
          obj.y = 340;
          this.botasCorrectas=true;
          bandera=true;
        }
      }
      
      if(obj.name=="medias" && target.name=="pies"){
        obj.x = 225;
        obj.y = 350;
        this.mediasCorrectas=true;
        bandera=true;
      }
      
      
      
      if(obj.name=="gorra" && target.name=="cabeza"){
        
        if (this.correcto2 && this.blusaCorrecta){
          obj.x = 215;
          obj.y = 37;
          this.gorraCorrecta=true;
          bandera=true;

        }
      }

      if (!bandera){
        console.log("entro");
        obj.x = obj.input.dragStartX;
        obj.y = obj.input.dragStartY;
        
      }


      obj.setScale(1);
      

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
