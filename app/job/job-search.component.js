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
var JobSearchComponent = (function () {
    function JobSearchComponent() {
        this.search = new core_1.EventEmitter();
    }
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], JobSearchComponent.prototype, "search");
    JobSearchComponent = __decorate([
        core_1.Component({
            selector: 'job-search',
            template: "\n    <input type=\"text\" #param>&nbsp;&nbsp;&nbsp;<button (onclick)=\"search(param)\">\u641C\u7D22</button>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], JobSearchComponent);
    return JobSearchComponent;
})();
exports.JobSearchComponent = JobSearchComponent;
//# sourceMappingURL=job-search.component.js.map