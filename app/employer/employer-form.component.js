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
var employer_1 = require("./employer");
var employer_service_1 = require("../service/employer-service");
var EmployerFormComponent = (function () {
    function EmployerFormComponent(employerService) {
        this.employerService = employerService;
        this.active = true;
        this.submitted = false;
        this.goals = ['Warriors', 'Raptors', 'Celtics',
            'Hornets', 'Nets', 'Memphis'];
    }
    Object.defineProperty(EmployerFormComponent.prototype, "info", {
        get: function () {
            return JSON.stringify(this.employer);
        },
        enumerable: true,
        configurable: true
    });
    EmployerFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        this.employerService
            .save(this.employer)
            .then(function (employer) {
            _this.employer = employer;
            //this.goBack(employer);
        })
            .catch(function (error) { return _this.error = error; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employer_1.Employer)
    ], EmployerFormComponent.prototype, "employer");
    EmployerFormComponent = __decorate([
        core_1.Component({
            selector: 'employer-form',
            templateUrl: 'app/employer/employer-form.component.html'
        }), 
        __metadata('design:paramtypes', [employer_service_1.EmployerService])
    ], EmployerFormComponent);
    return EmployerFormComponent;
})();
exports.EmployerFormComponent = EmployerFormComponent;
//# sourceMappingURL=employer-form.component.js.map