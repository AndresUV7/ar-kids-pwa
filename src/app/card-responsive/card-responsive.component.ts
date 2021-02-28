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
          title: "PREGUNTA2",
          subtitle: "Higiene",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/P",
        },
        {
          title: "AR-BOX",
          subtitle: "Higiene",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/A",
        },
        {
          title: "PICTOGRAM",
          subtitle: "Higiene",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/PIC",
        },
        {
          title: "CEPILLA2",
          subtitle: "Higiene",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/CEP",
        },
      ];
    } else if (localStorage.getItem("cat_act") == "2") {
      this.members = [
        {
          title: "PREGUNTA2",
          subtitle: "Vestir",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/PR",
        },
        {
          title: "AR-BOX",
          subtitle: "Vestir",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/AR",
        },
        {
          title: "CLASIFÍCALO",
          subtitle: "Vestir",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/CLASI",
        },
        {
          title: "A VESTIR",
          subtitle: "Vestir",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/AV",
        },
      ];
    } else if (localStorage.getItem("cat_act") == "3") {
      this.members = [
        {
          title: "PREGUNTA2",
          subtitle: "Cocina",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/PRE",
        },
        {
          title: "AR-BOX",
          subtitle: "Cocina",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/ARBO",
        },
        {
          title: "ENCUÉNTRALO",
          subtitle: "Cocina",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/E",
        },
        {
          title: "LUNCH TIME",
          subtitle: "Cocina",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
        A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
        bred for hunting.Content here`,
          url: "https://icotar.com/initials/L",
        },
      ];
    } else {
      this.members = [
        {
          title: "PREGUNTA2",
          subtitle: "Hogar",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/PREG",
        },
        {
          title: "AR-BOX",
          subtitle: "Hogar",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/ABO",
        },
        {
          title: "SONIGRAMA",
          subtitle: "Hogar",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/SONIG",
        },
        {
          title: "LA MESA",
          subtitle: "Hogar",
          content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
      A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
      bred for hunting.Content here`,
          url: "https://icotar.com/initials/LAMES",
        },
      ];
    }

    console.log(this.deviceInfo);
  }

  ngDoCheck(): void {
    this.deviceInfo = !this.deviceService.isMobile();
  }

  AR() {
    this.router.navigate(["actividades/asistente"]);
  }

  prueba(title) {
    localStorage.setItem("tip_act", title);

    if (title == "PREGUNTA2") {
      if (localStorage.getItem("cat_act") == "1") {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Pregunta2: Productos de higiene personal",
          descripcion:
            "Acitivdad para reconocer los productos de higiene personal y sus usos",
        };
        

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      } else if (localStorage.getItem("cat_act") == "2") {
        console.log("vale");
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Pregunta2: Prendas de Vestir",
          descripcion: "Acitivdad  para reconocer las prendas de vestir y su tratamiento",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      } else if (localStorage.getItem("cat_act") == "3") {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Pregunta2: Utensilios de Cocina",
          descripcion:
            "Acitivdad para reconocer los utensilios  de cocina y sus usos",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      } else {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "Pregunta2: Objetos para tareas hogar",
          descripcion: "Acitivdad para reconocer objetos para las tareas del hogar",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      }
    }

    if (title == "AR-BOX") {
      if (localStorage.getItem("cat_act") == "1") {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "AR-Box: Higiene y aseo",
          descripcion:
            "Actividad para aprender acerca de la higiene y aseo mediante videos interactivos",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      } else if (localStorage.getItem("cat_act") == "2") {
        console.log("vale");
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "AR-Box: Vestimenta",
          descripcion: "Actividad para aprender sobre el trato y uso de vestimenta mediante videos interactivos",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      } else if (localStorage.getItem("cat_act") == "3") {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "AR-Box: Recetas de Cocina",
          descripcion:
            "Actividad para aprender recetas de cocina sencillas mediante videos interactivos",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      } else {
        let juego: Juego = {
          usuario: localStorage.getItem("_id"),
          nombre: "AR-Box: Tareas del Hogar",
          descripcion: "Actividad para aprender a realizar actividades básicas del hogar mediante viedos interactivos",
        };

        this.juegoService.insertJuego(juego).subscribe((res) => {
          console.log(res);

          localStorage.setItem("id_juego", res._id);

          this.router.navigate(["actividades/instrucciones"]);
        });
      }
    }

    if (title == "CEPILLA2") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Cepilla2",
        descripcion: "Juego para practicar el cepillado de dientes",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }

    if (title == "A VESTIR") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "A Vestir",
        descripcion: "Juego para aprender a vestirse",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }

    if (title == "LUNCH TIME") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Lunch Time",
        descripcion: "Juego de recrear los pasos para preparar un sanduche",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }

    if (title == "LA MESA") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "La Mesa",
        descripcion: "Juego para practicar como se sirve la mesa",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }

    if (title == "PICTOGRAM") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Pictogram",
        descripcion: "Juego para repasar las actividades básicas de la higiene personal",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }
    
    if (title == "CLASIFÍCALO") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Clasifícalo",
        descripcion: "Juego para aprender a clasificar las prendas de vestir según su estado",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }


    if (title == "SONIGRAMA") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Sonigrama",
        descripcion: "Juego para ejercitar la memoria asociando objetos del hogar con su sonido",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);

        this.router.navigate(["actividades/instrucciones"]);
      });
    }
    
    if (title == "ENCUÉNTRALO") {
      let juego: Juego = {
        usuario: localStorage.getItem("_id"),
        nombre: "Encuéntralo",
        descripcion: "Juego para reforzar el reconocimiento de alimentos",
      };

      this.juegoService.insertJuego(juego).subscribe((res) => {
        console.log(res);

        localStorage.setItem("id_juego", res._id);
       
        this.router.navigate(["actividades/instrucciones"]);
      });
    }


  }
}
