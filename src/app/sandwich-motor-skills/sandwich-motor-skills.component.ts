import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {

  indice:any
  medio:any
  anular:any
  menique:any
  pulgar:any
  
  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {
 
    this.load.path = '/ar-kids-pwa/assets/img/'
    // this.load.path = '/assets/img/'

    this.load.image("indice","indice.png");
    this.load.image("medio","indice.png");
    this.load.image("anular","indice.png");
    this.load.image("menique","indice.png");
    this.load.image("pulgar","pulgar.png");
    
  }

  create() {
    // console.log('enter create');
   
    this.input.addPointer(1);
    this.indice=this.add.image(90,310,"pulgar").setInteractive();
    this.indice=this.add.image(200,100,"indice").setInteractive();
    this.indice=this.add.image(300,65,"medio").setInteractive();
    this.indice=this.add.image(380,100,"anular").setInteractive();
    this.indice=this.add.image(450,200,"menique").setInteractive();
    

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
      backgroundColor: '#34495e',
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
