/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzRowComponent } from './nz-row.component';
export class NzRowDirective extends NzRowComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform);
    }
}
NzRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-row]',
                providers: [NzUpdateHostClassService]
            },] }
];
/** @nocollapse */
NzRowDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLE1BQU0sRUFDTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUV0RixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFNcEQsTUFBTSxPQUFPLGNBQWUsU0FBUSxjQUFjOzs7Ozs7Ozs7SUFDaEQsWUFBWSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsd0JBQWtELEVBQUUsWUFBMEIsRUFBRSxNQUFjLEVBQUUsUUFBa0I7UUFDekssS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsd0JBQXdCLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLENBQUMsQ0FBQztLQUN2Rjs7O1lBUEYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRyxVQUFVO2dCQUNyQixTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTthQUN4Qzs7OztZQWRDLFVBQVU7WUFFVixTQUFTO1lBS0Ysd0JBQXdCO1lBRnhCLFlBQVk7WUFKbkIsTUFBTTtZQUtDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIE5nWm9uZSxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yb3cuY29tcG9uZW50JztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yIDogJ1tuei1yb3ddJyxcbiAgcHJvdmlkZXJzOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIE56Um93RGlyZWN0aXZlIGV4dGVuZHMgTnpSb3dDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsIG5nWm9uZTogTmdab25lLCBwbGF0Zm9ybTogUGxhdGZvcm0pIHtcbiAgICBzdXBlcihlbGVtZW50UmVmLCByZW5kZXJlciwgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBtZWRpYU1hdGNoZXIsIG5nWm9uZSwgcGxhdGZvcm0pO1xuICB9XG59XG4iXX0=