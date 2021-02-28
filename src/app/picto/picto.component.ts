import { Component, OnInit, DoCheck } from "@angular/core";
import { Juego } from "../models/Juego";
import { JuegoService } from '../services/juegos/juego.service';
declare function changeActivity(term): any;

@Component({
  selector: "app-picto",
  templateUrl: "./picto.component.html",
  styleUrls: ["./picto.component.css"],
})
export class PictoComponent implements OnInit, DoCheck {
  ruta: string;
  ruta2: string;
  ruta3: string;
  ruta4: string;
  ruta5: string;
  ruta6: string;
  ruta7: string;
  ruta8: string;
  
  audio: string;
  audio2: string;
  audio3: string;
  audio4: string;
  audio5: string;
  audio6: string;
  audio7: string;
  audio8: string;

  manos: boolean;
  juego: Juego

  constructor(public juegoService: JuegoService) {
  }

  ngOnInit() {
    this.manos = true;

    this.ruta =
      "src:url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fabrir-grifo.jpg?alt=media&token=44d053fc-dd72-4f65-9615-256eb0f20c87)";
    this.ruta2 =
      "src:url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fechar-jabon.jpg?alt=media&token=7502ebe6-4519-43d2-9afd-822644e9be6d)";
    this.ruta3 =
      "src:url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Faclaromanos.jpg?alt=media&token=e6c25968-0f08-43c9-a1c8-c356e2d15e01)";
    this.ruta4 =
      "src:url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2FLAVARLASMANOS.jpg?alt=media&token=e2599157-4f79-448e-ac9c-cb0e7f383ce1)";
    this.ruta5 =
      "src:url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fcerrar-grifo.jpg?alt=media&token=ab4a9a52-187f-49d3-8e55-a2fa7231761b)";
    this.ruta6 =
      "src:url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fsecotoalla.jpg?alt=media&token=b2ec0a59-f1ab-40a1-b2bb-3c35baf8c815)";
    this.ruta7 = "";
    this.ruta8 = "";

    this.audio = "src:url(/assets/audios/manos1.mp3); on:click"
    this.audio2 = "src:url(/assets/audios/manos2.mp3); on:click"
    this.audio3 = "src:url(/assets/audios/manos3.mp3); on:click"
    this.audio4 = "src:url(/assets/audios/manos4.mp3); on:click"
    this.audio5 = "src:url(/assets/audios/manos5.mp3); on:click"
    this.audio6 = "src:url(/assets/audios/manos6.mp3); on:click"
    this.audio7 = ""
    this.audio8 = ""
 
    this.juegoService
      .selectJuego(localStorage.getItem("id_juego"))
      .subscribe((res) => {
        this.juego = res;

        this.juego.partidas.push({
          fecha_inicio: new Date()
        });

        this.juegoService.updateJuego(this.juego).subscribe((res) => {
          this.juego = res;

          localStorage.setItem(
            "id_partida",
            this.juego.partidas.slice(-1)[0]._id
          );
        });
      });
  }

  ngDoCheck() {
    
  }

  lavarManos() {
    
    this.manos = true;
    
    this.ruta =
    "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fabrir-grifo.jpg?alt=media&token=44d053fc-dd72-4f65-9615-256eb0f20c87)";
    this.ruta2 =
    "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fechar-jabon.jpg?alt=media&token=7502ebe6-4519-43d2-9afd-822644e9be6d)";
    this.ruta3 =
    "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Faclaromanos.jpg?alt=media&token=e6c25968-0f08-43c9-a1c8-c356e2d15e01)";
    this.ruta4 =
    "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2FLAVARLASMANOS.jpg?alt=media&token=e2599157-4f79-448e-ac9c-cb0e7f383ce1)";
    this.ruta5 =
    "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fcerrar-grifo.jpg?alt=media&token=ab4a9a52-187f-49d3-8e55-a2fa7231761b)";
    this.ruta6 =
    "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fsecotoalla.jpg?alt=media&token=b2ec0a59-f1ab-40a1-b2bb-3c35baf8c815)";
    this.ruta7 = "";
    this.ruta8 = "";

    
    this.audio = "src:url(/assets/audios/manos1.mp3); on:click"
    this.audio2 = "src:url(/assets/audios/manos2.mp3); on:click"
    this.audio3 = "src:url(/assets/audios/manos3.mp3); on:click"
    this.audio4 = "src:url(/assets/audios/manos4.mp3); on:click"
    this.audio5 = "src:url(/assets/audios/manos5.mp3); on:click"
    this.audio6 = "src:url(/assets/audios/manos6.mp3); on:click"
    this.audio7 = ""
    this.audio8 = ""
    changeActivity("manos");
  }

