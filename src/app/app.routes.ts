import {RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProgressComponent } from './page/progress/progress.component';
import { Grafica1Component } from './page/grafica1/grafica1.component';
import { NopagefoundComponent } from './share/nopagefound/nopagefound.component';
import { PagesComponent } from './page/pages.component';
import { RegisterComponent } from './register/register.component';



const appRoutes: Routes = [
  {path: '', component: PagesComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'progress', component: ProgressComponent},
    {path: 'grficas1', component: Grafica1Component},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  ]},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: NopagefoundComponent}
];


export const APP_ROUTER = RouterModule.forRoot(appRoutes, {useHash: true});
