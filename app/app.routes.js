var router_1 = require('@angular/router');
var employer_component_1 = require('./employer/employer.component');
var job_component_1 = require("./job/job.component");
var employer_dashboard_component_1 = require("./employer/employer-dashboard.component");
var employer_detail_component_1 = require("./employer/employer-detail.component");
var routes = [
    {
        path: 'employer',
        component: employer_component_1.EmployerComponent
    }, {
        path: 'employer/dashboard',
        component: employer_dashboard_component_1.EmployerDashboardComponent
    }, {
        path: 'job',
        component: job_component_1.JobComponent
    }, {
        path: '',
        redirectTo: 'employer/dashboard',
        pathMatch: 'full'
    }, {
        path: 'employer/detail',
        component: employer_detail_component_1.EmployerDetailComponent
    }
];
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map