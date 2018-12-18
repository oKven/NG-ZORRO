/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { DOWN_ARROW, SPACE, TAB } from '@angular/cdk/keycodes';
import { CdkConnectedOverlay, CdkOverlayOrigin } from '@angular/cdk/overlay';
import { forwardRef, Component, ContentChildren, EventEmitter, HostListener, Input, Output, QueryList, Renderer2, SimpleChange, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzOptionContainerComponent } from './nz-option-container.component';
import { NzOptionGroupComponent } from './nz-option-group.component';
import { NzOptionComponent } from './nz-option.component';
import { defaultFilterOption } from './nz-option.pipe';
import { NzSelectTopControlComponent } from './nz-select-top-control.component';
var NzSelectComponent = /** @class */ (function () {
    function NzSelectComponent(renderer) {
        this.renderer = renderer;
        this._disabled = false;
        this._allowClear = false;
        this._showSearch = false;
        this._open = false;
        this._autoFocus = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.dropDownPosition = 'bottom';
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        this.listOfTemplateOption = [];
        this.searchValue = '';
        this.isDestroy = true;
        this.isInit = false;
        this.nzOnSearch = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzOpenChange = new EventEmitter();
        this.nzSize = 'default';
        this.nzServerSearch = false;
        this.nzMode = 'default';
        this.nzDropdownMatchSelectWidth = true;
        this.nzFilterOption = defaultFilterOption;
        this.nzMaxMultipleCount = Infinity;
        /**
         * https://github.com/angular/angular/pull/13349/files *
         */
        this.compareWith = function (o1, o2) { return o1 === o2; };
    }
    Object.defineProperty(NzSelectComponent.prototype, "nzDropdownClassName", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dropdownClassName;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dropdownClassName = value;
            this.updateDropDownClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this._open;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._open = value;
            this.handleEscBug();
            this.updateCdkConnectedOverlayStatus();
            this.updateDropDownClassMap();
            if (this.nzOpen) {
                if (this.nzSelectTopControlComponent) {
                    this.nzSelectTopControlComponent.focusOnInput();
                    this.nzSelectTopControlComponent.setInputValue('', true);
                }
                if (this.nzOptionContainerComponent) {
                    this.nzOptionContainerComponent.scrollIntoView();
                }
                if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef) {
                    this.cdkConnectedOverlay.overlayRef.updatePosition();
                    /** @type {?} */
                    var backdropElement = this.cdkConnectedOverlay.overlayRef.backdropElement;
                    /** @type {?} */
                    var parentNode = this.renderer.parentNode(backdropElement);
                    /** @type {?} */
                    var hostElement = this.cdkConnectedOverlay.overlayRef.hostElement;
                    this.renderer.appendChild(parentNode, backdropElement);
                    this.renderer.appendChild(parentNode, hostElement);
                }
            }
            else {
                if (this.nzSelectTopControlComponent) {
                    this.nzSelectTopControlComponent.setInputValue('', false);
                }
                if (this.nzOptionContainerComponent) {
                    this.nzOptionContainerComponent.resetActiveOption();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            if (this.nzDisabled) {
                this.closeDropDown();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzAllowClear", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowClear;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowClear = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzShowSearch", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSearch;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSearch = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "nzPlaceHolder", {
        get: /**
         * @return {?}
         */
        function () {
            return this._placeholder;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._placeholder = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onClick = /**
     * @return {?}
     */
    function () {
        if (!this.nzDisabled) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzSelectComponent.prototype._handleKeydown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this._disabled) {
            return;
        }
        /** @type {?} */
        var keyCode = event.keyCode;
        if (!this._open) {
            if (keyCode === SPACE || keyCode === DOWN_ARROW) {
                this.nzOpen = true;
                this.nzOpenChange.emit(this.nzOpen);
                event.preventDefault();
            }
        }
        else {
            if (keyCode === TAB) {
                // if (keyCode === SPACE || keyCode === TAB) { // #2201
                this.nzOpen = false;
                this.nzOpenChange.emit(this.nzOpen);
                event.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && this.nzSelectTopControlComponent.inputElement) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.nzSelectTopControlComponent.inputElement) {
            this.nzSelectTopControlComponent.inputElement.nativeElement.blur();
        }
    };
    /** overlay can not be always open , reopen overlay after press esc **/
    /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    NzSelectComponent.prototype.handleEscBug = /**
     * overlay can not be always open , reopen overlay after press esc *
     * @return {?}
     */
    function () {
        if (this.nzOpen && this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && !this.cdkConnectedOverlay.overlayRef.backdropElement) {
            this.cdkConnectedOverlay.open = true;
            this.cdkConnectedOverlay.ngOnChanges({ open: new SimpleChange(false, true, false) });
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectComponent.prototype.onKeyDownCdkOverlayOrigin = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzOptionContainerComponent) {
            this.nzOptionContainerComponent.onKeyDownUl(e);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.closeDropDown = /**
     * @return {?}
     */
    function () {
        if (this.nzOpen) {
            this.onTouched();
            this.nzOpen = false;
            this.nzOpenChange.emit(this.nzOpen);
            this.blur();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzSelectComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        this.dropDownPosition = position.connectionPair.originY;
        this.updateDropDownClassMap();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.onClickOptionFromOptionContainer = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.closeDropDown();
        }
        else if (this.nzMode === 'tags') {
            this.onSearch('', true);
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && this.nzOpen && this.cdkOverlayOrigin) {
            if (this.nzDropdownMatchSelectWidth) {
                this.overlayWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ width: this.overlayWidth });
            }
            else {
                this.overlayMinWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                this.cdkConnectedOverlay.overlayRef.updateSize({ minWidth: this.overlayMinWidth });
            }
        }
        this.updateCdkConnectedOverlayPositions();
        if (this.cdkConnectedOverlay && this.cdkConnectedOverlay.overlayRef && this.cdkConnectedOverlay.overlayRef.backdropElement) {
            if (this.nzOpen) {
                this.renderer.removeStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display');
            }
            else {
                this.renderer.setStyle(this.cdkConnectedOverlay.overlayRef.backdropElement, 'display', 'none');
            }
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** wait for input size change **/
        setTimeout(function () { return _this.cdkConnectedOverlay.overlayRef.updatePosition(); }, 160);
    };
    Object.defineProperty(NzSelectComponent.prototype, "isSingleMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'default';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSelectComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags' || this.nzMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    // tslint:disable-next-line:no-any
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateListOfSelectedValueFromOptionContainer = /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    };
    /** option container nzListOfSelectedValueChange -> update ngModel **/
    // tslint:disable-next-line:no-any
    /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateListOfSelectedValueFromTopControl = /**
     * option container nzListOfSelectedValueChange -> update ngModel *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.clearSearchValue();
        this.updateFromSelectedList(value);
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateFromSelectedList = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var modelValue;
        if (this.isSingleMode) {
            if (value.length) {
                modelValue = value[0];
            }
        }
        else {
            modelValue = value;
            this.updateCdkConnectedOverlayPositions();
        }
        this.updateNgModel(value, modelValue);
    };
    /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    NzSelectComponent.prototype.onSearch = /**
     * @param {?} value
     * @param {?} emit
     * @return {?}
     */
    function (value, emit) {
        if (emit && (this.searchValue !== value)) {
            this.nzOnSearch.emit(value);
            this.searchValue = value;
        }
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.clearNgModel = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.updateNgModel([], null);
        }
        else {
            this.updateNgModel([], []);
        }
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.updateNgModel = /**
     * @param {?} list
     * @param {?} value
     * @return {?}
     */
    function (list, value) {
        this.listOfSelectedValue = list;
        if (value !== this.value) {
            this.value = value;
            this.onChange(this.value);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.listOfTemplateOptionChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.listOfTemplateOption = value;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.updateDropDownClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.dropDownClassMap = (_a = {},
            _a['ant-select-dropdown'] = true,
            _a["ant-select-dropdown--single"] = this.isSingleMode,
            _a["ant-select-dropdown--multiple"] = this.isMultipleOrTags,
            _a["ant-select-dropdown-placement-bottomLeft"] = this.dropDownPosition === 'bottom',
            _a["ant-select-dropdown-placement-topLeft"] = this.dropDownPosition === 'top',
            _a["" + this.nzDropdownClassName] = !!this.nzDropdownClassName,
            _a);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSelectComponent.prototype.onClearSelection = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // TODO: should not clear disabled option ?
        e.stopPropagation();
        this.clearNgModel();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.clearSearchValue = /**
     * @return {?}
     */
    function () {
        if (this.isSingleMode) {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
        else {
            this.nzSelectTopControlComponent.setInputValue('', false);
        }
    };
    /** update ngModel -> update listOfSelectedValue **/
    // tslint:disable-next-line:no-any
    /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    NzSelectComponent.prototype.writeValue = /**
     * update ngModel -> update listOfSelectedValue *
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                this.listOfSelectedValue = value;
            }
            else {
                this.listOfSelectedValue = [value];
            }
        }
        else {
            this.listOfSelectedValue = [];
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSelectComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSelectComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.isDestroy = false;
        this.updateDropDownClassMap();
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInit = true;
        Promise.resolve().then(function () { return _this.updateCdkConnectedOverlayStatus(); });
    };
    /**
     * @return {?}
     */
    NzSelectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.isDestroy = true;
    };
    NzSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-select',
                    preserveWhitespaces: false,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzSelectComponent; }),
                            multi: true
                        }
                    ],
                    animations: [
                        trigger('dropDownAnimation', [
                            state('hidden', style({
                                opacity: 0,
                                display: 'none'
                            })),
                            state('bottom', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 0%'
                            })),
                            state('top', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 100%'
                            })),
                            transition('hidden => bottom', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }),
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                            ]),
                            transition('bottom => hidden', [
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }))
                            ]),
                            transition('hidden => top', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 100%'
                                }),
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                            ]),
                            transition('top => hidden', [
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 100%'
                                }))
                            ])
                        ])
                    ],
                    template: "<div\n  cdkOverlayOrigin\n  class=\"ant-select-selection\"\n  [class.ant-select-selection--single]=\"isSingleMode\"\n  [class.ant-select-selection--multiple]=\"isMultipleOrTags\"\n  (keydown)=\"onKeyDownCdkOverlayOrigin($event)\"\n  tabindex=\"0\">\n  <div\n    nz-select-top-control\n    [nzOpen]=\"nzOpen\"\n    [compareWith]=\"compareWith\"\n    [nzPlaceHolder]=\"nzPlaceHolder\"\n    [nzShowSearch]=\"nzShowSearch\"\n    [nzDisabled]=\"nzDisabled\"\n    [nzMode]=\"nzMode\"\n    [nzListTemplateOfOption]=\"listOfTemplateOption\"\n    [nzListOfSelectedValue]=\"listOfSelectedValue\"\n    (nzOnSearch)=\"onSearch($event.value,$event.emit)\"\n    (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromTopControl($event)\">\n  </div>\n  <span *ngIf=\"nzAllowClear\" class=\"ant-select-selection__clear\" nz-select-unselectable (click)=\"onClearSelection($event)\">\n    <i nz-icon type=\"close-circle\" theme=\"fill\" class=\"ant-select-close-icon\"></i>\n  </span>\n  <span class=\"ant-select-arrow\" nz-select-unselectable>\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\"></i>\n    <b></b>\n  </span>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\n  (backdropClick)=\"closeDropDown()\"\n  (detach)=\"closeDropDown();\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayWidth]=\"overlayWidth\"\n  [cdkConnectedOverlayMinWidth]=\"overlayMinWidth\"\n  [cdkConnectedOverlayOpen]=\"!isDestroy\">\n  <div [ngClass]=\"dropDownClassMap\" [@dropDownAnimation]=\"nzOpen ? dropDownPosition : 'hidden' \" [ngStyle]=\"nzDropdownStyle\">\n    <div\n      style=\"overflow: auto\"\n      nz-option-container\n      [listOfNzOptionComponent]=\"listOfNzOptionComponent\"\n      [listOfNzOptionGroupComponent]=\"listOfNzOptionGroupComponent\"\n      [nzSearchValue]=\"searchValue\"\n      [nzFilterOption]=\"nzFilterOption\"\n      [nzServerSearch]=\"nzServerSearch\"\n      [compareWith]=\"compareWith\"\n      [nzNotFoundContent]=\"nzNotFoundContent\"\n      [nzMaxMultipleCount]=\"nzMaxMultipleCount\"\n      [nzMode]=\"nzMode\"\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\"\n      (nzClickOption)=\"onClickOptionFromOptionContainer()\"\n      (nzListOfTemplateOptionChange)=\"listOfTemplateOptionChange($event)\"\n      (nzListOfSelectedValueChange)=\"updateListOfSelectedValueFromOptionContainer($event)\"\n      [nzListOfSelectedValue]=\"listOfSelectedValue\">\n    </div>\n  </div>\n</ng-template>\n<!--can not use ViewChild since it will match sub options in option group -->\n<ng-template>\n  <ng-content></ng-content>\n</ng-template>",
                    host: {
                        '[class.ant-select]': 'true',
                        '[class.ant-select-lg]': 'nzSize==="large"',
                        '[class.ant-select-sm]': 'nzSize==="small"',
                        '[class.ant-select-enabled]': '!nzDisabled',
                        '[class.ant-select-disabled]': 'nzDisabled',
                        '[class.ant-select-allow-clear]': 'nzAllowClear',
                        '[class.ant-select-open]': 'nzOpen'
                    },
                    styles: ["\n    .ant-select-dropdown {\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n      margin-top: 4px;\n      margin-bottom: 4px;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzSelectComponent.ctorParameters = function () { return [
        { type: Renderer2 }
    ]; };
    NzSelectComponent.propDecorators = {
        cdkOverlayOrigin: [{ type: ViewChild, args: [CdkOverlayOrigin,] }],
        cdkConnectedOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
        nzSelectTopControlComponent: [{ type: ViewChild, args: [NzSelectTopControlComponent,] }],
        nzOptionContainerComponent: [{ type: ViewChild, args: [NzOptionContainerComponent,] }],
        listOfNzOptionComponent: [{ type: ContentChildren, args: [NzOptionComponent,] }],
        listOfNzOptionGroupComponent: [{ type: ContentChildren, args: [NzOptionGroupComponent,] }],
        nzOnSearch: [{ type: Output }],
        nzScrollToBottom: [{ type: Output }],
        nzOpenChange: [{ type: Output }],
        nzSize: [{ type: Input }],
        nzServerSearch: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzDropdownMatchSelectWidth: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzMaxMultipleCount: [{ type: Input }],
        nzDropdownStyle: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzDropdownClassName: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click',] }],
        _handleKeydown: [{ type: HostListener, args: ['keydown', ['$event'],] }]
    };
    return NzSelectComponent;
}());
export { NzSelectComponent };
function NzSelectComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSelectComponent.prototype._disabled;
    /** @type {?} */
    NzSelectComponent.prototype._allowClear;
    /** @type {?} */
    NzSelectComponent.prototype._showSearch;
    /** @type {?} */
    NzSelectComponent.prototype._open;
    /** @type {?} */
    NzSelectComponent.prototype._placeholder;
    /** @type {?} */
    NzSelectComponent.prototype._autoFocus;
    /** @type {?} */
    NzSelectComponent.prototype._dropdownClassName;
    /** @type {?} */
    NzSelectComponent.prototype.onChange;
    /** @type {?} */
    NzSelectComponent.prototype.onTouched;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzSelectComponent.prototype.listOfSelectedValue;
    /** @type {?} */
    NzSelectComponent.prototype.listOfTemplateOption;
    /** @type {?} */
    NzSelectComponent.prototype.value;
    /** @type {?} */
    NzSelectComponent.prototype.overlayWidth;
    /** @type {?} */
    NzSelectComponent.prototype.overlayMinWidth;
    /** @type {?} */
    NzSelectComponent.prototype.searchValue;
    /** @type {?} */
    NzSelectComponent.prototype.isDestroy;
    /** @type {?} */
    NzSelectComponent.prototype.isInit;
    /** @type {?} */
    NzSelectComponent.prototype.dropDownClassMap;
    /** @type {?} */
    NzSelectComponent.prototype.cdkOverlayOrigin;
    /** @type {?} */
    NzSelectComponent.prototype.cdkConnectedOverlay;
    /** @type {?} */
    NzSelectComponent.prototype.nzSelectTopControlComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOptionContainerComponent;
    /**
     * should move to nz-option-container when https://github.com/angular/angular/issues/20810 resolved *
     * @type {?}
     */
    NzSelectComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzSelectComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzSelectComponent.prototype.nzOnSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzSelectComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSelectComponent.prototype.nzSize;
    /** @type {?} */
    NzSelectComponent.prototype.nzServerSearch;
    /** @type {?} */
    NzSelectComponent.prototype.nzMode;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownMatchSelectWidth;
    /** @type {?} */
    NzSelectComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzSelectComponent.prototype.nzMaxMultipleCount;
    /** @type {?} */
    NzSelectComponent.prototype.nzDropdownStyle;
    /** @type {?} */
    NzSelectComponent.prototype.nzNotFoundContent;
    /**
     * https://github.com/angular/angular/pull/13349/files *
     * @type {?}
     */
    NzSelectComponent.prototype.compareWith;
    /** @type {?} */
    NzSelectComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzZWxlY3Qvbnotc2VsZWN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQWtDLE1BQU0sc0JBQXNCLENBQUM7QUFDN0csT0FBTyxFQUNMLFVBQVUsRUFFVixTQUFTLEVBQ1QsZUFBZSxFQUNmLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFDN0UsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDckUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDOztJQXVhOUUsMkJBQW9CLFFBQW1CO1FBQW5CLGFBQVEsR0FBUixRQUFRLENBQVc7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QUN0QyxNQUFNO21DQUNOLE1BQU07K0JBQ04sTUFBTTt5QkFDTixLQUFLO2lDQUNMLEtBQUs7eUJBQ0wsS0FBSzs2Q0FDTCxLQUFLO2lDQUNMLEtBQUs7cUNBQ0wsS0FBSztrQ0FDTCxLQUFLO29DQUNMLEtBQUs7OEJBR0wsS0FBSztzQ0FFTCxLQUFLOzhCQVVMLEtBQUs7eUJBVUwsS0FBSzs2QkFvQ0wsS0FBSzsrQkFZTCxLQUFLOytCQVNMLEtBQUs7Z0NBU0wsS0FBSzswQkFTTCxZQUFZLFNBQUMsT0FBTztpQ0FRcEIsWUFBWSxTQUFDLFNBQVMsRUFBRSxDQUFFLFFBQVEsQ0FBRTs7NEJBcFF2Qzs7U0FpSGEsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgYW5pbWF0ZSxcbiAgc3RhdGUsXG4gIHN0eWxlLFxuICB0cmFuc2l0aW9uLFxuICB0cmlnZ2VyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgRE9XTl9BUlJPVywgU1BBQ0UsIFRBQiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkZWZhdWx0RmlsdGVyT3B0aW9uLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5pbXBvcnQgeyBOelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQgfSBmcm9tICcuL256LXNlbGVjdC10b3AtY29udHJvbC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXNlbGVjdCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpTZWxlY3RDb21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9XG4gIF0sXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdkcm9wRG93bkFuaW1hdGlvbicsIFtcbiAgICAgIHN0YXRlKCdoaWRkZW4nLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgICAgfSkpLFxuICAgICAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHN0YXRlKCd0b3AnLCBzdHlsZSh7XG4gICAgICAgIG9wYWNpdHkgICAgICAgIDogMSxcbiAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDEpJyxcbiAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBib3R0b20nLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCdib3R0b20gPT4gaGlkZGVuJywgW1xuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICAgICAgICA6IDAsXG4gICAgICAgICAgdHJhbnNmb3JtICAgICAgOiAnc2NhbGVZKDAuOCknLFxuICAgICAgICAgIHRyYW5zZm9ybU9yaWdpbjogJzAlIDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbignaGlkZGVuID0+IHRvcCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMTAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzEwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNSwgMC44NTUsIDAuMDYpJylcbiAgICAgIF0pLFxuICAgICAgdHJhbnNpdGlvbigndG9wID0+IGhpZGRlbicsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAxMDAlJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2VsZWN0LmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXNlbGVjdF0nICAgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc2VsZWN0LWxnXScgICAgICAgICA6ICduelNpemU9PT1cImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1zbV0nICAgICAgICAgOiAnbnpTaXplPT09XCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZW5hYmxlZF0nICAgIDogJyFuekRpc2FibGVkJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3QtZGlzYWJsZWRdJyAgIDogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LXNlbGVjdC1hbGxvdy1jbGVhcl0nOiAnbnpBbGxvd0NsZWFyJyxcbiAgICAnW2NsYXNzLmFudC1zZWxlY3Qtb3Blbl0nICAgICAgIDogJ256T3BlbidcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xuICAgICAgdG9wOiAxMDAlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE56U2VsZWN0Q29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYWxsb3dDbGVhciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93U2VhcmNoID0gZmFsc2U7XG4gIHByaXZhdGUgX29wZW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfcGxhY2Vob2xkZXI6IHN0cmluZztcbiAgcHJpdmF0ZSBfYXV0b0ZvY3VzID0gZmFsc2U7XG4gIHByaXZhdGUgX2Ryb3Bkb3duQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgZHJvcERvd25Qb3NpdGlvbjogJ3RvcCcgfCAnY2VudGVyJyB8ICdib3R0b20nID0gJ2JvdHRvbSc7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W10gPSBbXTtcbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB2YWx1ZTogYW55IHwgYW55W107XG4gIG92ZXJsYXlXaWR0aDogbnVtYmVyO1xuICBvdmVybGF5TWluV2lkdGg6IG51bWJlcjtcbiAgc2VhcmNoVmFsdWU6IHN0cmluZyA9ICcnO1xuICBpc0Rlc3Ryb3kgPSB0cnVlO1xuICBpc0luaXQgPSBmYWxzZTtcbiAgZHJvcERvd25DbGFzc01hcDtcbiAgQFZpZXdDaGlsZChDZGtPdmVybGF5T3JpZ2luKSBjZGtPdmVybGF5T3JpZ2luOiBDZGtPdmVybGF5T3JpZ2luO1xuICBAVmlld0NoaWxkKENka0Nvbm5lY3RlZE92ZXJsYXkpIGNka0Nvbm5lY3RlZE92ZXJsYXk6IENka0Nvbm5lY3RlZE92ZXJsYXk7XG4gIEBWaWV3Q2hpbGQoTnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSBuelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQ6IE56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudDtcbiAgQFZpZXdDaGlsZChOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkgbnpPcHRpb25Db250YWluZXJDb21wb25lbnQ6IE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50O1xuICAvKiogc2hvdWxkIG1vdmUgdG8gbnotb3B0aW9uLWNvbnRhaW5lciB3aGVuIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzIwODEwIHJlc29sdmVkICoqL1xuICBAQ29udGVudENoaWxkcmVuKE56T3B0aW9uQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogUXVlcnlMaXN0PE56T3B0aW9uQ29tcG9uZW50PjtcbiAgQENvbnRlbnRDaGlsZHJlbihOek9wdGlvbkdyb3VwQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbFRvQm90dG9tID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPcGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBASW5wdXQoKSBuelNpemUgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIG56U2VydmVyU2VhcmNoID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56TW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGggPSB0cnVlO1xuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIG56TWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBASW5wdXQoKSBuekRyb3Bkb3duU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIG56Tm90Rm91bmRDb250ZW50OiBzdHJpbmc7XG4gIC8qKiBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL3B1bGwvMTMzNDkvZmlsZXMgKiovXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56RHJvcGRvd25DbGFzc05hbWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2Ryb3Bkb3duQ2xhc3NOYW1lID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpEcm9wZG93bkNsYXNzTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9kcm9wZG93bkNsYXNzTmFtZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF1dG9Gb2N1cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2F1dG9Gb2N1cyA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIGdldCBuekF1dG9Gb2N1cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b0ZvY3VzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56T3Blbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX29wZW4gPSB2YWx1ZTtcbiAgICB0aGlzLmhhbmRsZUVzY0J1ZygpO1xuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVN0YXR1cygpO1xuICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICAgIGlmICh0aGlzLm56T3Blbikge1xuICAgICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmZvY3VzT25JbnB1dCgpO1xuICAgICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50KSB7XG4gICAgICAgIHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYpIHtcbiAgICAgICAgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKTtcbiAgICAgICAgY29uc3QgYmFja2Ryb3BFbGVtZW50ID0gdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50O1xuICAgICAgICBjb25zdCBwYXJlbnROb2RlID0gdGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKGJhY2tkcm9wRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGhvc3RFbGVtZW50ID0gdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuaG9zdEVsZW1lbnQ7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQocGFyZW50Tm9kZSwgYmFja2Ryb3BFbGVtZW50KTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZChwYXJlbnROb2RlLCBob3N0RWxlbWVudCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCBmYWxzZSk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5uek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCkge1xuICAgICAgICB0aGlzLm56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50LnJlc2V0QWN0aXZlT3B0aW9uKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56T3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fb3BlbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VEcm9wRG93bigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsbG93Q2xlYXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd0NsZWFyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekFsbG93Q2xlYXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93Q2xlYXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93U2VhcmNoKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NlYXJjaCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93U2VhcmNoKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93U2VhcmNoO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGxhY2VIb2xkZXIodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3BsYWNlaG9sZGVyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpQbGFjZUhvbGRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9wbGFjZWhvbGRlcjtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJylcbiAgb25DbGljaygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgdGhpcy5uek9wZW4gPSAhdGhpcy5uek9wZW47XG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyAnJGV2ZW50JyBdKVxuICBfaGFuZGxlS2V5ZG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkgeyByZXR1cm47IH1cblxuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKCF0aGlzLl9vcGVuKSB7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gU1BBQ0UgfHwga2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICB0aGlzLm56T3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoa2V5Q29kZSA9PT0gVEFCKSB7XG4gICAgICAvLyBpZiAoa2V5Q29kZSA9PT0gU1BBQ0UgfHwga2V5Q29kZSA9PT0gVEFCKSB7IC8vICMyMjAxXG4gICAgICAgIHRoaXMubnpPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5uekF1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2F1dG9mb2N1cycsICdhdXRvZm9jdXMnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQXR0cmlidXRlKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5uelNlbGVjdFRvcENvbnRyb2xDb21wb25lbnQuaW5wdXRFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5pbnB1dEVsZW1lbnQpIHtcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LmlucHV0RWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICAvKiogb3ZlcmxheSBjYW4gbm90IGJlIGFsd2F5cyBvcGVuICwgcmVvcGVuIG92ZXJsYXkgYWZ0ZXIgcHJlc3MgZXNjICoqL1xuICBoYW5kbGVFc2NCdWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpPcGVuICYmIHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheSAmJiB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZiAmJiAhdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3BlbiA9IHRydWU7XG4gICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkubmdPbkNoYW5nZXMoeyBvcGVuOiBuZXcgU2ltcGxlQ2hhbmdlKGZhbHNlLCB0cnVlLCBmYWxzZSkgfSk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duQ2RrT3ZlcmxheU9yaWdpbihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubnpPcHRpb25Db250YWluZXJDb21wb25lbnQub25LZXlEb3duVWwoZSk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VEcm9wRG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uek9wZW4pIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgICB0aGlzLm56T3BlbiA9IGZhbHNlO1xuICAgICAgdGhpcy5uek9wZW5DaGFuZ2UuZW1pdCh0aGlzLm56T3Blbik7XG4gICAgICB0aGlzLmJsdXIoKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBwb3NpdGlvbi5jb25uZWN0aW9uUGFpci5vcmlnaW5ZO1xuICAgIHRoaXMudXBkYXRlRHJvcERvd25DbGFzc01hcCgpO1xuICB9XG5cbiAgb25DbGlja09wdGlvbkZyb21PcHRpb25Db250YWluZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICB0aGlzLmNsb3NlRHJvcERvd24oKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpNb2RlID09PSAndGFncycpIHtcbiAgICAgIHRoaXMub25TZWFyY2goJycsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNJbml0ICYmIHRoaXMubnpPcGVuICYmIHRoaXMuY2RrT3ZlcmxheU9yaWdpbikge1xuICAgICAgaWYgKHRoaXMubnpEcm9wZG93bk1hdGNoU2VsZWN0V2lkdGgpIHtcbiAgICAgICAgdGhpcy5vdmVybGF5V2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IHRoaXMub3ZlcmxheVdpZHRoIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vdmVybGF5TWluV2lkdGggPSB0aGlzLmNka092ZXJsYXlPcmlnaW4uZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgICB0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgbWluV2lkdGg6IHRoaXMub3ZlcmxheU1pbldpZHRoIH0pO1xuICAgICAgfVxuXG4gICAgfVxuICAgIHRoaXMudXBkYXRlQ2RrQ29ubmVjdGVkT3ZlcmxheVBvc2l0aW9ucygpO1xuICAgIGlmICh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYgJiYgdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYuYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5uek9wZW4pIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmNka0Nvbm5lY3RlZE92ZXJsYXkub3ZlcmxheVJlZi5iYWNrZHJvcEVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuY2RrQ29ubmVjdGVkT3ZlcmxheS5vdmVybGF5UmVmLmJhY2tkcm9wRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbnMoKTogdm9pZCB7XG4gICAgLyoqIHdhaXQgZm9yIGlucHV0IHNpemUgY2hhbmdlICoqL1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jZGtDb25uZWN0ZWRPdmVybGF5Lm92ZXJsYXlSZWYudXBkYXRlUG9zaXRpb24oKSwgMTYwKTtcbiAgfVxuXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAnZGVmYXVsdCc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm56TW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxuXG4gIC8qKiBvcHRpb24gY29udGFpbmVyIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSAtPiB1cGRhdGUgbmdNb2RlbCAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlRnJvbU9wdGlvbkNvbnRhaW5lcih2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyU2VhcmNoVmFsdWUoKTtcbiAgICB0aGlzLnVwZGF0ZUZyb21TZWxlY3RlZExpc3QodmFsdWUpO1xuICB9XG5cbiAgLyoqIG9wdGlvbiBjb250YWluZXIgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlIC0+IHVwZGF0ZSBuZ01vZGVsICoqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWVGcm9tVG9wQ29udHJvbCh2YWx1ZTogYW55W10pOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyU2VhcmNoVmFsdWUoKTtcbiAgICB0aGlzLnVwZGF0ZUZyb21TZWxlY3RlZExpc3QodmFsdWUpO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVGcm9tU2VsZWN0ZWRMaXN0KHZhbHVlOiBhbnlbXSk6IHZvaWQge1xuICAgIGxldCBtb2RlbFZhbHVlO1xuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCkge1xuICAgICAgICBtb2RlbFZhbHVlID0gdmFsdWVbIDAgXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbW9kZWxWYWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGVDZGtDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25zKCk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlTmdNb2RlbCh2YWx1ZSwgbW9kZWxWYWx1ZSk7XG4gIH1cblxuICBvblNlYXJjaCh2YWx1ZTogc3RyaW5nLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGVtaXQgJiYgKHRoaXMuc2VhcmNoVmFsdWUgIT09IHZhbHVlKSkge1xuICAgICAgdGhpcy5uek9uU2VhcmNoLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGNsZWFyTmdNb2RlbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1NpbmdsZU1vZGUpIHtcbiAgICAgIHRoaXMudXBkYXRlTmdNb2RlbChbXSwgbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlTmdNb2RlbChbXSwgW10pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgdXBkYXRlTmdNb2RlbChsaXN0OiBhbnlbXSwgdmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gbGlzdDtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgbGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UodmFsdWU6IE56T3B0aW9uQ29tcG9uZW50W10pOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZlRlbXBsYXRlT3B0aW9uID0gdmFsdWU7XG4gIH1cblxuICB1cGRhdGVEcm9wRG93bkNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuZHJvcERvd25DbGFzc01hcCA9IHtcbiAgICAgIFsgJ2FudC1zZWxlY3QtZHJvcGRvd24nIF0gICAgICAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLS1zaW5nbGVgIF0gICAgICAgICAgICAgOiB0aGlzLmlzU2luZ2xlTW9kZSxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tLW11bHRpcGxlYCBdICAgICAgICAgICA6IHRoaXMuaXNNdWx0aXBsZU9yVGFncyxcbiAgICAgIFsgYGFudC1zZWxlY3QtZHJvcGRvd24tcGxhY2VtZW50LWJvdHRvbUxlZnRgIF06IHRoaXMuZHJvcERvd25Qb3NpdGlvbiA9PT0gJ2JvdHRvbScsXG4gICAgICBbIGBhbnQtc2VsZWN0LWRyb3Bkb3duLXBsYWNlbWVudC10b3BMZWZ0YCBdICAgOiB0aGlzLmRyb3BEb3duUG9zaXRpb24gPT09ICd0b3AnLFxuICAgICAgWyBgJHt0aGlzLm56RHJvcGRvd25DbGFzc05hbWV9YCBdICAgICAgICAgICAgIDogISF0aGlzLm56RHJvcGRvd25DbGFzc05hbWVcbiAgICB9O1xuICB9XG5cbiAgb25DbGVhclNlbGVjdGlvbihlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgLy8gVE9ETzogc2hvdWxkIG5vdCBjbGVhciBkaXNhYmxlZCBvcHRpb24gP1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5jbGVhck5nTW9kZWwoKTtcbiAgfVxuXG4gIGNsZWFyU2VhcmNoVmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XG4gICAgICB0aGlzLm56U2VsZWN0VG9wQ29udHJvbENvbXBvbmVudC5zZXRJbnB1dFZhbHVlKCcnLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubnpTZWxlY3RUb3BDb250cm9sQ29tcG9uZW50LnNldElucHV0VmFsdWUoJycsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIC8qKiB1cGRhdGUgbmdNb2RlbCAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAqKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkgfCBhbnlbXSk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbIHZhbHVlIF07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XG4gIH1cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm56RGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5pc0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICB0aGlzLnVwZGF0ZURyb3BEb3duQ2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLnVwZGF0ZUNka0Nvbm5lY3RlZE92ZXJsYXlTdGF0dXMoKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmlzRGVzdHJveSA9IHRydWU7XG4gIH1cbn1cbiJdfQ==