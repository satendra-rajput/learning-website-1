import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { LocalStorage } from '../../constants/constant';

export const guestGuard: CanActivateFn = (route, state) => {
  
  const _Authservice = inject(AuthService);
  const _router = inject(Router);
  let myAccessToken = sessionStorage.getItem(LocalStorage.accessToken)
  if(myAccessToken){
    _router.navigate(["/dashboard"]);
  }
  return true;
};
