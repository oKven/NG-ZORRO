/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { DateRangePickerComponent } from './date-range-picker.component';
export class NzWeekPickerComponent extends DateRangePickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        super(i18n);
        this.showWeek = true;
    }
}
NzWeekPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-week-picker',
                template: "<nz-picker\n  [isRange]=\"isRange\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"pickerStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <date-range-popup *ngIf=\"realOpenState\"\n    [isRange]=\"isRange\"\n    [showWeek]=\"showWeek\"\n    [panelMode]=\"nzMode\"\n    (panelModeChange)=\"nzOnPanelChange.emit($event)\"\n    [value]=\"nzValue\"\n    (valueChange)=\"onValueChange($event)\"\n    [locale]=\"nzLocale?.lang\"\n    [showToday]=\"realShowToday\"\n    [showTime]=\"nzShowTime\"\n    [format]=\"nzFormat\"\n    [dateRender]=\"nzDateRender\"\n    [disabledDate]=\"nzDisabledDate\"\n    [disabledTime]=\"nzDisabledTime\"\n    [placeholder]=\"nzPlaceHolder\"\n    [dropdownClassName]=\"nzDropdownClassName\"\n    [popupStyle]=\"nzPopupStyle\"\n    [extraFooter]=\"extraFooter\"\n    [ranges]=\"nzRanges\"\n    (resultOk)=\"onResultOk()\"\n    (closePicker)=\"closeOverlay()\"\n  ></date-range-popup>\n</nz-picker>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => NzWeekPickerComponent)
                    }],
                host: {
                    '[class.ant-calendar-picker]': 'true'
                }
            }] }
];
/** @nocollapse */
NzWeekPickerComponent.ctorParameters = () => [
    { type: NzI18nService }
];
function NzWeekPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzWeekPickerComponent.prototype.showWeek;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2Vlay1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL3dlZWstcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBZXpFLE1BQU0sT0FBTyxxQkFBc0IsU0FBUSx3QkFBd0I7Ozs7SUFFakUsWUFBWSxJQUFtQjtRQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFGZCxnQkFBb0IsSUFBSSxDQUFDO0tBR3hCOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxnQkFBZ0I7Z0JBQzdCLDRxQ0FBaUQ7Z0JBQ2pELFNBQVMsRUFBSSxDQUFFO3dCQUNiLE9BQU8sRUFBTSxpQkFBaUI7d0JBQzlCLEtBQUssRUFBUSxJQUFJO3dCQUNqQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNyRCxDQUFFO2dCQUNILElBQUksRUFBUztvQkFDWCw2QkFBNkIsRUFBRSxNQUFNO2lCQUN0QzthQUNGOzs7O1lBZlEsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGZvcndhcmRSZWYsIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LXdlZWstcGlja2VyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFsge1xuICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICBtdWx0aSAgICAgIDogdHJ1ZSxcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOeldlZWtQaWNrZXJDb21wb25lbnQpXG4gIH0gXSxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOeldlZWtQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQge1xuICBzaG93V2VlazogYm9vbGVhbiA9IHRydWU7XG4gIGNvbnN0cnVjdG9yKGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgICBzdXBlcihpMThuKTtcbiAgfVxufVxuIl19