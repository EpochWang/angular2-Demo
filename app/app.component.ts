import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { EmployerService } from './service/employer-service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a [routerLink]="['/employer']" routerLinkActive="active">自由球员</a>
      <a [routerLink]="['/job']" routerLinkActive="active">球队需求</a>
      <a [routerLink]="['/employer/dashboard']" routerLinkActive="active">顶薪球员</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls : ['app/app.component.css'],
  directives : [ ROUTER_DIRECTIVES ],
  providers : [EmployerService]
})
export class AppComponent {
  title = 'NBA自由球员市场';
}
