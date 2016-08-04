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
var employer_form_component_1 = require("./employer-form.component");
var employer_1 = require("./employer");
var EmployerDetailComponent = (function () {
    function EmployerDetailComponent(employerService, route) {
        this.employerService = employerService;
        this.route = route;
        this.navigated = false;
    }
    EmployerDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            if (params['id'] !== undefined) {
                var id = +params['id'];
                _this.employerService.getEmployer(id)
                    .then(function (employer) { return _this.employer = employer; });
            }
            else {
                _this.employer = new employer_1.Employer();
            }
        });
    };
    EmployerDetailComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    EmployerDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    EmployerDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-employer-detail',
            templateUrl: 'app/employer/employer-detail.component.html',
            styleUrls: ['app/styles/dashboard.component.css'],
            directives: [employer_form_component_1.EmployerFormComponent]
        }), 
        __metadata('design:paramtypes', [employer_service_1.EmployerService, router_1.ActivatedRoute])
    ], EmployerDetailComponent);
    return EmployerDetailComponent;
})();
exports.EmployerDetailComponent = EmployerDetailComponent;
//# sourceMappingURL=employer-detail.component.js.map