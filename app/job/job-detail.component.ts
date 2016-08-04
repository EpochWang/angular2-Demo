import { Component,OnInit } from '@angular/core';
import {Job} from "./job";
import { JobService } from '../service/job.service';
import { SearchPipe } from './search.pipe';
import  { JobSearchComponent } from '../job/job-search.component';

@Component({
    selector : 'job-detail',
    templateUrl: 'app/job/job-detail.component.html',
    pipes : [ SearchPipe],
})

export class JobDetailComponent implements OnInit{
    jobs : Job[] =  [];
    selectedJob : Job;
    toggle = true;

    constructor(private jobService : JobService){ }

    ngOnInit(){
        this.getJobs();
    }

    getJobs(){
        this.jobService.getJobs()
                        .then( jobs => this.jobs = jobs);
    }

    onSelect(job : Job){
        this.selectedJob = job;
    }

    get format(){
        return this.toggle ? 'shortDate' : 'fullDate';
    }

    toggleFormat(){
        this.toggle = !this.toggle;
    }



}

