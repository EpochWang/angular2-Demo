var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var job_detail_component_1 = require('../job/job-detail.component');
var job_service_1 = require('../service/job.service');
var job_search_component_1 = require('../job/job-search.component');
var highlight_directive_1 = require('./highlight.directive');
var JobComponent = (function () {
    function JobComponent() {
    }
    JobComponent = __decorate([
        core_1.Component({
            selector: 'my-job',
            template: "\n        <h1 myHighlight>Job List</h1>\n        <job-detail></job-detail>\n        ",
            directives: [job_detail_component_1.JobDetailComponent, job_search_component_1.JobSearchComponent, highlight_directive_1.HighlightDirective],
            providers: [job_service_1.JobService]
        }), 
        __metadata('design:paramtypes', [])
    ], JobComponent);
    return JobComponent;
})();
exports.JobComponent = JobComponent;
//# sourceMappingURL=job.component.js.map