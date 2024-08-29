import { Routes } from '@angular/router';
import { IndexPageComponent } from './index-page/index-page.component';
import { NotFoundComponent } from './modules/homepage/not-found/not-found.component';

export const routes: Routes = [
    { path: '', component: IndexPageComponent },

    {
        path: '', loadChildren: () => import('./modules/about-company/about-company.module')
            .then(mod => mod.AboutCompanyModule)
    },
    
    {
        path: 'auth', loadChildren: () => import('./authentication/authentication.module')
            .then(mod => mod.AuthenticationModule)
    },

    {
        path: 'admin', loadChildren: () => import('./modules/admin/admin.module')
            .then(mod => mod.AdminModule)
    },


    {
        path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module')
            .then(mod => mod.DashboardModule)
    },



    { path: '**', component: NotFoundComponent }
];
