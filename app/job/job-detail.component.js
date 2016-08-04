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
var job_service_1 = require('../service/job.service');
var search_pipe_1 = require('./search.pipe');
var JobDetailComponent = (function () {
    function JobDetailComponent(jobService) {
        this.jobService = jobService;
        this.jobs = [];
        this.toggle = true;
    }
    JobDetailComponent.prototype.ngOnInit = function () {
        this.getJobs();
    };
    JobDetailComponent.prototype.getJobs = function () {
        var _this = this;
        this.jobService.getJobs()
            .then(function (jobs) { return _this.jobs = jobs; });
    };
    JobDetailComponent.prototype.onSelect = function (job) {
        this.selectedJob = job;
    };
    Object.defineProperty(JobDetailComponent.prototype, "format", {
        get: function () {
            return this.toggle ? 'shortDate' : 'fullDate';
        },
        enumerable: true,
        configurable: true
    });
    JobDetailComponent.prototype.toggleFormat = function () {
        this.toggle = !this.toggle;
    };
    JobDetailComponent = __decorate([
        core_1.Component({
            selector: 'job-detail',
            templateUrl: 'app/job/job-detail.component.html',
            pipes: [search_pipe_1.SearchPipe],
        }), 
        __metadata('design:paramtypes', [job_service_1.JobService])
    ], JobDetailComponent);
    return JobDetailComponent;
})();
exports.JobDetailComponent = JobDetailComponent;
//# sourceMappingURL=job-detail.component.js.map