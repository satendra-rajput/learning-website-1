import { response } from 'express';
import { map } from 'rxjs';
import { LocalStorage } from './../../core/constants/constant';
import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../core/services/auth/auth.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  _AuthService = inject(AuthService);
  _router = inject(Router);
  _toastr = inject(ToastrService);

  constructor(
   
  ){}



  loginForm: FormGroup = new FormGroup<any>({
    email: new FormControl('',[Validators.email, Validators.required,]),
    password: new FormControl('', [Validators.minLength(4)])
  })


  LoginSumbit() {
    //console.log(this.loginForm.value);
    this._AuthService.loginUser(this.loginForm.value).subscribe({
      next:(response)=>{
       console.log("Loging",response);
        if(response.user.designation ==="admin"){
          this._router.navigate(["/admin"]);
         // sessionStorage.setItem("Admin", response.user.designation);
          this._toastr.success(`Admin Login Sucessful!`);
        }else if(response.user.designation ==="user"){
          this._router.navigate(["/dashboard"]);
          this._toastr.success(`User Login Sucessful!`);
        }
      
        this._AuthService.isLoggedIn.update(()=>true);
      }, error:(err)=>{
        this._toastr.error('Email or password is not valid!');
      },
    })
  }
  
}
