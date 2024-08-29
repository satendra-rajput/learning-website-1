import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, inject, ViewChild } from '@angular/core';
import { MatDrawer, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss'
})
export class DashboardLayoutComponent {

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
          this._toastr.info(`User fetched successfully`);
          //console.log(res)
          this.autherDetails = res;
      },
      error: err => {
        this._toastr.error("Access denied");
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
        this._router.navigate(["/auth/login"]);
        this._toastr.info("User logged Out");
        sessionStorage.removeItem("accessToken");
        
      }
    })
  }

}