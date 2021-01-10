import { Component, OnInit } from '@angular/core';
// import Speech from 'speak-tts'
declare var webNotification: any
declare function push(): any;
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {

    push();

   

    // const speech = new Speech()

  //   speech.init().then((data) => {
  //     // The "data" object contains the list of available voices and the voice synthesis params
  //     console.log("Speech is ready, voices are available", data)
  // }).catch(e => {
  //     console.error("An error occured while initializing : ", e)
  // })

      //   speech.init({
      //     'volume': 1,
      //        'lang': 'es_ES',
      //        'rate': 1,
      //        'pitch': 1,
      //        'voice':'español España',
      //        'splitSentences': true,
      //        'listeners': {
      //            'onvoiceschanged': (voices) => {
      //                console.log("Event voiceschanged", voices)
      //            }
      //        }
      // }).then(data =>{

      // })

    //   speech.speak({
    //     text: 'Mi nombre es Pablo, tengo 20 años',
    // }).then(() => {
    //     console.log("Success !")
    // }).catch(e => {
    //     console.error("An error occurred :", e)
    // })

    // speech.speak({
    //       text: 'Mi nombre es Pablo, tengo 20 años',
    //   }).then(() => {
    //       console.log("Success !")
    //   }).catch(e => {
    //       console.error("An error occurred :", e)
    //   })
  }

}
