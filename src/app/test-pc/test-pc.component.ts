import { Component, OnInit } from '@angular/core';
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {



  graphics:Phaser.GameObjects.Graphics;
  graphicsPath:any = [];
  isMouseDown = false;
  indice:any

  constructor() {
      
    super('NewScene');
    


    

  }

  preload() {
   
  
    this.load.path = '/ar-kids-pwa/assets/img/'

    this.load.image("indice","indice.png");
   
      
  }

  create() {

    
    this.graphics = this.add.graphics({x: 0, y: 0});
    
    
    
    this.input.on('pointermove', function (pointer) {
      
      
      if (pointer.isDown)
      {
        
        this.graphicsPath.push({x: pointer.x, y: pointer.y})
        
      }else{
        
        this.graphics.clear();
        this.graphicsPath.length = 0;
        
      }
      
    }, this);
    
  }
  
  update(time, delta){
    
    var length = this.graphicsPath.length;
    this.graphics.clear();
    this.graphics.lineStyle(10.0, 0xFFFF00, 1.0);
    this.graphics.beginPath();
    for (var i = 0; i < length; ++i)
    {
      var node = this.graphicsPath[i];
      
      if (i !== 0)
      {
        this.graphics.lineTo(node.x, node.y);
      }
      else
      {
        this.graphics.moveTo(node.x, node.y);
      }
      
      if (node.x>200 && node.y>100){
        
        this.indice=this.add.image(400,200,"indice").setInteractive();

      }
    }
    this.graphics.strokePath();
    this.graphics.closePath();


  }
  


}

@Component({
  selector: 'app-test-pc',
  templateUrl: './test-pc.component.html',
  styleUrls: ['./test-pc.component.css']
})
export class TestPcComponent implements OnInit {

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
        parent: 'test',
        width: 640,
        height: 360,   
      }
      
    };
 
  }
  

  ngOnInit() {

    
    this.phaserGame = new Phaser.Game(this.config);

  
 
    
  }

}
