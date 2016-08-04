import { Component, OnInit,Input } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Rx';
import { Subject }           from 'rxjs/Subject';

import { EmployerSearchService } from '../service/em-search.service';
import { Employer } from '../employer/employer';

@Component({
    selector: 'mysearch',
    template:
    `
    <div id="search-component">
        <h4>MySearch</h4>
        <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />
           <div>
            <div *ngFor="let employer of employers | async"
            (click)="gotoDetail(employer)" class="search-result" >
            {{employer.name}}
            </div>
        </div>
    </div>
    `,
    providers: [EmployerSearchService]
})
export class EmployerSearchComponent implements OnInit {
    @Input()
    employers: Observable<Employer[]>;
    searchSubject = new Subject<string>();

    constructor(
        private employerSearchService: EmployerSearchService,
        private router: Router) {   }

    // Push a search term into the observable stream.
    search(term: string) { this.searchSubject.next(term); }

    ngOnInit() {
        this.employers = this.searchSubject
            .asObservable()
            .debounceTime(3000)
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.employerSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<Employer[]>([]))
            .catch(error => {
                // Todo: real error handling
                console.log(error);
                return Observable.of<Employer[]>([]);
            });
    }
    gotoDetail(employer: Employer) {
        let link = ['/detail', employer.id];
        this.router.navigate(link);
    }
}
