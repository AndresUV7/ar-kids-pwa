import { Component, DoCheck, OnInit } from "@angular/core";
import Speech from "speak-tts";
import {
  RxSpeechRecognitionService,
  resultList,
} from "@kamiazya/ngx-speech-recognition";

@Component({
  selector: "app-asistente-learn",
  templateUrl: "./asistente-learn.component.html",
  styleUrls: ["./asistente-learn.component.css"],
})
export class AsistenteLearnComponent implements OnInit, DoCheck {
  message = "";
  voz = false;
  ruta =
    "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate2.glb?alt=media&token=dd42e2b9-52ac-4ce8-9b8c-e1d8f6897589";
  constructor(public service: RxSpeechRecognitionService) {}

  ruta2 = "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate.mp3?alt=media&token=fb4959f9-03a3-4a41-9320-e993fc1c53a3)"
  isLoaded = false;

  loaded($event) {
    this.isLoaded = true;
  }

  ngOnInit() {}

  listen() {
    this.service
      .listen()
      .pipe(resultList)
      .subscribe((list: SpeechRecognitionResultList) => {
        this.message = list.item(0).item(0).transcript;
        console.log("RxComponent:onresult", this.message, list);
        if (this.message == "cocina") {
          this.ruta2 = "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina.mp3?alt=media&token=0701b04b-453f-4836-9a44-c018d7a8feff)"
          this.ruta =
            "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/cocina.glb?alt=media&token=bf9b1856-0290-4fd3-9c3d-79a35144efab";
          // const speech = new Speech();
          // speech
          //   .init({
          //     volume: 1,
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
        }
        if (this.message == "tomate") {
          this.ruta2 = "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate.mp3?alt=media&token=fb4959f9-03a3-4a41-9320-e993fc1c53a3)"

          this.ruta =
            "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/tomate2.glb?alt=media&token=dd42e2b9-52ac-4ce8-9b8c-e1d8f6897589";
        }
      });
    this.voz = true;
  }

  ngDoCheck() {
    // if (this.voz == true){
    //   console.log(this.message)
    //   this.voz = false;
    // }
  }
}
