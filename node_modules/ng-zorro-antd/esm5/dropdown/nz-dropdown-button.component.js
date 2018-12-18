/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectorRef, Component, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { NzDropDownComponent } from './nz-dropdown.component';
import { NzDropDownDirective } from './nz-dropdown.directive';
var NzDropDownButtonComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzDropDownButtonComponent, _super);
    function NzDropDownButtonComponent(renderer, changeDetector) {
        var _this = _super.call(this, renderer, changeDetector) || this;
        _this.nzSize = 'default';
        _this.nzType = 'default';
        _this.nzClick = new EventEmitter();
        _this.onVisibleChange = function (visible) {
            if (_this.nzDisabled) {
                return;
            }
            if (visible) {
                _this.setTriggerWidth();
            }
            if (_this.nzVisible !== visible) {
                _this.nzVisible = visible;
                _this.nzVisibleChange.emit(_this.nzVisible);
            }
            _this.changeDetector.markForCheck();
        };
        return _this;
    }
    /** rewrite afterViewInit hook */
    /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    NzDropDownButtonComponent.prototype.ngAfterViewInit = /**
     * rewrite afterViewInit hook
     * @return {?}
     */
    function () {
        this.startSubscribe(this.$visibleChange);
    };
    NzDropDownButtonComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-dropdown-button',
                    preserveWhitespaces: false,
                    animations: [
                        dropDownAnimation
                    ],
                    template: "<div class=\"ant-btn-group ant-dropdown-button\" nz-dropdown>\n  <button\n    type=\"button\"\n    nz-button\n    [disabled]=\"nzDisabled\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    (click)=\"nzClick.emit($event)\">\n    <span><ng-content></ng-content></span>\n  </button>\n  <button\n    nz-button\n    type=\"button\"\n    class=\"ant-dropdown-trigger\"\n    [nzType]=\"nzType\"\n    [nzSize]=\"nzSize\"\n    [disabled]=\"nzDisabled\"\n    (click)=\"onClickEvent()\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\">\n    <i nz-icon type=\"ellipsis\"></i>\n  </button>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"hasBackdrop\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  [cdkConnectedOverlayOrigin]=\"nzOrigin\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  [cdkConnectedOverlayMinWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzVisible\">\n  <div\n    class=\"{{'ant-dropdown ant-dropdown-placement-'+nzPlacement}}\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseenter)=\"onMouseEnterEvent()\"\n    (mouseleave)=\"onMouseLeaveEvent()\"\n    [style.minWidth.px]=\"triggerWidth\">\n    <ng-content select=\"[nz-menu]\"></ng-content>\n  </div>\n</ng-template>",
                    styles: ["\n    :host {\n      position: relative;\n      display: inline-block;\n    }\n\n    .ant-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzDropDownButtonComponent.ctorParameters = function () { return [
        { type: Renderer2 },
        { type: ChangeDetectorRef }
    ]; };
    NzDropDownButtonComponent.propDecorators = {
        nzSize: [{ type: Input }],
        nzType: [{ type: Input }],
        content: [{ type: ViewChild, args: ['content',] }],
        nzClick: [{ type: Output }],
        nzOrigin: [{ type: ViewChild, args: [NzDropDownDirective,] }]
    };
    return NzDropDownButtonComponent;
}(NzDropDownComponent));
export { NzDropDownButtonComponent };
function NzDropDownButtonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzSize;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzType;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.content;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzClick;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.nzOrigin;
    /** @type {?} */
    NzDropDownButtonComponent.prototype.onVisibleChange;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1kcm9wZG93bi1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUUxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUEwQmYscURBQW1CO0lBcUJoRSxtQ0FBWSxRQUFtQixFQUFFLGNBQWlDO1FBQWxFLFlBQ0Usa0JBQU0sUUFBUSxFQUFFLGNBQWMsQ0FBQyxTQUNoQztRQXRCRCxlQUFrQixTQUFTLENBQUM7UUFDNUIsZUFBa0IsU0FBUyxDQUFDO1FBRTVCLGdCQUE2QixJQUFJLFlBQVksRUFBYyxDQUFDO1FBRzVELHdCQUFrQixVQUFDLE9BQWdCO1lBQ2pDLElBQUksS0FBSSxDQUFDLFVBQVUsRUFBRTtnQkFDbkIsT0FBTzthQUNSO1lBQ0QsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxLQUFJLENBQUMsU0FBUyxLQUFLLE9BQU8sRUFBRTtnQkFDOUIsS0FBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUMzQztZQUNELEtBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDcEMsQ0FBQTs7S0FJQTtJQUVELGlDQUFpQzs7Ozs7SUFDakMsbURBQWU7Ozs7SUFBZjtRQUNFLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0tBQzFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxvQkFBb0I7b0JBQ3pDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLFVBQVUsRUFBVzt3QkFDbkIsaUJBQWlCO3FCQUNsQjtvQkFDRCxpMENBQTBEOzZCQUNuQyxxUEFjdEI7aUJBQ0Y7Ozs7Z0JBL0JDLFNBQVM7Z0JBUFQsaUJBQWlCOzs7eUJBeUNoQixLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsU0FBUyxTQUFDLFNBQVM7MEJBQ25CLE1BQU07MkJBQ04sU0FBUyxTQUFDLG1CQUFtQjs7b0NBL0NoQztFQTBDK0MsbUJBQW1CO1NBQXJELHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBkcm9wRG93bkFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2Ryb3Bkb3duLWFuaW1hdGlvbnMnO1xuXG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpEcm9wRG93bkRpcmVjdGl2ZSB9IGZyb20gJy4vbnotZHJvcGRvd24uZGlyZWN0aXZlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1kcm9wZG93bi1idXR0b24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIGRyb3BEb3duQW5pbWF0aW9uXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWRyb3Bkb3duLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFsgYFxuICAgIDpob3N0IHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG5cbiAgICAuYW50LWRyb3Bkb3duIHtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG4gIGAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE56RHJvcERvd25CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOekRyb3BEb3duQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIEFmdGVyVmlld0luaXQge1xuICBASW5wdXQoKSBuelNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56VHlwZSA9ICdkZWZhdWx0JztcbiAgQFZpZXdDaGlsZCgnY29udGVudCcpIGNvbnRlbnQ7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrID0gbmV3IEV2ZW50RW1pdHRlcjxNb3VzZUV2ZW50PigpO1xuICBAVmlld0NoaWxkKE56RHJvcERvd25EaXJlY3RpdmUpIG56T3JpZ2luO1xuXG4gIG9uVmlzaWJsZUNoYW5nZSA9ICh2aXNpYmxlOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKHRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmlzaWJsZSkge1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpWaXNpYmxlICE9PSB2aXNpYmxlKSB7XG4gICAgICB0aGlzLm56VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLm56VmlzaWJsZUNoYW5nZS5lbWl0KHRoaXMubnpWaXNpYmxlKTtcbiAgICB9XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKHJlbmRlcmVyLCBjaGFuZ2VEZXRlY3Rvcik7XG4gIH1cblxuICAvKiogcmV3cml0ZSBhZnRlclZpZXdJbml0IGhvb2sgKi9cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc3RhcnRTdWJzY3JpYmUodGhpcy4kdmlzaWJsZUNoYW5nZSk7XG4gIH1cbn1cbiJdfQ==