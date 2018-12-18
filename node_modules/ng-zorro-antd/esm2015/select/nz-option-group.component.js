/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ContentChildren, Input, QueryList, TemplateRef } from '@angular/core';
import { NzOptionComponent } from './nz-option.component';
export class NzOptionGroupComponent {
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLabel(value) {
        this.isLabelString = !(value instanceof TemplateRef);
        this._label = value;
    }
    /**
     * @return {?}
     */
    get nzLabel() {
        return this._label;
    }
}
NzOptionGroupComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-option-group',
                template: "<ng-content></ng-content>"
            }] }
];
NzOptionGroupComponent.propDecorators = {
    listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
    nzLabel: [{ type: Input }]
};
function NzOptionGroupComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionGroupComponent.prototype._label;
    /** @type {?} */
    NzOptionGroupComponent.prototype.isLabelString;
    /** @type {?} */
    NzOptionGroupComponent.prototype.listOfNzOptionComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxlQUFlLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUYsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFNMUQsTUFBTSxPQUFPLHNCQUFzQjs7Ozs7SUFLakMsSUFDSSxPQUFPLENBQUMsS0FBaUM7UUFDM0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0tBQ3JCOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0tBQ3BCOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBSyxpQkFBaUI7Z0JBQzlCLHFDQUErQzthQUNoRDs7O3NDQUlFLGVBQWUsU0FBQyxpQkFBaUI7c0JBRWpDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotb3B0aW9uLWdyb3VwJyxcbiAgdGVtcGxhdGVVcmw6ICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpPcHRpb25Hcm91cENvbXBvbmVudCB7XG4gIF9sYWJlbDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIGlzTGFiZWxTdHJpbmc6IGJvb2xlYW47XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpPcHRpb25Db21wb25lbnQpIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekxhYmVsKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNMYWJlbFN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fbGFiZWwgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuekxhYmVsKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxufVxuIl19