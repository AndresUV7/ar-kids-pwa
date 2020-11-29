import {MediaMatcher} from '@angular/cdk/layout';
import { AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnDestroy, OnInit, AfterViewChecked {

  showBar = false;
  showSide = true;

  // showBar = false;

  mobileQuery: MediaQueryList;

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  fillerContent = Array.from({length: 50}, () =>
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
       labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
       voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
       cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

  private _mobileQueryListener: () => void;
    constructor(private router: Router, private changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private loginService: LoginService, private data: DataService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    

  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);

  }

  ngAfterViewChecked(){

    this.data.currentBarState.subscribe(message => this.showSide = message)
    this.changeDetectorRef.detectChanges();
  }

  ngOnInit(){
    
    if(this.loginService.isLoggedIn()){
      this.showBar= true;
    }
   
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate(["/"]);
    this.showBar = false;
    // window.location.reload();
  }

  irAdmin(){
    this.router.navigate(["actividades/admin-users"]);

  }

  prueba(){
    this.router.navigate(['actividades/ar-box']);
  }
  
  irPremios(){
    this.router.navigate(['actividades/premios']);
  }

  irHome(){
    this.router.navigate(["/"]);
  }


  shouldRun = true;
}
