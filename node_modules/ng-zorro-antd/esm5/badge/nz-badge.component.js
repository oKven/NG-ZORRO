/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { AnimationCurves } from '../core/animation/animation';
import { isEmpty } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
/** @type {?} */
var ANIMATION_TRANSITION_IN = "0.3s " + AnimationCurves.EASE_IN_BACK;
/** @type {?} */
var ANIMATION_TRANSITION_OUT = "0.3s " + AnimationCurves.EASE_IN_BACK;
var NzBadgeComponent = /** @class */ (function () {
    function NzBadgeComponent(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.maxNumberArray = [];
        this.countArray = [];
        this.countSingleArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        this.nzShowZero = false;
        this.nzShowDot = true;
        this.nzDot = false;
        this.nzOverflowCount = 99;
    }
    Object.defineProperty(NzBadgeComponent.prototype, "nzCount", {
        get: /**
         * @return {?}
         */
        function () {
            return this._count;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value < 0) {
                this._count = 0;
            }
            else {
                this._count = value;
            }
            this.countArray = this._count.toString().split('');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzBadgeComponent.prototype, "showSup", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzShowDot && this.nzDot) || this.nzCount > 0 || ((this.nzCount === 0) && this.nzShowZero);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.checkContent = /**
     * @return {?}
     */
    function () {
        if (isEmpty(this.contentElement.nativeElement)) {
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'ant-badge-not-a-wrapper');
        }
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.maxNumberArray = this.nzOverflowCount.toString().split('');
    };
    /**
     * @return {?}
     */
    NzBadgeComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.checkContent();
    };
    NzBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-badge',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('zoomAnimation', [
                            transition(':enter', [
                                style({ opacity: 0, transform: 'scale(0) translateX(50%)' }),
                                animate(ANIMATION_TRANSITION_IN, style({
                                    opacity: 1,
                                    transform: 'scale(1) translateX(50%)'
                                }))
                            ]),
                            transition(':leave', [
                                style({ opacity: 1, transform: 'scale(1) translateX(50%)' }),
                                animate(ANIMATION_TRANSITION_OUT, style({
                                    opacity: 0,
                                    transform: 'scale(0) translateX(50%)'
                                }))
                            ])
                        ])
                    ],
                    template: "<span (cdkObserveContent)=\"checkContent()\" #contentElement><ng-content></ng-content></span>\n<span class=\"ant-badge-status-dot ant-badge-status-{{nzStatus}}\" *ngIf=\"nzStatus\" [ngStyle]=\"nzStyle\"></span>\n<span class=\"ant-badge-status-text\" *ngIf=\"nzStatus\">{{ nzText }}</span>\n<sup class=\"ant-scroll-number\"\n  *ngIf=\"showSup\"\n  @zoomAnimation\n  [ngStyle]=\"nzStyle\"\n  [class.ant-badge-count]=\"!nzDot\"\n  [class.ant-badge-dot]=\"nzDot\"\n  [class.ant-badge-multiple-words]=\"countArray.length>=2\">\n  <ng-container *ngFor=\"let number of maxNumberArray;let i= index;\">\n    <span class=\"ant-scroll-number-only\"\n      *ngIf=\"nzCount <= nzOverflowCount\"\n      [style.transform]=\"'translateY('+((-countArray[i]*100))+'%)'\">\n        <ng-container *ngIf=\"(!nzDot)&&(countArray[i]!=null)\">\n          <p *ngFor=\"let p of countSingleArray\" [class.current]=\"p==countArray[i]\">{{ p }}</p>\n        </ng-container>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"nzCount > nzOverflowCount\">{{ nzOverflowCount }}+</ng-container>\n</sup>",
                    host: {
                        '[class.ant-badge]': 'true',
                        '[class.ant-badge-status]': 'nzStatus'
                    }
                }] }
    ];
    /** @nocollapse */
    NzBadgeComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzBadgeComponent.propDecorators = {
        contentElement: [{ type: ViewChild, args: ['contentElement',] }],
        nzShowZero: [{ type: Input }],
        nzShowDot: [{ type: Input }],
        nzDot: [{ type: Input }],
        nzOverflowCount: [{ type: Input }],
        nzText: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzCount: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowZero", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzShowDot", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzBadgeComponent.prototype, "nzDot", void 0);
    return NzBadgeComponent;
}());
export { NzBadgeComponent };
function NzBadgeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzBadgeComponent.prototype.maxNumberArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countArray;
    /** @type {?} */
    NzBadgeComponent.prototype.countSingleArray;
    /** @type {?} */
    NzBadgeComponent.prototype.contentElement;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowZero;
    /** @type {?} */
    NzBadgeComponent.prototype.nzShowDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzDot;
    /** @type {?} */
    NzBadgeComponent.prototype.nzOverflowCount;
    /** @type {?} */
    NzBadgeComponent.prototype.nzText;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStyle;
    /** @type {?} */
    NzBadgeComponent.prototype.nzStatus;
    /** @type {?} */
    NzBadgeComponent.prototype._count;
    /** @type {?} */
    NzBadgeComponent.prototype.renderer;
    /** @type {?} */
    NzBadgeComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImJhZGdlL256LWJhZGdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUVwRCxJQUFNLHVCQUF1QixHQUFHLFVBQVEsZUFBZSxDQUFDLFlBQWMsQ0FBQzs7QUFDdkUsSUFBTSx3QkFBd0IsR0FBRyxVQUFRLGVBQWUsQ0FBQyxZQUFjLENBQUM7O0lBZ0V0RSwwQkFBb0IsUUFBbUIsRUFBVSxVQUFzQjtRQUFuRCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQTlCdkUsc0JBQWlCLEVBQUUsQ0FBQztRQUNwQixrQkFBYSxFQUFFLENBQUM7UUFDaEIsd0JBQW1CLENBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFFLENBQUM7UUFFcEQsa0JBQXNDLEtBQUssQ0FBQztRQUM1QyxpQkFBcUMsSUFBSSxDQUFDO1FBQzFDLGFBQWlDLEtBQUssQ0FBQztRQUN2Qyx1QkFBMkIsRUFBRSxDQUFDO0tBeUI3QjtJQXBCRCxzQkFDSSxxQ0FBTzs7OztRQVNYO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVpELFVBQ1ksS0FBYTtZQUN2QixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7Z0JBQ2IsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7YUFDakI7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDckI7WUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3BEOzs7T0FBQTtJQU1ELHNCQUFJLHFDQUFPOzs7O1FBQVg7WUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3hHOzs7T0FBQTs7OztJQVFELHVDQUFZOzs7SUFBWjtRQUNFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNsRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNyRjtLQUNGOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUNqRTs7OztJQUVELDBDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztLQUNyQjs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQWEsVUFBVTtvQkFDL0IsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7b0JBQzNDLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO29CQUNuRCxVQUFVLEVBQVc7d0JBQ25CLE9BQU8sQ0FBQyxlQUFlLEVBQUU7NEJBQ3ZCLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLENBQUM7Z0NBQzVELE9BQU8sQ0FBQyx1QkFBdUIsRUFBRSxLQUFLLENBQUM7b0NBQ3JDLE9BQU8sRUFBSSxDQUFDO29DQUNaLFNBQVMsRUFBRSwwQkFBMEI7aUNBQ3RDLENBQUMsQ0FBQzs2QkFDSixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxRQUFRLEVBQUU7Z0NBQ25CLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLDBCQUEwQixFQUFFLENBQUM7Z0NBQzVELE9BQU8sQ0FBQyx3QkFBd0IsRUFBRSxLQUFLLENBQUM7b0NBQ3RDLE9BQU8sRUFBSSxDQUFDO29DQUNaLFNBQVMsRUFBRSwwQkFBMEI7aUNBQ3RDLENBQUMsQ0FBQzs2QkFDSixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsK2pDQUFnRDtvQkFDaEQsSUFBSSxFQUFpQjt3QkFDbkIsbUJBQW1CLEVBQVMsTUFBTTt3QkFDbEMsMEJBQTBCLEVBQUUsVUFBVTtxQkFDdkM7aUJBQ0Y7Ozs7Z0JBMUNDLFNBQVM7Z0JBSFQsVUFBVTs7O2lDQWtEVCxTQUFTLFNBQUMsZ0JBQWdCOzZCQUMxQixLQUFLOzRCQUNMLEtBQUs7d0JBQ0wsS0FBSztrQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUVMLEtBQUs7OztRQVJJLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzJCQTFEMUI7O1NBbURhLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEFuaW1hdGlvbkN1cnZlcyB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2FuaW1hdGlvbic7XG5pbXBvcnQgeyBpc0VtcHR5IH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuY29uc3QgQU5JTUFUSU9OX1RSQU5TSVRJT05fSU4gPSBgMC4zcyAke0FuaW1hdGlvbkN1cnZlcy5FQVNFX0lOX0JBQ0t9YDtcbmNvbnN0IEFOSU1BVElPTl9UUkFOU0lUSU9OX09VVCA9IGAwLjNzICR7QW5pbWF0aW9uQ3VydmVzLkVBU0VfSU5fQkFDS31gO1xuXG5leHBvcnQgdHlwZSBOekJhZGdlU3RhdHVzVHlwZSA9ICdzdWNjZXNzJyB8ICdwcm9jZXNzaW5nJyB8ICdkZWZhdWx0JyB8ICdlcnJvcicgfCAnd2FybmluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYmFkZ2UnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignem9vbUFuaW1hdGlvbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAwLCB0cmFuc2Zvcm06ICdzY2FsZSgwKSB0cmFuc2xhdGVYKDUwJSknIH0pLFxuICAgICAgICBhbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX0lOLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDEpIHRyYW5zbGF0ZVgoNTAlKSdcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcbiAgICAgICAgc3R5bGUoeyBvcGFjaXR5OiAxLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSB0cmFuc2xhdGVYKDUwJSknIH0pLFxuICAgICAgICBhbmltYXRlKEFOSU1BVElPTl9UUkFOU0lUSU9OX09VVCwgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwKSB0cmFuc2xhdGVYKDUwJSknXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1iYWRnZS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1iYWRnZV0nICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWJhZGdlLXN0YXR1c10nOiAnbnpTdGF0dXMnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIG1heE51bWJlckFycmF5ID0gW107XG4gIGNvdW50QXJyYXkgPSBbXTtcbiAgY291bnRTaW5nbGVBcnJheSA9IFsgMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSBdO1xuICBAVmlld0NoaWxkKCdjb250ZW50RWxlbWVudCcpIGNvbnRlbnRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93WmVybyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RG90ID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RG90ID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56T3ZlcmZsb3dDb3VudCA9IDk5O1xuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBASW5wdXQoKSBuelN0YXR1czogTnpCYWRnZVN0YXR1c1R5cGU7XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q291bnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgIHRoaXMuX2NvdW50ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5jb3VudEFycmF5ID0gdGhpcy5fY291bnQudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gIH1cblxuICBnZXQgbnpDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxuXG4gIGdldCBzaG93U3VwKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAodGhpcy5uelNob3dEb3QgJiYgdGhpcy5uekRvdCkgfHwgdGhpcy5uekNvdW50ID4gMCB8fCAoKHRoaXMubnpDb3VudCA9PT0gMCkgJiYgdGhpcy5uelNob3daZXJvKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG5cbiAgfVxuXG4gIHByaXZhdGUgX2NvdW50OiBudW1iZXI7XG5cbiAgY2hlY2tDb250ZW50KCk6IHZvaWQge1xuICAgIGlmIChpc0VtcHR5KHRoaXMuY29udGVudEVsZW1lbnQubmF0aXZlRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtYmFkZ2Utbm90LWEtd3JhcHBlcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LWJhZGdlLW5vdC1hLXdyYXBwZXInKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm1heE51bWJlckFycmF5ID0gdGhpcy5uek92ZXJmbG93Q291bnQudG9TdHJpbmcoKS5zcGxpdCgnJyk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja0NvbnRlbnQoKTtcbiAgfVxufVxuIl19