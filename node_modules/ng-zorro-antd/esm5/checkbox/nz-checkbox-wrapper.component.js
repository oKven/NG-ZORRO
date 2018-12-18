/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
var NzCheckboxWrapperComponent = /** @class */ (function () {
    function NzCheckboxWrapperComponent() {
        this.nzOnChange = new EventEmitter();
        this.checkboxList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.addCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.push(value);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.removeCheckbox = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checkboxList.splice(this.checkboxList.indexOf(value), 1);
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.outputValue = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var checkedList = this.checkboxList.filter(function (item) { return item.nzChecked; });
        return checkedList.map(function (item) { return item.nzValue; });
    };
    /**
     * @return {?}
     */
    NzCheckboxWrapperComponent.prototype.onChange = /**
     * @return {?}
     */
    function () {
        this.nzOnChange.emit(this.outputValue());
    };
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
    return NzCheckboxWrapperComponent;
}());
export { NzCheckboxWrapperComponent };
function NzCheckboxWrapperComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.nzOnChange;
    /** @type {?} */
    NzCheckboxWrapperComponent.prototype.checkboxList;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2hlY2tib3gvbnotY2hlY2tib3gtd3JhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7O1FBZTFHLGtCQUFnQyxJQUFJLFlBQVksRUFBWSxDQUFDOzRCQUNmLEVBQUU7Ozs7OztJQUVoRCxnREFBVzs7OztJQUFYLFVBQVksS0FBMEI7UUFDcEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDL0I7Ozs7O0lBRUQsbURBQWM7Ozs7SUFBZCxVQUFlLEtBQTBCO1FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0tBQy9EOzs7O0lBRUQsZ0RBQVc7OztJQUFYOztRQUNFLElBQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFNBQVMsRUFBZCxDQUFjLENBQUMsQ0FBQztRQUNyRSxPQUFPLFdBQVcsQ0FBQyxHQUFHLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsT0FBTyxFQUFaLENBQVksQ0FBQyxDQUFDO0tBQzlDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7S0FDMUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLHFCQUFxQjtvQkFDMUMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxxQ0FBMkQ7b0JBQzNELElBQUksRUFBaUI7d0JBQ25CLDRCQUE0QixFQUFFLE1BQU07cUJBQ3JDO2lCQUNGOzs7NkJBRUUsTUFBTTs7cUNBZlQ7O1NBY2EsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBPdXRwdXQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56Q2hlY2tib3hDb21wb25lbnQgfSBmcm9tICcuL256LWNoZWNrYm94LmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY2hlY2tib3gtd3JhcHBlcicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNoZWNrYm94LXdyYXBwZXIuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2hlY2tib3gtZ3JvdXBdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDaGVja2JveFdyYXBwZXJDb21wb25lbnQge1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIHByaXZhdGUgY2hlY2tib3hMaXN0OiBOekNoZWNrYm94Q29tcG9uZW50W10gPSBbXTtcblxuICBhZGRDaGVja2JveCh2YWx1ZTogTnpDaGVja2JveENvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMuY2hlY2tib3hMaXN0LnB1c2godmFsdWUpO1xuICB9XG5cbiAgcmVtb3ZlQ2hlY2tib3godmFsdWU6IE56Q2hlY2tib3hDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrYm94TGlzdC5zcGxpY2UodGhpcy5jaGVja2JveExpc3QuaW5kZXhPZih2YWx1ZSksIDEpO1xuICB9XG5cbiAgb3V0cHV0VmFsdWUoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGNoZWNrZWRMaXN0ID0gdGhpcy5jaGVja2JveExpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5uekNoZWNrZWQpO1xuICAgIHJldHVybiBjaGVja2VkTGlzdC5tYXAoaXRlbSA9PiBpdGVtLm56VmFsdWUpO1xuICB9XG5cbiAgb25DaGFuZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5uek9uQ2hhbmdlLmVtaXQodGhpcy5vdXRwdXRWYWx1ZSgpKTtcbiAgfVxufVxuIl19