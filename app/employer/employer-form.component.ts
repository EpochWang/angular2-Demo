import { Component, EventEmitter, Input, OnInit, OnDestroy, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import {Employer} from "./employer";
import {EmployerService} from "../service/employer-service";

@Component({
    selector : 'employer-form',
    templateUrl : 'app/employer/employer-form.component.html'
})

export class EmployerFormComponent{
    @Input()
    employer : Employer;
    error :any;

    constructor(private employerService : EmployerService){ }

    active = true;
    submitted = false;

    goals =  ['Warriors', 'Raptors', 'Celtics',
                'Hornets', 'Nets','Memphis'];

    get info(){
        return JSON.stringify(this.employer);
    }

    onSubmit(){
        this.submitted = true;
        this.employerService
                .save(this.employer)
                .then( employer => {
                    this.employer = employer;
                    //this.goBack(employer);
                })
                .catch(error => this.error = error);
    }


}