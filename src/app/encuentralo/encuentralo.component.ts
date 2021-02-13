import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encuentralo',
  templateUrl: './encuentralo.component.html',
  styleUrls: ['./encuentralo.component.css']
})
export class EncuentraloComponent implements OnInit {

  positions:string;
  constructor() {
   }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      console.log("no soporta")
    }
  }

  showPosition(position) {
    console.log(position.coords.latitude,position.coords.longitude )

    this.positions = "latitude: "+position.coords.latitude+"; longitude: "+position.coords.longitude+";";
  }

}
