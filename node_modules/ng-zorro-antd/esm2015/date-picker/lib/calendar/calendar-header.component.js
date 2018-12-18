/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
export class CalendarHeaderComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        this.i18n = i18n;
        this.enablePrev = true;
        this.enableNext = true;
        this.showTimePicker = false;
        this.valueChange = new EventEmitter();
        this.panelModeChange = new EventEmitter();
        this.chooseDecade = new EventEmitter();
        this.chooseYear = new EventEmitter();
        this.chooseMonth = new EventEmitter();
        this.prefixCls = 'ant-calendar';
        this.yearToMonth = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["value"] || changes["showTimePicker"] || changes["panelMode"]) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousYear() {
        this.gotoYear(-1);
    }
    /**
     * @return {?}
     */
    nextYear() {
        this.gotoYear(1);
    }
    /**
     * @return {?}
     */
    previousMonth() {
        this.gotoMonth(-1);
    }
    /**
     * @return {?}
     */
    nextMonth() {
        this.gotoMonth(1);
    }
    /**
     * @param {?} mode
     * @param {?=} value
     * @return {?}
     */
    changePanel(mode, value) {
        this.panelModeChange.emit(mode);
        if (value) {
            this.changeValueFromInside(value);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseDecade(value) {
        this.changePanel('year', value);
        this.chooseDecade.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseYear(value) {
        this.changePanel(this.yearToMonth ? 'month' : 'date', value);
        this.yearToMonth = false; // Clear
        this.chooseYear.emit(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChooseMonth(value) {
        this.changePanel('date', value);
        this.yearToMonth = false; // Clear
        this.chooseMonth.emit(value);
    }
    /**
     * @return {?}
     */
    changeToMonthPanel() {
        this.changePanel('month');
        this.yearToMonth = true;
    }
    /**
     * @return {?}
     */
    render() {
        if (this.value) {
            this.yearMonthDaySelectors = this.createYearMonthDaySelectors();
        }
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    gotoMonth(amount) {
        this.changeValueFromInside(this.value.addMonths(amount));
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.changeValueFromInside(this.value.addYears(amount));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    changeValueFromInside(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    /**
     * @param {?} localeFormat
     * @return {?}
     */
    formatDateTime(localeFormat) {
        return this.i18n.formatDateCompatible(this.value.nativeDate, localeFormat);
    }
    /**
     * @return {?}
     */
    createYearMonthDaySelectors() {
        /** @type {?} */
        let year;
        /** @type {?} */
        let month;
        /** @type {?} */
        let day;
        year = {
            className: `${this.prefixCls}-year-select`,
            title: this.locale.yearSelect,
            onClick: () => this.showTimePicker ? null : this.changePanel('year'),
            label: this.formatDateTime(this.locale.yearFormat)
        };
        month = {
            className: `${this.prefixCls}-month-select`,
            title: this.locale.monthSelect,
            onClick: () => this.showTimePicker ? null : this.changeToMonthPanel(),
            label: this.locale.monthFormat ? this.formatDateTime(this.locale.monthFormat) : this.i18n.formatDate(this.value.nativeDate, 'MMM')
        };
        if (this.showTimePicker) {
            day = {
                className: `${this.prefixCls}-day-select`,
                label: this.formatDateTime(this.locale.dayFormat)
            };
        }
        /** @type {?} */
        let result;
        if (this.locale.monthBeforeYear) {
            result = [month, day, year];
        }
        else {
            result = [year, month, day];
        }
        return result.filter(selector => !!selector);
    }
}
CalendarHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'calendar-header',
                template: "<div class=\"{{ prefixCls }}-header\">\n  <div style=\"position: relative;\">\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-year-btn\"\n      role=\"button\"\n      (click)=\"previousYear()\"\n      title=\"{{ locale.previousYear }}\"\n    ></a>\n    <a *ngIf=\"enablePrev && !showTimePicker\"\n      class=\"{{ prefixCls }}-prev-month-btn\"\n      role=\"button\"\n      (click)=\"previousMonth()\"\n      title=\"{{ locale.previousMonth }}\"\n    ></a>\n\n    <span class=\"{{ prefixCls }}-{{ locale.monthBeforeYear ? 'my-select' : 'ym-select' }}\">\n      <ng-container *ngFor=\"let selector of yearMonthDaySelectors\">\n        <a class=\"{{ selector.className }}\"\n          role=\"button\"\n          (click)=\"selector.onClick ? selector.onClick() : null\"\n          title=\"{{ selector.title || null }}\"\n        >\n          {{ selector.label }}\n        </a>\n      </ng-container>\n    </span>\n\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-month-btn\"\n      role=\"button\"\n      (click)=\"nextMonth()\"\n      title=\"{{ locale.nextMonth }}\"\n    ></a>\n    <a *ngIf=\"enableNext && !showTimePicker\"\n      class=\"{{ prefixCls }}-next-year-btn\"\n      role=\"button\"\n      (click)=\"nextYear()\"\n      title=\"{{ locale.nextYear }}\"\n    ></a>\n  </div>\n\n  <ng-container [ngSwitch]=\"panelMode\">\n    <ng-container *ngSwitchCase=\"'decade'\">\n      <decade-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseDecade($event)\"\n      ></decade-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'year'\">\n      <year-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        (valueChange)=\"onChooseYear($event)\"\n        (decadePanelShow)=\"changePanel('decade')\"\n      ></year-panel>\n    </ng-container>\n    <ng-container *ngSwitchCase=\"'month'\">\n      <month-panel\n        [locale]=\"locale\"\n        [value]=\"value\"\n        [disabledDate]=\"disabledMonth\"\n        (valueChange)=\"onChooseMonth($event)\"\n        (yearPanelShow)=\"changePanel('year')\"\n      ></month-panel>\n    </ng-container>\n  </ng-container>\n</div>"
            }] }
];
/** @nocollapse */
CalendarHeaderComponent.ctorParameters = () => [
    { type: NzI18nService }
];
CalendarHeaderComponent.propDecorators = {
    locale: [{ type: Input }],
    enablePrev: [{ type: Input }],
    enableNext: [{ type: Input }],
    disabledMonth: [{ type: Input }],
    showTimePicker: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }],
    panelMode: [{ type: Input }],
    panelModeChange: [{ type: Output }],
    chooseDecade: [{ type: Output }],
    chooseYear: [{ type: Output }],
    chooseMonth: [{ type: Output }]
};
function CalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    CalendarHeaderComponent.prototype.locale;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enablePrev;
    /** @type {?} */
    CalendarHeaderComponent.prototype.enableNext;
    /** @type {?} */
    CalendarHeaderComponent.prototype.disabledMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.showTimePicker;
    /** @type {?} */
    CalendarHeaderComponent.prototype.value;
    /** @type {?} */
    CalendarHeaderComponent.prototype.valueChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelMode;
    /** @type {?} */
    CalendarHeaderComponent.prototype.panelModeChange;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseDecade;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseYear;
    /** @type {?} */
    CalendarHeaderComponent.prototype.chooseMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearMonthDaySelectors;
    /** @type {?} */
    CalendarHeaderComponent.prototype.yearToMonth;
    /** @type {?} */
    CalendarHeaderComponent.prototype.i18n;
}
/**
 * @record
 */
