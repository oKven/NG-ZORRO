/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';
export class NzLayoutComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    destroySider() {
        this.renderer.removeClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
    }
    /**
     * @return {?}
     */
    initSider() {
        this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
    }
}
NzLayoutComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-layout',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-layout]': 'true'
                }
            }] }
];
/** @nocollapse */
NzLayoutComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
function NzLayoutComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzLayoutComponent.prototype.elementRef;
    /** @type {?} */
    NzLayoutComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJsYXlvdXQvbnotbGF5b3V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBWTdHLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBVTVCLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7S0FDdEU7Ozs7SUFURCxZQUFZO1FBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztLQUNsRjs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO0tBQy9FOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxXQUFXO2dCQUNoQyxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLHFDQUFpRDtnQkFDakQsSUFBSSxFQUFpQjtvQkFDbkIsb0JBQW9CLEVBQUUsTUFBTTtpQkFDN0I7YUFDRjs7OztZQVg0QyxVQUFVO1lBQUUsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1sYXlvdXQnLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1sYXlvdXQuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtbGF5b3V0XSc6ICd0cnVlJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56TGF5b3V0Q29tcG9uZW50IHtcblxuICBkZXN0cm95U2lkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1sYXlvdXQtaGFzLXNpZGVyJyk7XG4gIH1cblxuICBpbml0U2lkZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1sYXlvdXQtaGFzLXNpZGVyJyk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG59XG4iXX0=