/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, EventEmitter, Host, Input, Optional, Output, QueryList, TemplateRef, ViewChild } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { NzThComponent } from './nz-th.component';
import { NzTableComponent } from './nz-table.component';
var NzTheadComponent = /** @class */ (function () {
    function NzTheadComponent(nzTableComponent) {
        this.nzTableComponent = nzTableComponent;
        this._singleSort = false;
        this.unsubscribe$ = new Subject();
        this.nzSortChange = new EventEmitter();
        if (this.nzTableComponent) {
            this.nzTableComponent.nzTheadComponent = this;
        }
    }
    Object.defineProperty(NzTheadComponent.prototype, "nzSingleSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._singleSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._singleSort = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sortChange = new Subject().asObservable();
        /** @type {?} */
        var listOfTh = this.listOfNzThComponent.toArray();
        /** @type {?} */
        var sortChangeArray = listOfTh.map(function (th) { return th.nzSortChangeWithKey; });
        if (sortChangeArray.length) {
            sortChangeArray.forEach(function (sort) {
                sortChange = merge(sort.asObservable(), sortChange);
            });
        }
        sortChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function (data) {
            _this.nzSortChange.emit(data);
            if (_this.nzSingleSort) {
                listOfTh.forEach(function (th) { return th.nzSort = (th.nzSortKey === data.key ? th.nzSort : null); });
            }
        });
    };
    /**
     * @return {?}
     */
    NzTheadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTheadComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'thead:not(.ant-table-thead)',
                    template: "<ng-template #contentTemplate>\n  <ng-content></ng-content>\n</ng-template>\n<ng-container *ngIf=\"!nzTableComponent\">\n  <ng-template [ngTemplateOutlet]=\"contentTemplate\"></ng-template>\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    NzTheadComponent.ctorParameters = function () { return [
        { type: NzTableComponent, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzTheadComponent.propDecorators = {
        template: [{ type: ViewChild, args: ['contentTemplate',] }],
        listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
        nzSortChange: [{ type: Output }],
        nzSingleSort: [{ type: Input }]
    };
    return NzTheadComponent;
}());
export { NzTheadComponent };
function NzTheadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTheadComponent.prototype._singleSort;
    /** @type {?} */
    NzTheadComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTheadComponent.prototype.template;
    /** @type {?} */
    NzTheadComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTheadComponent.prototype.nzSortChange;
    /** @type {?} */
    NzTheadComponent.prototype.nzTableComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGhlYWQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoZWFkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxlQUFlLEVBQ2YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBRUwsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF3QnRELDBCQUF1QyxnQkFBa0M7UUFBbEMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjsyQkFoQm5ELEtBQUs7NEJBQ0osSUFBSSxPQUFPLEVBQVE7UUFJMUMsb0JBQWtDLElBQUksWUFBWSxFQUFrQyxDQUFDO1FBWW5GLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7U0FDL0M7S0FDRjtJQWJELHNCQUNJLDBDQUFZOzs7O1FBSWhCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVBELFVBQ2lCLEtBQWM7WUFDN0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDckM7OztPQUFBOzs7O0lBWUQsNkNBQWtCOzs7SUFBbEI7UUFBQSxpQkFlQzs7UUFkQyxJQUFJLFVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBa0MsQ0FBQyxZQUFZLEVBQUUsQ0FBQzs7UUFDOUUsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUNwRCxJQUFNLGVBQWUsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLG1CQUFtQixFQUF0QixDQUFzQixDQUFDLENBQUM7UUFDbkUsSUFBSSxlQUFlLENBQUMsTUFBTSxFQUFFO1lBQzFCLGVBQWUsQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dCQUMxQixVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxVQUFVLENBQUMsQ0FBQzthQUNyRCxDQUFDLENBQUM7U0FDSjtRQUNELFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDMUQsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0IsSUFBSSxLQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsRUFBRSxJQUFJLE9BQUEsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQTFELENBQTBELENBQUMsQ0FBQzthQUNwRjtTQUNGLENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzlCOztnQkFoREYsU0FBUyxTQUFDOztvQkFFVCxRQUFRLEVBQUssNkJBQTZCO29CQUMxQywwTkFBd0M7aUJBQ3pDOzs7O2dCQU5RLGdCQUFnQix1QkF3QlYsSUFBSSxZQUFJLFFBQVE7OzsyQkFiNUIsU0FBUyxTQUFDLGlCQUFpQjtzQ0FDM0IsZUFBZSxTQUFDLGFBQWEsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7K0JBQ3BELE1BQU07K0JBRU4sS0FBSzs7MkJBcENSOztTQTRCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56VGhDb21wb25lbnQgfSBmcm9tICcuL256LXRoLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IE56VGFibGVDb21wb25lbnQgfSBmcm9tICcuL256LXRhYmxlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yICAgOiAndGhlYWQ6bm90KC5hbnQtdGFibGUtdGhlYWQpJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LXRoZWFkLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRoZWFkQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfc2luZ2xlU29ydCA9IGZhbHNlO1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgQFZpZXdDaGlsZCgnY29udGVudFRlbXBsYXRlJykgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAQ29udGVudENoaWxkcmVuKE56VGhDb21wb25lbnQsIHsgZGVzY2VuZGFudHM6IHRydWUgfSkgbGlzdE9mTnpUaENvbXBvbmVudDogUXVlcnlMaXN0PE56VGhDb21wb25lbnQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2luZ2xlU29ydCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3NpbmdsZVNvcnQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2luZ2xlU29ydCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2luZ2xlU29ydDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKEBIb3N0KCkgQE9wdGlvbmFsKCkgcHVibGljIG56VGFibGVDb21wb25lbnQ6IE56VGFibGVDb21wb25lbnQpIHtcbiAgICBpZiAodGhpcy5uelRhYmxlQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56VGFibGVDb21wb25lbnQubnpUaGVhZENvbXBvbmVudCA9IHRoaXM7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGxldCBzb3J0Q2hhbmdlID0gbmV3IFN1YmplY3Q8eyBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyB9PigpLmFzT2JzZXJ2YWJsZSgpO1xuICAgIGNvbnN0IGxpc3RPZlRoID0gdGhpcy5saXN0T2ZOelRoQ29tcG9uZW50LnRvQXJyYXkoKTtcbiAgICBjb25zdCBzb3J0Q2hhbmdlQXJyYXkgPSBsaXN0T2ZUaC5tYXAodGggPT4gdGgubnpTb3J0Q2hhbmdlV2l0aEtleSk7XG4gICAgaWYgKHNvcnRDaGFuZ2VBcnJheS5sZW5ndGgpIHtcbiAgICAgIHNvcnRDaGFuZ2VBcnJheS5mb3JFYWNoKHNvcnQgPT4ge1xuICAgICAgICBzb3J0Q2hhbmdlID0gbWVyZ2Uoc29ydC5hc09ic2VydmFibGUoKSwgc29ydENoYW5nZSk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgc29ydENoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZShkYXRhID0+IHtcbiAgICAgIHRoaXMubnpTb3J0Q2hhbmdlLmVtaXQoZGF0YSk7XG4gICAgICBpZiAodGhpcy5uelNpbmdsZVNvcnQpIHtcbiAgICAgICAgbGlzdE9mVGguZm9yRWFjaCh0aCA9PiB0aC5uelNvcnQgPSAodGgubnpTb3J0S2V5ID09PSBkYXRhLmtleSA/IHRoLm56U29ydCA6IG51bGwpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=