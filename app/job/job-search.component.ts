import { Component, EventEmitter, Output} from '@angular/core';
import { JobService } from '../service/job.service';

@Component({
    selector : 'job-search',
    template :
    `
    <input type="text" #param>&nbsp;&nbsp;&nbsp;<button (onclick)="search(param)">搜索</button>
    `
})

export class JobSearchComponent{
    @Output()
    search = new EventEmitter();
}