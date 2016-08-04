import { Component , Input , OnInit , OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {EmployerService} from "../service/employer-service";
import { EmployerFormComponent } from "./employer-form.component";
import {Employer} from "./employer";

@Component({
    selector : 'my-employer-detail',
    templateUrl : 'app/employer/employer-detail.component.html',
    styleUrls : ['app/styles/dashboard.component.css'],
    directives : [EmployerFormComponent]
})

export class EmployerDetailComponent implements  OnInit,OnDestroy{
    //@Input()
    employer : Employer;
    sub: any;
    navigated = false;

    constructor(private employerService : EmployerService,
                private route : ActivatedRoute){
    }

    ngOnInit(){
        this.sub = this.route.params.subscribe(params => {
            if( params['id'] !== undefined ) {
                let id = +params['id'];
                this.employerService.getEmployer(id)
                    .then(employer => this.employer = employer);
           }else{
             this.employer = new Employer();
             }
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    goBack(){
        window.history.back();
    }
}