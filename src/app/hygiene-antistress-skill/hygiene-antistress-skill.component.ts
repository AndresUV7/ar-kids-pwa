import { Component, OnInit } from '@angular/core';

class NewScene extends Phaser.Scene {

  boca_der_sup:any
  boca_der_sup_2:any
  boca_izq_sup:any
  boca_izq_sup_2:any
  boca_der_inf:any
  boca_der_inf_2:any
  boca_izq_inf:any
  boca_izq_inf_2:any
  boca_abierta_1:any
  boca_abierta_2:any
  boca_abierta_3:any
  boca_abierta_4:any
  cepillo : any
  contador1 : number[]

  constructor() {
    super("NewScene");
  }

  preload(){

    this.contador1=[0,0,0,0,0,0,0,0];
    this.load.path = "/ar-kids-pwa/assets/img/";
    this.load.path = "/assets/img/";
    this.load.image("boca_der_sup_01_x", "boca-der-sup_01_x.png");
    this.load.image("boca_der_sup_01", "boca-der-sup_01.png");
    this.load.image("boca_der_sup_02", "boca-der-sup_02.png");
    this.load.image("boca_der_sup_02_x", "boca-der-sup_02_x.png");
    this.load.image("boca_izq_sup_01_x", "boca-izq-sup_01_x.png");
    this.load.image("boca_izq_sup_01", "boca-izq-sup_01.png");
    this.load.image("boca_izq_sup_02_x", "boca-izq-sup_02_x.png");
    this.load.image("boca_izq_sup_02", "boca-izq-sup_02.png");

    this.load.image("boca_der_inf_01", "boca-der-inf_01.png");
    this.load.image("boca_der_inf_01_x", "boca-der-inf_01_x.png");
    this.load.image("boca_der_inf_02", "boca-der-inf_02.png");
    this.load.image("boca_der_inf_02_x", "boca-der-inf_02_x.png");
    this.load.image("boca_izq_inf_01", "boca-izq-inf_01.png");
    this.load.image("boca_izq_inf_01_x", "boca-izq-inf_01_x.png");
    this.load.image("boca_izq_inf_02", "boca-izq-inf_02.png");
    this.load.image("boca_izq_inf_02_x", "boca-izq-inf_02_x.png");
    
    this.load.image("boca_abierta_1", "boca-abierta_01.png");
    this.load.image("boca_abierta_2", "boca-abierta_02.png");
    this.load.image("boca_abierta_3", "boca-abierta_03.png");
    this.load.image("boca_abierta_4", "boca-abierta_04.png");
    this.load.image("cepillo", "cepillo_dientes.png");

  }


