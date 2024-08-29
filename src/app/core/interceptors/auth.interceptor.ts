import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { Router } from '@angular/router';
import { catchError, retry, throwError } from 'rxjs';
import { LocalStorage } from '../constants/constant';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const _AuthService = inject(AuthService);
  const _router = inject(Router);
  const myAccessToken = sessionStorage.getItem(LocalStorage.accessToken);
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${myAccessToken}`
    }
  });
  return next(authReq).pipe(
    retry(2),
    catchError((e:HttpErrorResponse)=>{
      if(e.status===401){
        sessionStorage.removeItem(LocalStorage.accessToken);
        _router.navigate(["/auth/login"])
      }

      const error = e.error.message || e.statusText;
      return throwError(()=> error);
    })
  );
};
