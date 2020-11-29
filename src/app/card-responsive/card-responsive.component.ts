import { Component, OnInit, DoCheck } from "@angular/core";
import { Router } from "@angular/router";
import { DeviceDetectorService } from "ngx-device-detector";
import { JuegoService } from "../services/juegos/juego.service";
import { Juego } from "../models/Juego";

@Component({
  selector: "app-card-responsive",
  templateUrl: "./card-responsive.component.html",
  styleUrls: ["./card-responsive.component.css"],
})
export class CardResponsiveComponent implements OnInit, DoCheck {
  deviceInfo = null;
  members: { title: string; subtitle: string; content: string; url: string }[];

  constructor(
    private router: Router,
    private deviceService: DeviceDetectorService,
    private juegoService: JuegoService
  ) {
    this.deviceInfo = this.deviceService.isMobile();
  }

  ngOnInit() {
    if (localStorage.getItem("cat_act") == "1") {
      this.members = [
        {
          title: "PREGUNTADOS",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/A",
        },
        {
          title: "PICTOGRAM",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/B",
        },
        {
          title: "MAGIC CUBE",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/C",
        },
        {
          title: "GAME",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/D",
        },
      ];
    } else if (localStorage.getItem("cat_act") == "2") {
      this.members = [
        {
          title: "PREGUNTADOS",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/E",
        },
        {
          title: "PUZZLE",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/F",
        },
        {
          title: "MAGIC CUBE",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/G",
        },
        {
          title: "GAME",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/H",
        },
      ];
    } else if (localStorage.getItem("cat_act") == "3") {
      this.members = [
        {
          title: "PREGUNTADOS",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/I",
        },
        {
          title: "CHALLENGE",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/J",
        },
        {
          title: "MAGIC CUBE",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/K",
        },
        {
          title: "GAME",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/L",
        },
      ];
    } else {
      this.members = [
        {
          title: "PREGUNTADOS",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/M",
        },
        {
          title: "MEMORAMA",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/N",
        },
        {
          title: "MAGIC CUBE",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/O",
        },
        {
          title: "GAME",
          subtitle: "Subtitle",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/P",
        },
      ];
    }

    console.log(this.deviceInfo);
  }

  ngDoCheck(): void {
    this.deviceInfo = !this.deviceService.isMobile();
  }

  AR(){
    this.router.navigate(["actividades/asistente"]);

  }

  prueba(title) {

    localStorage.setItem("tip_act", title);
    

    if (title == "PREGUNTADOS"){
      if (localStorage.getItem("cat_act") == "1") {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Preguntados: Utensilios de higiene personal",
          descripcion: "Juego para reconocer los utensilios de higiene personal y sus usos",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      }else  if (localStorage.getItem("cat_act") == "2") {
        console.log("vale")
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Preguntados: Prendas de Vestir",
          descripcion: "Juego para reconocer las prendas de vestir y sus usos",
        };
  
        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);
  
          localStorage.setItem("id_juego", res._id);
  
          this.router.navigate(["actividades/instrucciones"]);
        });
    } else
    if (localStorage.getItem("cat_act") == "3") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Preguntados: Utensilios de Cocina",
        descripcion: "Juego para reconocer los utensilios  de cocina y sus usos",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });

      
    } else {
     
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Preguntados: Objetos apara tareas hogar",
        descripcion: "Juego para reconocer objetos para las tareas del hogar",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }

    }


    if (title == "GAME") {
      
      if (localStorage.getItem("cat_act") == "1") {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Cepillado de dientes",
          descripcion: "Juego para practicar el cepillado de dientes",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      }else  if (localStorage.getItem("cat_act") == "2") {
        console.log("vale")
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Vestir Mujer",
          descripcion: "Juego para aprender a vestirse (mujeres)",
        };
  
        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);
  
          localStorage.setItem("id_juego", res._id);
  
          this.router.navigate(["actividades/instrucciones"]);
        });
    } else
    if (localStorage.getItem("cat_act") == "3") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Preparación de un sandwich",
        descripcion: "Juego de recrear los pasos para preparar un sanduche",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });

      
    } else {
     
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Servir la mesa",
        descripcion: "Juego para practicar como se sirve la mesa",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }
    } 

    if(title == "PICTOGRAM"){
      this.router.navigate(["actividades/pictogram"]);

    }


  }
}