  lavarDientes() {
    
    this.manos = !true;
    
    this.ruta =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fpasta-en-cepillo.jpg?alt=media&token=e8128449-d9d5-44e8-a846-dbdf136493b5)";
    this.ruta2 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fmojar-cepillo-con-pasta%20(1).jpg?alt=media&token=764d7113-8c68-41b0-a251-de99d8b98a8f)";
    this.ruta3 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fcepillar-dientes.jpg?alt=media&token=ad36727b-ea44-478a-86a4-f4702a7b1872)";
    this.ruta4 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fmojar-cepillo-con-pasta.jpg?alt=media&token=cb230032-aaeb-43b9-8846-b35e87549259)";
    this.ruta5 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fllenar-vaso.jpg?alt=media&token=58305a02-a702-4735-91f5-ee92b9ed122c)";
    this.ruta6 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fenjuagar-boca.jpg?alt=media&token=6cdddea6-c410-47a1-ba34-2b9307a14969)";
    this.ruta7 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fcerrar-grifo.jpg?alt=media&token=1d4e59d7-5e75-4ea4-ae6d-854a8044c11e)";
    this.ruta8 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fsecotoalla.jpg?alt=media&token=63e87e27-c807-4f89-bfbe-c597619b8bf2)";
  
      
    this.audio = "src:url(/assets/audios/dientes1.mp3); on:click"
    this.audio2 = "src:url(/assets/audios/dientes2.mp3); on:click"
    this.audio3 = "src:url(/assets/audios/dientes3.mp3); on:click"
    this.audio4 = "src:url(/assets/audios/dientes4.mp3); on:click"
    this.audio5 = "src:url(/assets/audios/dientes5.mp3); on:click"
    this.audio6 = "src:url(/assets/audios/dientes6.mp3); on:click"
    this.audio7 = "src:url(/assets/audios/dientes7.mp3); on:click"
    this.audio8 = "src:url(/assets/audios/dientes8.mp3); on:click"

      
    changeActivity("dientes");
    }


  irBano() {
    this.manos = !true;

    this.ruta =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2FDESVESTIRSE.jpg?alt=media&token=7260c70b-ed00-4183-a12e-df54be2ed252)";
    this.ruta2 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fabrir-grifo.jpg?alt=media&token=226c975a-1255-4228-85fe-aad96b637b05)";
    this.ruta3 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Faclararse.jpg?alt=media&token=b6e60d1a-e9eb-47be-a07b-d48a8e7b09a6)";
    this.ruta4 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fenjabonarse.jpg?alt=media&token=38cfc2aa-0c47-4533-96a0-65e4d3d26258)";
    this.ruta5 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Faclararse%20(1).jpg?alt=media&token=dcc2f3ac-aaec-4901-a610-de2469297b28)";
    this.ruta6 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fcerrar-grifo.jpg?alt=media&token=9a20a222-5937-413a-9f0b-e27f91a420ab)";
    this.ruta7 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2FSECARSE.jpg?alt=media&token=87da2912-f83b-4aff-8215-189e33848066)";
    this.ruta8 =
      "src: url(https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fvestirse_2.jpg?alt=media&token=6a37e14a-2406-4f5f-a069-f4bbd389b64e)";
   
      this.audio = "src:url(/assets/audios/ducha1.mp3); on:click"
      this.audio2 = "src:url(/assets/audios/ducha2.mp3); on:click"
      this.audio3 = "src:url(/assets/audios/ducha3.mp3); on:click"
      this.audio4 = "src:url(/assets/audios/ducha4.mp3); on:click"
      this.audio5 = "src:url(/assets/audios/ducha5.mp3); on:click"
      this.audio6 = "src:url(/assets/audios/ducha6.mp3); on:click"
      this.audio7 = "src:url(/assets/audios/ducha7.mp3); on:click"
      this.audio8 = "src:url(/assets/audios/ducha8.mp3); on:click"
      changeActivity("ducha");
  
    }
}
