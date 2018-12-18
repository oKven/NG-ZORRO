/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
var NzCardMetaComponent = /** @class */ (function () {
    function NzCardMetaComponent() {
    }
    NzCardMetaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-card-meta',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<div class=\"ant-card-meta-avatar\" *ngIf=\"nzAvatar\">\n  <ng-template [ngTemplateOutlet]=\"nzAvatar\"></ng-template>\n</div>\n<div class=\"ant-card-meta-detail\" *ngIf=\"nzTitle || nzDescription\">\n  <div class=\"ant-card-meta-title\" *ngIf=\"nzTitle\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </div>\n  <div class=\"ant-card-meta-description\" *ngIf=\"nzDescription\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </div>\n</div>",
                    host: {
                        '[class.ant-card-meta]': 'true'
                    },
                    styles: ["\n    nz-card-meta {\n      display: block;\n    }\n  "]
                }] }
    ];
    NzCardMetaComponent.propDecorators = {
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzAvatar: [{ type: Input }]
    };
    return NzCardMetaComponent;
}());
export { NzCardMetaComponent };
function NzCardMetaComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCardMetaComponent.prototype.nzTitle;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzDescription;
    /** @type {?} */
    NzCardMetaComponent.prototype.nzAvatar;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC1tZXRhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjYXJkL256LWNhcmQtbWV0YS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7Z0JBRXpHLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsY0FBYztvQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxpaUJBQW9EO29CQU1wRCxJQUFJLEVBQWlCO3dCQUNuQix1QkFBdUIsRUFBRSxNQUFNO3FCQUNoQzs2QkFQc0Isd0RBSXRCO2lCQUlGOzs7MEJBRUUsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7OzhCQXBCUjs7U0FpQmEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhcmQtbWV0YScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNhcmQtbWV0YS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIG56LWNhcmQtbWV0YSB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNhcmQtbWV0YV0nOiAndHJ1ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcmRNZXRhQ29tcG9uZW50IHtcbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekF2YXRhcjogVGVtcGxhdGVSZWY8dm9pZD47XG59XG4iXX0=