export function YearMonthDaySelector() { }
function YearMonthDaySelector_tsickle_Closure_declarations() {
    /** @type {?} */
    YearMonthDaySelector.prototype.className;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.title;
    /** @type {?} */
    YearMonthDaySelector.prototype.label;
    /** @type {?|undefined} */
    YearMonthDaySelector.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR3pHLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUU5RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTzFDLE1BQU0sT0FBTyx1QkFBdUI7Ozs7SUFzQmxDLFlBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7UUFwQnZDLGtCQUErQixJQUFJLENBQUM7UUFDcEMsa0JBQStCLElBQUksQ0FBQztRQUVwQyxzQkFBbUMsS0FBSyxDQUFDO1FBR3pDLG1CQUF3QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBR3RELHVCQUE0QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBRTFELG9CQUF5QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3ZELGtCQUF1QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBQ3JELG1CQUF3QixJQUFJLFlBQVksRUFBYSxDQUFDO1FBRXRELGlCQUFvQixjQUFjLENBQUM7MkJBR0osS0FBSztLQUVROzs7O0lBRTVDLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztTQUM5QjtLQUNGOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sYUFBVSxPQUFPLGtCQUFlLElBQUksT0FBTyxhQUFVLEVBQUU7WUFDaEUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7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QUFFLElBQUksQ0FBRSxDQUFDO1NBQy9CO2FBQU07WUFDTCxNQUFNLEdBQUcsQ0FBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBRSxDQUFDO1NBQy9CO1FBRUQsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7O1lBbEpoRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IscXJFQUE2QzthQUM5Qzs7OztZQVBRLGFBQWE7OztxQkFVbkIsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7NEJBQ0wsS0FBSzs2QkFDTCxLQUFLO29CQUVMLEtBQUs7MEJBQ0wsTUFBTTt3QkFFTixLQUFLOzhCQUNMLE1BQU07MkJBRU4sTUFBTTt5QkFDTixNQUFNOzBCQUNOLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBQYW5lbE1vZGUgfSBmcm9tICcuLi8uLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FsZW5kYXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICdjYWxlbmRhci1oZWFkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FsZW5kYXJIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIGVuYWJsZVByZXY6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSBlbmFibGVOZXh0OiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgZGlzYWJsZWRNb250aDogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZTtcbiAgQE91dHB1dCgpIHZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG5cbiAgQElucHV0KCkgcGFuZWxNb2RlOiBQYW5lbE1vZGU7XG4gIEBPdXRwdXQoKSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFBhbmVsTW9kZT4oKTtcblxuICBAT3V0cHV0KCkgY2hvb3NlRGVjYWRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG4gIEBPdXRwdXQoKSBjaG9vc2VZZWFyID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XG4gIEBPdXRwdXQoKSBjaG9vc2VNb250aCA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIHByZWZpeENsczogc3RyaW5nID0gJ2FudC1jYWxlbmRhcic7XG4gIHllYXJNb250aERheVNlbGVjdG9yczogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcblxuICBwcml2YXRlIHllYXJUb01vbnRoOiBib29sZWFuID0gZmFsc2U7IC8vIEluZGljYXRlIHdoZXRoZXIgc2hvdWxkIGNoYW5nZSB0byBtb250aCBwYW5lbCB3aGVuIGN1cnJlbnQgaXMgeWVhciBwYW5lbCAoaWYgcmVmZXJlcj1tb250aCwgaXQgc2hvdWxkIHNob3cgbW9udGggcGFuZWwgd2hlbiBjaG9vc2VkIGEgeWVhcilcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5ldyBDYW5keURhdGUoKTsgLy8gU2hvdyB0b2RheSBieSBkZWZhdWx0XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuc2hvd1RpbWVQaWNrZXIgfHwgY2hhbmdlcy5wYW5lbE1vZGUpIHtcbiAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgcHJldmlvdXNZZWFyKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b1llYXIoLTEpO1xuICB9XG5cbiAgbmV4dFllYXIoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigxKTtcbiAgfVxuXG4gIHByZXZpb3VzTW9udGgoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvTW9udGgoLTEpO1xuICB9XG5cbiAgbmV4dE1vbnRoKCk6IHZvaWQge1xuICAgIHRoaXMuZ290b01vbnRoKDEpO1xuICB9XG5cbiAgY2hhbmdlUGFuZWwobW9kZTogUGFuZWxNb2RlLCB2YWx1ZT86IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaG9vc2VEZWNhZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlUGFuZWwoJ3llYXInLCB2YWx1ZSk7XG4gICAgdGhpcy5jaG9vc2VEZWNhZGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbkNob29zZVllYXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlUGFuZWwodGhpcy55ZWFyVG9Nb250aCA/ICdtb250aCcgOiAnZGF0ZScsIHZhbHVlKTtcbiAgICB0aGlzLnllYXJUb01vbnRoID0gZmFsc2U7IC8vIENsZWFyXG4gICAgdGhpcy5jaG9vc2VZZWFyLmVtaXQodmFsdWUpO1xuICB9XG5cbiAgb25DaG9vc2VNb250aCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5jaGFuZ2VQYW5lbCgnZGF0ZScsIHZhbHVlKTtcbiAgICB0aGlzLnllYXJUb01vbnRoID0gZmFsc2U7IC8vIENsZWFyXG4gICAgdGhpcy5jaG9vc2VNb250aC5lbWl0KHZhbHVlKTtcbiAgfVxuXG4gIGNoYW5nZVRvTW9udGhQYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmNoYW5nZVBhbmVsKCdtb250aCcpO1xuICAgIHRoaXMueWVhclRvTW9udGggPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMueWVhck1vbnRoRGF5U2VsZWN0b3JzID0gdGhpcy5jcmVhdGVZZWFyTW9udGhEYXlTZWxlY3RvcnMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdvdG9Nb250aChhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHRoaXMudmFsdWUuYWRkTW9udGhzKGFtb3VudCkpO1xuICB9XG5cbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY2hhbmdlVmFsdWVGcm9tSW5zaWRlKHRoaXMudmFsdWUuYWRkWWVhcnMoYW1vdW50KSk7XG4gIH1cblxuICBwcml2YXRlIGNoYW5nZVZhbHVlRnJvbUluc2lkZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZm9ybWF0RGF0ZVRpbWUobG9jYWxlRm9ybWF0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmkxOG4uZm9ybWF0RGF0ZUNvbXBhdGlibGUodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCBsb2NhbGVGb3JtYXQpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVZZWFyTW9udGhEYXlTZWxlY3RvcnMoKTogWWVhck1vbnRoRGF5U2VsZWN0b3JbXSB7XG4gICAgbGV0IHllYXI6IFllYXJNb250aERheVNlbGVjdG9yO1xuICAgIGxldCBtb250aDogWWVhck1vbnRoRGF5U2VsZWN0b3I7XG4gICAgbGV0IGRheTogWWVhck1vbnRoRGF5U2VsZWN0b3I7XG5cbiAgICB5ZWFyID0ge1xuICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30teWVhci1zZWxlY3RgLFxuICAgICAgdGl0bGU6IHRoaXMubG9jYWxlLnllYXJTZWxlY3QsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLnNob3dUaW1lUGlja2VyID8gbnVsbCA6IHRoaXMuY2hhbmdlUGFuZWwoJ3llYXInKSxcbiAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKHRoaXMubG9jYWxlLnllYXJGb3JtYXQpXG4gICAgfTtcblxuICAgIG1vbnRoID0ge1xuICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tbW9udGgtc2VsZWN0YCxcbiAgICAgIHRpdGxlOiB0aGlzLmxvY2FsZS5tb250aFNlbGVjdCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuc2hvd1RpbWVQaWNrZXIgPyBudWxsIDogdGhpcy5jaGFuZ2VUb01vbnRoUGFuZWwoKSxcbiAgICAgIGxhYmVsOiB0aGlzLmxvY2FsZS5tb250aEZvcm1hdCA/IHRoaXMuZm9ybWF0RGF0ZVRpbWUodGhpcy5sb2NhbGUubW9udGhGb3JtYXQpIDogdGhpcy5pMThuLmZvcm1hdERhdGUodGhpcy52YWx1ZS5uYXRpdmVEYXRlLCAnTU1NJylcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuc2hvd1RpbWVQaWNrZXIpIHtcbiAgICAgIGRheSA9IHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByZWZpeENsc30tZGF5LXNlbGVjdGAsXG4gICAgICAgIGxhYmVsOiB0aGlzLmZvcm1hdERhdGVUaW1lKHRoaXMubG9jYWxlLmRheUZvcm1hdClcbiAgICAgIH07XG4gICAgfVxuXG4gICAgbGV0IHJlc3VsdDogWWVhck1vbnRoRGF5U2VsZWN0b3JbXTtcblxuICAgIGlmICh0aGlzLmxvY2FsZS5tb250aEJlZm9yZVllYXIpIHtcbiAgICAgIHJlc3VsdCA9IFsgbW9udGgsIGRheSwgeWVhciBdO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSBbIHllYXIsIG1vbnRoLCBkYXkgXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmZpbHRlcihzZWxlY3RvciA9PiAhIXNlbGVjdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFllYXJNb250aERheVNlbGVjdG9yIHtcbiAgY2xhc3NOYW1lOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBsYWJlbDogc3RyaW5nO1xuICBvbkNsaWNrPygpOiB2b2lkO1xufVxuIl19