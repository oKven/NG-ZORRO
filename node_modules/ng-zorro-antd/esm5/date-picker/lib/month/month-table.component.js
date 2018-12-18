/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NzI18nService } from '../../../i18n/nz-i18n.service';
import { CandyDate } from '../candy-date';
/** @type {?} */
var MAX_ROW = 4;
/** @type {?} */
var MAX_COL = 3;
var MonthTableComponent = /** @class */ (function () {
    function MonthTableComponent(i18n) {
        this.i18n = i18n;
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-month-panel';
    }
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @param {?} changes
     * @return {?}
     */
    MonthTableComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["value"] || changes["disabledDate"]) {
            this.render();
        }
    };
    /**
     * @param {?} index
     * @param {?} monthData
     * @return {?}
     */
    MonthTableComponent.prototype.trackPanelMonth = /**
     * @param {?} index
     * @param {?} monthData
     * @return {?}
     */
    function (index, monthData) {
        return monthData.month;
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.render = /**
     * @return {?}
     */
    function () {
        if (this.value) {
            this.panelMonths = this.makePanelMonths();
        }
    };
    /**
     * @return {?}
     */
    MonthTableComponent.prototype.makePanelMonths = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var months = [];
        /** @type {?} */
        var currentMonth = this.value.getMonth();
        /** @type {?} */
        var today = new CandyDate();
        /** @type {?} */
        var monthValue = 0;
        for (var rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            months[rowIndex] = [];
            var _loop_1 = function (colIndex) {
                var _a;
                /** @type {?} */
                var month = this_1.value.setMonth(monthValue);
                /** @type {?} */
                var disabled = this_1.disabledDate ? this_1.disabledDate(this_1.value.setMonth(monthValue).nativeDate) : false;
                /** @type {?} */
                var content = this_1.i18n.formatDateCompatible(month.nativeDate, 'MMM');
                /** @type {?} */
                var cell = months[rowIndex][colIndex] = {
                    disabled: disabled,
                    content: content,
                    month: monthValue,
                    title: content,
                    classMap: null,
                    onClick: function () { return _this.chooseMonth(cell.month); }
                };
                cell.classMap = (_a = {},
                    _a[this_1.prefixCls + "-cell"] = true,
                    _a[this_1.prefixCls + "-cell-disabled"] = disabled,
                    _a[this_1.prefixCls + "-selected-cell"] = cell.month === currentMonth,
                    _a[this_1.prefixCls + "-current-cell"] = today.getYear() === this_1.value.getYear() && cell.month === today.getMonth(),
                    _a);
                monthValue++;
            };
            var this_1 = this;
            for (var colIndex = 0; colIndex < MAX_COL; colIndex++) {
                _loop_1(colIndex);
            }
        }
        return months;
    };
    /**
     * @param {?} month
     * @return {?}
     */
    MonthTableComponent.prototype.chooseMonth = /**
     * @param {?} month
     * @return {?}
     */
    function (month) {
        this.value = this.value.setMonth(month);
        this.valueChange.emit(this.value);
        this.render();
    };
    MonthTableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'month-table',
                    template: "<table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n  <tbody class=\"{{ prefixCls }}-tbody\">\n    <tr *ngFor=\"let row of panelMonths\" role=\"row\">\n      <td *ngFor=\"let monthCell of row; trackBy: trackPanelMonth\"\n        role=\"gridcell\"\n        title=\"{{ monthCell.title }}\"\n        (click)=\"monthCell.disabled ? null : monthCell.onClick()\"\n        [ngClass]=\"monthCell.classMap\"\n      >\n        <a class=\"{{ prefixCls }}-month\">{{ monthCell.content }}</a>\n      </td>\n    </tr>\n  </tbody>\n</table>"
                }] }
    ];
    /** @nocollapse */
    MonthTableComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    MonthTableComponent.propDecorators = {
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        disabledDate: [{ type: Input }]
    };
    return MonthTableComponent;
}());
export { MonthTableComponent };
function MonthTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    MonthTableComponent.prototype.value;
    /** @type {?} */
    MonthTableComponent.prototype.valueChange;
    /** @type {?} */
    MonthTableComponent.prototype.disabledDate;
    /** @type {?} */
    MonthTableComponent.prototype.prefixCls;
    /** @type {?} */
    MonthTableComponent.prototype.panelMonths;
    /** @type {?} */
    MonthTableComponent.prototype.i18n;
}
/**
 * @record
 */
