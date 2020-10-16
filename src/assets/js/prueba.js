function test () {

    let x = "Hola Agular JS"
    AFRAME.registerComponent("soundhandler", {
        tick: function () {
          var entity = document.querySelector("[sound]");
          var btn = document.getElementById("myBtn");
          var marker = document.querySelector("a-marker")
          if (marker.object3D.visible == true) {

            // if (marker.object3D.getWorldPosition()["x"]>0){
            //   console.log("derecha");
            // }else{
            //   console.log("izquierda")
            // }
            console.log(marker.object3D);
            entity.components.sound.playSound();
            btn.setAttribute("animation-mixer", { timeScale: 1 });
          } else {
            entity.components.sound.pauseSound();
            btn.setAttribute("animation-mixer", { timeScale: 0 });
          }
        },
      });

      return x;
}