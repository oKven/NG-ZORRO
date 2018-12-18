/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
import { NzCardTabComponent } from './nz-card-tab.component';
var NzCardComponent = /** @class */ (function () {
    function NzCardComponent() {
        this.nzBordered = true;
        this.nzLoading = false;
        this.nzHoverable = false;
        this.nzActions = [];
    }
    NzCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-head\" *ngIf=\"nzTitle || nzExtra || tab\">\n  <div class=\"ant-card-head-wrapper\">\n    <div class=\"ant-card-head-title\" *ngIf=\"nzTitle\">\n      <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n    </div>\n    <div class=\"ant-card-extra\" *ngIf=\"nzExtra\">\n      <ng-container *nzStringTemplateOutlet=\"nzExtra\">{{ nzExtra }}</ng-container>\n    </div>\n  </div>\n  <ng-container *ngIf=\"tab\">\n    <ng-template [ngTemplateOutlet]=\"tab.template\"></ng-template>\n  </ng-container>\n</div>\n<div class=\"ant-card-cover\" *ngIf=\"nzCover\">\n  <ng-template [ngTemplateOutlet]=\"nzCover\"></ng-template>\n</div>\n<div class=\"ant-card-body\" [ngStyle]=\"nzBodyStyle\">\n  <ng-container *ngIf=\"!nzLoading\">\n    <ng-content></ng-content>\n  </ng-container>\n  <nz-card-loading *ngIf=\"nzLoading\"></nz-card-loading>\n</div>\n<ul class=\"ant-card-actions\" *ngIf=\"nzActions.length\">\n  <li *ngFor=\"let action of nzActions\" [style.width.%]=\"100 / nzActions.length\">\n    <span><ng-template [ngTemplateOutlet]=\"action\"></ng-template></span>\n  </li>\n</ul>",
                    host: {
                        '[class.ant-card]': 'true',
                        '[class.ant-card-loading]': 'nzLoading',
                        '[class.ant-card-bordered]': 'nzBordered',
                        '[class.ant-card-hoverable]': 'nzHoverable',
                        '[class.ant-card-type-inner]': "nzType === 'inner'",
                        '[class.ant-card-contain-tabs]': '!!tab'
                    },
                    styles: ["\n    nz-card {\n      display: block;\n    }\n  "]
                }] }
    ];
    NzCardComponent.propDecorators = {
        nzBordered: [{ type: Input }],
        nzLoading: [{ type: Input }],
        nzHoverable: [{ type: Input }],
        nzBodyStyle: [{ type: Input }],
        nzCover: [{ type: Input }],
        nzActions: [{ type: Input }],
        nzType: [{ type: Input }],
        nzTitle: [{ type: Input }],
        nzExtra: [{ type: Input }],
        tab: [{ type: ContentChild, args: [NzCardTabComponent,] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzBordered", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCardComponent.prototype, "nzHoverable", void 0);
    return NzCardComponent;
}());
export { NzCardComponent };
function NzCardComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCardComponent.prototype.nzBordered;
    /** @type {?} */
    NzCardComponent.prototype.nzLoading;
    /** @type {?} */
    NzCardComponent.prototype.nzHoverable;
    /** @type {?} */
    NzCardComponent.prototype.nzBodyStyle;
    /** @type {?} */
    NzCardComponent.prototype.nzCover;
    /** @type {?} */
    NzCardComponent.prototype.nzActions;
    /** @type {?} */
    NzCardComponent.prototype.nzType;
    /** @type {?} */
    NzCardComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardComponent.prototype.nzExtra;
    /** @type {?} */
    NzCardComponent.prototype.tab;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2FyZC9uei1jYXJkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7OztRQXVCM0Qsa0JBQXNDLElBQUksQ0FBQztRQUMzQyxpQkFBcUMsS0FBSyxDQUFDO1FBQzNDLG1CQUF1QyxLQUFLLENBQUM7UUFHN0MsaUJBQStDLEVBQUUsQ0FBQzs7O2dCQTFCbkQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7b0JBQzNDLGduQ0FBK0M7b0JBTS9DLElBQUksRUFBaUI7d0JBQ25CLGtCQUFrQixFQUFlLE1BQU07d0JBQ3ZDLDBCQUEwQixFQUFPLFdBQVc7d0JBQzVDLDJCQUEyQixFQUFNLFlBQVk7d0JBQzdDLDRCQUE0QixFQUFLLGFBQWE7d0JBQzlDLDZCQUE2QixFQUFJLG9CQUFvQjt3QkFDckQsK0JBQStCLEVBQUUsT0FBTztxQkFDekM7NkJBWnNCLG1EQUl0QjtpQkFTRjs7OzZCQUVFLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzhCQUNMLEtBQUs7MEJBQ0wsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzswQkFDTCxLQUFLO3NCQUNMLFlBQVksU0FBQyxrQkFBa0I7OztRQVR0QixZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7OzswQkFsQzFCOztTQStCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBJbnB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpDYXJkVGFiQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLXRhYi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhcmQnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgbnotY2FyZCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhcmRdJyAgICAgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1jYXJkLWxvYWRpbmddJyAgICAgOiAnbnpMb2FkaW5nJyxcbiAgICAnW2NsYXNzLmFudC1jYXJkLWJvcmRlcmVkXScgICAgOiAnbnpCb3JkZXJlZCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FyZC1ob3ZlcmFibGVdJyAgIDogJ256SG92ZXJhYmxlJyxcbiAgICAnW2NsYXNzLmFudC1jYXJkLXR5cGUtaW5uZXJdJyAgOiBgbnpUeXBlID09PSAnaW5uZXInYCxcbiAgICAnW2NsYXNzLmFudC1jYXJkLWNvbnRhaW4tdGFic10nOiAnISF0YWInXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJkQ29tcG9uZW50IHtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Qm9yZGVyZWQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekhvdmVyYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuekJvZHlTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBASW5wdXQoKSBuekNvdmVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcbiAgQElucHV0KCkgbnpUeXBlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekV4dHJhOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQENvbnRlbnRDaGlsZChOekNhcmRUYWJDb21wb25lbnQpIHRhYjogTnpDYXJkVGFiQ29tcG9uZW50O1xufVxuIl19