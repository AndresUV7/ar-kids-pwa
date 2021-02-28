function test() {
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

function test2() {
  window.addEventListener("camera-init", (data) => {
    console.log("camera-init", data);
  });
}

// function vidOff() {
//   navigator.mediaDevices.getUserMedia({video: true, audio: false})
//   .then(mediaStream => {
//     const stream = mediaStream;
//     const tracks = stream.getTracks();

//     tracks[0].stop;
//   })
// }

function manejoAudio() {
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

function auxiliar() {
  var fooComponent = document.querySelector("[soundhandler]").components
    .soundhandler;
  fooComponent.qux();
}

function movimiento() {
  var fooComponent = document.querySelector("[movehandler]").components
    .movehandler;
  return { x: fooComponent.rotacionX, y: fooComponent.rotacionY };
}

function validar() {
  var fooComponent = document.querySelector("[movehandler]").components
    .movehandler;
  return fooComponent.move;
}

function getTime(p) {
  var fooComponent = document.querySelector("[videohandler]").components
    .videohandler;
  var fooComponent2 = document.querySelector("[videohandler2]").components
    .videohandler2;
  var fooComponent3 = document.querySelector("[videohandler3]").components
    .videohandler3;
  var fooComponent4 = document.querySelector("[videohandler4]").components
    .videohandler4;
  var fooComponent5 = document.querySelector("[videohandler5]").components
    .videohandler5;
  var fooComponent6 = document.querySelector("[videohandler6]").components
    .videohandler6;

  if (p == 0) {
    return fooComponent.vid.currentTime;
  } else if (p == 1) {
    return fooComponent2.vid.currentTime;
  } else if (p == 2) {
    return fooComponent3.vid.currentTime;
  } else if (p == 3) {
    return fooComponent4.vid.currentTime;
  } else if (p == 4) {
    return fooComponent5.vid.currentTime;
  } else if (p == 5) {
    return fooComponent6.vid.currentTime;
  }
}

function getActive() {
  var fooComponent = document.querySelector("[videohandler]").components
    .videohandler;
  var fooComponent2 = document.querySelector("[videohandler2]").components
    .videohandler2;
  var fooComponent3 = document.querySelector("[videohandler3]").components
    .videohandler3;
  var fooComponent4 = document.querySelector("[videohandler4]").components
    .videohandler4;
  var fooComponent5 = document.querySelector("[videohandler5]").components
    .videohandler5;
  var fooComponent6 = document.querySelector("[videohandler6]").components
    .videohandler6;

  if (fooComponent.active == true) {
    return 0;
  } else if (fooComponent2.active == true) {
    return 1;
  } else if (fooComponent3.active == true) {
    return 2;
  } else if (fooComponent4.active == true) {
    return 3;
  } else if (fooComponent5.active == true) {
    return 4;
  } else if (fooComponent6.active == true) {
    return 5;
  } else {
    return -1;
  }
}

function mediaPlayer(p, q) {
  var fooComponent = document.querySelector("[videohandler]").components
    .videohandler;
  var fooComponent2 = document.querySelector("[videohandler2]").components
    .videohandler2;
  var fooComponent3 = document.querySelector("[videohandler3]").components
    .videohandler3;
  var fooComponent4 = document.querySelector("[videohandler4]").components
    .videohandler4;
  var fooComponent5 = document.querySelector("[videohandler5]").components
    .videohandler5;
  var fooComponent6 = document.querySelector("[videohandler6]").components
    .videohandler6;

  if (q == 0) {
    if (p == 1) {
      fooComponent.vid.play();
    } else {
      fooComponent.vid.pause();
    }
  } else if (q == 1) {
    if (p == 1) {
      fooComponent2.vid.play();
    } else {
      fooComponent2.vid.pause();
    }
  } else if (q == 2) {
    if (p == 1) {
      fooComponent3.vid.play();
    } else {
      fooComponent3.vid.pause();
    }
  } else if (q == 3) {
    if (p == 1) {
      fooComponent4.vid.play();
    } else {
      fooComponent4.vid.pause();
    }
  } else if (q == 4) {
    if (p == 1) {
      fooComponent5.vid.play();
    } else {
      fooComponent5.vid.pause();
    }
  } else if (q == 5) {
    if (p == 1) {
      fooComponent6.vid.play();
    } else {
      fooComponent6.vid.pause();
    }
  }
}

function canvaz() {
  var can1 = new handwriting.Canvas(document.getElementById("can"));

  console.log(can1);

  can1.setCallBack(function (data, err) {
    if (err) throw err;
    else console.log(data);
  });

  //Set options
  can1.setOptions({
    language: "en",
    numOfReturn: 3,
  });

  //recognize captured trace
  can1.recognize();
}

function push() {
  console.log("push");
}

function danfo(json_data) {
  var json_array = [];
  console.log(json_data);
  for (let index = 0; index < json_data.length; index++) {
    for (let index2 = 0; index2 < json_data[index].partidas.length; index2++) {
      var temp = json_data[index].partidas[index2];
      temp["item"] = json_data[index].nombre;
      json_array.push(temp);
    }
  }
  df = new dfd.DataFrame(json_array);
  // df.plot("plot_div").table()
  df["item"].plot("plot_div").hist();

  df.print();
}

function checkClick() {
  var fooComponent = document.querySelector("#fresa").components.clickhandler;
  if (fooComponent.objCtrl === "fresa") {
    fooComponent.limpiar();
    return "fresa";
  }
  return "";
}
function checkClick1() {
  var fooComponent = document.querySelector("#kiwi").components.clickhandler;
  if (fooComponent.objCtrl === "kiwi") {
    fooComponent.limpiar();
    return "kiwi";
  }
  return "";
}
function checkClick2() {
  var fooComponent = document.querySelector("#pina").components.clickhandler;
  if (fooComponent.objCtrl === "pina") {
    fooComponent.limpiar();
    return "pina";
  }
  return "";
}
function checkClick3() {
  var fooComponent = document.querySelector("#naranja").components.clickhandler;
  if (fooComponent.objCtrl === "naranja") {
    fooComponent.limpiar();
    return "naranja";
  }
  return "";
}
function checkClick4() {
  var fooComponent = document.querySelector("#uvas").components.clickhandler;
  if (fooComponent.objCtrl === "uvas") {
    fooComponent.limpiar();
    return "uvas";
  }
  return "";
}
function checkClick5() {
  var fooComponent = document.querySelector("#sandia").components.clickhandler;
  if (fooComponent.objCtrl === "sandia") {
    fooComponent.limpiar();
    return "sandia";
  }
  return "";
}
function checkClick6() {
  var fooComponent = document.querySelector("#banana").components.clickhandler;
  if (fooComponent.objCtrl === "banana") {
    fooComponent.limpiar();
    return "banana";
  }
  return "";
}
function checkClick7() {
  var fooComponent = document.querySelector("#manzana").components.clickhandler;
  if (fooComponent.objCtrl === "manzana") {
    fooComponent.limpiar();
    return "manzana";
  }
  return "";
}



function checkClick8() {
  var fooComponent = document.querySelector("#aceite").components.clickhandler;
  if (fooComponent.objCtrl === "aceite") {
    fooComponent.limpiar();
    return "aceite";
  }
  return "";
}
function checkClick9() {
  var fooComponent = document.querySelector("#cocoa").components.clickhandler;
  if (fooComponent.objCtrl === "cocoa") {
    fooComponent.limpiar();
    return "cocoa";
  }
  return "";
}
function checkClick10() {
  var fooComponent = document.querySelector("#huevo").components.clickhandler;
  if (fooComponent.objCtrl === "huevo") {
    fooComponent.limpiar();
    return "huevo";
  }
  return "";
}
function checkClick11() {
  var fooComponent = document.querySelector("#leche").components.clickhandler;
  if (fooComponent.objCtrl === "leche") {
    fooComponent.limpiar();
    return "leche";
  }
  return "";
}
function checkClick12() {
  var fooComponent = document.querySelector("#mani").components.clickhandler;
  if (fooComponent.objCtrl === "mani") {
    fooComponent.limpiar();
    return "mani";
  }
  return "";
}
function checkClick13() {
  var fooComponent = document.querySelector("#pan").components.clickhandler;
  if (fooComponent.objCtrl === "pan") {
    fooComponent.limpiar();
    return "pan";
  }
  return "";
}
function checkClick14() {
  var fooComponent = document.querySelector("#salsa").components.clickhandler;
  if (fooComponent.objCtrl === "salsa") {
    fooComponent.limpiar();
    return "salsa";
  }
  return "";
}
function checkClick15() {
  var fooComponent = document.querySelector("#yogurt").components.clickhandler;
  if (fooComponent.objCtrl === "yogurt") {
    fooComponent.limpiar();
    return "yogurt";
  }
  return "";
}


function checkClick16() {
  var fooComponent = document.querySelector("#aguacate").components.clickhandler;
  if (fooComponent.objCtrl === "aguacate") {
    fooComponent.limpiar();
    return "aguacate";
  }
  return "";
}
function checkClick17() {
  var fooComponent = document.querySelector("#carne").components.clickhandler;
  if (fooComponent.objCtrl === "carne") {
    fooComponent.limpiar();
    return "carne";
  }
  return "";
}
function checkClick18() {
  var fooComponent = document.querySelector("#lechuga").components.clickhandler;
  if (fooComponent.objCtrl === "lechuga") {
    fooComponent.limpiar();
    return "lechuga";
  }
  return "";
}
function checkClick19() {
  var fooComponent = document.querySelector("#papa").components.clickhandler;
  if (fooComponent.objCtrl === "papa") {
    fooComponent.limpiar();
    return "papa";
  }
  return "";
}
function checkClick20() {
  var fooComponent = document.querySelector("#pollo").components.clickhandler;
  if (fooComponent.objCtrl === "pollo") {
    fooComponent.limpiar();
    return "pollo";
  }
  return "";
}
function checkClick21() {
  var fooComponent = document.querySelector("#tomate").components.clickhandler;
  if (fooComponent.objCtrl === "tomate") {
    fooComponent.limpiar();
    return "tomate";
  }
  return "";
}
function checkClick22() {
  var fooComponent = document.querySelector("#verdura").components.clickhandler;
  if (fooComponent.objCtrl === "verdura") {
    fooComponent.limpiar();
    return "verdura";
  }
  return "";
}
function checkClick23() {
  var fooComponent = document.querySelector("#zanahoria").components.clickhandler;
  if (fooComponent.objCtrl === "zanahoria") {
    fooComponent.limpiar();
    return "zanahoria";
  }
  return "";
}


function changeActivity(term) {
  var fooComponent = document.querySelector("[run]").components.run;

  fooComponent.qux2(term);
}

function pares() {
  var fooComponent = document.querySelector("[run2]").components.run2;

  console.log(fooComponent.par1);
}
