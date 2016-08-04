import { Component } from '@angular/core';

import { JobDetailComponent } from '../job/job-detail.component';
import { JobService } from '../service/job.service';
import  { JobSearchComponent } from '../job/job-search.component';
import {HighlightDirective} from './highlight.directive';

@Component({
    selector: 'my-job',
    template :
        `
        <h1 myHighlight>Job List</h1>
        <job-detail></job-detail>
        `,
    directives : [ JobDetailComponent, JobSearchComponent, HighlightDirective ],
    providers : [ JobService ]
})


export class JobComponent{

}