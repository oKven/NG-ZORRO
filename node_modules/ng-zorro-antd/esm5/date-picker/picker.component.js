/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { NzI18nService } from '../i18n/nz-i18n.service';
var NzPickerComponent = /** @class */ (function () {
    function NzPickerComponent(i18n, changeDetector) {
        this.i18n = i18n;
        this.changeDetector = changeDetector;
        this.isRange = false;
        this.open = undefined; // "undefined" = this value will be not used
        this.valueChange = new EventEmitter();
        this.openChange = new EventEmitter(); // Emitted when overlay's open state change
        this.prefixCls = 'ant-calendar';
        this.animationOpenState = false;
        this.overlayOpen = false; // Available when "open"=undefined
        this.overlayOffsetY = 0;
        this.overlayOffsetX = -2;
        this.overlayPositions = /** @type {?} */ ([
            {
                // offsetX: -10, // TODO: What a pity, cdk/overlay current not support offset configs even though it already provide these properties
                // offsetY: -10,
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top'
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom'
            },
            {
                originX: 'end',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top'
            },
            {
                originX: 'end',
                originY: 'bottom',
                overlayX: 'end',
                overlayY: 'bottom'
            }
        ]);
        this.dropdownAnimation = 'bottom';
        this.currentPositionX = 'start';
        this.currentPositionY = 'top';
    }
    Object.defineProperty(NzPickerComponent.prototype, "realOpenState", {
        // get valueReadable(): string {
        //   return this.value && this.i18n.formatDateCompatible(this.value.nativeDate, this.format);
        // }
        get: /**
         * @return {?}
         */
        function () {
            // The value that really decide the open state of overlay
            return this.isOpenHandledByUser() ? this.open : this.overlayOpen;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (this.autoFocus) {
            if (this.isRange) {
                /** @type {?} */
                var firstInput = /** @type {?} */ ((/** @type {?} */ (this.pickerInput.nativeElement)).querySelector('input:first-child'));
                firstInput.focus(); // Focus on the first input
            }
            else {
                this.pickerInput.nativeElement.focus();
            }
        }
    };
    // Show overlay content
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.showOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.realOpenState) {
            this.overlayOpen = true;
            this.openChange.emit(this.overlayOpen);
            setTimeout(function () {
                if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                    _this.cdkConnectedOverlay.overlayRef.updatePosition();
                }
            });
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.hideOverlay = /**
     * @return {?}
     */
    function () {
        if (this.realOpenState) {
            this.overlayOpen = false;
            this.openChange.emit(this.overlayOpen);
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.onClickInputBox = /**
     * @return {?}
     */
    function () {
        if (!this.disabled && !this.isOpenHandledByUser()) {
            this.showOverlay();
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.onClickBackdrop = /**
     * @return {?}
     */
    function () {
        this.hideOverlay();
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.onOverlayDetach = /**
     * @return {?}
     */
    function () {
        this.hideOverlay();
    };
    // NOTE: A issue here, the first time position change, the animation will not be triggered.
    // Because the overlay's "positionChange" event is emitted after the content's full shown up.
    // All other components like "nz-dropdown" which depends on overlay also has the same issue.
    // See: https://github.com/NG-ZORRO/ng-zorro-antd/issues/1429
    /**
     * @param {?} position
     * @return {?}
     */
    NzPickerComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropdownAnimation = position.connectionPair.originY === 'top' ? 'bottom' : 'top';
        this.currentPositionX = /** @type {?} */ (position.connectionPair.originX);
        this.currentPositionY = /** @type {?} */ (position.connectionPair.originY);
        this.changeDetector.detectChanges(); // Take side-effects to position styles
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzPickerComponent.prototype.onClickClear = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.value = this.isRange ? [] : null;
        this.valueChange.emit(this.value);
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    NzPickerComponent.prototype.getReadableValue = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        /** @type {?} */
        var value;
        if (this.isRange) {
            value = this.value[this.getPartTypeIndex(partType)];
        }
        else {
            value = /** @type {?} */ (this.value);
        }
        return value ? this.i18n.formatDateCompatible(value.nativeDate, this.format) : null;
    };
    /**
     * @param {?} partType
     * @return {?}
     */
    NzPickerComponent.prototype.getPartTypeIndex = /**
     * @param {?} partType
     * @return {?}
     */
    function (partType) {
        return { 'left': 0, 'right': 1 }[partType];
    };
    /**
     * @param {?=} partType
     * @return {?}
     */
    NzPickerComponent.prototype.getPlaceholder = /**
     * @param {?=} partType
     * @return {?}
     */
    function (partType) {
        return this.isRange ? this.placeholder[this.getPartTypeIndex(partType)] : /** @type {?} */ (this.placeholder);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzPickerComponent.prototype.isEmptyValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.isRange) {
            return !value || !Array.isArray(value) || value.every(function (val) { return !val; });
        }
        else {
            return !value;
        }
    };
    // Whether open state is permanently controlled by user himself
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.isOpenHandledByUser = /**
     * @return {?}
     */
    function () {
        return this.open !== undefined;
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.animationStart = /**
     * @return {?}
     */
    function () {
        if (this.realOpenState) {
            this.animationOpenState = true;
        }
    };
    /**
     * @return {?}
     */
    NzPickerComponent.prototype.animationDone = /**
     * @return {?}
     */
    function () {
        this.animationOpenState = this.realOpenState;
    };
    NzPickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-picker',
                    template: "<span\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  class=\"{{ prefixCls }}-picker {{ size ? prefixCls + '-picker-' + size : '' }} {{ className }}\"\n  [ngStyle]=\"style\"\n  tabindex=\"0\"\n  (click)=\"onClickInputBox()\"\n>\n  <!-- Content of single picker -->\n  <ng-container *ngIf=\"!isRange\">\n    <input\n      #pickerInput\n      class=\"{{ prefixCls }}-picker-input ant-input\"\n      [class.ant-input-lg]=\"size === 'large'\"\n      [class.ant-input-sm]=\"size === 'small'\"\n      [class.ant-input-disabled]=\"disabled\"\n\n      [disabled]=\"disabled\"\n      readonly\n      value=\"{{ getReadableValue() }}\"\n      placeholder=\"{{ getPlaceholder() }}\"\n    />\n    <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n  </ng-container>\n\n  <!-- Content of range picker -->\n  <ng-container *ngIf=\"isRange\">\n    <span\n      #pickerInput\n      class=\"{{ prefixCls }}-picker-input ant-input\"\n      [class.ant-input-lg]=\"size === 'large'\"\n      [class.ant-input-sm]=\"size === 'small'\"\n      [class.ant-input-disabled]=\"disabled\"\n    >\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'left' }\"></ng-container>\n      <span class=\"{{ prefixCls }}-range-picker-separator\"> ~ </span>\n      <ng-container *ngTemplateOutlet=\"tplRangeInput; context: { partType: 'right' }\"></ng-container>\n      <ng-container *ngTemplateOutlet=\"tplRightRest\"></ng-container>\n    </span>\n  </ng-container>\n</span>\n\n<!-- Input for Range ONLY -->\n<ng-template #tplRangeInput let-partType=\"partType\">\n  <input\n    class=\"{{ prefixCls }}-range-picker-input\"\n    [disabled]=\"disabled\"\n    readonly\n    value=\"{{ getReadableValue(partType) }}\"\n    placeholder=\"{{ getPlaceholder(partType) }}\"\n  />\n</ng-template>\n\n<!-- Right operator icons -->\n<ng-template #tplRightRest>\n  <i\n    nz-icon\n    type=\"close-circle\"\n    theme=\"fill\"\n    *ngIf=\"!disabled && !isEmptyValue(value) && allowClear\"\n    class=\"{{ prefixCls }}-picker-clear\"\n    (click)=\"onClickClear($event)\"\n  ></i>\n  <span class=\"{{ prefixCls }}-picker-icon\">\n    <i nz-icon type=\"calendar\"></i>\n  </span>\n</ng-template>\n\n<!-- Overlay -->\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"realOpenState\"\n  [cdkConnectedOverlayHasBackdrop]=\"!isOpenHandledByUser()\"\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  (positionChange)=\"onPositionChange($event)\"\n  (backdropClick)=\"onClickBackdrop()\"\n  (detach)=\"onOverlayDetach()\"\n>\n  <div\n    [@dropDownAnimation]=\"dropdownAnimation\"\n    (@dropDownAnimation.start)=\"animationStart()\"\n    (@dropDownAnimation.done)=\"animationDone()\"\n    style=\"position: relative;\"\n    [style.left]=\"currentPositionX === 'start' ? '-2px' : '2px'\"\n    [style.top]=\"currentPositionY === 'top' ? '-2px' : '2px'\"\n  > <!-- Compatible for overlay that not support offset dynamically and immediately -->\n    <ng-content></ng-content>\n  </div>\n</ng-template>",
                    animations: [
                        dropDownAnimation
                    ],
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzPickerComponent.ctorParameters = function () { return [
        { type: NzI18nService },
        { type: ChangeDetectorRef }
    ]; };
    NzPickerComponent.propDecorators = {
        isRange: [{ type: Input }],
        open: [{ type: Input }],
        disabled: [{ type: Input }],
        placeholder: [{ type: Input }],
        allowClear: [{ type: Input }],
        autoFocus: [{ type: Input }],
        className: [{ type: Input }],
        format: [{ type: Input }],
        size: [{ type: Input }],
        style: [{ type: Input }],
        value: [{ type: Input }],
        valueChange: [{ type: Output }],
        openChange: [{ type: Output }],
        origin: [{ type: ViewChild, args: ['origin',] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        pickerInput: [{ type: ViewChild, args: ['pickerInput',] }]
    };
    return NzPickerComponent;
}());
export { NzPickerComponent };
function NzPickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPickerComponent.prototype.isRange;
    /** @type {?} */
    NzPickerComponent.prototype.open;
    /** @type {?} */
    NzPickerComponent.prototype.disabled;
    /** @type {?} */
    NzPickerComponent.prototype.placeholder;
    /** @type {?} */
    NzPickerComponent.prototype.allowClear;
    /** @type {?} */
    NzPickerComponent.prototype.autoFocus;
    /** @type {?} */
    NzPickerComponent.prototype.className;
    /** @type {?} */
    NzPickerComponent.prototype.format;
    /** @type {?} */
    NzPickerComponent.prototype.size;
    /** @type {?} */
    NzPickerComponent.prototype.style;
    /** @type {?} */
    NzPickerComponent.prototype.value;
    /** @type {?} */
    NzPickerComponent.prototype.valueChange;
    /** @type {?} */
    NzPickerComponent.prototype.openChange;
    /** @type {?} */
    NzPickerComponent.prototype.origin;
    /** @type {?} */
    NzPickerComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzPickerComponent.prototype.pickerInput;
    /** @type {?} */
    NzPickerComponent.prototype.prefixCls;
    /** @type {?} */
    NzPickerComponent.prototype.animationOpenState;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOpen;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOffsetY;
    /** @type {?} */
    NzPickerComponent.prototype.overlayOffsetX;
    /** @type {?} */
    NzPickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzPickerComponent.prototype.dropdownAnimation;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionX;
    /** @type {?} */
    NzPickerComponent.prototype.currentPositionY;
    /** @type {?} */
    NzPickerComponent.prototype.i18n;
    /** @type {?} */
    NzPickerComponent.prototype.changeDetector;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9waWNrZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsbUJBQW1CLEVBQ25CLGdCQUFnQixFQUdqQixNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7SUE0RXRELDJCQUFvQixJQUFtQixFQUFVLGNBQWlDO1FBQTlELFNBQUksR0FBSixJQUFJLENBQWU7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7UUEvRGxGLGVBQTRCLEtBQUssQ0FBQztRQUNsQyxZQUF5QixTQUFTLENBQUM7UUFXbkMsbUJBQWlDLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRTdFLGtCQUFnQyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBTTVELGlCQUFZLGNBQWMsQ0FBQztRQUMzQiwwQkFBcUIsS0FBSyxDQUFDO1FBQzNCLG1CQUF1QixLQUFLLENBQUM7UUFDN0Isc0JBQXlCLENBQUMsQ0FBQztRQUMzQixzQkFBeUIsQ0FBQyxDQUFDLENBQUM7UUFDNUIsMENBQTZDO1lBQzNDOzs7Z0JBR0UsT0FBTyxFQUFHLE9BQU87Z0JBQ2pCLE9BQU8sRUFBRyxLQUFLO2dCQUNmLFFBQVEsRUFBRSxPQUFPO2dCQUNqQixRQUFRLEVBQUUsS0FBSzthQUNoQjtZQUNEO2dCQUNFLE9BQU8sRUFBRyxPQUFPO2dCQUNqQixPQUFPLEVBQUcsUUFBUTtnQkFDbEIsUUFB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Q0wsS0FBSzt3QkFFTCxLQUFLOzhCQUNMLE1BQU07NkJBRU4sTUFBTTt5QkFFTixTQUFTLFNBQUMsUUFBUTtzQ0FDbEIsU0FBUyxTQUFDLG1CQUFtQjs4QkFDN0IsU0FBUyxTQUFDLGFBQWE7OzRCQW5EMUI7O1NBZ0NhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENka0Nvbm5lY3RlZE92ZXJsYXksXG4gIENka092ZXJsYXlPcmlnaW4sXG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2xpYi9jYW5keS1kYXRlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgIDogJ256LXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsICAgIDogJy4vcGlja2VyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9ucyAgICAgOiBbXG4gICAgZHJvcERvd25BbmltYXRpb25cbiAgXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5cbmV4cG9ydCBjbGFzcyBOelBpY2tlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCB7XG4gIEBJbnB1dCgpIGlzUmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgb3BlbjogYm9vbGVhbiA9IHVuZGVmaW5lZDsgLy8gXCJ1bmRlZmluZWRcIiA9IHRoaXMgdmFsdWUgd2lsbCBiZSBub3QgdXNlZFxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBhbGxvd0NsZWFyOiBib29sZWFuO1xuICBASW5wdXQoKSBhdXRvRm9jdXM6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBmb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KCkgc2l6ZTogJ2xhcmdlJyB8ICdzbWFsbCc7XG4gIEBJbnB1dCgpIHN0eWxlOiBvYmplY3Q7XG5cbiAgQElucHV0KCkgdmFsdWU6IENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZSB8IENhbmR5RGF0ZVtdPigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBvcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpOyAvLyBFbWl0dGVkIHdoZW4gb3ZlcmxheSdzIG9wZW4gc3RhdGUgY2hhbmdlXG5cbiAgQFZpZXdDaGlsZCgnb3JpZ2luJykgb3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoJ3BpY2tlcklucHV0JykgcGlja2VySW5wdXQ6IEVsZW1lbnRSZWY7XG5cbiAgcHJlZml4Q2xzID0gJ2FudC1jYWxlbmRhcic7XG4gIGFuaW1hdGlvbk9wZW5TdGF0ZSA9IGZhbHNlO1xuICBvdmVybGF5T3BlbjogYm9vbGVhbiA9IGZhbHNlOyAvLyBBdmFpbGFibGUgd2hlbiBcIm9wZW5cIj11bmRlZmluZWRcbiAgb3ZlcmxheU9mZnNldFk6IG51bWJlciA9IDA7XG4gIG92ZXJsYXlPZmZzZXRYOiBudW1iZXIgPSAtMjtcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gW1xuICAgIHtcbiAgICAgIC8vIG9mZnNldFg6IC0xMCwgLy8gVE9ETzogV2hhdCBhIHBpdHksIGNkay9vdmVybGF5IGN1cnJlbnQgbm90IHN1cHBvcnQgb2Zmc2V0IGNvbmZpZ3MgZXZlbiB0aG91Z2ggaXQgYWxyZWFkeSBwcm92aWRlIHRoZXNlIHByb3BlcnRpZXNcbiAgICAgIC8vIG9mZnNldFk6IC0xMCxcbiAgICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ3RvcCdcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgICB9LFxuICAgIHtcbiAgICAgIG9yaWdpblggOiAnZW5kJyxcbiAgICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xuICAgIH0sXG4gICAge1xuICAgICAgb3JpZ2luWCA6ICdlbmQnLFxuICAgICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgICAgb3ZlcmxheVg6ICdlbmQnLFxuICAgICAgb3ZlcmxheVk6ICdib3R0b20nXG4gICAgfVxuICBdIGFzIENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXTtcbiAgZHJvcGRvd25BbmltYXRpb246ICd0b3AnIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgY3VycmVudFBvc2l0aW9uWDogJ3N0YXJ0JyB8ICdlbmQnID0gJ3N0YXJ0JztcbiAgY3VycmVudFBvc2l0aW9uWTogJ3RvcCcgfCAnYm90dG9tJyA9ICd0b3AnO1xuICAvLyBnZXQgdmFsdWVSZWFkYWJsZSgpOiBzdHJpbmcge1xuICAvLyAgIHJldHVybiB0aGlzLnZhbHVlICYmIHRoaXMuaTE4bi5mb3JtYXREYXRlQ29tcGF0aWJsZSh0aGlzLnZhbHVlLm5hdGl2ZURhdGUsIHRoaXMuZm9ybWF0KTtcbiAgLy8gfVxuICBnZXQgcmVhbE9wZW5TdGF0ZSgpOiBib29sZWFuIHsgLy8gVGhlIHZhbHVlIHRoYXQgcmVhbGx5IGRlY2lkZSB0aGUgb3BlbiBzdGF0ZSBvZiBvdmVybGF5XG4gICAgcmV0dXJuIHRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpID8gdGhpcy5vcGVuIDogdGhpcy5vdmVybGF5T3BlbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmF1dG9Gb2N1cykge1xuICAgICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgICBjb25zdCBmaXJzdElucHV0ID0gKHRoaXMucGlja2VySW5wdXQubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkucXVlcnlTZWxlY3RvcignaW5wdXQ6Zmlyc3QtY2hpbGQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgICAgICBmaXJzdElucHV0LmZvY3VzKCk7IC8vIEZvY3VzIG9uIHRoZSBmaXJzdCBpbnB1dFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5waWNrZXJJbnB1dC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU2hvdyBvdmVybGF5IGNvbnRlbnRcbiAgc2hvd092ZXJsYXkoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnJlYWxPcGVuU3RhdGUpIHtcbiAgICAgIHRoaXMub3ZlcmxheU9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5vcGVuQ2hhbmdlLmVtaXQodGhpcy5vdmVybGF5T3Blbik7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZikge1xuICAgICAgICAgIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGhpZGVPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJlYWxPcGVuU3RhdGUpIHtcbiAgICAgIHRoaXMub3ZlcmxheU9wZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMub3BlbkNoYW5nZS5lbWl0KHRoaXMub3ZlcmxheU9wZW4pO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2xpY2tJbnB1dEJveCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMuaXNPcGVuSGFuZGxlZEJ5VXNlcigpKSB7XG4gICAgICB0aGlzLnNob3dPdmVybGF5KCk7XG4gICAgfVxuICB9XG5cbiAgb25DbGlja0JhY2tkcm9wKCk6IHZvaWQge1xuICAgIHRoaXMuaGlkZU92ZXJsYXkoKTtcbiAgfVxuXG4gIG9uT3ZlcmxheURldGFjaCgpOiB2b2lkIHtcbiAgICB0aGlzLmhpZGVPdmVybGF5KCk7XG4gIH1cblxuICAvLyBOT1RFOiBBIGlzc3VlIGhlcmUsIHRoZSBmaXJzdCB0aW1lIHBvc2l0aW9uIGNoYW5nZSwgdGhlIGFuaW1hdGlvbiB3aWxsIG5vdCBiZSB0cmlnZ2VyZWQuXG4gIC8vIEJlY2F1c2UgdGhlIG92ZXJsYXkncyBcInBvc2l0aW9uQ2hhbmdlXCIgZXZlbnQgaXMgZW1pdHRlZCBhZnRlciB0aGUgY29udGVudCdzIGZ1bGwgc2hvd24gdXAuXG4gIC8vIEFsbCBvdGhlciBjb21wb25lbnRzIGxpa2UgXCJuei1kcm9wZG93blwiIHdoaWNoIGRlcGVuZHMgb24gb3ZlcmxheSBhbHNvIGhhcyB0aGUgc2FtZSBpc3N1ZS5cbiAgLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMTQyOVxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3Bkb3duQW5pbWF0aW9uID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSA9PT0gJ3RvcCcgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWCA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblggYXMgJ3N0YXJ0JyB8ICdlbmQnO1xuICAgIHRoaXMuY3VycmVudFBvc2l0aW9uWSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgYXMgJ3RvcCcgfCAnYm90dG9tJztcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKTsgLy8gVGFrZSBzaWRlLWVmZmVjdHMgdG8gcG9zaXRpb24gc3R5bGVzXG4gIH1cblxuICBvbkNsaWNrQ2xlYXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuaXNSYW5nZSA/IFtdIDogbnVsbDtcbiAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XG4gIH1cblxuICBnZXRSZWFkYWJsZVZhbHVlKHBhcnRUeXBlPzogUmFuZ2VQYXJ0VHlwZSk6IHN0cmluZyB7XG4gICAgbGV0IHZhbHVlOiBDYW5keURhdGU7XG4gICAgaWYgKHRoaXMuaXNSYW5nZSkge1xuICAgICAgdmFsdWUgPSB0aGlzLnZhbHVlWyB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpIF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gdGhpcy52YWx1ZSBhcyBDYW5keURhdGU7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZSA/IHRoaXMuaTE4bi5mb3JtYXREYXRlQ29tcGF0aWJsZSh2YWx1ZS5uYXRpdmVEYXRlLCB0aGlzLmZvcm1hdCkgOiBudWxsO1xuICB9XG5cbiAgZ2V0UGFydFR5cGVJbmRleChwYXJ0VHlwZTogUmFuZ2VQYXJ0VHlwZSk6IG51bWJlciB7XG4gICAgcmV0dXJuIHsgJ2xlZnQnOiAwLCAncmlnaHQnOiAxIH1bIHBhcnRUeXBlIF07XG4gIH1cblxuICBnZXRQbGFjZWhvbGRlcihwYXJ0VHlwZT86IFJhbmdlUGFydFR5cGUpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmlzUmFuZ2UgPyB0aGlzLnBsYWNlaG9sZGVyWyB0aGlzLmdldFBhcnRUeXBlSW5kZXgocGFydFR5cGUpIF0gOiB0aGlzLnBsYWNlaG9sZGVyIGFzIHN0cmluZztcbiAgfVxuXG4gIGlzRW1wdHlWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlW10gfCBDYW5keURhdGUpOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5pc1JhbmdlKSB7XG4gICAgICByZXR1cm4gIXZhbHVlIHx8ICFBcnJheS5pc0FycmF5KHZhbHVlKSB8fCB2YWx1ZS5ldmVyeSgodmFsKSA9PiAhdmFsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICF2YWx1ZTtcbiAgICB9XG4gIH1cblxuICAvLyBXaGV0aGVyIG9wZW4gc3RhdGUgaXMgcGVybWFuZW50bHkgY29udHJvbGxlZCBieSB1c2VyIGhpbXNlbGZcbiAgaXNPcGVuSGFuZGxlZEJ5VXNlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vcGVuICE9PSB1bmRlZmluZWQ7XG4gIH1cblxuICBhbmltYXRpb25TdGFydCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5yZWFsT3BlblN0YXRlKSB7XG4gICAgICB0aGlzLmFuaW1hdGlvbk9wZW5TdGF0ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0aW9uRG9uZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFuaW1hdGlvbk9wZW5TdGF0ZSA9IHRoaXMucmVhbE9wZW5TdGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBSYW5nZVBhcnRUeXBlID0gJ2xlZnQnIHwgJ3JpZ2h0JztcbiJdfQ==