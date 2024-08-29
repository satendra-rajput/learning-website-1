import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';
import { DashboardSidebarComponent } from './dashboard-sidebar/dashboard-sidebar.component';
import { FreeCoursesComponent } from './free-courses/free-courses.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { MyCertificateComponent } from './my-certificate/my-certificate.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyQuizComponent } from './my-quiz/my-quiz.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MaterialListModule } from '../../shared/material-list/material-list.module';
import { HomepageModule } from '../homepage/homepage.module';


@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DashboardDefaultComponent,
    DashboardSidebarComponent,
    FreeCoursesComponent,
    MyBooksComponent,
    MyCertificateComponent,
    MyClassesComponent,
    MyCoursesComponent,
    MyOrdersComponent,
    MyQuizComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialListModule,
    HomepageModule
  ]
})
export class DashboardModule { }
