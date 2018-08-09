import { NgModule } from '@angular/core';

// module
import { SharedModule } from '../share/shared.module';

import { DashboardComponent } from '../page/dashboard/dashboard.component';
import { ProgressComponent } from '../page/progress/progress.component';
import { Grafica1Component } from '../page/grafica1/grafica1.component';
import { PagesComponent } from './pages.component';
import { PAGE_ROUTER } from './page.route';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Grafica1Component,
        SharedModule,
    ],

    imports: [
        SharedModule,
        PAGE_ROUTER
    ]
})

export class PageModules { }
