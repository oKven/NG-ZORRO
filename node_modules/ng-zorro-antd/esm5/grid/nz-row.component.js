/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, NgZone, Renderer2, ViewEncapsulation } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
/** @enum {number} */
var Breakpoint = {
    'xxl': 0,
    'xl': 1,
    'lg': 2,
    'md': 3,
    'sm': 4,
    'xs': 5,
};
export { Breakpoint };
Breakpoint[Breakpoint['xxl']] = 'xxl';
Breakpoint[Breakpoint['xl']] = 'xl';
Breakpoint[Breakpoint['lg']] = 'lg';
Breakpoint[Breakpoint['md']] = 'md';
Breakpoint[Breakpoint['sm']] = 'sm';
Breakpoint[Breakpoint['xs']] = 'xs';
/** @type {?} */
var responsiveMap = {
    xs: '(max-width: 575px)',
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xl: '(min-width: 1200px)',
    xxl: '(min-width: 1600px)'
};
var NzRowComponent = /** @class */ (function () {
    function NzRowComponent(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.mediaMatcher = mediaMatcher;
        this.ngZone = ngZone;
        this.platform = platform;
        this.nzAlign = 'top';
        this.nzJustify = 'start';
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-row';
        this.destroy$ = new Subject();
    }
    /**
     * @return {?}
     */
    NzRowComponent.prototype.calculateGutter = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzGutter !== 'object') {
            return this.nzGutter;
        }
        else if (this.breakPoint && this.nzGutter[this.breakPoint]) {
            return this.nzGutter[this.breakPoint];
        }
        else {
            return;
        }
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.updateGutter = /**
     * @return {?}
     */
    function () {
        this.actualGutter = this.calculateGutter();
        this.renderer.setStyle(this.el, 'margin-left', "-" + this.actualGutter / 2 + "px");
        this.renderer.setStyle(this.el, 'margin-right', "-" + this.actualGutter / 2 + "px");
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.watchMedia = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // @ts-ignore
        Object.keys(responsiveMap).map(function (screen) {
            /** @type {?} */
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[screen]).matches;
            if (matchBelow) {
                _this.breakPoint = screen;
            }
        });
        this.updateGutter();
    };
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzRowComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a["" + this.prefixCls] = !this.nzType,
            _a[this.prefixCls + "-" + this.nzType] = this.nzType,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzAlign] = this.nzType && this.nzAlign,
            _a[this.prefixCls + "-" + this.nzType + "-" + this.nzJustify] = this.nzType && this.nzJustify,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.watchMedia();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRowComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzType"] || changes["nzAlign"] || changes["nzJustify"]) {
            this.setClassMap();
        }
        if (changes["nzGutter"]) {
            this.updateGutter();
        }
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular(function () {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(_this.destroy$))
                    .subscribe(function () { return _this.watchMedia(); });
            });
        }
    };
    /**
     * @return {?}
     */
    NzRowComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    NzRowComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-row',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzRowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: NzUpdateHostClassService },
        { type: MediaMatcher },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzRowComponent.propDecorators = {
        nzType: [{ type: Input }],
        nzAlign: [{ type: Input }],
        nzJustify: [{ type: Input }],
        nzGutter: [{ type: Input }]
    };
    return NzRowComponent;
}());
export { NzRowComponent };
function NzRowComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRowComponent.prototype.nzType;
    /** @type {?} */
    NzRowComponent.prototype.nzAlign;
    /** @type {?} */
    NzRowComponent.prototype.nzJustify;
    /** @type {?} */
    NzRowComponent.prototype.nzGutter;
    /** @type {?} */
    NzRowComponent.prototype.el;
    /** @type {?} */
    NzRowComponent.prototype.prefixCls;
    /** @type {?} */
    NzRowComponent.prototype.breakPoint;
    /** @type {?} */
    NzRowComponent.prototype.actualGutter;
    /** @type {?} */
    NzRowComponent.prototype.destroy$;
    /** @type {?} */
    NzRowComponent.prototype.elementRef;
    /** @type {?} */
    NzRowComponent.prototype.renderer;
    /** @type {?} */
    NzRowComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzRowComponent.prototype.mediaMatcher;
    /** @type {?} */
    NzRowComponent.prototype.ngZone;
    /** @type {?} */
    NzRowComponent.prototype.platform;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcm93LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LXJvdy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUlOLFNBQVMsRUFFVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDOzs7SUFPcEYsUUFBSztJQUNMLE9BQUk7SUFDSixPQUFJO0lBQ0osT0FBSTtJQUNKLE9BQUk7SUFDSixPQUFJOzs7c0JBTEosS0FBSyxLQUFMLEtBQUs7c0JBQ0wsSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7c0JBQ0osSUFBSSxLQUFKLElBQUk7O0FBS04sSUFBTSxhQUFhLEdBQWtCO0lBQ25DLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLG9CQUFvQjtJQUN6QixFQUFFLEVBQUcsb0JBQW9CO0lBQ3pCLEVBQUUsRUFBRyxvQkFBb0I7SUFDekIsRUFBRSxFQUFHLHFCQUFxQjtJQUMxQixHQUFHLEVBQUUscUJBQXFCO0NBQzNCLENBQUM7O0lBMkRBLHdCQUFtQixVQUFzQixFQUFTLFFBQW1CLEVBQVMsd0JBQWtELEVBQVMsWUFBMEIs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biAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsXG4gIE5nWm9uZSxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTWVkaWFNYXRjaGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2xheW91dCc7XG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcblxuZXhwb3J0IHR5cGUgTnpKdXN0aWZ5ID0gJ3N0YXJ0JyB8ICdlbmQnIHwgJ2NlbnRlcicgfCAnc3BhY2UtYXJvdW5kJyB8ICdzcGFjZS1iZXR3ZWVuJztcbmV4cG9ydCB0eXBlIE56QWxpZ24gPSAndG9wJyB8ICdtaWRkbGUnIHwgJ2JvdHRvbSc7XG5leHBvcnQgdHlwZSBOelR5cGUgPSAnZmxleCcgfCBudWxsO1xuXG5leHBvcnQgZW51bSBCcmVha3BvaW50IHtcbiAgJ3h4bCcsXG4gICd4bCcsXG4gICdsZycsXG4gICdtZCcsXG4gICdzbScsXG4gICd4cydcbn1cblxuZXhwb3J0IHR5cGUgQnJlYWtwb2ludE1hcCA9IHsgW2luZGV4IGluIGtleW9mIHR5cGVvZiBCcmVha3BvaW50XTogc3RyaW5nIH07XG5cbmNvbnN0IHJlc3BvbnNpdmVNYXA6IEJyZWFrcG9pbnRNYXAgPSB7XG4gIHhzIDogJyhtYXgtd2lkdGg6IDU3NXB4KScsXG4gIHNtIDogJyhtaW4td2lkdGg6IDU3NnB4KScsXG4gIG1kIDogJyhtaW4td2lkdGg6IDc2OHB4KScsXG4gIGxnIDogJyhtaW4td2lkdGg6IDk5MnB4KScsXG4gIHhsIDogJyhtaW4td2lkdGg6IDEyMDBweCknLFxuICB4eGw6ICcobWluLXdpZHRoOiAxNjAwcHgpJ1xufTtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1yb3cnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1yb3cuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56Um93Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIG56VHlwZTogTnpUeXBlO1xuICBASW5wdXQoKSBuekFsaWduOiBOekFsaWduID0gJ3RvcCc7XG4gIEBJbnB1dCgpIG56SnVzdGlmeTogTnpKdXN0aWZ5ID0gJ3N0YXJ0JztcbiAgQElucHV0KCkgbnpHdXR0ZXI6IG51bWJlciB8IG9iamVjdDtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXJvdyc7XG4gIHByaXZhdGUgYnJlYWtQb2ludDogQnJlYWtwb2ludDtcbiAgYWN0dWFsR3V0dGVyOiBudW1iZXI7XG4gIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcblxuICBjYWxjdWxhdGVHdXR0ZXIoKTogbnVtYmVyIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpHdXR0ZXIgIT09ICdvYmplY3QnKSB7XG4gICAgICByZXR1cm4gdGhpcy5uekd1dHRlcjtcbiAgICB9IGVsc2UgaWYgKHRoaXMuYnJlYWtQb2ludCAmJiB0aGlzLm56R3V0dGVyWyB0aGlzLmJyZWFrUG9pbnQgXSkge1xuICAgICAgcmV0dXJuIHRoaXMubnpHdXR0ZXJbIHRoaXMuYnJlYWtQb2ludCBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlR3V0dGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0dWFsR3V0dGVyID0gdGhpcy5jYWxjdWxhdGVHdXR0ZXIoKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tbGVmdCcsIGAtJHt0aGlzLmFjdHVhbEd1dHRlciAvIDJ9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdtYXJnaW4tcmlnaHQnLCBgLSR7dGhpcy5hY3R1YWxHdXR0ZXIgLyAyfXB4YCk7XG4gIH1cblxuICB3YXRjaE1lZGlhKCk6IHZvaWQge1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKHNjcmVlbjogQnJlYWtwb2ludCkgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hCZWxvdyA9IHRoaXMubWVkaWFNYXRjaGVyLm1hdGNoTWVkaWEocmVzcG9uc2l2ZU1hcFsgc2NyZWVuIF0pLm1hdGNoZXM7XG4gICAgICBpZiAobWF0Y2hCZWxvdykge1xuICAgICAgICB0aGlzLmJyZWFrUG9pbnQgPSBzY3JlZW47XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVHdXR0ZXIoKTtcbiAgfVxuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfWAgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogIXRoaXMubnpUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gIF0gICAgICAgICAgICAgICAgICA6IHRoaXMubnpUeXBlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX0tJHt0aGlzLm56QWxpZ259YCBdICA6IHRoaXMubnpUeXBlICYmIHRoaXMubnpBbGlnbixcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9LSR7dGhpcy5uekp1c3RpZnl9YCBdOiB0aGlzLm56VHlwZSAmJiB0aGlzLm56SnVzdGlmeVxuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIG56VXBkYXRlSG9zdENsYXNzU2VydmljZTogTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBwdWJsaWMgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsIHB1YmxpYyBuZ1pvbmU6IE5nWm9uZSwgcHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMud2F0Y2hNZWRpYSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VHlwZSB8fCBjaGFuZ2VzLm56QWxpZ24gfHwgY2hhbmdlcy5uekp1c3RpZnkpIHtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9XG4gICAgaWYgKGNoYW5nZXMubnpHdXR0ZXIpIHtcbiAgICAgIHRoaXMudXBkYXRlR3V0dGVyKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcbiAgICAgICAgLnBpcGUoYXVkaXRUaW1lKDE2KSwgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hNZWRpYSgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19