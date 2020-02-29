import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {

  indice:any
  medio:any
  anular:any
  menique:any
  pulgar:any
  pan:any
  tomate:any
  queso:any
  jamon:any
  lechuga:any
  pan2:any
  
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
   
    this.input.addPointer(1);
    this.add.image(320,180,"table").setDepth(-1);
    this.pulgar=this.add.image(110,280,"pulgar").setInteractive();
    this.indice=this.add.image(200,100,"indice").setInteractive();
    this.medio=this.add.image(300,65,"medio").setInteractive();
    this.anular=this.add.image(380,100,"anular").setInteractive();
    this.menique=this.add.image(450,200,"menique").setInteractive();
    this.pan=this.add.image(450,180,"pan").setInteractive();
    this.lechuga=this.add.image(380,80,"lechuga").setInteractive();
    this.jamon=this.add.image(380,80,"jamon").setInteractive();
    this.queso=this.add.image(200,80,"queso").setInteractive();
    this.tomate=this.add.image(300,45,"tomate").setInteractive();
    this.pan2=this.add.image(300,45,"pan").setInteractive();
    

    this.input.setDraggable(this.pan);
    this.input.setDraggable(this.tomate);
    this.input.setDraggable(this.jamon);
    this.input.setDraggable(this.lechuga);
    this.input.setDraggable(this.queso);
    this.input.setDraggable(this.pan2);

    // console.log(this.angular1.x);     

    const eventos = Phaser.Input.Events;

    this.input.on(eventos.DRAG,(pointer, obj, dragX, dragY )=>{

        obj.x = dragX;
        obj.y = dragY;
      

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
