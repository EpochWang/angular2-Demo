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
var mock_jobs_1 = require("../mock/mock-jobs");
var JobService = (function () {
    function JobService() {
    }
    JobService.prototype.getJobs = function () {
        return Promise.resolve(mock_jobs_1.Jobs);
    };
    JobService.prototype.getJob = function (id) {
        return this.getJobs()
            .then(function (jobs) { return jobs.find(function (job) { return job.id === id; }); });
    };
    JobService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], JobService);
    return JobService;
})();
exports.JobService = JobService;
//# sourceMappingURL=job.service.js.map