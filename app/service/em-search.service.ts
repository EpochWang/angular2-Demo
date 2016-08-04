import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Employer} from "../employer/employer";

@Injectable()
export class EmployerSearchService {
    constructor(private http: Http) {}
    search(term: string) {
        return this.http
            .get(`app/employers/?name=${term}+`)
            .map((r: Response) => r.json().data as Employer[]);
    }
}
