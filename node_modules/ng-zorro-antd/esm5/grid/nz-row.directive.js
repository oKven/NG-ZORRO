/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzRowComponent } from './nz-row.component';
var NzRowDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzRowDirective, _super);
    function NzRowDirective(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) {
        return _super.call(this, elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) || this;
    }
    NzRowDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-row]',
                    providers: [NzUpdateHostClassService]
                },] }
    ];
    /** @nocollapse */
    NzRowDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform }
    ]; };
    return NzRowDirective;
}(NzRowComponent));
export { NzRowDirective };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztJQU1oQiwwQ0FBYztJQUNoRCx3QkFBWSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsd0JBQWtELEVBQUUsWUFBMEIsRUFBRSxNQUFjLEVBQUUsUUFBa0I7ZUFDekssa0JBQU0sVUFBVSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQztLQUN0Rjs7Z0JBUEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRyxVQUFVO29CQUNyQixTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtpQkFDeEM7Ozs7Z0JBZEMsVUFBVTtnQkFFVixTQUFTO2dCQUtGLHdCQUF3QjtnQkFGeEIsWUFBWTtnQkFKbkIsTUFBTTtnQkFLQyxRQUFROzt5QkFSakI7RUFpQm9DLGNBQWM7U0FBckMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgTmdab25lLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuL256LXJvdy5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiAnW256LXJvd10nLFxuICBwcm92aWRlcnM6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpSb3dEaXJlY3RpdmUgZXh0ZW5kcyBOelJvd0NvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlciwgbmdab25lOiBOZ1pvbmUsIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIG1lZGlhTWF0Y2hlciwgbmdab25lLCBwbGF0Zm9ybSk7XG4gIH1cbn1cbiJdfQ==