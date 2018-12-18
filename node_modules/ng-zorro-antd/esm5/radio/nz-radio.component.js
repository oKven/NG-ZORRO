/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { DOCUMENT } from '@angular/common';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Inject, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';
import { InputBoolean } from '../core/util/convert';
var NzRadioComponent = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzRadioComponent(elementRef, renderer, document, cdr, focusMonitor) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.document = document;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.select$ = new Subject();
        this.touched$ = new Subject();
        this.checked = false;
        this.isNgModel = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzDisabled = false;
        this.nzAutoFocus = false;
    }
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.focus();
        if (!this.nzDisabled && !this.checked) {
            this.select$.next(this);
            if (this.isNgModel) {
                this.checked = true;
                this.onChange(true);
            }
        }
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.inputElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.inputElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRadioComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRadioComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.isNgModel = true;
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRadioComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzRadioComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.elementRef, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                Promise.resolve().then(function () { return _this.onTouched(); });
                _this.touched$.next();
            }
        });
        this.updateAutoFocus();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzRadioComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzAutoFocus"]) {
            this.updateAutoFocus();
        }
    };
    NzRadioComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-radio]',
                    preserveWhitespaces: false,
                    template: "<span class=\"ant-radio\" [class.ant-radio-checked]=\"checked\" [class.ant-radio-disabled]=\"nzDisabled\">\n  <input #inputElement type=\"radio\" class=\"ant-radio-input\" [disabled]=\"nzDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\n  <span class=\"ant-radio-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzRadioComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[class.ant-radio-wrapper]': 'true',
                        '[class.ant-radio-wrapper-checked]': 'checked',
                        '[class.ant-radio-wrapper-disabled]': 'nzDisabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzRadioComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzRadioComponent.propDecorators = {
        inputElement: [{ type: ViewChild, args: ['inputElement',] }],
        nzValue: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzRadioComponent.prototype, "nzAutoFocus", void 0);
    return NzRadioComponent;
}());
export { NzRadioComponent };
function NzRadioComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRadioComponent.prototype.select$;
    /** @type {?} */
    NzRadioComponent.prototype.touched$;
    /** @type {?} */
    NzRadioComponent.prototype.checked;
    /** @type {?} */
    NzRadioComponent.prototype.name;
    /** @type {?} */
    NzRadioComponent.prototype.isNgModel;
    /** @type {?} */
    NzRadioComponent.prototype.onChange;
    /** @type {?} */
    NzRadioComponent.prototype.onTouched;
    /** @type {?} */
    NzRadioComponent.prototype.inputElement;
    /** @type {?} */
    NzRadioComponent.prototype.nzValue;
    /** @type {?} */
    NzRadioComponent.prototype.nzDisabled;
    /** @type {?} */
    NzRadioComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzRadioComponent.prototype.elementRef;
    /** @type {?} */
    NzRadioComponent.prototype.renderer;
    /** @type {?} */
    NzRadioComponent.prototype.document;
    /** @type {?} */
    NzRadioComponent.prototype.cdr;
    /** @type {?} */
    NzRadioComponent.prototype.focusMonitor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInJhZGlvL256LXJhZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztJQXFFbEQscUNBQXFDO0lBQ3JDLDBCQUFvQixVQUFzQixFQUFVLFFBQW1CLEVBQTRCLFFBQWEsRUFBVSxHQUFzQixFQUFVLFlBQTBCO1FBQWhLLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQTRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBaERwTCxlQUFVLElBQUksT0FBTyxFQUFvQixDQUFDO1FBQzFDLGdCQUFXLElBQUksT0FBTyxFQUFRLENBQUM7UUFDL0IsZUFBVSxLQUFLLENBQUM7UUFFaEIsaUJBQVksS0FBSyxDQUFDO1FBQ2xCLGdCQUFpQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQztRQUM1QyxpQkFBd0IsY0FBTSxPQUFBLElBQUks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QixFQUFFLEtBQUs7b0JBQzFCLHlWQUFnRDtvQkFDaEQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7b0JBQzNDLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO29CQUNuRCxTQUFTLEVBQVk7d0JBQ25COzRCQUNFLE9BQU8sRUFBTSxpQkFBaUI7NEJBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGdCQUFnQixFQUFoQixDQUFnQixDQUFDOzRCQUMvQyxLQUFLLEVBQVEsSUFBSTt5QkFDbEI7cUJBQ0Y7b0JBQ0QsSUFBSSxFQUFpQjt3QkFDbkIsMkJBQTJCLEVBQVcsTUFBTTt3QkFDNUMsbUNBQW1DLEVBQUcsU0FBUzt3QkFDL0Msb0NBQW9DLEVBQUUsWUFBWTtxQkFDbkQ7aUJBQ0Y7Ozs7Z0JBaENDLFVBQVU7Z0JBS1YsU0FBUztnREE2RWlFLE1BQU0sU0FBQyxRQUFRO2dCQXBGekYsaUJBQWlCO2dCQU5WLFlBQVk7OzsrQkFpRGxCLFNBQVMsU0FBQyxjQUFjOzBCQUV4QixLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzswQkFZTCxZQUFZLFNBQUMsT0FBTzs7O1FBYlgsWUFBWSxFQUFFOzs7O1FBQ2QsWUFBWSxFQUFFOzs7MkJBckQxQjs7U0F5Q2EsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXJhZGlvXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1yYWRpby5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Db21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyXScgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWNoZWNrZWRdJyA6ICdjaGVja2VkJyxcbiAgICAnW2NsYXNzLmFudC1yYWRpby13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UmFkaW9Db21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzIHtcbiAgc2VsZWN0JCA9IG5ldyBTdWJqZWN0PE56UmFkaW9Db21wb25lbnQ+KCk7XG4gIHRvdWNoZWQkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgY2hlY2tlZCA9IGZhbHNlO1xuICBuYW1lOiBzdHJpbmc7XG4gIGlzTmdNb2RlbCA9IGZhbHNlO1xuICBvbkNoYW5nZTogKF86IGJvb2xlYW4pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQElucHV0KCkgbnpWYWx1ZTogYW55O1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzKCk7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQgJiYgIXRoaXMuY2hlY2tlZCkge1xuICAgICAgdGhpcy5zZWxlY3QkLm5leHQodGhpcyk7XG4gICAgICBpZiAodGhpcy5pc05nTW9kZWwpIHtcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLmlucHV0RWxlbWVudCwgJ2tleWJvYXJkJyk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgbWFya0ZvckNoZWNrKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55LCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsIHByaXZhdGUgZm9jdXNNb25pdG9yOiBGb2N1c01vbml0b3IpIHtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYm9vbGVhbikgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLmlzTmdNb2RlbCA9IHRydWU7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5tb25pdG9yKHRoaXMuZWxlbWVudFJlZiwgdHJ1ZSkuc3Vic2NyaWJlKGZvY3VzT3JpZ2luID0+IHtcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcbiAgICAgICAgdGhpcy50b3VjaGVkJC5uZXh0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekF1dG9Gb2N1cykge1xuICAgICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==