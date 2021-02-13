import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-picto',
  templateUrl: './picto.component.html',
  styleUrls: ['./picto.component.css']
})
export class PictoComponent implements OnInit, DoCheck {

  // ruta = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fpasta-en-cepillo.jpg?alt=media&token=e8128449-d9d5-44e8-a846-dbdf136493b5";
  // ruta2 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fmojar-cepillo-con-pasta%20(1).jpg?alt=media&token=764d7113-8c68-41b0-a251-de99d8b98a8f";
  // ruta3 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fcepillar-dientes.jpg?alt=media&token=ad36727b-ea44-478a-86a4-f4702a7b1872";
  // ruta4 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fmojar-cepillo-con-pasta.jpg?alt=media&token=cb230032-aaeb-43b9-8846-b35e87549259";
  // ruta5 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fllenar-vaso.jpg?alt=media&token=58305a02-a702-4735-91f5-ee92b9ed122c";
  // ruta6 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fenjuagar-boca.jpg?alt=media&token=6cdddea6-c410-47a1-ba34-2b9307a14969";
  // ruta7 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fcerrar-grifo.jpg?alt=media&token=1d4e59d7-5e75-4ea4-ae6d-854a8044c11e";
  // ruta8 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fsecotoalla.jpg?alt=media&token=63e87e27-c807-4f89-bfbe-c597619b8bf2";
 
  // ruta = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2FDESVESTIRSE.jpg?alt=media&token=7260c70b-ed00-4183-a12e-df54be2ed252";
  // ruta2 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fabrir-grifo.jpg?alt=media&token=226c975a-1255-4228-85fe-aad96b637b05";
  // ruta3 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Faclararse.jpg?alt=media&token=b6e60d1a-e9eb-47be-a07b-d48a8e7b09a6";
  // ruta4 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fenjabonarse.jpg?alt=media&token=38cfc2aa-0c47-4533-96a0-65e4d3d26258";
  // ruta5 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Faclararse%20(1).jpg?alt=media&token=dcc2f3ac-aaec-4901-a610-de2469297b28";
  // ruta6 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fcerrar-grifo.jpg?alt=media&token=9a20a222-5937-413a-9f0b-e27f91a420ab";
  // ruta7 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2FSECARSE.jpg?alt=media&token=87da2912-f83b-4aff-8215-189e33848066";
  // ruta8 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fducha%2Fvestirse_2.jpg?alt=media&token=6a37e14a-2406-4f5f-a069-f4bbd389b64e";

  ruta = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fabrir-grifo.jpg?alt=media&token=44d053fc-dd72-4f65-9615-256eb0f20c87";
  ruta2 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fechar-jabon.jpg?alt=media&token=7502ebe6-4519-43d2-9afd-822644e9be6d";
  ruta3 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Faclaromanos.jpg?alt=media&token=e6c25968-0f08-43c9-a1c8-c356e2d15e01";
  ruta4 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2FLAVARLASMANOS.jpg?alt=media&token=e2599157-4f79-448e-ac9c-cb0e7f383ce1";
  ruta5 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fcerrar-grifo.jpg?alt=media&token=ab4a9a52-187f-49d3-8e55-a2fa7231761b";
  ruta6 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fmanos%2Fsecotoalla.jpg?alt=media&token=b2ec0a59-f1ab-40a1-b2bb-3c35baf8c815";
  ruta7 = "";
  ruta8 = "";
  manos: boolean;
  
  constructor() { 
    this.manos =true;
  }

  ngOnInit() {

  }

  ngDoCheck(){
    console.log("object")
  }

}
