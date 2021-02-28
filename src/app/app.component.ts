import { Component, OnInit } from '@angular/core';
declare var webNotification: any
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ar-kids-pwa';
  
  ngOnInit(){

    navigator.serviceWorker.register('ngsw-worker.js').then(function(registration) {
          webNotification.showNotification('Bienvenid@ a AR-KIDS', {
              serviceWorkerRegistration: registration,
              body: 'Ábrele la puerta al aprendizaje!!',
              icon: 'my-icon.ico',
              actions: [
                  {
                      action: 'OK',
                      title: 'OK'
                  },
              ],
              autoClose: 5000 //auto close the notification after 4 seconds (you can manually close it via hide function)
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
}
  
}
