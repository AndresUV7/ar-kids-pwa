import {
  Component,
  OnInit,
  AfterViewChecked,
  DoCheck,
  ElementRef,
  HostListener,
} from "@angular/core";
declare function checkClick(): any;
declare function checkClick1(): any;
declare function checkClick2(): any;
declare function checkClick3(): any;
declare function checkClick4(): any;
declare function checkClick5(): any;
declare function checkClick6(): any;
declare function checkClick7(): any;
declare function checkClick8(): any;
declare function checkClick9(): any;
declare function checkClick10(): any;
declare function checkClick11(): any;
declare function checkClick12(): any;
declare function checkClick13(): any;
declare function checkClick14(): any;
declare function checkClick15(): any;
declare function checkClick16(): any;
declare function checkClick17(): any;
declare function checkClick18(): any;
declare function checkClick19(): any;
declare function checkClick20(): any;
declare function checkClick21(): any;
declare function checkClick22(): any;
declare function checkClick23(): any;
import Phaser from "phaser";
import { Juego } from "../models/Juego";
import { JuegoService } from '../services/juegos/juego.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
class NewScene extends Phaser.Scene {
  constructor() {
    super("NewScene");
  }

  preload() {}

  create() {}

  update() {}
}
@Component({
  selector: "app-encuentralo",
  templateUrl: "./encuentralo.component.html",
  styleUrls: ["./encuentralo.component.css"],
})
export class EncuentraloComponent implements OnInit, DoCheck {
  phaserGame: Phaser.Game;
  config: Phaser.Types.Core.GameConfig;
  scene: NewScene;
  positions: string;
  visible: boolean[];
  par: string;
  opciones = [
    "fresa",
    "sandia",
    "naranja",
    "banana",
    "uvas",
    "cocoa",
    "huevo",
    "leche",
    "pan",
    "aceite",
    "aguacate",
    "pollo",
    "carne",
    "lechuga",
    "papa",
    "zanahoria",
    "tomate",
  ];
  opVer: string[];
  juego: Juego
  constructor(private elementRef: ElementRef, public juegoService: JuegoService,private router: Router,
    private _snackBar: MatSnackBar,) {
    this.opVer = this.shuffle(this.opciones).slice(0, 6);
    this.par = "Nada";
    this.visible = [true, true, true, true, true, true];
    this.scene = new NewScene();
    this.positions = null;
    this.config = {
      type: Phaser.AUTO,
      transparent: true,
      scene: [this.scene],
      physics: {
        default: "arcade",
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

  
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  ngOnInit() {
    console.log("opVer", this.opVer);
    this.phaserGame = new Phaser.Game(this.config);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      console.log("no soporta");
    }

    // window.onbeforeunload = () => this.ngOnDestroy();

    setTimeout(() => {
      this.juegoService
      .selectJuego(localStorage.getItem("id_juego"))
      .subscribe((res) => {
        this.juego = res;

        this.juego.partidas.push({
          fecha_inicio: new Date()
        });

        this.juegoService.updateJuego(this.juego).subscribe((res) => {
          this.juego = res;

          localStorage.setItem(
            "id_partida",
            this.juego.partidas.slice(-1)[0]._id
          );
        });
      });
    }, 3000);
    
  }

  showPosition(position) {
    console.log(position.coords.latitude, position.coords.longitude);

    this.positions =
      "latitude: " +
      position.coords.latitude +
      "; longitude: " +
      position.coords.longitude +
      ";";
  }

  ngDoCheck() {
    if (checkClick() === "fresa") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Ffresa.mp3?alt=media&token=f93d0df6-6ac4-4208-949a-529130e924b8";

      audio.load();
      audio.play();
      if (this.opVer.includes("fresa")) {
        this.visible[this.opVer.indexOf("fresa")] = false;
      }
    }

    if (checkClick1() === "kiwi") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fkiwi.mp3?alt=media&token=b6394089-aa99-435e-b84b-8c1dbfab28e5";

      audio.load();
      audio.play();
      if (this.opVer.includes("kiwi")) {
        this.visible[this.opVer.indexOf("kiwi")] = false;
      }
    }

    if (checkClick2() === "pina") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fpina.mp3?alt=media&token=00958cf6-59a6-47dd-9ced-dcfed46143d3";

      audio.load();
      audio.play();
      if (this.opVer.includes("pina")) {
        this.visible[this.opVer.indexOf("pina")] = false;
      }
    }
    if (checkClick3() === "naranja") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fnaranja.mp3?alt=media&token=cc1f73b4-a9aa-4620-a2ac-582fd6a2c9a0";

