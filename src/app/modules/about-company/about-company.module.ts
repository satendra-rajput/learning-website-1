import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutCompanyRoutingModule } from './about-company-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsServicesComponent } from './terms-services/terms-services.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { PricingPolicyComponent } from './pricing-policy/pricing-policy.component';
import { AboutLayoutComponent } from './about-layout/about-layout.component';
import { HomepageModule } from '../homepage/homepage.module';
import { MaterialListModule } from '../../shared/material-list/material-list.module';



@NgModule({
  declarations: [
    AboutUsComponent,
    TermsServicesComponent,
    PrivacyPolicyComponent,
    RefundPolicyComponent,
    PricingPolicyComponent,
    AboutLayoutComponent
  ],
  imports: [
    CommonModule,
    AboutCompanyRoutingModule,
    HomepageModule,
    MaterialListModule
  ]
})
export class AboutCompanyModule { }
