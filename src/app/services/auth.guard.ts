import { Injectable } from '@angular/core';
import { CanActivate, Router, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){

  }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.loginService.isLoggedIn()) {
        this.router.navigateByUrl('/');
        this.loginService.logOut();
        return false;
      }
    return true;
  }

  
  
}
