function test () {

    // let x = "Hola Agular JS"
    // AFRAME.registerComponent("soundhandler", {
    //     tick: function () {
    //       var entity = document.querySelector("[sound]");
    //       var btn = document.getElementById("myBtn");
    //       var marker = document.querySelector("a-marker")
    //       if (marker.object3D.visible == true) {

    //         // if (marker.object3D.getWorldPosition()["x"]>0){
    //         //   console.log("derecha");
    //         // }else{
    //         //   console.log("izquierda")
    //         // }
    //         console.log(marker.object3D);
    //         entity.components.sound.playSound();
    //         btn.setAttribute("animation-mixer", { timeScale: 1 });
    //       } else {
    //         entity.components.sound.pauseSound();
    //         btn.setAttribute("animation-mixer", { timeScale: 0 });
    //       }
    //     },
    //   });

    //   return x;
}

function test2(){
  
  window.addEventListener('camera-init', (data) => {
    console.log('camera-init', data);
})
}


// function vidOff() {
//   navigator.mediaDevices.getUserMedia({video: true, audio: false})
//   .then(mediaStream => {
//     const stream = mediaStream;
//     const tracks = stream.getTracks();

//     tracks[0].stop;
//   })
// }


function manejoAudio(){

  // console.log("aqui");
  // let ban = false;
    
  //   AFRAME.registerComponent("soundhandler", {
  //     init: function () {
  //       this.bar = "Hola";
  //       var entity1 = document.querySelector("[sound]");
  //       // entity1.addEventListener("sound-ended", function() {
       
  //       //   ban = false;
  //       // })
  //     },
  //     tick: function () {
  //       var entity = document.querySelector("[sound]");
  //       var btn = document.getElementById("myBtn");
  //       if (document.querySelector("a-marker").object3D.visible == true && !ban) {
  //         entity.components.sound.playSound();
  //         ban = true;
  //         btn.setAttribute("animation-mixer", { timeScale: 1 });
  //       } else  if (document.querySelector("a-marker").object3D.visible == false && ban){
  //         entity.components.sound.pauseSound();
  //         ban = false;
  //         btn.setAttribute("animation-mixer", { timeScale: 0 });
  //       }

       
  //       // if(ban){
  //       //   entity.components.sound.stopSound();
  //       //   ban = false;
  //       // }
  //     },
  //     qux: function () {
  //       ban = false;
  //     }
  //   });

}

function auxiliar(){
  var fooComponent = document.querySelector('[soundhandler]').components.soundhandler;
  fooComponent.qux();
    
}

function movimiento(){
  var fooComponent = document.querySelector('[movehandler]').components.movehandler;
  return {"x": fooComponent.rotacionX, "y": fooComponent.rotacionY };
}

function validar(){
  var fooComponent = document.querySelector('[movehandler]').components.movehandler;
  return fooComponent.move;
}

function getTime(p){

  var fooComponent = document.querySelector('[videohandler]').components.videohandler;
  var fooComponent2 = document.querySelector('[videohandler2]').components.videohandler2;
  var fooComponent3 = document.querySelector('[videohandler3]').components.videohandler3;
  var fooComponent4 = document.querySelector('[videohandler4]').components.videohandler4;
  var fooComponent5 = document.querySelector('[videohandler5]').components.videohandler5;
  var fooComponent6 = document.querySelector('[videohandler6]').components.videohandler6;



  if (p == 0){

    return fooComponent.vid.currentTime;
  }else if (p == 1){
    return fooComponent2.vid.currentTime;
    
  }else if (p == 2){
    return fooComponent3.vid.currentTime;
    
  }else if (p == 3){
    return fooComponent4.vid.currentTime;
    
  }else if (p == 4){
    return fooComponent5.vid.currentTime;
    
  }else if (p == 5){
    return fooComponent6.vid.currentTime;
    
  }

}

function getActive(){

  var fooComponent = document.querySelector('[videohandler]').components.videohandler;
  var fooComponent2 = document.querySelector('[videohandler2]').components.videohandler2;
  var fooComponent3 = document.querySelector('[videohandler3]').components.videohandler3;
  var fooComponent4 = document.querySelector('[videohandler4]').components.videohandler4;
  var fooComponent5 = document.querySelector('[videohandler5]').components.videohandler5;
  var fooComponent6 = document.querySelector('[videohandler6]').components.videohandler6;

  if (fooComponent.active == true){
    return 0;
  }else if (fooComponent2.active == true){
    return 1;
  }else if (fooComponent3.active == true){
    return 2;
  }else if (fooComponent4.active == true){
    return 3;
  }else if (fooComponent5.active == true){
    return 4;
  }else if (fooComponent6.active == true){
    return 5;
  }else{
    return -1;
  }
  
}


function mediaPlayer(p, q){


  var fooComponent = document.querySelector('[videohandler]').components.videohandler;
  var fooComponent2 = document.querySelector('[videohandler2]').components.videohandler2;
  var fooComponent3 = document.querySelector('[videohandler3]').components.videohandler3;
  var fooComponent4 = document.querySelector('[videohandler4]').components.videohandler4;
  var fooComponent5 = document.querySelector('[videohandler5]').components.videohandler5;
  var fooComponent6 = document.querySelector('[videohandler6]').components.videohandler6;

  if (q==0){

   
    if (p == 1){
      fooComponent.vid.play();
    }else{
      fooComponent.vid.pause();

    }
  }else if (q==1){
    if (p == 1){
      fooComponent2.vid.play();
    }else{
      fooComponent2.vid.pause();

    }

  }else if (q==2){
    if (p == 1){
      fooComponent3.vid.play();
    }else{
      fooComponent3.vid.pause();

    }

  }else if (q==3){
    if (p == 1){
      fooComponent4.vid.play();
    }else{
      fooComponent4.vid.pause();

    }

  }else if (q==4){
    if (p == 1){
      fooComponent5.vid.play();
    }else{
      fooComponent5.vid.pause();

    }

  }else if (q==5){
    if (p == 1){
      fooComponent6.vid.play();
    }else{
      fooComponent6.vid.pause();

    }

  }

}

function canvaz(){


    var can1 = new handwriting.Canvas(document.getElementById("can"));

  
  console.log(can1)
  
  can1.setCallBack(function(data, err) {
    if(err) throw err;
    else console.log(data);
});



//Set options
can1.setOptions(
    {
        language: "en",
        numOfReturn: 3
    }
);

//recognize captured trace
can1.recognize();


}


function push(){
   console.log("push")
}