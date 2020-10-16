import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picto',
  templateUrl: './picto.component.html',
  styleUrls: ['./picto.component.css']
})
export class PictoComponent implements OnInit {

  ruta = "https://firebasestorage.googleapis.com/v0/b/arkids-da65c.appspot.com/o/test.jpg?alt=media&token=2dabb662-f10e-42eb-99fc-df932ac1f660";
  constructor() { }

  ngOnInit() {
  }

}
