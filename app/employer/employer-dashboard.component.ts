import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employer } from './employer';
import { EmployerService } from "../service/employer-service";


@Component({
    selector : "my-employer-dashboard",
    templateUrl : 'app/employer/employer-dashboard.component.html',
    styleUrls : ['app/styles/dashboard.component.css']
})

export class EmployerDashboardComponent implements OnInit{
    employers : Employer[] = [];

    constructor(private employerService : EmployerService,
                private router : Router){ }

    ngOnInit(){
        this.employerService.getEmployers()
            .then(employers => this.employers = employers.slice(1,3));
    }

    gotoDetail(employer : Employer){
        let link = ['/employer/detail', {id:employer.id} ];
        this.router.navigate(link);
    }
}