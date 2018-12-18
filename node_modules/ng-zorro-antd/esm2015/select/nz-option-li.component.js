/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionLiComponent {
    /**
     * @param {?} elementRef
     */
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.el = this.elementRef.nativeElement;
        this.selected = false;
        this.active = false;
        this.nzShowActive = true;
        this.nzMode = 'default';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzActiveOption(value) {
        if (value) {
            this.active = this.compareWith(value.nzValue, this.nzOption.nzValue);
        }
        else {
            this.active = false;
        }
    }
    /**
     * @param {?} valueList
     * @return {?}
     */
    set nzListOfSelectedValue(valueList) {
        this.selected = isNotNil(valueList.find(v => this.compareWith(v, this.nzOption.nzValue)));
    }
}
NzOptionLiComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-option-li]',
                template: "<ng-container *ngIf=\"nzOption.nzCustomContent\">\n  <ng-template [ngTemplateOutlet]=\"nzOption.template\"></ng-template>\n  <i nz-icon *ngIf=\"nzMode !== 'default'\" type=\"check\" class=\"ant-select-selected-icon\"></i>\n</ng-container>\n<ng-container *ngIf=\"!nzOption.nzCustomContent\">\n  {{nzOption.nzLabel}}\n  <i nz-icon *ngIf=\"nzMode !== 'default'\" type=\"check\" class=\"ant-select-selected-icon\"></i>\n</ng-container>",
                host: {
                    '[class.ant-select-dropdown-menu-item]': 'true',
                    '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                    '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled && nzShowActive && !selected',
                    '[attr.unselectable]': '"unselectable"',
                    '[style.user-select]': '"none"'
                }
            }] }
];
/** @nocollapse */
NzOptionLiComponent.ctorParameters = () => [
    { type: ElementRef }
];
NzOptionLiComponent.propDecorators = {
    nzOption: [{ type: Input }],
    nzShowActive: [{ type: Input }],
    nzMode: [{ type: Input }],
    compareWith: [{ type: Input }],
    nzActiveOption: [{ type: Input }],
    nzListOfSelectedValue: [{ type: Input }]
};
function NzOptionLiComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionLiComponent.prototype.el;
    /** @type {?} */
    NzOptionLiComponent.prototype.selected;
    /** @type {?} */
    NzOptionLiComponent.prototype.active;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzOption;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzShowActive;
    /** @type {?} */
    NzOptionLiComponent.prototype.nzMode;
    /** @type {?} */
    NzOptionLiComponent.prototype.compareWith;
    /** @type {?} */
    NzOptionLiComponent.prototype.elementRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWxpLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWMxRCxNQUFNLE9BQU8sbUJBQW1COzs7O0lBeUI5QixZQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBeEIxQyxVQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxnQkFBVyxLQUFLLENBQUM7UUFDakIsY0FBUyxLQUFLLENBQUM7UUFFZixvQkFBd0IsSUFBSSxDQUFDO1FBQzdCLGNBQWtCLFNBQVMsQ0FBQztLQW9CM0I7Ozs7O0lBaEJELElBQ0ksY0FBYyxDQUFDLEtBQXdCO1FBQ3pDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN0RTthQUFNO1lBQ0wsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7U0FDckI7S0FDRjs7Ozs7SUFFRCxJQUVJLHFCQUFxQixDQUFDLFNBQWdCO1FBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzRjs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUssZ0JBQWdCO2dCQUM3QiwyYkFBNEM7Z0JBQzVDLElBQUksRUFBUztvQkFDWCx1Q0FBdUMsRUFBVyxNQUFNO29CQUN4RCxnREFBZ0QsRUFBRSxrQ0FBa0M7b0JBQ3BGLGdEQUFnRCxFQUFFLHFCQUFxQjtvQkFDdkUsOENBQThDLEVBQUksNkRBQTZEO29CQUMvRyxxQkFBcUIsRUFBNkIsZ0JBQWdCO29CQUNsRSxxQkFBcUIsRUFBNkIsUUFBUTtpQkFDM0Q7YUFDRjs7OztZQWZtQixVQUFVOzs7dUJBb0IzQixLQUFLOzJCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFFTCxLQUFLOzZCQUVMLEtBQUs7b0NBU0wsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnW256LW9wdGlvbi1saV0nLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotb3B0aW9uLWxpLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtXScgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZHJvcGRvd24tbWVudS1pdGVtLXNlbGVjdGVkXSc6ICdzZWxlY3RlZCAmJiAhbnpPcHRpb24ubnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnbnpPcHRpb24ubnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1hY3RpdmVdJyAgOiAnYWN0aXZlICYmICFuek9wdGlvbi5uekRpc2FibGVkICYmIG56U2hvd0FjdGl2ZSAmJiAhc2VsZWN0ZWQnLFxuICAgICdbYXR0ci51bnNlbGVjdGFibGVdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1widW5zZWxlY3RhYmxlXCInLFxuICAgICdbc3R5bGUudXNlci1zZWxlY3RdJyAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ1wibm9uZVwiJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uTGlDb21wb25lbnQge1xuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcbiAgYWN0aXZlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56T3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudDtcbiAgQElucHV0KCkgbnpTaG93QWN0aXZlID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpNb2RlID0gJ2RlZmF1bHQnO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoOiAobzE6IGFueSwgbzI6IGFueSkgPT4gYm9vbGVhbjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpBY3RpdmVPcHRpb24odmFsdWU6IE56T3B0aW9uQ29tcG9uZW50KSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuY29tcGFyZVdpdGgodmFsdWUubnpWYWx1ZSwgdGhpcy5uek9wdGlvbi5uelZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWVMaXN0OiBhbnlbXSkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSBpc05vdE5pbCh2YWx1ZUxpc3QuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgdGhpcy5uek9wdGlvbi5uelZhbHVlKSkpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gIH1cbn1cbiJdfQ==