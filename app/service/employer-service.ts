import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Employers } from "../mock/mock-employers"
import 'rxjs/add/operator/toPromise';
import {Employer} from "../employer/employer";

@Injectable()
export class EmployerService{
    private url = 'app/employers';

    constructor(private http : Http){   }

    getEmployers(){
        //return Promise.resolve(Employers);
        return this.http.get(this.url)
            .toPromise()
            .then(response => response.json().data as Employer[])
            .catch(this.handleError);
    }

    getEmployer(id : number){
        return this.getEmployers()
                .then(employers => employers.find(employer => employer.id === id));
    }

    //错误处理
    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    //保存
    save(employer: Employer): Promise<Employer>  {
        if (employer.id) {
            return this.put(employer);
        }
        return this.post(employer);
    }

    //删除
    delete(employer: Employer) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.url}/${employer.id}`;
        return this.http
            .delete(url, {headers: headers})
            .toPromise()
            .catch(this.handleError);
    }

    // Add new employer
    private post(employer: Employer): Promise<Employer> {
        let headers = new Headers({
            'Content-Type': 'application/json'});
        return this.http
            .post(this.url, JSON.stringify(employer), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }

    // Update existing employer
    private put(employer: Employer) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let url = `${this.url}/${employer.id}`;
        return this.http
            .put(url, JSON.stringify(employer), {headers: headers})
            .toPromise()
            .then(() => employer)
            .catch(this.handleError);
    }
}