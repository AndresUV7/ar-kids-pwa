import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  centered = false;
  disabled = false;
  unbounded = false;
  breakpoint;
  radius: number;
  color="#3f51b5";
  deviceInfo:any;
  h:any;
  constructor(private deviceService: DeviceDetectorService) { 
    this.deviceInfo = this.deviceService.isMobile();
  }

  ngOnInit() {

    if (this.deviceInfo){
      this.h = "150px";
    }else{
      this.h = "320px"
    }
  }

  
}
