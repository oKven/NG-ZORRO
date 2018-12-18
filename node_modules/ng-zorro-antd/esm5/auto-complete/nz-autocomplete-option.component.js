/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../core/util/convert';
import { scrollIntoView } from '../core/util/scroll-into-view-if-needed';
var NzOptionSelectionChange = /** @class */ (function () {
    function NzOptionSelectionChange(source, isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.source = source;
        this.isUserInput = isUserInput;
    }
    return NzOptionSelectionChange;
}());
export { NzOptionSelectionChange };
function NzOptionSelectionChange_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionSelectionChange.prototype.source;
    /** @type {?} */
    NzOptionSelectionChange.prototype.isUserInput;
}
var NzAutocompleteOptionComponent = /** @class */ (function () {
    function NzAutocompleteOptionComponent(changeDetectorRef, element) {
        this.changeDetectorRef = changeDetectorRef;
        this.element = element;
        this.nzDisabled = false;
        this.selectionChange = new EventEmitter();
        this.active = false;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.select = /**
     * @return {?}
     */
    function () {
        this.selected = true;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.deselect = /**
     * @return {?}
     */
    function () {
        this.selected = false;
        this.changeDetectorRef.markForCheck();
        this.emitSelectionChangeEvent();
    };
    /** Git display label */
    /**
     * Git display label
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.getLabel = /**
     * Git display label
     * @return {?}
     */
    function () {
        return this.nzLabel || this.nzValue.toString();
    };
    /** Set active (only styles) */
    /**
     * Set active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setActiveStyles = /**
     * Set active (only styles)
     * @return {?}
     */
    function () {
        if (!this.active) {
            this.active = true;
            this.changeDetectorRef.markForCheck();
        }
    };
    /** Unset active (only styles) */
    /**
     * Unset active (only styles)
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.setInactiveStyles = /**
     * Unset active (only styles)
     * @return {?}
     */
    function () {
        if (this.active) {
            this.active = false;
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.scrollIntoViewIfNeeded = /**
     * @return {?}
     */
    function () {
        scrollIntoView(this.element.nativeElement);
    };
    /**
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.selectViaInteraction = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.selected = !this.selected;
            if (this.selected) {
                this.setActiveStyles();
            }
            else {
                this.setInactiveStyles();
            }
            this.emitSelectionChangeEvent(true);
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @param {?=} isUserInput
     * @return {?}
     */
    NzAutocompleteOptionComponent.prototype.emitSelectionChangeEvent = /**
     * @param {?=} isUserInput
     * @return {?}
     */
    function (isUserInput) {
        if (isUserInput === void 0) { isUserInput = false; }
        this.selectionChange.emit(new NzOptionSelectionChange(this, isUserInput));
    };
    NzAutocompleteOptionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-auto-option',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-content></ng-content>",
                    host: {
                        'role': 'menuitem',
                        'class': 'ant-select-dropdown-menu-item',
                        '[class.ant-select-dropdown-menu-item-selected]': 'selected',
                        '[class.ant-select-dropdown-menu-item-active]': 'active',
                        '[class.ant-select-dropdown-menu-item-disabled]': 'nzDisabled',
                        '[attr.aria-selected]': 'selected.toString()',
                        '[attr.aria-disabled]': 'nzDisabled.toString()',
                        '(click)': 'selectViaInteraction()'
                    }
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteOptionComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: ElementRef }
    ]; };
    NzAutocompleteOptionComponent.propDecorators = {
        nzValue: [{ type: Input }],
        nzLabel: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        selectionChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteOptionComponent.prototype, "nzDisabled", void 0);
    return NzAutocompleteOptionComponent;
}());
export { NzAutocompleteOptionComponent };
function NzAutocompleteOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzValue;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzLabel;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.nzDisabled;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.active;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.selected;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzAutocompleteOptionComponent.prototype.element;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLW9wdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiYXV0by1jb21wbGV0ZS9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ04saUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFFekUsSUFBQTtJQUNFLGlDQUNTLFFBQ0E7O1FBREEsV0FBTSxHQUFOLE1BQU07UUFDTixnQkFBVyxHQUFYLFdBQVc7S0FFbkI7a0NBbkJIO0lBb0JDLENBQUE7QUFORCxtQ0FNQzs7Ozs7Ozs7SUE4QkMsdUNBQW9CLGlCQUFvQyxFQUFVLE9BQW1CO1FBQWpFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBTnJGLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsdUJBQXFDLElBQUksWUFBWSxFQUEyQixDQUFDO1FBRWpGLGNBQVMsS0FBSyxDQUFDO1FBQ2YsZ0JBQVcsS0FBSyxDQUFDO0tBR2hCOzs7O0lBRUQsOENBQU07OztJQUFOO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDckIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDOzs7O0lBRUQsZ0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO0tBQ2pDO0lBRUQsd0JBQXdCOzs7OztJQUN4QixnREFBUTs7OztJQUFSO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDaEQ7SUFFRCwrQkFBK0I7Ozs7O0lBQy9CLHVEQUFlOzs7O0lBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNoQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjtJQUVELGlDQUFpQzs7Ozs7SUFDakMseURBQWlCOzs7O0lBQWpCO1FBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3ZDO0tBQ0Y7Ozs7SUFFRCw4REFBc0I7OztJQUF0QjtRQUNFLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0tBQzVDOzs7O0lBRUQsNERBQW9COzs7SUFBcEI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztZQUMvQixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQzthQUN4QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtZQUNELElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDdkM7S0FDRjs7Ozs7SUFFTyxnRUFBd0I7Ozs7Y0FBQyxXQUE0QjtRQUE1Qiw0QkFBQSxFQUFBLG1CQUE0QjtRQUMzRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLHVCQUF1QixDQUFDLElBQUksRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDOzs7Z0JBbEY3RSxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGdCQUFnQjtvQkFDckMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxxQ0FBOEQ7b0JBQzlELElBQUksRUFBaUI7d0JBQ25CLE1BQU0sRUFBNEMsVUFBVTt3QkFDNUQsT0FBTyxFQUEyQywrQkFBK0I7d0JBQ2pGLGdEQUFnRCxFQUFFLFVBQVU7d0JBQzVELDhDQUE4QyxFQUFJLFFBQVE7d0JBQzFELGdEQUFnRCxFQUFFLFlBQVk7d0JBQzlELHNCQUFzQixFQUE0QixxQkFBcUI7d0JBQ3ZFLHNCQUFzQixFQUE0Qix1QkFBdUI7d0JBQ3pFLFNBQVMsRUFBeUMsd0JBQXdCO3FCQUMzRTtpQkFDRjs7OztnQkFwQ0MsaUJBQWlCO2dCQUVqQixVQUFVOzs7MEJBc0NULEtBQUs7MEJBQ0wsS0FBSzs2QkFDTCxLQUFLO2tDQUNMLE1BQU07OztRQURHLFlBQVksRUFBRTs7O3dDQTVDMUI7O1NBdUNhLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBzY3JvbGxJbnRvVmlldyB9IGZyb20gJy4uL2NvcmUvdXRpbC9zY3JvbGwtaW50by12aWV3LWlmLW5lZWRlZCc7XG5cbmV4cG9ydCBjbGFzcyBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzb3VyY2U6IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LFxuICAgIHB1YmxpYyBpc1VzZXJJbnB1dDogYm9vbGVhbiA9IGZhbHNlXG4gICkge1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYXV0by1vcHRpb24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdyb2xlJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJ21lbnVpdGVtJyxcbiAgICAnY2xhc3MnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdhbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1zZWxlY3RlZF0nOiAnc2VsZWN0ZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1kcm9wZG93bi1tZW51LWl0ZW0tYWN0aXZlXScgIDogJ2FjdGl2ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRyb3Bkb3duLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1thdHRyLmFyaWEtc2VsZWN0ZWRdJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnc2VsZWN0ZWQudG9TdHJpbmcoKScsXG4gICAgJ1thdHRyLmFyaWEtZGlzYWJsZWRdJyAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnbnpEaXNhYmxlZC50b1N0cmluZygpJyxcbiAgICAnKGNsaWNrKScgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdzZWxlY3RWaWFJbnRlcmFjdGlvbigpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IHtcblxuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBJbnB1dCgpIG56VmFsdWU6IGFueTtcbiAgQElucHV0KCkgbnpMYWJlbDogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOek9wdGlvblNlbGVjdGlvbkNoYW5nZT4oKTtcblxuICBhY3RpdmUgPSBmYWxzZTtcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmKSB7XG4gIH1cblxuICBzZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCgpO1xuICB9XG5cbiAgZGVzZWxlY3QoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgdGhpcy5lbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoKTtcbiAgfVxuXG4gIC8qKiBHaXQgZGlzcGxheSBsYWJlbCAqL1xuICBnZXRMYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm56TGFiZWwgfHwgdGhpcy5uelZhbHVlLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKiogU2V0IGFjdGl2ZSAob25seSBzdHlsZXMpICovXG4gIHNldEFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBVbnNldCBhY3RpdmUgKG9ubHkgc3R5bGVzKSAqL1xuICBzZXRJbmFjdGl2ZVN0eWxlcygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIHNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTogdm9pZCB7XG4gICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSAhdGhpcy5zZWxlY3RlZDtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlU3R5bGVzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEluYWN0aXZlU3R5bGVzKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmVtaXRTZWxlY3Rpb25DaGFuZ2VFdmVudCh0cnVlKTtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBlbWl0U2VsZWN0aW9uQ2hhbmdlRXZlbnQoaXNVc2VySW5wdXQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlLmVtaXQobmV3IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKHRoaXMsIGlzVXNlcklucHV0KSk7XG4gIH1cblxufVxuIl19