  create(){

    
    this.boca_izq_sup = this.add.image(160, 145, "boca_izq_sup_01_x").setInteractive();
    this.boca_izq_sup_2 = this.add.image(280, 145, "boca_izq_sup_02_x").setInteractive();
    this.boca_der_sup = this.add.image(350, 145, "boca_der_sup_01_x").setInteractive();
    this.boca_der_sup_2 = this.add.image(470, 145, "boca_der_sup_02_x").setInteractive();

    this.boca_izq_inf = this.add.image(169, 273, "boca_izq_inf_01_x").setInteractive();
    this.boca_izq_inf_2 = this.add.image(289, 273, "boca_izq_inf_02_x").setInteractive();
    this.boca_der_inf = this.add.image(343, 273, "boca_der_inf_01_x").setInteractive();
    this.boca_der_inf_2 = this.add.image(463, 273, "boca_der_inf_02_x").setInteractive();

    this.cepillo = this.add.image(463, 273, "cepillo").setInteractive().setDepth(1);
    this.input.setDraggable(this.cepillo);
    



    const eventos = Phaser.Input.Events;

    this.input.on(eventos.DRAG,(pointer, obj, dragX, dragY )=>{
    
      
      obj.x = dragX;
      obj.y = dragY;

      if (obj.x > 60  && obj.x < 120 && obj.y > 170  && obj.y < 190 ){
        console.log("vale")

        if (this.contador1[0]<100){

          this.contador1[0]=this.contador1[0]+1;
        }
        if (this.contador1[0]==100){

          this.boca_izq_sup.destroy();
          this.boca_izq_sup = this.add.image(160, 145, "boca_izq_sup_01").setInteractive();
        }
      } 
      
      if (obj.x > 100  && obj.x < 180 && obj.y > 170  && obj.y < 190 ){
        console.log("vale2")
        if (this.contador1[1]<100){

          this.contador1[1]=this.contador1[1]+1;
        }
        if (this.contador1[1]==100){
          this.boca_izq_sup_2.destroy();
          this.boca_izq_sup_2 = this.add.image(280, 145, "boca_izq_sup_02").setInteractive();
        }
      }
      
      if (obj.x > 170  && obj.x < 270 && obj.y > 170  && obj.y < 190 ){
        console.log("vale3")
        if (this.contador1[2]<100){

          this.contador1[2]=this.contador1[2]+1;
        }
        if (this.contador1[2]==100){
          this.boca_der_sup.destroy();
          this.boca_der_sup = this.add.image(350, 145, "boca_der_sup_01").setInteractive();
        }
      }

      if (obj.x > 250  && obj.x < 360 && obj.y > 170  && obj.y < 190 ){
        console.log("vale4")
        if (this.contador1[3]<100){

          this.contador1[3]=this.contador1[3]+1;
        }
        if (this.contador1[3]==100){
          this.boca_der_sup_2.destroy();
          this.boca_der_sup_2 = this.add.image(470, 145, "boca_der_sup_02").setInteractive();
        }
      }
      
      if (obj.x > 60  && obj.x < 120 && obj.y > 220 && obj.y < 240 ){
        console.log("vale5")
        if (this.contador1[4]<100){

          this.contador1[4]=this.contador1[4]+1;
        }
        if (this.contador1[4]==100){
          this.boca_izq_inf.destroy();
          this.boca_izq_inf = this.add.image(169, 273, "boca_izq_inf_01").setInteractive();
        }
      } 

      if (obj.x > 100  && obj.x < 180 && obj.y > 220 && obj.y < 240 ){
        console.log("vale6")
        if (this.contador1[5]<100){

          this.contador1[5]=this.contador1[5]+1;
        }
        if (this.contador1[5]==100){
          this.boca_izq_inf_2.destroy();
          this.boca_izq_inf_2 = this.add.image(289, 273, "boca_izq_inf_02").setInteractive();
        }
      } 

      if (obj.x > 170  && obj.x < 270 && obj.y > 220 && obj.y < 240 ){
        console.log("vale7")
        if (this.contador1[6]<100){

          this.contador1[6]=this.contador1[6]+1;
        }
        if (this.contador1[6]==100){
          this.boca_der_inf.destroy();
          this.boca_der_inf = this.add.image(343, 273, "boca_der_inf_01").setInteractive();
        }
      }

      if (obj.x > 250  && obj.x < 360 && obj.y > 220 && obj.y < 240 ){
        console.log("vale8")
        if (this.contador1[7]<100){

          this.contador1[7]=this.contador1[7]+1;
        }
        if (this.contador1[7]==100){
          this.boca_der_inf_2.destroy();
          this.boca_der_inf_2 = this.add.image(463, 273, "boca_der_inf_02").setInteractive();
        }
      }

      if( this.contador1.reduce(function(a, b) { return a + b; }, 0) === 800){
        console.log("Boca limpia")
        this.boca_der_sup.destroy();
        this.boca_der_sup_2.destroy();
        this.boca_der_inf.destroy();
        this.boca_der_inf_2.destroy();
        this.boca_izq_inf.destroy();
        this.boca_izq_inf_2.destroy();
        this.boca_izq_sup.destroy();
        this.boca_izq_sup_2.destroy();
        
        this.cepillo.rotation = -1.57
        this.boca_abierta_1 = this.add.image(250, 100, "boca_abierta_1").setInteractive();
        this.boca_abierta_2 = this.add.image(365, 100, "boca_abierta_2").setInteractive();
        this.boca_abierta_3 = this.add.image(250, 261, "boca_abierta_3").setInteractive();
        this.boca_abierta_4 = this.add.image(365, 261, "boca_abierta_4").setInteractive();
        
      }
      
  })

    this.cameras.main.setBackgroundColor("#FFFFFF")
    

  }

  update(time, delta) {
  
   

    //logica
  }


}

@Component({
  selector: 'app-hygiene-antistress-skill',
  templateUrl: './hygiene-antistress-skill.component.html',
  styleUrls: ['./hygiene-antistress-skill.component.css']
})
export class HygieneAntistressSkillComponent implements OnInit {

  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;

  constructor() {
    this.config = {
      type: Phaser.AUTO,
      backgroundColor: "#34495e",
      scene: [NewScene],
      physics: {
        default: "arcade",
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "hygieneAntistressSkill",
        width: 640,
        height: 360,
      },
    };
  }

  ngOnInit() {
    this.phaserGame = new Phaser.Game(this.config);
  }

}
