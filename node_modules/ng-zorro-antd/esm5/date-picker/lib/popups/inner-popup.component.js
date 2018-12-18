/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
var InnerPopupComponent = /** @class */ (function () {
    function InnerPopupComponent() {
        this.panelModeChange = new EventEmitter();
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    InnerPopupComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] && !this.value) {
            this.value = new CandyDate();
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectTime = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        this.selectTime.emit(new CandyDate(date));
    };
    // The value real changed to outside
    /**
     * @param {?} date
     * @return {?}
     */
    InnerPopupComponent.prototype.onSelectDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        /** @type {?} */
        var value = date instanceof CandyDate ? date : new CandyDate(date);
        this.selectDate.emit(value);
    };
    InnerPopupComponent.decorators = [
        { type: Component, args: [{
                    selector: 'inner-popup',
                    template: "<calendar-header\n  [(panelMode)]=\"panelMode\"\n  (panelModeChange)=\"panelModeChange.emit($event)\"\n  [(value)]=\"value\"\n  (valueChange)=\"headerChange.emit($event)\"\n  [locale]=\"locale\"\n  [showTimePicker]=\"showTimePicker\"\n  [enablePrev]=\"enablePrev\"\n  [enableNext]=\"enableNext\"\n></calendar-header>\n\n<ng-container *ngIf=\"showTimePicker && timeOptions\">\n  <nz-time-picker-panel\n    [nzInDatePicker]=\"true\"\n    [ngModel]=\"value.nativeDate\"\n    (ngModelChange)=\"onSelectTime($event)\"\n    [format]=\"timeOptions.nzFormat\"\n    [nzHourStep]=\"timeOptions.nzHourStep\"\n    [nzMinuteStep]=\"timeOptions.nzMinuteStep\"\n    [nzSecondStep]=\"timeOptions.nzSecondStep\"\n    [nzDisabledHours]=\"timeOptions.nzDisabledHours\"\n    [nzDisabledMinutes]=\"timeOptions.nzDisabledMinutes\"\n    [nzDisabledSeconds]=\"timeOptions.nzDisabledSeconds\"\n    [nzHideDisabledOptions]=\"timeOptions.nzHideDisabledOptions\"\n    [nzDefaultOpenValue]=\"timeOptions.nzDefaultOpenValue\"\n    [nzAddOn]=\"timeOptions.nzAddOn\"\n  ></nz-time-picker-panel>\n</ng-container>\n\n<div class=\"{{ prefixCls }}-body\">\n  <date-table\n    [showWeek]=\"showWeek\"\n    [value]=\"value\"\n    (valueChange)=\"onSelectDate($event)\"\n    showWeekNumber=\"false\"\n    [disabledDate]=\"disabledDate\"\n    [dateRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    (dayHover)=\"dayHover.emit($event)\"\n  ></date-table>\n</div>"
                }] }
    ];
    /** @nocollapse */
    InnerPopupComponent.ctorParameters = function () { return []; };
    InnerPopupComponent.propDecorators = {
        showWeek: [{ type: Input }],
        locale: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        timeOptions: [{ type: Input }],
        enablePrev: [{ type: Input }],
        enableNext: [{ type: Input }],
        disabledDate: [{ type: Input }],
        dateRender: [{ type: Input }],
        selectedValue: [{ type: Input }],
        hoverValue: [{ type: Input }],
        panelMode: [{ type: Input }],
        panelModeChange: [{ type: Output }],
        value: [{ type: Input }],
        headerChange: [{ type: Output }],
        selectDate: [{ type: Output }],
        selectTime: [{ type: Output }],
        dayHover: [{ type: Output }]
    };
    return InnerPopupComponent;
}());
export { InnerPopupComponent };
function InnerPopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    InnerPopupComponent.prototype.showWeek;
    /** @type {?} */
    InnerPopupComponent.prototype.locale;
    /** @type {?} */
    InnerPopupComponent.prototype.showTimePicker;
    /** @type {?} */
    InnerPopupComponent.prototype.timeOptions;
    /** @type {?} */
    InnerPopupComponent.prototype.enablePrev;
    /** @type {?} */
    InnerPopupComponent.prototype.enableNext;
    /** @type {?} */
    InnerPopupComponent.prototype.disabledDate;
    /** @type {?} */
    InnerPopupComponent.prototype.dateRender;
    /** @type {?} */
    InnerPopupComponent.prototype.selectedValue;
    /** @type {?} */
    InnerPopupComponent.prototype.hoverValue;
    /** @type {?} */
    InnerPopupComponent.prototype.panelMode;
    /** @type {?} */
    InnerPopupComponent.prototype.panelModeChange;
    /** @type {?} */
    InnerPopupComponent.prototype.value;
    /** @type {?} */
    InnerPopupComponent.prototype.headerChange;
    /** @type {?} */
    InnerPopupComponent.prototype.selectDate;
    /** @type {?} */
    InnerPopupComponent.prototype.selectTime;
    /** @type {?} */
    InnerPopupComponent.prototype.dayHover;
    /** @type {?} */
    InnerPopupComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9wb3B1cHMvaW5uZXItcG9wdXAuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBOEIsTUFBTSxlQUFlLENBQUM7QUFLdEgsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUFpQ3hDO1FBWEEsdUJBQTRCLElBQUksWUFBWSxFQUFhLENBQUM7UUFJMUQsb0JBQXlCLElBQUksWUFBWSxFQUFhLENBQUM7UUFDdkQsa0JBQXVCLElBQUksWUFBWSxFQUFhLENBQUM7UUFDckQsa0JBQXVCLElBQUksWUFBWSxFQUFhLENBQUM7UUFDckQsZ0JBQXFCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFbkQsaUJBQW9CLGNBQWMsQ0FBQztLQUVsQjs7OztJQUVqQixzQ0FBUTs7O0lBQVIsZUFBb0I7Ozs7O0lBRXBCLHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sYUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1NBQzlCO0tBQ0Y7Ozs7O0lBRUQsMENBQVk7Ozs7SUFBWixVQUFhLElBQVU7UUFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUMzQztJQUVELG9DQUFvQzs7Ozs7SUFDcEMsMENBQVk7Ozs7SUFBWixVQUFhLElBQXNCOztRQUVqQyxJQUFNLEtBQUssR0FBSSxJQUFJLFlBQVksU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzdCOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2QiwwOENBQXlDO2lCQUMxQzs7Ozs7MkJBR0UsS0FBSzt5QkFFTCxLQUFLO2lDQUNMLEtBQUs7OEJBRUwsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLO2dDQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFFTCxLQUFLO2tDQUNMLE1BQU07d0JBRU4sS0FBSzsrQkFFTCxNQUFNOzZCQUNOLE1BQU07NkJBQ04sTUFBTTsyQkFDTixNQUFNOzs4QkFsQ1Q7O1NBWWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICcuLi8uLi8uLi9jb3JlL3R5cGVzL2NvbW1vbi13cmFwJztcbmltcG9ydCB7IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vLi4vLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgUGFuZWxNb2RlIH0gZnJvbSAnLi4vLi4vc3RhbmRhcmQtdHlwZXMnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lubmVyLXBvcHVwJyxcbiAgdGVtcGxhdGVVcmw6ICdpbm5lci1wb3B1cC5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBJbm5lclBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbjtcblxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzaG93VGltZVBpY2tlcjogYm9vbGVhbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSB0aW1lT3B0aW9uczogYW55O1xuICBASW5wdXQoKSBlbmFibGVQcmV2OiBib29sZWFuO1xuICBASW5wdXQoKSBlbmFibGVOZXh0OiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IERpc2FibGVkRGF0ZUZuO1xuICBASW5wdXQoKSBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+O1xuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuXG4gIEBJbnB1dCgpIHBhbmVsTW9kZTogUGFuZWxNb2RlO1xuICBAT3V0cHV0KCkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGU+KCk7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcblxuICBAT3V0cHV0KCkgaGVhZGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiB1c2VyIGNoYW5nZWQgdGhlIGhlYWRlcidzIHZhbHVlXG4gIEBPdXRwdXQoKSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiB0aGUgZGF0ZSBpcyBzZWxlY3RlZCBieSBjbGljayB0aGUgZGF0ZSBwYW5lbFxuICBAT3V0cHV0KCkgc2VsZWN0VGltZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuICBAT3V0cHV0KCkgZGF5SG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTsgLy8gRW1pdHRlZCB3aGVuIGhvdmVyIG9uIGEgZGF5IGJ5IG1vdXNlIGVudGVyXG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlICYmICF0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3IENhbmR5RGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uU2VsZWN0VGltZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RUaW1lLmVtaXQobmV3IENhbmR5RGF0ZShkYXRlKSk7XG4gIH1cblxuICAvLyBUaGUgdmFsdWUgcmVhbCBjaGFuZ2VkIHRvIG91dHNpZGVcbiAgb25TZWxlY3REYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUpOiB2b2lkIHtcbiAgICAvLyB0aGlzLnZhbHVlID0gZGF0ZSBpbnN0YW5jZW9mIENhbmR5RGF0ZSA/IGRhdGUgOiBuZXcgQ2FuZHlEYXRlKGRhdGUpO1xuICAgIGNvbnN0IHZhbHVlICA9IGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlIDogbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==