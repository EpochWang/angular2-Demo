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
var router_1 = require('@angular/router');
var employer_service_1 = require("../service/employer-service");
var EmployerDashboardComponent = (function () {
    function EmployerDashboardComponent(employerService, router) {
        this.employerService = employerService;
        this.router = router;
        this.employers = [];
    }
    EmployerDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employerService.getEmployers()
            .then(function (employers) { return _this.employers = employers.slice(1, 3); });
    };
    EmployerDashboardComponent.prototype.gotoDetail = function (employer) {
        var link = ['/employer/detail', { id: employer.id }];
        this.router.navigate(link);
    };
    EmployerDashboardComponent = __decorate([
        core_1.Component({
            selector: "my-employer-dashboard",
            templateUrl: 'app/employer/employer-dashboard.component.html',
            styleUrls: ['app/styles/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [employer_service_1.EmployerService, router_1.Router])
    ], EmployerDashboardComponent);
    return EmployerDashboardComponent;
})();
exports.EmployerDashboardComponent = EmployerDashboardComponent;
//# sourceMappingURL=employer-dashboard.component.js.map