      audio.load();
      audio.play();
      if (this.opVer.includes("naranja")) {
        this.visible[this.opVer.indexOf("naranja")] = false;
      }
    }
    if (checkClick4() === "uvas") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fuvas.mp3?alt=media&token=78bf9189-7c52-4dd2-ac70-264a41c9ab4e";

      audio.load();
      audio.play();
      if (this.opVer.includes("uvas")) {
        this.visible[this.opVer.indexOf("uvas")] = false;
      }
    }
    if (checkClick5() === "sandia") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fsandia.mp3?alt=media&token=7ce91b54-cdbe-48ee-857e-c5e3a3123a56";

      audio.load();
      audio.play();
      if (this.opVer.includes("sandia")) {
        this.visible[this.opVer.indexOf("sandia")] = false;
      }
    }
    if (checkClick6() === "banana") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fbanana.mp3?alt=media&token=590cf171-940c-42fd-b947-84f29867b269";

      audio.load();
      audio.play();
      if (this.opVer.includes("banana")) {
        this.visible[this.opVer.indexOf("banana")] = false;
      }
    }
    if (checkClick7() === "manzana") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fmanzana.mp3?alt=media&token=2717d328-db8b-47d3-b230-8541c5b30630";

      audio.load();
      audio.play();
      if (this.opVer.includes("manzana")) {
        this.visible[this.opVer.indexOf("manzana")] = false;
      }
    }

    if (checkClick8() === "aceite") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Faceite.mp3?alt=media&token=1a073ffe-5a86-48f6-93cb-d6a5acea3a7b";

      audio.load();
      audio.play();
      if (this.opVer.includes("aceite")) {
        this.visible[this.opVer.indexOf("aceite")] = false;
      }
    }
    if (checkClick9() === "cocoa") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fcocoa.mp3?alt=media&token=ce55cac1-cf62-4ff2-892d-e79353ebe383";

      audio.load();
      audio.play();
      if (this.opVer.includes("cocoa")) {
        this.visible[this.opVer.indexOf("cocoa")] = false;
      }
    }
    if (checkClick10() === "huevo") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fhuevo.mp3?alt=media&token=54d202eb-76fa-4959-b170-2ca007b5afc3";

      audio.load();
      audio.play();
      if (this.opVer.includes("huevo")) {
        this.visible[this.opVer.indexOf("huevo")] = false;
      }
    }
    if (checkClick11() === "leche") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fleche.mp3?alt=media&token=ccb64676-3b42-45e1-8c89-b3ab43b14c43";

      audio.load();
      audio.play();
      if (this.opVer.includes("leche")) {
        this.visible[this.opVer.indexOf("leche")] = false;
      }
    }
    if (checkClick12() === "mani") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fmani.mp3?alt=media&token=fe0f40f0-0409-485c-8279-920ef1942947";

      audio.load();
      audio.play();
      if (this.opVer.includes("mani")) {
        this.visible[this.opVer.indexOf("mani")] = false;
      }
    }
    if (checkClick13() === "pan") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fpan.mp3?alt=media&token=6f94b7ff-ce35-4156-bab9-39c31a7f2c27";

      audio.load();
      audio.play();
      if (this.opVer.includes("pan")) {
        this.visible[this.opVer.indexOf("pan")] = false;
      }
    }
    if (checkClick14() === "salsa") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fsalsa.mp3?alt=media&token=9ece1799-03c8-45cf-856b-055430b9dd58";

      audio.load();
      audio.play();
      if (this.opVer.includes("salsa")) {
        this.visible[this.opVer.indexOf("salsa")] = false;
      }
    }
    if (checkClick15() === "yogurt") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fyogurt.mp3?alt=media&token=677d2f05-22d8-45da-b330-de6c57b5fec5";

      audio.load();
      audio.play();
      if (this.opVer.includes("yogurt")) {
        this.visible[this.opVer.indexOf("yogurt")] = false;
      }
    }
    if (checkClick16() === "aguacate") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Faguacate.mp3?alt=media&token=fcf18cad-c21f-4115-a228-d9b38a43655a";

      audio.load();
      audio.play();
      if (this.opVer.includes("aguacate")) {
        this.visible[this.opVer.indexOf("aguacate")] = false;
      }
    }
    if (checkClick17() === "carne") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fcarne.mp3?alt=media&token=7cfbd269-6c66-42de-977b-f4ed65ead28a";

      audio.load();
      audio.play();
      if (this.opVer.includes("carne")) {
        this.visible[this.opVer.indexOf("carne")] = false;
      }
    }
    if (checkClick18() === "lechuga") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Flechuga.mp3?alt=media&token=da3689d0-27dc-4f35-813d-f0ee39ec3858";

      audio.load();
      audio.play();
      if (this.opVer.includes("lechuga")) {
        this.visible[this.opVer.indexOf("lechuga")] = false;
      }
    }
    if (checkClick19() === "papa") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fpapa.mp3?alt=media&token=059dc086-a94d-4e17-83c2-7b1385f3d517";

      audio.load();
      audio.play();
      if (this.opVer.includes("papa")) {
        this.visible[this.opVer.indexOf("papa")] = false;
      }
    }
    if (checkClick20() === "pollo") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fpollo.mp3?alt=media&token=2f0abce8-3718-4b6e-94d8-cd2ebcc6386a";

      audio.load();
      audio.play();
      if (this.opVer.includes("pollo")) {
        this.visible[this.opVer.indexOf("pollo")] = false;
      }
    }
    if (checkClick21() === "tomate") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Ftomate.mp3?alt=media&token=85d961fd-fc97-4e2e-a800-ef07580bcfd8";

      audio.load();
      audio.play();
      if (this.opVer.includes("tomate")) {
        this.visible[this.opVer.indexOf("tomate")] = false;
      }

    }
    if (checkClick22() === "verdura") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fverdura.mp3?alt=media&token=023f5ce4-d4a0-44a2-80fb-5bdd20745b7f";

      audio.load();
      audio.play();
      if (this.opVer.includes("verdura")) {
        this.visible[this.opVer.indexOf("verdura")] = false;
      }
    }
    if (checkClick23() === "zanahoria") {
      var audio = new Audio();
      audio.src =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Falimentos%2Fzanahoria.mp3?alt=media&token=9566dfa6-4a15-4e1a-aa9f-adbba526fd58";

      audio.load();
      audio.play();
      if (this.opVer.includes("zanahoria")) {
        this.visible[this.opVer.indexOf("zanahoria")] = false;
      }
    }

    if (!this.visible[0] && !this.visible[1]&& !this.visible[2]&& !this.visible[3]&& !this.visible[4]&& !this.visible[5]){
      this.visible=null;
      this.openSnackBar("GAME OVER","🚩")
      setTimeout(() => {
        this.router.navigate(["actividades/principal"]);
      }, 5000);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: "top",
    });
  }
  // @HostListener('unloaded')
  ngOnDestroy() {
    console.log("saliendo");
    // this.elementRef.nativeElement.remove();
    this.phaserGame.destroy(true);
  }
}
