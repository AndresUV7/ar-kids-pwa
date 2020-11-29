import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';


@Component({
  selector: 'app-de-paso',
  templateUrl: './de-paso.component.html',
  styleUrls: ['./de-paso.component.css']
})
export class DePasoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
    
    setTimeout(() => {
      this.router.navigate(['actividades/principal']);
    }, 1000);
  }

  

}
