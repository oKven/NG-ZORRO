/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Optional } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from './nz-col.component';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
var NzColDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzColDirective, _super);
    function NzColDirective(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) {
        return _super.call(this, nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) || this;
    }
    NzColDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-col]',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzColDirective.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    return NzColDirective;
}(NzColComponent));
export { NzColDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osUUFBUSxFQUNULE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQU1oQiwwQ0FBYztJQUNoRCx3QkFBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixjQUE4QixFQUFzQixjQUE4QjtlQUM1TCxrQkFBTSx3QkFBd0IsRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQztLQUM1RTs7Z0JBUEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRyxVQUFVO29CQUNyQixTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtpQkFDeEM7Ozs7Z0JBVFEsd0JBQXdCO2dCQUwvQixVQUFVO2dCQVFILGNBQWMsdUJBUW9FLFFBQVEsWUFBSSxJQUFJO2dCQVBsRyxjQUFjLHVCQU93SCxRQUFRLFlBQUksSUFBSTs7eUJBbEIvSjtFQWlCb0MsY0FBYztTQUFyQyxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTnpDb2xDb21wb25lbnQgfSBmcm9tICcuL256LWNvbC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuL256LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiAnW256LWNvbF0nLFxuICBwcm92aWRlcnM6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDb2xEaXJlY3RpdmUgZXh0ZW5kcyBOekNvbENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93Q29tcG9uZW50OiBOelJvd0NvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUpIHtcbiAgICBzdXBlcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWYsIG56Um93Q29tcG9uZW50LCBuelJvd0RpcmVjdGl2ZSk7XG4gIH1cbn1cbiJdfQ==