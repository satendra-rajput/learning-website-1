import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { guestGuard } from '../core/guards/guest/guest.guard';

const routes: Routes = [
  {path:'login',  component:LoginPageComponent,canActivate:[guestGuard],  title:"Login - Satendra Rajput"},
  {path:'register', component:RegisterPageComponent, title:"Register - Satendra Rajput"},
  {path:'forget_password', component:ForgetPasswordComponent, title:"Forget Password - Satendra Rajput"},
  {path:'reset_password', component:ResetPasswordComponent, title:"Reset Password - Satendra Rajput"},
  {path:'verification_code', component:CodeVerifyComponent, title:"Verification Code - Satendra Rajput"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
