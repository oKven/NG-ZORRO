/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { forwardRef, Component, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { HeaderPickerComponent } from './header-picker.component';
export class NzYearPickerComponent extends HeaderPickerComponent {
    /**
     * @param {?} i18n
     */
    constructor(i18n) {
        super(i18n);
        this.nzFormat = 'yyyy';
        this.endPanelMode = 'year';
    }
}
NzYearPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-year-picker',
                template: "<nz-picker\n  [isRange]=\"false\"\n  [value]=\"nzValue\"\n  (valueChange)=\"onValueChange($event)\"\n  [open]=\"nzOpen\"\n  [disabled]=\"nzDisabled\"\n  [format]=\"nzFormat\"\n  [allowClear]=\"nzAllowClear\"\n  [autoFocus]=\"nzAutoFocus\"\n  [className]=\"nzClassName\"\n  [placeholder]=\"nzPlaceHolder\"\n  [size]=\"nzSize\"\n  [style]=\"nzStyle\"\n  (openChange)=\"onOpenChange($event)\"\n>\n  <div *ngIf=\"realOpenState\">\n    <div class=\"ant-calendar-picker-container {{ nzDropdownClassName }} ant-calendar-picker-container-placement-bottomLeft\" [ngStyle]=\"nzPopupStyle\">\n      <div class=\"ant-calendar ant-calendar-month ant-calendar-month-calendar\" tabindex=\"0\">\n        <div class=\"ant-calendar-month-calendar-content\">\n          <div class=\"ant-calendar-month-header-wrap\">\n            <calendar-header\n              [disabledMonth]=\"nzDisabledDate\"\n              [panelMode]=\"panelMode\"\n              (panelModeChange)=\"onPanelModeChange($event)\"\n              [value]=\"nzValue\"\n              (chooseYear)=\"onChooseValue('year', $event)\"\n              (chooseMonth)=\"onChooseValue('month', $event)\"\n              [locale]=\"nzLocale.lang\"\n              [enablePrev]=\"true\"\n              [enableNext]=\"true\"\n            ></calendar-header>\n          </div>\n          <calendar-footer *ngIf=\"extraFooter\" [extraFooter]=\"extraFooter\"></calendar-footer>\n        </div>\n      </div>\n    </div>\n  </div>\n</nz-picker>",
                providers: [{
                        provide: NG_VALUE_ACCESSOR,
                        multi: true,
                        useExisting: forwardRef(() => NzYearPickerComponent)
                    }],
                host: {
                    '[class.ant-calendar-picker]': 'true'
                }
            }] }
];
/** @nocollapse */
NzYearPickerComponent.ctorParameters = () => [
    { type: NzI18nService }
];
NzYearPickerComponent.propDecorators = {
    nzFormat: [{ type: Input }]
};
function NzYearPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzYearPickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzYearPickerComponent.prototype.endPanelMode;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWVhci1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL3llYXItcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV4RCxPQUFPLEVBQUUscUJBQXFCLEVBQXNCLE1BQU0sMkJBQTJCLENBQUM7QUFldEYsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHFCQUFxQjs7OztJQUk5RCxZQUFZLElBQW1CO1FBQzdCLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUpkLGdCQUE0QixNQUFNLENBQUM7UUFFbkMsb0JBQW1DLE1BQU0sQ0FBQztLQUd6Qzs7O1lBbkJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQiw4OENBQTZDO2dCQUM3QyxTQUFTLEVBQUUsQ0FBQzt3QkFDVixPQUFPLEVBQUUsaUJBQWlCO3dCQUMxQixLQUFLLEVBQUUsSUFBSTt3QkFDWCxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO3FCQUNyRCxDQUFDO2dCQUNGLElBQUksRUFBaUI7b0JBQ25CLDZCQUE2QixFQUFFLE1BQU07aUJBQ3RDO2FBQ0Y7Ozs7WUFmUSxhQUFhOzs7dUJBa0JuQixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiwgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQsIFN1cHBvcnRIZWFkZXJQYW5lbCB9IGZyb20gJy4vaGVhZGVyLXBpY2tlci5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduei15ZWFyLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9oZWFkZXItcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzOiBbe1xuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgIG11bHRpOiB0cnVlLFxuICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56WWVhclBpY2tlckNvbXBvbmVudClcbiAgfV0sXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYWxlbmRhci1waWNrZXJdJzogJ3RydWUnXG4gIH1cbn0pXG5cbmV4cG9ydCBjbGFzcyBOelllYXJQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBIZWFkZXJQaWNrZXJDb21wb25lbnQge1xuICBASW5wdXQoKSBuekZvcm1hdDogc3RyaW5nID0gJ3l5eXknO1xuXG4gIGVuZFBhbmVsTW9kZTogU3VwcG9ydEhlYWRlclBhbmVsID0gJ3llYXInO1xuICBjb25zdHJ1Y3RvcihpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gICAgc3VwZXIoaTE4bik7XG4gIH1cbn1cbiJdfQ==