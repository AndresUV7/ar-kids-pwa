import { Component, OnInit } from '@angular/core';
// import Speech from 'speak-tts'
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

    navigator.serviceWorker.register('ngsw-worker.js').then(function(registration) {
          webNotification.showNotification('Example Notification', {
              serviceWorkerRegistration: registration,
              body: 'Notification Text...',
              icon: 'my-icon.ico',
              actions: [
                  {
                      action: 'Start',
                      title: 'Start'
                  },
                  {
                      action: 'Stop',
                      title: 'Stop'
                  }
              ],
              autoClose: 4000 //auto close the notification after 4 seconds (you can manually close it via hide function)
          }, function onShow(error, hide) {
              if (error) {
                  window.alert('Unable to show notification: ' + error.message);
              } else {
                  console.log('Notification Shown.');
  
                  setTimeout(function hideNotification() {
                      console.log('Hiding notification....');
                      hide(); //manually close the notification (you can skip this if you use the autoClose option)
                  }, 5000);
              }
          });
  });
    
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
