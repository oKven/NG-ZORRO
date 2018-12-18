/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
var TimePickerButtonComponent = /** @class */ (function () {
    function TimePickerButtonComponent() {
        this.timePickerDisabled = false;
        this.showTimePicker = false;
        this.showTimePickerChange = new EventEmitter();
        this.prefixCls = 'ant-calendar';
    }
    /**
     * @return {?}
     */
    TimePickerButtonComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.showTimePicker = !this.showTimePicker;
        this.showTimePickerChange.emit(this.showTimePicker);
    };
    TimePickerButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'time-picker-button',
                    template: "<a\n  class=\"{{ prefixCls }}-time-picker-btn {{ timePickerDisabled ? prefixCls + '-time-picker-btn-disabled' : '' }}\"\n  role=\"button\"\n  (click)=\"timePickerDisabled ? null : onClick()\"\n>\n  {{ showTimePicker ? locale.dateSelect : locale.timeSelect }}\n</a>"
                }] }
    ];
    TimePickerButtonComponent.propDecorators = {
        locale: [{ type: Input }],
        timePickerDisabled: [{ type: Input }],
        showTimePicker: [{ type: Input }],
        showTimePickerChange: [{ type: Output }]
    };
    return TimePickerButtonComponent;
}());
export { TimePickerButtonComponent };
function TimePickerButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    TimePickerButtonComponent.prototype.locale;
    /** @type {?} */
    TimePickerButtonComponent.prototype.timePickerDisabled;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePicker;
    /** @type {?} */
    TimePickerButtonComponent.prototype.showTimePickerChange;
    /** @type {?} */
    TimePickerButtonComponent.prototype.prefixCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvY2FsZW5kYXIvdGltZS1waWNrZXItYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O1FBV3JFLDBCQUF1QyxLQUFLLENBQUM7UUFFN0Msc0JBQW1DLEtBQUssQ0FBQztRQUN6Qyw0QkFBaUMsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU3RCxpQkFBb0IsY0FBYyxDQUFDOzs7OztJQUVuQywyQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztLQUNyRDs7Z0JBakJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixvUkFBZ0Q7aUJBQ2pEOzs7eUJBR0UsS0FBSztxQ0FDTCxLQUFLO2lDQUVMLEtBQUs7dUNBQ0wsTUFBTTs7b0NBZFQ7O1NBU2EseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpDYWxlbmRhckkxOG5JbnRlcmZhY2UgfSBmcm9tICcuLi8uLi8uLi9pMThuL256LWkxOG4uaW50ZXJmYWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndGltZS1waWNrZXItYnV0dG9uJyxcbiAgdGVtcGxhdGVVcmw6ICd0aW1lLXBpY2tlci1idXR0b24uY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVGltZVBpY2tlckJ1dHRvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIGxvY2FsZTogTnpDYWxlbmRhckkxOG5JbnRlcmZhY2U7XG4gIEBJbnB1dCgpIHRpbWVQaWNrZXJEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSBzaG93VGltZVBpY2tlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9ICdhbnQtY2FsZW5kYXInO1xuXG4gIG9uQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5zaG93VGltZVBpY2tlciA9ICF0aGlzLnNob3dUaW1lUGlja2VyO1xuICAgIHRoaXMuc2hvd1RpbWVQaWNrZXJDaGFuZ2UuZW1pdCh0aGlzLnNob3dUaW1lUGlja2VyKTtcbiAgfVxufVxuIl19