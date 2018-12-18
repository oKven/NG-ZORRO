/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { InputBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowDirective } from '../grid/nz-row.directive';
import { NzFormItemComponent } from './nz-form-item.component';
export class NzFormLabelComponent extends NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzFormItemComponent
     * @param {?} nzRowDirective
     */
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective);
        this.nzRequired = false;
    }
}
NzFormLabelComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-label',
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<label [attr.for]=\"nzFor\" [class.ant-form-item-required]=\"nzRequired\">\n  <ng-content></ng-content>\n</label>",
                host: {
                    '[class.ant-form-item-label]': 'true'
                }
            }] }
];
/** @nocollapse */
NzFormLabelComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] }
];
NzFormLabelComponent.propDecorators = {
    nzFor: [{ type: Input }],
    nzRequired: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzFormLabelComponent.prototype, "nzRequired", void 0);
function NzFormLabelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormLabelComponent.prototype.nzFor;
    /** @type {?} */
    NzFormLabelComponent.prototype.nzRequired;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1sYWJlbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZm9ybS9uei1mb3JtLWxhYmVsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUNMLFFBQVEsRUFDUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFhL0QsTUFBTSxPQUFPLG9CQUFxQixTQUFRLGNBQWM7Ozs7Ozs7SUFJdEQsWUFBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixtQkFBd0MsRUFBc0IsY0FBOEI7UUFDdE0sS0FBSyxDQUFDLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxtQkFBbUIsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUhuRixrQkFBc0MsS0FBSyxDQUFDO0tBSTNDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxlQUFlO2dCQUNwQyxTQUFTLEVBQVksQ0FBRSx3QkFBd0IsQ0FBRTtnQkFDakQsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7Z0JBQzNDLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCw2SEFBcUQ7Z0JBQ3JELElBQUksRUFBaUI7b0JBQ25CLDZCQUE2QixFQUFFLE1BQU07aUJBQ3RDO2FBQ0Y7Ozs7WUFoQlEsd0JBQXdCO1lBTi9CLFVBQVU7WUFVSCxtQkFBbUIsdUJBaUIrRCxRQUFRLFlBQUksSUFBSTtZQWxCbEcsY0FBYyx1QkFrQmtJLFFBQVEsWUFBSSxJQUFJOzs7b0JBSHRLLEtBQUs7eUJBQ0wsS0FBSzs7O0lBQUksWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSW5wdXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekNvbENvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQvbnotY29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2dyaWQvbnotcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekZvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1mb3JtLWxhYmVsJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZm9ybS1sYWJlbC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0tbGFiZWxdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtTGFiZWxDb21wb25lbnQgZXh0ZW5kcyBOekNvbENvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56Rm9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelJlcXVpcmVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpGb3JtSXRlbUNvbXBvbmVudDogTnpGb3JtSXRlbUNvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUpIHtcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Rm9ybUl0ZW1Db21wb25lbnQsIG56Um93RGlyZWN0aXZlKTtcbiAgfVxufVxuIl19