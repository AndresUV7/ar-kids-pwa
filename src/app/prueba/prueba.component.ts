import { Component, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  bien = true;
  aux = 0;
  isLoaded = false;

  loaded($event){
    this.isLoaded = true;
  }

  constructor() { }

  ngOnInit() {
  }

  probar(){
    this.bien
  }

}

