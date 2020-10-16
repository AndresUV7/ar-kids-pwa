import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, OnInit } from '@angular/core';
import { NguCarousel, NguCarouselConfig } from '@ngu/carousel';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit  {

  
  name = 'Angular';
  slideNo = 0;
  withAnim = true;
  resetAnim = true;
  loadComponent = true;
  
  message : any

  @ViewChild('myCarousel',null) myCarousel: NguCarousel;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 3,
    interval: {timing: 4000, initialDelay: 1000},
    loop: true,
    touch: true,
    velocity: 0.2
  }

  constructor(private cdr: ChangeDetectorRef,  private router:Router, private service: DataService) {}

  ngOnInit() {
    // this.service.currentMessage.subscribe(message => this.message = message)
    // console.log(this.message)
    // console.log(this.service.getMessage());

  }

  
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
  
  reset() {
    this.myCarousel.reset(!this.resetAnim);
  }
  
  moveTo(slide) {      
    this.myCarousel.moveTo(slide, !this.withAnim);
  }
  
  higiene(){
    this.router.navigate(['actividades/listar']);
    localStorage.setItem("cat_act", "1");
  }
  vestir(){
    this.router.navigate(['actividades/listar']);
    localStorage.setItem("cat_act", "2");
  }
  cocina(){
    this.router.navigate(['actividades/listar']);
    localStorage.setItem("cat_act", "3");
  }
  hogar(){
    this.router.navigate(['actividades/listar']);
    localStorage.setItem("cat_act", "4");
  }

 

  
    

}
