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
var Rx_1 = require('rxjs/Rx');
var Subject_1 = require('rxjs/Subject');
var em_search_service_1 = require('../service/em-search.service');
var EmployerSearchComponent = (function () {
    function EmployerSearchComponent(employerSearchService, router) {
        this.employerSearchService = employerSearchService;
        this.router = router;
        this.searchSubject = new Subject_1.Subject();
    }
    // Push a search term into the observable stream.
    EmployerSearchComponent.prototype.search = function (term) { this.searchSubject.next(term); };
    EmployerSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employers = this.searchSubject
            .asObservable()
            .debounceTime(3000)
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(function (term) { return term // switch to new observable each time
            ? _this.employerSearchService.search(term)
            : Rx_1.Observable.of([]); })
            .catch(function (error) {
            // Todo: real error handling
            console.log(error);
            return Rx_1.Observable.of([]);
        });
    };
    EmployerSearchComponent.prototype.gotoDetail = function (employer) {
        var link = ['/detail', employer.id];
        this.router.navigate(link);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Rx_1.Observable)
    ], EmployerSearchComponent.prototype, "employers");
    EmployerSearchComponent = __decorate([
        core_1.Component({
            selector: 'mysearch',
            template: "\n    <div id=\"search-component\">\n        <h4>MySearch</h4>\n        <input #searchBox id=\"search-box\" (keyup)=\"search(searchBox.value)\" />\n           <div>\n            <div *ngFor=\"let employer of employers | async\"\n            (click)=\"gotoDetail(employer)\" class=\"search-result\" >\n            {{employer.name}}\n            </div>\n        </div>\n    </div>\n    ",
            providers: [em_search_service_1.EmployerSearchService]
        }), 
        __metadata('design:paramtypes', [em_search_service_1.EmployerSearchService, router_1.Router])
    ], EmployerSearchComponent);
    return EmployerSearchComponent;
})();
exports.EmployerSearchComponent = EmployerSearchComponent;
//# sourceMappingURL=employer-search.component.js.map