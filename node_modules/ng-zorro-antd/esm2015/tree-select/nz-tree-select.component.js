/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE } from '@angular/cdk/keycodes';
import { ConnectionPositionPair, Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { forwardRef, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { merge, of as observableOf } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { selectDropDownAnimation } from '../core/animation/select-dropdown-animations';
import { selectTagAnimation } from '../core/animation/select-tag-animations';
import { InputBoolean } from '../core/util/convert';
import { NzTreeComponent } from '../tree/nz-tree.component';
export class NzTreeSelectComponent {
    /**
     * @param {?} renderer
     * @param {?} cdr
     * @param {?} overlay
     * @param {?} viewContainerRef
     */
    constructor(renderer, cdr, overlay, viewContainerRef) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.overlay = overlay;
        this.viewContainerRef = viewContainerRef;
        this.nzAllowClear = true;
        this.nzShowExpand = true;
        this.nzDropdownMatchSelectWidth = true;
        this.nzCheckable = false;
        this.nzShowSearch = false;
        this.nzDisabled = false;
        this.nzShowLine = false;
        this.nzAsyncData = false;
        this.nzMultiple = false;
        this.nzDefaultExpandAll = false;
        this.nzNodes = [];
        this.nzOpen = false;
        this.nzSize = 'default';
        this.nzPlaceHolder = '';
        this.nzDefaultExpandedKeys = [];
        this.nzDisplayWith = (node) => node.title;
        this.nzOpenChange = new EventEmitter();
        this.nzCleared = new EventEmitter();
        this.nzRemoved = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzTreeClick = new EventEmitter();
        this.nzTreeCheckBoxChange = new EventEmitter();
        this.isComposing = false;
        this.isDestroy = true;
        this.inputValue = '';
        this.dropDownPosition = 'bottom';
        this.selectedNodes = [];
        this.value = [];
        this.onTouched = () => null;
    }
    /**
     * @return {?}
     */
    get placeHolderDisplay() {
        return this.inputValue || this.isComposing || this.selectedNodes.length ? 'none' : 'block';
    }
    /**
     * @return {?}
     */
    get searchDisplay() {
        return this.nzOpen ? 'block' : 'none';
    }
    /**
     * @return {?}
     */
    get isMultiple() {
        return this.nzMultiple || this.nzCheckable;
    }
    /**
     * @return {?}
     */
    get selectedValueDisplay() {
        /** @type {?} */
        let showSelectedValue = false;
        /** @type {?} */
        let opacity = 1;
        if (!this.nzShowSearch) {
            showSelectedValue = true;
        }
        else {
            if (this.nzOpen) {
                showSelectedValue = !(this.inputValue || this.isComposing);
                if (showSelectedValue) {
                    opacity = 0.4;
                }
            }
            else {
                showSelectedValue = true;
            }
        }
        return {
            display: showSelectedValue ? 'block' : 'none',
            opacity: `${opacity}`
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.isDestroy = false;
        this.selectionChangeSubscription = this.subscribeSelectionChange();
        Promise.resolve().then(() => {
            this.updateDropDownClassMap();
            this.updateCdkConnectedOverlayStatus();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroy = true;
        this.detachOverlay();
        this.selectionChangeSubscription.unsubscribe();
        this.overlayBackdropClickSubscription.unsubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.attachOverlay();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.closeDropDown();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzNodes')) {
            setTimeout(() => this.updateSelectedNodes(), 0);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value) {
            if (this.isMultiple && Array.isArray(value)) {
                this.value = value;
            }
            else {
                this.value = [(/** @type {?} */ (value))];
            }
            this.updateSelectedNodes();
        }
        else {
            this.value = [];
            this.selectedNodes.forEach(node => {
                this.removeSelected(node, false);
            });
            this.selectedNodes = [];
        }
        this.cdr.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
    }
    /**
     * @return {?}
     */
    trigger() {
        if (this.nzDisabled || (!this.nzDisabled && this.nzOpen)) {
            this.closeDropDown();
        }
        else {
            this.openDropdown();
            if (this.nzShowSearch) {
                this.focusOnInput();
            }
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        if (!this.nzDisabled) {
            this.nzOpen = true;
            this.nzOpenChange.emit(this.nzOpen);
            this.updateCdkConnectedOverlayStatus();
            this.updatePosition();
            this.updateDropDownClassMap();
        }
    }
    /**
     * @return {?}
     */
    closeDropDown() {
        this.onTouched();
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
        this.updateCdkConnectedOverlayStatus();
        this.cdr.markForCheck();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownInput(e) {
        /** @type {?} */
        const keyCode = e.keyCode;
        /** @type {?} */
        const eventTarget = /** @type {?} */ (e.target);
        if (this.isMultiple &&
            !eventTarget.value &&
            keyCode === BACKSPACE) {
            e.preventDefault();
            if (this.selectedNodes.length) {
                this.removeSelected(this.selectedNodes[this.selectedNodes.length - 1]);
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setInputValue(value) {
        this.inputValue = value;
        this.updateInputWidth();
        this.updatePosition();
    }
    /**
     * @return {?}
     */
    detachOverlay() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayBackdropClickSubscription.unsubscribe();
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
        }
    }
    /**
     * @param {?} node
     * @param {?=} emit
     * @param {?=} event
     * @return {?}
     */
    removeSelected(node, emit = true, event) {
        node.isSelected = false;
        node.isChecked = false;
        if (this.nzCheckable) {
            this.treeRef.nzTreeService.conduct(node);
            this.treeRef.nzTreeService.setCheckedNodeList(node);
        }
        else {
            this.treeRef.nzTreeService.setSelectedNodeList(node, this.nzMultiple);
        }
        if (emit) {
            this.nzRemoved.emit(node);
        }
        // Do not trigger the popup
        if (event && event.stopPropagation) {
            event.stopPropagation();
        }
    }
    /**
     * @return {?}
     */
    focusOnInput() {
        setTimeout(() => {
            if (this.inputElement) {
                this.inputElement.nativeElement.focus();
            }
        });
    }
    /**
     * @return {?}
     */
    attachOverlay() {
        this.portal = new TemplatePortal(this.dropdownTemplate, this.viewContainerRef);
        this.overlayRef = this.overlay.create(this.getOverlayConfig());
        this.overlayRef.attach(this.portal);
        this.cdr.detectChanges();
        this.overlayBackdropClickSubscription = this.subscribeOverlayBackdropClick();
    }
    /**
     * @return {?}
     */
    getOverlayConfig() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        return new OverlayConfig({
            positionStrategy: this.getOverlayPosition(),
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
            [this.nzDropdownMatchSelectWidth ? 'width' : 'minWidth']: overlayWidth,
            hasBackdrop: true
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
            .flexibleConnectedTo(this.treeSelect)
            .withPositions(positions)
            .withFlexibleDimensions(false)
            .withPush(false);
        return this.positionStrategy;
    }
    /**
     * @return {?}
     */
    subscribeOverlayBackdropClick() {
        return this.overlayRef.backdropClick()
            .subscribe(() => {
            this.closeDropDown();
        });
    }
    /**
     * @return {?}
     */
    subscribeSelectionChange() {
        return merge(this.nzTreeClick.pipe(tap((event) => {
            /** @type {?} */
            const node = event.node;
            if (this.nzCheckable && !node.isDisabled && !node.isDisableCheckbox) {
                node.isChecked = !node.isChecked;
                this.treeRef.nzTreeService.conduct(node);
                this.treeRef.nzTreeService.setCheckedNodeList(node);
            }
            if (this.nzCheckable) {
                node.isSelected = false;
            }
        }), filter((event) => {
            return this.nzCheckable ? (!event.node.isDisabled && !event.node.isDisableCheckbox) : !event.node.isDisabled;
        })), this.nzCheckable ? this.nzTreeCheckBoxChange : observableOf(), this.nzCleared, this.nzRemoved).subscribe(() => {
            this.updateSelectedNodes();
            /** @type {?} */
            const value = this.selectedNodes.map(node => node.key);
            this.value = [...value];
            if (this.nzShowSearch) {
                this.inputValue = '';
            }
            if (this.isMultiple) {
                this.onChange(value);
                if (this.nzShowSearch) {
                    this.focusOnInput();
                }
            }
            else {
                this.closeDropDown();
                this.onChange(value.length ? value[0] : null);
            }
        });
    }
    /**
     * @return {?}
     */
    updateSelectedNodes() {
        if (this.treeRef) {
            this.selectedNodes = [...(this.nzCheckable ? this.treeRef.getCheckedNodeList() : this.treeRef.getSelectedNodeList())];
        }
    }
    /**
     * @return {?}
     */
    updatePosition() {
        this.overlayRef.updatePosition();
    }
    /**
     * @return {?}
     */
    updateInputWidth() {
        if (this.isMultiple && this.inputElement) {
            if (this.inputValue || this.isComposing) {
                this.renderer.setStyle(this.inputElement.nativeElement, 'width', `${this.inputElement.nativeElement.scrollWidth}px`);
            }
            else {
                this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
            }
        }
    }
    /**
     * @return {?}
     */
    onClearSelection() {
        this.selectedNodes.forEach(node => {
            this.removeSelected(node, false);
        });
        this.nzCleared.emit();
        this.closeDropDown();
    }
    /**
     * @return {?}
     */
    updateDropDownClassMap() {
        if (this.treeRef && !this.treeRef.nzTreeClass['ant-select-tree']) {
            this.treeRef.nzTreeClass = Object.assign({}, this.treeRef.nzTreeClass, { ['ant-select-tree']: true });
        }
        this.dropDownClassMap = {
            ['ant-select-dropdown']: true,
            ['ant-select-tree-dropdown']: true,
            [`ant-select-dropdown--single`]: !this.nzMultiple,
            [`ant-select-dropdown--multiple`]: this.nzMultiple,
            [`ant-select-dropdown-placement-bottomLeft`]: this.dropDownPosition === 'bottom',
            [`ant-select-dropdown-placement-topLeft`]: this.dropDownPosition === 'top'
        };
    }
    /**
     * @return {?}
     */
    updateCdkConnectedOverlayStatus() {
        /** @type {?} */
        const overlayWidth = this.treeSelect.nativeElement.getBoundingClientRect().width;
        if (this.nzDropdownMatchSelectWidth) {
            this.overlayRef.updateSize({ width: overlayWidth });
        }
        else {
            this.overlayRef.updateSize({ minWidth: overlayWidth });
        }
        if (this.nzOpen) {
            this.renderer.removeStyle(this.overlayRef.backdropElement, 'display');
        }
        else {
            this.renderer.setStyle(this.overlayRef.backdropElement, 'display', 'none');
        }
    }
}
NzTreeSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree-select',
                animations: [selectDropDownAnimation, selectTagAnimation],
                template: "<ng-template #inputTemplate>\n  <input\n    #inputElement\n    autocomplete=\"off\"\n    class=\"ant-select-search__field\"\n    (compositionstart)=\"isComposing = true\"\n    (compositionend)=\"isComposing = false\"\n    (keydown)=\"onKeyDownInput($event)\"\n    [ngModel]=\"inputValue\"\n    (ngModelChange)=\"setInputValue($event)\"\n    [disabled]=\"nzDisabled\">\n</ng-template>\n\n<ng-template #dropdownTemplate>\n  <div [ngClass]=\"dropDownClassMap\" [@selectDropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden'\"\n    [ngStyle]=\"nzDropdownStyle\">\n    <nz-tree\n      #treeRef\n      [nzData]=\"nzNodes\"\n      [nzMultiple]=\"nzMultiple\"\n      [nzSearchValue]=\"inputValue\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzExpandAll]=\"nzDefaultExpandAll\"\n      [nzExpandedKeys]=\"nzDefaultExpandedKeys\"\n      [nzCheckedKeys]=\"nzCheckable ? value : []\"\n      [nzSelectedKeys]=\"!nzCheckable ? value : []\"\n      (nzExpandChange)=\"nzExpandChange.emit($event)\"\n      (nzClick)=\"nzTreeClick.emit($event)\"\n      (nzCheckedKeysChange)=\"updateSelectedNodes()\"\n      (nzSelectedKeysChange)=\"updateSelectedNodes()\"\n      (nzCheckBoxChange)=\"nzTreeCheckBoxChange.emit($event)\">\n    </nz-tree>\n  </div>\n</ng-template>\n\n<div\n  #treeSelect\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"!isMultiple\"\n  [class.ant-select-selection--multiple]=\"isMultiple\"\n  tabindex=\"0\">\n  <ng-container *ngIf=\"!isMultiple\">\n    <div class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n\n      <div\n        *ngIf=\"selectedNodes.length === 1\"\n        class=\"ant-select-selection-selected-value\"\n        [attr.title]=\"nzDisplayWith(selectedNodes[0])\"\n        [ngStyle]=\"selectedValueDisplay\">\n        {{ nzDisplayWith(selectedNodes[0]) }}\n      </div>\n\n      <div\n        *ngIf=\"nzShowSearch\"\n        [style.display]=\"searchDisplay\"\n        class=\"ant-select-search ant-select-search--inline\">\n        <div class=\"ant-select-search__field__wrap\">\n          <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n          <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\n        </div>\n      </div>\n\n    </div>\n  </ng-container>\n  <ng-container *ngIf=\"isMultiple\">\n    <ul class=\"ant-select-selection__rendered\">\n      <div\n        *ngIf=\"nzPlaceHolder && selectedNodes.length === 0\"\n        [style.display]=\"placeHolderDisplay\"\n        class=\"ant-select-selection__placeholder\">\n        {{ nzPlaceHolder }}\n      </div>\n      <ng-container *ngFor=\"let node of selectedNodes\">\n        <li\n          [@selectTagAnimation]\n          (@selectTagAnimation.done)=\"updatePosition()\"\n          [attr.title]=\"nzDisplayWith(node)\"\n          [class.ant-select-selection__choice__disabled]=\"node.isDisabled\"\n          class=\"ant-select-selection__choice\">\n               <span *ngIf=\"!node.isDisabled\" class=\"ant-select-selection__choice__remove\" (click)=\"removeSelected(node, true, $event)\">\n                 <i nz-icon type=\"close\" class=\"ant-select-remove-icon\"></i>\n               </span>\n          <span class=\"ant-select-selection__choice__content\">{{ nzDisplayWith(node) }}</span>\n        </li>\n      </ng-container>\n      <li class=\"ant-select-search ant-select-search--inline\">\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\n      </li>\n    </ul>\n  </ng-container>\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\" (click)=\"onClearSelection()\">\n    <i nz-icon type=\"close-circle\" class=\"ant-select-clear-icon\" theme=\"fill\"></i>\n  </span>\n  <span *ngIf=\"!isMultiple\" class=\"ant-select-arrow\">\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\n  </span>\n</div>",
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzTreeSelectComponent),
                        multi: true
                    }
                ],
                host: {
                    '[class.ant-select]': 'true',
                    '[class.ant-select-lg]': 'nzSize==="large"',
                    '[class.ant-select-sm]': 'nzSize==="small"',
                    '[class.ant-select-enabled]': '!nzDisabled',
                    '[class.ant-select-disabled]': 'nzDisabled',
                    '[class.ant-select-allow-clear]': 'nzAllowClear',
                    '[class.ant-select-open]': 'nzOpen'
                },
                styles: [`
    .ant-select-dropdown {
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
      margin-top: 4px;
      margin-bottom: 4px;
      overflow: auto;
    }
  `]
            }] }
];
/** @nocollapse */
NzTreeSelectComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef },
    { type: Overlay },
    { type: ViewContainerRef }
];
NzTreeSelectComponent.propDecorators = {
    nzAllowClear: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzDropdownMatchSelectWidth: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzShowSearch: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzNodes: [{ type: Input }],
    nzOpen: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzPlaceHolder: [{ type: Input }],
    nzDropdownStyle: [{ type: Input }],
    nzDefaultExpandedKeys: [{ type: Input }],
    nzDisplayWith: [{ type: Input }],
    nzOpenChange: [{ type: Output }],
    nzCleared: [{ type: Output }],
    nzRemoved: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzTreeClick: [{ type: Output }],
    nzTreeCheckBoxChange: [{ type: Output }],
    inputElement: [{ type: ViewChild, args: ['inputElement',] }],
    treeSelect: [{ type: ViewChild, args: ['treeSelect',] }],
    dropdownTemplate: [{ type: ViewChild, args: ['dropdownTemplate', { read: TemplateRef },] }],
    treeRef: [{ type: ViewChild, args: ['treeRef',] }],
    trigger: [{ type: HostListener, args: ['click',] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAllowClear", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDropdownMatchSelectWidth", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzCheckable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowSearch", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzShowLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzAsyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeSelectComponent.prototype, "nzDefaultExpandAll", void 0);
function NzTreeSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpen;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDefaultExpandedKeys;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzDisplayWith;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzCleared;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzRemoved;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeClick;
    /** @type {?} */
    NzTreeSelectComponent.prototype.nzTreeCheckBoxChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputElement;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeSelect;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropdownTemplate;
    /** @type {?} */
    NzTreeSelectComponent.prototype.treeRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isComposing;
    /** @type {?} */
    NzTreeSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.inputValue;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    NzTreeSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlayRef;
    /** @type {?} */
    NzTreeSelectComponent.prototype.portal;
    /** @type {?} */
    NzTreeSelectComponent.prototype.positionStrategy;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlayBackdropClickSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectionChangeSubscription;
    /** @type {?} */
    NzTreeSelectComponent.prototype.selectedNodes;
    /** @type {?} */
    NzTreeSelectComponent.prototype.value;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onChange;
    /** @type {?} */
    NzTreeSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeSelectComponent.prototype.renderer;
    /** @type {?} */
    NzTreeSelectComponent.prototype.cdr;
    /** @type {?} */
    NzTreeSelectComponent.prototype.overlay;
    /** @type {?} */
    NzTreeSelectComponent.prototype.viewContainerRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1zZWxlY3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUtc2VsZWN0L256LXRyZWUtc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQ0wsc0JBQXNCLEVBRXRCLE9BQU8sRUFDUCxhQUFhLEVBR2QsTUFBTSxzQkFBc0IsQ0FBQztBQUM5QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDckQsT0FBTyxFQUNMLFVBQVUsRUFFVixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQ0wsS0FBSyxFQUNMLEVBQUUsSUFBSSxZQUFZLEVBRW5CLE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw4Q0FBOEMsQ0FBQztBQUN2RixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFHcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBa0M1RCxNQUFNLE9BQU8scUJBQXFCOzs7Ozs7O0lBZ0ZoQyxZQUNVLFVBQ0EsS0FDQSxTQUNBO1FBSEEsYUFBUSxHQUFSLFFBQVE7UUFDUixRQUFHLEdB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Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQ29ubmVjdGlvblBvc2l0aW9uUGFpcixcbiAgRmxleGlibGVDb25uZWN0ZWRQb3NpdGlvblN0cmF0ZWd5LFxuICBPdmVybGF5LFxuICBPdmVybGF5Q29uZmlnLFxuICBPdmVybGF5UmVmLFxuICBQb3NpdGlvblN0cmF0ZWd5XG59IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3Q29udGFpbmVyUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQge1xuICBtZXJnZSxcbiAgb2YgYXMgb2JzZXJ2YWJsZU9mLFxuICBTdWJzY3JpcHRpb25cbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgc2VsZWN0RHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9zZWxlY3QtZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBzZWxlY3RUYWdBbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9zZWxlY3QtdGFnLWFuaW1hdGlvbnMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi90cmVlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi4vdHJlZS9uei10cmVlLW5vZGUnO1xuaW1wb3J0IHsgTnpUcmVlQ29tcG9uZW50IH0gZnJvbSAnLi4vdHJlZS9uei10cmVlLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgIDogJ256LXRyZWUtc2VsZWN0JyxcbiAgYW5pbWF0aW9ucyA6IFsgc2VsZWN0RHJvcERvd25BbmltYXRpb24sIHNlbGVjdFRhZ0FuaW1hdGlvbiBdLFxuICB0ZW1wbGF0ZVVybDogJy4vbnotdHJlZS1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxuICBwcm92aWRlcnMgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZVNlbGVjdENvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdCAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1zZWxlY3RdJyAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1sZ10nICAgICAgICAgOiAnbnpTaXplPT09XCJsYXJnZVwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtc21dJyAgICAgICAgIDogJ256U2l6ZT09PVwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWVuYWJsZWRdJyAgICA6ICchbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWRpc2FibGVkXScgICA6ICduekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtYWxsb3ctY2xlYXJdJzogJ256QWxsb3dDbGVhcicsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LW9wZW5dJyAgICAgICA6ICduek9wZW4nXG4gIH0sXG4gIHN0eWxlcyAgICAgOiBbIGBcbiAgICAuYW50LXNlbGVjdC1kcm9wZG93biB7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelRyZWVTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QWxsb3dDbGVhciA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dFeHBhbmQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja2FibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd1NlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBc3luY0RhdGEgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGVmYXVsdEV4cGFuZEFsbCA9IGZhbHNlO1xuICBASW5wdXQoKSBuek5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICcnO1xuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIG56RGVmYXVsdEV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpEaXNwbGF5V2l0aDogKG5vZGU6IE56VHJlZU5vZGUpID0+IHN0cmluZyA9IChub2RlOiBOelRyZWVOb2RlKSA9PiBub2RlLnRpdGxlO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGVhcmVkID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpSZW1vdmVkID0gbmV3IEV2ZW50RW1pdHRlcjxOelRyZWVOb2RlPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpFeHBhbmRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpUcmVlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpUcmVlQ2hlY2tCb3hDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ2lucHV0RWxlbWVudCcpIGlucHV0RWxlbWVudDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgndHJlZVNlbGVjdCcpIHRyZWVTZWxlY3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2Ryb3Bkb3duVGVtcGxhdGUnLCB7IHJlYWQ6IFRlbXBsYXRlUmVmIH0pIGRyb3Bkb3duVGVtcGxhdGU7XG4gIEBWaWV3Q2hpbGQoJ3RyZWVSZWYnKSB0cmVlUmVmOiBOelRyZWVDb21wb25lbnQ7XG5cbiAgaXNDb21wb3NpbmcgPSBmYWxzZTtcbiAgaXNEZXN0cm95ID0gdHJ1ZTtcbiAgaW5wdXRWYWx1ZSA9ICcnO1xuICBkcm9wRG93bkNsYXNzTWFwOiB7IFsgY2xhc3NOYW1lOiBzdHJpbmcgXTogYm9vbGVhbiB9O1xuICBkcm9wRG93blBvc2l0aW9uOiAndG9wJyB8ICdjZW50ZXInIHwgJ2JvdHRvbScgPSAnYm90dG9tJztcbiAgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcbiAgcG9ydGFsOiBUZW1wbGF0ZVBvcnRhbDx7fT47XG4gIHBvc2l0aW9uU3RyYXRlZ3k6IEZsZXhpYmxlQ29ubmVjdGVkUG9zaXRpb25TdHJhdGVneTtcbiAgb3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIHNlbGVjdGVkTm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICB2YWx1ZTogc3RyaW5nW10gPSBbXTtcblxuICBvbkNoYW5nZTogKHZhbHVlOiBzdHJpbmdbXSB8IHN0cmluZykgPT4gdm9pZDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBnZXQgcGxhY2VIb2xkZXJEaXNwbGF5KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZSB8fCB0aGlzLmlzQ29tcG9zaW5nIHx8IHRoaXMuc2VsZWN0ZWROb2Rlcy5sZW5ndGggPyAnbm9uZScgOiAnYmxvY2snO1xuICB9XG5cbiAgZ2V0IHNlYXJjaERpc3BsYXkoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5uek9wZW4gPyAnYmxvY2snIDogJ25vbmUnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNdWx0aXBsZSB8fCB0aGlzLm56Q2hlY2thYmxlO1xuICB9XG5cbiAgZ2V0IHNlbGVjdGVkVmFsdWVEaXNwbGF5KCk6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfSB7XG4gICAgbGV0IHNob3dTZWxlY3RlZFZhbHVlID0gZmFsc2U7XG4gICAgbGV0IG9wYWNpdHkgPSAxO1xuICAgIGlmICghdGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMubnpPcGVuKSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gISh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZyk7XG4gICAgICAgIGlmIChzaG93U2VsZWN0ZWRWYWx1ZSkge1xuICAgICAgICAgIG9wYWNpdHkgPSAwLjQ7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dTZWxlY3RlZFZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IHNob3dTZWxlY3RlZFZhbHVlID8gJ2Jsb2NrJyA6ICdub25lJyxcbiAgICAgIG9wYWNpdHk6IGAke29wYWNpdHl9YFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gZmFsc2U7XG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLnN1YnNjcmliZVNlbGVjdGlvbkNoYW5nZSgpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaXNEZXN0cm95ID0gdHJ1ZTtcbiAgICB0aGlzLmRldGFjaE92ZXJsYXkoKTtcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmF0dGFjaE92ZXJsYXkoKTtcbiAgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256Tm9kZXMnKSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKSwgMCk7XG4gICAgfVxuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogc3RyaW5nW10gfCBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IFsgKHZhbHVlIGFzIHN0cmluZykgXTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gW107XG4gICAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgICAgdGhpcy5yZW1vdmVTZWxlY3RlZChub2RlLCBmYWxzZSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2VsZWN0ZWROb2RlcyA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBzdHJpbmdbXSB8IHN0cmluZykgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gIH1cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxuICB0cmlnZ2VyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQgfHwgKCF0aGlzLm56RGlzYWJsZWQgJiYgdGhpcy5uek9wZW4pKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuRHJvcGRvd24oKTtcbiAgICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9wZW5Ecm9wZG93bigpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uek9wZW4gPSB0cnVlO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgICB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIGNsb3NlRHJvcERvd24oKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgb25LZXlEb3duSW5wdXQoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBlLmtleUNvZGU7XG4gICAgY29uc3QgZXZlbnRUYXJnZXQgPSBlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50O1xuICAgIGlmIChcbiAgICAgIHRoaXMuaXNNdWx0aXBsZSAmJlxuICAgICAgIWV2ZW50VGFyZ2V0LnZhbHVlICYmXG4gICAgICBrZXlDb2RlID09PSBCQUNLU1BBQ0VcbiAgICApIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQodGhpcy5zZWxlY3RlZE5vZGVzWyB0aGlzLnNlbGVjdGVkTm9kZXMubGVuZ3RoIC0gMSBdKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRJbnB1dFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUlucHV0V2lkdGgoKTtcbiAgICB0aGlzLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICBkZXRhY2hPdmVybGF5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcbiAgICAgIHRoaXMub3ZlcmxheUJhY2tkcm9wQ2xpY2tTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU2VsZWN0ZWQobm9kZTogTnpUcmVlTm9kZSwgZW1pdDogYm9vbGVhbiA9IHRydWUsIGV2ZW50PzogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIG5vZGUuaXNTZWxlY3RlZCA9IGZhbHNlO1xuICAgIG5vZGUuaXNDaGVja2VkID0gZmFsc2U7XG4gICAgaWYgKHRoaXMubnpDaGVja2FibGUpIHtcbiAgICAgIHRoaXMudHJlZVJlZi5uelRyZWVTZXJ2aWNlLmNvbmR1Y3Qobm9kZSk7XG4gICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3Qobm9kZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHJlZVJlZi5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3Qobm9kZSwgdGhpcy5uek11bHRpcGxlKTtcbiAgICB9XG4gICAgaWYgKGVtaXQpIHtcbiAgICAgIHRoaXMubnpSZW1vdmVkLmVtaXQobm9kZSk7XG4gICAgfVxuXG4gICAgLy8gRG8gbm90IHRyaWdnZXIgdGhlIHBvcHVwXG4gICAgaWYgKGV2ZW50ICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZm9jdXNPbklucHV0KCk6IHZvaWQge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuaW5wdXRFbGVtZW50KSB7XG4gICAgICAgIHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGF0dGFjaE92ZXJsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5wb3J0YWwgPSBuZXcgVGVtcGxhdGVQb3J0YWwodGhpcy5kcm9wZG93blRlbXBsYXRlLCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUodGhpcy5nZXRPdmVybGF5Q29uZmlnKCkpO1xuICAgIHRoaXMub3ZlcmxheVJlZi5hdHRhY2godGhpcy5wb3J0YWwpO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLm92ZXJsYXlCYWNrZHJvcENsaWNrU3Vic2NyaXB0aW9uID0gdGhpcy5zdWJzY3JpYmVPdmVybGF5QmFja2Ryb3BDbGljaygpO1xuICB9XG5cbiAgZ2V0T3ZlcmxheUNvbmZpZygpOiBPdmVybGF5Q29uZmlnIHtcbiAgICBjb25zdCBvdmVybGF5V2lkdGggPSB0aGlzLnRyZWVTZWxlY3QubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICByZXR1cm4gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgcG9zaXRpb25TdHJhdGVneSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24oKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcbiAgICAgIFsgdGhpcy5uekRyb3Bkb3duTWF0Y2hTZWxlY3RXaWR0aCA/ICd3aWR0aCcgOiAnbWluV2lkdGgnIF06IG92ZXJsYXlXaWR0aCxcbiAgICAgIGhhc0JhY2tkcm9wICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIGdldE92ZXJsYXlQb3NpdGlvbigpOiBQb3NpdGlvblN0cmF0ZWd5IHtcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdzdGFydCcsIG9yaWdpblk6ICdib3R0b20nIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcbiAgICAgIG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSwgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH0pXG4gICAgXTtcbiAgICB0aGlzLnBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLm92ZXJsYXkucG9zaXRpb24oKVxuICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMudHJlZVNlbGVjdClcbiAgICAud2l0aFBvc2l0aW9ucyhwb3NpdGlvbnMpXG4gICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXG4gICAgLndpdGhQdXNoKGZhbHNlKTtcbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvblN0cmF0ZWd5O1xuICB9XG5cbiAgc3Vic2NyaWJlT3ZlcmxheUJhY2tkcm9wQ2xpY2soKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5jbG9zZURyb3BEb3duKCk7XG4gICAgfSk7XG4gIH1cblxuICBzdWJzY3JpYmVTZWxlY3Rpb25DaGFuZ2UoKTogU3Vic2NyaXB0aW9uIHtcbiAgICByZXR1cm4gbWVyZ2UoXG4gICAgICB0aGlzLm56VHJlZUNsaWNrLnBpcGUoXG4gICAgICAgIHRhcCgoZXZlbnQ6IE56Rm9ybWF0RW1pdEV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgbm9kZSA9IGV2ZW50Lm5vZGU7XG4gICAgICAgICAgaWYgKHRoaXMubnpDaGVja2FibGUgJiYgIW5vZGUuaXNEaXNhYmxlZCAmJiAhbm9kZS5pc0Rpc2FibGVDaGVja2JveCkge1xuICAgICAgICAgICAgbm9kZS5pc0NoZWNrZWQgPSAhbm9kZS5pc0NoZWNrZWQ7XG4gICAgICAgICAgICB0aGlzLnRyZWVSZWYubnpUcmVlU2VydmljZS5jb25kdWN0KG5vZGUpO1xuICAgICAgICAgICAgdGhpcy50cmVlUmVmLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodGhpcy5uekNoZWNrYWJsZSkge1xuICAgICAgICAgICAgbm9kZS5pc1NlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgZmlsdGVyKChldmVudDogTnpGb3JtYXRFbWl0RXZlbnQpID0+IHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5uekNoZWNrYWJsZSA/ICghZXZlbnQubm9kZS5pc0Rpc2FibGVkICYmICFldmVudC5ub2RlLmlzRGlzYWJsZUNoZWNrYm94KSA6ICFldmVudC5ub2RlLmlzRGlzYWJsZWQ7XG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgdGhpcy5uekNoZWNrYWJsZSA/IHRoaXMubnpUcmVlQ2hlY2tCb3hDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKSxcbiAgICAgIHRoaXMubnpDbGVhcmVkLFxuICAgICAgdGhpcy5uelJlbW92ZWRcbiAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkTm9kZXMoKTtcbiAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZE5vZGVzLm1hcChub2RlID0+IG5vZGUua2V5KTtcbiAgICAgIHRoaXMudmFsdWUgPSBbIC4uLnZhbHVlIF07XG4gICAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5uelNob3dTZWFyY2gpIHtcbiAgICAgICAgICB0aGlzLmZvY3VzT25JbnB1dCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZS5sZW5ndGggPyB2YWx1ZVsgMCBdIDogbnVsbCk7XG4gICAgICB9XG5cbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkTm9kZXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJlZVJlZikge1xuICAgICAgdGhpcy5zZWxlY3RlZE5vZGVzID0gWyAuLi4odGhpcy5uekNoZWNrYWJsZSA/IHRoaXMudHJlZVJlZi5nZXRDaGVja2VkTm9kZUxpc3QoKSA6IHRoaXMudHJlZVJlZi5nZXRTZWxlY3RlZE5vZGVMaXN0KCkpIF07XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlUG9zaXRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVBvc2l0aW9uKCk7XG4gIH1cblxuICB1cGRhdGVJbnB1dFdpZHRoKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzTXVsdGlwbGUgJiYgdGhpcy5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUgfHwgdGhpcy5pc0NvbXBvc2luZykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGh9cHhgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DbGVhclNlbGVjdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkTm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlU2VsZWN0ZWQobm9kZSwgZmFsc2UpO1xuICAgIH0pO1xuICAgIHRoaXMubnpDbGVhcmVkLmVtaXQoKTtcbiAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgfVxuXG4gIHVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudHJlZVJlZiAmJiAhdGhpcy50cmVlUmVmLm56VHJlZUNsYXNzWyAnYW50LXNlbGVjdC10cmVlJyBdKSB7XG4gICAgICB0aGlzLnRyZWVSZWYubnpUcmVlQ2xhc3MgPSB7IC4uLnRoaXMudHJlZVJlZi5uelRyZWVDbGFzcywgWyAnYW50LXNlbGVjdC10cmVlJyBdOiB0cnVlIH07XG4gICAgfVxuICAgIHRoaXMuZHJvcERvd25DbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1zZWxlY3QtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbICdhbnQtc2VsZWN0LXRyZWUtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgYW50LXNlbGVjdC1kcm9wZG93bi0tc2luZ2xlYCBdICAgICAgICAgICAgIDogIXRoaXMubnpNdWx0aXBsZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlYCBdICAgICAgICAgICA6IHRoaXMubnpNdWx0aXBsZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRgIF06IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbScsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0YCBdICAgOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3ZlcmxheVdpZHRoID0gdGhpcy50cmVlU2VsZWN0Lm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgaWYgKHRoaXMubnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IG92ZXJsYXlXaWR0aCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vdmVybGF5UmVmLnVwZGF0ZVNpemUoeyBtaW5XaWR0aDogb3ZlcmxheVdpZHRoIH0pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50LCAnZGlzcGxheScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==