import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.scss'
})
export class ProfilePageComponent {

  
  editMode: boolean = false
  userdetails: any = [];
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private toastr: ToastrService,
  ) { }

  ngOnInit(): void {
    this._authService.GetCurrentUser().subscribe({
      next: res => {
        this.userdetails = res;
      }
    })
  }

  updateUser(data: any): void {
    console.log(data.value);
    // this._authService.register(data).subscribe({
    //   next: res => {
    //     this.toastr.success("Registration Successfuly!")
    //   }
    // })
  }

  editModeOpen(): void {
    this.editMode = true
  }
}

