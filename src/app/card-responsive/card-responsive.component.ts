import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-card-responsive',
  templateUrl: './card-responsive.component.html',
  styleUrls: ['./card-responsive.component.css']
})
export class CardResponsiveComponent implements OnInit, DoCheck {

  deviceInfo = null;
  members: {title: string, subtitle: string, content: string, url: string}[] = [
    {title: 'Title', subtitle: 'Subtitle', content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
		A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
		bred for hunting.Content here`, url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
		A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
		bred for hunting.Content here`, url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
		A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
		bred for hunting.Content here`, url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    {title: 'Title', subtitle: 'Subtitle', content: `Content hereThe Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.
		A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally
		bred for hunting.Content here`, url: 'https://material.angular.io/assets/img/examples/shiba2.jpg'},
    
  ];

  constructor( private router:Router, private deviceService: DeviceDetectorService) {
    this.deviceInfo = !this.deviceService.isMobile();
   }

  ngOnInit() {
   
    console.log(this.deviceInfo)
  }

  ngDoCheck(): void {
    this.deviceInfo = !this.deviceService.isMobile();
  }

  prueba(){
    this.router.navigate(['actividades/vestir']);
  }
}
