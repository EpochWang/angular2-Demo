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
var HighlightDirective = (function () {
    function HighlightDirective(el) {
        this.el = el.nativeElement;
    }
    HighlightDirective.prototype.onMouseEnter = function () {
        this.highlight('yellow');
    };
    HighlightDirective.prototype.onMouseLeave = function () {
        this.highlight(null);
    };
    HighlightDirective.prototype.highlight = function (color) {
        this.el.style.backgroundColor = color;
    };
    Object.defineProperty(HighlightDirective.prototype, "onMouseEnter",
        __decorate([
            core_1.HostListener('mouseenter'), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', []), 
            __metadata('design:returntype', void 0)
        ], HighlightDirective.prototype, "onMouseEnter", Object.getOwnPropertyDescriptor(HighlightDirective.prototype, "onMouseEnter")));
    Object.defineProperty(HighlightDirective.prototype, "onMouseLeave",
        __decorate([
            core_1.HostListener('mouseleave'), 
            __metadata('design:type', Function), 
            __metadata('design:paramtypes', []), 
            __metadata('design:returntype', void 0)
        ], HighlightDirective.prototype, "onMouseLeave", Object.getOwnPropertyDescriptor(HighlightDirective.prototype, "onMouseLeave")));
    HighlightDirective = __decorate([
        core_1.Directive({ selector: '[myHighlight]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], HighlightDirective);
    return HighlightDirective;
})();
exports.HighlightDirective = HighlightDirective;
//# sourceMappingURL=highlight.directive.js.map