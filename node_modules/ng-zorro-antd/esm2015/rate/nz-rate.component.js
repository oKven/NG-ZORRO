/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { toBoolean } from '../core/util/convert';
export class NzRateComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
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
        this.innerPrefixCls = `${this.prefixCls}-star`;
        this.starArray = [];
        this.hoverValue = 0;
        this.isFocused = false;
        this.floatReg = /^\d+(\.\d+)?$/;
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoFocus(value) {
        this._autoFocus = toBoolean(value);
        this.updateAutoFocus();
    }
    /**
     * @return {?}
     */
    get nzAutoFocus() {
        return this._autoFocus;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCount(value) {
        if (this._count === value) {
            return;
        }
        this._count = value;
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    get nzCount() {
        return this._count;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowHalf(value) {
        this._allowHalf = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAllowHalf() {
        return this._allowHalf;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAllowClear(value) {
        this._allowClear = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzAllowClear() {
        return this._allowClear;
    }
    /**
     * @return {?}
     */
    get nzValue() {
        return this._value;
    }
    /**
     * @param {?} input
     * @return {?}
     */
    set nzValue(input) {
        /** @type {?} */
        let value = input;
        if (this._value === value) {
            return;
        }
        this._value = value;
        if (this.floatReg.test(value.toString())) {
            value += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-disabled`]: this.nzDisabled
        };
    }
    /**
     * @return {?}
     */
    updateAutoFocus() {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.ulElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.ulElement.nativeElement, 'autofocus');
            }
        }
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    clickRate(e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        this.hasHalf = !isFull && this.nzAllowHalf;
        /** @type {?} */
        let actualValue = index + 1;
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
    }
    /**
     * @param {?} e
     * @param {?} index
     * @param {?} isFull
     * @return {?}
     */
    hoverRate(e, index, isFull) {
        e.stopPropagation();
        if (this.nzDisabled) {
            return;
        }
        /** @type {?} */
        const isHalf = !isFull && this.nzAllowHalf;
        if (this.hoverValue === index + 1 && isHalf === this.hasHalf) {
            return;
        }
        this.hoverValue = index + 1;
        this.nzOnHoverChange.emit(this.hoverValue);
        this.hasHalf = isHalf;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    leaveRate(e) {
        e.stopPropagation();
        /** @type {?} */
        let oldVal = this.nzValue;
        if (this.floatReg.test(oldVal.toString())) {
            oldVal += 0.5;
            this.hasHalf = true;
        }
        this.hoverValue = oldVal;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onFocus(e) {
        this.isFocused = true;
        this.nzOnFocus.emit(e);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onBlur(e) {
        this.isFocused = false;
        this.nzOnBlur.emit(e);
    }
    /**
     * @return {?}
     */
    focus() {
        this.ulElement.nativeElement.focus();
    }
    /**
     * @return {?}
     */
    blur() {
        this.ulElement.nativeElement.blur();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
        /** @type {?} */
        const code = e.code;
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
    }
    /**
     * @param {?} i
     * @return {?}
     */
    setClasses(i) {
        return {
            [this.innerPrefixCls]: true,
            [`${this.innerPrefixCls}-full`]: (i + 1 < this.hoverValue) || (!this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-half`]: (this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-active`]: (this.hasHalf) && (i + 1 === this.hoverValue),
            [`${this.innerPrefixCls}-zero`]: (i + 1 > this.hoverValue),
            [`${this.innerPrefixCls}-focused`]: (this.hasHalf) && (i + 1 === this.hoverValue) && this.isFocused
        };
    }
    /**
     * @return {?}
     */
    updateStarArray() {
        /** @type {?} */
        let index = 0;
        this.starArray = [];
        while (index < this.nzCount) {
            this.starArray.push(index++);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.nzValue = value || 0;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.updateStarArray();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.isInit = true;
    }
}
NzRateComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-rate',
                preserveWhitespaces: false,
                template: "<ng-template #defaultCharacter>\n  <i nz-icon [type]=\"'star'\" [theme]=\"'fill'\"></i>\n</ng-template>\n<ul\n  #ulElement\n  [ngClass]=\"classMap\"\n  (mouseleave)=\"leaveRate($event)\"\n  (focus)=\"onFocus($event)\"\n  (blur)=\"onBlur($event)\"\n  (keydown)=\"onKeyDown($event)\"\n  [tabindex]=\"nzDisabled?-1:1\">\n  <li *ngFor=\"let star of starArray\"\n    [ngClass]=\"setClasses(star)\"\n    (mouseover)=\"hoverRate($event, star, true)\"\n    (click)=\"clickRate($event, star, true)\">\n    <div class=\"ant-rate-star-first\" (mouseover)=\"hoverRate($event, star, false)\" (click)=\"clickRate($event, star, false)\">\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\n    </div>\n    <div class=\"ant-rate-star-second\" (mouseover)=\"hoverRate($event, star, true)\" (click)=\"clickRate($event, star, true)\">\n      <ng-template [ngTemplateOutlet]=\"nzCharacter||defaultCharacter\"></ng-template>\n    </div>\n  </li>\n</ul>\n",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzRateComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzRateComponent.ctorParameters = () => [
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmF0ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicmF0ZS9uei1yYXRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBQ0wsVUFBVSxFQUVWLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQWNqRCxNQUFNLE9BQU8sZUFBZTs7OztJQTJPMUIsWUFBb0IsUUFBbUI7UUFBbkIsYUFBUSxHQUFSLFFBQVEsQ0FBVzsyQkExT2pCLElBQUk7MEJBQ0wsS0FBSzt5QkFDTixLQUFLO3NCQUNSLENBQUM7c0JBQ0QsQ0FBQzswQkFDRyxLQUFLO1FBRTFCLGdCQUE4QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzdELGlCQUErQixJQUFJLFlBQVksRUFBYyxDQUFDO1FBQzlELG1CQUFpQyxJQUFJLFlBQVksRUFBaUIsQ0FBQztRQUNuRSx1QkFBcUMsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUVoRSxpQkFBWSxVQUFVLENBQUM7UUFDdkIsY0FBUyxLQUFLLENBQUM7UUFDZixlQUFVLEtBQUssQ0FBQztRQUNoQixzQkFBaUIsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUM7UUFFMUMsaUJBQXNCLEVBQUUsQ0FBQztRQUN6QixrQkFBYSxDQUFDLENBQUM7UUFDZixpQkFBWSxLQUFLLENBQUM7UUFDbEIsZ0JBQW1CLGVBQWUsQ0FBQztRQUVuQyxnQkFBb0MsR0FBRyxFQUFFLENBQUMs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Q25CLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztLQUN4Qjs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztLQUNwQjs7O1lBalFGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsU0FBUztnQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsczlCQUErQztnQkFDL0MsU0FBUyxFQUFZO29CQUNuQjt3QkFDRSxPQUFPLEVBQU0saUJBQWlCO3dCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQzt3QkFDOUMsS0FBSyxFQUFRLElBQUk7cUJBQ2xCO2lCQUNGO2FBQ0Y7Ozs7WUFuQkMsU0FBUzs7OzBCQTJCUixLQUFLO3VCQUNMLE1BQU07d0JBQ04sTUFBTTswQkFDTixNQUFNOzhCQUNOLE1BQU07d0JBQ04sU0FBUyxTQUFDLFdBQVc7MEJBY3JCLEtBQUs7c0JBVUwsS0FBSzswQkFhTCxLQUFLOzJCQVNMLEtBQUs7eUJBMEJMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1yYXRlJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXJhdGUuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYXRlQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56UmF0ZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuICBwcml2YXRlIF9hbGxvd0NsZWFyID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfYWxsb3dIYWxmID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgX2NvdW50ID0gNTtcbiAgcHJpdmF0ZSBfdmFsdWUgPSAwO1xuICBwcml2YXRlIF9hdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDaGFyYWN0ZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRm9jdXMgPSBuZXcgRXZlbnRFbWl0dGVyPEZvY3VzRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uS2V5RG93biA9IG5ldyBFdmVudEVtaXR0ZXI8S2V5Ym9hcmRFdmVudD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25Ib3ZlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuICBAVmlld0NoaWxkKCd1bEVsZW1lbnQnKSBwcml2YXRlIHVsRWxlbWVudDogRWxlbWVudFJlZjtcbiAgcHJlZml4Q2xzID0gJ2FudC1yYXRlJztcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGhhc0hhbGYgPSBmYWxzZTtcbiAgaW5uZXJQcmVmaXhDbHMgPSBgJHt0aGlzLnByZWZpeENsc30tc3RhcmA7XG4gIGNsYXNzTWFwO1xuICBzdGFyQXJyYXk6IG51bWJlcltdID0gW107XG4gIGhvdmVyVmFsdWUgPSAwO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcbiAgZmxvYXRSZWc6IFJlZ0V4cCA9IC9eXFxkKyhcXC5cXGQrKT8kLztcblxuICBvbkNoYW5nZTogKHZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIGdldCBuekF1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q291bnQodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9jb3VudCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fY291bnQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVN0YXJBcnJheSgpO1xuICB9XG5cbiAgZ2V0IG56Q291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fY291bnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0hhbGYodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd0hhbGYgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QWxsb3dIYWxmKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0hhbGY7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBbGxvd0NsZWFyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWxsb3dDbGVhciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpBbGxvd0NsZWFyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbGxvd0NsZWFyO1xuICB9XG5cbiAgZ2V0IG56VmFsdWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBzZXQgbnpWYWx1ZShpbnB1dDogbnVtYmVyKSB7XG4gICAgbGV0IHZhbHVlID0gaW5wdXQ7XG4gICAgaWYgKHRoaXMuX3ZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmZsb2F0UmVnLnRlc3QodmFsdWUudG9TdHJpbmcoKSkpIHtcbiAgICAgIHZhbHVlICs9IDAuNTtcbiAgICAgIHRoaXMuaGFzSGFsZiA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kaXNhYmxlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgIF06IHRoaXMubnpEaXNhYmxlZFxuICAgIH07XG4gIH1cblxuICB1cGRhdGVBdXRvRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmICF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIGlmICh0aGlzLm56QXV0b0ZvY3VzKSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdhdXRvZm9jdXMnLCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xpY2tSYXRlKGU6IE1vdXNlRXZlbnQsIGluZGV4OiBudW1iZXIsIGlzRnVsbDogYm9vbGVhbik6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhhc0hhbGYgPSAhaXNGdWxsICYmIHRoaXMubnpBbGxvd0hhbGY7XG5cbiAgICBsZXQgYWN0dWFsVmFsdWUgPSBpbmRleCArIDE7XG4gICAgdGhpcy5ob3ZlclZhbHVlID0gYWN0dWFsVmFsdWU7XG5cbiAgICBpZiAodGhpcy5oYXNIYWxmKSB7XG4gICAgICBhY3R1YWxWYWx1ZSAtPSAwLjU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubnpWYWx1ZSA9PT0gYWN0dWFsVmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLm56QWxsb3dDbGVhcikge1xuICAgICAgICB0aGlzLm56VmFsdWUgPSAwO1xuICAgICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnpWYWx1ZSA9IGFjdHVhbFZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLm56VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGhvdmVyUmF0ZShlOiBNb3VzZUV2ZW50LCBpbmRleDogbnVtYmVyLCBpc0Z1bGw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXNIYWxmOiBib29sZWFuID0gIWlzRnVsbCAmJiB0aGlzLm56QWxsb3dIYWxmO1xuICAgIGlmICh0aGlzLmhvdmVyVmFsdWUgPT09IGluZGV4ICsgMSAmJiBpc0hhbGYgPT09IHRoaXMuaGFzSGFsZikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuaG92ZXJWYWx1ZSA9IGluZGV4ICsgMTtcbiAgICB0aGlzLm56T25Ib3ZlckNoYW5nZS5lbWl0KHRoaXMuaG92ZXJWYWx1ZSk7XG4gICAgdGhpcy5oYXNIYWxmID0gaXNIYWxmO1xuICB9XG5cbiAgbGVhdmVSYXRlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGxldCBvbGRWYWwgPSB0aGlzLm56VmFsdWU7XG4gICAgaWYgKHRoaXMuZmxvYXRSZWcudGVzdChvbGRWYWwudG9TdHJpbmcoKSkpIHtcbiAgICAgIG9sZFZhbCArPSAwLjU7XG4gICAgICB0aGlzLmhhc0hhbGYgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBvbGRWYWw7XG4gIH1cblxuICBvbkZvY3VzKGU6IEZvY3VzRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XG4gICAgdGhpcy5uek9uRm9jdXMuZW1pdChlKTtcbiAgfVxuXG4gIG9uQmx1cihlOiBGb2N1c0V2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLm56T25CbHVyLmVtaXQoZSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLnVsRWxlbWVudC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMudWxFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjb2RlID0gZS5jb2RlO1xuICAgIGlmICgoY29kZSA9PT0gJ0Fycm93UmlnaHQnIHx8IGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpICYmICh0aGlzLm56VmFsdWUgPCB0aGlzLm56Q291bnQpKSB7XG4gICAgICBpZiAodGhpcy5uekFsbG93SGFsZikge1xuICAgICAgICB0aGlzLm56VmFsdWUgKz0gMC41O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uelZhbHVlICs9IDE7XG4gICAgICB9XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMubnpWYWx1ZSk7XG4gICAgfSBlbHNlIGlmICgoY29kZSA9PT0gJ0Fycm93TGVmdCcgfHwgZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSAmJiAodGhpcy5uelZhbHVlID4gMCkpIHtcbiAgICAgIGlmICh0aGlzLm56QWxsb3dIYWxmKSB7XG4gICAgICAgIHRoaXMubnpWYWx1ZSAtPSAwLjU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56VmFsdWUgLT0gMTtcbiAgICAgIH1cbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy5uelZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5uek9uS2V5RG93bi5lbWl0KGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIHNldENsYXNzZXMoaTogbnVtYmVyKTogb2JqZWN0IHtcbiAgICByZXR1cm4ge1xuICAgICAgWyB0aGlzLmlubmVyUHJlZml4Q2xzIF0gICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1mdWxsYCBdICAgOiAoaSArIDEgPCB0aGlzLmhvdmVyVmFsdWUpIHx8ICghdGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSksXG4gICAgICBbIGAke3RoaXMuaW5uZXJQcmVmaXhDbHN9LWhhbGZgIF0gICA6ICh0aGlzLmhhc0hhbGYpICYmIChpICsgMSA9PT0gdGhpcy5ob3ZlclZhbHVlKSxcbiAgICAgIFsgYCR7dGhpcy5pbm5lclByZWZpeENsc30tYWN0aXZlYCBdIDogKHRoaXMuaGFzSGFsZikgJiYgKGkgKyAxID09PSB0aGlzLmhvdmVyVmFsdWUpLFxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS16ZXJvYCBdICAgOiAoaSArIDEgPiB0aGlzLmhvdmVyVmFsdWUpLFxuICAgICAgWyBgJHt0aGlzLmlubmVyUHJlZml4Q2xzfS1mb2N1c2VkYCBdOiAodGhpcy5oYXNIYWxmKSAmJiAoaSArIDEgPT09IHRoaXMuaG92ZXJWYWx1ZSkgJiYgdGhpcy5pc0ZvY3VzZWRcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlU3RhckFycmF5KCk6IHZvaWQge1xuICAgIGxldCBpbmRleCA9IDA7XG4gICAgdGhpcy5zdGFyQXJyYXkgPSBbXTtcbiAgICB3aGlsZSAoaW5kZXggPCB0aGlzLm56Q291bnQpIHtcbiAgICAgIHRoaXMuc3RhckFycmF5LnB1c2goaW5kZXgrKyk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMubnpWYWx1ZSA9IHZhbHVlIHx8IDA7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMudXBkYXRlU3RhckFycmF5KCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0luaXQgPSB0cnVlO1xuICB9XG59XG4iXX0=