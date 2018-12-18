/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, Input, NgZone, QueryList, Renderer2, ViewEncapsulation } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzRowComponent } from '../grid/nz-row.component';
import { NzFormExplainComponent } from './nz-form-explain.component';
/**
 * should add nz-row directive to host, track https://github.com/angular/angular/issues/8785 *
 */
export class NzFormItemComponent extends NzRowComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} nzUpdateHostClassService
     * @param {?} mediaMatcher
     * @param {?} ngZone
     * @param {?} platform
     * @param {?} cdr
     */
    constructor(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform, cdr) {
        super(elementRef, renderer, nzUpdateHostClassService, mediaMatcher, ngZone, platform);
        this.cdr = cdr;
        this._flex = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFlex(value) {
        this._flex = toBoolean(value);
        if (this._flex) {
            this.renderer.setStyle(this.elementRef.nativeElement, 'display', 'flex');
        }
        else {
            this.renderer.removeStyle(this.elementRef.nativeElement, 'display');
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.listOfNzFormExplainComponent) {
            this.listOfNzFormExplainComponent.changes.pipe(takeUntil(this.destroy$)).subscribe(() => {
                this.cdr.markForCheck();
            });
        }
    }
}
NzFormItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-form-item',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [NzUpdateHostClassService],
                template: "<ng-content></ng-content>",
                host: {
                    '[class.ant-form-item]': 'true',
                    '[class.ant-form-item-with-help]': 'listOfNzFormExplainComponent && (listOfNzFormExplainComponent.length>0)'
                },
                styles: [`
      nz-form-item {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormItemComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: NzUpdateHostClassService },
    { type: MediaMatcher },
    { type: NgZone },
    { type: Platform },
    { type: ChangeDetectorRef }
];
NzFormItemComponent.propDecorators = {
    listOfNzFormExplainComponent: [{ type: ContentChildren, args: [NzFormExplainComponent, { descendants: true },] }],
    nzFlex: [{ type: Input }]
};
function NzFormItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormItemComponent.prototype._flex;
    /** @type {?} */
    NzFormItemComponent.prototype.listOfNzFormExplainComponent;
    /** @type {?} */
    NzFormItemComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0taXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsS0FBSyxFQUNMLE1BQU0sRUFFTixTQUFTLEVBQ1QsU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztBQXNCckUsTUFBTSxPQUFPLG1CQUFvQixTQUFRLGNBQWM7Ozs7Ozs7Ozs7SUFjckQsWUFBWSxVQUFzQixFQUFFLFFBQW1CLEVBQUUsd0JBQWtELEVBQUUsWUFBMEIsRUFBRSxNQUFjLEVBQUUsUUFBa0IsRUFBVSxHQUFzQjtRQUN6TSxLQUFLLENBQUMsVUFBVSxFQUFFLFFBQVEsRUFBRSx3QkFBd0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBRDZGLFFBQUcsR0FBSCxHQUFHLENBQW1CO3FCQWIzTCxLQUFLO0tBZXBCOzs7OztJQVpELElBQ0ksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQzFFO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRTtLQUNGOzs7O0lBTUQsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLDRCQUE0QixFQUFFO1lBQ3JDLElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUN0RixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO2FBQ3pCLENBQUMsQ0FBQztTQUNKO0tBQ0Y7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGNBQWM7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7Z0JBQ2pELHFDQUFvRDtnQkFDcEQsSUFBSSxFQUFpQjtvQkFDbkIsdUJBQXVCLEVBQVksTUFBTTtvQkFDekMsaUNBQWlDLEVBQUUseUVBQXlFO2lCQUM3Rzt5QkFFRzs7OztLQUlEO2FBRUo7Ozs7WUFqQ0MsVUFBVTtZQUtWLFNBQVM7WUFJRix3QkFBd0I7WUFqQnhCLFlBQVk7WUFVbkIsTUFBTTtZQVRDLFFBQVE7WUFJZixpQkFBaUI7OzsyQ0F1Q2hCLGVBQWUsU0FBQyxzQkFBc0IsRUFBRSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUU7cUJBRTdELEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Um93Q29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9uei1yb3cuY29tcG9uZW50JztcbmltcG9ydCB7IE56Rm9ybUV4cGxhaW5Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQnO1xuXG4vKiogc2hvdWxkIGFkZCBuei1yb3cgZGlyZWN0aXZlIHRvIGhvc3QsIHRyYWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzg3ODUgKiovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0taXRlbScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWZvcm0taXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW1dJyAgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0td2l0aC1oZWxwXSc6ICdsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50ICYmIChsaXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50Lmxlbmd0aD4wKSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgICAgYFxuICAgICAgbnotZm9ybS1pdGVtIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUl0ZW1Db21wb25lbnQgZXh0ZW5kcyBOelJvd0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgX2ZsZXggPSBmYWxzZTtcbiAgQENvbnRlbnRDaGlsZHJlbihOekZvcm1FeHBsYWluQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56Rm9ybUV4cGxhaW5Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOekZvcm1FeHBsYWluQ29tcG9uZW50PjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpGbGV4KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZmxleCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2ZsZXgpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2ZsZXgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsIG5nWm9uZTogTmdab25lLCBwbGF0Zm9ybTogUGxhdGZvcm0sIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIG1lZGlhTWF0Y2hlciwgbmdab25lLCBwbGF0Zm9ybSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdE9mTnpGb3JtRXhwbGFpbkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5saXN0T2ZOekZvcm1FeHBsYWluQ29tcG9uZW50LmNoYW5nZXMucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG4iXX0=