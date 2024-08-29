import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { PricingPolicyComponent } from './pricing-policy/pricing-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';
import { TermsServicesComponent } from './terms-services/terms-services.component';
import { AboutLayoutComponent } from './about-layout/about-layout.component';

const routes: Routes = [
  {path:'',component:AboutLayoutComponent, children:[
    {path:'about_us', component:AboutUsComponent, title:'About us'},
    {path:'privacy_policy', component:PrivacyPolicyComponent, title:'Privacy Policy'},
    {path:'pricing_policy', component:PricingPolicyComponent, title:'Pricing policy'},
    {path:'refund_policy', component:RefundPolicyComponent, title:'Refund policy'},
    {path:'terms_services', component:TermsServicesComponent, title:'Terms Services'}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutCompanyRoutingModule { }
