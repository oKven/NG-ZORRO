/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
export class TodayButtonComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.hasTimePicker = false;
        this.clickToday = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.isDisabled = false;
        this.now = new CandyDate();
    }
    /**
     * @return {?}
     */
    get title() {
        return this.i18n.formatDate(this.now.nativeDate, 'longDate');
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["disabledDate"]) {
            this.isDisabled = this.disabledDate && this.disabledDate(this.now.nativeDate);
        }
    }
    /**
     * @return {?}
     */
    onClickToday() {
        this.clickToday.emit(this.now.clone()); // To prevent the "now" being modified from outside, we use clone
    }
}
TodayButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'today-button',
                template: "<a\n  class=\"{{ prefixCls }}-today-btn {{ isDisabled ? prefixCls + '-today-btn-disabled' : '' }}\"\n  role=\"button\"\n  (click)=\"isDisabled ? null : onClickToday()\"\n  title=\"{{ title }}\"\n>\n  {{ hasTimePicker ? locale.now : locale.today }}\n</a>"
            }] }
];
/** @nocollapse */
TodayButtonComponent.ctorParameters = () => [
    { type: NzI18nService }
];
TodayButtonComponent.propDecorators = {
    locale: [{ type: Input }],
    hasTimePicker: [{ type: Input }],
    disabledDate: [{ type: Input }],
    clickToday: [{ type: Output }]
};
function TodayButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TodayButtonComponent.prototype.locale;
    /** @type {?} */
    TodayButtonComponent.prototype.hasTimePicker;
    /** @type {?} */
    TodayButtonComponent.prototype.disabledDate;
    /** @type {?} */
    TodayButtonComponent.prototype.clickToday;
    /** @type {?} */
    TodayButtonComponent.prototype.prefixCls;
    /** @type {?} */
    TodayButtonComponent.prototype.isDisabled;
    /** @type {?} */
    TodayButtonComponent.prototype.now;
    /** @type {?} */
    TodayButtonComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvdG9kYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUM5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7SUFnQi9CLFlBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7UUFkdkMscUJBQWtDLEtBQUssQ0FBQztRQUl4QyxrQkFBdUIsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUVyRCxpQkFBb0IsY0FBYyxDQUFDO1FBQ25DLGtCQUFzQixLQUFLLENBQUM7bUJBS0gsSUFBSSxTQUFTLEVBQUU7S0FFSTs7OztJQU41QyxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0tBQzlEOzs7O0lBTUQsUUFBUSxNQUFZOzs7OztJQUVwQixXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGtCQUFlO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDL0U7S0FDRjs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7S0FDeEM7OztZQWpDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHlRQUEwQzthQUMzQzs7OztZQU5RLGFBQWE7OztxQkFTbkIsS0FBSzs0QkFDTCxLQUFLOzJCQUVMLEtBQUs7eUJBRUwsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd0b2RheS1idXR0b24nLFxuICB0ZW1wbGF0ZVVybDogJ3RvZGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb2RheUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcbiAgQElucHV0KCkgaGFzVGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuXG4gIEBPdXRwdXQoKSBjbGlja1RvZGF5ID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcbiAgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgdGl0bGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmZvcm1hdERhdGUodGhpcy5ub3cubmF0aXZlRGF0ZSwgJ2xvbmdEYXRlJyk7XG4gIH1cblxuICBwcml2YXRlIG5vdzogQ2FuZHlEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7IH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuZGlzYWJsZWREYXRlKSB7XG4gICAgICB0aGlzLmlzRGlzYWJsZWQgPSB0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZSh0aGlzLm5vdy5uYXRpdmVEYXRlKTtcbiAgICB9XG4gIH1cblxuICBvbkNsaWNrVG9kYXkoKTogdm9pZCB7XG4gICAgdGhpcy5jbGlja1RvZGF5LmVtaXQodGhpcy5ub3cuY2xvbmUoKSk7IC8vIFRvIHByZXZlbnQgdGhlIFwibm93XCIgYmVpbmcgbW9kaWZpZWQgZnJvbSBvdXRzaWRlLCB3ZSB1c2UgY2xvbmVcbiAgfVxufVxuIl19