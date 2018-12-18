/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(cdr) {
        this.cdr = cdr;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this._currentIndex = 0;
    }
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () { return this._status; },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () { return this._icon; },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () { return this._currentIndex; },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index
                    ? 'finish'
                    : current === this.index
                        ? this.outStatus || ''
                        : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStepComponent.prototype.detectChanges = /**
     * @return {?}
     */
    function () {
        this.cdr.detectChanges();
    };
    NzStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-step',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n<div class=\"ant-steps-item-icon\">\n  <ng-template [ngIf]=\"!showProcessDot\">\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon type=\"check\"></i></span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon type=\"close\"></i></span>\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{ index + 1 }}</span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\n    </ng-template>\n    </span>\n  </ng-template>\n  <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template\n        [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:nzStatus, index:index }\">\n      </ng-template>\n    </span>\n  </ng-template>\n</div>\n<div class=\"ant-steps-item-content\">\n  <div class=\"ant-steps-item-title\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </div>\n  <div class=\"ant-steps-item-description\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </div>\n</div>\n",
                    host: {
                        '[class.ant-steps-item]': 'true',
                        '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                        '[class.ant-steps-item-process]': 'nzStatus === "process"',
                        '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                        '[class.ant-steps-item-error]': 'nzStatus === "error"',
                        '[class.ant-steps-custom]': '!!nzIcon',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzStepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzIcon: [{ type: Input }]
    };
    return NzStepComponent;
}());
export { NzStepComponent };
function NzStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzTitle;
    /** @type {?} */
    NzStepComponent.prototype.nzDescription;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /** @type {?} */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype._currentIndex;
    /** @type {?} */
    NzStepComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3RlcHMvbnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBc0V0SSx5QkFBb0IsR0FBc0I7UUFBdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF0QzFDLHNCQUFpQixLQUFLLENBQUM7dUJBQ0wsTUFBTTtRQWF4QixrQkFBYSxJQUFJLENBQUM7UUFDbEIsb0JBQWUsSUFBSSxDQUFDO1FBSXBCLGlCQUFZLFlBQVksQ0FBQztRQUN6QixhQUFRLENBQUMsQ0FBQztRQUNWLFlBQU8sS0FBSyxDQUFDO1FBQ2IsaUJBQVksU0FBUyxDQUFDO1FBQ3RCLHNCQUFpQixLQUFLLENBQUM7NkJBYUMsQ0FBQztLQUVxQjtJQTVDOUMsc0JBQ0kscUNBQVE7Ozs7UUFEWixjQUN5QixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs7Ozs7UUFDL0MsVUFBYSxNQUFjO1lBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCOzs7T0FKOEM7SUFRL0Msc0JBQ0ksbUNBQU07Ozs7UUFEVixjQUNnRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs7Ozs7UUFDcEUsVUFBVyxLQUFzQztZQUMvQyxJQUFJLENBQUMsQ0FBQyxLQUFLLFlBQVksV0FBVyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzlFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDcEI7OztPQVRtRTtJQXFCcEUsc0JBQUkseUNBQVk7Ozs7UUFBaEIsY0FBNkIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUU7Ozs7O1FBQ3pELFVBQWlCLE9BQWU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLO29CQUNqQyxDQUFDLENBQUMsUUFBUTtvQkFDVixDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLO3dCQUN0QixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxFQUFFO3dCQUN0QixDQUFDLENBQUMsTUFBTSxDQUFDO2FBQ2Q7U0FDRjs7O09BVndEOzs7O0lBZXpELHVDQUFhOzs7SUFBYjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDMUI7O2dCQXRFRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxRQUFRLEVBQWEsU0FBUztvQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsbXBEQUErQztvQkFDL0MsSUFBSSxFQUFpQjt3QkFDbkIsd0JBQXdCLEVBQVUsTUFBTTt3QkFDeEMsNkJBQTZCLEVBQUsscUJBQXFCO3dCQUN2RCxnQ0FBZ0MsRUFBRSx3QkFBd0I7d0JBQzFELCtCQUErQixFQUFHLHVCQUF1Qjt3QkFDekQsOEJBQThCLEVBQUksc0JBQXNCO3dCQUN4RCwwQkFBMEIsRUFBUSxVQUFVO3dCQUM1Qyw4QkFBOEIsRUFBSSx5REFBeUQ7cUJBQzVGO2lCQUNGOzs7O2dCQW5CaUMsaUJBQWlCOzs7cUNBcUJoRCxTQUFTLFNBQUMsb0JBQW9COzBCQUU5QixLQUFLO2dDQUNMLEtBQUs7MkJBRUwsS0FBSzt5QkFTTCxLQUFLOzswQkFuQ1I7O1NBb0JhLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3Q2hpbGQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9uZy1jbGFzcyc7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zdGVwJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXN0ZXAuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbV0nICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLXdhaXRdJyAgIDogJ256U3RhdHVzID09PSBcIndhaXRcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzXSc6ICduelN0YXR1cyA9PT0gXCJwcm9jZXNzXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZmluaXNoXScgOiAnbnpTdGF0dXMgPT09IFwiZmluaXNoXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZXJyb3JdJyAgOiAnbnpTdGF0dXMgPT09IFwiZXJyb3JcIicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtY3VzdG9tXScgICAgICA6ICchIW56SWNvbicsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtbmV4dC1lcnJvcl0nICA6ICcob3V0U3RhdHVzID09PSBcImVycm9yXCIpICYmIChjdXJyZW50SW5kZXggPT09IGluZGV4ICsgMSknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTdGVwQ29tcG9uZW50IHtcbiAgQFZpZXdDaGlsZCgncHJvY2Vzc0RvdFRlbXBsYXRlJykgcHJvY2Vzc0RvdFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpEZXNjcmlwdGlvbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KClcbiAgZ2V0IG56U3RhdHVzKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9zdGF0dXM7IH1cbiAgc2V0IG56U3RhdHVzKHN0YXR1czogc3RyaW5nKSB7XG4gICAgdGhpcy5fc3RhdHVzID0gc3RhdHVzO1xuICAgIHRoaXMuaXNDdXN0b21TdGF0dXMgPSB0cnVlO1xuICB9XG4gIGlzQ3VzdG9tU3RhdHVzID0gZmFsc2U7XG4gIHByaXZhdGUgX3N0YXR1cyA9ICd3YWl0JztcblxuICBASW5wdXQoKVxuICBnZXQgbnpJY29uKCk6IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD4geyByZXR1cm4gdGhpcy5faWNvbjsgfVxuICBzZXQgbnpJY29uKHZhbHVlOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcbiAgICAgIHRoaXMuaXNJY29uU3RyaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUuaW5kZXhPZignYW50aWNvbicpID4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNJY29uU3RyaW5nID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcbiAgfVxuICBvbGRBUElJY29uID0gdHJ1ZTtcbiAgaXNJY29uU3RyaW5nID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaWNvbjogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBjdXN0b21Qcm9jZXNzVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBUZW1wbGF0ZVJlZjx2b2lkPiwgc3RhdHVzOiBzdHJpbmcsIGluZGV4OiBudW1iZXIgfT47IC8vIFNldCBieSBwYXJlbnQuXG4gIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcbiAgaW5kZXggPSAwO1xuICBsYXN0ID0gZmFsc2U7XG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcbiAgc2hvd1Byb2Nlc3NEb3QgPSBmYWxzZTtcblxuICBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9jdXJyZW50SW5kZXg7IH1cbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcbiAgICB0aGlzLl9jdXJyZW50SW5kZXggPSBjdXJyZW50O1xuICAgIGlmICghdGhpcy5pc0N1c3RvbVN0YXR1cykge1xuICAgICAgdGhpcy5fc3RhdHVzID0gY3VycmVudCA+IHRoaXMuaW5kZXhcbiAgICAgICAgPyAnZmluaXNoJ1xuICAgICAgICA6IGN1cnJlbnQgPT09IHRoaXMuaW5kZXhcbiAgICAgICAgICA/IHRoaXMub3V0U3RhdHVzIHx8ICcnXG4gICAgICAgICAgOiAnd2FpdCc7XG4gICAgfVxuICB9XG4gIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIGRldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG59XG4iXX0=