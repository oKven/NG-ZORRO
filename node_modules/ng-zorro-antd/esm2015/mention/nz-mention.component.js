/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, EventEmitter, Inject, Input, NgZone, Optional, Output, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { fromEvent, merge } from 'rxjs';
import { DEFAULT_MENTION_POSITIONS } from '../core/overlay/overlay-position-map';
import { InputBoolean } from '../core/util';
import { getMentions } from '../core/util/getMentions';
import { getCaretCoordinates } from '../core/util/textarea-caret-position';
import { NzMentionSuggestionDirective } from './nz-mention-suggestions';
import { NzMentionTriggerDirective } from './nz-mention-trigger';
/**
 * @record
 */
export function MentionOnSearchTypes() { }
function MentionOnSearchTypes_tsickle_Closure_declarations() {
    /** @type {?} */
    MentionOnSearchTypes.prototype.value;
    /** @type {?} */
    MentionOnSearchTypes.prototype.prefix;
}
/**
 * @record
 */
export function Mention() { }
function Mention_tsickle_Closure_declarations() {
    /** @type {?} */
    Mention.prototype.startPos;
    /** @type {?} */
    Mention.prototype.endPos;
    /** @type {?} */
    Mention.prototype.mention;
}
export class NzMentionComponent {
    /**
     * @param {?} ngDocument
     * @param {?} changeDetectorRef
     * @param {?} ngZone
     * @param {?} overlay
     * @param {?} viewContainerRef
     */
    constructor(ngDocument, changeDetectorRef, ngZone, overlay, viewContainerRef) {
        this.ngDocument = ngDocument;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzValueWith = value => value; // tslint:disable-line:no-any
        this.nzPrefix = '@';
        this.nzLoading = false;
        this.nzNotFoundContent = '无匹配结果，轻敲空格完成输入';
        this.nzPlacement = 'bottom';
        this.nzSuggestions = [];
        this.nzOnSelect = new EventEmitter();
        this.nzOnSearchChange = new EventEmitter();
        this.isOpen = false;
        this.filteredSuggestions = [];
        this.suggestionTemplate = null; // tslint:disable-line:no-any
        this.activeIndex = -1;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set suggestionChild(value) {
        if (value) {
            this.suggestionTemplate = value;
        }
    }
    /**
     * @return {?}
     */
    get triggerNativeElement() {
        return this.trigger.el.nativeElement;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzSuggestions')) {
            if (this.isOpen) {
                this.previousValue = null;
                this.activeIndex = -1;
                this.resetDropdown(false);
            }
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.bindTriggerEvents();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    closeDropdown() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.isOpen = false;
            this.changeDetectorRef.markForCheck();
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.attachOverlay();
        this.isOpen = true;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    getMentions() {
        return getMentions(this.trigger.value, this.nzPrefix);
    }
    /**
     * @param {?} suggestion
     * @return {?}
     */
    selectSuggestion(suggestion) {
        /** @type {?} */
        const value = this.nzValueWith(suggestion);
        this.trigger.insertMention({
            mention: value,
            startPos: this.cursorMentionStart,
            endPos: this.cursorMentionEnd
        });
        this.nzOnSelect.emit(suggestion);
        this.closeDropdown();
        this.activeIndex = -1;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInput(event) {
        /** @type {?} */
        const target = /** @type {?} */ (event.target);
        this.trigger.onChange(target.value);
        this.trigger.value = target.value;
        this.resetDropdown();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleKeydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        if (this.isOpen && keyCode === ENTER && this.activeIndex !== -1 && this.filteredSuggestions.length) {
            this.selectSuggestion(this.filteredSuggestions[this.activeIndex]);
            event.preventDefault();
        }
        else if (keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
            this.resetDropdown();
            event.stopPropagation();
        }
        else {
            if (this.isOpen && (keyCode === TAB || keyCode === ESCAPE)) {
                this.closeDropdown();
                return;
            }
            if (this.isOpen && (keyCode === UP_ARROW)) {
                this.setPreviousItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
            if (this.isOpen && (keyCode === DOWN_ARROW)) {
                this.setNextItemActive();
                event.preventDefault();
                event.stopPropagation();
            }
        }
    }
    /**
     * @return {?}
     */
    handleClick() {
        this.resetDropdown();
    }
    /**
     * @return {?}
     */
    bindTriggerEvents() {
        this.trigger.onInput.subscribe((e) => this.handleInput(e));
        this.trigger.onKeydown.subscribe((e) => this.handleKeydown(e));
        this.trigger.onClick.subscribe(() => this.handleClick());
    }
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    suggestionsFilter(value, emit) {
        /** @type {?} */
        const suggestions = value.substring(1);
        if (this.previousValue === value) {
            return;
        }
        this.previousValue = value;
        if (emit) {
            this.nzOnSearchChange.emit({
                value: this.cursorMention.substring(1),
                prefix: this.cursorMention[0]
            });
        }
        /** @type {?} */
        const searchValue = suggestions.toLowerCase();
        this.filteredSuggestions = this.nzSuggestions
            .filter(suggestion => this.nzValueWith(suggestion).toLowerCase().includes(searchValue));
    }
    /**
     * @param {?=} emit
     * @return {?}
     */
    resetDropdown(emit = true) {
        this.resetCursorMention();
        if (typeof this.cursorMention !== 'string' || !this.canOpen()) {
            this.closeDropdown();
            return;
        }
        this.suggestionsFilter(this.cursorMention, emit);
        /** @type {?} */
        const activeIndex = this.filteredSuggestions.indexOf(this.cursorMention.substring(1));
        this.activeIndex = activeIndex >= 0 ? activeIndex : 0;
        this.openDropdown();
    }
    /**
     * @return {?}
     */
    setNextItemActive() {
        this.activeIndex = this.activeIndex + 1 <= this.filteredSuggestions.length - 1
            ? this.activeIndex + 1
            : 0;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    setPreviousItemActive() {
        this.activeIndex = this.activeIndex - 1 < 0
            ? this.filteredSuggestions.length - 1
            : this.activeIndex - 1;
        this.changeDetectorRef.markForCheck();
    }
    /**
     * @return {?}
     */
    canOpen() {
        /** @type {?} */
        const element = this.triggerNativeElement;
        return !element.readOnly && !element.disabled;
    }
    /**
     * @return {?}
     */
    resetCursorMention() {
        /** @type {?} */
        const value = this.triggerNativeElement.value.replace(/[\r\n]/g, ' ') || '';
        /** @type {?} */
        const selectionStart = this.triggerNativeElement.selectionStart;
        /** @type {?} */
        const prefix = typeof this.nzPrefix === 'string' ? [this.nzPrefix] : this.nzPrefix;
        /** @type {?} */
        let i = prefix.length;
        while (i >= 0) {
            /** @type {?} */
            const startPos = value.lastIndexOf(prefix[i], selectionStart);
            /** @type {?} */
            const endPos = value.indexOf(' ', selectionStart) > -1 ? value.indexOf(' ', selectionStart) : value.length;
            /** @type {?} */
            const mention = value.substring(startPos, endPos);
            if ((startPos > 0 && value[startPos - 1] !== ' ')
                || startPos < 0
                || mention.includes(prefix[i], 1)
                || mention.includes(' ')) {
                this.cursorMention = null;
                this.cursorMentionStart = -1;
                this.cursorMentionEnd = -1;
            }
            else {
                this.cursorMention = mention;
                this.cursorMentionStart = startPos;
                this.cursorMentionEnd = endPos;
                return;
            }
            i--;
        }
    }
    /**
     * @return {?}
     */
    updatePositions() {
        /** @type {?} */
        const coordinates = getCaretCoordinates(this.triggerNativeElement, this.cursorMentionStart);
        /** @type {?} */
        const top = coordinates.top
            - this.triggerNativeElement.getBoundingClientRect().height
            - this.triggerNativeElement.scrollTop
            + (this.nzPlacement === 'bottom' ? coordinates.height : 0);
        /** @type {?} */
        const left = coordinates.left - this.triggerNativeElement.scrollLeft;
        this.positionStrategy.withDefaultOffsetX(left).withDefaultOffsetY(top);
        if (this.nzPlacement === 'bottom') {
            this.positionStrategy.withPositions([DEFAULT_MENTION_POSITIONS[0]]);
        }
        if (this.nzPlacement === 'top') {
            this.positionStrategy.withPositions([DEFAULT_MENTION_POSITIONS[1]]);
        }
        this.positionStrategy.apply();
    }
    /**
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return merge(fromEvent(this.ngDocument, 'click'), fromEvent(this.ngDocument, 'touchend'))
            .subscribe((event) => {
            /** @type {?} */
            const clickTarget = /** @type {?} */ (event.target);
            if (clickTarget !== this.trigger.el.nativeElement && this.isOpen) {
                this.closeDropdown();
            }
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
        if (!this.overlayRef) {
            this.portal = new TemplatePortal(this.suggestionsTemp, this.viewContainerRef);
            this.overlayRef = this.overlay.create(this.getOverlayConfig());
        }
        if (this.overlayRef && !this.overlayRef.hasAttached()) {
            this.overlayRef.attach(this.portal);
            this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
        }
        this.updatePositions();
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
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
        this.positionStrategy = this.overlay.position()
            .flexibleConnectedTo(this.trigger.el)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
}
NzMentionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-mention',
                template: "<ng-content></ng-content>\n<ng-template #suggestions>\n  <ul class=\"ant-mention-dropdown\">\n    <li class=\"ant-mention-dropdown-item\"\n        *ngFor=\"let suggestion of filteredSuggestions; let i = index\"\n        [class.focus]=\"i === activeIndex\"\n        (click)=\"selectSuggestion(suggestion)\">\n      <ng-container *ngIf=\"suggestionTemplate else defaultSuggestion\">\n        <ng-container *ngTemplateOutlet=\"suggestionTemplate; context: {$implicit: suggestion}\"></ng-container>\n      </ng-container>\n      <ng-template #defaultSuggestion>{{ nzValueWith(suggestion) }}</ng-template>\n    </li>\n    <li class=\"ant-mention-dropdown-notfound ant-mention-dropdown-item\"\n        *ngIf=\"filteredSuggestions.length === 0\">\n      <span *ngIf=\"nzLoading\"><i nz-icon type=\"loading\"></i></span>\n      <span *ngIf=\"!nzLoading\">{{ nzNotFoundContent }}</span>\n    </li>\n  </ul>\n</ng-template>\n",
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    .ant-mention-dropdown {
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
/** @nocollapse */
NzMentionComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: Overlay },
    { type: ViewContainerRef }
];
NzMentionComponent.propDecorators = {
    nzValueWith: [{ type: Input }],
    nzPrefix: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzNotFoundContent: [{ type: Input }],
    nzPlacement: [{ type: Input }],
    nzSuggestions: [{ type: Input }],
    nzOnSelect: [{ type: Output }],
    nzOnSearchChange: [{ type: Output }],
    trigger: [{ type: ContentChild, args: [NzMentionTriggerDirective,] }],
    suggestionsTemp: [{ type: ViewChild, args: [TemplateRef,] }],
    suggestionChild: [{ type: ContentChild, args: [NzMentionSuggestionDirective, { read: TemplateRef },] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzMentionComponent.prototype, "nzLoading", void 0);
function NzMentionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMentionComponent.prototype.nzValueWith;
    /** @type {?} */
    NzMentionComponent.prototype.nzPrefix;
    /** @type {?} */
    NzMentionComponent.prototype.nzLoading;
    /** @type {?} */
    NzMentionComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzMentionComponent.prototype.nzPlacement;
    /** @type {?} */
    NzMentionComponent.prototype.nzSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSelect;
    /** @type {?} */
    NzMentionComponent.prototype.nzOnSearchChange;
    /** @type {?} */
    NzMentionComponent.prototype.trigger;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionsTemp;
    /** @type {?} */
    NzMentionComponent.prototype.isOpen;
    /** @type {?} */
    NzMentionComponent.prototype.filteredSuggestions;
    /** @type {?} */
    NzMentionComponent.prototype.suggestionTemplate;
    /** @type {?} */
    NzMentionComponent.prototype.activeIndex;
    /** @type {?} */
    NzMentionComponent.prototype.previousValue;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMention;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMentionStart;
    /** @type {?} */
    NzMentionComponent.prototype.cursorMentionEnd;
    /** @type {?} */
    NzMentionComponent.prototype.overlayRef;
    /** @type {?} */
    NzMentionComponent.prototype.portal;
    /** @type {?} */
    NzMentionComponent.prototype.positionStrategy;
    /** @type {?} */
    NzMentionComponent.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzMentionComponent.prototype.ngDocument;
    /** @type {?} */
    NzMentionComponent.prototype.changeDetectorRef;
    /** @type {?} */
    NzMentionComponent.prototype.ngZone;
    /** @type {?} */
    NzMentionComponent.prototype.overlay;
    /** @type {?} */
    NzMentionComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudGlvbi9uei1tZW50aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEdBQUcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMxRyxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFBRSxpQkFBaUIsRUFDMUMsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osTUFBTSxFQUNOLEtBQUssRUFDTCxNQUFNLEVBR04sUUFBUSxFQUNSLE1BQU0sRUFFTixXQUFXLEVBQ1gsU0FBUyxFQUNULGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFFdEQsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDakYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUM1QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFFM0UsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDeEUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7Ozs7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RSxPQUFPLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUFDO1NBQzVHLENBQUM7UUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUU7YUFDOUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7YUFDcEMsYUFBYSxDQUFDLFNBQVMsQ0FBQzthQUN4QixzQkFBc0IsQ0FBQyxLQUFLLENBQUM7YUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDOzs7O1lBcFNoQyxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLFlBQVk7Z0JBQ2pDLCs1QkFBa0Q7Z0JBQ2xELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO3lCQUM1Qjs7Ozs7Ozs7O0dBU3RCO2FBQ0Y7Ozs7NENBMENjLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTtZQWhHZixpQkFBaUI7WUFNMUMsTUFBTTtZQWhCTixPQUFPO1lBd0JQLGdCQUFnQjs7OzBCQTRDZixLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkFDTCxNQUFNOytCQUNOLE1BQU07c0JBRU4sWUFBWSxTQUFDLHlCQUF5Qjs4QkFDdEMsU0FBUyxTQUFDLFdBQVc7OEJBRXJCLFlBQVksU0FBQyw0QkFBNEIsRUFBRSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUU7OztJQVZ2RCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET1dOX0FSUk9XLCBFTlRFUiwgRVNDQVBFLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgVEFCLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBDb25uZWN0aW9uUG9zaXRpb25QYWlyLFxuICBGbGV4aWJsZUNvbm5lY3RlZFBvc2l0aW9uU3RyYXRlZ3ksXG4gIE92ZXJsYXksXG4gIE92ZXJsYXlDb25maWcsXG4gIE92ZXJsYXlSZWYsXG4gIFBvc2l0aW9uU3RyYXRlZ3lcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcblxuaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IERFRkFVTFRfTUVOVElPTl9QT1NJVElPTlMgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsJztcbmltcG9ydCB7IGdldE1lbnRpb25zIH0gZnJvbSAnLi4vY29yZS91dGlsL2dldE1lbnRpb25zJztcbmltcG9ydCB7IGdldENhcmV0Q29vcmRpbmF0ZXMgfSBmcm9tICcuLi9jb3JlL3V0aWwvdGV4dGFyZWEtY2FyZXQtcG9zaXRpb24nO1xuXG5pbXBvcnQgeyBOek1lbnRpb25TdWdnZXN0aW9uRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW50aW9uLXN1Z2dlc3Rpb25zJztcbmltcG9ydCB7IE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnRpb24tdHJpZ2dlcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVudGlvbk9uU2VhcmNoVHlwZXMge1xuICB2YWx1ZTogc3RyaW5nO1xuICBwcmVmaXg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZW50aW9uIHtcbiAgc3RhcnRQb3M6IG51bWJlcjtcbiAgZW5kUG9zOiBudW1iZXI7XG4gIG1lbnRpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgTWVudGlvblBsYWNlbWVudCA9ICd0b3AnIHwgJ2JvdHRvbSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbWVudGlvbicsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LW1lbnRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICAuYW50LW1lbnRpb24tZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgYCBdXG59KVxuXG5leHBvcnQgY2xhc3MgTnpNZW50aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIG56VmFsdWVXaXRoOiAodmFsdWU6IGFueSkgPT4gc3RyaW5nID0gdmFsdWUgPT4gdmFsdWU7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIG56UHJlZml4OiBzdHJpbmcgfCBzdHJpbmdbXSA9ICdAJztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nID0gJ+aXoOWMuemFjee7k+aenO+8jOi9u+aVsuepuuagvOWujOaIkOi+k+WFpSc7XG4gIEBJbnB1dCgpIG56UGxhY2VtZW50OiBNZW50aW9uUGxhY2VtZW50ID0gJ2JvdHRvbSc7XG4gIEBJbnB1dCgpIG56U3VnZ2VzdGlvbnM6IHN0cmluZ1tdID0gW107XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VsZWN0OiBFdmVudEVtaXR0ZXI8c3RyaW5nIHwge30+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPblNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPE1lbnRpb25PblNlYXJjaFR5cGVzPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAQ29udGVudENoaWxkKE56TWVudGlvblRyaWdnZXJEaXJlY3RpdmUpIHRyaWdnZXI7XG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYpIHN1Z2dlc3Rpb25zVGVtcDtcblxuICBAQ29udGVudENoaWxkKE56TWVudGlvblN1Z2dlc3Rpb25EaXJlY3RpdmUsIHsgcmVhZDogVGVtcGxhdGVSZWYgfSlcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgc3VnZ2VzdGlvbkNoaWxkKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogYW55IH0+KSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnN1Z2dlc3Rpb25UZW1wbGF0ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGlzT3BlbiA9IGZhbHNlO1xuICBmaWx0ZXJlZFN1Z2dlc3Rpb25zOiBzdHJpbmdbXSA9IFtdO1xuICBzdWdnZXN0aW9uVGVtcGxhdGU6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBhbnkgfT4gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgYWN0aXZlSW5kZXggPSAtMTtcblxuICBwcml2YXRlIHByZXZpb3VzVmFsdWU6IHN0cmluZztcbiAgcHJpdmF0ZSBjdXJzb3JNZW50aW9uOiBzdHJpbmc7XG4gIHByaXZhdGUgY3Vyc29yTWVudGlvblN0YXJ0OiBudW1iZXI7XG4gIHByaXZhdGUgY3Vyc29yTWVudGlvbkVuZDogbnVtYmVyO1xuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWYgfCBudWxsO1xuICBwcml2YXRlIHBvcnRhbDogVGVtcGxhdGVQb3J0YWw8e30+O1xuICBwcml2YXRlIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgcHJpdmF0ZSBvdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuXG4gIHByaXZhdGUgZ2V0IHRyaWdnZXJOYXRpdmVFbGVtZW50KCk6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyLmVsLm5hdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIG5nRG9jdW1lbnQ6IGFueSwgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgICAgICAgICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXG4gICAgICAgICAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256U3VnZ2VzdGlvbnMnKSkge1xuICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgICAgICAgdGhpcy5yZXNldERyb3Bkb3duKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5iaW5kVHJpZ2dlckV2ZW50cygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZURyb3Bkb3duKCk7XG4gIH1cblxuICBjbG9zZURyb3Bkb3duKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIGdldE1lbnRpb25zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gZ2V0TWVudGlvbnModGhpcy50cmlnZ2VyLnZhbHVlLCB0aGlzLm56UHJlZml4KTtcbiAgfVxuXG4gIHNlbGVjdFN1Z2dlc3Rpb24oc3VnZ2VzdGlvbjogc3RyaW5nIHwge30pOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMubnpWYWx1ZVdpdGgoc3VnZ2VzdGlvbik7XG4gICAgdGhpcy50cmlnZ2VyLmluc2VydE1lbnRpb24oe1xuICAgICAgbWVudGlvbiA6IHZhbHVlLFxuICAgICAgc3RhcnRQb3M6IHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0LFxuICAgICAgZW5kUG9zICA6IHRoaXMuY3Vyc29yTWVudGlvbkVuZFxuICAgIH0pO1xuICAgIHRoaXMubnpPblNlbGVjdC5lbWl0KHN1Z2dlc3Rpb24pO1xuICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSAtMTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgdGhpcy50cmlnZ2VyLm9uQ2hhbmdlKHRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy50cmlnZ2VyLnZhbHVlID0gdGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMucmVzZXREcm9wZG93bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVLZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG4gICAgaWYgKHRoaXMuaXNPcGVuICYmIGtleUNvZGUgPT09IEVOVEVSICYmIHRoaXMuYWN0aXZlSW5kZXggIT09IC0xICYmIHRoaXMuZmlsdGVyZWRTdWdnZXN0aW9ucy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2VsZWN0U3VnZ2VzdGlvbih0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnNbIHRoaXMuYWN0aXZlSW5kZXggXSk7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVyB8fCBrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgdGhpcy5yZXNldERyb3Bkb3duKCk7XG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IFRBQiB8fCBrZXlDb2RlID09PSBFU0NBUEUpKSB7XG4gICAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmlzT3BlbiAmJiAoa2V5Q29kZSA9PT0gVVBfQVJST1cpKSB7XG4gICAgICAgIHRoaXMuc2V0UHJldmlvdXNJdGVtQWN0aXZlKCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pc09wZW4gJiYgKGtleUNvZGUgPT09IERPV05fQVJST1cpKSB7XG4gICAgICAgIHRoaXMuc2V0TmV4dEl0ZW1BY3RpdmUoKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0RHJvcGRvd24oKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFRyaWdnZXJFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy50cmlnZ2VyLm9uSW5wdXQuc3Vic2NyaWJlKChlKSA9PiB0aGlzLmhhbmRsZUlucHV0KGUpKTtcbiAgICB0aGlzLnRyaWdnZXIub25LZXlkb3duLnN1YnNjcmliZSgoZSkgPT4gdGhpcy5oYW5kbGVLZXlkb3duKGUpKTtcbiAgICB0aGlzLnRyaWdnZXIub25DbGljay5zdWJzY3JpYmUoKCkgPT4gdGhpcy5oYW5kbGVDbGljaygpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3VnZ2VzdGlvbnNGaWx0ZXIodmFsdWU6IHN0cmluZywgZW1pdDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHN1Z2dlc3Rpb25zID0gdmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWUgPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9IHZhbHVlO1xuICAgIGlmIChlbWl0KSB7XG4gICAgICB0aGlzLm56T25TZWFyY2hDaGFuZ2UuZW1pdCh7XG4gICAgICAgIHZhbHVlIDogdGhpcy5jdXJzb3JNZW50aW9uLnN1YnN0cmluZygxKSxcbiAgICAgICAgcHJlZml4OiB0aGlzLmN1cnNvck1lbnRpb25bIDAgXVxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHNlYXJjaFZhbHVlID0gc3VnZ2VzdGlvbnMudG9Mb3dlckNhc2UoKTtcbiAgICB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMgPSB0aGlzLm56U3VnZ2VzdGlvbnNcbiAgICAuZmlsdGVyKHN1Z2dlc3Rpb24gPT4gdGhpcy5uelZhbHVlV2l0aChzdWdnZXN0aW9uKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFZhbHVlKSk7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0RHJvcGRvd24oZW1pdDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLnJlc2V0Q3Vyc29yTWVudGlvbigpO1xuICAgIGlmICh0eXBlb2YgdGhpcy5jdXJzb3JNZW50aW9uICE9PSAnc3RyaW5nJyB8fCAhdGhpcy5jYW5PcGVuKCkpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wZG93bigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnN1Z2dlc3Rpb25zRmlsdGVyKHRoaXMuY3Vyc29yTWVudGlvbiwgZW1pdCk7XG4gICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMuaW5kZXhPZih0aGlzLmN1cnNvck1lbnRpb24uc3Vic3RyaW5nKDEpKTtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gYWN0aXZlSW5kZXggPj0gMCA/IGFjdGl2ZUluZGV4IDogMDtcbiAgICB0aGlzLm9wZW5Ecm9wZG93bigpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXROZXh0SXRlbUFjdGl2ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUluZGV4ID0gdGhpcy5hY3RpdmVJbmRleCArIDEgPD0gdGhpcy5maWx0ZXJlZFN1Z2dlc3Rpb25zLmxlbmd0aCAtIDFcbiAgICAgID8gdGhpcy5hY3RpdmVJbmRleCArIDFcbiAgICAgIDogMDtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IHRoaXMuYWN0aXZlSW5kZXggLSAxIDwgMFxuICAgICAgPyB0aGlzLmZpbHRlcmVkU3VnZ2VzdGlvbnMubGVuZ3RoIC0gMVxuICAgICAgOiB0aGlzLmFjdGl2ZUluZGV4IC0gMTtcbiAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYW5PcGVuKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50ID0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudDtcbiAgICByZXR1cm4gIWVsZW1lbnQucmVhZE9ubHkgJiYgIWVsZW1lbnQuZGlzYWJsZWQ7XG4gIH1cblxuICBwcml2YXRlIHJlc2V0Q3Vyc29yTWVudGlvbigpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQudmFsdWUucmVwbGFjZSgvW1xcclxcbl0vZywgJyAnKSB8fCAnJztcbiAgICBjb25zdCBzZWxlY3Rpb25TdGFydCA9IHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQuc2VsZWN0aW9uU3RhcnQ7XG4gICAgY29uc3QgcHJlZml4ID0gdHlwZW9mIHRoaXMubnpQcmVmaXggPT09ICdzdHJpbmcnID8gWyB0aGlzLm56UHJlZml4IF0gOiB0aGlzLm56UHJlZml4O1xuICAgIGxldCBpID0gcHJlZml4Lmxlbmd0aDtcbiAgICB3aGlsZSAoaSA+PSAwKSB7XG4gICAgICBjb25zdCBzdGFydFBvcyA9IHZhbHVlLmxhc3RJbmRleE9mKHByZWZpeFsgaSBdLCBzZWxlY3Rpb25TdGFydCk7XG4gICAgICBjb25zdCBlbmRQb3MgPSB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpID4gLTEgPyB2YWx1ZS5pbmRleE9mKCcgJywgc2VsZWN0aW9uU3RhcnQpIDogdmFsdWUubGVuZ3RoO1xuICAgICAgY29uc3QgbWVudGlvbiA9IHZhbHVlLnN1YnN0cmluZyhzdGFydFBvcywgZW5kUG9zKTtcbiAgICAgIGlmICgoc3RhcnRQb3MgPiAwICYmIHZhbHVlWyBzdGFydFBvcyAtIDEgXSAhPT0gJyAnKVxuICAgICAgICB8fCBzdGFydFBvcyA8IDBcbiAgICAgICAgfHwgbWVudGlvbi5pbmNsdWRlcyhwcmVmaXhbIGkgXSwgMSlcbiAgICAgICAgfHwgbWVudGlvbi5pbmNsdWRlcygnICcpKSB7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0ID0gLTE7XG4gICAgICAgIHRoaXMuY3Vyc29yTWVudGlvbkVuZCA9IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uID0gbWVudGlvbjtcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uU3RhcnQgPSBzdGFydFBvcztcbiAgICAgICAgdGhpcy5jdXJzb3JNZW50aW9uRW5kID0gZW5kUG9zO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpLS07XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVQb3NpdGlvbnMoKTogdm9pZCB7XG4gICAgY29uc3QgY29vcmRpbmF0ZXMgPSBnZXRDYXJldENvb3JkaW5hdGVzKHRoaXMudHJpZ2dlck5hdGl2ZUVsZW1lbnQsIHRoaXMuY3Vyc29yTWVudGlvblN0YXJ0KTtcbiAgICBjb25zdCB0b3AgPSBjb29yZGluYXRlcy50b3BcbiAgICAgIC0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHRcbiAgICAgIC0gdGhpcy50cmlnZ2VyTmF0aXZlRWxlbWVudC5zY3JvbGxUb3BcbiAgICAgICsgKHRoaXMubnpQbGFjZW1lbnQgPT09ICdib3R0b20nID8gY29vcmRpbmF0ZXMuaGVpZ2h0IDogMCk7XG4gICAgY29uc3QgbGVmdCA9IGNvb3JkaW5hdGVzLmxlZnQgLSB0aGlzLnRyaWdnZXJOYXRpdmVFbGVtZW50LnNjcm9sbExlZnQ7XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5LndpdGhEZWZhdWx0T2Zmc2V0WChsZWZ0KS53aXRoRGVmYXVsdE9mZnNldFkodG9wKTtcbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ2JvdHRvbScpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsgREVGQVVMVF9NRU5USU9OX1BPU0lUSU9OU1sgMCBdIF0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelBsYWNlbWVudCA9PT0gJ3RvcCcpIHtcbiAgICAgIHRoaXMucG9zaXRpb25TdHJhdGVneS53aXRoUG9zaXRpb25zKFsgREVGQVVMVF9NRU5USU9OX1BPU0lUSU9OU1sgMSBdIF0pO1xuICAgIH1cbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kuYXBwbHkoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbWVyZ2U8TW91c2VFdmVudCB8IFRvdWNoRXZlbnQ+KFxuICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMubmdEb2N1bWVudCwgJ2NsaWNrJyksXG4gICAgICBmcm9tRXZlbnQ8VG91Y2hFdmVudD4odGhpcy5uZ0RvY3VtZW50LCAndG91Y2hlbmQnKVxuICAgIClcbiAgICAuc3Vic2NyaWJlKChldmVudDogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNsaWNrVGFyZ2V0ICE9PSB0aGlzLnRyaWdnZXIuZWwubmF0aXZlRWxlbWVudCAmJiB0aGlzLmlzT3Blbikge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcGRvd24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgYXR0YWNoT3ZlcmxheSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMub3ZlcmxheVJlZikge1xuICAgICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5zdWdnZXN0aW9uc1RlbXAsIHRoaXMudmlld0NvbnRhaW5lclJlZik7XG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZygpKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiAhdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgICAgdGhpcy5vdmVybGF5QmFja2Ryb3BDbGlja1N1YnNjcmlwdGlvbiA9IHRoaXMuc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5ICA6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPdmVybGF5UG9zaXRpb24oKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ3RvcCcgfSksXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9KVxuICAgIF07XG4gICAgdGhpcy5wb3NpdGlvblN0cmF0ZWd5ID0gdGhpcy5vdmVybGF5LnBvc2l0aW9uKClcbiAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLnRyaWdnZXIuZWwpXG4gICAgLndpdGhQb3NpdGlvbnMocG9zaXRpb25zKVxuICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxuICAgIC53aXRoUHVzaChmYWxzZSk7XG4gICAgcmV0dXJuIHRoaXMucG9zaXRpb25TdHJhdGVneTtcbiAgfVxuXG59XG4iXX0=