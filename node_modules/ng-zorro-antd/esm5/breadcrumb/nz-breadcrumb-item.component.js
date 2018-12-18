/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { NzBreadCrumbComponent } from './nz-breadcrumb.component';
var NzBreadCrumbItemComponent = /** @class */ (function () {
    function NzBreadCrumbItemComponent(nzBreadCrumbComponent) {
        this.nzBreadCrumbComponent = nzBreadCrumbComponent;
    }
    NzBreadCrumbItemComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-breadcrumb-item',
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-breadcrumb-link\">\n  <ng-content></ng-content>\n</span>\n<span class=\"ant-breadcrumb-separator\">\n  <ng-container *nzStringTemplateOutlet=\"nzBreadCrumbComponent.nzSeparator\">\n    {{ nzBreadCrumbComponent.nzSeparator }}\n  </ng-container>\n</span>",
                    styles: ["\n    nz-breadcrumb-item:last-child {\n      color: rgba(0, 0, 0, 0.65);\n    }\n\n    nz-breadcrumb-item:last-child .ant-breadcrumb-separator {\n      display: none;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzBreadCrumbItemComponent.ctorParameters = function () { return [
        { type: NzBreadCrumbComponent }
    ]; };
    return NzBreadCrumbItemComponent;
}());
export { NzBreadCrumbItemComponent };
function NzBreadCrumbItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBreadCrumbItemComponent.prototype.nzBreadCrumbComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJicmVhZGNydW1iL256LWJyZWFkY3J1bWItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7O0lBbUJoRSxtQ0FBbUIscUJBQTRDO1FBQTVDLDBCQUFxQixHQUFyQixxQkFBcUIsQ0FBdUI7S0FBSzs7Z0JBakJyRSxTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxRQUFRLEVBQWEsb0JBQW9CO29CQUN6QyxtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiwwUkFBd0Q7NkJBQ2pDLG1MQVF0QjtpQkFDRjs7OztnQkFqQlEscUJBQXFCOztvQ0FGOUI7O1NBb0JhLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekJyZWFkQ3J1bWJDb21wb25lbnQgfSBmcm9tICcuL256LWJyZWFkY3J1bWIuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWJyZWFkY3J1bWItaXRlbScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnbnotYnJlYWRjcnVtYi1pdGVtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgbnotYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG4gICAgfVxuXG4gICAgbnotYnJlYWRjcnVtYi1pdGVtOmxhc3QtY2hpbGQgLmFudC1icmVhZGNydW1iLXNlcGFyYXRvciB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE56QnJlYWRDcnVtYkl0ZW1Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpCcmVhZENydW1iQ29tcG9uZW50OiBOekJyZWFkQ3J1bWJDb21wb25lbnQpIHsgfVxufVxuIl19