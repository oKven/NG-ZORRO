/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { forwardRef, Component, ContentChild, EventEmitter, HostBinding, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import addDays from 'date-fns/add_days';
import differenceInCalendarDays from 'date-fns/difference_in_calendar_days';
import differenceInCalendarMonths from 'date-fns/difference_in_calendar_months';
import differenceInCalendarWeeks from 'date-fns/difference_in_calendar_weeks';
import endOfMonth from 'date-fns/end_of_month';
import isSameDay from 'date-fns/is_same_day';
import isSameMonth from 'date-fns/is_same_month';
import isSameYear from 'date-fns/is_same_year';
import isThisMonth from 'date-fns/is_this_month';
import isThisYear from 'date-fns/is_this_year';
import setMonth from 'date-fns/set_month';
import setYear from 'date-fns/set_year';
import startOfMonth from 'date-fns/start_of_month';
import startOfWeek from 'date-fns/start_of_week';
import startOfYear from 'date-fns/start_of_year';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
import { NzDateCellDirective as DateCell, NzDateFullCellDirective as DateFullCell, NzMonthCellDirective as MonthCell, NzMonthFullCellDirective as MonthFullCell } from './nz-calendar-cells';
export class NzCalendarComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.nzMode = 'month';
        this.nzModeChange = new EventEmitter();
        this.nzValueChange = new EventEmitter();
        this.fullscreen = true;
        this.daysInWeek = [];
        this.monthsInYear = [];
        this.dateMatrix = [];
        this.activeDate = new Date();
        this.currentDateRow = -1;
        this.currentDateCol = -1;
        this.activeDateRow = -1;
        this.activeDateCol = -1;
        this.currentMonthRow = -1;
        this.currentMonthCol = -1;
        this.activeMonthRow = -1;
        this.activeMonthCol = -1;
        this.dateCell = null;
        this.dateFullCell = null;
        this.monthCell = null;
        this.monthFullCell = null;
        this.prefixCls = 'ant-fullcalendar';
        this.currentDate = new Date();
        this.onChangeFn = () => { };
        this.onTouchFn = () => { };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValue(value) { this.updateDate(value, false); }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateCell(value) { this.dateCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDateFullCell(value) { this.dateFullCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthCell(value) { this.monthCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzMonthFullCell(value) { this.monthFullCell = value; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFullscreen(value) { this.fullscreen = coerceBooleanProperty(value); }
    /**
     * @return {?}
     */
    get nzFullscreen() { return this.fullscreen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCard(value) { this.fullscreen = !coerceBooleanProperty(value); }
    /**
     * @return {?}
     */
    get nzCard() { return !this.fullscreen; }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateCellChild(value) { if (value) {
        this.dateCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set dateFullCellChild(value) { if (value) {
        this.dateFullCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthCellChild(value) { if (value) {
        this.monthCell = value;
    } }
    /**
     * @param {?} value
     * @return {?}
     */
    set monthFullCellChild(value) { if (value) {
        this.monthFullCell = value;
    } }
    /**
     * @return {?}
     */
    get calendarStart() {
        return startOfWeek(startOfMonth(this.activeDate));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setUpDaysInWeek();
        this.setUpMonthsInYear();
        this.setUpDateMatrix();
        this.calculateCurrentDate();
        this.calculateActiveDate();
        this.calculateCurrentMonth();
        this.calculateActiveMonth();
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onModeChange(mode) {
        this.nzModeChange.emit(mode);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    onDateSelect(date) {
        this.updateDate(date);
    }
    /**
     * @param {?} year
     * @return {?}
     */
    onYearSelect(year) {
        /** @type {?} */
        const date = setYear(this.activeDate, year);
        this.updateDate(date);
    }
    /**
     * @param {?} month
     * @return {?}
     */
    onMonthSelect(month) {
        /** @type {?} */
        const date = setMonth(this.activeDate, month);
        this.updateDate(date);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.updateDate(value || new Date(), false);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeFn = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchFn = fn;
    }
    /**
     * @param {?} date
     * @param {?=} touched
     * @return {?}
     */
    updateDate(date, touched = true) {
        /** @type {?} */
        const dayChanged = !isSameDay(date, this.activeDate);
        /** @type {?} */
        const monthChanged = !isSameMonth(date, this.activeDate);
        /** @type {?} */
        const yearChanged = !isSameYear(date, this.activeDate);
        this.activeDate = date;
        if (dayChanged) {
            this.calculateActiveDate();
        }
        if (monthChanged) {
            this.setUpDateMatrix();
            this.calculateCurrentDate();
            this.calculateActiveMonth();
        }
        if (yearChanged) {
            this.calculateCurrentMonth();
        }
        if (touched) {
            this.onChangeFn(date);
            this.onTouchFn();
            this.nzValueChange.emit(date);
        }
    }
    /**
     * @return {?}
     */
    setUpDaysInWeek() {
        this.daysInWeek = [];
        /** @type {?} */
        const weekStart = startOfWeek(this.activeDate);
        for (let i = 0; i < 7; i++) {
            /** @type {?} */
            const date = addDays(weekStart, i);
            /** @type {?} */
            const title = this.i18n.formatDate(date, 'E');
            /** @type {?} */
            const label = this.i18n.formatDate(date, 'EEEEEE');
            this.daysInWeek.push({ title, label });
        }
    }
    /**
     * @return {?}
     */
    setUpMonthsInYear() {
        this.monthsInYear = [];
        for (let i = 0; i < 12; i++) {
            /** @type {?} */
            const date = setMonth(this.activeDate, i);
            /** @type {?} */
            const title = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            const label = this.i18n.formatDate(date, 'MMM');
            /** @type {?} */
            const start = startOfMonth(date);
            this.monthsInYear.push({ title, label, start });
        }
    }
    /**
     * @return {?}
     */
    setUpDateMatrix() {
        this.dateMatrix = [];
        /** @type {?} */
        const monthStart = startOfMonth(this.activeDate);
        /** @type {?} */
        const monthEnd = endOfMonth(this.activeDate);
        /** @type {?} */
        const weekDiff = differenceInCalendarWeeks(monthEnd, monthStart) + 2;
        for (let week = 0; week < weekDiff; week++) {
            /** @type {?} */
            const row = [];
            /** @type {?} */
            const weekStart = addDays(this.calendarStart, week * 7);
            for (let day = 0; day < 7; day++) {
                /** @type {?} */
                const date = addDays(weekStart, day);
                /** @type {?} */
                const monthDiff = differenceInCalendarMonths(date, this.activeDate);
                /** @type {?} */
                const title = this.i18n.formatDate(date, 'longDate');
                /** @type {?} */
                const label = this.i18n.formatDate(date, 'dd');
                /** @type {?} */
                const rel = monthDiff === 0 ? 'current' : monthDiff < 0 ? 'last' : 'next';
                row.push({ title, label, rel, value: date });
            }
            this.dateMatrix.push(row);
        }
    }
    /**
     * @return {?}
     */
    calculateCurrentDate() {
        if (isThisMonth(this.activeDate)) {
            this.currentDateRow = differenceInCalendarWeeks(this.currentDate, this.calendarStart);
            this.currentDateCol = differenceInCalendarDays(this.currentDate, addDays(this.calendarStart, this.currentDateRow * 7));
        }
        else {
            this.currentDateRow = -1;
            this.currentDateCol = -1;
        }
    }
    /**
     * @return {?}
     */
    calculateActiveDate() {
        this.activeDateRow = differenceInCalendarWeeks(this.activeDate, this.calendarStart);
        this.activeDateCol = differenceInCalendarDays(this.activeDate, addDays(this.calendarStart, this.activeDateRow * 7));
    }
    /**
     * @return {?}
     */
    calculateCurrentMonth() {
        if (isThisYear(this.activeDate)) {
            /** @type {?} */
            const yearStart = startOfYear(this.currentDate);
            /** @type {?} */
            const monthDiff = differenceInCalendarMonths(this.currentDate, yearStart);
            this.currentMonthRow = Math.floor(monthDiff / 3);
            this.currentMonthCol = monthDiff % 3;
        }
        else {
            this.currentMonthRow = -1;
            this.currentMonthCol = -1;
        }
    }
    /**
     * @return {?}
     */
    calculateActiveMonth() {
        this.activeMonthRow = Math.floor(this.activeDate.getMonth() / 3);
        this.activeMonthCol = this.activeDate.getMonth() % 3;
    }
}
NzCalendarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-calendar',
                template: "<nz-calendar-header [fullscreen]=\"fullscreen\" [activeDate]=\"activeDate\"\n                    [(mode)]=\"nzMode\" (modeChange)=\"onModeChange($event)\"\n                    (yearChange)=\"onYearSelect($event)\" (monthChange)=\"onMonthSelect($event)\">\n</nz-calendar-header>\n\n<div class=\"ant-fullcalendar ant-fullcalendar-full\" [ngClass]=\"fullscreen ? 'ant-fullcalendar-fullscreen' : ''\">\n  <div class=\"ant-fullcalendar-calendar-body\">\n    <ng-container *ngIf=\"nzMode === 'month' then monthModeTable else yearModeTable\"></ng-container>\n  </div>\n</div>\n\n<ng-template #monthModeTable>\n  <table class=\"ant-fullcalendar-table\" cellspacing=\"0\" role=\"grid\">\n    <thead>\n      <tr role=\"row\">\n        <th *ngFor=\"let day of daysInWeek\" class=\"ant-fullcalendar-column-header\" role=\"columnheader\" [title]=\"day.title\">\n          <span class=\"ant-fullcalendar-column-header-inner\">{{ day.label }}</span>\n        </th>\n      </tr>\n    </thead>\n    <tbody class=\"ant-fullcalendar-tbody\">\n      <tr *ngFor=\"let week of dateMatrix; index as row\"\n          [class.ant-fullcalendar-current-week]=\"row === currentDateRow\"\n          [class.ant-fullcalendar-active-week]=\"row === activeDateRow\">\n        <td *ngFor=\"let day of week; index as col\" role=\"gridcell\" class=\"ant-fullcalendar-cell\" [title]=\"day.title\"\n            [class.ant-fullcalendar-today]=\"row === currentDateRow && col === currentDateCol\"\n            [class.ant-fullcalendar-selected-day]=\"row === activeDateRow && col === activeDateCol\"\n            [class.ant-fullcalendar-last-month-cell]=\"day.rel === 'last'\"\n            [class.ant-fullcalendar-next-month-btn-day]=\"day.rel === 'next'\"\n            (click)=\"onDateSelect(day.value)\">\n            <div class=\"ant-fullcalendar-date\">\n              <ng-container *ngIf=\"dateFullCell else defaultCell\">\n                <ng-container *ngTemplateOutlet=\"dateFullCell; context: {$implicit: day.value}\"></ng-container>\n              </ng-container>\n              <ng-template #defaultCell>\n                <div class=\"ant-fullcalendar-value\">{{ day.label }}</div>\n                <div *ngIf=\"dateCell\" class=\"ant-fullcalendar-content\">\n                  <ng-container *ngTemplateOutlet=\"dateCell; context: {$implicit: day.value}\"></ng-container>\n                </div>\n              </ng-template>\n            </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n\n<ng-template #yearModeTable>\n  <table class=\"ant-fullcalendar-month-panel-table\" cellspacing=\"0\" role=\"grid\">\n    <tbody class=\"ant-fullcalendar-month-panel-tbody\">\n      <tr *ngFor=\"let row of [0, 1, 2, 3]\" role=\"row\">\n        <td *ngFor=\"let col of [0, 1, 2]\" role=\"gridcell\" [title]=\"monthsInYear[row * 3 + col].title\"\n            class=\"ant-fullcalendar-month-panel-cell\"\n            [class.ant-fullcalendar-month-panel-current-cell]=\"row === currentMonthRow && col === currentMonthCol\"\n            [class.ant-fullcalendar-month-panel-selected-cell]=\"row === activeMonthRow && col === activeMonthCol\"\n            (click)=\"onMonthSelect(row * 3 + col)\">\n          <div class=\"ant-fullcalendar-month\">\n            <ng-container *ngIf=\"monthFullCell else defaultCell\">\n              <ng-container *ngTemplateOutlet=\"monthFullCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n            </ng-container>\n            <ng-template #defaultCell>\n              <div class=\"ant-fullcalendar-value\">{{ monthsInYear[row * 3 + col].label }}</div>\n              <div *ngIf=\"monthCell\" class=\"ant-fullcalendar-content\">\n                <ng-container *ngTemplateOutlet=\"monthCell; context: {$implicit: monthsInYear[row * 3 + col].start}\"></ng-container>\n              </div>\n            </ng-template>\n          </div>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</ng-template>\n",
                providers: [
                    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NzCalendarComponent), multi: true }
                ]
            }] }
];
/** @nocollapse */
NzCalendarComponent.ctorParameters = () => [
    { type: I18n }
];
NzCalendarComponent.propDecorators = {
    nzMode: [{ type: Input }],
    nzModeChange: [{ type: Output }],
    nzValue: [{ type: Input }],
    nzValueChange: [{ type: Output }],
    nzDateCell: [{ type: Input }],
    nzDateFullCell: [{ type: Input }],
    nzMonthCell: [{ type: Input }],
    nzMonthFullCell: [{ type: Input }],
    nzFullscreen: [{ type: Input }],
    nzCard: [{ type: Input }],
    dateCellChild: [{ type: ContentChild, args: [DateCell, { read: TemplateRef },] }],
    dateFullCellChild: [{ type: ContentChild, args: [DateFullCell, { read: TemplateRef },] }],
    monthCellChild: [{ type: ContentChild, args: [MonthCell, { read: TemplateRef },] }],
    monthFullCellChild: [{ type: ContentChild, args: [MonthFullCell, { read: TemplateRef },] }],
    fullscreen: [{ type: HostBinding, args: ['class.ant-fullcalendar--fullscreen',] }]
};
function NzCalendarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCalendarComponent.prototype.nzMode;
    /** @type {?} */
    NzCalendarComponent.prototype.nzModeChange;
    /** @type {?} */
    NzCalendarComponent.prototype.nzValueChange;
    /** @type {?} */
    NzCalendarComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarComponent.prototype.daysInWeek;
    /** @type {?} */
    NzCalendarComponent.prototype.monthsInYear;
    /** @type {?} */
    NzCalendarComponent.prototype.dateMatrix;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDate;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeDateCol;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.currentMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthRow;
    /** @type {?} */
    NzCalendarComponent.prototype.activeMonthCol;
    /** @type {?} */
    NzCalendarComponent.prototype.dateCell;
    /** @type {?} */
    NzCalendarComponent.prototype.dateFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthCell;
    /** @type {?} */
    NzCalendarComponent.prototype.monthFullCell;
    /** @type {?} */
    NzCalendarComponent.prototype.prefixCls;
    /** @type {?} */
    NzCalendarComponent.prototype.currentDate;
    /** @type {?} */
    NzCalendarComponent.prototype.onChangeFn;
    /** @type {?} */
    NzCalendarComponent.prototype.onTouchFn;
    /** @type {?} */
    NzCalendarComponent.prototype.i18n;
}
/**
 * @record
 */
export function DayCellContext() { }
function DayCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DayCellContext.prototype.title;
    /** @type {?} */
    DayCellContext.prototype.label;
}
/**
 * @record
 */
export function MonthCellContext() { }
function MonthCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthCellContext.prototype.title;
    /** @type {?} */
    MonthCellContext.prototype.label;
    /** @type {?} */
    MonthCellContext.prototype.start;
}
/**
 * @record
 */
export function DateCellContext() { }
function DateCellContext_tsickle_Closure_declarations() {
    /** @type {?} */
    DateCellContext.prototype.title;
    /** @type {?} */
    DateCellContext.prototype.label;
    /** @type {?} */
    DateCellContext.prototype.rel;
    /** @type {?} */
    DateCellContext.prototype.value;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkksT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sd0JBQXdCLE1BQU0sc0NBQXNDLENBQUM7QUFDNUUsT0FBTywwQkFBMEIsTUFBTSx3Q0FBd0MsQ0FBQztBQUNoRixPQUFPLHlCQUF5QixNQUFNLHVDQUF1QyxDQUFDO0FBQzlFLE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sU0FBUyxNQUFNLHNCQUFzQixDQUFDO0FBQzdDLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sVUFBVSxNQUFNLHVCQUF1QixDQUFDO0FBQy9DLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sT0FBTyxNQUFNLG1CQUFtQixDQUFDO0FBQ3hDLE9BQU8sWUFBWSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sV0FBVyxNQUFNLHdCQUF3QixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0s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U0FBUyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0MsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDMUIsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7WUFDbkMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDOztZQUM5QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxDQUFDLENBQUM7WUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztTQUN0Qzs7Ozs7SUFHSyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDM0IsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQzFDLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQzs7WUFDaEQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDOztZQUNoRCxNQUFNLEtBQUssR0FBRyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBQyxDQUFDLENBQUM7U0FDL0M7Ozs7O0lBR0ssZUFBZTtRQUNy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QyxZQUFZLFNBQUMsYUFBYSxFQUFFLEVBQUMsSUFBSSxFQUFFLFdBQVcsRUFBQzt5QkFHL0MsV0FBVyxTQUFDLG9DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XG5pbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IGFkZERheXMgZnJvbSAnZGF0ZS1mbnMvYWRkX2RheXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyBmcm9tICdkYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2RheXMnO1xuaW1wb3J0IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfbW9udGhzJztcbmltcG9ydCBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzIGZyb20gJ2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfd2Vla3MnO1xuaW1wb3J0IGVuZE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvZW5kX29mX21vbnRoJztcbmltcG9ydCBpc1NhbWVEYXkgZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV9kYXknO1xuaW1wb3J0IGlzU2FtZU1vbnRoIGZyb20gJ2RhdGUtZm5zL2lzX3NhbWVfbW9udGgnO1xuaW1wb3J0IGlzU2FtZVllYXIgZnJvbSAnZGF0ZS1mbnMvaXNfc2FtZV95ZWFyJztcbmltcG9ydCBpc1RoaXNNb250aCBmcm9tICdkYXRlLWZucy9pc190aGlzX21vbnRoJztcbmltcG9ydCBpc1RoaXNZZWFyIGZyb20gJ2RhdGUtZm5zL2lzX3RoaXNfeWVhcic7XG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcbmltcG9ydCBzZXRZZWFyIGZyb20gJ2RhdGUtZm5zL3NldF95ZWFyJztcbmltcG9ydCBzdGFydE9mTW9udGggZnJvbSAnZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgnO1xuaW1wb3J0IHN0YXJ0T2ZXZWVrIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3dlZWsnO1xuaW1wb3J0IHN0YXJ0T2ZZZWFyIGZyb20gJ2RhdGUtZm5zL3N0YXJ0X29mX3llYXInO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgTnpEYXRlQ2VsbERpcmVjdGl2ZSBhcyBEYXRlQ2VsbCwgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUgYXMgRGF0ZUZ1bGxDZWxsLCBOek1vbnRoQ2VsbERpcmVjdGl2ZSBhcyBNb250aENlbGwsIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZSBhcyBNb250aEZ1bGxDZWxsIH0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LWNhbGVuZGFyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbXG4gICAgeyBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUiwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYWxlbmRhckNvbXBvbmVudCksIG11bHRpOiB0cnVlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XG4gIEBJbnB1dCgpIG56TW9kZTogJ21vbnRoJ3wneWVhcicgPSAnbW9udGgnO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpNb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJ3wneWVhcic+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpIHNldCBuelZhbHVlKHZhbHVlOiBEYXRlKSB7IHRoaXMudXBkYXRlRGF0ZSh2YWx1ZSwgZmFsc2UpOyB9XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZhbHVlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8RGF0ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RGF0ZUNlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLmRhdGVDZWxsID0gdmFsdWU7IH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEYXRlRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLmRhdGVGdWxsQ2VsbCA9IHZhbHVlOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56TW9udGhDZWxsKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgdGhpcy5tb250aENlbGwgPSB2YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuek1vbnRoRnVsbENlbGwodmFsdWU6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PikgeyB0aGlzLm1vbnRoRnVsbENlbGwgPSB2YWx1ZTsgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZ1bGxzY3JlZW4odmFsdWU6IGJvb2xlYW4pIHsgdGhpcy5mdWxsc2NyZWVuID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBnZXQgbnpGdWxsc2NyZWVuKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5mdWxsc2NyZWVuOyB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2FyZCh2YWx1ZTogYm9vbGVhbikgeyB0aGlzLmZ1bGxzY3JlZW4gPSAhY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTsgfVxuICBnZXQgbnpDYXJkKCk6IGJvb2xlYW4geyByZXR1cm4gIXRoaXMuZnVsbHNjcmVlbjsgfVxuXG4gIEBDb250ZW50Q2hpbGQoRGF0ZUNlbGwsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pXG4gIHNldCBkYXRlQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMuZGF0ZUNlbGwgPSB2YWx1ZTsgfSB9XG5cbiAgQENvbnRlbnRDaGlsZChEYXRlRnVsbENlbGwsIHtyZWFkOiBUZW1wbGF0ZVJlZn0pXG4gIHNldCBkYXRlRnVsbENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IGlmICh2YWx1ZSkgeyB0aGlzLmRhdGVGdWxsQ2VsbCA9IHZhbHVlOyB9IH1cblxuICBAQ29udGVudENoaWxkKE1vbnRoQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgc2V0IG1vbnRoQ2VsbENoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT4pIHsgaWYgKHZhbHVlKSB7IHRoaXMubW9udGhDZWxsID0gdmFsdWU7IH0gfVxuXG4gIEBDb250ZW50Q2hpbGQoTW9udGhGdWxsQ2VsbCwge3JlYWQ6IFRlbXBsYXRlUmVmfSlcbiAgc2V0IG1vbnRoRnVsbENlbGxDaGlsZCh2YWx1ZTogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+KSB7IGlmICh2YWx1ZSkgeyB0aGlzLm1vbnRoRnVsbENlbGwgPSB2YWx1ZTsgfSB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLS1mdWxsc2NyZWVuJylcbiAgZnVsbHNjcmVlbiA9IHRydWU7XG5cbiAgZGF5c0luV2VlazogRGF5Q2VsbENvbnRleHRbXSA9IFtdO1xuICBtb250aHNJblllYXI6IE1vbnRoQ2VsbENvbnRleHRbXSA9IFtdO1xuICBkYXRlTWF0cml4OiBEYXRlQ2VsbENvbnRleHRbXVtdID0gW107XG4gIGFjdGl2ZURhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBjdXJyZW50RGF0ZVJvdzogbnVtYmVyID0gLTE7XG4gIGN1cnJlbnREYXRlQ29sOiBudW1iZXIgPSAtMTtcbiAgYWN0aXZlRGF0ZVJvdzogbnVtYmVyID0gLTE7XG4gIGFjdGl2ZURhdGVDb2w6IG51bWJlciA9IC0xO1xuICBjdXJyZW50TW9udGhSb3c6IG51bWJlciA9IC0xO1xuICBjdXJyZW50TW9udGhDb2w6IG51bWJlciA9IC0xO1xuICBhY3RpdmVNb250aFJvdzogbnVtYmVyID0gLTE7XG4gIGFjdGl2ZU1vbnRoQ29sOiBudW1iZXIgPSAtMTtcbiAgZGF0ZUNlbGw6IFRlbXBsYXRlUmVmPHskaW1wbGljaXQ6IERhdGV9PnxudWxsID0gbnVsbDtcbiAgZGF0ZUZ1bGxDZWxsOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT58bnVsbCA9IG51bGw7XG4gIG1vbnRoQ2VsbDogVGVtcGxhdGVSZWY8eyRpbXBsaWNpdDogRGF0ZX0+fG51bGwgPSBudWxsO1xuICBtb250aEZ1bGxDZWxsOiBUZW1wbGF0ZVJlZjx7JGltcGxpY2l0OiBEYXRlfT58bnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWZ1bGxjYWxlbmRhcic7XG4gIHByaXZhdGUgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcml2YXRlIG9uQ2hhbmdlRm46IChkYXRlOiBEYXRlKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgb25Ub3VjaEZuOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG5cbiAgcHJpdmF0ZSBnZXQgY2FsZW5kYXJTdGFydCgpOiBEYXRlIHtcbiAgICByZXR1cm4gc3RhcnRPZldlZWsoc3RhcnRPZk1vbnRoKHRoaXMuYWN0aXZlRGF0ZSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThuKSB7IH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFVwRGF5c0luV2VlaygpO1xuICAgIHRoaXMuc2V0VXBNb250aHNJblllYXIoKTtcbiAgICB0aGlzLnNldFVwRGF0ZU1hdHJpeCgpO1xuICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudERhdGUoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZURhdGUoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRNb250aCgpO1xuICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9udGgoKTtcbiAgfVxuXG4gIG9uTW9kZUNoYW5nZShtb2RlOiAnbW9udGgnfCd5ZWFyJyk6IHZvaWQge1xuICAgIHRoaXMubnpNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XG4gIH1cblxuICBvbkRhdGVTZWxlY3QoZGF0ZTogRGF0ZSk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uWWVhclNlbGVjdCh5ZWFyOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkYXRlID0gc2V0WWVhcih0aGlzLmFjdGl2ZURhdGUsIHllYXIpO1xuICAgIHRoaXMudXBkYXRlRGF0ZShkYXRlKTtcbiAgfVxuXG4gIG9uTW9udGhTZWxlY3QobW9udGg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRhdGUgPSBzZXRNb250aCh0aGlzLmFjdGl2ZURhdGUsIG1vbnRoKTtcbiAgICB0aGlzLnVwZGF0ZURhdGUoZGF0ZSk7XG4gIH1cblxuICB3cml0ZVZhbHVlKHZhbHVlOiBEYXRlfG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZURhdGUodmFsdWUgfHwgbmV3IERhdGUoKSwgZmFsc2UpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKGRhdGU6IERhdGUpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlRm4gPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoRm4gPSBmbjtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlRGF0ZShkYXRlOiBEYXRlLCB0b3VjaGVkOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGNvbnN0IGRheUNoYW5nZWQgPSAhaXNTYW1lRGF5KGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgY29uc3QgbW9udGhDaGFuZ2VkID0gIWlzU2FtZU1vbnRoKGRhdGUsIHRoaXMuYWN0aXZlRGF0ZSk7XG4gICAgY29uc3QgeWVhckNoYW5nZWQgPSAhaXNTYW1lWWVhcihkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xuXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gZGF0ZTtcblxuICAgIGlmIChkYXlDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUFjdGl2ZURhdGUoKTtcbiAgICB9XG4gICAgaWYgKG1vbnRoQ2hhbmdlZCkge1xuICAgICAgdGhpcy5zZXRVcERhdGVNYXRyaXgoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlQ3VycmVudERhdGUoKTtcbiAgICAgIHRoaXMuY2FsY3VsYXRlQWN0aXZlTW9udGgoKTtcbiAgICB9XG4gICAgaWYgKHllYXJDaGFuZ2VkKSB7XG4gICAgICB0aGlzLmNhbGN1bGF0ZUN1cnJlbnRNb250aCgpO1xuICAgIH1cblxuICAgIGlmICh0b3VjaGVkKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlRm4oZGF0ZSk7XG4gICAgICB0aGlzLm9uVG91Y2hGbigpO1xuICAgICAgdGhpcy5uelZhbHVlQ2hhbmdlLmVtaXQoZGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRVcERheXNJbldlZWsoKTogdm9pZCB7XG4gICAgdGhpcy5kYXlzSW5XZWVrID0gW107XG4gICAgY29uc3Qgd2Vla1N0YXJ0ID0gc3RhcnRPZldlZWsodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZSA9IGFkZERheXMod2Vla1N0YXJ0LCBpKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ0UnKTtcbiAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZSwgJ0VFRUVFRScpO1xuICAgICAgdGhpcy5kYXlzSW5XZWVrLnB1c2goe3RpdGxlLCBsYWJlbH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBNb250aHNJblllYXIoKTogdm9pZCB7XG4gICAgdGhpcy5tb250aHNJblllYXIgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBzZXRNb250aCh0aGlzLmFjdGl2ZURhdGUsIGkpO1xuICAgICAgY29uc3QgdGl0bGUgPSB0aGlzLmkxOG4uZm9ybWF0RGF0ZShkYXRlLCAnTU1NJyk7XG4gICAgICBjb25zdCBsYWJlbCA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdNTU0nKTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gc3RhcnRPZk1vbnRoKGRhdGUpO1xuICAgICAgdGhpcy5tb250aHNJblllYXIucHVzaCh7dGl0bGUsIGxhYmVsLCBzdGFydH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBEYXRlTWF0cml4KCk6IHZvaWQge1xuICAgIHRoaXMuZGF0ZU1hdHJpeCA9IFtdO1xuICAgIGNvbnN0IG1vbnRoU3RhcnQgPSBzdGFydE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBjb25zdCBtb250aEVuZCA9IGVuZE9mTW9udGgodGhpcy5hY3RpdmVEYXRlKTtcbiAgICBjb25zdCB3ZWVrRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MobW9udGhFbmQsIG1vbnRoU3RhcnQpICsgMjtcblxuICAgIGZvciAobGV0IHdlZWsgPSAwOyB3ZWVrIDwgd2Vla0RpZmY7IHdlZWsrKykge1xuICAgICAgY29uc3Qgcm93OiBEYXRlQ2VsbENvbnRleHRbXSA9IFtdO1xuICAgICAgY29uc3Qgd2Vla1N0YXJ0ID0gYWRkRGF5cyh0aGlzLmNhbGVuZGFyU3RhcnQsIHdlZWsgKiA3KTtcblxuICAgICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgNzsgZGF5KyspIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGFkZERheXMod2Vla1N0YXJ0LCBkYXkpO1xuICAgICAgICBjb25zdCBtb250aERpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyhkYXRlLCB0aGlzLmFjdGl2ZURhdGUpO1xuICAgICAgICBjb25zdCB0aXRsZSA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdsb25nRGF0ZScpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuaTE4bi5mb3JtYXREYXRlKGRhdGUsICdkZCcpO1xuICAgICAgICBjb25zdCByZWwgPSBtb250aERpZmYgPT09IDAgPyAnY3VycmVudCcgOiBtb250aERpZmYgPCAwID8gJ2xhc3QnIDogJ25leHQnO1xuICAgICAgICByb3cucHVzaCh7dGl0bGUsIGxhYmVsLCByZWwsIHZhbHVlOiBkYXRlfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmRhdGVNYXRyaXgucHVzaChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQ3VycmVudERhdGUoKTogdm9pZCB7XG4gICAgaWYgKGlzVGhpc01vbnRoKHRoaXMuYWN0aXZlRGF0ZSkpIHtcbiAgICAgIHRoaXMuY3VycmVudERhdGVSb3cgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKHRoaXMuY3VycmVudERhdGUsIHRoaXMuY2FsZW5kYXJTdGFydCk7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKHRoaXMuY3VycmVudERhdGUsIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmN1cnJlbnREYXRlUm93ICogNykpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlUm93ID0gLTE7XG4gICAgICB0aGlzLmN1cnJlbnREYXRlQ29sID0gLTE7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVBY3RpdmVEYXRlKCk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZVJvdyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3ModGhpcy5hY3RpdmVEYXRlLCB0aGlzLmNhbGVuZGFyU3RhcnQpO1xuICAgIHRoaXMuYWN0aXZlRGF0ZUNvbCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyh0aGlzLmFjdGl2ZURhdGUsIGFkZERheXModGhpcy5jYWxlbmRhclN0YXJ0LCB0aGlzLmFjdGl2ZURhdGVSb3cgKiA3KSk7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUN1cnJlbnRNb250aCgpOiB2b2lkIHtcbiAgICBpZiAoaXNUaGlzWWVhcih0aGlzLmFjdGl2ZURhdGUpKSB7XG4gICAgICBjb25zdCB5ZWFyU3RhcnQgPSBzdGFydE9mWWVhcih0aGlzLmN1cnJlbnREYXRlKTtcbiAgICAgIGNvbnN0IG1vbnRoRGlmZiA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKHRoaXMuY3VycmVudERhdGUsIHllYXJTdGFydCk7XG4gICAgICB0aGlzLmN1cnJlbnRNb250aFJvdyA9IE1hdGguZmxvb3IobW9udGhEaWZmIC8gMyk7XG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IG1vbnRoRGlmZiAlIDM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY3VycmVudE1vbnRoUm93ID0gLTE7XG4gICAgICB0aGlzLmN1cnJlbnRNb250aENvbCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FsY3VsYXRlQWN0aXZlTW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVNb250aFJvdyA9IE1hdGguZmxvb3IodGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgLyAzKTtcbiAgICB0aGlzLmFjdGl2ZU1vbnRoQ29sID0gdGhpcy5hY3RpdmVEYXRlLmdldE1vbnRoKCkgJSAzO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF5Q2VsbENvbnRleHQge1xuICB0aXRsZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vbnRoQ2VsbENvbnRleHQge1xuICB0aXRsZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBzdGFydDogRGF0ZTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEYXRlQ2VsbENvbnRleHQge1xuICB0aXRsZTogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICByZWw6ICdsYXN0J3wnY3VycmVudCd8J25leHQnO1xuICB2YWx1ZTogRGF0ZTtcbn1cbiJdfQ==