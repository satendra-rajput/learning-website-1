import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDefaultComponent } from './admin-default/admin-default.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { adminGuard } from '../../core/guards/admin/admin.guard';

const routes: Routes = [
 {path:'', component:AdminPageComponent,canActivate:[adminGuard], children:[
  {path:'', redirectTo:'/admin/default', pathMatch:'full'},
  {path:'default', component:AdminDefaultComponent, canActivate:[adminGuard]},
  {path:'profile', component:ProfilePageComponent},
  {path:'create_post', component:CreatePostComponent, title:'Create post'},
  {path:'post/:id', component:PostEditComponent},
  {path:'post_list', component:PostListComponent}
 ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
