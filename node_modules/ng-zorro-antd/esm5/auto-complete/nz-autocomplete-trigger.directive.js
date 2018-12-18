/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOWN_ARROW, ENTER, ESCAPE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { forwardRef, Directive, ElementRef, Inject, Input, Optional, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { delay, distinct, map } from 'rxjs/operators';
import { NzAutocompleteComponent } from './nz-autocomplete.component';
/** @type {?} */
export var NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NzAutocompleteTriggerDirective; }),
    multi: true
};
/**
 * @return {?}
 */
export function getNzAutocompleteMissingPanelError() {
    return Error('Attempting to open an undefined instance of `nz-autocomplete`. ' +
        'Make sure that the id passed to the `nzAutocomplete` is correct and that ' +
        'you\'re attempting to open it after the ngAfterContentInit hook.');
}
var NzAutocompleteTriggerDirective = /** @class */ (function () {
    function NzAutocompleteTriggerDirective(elementRef, _overlay, viewContainerRef, 
    // tslint:disable-next-line:no-any
    document) {
        this.elementRef = elementRef;
        this._overlay = _overlay;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this._onChange = function () { };
        this._onTouched = function () { };
        this.panelOpen = false;
    }
    Object.defineProperty(NzAutocompleteTriggerDirective.prototype, "activeOption", {
        /** Current active option */
        get: /**
         * Current active option
         * @return {?}
         */
        function () {
            if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
                return this.nzAutocomplete.activeItem;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyPanel();
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.setTriggerValue(value);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.openPanel = /**
     * @return {?}
     */
    function () {
        this.attachOverlay();
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.closePanel = /**
     * @return {?}
     */
    function () {
        if (this.panelOpen) {
            this.nzAutocomplete.isOpen = this.panelOpen = false;
            if (this.overlayRef && this.overlayRef.hasAttached()) {
                this.selectionChangeSubscription.unsubscribe();
                this.overlayBackdropClickSubscription.unsubscribe();
                this.overlayPositionChangeSubscription.unsubscribe();
                this.optionsChangeSubscription.unsubscribe();
                this.overlayRef.detach();
                this.overlayRef = null;
                this.portal = null;
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        /** @type {?} */
        var isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
        if (keyCode === ESCAPE) {
            event.preventDefault();
        }
        if (this.panelOpen && (keyCode === ESCAPE || keyCode === TAB)) {
            // Reset value when tab / ESC close
            if (this.activeOption && this.activeOption.getLabel() !== this.previousValue) {
                this.setTriggerValue(this.previousValue);
            }
            this.closePanel();
        }
        else if (this.panelOpen && keyCode === ENTER) {
            event.preventDefault();
            if (this.nzAutocomplete.showPanel && this.activeOption) {
                this.activeOption.selectViaInteraction();
            }
        }
        else if (this.panelOpen && isArrowKey && this.nzAutocomplete.showPanel) {
            event.stopPropagation();
            if (keyCode === UP_ARROW) {
                this.nzAutocomplete.setPreviousItemActive();
            }
            else {
                this.nzAutocomplete.setNextItemActive();
            }
            if (this.activeOption) {
                this.activeOption.scrollIntoViewIfNeeded();
            }
            this.doBackfill();
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleInput = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var target = /** @type {?} */ (event.target);
        /** @type {?} */
        var value = target.value;
        if (target.type === 'number') {
            value = value === '' ? null : parseFloat(value);
        }
        if (this.canOpen() && document.activeElement === event.target &&
            this.previousValue !== value) {
            this.previousValue = value;
            this._onChange(value);
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleFocus = /**
     * @return {?}
     */
    function () {
        if (this.canOpen()) {
            this.previousValue = this.elementRef.nativeElement.value;
            this.openPanel();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.handleBlur = /**
     * @return {?}
     */
    function () {
        this._onTouched();
    };
    /**
     * Subscription data source changes event
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOptionsChange = /**
     * Subscription data source changes event
     * @return {?}
     */
    function () {
        var _this = this;
        return this.nzAutocomplete.options.changes.pipe(delay(0)).subscribe(function () {
            _this.resetActiveItem();
        });
    };
    /**
     * Subscription option changes event and set the value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeSelectionChange = /**
     * Subscription option changes event and set the value
     * @return {?}
     */
    function () {
        var _this = this;
        return this.nzAutocomplete.selectionChange
            .subscribe(function (option) {
            _this.setValueAndClose(option);
        });
    };
    /**
     * Subscription external click and close panel
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayBackdropClick = /**
     * Subscription external click and close panel
     * @return {?}
     */
    function () {
        var _this = this;
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend'))
            .subscribe(function (event) {
            /** @type {?} */
            var clickTarget = /** @type {?} */ (event.target);
            // Make sure is not self
            if (clickTarget !== _this.elementRef.nativeElement && !_this.overlayRef.overlayElement.contains(clickTarget) && _this.panelOpen) {
                _this.closePanel();
            }
        });
    };
    /**
     * Subscription overlay position changes and reset dropdown position
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.subscribeOverlayPositionChange = /**
     * Subscription overlay position changes and reset dropdown position
     * @return {?}
     */
    function () {
        var _this = this;
        return this.positionStrategy.positionChanges
            .pipe(map(function (position) { return position.connectionPair.originY; }), distinct())
            .subscribe(function (position) {
            _this.nzAutocomplete.dropDownPosition = position;
        });
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.attachOverlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.nzAutocomplete) {
            throw getNzAutocompleteMissingPanelError();
        }
        if (!this.portal) {
            this.portal = new TemplatePortal(this.nzAutocomplete.template, this.viewContainerRef);
        }
        if (!this.overlayRef) {
            this.overlayRef = this._overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayPositionChangeSubscription = this.subscribeOverlayPositionChange();
            this.selectionChangeSubscription = this.subscribeSelectionChange();
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
            this.optionsChangeSubscription = this.subscribeOptionsChange();
        }
        this.nzAutocomplete.isOpen = this.panelOpen = true;
        this.nzAutocomplete.setVisibility();
        this.overlayRef.updateSize({ width: this.nzAutocomplete.nzWidth || this.getHostWidth() });
        setTimeout(function () {
            if (_this.overlayRef) {
                _this.overlayRef.updatePosition();
            }
        }, 150);
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.destroyPanel = /**
     * @return {?}
     */
    function () {
        if (this.overlayRef) {
            this.closePanel();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayConfig = /**
     * @return {?}
     */
    function () {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getConnectedElement = /**
     * @return {?}
     */
    function () {
        return this.elementRef;
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getHostWidth = /**
     * @return {?}
     */
    function () {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.getOverlayPosition = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this._overlay.position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.resetActiveItem = /**
     * @return {?}
     */
    function () {
        if (this.nzAutocomplete.activeItem && this.nzAutocomplete.getOptionIndex(this.nzAutocomplete.activeItem)) {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.getOptionIndex(this.nzAutocomplete.activeItem));
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setValueAndClose = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.setTriggerValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.elementRef.nativeElement.value = value || '';
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.doBackfill = /**
     * @return {?}
     */
    function () {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteTriggerDirective.prototype.canOpen = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    };
    NzAutocompleteTriggerDirective.decorators = [
        { type: Directive, args: [{
                    selector: "input[nzAutocomplete], textarea[nzAutocomplete]",
                    providers: [NZ_AUTOCOMPLETE_VALUE_ACCESSOR],
                    host: {
                        'autocomplete': 'off',
                        'aria-autocomplete': 'list',
                        '(focusin)': 'handleFocus()',
                        '(blur)': 'handleBlur()',
                        '(input)': 'handleInput($event)',
                        '(keydown)': 'handleKeydown($event)'
                    }
                },] }
    ];
    /** @nocollapse */
    NzAutocompleteTriggerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Overlay },
        { type: ViewContainerRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    NzAutocompleteTriggerDirective.propDecorators = {
        nzAutocomplete: [{ type: Input }]
    };
    return NzAutocompleteTriggerDirective;
}());
export { NzAutocompleteTriggerDirective };
function NzAutocompleteTriggerDirective_tsickle_Closure_declarations() {
    /**
     * Bind nzAutocomplete component
     * @type {?}
     */
    NzAutocompleteTriggerDirective.prototype.nzAutocomplete;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onChange;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._onTouched;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.panelOpen;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.overlayRef;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.portal;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.positionStrategy;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.previousValue;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.optionsChangeSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.overlayPositionChangeSubscription;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.elementRef;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype._overlay;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.viewContainerRef;
    /** @type {?} */
    NzAutocompleteTriggerDirective.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImF1dG8tY29tcGxldGUvbnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pGLE9BQU8sRUFFTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RSxXQUFhLDhCQUE4QixHQUFxQjtJQUM5RCxPQUFPLEVBQU0saUJBQWlCO0lBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDhCQUE4QixFQUE5QixDQUE4QixDQUFDO0lBQzdELEtBQUssRUFBUSxJQUFJO0NBQ2xCLENBQUM7Ozs7QUFFRixNQUFNLFVBQVUsa0NBQWtDO0lBQ2hE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LE9BQU8sR0FBcUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7UUFDaEUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDOzs7Z0JBMVNqRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFHLGlEQUFpRDtvQkFDNUQsU0FBUyxFQUFFLENBQUUsOEJBQThCLENBQUU7b0JBQzdDLElBQUksRUFBTzt3QkFDVCxjQUFjLEVBQU8sS0FBSzt3QkFDMUIsbUJBQW1CLEVBQUUsTUFBTTt3QkFDM0IsV0FBVyxFQUFVLGVBQWU7d0JBQ3BDLFFBQVEsRUFBYSxjQUFjO3dCQUNuQyxTQUFTLEVBQVkscUJBQXFCO3dCQUMxQyxXQUFXLEVBQVUsdUJBQXVCO3FCQUM3QztpQkFDRjs7OztnQkF2Q0MsVUFBVTtnQkFYVixPQUFPO2dCQWlCUCxnQkFBZ0I7Z0RBZ0ViLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7O2lDQTNCN0IsS0FBSzs7eUNBM0RSOztTQXdEYSw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSxcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5LFxuICBWZXJ0aWNhbENvbm5lY3Rpb25Qb3Ncbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgRWxlbWVudFJlZixcbiAgRXhpc3RpbmdQcm92aWRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgVmlld0NvbnRhaW5lclJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheSwgZGlzdGluY3QsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS1vcHRpb24uY29tcG9uZW50JztcbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUuY29tcG9uZW50JztcblxuZXhwb3J0IGNvbnN0IE5aX0FVVE9DT01QTEVURV9WQUxVRV9BQ0NFU1NPUjogRXhpc3RpbmdQcm92aWRlciA9IHtcbiAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUpLFxuICBtdWx0aSAgICAgIDogdHJ1ZVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldE56QXV0b2NvbXBsZXRlTWlzc2luZ1BhbmVsRXJyb3IoKTogRXJyb3Ige1xuICByZXR1cm4gRXJyb3IoJ0F0dGVtcHRpbmcgdG8gb3BlbiBhbiB1bmRlZmluZWQgaW5zdGFuY2Ugb2YgYG56LWF1dG9jb21wbGV0ZWAuICcgK1xuICAgICdNYWtlIHN1cmUgdGhhdCB0aGUgaWQgcGFzc2VkIHRvIHRoZSBgbnpBdXRvY29tcGxldGVgIGlzIGNvcnJlY3QgYW5kIHRoYXQgJyArXG4gICAgJ3lvdVxcJ3JlIGF0dGVtcHRpbmcgdG8gb3BlbiBpdCBhZnRlciB0aGUgbmdBZnRlckNvbnRlbnRJbml0IGhvb2suJyk7XG59XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvciA6IGBpbnB1dFtuekF1dG9jb21wbGV0ZV0sIHRleHRhcmVhW256QXV0b2NvbXBsZXRlXWAsXG4gIHByb3ZpZGVyczogWyBOWl9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1IgXSxcbiAgaG9zdCAgICAgOiB7XG4gICAgJ2F1dG9jb21wbGV0ZScgICAgIDogJ29mZicsXG4gICAgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ2xpc3QnLFxuICAgICcoZm9jdXNpbiknICAgICAgICA6ICdoYW5kbGVGb2N1cygpJyxcbiAgICAnKGJsdXIpJyAgICAgICAgICAgOiAnaGFuZGxlQmx1cigpJyxcbiAgICAnKGlucHV0KScgICAgICAgICAgOiAnaGFuZGxlSW5wdXQoJGV2ZW50KScsXG4gICAgJyhrZXlkb3duKScgICAgICAgIDogJ2hhbmRsZUtleWRvd24oJGV2ZW50KSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOekF1dG9jb21wbGV0ZVRyaWdnZXJEaXJlY3RpdmUgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25EZXN0cm95IHtcblxuICAvKiogQmluZCBuekF1dG9jb21wbGV0ZSBjb21wb25lbnQgKi9cbiAgQElucHV0KCkgbnpBdXRvY29tcGxldGU6IE56QXV0b2NvbXBsZXRlQ29tcG9uZW50O1xuXG4gIF9vbkNoYW5nZTogKHZhbHVlOiB7fSkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBfb25Ub3VjaGVkID0gKCkgPT4ge307XG4gIHBhbmVsT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBDdXJyZW50IGFjdGl2ZSBvcHRpb24gKi9cbiAgZ2V0IGFjdGl2ZU9wdGlvbigpOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCB7XG4gICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5vcHRpb25zLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8e30+O1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsO1xuICBwcml2YXRlIHNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBvdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICBwcml2YXRlIG92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxuICAgIHByaXZhdGUgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZixcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogYW55KSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3lQYW5lbCgpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh2YWx1ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHt9KSA9PiB7fSk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBlbGVtZW50LmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIG9wZW5QYW5lbCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgfVxuXG4gIGNsb3NlUGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLmlzT3BlbiA9IHRoaXMucGFuZWxPcGVuID0gZmFsc2U7XG5cbiAgICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgICB0aGlzLm9wdGlvbnNDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsO1xuICAgICAgICB0aGlzLnBvcnRhbCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuICAgIGNvbnN0IGlzQXJyb3dLZXkgPSBrZXlDb2RlID09PSBVUF9BUlJPVyB8fCBrZXlDb2RlID09PSBET1dOX0FSUk9XO1xuXG4gICAgaWYgKGtleUNvZGUgPT09IEVTQ0FQRSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wYW5lbE9wZW4gJiYgKGtleUNvZGUgPT09IEVTQ0FQRSB8fCBrZXlDb2RlID09PSBUQUIpKSB7XG4gICAgICAvLyBSZXNldCB2YWx1ZSB3aGVuIHRhYiAvIEVTQyBjbG9zZVxuICAgICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uICYmIHRoaXMuYWN0aXZlT3B0aW9uLmdldExhYmVsKCkgIT09IHRoaXMucHJldmlvdXNWYWx1ZSkge1xuICAgICAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZSh0aGlzLnByZXZpb3VzVmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnBhbmVsT3BlbiAmJiBrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlLnNob3dQYW5lbCAmJiB0aGlzLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zZWxlY3RWaWFJbnRlcmFjdGlvbigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodGhpcy5wYW5lbE9wZW4gJiYgaXNBcnJvd0tleSAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLnNob3dQYW5lbCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbikge1xuICAgICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgICB9XG4gICAgICB0aGlzLmRvQmFja2ZpbGwoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGxldCB2YWx1ZTogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCA9IHRhcmdldC52YWx1ZTtcbiAgICBpZiAodGFyZ2V0LnR5cGUgPT09ICdudW1iZXInKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSAnJyA/IG51bGwgOiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY2FuT3BlbigpICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGV2ZW50LnRhcmdldCAmJlxuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUZvY3VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNhbk9wZW4oKSkge1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWU7XG4gICAgICB0aGlzLm9wZW5QYW5lbCgpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUJsdXIoKTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIGRhdGEgc291cmNlIGNoYW5nZXMgZXZlbnRcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLm56QXV0b2NvbXBsZXRlLm9wdGlvbnMuY2hhbmdlcy5waXBlKFxuICAgICAgZGVsYXkoMClcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSgpO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBvcHRpb24gY2hhbmdlcyBldmVudCBhbmQgc2V0IHRoZSB2YWx1ZVxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5zZWxlY3Rpb25DaGFuZ2VcbiAgICAuc3Vic2NyaWJlKChvcHRpb246IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KSA9PiB7XG4gICAgICB0aGlzLnNldFZhbHVlQW5kQ2xvc2Uob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gZXh0ZXJuYWwgY2xpY2sgYW5kIGNsb3NlIHBhbmVsXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlCYWNrZHJvcENsaWNrKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIG1lcmdlPE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50PihcbiAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLmRvY3VtZW50LCAnY2xpY2snKSxcbiAgICAgIGZyb21FdmVudDxUb3VjaEV2ZW50Pih0aGlzLmRvY3VtZW50LCAndG91Y2hlbmQnKVxuICAgIClcbiAgICAuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICAvLyBNYWtlIHN1cmUgaXMgbm90IHNlbGZcbiAgICAgIGlmIChjbGlja1RhcmdldCAhPT0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQgJiYgIXRoaXMub3ZlcmxheVJlZi5vdmVybGF5RWxlbWVudC5jb250YWlucyhjbGlja1RhcmdldCkgJiYgdGhpcy5wYW5lbE9wZW4pIHtcbiAgICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIG92ZXJsYXkgcG9zaXRpb24gY2hhbmdlcyBhbmQgcmVzZXQgZHJvcGRvd24gcG9zaXRpb25cbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneS5wb3NpdGlvbkNoYW5nZXNcbiAgICAucGlwZShcbiAgICAgIG1hcCgocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSkgPT4gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSksXG4gICAgICBkaXN0aW5jdCgpXG4gICAgKVxuICAgIC5zdWJzY3JpYmUoKHBvc2l0aW9uOiBWZXJ0aWNhbENvbm5lY3Rpb25Qb3MpID0+IHtcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuZHJvcERvd25Qb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhdHRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5uekF1dG9jb21wbGV0ZSkge1xuICAgICAgdGhyb3cgZ2V0TnpBdXRvY29tcGxldGVNaXNzaW5nUGFuZWxFcnJvcigpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5wb3J0YWwpIHtcbiAgICAgIHRoaXMucG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMubnpBdXRvY29tcGxldGUudGVtcGxhdGUsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLm92ZXJsYXlSZWYpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmICF0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaCh0aGlzLnBvcnRhbCk7XG4gICAgICB0aGlzLm92ZXJsYXlQb3NpdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheVBvc2l0aW9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk7XG4gICAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpO1xuICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPcHRpb25zQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5uekF1dG9jb21wbGV0ZS5pc09wZW4gPSB0aGlzLnBhbmVsT3BlbiA9IHRydWU7XG4gICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRWaXNpYmlsaXR5KCk7XG4gICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyB3aWR0aDogdGhpcy5uekF1dG9jb21wbGV0ZS5ueldpZHRoIHx8IHRoaXMuZ2V0SG9zdFdpZHRoKCkgfSk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xuICAgICAgfVxuICAgIH0sIDE1MCk7XG4gICAgdGhpcy5yZXNldEFjdGl2ZUl0ZW0oKTtcbiAgICBpZiAodGhpcy5hY3RpdmVPcHRpb24pIHtcbiAgICAgIHRoaXMuYWN0aXZlT3B0aW9uLnNjcm9sbEludG9WaWV3SWZOZWVkZWQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlc3Ryb3lQYW5lbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlDb25maWcoKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgcmV0dXJuIG5ldyBPdmVybGF5Q29uZmlnKHtcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3k6IHRoaXMuZ2V0T3ZlcmxheVBvc2l0aW9uKCksXG4gICAgICBzY3JvbGxTdHJhdGVneSAgOiB0aGlzLl9vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxuICAgICAgLy8gZGVmYXVsdCBob3N0IGVsZW1lbnQgd2lkdGhcbiAgICAgIHdpZHRoICAgICAgICAgICA6IHRoaXMubnpBdXRvY29tcGxldGUubnpXaWR0aCB8fCB0aGlzLmdldEhvc3RXaWR0aCgpXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldENvbm5lY3RlZEVsZW1lbnQoKTogRWxlbWVudFJlZiB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudFJlZjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0SG9zdFdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q29ubmVjdGVkRWxlbWVudCgpLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgXTtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcbiAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKSlcbiAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpXG4gICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgLndpdGhQdXNoKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNldEFjdGl2ZUl0ZW0oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbSAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLmdldE9wdGlvbkluZGV4KHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbSkpIHtcbiAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0QWN0aXZlSXRlbSh0aGlzLm56QXV0b2NvbXBsZXRlLmdldE9wdGlvbkluZGV4KHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldEFjdGl2ZUl0ZW0odGhpcy5uekF1dG9jb21wbGV0ZS5uekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA/IDAgOiAtMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRWYWx1ZUFuZENsb3NlKG9wdGlvbjogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IG9wdGlvbi5uelZhbHVlO1xuICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKG9wdGlvbi5nZXRMYWJlbCgpKTtcbiAgICB0aGlzLl9vbkNoYW5nZSh2YWx1ZSk7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmNsb3NlUGFuZWwoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VHJpZ2dlclZhbHVlKHZhbHVlOiBzdHJpbmcgfCBudW1iZXIgfCBudWxsKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQudmFsdWUgPSB2YWx1ZSB8fCAnJztcbiAgfVxuXG4gIHByaXZhdGUgZG9CYWNrZmlsbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZS5uekJhY2tmaWxsICYmIHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbSkge1xuICAgICAgdGhpcy5zZXRUcmlnZ2VyVmFsdWUodGhpcy5uekF1dG9jb21wbGV0ZS5hY3RpdmVJdGVtLmdldExhYmVsKCkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2FuT3BlbigpOiBib29sZWFuIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgcmV0dXJuICFlbGVtZW50LnJlYWRPbmx5ICYmICFlbGVtZW50LmRpc2FibGVkO1xuICB9XG59XG4iXX0=