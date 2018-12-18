/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
var NzRateComponent = /** @class */ (function () {
    function NzRateComponent(renderer) {
        this.renderer = renderer;
        this._allowClear = true;
        this._allowHalf = false;
        this._disabled = false;
        this._count = 5;
        this._value = 0;
        this._autoFocus = false;
        this.nzOnBlur = new EventEmitter();
        this.nzOnFocus = new EventEmitter();
        this.nzOnKeyDown = new EventEmitter();
        this.nzOnHoverChange = new EventEmitter();
        this.prefixCls = 'ant-rate';
        this.isInit = false;
        this.hasHalf = false;
        this.innerPrefixCls = this.prefixCls + "-star";
        this.starArray = [];
        this.hoverValue = 0;
        this.isFocused = false;
        this.floatReg = /^\d+(\.\d+)?$/;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(NzRateComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzCount", {
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
            if (this._count === value) {
                return;
            }
            this._count = value;
            this.updateStarArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzAllowHalf", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowHalf;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowHalf = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzAllowClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowClear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowClear = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} input
         * @return {?}
         */
        function (input) {
            /** @type {?} */
            var value = input;
            if (this._value === value) {
                return;
            }
            this._value = value;
            if (this.floatReg.test(value.toString())) {
                value += 0.5;
                this.hasHalf = true;
            }
            this.hoverValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzRateComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzRateComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-disabled"] = this.nzDisabled,
            _a);
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    NzRateComponent.prototype.clickRate = /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    function (e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        this.hasHalf = !isFull && this.nzAllowHalf;
        /** @type {?} */
        var actualValue = index + 1;
        this.hoverValue = actualValue;
        if (this.hasHalf) {
            actualValue -= 0.5;
        }
        if (this.nzValue === actualValue) {
            if (this.nzAllowClear) {
                this.nzValue = 0;
                this.onChange(this.nzValue);
            }
        }
        else {
            this.nzValue = actualValue;
            this.onChange(this.nzValue);
        }
    };
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    NzRateComponent.prototype.hoverRate = /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    function (e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        var isHalf = !isFull && this.nzAllowHalf;
        if (this.hoverValue === index + 1 && isHalf === this.hasHalf) {
            return;
        }
        this.hoverValue = index + 1;
        this.nzOnHoverChange.emit(this.hoverValue);
        this.hasHalf = isHalf;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.leaveRate = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        /** @type {?} */
        var oldVal = this.nzValue;
        if (this.floatReg.test(oldVal.toString())) {
            oldVal += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = oldVal;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onFocus = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onBlur = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.focus();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.ulElement.nativeElement.blur();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzRateComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var code = e.code;
        if ((code === 'ArrowRight' || e.keyCode === RIGHT_ARROW) && (this.nzValue < this.nzCount)) {
            if (this.nzAllowHalf) {
                this.nzValue += 0.5;
            }
            else {
                this.nzValue += 1;
            }
            this.onChange(this.nzValue);
        }
        else if ((code === 'ArrowLeft' || e.keyCode === LEFT_ARROW) && (this.nzValue > 0)) {
            if (this.nzAllowHalf) {
                this.nzValue -= 0.5;
            }
            else {
                this.nzValue -= 1;
            }
            this.onChange(this.nzValue);
        }
        this.nzOnKeyDown.emit(e);
        e.preventDefault();
    };
    /**
     * @param {?} i
     * @return {?}
     */
    NzRateComponent.prototype.setClasses = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        var _a;
        return _a = {},
            _a[this.innerPrefixCls] = true,
            _a[this.innerPrefixCls + "-full"] = (i + 1 < this.hoverValue) || (!this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-half"] = (this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-active"] = (this.hasHalf) && (i + 1 === this.hoverValue),
            _a[this.innerPrefixCls + "-zero"] = (i + 1 > this.hoverValue),
            _a[this.innerPrefixCls + "-focused"] = (this.hasHalf) && (i + 1 === this.hoverValue) && this.isFocused,
            _a;
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.updateStarArray = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var index = 0;
        this.starArray = [];
        while (index < this.nzCount) {
            this.starArray.push(index++);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzRateComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzValue = value || 0;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRateComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzRateComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzRateComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.updateStarArray();
    };
    /**
     * @return {?}
     */
    NzRateComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
    };
    NzRateComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-rate',
                    preserveWhitespaces: false,
                    template: "<ng-template #defaultCharacter>\n  <i nz-icon [type]=\"'star'\" [theme]=\"'fill'\"></i>\n</ng-template>\n<ul\n  #ulElement\n  [ngClass]=\"classMap\"\n  (mouseleave)=\"leaveRate($event)\"\n  (focus)=\"onFocus($event)\"\n  (blur)=\"onBlur($event)\"\n  (keydown)=\"onKeyDown($event)\"\n  [tabindex]=\"nzDisabled?-1:1\">\n  <li *ngFor=\"let star of starArray\"\n    [ngClass]=\"setClasses(star)\"\n    (mouseover)=\"hoverRate($event, star, true)\"\n    (click)=\"clickRate($event, star, true)\">\n    <div class=\"ant-rate-star-first\" (mouseover)=\"hoverRate($event, star, false)\" (click)=\"clickRate($event, star, false)\">\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\n    </div>\n    <div class=\"ant-rate-star-second\" (mouseover)=\"hoverRate($event, star, true)\" (click)=\"clickRate($event, star, true)\">\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\n    </div>\n  </li>\n</ul>\n",
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzRateComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzRateComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzRateComponent.propDecorators = {
        nzCharacter: [{ type: Input }],
        nzOnBlur: [{ type: Output }],
        nzOnFocus: [{ type: Output }],
        nzOnKeyDown: [{ type: Output }],
        nzOnHoverChange: [{ type: Output }],
        ulElement: [{ type: ViewChild, args: ['ulElement',] }],
        nzAutoFocus: [{ type: Input }],
        nzCount: [{ type: Input }],
        nzAllowHalf: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzDisabled: [{ type: Input }]
    };
    return NzRateComponent;
}());
export { NzRateComponent };
function NzRateComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzRateComponent.prototype._allowClear;
    /** @type {?} */
    NzRateComponent.prototype._allowHalf;
    /** @type {?} */
    NzRateComponent.prototype._disabled;
    /** @type {?} */
    NzRateComponent.prototype._count;
    /** @type {?} */
    NzRateComponent.prototype._value;
    /** @type {?} */
    NzRateComponent.prototype._autoFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzCharacter;
    /** @type {?} */
    NzRateComponent.prototype.nzOnBlur;
    /** @type {?} */
    NzRateComponent.prototype.nzOnFocus;
    /** @type {?} */
    NzRateComponent.prototype.nzOnKeyDown;
    /** @type {?} */
    NzRateComponent.prototype.nzOnHoverChange;
    /** @type {?} */
    NzRateComponent.prototype.ulElement;
    /** @type {?} */
    NzRateComponent.prototype.prefixCls;
    /** @type {?} */
    NzRateComponent.prototype.isInit;
    /** @type {?} */
    NzRateComponent.prototype.hasHalf;
    /** @type {?} */
    NzRateComponent.prototype.innerPrefixCls;
    /** @type {?} */
    NzRateComponent.prototype.classMap;
    /** @type {?} */
    NzRateComponent.prototype.starArray;
    /** @type {?} */
    NzRateComponent.prototype.hoverValue;
    /** @type {?} */
    NzRateComponent.prototype.isFocused;
    /** @type {?} */
    NzRateComponent.prototype.floatReg;
    /** @type {?} */
    NzRateComponent.prototype.onChange;
    /** @type {?} */
    NzRateComponent.prototype.onTouched;
    /** @type {?} */
    NzRateComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicmF0ZS9uei1yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUF5UC9DLHlCQUFvQixRQUFtQjtRQUFuQixhQUFRLEdBQVIsUUFBUSxDQUFXOzJCQTFPakIsSUFBSTswQkFDTCxLQUFLO3lCQUNOLEtBQUs7c0JBQ1IsQ0FBQztzQkFDRCxDQUFDOzBCQUNHLEtBQUs7UUFFMUIsZ0JBQThCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDN0QsaUJBQStCLElBQUksWUFBWSxFQUFjLENBQUM7UUFDOUQsbUJBQWlDLElBQUksWUFBWSxFQUFpQixDQUFDO1FBQ25FLHVCQUFxQyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBRWhFLGlCQUFZLFVBQVUsQ0FBQztRQUN2QixjQUFTLEtBQUssQ0FBQztRQUNmLGVBQVUsS0FBSyxDQUFDO1FBQ2hCLHNCQUFvQixJQUFJLENBQUMsU0FBUyxVQUFPLENBQUM7UUFFMUMsaUJBQXNCLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxDQUFDLENBQUM7UUFDZixpQkFBWSxLQUFLLENBQUM7UUFDbEIsZ0JBQW1CLGVBQWUsQ0FBQztRQUVuQyxnQkFBb0MsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDL0MsaUJBQXdC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QUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0tBQzlCOzs7O0lBS0Qsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELHlDQUFlOzs7SUFBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO0tBQ3BCOztnQkFqUUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxTQUFTO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixzOUJBQStDO29CQUMvQyxTQUFTLEVBQVk7d0JBQ25COzRCQUNFLE9BQU8sRUFBTSxpQkFBaUI7NEJBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLGVBQWUsRUFBZixDQUFlLENBQUM7NEJBQzlDLEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtpQkFDRjs7OztnQkFuQkMsU0FBUzs7OzhCQTJCUixLQUFLOzJCQUNMLE1BQU07NEJBQ04sTUFBTTs4QkFDTixNQUFNO2tDQUNOLE1BQU07NEJBQ04sU0FBUyxTQUFDLFdBQVc7OEJBY3JCLEtBQUs7MEJBVUwsS0FBSzs4QkFhTCxLQUFLOytCQVNMLEtBQUs7NkJBMEJMLEtBQUs7OzBCQWxIUjs7U0E4QmEsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXJhdGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcmF0ZS5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelJhdGVDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpSYXRlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBDb250cm9sVmFsdWVBY2Nlc3NvciwgQWZ0ZXJWaWV3SW5pdCB7XG4gIHByaXZhdGUgX2FsbG93Q2xlYXIgPSB0cnVlO1xuICBwcml2YXRlIF9hbGxvd0hhbGYgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY291bnQgPSA1O1xuICBwcml2YXRlIF92YWx1ZSA9IDA7XG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xuICBASW5wdXQoKSBuekNoYXJhY3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQmx1ciA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Gb2N1cyA9IG5ldyBFdmVudEVtaXR0ZXI8Rm9jdXNFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25LZXlEb3duID0gbmV3IEV2ZW50RW1pdHRlcjxLZXlib2FyZEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkhvdmVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XG4gIEBWaWV3Q2hpbGQoJ3VsRWxlbWVudCcpIHByaXZhdGUgdWxFbGVtZW50OiBFbGVtZW50UmVmO1xuICBwcmVmaXhDbHMgPSAnYW50LXJhdGUnO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgaGFzSGFsZiA9IGZhbHNlO1xuICBpbm5lclByZWZpeENscyA9IGAke3RoaXMucHJlZml4Q2xzfS1zdGFyYDtcbiAgY2xhc3NNYXA7XG4gIHN0YXJBcnJheTogbnVtYmVyW10gPSBbXTtcbiAgaG92ZXJWYWx1ZSA9IDA7XG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xuICBmbG9hdFJlZzogUmVnRXhwID0gL15cXGQrKFxcLlxcZCspPyQvO1xuXG4gIG9uQ2hhbmdlOiAodmFsdWU6IG51bWJlcikgPT4gdm9pZCA9ICgpID0+IG51bGw7XG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b0ZvY3VzKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b0ZvY3VzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZUF1dG9Gb2N1cygpO1xuICB9XG5cbiAgZ2V0IG56QXV0b0ZvY3VzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hdXRvRm9jdXM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpDb3VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX2NvdW50ID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9jb3VudCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XG4gIH1cblxuICBnZXQgbnpDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9jb3VudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsbG93SGFsZih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FsbG93SGFsZiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBbGxvd0hhbGYoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93SGFsZjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsbG93Q2xlYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd0NsZWFyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekFsbG93Q2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93Q2xlYXI7XG4gIH1cblxuICBnZXQgbnpWYWx1ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCBuelZhbHVlKGlucHV0OiBudW1iZXIpIHtcbiAgICBsZXQgdmFsdWUgPSBpbnB1dDtcbiAgICBpZiAodGhpcy5fdmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuZmxvYXRSZWcudGVzdCh2YWx1ZS50b1N0cmluZygpKSkge1xuICAgICAgdmFsdWUgKz0gMC41O1xuICAgICAgdGhpcy5oYXNIYWxmID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAgXTogdGhpcy5uekRpc2FibGVkXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGlja1JhdGUoZTogTW91c2VFdmVudCwgaW5kZXg6IG51bWJlciwgaXNGdWxsOiBib29sZWFuKTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaGFzSGFsZiA9ICFpc0Z1bGwgJiYgdGhpcy5uekFsbG93SGFsZjtcblxuICAgIGxldCBhY3R1YWxWYWx1ZSA9IGluZGV4ICsgMTtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBhY3R1YWxWYWx1ZTtcblxuICAgIGlmICh0aGlzLmhhc0hhbGYpIHtcbiAgICAgIGFjdHVhbFZhbHVlIC09IDAuNTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5uelZhbHVlID09PSBhY3R1YWxWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMubnpBbGxvd0NsZWFyKSB7XG4gICAgICAgIHRoaXMubnpWYWx1ZSA9IDA7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uelZhbHVlID0gYWN0dWFsVmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgaG92ZXJSYXRlKGU6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIGlzRnVsbDogYm9vbGVhbik6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpc0hhbGY6IGJvb2xlYW4gPSAhaXNGdWxsICYmIHRoaXMubnpBbGxvd0hhbGY7XG4gICAgaWYgKHRoaXMuaG92ZXJWYWx1ZSA9PT0gaW5kZXggKyAxICYmIGlzSGFsZiA9PT0gdGhpcy5oYXNIYWxmKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5ob3ZlclZhbHVlID0gaW5kZXggKyAxO1xuICAgIHRoaXMubnpPbkhvdmVyQ2hhbmdlLmVtaXQodGhpcy5ob3ZlclZhbHVlKTtcbiAgICB0aGlzLmhhc0hhbGYgPSBpc0hhbGY7XG4gIH1cblxuICBsZWF2ZVJhdGUoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgbGV0IG9sZFZhbCA9IHRoaXMubnpWYWx1ZTtcbiAgICBpZiAodGhpcy5mbG9hdFJlZy50ZXN0KG9sZFZhbC50b1N0cmluZygpKSkge1xuICAgICAgb2xkVmFsICs9IDAuNTtcbiAgICAgIHRoaXMuaGFzSGFsZiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IG9sZFZhbDtcbiAgfVxuXG4gIG9uRm9jdXMoZTogRm9jdXNFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICB0aGlzLm56T25Gb2N1cy5lbWl0KGUpO1xuICB9XG5cbiAgb25CbHVyKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMubnpPbkJsdXIuZW1pdChlKTtcbiAgfVxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy51bEVsZW1lbnQubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGNvZGUgPSBlLmNvZGU7XG4gICAgaWYgKChjb2RlID09PSAnQXJyb3dSaWdodCcgfHwgZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykgJiYgKHRoaXMubnpWYWx1ZSA8IHRoaXMubnpDb3VudCkpIHtcbiAgICAgIGlmICh0aGlzLm56QWxsb3dIYWxmKSB7XG4gICAgICAgIHRoaXMubnpWYWx1ZSArPSAwLjU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56VmFsdWUgKz0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKChjb2RlID09PSAnQXJyb3dMZWZ0JyB8fCBlLmtleUNvZGUgPT09IExFRlRfQVJST1cpICYmICh0aGlzLm56VmFsdWUgPiAwKSkge1xuICAgICAgaWYgKHRoaXMubnpBbGxvd0hhbGYpIHtcbiAgICAgICAgdGhpcy5uelZhbHVlIC09IDAuNTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpWYWx1ZSAtPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLm56T25LZXlEb3duLmVtaXQoZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc2V0Q2xhc3NlcyhpOiBudW1iZXIpOiBvYmplY3Qge1xuICAgIHJldHVybiB7XG4gICAgICBbIHRoaXMuaW5uZXJQcmVmaXhDbHMgXSAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWZ1bGxgIF0gICA6IChpICsgMSA8IHRoaXMuaG92ZXJWYWx1ZSkgfHwgKCF0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30taGFsZmAgXSAgIDogKHRoaXMuaGFzSGFsZikgJiYgKGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1hY3RpdmVgIF0gOiAodGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSksXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LXplcm9gIF0gICA6IChpICsgMSA+IHRoaXMuaG92ZXJWYWx1ZSksXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWZvY3VzZWRgIF06ICh0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSAmJiB0aGlzLmlzRm9jdXNlZFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVTdGFyQXJyYXkoKTogdm9pZCB7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICB0aGlzLnN0YXJBcnJheSA9IFtdO1xuICAgIHdoaWxlIChpbmRleCA8IHRoaXMubnpDb3VudCkge1xuICAgICAgdGhpcy5zdGFyQXJyYXkucHVzaChpbmRleCsrKTtcbiAgICB9XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5uelZhbHVlID0gdmFsdWUgfHwgMDtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy51cGRhdGVTdGFyQXJyYXkoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gIH1cbn1cbiJdfQ==