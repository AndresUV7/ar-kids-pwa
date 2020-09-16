import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoginService } from './login.service';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {


  constructor(private loginService:LoginService,private router : Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    if (req.headers.get('noauth'))
        return next.handle(req.clone());
    else {
        const clonedreq = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + this.loginService.getToken())
        });
        return next.handle(clonedreq).pipe(
            tap(
                event => { },
                err => {
                    if (err.error.auth == false) {
                        this.router.navigateByUrl('/');
                    }
                })
        );
    }
}

  
}