export function PanelMonthData() { }
function PanelMonthData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelMonthData.prototype.disabled;
    /** @type {?} */
    PanelMonthData.prototype.content;
    /** @type {?} */
    PanelMonthData.prototype.month;
    /** @type {?} */
    PanelMonthData.prototype.title;
    /** @type {?} */
    PanelMonthData.prototype.classMap;
    /** @type {?} */
    PanelMonthData.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2xpYi9tb250aC9tb250aC10YWJsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBcUIsTUFBTSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQUV6RyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFFMUMsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDOztBQUNsQixJQUFNLE9BQU8sR0FBRyxDQUFDLENBQUM7O0lBZ0JoQiw2QkFBb0IsSUFBbUI7UUFBbkIsU0FBSSxHQUFKLElBQUksQ0FBZTtRQVB2QyxtQkFBd0IsSUFBSSxZQUFZLEVBQWEsQ0FBQztRQUl0RCxpQkFBb0IsMEJBQTBCLENBQUM7S0FHSDs7OztJQUU1QyxzQ0FBUTs7O0lBQVIsZUFBb0I7Ozs7O0lBRXBCLHlDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sYUFBVSxPQUFPLGdCQUFhLEVBQUU7WUFDekMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7S0FDRjs7Ozs7O0lBRUQsNkNBQWU7Ozs7O0lBQWYsVUFBZ0IsS0FBYSxFQUFFLFNBQXlCO1FBQ3RELE9BQU8sU0FBUyxDQUFDLEtBQUssQ0FBQztLQUN4Qjs7OztJQUVPLG9DQUFNOzs7O1FBQ1osSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDM0M7Ozs7O0lBR0ssNkNBQWU7Ozs7OztRQUNyQixJQUFNLE1BQU0sR0FBdUIsRUFBRSxDQUFDOztRQUN0QyxJQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUMzQyxJQUFNLEtBQUssR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDOztRQUU5QixJQUFJLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFDbkIsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUcsRUFBRTtZQUN0RCxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO29DQUNiLFFBQVE7OztnQkFDZixJQUFNLEtBQUssR0FBRyxPQUFLLEtBQUssQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7O2dCQUM5QyxJQUFNLFFBQVEsR0FBRyxPQUFLLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBSyxZQUFZLENBQUMsT0FBSyxLQUFLLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7O2dCQUMzRyxJQUFNLE9BQU8sR0FBRyxPQUFLLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxDQUFDOztnQkFFeEUsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHO29CQUN4QyxRQUFRLFVBQUE7b0JBQ1IsT0FBTyxTQUFBO29CQUNQLEtBQUssRUFBRSxVQUFVO29CQUNqQixLQUFLLEVBQUUsT0FBTztvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxPQUFPLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QjtpQkFDNUMsQ0FBQztnQkFFRixJQUFJLENBQUMsUUFBUTtvQkFDWCxHQUFJLE9BQUssU0FBUyxVQUFPLElBQUcsSUFBSTtvQkFDaEMsR0FBSSxPQUFLLFNBQVMsbUJBQWdCLElBQUcsUUFBUTtvQkFDN0MsR0FBSSxPQUFLLFNBQVMsbUJBQWdCLElBQUcsSUFBSSxDQUFDLEtBQUssS0FBSyxZQUFZO29CQUNoRSxHQUFJLE9BQUssU0FBUyxrQkFBZSxJQUFHLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxPQUFLLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxRQUFRLEVBQUU7dUJBQ2hILENBQUM7Z0JBRUYsVUFBVSxFQUFHLENBQUM7OztZQXJCaEIsS0FBSyxJQUFJLFFBQVEsR0FBRyxDQUFDLEVBQUUsUUFBUSxHQUFHLE9BQU8sRUFBRSxRQUFRLEVBQUc7d0JBQTdDLFFBQVE7YUFzQmhCO1NBQ0Y7UUFDRCxPQUFPLE1BQU0sQ0FBQzs7Ozs7O0lBR1IseUNBQVc7Ozs7Y0FBQyxLQUFhO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O2dCQXhFakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO29CQUN2Qiw4aUJBQXlDO2lCQUMxQzs7OztnQkFUUSxhQUFhOzs7d0JBWW5CLEtBQUs7OEJBQ0wsTUFBTTsrQkFFTixLQUFLOzs4QkFqQlI7O1NBYWEsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuLi9jYW5keS1kYXRlJztcblxuY29uc3QgTUFYX1JPVyA9IDQ7XG5jb25zdCBNQVhfQ09MID0gMztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbW9udGgtdGFibGUnLFxuICB0ZW1wbGF0ZVVybDogJ21vbnRoLXRhYmxlLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIE1vbnRoVGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHZhbHVlOiBDYW5keURhdGU7XG4gIEBPdXRwdXQoKSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xuXG4gIEBJbnB1dCgpIGRpc2FibGVkRGF0ZTogKGRhdGU6IERhdGUpID0+IGJvb2xlYW47XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyLW1vbnRoLXBhbmVsJztcbiAgcGFuZWxNb250aHM6IFBhbmVsTW9udGhEYXRhW11bXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQgeyB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlIHx8IGNoYW5nZXMuZGlzYWJsZWREYXRlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHRyYWNrUGFuZWxNb250aChpbmRleDogbnVtYmVyLCBtb250aERhdGE6IFBhbmVsTW9udGhEYXRhKTogbnVtYmVyIHtcbiAgICByZXR1cm4gbW9udGhEYXRhLm1vbnRoO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMucGFuZWxNb250aHMgPSB0aGlzLm1ha2VQYW5lbE1vbnRocygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhbmVsTW9udGhzKCk6IFBhbmVsTW9udGhEYXRhW11bXSB7XG4gICAgY29uc3QgbW9udGhzOiBQYW5lbE1vbnRoRGF0YVtdW10gPSBbXTtcbiAgICBjb25zdCBjdXJyZW50TW9udGggPSB0aGlzLnZhbHVlLmdldE1vbnRoKCk7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgQ2FuZHlEYXRlKCk7XG5cbiAgICBsZXQgbW9udGhWYWx1ZSA9IDA7XG4gICAgZm9yIChsZXQgcm93SW5kZXggPSAwOyByb3dJbmRleCA8IE1BWF9ST1c7IHJvd0luZGV4ICsrKSB7XG4gICAgICBtb250aHNbcm93SW5kZXhdID0gW107XG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXggKyspIHtcbiAgICAgICAgY29uc3QgbW9udGggPSB0aGlzLnZhbHVlLnNldE1vbnRoKG1vbnRoVmFsdWUpO1xuICAgICAgICBjb25zdCBkaXNhYmxlZCA9IHRoaXMuZGlzYWJsZWREYXRlID8gdGhpcy5kaXNhYmxlZERhdGUodGhpcy52YWx1ZS5zZXRNb250aChtb250aFZhbHVlKS5uYXRpdmVEYXRlKSA6IGZhbHNlO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5pMThuLmZvcm1hdERhdGVDb21wYXRpYmxlKG1vbnRoLm5hdGl2ZURhdGUsICdNTU0nKTtcblxuICAgICAgICBjb25zdCBjZWxsID0gbW9udGhzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICBtb250aDogbW9udGhWYWx1ZSxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBjbGFzc01hcDogbnVsbCxcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmNob29zZU1vbnRoKGNlbGwubW9udGgpXG4gICAgICAgIH07XG5cbiAgICAgICAgY2VsbC5jbGFzc01hcCA9IHtcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGxgXTogdHJ1ZSxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWNlbGwtZGlzYWJsZWRgXTogZGlzYWJsZWQsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1jZWxsYF06IGNlbGwubW9udGggPT09IGN1cnJlbnRNb250aCxcbiAgICAgICAgICBbYCR7dGhpcy5wcmVmaXhDbHN9LWN1cnJlbnQtY2VsbGBdOiB0b2RheS5nZXRZZWFyKCkgPT09IHRoaXMudmFsdWUuZ2V0WWVhcigpICYmIGNlbGwubW9udGggPT09IHRvZGF5LmdldE1vbnRoKClcbiAgICAgICAgfTtcblxuICAgICAgICBtb250aFZhbHVlICsrO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9udGhzO1xuICB9XG5cbiAgcHJpdmF0ZSBjaG9vc2VNb250aChtb250aDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0TW9udGgobW9udGgpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFuZWxNb250aERhdGEge1xuICBkaXNhYmxlZDogYm9vbGVhbjtcbiAgY29udGVudDogc3RyaW5nO1xuICBtb250aDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBjbGFzc01hcDogb2JqZWN0O1xuICBvbkNsaWNrKCk6IHZvaWQ7XG59XG4iXX0=