import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ayuda',
  templateUrl: './ayuda.component.html',
  styleUrls: ['./ayuda.component.css']
})
export class AyudaComponent implements OnInit {
  pdfSrc = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/manual.pdf?alt=media&token=cf5e1c8f-3a5d-44ef-89bc-2cc058aa622a";
  constructor() { }

  ngOnInit() {
  }

}
