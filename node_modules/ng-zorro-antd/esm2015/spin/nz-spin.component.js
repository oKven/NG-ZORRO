/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { isEmpty, isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
export class NzSpinComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.spinning$ = new BehaviorSubject(true);
        this.debounceSpinning$ = this.spinning$.asObservable().pipe(debounceTime(0));
        this.nzSize = 'default';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDelay(value) {
        if (isNotNil(value)) {
            this.debounceSpinning$ = this.spinning$.asObservable().pipe(debounceTime(value));
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSpinning(value) {
        this.spinning$.next(toBoolean(value));
    }
    /**
     * @return {?}
     */
    checkNested() {
        /** @type {?} */
        const el = this.elementRef.nativeElement;
        /** @type {?} */
        const containerElement = this.containerElement.nativeElement;
        /** @type {?} */
        const nestedElement = this.nestedElement.nativeElement;
        /** no way to detect empty https://github.com/angular/angular/issues/12530 **/
        /** https://github.com/angular/material2/issues/11280 **/
        if (!isEmpty(containerElement)) {
            this.renderer.removeStyle(containerElement, 'display');
            this.renderer.setStyle(el, 'display', 'block');
            this.renderer.addClass(nestedElement, 'ant-spin-nested-loading');
        }
        else {
            this.renderer.setStyle(containerElement, 'display', 'none');
            this.renderer.removeStyle(el, 'display');
            this.renderer.removeClass(nestedElement, 'ant-spin-nested-loading');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.checkNested();
    }
}
NzSpinComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-spin',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template #defaultIndicatorTemplate>\n  <span class=\"ant-spin-dot\"\n    [class.ant-spin-dot-spin]=\"(debounceSpinning$ | async) === true\">\n    <i></i><i></i><i></i><i></i>\n  </span>\n</ng-template>\n<div #nestedElement>\n  <div [hidden]=\"!((debounceSpinning$ | async) === true)\">\n    <div class=\"ant-spin\"\n      [class.ant-spin-spinning]=\"(debounceSpinning$ | async) === true\"\n      [class.ant-spin-lg]=\"nzSize === 'large'\"\n      [class.ant-spin-sm]=\"nzSize === 'small'\"\n      [class.ant-spin-show-text]=\"nzTip\">\n      <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\n      <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\n    </div>\n  </div>\n  <div #containerElement\n    class=\"ant-spin-container\"\n    [class.ant-spin-blur]=\"(debounceSpinning$ | async) === true\"\n    (cdkObserveContent)=\"checkNested()\">\n    <ng-content></ng-content>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
NzSpinComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzSpinComponent.propDecorators = {
    containerElement: [{ type: ViewChild, args: ['containerElement',] }],
    nestedElement: [{ type: ViewChild, args: ['nestedElement',] }],
    nzIndicator: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTip: [{ type: Input }],
    nzDelay: [{ type: Input }],
    nzSpinning: [{ type: Input }]
};
function NzSpinComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSpinComponent.prototype.spinning$;
    /** @type {?} */
    NzSpinComponent.prototype.debounceSpinning$;
    /** @type {?} */
    NzSpinComponent.prototype.containerElement;
    /** @type {?} */
    NzSpinComponent.prototype.nestedElement;
    /** @type {?} */
    NzSpinComponent.prototype.nzIndicator;
    /** @type {?} */
    NzSpinComponent.prototype.nzSize;
    /** @type {?} */
    NzSpinComponent.prototype.nzTip;
    /** @type {?} */
    NzSpinComponent.prototype.elementRef;
    /** @type {?} */
    NzSpinComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3Bpbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3Bpbi9uei1zcGluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFTakQsTUFBTSxPQUFPLGVBQWU7Ozs7O0lBc0MxQixZQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBckN2RSxpQkFBWSxJQUFJLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0Qyx5QkFBeUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFJN0YsY0FBa0IsU0FBUyxDQUFDO0tBaUMzQjs7Ozs7SUE5QkQsSUFDSSxPQUFPLENBQUMsS0FBYTtRQUN2QixJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7U0FDbEY7S0FDRjs7Ozs7SUFFRCxJQUNJLFVBQVUsQ0FBQyxLQUFjO1FBQzNCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0tBQ3ZDOzs7O0lBRUQsV0FBVzs7UUFDVCxNQUFNLEVBQUUsR0FBZ0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7O1FBQ3RELE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQzs7UUFDN0QsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUM7OztRQUd2RCxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDdkQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNsRTthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUseUJBQXlCLENBQUMsQ0FBQztTQUNyRTtLQUNGOzs7O0lBS0QsZUFBZTtRQUNiLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztLQUNwQjs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsU0FBUztnQkFDOUIsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7Z0JBQzNDLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxnOEJBQStDO2FBQ2hEOzs7O1lBbkJDLFVBQVU7WUFFVixTQUFTOzs7K0JBcUJSLFNBQVMsU0FBQyxrQkFBa0I7NEJBQzVCLFNBQVMsU0FBQyxlQUFlOzBCQUN6QixLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztzQkFFTCxLQUFLO3lCQU9MLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBpc0VtcHR5LCBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc3BpbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXNwaW4uY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U3BpbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBzcGlubmluZyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KHRydWUpO1xuICBkZWJvdW5jZVNwaW5uaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPiA9IHRoaXMuc3Bpbm5pbmckLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKDApKTtcbiAgQFZpZXdDaGlsZCgnY29udGFpbmVyRWxlbWVudCcpIGNvbnRhaW5lckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ25lc3RlZEVsZW1lbnQnKSBuZXN0ZWRFbGVtZW50OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBuekluZGljYXRvcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpUaXA6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpEZWxheSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5kZWJvdW5jZVNwaW5uaW5nJCA9IHRoaXMuc3Bpbm5pbmckLmFzT2JzZXJ2YWJsZSgpLnBpcGUoZGVib3VuY2VUaW1lKHZhbHVlKSk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U3Bpbm5pbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLnNwaW5uaW5nJC5uZXh0KHRvQm9vbGVhbih2YWx1ZSkpO1xuICB9XG5cbiAgY2hlY2tOZXN0ZWQoKTogdm9pZCB7XG4gICAgY29uc3QgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY29udGFpbmVyRWxlbWVudCA9IHRoaXMuY29udGFpbmVyRWxlbWVudC5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IG5lc3RlZEVsZW1lbnQgPSB0aGlzLm5lc3RlZEVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAvKiogbm8gd2F5IHRvIGRldGVjdCBlbXB0eSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xMjUzMCAqKi9cbiAgICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL2lzc3Vlcy8xMTI4MCAqKi9cbiAgICBpZiAoIWlzRW1wdHkoY29udGFpbmVyRWxlbWVudCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoY29udGFpbmVyRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKG5lc3RlZEVsZW1lbnQsICdhbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGNvbnRhaW5lckVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUoZWwsICdkaXNwbGF5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKG5lc3RlZEVsZW1lbnQsICdhbnQtc3Bpbi1uZXN0ZWQtbG9hZGluZycpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XG4gICAgdGhpcy5jaGVja05lc3RlZCgpO1xuICB9XG59XG4iXX0=