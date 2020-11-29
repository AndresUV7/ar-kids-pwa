import {
  Component,
  DoCheck,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  ApplicationRef,
} from "@angular/core";
import Speech from "speak-tts";
import { Router } from "@angular/router";
import { Recurso } from "../models/Recurso";
import { HIGIENE, VESTIR, COCINA, HOGAR } from "../../utils/recursos";

import {
  SpeechRecognitionService,
  resultList,
} from "@kamiazya/ngx-speech-recognition";
declare function auxiliar(): any;
@Component({
  selector: "app-asistente-learn",
  templateUrl: "./asistente-learn.component.html",
  styleUrls: ["./asistente-learn.component.css"],
})
export class AsistenteLearnComponent implements OnInit, DoCheck, OnDestroy {
  public started = false;
  message = "";
  objetos: Recurso[];
  permisoCamara = true;
  rutaObj = "";
  rutaPersonaje = "";
  rutaAudioObj = "";
  escalaObj = "";
  validadores: number[];
  objeto: Recurso;
  nextCtrl = false;
  // ruta =
  //   "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Ftoalla.glb?alt=media&token=9d0f4bfc-f9b9-4d84-a12e-50233a1121ea";

  constructor(
    public service: SpeechRecognitionService,
    private router: Router
  ) {
    this.service.onstart = (e) => {
      console.log("onstart");
      setTimeout(() => {
        //<<<---using ()=> syntax
        this.stop();
      }, 5000);
    };
    this.service.onresult = (e) => {
      this.message = e.results[0].item(0).transcript;
      console.log("MainComponent:onresult", this.message, e);

      if (this.message == this.objeto.nombre) {
        this.rutaAudioObj = "src: url(" + this.objeto.rutas[2] + "); volume: 10";

        auxiliar();
      }

      // const tmpObj = this.objetos.filter(e => e.nombre === this.message)
      // if (tmpObj.length > 0) {
      //   this.rutaObj = tmpObj[0].rutas[0];
      //   this.rutaAudioObj = tmpObj[0].rutas[2];
      //   auxiliar();
      // }

      // if (this.message == "cocina") {
      //   this.rutaAudioObj =
      //     "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina.mp3?alt=media&token=0701b04b-453f-4836-9a44-c018d7a8feff)";
      //   this.rutaObj =
      //     "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fpasta.glb?alt=media&token=b0b3507d-3c9c-4d16-98b9-389d4a348521";
      //   auxiliar();
      // } else if (this.message == "tomate") {
      //   this.rutaAudioObj =
      //     "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate.mp3?alt=media&token=fb4959f9-03a3-4a41-9320-e993fc1c53a3)";

      //   this.rutaObj =
      //     "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate2.glb?alt=media&token=dd42e2b9-52ac-4ce8-9b8c-e1d8f6897589";
      //   auxiliar();
      // } else {
      // }
    };
  }

  // rutaAudioObj =
  //   "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate.mp3?alt=media&token=fb4959f9-03a3-4a41-9320-e993fc1c53a3)";

  isLoaded = false;

  loaded($event) {
    this.isLoaded = true;
  }

  ngOnInit() {
    this.validadores = [];

    navigator.permissions.query({ name: "camera" }).then((res) => {
      if (res.state == "granted") {
        console.log("tienes permisos");
      } else {
        console.log("no tienes permisos");
        this.permisoCamara = false;
      }
    });

    if (localStorage.getItem("cat_act") == "1") {
      this.rutaPersonaje =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/doctor.glb?alt=media&token=c146da26-29a4-445f-871c-b41dbb132b22";
      this.objetos = HIGIENE;

      const rand = Math.floor(Math.random() * (15 - 0));
      this.objeto = this.objetos[rand];
      this.validadores.push(rand);

      this.rutaObj = this.objeto.rutas[0];
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fhigiene_p.mp3?alt=media&token=27f6e6a6-334d-4860-9d5c-28dadc324dc4) ; volume: 10";

      // this.rutaAudioObj = "src: url("+this.objeto.rutas[1]+")"
      this.escalaObj = this.objeto.escala;

      auxiliar();
    }
    if (localStorage.getItem("cat_act") == "2") {
      this.rutaPersonaje =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/kid.glb?alt=media&token=61bdebd0-216e-4e7d-bf97-5c6218d1d585";
      this.objetos = VESTIR;

      const rand = Math.floor(Math.random() * (15 - 0));
      this.objeto = this.objetos[rand];
      this.validadores.push(rand);
      this.rutaObj = this.objeto.rutas[0];
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fvestir_p.mp3?alt=media&token=bdd2c8d5-cdac-4c61-886f-278249118c2e); volume: 10";
      // this.rutaAudioObj = "src: url("+this.objeto.rutas[1]+")"
      this.escalaObj = this.objeto.escala;

