/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { CandyDate } from './lib/candy-date';
import { NzPickerComponent } from './picker.component';
/** @type {?} */
var POPUP_STYLE_PATCH = { 'position': 'relative' };
/**
 * The base picker for all common APIs
 * @abstract
 */
var AbstractPickerComponent = /** @class */ (function () {
    function AbstractPickerComponent(i18n) {
        this.i18n = i18n;
        // --- Common API
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzDisabled = false;
        this.nzPopupStyle = POPUP_STYLE_PATCH;
        this.nzOnOpenChange = new EventEmitter();
        this.isRange = false;
        this.destroyed$ = new Subject();
        this.isCustomPlaceHolder = false;
        // ------------------------------------------------------------------------
        // | Control value accessor implements
        // ------------------------------------------------------------------------
        // NOTE: onChangeFn/onTouchedFn will not be assigned if user not use as ngModel
        this.onChangeFn = function () { return void 0; };
        this.onTouchedFn = function () { return void 0; };
    }
    Object.defineProperty(AbstractPickerComponent.prototype, "realOpenState", {
        get: /**
         * @return {?}
         */
        function () {
            return this.picker.animationOpenState;
        } // Use picker's real open state to let re-render the picker's content when shown up
        ,
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.initValue = /**
     * @return {?}
     */
    function () {
        this.nzValue = this.isRange ? [] : null;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // Subscribe the every locale change if the nzLocale is not handled by user
        if (!this.nzLocale) {
            this.i18n.localeChange
                .pipe(takeUntil(this.destroyed$))
                .subscribe(function () { return _this.setLocale(); });
        }
        // Default value
        this.initValue();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzPopupStyle"]) { // Always assign the popup style patch
            // Always assign the popup style patch
            this.nzPopupStyle = this.nzPopupStyle ? tslib_1.__assign({}, this.nzPopupStyle, POPUP_STYLE_PATCH) : POPUP_STYLE_PATCH;
        }
        // Mark as customized placeholder by user once nzPlaceHolder assigned at the first time
        if (changes["nzPlaceHolder"] && changes["nzPlaceHolder"].firstChange && typeof this.nzPlaceHolder !== 'undefined') {
            this.isCustomPlaceHolder = true;
        }
        if (changes["nzLocale"]) { // The nzLocale is currently handled by user
            // The nzLocale is currently handled by user
            this.setDefaultPlaceHolder();
        }
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next();
        this.destroyed$.complete();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.closeOverlay = /**
     * @return {?}
     */
    function () {
        this.picker.hideOverlay();
    };
    /**
     * Common handle for value changes
     * @param value changed value
     */
    /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    AbstractPickerComponent.prototype.onValueChange = /**
     * Common handle for value changes
     * @param {?} value changed value
     * @return {?}
     */
    function (value) {
        this.nzValue = value;
        if (this.isRange) {
            if ((/** @type {?} */ (this.nzValue)).length) {
                this.onChangeFn([this.nzValue[0].nativeDate, this.nzValue[1].nativeDate]);
            }
            else {
                this.onChangeFn([]);
            }
        }
        else {
            if (this.nzValue) {
                this.onChangeFn((/** @type {?} */ (this.nzValue)).nativeDate);
            }
            else {
                this.onChangeFn(null);
            }
        }
        this.onTouchedFn();
    };
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param open The overlayOpen in picker component
     */
    /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    AbstractPickerComponent.prototype.onOpenChange = /**
     * Triggered when overlayOpen changes (different with realOpenState)
     * @param {?} open The overlayOpen in picker component
     * @return {?}
     */
    function (open) {
        this.nzOnOpenChange.emit(open);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        // tslint:disable-line:no-any
        this.onChangeFn = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    AbstractPickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        // tslint:disable-line:no-any
        this.onTouchedFn = fn;
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDisabledState = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        this.nzDisabled = disabled;
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.setLocale = /**
     * @return {?}
     */
    function () {
        this.nzLocale = this.i18n.getLocaleData('DatePicker', {});
        this.setDefaultPlaceHolder();
    };
    /**
     * @return {?}
     */
    AbstractPickerComponent.prototype.setDefaultPlaceHolder = /**
     * @return {?}
     */
    function () {
        if (!this.isCustomPlaceHolder && this.nzLocale) {
            this.nzPlaceHolder = this.isRange ? this.nzLocale.lang.rangePlaceholder : this.nzLocale.lang.placeholder;
        }
    };
    /**
     * @param {?} date
     * @return {?}
     */
    AbstractPickerComponent.prototype.formatDate = /**
     * @param {?} date
     * @return {?}
     */
    function (date) {
        return date ? this.i18n.formatDateCompatible(date.nativeDate, this.nzFormat) : '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    AbstractPickerComponent.prototype.setValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            this.nzValue = value ? (/** @type {?} */ (value)).map(function (val) { return new CandyDate(val); }) : [];
        }
        else {
            this.nzValue = value ? new CandyDate(/** @type {?} */ (value)) : null;
        }
    };
    AbstractPickerComponent.propDecorators = {
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzClassName: [{ type: Input }],
        nzDisabledDate: [{ type: Input }],
        nzLocale: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzPopupStyle: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzStyle: [{ type: Input }],
        nzOnOpenChange: [{ type: Output }],
        nzFormat: [{ type: Input }],
        nzValue: [{ type: Input }],
        picker: [{ type: ViewChild, args: [NzPickerComponent,] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzAutoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], AbstractPickerComponent.prototype, "nzOpen", void 0);
    return AbstractPickerComponent;
}());
export { AbstractPickerComponent };
function AbstractPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAllowClear;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzAutoFocus;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabled;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOpen;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDisabledDate;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzLocale;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzPopupStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzDropdownClassName;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzSize;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzStyle;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzOnOpenChange;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzFormat;
    /** @type {?} */
    AbstractPickerComponent.prototype.nzValue;
    /** @type {?} */
    AbstractPickerComponent.prototype.picker;
    /** @type {?} */
    AbstractPickerComponent.prototype.isRange;
    /** @type {?} */
    AbstractPickerComponent.prototype.destroyed$;
    /** @type {?} */
    AbstractPickerComponent.prototype.isCustomPlaceHolder;
    /** @type {?} */
    AbstractPickerComponent.prototype.onChangeFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.onTouchedFn;
    /** @type {?} */
    AbstractPickerComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9hYnN0cmFjdC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUNMLFlBQVksRUFDWixLQUFLLEVBSUwsTUFBTSxFQUVOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDOztBQUV2RCxJQUFNLGlCQUFpQixHQUFHLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDOzs7Ozs7SUF3Q25ELGlDQUFzQixJQUFtQjtRQUFuQixTQUFJLEdBQUosSUFBSSxDQUFlOztRQWpDekMsb0JBQWlELElBQUksQ0FBQztRQUN0RCxtQkFBZ0QsS0FBSyxDQUFDO1FBQ3RELGtCQUErQyxLQUFLLENBQUM7UUFNckQsb0JBQWdDLGlCQUFpQixDQUFDO1FBSWxELHNCQUFvQyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBUWhFLGVBQW1CLEtBQUssQ0FBQztRQVV6QixrQkFBc0MsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNwRCwyQkFBeUMsS0FBSyxDQUFDOzs7OztRQTRFL0Msa0JBQTRDLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7UUFDekQsbUJBQTBCLGNBQU0sT0FBQSxLQUFLLENBQUMsRUFBTixDQUFNLENBQUM7S0ExRXRDO0lBWkQsc0JBQUksa0RBQWE7Ozs7UUFBakI7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QUMsRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLFNBQVMsbUJBQUMsS0FBYSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztTQUM1RDs7OytCQXhKRixLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7aUNBQ0wsS0FBSzsyQkFDTCxLQUFLO2dDQUNMLEtBQUs7K0JBQ0wsS0FBSztzQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSztpQ0FDTCxNQUFNOzJCQUVOLEtBQUs7MEJBRUwsS0FBSzt5QkFFTCxTQUFTLFNBQUMsaUJBQWlCOzs7UUFsQmxCLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7O2tDQTlCMUI7O1NBeUJzQix1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekRhdGVQaWNrZXJJMThuSW50ZXJmYWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLmludGVyZmFjZSc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9saWIvY2FuZHktZGF0ZSc7XG5pbXBvcnQgeyBOelBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcGlja2VyLmNvbXBvbmVudCc7XG5cbmNvbnN0IFBPUFVQX1NUWUxFX1BBVENIID0geyAncG9zaXRpb24nOiAncmVsYXRpdmUnIH07IC8vIEFpbSB0byBvdmVycmlkZSBhbnRkJ3Mgc3R5bGUgdG8gc3VwcG9ydCBvdmVybGF5J3MgcG9zaXRpb24gc3RyYXRlZ3kgKHBvc2l0aW9uOmFic29sdXRlIHdpbGwgY2F1c2UgaXQgbm90IHdvcmtpbmcgYmVhY3VzZSB0aGUgb3ZlcmxheSBjYW4ndCBnZXQgdGhlIGhlaWdodC93aWR0aCBvZiBpdCdzIGNvbnRlbnQpXG5cbi8qKlxuICogVGhlIGJhc2UgcGlja2VyIGZvciBhbGwgY29tbW9uIEFQSXNcbiAqL1xuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGlja2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICAvLyAtLS0gQ29tbW9uIEFQSVxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyOiBib29sZWFuID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuek9wZW46IGJvb2xlYW47XG4gIEBJbnB1dCgpIG56Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWREYXRlOiAoZDogRGF0ZSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpMb2NhbGU6IE56RGF0ZVBpY2tlckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIG56UGxhY2VIb2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBuelBvcHVwU3R5bGU6IG9iamVjdCA9IFBPUFVQX1NUWUxFX1BBVENIO1xuICBASW5wdXQoKSBuekRyb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIEBJbnB1dCgpIG56U3R5bGU6IG9iamVjdDtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25PcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuXG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmc7XG5cbiAgQElucHV0KCkgbnpWYWx1ZTogQ29tcGF0aWJsZVZhbHVlO1xuXG4gIEBWaWV3Q2hpbGQoTnpQaWNrZXJDb21wb25lbnQpIHByb3RlY3RlZCBwaWNrZXI6IE56UGlja2VyQ29tcG9uZW50O1xuXG4gIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTsgLy8gSW5kaWNhdGUgd2hldGhlciB0aGUgdmFsdWUgaXMgYSByYW5nZSB2YWx1ZVxuXG4gIGdldCByZWFsT3BlblN0YXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnBpY2tlci5hbmltYXRpb25PcGVuU3RhdGU7XG4gIH0gLy8gVXNlIHBpY2tlcidzIHJlYWwgb3BlbiBzdGF0ZSB0byBsZXQgcmUtcmVuZGVyIHRoZSBwaWNrZXIncyBjb250ZW50IHdoZW4gc2hvd24gdXBcblxuICBpbml0VmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5uelZhbHVlID0gdGhpcy5pc1JhbmdlID8gW10gOiBudWxsO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCQ6IFN1YmplY3Q8dm9pZD4gPSBuZXcgU3ViamVjdCgpO1xuICBwcm90ZWN0ZWQgaXNDdXN0b21QbGFjZUhvbGRlcjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAvLyBTdWJzY3JpYmUgdGhlIGV2ZXJ5IGxvY2FsZSBjaGFuZ2UgaWYgdGhlIG56TG9jYWxlIGlzIG5vdCBoYW5kbGVkIGJ5IHVzZXJcbiAgICBpZiAoIXRoaXMubnpMb2NhbGUpIHtcbiAgICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2VcbiAgICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveWVkJCkpXG4gICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5zZXRMb2NhbGUoKSk7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCB2YWx1ZVxuICAgIHRoaXMuaW5pdFZhbHVlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpQb3B1cFN0eWxlKSB7IC8vIEFsd2F5cyBhc3NpZ24gdGhlIHBvcHVwIHN0eWxlIHBhdGNoXG4gICAgICB0aGlzLm56UG9wdXBTdHlsZSA9IHRoaXMubnpQb3B1cFN0eWxlID8geyAuLi50aGlzLm56UG9wdXBTdHlsZSwgLi4uUE9QVVBfU1RZTEVfUEFUQ0ggfSA6IFBPUFVQX1NUWUxFX1BBVENIO1xuICAgIH1cblxuICAgIC8vIE1hcmsgYXMgY3VzdG9taXplZCBwbGFjZWhvbGRlciBieSB1c2VyIG9uY2UgbnpQbGFjZUhvbGRlciBhc3NpZ25lZCBhdCB0aGUgZmlyc3QgdGltZVxuICAgIGlmIChjaGFuZ2VzLm56UGxhY2VIb2xkZXIgJiYgY2hhbmdlcy5uelBsYWNlSG9sZGVyLmZpcnN0Q2hhbmdlICYmIHR5cGVvZiB0aGlzLm56UGxhY2VIb2xkZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLmlzQ3VzdG9tUGxhY2VIb2xkZXIgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChjaGFuZ2VzLm56TG9jYWxlKSB7IC8vIFRoZSBuekxvY2FsZSBpcyBjdXJyZW50bHkgaGFuZGxlZCBieSB1c2VyXG4gICAgICB0aGlzLnNldERlZmF1bHRQbGFjZUhvbGRlcigpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveWVkJC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95ZWQkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBjbG9zZU92ZXJsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5waWNrZXIuaGlkZU92ZXJsYXkoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21tb24gaGFuZGxlIGZvciB2YWx1ZSBjaGFuZ2VzXG4gICAqIEBwYXJhbSB2YWx1ZSBjaGFuZ2VkIHZhbHVlXG4gICAqL1xuICBvblZhbHVlQ2hhbmdlKHZhbHVlOiBDb21wYXRpYmxlVmFsdWUpOiB2b2lkIHtcbiAgICB0aGlzLm56VmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICBpZiAoKHRoaXMubnpWYWx1ZSBhcyBDYW5keURhdGVbXSkubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbihbIHRoaXMubnpWYWx1ZVsgMCBdLm5hdGl2ZURhdGUsIHRoaXMubnpWYWx1ZVsgMSBdLm5hdGl2ZURhdGUgXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4oW10pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5uelZhbHVlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2VGbigodGhpcy5uelZhbHVlIGFzIENhbmR5RGF0ZSkubmF0aXZlRGF0ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlRm4obnVsbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMub25Ub3VjaGVkRm4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmlnZ2VyZWQgd2hlbiBvdmVybGF5T3BlbiBjaGFuZ2VzIChkaWZmZXJlbnQgd2l0aCByZWFsT3BlblN0YXRlKVxuICAgKiBAcGFyYW0gb3BlbiBUaGUgb3ZlcmxheU9wZW4gaW4gcGlja2VyIGNvbXBvbmVudFxuICAgKi9cbiAgb25PcGVuQ2hhbmdlKG9wZW46IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XG4gIH1cblxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBDb250cm9sIHZhbHVlIGFjY2Vzc29yIGltcGxlbWVudHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gTk9URTogb25DaGFuZ2VGbi9vblRvdWNoZWRGbiB3aWxsIG5vdCBiZSBhc3NpZ25lZCBpZiB1c2VyIG5vdCB1c2UgYXMgbmdNb2RlbFxuICBvbkNoYW5nZUZuOiAodmFsOiBDb21wYXRpYmxlRGF0ZSkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcbiAgb25Ub3VjaGVkRm46ICgpID0+IHZvaWQgPSAoKSA9PiB2b2lkIDA7XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogQ29tcGF0aWJsZURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLnNldFZhbHVlKHZhbHVlKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIHRoaXMub25DaGFuZ2VGbiA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQgeyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICAgIHRoaXMub25Ub3VjaGVkRm4gPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxuXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IEludGVybmFsIG1ldGhvZHNcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gUmVsb2FkIGxvY2FsZSBmcm9tIGkxOG4gd2l0aCBzaWRlIGVmZmVjdHNcbiAgcHJpdmF0ZSBzZXRMb2NhbGUoKTogdm9pZCB7XG4gICAgdGhpcy5uekxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdEYXRlUGlja2VyJywge30pO1xuICAgIHRoaXMuc2V0RGVmYXVsdFBsYWNlSG9sZGVyKCk7XG4gIH1cblxuICBwcml2YXRlIHNldERlZmF1bHRQbGFjZUhvbGRlcigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21QbGFjZUhvbGRlciAmJiB0aGlzLm56TG9jYWxlKSB7XG4gICAgICB0aGlzLm56UGxhY2VIb2xkZXIgPSB0aGlzLmlzUmFuZ2UgPyB0aGlzLm56TG9jYWxlLmxhbmcucmFuZ2VQbGFjZWhvbGRlciA6IHRoaXMubnpMb2NhbGUubGFuZy5wbGFjZWhvbGRlcjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGZvcm1hdERhdGUoZGF0ZTogQ2FuZHlEYXRlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZGF0ZSA/IHRoaXMuaTE4bi5mb3JtYXREYXRlQ29tcGF0aWJsZShkYXRlLm5hdGl2ZURhdGUsIHRoaXMubnpGb3JtYXQpIDogJyc7XG4gIH1cblxuICAvLyBTYWZlIHdheSBvZiBzZXR0aW5nIHZhbHVlIHdpdGggZGVmYXVsdFxuICBwcml2YXRlIHNldFZhbHVlKHZhbHVlOiBDb21wYXRpYmxlRGF0ZSk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzUmFuZ2UpIHtcbiAgICAgIHRoaXMubnpWYWx1ZSA9IHZhbHVlID8gKHZhbHVlIGFzIERhdGVbXSkubWFwKHZhbCA9PiBuZXcgQ2FuZHlEYXRlKHZhbCkpIDogW107XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnpWYWx1ZSA9IHZhbHVlID8gbmV3IENhbmR5RGF0ZSh2YWx1ZSBhcyBEYXRlKSA6IG51bGw7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCB0eXBlIENvbXBhdGlibGVWYWx1ZSA9IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdO1xuXG5leHBvcnQgdHlwZSBDb21wYXRpYmxlRGF0ZSA9IERhdGUgfCBEYXRlW107XG4iXX0=