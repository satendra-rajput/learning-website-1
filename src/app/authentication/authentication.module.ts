import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { MaterialListModule } from '../shared/material-list/material-list.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    CodeVerifyComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MaterialListModule
  ]
})
export class AuthenticationModule { }
