/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { InputBoolean } from '../core/util';
var NzDividerComponent = /** @class */ (function () {
    function NzDividerComponent(elementRef, nzUpdateHostClassService) {
        this.elementRef = elementRef;
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.nzType = 'horizontal';
        this.nzOrientation = '';
        this.nzDashed = false;
    }
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var orientationPrefix = (this.nzOrientation.length > 0) ? '-' + this.nzOrientation : this.nzOrientation;
        /** @type {?} */
        var classMap = (_a = {},
            _a['ant-divider'] = true,
            _a["ant-divider-" + this.nzType] = true,
            _a["ant-divider-with-text" + orientationPrefix] = this.nzText,
            _a["ant-divider-dashed"] = this.nzDashed,
            _a);
        this.nzUpdateHostClassService.updateHostClass(this.elementRef.nativeElement, classMap);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClass();
    };
    /**
     * @return {?}
     */
    NzDividerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClass();
    };
    NzDividerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-divider',
                    template: "<span *ngIf=\"nzText\" class=\"ant-divider-inner-text\">\n  <ng-container *nzStringTemplateOutlet=\"nzText\">{{ nzText }}</ng-container>\n</span>",
                    preserveWhitespaces: false,
                    providers: [NzUpdateHostClassService],
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzDividerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NzUpdateHostClassService }
    ]; };
    NzDividerComponent.propDecorators = {
        nzText: [{ type: Input }],
        nzType: [{ type: Input }],
        nzOrientation: [{ type: Input }],
        nzDashed: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDividerComponent.prototype, "nzDashed", void 0);
    return NzDividerComponent;
}());
export { NzDividerComponent };
function NzDividerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDividerComponent.prototype.nzText;
    /** @type {?} */
    NzDividerComponent.prototype.nzType;
    /** @type {?} */
    NzDividerComponent.prototype.nzOrientation;
    /** @type {?} */
    NzDividerComponent.prototype.nzDashed;
    /** @type {?} */
    NzDividerComponent.prototype.elementRef;
    /** @type {?} */
    NzDividerComponent.prototype.nzUpdateHostClassService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGl2aWRlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiZGl2aWRlci9uei1kaXZpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxjQUFjLENBQUM7O0lBMkIxQyw0QkFBb0IsVUFBc0IsRUFBVSx3QkFBa0Q7UUFBbEYsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFmdEcsY0FBNkMsWUFBWSxDQUFDO1FBQzFELHFCQUFnRCxFQUFFLENBQUM7UUFDbkQsZ0JBQW9DLEtBQUssQ0FBQztLQWN6Qzs7OztJQVpPLHFDQUFROzs7Ozs7UUFDZCxJQUFNLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDOztRQUMxRyxJQUFNLFFBQVE7WUFDWixHQUFFLGFBQWEsSUFBa0MsSUFBSTtZQUNyRCxHQUFFLGlCQUFlLElBQUksQ0FBQyxNQUFRLElBQW1CLElBQUk7WUFDckQsR0FBRSwwQkFBd0IsaUJBQW1CLElBQUksSUFBSSxDQUFDLE1BQU07WUFDNUQsR0FBRSxvQkFBb0IsSUFBMkIsSUFBSSxDQUFDLFFBQVE7Z0JBQzlEO1FBQ0YsSUFBSSxDQUFDLHdCQUF3QixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxRQUFRLENBQUMsQ0FBQzs7Ozs7O0lBTXpGLHdDQUFXOzs7O0lBQVgsVUFBWSxPQUFzQjtRQUNoQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7Ozs7SUFFRCxxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDakI7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFlBQVk7b0JBQ2pDLDZKQUFrRDtvQkFDbEQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsU0FBUyxFQUFZLENBQUUsd0JBQXdCLENBQUU7b0JBQ2pELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtpQkFDcEQ7Ozs7Z0JBbkJDLFVBQVU7Z0JBU0gsd0JBQXdCOzs7eUJBWTlCLEtBQUs7eUJBQ0wsS0FBSztnQ0FDTCxLQUFLOzJCQUNMLEtBQUs7OztRQUFJLFlBQVksRUFBRTs7OzZCQTNCMUI7O1NBdUJhLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1kaXZpZGVyJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZGl2aWRlci5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpEaXZpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQge1xuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelR5cGU6ICdob3Jpem9udGFsJyB8ICd2ZXJ0aWNhbCcgPSAnaG9yaXpvbnRhbCc7XG4gIEBJbnB1dCgpIG56T3JpZW50YXRpb246ICdsZWZ0JyB8ICdyaWdodCcgfCAnJyA9ICcnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEYXNoZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIHNldENsYXNzKCk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWVudGF0aW9uUHJlZml4ID0gKHRoaXMubnpPcmllbnRhdGlvbi5sZW5ndGggPiAwKSA/ICctJyArIHRoaXMubnpPcmllbnRhdGlvbiA6IHRoaXMubnpPcmllbnRhdGlvbjtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1kaXZpZGVyJyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LWRpdmlkZXItJHt0aGlzLm56VHlwZX1gIF0gICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtZGl2aWRlci13aXRoLXRleHQke29yaWVudGF0aW9uUHJlZml4fWAgXTogdGhpcy5uelRleHQsXG4gICAgICBbIGBhbnQtZGl2aWRlci1kYXNoZWRgIF0gICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uekRhc2hlZFxuICAgIH07XG4gICAgdGhpcy5uelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UudXBkYXRlSG9zdENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc01hcCk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzKCk7XG4gIH1cbn1cbiJdfQ==