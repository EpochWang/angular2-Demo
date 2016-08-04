import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Employer} from "./employer";
import { EmployerDetailComponent } from "./employer-detail.component"
import { EmployerService } from "../service/employer-service";
import { EmployerSearchComponent } from "./employer-search.component";


@Component({
    selector: 'my-employer',
    templateUrl : 'app/employer/employer.component.html',
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .employers {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 15em;
      }
      .employers li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0;
        height: 1.6em;
        border-radius: 4px;
      }
      .employers li.selected:hover {
        background-color: #BBD8DC !important;
        color: white;
      }
      .employers li:hover {
        color: #607D8B;
        background-color: #DDD;
        left: .1em;
      }
      .employers .text {
        position: relative;
        top: -3px;
      }
      .employers .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0 0 4px;
      }
    `],
    directives: [ EmployerDetailComponent, EmployerSearchComponent ]
})


export class EmployerComponent implements OnInit{

    selectedEmployer : Employer = null;
    employers : Employer[];
    error : any;

    constructor(private employerService : EmployerService,
                private router : Router){ }

    onSelect(employer : Employer){
        this.selectedEmployer = employer;
    }

    getEmployers(){
        this.employerService.getEmployers().then(employers => this.employers = employers);
        //this.employers = this.employerService.getEmployers();
    }

    ngOnInit(){
        this.getEmployers();
    }

    gotoDetail(){
        this.router.navigate(['/employer/detail',{id:this.selectedEmployer.id}]);
    }

    addNew(){
        this.router.navigate(['/employer/detail']);
    }

    deleteEmployer(employer: Employer, event: any) {
        //event.stopPropagation();
        this.employerService
            .delete(employer)
            .then(res => {
                this.employers = this.employers.filter(h => h !== employer);
                if (this.selectedEmployer === employer) { this.selectedEmployer = null; }
            })
            .catch(error => this.error = error);
    }
}


