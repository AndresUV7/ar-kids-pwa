import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {

  angular1:any
  angular2:any
  graphics:any
  
  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {
 
    this.load.path = '/ar-kids-pwa/assets/img/'

    this.load.image("angular1","angular.png");
    this.load.image("angular2","angular.png");
    
  }

  create() {
    // console.log('enter create');
   
    this.input.addPointer(2);
    this.angular1=this.add.image(210,65,"angular1").setInteractive();
    this.angular2=this.add.image(410,165,"angular2").setInteractive();
    this.input.setDraggable(this.angular1);
    this.input.setDraggable(this.angular2);
  

    const eventos = Phaser.Input.Events;

    this.input.on(eventos.DRAG,(pointer, obj, dragX, dragY )=>{

        obj.x = dragX;
        obj.y = dragY;
      

    })


    this.graphics = this.add.graphics();

    this.add.text(10, 10, 'Multi touch drag test', { font: '16px Courier', fill: '#000000' });

    }

  update(time, delta){
    if (this.input.pointer1.isDown || this.input.pointer2.isDown || this.input.pointer3.isDown)
    {
        this.graphics.clear();
    }

    this.graphics.fillStyle(0xff0000, 1);
    this.graphics.fillRect(this.input.pointer1.x, this.input.pointer1.y, 44, 44);

    this.graphics.fillStyle(0x00ff00, 1);
    this.graphics.fillRect(this.input.pointer2.x, this.input.pointer2.y, 44, 44);

    this.graphics.fillStyle(0x0000ff, 1);
    this.graphics.fillRect(this.input.pointer3.x, this.input.pointer3.y, 44, 44);
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
