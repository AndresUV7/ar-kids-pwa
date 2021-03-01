import { Component, DoCheck, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-premios',
  templateUrl: './premios.component.html',
  styleUrls: ['./premios.component.css']
})
export class PremiosComponent implements OnInit {

  deviceInfo:any;
  h:any;
  constructor(private deviceService: DeviceDetectorService) { 
    this.deviceInfo = this.deviceService.isMobile();
  }
  ngOnInit() {

    if (this.deviceInfo){
      this.h = "120px";
    }else{
      this.h = "280px"
    }
 
  }


}
