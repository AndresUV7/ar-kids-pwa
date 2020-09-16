import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanActivate {
  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }


  canActivate():boolean{
    if(!this.loginService.isLogged()){
      return true;
    }

    this.router.navigate(['/actividades/principal']);
    return false;
  }
  
}
