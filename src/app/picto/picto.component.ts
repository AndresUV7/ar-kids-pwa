import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-picto',
  templateUrl: './picto.component.html',
  styleUrls: ['./picto.component.css']
})
export class PictoComponent implements OnInit, DoCheck {

  ruta = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fpasta-en-cepillo.jpg?alt=media&token=e8128449-d9d5-44e8-a846-dbdf136493b5";
  ruta2 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fmojar-cepillo-con-pasta%20(1).jpg?alt=media&token=764d7113-8c68-41b0-a251-de99d8b98a8f";
  ruta3 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fcepillar-dientes.jpg?alt=media&token=ad36727b-ea44-478a-86a4-f4702a7b1872";
  ruta4 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fmojar-cepillo-con-pasta.jpg?alt=media&token=cb230032-aaeb-43b9-8846-b35e87549259";
  ruta5 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fllenar-vaso.jpg?alt=media&token=58305a02-a702-4735-91f5-ee92b9ed122c";
  ruta6 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fenjuagar-boca.jpg?alt=media&token=6cdddea6-c410-47a1-ba34-2b9307a14969";
  ruta7 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fcerrar-grifo.jpg?alt=media&token=1d4e59d7-5e75-4ea4-ae6d-854a8044c11e";
  ruta8 = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/pictogramas%2Fdientes%2Fsecotoalla.jpg?alt=media&token=63e87e27-c807-4f89-bfbe-c597619b8bf2";
  constructor() { }

  ngOnInit() {
  }

  ngDoCheck(){
    console.log("object")
  }

}
