import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { FooterCardComponent } from './footer-card/footer-card.component';
import { BannerCardComponent } from './banner-card/banner-card.component';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { SupportCardComponent } from './support-card/support-card.component';
import { FreeCourseCardComponent } from './free-course-card/free-course-card.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TechnologyCardComponent } from './technology-card/technology-card.component';
import { MaterialListModule } from '../../shared/material-list/material-list.module';


@NgModule({
  declarations: [
    MenuCardComponent,
    FooterCardComponent,
    BannerCardComponent,
    BlogCardComponent,
    SupportCardComponent,
    FreeCourseCardComponent,
    NotFoundComponent,
    TechnologyCardComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MaterialListModule
  ],
  exports:[
    MenuCardComponent,
    FooterCardComponent,
    BannerCardComponent,
    BlogCardComponent,
    SupportCardComponent,
    FreeCourseCardComponent,
    TechnologyCardComponent
  ]
})
export class HomepageModule { }
