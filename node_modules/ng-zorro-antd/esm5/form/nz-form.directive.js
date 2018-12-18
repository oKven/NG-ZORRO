/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzFormDirective = /** @class */ (function () {
    function NzFormDirective(elementRef, renderer, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzLayout = 'horizontal';
    }
    /**
     * @return {?}
     */
    NzFormDirective.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, (_a = {},
            _a["ant-form-" + this.nzLayout] = this.nzLayout,
            _a));
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzFormDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzFormDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-form]',
                    providers: [NzUpdateHostClassService],
                    host: {
                        '[class.ant-form]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzFormDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService }
    ]; };
    NzFormDirective.propDecorators = {
        nzLayout: [{ type: Input }]
    };
    return NzFormDirective;
}());
export { NzFormDirective };
function NzFormDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormDirective.prototype.nzLayout;
    /** @type {?} */
    NzFormDirective.prototype.elementRef;
    /** @type {?} */
    NzFormDirective.prototype.renderer;
    /** @type {?} */
    NzFormDirective.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZm9ybS9uei1mb3JtLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0YsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBa0JwRix5QkFBb0IsVUFBc0IsRUFBVSxRQUFtQixFQUFVLHdCQUFrRDtRQUEvRyxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFSbkksZ0JBQW9CLFlBQVksQ0FBQztLQVNoQzs7OztJQVBELHFDQUFXOzs7SUFBWDs7UUFDRSxJQUFJLENBQUMsd0JBQXdCLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtZQUN6RSxHQUFFLGNBQVksSUFBSSxDQUFDLFFBQVUsSUFBSSxJQUFJLENBQUMsUUFBUTtnQkFDOUMsQ0FBQztLQUNKOzs7O0lBS0Qsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOzs7O0lBRUQscUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0tBQ3BCOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRyxXQUFXO29CQUN0QixTQUFTLEVBQUUsQ0FBRSx3QkFBd0IsQ0FBRTtvQkFDdkMsSUFBSSxFQUFPO3dCQUNULGtCQUFrQixFQUFFLE1BQU07cUJBQzNCO2lCQUNGOzs7O2dCQVRtQixVQUFVO2dCQUE0QixTQUFTO2dCQUMxRCx3QkFBd0I7OzsyQkFVOUIsS0FBSzs7MEJBWFI7O1NBVWEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvciA6ICdbbnotZm9ybV0nLFxuICBwcm92aWRlcnM6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIGhvc3QgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWZvcm1dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBuekxheW91dCA9ICdob3Jpem9udGFsJztcblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFsgYGFudC1mb3JtLSR7dGhpcy5uekxheW91dH1gIF06IHRoaXMubnpMYXlvdXRcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cbn1cbiJdfQ==