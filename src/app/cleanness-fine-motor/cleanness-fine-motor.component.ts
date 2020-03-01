import { Component, OnInit } from '@angular/core';

class NewScene extends Phaser.Scene {


  cuchara:any
  cuchara2:any
  check:boolean

  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {
 
    // this.load.path = '/assets/img/'
    this.load.path = '/ar-kids-pwa/assets/img/'

    this.load.image("cuchara","cuchara.png");
    
      
  }

  create() {
    

    this.check=false;
    
    this.input.addPointer(1);
    
    this.cuchara=this.add.image(110,250,"cuchara").setInteractive();
    this.cuchara2=this.add.image(310,250,"cuchara").setInteractive();

    }

  update(time, delta){


    console.log("pointer x")
    console.log(this.input.pointer1.x)
    console.log("pointer y")
    console.log(this.input.pointer1.y)
    if(this.cuchara.x<640 && !this.check){
    
      this.cuchara.x=this.cuchara.x+2;

      if(this.input.pointer1.x>290 && this.input.pointer1.y>280 && this.input.pointer1.x<340 && this.input.pointer1.y<330){
        if(this.input.pointer2.x>290 && this.input.pointer2.y>280 && this.input.pointer2.x<340 && this.input.pointer2.y<330){
          this.check=true;
        }
      }
    }else{
      if (!this.check){
        
        this.cuchara.x=110;
      }else{
        this.cuchara.x=310;
        this.cuchara.y=250;

      }
    }

    
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
  selector: 'app-cleanness-fine-motor',
  templateUrl: './cleanness-fine-motor.component.html',
  styleUrls: ['./cleanness-fine-motor.component.css']
})
export class CleannessFineMotorComponent implements OnInit {

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
        parent: 'cleanessFineMotor',
        width: 640,
        height: 360,  
      }
      
    };
 
  }
  

  ngOnInit() {

    
    this.phaserGame = new Phaser.Game(this.config);

  
  
    
  }

}
