import { AfterViewInit, ChangeDetectorRef, Component, inject, OnInit, signal, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { AuthService } from '../../../core/services/auth/auth.service';


@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss'
})
export class AdminPageComponent {

  
  autherDetails:any=[];

  @ViewChild(MatDrawer)
  sidenav!: MatSidenav;

  _AuthService = inject(AuthService);
  _router = inject(Router);
  _toastr = inject(ToastrService);
  _cd = inject(ChangeDetectorRef);
  _observer = inject(BreakpointObserver);

  constructor(){
  }
  

  ngOnInit(): void {
    this._AuthService.GetCurrentUser().subscribe({
      next: res => {
          this.autherDetails = res;
           this._toastr.info(`Admin fetched successfully`);
      },
      error: err => {
        this._toastr.error("Access denied, Please login");
        this._router.navigateByUrl("/auth/login")
      }
    })
  }

  ngAfterViewInit(): void {
    this._observer.observe(['(max-width:768px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close()
      } else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    })
    this._cd.detectChanges();
  }

  logoutUser(){
    this._AuthService.logoutUser().subscribe({
      next: res => {
        console.log(res);
        this._toastr.info(`Admin logged Out`);
        sessionStorage.removeItem("accessToken");
        sessionStorage.removeItem("Admin");
        this._router.navigate(["/auth/login"]);
      }
    })
  }

}


