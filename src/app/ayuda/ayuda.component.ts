import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  pdfSrc = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/MANUAL%20DE%20USUARIO.pdf?alt=media&token=c45dcb0d-3880-4496-8e9f-e7c9a1ec6b49";
  constructor() { }

  ngOnInit() {
  }

}
