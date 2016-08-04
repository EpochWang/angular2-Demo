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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var EmployerService = (function () {
    function EmployerService(http) {
        this.http = http;
        this.url = 'app/employers';
    }
    EmployerService.prototype.getEmployers = function () {
        //return Promise.resolve(Employers);
        return this.http.get(this.url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    EmployerService.prototype.getEmployer = function (id) {
        return this.getEmployers()
            .then(function (employers) { return employers.find(function (employer) { return employer.id === id; }); });
    };
    //错误处理
    EmployerService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    //保存
    EmployerService.prototype.save = function (employer) {
        if (employer.id) {
            return this.put(employer);
        }
        return this.post(employer);
    };
    //删除
    EmployerService.prototype.delete = function (employer) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.url + "/" + employer.id;
        return this.http
            .delete(url, { headers: headers })
            .toPromise()
            .catch(this.handleError);
    };
    // Add new employer
    EmployerService.prototype.post = function (employer) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post(this.url, JSON.stringify(employer), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing employer
    EmployerService.prototype.put = function (employer) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.url + "/" + employer.id;
        return this.http
            .put(url, JSON.stringify(employer), { headers: headers })
            .toPromise()
            .then(function () { return employer; })
            .catch(this.handleError);
    };
    EmployerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], EmployerService);
    return EmployerService;
})();
exports.EmployerService = EmployerService;
//# sourceMappingURL=employer-service.js.map