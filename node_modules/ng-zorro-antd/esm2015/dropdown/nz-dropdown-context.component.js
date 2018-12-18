/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
export class NzDropdownContextComponent {
    constructor() {
        this.dropDownPosition = 'bottom';
        this.open = true;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTemplateRef(value) {
        this.template = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setControl(value) {
        this.control = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDropDownPosition(value) {
        this.dropDownPosition = value;
    }
    /**
     * @return {?}
     */
    close() {
        this.open = false;
    }
    /**
     * @return {?}
     */
    afterAnimation() {
        if (!this.open) {
            this.control.close();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // TODO auto set dropdown class after the bug resolved
        /** https://github.com/angular/angular/issues/14842 **/
    }
}
NzDropdownContextComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-dropdown-context',
                animations: [
                    dropDownAnimation
                ],
                template: "<div class=\"ant-dropdown ant-dropdown-placement-bottomLeft\" [@dropDownAnimation]=\"dropDownPosition\" (@dropDownAnimation.done)=\"afterAnimation()\" *ngIf=\"open\">\n  <ng-template [ngTemplateOutlet]=\"template\"></ng-template>\n</div>",
                styles: [`
      .ant-dropdown {
        top: 100%;
        left: 0;
        position: relative;
        width: 100%;
        margin-top: 4px;
        margin-bottom: 4px;
      }
    `]
            }] }
];
function NzDropdownContextComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropdownContextComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzDropdownContextComponent.prototype.control;
    /** @type {?} */
    NzDropdownContextComponent.prototype.template;
    /** @type {?} */
    NzDropdownContextComponent.prototype.open;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZHJvcGRvd24vbnotZHJvcGRvd24tY29udGV4dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBaUIsU0FBUyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBRXRFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBdUIxRSxNQUFNLE9BQU8sMEJBQTBCOztRQUNyQyx3QkFBcUMsUUFBUSxDQUFDO1FBRzlDLFlBQU8sSUFBSSxDQUFDOzs7Ozs7SUFFWixjQUFjLENBQUMsS0FBd0I7UUFDckMsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7S0FDdkI7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQXdCO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO0tBQ3RCOzs7OztJQUVELG1CQUFtQixDQUFDLEtBQXVCO1FBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7S0FDL0I7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7S0FDbkI7Ozs7SUFFRCxjQUFjO1FBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO0tBQ0Y7Ozs7SUFFRCxlQUFlOzs7S0FHZDs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUsscUJBQXFCO2dCQUNsQyxVQUFVLEVBQUc7b0JBQ1gsaUJBQWlCO2lCQUNsQjtnQkFDRCx5UEFBbUQ7eUJBRWpEOzs7Ozs7Ozs7S0FTQzthQUVKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBOekRyb3Bkb3duU2VydmljZSB9IGZyb20gJy4vbnotZHJvcGRvd24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LWRyb3Bkb3duLWNvbnRleHQnLFxuICBhbmltYXRpb25zIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kcm9wZG93bi1jb250ZXh0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzICAgICA6IFtcbiAgICBgXG4gICAgICAuYW50LWRyb3Bkb3duIHtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpEcm9wZG93bkNvbnRleHRDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnYm90dG9tJyA9ICdib3R0b20nO1xuICBjb250cm9sOiBOekRyb3Bkb3duU2VydmljZTtcbiAgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBvcGVuID0gdHJ1ZTtcblxuICBzZXRUZW1wbGF0ZVJlZih2YWx1ZTogVGVtcGxhdGVSZWY8dm9pZD4pOiB2b2lkIHtcbiAgICB0aGlzLnRlbXBsYXRlID0gdmFsdWU7XG4gIH1cblxuICBzZXRDb250cm9sKHZhbHVlOiBOekRyb3Bkb3duU2VydmljZSk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbCA9IHZhbHVlO1xuICB9XG5cbiAgc2V0RHJvcERvd25Qb3NpdGlvbih2YWx1ZTogJ3RvcCcgfCAnYm90dG9tJyk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9IHZhbHVlO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5vcGVuID0gZmFsc2U7XG4gIH1cblxuICBhZnRlckFuaW1hdGlvbigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3Blbikge1xuICAgICAgdGhpcy5jb250cm9sLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIC8vIFRPRE8gYXV0byBzZXQgZHJvcGRvd24gY2xhc3MgYWZ0ZXIgdGhlIGJ1ZyByZXNvbHZlZFxuICAgIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNDg0MiAqKi9cbiAgfVxufVxuIl19