/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import setMonth from 'date-fns/set_month';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
var NzCalendarHeaderComponent = /** @class */ (function () {
    function NzCalendarHeaderComponent(i18n) {
        this.i18n = i18n;
        this.mode = 'month';
        this.modeChange = new EventEmitter();
        this.fullscreen = true;
        this.yearChange = new EventEmitter();
        this.monthChange = new EventEmitter();
        this._activeDate = new Date();
        this.yearOffset = 10;
        this.yearTotal = 20;
        this.prefixCls = 'ant-fullcalendar';
    }
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeDate", {
        get: /**
         * @return {?}
         */
        function () {
            return this._activeDate;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._activeDate = value;
            this.setUpYears();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeYear", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getFullYear();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "activeMonth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeDate.getMonth();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "size", {
        get: /**
         * @return {?}
         */
        function () {
            return this.fullscreen ? 'default' : 'small';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "yearTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.year;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCalendarHeaderComponent.prototype, "monthTypeText", {
        get: /**
         * @return {?}
         */
        function () {
            return this.i18n.getLocale().Calendar.month;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setUpYears();
        this.setUpMonths();
    };
    /**
     * @param {?} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.updateYear = /**
     * @param {?} year
     * @return {?}
     */
    function (year) {
        this.yearChange.emit(year);
        this.setUpYears(year);
    };
    /**
     * @param {?=} year
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpYears = /**
     * @param {?=} year
     * @return {?}
     */
    function (year) {
        /** @type {?} */
        var start = (year || this.activeYear) - this.yearOffset;
        /** @type {?} */
        var end = start + this.yearTotal;
        this.years = [];
        for (var i = start; i < end; i++) {
            this.years.push({ label: "" + i, value: i });
        }
    };
    /**
     * @return {?}
     */
    NzCalendarHeaderComponent.prototype.setUpMonths = /**
     * @return {?}
     */
    function () {
        this.months = [];
        for (var i = 0; i < 12; i++) {
            /** @type {?} */
            var dateInMonth = setMonth(this.activeDate, i);
            /** @type {?} */
            var monthText = this.i18n.formatDate(dateInMonth, 'MMM');
            this.months.push({ label: monthText, value: i });
        }
    };
    NzCalendarHeaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-calendar-header',
                    template: "<nz-select class=\"ant-fullcalendar-year-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeYear\" (ngModelChange)=\"updateYear($event)\">\n  <nz-option *ngFor=\"let year of years\" [nzLabel]=\"year.label\" [nzValue]=\"year.value\"></nz-option>\n</nz-select>\n\n<nz-select *ngIf=\"mode === 'month'\" class=\"ant-fullcalendar-month-select\" [nzSize]=\"size\" [nzDropdownMatchSelectWidth]=\"false\"\n           [ngModel]=\"activeMonth\" (ngModelChange)=\"monthChange.emit($event)\">\n  <nz-option *ngFor=\"let month of months\" [nzLabel]=\"month.label\" [nzValue]=\"month.value\"></nz-option>\n</nz-select>\n\n<nz-radio-group [(ngModel)]=\"mode\" (ngModelChange)=\"modeChange.emit($event)\" [nzSize]=\"size\">\n  <label nz-radio-button nzValue=\"month\">{{ monthTypeText }}</label>\n  <label nz-radio-button nzValue=\"year\">{{ yearTypeText }}</label>\n</nz-radio-group>\n",
                    host: {
                        '[style.display]': "'block'",
                        '[class.ant-fullcalendar-header]': "true"
                    }
                }] }
    ];
    /** @nocollapse */
    NzCalendarHeaderComponent.ctorParameters = function () { return [
        { type: I18n }
    ]; };
    NzCalendarHeaderComponent.propDecorators = {
        mode: [{ type: Input }],
        modeChange: [{ type: Output }],
        fullscreen: [{ type: Input }],
        activeDate: [{ type: Input }],
        yearChange: [{ type: Output }],
        monthChange: [{ type: Output }]
    };
    return NzCalendarHeaderComponent;
}());
export { NzCalendarHeaderComponent };
function NzCalendarHeaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.mode;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.modeChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.fullscreen;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.monthChange;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype._activeDate;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearOffset;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.yearTotal;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.years;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.months;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.prefixCls;
    /** @type {?} */
    NzCalendarHeaderComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXItaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjYWxlbmRhci9uei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9FLE9BQU8sUUFBUSxNQUFNLG9CQUFvQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxhQUFhLElBQUksSUFBSSxFQUFFLE1BQU0seUJBQXlCLENBQUM7O0lBeUQ5RCxtQ0FBb0IsSUFBVTtRQUFWLFNBQUksR0FBSixJQUFJLENBQU07UUE5QzlCLFlBQWtDLE9BQU8sQ0FBQztRQUMxQyxrQkFBZ0UsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRixrQkFBK0IsSUFBSSxDQUFDO1FBWXBDLGtCQUFzRCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pFLG1CQUF1RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRTFFLG1CQUFjLElBQUksSUFBSSxFQUFFLENBQUM7UUFDekIsa0JBQXFCLEVBQUUsQ0FBQztRQUN4QixpQkFBb0IsRUFBRSxDQUFDO3lCQXdCSCxrQkFBa0I7S0FHckM7SUExQ0Qsc0JBQ0ksaURBQVU7Ozs7UUFLZDtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUN6Qjs7Ozs7UUFSRCxVQUNlLEtBQVc7WUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25COzs7T0FBQTtJQWVELHNCQUFJLGlEQUFVOzs7O1FBQWQ7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDdEM7OztPQUFBO0lBRUQsc0JBQUksa0RBQVc7Ozs7UUFBZjtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUNuQzs7O09BQUE7SUFFRCxzQkFBSSwyQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztTQUM5Qzs7O09BQUE7SUFFRCxzQkFBSSxtREFBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1NBQzVDOzs7T0FBQTtJQUVELHNCQUFJLG9EQUFhOzs7O1FBQWpCO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7U0FDN0M7OztPQUFBOzs7O0lBT0QsNENBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7Ozs7SUFFRCw4Q0FBVTs7OztJQUFWLFVBQVcsSUFBWTtRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3ZCOzs7OztJQUVPLDhDQUFVOzs7O2NBQUMsSUFBYTs7UUFDOUIsSUFBTSxLQUFLLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7O1FBQzFELElBQU0sR0FBRyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBRW5DLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBRyxDQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDOUM7Ozs7O0lBR0ssK0NBQVc7Ozs7UUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFFakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTs7WUFDM0IsSUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUM7O1lBQ2pELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDbEQ7OztnQkFyRkosU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBSyxvQkFBb0I7b0JBQ2pDLCs1QkFBa0Q7b0JBQ2xELElBQUksRUFBUzt3QkFDWCxpQkFBaUIsRUFBa0IsU0FBUzt3QkFDNUMsaUNBQWlDLEVBQUUsTUFBTTtxQkFDMUM7aUJBQ0Y7Ozs7Z0JBVHlCLElBQUk7Ozt1QkFXM0IsS0FBSzs2QkFDTCxNQUFNOzZCQUVOLEtBQUs7NkJBRUwsS0FBSzs2QkFVTCxNQUFNOzhCQUNOLE1BQU07O29DQTdCVDs7U0FZYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgc2V0TW9udGggZnJvbSAnZGF0ZS1mbnMvc2V0X21vbnRoJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgYXMgSTE4biB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotY2FsZW5kYXItaGVhZGVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LWNhbGVuZGFyLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgOiB7XG4gICAgJ1tzdHlsZS5kaXNwbGF5XScgICAgICAgICAgICAgICAgOiBgJ2Jsb2NrJ2AsXG4gICAgJ1tjbGFzcy5hbnQtZnVsbGNhbGVuZGFyLWhlYWRlcl0nOiBgdHJ1ZWBcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgbW9kZTogJ21vbnRoJyB8ICd5ZWFyJyA9ICdtb250aCc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBtb2RlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8J21vbnRoJyB8ICd5ZWFyJz4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IGFjdGl2ZURhdGUodmFsdWU6IERhdGUpIHtcbiAgICB0aGlzLl9hY3RpdmVEYXRlID0gdmFsdWU7XG4gICAgdGhpcy5zZXRVcFllYXJzKCk7XG4gIH1cblxuICBnZXQgYWN0aXZlRGF0ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aXZlRGF0ZTtcbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSB5ZWFyQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG1vbnRoQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBfYWN0aXZlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gIHllYXJPZmZzZXQ6IG51bWJlciA9IDEwO1xuICB5ZWFyVG90YWw6IG51bWJlciA9IDIwO1xuICB5ZWFyczogQXJyYXk8eyBsYWJlbDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyIH0+O1xuICBtb250aHM6IEFycmF5PHsgbGFiZWw6IHN0cmluZywgdmFsdWU6IG51bWJlciB9PjtcblxuICBnZXQgYWN0aXZlWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIGdldCBhY3RpdmVNb250aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZURhdGUuZ2V0TW9udGgoKTtcbiAgfVxuXG4gIGdldCBzaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZnVsbHNjcmVlbiA/ICdkZWZhdWx0JyA6ICdzbWFsbCc7XG4gIH1cblxuICBnZXQgeWVhclR5cGVUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5DYWxlbmRhci55ZWFyO1xuICB9XG5cbiAgZ2V0IG1vbnRoVHlwZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pMThuLmdldExvY2FsZSgpLkNhbGVuZGFyLm1vbnRoO1xuICB9XG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LWZ1bGxjYWxlbmRhcic7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBJMThuKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldFVwWWVhcnMoKTtcbiAgICB0aGlzLnNldFVwTW9udGhzKCk7XG4gIH1cblxuICB1cGRhdGVZZWFyKHllYXI6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMueWVhckNoYW5nZS5lbWl0KHllYXIpO1xuICAgIHRoaXMuc2V0VXBZZWFycyh5ZWFyKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBZZWFycyh5ZWFyPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhcnQgPSAoeWVhciB8fCB0aGlzLmFjdGl2ZVllYXIpIC0gdGhpcy55ZWFyT2Zmc2V0O1xuICAgIGNvbnN0IGVuZCA9IHN0YXJ0ICsgdGhpcy55ZWFyVG90YWw7XG5cbiAgICB0aGlzLnllYXJzID0gW107XG4gICAgZm9yIChsZXQgaSA9IHN0YXJ0OyBpIDwgZW5kOyBpKyspIHtcbiAgICAgIHRoaXMueWVhcnMucHVzaCh7IGxhYmVsOiBgJHtpfWAsIHZhbHVlOiBpIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VXBNb250aHMoKTogdm9pZCB7XG4gICAgdGhpcy5tb250aHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykge1xuICAgICAgY29uc3QgZGF0ZUluTW9udGggPSBzZXRNb250aCh0aGlzLmFjdGl2ZURhdGUsIGkpO1xuICAgICAgY29uc3QgbW9udGhUZXh0ID0gdGhpcy5pMThuLmZvcm1hdERhdGUoZGF0ZUluTW9udGgsICdNTU0nKTtcbiAgICAgIHRoaXMubW9udGhzLnB1c2goeyBsYWJlbDogbW9udGhUZXh0LCB2YWx1ZTogaSB9KTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==