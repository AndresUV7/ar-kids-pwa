import { Component, OnInit, DoCheck } from '@angular/core';
import Phaser from 'phaser';
import { Juego } from '../models/Juego';
import { JuegoService } from '../services/juego.service';

class NewScene extends Phaser.Scene {

  indice:any
  medio:any
  anular:any
  menique:any
  pulgar:any
  ingrediente:any
  ingredienteAux:any
  ingrediente_:any
  pulgarPresionado: boolean
  bandera:boolean
  checkpoints: boolean[]=[false,false,false,false,false,false]
  static touch:boolean;
  contador: number=0
  

  graphics:Phaser.GameObjects.Graphics;
  graphicsPath:any = [];
  isMouseDown = false;

  posiciones:number[][]=[ [100,280],[200,90],[280,55],[360,90],[420,180]]
  ingredientes:string[]=["pan","lechuga","jamon","queso","tomate"]

  

  constructor() {
      
    super('NewScene');
    
    
  }

  preload() {
 
    // this.load.path = '/ar-kids-pwa/assets/img/'
    this.load.path = '/assets/img/'

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
    this.pulgar=this.add.image(100,280,"pulgar").setInteractive().setDepth(-1);
    this.indice=this.add.image(200,90,"indice").setInteractive().setDepth(-1);;
    this.medio=this.add.image(280,55,"medio").setInteractive().setDepth(-1);;
    this.anular=this.add.image(360,90,"anular").setInteractive().setDepth(-1);;
    this.menique=this.add.image(420,180,"menique").setInteractive().setDepth(-1);
    this.pulgar.name="pulgar";
    this.pulgarPresionado=false; 
    this.bandera=false;
    NewScene.touch=true;
    

    if(!this.game.device.input.touch){
      console.log("entro")
      this.pulgarPresionado=true;
      NewScene.touch=false;
    }
    
    console.log(this.checkpoints[5]);
    console.log("Tiene touch: "+ NewScene.touch)

    let x,y,z;


    if (!NewScene.touch){

      x= Math.floor(Math.random()*(4-0+1)+0);    
      z= Math.floor(Math.random()*(4-0+1)+0);    
      while(this.ingredientes[z]=="pan"){
        z= Math.floor(Math.random()*(4-0+1)+0);
      }
      this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
      y= Math.floor(Math.random()*(4-0+1)+0);
      while(x==y){
        y= Math.floor(Math.random()*(4-0+1)+0)
      }
      this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"pan").setInteractive();
    }

      
    
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
      
      
      if (NewScene.touch){
        if (gameObject.name=="pan" && this.pulgarPresionado){
          if (gameObject.name=="pulgar"){
         
            if (!this.bandera){
              
              x= Math.floor(Math.random()*(3-1+1)+1);    
              z= Math.floor(Math.random()*(4-1+1)+1);    
              while(z==0){
                z= Math.floor(Math.random()*(4-1+1)+1);
              }
              this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
              y= Math.floor(Math.random()*(3-1+1)+1);
              while(x==y){
                y= Math.floor(Math.random()*(3-1+1)+1)
              }
              this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"pan").setInteractive();
              this.ingrediente.name="pan";
              this.bandera=true
            }
            this.pulgarPresionado=true;  
          }
            
            gameObject.x=560;
            gameObject.y=300;
            gameObject.setScale(1.5);
            this.ingredienteAux.destroy();
            x= Math.floor(Math.random()*(3-1+1)+1);    
            z= Math.floor(Math.random()*(4-1+1)+1);    
            while(z==1){
              z= Math.floor(Math.random()*(4-1+1)+1);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
            y= Math.floor(Math.random()*(3-1+1)+1);
            while(x==y){
              y= Math.floor(Math.random()*(3-1+1)+1)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"lechuga").setInteractive();
            this.ingrediente.name="lechuga";
          }
          
          if (gameObject.name=="lechuga" && this.pulgarPresionado){
            
            gameObject.x=557;
            gameObject.y=303;
            gameObject.setScale(1.5);
    
            this.ingredienteAux.destroy();
            x= Math.floor(Math.random()*(3-1+1)+1);    
            z= Math.floor(Math.random()*(4-1+1)+1);    
            while(z==2){
              z= Math.floor(Math.random()*(4-0+1)+0);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
            y= Math.floor(Math.random()*(3-1+1)+1);
            while(x==y){
              y= Math.floor(Math.random()*(3-1+1)+1)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"jamon").setInteractive();
            this.ingrediente.name="jamon";
          }
          
          if (gameObject.name=="jamon" && this.pulgarPresionado){
            
            gameObject.x=558;
            gameObject.y=303;
            gameObject.setScale(1.5);
    
            this.ingredienteAux.destroy();
            x= Math.floor(Math.random()*(3-1+1)+1);    
            z= Math.floor(Math.random()*(4-1+1)+1);    
            while(z==3){
              z= Math.floor(Math.random()*(4-1+1)+1);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
            y= Math.floor(Math.random()*(3-1+1)+1);
            while(x==y){
              y= Math.floor(Math.random()*(3-1+1)+1)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"queso").setInteractive();
            this.ingrediente.name="queso";
          } 
          
          if (gameObject.name=="queso" && this.pulgarPresionado){
            
            gameObject.x=560;
            gameObject.y=300;
            gameObject.setScale(1.5);
    
            this.ingredienteAux.destroy();
            x= Math.floor(Math.random()*(3-1+1)+1);    
            z= Math.floor(Math.random()*(4-1+1)+1);    
            while(z==4){
              z= Math.floor(Math.random()*(4-1+1)+1);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
            y= Math.floor(Math.random()*(3-1+1)+1);
            while(x==y){
              y= Math.floor(Math.random()*(3-1+1)+1)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"tomate").setInteractive();
            this.ingrediente.name="tomate";
          }
        
    
          if (gameObject.name=="tomate" && this.pulgarPresionado){
            
            gameObject.x=560;
            gameObject.y=300;
            gameObject.setScale(1.5);
    
            this.ingredienteAux.destroy();
            x= Math.floor(Math.random()*(3-1+1)+1);    
            z= Math.floor(Math.random()*(4-1+1)+1);    
            while(z==0){
              z= Math.floor(Math.random()*(4-1+1)+1);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive();
            y= Math.floor(Math.random()*(3-1+1)+1);
            while(x==y){
              y= Math.floor(Math.random()*(3-1+1)+1)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"pan").setInteractive();
            this.ingrediente.name="pan2";
          }
    
          if (gameObject.name=="pan2" && this.pulgarPresionado){
            
            gameObject.x=560;
            gameObject.y=290;
            gameObject.setScale(1.5);
    
            this.ingredienteAux.destroy();
           
          }
        }
  
    


    })
    
    this.input.on(eventos.GAMEOBJECT_UP,(pointer, gameObject)=>{

      if (gameObject.name=="pulgar" && NewScene.touch){

        this.pulgarPresionado=false;
      }

    })


    // this.graphics = this.add.graphics();

    // this.add.text(10, 10, 'Multi touch drag test', { font: '16px Courier', fill: '#000000' });

    this.graphics = this.add.graphics({x: 0, y: 0});
    
    
    
    this.input.on('pointermove', function (pointer) {
      
      
      if (pointer.isDown)
      {
        
        this.graphicsPath.push({x: pointer.x, y: pointer.y})

        if (pointer.x>this.posiciones[y][0]-40 && pointer.x<this.posiciones[y][0]+40 && pointer.y>this.posiciones[y][1]-40 && pointer.y<this.posiciones[y][1]+40 && this.contador==0){
        
          this.contador=1;
           
        }
        
        if (pointer.x>this.posiciones[y][0]-40 && pointer.x<this.posiciones[y][0]+40 && pointer.y>this.posiciones[y][1]-40 && pointer.y<this.posiciones[y][1]+40 && this.contador==2){
        
          this.contador=3;
           
        }
        
        if (pointer.x>this.posiciones[y][0]-40 && pointer.x<this.posiciones[y][0]+40 && pointer.y>this.posiciones[y][1]-40 && pointer.y<this.posiciones[y][1]+40 && this.contador==4){
        
          this.contador=5;
           
        }

        if (pointer.x>this.posiciones[y][0]-40 && pointer.x<this.posiciones[y][0]+40 && pointer.y>this.posiciones[y][1]-40 && pointer.y<this.posiciones[y][1]+40 && this.contador==6){
        
          this.contador=7;
           
        }

        if (pointer.x>this.posiciones[y][0]-40 && pointer.x<this.posiciones[y][0]+40 && pointer.y>this.posiciones[y][1]-40 && pointer.y<this.posiciones[y][1]+40 && this.contador==8){
        
          this.contador=9;
           
        }
        
        if (pointer.x>this.posiciones[y][0]-40 && pointer.x<this.posiciones[y][0]+40 && pointer.y>this.posiciones[y][1]-40 && pointer.y<this.posiciones[y][1]+40 && this.contador==10){
        
          this.contador=11;
           
        }
        
        
        
        
        
      }else{
        
        console.log(this.contador);
        if (this.contador==1){
          console.log("object")
          this.ingredienteAux.destroy();
            this.ingrediente.destroy();
            this.ingrediente_=this.add.image(560,300,"pan").setScale(1.3).setInteractive();
            x= Math.floor(Math.random()*(4-0+1)+0);    
            z= Math.floor(Math.random()*(4-0+1)+0);    
            while(this.ingredientes[z]=="lechuga"){
              z= Math.floor(Math.random()*(4-0+1)+0);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive().setDepth(-1);
            y= Math.floor(Math.random()*(4-0+1)+0);
            while(x==y){
              y= Math.floor(Math.random()*(4-0+1)+0)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"lechuga").setInteractive().setDepth(-1);
            this.contador=2;
        }

        if (this.contador==3){
          console.log("object")
          this.ingredienteAux.destroy();
            this.ingrediente.destroy();
            this.ingrediente_=this.add.image(555,305,"lechuga").setScale(1.3).setInteractive();
            x= Math.floor(Math.random()*(4-0+1)+0);    
            z= Math.floor(Math.random()*(4-0+1)+0);    
            while(this.ingredientes[z]=="jamon"){
              z= Math.floor(Math.random()*(4-0+1)+0);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive().setDepth(-1);
            y= Math.floor(Math.random()*(4-0+1)+0);
            while(x==y){
              y= Math.floor(Math.random()*(4-0+1)+0)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"jamon").setInteractive().setDepth(-1);
            this.contador=4;
        }

        
        if (this.contador==5){
          console.log("object")
          this.ingredienteAux.destroy();
            this.ingrediente.destroy();
            this.ingrediente_=this.add.image(558,303,"jamon").setScale(1.3).setInteractive();
            x= Math.floor(Math.random()*(4-0+1)+0);    
            z= Math.floor(Math.random()*(4-0+1)+0);    
            while(this.ingredientes[z]=="queso"){
              z= Math.floor(Math.random()*(4-0+1)+0);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive().setDepth(-1);
            y= Math.floor(Math.random()*(4-0+1)+0);
            while(x==y){
              y= Math.floor(Math.random()*(4-0+1)+0)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"queso").setInteractive().setDepth(-1);
            this.contador=6;
        }

        if (this.contador==7){
          console.log("object")
          this.ingredienteAux.destroy();
            this.ingrediente.destroy();
            this.ingrediente_=this.add.image(558,303,"queso").setScale(1.3).setInteractive();
            x= Math.floor(Math.random()*(4-0+1)+0);    
            z= Math.floor(Math.random()*(4-0+1)+0);    
            while(this.ingredientes[z]=="tomate"){
              z= Math.floor(Math.random()*(4-0+1)+0);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive().setDepth(-1);
            y= Math.floor(Math.random()*(4-0+1)+0);
            while(x==y){
              y= Math.floor(Math.random()*(4-0+1)+0)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"tomate").setInteractive().setDepth(-1);
            this.contador=8;
        }

        if (this.contador==9){
          console.log("object tomato")
          this.ingredienteAux.destroy();
            this.ingrediente.destroy();
            this.ingrediente_=this.add.image(560,300,"tomate").setScale(1.3).setInteractive();
            x= Math.floor(Math.random()*(4-0+1)+0);    
            z= Math.floor(Math.random()*(4-0+1)+0);    
            while(this.ingredientes[z]=="pan"){
              z= Math.floor(Math.random()*(4-0+1)+0);
            }
            this.ingredienteAux=this.add.image(this.posiciones[x][0],this.posiciones[x][1],this.ingredientes[z]).setInteractive().setDepth(-1);
            y= Math.floor(Math.random()*(4-0+1)+0);
            while(x==y){
              y= Math.floor(Math.random()*(4-0+1)+0)
            }
            this.ingrediente=this.add.image(this.posiciones[y][0],this.posiciones[y][1],"pan").setInteractive().setDepth(-1);
            this.contador=10;
        }
        
        if (this.contador==11){
            this.ingredienteAux.destroy();
            this.ingrediente.destroy();
            this.ingrediente_=this.add.image(560,290,"pan").setScale(1.3).setInteractive();
           
        }

        this.graphics.clear();
        this.graphicsPath.length = 0;
        
      }
      
    }, this);

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

    let x, y,z;
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
      

      // x= Math.floor(Math.random()*(3-0+1)+0); 
      // z= Math.floor(Math.random()*(3-0+1)+0);    
      // y= Math.floor(Math.random()*(4-0+1)+0);   
      
      
      // if (node.x>this.posiciones[x][0] && node.y>this.posiciones[x][1] ){
        
      //     this.ingrediente=this.add.image(560,300,"pan").setScale(1.3).setInteractive();

      // }

    }
    this.graphics.strokePath();
    this.graphics.closePath();

  }
  


}



@Component({
  selector: 'app-sandwich-motor-skills',
  templateUrl: './sandwich-motor-skills.component.html',
  styleUrls: ['./sandwich-motor-skills.component.css']
})
export class SandwichMotorSkillsComponent implements OnInit, DoCheck {
  

  juego: Juego={

    id:6667,
    nombre:'Valio',
    descripcion:'Si que valio'
    
  }
  
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;

  checkpoint:boolean=false;

  constructor(private service:JuegoService ) {

    this.scene= new NewScene();

    this.config = {
      type: Phaser.AUTO,
      backgroundColor: '#34495e',
      scene: [ this.scene ],
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

  ngDoCheck(): void {
    if (this.scene.contador==3 && this.checkpoint==false){
      
      this.service.insertJuego(this.juego)
        .subscribe(data=>{
          console.log("agregado peyo");
        })
      this.checkpoint=true;
    }
  }



}
