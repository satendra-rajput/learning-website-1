import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  
  const _Authservice = inject(AuthService);
  const _router = inject(Router);
  let adminAccess = sessionStorage.getItem("Admin");

  if(!adminAccess){
    _router.navigateByUrl("/dashboard/default");
  }
  return true;
};
