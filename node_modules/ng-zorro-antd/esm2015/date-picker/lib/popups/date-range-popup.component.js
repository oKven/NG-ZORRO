/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
import { getTimeConfig, isAllowedDate } from '../util';
export class DateRangePopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
        this.resultOk = new EventEmitter(); // Emitted when done with date selecting
        this.closePicker = new EventEmitter(); // Notify outside to close the picker panel
        // @Output() selectDate = new EventEmitter<CandyDate>(); // Emitted when the date is selected by click the date panel (if isRange, the returned date is from one of the range parts)
        this.prefixCls = 'ant-calendar';
        this.showTimePicker = false;
        this.partTypeMap = { 'left': 0, 'right': 1 };
        this.disabledStartTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'start');
        };
        this.disabledEndTime = (value) => {
            return this.disabledTime && this.disabledTime(value, 'end');
        };
    }
    /**
     * @return {?}
     */
    get hasTimePicker() {
        return !!this.showTime;
    }
    /**
     * @return {?}
     */
    get hasFooter() {
        return this.showToday || this.hasTimePicker || !!this.extraFooter || !!this.ranges;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Initialization for range properties to prevent errors while later assignment
        if (this.isRange) {
            ['placeholder', 'panelMode', 'selectedValue', 'hoverValue'].forEach((prop) => this.initialArray(prop));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.isRange) {
            if (changes["value"]) { // Re-initialize all related values
                // Re-initialize all related values
                this.clearHoverValue();
                this.selectedValue = /** @type {?} */ (this.value);
                this.valueForRangeShow = this.normalizeRangeValue(/** @type {?} */ (this.value));
            }
        }
        // Parse showTime options
        if (changes["showTime"] || changes["disabledTime"]) {
            if (this.showTime) {
                this.buildTimeOptions();
            }
        }
        // Show time picker when assigned panel mode as "time"
        if (changes["panelMode"] && this.hasTimePicker) {
            this.showTimePicker = this.panelMode === 'time';
        }
    }
    /**
     * @param {?} show
     * @return {?}
     */
    onShowTimePickerChange(show) {
        // this.panelMode = show ? 'time' : 'date';
        // this.panelModeChange.emit(this.panelMode);
        this.panelModeChange.emit(show ? 'time' : 'date');
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onClickToday(value) {
        // if (this.isRange) { // Show today is not support by range
        //   throw new Error('"nzShowToday" is not support for "RangePicker"!');
        // } else {
        if (!this.isRange) {
            this.value = null; // Clear current value to not sync time by next step
            this.changeValue(value);
        }
        this.closePickerPanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onDayHover(value) {
        if (this.isRange && this.selectedValue[0] && !this.selectedValue[1]) { // When right value is selected, don't do hover
            /** @type {?} */
            const base = this.selectedValue[0]; // Use the left of selected value as the base to decide later hoverValue
            if (base.isBefore(value, 'day')) {
                this.hoverValue = [base, value];
            }
            else {
                this.hoverValue = [value, base];
            }
        }
    }
    /**
     * @param {?} mode
     * @param {?=} partType
     * @return {?}
     */
    onPanelModeChange(mode, partType) {
        if (this.isRange) {
            (/** @type {?} */ (this.panelMode))[this.getPartTypeIndex(partType)] = mode;
        }
        else {
            this.panelMode = mode;
        }
        this.panelModeChange.emit(this.panelMode);
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onHeaderChange(value, partType) {
        if (this.isRange) {
            this.valueForRangeShow[this.getPartTypeIndex(partType)] = value;
            this.valueForRangeShow = this.normalizeRangeValue(this.valueForRangeShow); // Should always take care of start/end
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    onSelectTime(value, partType) {
        if (this.isRange) {
            /** @type {?} */
            const newValue = this.cloneRangeDate(/** @type {?} */ (this.value));
            /** @type {?} */
            const index = this.getPartTypeIndex(partType);
            newValue[index] = this.overrideHms(value, newValue[index]);
            this.setValue(newValue);
        }
        else {
            this.setValue(this.overrideHms(value, (/** @type {?} */ (this.value)) || new CandyDate())); // If not select a date currently, use today
        }
    }
    /**
     * @param {?} value
     * @param {?=} partType
     * @return {?}
     */
    changeValue(value, partType) {
        if (this.isRange) {
            /** @type {?} */
            const index = this.getPartTypeIndex(partType);
            this.selectedValue[index] = value;
            if (this.isValidRange(this.selectedValue)) {
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromSelect(value) {
        if (this.isRange) {
            const [left, right] = /** @type {?} */ (this.selectedValue); // NOTE: the left/right maybe not the sequence it select at the date panels
            if ((!left && !right) || (left && right)) { // If totally full or empty, clean up && re-assign left first
                // If totally full or empty, clean up && re-assign left first
                this.hoverValue = this.selectedValue = [value];
            }
            else if (left && !right) { // If one of them is empty, assign the other one and sort, then set the final values
                // If one of them is empty, assign the other one and sort, then set the final values
                this.clearHoverValue(); // Clean up
                this.setRangeValue('selectedValue', 'right', value);
                this.sortRangeValue('selectedValue'); // Sort
                this.valueForRangeShow = this.normalizeRangeValue(this.selectedValue);
                this.setValue(this.cloneRangeDate(this.selectedValue));
            }
        }
        else {
            this.setValue(value);
        }
        // this.selectDate.emit(value);
    }
    /**
     * @param {?} direction
     * @param {?=} partType
     * @return {?}
     */
    enablePrevNext(direction, partType) {
        if (this.isRange) {
            const [start, end] = this.valueForRangeShow;
            /** @type {?} */
            const showMiddle = !start.addMonths(1).isSame(end, 'month'); // One month diff then don't show middle prev/next
            if ((partType === 'left' && direction === 'next') || (partType === 'right' && direction === 'prev')) {
                return showMiddle;
            }
            return true;
        }
        else {
            return true;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPanelMode(partType) {
        if (this.isRange) {
            return /** @type {?} */ (this.panelMode[this.getPartTypeIndex(partType)]);
        }
        else {
            return /** @type {?} */ (this.panelMode);
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValue(partType) {
        if (this.isRange) {
            return this.value[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getValueBySelector(partType) {
        if (this.isRange) {
            /** @type {?} */
            const valueShow = this.showTimePicker ? this.value : this.valueForRangeShow; // Use the real time value that without decorations when timepicker is shown up
            return valueShow[this.getPartTypeIndex(partType)];
        }
        else {
            return /** @type {?} */ (this.value);
        }
    }
    /**
     * @param {?} partType
     * @return {?}
     */
    getPartTypeIndex(partType) {
        return this.partTypeMap[partType];
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getPlaceholder(partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : /** @type {?} */ (this.placeholder);
    }
    /**
     * @return {?}
     */
    hasSelectedValue() {
        return this.selectedValue && !!this.selectedValue[1] && !!this.selectedValue[0];
    }
    /**
     * @return {?}
     */
    isAllowedSelectedValue() {
        /** @type {?} */
        const selectedValue = this.selectedValue;
        if (selectedValue && selectedValue[0] && selectedValue[1]) {
            return isAllowedDate(selectedValue[0], this.disabledDate, this.disabledStartTime) &&
                isAllowedDate(selectedValue[1], this.disabledDate, this.disabledEndTime);
        }
        return false;
    }
    /**
     * @return {?}
     */
    timePickerDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return false;
        }
    }
    /**
     * @return {?}
     */
    okDisabled() {
        if (!this.hasTimePicker) {
            return true;
        }
        if (this.isRange) {
            return !this.isAllowedSelectedValue() || !this.hasSelectedValue() || !!this.hoverValue.length;
        }
        else {
            return this.value ? !isAllowedDate(/** @type {?} */ (this.value), this.disabledDate, this.disabledTime) : false;
        }
    }
    /**
     * @param {?=} partType
     * @return {?}
     */
    getTimeOptions(partType) {
        if (this.showTime && this.timeOptions) {
            return this.isRange ? this.timeOptions[this.getPartTypeIndex(partType)] : this.timeOptions;
        }
        return null;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onClickPresetRange(val) {
        /** @type {?} */
        const value = val;
        this.setValue([new CandyDate(value[0]), new CandyDate(value[1])]);
        this.resultOk.emit();
    }
    /**
     * @return {?}
     */
    onPresetRangeMouseLeave() {
        this.clearHoverValue();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    onHoverPresetRange(val) {
        this.hoverValue = ([new CandyDate(val[0]), new CandyDate(val[1])]);
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    getObjectKeys(obj) {
        return obj ? Object.keys(obj) : [];
    }
    /**
     * @return {?}
     */
    closePickerPanel() {
        this.closePicker.emit();
    }
    /**
     * @return {?}
     */
    clearHoverValue() {
        this.hoverValue = [];
    }
    /**
     * @return {?}
     */
    buildTimeOptions() {
        if (this.showTime) {
            /** @type {?} */
            const showTime = typeof this.showTime === 'object' ? this.showTime : {};
            if (this.isRange) {
                this.timeOptions = [this.overrideTimeOptions(showTime, this.value[0], 'start'), this.overrideTimeOptions(showTime, this.value[1], 'end')];
            }
            else {
                this.timeOptions = this.overrideTimeOptions(showTime, /** @type {?} */ (this.value));
            }
        }
        else {
            this.timeOptions = null;
        }
    }
    /**
     * @param {?} origin
     * @param {?} value
     * @param {?=} partial
     * @return {?}
     */
    overrideTimeOptions(origin, value, partial) {
        /** @type {?} */
        let disabledTimeFn;
        if (partial) {
            disabledTimeFn = partial === 'start' ? this.disabledStartTime : this.disabledEndTime;
        }
        else {
            disabledTimeFn = this.disabledTime;
        }
        return Object.assign({}, origin, getTimeConfig(value, disabledTimeFn));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        const newValue = value;
        // TODO: Sync original time (NOTE: this should take more care of beacuse it may depend on many change sources)
        // if (this.isRange) {
        //   // TODO: Sync time
        // } else {
        //   if (this.value) { // Sync time from the original one if it's available
        //     newValue = this.overrideHms(this.value as CandyDate, newValue as CandyDate);
        //   }
        // }
        this.value = newValue;
        this.valueChange.emit(this.value);
        this.buildTimeOptions();
    }
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    overrideHms(from, to) {
        if (!from || !to) {
            return null;
        }
        return to.setHms(from.getHours(), from.getMinutes(), from.getSeconds());
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isValidRange(value) {
        if (Array.isArray(value)) {
            const [start, end] = value;
            /** @type {?} */
            const grain = this.hasTimePicker ? 'second' : 'day';
            return start && end && (start.isBefore(end, grain) || start.isSame(end, grain));
        }
        return false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    normalizeRangeValue(value) {
        const [start, end] = value;
        /** @type {?} */
        const newStart = start || new CandyDate();
        /** @type {?} */
        const newEnd = end && end.isSame(newStart, 'month') ? end.addMonths(1) : end || newStart.addMonths(1);
        return [newStart, newEnd];
    }
    /**
     * @param {?} key
     * @return {?}
     */
    sortRangeValue(key) {
        if (Array.isArray(this[key])) {
            const [start, end] = this[key];
            if (start && end && start.isAfter(end, 'day')) {
                this[key] = [end, start];
            }
        }
    }
    /**
     * @param {?} key
     * @param {?} partType
     * @param {?} value
     * @return {?}
     */
    setRangeValue(key, partType, value) {
        /** @type {?} */
        const ref = this[key] = this.cloneRangeDate(/** @type {?} */ (this[key]));
        ref[this.getPartTypeIndex(partType)] = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    cloneRangeDate(value) {
        return /** @type {?} */ ([value[0] && value[0].clone(), value[1] && value[1].clone()]);
    }
    /**
     * @param {?} key
     * @return {?}
     */
    initialArray(key) {
        if (!this[key] || !Array.isArray(this[key])) {
            this[key] = [];
        }
    }
}
DateRangePopupComponent.decorators = [
    { type: Component, args: [{
                selector: 'date-range-popup',
                template: "<div\n  class=\"{{ prefixCls }}-picker-container {{ dropdownClassName }} {{ prefixCls }}-picker-container-placement-bottomLeft\"\n  [ngStyle]=\"popupStyle\">\n\n  <div class=\"{{ prefixCls }} {{ showWeek ? prefixCls + '-week-number': '' }} {{ hasTimePicker ? prefixCls + '-time' : '' }} {{ isRange ? prefixCls + '-range' : '' }}\" tabindex=\"0\">\n    <div class=\"{{ prefixCls }}-panel\">\n      <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplCalendarInput\"></ng-container>\n      </ng-container>\n      <div class=\"{{ prefixCls }}-date-panel\">\n        <ng-container *ngIf=\"isRange; else tplSinglePart\">\n          <!-- Range Selectors -->\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'left' }\"></ng-container>\n          <div class=\"ant-calendar-range-middle\">~</div>\n          <ng-container *ngTemplateOutlet=\"tplRangePart; context: { partType: 'right' }\"></ng-container>\n        </ng-container>\n\n        <ng-container *ngIf=\"!isRange\"> <!-- Single ONLY -->\n          <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n        </ng-container>\n      </div>\n      <ng-container *ngIf=\"isRange\"> <!-- Range ONLY -->\n        <ng-container *ngTemplateOutlet=\"tplFooter\"></ng-container>\n      </ng-container>\n    </div>\n  </div>\n</div>\n\n<ng-template #tplCalendarInput let-partType=\"partType\">\n  <calendar-input\n    [value]=\"getValue(partType)\"\n    (valueChange)=\"changeValue($event, partType)\"\n    [locale]=\"locale\"\n    [disabledDate]=\"disabledDate\"\n    [format]=\"format\"\n    [placeholder]=\"getPlaceholder(partType)\"\n  ></calendar-input>\n</ng-template>\n\n<ng-template #tplInnerPopup let-partType=\"partType\">\n  <inner-popup\n    [showWeek]=\"showWeek\"\n    [locale]=\"locale\"\n    [showTimePicker]=\"hasTimePicker && showTimePicker\"\n    [timeOptions]=\"getTimeOptions(partType)\"\n    [panelMode]=\"getPanelMode(partType)\"\n    (panelModeChange)=\"onPanelModeChange($event, partType)\"\n    [value]=\"getValueBySelector(partType)\"\n    [disabledDate]=\"disabledDate\"\n    [dateRender]=\"dateRender\"\n    [selectedValue]=\"selectedValue\"\n    [hoverValue]=\"hoverValue\"\n    [enablePrev]=\"enablePrevNext('prev', partType)\"\n    [enableNext]=\"enablePrevNext('next', partType)\"\n    (dayHover)=\"onDayHover($event)\"\n    (selectDate)=\"changeValueFromSelect($event)\"\n    (selectTime)=\"onSelectTime($event, partType)\"\n    (headerChange)=\"onHeaderChange($event, partType)\"\n  ></inner-popup>\n</ng-template>\n\n<ng-template #tplFooter>\n  <calendar-footer\n    *ngIf=\"hasFooter\"\n    [locale]=\"locale\"\n    [showToday]=\"showToday\"\n    [hasTimePicker]=\"hasTimePicker\"\n    [timePickerDisabled]=\"timePickerDisabled()\"\n    [okDisabled]=\"okDisabled()\"\n    [extraFooter]=\"extraFooter\"\n    [rangeQuickSelector]=\"ranges ? tplRangeQuickSelector : null\"\n    [(showTimePicker)]=\"showTimePicker\"\n    (showTimePickerChange)=\"onShowTimePickerChange($event)\"\n    (clickOk)=\"resultOk.emit()\"\n    (clickToday)=\"onClickToday($event)\"\n  ></calendar-footer>\n</ng-template>\n\n<!-- Single ONLY -->\n<ng-template #tplSinglePart>\n  <ng-container *ngTemplateOutlet=\"tplInnerPopup\"></ng-container>\n</ng-template>\n\n<!-- Range ONLY -->\n<ng-template #tplRangePart let-partType=\"partType\">\n  <div class=\"{{ prefixCls }}-range-part {{ prefixCls }}-range-{{ partType }}\">\n    <ng-container *ngTemplateOutlet=\"tplCalendarInput; context: { partType: partType }\"></ng-container>\n    <div style=\"outline: none;\">\n      <ng-container *ngTemplateOutlet=\"tplInnerPopup; context: { partType: partType }\"></ng-container>\n    </div>\n  </div>\n</ng-template>\n\n<!-- Range ONLY: Range Quick Selector -->\n<ng-template #tplRangeQuickSelector>\n  <a *ngFor=\"let name of getObjectKeys(ranges)\"\n    (click)=\"onClickPresetRange(ranges[name])\"\n    (mouseenter)=\"onHoverPresetRange(ranges[name])\"\n    (mouseleave)=\"onPresetRangeMouseLeave()\"\n  >{{ name }}</a>\n</ng-template>"
            }] }
];
DateRangePopupComponent.propDecorators = {
    isRange: [{ type: Input }],
    showWeek: [{ type: Input }],
    locale: [{ type: Input }],
    format: [{ type: Input }],
    placeholder: [{ type: Input }],
    disabledDate: [{ type: Input }],
    disabledTime: [{ type: Input }],
    showToday: [{ type: Input }],
    showTime: [{ type: Input }],
    extraFooter: [{ type: Input }],
    ranges: [{ type: Input }],
    dateRender: [{ type: Input }],
    popupStyle: [{ type: Input }],
    dropdownClassName: [{ type: Input }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    resultOk: [{ type: Output }],
    closePicker: [{ type: Output }]
};
function DateRangePopupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateRangePopupComponent.prototype.isRange;
    /** @type {?} */
    DateRangePopupComponent.prototype.showWeek;
    /** @type {?} */
    DateRangePopupComponent.prototype.locale;
    /** @type {?} */
    DateRangePopupComponent.prototype.format;
    /** @type {?} */
    DateRangePopupComponent.prototype.placeholder;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledDate;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.showToday;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.extraFooter;
    /** @type {?} */
    DateRangePopupComponent.prototype.ranges;
    /** @type {?} */
    DateRangePopupComponent.prototype.dateRender;
    /** @type {?} */
    DateRangePopupComponent.prototype.popupStyle;
    /** @type {?} */
    DateRangePopupComponent.prototype.dropdownClassName;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelMode;
    /** @type {?} */
    DateRangePopupComponent.prototype.panelModeChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.value;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueChange;
    /** @type {?} */
    DateRangePopupComponent.prototype.resultOk;
    /** @type {?} */
    DateRangePopupComponent.prototype.closePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.prefixCls;
    /** @type {?} */
    DateRangePopupComponent.prototype.showTimePicker;
    /** @type {?} */
    DateRangePopupComponent.prototype.timeOptions;
    /** @type {?} */
    DateRangePopupComponent.prototype.valueForRangeShow;
    /** @type {?} */
    DateRangePopupComponent.prototype.selectedValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.hoverValue;
    /** @type {?} */
    DateRangePopupComponent.prototype.partTypeMap;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledStartTime;
    /** @type {?} */
    DateRangePopupComponent.prototype.disabledEndTime;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1yYW5nZS1wb3B1cC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL3BvcHVwcy9kYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQThCLE1BQU0sZUFBZSxDQUFDO0FBYXRILE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsTUFBTSxTQUFTLENBQUM7QUFPdkQsTUFBTSxPQUFPLHVCQUF1Qjs7UUFrQmxDLHVCQUE0QixJQUFJLFlBQVksRUFBMkIsQ0FBQztRQUd4RSxtQkFBd0IsSUFBSSxZQUFZLEVBQTJCLENBQUM7UUFFcEUsZ0JBQXFCLElBQUksWUFBWSxFQUFRLENBQUM7UUFDOUMsbUJBQXdCLElBQUksWUFBWSxFQUFRLENBQUM7O1FBR2pELGlCQUFvQixjQUFjLENBQUM7UUFDbkMsc0JBQTBCLEtBQUssQ0FBQzsyQkFtQlYsRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUU7UUEwSy9DLHlCQUFvQixDQUFDLEtBQW9CLEVBQXNCLEVBQUU7WUFDL0QsT0FBTyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9ELENBQUE7UUFFRCx1QkFBa0IsQ0FBQyxLQUFvQixFQUFzQixFQUFFO1lBQzdELE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztTQUM3RCxDQUFBOzs7OztJQXhMRCxJQUFJLGFBQWE7UUFDZixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFB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LEtBQUs7cUJBRUwsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLO3FCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO2dDQUNMLEtBQUs7d0JBRUwsS0FBSzs4QkFDTCxNQUFNO29CQUVOLEtBQUs7MEJBQ0wsTUFBTTt1QkFFTixNQUFNOzBCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdHlwZXMvY29tbW9uLXdyYXAnO1xuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7XG4gIERpc2FibGVkRGF0ZUZuLFxuICBEaXNhYmxlZFRpbWVDb25maWcsXG4gIERpc2FibGVkVGltZUZuLFxuICBEaXNhYmxlZFRpbWVQYXJ0aWFsLFxuICBQYW5lbE1vZGUsXG4gIFByZXNldFJhbmdlcyxcbiAgU3VwcG9ydFRpbWVPcHRpb25zXG59IGZyb20gJy4uLy4uL3N0YW5kYXJkLXR5cGVzJztcbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJy4uL2NhbmR5LWRhdGUnO1xuaW1wb3J0IHsgZ2V0VGltZUNvbmZpZywgaXNBbGxvd2VkRGF0ZSB9IGZyb20gJy4uL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICdkYXRlLXJhbmdlLXBvcHVwJyxcbiAgdGVtcGxhdGVVcmw6ICdkYXRlLXJhbmdlLXBvcHVwLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERhdGVSYW5nZVBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBpc1JhbmdlOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93V2VlazogYm9vbGVhbjtcblxuICBASW5wdXQoKSBsb2NhbGU6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IERpc2FibGVkRGF0ZUZuO1xuICBASW5wdXQoKSBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuOyAvLyBUaGlzIHdpbGwgbGVhZCB0byByZWJ1aWxkIHRpbWUgb3B0aW9uc1xuICBASW5wdXQoKSBzaG93VG9kYXk6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dUaW1lOiBTdXBwb3J0VGltZU9wdGlvbnMgfCBib29sZWFuO1xuICBASW5wdXQoKSBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHJhbmdlczogRnVuY3Rpb25Qcm9wPFByZXNldFJhbmdlcz47XG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI6IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIHBvcHVwU3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgZHJvcGRvd25DbGFzc05hbWU6IHN0cmluZztcblxuICBASW5wdXQoKSBwYW5lbE1vZGU6IFBhbmVsTW9kZSB8IFBhbmVsTW9kZVtdO1xuICBAT3V0cHV0KCkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxQYW5lbE1vZGUgfCBQYW5lbE1vZGVbXT4oKTtcblxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW107XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10+KCk7XG5cbiAgQE91dHB1dCgpIHJlc3VsdE9rID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpOyAvLyBFbWl0dGVkIHdoZW4gZG9uZSB3aXRoIGRhdGUgc2VsZWN0aW5nXG4gIEBPdXRwdXQoKSBjbG9zZVBpY2tlciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTsgLy8gTm90aWZ5IG91dHNpZGUgdG8gY2xvc2UgdGhlIHBpY2tlciBwYW5lbFxuICAvLyBAT3V0cHV0KCkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWQgYnkgY2xpY2sgdGhlIGRhdGUgcGFuZWwgKGlmIGlzUmFuZ2UsIHRoZSByZXR1cm5lZCBkYXRlIGlzIGZyb20gb25lIG9mIHRoZSByYW5nZSBwYXJ0cylcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuICBzaG93VGltZVBpY2tlcjogYm9vbGVhbiA9IGZhbHNlO1xuICB0aW1lT3B0aW9uczogU3VwcG9ydFRpbWVPcHRpb25zIHwgU3VwcG9ydFRpbWVPcHRpb25zW107XG4gIC8vIHZhbHVlRm9yU2VsZWN0b3I6IENhbmR5RGF0ZVtdOyAvLyBSYW5nZSBPTkxZXG4gIHZhbHVlRm9yUmFuZ2VTaG93OiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICAvLyBpbml0aWFsVmFsdWU6IENhbmR5RGF0ZSA9IG5ldyBDYW5keURhdGUoKTsgLy8gSW5pdGlhbCBkYXRlIHRvIHNob3cgd2hlbiBubyB2YWx1ZSBpbnB1dHNcblxuICAvLyBnZXQgdmFsdWVPckluaXRpYWwoKTogQ2FuZHlEYXRlIHtcbiAgLy8gICByZXR1cm4gdGhpcy52YWx1ZSB8fCB0aGlzLmluaXRpYWxWYWx1ZTtcbiAgLy8gfVxuICBnZXQgaGFzVGltZVBpY2tlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnNob3dUaW1lO1xuICB9XG5cbiAgZ2V0IGhhc0Zvb3RlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5zaG93VG9kYXkgfHwgdGhpcy5oYXNUaW1lUGlja2VyIHx8ICEhdGhpcy5leHRyYUZvb3RlciB8fCAhIXRoaXMucmFuZ2VzO1xuICB9XG5cbiAgcHJpdmF0ZSBwYXJ0VHlwZU1hcCA9IHsgJ2xlZnQnOiAwLCAncmlnaHQnOiAxIH07XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgLy8gSW5pdGlhbGl6YXRpb24gZm9yIHJhbmdlIHByb3BlcnRpZXMgdG8gcHJldmVudCBlcnJvcnMgd2hpbGUgbGF0ZXIgYXNzaWdubWVudFxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIFsgJ3BsYWNlaG9sZGVyJywgJ3BhbmVsTW9kZScsICdzZWxlY3RlZFZhbHVlJywgJ2hvdmVyVmFsdWUnIF0uZm9yRWFjaCgocHJvcCkgPT4gdGhpcy5pbml0aWFsQXJyYXkocHJvcCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBpZiAoY2hhbmdlcy52YWx1ZSkgeyAvLyBSZS1pbml0aWFsaXplIGFsbCByZWxhdGVkIHZhbHVlc1xuICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpO1xuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdO1xuICAgICAgICB0aGlzLnZhbHVlRm9yUmFuZ2VTaG93ID0gdGhpcy5ub3JtYWxpemVSYW5nZVZhbHVlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlW10pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFBhcnNlIHNob3dUaW1lIG9wdGlvbnNcbiAgICBpZiAoY2hhbmdlcy5zaG93VGltZSB8fCBjaGFuZ2VzLmRpc2FibGVkVGltZSkge1xuICAgICAgaWYgKHRoaXMuc2hvd1RpbWUpIHtcbiAgICAgICAgdGhpcy5idWlsZFRpbWVPcHRpb25zKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2hvdyB0aW1lIHBpY2tlciB3aGVuIGFzc2lnbmVkIHBhbmVsIG1vZGUgYXMgXCJ0aW1lXCJcbiAgICBpZiAoY2hhbmdlcy5wYW5lbE1vZGUgJiYgdGhpcy5oYXNUaW1lUGlja2VyKSB7XG4gICAgICB0aGlzLnNob3dUaW1lUGlja2VyID0gdGhpcy5wYW5lbE1vZGUgPT09ICd0aW1lJztcbiAgICB9XG4gIH1cblxuICBvblNob3dUaW1lUGlja2VyQ2hhbmdlKHNob3c6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvLyB0aGlzLnBhbmVsTW9kZSA9IHNob3cgPyAndGltZScgOiAnZGF0ZSc7XG4gICAgLy8gdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLnBhbmVsTW9kZSk7XG4gICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdChzaG93ID8gJ3RpbWUnIDogJ2RhdGUnKTtcbiAgfVxuXG4gIG9uQ2xpY2tUb2RheSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgLy8gaWYgKHRoaXMuaXNSYW5nZSkgeyAvLyBTaG93IHRvZGF5IGlzIG5vdCBzdXBwb3J0IGJ5IHJhbmdlXG4gICAgLy8gICB0aHJvdyBuZXcgRXJyb3IoJ1wibnpTaG93VG9kYXlcIiBpcyBub3Qgc3VwcG9ydCBmb3IgXCJSYW5nZVBpY2tlclwiIScpO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgaWYgKCF0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBudWxsOyAvLyBDbGVhciBjdXJyZW50IHZhbHVlIHRvIG5vdCBzeW5jIHRpbWUgYnkgbmV4dCBzdGVwXG4gICAgICB0aGlzLmNoYW5nZVZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5jbG9zZVBpY2tlclBhbmVsKCk7XG4gIH1cblxuICBvbkRheUhvdmVyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZVsgMCBdICYmICF0aGlzLnNlbGVjdGVkVmFsdWVbIDEgXSkgeyAvLyBXaGVuIHJpZ2h0IHZhbHVlIGlzIHNlbGVjdGVkLCBkb24ndCBkbyBob3ZlclxuICAgICAgY29uc3QgYmFzZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZVsgMCBdOyAvLyBVc2UgdGhlIGxlZnQgb2Ygc2VsZWN0ZWQgdmFsdWUgYXMgdGhlIGJhc2UgdG8gZGVjaWRlIGxhdGVyIGhvdmVyVmFsdWVcbiAgICAgIGlmIChiYXNlLmlzQmVmb3JlKHZhbHVlLCAnZGF5JykpIHtcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gWyBiYXNlLCB2YWx1ZSBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5ob3ZlclZhbHVlID0gWyB2YWx1ZSwgYmFzZSBdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKG1vZGU6IFBhbmVsTW9kZSwgcGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgKHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZVtdKVsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdID0gbW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wYW5lbE1vZGUgPSBtb2RlO1xuICAgIH1cbiAgICB0aGlzLnBhbmVsTW9kZUNoYW5nZS5lbWl0KHRoaXMucGFuZWxNb2RlKTtcbiAgfVxuXG4gIG9uSGVhZGVyQ2hhbmdlKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3dbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXSA9IHZhbHVlO1xuICAgICAgdGhpcy52YWx1ZUZvclJhbmdlU2hvdyA9IHRoaXMubm9ybWFsaXplUmFuZ2VWYWx1ZSh0aGlzLnZhbHVlRm9yUmFuZ2VTaG93KTsgLy8gU2hvdWxkIGFsd2F5cyB0YWtlIGNhcmUgb2Ygc3RhcnQvZW5kXG4gICAgfVxuICB9XG5cbiAgb25TZWxlY3RUaW1lKHZhbHVlOiBDYW5keURhdGUsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IG5ld1ZhbHVlID0gdGhpcy5jbG9uZVJhbmdlRGF0ZSh0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZVtdKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKTtcbiAgICAgIG5ld1ZhbHVlWyBpbmRleCBdID0gdGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgbmV3VmFsdWVbIGluZGV4IF0pO1xuICAgICAgdGhpcy5zZXRWYWx1ZShuZXdWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5vdmVycmlkZUhtcyh2YWx1ZSwgKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlKSB8fCBuZXcgQ2FuZHlEYXRlKCkpKTsgLy8gSWYgbm90IHNlbGVjdCBhIGRhdGUgY3VycmVudGx5LCB1c2UgdG9kYXlcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlLCBwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSk7XG4gICAgICB0aGlzLnNlbGVjdGVkVmFsdWVbIGluZGV4IF0gPSB2YWx1ZTtcbiAgICAgIGlmICh0aGlzLmlzVmFsaWRSYW5nZSh0aGlzLnNlbGVjdGVkVmFsdWUpKSB7XG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWYWx1ZUZyb21TZWxlY3QodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IFsgbGVmdCwgcmlnaHQgXSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZSBhcyBDYW5keURhdGVbXTsgLy8gTk9URTogdGhlIGxlZnQvcmlnaHQgbWF5YmUgbm90IHRoZSBzZXF1ZW5jZSBpdCBzZWxlY3QgYXQgdGhlIGRhdGUgcGFuZWxzXG5cbiAgICAgIGlmICgoIWxlZnQgJiYgIXJpZ2h0KSB8fCAobGVmdCAmJiByaWdodCkpIHsgLy8gSWYgdG90YWxseSBmdWxsIG9yIGVtcHR5LCBjbGVhbiB1cCAmJiByZS1hc3NpZ24gbGVmdCBmaXJzdFxuICAgICAgICB0aGlzLmhvdmVyVmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWUgPSBbIHZhbHVlIF07XG4gICAgICB9IGVsc2UgaWYgKGxlZnQgJiYgIXJpZ2h0KSB7IC8vIElmIG9uZSBvZiB0aGVtIGlzIGVtcHR5LCBhc3NpZ24gdGhlIG90aGVyIG9uZSBhbmQgc29ydCwgdGhlbiBzZXQgdGhlIGZpbmFsIHZhbHVlc1xuICAgICAgICB0aGlzLmNsZWFySG92ZXJWYWx1ZSgpOyAvLyBDbGVhbiB1cFxuICAgICAgICB0aGlzLnNldFJhbmdlVmFsdWUoJ3NlbGVjdGVkVmFsdWUnLCAncmlnaHQnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuc29ydFJhbmdlVmFsdWUoJ3NlbGVjdGVkVmFsdWUnKTsgLy8gU29ydFxuXG4gICAgICAgIHRoaXMudmFsdWVGb3JSYW5nZVNob3cgPSB0aGlzLm5vcm1hbGl6ZVJhbmdlVmFsdWUodGhpcy5zZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmNsb25lUmFuZ2VEYXRlKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgLy8gdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgZW5hYmxlUHJldk5leHQoZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsIHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gdGhpcy52YWx1ZUZvclJhbmdlU2hvdztcbiAgICAgIGNvbnN0IHNob3dNaWRkbGUgPSAhc3RhcnQuYWRkTW9udGhzKDEpLmlzU2FtZShlbmQsICdtb250aCcpOyAvLyBPbmUgbW9udGggZGlmZiB0aGVuIGRvbid0IHNob3cgbWlkZGxlIHByZXYvbmV4dFxuICAgICAgaWYgKChwYXJ0VHlwZSA9PT0gJ2xlZnQnICYmIGRpcmVjdGlvbiA9PT0gJ25leHQnKSB8fCAocGFydFR5cGUgPT09ICdyaWdodCcgJiYgZGlyZWN0aW9uID09PSAncHJldicpKSB7XG4gICAgICAgIHJldHVybiBzaG93TWlkZGxlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGdldFBhbmVsTW9kZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBQYW5lbE1vZGUge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhbmVsTW9kZVsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdIGFzIFBhbmVsTW9kZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGFuZWxNb2RlIGFzIFBhbmVsTW9kZTtcbiAgICB9XG4gIH1cblxuICAvLyBHZXQgc2luZ2xlIHZhbHVlIG9yIHBhcnQgdmFsdWUgb2YgYSByYW5nZVxuICBnZXRWYWx1ZShwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBDYW5keURhdGUge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlWyB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnZhbHVlIGFzIENhbmR5RGF0ZTtcbiAgICB9XG4gIH1cblxuICBnZXRWYWx1ZUJ5U2VsZWN0b3IocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogQ2FuZHlEYXRlIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBjb25zdCB2YWx1ZVNob3cgPSB0aGlzLnNob3dUaW1lUGlja2VyID8gdGhpcy52YWx1ZSA6IHRoaXMudmFsdWVGb3JSYW5nZVNob3c7IC8vIFVzZSB0aGUgcmVhbCB0aW1lIHZhbHVlIHRoYXQgd2l0aG91dCBkZWNvcmF0aW9ucyB3aGVuIHRpbWVwaWNrZXIgaXMgc2hvd24gdXBcbiAgICAgIHJldHVybiB2YWx1ZVNob3dbIHRoaXMuZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZSkgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlO1xuICAgIH1cbiAgfVxuXG4gIGdldFBhcnRUeXBlSW5kZXgocGFydFR5cGU6IFJhbmdlUGFydFR5cGUpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnBhcnRUeXBlTWFwWyBwYXJ0VHlwZSBdO1xuICB9XG5cbiAgZ2V0UGxhY2Vob2xkZXIocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy5wbGFjZWhvbGRlclsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdIDogdGhpcy5wbGFjZWhvbGRlciBhcyBzdHJpbmc7XG4gIH1cblxuICBoYXNTZWxlY3RlZFZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnNlbGVjdGVkVmFsdWUgJiYgISF0aGlzLnNlbGVjdGVkVmFsdWVbIDEgXSAmJiAhIXRoaXMuc2VsZWN0ZWRWYWx1ZVsgMCBdO1xuICB9XG5cbiAgZGlzYWJsZWRTdGFydFRpbWUgPSAodmFsdWU6IERhdGUgfCBEYXRlW10pOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ3N0YXJ0Jyk7XG4gIH1cblxuICBkaXNhYmxlZEVuZFRpbWUgPSAodmFsdWU6IERhdGUgfCBEYXRlW10pOiBEaXNhYmxlZFRpbWVDb25maWcgPT4ge1xuICAgIHJldHVybiB0aGlzLmRpc2FibGVkVGltZSAmJiB0aGlzLmRpc2FibGVkVGltZSh2YWx1ZSwgJ2VuZCcpO1xuICB9XG5cbiAgaXNBbGxvd2VkU2VsZWN0ZWRWYWx1ZSgpOiBib29sZWFuIHtcbiAgICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgIGlmIChzZWxlY3RlZFZhbHVlICYmIHNlbGVjdGVkVmFsdWVbIDAgXSAmJiBzZWxlY3RlZFZhbHVlWyAxIF0pIHtcbiAgICAgIHJldHVybiBpc0FsbG93ZWREYXRlKHNlbGVjdGVkVmFsdWVbIDAgXSwgdGhpcy5kaXNhYmxlZERhdGUsIHRoaXMuZGlzYWJsZWRTdGFydFRpbWUpICYmXG4gICAgICAgIGlzQWxsb3dlZERhdGUoc2VsZWN0ZWRWYWx1ZVsgMSBdLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZEVuZFRpbWUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aW1lUGlja2VyRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmhhc1RpbWVQaWNrZXIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHJldHVybiAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgb2tEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuaGFzVGltZVBpY2tlcikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgcmV0dXJuICF0aGlzLmlzQWxsb3dlZFNlbGVjdGVkVmFsdWUoKSB8fCAhdGhpcy5oYXNTZWxlY3RlZFZhbHVlKCkgfHwgISF0aGlzLmhvdmVyVmFsdWUubGVuZ3RoO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy52YWx1ZSA/ICFpc0FsbG93ZWREYXRlKHRoaXMudmFsdWUgYXMgQ2FuZHlEYXRlLCB0aGlzLmRpc2FibGVkRGF0ZSwgdGhpcy5kaXNhYmxlZFRpbWUpIDogZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGltZU9wdGlvbnMocGFydFR5cGU/OiBSYW5nZVBhcnRUeXBlKTogU3VwcG9ydFRpbWVPcHRpb25zIHtcbiAgICBpZiAodGhpcy5zaG93VGltZSAmJiB0aGlzLnRpbWVPcHRpb25zKSB7XG4gICAgICByZXR1cm4gdGhpcy5pc1JhbmdlID8gdGhpcy50aW1lT3B0aW9uc1sgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdIDogdGhpcy50aW1lT3B0aW9ucztcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBvbkNsaWNrUHJlc2V0UmFuZ2UodmFsOiBEYXRlW10pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHZhbDtcbiAgICB0aGlzLnNldFZhbHVlKFsgbmV3IENhbmR5RGF0ZSh2YWx1ZVsgMCBdKSwgbmV3IENhbmR5RGF0ZSh2YWx1ZVsgMSBdKSBdKTtcbiAgICB0aGlzLnJlc3VsdE9rLmVtaXQoKTtcbiAgfVxuXG4gIG9uUHJlc2V0UmFuZ2VNb3VzZUxlYXZlKCk6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJIb3ZlclZhbHVlKCk7XG4gIH1cblxuICBvbkhvdmVyUHJlc2V0UmFuZ2UodmFsOiBEYXRlW10pOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSAoWyBuZXcgQ2FuZHlEYXRlKHZhbFsgMCBdKSwgbmV3IENhbmR5RGF0ZSh2YWxbIDEgXSkgXSk7XG4gIH1cblxuICBnZXRPYmplY3RLZXlzKG9iajogb2JqZWN0KTogc3RyaW5nW10ge1xuICAgIHJldHVybiBvYmogPyBPYmplY3Qua2V5cyhvYmopIDogW107XG4gIH1cblxuICBwcml2YXRlIGNsb3NlUGlja2VyUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZVBpY2tlci5lbWl0KCk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFySG92ZXJWYWx1ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmhvdmVyVmFsdWUgPSBbXTtcbiAgfVxuXG4gIHByaXZhdGUgYnVpbGRUaW1lT3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zaG93VGltZSkge1xuICAgICAgY29uc3Qgc2hvd1RpbWUgPSB0eXBlb2YgdGhpcy5zaG93VGltZSA9PT0gJ29iamVjdCcgPyB0aGlzLnNob3dUaW1lIDoge307XG4gICAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICAgIHRoaXMudGltZU9wdGlvbnMgPSBbIHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdGhpcy52YWx1ZVsgMCBdLCAnc3RhcnQnKSwgdGhpcy5vdmVycmlkZVRpbWVPcHRpb25zKHNob3dUaW1lLCB0aGlzLnZhbHVlWyAxIF0sICdlbmQnKSBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50aW1lT3B0aW9ucyA9IHRoaXMub3ZlcnJpZGVUaW1lT3B0aW9ucyhzaG93VGltZSwgdGhpcy52YWx1ZSBhcyBDYW5keURhdGUpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnRpbWVPcHRpb25zID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG92ZXJyaWRlVGltZU9wdGlvbnMob3JpZ2luOiBTdXBwb3J0VGltZU9wdGlvbnMsIHZhbHVlOiBDYW5keURhdGUsIHBhcnRpYWw/OiBEaXNhYmxlZFRpbWVQYXJ0aWFsKTogU3VwcG9ydFRpbWVPcHRpb25zIHtcbiAgICBsZXQgZGlzYWJsZWRUaW1lRm47XG4gICAgaWYgKHBhcnRpYWwpIHtcbiAgICAgIGRpc2FibGVkVGltZUZuID0gcGFydGlhbCA9PT0gJ3N0YXJ0JyA/IHRoaXMuZGlzYWJsZWRTdGFydFRpbWUgOiB0aGlzLmRpc2FibGVkRW5kVGltZTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlzYWJsZWRUaW1lRm4gPSB0aGlzLmRpc2FibGVkVGltZTtcbiAgICB9XG4gICAgcmV0dXJuIHsgLi4ub3JpZ2luLCAuLi5nZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVGbikgfTtcbiAgfVxuXG4gIC8vIFNldCB2YWx1ZSBhbmQgdHJpZ2dlciBjaGFuZ2UgZXZlbnRcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlIHwgQ2FuZHlEYXRlW10pOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlO1xuXG4gICAgLy8gVE9ETzogU3luYyBvcmlnaW5hbCB0aW1lIChOT1RFOiB0aGlzIHNob3VsZCB0YWtlIG1vcmUgY2FyZSBvZiBiZWFjdXNlIGl0IG1heSBkZXBlbmQgb24gbWFueSBjaGFuZ2Ugc291cmNlcylcbiAgICAvLyBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgLy8gICAvLyBUT0RPOiBTeW5jIHRpbWVcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgaWYgKHRoaXMudmFsdWUpIHsgLy8gU3luYyB0aW1lIGZyb20gdGhlIG9yaWdpbmFsIG9uZSBpZiBpdCdzIGF2YWlsYWJsZVxuICAgIC8vICAgICBuZXdWYWx1ZSA9IHRoaXMub3ZlcnJpZGVIbXModGhpcy52YWx1ZSBhcyBDYW5keURhdGUsIG5ld1ZhbHVlIGFzIENhbmR5RGF0ZSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcblxuICAgIHRoaXMuYnVpbGRUaW1lT3B0aW9ucygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvdmVycmlkZUhtcyhmcm9tOiBDYW5keURhdGUsIHRvOiBDYW5keURhdGUpOiBDYW5keURhdGUge1xuICAgIGlmICghZnJvbSB8fCAhdG8pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdG8uc2V0SG1zKGZyb20uZ2V0SG91cnMoKSwgZnJvbS5nZXRNaW51dGVzKCksIGZyb20uZ2V0U2Vjb25kcygpKTtcbiAgfVxuXG4gIC8vIENoZWNrIGlmIGl0J3MgYSB2YWxpZCByYW5nZSB2YWx1ZVxuICBwcml2YXRlIGlzVmFsaWRSYW5nZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gdmFsdWU7XG4gICAgICBjb25zdCBncmFpbiA9IHRoaXMuaGFzVGltZVBpY2tlciA/ICdzZWNvbmQnIDogJ2RheSc7XG4gICAgICByZXR1cm4gc3RhcnQgJiYgZW5kICYmIChzdGFydC5pc0JlZm9yZShlbmQsIGdyYWluKSB8fCBzdGFydC5pc1NhbWUoZW5kLCBncmFpbikpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIG5vcm1hbGl6ZVJhbmdlVmFsdWUodmFsdWU6IENhbmR5RGF0ZVtdKTogQ2FuZHlEYXRlW10ge1xuICAgIGNvbnN0IFsgc3RhcnQsIGVuZCBdID0gdmFsdWU7XG4gICAgY29uc3QgbmV3U3RhcnQgPSBzdGFydCB8fCBuZXcgQ2FuZHlEYXRlKCk7XG4gICAgY29uc3QgbmV3RW5kID0gZW5kICYmIGVuZC5pc1NhbWUobmV3U3RhcnQsICdtb250aCcpID8gZW5kLmFkZE1vbnRocygxKSA6IGVuZCB8fCBuZXdTdGFydC5hZGRNb250aHMoMSk7XG4gICAgcmV0dXJuIFsgbmV3U3RhcnQsIG5ld0VuZCBdO1xuICB9XG5cbiAgLy8gcHJpdmF0ZSBpc0VtcHR5UmFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10pOiBib29sZWFuIHtcbiAgLy8gICByZXR1cm4gIXZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5ldmVyeSgodmFsKSA9PiAhdmFsKTtcbiAgLy8gfVxuXG4gIC8vIFNvcnQgYSByYW5nZSB2YWx1ZSAoYWNjdXJhdGUgdG8gc2Vjb25kKVxuICBwcml2YXRlIHNvcnRSYW5nZVZhbHVlKGtleTogJ3NlbGVjdGVkVmFsdWUnKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodGhpc1sga2V5IF0pKSB7XG4gICAgICBjb25zdCBbIHN0YXJ0LCBlbmQgXSA9IHRoaXNbIGtleSBdO1xuICAgICAgaWYgKHN0YXJ0ICYmIGVuZCAmJiBzdGFydC5pc0FmdGVyKGVuZCwgJ2RheScpKSB7XG4gICAgICAgIHRoaXNbIGtleSBdID0gWyBlbmQsIHN0YXJ0IF07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gUmVuZXcgYW5kIHNldCBhIHJhbmdlIHZhbHVlIHRvIHRyaWdnZXIgc3ViLWNvbXBvbmVudCdzIGNoYW5nZSBkZXRlY3Rpb25cbiAgcHJpdmF0ZSBzZXRSYW5nZVZhbHVlKGtleTogJ3ZhbHVlJyB8ICdzZWxlY3RlZFZhbHVlJywgcGFydFR5cGU6IFJhbmdlUGFydFR5cGUsIHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICBjb25zdCByZWYgPSB0aGlzWyBrZXkgXSA9IHRoaXMuY2xvbmVSYW5nZURhdGUodGhpc1sga2V5IF0gYXMgQ2FuZHlEYXRlW10pO1xuICAgIHJlZlsgdGhpcy5nZXRQYXJ0VHlwZUluZGV4KHBhcnRUeXBlKSBdID0gdmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGNsb25lUmFuZ2VEYXRlKHZhbHVlOiBDYW5keURhdGVbXSk6IENhbmR5RGF0ZVtdIHtcbiAgICByZXR1cm4gWyB2YWx1ZVsgMCBdICYmIHZhbHVlWyAwIF0uY2xvbmUoKSwgdmFsdWVbIDEgXSAmJiB2YWx1ZVsgMSBdLmNsb25lKCkgXSBhcyBDYW5keURhdGVbXTtcbiAgfVxuXG4gIHByaXZhdGUgaW5pdGlhbEFycmF5KGtleTogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzWyBrZXkgXSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzWyBrZXkgXSkpIHtcbiAgICAgIHRoaXNbIGtleSBdID0gW107XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIFJhbmdlUGFydFR5cGUgPSAnbGVmdCcgfCAncmlnaHQnO1xuIl19