import { Component, OnInit, DoCheck, HostListener, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../models/Video';
import { HIGIENE_VIDEOS } from '../../utils/videos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare function getTime(p): any;
declare function getActive(): any;
declare function mediaPlayer(p, q): any;
import Phaser from 'phaser';

class NewScene extends Phaser.Scene {

  text : any;
  question: string
  palabra1: any;
  palabra2: any;
  palabra3: any;
  palabra4: any;
  palabra5: any;
  palabra6: any;
  correcta1: any;
  correcta2: any;
  correcta3: any;
  correcta4: any;
  correcta5: any;
  correcta6: any;
  incorrecta1: any;
  incorrecta2: any;
  incorrecta3: any;
  incorrecta4: any;
  incorrecta5: any;
  incorrecta6: any;
  timeOK: any;
  rand: any;
  positions: any[];
  static trigger: boolean;
  constructor() {
    super("NewScene");
    this.timeOK = false;
    NewScene.trigger = false;
  }

  preload() {
    this.load.path = "/assets/img/";
    this.load.image("palabra1", "tapados.PNG");
    this.load.image("palabra2", "cortauñas.PNG");
    this.load.image("palabr3", "facil.PNG");
    this.load.image("palabra4", "toalla.PNG");
    this.load.image("palabra5", "lengua.PNG");
    this.load.image("palabra6", "agua.PNG");
    
    this.load.image("correcto1", "si.PNG");
    this.load.image("incorrecto1", "no.PNG"); 

    this.load.image("correcto2", "todos-los-dias.jpg");
    this.load.image("incorrecto2", "2-veces-semana.jpg");    

    this.load.image("correcto3", "manos.PNG");
    this.load.image("incorrecto3", "pies.PNG"); 

    this.load.image("incorrecto4", "solo-agua.jpg");
    this.load.image("correcto4", "agua-y-jabon.png");  


    this.load.image("correcto5", "uno.png");
    this.load.image("incorrecto5", "dos.png");


    this.load.image("correcto6", "diez.png");
    this.load.image("incorrecto6", "cinco.jpg");

   
  
    this.positions=[true, false]

  
  }


  create() {

    this.rand = Math.floor(Math.random() * (1 - 0) + 0);
    this.palabra1 = this.add.image(320, 250, "palabra1").setDisplaySize(400, 100);
    this.palabra2 = this.add.image(320, 250, "palabra2").setDisplaySize(400, 100);
    this.palabra3 = this.add.image(320, 250, "palabra3").setDisplaySize(400, 100);
    this.palabra4 = this.add.image(320, 250, "palabra4").setDisplaySize(400, 100);
    this.palabra5 = this.add.image(320, 250, "palabra5").setDisplaySize(400, 100);
    this.palabra6 = this.add.image(320, 250, "palabra6").setDisplaySize(400, 100);

    if (this.positions[this.rand]){
      
      this.correcta1 = this.add.image(150, 250, "correcto1").setDisplaySize(150,150);
      this.incorrecta1 = this.add.image(450, 250, "incorrecto1").setDisplaySize(150,150);  
      this.correcta2 = this.add.image(450, 250, "correcto2").setDisplaySize(150,150).setInteractive();
      this.incorrecta2 = this.add.image(150, 250, "incorrecto2").setDisplaySize(150,150);  
      this.correcta3 = this.add.image(450, 250, "correcto3").setDisplaySize(150,150);
      this.incorrecta3 = this.add.image(150, 250, "incorrecto3").setDisplaySize(150,150);
      this.correcta4 = this.add.image(150, 250, "correcto4").setDisplaySize(150,150);
      this.incorrecta4 = this.add.image(450, 250, "incorrecto4").setDisplaySize(150,150);
      this.correcta5 = this.add.image(150, 250, "correcto5").setDisplaySize(150,150);
      this.incorrecta5 = this.add.image(450, 250, "incorrecto5").setDisplaySize(150,150);
      this.correcta6 = this.add.image(450, 250, "correcto6").setDisplaySize(150,150);
      this.incorrecta6 = this.add.image(150, 250, "incorrecto6").setDisplaySize(150,150);

    }else{
      this.correcta1 = this.add.image(450, 250, "correcto1").setDisplaySize(150,150);
      this.incorrecta1 = this.add.image(150, 250, "incorrecto1").setDisplaySize(150,150);  
      this.correcta2 = this.add.image(150, 250, "correcto2").setDisplaySize(150,150).setInteractive();
      this.incorrecta2 = this.add.image(450, 250, "incorrecto2").setDisplaySize(150,150);  
      this.correcta3 = this.add.image(150, 250, "correcto3").setDisplaySize(150,150);
      this.incorrecta3 = this.add.image(450, 250, "incorrecto3").setDisplaySize(150,150);
      this.correcta4 = this.add.image(450, 250, "correcto4").setDisplaySize(150,150);
      this.incorrecta4 = this.add.image(150, 250, "incorrecto4").setDisplaySize(150,150);
      this.correcta5 = this.add.image(150, 250, "correcto5").setDisplaySize(150,150);
      this.incorrecta5 = this.add.image(450, 250, "incorrecto5").setDisplaySize(150,150);
      this.correcta6 = this.add.image(450, 250, "correcto6").setDisplaySize(150,150);
      this.incorrecta6 = this.add.image(150, 250, "incorrecto6").setDisplaySize(150,150);
    }

    this.correcta2.name = "respuesta";
    
    console.log(this.correcta2.name);
    this.palabra1.setVisible(false);
    this.palabra2.setVisible(false);
    this.palabra3.setVisible(false);
    this.palabra4.setVisible(false);
    this.palabra5.setVisible(false);
    this.palabra6.setVisible(false);
    this.correcta1.setVisible(false);
    this.incorrecta1.setVisible(false);    
    this.correcta2.setVisible(false);
    this.incorrecta2.setVisible(false);   
    this.correcta3.setVisible(false);
    this.incorrecta3.setVisible(false);    
    this.correcta4.setVisible(false);
    this.incorrecta4.setVisible(false);    
    this.correcta5.setVisible(false);
    this.incorrecta5.setVisible(false);
    this.correcta6.setVisible(false);
    this.incorrecta6.setVisible(false);
    
    this.text = this.add.text(0, 100 ,"" , {
      color : "#3f51b5",
      fontSize : 35,
      fontFamily: '"Poppins", sans-serif',
      fontStyle: 'bold',
      wordWrap: { width: 640, useAdvancedWrap: true }
    });

    
    const eventos = Phaser.Input.Events;

    
    //  this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {
    //         gameObject.setTint(0x00ff00);
    //     });
    this.input.on(eventos.GAMEOBJECT_DOWN, (pointer, gameObject) => {

      if(gameObject.name == 'respuesta'){
        gameObject.setTint(0x00ff00);
          
        setTimeout(() => {
          
          NewScene.trigger = true;
        }, 3000);


      }
    })
  

  }

  update() {

  }

  actualizaPregunta(pregunta : string){
    this.text.setText(pregunta);

  }

  
}
@Component({
  selector: 'app-ar-box',
  templateUrl: './ar-box.component.html',
  styleUrls: ['./ar-box.component.css']
})

export class ArBoxComponent implements OnInit, AfterViewChecked{


  
  name = 'Set iframe source';
  url: string = "http://127.0.0.1:8081/prueba.html";
  urlSafe: SafeResourceUrl;

  timeMins : number[];
  timeMinsAux : number[];
  playList : Video[];
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  videoActive: number;
  respondio: boolean[];
  completo: boolean[];
  hw : boolean;
  palabra:string;
  objExp: any;
  



  constructor(private router: Router, public sanitizer: DomSanitizer) {
    this.scene = new NewScene();
    this.objExp = {'position': 'fixed'}

    this.config = {
      type: Phaser.AUTO,
      transparent: true,
      scene: [this.scene],
      physics: {
        default: "arcade"
      },
      scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "gameContainer",
        width: 640,
        height: 360,
      },
    };

  }


  ngOnInit() {
    this.palabra ="XXX";
    this.hw = false;
    this.playList = HIGIENE_VIDEOS;
    this.timeMins = [0, 0]
    this.timeMinsAux = [0, 0]
    this.respondio = [false, false, false, false, false, false];
    this.completo = [false, false, false, false, false, false];
    
    this.phaserGame = new Phaser.Game(this.config);

    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

    
  }

  @HostListener('window:message', ['$event'])
  onMessage(e) {
    // if (e.origin != "https://192.168.100.4:8081") { // set your origin
    //   return false;
    // }
    if (e.data.for == "user") {
      console.log(e.data.data);
      this.palabra = e.data.data;
      if (e.data.data.toLowerCase() == this.playList[getActive()].respuestas2[0].toLowerCase()){
        
        this.completar();
      }
    }
  }

  ngAfterViewChecked(){

        if (getActive()==-1){
          this.limpiar();
          this.scene.actualizaPregunta("");
        }

        if(NewScene.trigger){

          this.responder();
          NewScene.trigger=false;

        }
    
        if (getActive()>-1){
        this.timeMins = this.playList[getActive()].checkpoints;
        if (JSON.stringify(this.timeMinsAux)!==JSON.stringify(this.timeMins)){
          this.timeMinsAux = this.timeMins;
          console.log(this.timeMins)
        }


        console.log(Math.floor(getTime(getActive())))
        if (Math.floor(getTime(getActive())) == this.timeMins[0] && !this.respondio[getActive()] ){
          this.limpiar();
          this.objExp = {'position': 'fixed','z-index':1}
          this.scene.actualizaPregunta(this.playList[getActive()].preguntas[0]);
          mediaPlayer(0, getActive());
          switch (getActive()) {
            case 0:
              this.scene.correcta1.setVisible(true);
            this.scene.incorrecta1.setVisible(true);
              break;
            case 1:
              this.scene.correcta2.setVisible(true);
          this.scene.incorrecta2.setVisible(true);
              break;
            case 2:
              this.scene.correcta3.setVisible(true);
          this.scene.incorrecta3.setVisible(true);
              break;
            case 3:
              this.scene.correcta4.setVisible(true);
          this.scene.incorrecta4.setVisible(true);
              break;
            case 4:
              this.scene.correcta5.setVisible(true);
          this.scene.incorrecta5.setVisible(true);
              break;
            case 5:
              this.scene.correcta6.setVisible(true);
          this.scene.incorrecta6.setVisible(true);
              break;
          
            default:
              break;
          }
          
          
        }else if (Math.floor(getTime(getActive())) == this.timeMins[1] && !this.completo[getActive()] ){
          this.limpiar();
          this.objExp = {'position': 'fixed','z-index':1}
          mediaPlayer(0, getActive());
          
          switch (getActive()) {
            case 0:
              this.scene.palabra1.setVisible(true);
              break;
            case 1:
              this.scene.palabra2.setVisible(true);
              break;
            case 2:
              this.scene.palabra3.setVisible(true);
              break;
            case 3:
              this.scene.palabra4.setVisible(true);
              break;
            case 4:
              this.scene.palabra5.setVisible(true);
              break;
            case 5:
              this.scene.palabra6.setVisible(true);
              break;
          
            default:
              break;
          }

          this.hw = true;
          this.scene.actualizaPregunta(this.playList[getActive()].preguntas[1]);

        }
        
      }
  
    
  
    


  }

  salir(){
    this.router.navigate(["/"]);
    
  }

  responder(){
    this.objExp = {'position': 'fixed'}
    mediaPlayer(1, getActive());
    this.respondio[getActive()] = true;
    this.scene.text.setText("");
    switch (getActive()) {
      case 0:
        this.scene.correcta1.setVisible(false);
    this.scene.incorrecta1.setVisible(false)
        break;
      case 1:
        this.scene.correcta2.setVisible(false);
    this.scene.incorrecta2.setVisible(false);
        break;
      case 2:
        this.scene.correcta3.setVisible(false);
    this.scene.incorrecta3.setVisible(false);
        break;
      case 3:
        this.scene.correcta4.setVisible(false);
    this.scene.incorrecta4.setVisible(false);
        break;
      case 4:
        this.scene.correcta5.setVisible(false);
    this.scene.incorrecta5.setVisible(false);
        break;
      case 5:
        this.scene.correcta6.setVisible(false);
    this.scene.incorrecta6.setVisible(false);
        break;
    
      default:
        break;
    }
    
  }
  
  completar(){
    this.objExp = {'position': 'fixed'}
    mediaPlayer(1, getActive());
    this.completo[getActive()] = true;
    this.scene.text.setText("");
    switch (getActive()) {
      case 0:
        this.scene.palabra1.setVisible(false);
        break;
      case 1:
        this.scene.palabra2.setVisible(false);
        break;
      case 2:
        this.scene.palabra3.setVisible(false);
        break;
      case 3:
        this.scene.palabra4.setVisible(false);
        break;
      case 4:
        this.scene.palabra5.setVisible(false);
        break;
      case 5:
        this.scene.palabra6.setVisible(false);
        break;
    
      default:
        break;
    }
    this.hw = false;
  }

  limpiar(){
    this.scene.palabra1.setVisible(false);
    this.scene.palabra2.setVisible(false);
    this.scene.palabra3.setVisible(false);
    this.scene.palabra4.setVisible(false);
    this.scene.palabra5.setVisible(false);

    this.scene.correcta1.setVisible(false);
    this.scene.incorrecta1.setVisible(false);
    this.scene.correcta2.setVisible(false);
    this.scene.incorrecta2.setVisible(false);
    this.scene.correcta3.setVisible(false);
    this.scene.incorrecta3.setVisible(false);
    this.scene.correcta4.setVisible(false);
    this.scene.incorrecta4.setVisible(false);
    this.scene.correcta5.setVisible(false);
    this.scene.incorrecta5.setVisible(false);
    this.scene.correcta6.setVisible(false);
    this.scene.incorrecta6.setVisible(false);
    this.hw = false;
    this.objExp = {'position': 'fixed'}
    
  }

}
