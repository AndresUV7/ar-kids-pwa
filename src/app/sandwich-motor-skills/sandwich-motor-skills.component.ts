import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {

  indice:any
  medio:any
  anular:any
  menique:any
  pulgar:any
  ingrediente:any
  ingredienteAux:any

  checkpoints: boolean[]=[false,false,false,false,false,false]

  posiciones:number[][]=[ [450,180],[380,80],[200,80],[300,45] ]
  ingredientes:string[]=["pan","lechuga","jamon","queso","tomate"]

  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {
 
    this.load.path = '/ar-kids-pwa/assets/img/'
    // this.load.path = '/assets/img/'

    this.load.image("indice","indice.png");
    this.load.image("medio","medio.png");
    this.load.image("anular","anular.png");
    this.load.image("menique","menique.png");
    this.load.image("pulgar","pulgar.png");
    this.load.image("table","table.jpg");
    this.load.image("pan","pan.png");
    this.load.image("tomate","tomate.png");
    this.load.image("queso","queso.png");
    this.load.image("queso","queso.png");
    this.load.image("jamon","jamon.png");
    this.load.image("lechuga","lechuga.png");
      
  }

  create() {
    // console.log('enter create');
   
    this.input.addPointer(4);
    this.add.image(320,180,"table").setDepth(-1);
    this.pulgar=this.add.image(this.input.pointer1.x,this.input.pointer1.y,"pulgar").setInteractive();
    this.indice=this.add.image(this.input.pointer2.x,this.input.pointer2.y,"indice").setInteractive();
    this.medio=this.add.image(this.input.pointer3.x,this.input.pointer3.y,"medio").setInteractive();
    this.anular=this.add.image(this.input.pointer4.x,this.input.pointer4.y,"anular").setInteractive();
    this.menique=this.add.image(this.input.pointer5.x,this.input.pointer5.y,"menique").setInteractive();
    
    
    
    console.log(this.checkpoints[5]);

    

      let x= Math.floor(Math.random()*(3-0+1)+0);    
      let z= Math.floor(Math.random()*(3-0+1)+0);    
      while(z==0){
        z= Math.floor(Math.random()*(3-0+1)+0);
      }
      this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
      let y= Math.floor(Math.random()*(3-0+1)+0);
      while(x==y){
        y= Math.floor(Math.random()*(3-0+1)+0)
      }
      this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"pan").setInteractive();
      this.ingrediente.name="pan";
    
    // this.lechuga=this.add.image(380,80,"lechuga").setInteractive();
    // this.jamon=this.add.image(380,80,"jamon").setInteractive();
    // this.queso=this.add.image(200,80,"queso").setInteractive();
    // this.tomate=this.add.image(300,45,"tomate").setInteractive();
    // this.pan2=this.add.image(300,45,"pan").setInteractive();
    

    // this.input.setDraggable(this.pan);
    // this.input.setDraggable(this.tomate);
    // this.input.setDraggable(this.jamon);
    // this.input.setDraggable(this.lechuga);
    // this.input.setDraggable(this.queso);
    // this.input.setDraggable(this.pan2);

    // console.log(this.angular1.x);     

    const eventos = Phaser.Input.Events;

    this.input.on(eventos.GAMEOBJECT_DOWN,(pointer, gameObject)=>{

      // console.log(gameObject.name)
      if (gameObject.name=="pan"){
        
        gameObject.x=580;
        gameObject.y=300;
        this.ingredienteAux.destroy();
        x= Math.floor(Math.random()*(3-0+1)+0);    
        z= Math.floor(Math.random()*(4-0+1)+0);    
        while(z==1){
          z= Math.floor(Math.random()*(4-0+1)+0);
        }
        this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
        y= Math.floor(Math.random()*(3-0+1)+0);
        while(x==y){
          y= Math.floor(Math.random()*(3-0+1)+0)
        }
        this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"lechuga").setInteractive();
        this.ingrediente.name="lechuga";
      }
      
      if (gameObject.name=="lechuga"){
        
        gameObject.x=578;
        gameObject.y=302;
        this.ingredienteAux.destroy();
        x= Math.floor(Math.random()*(3-0+1)+0);    
        z= Math.floor(Math.random()*(4-0+1)+0);    
        while(z==2){
          z= Math.floor(Math.random()*(4-0+1)+0);
        }
        this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
        y= Math.floor(Math.random()*(3-0+1)+0);
        while(x==y){
          y= Math.floor(Math.random()*(3-0+1)+0)
        }
        this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"jamon").setInteractive();
        this.ingrediente.name="jamon";
      }
      
      if (gameObject.name=="jamon"){
        
        gameObject.x=578;
        gameObject.y=303;
        this.ingredienteAux.destroy();
        x= Math.floor(Math.random()*(3-0+1)+0);    
        z= Math.floor(Math.random()*(4-0+1)+0);    
        while(z==3){
          z= Math.floor(Math.random()*(4-0+1)+0);
        }
        this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
        y= Math.floor(Math.random()*(3-0+1)+0);
        while(x==y){
          y= Math.floor(Math.random()*(3-0+1)+0)
        }
        this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"queso").setInteractive();
        this.ingrediente.name="queso";
      } 
      
      if (gameObject.name=="queso"){
        
        gameObject.x=580;
        gameObject.y=300;
        this.ingredienteAux.destroy();
        x= Math.floor(Math.random()*(3-0+1)+0);    
        z= Math.floor(Math.random()*(4-0+1)+0);    
        while(z==4){
          z= Math.floor(Math.random()*(4-0+1)+0);
        }
        this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
        y= Math.floor(Math.random()*(3-0+1)+0);
        while(x==y){
          y= Math.floor(Math.random()*(3-0+1)+0)
        }
        this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"tomate").setInteractive();
        this.ingrediente.name="tomate";
      }
    

      if (gameObject.name=="tomate"){
        
        gameObject.x=580;
        gameObject.y=300;
        this.ingredienteAux.destroy();
        x= Math.floor(Math.random()*(3-0+1)+0);    
        z= Math.floor(Math.random()*(4-0+1)+0);    
        while(z==0){
          z= Math.floor(Math.random()*(4-0+1)+0);
        }
        this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
        y= Math.floor(Math.random()*(3-0+1)+0);
        while(x==y){
          y= Math.floor(Math.random()*(3-0+1)+0)
        }
        this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"pan").setInteractive();
        this.ingrediente.name="pan2";
      }

      if (gameObject.name=="pan2"){
        
        gameObject.x=580;
        gameObject.y=290;
        this.ingredienteAux.destroy();
       
      }


    })


    // this.graphics = this.add.graphics();

    // this.add.text(10, 10, 'Multi touch drag test', { font: '16px Courier', fill: '#000000' });

    }

  update(time, delta){




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
1
  }
  


}



@Component({
  selector: 'app-sandwich-motor-skills',
  templateUrl: './sandwich-motor-skills.component.html',
  styleUrls: ['./sandwich-motor-skills.component.css']
})
export class SandwichMotorSkillsComponent implements OnInit {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;


  constructor() {

    this.config = {
      type: Phaser.AUTO,
      backgroundColor: '#FFFFFF',
      scene: [ NewScene ],
      physics: {
        default: 'arcade',
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'sandwichMotorSkills',
        width: 640,
        height: 360,  
      }
      
    };
 
  }
  

  ngOnInit() {

    
    this.phaserGame = new Phaser.Game(this.config);

  
  
    
  }

}
