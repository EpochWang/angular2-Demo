import { Injectable } from '@angular/core';
import { Jobs } from "../mock/mock-jobs"

@Injectable()
export class JobService{
    getJobs(){
        return Promise.resolve(Jobs);
    }

    getJob(id : number){
        return this.getJobs()
            .then(jobs => jobs.find(job => job.id === id));
    }
}