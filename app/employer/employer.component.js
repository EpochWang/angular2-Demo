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
var employer_detail_component_1 = require("./employer-detail.component");
var employer_service_1 = require("../service/employer-service");
var employer_search_component_1 = require("./employer-search.component");
var EmployerComponent = (function () {
    function EmployerComponent(employerService, router) {
        this.employerService = employerService;
        this.router = router;
        this.selectedEmployer = null;
    }
    EmployerComponent.prototype.onSelect = function (employer) {
        this.selectedEmployer = employer;
    };
    EmployerComponent.prototype.getEmployers = function () {
        var _this = this;
        this.employerService.getEmployers().then(function (employers) { return _this.employers = employers; });
        //this.employers = this.employerService.getEmployers();
    };
    EmployerComponent.prototype.ngOnInit = function () {
        this.getEmployers();
    };
    EmployerComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/employer/detail', { id: this.selectedEmployer.id }]);
    };
    EmployerComponent.prototype.addNew = function () {
        this.router.navigate(['/employer/detail']);
    };
    EmployerComponent.prototype.deleteEmployer = function (employer, event) {
        var _this = this;
        //event.stopPropagation();
        this.employerService
            .delete(employer)
            .then(function (res) {
            _this.employers = _this.employers.filter(function (h) { return h !== employer; });
            if (_this.selectedEmployer === employer) {
                _this.selectedEmployer = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    EmployerComponent = __decorate([
        core_1.Component({
            selector: 'my-employer',
            templateUrl: 'app/employer/employer.component.html',
            styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .employers {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 15em;\n      }\n      .employers li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .employers li.selected:hover {\n        background-color: #BBD8DC !important;\n        color: white;\n      }\n      .employers li:hover {\n        color: #607D8B;\n        background-color: #DDD;\n        left: .1em;\n      }\n      .employers .text {\n        position: relative;\n        top: -3px;\n      }\n      .employers .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0 0 4px;\n      }\n    "],
            directives: [employer_detail_component_1.EmployerDetailComponent, employer_search_component_1.EmployerSearchComponent]
        }), 
        __metadata('design:paramtypes', [employer_service_1.EmployerService, router_1.Router])
    ], EmployerComponent);
    return EmployerComponent;
})();
exports.EmployerComponent = EmployerComponent;
//# sourceMappingURL=employer.component.js.map