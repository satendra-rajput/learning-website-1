import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { authGuard } from '../../core/guards/auth/auth.guard';
import { DashboardDefaultComponent } from './dashboard-default/dashboard-default.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { MyBooksComponent } from './my-books/my-books.component';
import { MyClassesComponent } from './my-classes/my-classes.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyCertificateComponent } from './my-certificate/my-certificate.component';
import { MyQuizComponent } from './my-quiz/my-quiz.component';
import { FreeCourseCardComponent } from '../homepage/free-course-card/free-course-card.component';

const routes: Routes = [
  {
    path: '', component: DashboardLayoutComponent,canActivate:[authGuard], children: [
      {path:'', redirectTo:'/dashboard/default', pathMatch:'full'},
      {path:'default', component:DashboardDefaultComponent, title:"Dashboard"},
      {path:'my_profile', component:MyProfileComponent, title:"My Profile"},
      {path:'my_courses', component:MyCoursesComponent, title:"My Courses"},
      {path:'my_books', component:MyBooksComponent, title:"My Books"},
      {path:'my_classes', component:MyClassesComponent, title:"My Classes"},
      {path:'my_orders', component:MyOrdersComponent, title:"My Orders"},
      {path:'my_courses_certificates', component:MyCertificateComponent, title:"My Courses Certificates"},
      {path:'my_test', component:MyQuizComponent, title:"My Test"},
      {path:'my_free_courses', component:FreeCourseCardComponent, title:"Free Coursess"},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
