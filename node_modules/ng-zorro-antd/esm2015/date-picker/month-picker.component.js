/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { HeaderPickerComponent } from './header-picker.component';
export class NzMonthPickerComponent extends HeaderPickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        super(i18n);
        this.nzFormat = 'yyyy-MM';
        this.endPanelMode = 'month';
    }
}
NzMonthPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-month-picker',
                template: "<nz-picker\n  [isRange]=\"false\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"nzStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"nzDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"nzValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"nzLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-picker>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => NzMonthPickerComponent)
                    }],
                host: {
                    '[class.ant-calendar-picker]': 'true'
                }
            }] }
];
/** @nocollapse */
NzMonthPickerComponent.ctorParameters = () => [
    { type: NzI18nService }
];
NzMonthPickerComponent.propDecorators = {
    nzFormat: [{ type: Input }]
};
function NzMonthPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMonthPickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzMonthPickerComponent.prototype.endPanelMode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9udGgtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9tb250aC1waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxxQkFBcUIsRUFBc0IsTUFBTSwyQkFBMkIsQ0FBQztBQWV0RixNQUFNLE9BQU8sc0JBQXVCLFNBQVEscUJBQXFCOzs7O0lBSS9ELFlBQVksSUFBbUI7UUFDN0IsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBSmQsZ0JBQTRCLFNBQVMsQ0FBQztRQUV0QyxvQkFBbUMsT0FBTyxDQUFDO0tBRzFDOzs7WUFuQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLDg4Q0FBNkM7Z0JBQzdDLFNBQVMsRUFBRSxDQUFDO3dCQUNWLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLEtBQUssRUFBRSxJQUFJO3dCQUNYLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUM7cUJBQ3RELENBQUM7Z0JBQ0YsSUFBSSxFQUFpQjtvQkFDbkIsNkJBQTZCLEVBQUUsTUFBTTtpQkFDdEM7YUFDRjs7OztZQWZRLGFBQWE7Ozt1QkFrQm5CLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3J3YXJkUmVmLCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5cbmltcG9ydCB7IEhlYWRlclBpY2tlckNvbXBvbmVudCwgU3VwcG9ydEhlYWRlclBhbmVsIH0gZnJvbSAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ256LW1vbnRoLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIG11bHRpOiB0cnVlLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56TW9udGhQaWNrZXJDb21wb25lbnQpXG4gIH1dLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2FsZW5kYXItcGlja2VyXSc6ICd0cnVlJ1xuICB9XG59KVxuXG5leHBvcnQgY2xhc3MgTnpNb250aFBpY2tlckNvbXBvbmVudCBleHRlbmRzIEhlYWRlclBpY2tlckNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG56Rm9ybWF0OiBzdHJpbmcgPSAneXl5eS1NTSc7XG5cbiAgZW5kUGFuZWxNb2RlOiBTdXBwb3J0SGVhZGVyUGFuZWwgPSAnbW9udGgnO1xuICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gICAgc3VwZXIoaTE4bik7XG4gIH1cbn1cbiJdfQ==