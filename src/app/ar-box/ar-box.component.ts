import { Component, OnInit, DoCheck, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../models/Video';
import { HIGIENE_VIDEOS } from '../../utils/videos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
declare function getTime(p): any;
declare function getActive(): any;
declare function mediaPlayer(p, q): any;

class NewScene extends Phaser.Scene {

  text : any;
  question: string
  sueter: any;
  constructor() {
    super("NewScene");
  }

  preload() {
    this.load.path = "/assets/img/";
    this.load.image("sueter", "angular.png");
  
  }

  create() {
    this.sueter = this.physics.add.image(140, 60, "sueter")
    this.text = this.add.text(420, 0 ,"HHH" , {
      color : "black",
      fontSize : 35
    });

  }

  update() {}

  actualizaPregunta(pregunta : string){
    this.text.setText(pregunta);

  }

  
}
@Component({
  selector: 'app-ar-box',
  templateUrl: './ar-box.component.html',
  styleUrls: ['./ar-box.component.css']
})

export class ArBoxComponent implements OnInit, DoCheck {


  
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




  constructor(private router: Router, public sanitizer: DomSanitizer) {
    this.scene = new NewScene();
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
    }
  }

  ngDoCheck(){

    
        if (getActive()>-1){
        this.timeMins = this.playList[getActive()].checkpoints;
        if (JSON.stringify(this.timeMinsAux)!==JSON.stringify(this.timeMins)){
          this.timeMinsAux = this.timeMins;
          console.log(this.timeMins)
        }


        console.log(Math.floor(getTime(getActive())))
        if (Math.floor(getTime(getActive())) == this.timeMins[0] && !this.respondio[getActive()] ){
          this.scene.actualizaPregunta(this.playList[getActive()].preguntas[0]);
          mediaPlayer(0, getActive());
        }else if (Math.floor(getTime(getActive())) == this.timeMins[1] && !this.completo[getActive()] ){
          this.hw = true;
          this.scene.actualizaPregunta(this.playList[getActive()].preguntas[1]);
          mediaPlayer(0, getActive());

        }
        
      }
  
    
  
    


  }

  salir(){
    this.router.navigate(["/"]);
    
  }

  responder(){
    mediaPlayer(1, getActive());
    this.respondio[getActive()] = true;
  }
  
  completar(){
    mediaPlayer(1, getActive());
    this.completo[getActive()] = true;
    this.hw = false;
  }

}
