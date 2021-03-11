import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  pdfSrc = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/MANUAL%20DE%20USUARIO.pdf?alt=media&token=d48cfc36-3bab-43c4-aafc-e7e2f6ed48a0";
  constructor() { }

  ngOnInit() {
  }

}
