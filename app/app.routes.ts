import { provideRouter, RouterConfig } from '@angular/router';
import { EmployerComponent } from './employer/employer.component';
import {JobComponent} from "./job/job.component";
import {EmployerDashboardComponent} from "./employer/employer-dashboard.component";
import {EmployerDetailComponent} from "./employer/employer-detail.component";

const routes : RouterConfig = [
    {
        path : 'employer',
        component : EmployerComponent
    },{
        path : 'employer/dashboard',
        component : EmployerDashboardComponent
    },{
        path : 'job',
        component : JobComponent
    },{
        path : '',
        redirectTo : 'employer/dashboard',
        pathMatch : 'full'
    },{
        path : 'employer/detail',
        component : EmployerDetailComponent
    }

];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];