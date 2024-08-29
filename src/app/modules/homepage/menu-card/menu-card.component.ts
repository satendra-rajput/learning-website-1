import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorage } from '../../../core/constants/constant';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrl: './menu-card.component.scss'
})
export class MenuCardComponent implements OnInit {

  CloseOpen: boolean = false;
  isChecked?: boolean = false;
  isLoggedIn: boolean = false;
  isDarkMode: boolean = false;
  autherDetails: any = [];


  _AuthService = inject(AuthService);
  _router = inject(Router);
  _toastr = inject(ToastrService);

  isDarkModeMethod() {
    this.isDarkMode = !this.isDarkMode;
  }

  ngOnInit(): void {
    const myAccesstoken = sessionStorage.getItem(LocalStorage.accessToken)
    if (!myAccesstoken) {
      this._router.navigate([])
      this.isLoggedIn = true;
    }

    this._AuthService.GetCurrentUser().subscribe({
      next: res => {
        this.autherDetails = res;
      },
      error: err => {
        setTimeout(() => {
          this._toastr.info("If you want to learn more advanced then join");
        }, 10000)
        this._router.navigate([])
      }
    })
  }

  dashboard() {
    if (this.autherDetails.data.designation === "admin") {
      this._router.navigate(["/admin/default"])
    } else {
      this._router.navigate(["/dashboard/default"])
    }

  }
}