      auxiliar();
    }
    if (localStorage.getItem("cat_act") == "3") {
      this.rutaPersonaje =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/chef.glb?alt=media&token=bbc6f755-6bbc-47d2-84a9-0a9f4a08410c";
      this.objetos = COCINA;

      const rand = Math.floor(Math.random() * (15 - 0));
      this.objeto = this.objetos[rand];
      this.validadores.push(rand);
      this.rutaObj = this.objeto.rutas[0];
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcocina_p1.mp3?alt=media&token=b6a9fb23-49fb-456c-8747-815a56f56ac8); volume: 10";
      this.escalaObj = this.objeto.escala;

      auxiliar();
    }
    if (localStorage.getItem("cat_act") == "4") {
      this.rutaPersonaje =
        "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/girl.glb?alt=media&token=74a646f4-ee71-4537-81b8-900f325b435d";
      this.objetos = HOGAR;

      const rand = Math.floor(Math.random() * (15 - 0));
      this.objeto = this.objetos[rand];
      this.validadores.push(rand);

      this.rutaObj = this.objeto.rutas[0];
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fhogar_p2.mp3?alt=media&token=2a1c625d-985f-4a91-8ff3-068fc33006e6); volume: 10";
      this.escalaObj = this.objeto.escala;

      auxiliar();
    }

    // manejoAudio();
  }

  siguiente() {
    this.nextCtrl = true;

    console.log(this.validadores);
    if (this.validadores.length == 15) {
      this.validadores = [];
    }
    let rand = Math.floor(Math.random() * (15 - 0));

    while (this.validadores.includes(rand)) {
      rand = Math.floor(Math.random() * (15 - 0));
    }

    this.objeto = this.objetos[rand];

    if (localStorage.getItem("cat_act") == "1") {
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhigiene%2Fhigiene_p.mp3?alt=media&token=27f6e6a6-334d-4860-9d5c-28dadc324dc4); volume: 10";
    }
    if (localStorage.getItem("cat_act") == "2") {
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fvestir%2Fvestir_p.mp3?alt=media&token=bdd2c8d5-cdac-4c61-886f-278249118c2e); volume: 10";
    }

    if (localStorage.getItem("cat_act") == "3") {
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fcocina%2Fcocina_p1.mp3?alt=media&token=b6a9fb23-49fb-456c-8747-815a56f56ac8); volume: 10";
    }

    if (localStorage.getItem("cat_act") == "4") {
      this.rutaAudioObj =
        "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/audio%2Fhogar%2Fhogar_p2.mp3?alt=media&token=2a1c625d-985f-4a91-8ff3-068fc33006e6); volume: 10";
    }

    this.rutaObj = this.objeto.rutas[0];
    this.escalaObj = this.objeto.escala;

    setTimeout(() => {
      this.nextCtrl = false;
    }, 3000);
    this.validadores.push(rand);

    auxiliar();
  }

  salir() {
    this.router.navigate(["actividades/principal"]);

    // this.service
    //   .listen()
    //   .pipe(resultList)
    //   .subscribe((list: SpeechRecognitionResultList) => {
    //     this.message = list.item(0).item(0).transcript;
    //     console.log("RxComponent:onresult", this.message, list);
    //     console.log(this.message)

    //     if (this.message == "pasta") {
    //       this.ruta2 = "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina.mp3?alt=media&token=0701b04b-453f-4836-9a44-c018d7a8feff)"
    //       this.ruta =
    //      "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/higiene%2Fpasta.glb?alt=media&token=b0b3507d-3c9c-4d16-98b9-389d4a348521"
    //      auxiliar();

    //     } else
    //     if (this.message == "tomate") {
    //       this.ruta2 = "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate.mp3?alt=media&token=fb4959f9-03a3-4a41-9320-e993fc1c53a3)"

    //       this.ruta =
    //         "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate2.glb?alt=media&token=dd42e2b9-52ac-4ce8-9b8c-e1d8f6897589";
    //         auxiliar();

    //     }

    //   },((error) => {

    //     }));
  }

  start() {
    this.started = true;
    this.service.start();
  }

  stop() {
    this.started = false;
    this.service.stop();
  }

  ngDoCheck() {
    // if (this.voz == true){
    //   console.log(this.message)
    //   this.voz = false;
    // }

    console.log("asis");

    if (!this.permisoCamara) {
      navigator.permissions.query({ name: "camera" }).then((res) => {
        if (res.state == "granted") {
          this.permisoCamara = true;
          location.reload();
        }
      });
    }
  }
  ngOnDestroy() {
    //   this.router.navigate(['/'])
    // .then(() => {
    //   window.location.reload();
    // });
  }
}

// const speech = new Speech();
// speech
//   .init({
//     volume: 10,
//     lang: "es_US",
//     rate: 1,
//     pitch: 1,
//     voice: "español Estados Unidos",
//     splitSentences: true,
//     listeners: {
//       onvoiceschanged: (voices) => {
//         console.log("Event voiceschanged", voices);
//       },
//     },
//   })
//   .then((data) => {
//     speech
//       .speak({
//         text:
//           "Una cocina es un artefacto para cocinar alimentos que puede funcionar mediante diversos combustibles o por electricidad. Según el modo de cocinar los alimentos, una cocina sirve para hervir, cocer, freír, asar o fundir. Los alimentos se cocinan por lo general mediante utensilios de cocina como ollas o sartenes.",
//         queue: false, // current speech will be interrupted,
//         listeners: {
//           onstart: () => {
//             console.log("Start utterance");
//           },
//           onend: () => {
//             console.log("End utterance");
//           },
//           onresume: () => {
//             console.log("Resume utterance");
//           },
//           onboundary: (event) => {
//             console.log(
//               event.name +
//                 " boundary reached after " +
//                 event.elapsedTime +
//                 " milliseconds."
//             );
//           },
//         },
//       })
//       .then(() => {
//         console.log("Success !");
//       })
//       .catch((e) => {
//         console.error("An error occurred :", e);
//       });
//   });
