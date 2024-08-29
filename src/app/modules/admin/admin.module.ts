import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdminDefaultComponent } from './admin-default/admin-default.component';
import { AdminSideComponent } from './admin-side/admin-side.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { PostListComponent } from './post-list/post-list.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MaterialListModule } from '../../shared/material-list/material-list.module';
import { HomepageModule } from '../homepage/homepage.module';

@NgModule({
  declarations: [
    AdminPageComponent,
    AdminDefaultComponent,
    AdminSideComponent,
    CreatePostComponent,
    PostEditComponent,
    PostListComponent,
    ProfilePageComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialListModule,
    HomepageModule
  ]
})
export class AdminModule { }
