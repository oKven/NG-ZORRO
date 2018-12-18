/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
export class NzCheckboxWrapperComponent {
    constructor() {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addCheckbox(value) {
        this.checkboxList.push(value);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    removeCheckbox(value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    }
    /**
     * @return {?}
     */
    outputValue() {
        /** @type {?} */
        const checkedList = this.checkboxList.filter(item => item.nzChecked);
        return checkedList.map(item => item.nzValue);
    }
    /**
     * @return {?}
     */
    onChange() {
        this.nzOnChange.emit(this.outputValue());
    }
}
NzCheckboxWrapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-checkbox-wrapper',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-checkbox-group]': 'true'
                }
            }] }
];
NzCheckboxWrapperComponent.propDecorators = {
    nzOnChange: [{ type: Output }]
};
function NzCheckboxWrapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2hlY2tib3gvbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQWM1RyxNQUFNLE9BQU8sMEJBQTBCOztRQUNyQyxrQkFBZ0MsSUFBSSxZQUFZLEVBQVksQ0FBQzs0QkFDZixFQUFFOzs7Ozs7SUFFaEQsV0FBVyxDQUFDLEtBQTBCO1FBQ3BDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQy9COzs7OztJQUVELGNBQWMsQ0FBQyxLQUEwQjtRQUN2QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMvRDs7OztJQUVELFdBQVc7O1FBQ1QsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckUsT0FBTyxXQUFXLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQzlDOzs7O0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO0tBQzFDOzs7WUE3QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxxQkFBcUI7Z0JBQzFDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MscUNBQTJEO2dCQUMzRCxJQUFJLEVBQWlCO29CQUNuQiw0QkFBNEIsRUFBRSxNQUFNO2lCQUNyQzthQUNGOzs7eUJBRUUsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgT3V0cHV0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi9uei1jaGVja2JveC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNoZWNrYm94LXdyYXBwZXInLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jaGVja2JveC13cmFwcGVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWNoZWNrYm94LWdyb3VwXSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56Q2hlY2tib3hXcmFwcGVyQ29tcG9uZW50IHtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZ1tdPigpO1xuICBwcml2YXRlIGNoZWNrYm94TGlzdDogTnpDaGVja2JveENvbXBvbmVudFtdID0gW107XG5cbiAgYWRkQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5wdXNoKHZhbHVlKTtcbiAgfVxuXG4gIHJlbW92ZUNoZWNrYm94KHZhbHVlOiBOekNoZWNrYm94Q29tcG9uZW50KTogdm9pZCB7XG4gICAgdGhpcy5jaGVja2JveExpc3Quc3BsaWNlKHRoaXMuY2hlY2tib3hMaXN0LmluZGV4T2YodmFsdWUpLCAxKTtcbiAgfVxuXG4gIG91dHB1dFZhbHVlKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBjaGVja2VkTGlzdCA9IHRoaXMuY2hlY2tib3hMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0ubnpDaGVja2VkKTtcbiAgICByZXR1cm4gY2hlY2tlZExpc3QubWFwKGl0ZW0gPT4gaXRlbS5uelZhbHVlKTtcbiAgfVxuXG4gIG9uQ2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMubnpPbkNoYW5nZS5lbWl0KHRoaXMub3V0cHV0VmFsdWUoKSk7XG4gIH1cbn1cbiJdfQ==