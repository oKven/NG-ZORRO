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
export const NZ_AUTOCOMPLETE_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => NzAutocompleteTriggerDirective),
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
export class NzAutocompleteTriggerDirective {
    /**
     * @param {?} elementRef
     * @param {?} _overlay
     * @param {?} viewContainerRef
     * @param {?} document
     */
    constructor(elementRef, _overlay, viewContainerRef, 
    // tslint:disable-next-line:no-any
    document) {
        this.elementRef = elementRef;
        this._overlay = _overlay;
        this.viewContainerRef = viewContainerRef;
        this.document = document;
        this._onChange = () => { };
        this._onTouched = () => { };
        this.panelOpen = false;
    }
    /**
     * Current active option
     * @return {?}
     */
    get activeOption() {
        if (this.nzAutocomplete && this.nzAutocomplete.options.length) {
            return this.nzAutocomplete.activeItem;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyPanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.setTriggerValue(value);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        element.disabled = isDisabled;
        this.closePanel();
    }
    /**
     * @return {?}
     */
    openPanel() {
        this.attachOverlay();
    }
    /**
     * @return {?}
     */
    closePanel() {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = /** @type {?} */ (event.target);
        /** @type {?} */
        let value = target.value;
        if (target.type === 'number') {
            value = value === '' ? null : parseFloat(value);
        }
        if (this.canOpen() && document.activeElement === event.target &&
            this.previousValue !== value) {
            this.previousValue = value;
            this._onChange(value);
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    handleFocus() {
        if (this.canOpen()) {
            this.previousValue = this.elementRef.nativeElement.value;
            this.openPanel();
        }
    }
    /**
     * @return {?}
     */
    handleBlur() {
        this._onTouched();
    }
    /**
     * Subscription data source changes event
     * @return {?}
     */
    subscribeOptionsChange() {
        return this.nzAutocomplete.options.changes.pipe(delay(0)).subscribe(() => {
            this.resetActiveItem();
        });
    }
    /**
     * Subscription option changes event and set the value
     * @return {?}
     */
    subscribeSelectionChange() {
        return this.nzAutocomplete.selectionChange
            .subscribe((option) => {
            this.setValueAndClose(option);
        });
    }
    /**
     * Subscription external click and close panel
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.document, 'click'), fromEvent(this.document, 'touchend'))
            .subscribe((event) => {
            /** @type {?} */
            const clickTarget = /** @type {?} */ (event.target);
            // Make sure is not self
            if (clickTarget !== this.elementRef.nativeElement && !this.overlayRef.overlayElement.contains(clickTarget) && this.panelOpen) {
                this.closePanel();
            }
        });
    }
    /**
     * Subscription overlay position changes and reset dropdown position
     * @return {?}
     */
    subscribeOverlayPositionChange() {
        return this.positionStrategy.positionChanges
            .pipe(map((position) => position.connectionPair.originY), distinct())
            .subscribe((position) => {
            this.nzAutocomplete.dropDownPosition = position;
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
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
        setTimeout(() => {
            if (this.overlayRef) {
                this.overlayRef.updatePosition();
            }
        }, 150);
        this.resetActiveItem();
        if (this.activeOption) {
            this.activeOption.scrollIntoViewIfNeeded();
        }
    }
    /**
     * @return {?}
     */
    destroyPanel() {
        if (this.overlayRef) {
            this.closePanel();
        }
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this._overlay.scrollStrategies.reposition(),
            // default host element width
            width: this.nzAutocomplete.nzWidth || this.getHostWidth()
        });
    }
    /**
     * @return {?}
     */
    getConnectedElement() {
        return this.elementRef;
    }
    /**
     * @return {?}
     */
    getHostWidth() {
        return this.getConnectedElement().nativeElement.getBoundingClientRect().width;
    }
    /**
     * @return {?}
     */
    getOverlayPosition() {
        /** @type {?} */
        const positions = [
            new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
            new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' })
        ];
        this.positionStrategy = this._overlay.position()
            .flexibleConnectedTo(this.getConnectedElement())
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
    /**
     * @return {?}
     */
    resetActiveItem() {
        if (this.nzAutocomplete.activeItem && this.nzAutocomplete.getOptionIndex(this.nzAutocomplete.activeItem)) {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.getOptionIndex(this.nzAutocomplete.activeItem));
        }
        else {
            this.nzAutocomplete.setActiveItem(this.nzAutocomplete.nzDefaultActiveFirstOption ? 0 : -1);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    setValueAndClose(option) {
        /** @type {?} */
        const value = option.nzValue;
        this.setTriggerValue(option.getLabel());
        this._onChange(value);
        this.elementRef.nativeElement.focus();
        this.closePanel();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setTriggerValue(value) {
        this.elementRef.nativeElement.value = value || '';
    }
    /**
     * @return {?}
     */
    doBackfill() {
        if (this.nzAutocomplete.nzBackfill && this.nzAutocomplete.activeItem) {
            this.setTriggerValue(this.nzAutocomplete.activeItem.getLabel());
        }
    }
    /**
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.elementRef.nativeElement;
        return !element.readOnly && !element.disabled;
    }
}
NzAutocompleteTriggerDirective.decorators = [
    { type: Directive, args: [{
                selector: `input[nzAutocomplete], textarea[nzAutocomplete]`,
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
NzAutocompleteTriggerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Overlay },
    { type: ViewContainerRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
NzAutocompleteTriggerDirective.propDecorators = {
    nzAutocomplete: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImF1dG8tY29tcGxldGUvbnotYXV0b2NvbXBsZXRlLXRyaWdnZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pGLE9BQU8sRUFFTCxzQkFBc0IsRUFFdEIsT0FBTyxFQUNQLGFBQWEsRUFJZCxNQUFNLHNCQUFzQixDQUFDO0FBQzlCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLFVBQVUsRUFDVixTQUFTLEVBQ1QsVUFBVSxFQUVWLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUNSLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUV0RSxhQUFhLDhCQUE4QixHQUFxQjtJQUM5RCxPQUFPLEVBQU0saUJBQWlCO0lBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsOEJBQThCLENBQUM7SUFDN0QsS0FBSyxFQUFRLElBQUk7Q0FDbEIsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSxrQ0FBa0M7SUFDaEQsT0FBTyxL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LFNBQUM7Z0JBQ1QsUUFBUSxFQUFHLGlEQUFpRDtnQkFDNUQsU0FBUyxFQUFFLENBQUUsOEJBQThCLENBQUU7Z0JBQzdDLElBQUksRUFBTztvQkFDVCxjQUFjLEVBQU8sS0FBSztvQkFDMUIsbUJBQW1CLEVBQUUsTUFBTTtvQkFDM0IsV0FBVyxFQUFVLGVBQWU7b0JBQ3BDLFFBQVEsRUFBYSxjQUFjO29CQUNuQyxTQUFTLEVBQVkscUJBQXFCO29CQUMxQyxXQUFXLEVBQVUsdUJBQXVCO2lCQUM3QzthQUNGOzs7O1lBdkNDLFVBQVU7WUFYVixPQUFPO1lBaUJQLGdCQUFnQjs0Q0FnRWIsUUFBUSxZQUFJLE1BQU0sU0FBQyxRQUFROzs7NkJBM0I3QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsXG4gIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsXG4gIEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneSxcbiAgT3ZlcmxheSxcbiAgT3ZlcmxheUNvbmZpZyxcbiAgT3ZlcmxheVJlZixcbiAgUG9zaXRpb25TdHJhdGVneSxcbiAgVmVydGljYWxDb25uZWN0aW9uUG9zXG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEV4aXN0aW5nUHJvdmlkZXIsXG4gIEluamVjdCxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3B0aW9uYWwsXG4gIFZpZXdDb250YWluZXJSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGZyb21FdmVudCwgbWVyZ2UsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVsYXksIGRpc3RpbmN0LCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1hdXRvY29tcGxldGUtb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZUNvbXBvbmVudCB9IGZyb20gJy4vbnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjb25zdCBOWl9BVVRPQ09NUExFVEVfVkFMVUVfQUNDRVNTT1I6IEV4aXN0aW5nUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlKSxcbiAgbXVsdGkgICAgICA6IHRydWVcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROekF1dG9jb21wbGV0ZU1pc3NpbmdQYW5lbEVycm9yKCk6IEVycm9yIHtcbiAgcmV0dXJuIEVycm9yKCdBdHRlbXB0aW5nIHRvIG9wZW4gYW4gdW5kZWZpbmVkIGluc3RhbmNlIG9mIGBuei1hdXRvY29tcGxldGVgLiAnICtcbiAgICAnTWFrZSBzdXJlIHRoYXQgdGhlIGlkIHBhc3NlZCB0byB0aGUgYG56QXV0b2NvbXBsZXRlYCBpcyBjb3JyZWN0IGFuZCB0aGF0ICcgK1xuICAgICd5b3VcXCdyZSBhdHRlbXB0aW5nIHRvIG9wZW4gaXQgYWZ0ZXIgdGhlIG5nQWZ0ZXJDb250ZW50SW5pdCBob29rLicpO1xufVxuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3IgOiBgaW5wdXRbbnpBdXRvY29tcGxldGVdLCB0ZXh0YXJlYVtuekF1dG9jb21wbGV0ZV1gLFxuICBwcm92aWRlcnM6IFsgTlpfQVVUT0NPTVBMRVRFX1ZBTFVFX0FDQ0VTU09SIF0sXG4gIGhvc3QgICAgIDoge1xuICAgICdhdXRvY29tcGxldGUnICAgICA6ICdvZmYnLFxuICAgICdhcmlhLWF1dG9jb21wbGV0ZSc6ICdsaXN0JyxcbiAgICAnKGZvY3VzaW4pJyAgICAgICAgOiAnaGFuZGxlRm9jdXMoKScsXG4gICAgJyhibHVyKScgICAgICAgICAgIDogJ2hhbmRsZUJsdXIoKScsXG4gICAgJyhpbnB1dCknICAgICAgICAgIDogJ2hhbmRsZUlucHV0KCRldmVudCknLFxuICAgICcoa2V5ZG93biknICAgICAgICA6ICdoYW5kbGVLZXlkb3duKCRldmVudCknXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVUcmlnZ2VyRGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSB7XG5cbiAgLyoqIEJpbmQgbnpBdXRvY29tcGxldGUgY29tcG9uZW50ICovXG4gIEBJbnB1dCgpIG56QXV0b2NvbXBsZXRlOiBOekF1dG9jb21wbGV0ZUNvbXBvbmVudDtcblxuICBfb25DaGFuZ2U6ICh2YWx1ZToge30pID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgX29uVG91Y2hlZCA9ICgpID0+IHt9O1xuICBwYW5lbE9wZW46IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogQ3VycmVudCBhY3RpdmUgb3B0aW9uICovXG4gIGdldCBhY3RpdmVPcHRpb24oKTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQge1xuICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlICYmIHRoaXMubnpBdXRvY29tcGxldGUub3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvdmVybGF5UmVmOiBPdmVybGF5UmVmIHwgbnVsbDtcbiAgcHJpdmF0ZSBwb3J0YWw6IFRlbXBsYXRlUG9ydGFsPHt9PjtcbiAgcHJpdmF0ZSBwb3NpdGlvblN0cmF0ZWd5OiBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3k7XG4gIHByaXZhdGUgcHJldmlvdXNWYWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbDtcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBvcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHByaXZhdGUgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBvdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgZG9jdW1lbnQ6IGFueSkge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95UGFuZWwoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgdGhpcy5zZXRUcmlnZ2VyVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiB7fSkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLl9vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5fb25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBlbGVtZW50OiBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgZWxlbWVudC5kaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBvcGVuUGFuZWwoKTogdm9pZCB7XG4gICAgdGhpcy5hdHRhY2hPdmVybGF5KCk7XG4gIH1cblxuICBjbG9zZVBhbmVsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnBhbmVsT3Blbikge1xuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5pc09wZW4gPSB0aGlzLnBhbmVsT3BlbiA9IGZhbHNlO1xuXG4gICAgICBpZiAodGhpcy5vdmVybGF5UmVmICYmIHRoaXMub3ZlcmxheVJlZi5oYXNBdHRhY2hlZCgpKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgICAgdGhpcy5vcHRpb25zQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcbiAgICAgICAgdGhpcy5wb3J0YWwgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUtleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBrZXlDb2RlID0gZXZlbnQua2V5Q29kZTtcbiAgICBjb25zdCBpc0Fycm93S2V5ID0ga2V5Q29kZSA9PT0gVVBfQVJST1cgfHwga2V5Q29kZSA9PT0gRE9XTl9BUlJPVztcblxuICAgIGlmIChrZXlDb2RlID09PSBFU0NBUEUpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucGFuZWxPcGVuICYmIChrZXlDb2RlID09PSBFU0NBUEUgfHwga2V5Q29kZSA9PT0gVEFCKSkge1xuICAgICAgLy8gUmVzZXQgdmFsdWUgd2hlbiB0YWIgLyBFU0MgY2xvc2VcbiAgICAgIGlmICh0aGlzLmFjdGl2ZU9wdGlvbiAmJiB0aGlzLmFjdGl2ZU9wdGlvbi5nZXRMYWJlbCgpICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgICAgdGhpcy5zZXRUcmlnZ2VyVmFsdWUodGhpcy5wcmV2aW91c1ZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5wYW5lbE9wZW4gJiYga2V5Q29kZSA9PT0gRU5URVIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBpZiAodGhpcy5uekF1dG9jb21wbGV0ZS5zaG93UGFuZWwgJiYgdGhpcy5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2VsZWN0VmlhSW50ZXJhY3Rpb24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMucGFuZWxPcGVuICYmIGlzQXJyb3dLZXkgJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5zaG93UGFuZWwpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgaWYgKGtleUNvZGUgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldE5leHRJdGVtQWN0aXZlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5hY3RpdmVPcHRpb24pIHtcbiAgICAgICAgdGhpcy5hY3RpdmVPcHRpb24uc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5kb0JhY2tmaWxsKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBsZXQgdmFsdWU6IG51bWJlciB8IHN0cmluZyB8IG51bGwgPSB0YXJnZXQudmFsdWU7XG4gICAgaWYgKHRhcmdldC50eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gJycgPyBudWxsIDogcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmNhbk9wZW4oKSAmJiBkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBldmVudC50YXJnZXQgJiZcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVGb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jYW5PcGVuKCkpIHtcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlO1xuICAgICAgdGhpcy5vcGVuUGFuZWwoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVCbHVyKCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBkYXRhIHNvdXJjZSBjaGFuZ2VzIGV2ZW50XG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU9wdGlvbnNDaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5uekF1dG9jb21wbGV0ZS5vcHRpb25zLmNoYW5nZXMucGlwZShcbiAgICAgIGRlbGF5KDApXG4gICAgKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5yZXNldEFjdGl2ZUl0ZW0oKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdWJzY3JpcHRpb24gb3B0aW9uIGNoYW5nZXMgZXZlbnQgYW5kIHNldCB0aGUgdmFsdWVcbiAgICovXG4gIHByaXZhdGUgc3Vic2NyaWJlU2VsZWN0aW9uQ2hhbmdlKCk6IFN1YnNjcmlwdGlvbiB7XG4gICAgcmV0dXJuIHRoaXMubnpBdXRvY29tcGxldGUuc2VsZWN0aW9uQ2hhbmdlXG4gICAgLnN1YnNjcmliZSgob3B0aW9uOiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCkgPT4ge1xuICAgICAgdGhpcy5zZXRWYWx1ZUFuZENsb3NlKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaXB0aW9uIGV4dGVybmFsIGNsaWNrIGFuZCBjbG9zZSBwYW5lbFxuICAgKi9cbiAgcHJpdmF0ZSBzdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiBtZXJnZTxNb3VzZUV2ZW50IHwgVG91Y2hFdmVudD4oXG4gICAgICBmcm9tRXZlbnQ8TW91c2VFdmVudD4odGhpcy5kb2N1bWVudCwgJ2NsaWNrJyksXG4gICAgICBmcm9tRXZlbnQ8VG91Y2hFdmVudD4odGhpcy5kb2N1bWVudCwgJ3RvdWNoZW5kJylcbiAgICApXG4gICAgLnN1YnNjcmliZSgoZXZlbnQ6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcblxuICAgICAgLy8gTWFrZSBzdXJlIGlzIG5vdCBzZWxmXG4gICAgICBpZiAoY2xpY2tUYXJnZXQgIT09IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50ICYmICF0aGlzLm92ZXJsYXlSZWYub3ZlcmxheUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmIHRoaXMucGFuZWxPcGVuKSB7XG4gICAgICAgIHRoaXMuY2xvc2VQYW5lbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmlwdGlvbiBvdmVybGF5IHBvc2l0aW9uIGNoYW5nZXMgYW5kIHJlc2V0IGRyb3Bkb3duIHBvc2l0aW9uXG4gICAqL1xuICBwcml2YXRlIHN1YnNjcmliZU92ZXJsYXlQb3NpdGlvbkNoYW5nZSgpOiBTdWJzY3JpcHRpb24ge1xuICAgIHJldHVybiB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kucG9zaXRpb25DaGFuZ2VzXG4gICAgLnBpcGUoXG4gICAgICBtYXAoKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpID0+IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkpLFxuICAgICAgZGlzdGluY3QoKVxuICAgIClcbiAgICAuc3Vic2NyaWJlKChwb3NpdGlvbjogVmVydGljYWxDb25uZWN0aW9uUG9zKSA9PiB7XG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbjtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpBdXRvY29tcGxldGUpIHtcbiAgICAgIHRocm93IGdldE56QXV0b2NvbXBsZXRlTWlzc2luZ1BhbmVsRXJyb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMucG9ydGFsKSB7XG4gICAgICB0aGlzLnBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLm56QXV0b2NvbXBsZXRlLnRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5vdmVybGF5UmVmKSB7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLl9vdmVybGF5LmNyZWF0ZSh0aGlzLmdldE92ZXJsYXlDb25maWcoKSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5vdmVybGF5UG9zaXRpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZU92ZXJsYXlQb3NpdGlvbkNoYW5nZSgpO1xuICAgICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcbiAgICAgIHRoaXMub3B0aW9uc0NoYW5nZVN1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3B0aW9uc0NoYW5nZSgpO1xuICAgIH1cblxuICAgIHRoaXMubnpBdXRvY29tcGxldGUuaXNPcGVuID0gdGhpcy5wYW5lbE9wZW4gPSB0cnVlO1xuICAgIHRoaXMubnpBdXRvY29tcGxldGUuc2V0VmlzaWJpbGl0eSgpO1xuICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IHRoaXMubnpBdXRvY29tcGxldGUubnpXaWR0aCB8fCB0aGlzLmdldEhvc3RXaWR0aCgpIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgICB0aGlzLm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9LCAxNTApO1xuICAgIHRoaXMucmVzZXRBY3RpdmVJdGVtKCk7XG4gICAgaWYgKHRoaXMuYWN0aXZlT3B0aW9uKSB7XG4gICAgICB0aGlzLmFjdGl2ZU9wdGlvbi5zY3JvbGxJbnRvVmlld0lmTmVlZGVkKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZXN0cm95UGFuZWwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5Q29uZmlnKCk6IE92ZXJsYXlDb25maWcge1xuICAgIHJldHVybiBuZXcgT3ZlcmxheUNvbmZpZyh7XG4gICAgICBwb3NpdGlvblN0cmF0ZWd5OiB0aGlzLmdldE92ZXJsYXlQb3NpdGlvbigpLFxuICAgICAgc2Nyb2xsU3RyYXRlZ3kgIDogdGhpcy5fb3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcbiAgICAgIC8vIGRlZmF1bHQgaG9zdCBlbGVtZW50IHdpZHRoXG4gICAgICB3aWR0aCAgICAgICAgICAgOiB0aGlzLm56QXV0b2NvbXBsZXRlLm56V2lkdGggfHwgdGhpcy5nZXRIb3N0V2lkdGgoKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDb25uZWN0ZWRFbGVtZW50KCk6IEVsZW1lbnRSZWYge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnRSZWY7XG4gIH1cblxuICBwcml2YXRlIGdldEhvc3RXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmdldENvbm5lY3RlZEVsZW1lbnQoKS5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb24oKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxuICAgIF07XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5fb3ZlcmxheS5wb3NpdGlvbigpXG4gICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5nZXRDb25uZWN0ZWRFbGVtZW50KCkpXG4gICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxuICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgIC53aXRoUHVzaChmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRBY3RpdmVJdGVtKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0gJiYgdGhpcy5uekF1dG9jb21wbGV0ZS5nZXRPcHRpb25JbmRleCh0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0pKSB7XG4gICAgICB0aGlzLm56QXV0b2NvbXBsZXRlLnNldEFjdGl2ZUl0ZW0odGhpcy5uekF1dG9jb21wbGV0ZS5nZXRPcHRpb25JbmRleCh0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5uekF1dG9jb21wbGV0ZS5zZXRBY3RpdmVJdGVtKHRoaXMubnpBdXRvY29tcGxldGUubnpEZWZhdWx0QWN0aXZlRmlyc3RPcHRpb24gPyAwIDogLTEpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0VmFsdWVBbmRDbG9zZShvcHRpb246IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSBvcHRpb24ubnpWYWx1ZTtcbiAgICB0aGlzLnNldFRyaWdnZXJWYWx1ZShvcHRpb24uZ2V0TGFiZWwoKSk7XG4gICAgdGhpcy5fb25DaGFuZ2UodmFsdWUpO1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5jbG9zZVBhbmVsKCk7XG4gIH1cblxuICBwcml2YXRlIHNldFRyaWdnZXJWYWx1ZSh2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgbnVsbCk6IHZvaWQge1xuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdmFsdWUgfHwgJyc7XG4gIH1cblxuICBwcml2YXRlIGRvQmFja2ZpbGwoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpBdXRvY29tcGxldGUubnpCYWNrZmlsbCAmJiB0aGlzLm56QXV0b2NvbXBsZXRlLmFjdGl2ZUl0ZW0pIHtcbiAgICAgIHRoaXMuc2V0VHJpZ2dlclZhbHVlKHRoaXMubnpBdXRvY29tcGxldGUuYWN0aXZlSXRlbS5nZXRMYWJlbCgpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNhbk9wZW4oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHJldHVybiAhZWxlbWVudC5yZWFkT25seSAmJiAhZWxlbWVudC5kaXNhYmxlZDtcbiAgfVxufVxuIl19