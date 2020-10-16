import { Component, OnChanges, OnInit } from '@angular/core';

declare function test():any;

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  aux = 0;
  isLoaded = false;

  loaded($event){
    this.isLoaded = true;
  }

  constructor() { }

  ngOnInit() {
    console.log(test());
  }

}

