/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Host, HostBinding, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
var NzColComponent = /** @class */ (function () {
    function NzColComponent(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowComponent = nzRowComponent;
        this.nzRowDirective = nzRowDirective;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
    }
    Object.defineProperty(NzColComponent.prototype, "paddingLeft", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRow && this.nzRow.actualGutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzColComponent.prototype, "paddingRight", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRow && this.nzRow.actualGutter / 2;
        },
        enumerable: true,
        configurable: true
    });
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    NzColComponent.prototype.setClassMap = /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = tslib_1.__assign((_a = {}, _a[this.prefixCls + "-" + this.nzSpan] = isNotNil(this.nzSpan), _a[this.prefixCls + "-order-" + this.nzOrder] = isNotNil(this.nzOrder), _a[this.prefixCls + "-offset-" + this.nzOffset] = isNotNil(this.nzOffset), _a[this.prefixCls + "-pull-" + this.nzPull] = isNotNil(this.nzPull), _a[this.prefixCls + "-push-" + this.nzPush] = isNotNil(this.nzPush), _a), this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    };
    /**
     * @return {?}
     */
    NzColComponent.prototype.generateClass = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        var listClassMap = {};
        listOfSizeInputName.forEach(function (name) {
            /** @type {?} */
            var sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(_this[name])) {
                if ((typeof (_this[name]) === 'number') || (typeof (_this[name]) === 'string')) {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name]] = true;
                }
                else {
                    listClassMap[_this.prefixCls + "-" + sizeName + "-" + _this[name].span] = _this[name] && isNotNil(_this[name].span);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-pull-" + _this[name].pull] = _this[name] && isNotNil(_this[name].pull);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-push-" + _this[name].push] = _this[name] && isNotNil(_this[name].push);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-offset-" + _this[name].offset] = _this[name] && isNotNil(_this[name].offset);
                    listClassMap[_this.prefixCls + "-" + sizeName + "-order-" + _this[name].order] = _this[name] && isNotNil(_this[name].order);
                }
            }
        });
        return listClassMap;
    };
    Object.defineProperty(NzColComponent.prototype, "nzRow", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzRowComponent || this.nzRowDirective;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NzColComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzColComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    NzColComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-col',
                    providers: [NzUpdateHostClassService],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    preserveWhitespaces: false,
                    template: "<ng-content></ng-content>"
                }] }
    ];
    /** @nocollapse */
    NzColComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] }
    ]; };
    NzColComponent.propDecorators = {
        paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
        paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
        nzSpan: [{ type: Input }],
        nzOrder: [{ type: Input }],
        nzOffset: [{ type: Input }],
        nzPush: [{ type: Input }],
        nzPull: [{ type: Input }],
        nzXs: [{ type: Input }],
        nzSm: [{ type: Input }],
        nzMd: [{ type: Input }],
        nzLg: [{ type: Input }],
        nzXl: [{ type: Input }],
        nzXXl: [{ type: Input }]
    };
    return NzColComponent;
}());
export { NzColComponent };
function NzColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzColComponent.prototype.el;
    /** @type {?} */
    NzColComponent.prototype.prefixCls;
    /** @type {?} */
    NzColComponent.prototype.nzSpan;
    /** @type {?} */
    NzColComponent.prototype.nzOrder;
    /** @type {?} */
    NzColComponent.prototype.nzOffset;
    /** @type {?} */
    NzColComponent.prototype.nzPush;
    /** @type {?} */
    NzColComponent.prototype.nzPull;
    /** @type {?} */
    NzColComponent.prototype.nzXs;
    /** @type {?} */
    NzColComponent.prototype.nzSm;
    /** @type {?} */
    NzColComponent.prototype.nzMd;
    /** @type {?} */
    NzColComponent.prototype.nzLg;
    /** @type {?} */
    NzColComponent.prototype.nzXl;
    /** @type {?} */
    NzColComponent.prototype.nzXXl;
    /** @type {?} */
    NzColComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzColComponent.prototype.elementRef;
    /** @type {?} */
    NzColComponent.prototype.nzRowComponent;
    /** @type {?} */
    NzColComponent.prototype.nzRowDirective;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUVSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUN0RixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBc0ZsRCx3QkFBb0Isd0JBQWtELEVBQVUsVUFBc0IsRUFBNkIsY0FBOEIsRUFBNkIsY0FBOEI7UUFBeE0sNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBNkIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtrQkFuRWxNLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTt5QkFDbkMsU0FBUztLQW1FNUI7SUFqRUQsc0JBQ0ksdUNBQVc7Ozs7UUFEZjtZQUVFLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDbEQ7OztPQUFBO0lBRUQsc0JBQ0ksd0NBQVk7Ozs7UUFEaEI7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1NBQ2xEOzs7T0FBQTtJQWNELHVHQUF1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U3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFNpbXBsZUNoYW5nZSxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi9uei1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1yb3cuZGlyZWN0aXZlJztcblxuZXhwb3J0IGludGVyZmFjZSBFbWJlZGRlZFByb3BlcnR5IHtcbiAgc3BhbjogbnVtYmVyO1xuICBwdWxsOiBudW1iZXI7XG4gIHB1c2g6IG51bWJlcjtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIG9yZGVyOiBudW1iZXI7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY29sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY29sLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOekNvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWNvbCc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5wYWRkaW5nLWxlZnQucHgnKVxuICBnZXQgcGFkZGluZ0xlZnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uelJvdyAmJiB0aGlzLm56Um93LmFjdHVhbEd1dHRlciAvIDI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctcmlnaHQucHgnKVxuICBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMubnpSb3cgJiYgdGhpcy5uelJvdy5hY3R1YWxHdXR0ZXIgLyAyO1xuICB9XG5cbiAgQElucHV0KCkgbnpTcGFuOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56T3JkZXI6IG51bWJlcjtcbiAgQElucHV0KCkgbnpPZmZzZXQ6IG51bWJlcjtcbiAgQElucHV0KCkgbnpQdXNoOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56UHVsbDogbnVtYmVyO1xuICBASW5wdXQoKSBuelhzOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelNtOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuek1kOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuekxnOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuICBASW5wdXQoKSBuelhYbDogbnVtYmVyIHwgRW1iZWRkZWRQcm9wZXJ0eTtcblxuICAvKiogdGVtcCBzb2x1dGlvbiBzaW5jZSBubyBtZXRob2QgYWRkIGNsYXNzTWFwIHRvIGhvc3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvNzI4OSovXG4gIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U3Bhbn1gIF0gICAgICAgICA6IGlzTm90TmlsKHRoaXMubnpTcGFuKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LW9yZGVyLSR7dGhpcy5uek9yZGVyfWAgXSAgOiBpc05vdE5pbCh0aGlzLm56T3JkZXIpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tb2Zmc2V0LSR7dGhpcy5uek9mZnNldH1gIF06IGlzTm90TmlsKHRoaXMubnpPZmZzZXQpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcHVsbC0ke3RoaXMubnpQdWxsfWAgXSAgICA6IGlzTm90TmlsKHRoaXMubnpQdWxsKSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXB1c2gtJHt0aGlzLm56UHVzaH1gIF0gICAgOiBpc05vdE5pbCh0aGlzLm56UHVzaCksXG4gICAgICAuLi50aGlzLmdlbmVyYXRlQ2xhc3MoKVxuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWwsIGNsYXNzTWFwKTtcbiAgfVxuXG4gIGdlbmVyYXRlQ2xhc3MoKTogb2JqZWN0IHtcbiAgICBjb25zdCBsaXN0T2ZTaXplSW5wdXROYW1lID0gWyAnbnpYcycsICduelNtJywgJ256TWQnLCAnbnpMZycsICduelhsJywgJ256WFhsJyBdO1xuICAgIGNvbnN0IGxpc3RDbGFzc01hcCA9IHt9O1xuICAgIGxpc3RPZlNpemVJbnB1dE5hbWUuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIGNvbnN0IHNpemVOYW1lID0gbmFtZS5yZXBsYWNlKCdueicsICcnKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKGlzTm90TmlsKHRoaXNbIG5hbWUgXSkpIHtcbiAgICAgICAgaWYgKCh0eXBlb2YgKHRoaXNbIG5hbWUgXSkgPT09ICdudW1iZXInKSB8fCAodHlwZW9mICh0aGlzWyBuYW1lIF0pID09PSAnc3RyaW5nJykpIHtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS0ke3RoaXNbIG5hbWUgXX1gIF0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1sgbmFtZSBdLnNwYW59YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5zcGFuKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1wdWxsLSR7dGhpc1sgbmFtZSBdLnB1bGx9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5wdWxsKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1wdXNoLSR7dGhpc1sgbmFtZSBdLnB1c2h9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5wdXNoKTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1vZmZzZXQtJHt0aGlzWyBuYW1lIF0ub2Zmc2V0fWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ub2Zmc2V0KTtcbiAgICAgICAgICBsaXN0Q2xhc3NNYXBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3NpemVOYW1lfS1vcmRlci0ke3RoaXNbIG5hbWUgXS5vcmRlcn1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLm9yZGVyKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSk7XG4gICAgcmV0dXJuIGxpc3RDbGFzc01hcDtcbiAgfVxuXG4gIGdldCBuelJvdygpOiBOelJvd0NvbXBvbmVudCB7XG4gICAgcmV0dXJuIHRoaXMubnpSb3dDb21wb25lbnQgfHwgdGhpcy5uelJvd0RpcmVjdGl2ZTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgWyBwcm9wZXJ0eU5hbWU6IHN0cmluZyBdOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBwdWJsaWMgbnpSb3dDb21wb25lbnQ6IE56Um93Q29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxufVxuIl19