/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isNonEmptyString, isTemplateRef } from '../../../core/util/check';
import { valueFunctionProp } from '../../../core/util/convert';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
/** @type {?} */
const DATE_ROW_NUM = 6;
/** @type {?} */
const DATE_COL_NUM = 7;
export class DateTableComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.dayHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = 'ant-calendar';
        this.isTemplateRef = isTemplateRef;
        this.isNonEmptyString = isNonEmptyString;
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
        if (this.isDateRealChange(changes["value"]) ||
            this.isDateRealChange(changes["selectedValue"]) ||
            this.isDateRealChange(changes["hoverValue"])) {
            this.render();
        }
    }
    /**
     * @param {?} change
     * @return {?}
     */
    isDateRealChange(change) {
        if (change) {
            /** @type {?} */
            const previousValue = change.previousValue;
            /** @type {?} */
            const currentValue = change.currentValue;
            if (Array.isArray(currentValue)) {
                return !Array.isArray(previousValue) ||
                    currentValue.length !== previousValue.length ||
                    currentValue.some((value, index) => !this.isSameDate(previousValue[index], value));
            }
            else {
                return !this.isSameDate(/** @type {?} */ (previousValue), currentValue);
            }
        }
        return false;
    }
    /**
     * @param {?} left
     * @param {?} right
     * @return {?}
     */
    isSameDate(left, right) {
        return (!left && !right) || (left && right && right.isSame(left, 'day'));
    }
    /**
     * @return {?}
     */
    render() {
        if (this.value) {
            this.headWeekDays = this.makeHeadWeekDays();
            this.weekRows = this.makeWeekRows();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        if (this.value !== value) {
            // this.value = value;
            // this.valueChange.emit(this.value);
            // this.render();
            this.valueChange.emit(value);
        }
    }
    /**
     * @return {?}
     */
    makeHeadWeekDays() {
        /** @type {?} */
        const weekDays = [];
        /** @type {?} */
        const firstDayOfWeek = this.getFirstDayOfWeek();
        for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
            /** @type {?} */
            const day = (firstDayOfWeek + colIndex) % DATE_COL_NUM;
            /** @type {?} */
            const tempDate = this.value.setDay(day);
            weekDays[colIndex] = {
                short: this.i18n.formatDate(tempDate.nativeDate, 'E'),
                // eg. Tue
                veryShort: this.i18n.formatDate(tempDate.nativeDate, this.getVeryShortWeekFormat()) // eg. Tu
            };
        }
        return weekDays;
    }
    /**
     * @return {?}
     */
    getVeryShortWeekFormat() {
        return this.i18n.getLocaleId().toLowerCase().indexOf('zh') === 0 ? 'EEEEE' : 'EEEEEE'; // Use extreme short for chinese
    }
    /**
     * @return {?}
     */
    makeWeekRows() {
        /** @type {?} */
        const weekRows = [];
        /** @type {?} */
        const firstDayOfWeek = this.getFirstDayOfWeek();
        /** @type {?} */
        const firstDateOfMonth = this.value.setDate(1);
        /** @type {?} */
        const firstDateOffset = (firstDateOfMonth.getDay() + 7 - firstDayOfWeek) % 7;
        /** @type {?} */
        const firstDateToShow = firstDateOfMonth.addDays(0 - firstDateOffset);
        /** @type {?} */
        let increased = 0;
        for (let rowIndex = 0; rowIndex < DATE_ROW_NUM; rowIndex++) {
            /** @type {?} */
            const week = weekRows[rowIndex] = {
                isActive: false,
                isCurrent: false,
                dateCells: []
            };
            for (let colIndex = 0; colIndex < DATE_COL_NUM; colIndex++) {
                /** @type {?} */
                const current = firstDateToShow.addDays(increased++);
                /** @type {?} */
                const isBeforeMonthYear = this.isBeforeMonthYear(current, this.value);
                /** @type {?} */
                const isAfterMonthYear = this.isAfterMonthYear(current, this.value);
                /** @type {?} */
                const cell = {
                    value: current,
                    isSelected: false,
                    isDisabled: false,
                    isToday: false,
                    title: this.getDateTitle(current),
                    customContent: valueFunctionProp(this.dateRender, current),
                    // Customized content
                    content: `${current.getDate()}`,
                    onClick: () => this.changeValueFromInside(current),
                    onMouseEnter: () => this.dayHover.emit(cell.value)
                };
                if (this.showWeek && !week.weekNum) {
                    week.weekNum = this.getWeekNum(current);
                }
                if (current.isToday()) {
                    cell.isToday = true;
                    week.isCurrent = true;
                }
                if (Array.isArray(this.selectedValue) && !isBeforeMonthYear && !isAfterMonthYear) { // Range selections
                    /** @type {?} */
                    const rangeValue = this.hoverValue && this.hoverValue.length ? this.hoverValue : this.selectedValue;
                    /** @type {?} */
                    const start = rangeValue[0];
                    /** @type {?} */
                    const end = rangeValue[1];
                    if (start) {
                        if (current.isSame(start, 'day')) {
                            cell.isSelectedStartDate = true;
                            cell.isSelected = true;
                            week.isActive = true;
                        }
                        if (end) {
                            if (current.isSame(end, 'day')) {
                                cell.isSelectedEndDate = true;
                                cell.isSelected = true;
                                week.isActive = true;
                            }
                            else if (current.isAfter(start, 'day') && current.isBefore(end, 'day')) {
                                cell.isInRange = true;
                            }
                        }
                    }
                }
                else if (current.isSame(this.value, 'day')) {
                    cell.isSelected = true;
                    week.isActive = true;
                }
                if (this.disabledDate && this.disabledDate(current.nativeDate)) {
                    cell.isDisabled = true;
                }
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    // [`${this.prefixCls}-selected-date`]: false,
                    [`${this.prefixCls}-today`]: cell.isToday,
                    [`${this.prefixCls}-last-month-cell`]: isBeforeMonthYear,
                    [`${this.prefixCls}-next-month-btn-day`]: isAfterMonthYear,
                    [`${this.prefixCls}-selected-day`]: cell.isSelected,
                    [`${this.prefixCls}-disabled-cell`]: cell.isDisabled,
                    [`${this.prefixCls}-selected-start-date`]: !!cell.isSelectedStartDate,
                    [`${this.prefixCls}-selected-end-date`]: !!cell.isSelectedEndDate,
                    [`${this.prefixCls}-in-range-cell`]: !!cell.isInRange
                };
                week.dateCells.push(cell);
            }
            week.classMap = {
                [`${this.prefixCls}-current-week`]: week.isCurrent,
                [`${this.prefixCls}-active-week`]: week.isActive
            };
        }
        return weekRows;
    }
    /**
     * @return {?}
     */
    getFirstDayOfWeek() {
        return this.value.firstDayOfWeek(this.i18n.getLocaleId());
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateTitle(date) {
        return this.i18n.formatDate(date.nativeDate, 'longDate');
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNum(date) {
        return +this.i18n.formatDate(date.nativeDate, 'w');
    }
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isBeforeMonthYear(current, target) {
        if (current.getYear() < target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() < target.getMonth();
    }
    /**
     * @param {?} current
     * @param {?} target
     * @return {?}
     */
    isAfterMonthYear(current, target) {
        if (current.getYear() > target.getYear()) {
            return true;
        }
        return current.getYear() === target.getYear() && current.getMonth() > target.getMonth();
    }
}
DateTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'date-table',
                template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n  <thead>\n    <tr role=\"row\">\n      <th *ngIf=\"showWeek\" role=\"columnheader\" class=\"{{ prefixCls }}-column-header {{ prefixCls }}-week-number-header\">\n        <span class=\"{{ prefixCls }}-column-header-inner\">x</span>\n      </th>\n      <th *ngFor=\"let cell of headWeekDays\"\n        role=\"columnheader\"\n        title=\"{{ cell.short }}\"\n        class=\"{{ prefixCls }}-column-header\"\n      >\n        <span class=\"{{ prefixCls }}-column-header-inner\">{{ cell.veryShort }}</span>\n      </th>\n    </tr>\n  </thead>\n  <tbody class=\"{{ prefixCls }}-tbody\">\n    <tr *ngFor=\"let row of weekRows\" [ngClass]=\"row.classMap\" role=\"row\">\n      <td *ngIf=\"row.weekNum\" role=\"gridcell\" class=\"{{ prefixCls }}-week-number-cell\">\n        {{ row.weekNum }}\n      </td>\n      <td\n        *ngFor=\"let cell of row.dateCells\"\n        (click)=\"cell.isDisabled ? null : cell.onClick()\"\n        (mouseenter)=\"cell.isDisabled ? null : cell.onMouseEnter()\"\n        title=\"{{ cell.title }}\"\n        [ngClass]=\"cell.classMap\"\n        role=\"gridcell\"\n      >\n\n        <ng-container [ngSwitch]=\"true\">\n          <ng-container *ngSwitchCase=\"isTemplateRef(cell.customContent)\">\n            <ng-container *ngTemplateOutlet=\"cell.customContent; context: { $implicit: cell.value }\"></ng-container>\n          </ng-container>\n          <ng-container *ngSwitchCase=\"isNonEmptyString(cell.customContent)\">\n            <span [innerHTML]=\"cell.customContent\"></span>\n          </ng-container>\n          <ng-container *ngSwitchDefault>\n            <div\n              class=\"{{ prefixCls }}-date\"\n              [attr.aria-selected]=\"cell.isSelected\"\n              [attr.aria-disabled]=\"cell.isDisabled\"\n            >\n              {{ cell.content }}\n            </div>\n          </ng-container>\n        </ng-container>\n\n      </td>\n    </tr>\n  </tbody>\n</table>"
            }] }
];
/** @nocollapse */
DateTableComponent.ctorParameters = () => [
    { type: NzI18nService }
];
DateTableComponent.propDecorators = {
    selectedValue: [{ type: Input }],
    hoverValue: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    showWeek: [{ type: Input }],
    disabledDate: [{ type: Input }],
    dateRender: [{ type: Input }],
    dayHover: [{ type: Output }]
};
function DateTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DateTableComponent.prototype.selectedValue;
    /** @type {?} */
    DateTableComponent.prototype.hoverValue;
    /** @type {?} */
    DateTableComponent.prototype.value;
    /** @type {?} */
    DateTableComponent.prototype.valueChange;
    /** @type {?} */
    DateTableComponent.prototype.showWeek;
    /** @type {?} */
    DateTableComponent.prototype.disabledDate;
    /** @type {?} */
    DateTableComponent.prototype.dateRender;
    /** @type {?} */
    DateTableComponent.prototype.dayHover;
    /** @type {?} */
    DateTableComponent.prototype.prefixCls;
    /** @type {?} */
    DateTableComponent.prototype.headWeekDays;
    /** @type {?} */
    DateTableComponent.prototype.weekRows;
    /** @type {?} */
    DateTableComponent.prototype.isTemplateRef;
    /** @type {?} */
    DateTableComponent.prototype.isNonEmptyString;
    /** @type {?} */
    DateTableComponent.prototype.i18n;
}
/**
 * @record
 */
export function WeekDayLabel() { }
function WeekDayLabel_tsickle_Closure_declarations() {
    /** @type {?} */
    WeekDayLabel.prototype.short;
    /** @type {?} */
    WeekDayLabel.prototype.veryShort;
}
/**
 * @record
 */
export function DateCell() { }
function DateCell_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCell.prototype.value;
    /** @type {?} */
    DateCell.prototype.title;
    /** @type {?} */
    DateCell.prototype.customContent;
    /** @type {?} */
    DateCell.prototype.content;
    /** @type {?|undefined} */
    DateCell.prototype.isSelected;
    /** @type {?|undefined} */
    DateCell.prototype.isToday;
    /** @type {?|undefined} */
    DateCell.prototype.isDisabled;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedStartDate;
    /** @type {?|undefined} */
    DateCell.prototype.isSelectedEndDate;
    /** @type {?|undefined} */
    DateCell.prototype.isInRange;
    /** @type {?|undefined} */
    DateCell.prototype.classMap;
    /** @type {?} */
    DateCell.prototype.onClick;
    /** @type {?} */
    DateCell.prototype.onMouseEnter;
}
/**
 * @record
 */
export function WeekRow() { }
function WeekRow_tsickle_Closure_declarations() {
    /** @type {?|undefined} */
    WeekRow.prototype.isCurrent;
    /** @type {?|undefined} */
    WeekRow.prototype.isActive;
    /** @type {?|undefined} */
    WeekRow.prototype.weekNum;
    /** @type {?|undefined} */
    WeekRow.prototype.classMap;
    /** @type {?} */
    WeekRow.prototype.dateCells;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS10YWJsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGF0ZS1waWNrZXIvbGliL2RhdGUvZGF0ZS10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUE0QyxNQUFNLGVBQWUsQ0FBQztBQUdwSSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDM0UsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQzlELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBQzs7QUFDdkIsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBT3ZCLE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFvQjdCLFlBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7UUFmdkMsbUJBQXdCLElBQUksWUFBWSxFQUFhLENBQUM7UUFNdEQsZ0JBQXFCLElBQUksWUFBWSxFQUFhLENBQUM7UUFFbkQsaUJBQW9CLGNBQWMsQ0FBQztRQUluQyxxQkFBZ0IsYUFBYSxDQUFDO1FBQzlCLHdCQUFtQixnQkFBZ0IsQ0FBQztLQUVROzs7O0lBRTVDLFFBQVEsTUFBWTs7Ozs7SUFFcEIsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sVUFBTztZQUNwQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxrQkFBZTtZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxlQUFZLEVBQUU7WUFFN0MsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFD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Q2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEdBQUcsQ0FBQyxDQUFDOzs7Ozs7O0lBRzdDLGlCQUFpQixDQUFDLE9BQWtCLEVBQUUsTUFBaUI7UUFDN0QsSUFBSSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3hDLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxPQUFPLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzs7Ozs7OztJQUdsRixnQkFBZ0IsQ0FBQyxPQUFrQixFQUFFLE1BQWlCO1FBQzVELElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLE1BQU0sQ0FBQyxPQUFPLEVBQUUsRUFBRTtZQUN4QyxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssTUFBTSxDQUFDLE9BQU8sRUFBRSxJQUFJLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUM7Ozs7WUF2TjNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsMjlEQUF3QzthQUN6Qzs7OztZQVRRLGFBQWE7Ozs0QkFZbkIsS0FBSzt5QkFDTCxLQUFLO29CQUVMLEtBQUs7MEJBQ0wsTUFBTTt1QkFFTixLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzt1QkFFTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBUZW1wbGF0ZVJlZiwgU2ltcGxlQ2hhbmdlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdHlwZXMvY29tbW9uLXdyYXAnO1xuaW1wb3J0IHsgaXNOb25FbXB0eVN0cmluZywgaXNUZW1wbGF0ZVJlZiB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCB9IGZyb20gJy4uLy4uLy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcblxuY29uc3QgREFURV9ST1dfTlVNID0gNjtcbmNvbnN0IERBVEVfQ09MX05VTSA9IDc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RhdGUtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ2RhdGUtdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgRGF0ZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICBASW5wdXQoKSBob3ZlclZhbHVlOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuXG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIEBJbnB1dCgpIHNob3dXZWVrOiBib29sZWFuO1xuICBASW5wdXQoKSBkaXNhYmxlZERhdGU6IChkOiBEYXRlKSA9PiBib29sZWFuO1xuICBASW5wdXQoKSBkYXRlUmVuZGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8RGF0ZT4gfCBzdHJpbmc+OyAvLyBDdXN0b21pemUgZGF0ZSBjb250ZW50IHdoaWxlIHJlbmRlcmluZ1xuXG4gIEBPdXRwdXQoKSBkYXlIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuICBoZWFkV2Vla0RheXM6IFdlZWtEYXlMYWJlbFtdO1xuICB3ZWVrUm93czogV2Vla1Jvd1tdO1xuXG4gIGlzVGVtcGxhdGVSZWYgPSBpc1RlbXBsYXRlUmVmO1xuICBpc05vbkVtcHR5U3RyaW5nID0gaXNOb25FbXB0eVN0cmluZztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlcy52YWx1ZSkgfHxcbiAgICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuc2VsZWN0ZWRWYWx1ZSkgfHxcbiAgICAgICAgdGhpcy5pc0RhdGVSZWFsQ2hhbmdlKGNoYW5nZXMuaG92ZXJWYWx1ZSkpIHtcblxuICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzRGF0ZVJlYWxDaGFuZ2UoY2hhbmdlOiBTaW1wbGVDaGFuZ2UpOiBib29sZWFuIHtcbiAgICBpZiAoY2hhbmdlKSB7XG4gICAgICBjb25zdCBwcmV2aW91c1ZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5wcmV2aW91c1ZhbHVlO1xuICAgICAgY29uc3QgY3VycmVudFZhbHVlOiBDYW5keURhdGUgfCBDYW5keURhdGVbXSA9IGNoYW5nZS5jdXJyZW50VmFsdWU7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShjdXJyZW50VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiAhQXJyYXkuaXNBcnJheShwcmV2aW91c1ZhbHVlKSB8fFxuICAgICAgICAgIGN1cnJlbnRWYWx1ZS5sZW5ndGggIT09IHByZXZpb3VzVmFsdWUubGVuZ3RoIHx8XG4gICAgICAgICAgY3VycmVudFZhbHVlLnNvbWUoKHZhbHVlLCBpbmRleCkgPT4gIXRoaXMuaXNTYW1lRGF0ZShwcmV2aW91c1ZhbHVlW2luZGV4XSwgdmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5pc1NhbWVEYXRlKHByZXZpb3VzVmFsdWUgYXMgQ2FuZHlEYXRlLCBjdXJyZW50VmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwcml2YXRlIGlzU2FtZURhdGUobGVmdDogQ2FuZHlEYXRlLCByaWdodDogQ2FuZHlEYXRlKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghbGVmdCAmJiAhcmlnaHQpIHx8IChsZWZ0ICYmIHJpZ2h0ICYmIHJpZ2h0LmlzU2FtZShsZWZ0LCAnZGF5JykpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMuaGVhZFdlZWtEYXlzID0gdGhpcy5tYWtlSGVhZFdlZWtEYXlzKCk7XG4gICAgICB0aGlzLndlZWtSb3dzID0gdGhpcy5tYWtlV2Vla1Jvd3MoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAvLyB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAvLyB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1ha2VIZWFkV2Vla0RheXMoKTogV2Vla0RheUxhYmVsW10ge1xuICAgIGNvbnN0IHdlZWtEYXlzOiBXZWVrRGF5TGFiZWxbXSA9IFtdO1xuICAgIGNvbnN0IGZpcnN0RGF5T2ZXZWVrID0gdGhpcy5nZXRGaXJzdERheU9mV2VlaygpO1xuICAgIGZvciAobGV0IGNvbEluZGV4ID0gMDsgY29sSW5kZXggPCBEQVRFX0NPTF9OVU07IGNvbEluZGV4ICsrKSB7XG4gICAgICBjb25zdCBkYXkgPSAoZmlyc3REYXlPZldlZWsgKyBjb2xJbmRleCkgJSBEQVRFX0NPTF9OVU07XG4gICAgICBjb25zdCB0ZW1wRGF0ZSA9IHRoaXMudmFsdWUuc2V0RGF5KGRheSk7XG4gICAgICB3ZWVrRGF5c1sgY29sSW5kZXggXSA9IHtcbiAgICAgICAgc2hvcnQ6IHRoaXMuaTE4bi5mb3JtYXREYXRlKHRlbXBEYXRlLm5hdGl2ZURhdGUsICdFJyksIC8vIGVnLiBUdWVcbiAgICAgICAgdmVyeVNob3J0OiB0aGlzLmkxOG4uZm9ybWF0RGF0ZSh0ZW1wRGF0ZS5uYXRpdmVEYXRlLCB0aGlzLmdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKSkgLy8gZWcuIFR1XG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gd2Vla0RheXM7XG4gIH1cblxuICBwcml2YXRlIGdldFZlcnlTaG9ydFdlZWtGb3JtYXQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZUlkKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKCd6aCcpID09PSAwID8gJ0VFRUVFJyA6ICdFRUVFRUUnOyAvLyBVc2UgZXh0cmVtZSBzaG9ydCBmb3IgY2hpbmVzZVxuICB9XG5cbiAgcHJpdmF0ZSBtYWtlV2Vla1Jvd3MoKTogV2Vla1Jvd1tdIHtcbiAgICAvLyBsZXQganVzdFJlbmRlcmVkID0gdHJ1ZTtcbiAgICBjb25zdCB3ZWVrUm93czogV2Vla1Jvd1tdID0gW107XG4gICAgY29uc3QgZmlyc3REYXlPZldlZWsgPSB0aGlzLmdldEZpcnN0RGF5T2ZXZWVrKCk7XG4gICAgY29uc3QgZmlyc3REYXRlT2ZNb250aCA9IHRoaXMudmFsdWUuc2V0RGF0ZSgxKTtcbiAgICAvLyBjb25zdCBmaXJzdERhdGVUb1Nob3cgPSBmaXJzdERhdGVPZk1vbnRoLnNldERheShmaXJzdERheU9mV2VlaywgeyB3ZWVrU3RhcnRzT246IGZpcnN0RGF5T2ZXZWVrIH0pO1xuICAgIGNvbnN0IGZpcnN0RGF0ZU9mZnNldCA9IChmaXJzdERhdGVPZk1vbnRoLmdldERheSgpICsgNyAtIGZpcnN0RGF5T2ZXZWVrKSAlIDc7XG4gICAgY29uc3QgZmlyc3REYXRlVG9TaG93ID0gZmlyc3REYXRlT2ZNb250aC5hZGREYXlzKDAgLSBmaXJzdERhdGVPZmZzZXQpO1xuXG4gICAgbGV0IGluY3JlYXNlZCA9IDA7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IERBVEVfUk9XX05VTTsgcm93SW5kZXggKyspIHtcbiAgICAgIGNvbnN0IHdlZWs6IFdlZWtSb3cgPSB3ZWVrUm93c1tyb3dJbmRleF0gPSB7XG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcbiAgICAgICAgaXNDdXJyZW50OiBmYWxzZSxcbiAgICAgICAgZGF0ZUNlbGxzOiBbXVxuICAgICAgfTtcblxuICAgICAgZm9yIChsZXQgY29sSW5kZXggPSAwOyBjb2xJbmRleCA8IERBVEVfQ09MX05VTTsgY29sSW5kZXggKyspIHtcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGZpcnN0RGF0ZVRvU2hvdy5hZGREYXlzKGluY3JlYXNlZCArKyk7XG4gICAgICAgIGNvbnN0IGlzQmVmb3JlTW9udGhZZWFyID0gdGhpcy5pc0JlZm9yZU1vbnRoWWVhcihjdXJyZW50LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgaXNBZnRlck1vbnRoWWVhciA9IHRoaXMuaXNBZnRlck1vbnRoWWVhcihjdXJyZW50LCB0aGlzLnZhbHVlKTtcbiAgICAgICAgY29uc3QgY2VsbDogRGF0ZUNlbGwgPSB7XG4gICAgICAgICAgdmFsdWU6IGN1cnJlbnQsXG4gICAgICAgICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gICAgICAgICAgaXNEaXNhYmxlZDogZmFsc2UsXG4gICAgICAgICAgaXNUb2RheTogZmFsc2UsXG4gICAgICAgICAgdGl0bGU6IHRoaXMuZ2V0RGF0ZVRpdGxlKGN1cnJlbnQpLFxuICAgICAgICAgIGN1c3RvbUNvbnRlbnQ6IHZhbHVlRnVuY3Rpb25Qcm9wKHRoaXMuZGF0ZVJlbmRlciwgY3VycmVudCksIC8vIEN1c3RvbWl6ZWQgY29udGVudFxuICAgICAgICAgIGNvbnRlbnQ6IGAke2N1cnJlbnQuZ2V0RGF0ZSgpfWAsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5jaGFuZ2VWYWx1ZUZyb21JbnNpZGUoY3VycmVudCksXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmRheUhvdmVyLmVtaXQoY2VsbC52YWx1ZSlcbiAgICAgICAgICAvLyBvbk1vdXNlRW50ZXI6ICgpID0+IHtcbiAgICAgICAgICAgIC8vIGlmICghanVzdFJlbmRlcmVkKSB7IC8vIFtIYWNrXSBUbyBwcmV2ZW50IHRoZSBpbW1lZGlhdGVseSBcIm1vdXNlZW50ZXJcIiBldmVudCB3aGVuIGl0IGp1c3QgcmVuZGVyZWQsIG9yIHRoZSBcImhvdmVyVmFsdWVcIiBtYXkgYWx3YXlzIHNhaWQgYXMgY2hhbmdlZFxuICAgICAgICAgICAgICAvLyB0aGlzLmRheUhvdmVyLmVtaXQoY2VsbC52YWx1ZSk7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAvLyBqdXN0UmVuZGVyZWQgPSBmYWxzZTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHRoaXMuc2hvd1dlZWsgJiYgIXdlZWsud2Vla051bSkge1xuICAgICAgICAgIHdlZWsud2Vla051bSA9IHRoaXMuZ2V0V2Vla051bShjdXJyZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjdXJyZW50LmlzVG9kYXkoKSkge1xuICAgICAgICAgIGNlbGwuaXNUb2RheSA9IHRydWU7XG4gICAgICAgICAgd2Vlay5pc0N1cnJlbnQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZFZhbHVlKSAmJiAhaXNCZWZvcmVNb250aFllYXIgJiYgIWlzQWZ0ZXJNb250aFllYXIpIHsgLy8gUmFuZ2Ugc2VsZWN0aW9uc1xuICAgICAgICAgIGNvbnN0IHJhbmdlVmFsdWUgPSB0aGlzLmhvdmVyVmFsdWUgJiYgdGhpcy5ob3ZlclZhbHVlLmxlbmd0aCA/IHRoaXMuaG92ZXJWYWx1ZSA6IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IHJhbmdlVmFsdWVbMF07XG4gICAgICAgICAgY29uc3QgZW5kID0gcmFuZ2VWYWx1ZVsxXTtcbiAgICAgICAgICBpZiAoc3RhcnQpIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50LmlzU2FtZShzdGFydCwgJ2RheScpKSB7XG4gICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZFN0YXJ0RGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgIGNlbGwuaXNTZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVuZCkge1xuICAgICAgICAgICAgICBpZiAoY3VycmVudC5pc1NhbWUoZW5kLCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWRFbmREYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjZWxsLmlzU2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHdlZWsuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuaXNBZnRlcihzdGFydCwgJ2RheScpICYmIGN1cnJlbnQuaXNCZWZvcmUoZW5kLCAnZGF5JykpIHtcbiAgICAgICAgICAgICAgICBjZWxsLmlzSW5SYW5nZSA9IHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5pc1NhbWUodGhpcy52YWx1ZSwgJ2RheScpKSB7XG4gICAgICAgICAgY2VsbC5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICB3ZWVrLmlzQWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkRGF0ZSAmJiB0aGlzLmRpc2FibGVkRGF0ZShjdXJyZW50Lm5hdGl2ZURhdGUpKSB7XG4gICAgICAgICAgY2VsbC5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICAgICAgLy8gW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1kYXRlYF06IGZhbHNlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tdG9kYXlgXTogY2VsbC5pc1RvZGF5LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1tb250aC1jZWxsYF06IGlzQmVmb3JlTW9udGhZZWFyLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1tb250aC1idG4tZGF5YF06IGlzQWZ0ZXJNb250aFllYXIsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1kYXlgXTogY2VsbC5pc1NlbGVjdGVkLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWQtY2VsbGBdOiBjZWxsLmlzRGlzYWJsZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1zdGFydC1kYXRlYF06ICEhY2VsbC5pc1NlbGVjdGVkU3RhcnREYXRlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0ZWQtZW5kLWRhdGVgXTogISFjZWxsLmlzU2VsZWN0ZWRFbmREYXRlLFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30taW4tcmFuZ2UtY2VsbGBdOiAhIWNlbGwuaXNJblJhbmdlXG4gICAgICAgIH07XG5cbiAgICAgICAgd2Vlay5kYXRlQ2VsbHMucHVzaChjZWxsKTtcbiAgICAgIH1cblxuICAgICAgd2Vlay5jbGFzc01hcCA9IHtcbiAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jdXJyZW50LXdlZWtgXTogd2Vlay5pc0N1cnJlbnQsXG4gICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tYWN0aXZlLXdlZWtgXTogd2Vlay5pc0FjdGl2ZVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHdlZWtSb3dzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaXJzdERheU9mV2VlaygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZhbHVlLmZpcnN0RGF5T2ZXZWVrKHRoaXMuaTE4bi5nZXRMb2NhbGVJZCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGF0ZVRpdGxlKGRhdGU6IENhbmR5RGF0ZSk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUubmF0aXZlRGF0ZSwgJ2xvbmdEYXRlJyk7XG4gIH1cblxuICBwcml2YXRlIGdldFdlZWtOdW0oZGF0ZTogQ2FuZHlEYXRlKTogbnVtYmVyIHtcbiAgICByZXR1cm4gK3RoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUubmF0aXZlRGF0ZSwgJ3cnKTtcbiAgfVxuXG4gIHByaXZhdGUgaXNCZWZvcmVNb250aFllYXIoY3VycmVudDogQ2FuZHlEYXRlLCB0YXJnZXQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChjdXJyZW50LmdldFllYXIoKSA8IHRhcmdldC5nZXRZZWFyKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudC5nZXRZZWFyKCkgPT09IHRhcmdldC5nZXRZZWFyKCkgJiYgY3VycmVudC5nZXRNb250aCgpIDwgdGFyZ2V0LmdldE1vbnRoKCk7XG4gIH1cblxuICBwcml2YXRlIGlzQWZ0ZXJNb250aFllYXIoY3VycmVudDogQ2FuZHlEYXRlLCB0YXJnZXQ6IENhbmR5RGF0ZSk6IGJvb2xlYW4ge1xuICAgIGlmIChjdXJyZW50LmdldFllYXIoKSA+IHRhcmdldC5nZXRZZWFyKCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY3VycmVudC5nZXRZZWFyKCkgPT09IHRhcmdldC5nZXRZZWFyKCkgJiYgY3VycmVudC5nZXRNb250aCgpID4gdGFyZ2V0LmdldE1vbnRoKCk7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBXZWVrRGF5TGFiZWwge1xuICBzaG9ydDogc3RyaW5nO1xuICB2ZXJ5U2hvcnQ6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbCB7XG4gIHZhbHVlOiBDYW5keURhdGU7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGN1c3RvbUNvbnRlbnQ6IFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGlzU2VsZWN0ZWQ/OiBib29sZWFuO1xuICBpc1RvZGF5PzogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZD86IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWRTdGFydERhdGU/OiBib29sZWFuO1xuICBpc1NlbGVjdGVkRW5kRGF0ZT86IGJvb2xlYW47XG4gIGlzSW5SYW5nZT86IGJvb2xlYW47XG4gIGNsYXNzTWFwPzogb2JqZWN0O1xuICBvbkNsaWNrKGRhdGU6IENhbmR5RGF0ZSk6IHZvaWQ7XG4gIG9uTW91c2VFbnRlcigpOiB2b2lkO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFdlZWtSb3cge1xuICBpc0N1cnJlbnQ/OiBib29sZWFuOyAvLyBJcyB0aGUgd2VlayB0aGF0IHRvZGF5IHN0YXlzIGluXG4gIGlzQWN0aXZlPzogYm9vbGVhbjsgLy8gSXMgdGhlIHdlZWsgdGhhdCBjdXJyZW50IHNldHRpbmcgZGF0ZSBzdGF5cyBpblxuICB3ZWVrTnVtPzogbnVtYmVyO1xuICBjbGFzc01hcD86IG9iamVjdDtcbiAgZGF0ZUNlbGxzOiBEYXRlQ2VsbFtdO1xufVxuIl19