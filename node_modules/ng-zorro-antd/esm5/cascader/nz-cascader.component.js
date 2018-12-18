/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { BACKSPACE, DOWN_ARROW, ENTER, ESCAPE, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { dropDownAnimation } from '../core/animation/dropdown-animations';
import { EXPANDED_DROPDOWN_POSITIONS } from '../core/overlay/overlay-position-map';
import { arrayEquals, toArray } from '../core/util/array';
import { InputBoolean } from '../core/util/convert';
/** @type {?} */
var defaultDisplayRender = function (label) { return label.join(' / '); };
var ɵ0 = defaultDisplayRender;
var NzCascaderComponent = /** @class */ (function () {
    function NzCascaderComponent(elementRef, cdr) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzShowInput = true;
        this.nzShowArrow = true;
        this.nzAllowClear = true;
        this.nzAutoFocus = false;
        this.nzChangeOnSelect = false;
        this.nzDisabled = false;
        this.nzExpandTrigger = 'click';
        this.nzValueProperty = 'value';
        this.nzLabelProperty = 'label';
        this.nzSize = 'default';
        this.nzPlaceHolder = 'Please select';
        this.nzMouseEnterDelay = 150; // ms
        this.nzMouseLeaveDelay = 150; // ms
        this.nzTriggerAction = /** @type {?} */ (['click']);
        this.nzSelectionChange = new EventEmitter();
        this.nzSelect = new EventEmitter();
        this.nzClear = new EventEmitter();
        this.nzVisibleChange = new EventEmitter(); // Not exposed, only for test
        this.nzChange = new EventEmitter(); // Not exposed, only for test
        this.el = this.elementRef.nativeElement;
        this.dropDownPosition = 'bottom';
        this.menuVisible = false;
        this.isLoading = false;
        this.labelRenderContext = {};
        this.columns = [];
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.positions = tslib_1.__spread(EXPANDED_DROPDOWN_POSITIONS);
        this.isSearching = false;
        this.isFocused = false;
        this.isOpening = false;
        this.selectedOptions = [];
        this.activatedOptions = [];
        this._inputValue = '';
    }
    Object.defineProperty(NzCascaderComponent.prototype, "nzOptions", {
        get: /**
         * @return {?}
         */
        function () { return this.columns[0]; },
        set: /**
         * @param {?} options
         * @return {?}
         */
        function (options) {
            this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
            if (!this.isSearching) {
                if (this.defaultValue && this.columns.length) {
                    this.initOptions(0);
                }
            }
            else {
                this.prepareSearchValue();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "inputValue", {
        get: /**
         * @return {?}
         */
        function () { return this._inputValue; },
        set: /**
         * @param {?} inputValue
         * @return {?}
         */
        function (inputValue) {
            this._inputValue = inputValue;
            this.toggleSearchMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {},
                _a["" + this.nzMenuClassName] = !!this.nzMenuClassName,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "menuColumnCls", {
        get: /**
         * @return {?}
         */
        function () {
            var _a;
            return _a = {},
                _a["" + this.nzColumnClassName] = !!this.nzColumnClassName,
                _a;
        },
        enumerable: true,
        configurable: true
    });
    //#region Menu
    /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySetMenuVisible = /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    function (visible, delay, setOpening) {
        var _this = this;
        if (setOpening === void 0) { setOpening = false; }
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout(function () {
                _this.setMenuVisible(visible);
                _this.cdr.detectChanges();
                _this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout(function () {
                        _this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    };
    /**
     * @param {?} visible
     * @return {?}
     */
    NzCascaderComponent.prototype.setMenuVisible = /**
     * @param {?} visible
     * @return {?}
     */
    function (visible) {
        if (this.nzDisabled) {
            return;
        }
        if (this.menuVisible !== visible) {
            this.menuVisible = visible;
            this.cdr.detectChanges();
            if (visible) {
                this.loadRootOptions();
            }
            this.nzVisibleChange.emit(visible);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelayMenuTimer = /**
     * @return {?}
     */
    function () {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.loadRootOptions = /**
     * @return {?}
     */
    function () {
        if (!this.columns.length) {
            /** @type {?} */
            var root = {};
            this.loadChildrenAsync(root, -1);
        }
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isLoaded = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return this.columns[index] && this.columns[index].length > 0;
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.findOption = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        var _this = this;
        /** @type {?} */
        var options = this.columns[index];
        if (options) {
            /** @type {?} */
            var value_1 = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(function (o) { return value_1 === _this.getOptionValue(o); });
        }
        return null;
    };
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.activateOnInit = /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    function (index, value) {
        var _a;
        /** @type {?} */
        var option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : (_a = {},
                _a["" + this.nzValueProperty] = value,
                _a["" + this.nzLabelProperty] = value,
                _a);
        }
        this.setOptionActivated(option, index, false, false);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.initOptions = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        /** @type {?} */
        var vs = this.defaultValue;
        /** @type {?} */
        var lastIndex = vs.length - 1;
        /** @type {?} */
        var load = function () {
            _this.activateOnInit(index, vs[index]);
            if (index < lastIndex) {
                _this.initOptions(index + 1);
            }
            if (index === lastIndex) {
                _this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.nzLoadData) {
            load();
        }
        else {
            /** @type {?} */
            var node = this.activatedOptions[index - 1] || {};
            this.loadChildrenAsync(node, index - 1, load, this.afterWriteValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    NzCascaderComponent.prototype.setOptionActivated = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    function (option, columnIndex, select, loadChildren) {
        if (select === void 0) { select = false; }
        if (loadChildren === void 0) { loadChildren = true; }
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        // Set parent option and all ancestor options as active.
        for (var i = columnIndex - 1; i >= 0; i--) {
            if (!this.activatedOptions[i]) {
                this.activatedOptions[i] = this.activatedOptions[i + 1].parent;
            }
        }
        // Set child options and all success options as inactive.
        if (columnIndex < this.activatedOptions.length - 1) {
            this.activatedOptions = this.activatedOptions.slice(0, columnIndex + 1);
        }
        // Load child options.
        if (option.children && option.children.length && !option.isLeaf) {
            option.children.forEach(function (child) { return child.parent = option; });
            this.setColumnData(option.children, columnIndex + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildrenAsync(option, columnIndex);
        }
        if (select) {
            this.setOptionSelected(option, columnIndex);
        }
        this.cdr.detectChanges();
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    NzCascaderComponent.prototype.loadChildrenAsync = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    function (option, columnIndex, success, failure) {
        var _this = this;
        if (this.nzLoadData) {
            this.isLoading = columnIndex < 0;
            option.loading = true;
            this.nzLoadData(option, columnIndex).then(function () {
                option.loading = _this.isLoading = false;
                if (option.children) {
                    option.children.forEach(function (child) { return child.parent = columnIndex < 0 ? undefined : option; });
                    _this.setColumnData(option.children, columnIndex + 1);
                    _this.cdr.detectChanges();
                }
                if (success) {
                    success();
                }
            }, function () {
                option.loading = _this.isLoading = false;
                option.isLeaf = true;
                _this.cdr.detectChanges();
                if (failure) {
                    failure();
                }
            });
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    NzCascaderComponent.prototype.setOptionSelected = /**
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    function (option, columnIndex) {
        var _this = this;
        /** @type {?} */
        var shouldPerformSelection = function (o, i) {
            return typeof _this.nzChangeOn === 'function' ? _this.nzChangeOn(o, i) === true : false;
        };
        this.nzSelect.emit({ option: option, index: columnIndex });
        if (option.isLeaf || this.nzChangeOnSelect || shouldPerformSelection(option, columnIndex)) {
            this.selectedOptions = this.activatedOptions;
            this.buildDisplayLabel();
            this.onValueChange();
        }
        if (option.isLeaf) {
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    NzCascaderComponent.prototype.setColumnData = /**
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    function (options, columnIndex) {
        if (!arrayEquals(this.columns[columnIndex], options)) {
            this.columns[columnIndex] = options;
            if (columnIndex < this.columns.length - 1) {
                this.columns = this.columns.slice(0, columnIndex + 1);
            }
        }
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    NzCascaderComponent.prototype.clearSelection = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.labelRenderText = '';
        this.labelRenderContext = {};
        this.selectedOptions = [];
        this.activatedOptions = [];
        this.inputValue = '';
        this.setMenuVisible(false);
        this.onValueChange();
    };
    // tslint:disable-next-line:no-any
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.getSubmitValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var values = [];
        this.selectedOptions.forEach(function (option) {
            values.push(_this.getOptionValue(option));
        });
        return values;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onValueChange = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var value = this.getSubmitValue();
        if (!arrayEquals(this.value, value)) {
            this.defaultValue = null;
            this.value = value;
            this.onChange(value);
            if (value.length === 0) {
                this.nzClear.emit();
            }
            this.nzSelectionChange.emit(this.selectedOptions);
            this.nzChange.emit(value);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.afterWriteValue = /**
     * @return {?}
     */
    function () {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    };
    //#endregion
    //#region Mouse and keyboard event handlers, view children
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.menuVisible ? this.focus() : this.blur();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.handleInputFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onKeyDown = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var keyCode = event.keyCode;
        if (keyCode !== DOWN_ARROW &&
            keyCode !== UP_ARROW &&
            keyCode !== LEFT_ARROW &&
            keyCode !== RIGHT_ARROW &&
            keyCode !== ENTER &&
            keyCode !== BACKSPACE &&
            keyCode !== ESCAPE) {
            return;
        }
        // Press any keys above to reopen menu.
        if (!this.menuVisible && keyCode !== BACKSPACE && keyCode !== ESCAPE) {
            return this.setMenuVisible(true);
        }
        // Make these keys work as default in searching mode.
        if (this.isSearching && (keyCode === BACKSPACE || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW)) {
            return;
        }
        // Interact with the component.
        if (this.menuVisible) {
            event.preventDefault();
            if (keyCode === DOWN_ARROW) {
                this.moveUpOrDown(false);
            }
            else if (keyCode === UP_ARROW) {
                this.moveUpOrDown(true);
            }
            else if (keyCode === LEFT_ARROW) {
                this.moveLeft();
            }
            else if (keyCode === RIGHT_ARROW) {
                this.moveRight();
            }
            else if (keyCode === ENTER) {
                this.onEnter();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.nzShowSearch) {
            this.focus();
        }
        if (this.isActionTrigger('click')) {
            this.delaySetMenuVisible(!this.menuVisible, 100);
        }
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseEnter = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.isActionTrigger('hover')) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onTriggerMouseLeave = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.menuVisible || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isActionTrigger('hover')) {
            /** @type {?} */
            var mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            var hostEl = this.el;
            /** @type {?} */
            var menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    };
    /**
     * @param {?} action
     * @return {?}
     */
    NzCascaderComponent.prototype.isActionTrigger = /**
     * @param {?} action
     * @return {?}
     */
    function (action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionClick = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        if (event) {
            event.preventDefault();
        }
        if (option && option.disabled) {
            return;
        }
        this.el.focus();
        this.isSearching
            ? this.setSearchOptionActivated(/** @type {?} */ (option), event)
            : this.setOptionActivated(option, columnIndex, true);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.onEnter = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var option = this.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.isSearching
                ? this.setSearchOptionActivated(/** @type {?} */ (option), null)
                : this.setOptionSelected(option, columnIndex);
        }
    };
    /**
     * @param {?} isUp
     * @return {?}
     */
    NzCascaderComponent.prototype.moveUpOrDown = /**
     * @param {?} isUp
     * @return {?}
     */
    function (isUp) {
        /** @type {?} */
        var columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        var activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        var options = this.columns[columnIndex] || [];
        /** @type {?} */
        var length = options.length;
        /** @type {?} */
        var nextIndex = -1;
        if (!activeOption) { // Not selected options in this column
            // Not selected options in this column
            nextIndex = isUp ? length : -1;
        }
        else {
            nextIndex = options.indexOf(activeOption);
        }
        while (true) {
            nextIndex = isUp ? nextIndex - 1 : nextIndex + 1;
            if (nextIndex < 0 || nextIndex >= length) {
                break;
            }
            /** @type {?} */
            var nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setOptionActivated(nextOption, columnIndex);
            break;
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.moveLeft = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.moveRight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var length = this.activatedOptions.length;
        /** @type {?} */
        var options = this.columns[length];
        if (options && options.length) {
            /** @type {?} */
            var nextOpt = options.find(function (o) { return !o.disabled; });
            if (nextOpt) {
                this.setOptionActivated(nextOpt, length);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseEnter = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, true);
        }
    };
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.onOptionMouseLeave = /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    function (option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, false);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.clearDelaySelectTimer = /**
     * @return {?}
     */
    function () {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    };
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    NzCascaderComponent.prototype.delaySelectOption = /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    function (option, index, doSelect) {
        var _this = this;
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(function () {
                _this.setOptionActivated(option, index);
                _this.delaySelectTimer = null;
            }, 150);
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.toggleSearchMode = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var willBeInSearch = !!this._inputValue;
        // Take a snapshot before entering search mode.
        if (!this.isSearching && willBeInSearch) {
            this.isSearching = true;
            this.activatedOptionsSnapshot = this.activatedOptions;
            this.activatedOptions = [];
            this.labelRenderText = '';
            if (this.input) {
                /** @type {?} */
                var width = this.input.nativeElement.offsetWidth;
                this.dropdownWidthStyle = width + "px";
            }
        }
        // Restore the snapshot after leaving search mode.
        if (this.isSearching && !willBeInSearch) {
            this.isSearching = false;
            this.activatedOptions = this.activatedOptionsSnapshot;
            this.columns = this.columnsSnapshot;
            this.dropdownWidthStyle = '';
            if (this.activatedOptions) {
                this.buildDisplayLabel();
            }
        }
        if (this.isSearching) {
            this.prepareSearchValue();
        }
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.prepareSearchValue = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var results = [];
        /** @type {?} */
        var path = [];
        /** @type {?} */
        var defaultFilter = function (inputValue, p) {
            return p.some(function (n) {
                /** @type {?} */
                var label = _this.getOptionLabel(n);
                return label && label.indexOf(inputValue) !== -1;
            });
        };
        /** @type {?} */
        var filter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).filter
            ? (/** @type {?} */ (this.nzShowSearch)).filter
            : defaultFilter;
        /** @type {?} */
        var sorter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).sorter;
        /** @type {?} */
        var loopParent = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            /** @type {?} */
            var disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach(function (sNode) {
                if (!sNode.parent) {
                    sNode.parent = node;
                } // Build parent reference when doing searching
                if (!sNode.isLeaf) {
                    loopParent(sNode, disabled);
                }
                if (sNode.isLeaf || !sNode.children || !sNode.children.length) {
                    loopChild(sNode, disabled);
                }
            });
            path.pop();
        };
        /** @type {?} */
        var loopChild = function (node, forceDisabled) {
            if (forceDisabled === void 0) { forceDisabled = false; }
            var _a;
            path.push(node);
            /** @type {?} */
            var cPath = Array.from(path);
            if (filter(_this._inputValue, cPath)) {
                /** @type {?} */
                var disabled = forceDisabled || node.disabled;
                /** @type {?} */
                var option = (_a = {
                        disabled: disabled,
                        isLeaf: true,
                        path: cPath
                    },
                    _a[_this.nzLabelProperty] = cPath.map(function (p) { return _this.getOptionLabel(p); }).join(' / '),
                    _a);
                results.push(option);
            }
            path.pop();
        };
        this.columnsSnapshot[0].forEach(function (node) { return (node.isLeaf || !node.children || !node.children.length)
            ? loopChild(node)
            : loopParent(node); });
        if (sorter) {
            results.sort(function (a, b) { return sorter(a.path, b.path, _this._inputValue); });
        }
        this.columns = [results];
    };
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    NzCascaderComponent.prototype.setSearchOptionActivated = /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    function (result, event) {
        var _this = this;
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(function () {
            _this.inputValue = '';
            /** @type {?} */
            var index = result.path.length - 1;
            /** @type {?} */
            var destinationNode = result.path[index];
            /** @type {?} */
            var mockClickParent = function (node, columnIndex) {
                if (node && node.parent) {
                    mockClickParent(node.parent, columnIndex - 1);
                }
                _this.onOptionClick(node, columnIndex, event);
            };
            mockClickParent(destinationNode, index);
        }, 300);
    };
    Object.defineProperty(NzCascaderComponent.prototype, "hasInput", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.inputValue;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "hasValue", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.value && !!this.value.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "showPlaceholder", {
        get: /**
         * @return {?}
         */
        function () {
            return !(this.hasInput || this.hasValue);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "clearIconVisible", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCascaderComponent.prototype, "isLabelRenderTemplate", {
        get: /**
         * @return {?}
         */
        function () {
            return !!this.nzLabelRender;
        },
        enumerable: true,
        configurable: true
    });
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionLabel = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzLabelProperty || 'label'];
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} option
     * @return {?}
     */
    NzCascaderComponent.prototype.getOptionValue = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        return option[this.nzValueProperty || 'value'];
    };
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    NzCascaderComponent.prototype.isOptionActivated = /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (option, index) {
        /** @type {?} */
        var activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.buildDisplayLabel = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var selectedOptions = this.selectedOptions;
        /** @type {?} */
        var labels = selectedOptions.map(function (o) { return _this.getOptionLabel(o); });
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels: labels, selectedOptions: selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
        // When components inits with default value, this would make display label appear correctly.
        this.cdr.detectChanges();
    };
    //#endregion
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzCascaderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.closeMenu = /**
     * @return {?}
     */
    function () {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    };
    /**
     * @return {?}
     */
    NzCascaderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzCascaderComponent.prototype.registerOnChange = /**
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
    NzCascaderComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    // tslint:disable-next-line:no-any
    /**
     * @param {?} value
     * @return {?}
     */
    NzCascaderComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    };
    /**
     * @param {?} position
     * @return {?}
     */
    NzCascaderComponent.prototype.onPositionChange = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    };
    NzCascaderComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-cascader,[nz-cascader]',
                    preserveWhitespaces: false,
                    template: "<div\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  #trigger>\n  <div *ngIf=\"nzShowInput\">\n    <input\n      #input\n      nz-input\n      class=\"ant-cascader-input\"\n      [class.ant-cascader-input-disabled]=\"nzDisabled\"\n      [class.ant-cascader-input-lg]=\"nzSize === 'large'\"\n      [class.ant-cascader-input-sm]=\"nzSize === 'small'\"\n      [attr.autoComplete]=\"'off'\"\n      [attr.placeholder]=\"showPlaceholder ? nzPlaceHolder : null\"\n      [attr.autofocus]=\"nzAutoFocus ? 'autofocus' : null\"\n      [readonly]=\"!nzShowSearch\"\n      [disabled]=\"nzDisabled\"\n      [nzSize]=\"nzSize\"\n      [(ngModel)]=\"inputValue\"\n      (blur)=\"handleInputBlur($event)\"\n      (focus)=\"handleInputFocus($event)\"\n      (change)=\"$event.stopPropagation()\">\n    <i *ngIf=\"clearIconVisible\"\n       nz-icon\n       type=\"close-circle\"\n       theme=\"fill\"\n       class=\"ant-cascader-picker-clear\"\n       (click)=\"clearSelection($event)\"></i>\n    <i *ngIf=\"nzShowArrow && !isLoading\"\n       nz-icon\n       type=\"down\"\n       class=\"ant-cascader-picker-arrow\"\n       [class.ant-cascader-picker-arrow-expand]=\"menuVisible\">\n    </i>\n    <i *ngIf=\"isLoading\" nz-icon type=\"loading\" class=\"ant-cascader-picker-arrow\"></i>\n    <span\n      class=\"ant-cascader-picker-label\"\n      [class.ant-cascader-show-search]=\"!!nzShowSearch\"\n      [class.ant-focusd]=\"!!nzShowSearch && isFocused && !inputValue\">\n      <ng-container *ngIf=\"!isLabelRenderTemplate; else labelTemplate\">{{ labelRenderText }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzLabelRender\" [ngTemplateOutletContext]=\"labelRenderContext\"></ng-template>\n      </ng-template>\n    </span>\n  </div>\n  <ng-content></ng-content>\n</div>\n<ng-template\n  cdkConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayPositions]=\"positions\"\n  (backdropClick)=\"closeMenu()\"\n  (detach)=\"closeMenu()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"menuVisible\">\n  <div\n    #menu\n    class=\"ant-cascader-menus\"\n    [class.ant-cascader-menus-hidden]=\"!menuVisible\"\n    [ngClass]=\"menuCls\"\n    [ngStyle]=\"nzMenuStyle\"\n    [@dropDownAnimation]=\"dropDownPosition\"\n    (mouseleave)=\"onTriggerMouseLeave($event)\">\n    <ul *ngFor=\"let options of columns; let i = index;\" class=\"ant-cascader-menu\" [ngClass]=\"menuColumnCls\"\n        [style.height]=\"isSearching && !columns[0].length ? 'auto': ''\" [style.width]=\"dropdownWidthStyle\">\n      <li\n        nz-cascader-option\n        *ngFor=\"let option of options\"\n        [nzLabelProperty]=\"nzLabelProperty\"\n        [activated]=\"isOptionActivated(option, i)\"\n        [highlightText]=\"isSearching ? inputValue : ''\"\n        [option]=\"option\"\n        (mouseenter)=\"onOptionMouseEnter(option, i, $event)\"\n        (mouseleave)=\"onOptionMouseLeave(option, i, $event)\"\n        (click)=\"onOptionClick(option, i, $event)\">\n      </li>\n      <li *ngIf=\"isSearching && !columns[0].length\" class=\"ant-cascader-menu-item ant-cascader-menu-item-expanded ant-cascader-menu-item-disabled\">\n        {{ nzNotFoundContent || ('Select.notFoundContent' | nzI18n) }}\n      </li>\n    </ul>\n  </div>\n</ng-template>\n",
                    animations: [dropDownAnimation],
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzCascaderComponent; }),
                            multi: true
                        }
                    ],
                    host: {
                        '[attr.tabIndex]': '"0"',
                        '[class.ant-cascader]': 'true',
                        '[class.ant-cascader-picker]': 'true',
                        '[class.ant-cascader-lg]': 'nzSize === "large"',
                        '[class.ant-cascader-sm]': 'nzSize === "small"',
                        '[class.ant-cascader-picker-disabled]': 'nzDisabled',
                        '[class.ant-cascader-picker-open]': 'menuVisible',
                        '[class.ant-cascader-picker-with-value]': '!!inputValue',
                        '[class.ant-cascader-focused]': 'isFocused'
                    },
                    styles: ["\n    .ant-cascader-menus {\n      margin-top: 4px;\n      margin-bottom: 4px;\n      top: 100%;\n      left: 0;\n      position: relative;\n      width: 100%;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzCascaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
    NzCascaderComponent.propDecorators = {
        input: [{ type: ViewChild, args: ['input',] }],
        menu: [{ type: ViewChild, args: ['menu',] }],
        nzShowInput: [{ type: Input }],
        nzShowArrow: [{ type: Input }],
        nzAllowClear: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzChangeOnSelect: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzColumnClassName: [{ type: Input }],
        nzExpandTrigger: [{ type: Input }],
        nzValueProperty: [{ type: Input }],
        nzLabelRender: [{ type: Input }],
        nzLabelProperty: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzMenuClassName: [{ type: Input }],
        nzMenuStyle: [{ type: Input }],
        nzMouseEnterDelay: [{ type: Input }],
        nzMouseLeaveDelay: [{ type: Input }],
        nzTriggerAction: [{ type: Input }],
        nzChangeOn: [{ type: Input }],
        nzLoadData: [{ type: Input }],
        nzOptions: [{ type: Input }],
        nzSelectionChange: [{ type: Output }],
        nzSelect: [{ type: Output }],
        nzClear: [{ type: Output }],
        nzVisibleChange: [{ type: Output }],
        nzChange: [{ type: Output }],
        onKeyDown: [{ type: HostListener, args: ['keydown', ['$event'],] }],
        onTriggerClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        onTriggerMouseEnter: [{ type: HostListener, args: ['mouseenter', ['$event'],] }],
        onTriggerMouseLeave: [{ type: HostListener, args: ['mouseleave', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowInput", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzShowArrow", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAllowClear", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzAutoFocus", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzChangeOnSelect", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzCascaderComponent.prototype, "nzDisabled", void 0);
    return NzCascaderComponent;
}());
export { NzCascaderComponent };
function NzCascaderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCascaderComponent.prototype.input;
    /** @type {?} */
    NzCascaderComponent.prototype.menu;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowInput;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowArrow;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAllowClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzAutoFocus;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOnSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzCascaderComponent.prototype.nzColumnClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzExpandTrigger;
    /** @type {?} */
    NzCascaderComponent.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelRender;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSize;
    /** @type {?} */
    NzCascaderComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuClassName;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMenuStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseEnterDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzMouseLeaveDelay;
    /** @type {?} */
    NzCascaderComponent.prototype.nzTriggerAction;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChangeOn;
    /** @type {?} */
    NzCascaderComponent.prototype.nzLoadData;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelectionChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzSelect;
    /** @type {?} */
    NzCascaderComponent.prototype.nzClear;
    /** @type {?} */
    NzCascaderComponent.prototype.nzVisibleChange;
    /** @type {?} */
    NzCascaderComponent.prototype.nzChange;
    /** @type {?} */
    NzCascaderComponent.prototype.el;
    /** @type {?} */
    NzCascaderComponent.prototype.dropDownPosition;
    /** @type {?} */
    NzCascaderComponent.prototype.menuVisible;
    /** @type {?} */
    NzCascaderComponent.prototype.isLoading;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderText;
    /** @type {?} */
    NzCascaderComponent.prototype.labelRenderContext;
    /** @type {?} */
    NzCascaderComponent.prototype.columns;
    /** @type {?} */
    NzCascaderComponent.prototype.onChange;
    /** @type {?} */
    NzCascaderComponent.prototype.onTouched;
    /** @type {?} */
    NzCascaderComponent.prototype.positions;
    /** @type {?} */
    NzCascaderComponent.prototype.dropdownWidthStyle;
    /** @type {?} */
    NzCascaderComponent.prototype.isSearching;
    /** @type {?} */
    NzCascaderComponent.prototype.isFocused;
    /** @type {?} */
    NzCascaderComponent.prototype.isOpening;
    /** @type {?} */
    NzCascaderComponent.prototype.defaultValue;
    /** @type {?} */
    NzCascaderComponent.prototype.value;
    /** @type {?} */
    NzCascaderComponent.prototype.selectedOptions;
    /** @type {?} */
    NzCascaderComponent.prototype.activatedOptions;
    /** @type {?} */
    NzCascaderComponent.prototype.columnsSnapshot;
    /** @type {?} */
    NzCascaderComponent.prototype.activatedOptionsSnapshot;
    /** @type {?} */
    NzCascaderComponent.prototype.delayMenuTimer;
    /** @type {?} */
    NzCascaderComponent.prototype.delaySelectTimer;
    /** @type {?} */
    NzCascaderComponent.prototype._inputValue;
    /** @type {?} */
    NzCascaderComponent.prototype.elementRef;
    /** @type {?} */
    NzCascaderComponent.prototype.cdr;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUlwRCxJQUFNLG9CQUFvQixHQUFHLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBakIsQ0FBaUIsQ0FBQzs7O0lBdXZCdEQsNkJBQW9CLFVBQXNCLEVBQVUsR0FBc0I7UUFBdEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBN3NCMUUsbUJBQXVDLElBQUksQ0FBQztRQUM1QyxtQkFBdUMsSUFBSSxDQUFDO1FBQzVDLG9CQUF3QyxJQUFJLENBQUM7UUFDN0MsbUJBQXVDLEtBQUssQ0FBQztRQUM3Qyx3QkFBNEMsS0FBSyxDQUFDO1FBQ2xELGtCQUFzQyxLQUFLLENBQUM7UUFFNUMsdUJBQW9ELE9BQU8sQ0FBQztRQUM1RCx1QkFBMkIsT0FBTyxDQUFDO1FBRW5DLHVCQUEyQixPQUFPLENBQUM7UUFFbkMsY0FBa0MsU0FBUyxDQUFDO1FBRTVDLHFCQUF5QixlQUFlLENBQUM7UUFHekMseUJBQXFDLEdBQUcsQ0FBQztRQUN6Qyx5QkFBcUMsR0FBRyxDQUFDO1FBQ3pDLHlDQUE0RSxDQUFFLE9BQU8sQ0FBNkIsRUFBQztRQW1CbkgseUJBQXVDLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQzVFLGdCQUE4QixJQUFJLFlBQVksRUFBNkMsQ0FBQztRQUM1RixlQUE2QixJQUFJLFlBQVksRUFBUSxDQUFDO1FBQ3RELHVCQUFxQyxJQUFJLFlBQVksRUFBVyxDQUFDO1FBQ2pFLGdCQUE4QixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELFVBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ2hELHdCQUFtQixRQUFRLENBQUM7UUFDNUIsbUJBQWMsS0FBSyxDQUFDO1FBQ3BCLGlCQUFZLEtBQUssQ0FBQztRQUVsQiwwQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLGVBQThCLEVBQUUsQ0FBQztRQUNqQyxnQkFBVyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzlCLGlCQUFZLFFBQVEsQ0FBQyxTQUFTLENBQUM7UUFDL0Isa0NBQTJDLDJCQUEyQixFQUFHO1FBRXpFLG1CQUFjLEtBQUssQ0FBQztRQUNwQixpQkFBWSxLQUFLLENBQUM7eUJBRUUsS0FBSzsrQkFHbUIsRUFBRTtnQ0FDRCxFQUFFOzJCQVd6QixFQUFFO0tBcW9CdkI7SUFyckJELHNCQUNJLDBDQUFTOzs7O1FBRGIsY0FDb0MsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBRSxDQUFDLEVBQUU7Ozs7O1FBQy9ELFVBQWMsT0FBZ0M7WUFDNUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFFLE9BQU8sQ0FBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDbkYsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTtvQkFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDckI7YUFDRjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQzthQUMzQjtTQUNGOzs7T0FWOEQ7SUEwQy9ELHNCQUFJLDJDQUFVOzs7O1FBSWQsY0FBMkIsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7Ozs7O1FBSnJELFVBQWUsVUFBa0I7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7WUFDOUIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7U0FDekI7OztPQUFBO0lBSUQsc0JBQUksd0NBQU87Ozs7UUFBWDs7WUFDRTtnQkFDRSxHQUFFLEtBQUcsSUFBSSxDQUFDLGVBQWlCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlO21CQUNyRDtTQUNIOzs7T0FBQTtJQUVELHNCQUFJLDhDQUFhOzs7O1FBQWpCOztZQUNFO2dCQUNFLEdBQUUsS0FBRyxJQUFJLENBQUMsaUJBQW1CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUI7bUJBQ3pEO1NBQ0g7OztPQUFBO0lBRUQsY0FBYzs7Ozs7OztJQUVkLGlEQUFtQjs7Ozs7O0lBQW5CLFVBQW9CLE9BQWdCLEVBQUUsS0FBYSxFQUFFLFVBQTJCO1FBQWhGLGlCQW1CQztRQW5Cb0QsMkJBQUEsRUFBQSxrQkFBMkI7UUFDOUUsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLE9BQU8sSUFBSSxVQUFVLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2FBQ3ZCO1lBQ0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxVQUFVLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzdCLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO2dCQUMzQixJQUFJLE9BQU8sRUFBRTtvQkFDWCxVQUFVLENBQUM7d0JBQ1QsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7cUJBQ3hCLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ1Q7YUFDRixFQUFFLEtBQUssQ0FBQyxDQUFDO1NBQ1g7YUFBTTtZQUNMLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDOUI7S0FDRjs7Ozs7SUFFRCw0Q0FBYzs7OztJQUFkLFVBQWUsT0FBZ0I7UUFDN0IsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsS0FBSyxPQUFPLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7WUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUN6QixJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNwQztLQUNGOzs7O0lBRU8saURBQW1COzs7O1FBQ3pCLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixZQUFZLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCOzs7OztJQUdLLDZDQUFlOzs7O1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRTs7WUFDeEIsSUFBTSxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNsQzs7Ozs7O0lBT0ssc0NBQVE7Ozs7Y0FBQyxLQUFhO1FBQzVCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBRSxLQUFLLENBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFFLEtBQUssQ0FBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Ozs7Ozs7SUFHM0Qsd0NBQVU7Ozs7O2NBQUMsTUFBc0IsRUFBRSxLQUFhOzs7UUFDdEQsSUFBTSxPQUFPLEdBQXFCLElBQUksQ0FBQyxPQUFPLENBQUUsS0FBSyxDQUFFLENBQUM7UUFDeEQsSUFBSSxPQUFPLEVBQUU7O1lBQ1gsSUFBTSxPQUFLLEdBQUcsT0FBTyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7WUFDaEYsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsT0FBSyxLQUFLLEtBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUMsQ0FBQztTQUM1RDtRQUNELE9BQU8sSUFBSSxDQUFDOzs7Ozs7O0lBSU4sNENBQWM7Ozs7O2NBQUMsS0FBYSxFQUFFLEtBQVU7OztRQUM5QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsTUFBTSxHQUFHLE9BQU8sS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzFDLEdBQUUsS0FBRyxJQUFJLENBQUMsZUFBaUIsSUFBSSxLQUFLO2dCQUNwQyxHQUFFLEtBQUcsSUFBSSxDQUFDLGVBQWlCLElBQUksS0FBSzttQkFDckMsQ0FBQztTQUNIO1FBQ0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDOzs7Ozs7SUFHL0MseUNBQVc7Ozs7Y0FBQyxLQUFhOzs7UUFDL0IsSUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQzs7UUFDN0IsSUFBTSxTQUFTLEdBQUcsRUFBRSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7O1FBRWhDLElBQU0sSUFBSSxHQUFHO1lBQ1gsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFFLEtBQUssQ0FBRSxDQUFDLENBQUM7WUFDeEMsSUFBSSxLQUFLLEdBQUcsU0FBUyxFQUFFO2dCQUNyQixLQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQzthQUM3QjtZQUNELElBQUksS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDdkIsS0FBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2FBQ3hCO1NBQ0YsQ0FBQztRQUVGLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDNUMsSUFBSSxFQUFFLENBQUM7U0FDUjthQUFNOztZQUNMLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxLQUFLLEdBQUcsQ0FBQyxDQUFFLElBQUksRUFBRSxDQUFDO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1NBQ3JFOzs7Ozs7Ozs7SUFPSyxnREFBa0I7Ozs7Ozs7Y0FBQyxNQUFzQixFQUFFLFdBQW1CLEVBQUUsTUFBdUIsRUFBRSxZQUE0QjtRQUFyRCx1QkFBQSxFQUFBLGNBQXVCO1FBQUUsNkJBQUEsRUFBQSxtQkFBNEI7UUFDM0gsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzlCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxXQUFXLENBQUUsR0FBRyxNQUFNLENBQUM7O1FBRzlDLEtBQUssSUFBSSxDQUFDLEdBQUcsV0FBVyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFFLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFDLE1BQU0sQ0FBQzthQUNwRTtTQUNGOztRQUdELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekU7O1FBR0QsSUFBSSxNQUFNLENBQUMsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUMvRCxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLEdBQUcsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUM7WUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN0RDthQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxJQUFJLFlBQVksRUFBRTtZQUN6QyxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzdDO1FBRUQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7Ozs7O0lBR25CLCtDQUFpQjs7Ozs7OztjQUFDLE1BQXNCLEVBQUUsV0FBbUIsRUFBRSxPQUFvQixFQUFFLE9BQW9COztRQUMvRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDeEMsTUFBTSxDQUFDLE9BQU8sR0FBRyxLQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztnQkFDeEMsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO29CQUNuQixNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQW5ELENBQW1ELENBQUMsQ0FBQztvQkFDdEYsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDckQsS0FBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztpQkFDMUI7Z0JBQ0QsSUFBSSxPQUFPLEVBQUU7b0JBQ1gsT0FBTyxFQUFFLENBQUM7aUJBQ1g7YUFDRixFQUFFO2dCQUNELE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7Z0JBQ3hDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUNyQixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO2dCQUN6QixJQUFJLE9BQU8sRUFBRTtvQkFDWCxPQUFPLEVBQUUsQ0FBQztpQkFDWDthQUNGLENBQUMsQ0FBQztTQUNKOzs7Ozs7O0lBR0ssK0NBQWlCOzs7OztjQUFDLE1BQXNCLEVBQUUsV0FBbUI7OztRQUNuRSxJQUFNLHNCQUFzQixHQUFHLFVBQUMsQ0FBaUIsRUFBRSxDQUFTO1lBQzFELE9BQU8sT0FBTyxLQUFJLENBQUMsVUFBVSxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDdkYsQ0FBQztRQUVGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFFbkQsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxzQkFBc0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLEVBQUU7WUFDekYsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDN0MsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7WUFDekIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDekQ7Ozs7Ozs7SUFHSywyQ0FBYTs7Ozs7Y0FBQyxPQUF5QixFQUFFLFdBQW1CO1FBQ2xFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBRSxXQUFXLENBQUUsRUFBRSxPQUFPLENBQUMsRUFBRTtZQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFFLFdBQVcsQ0FBRSxHQUFHLE9BQU8sQ0FBQztZQUN0QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLFdBQVcsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN2RDtTQUNGOzs7Ozs7SUFHSCw0Q0FBYzs7OztJQUFkLFVBQWUsS0FBYTtRQUMxQixJQUFJLEtBQUssRUFBRTtZQUNULEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUN2QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7UUFFRCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUzQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7S0FDdEI7SUFFRCxrQ0FBa0M7Ozs7SUFDbEMsNENBQWM7OztJQUFkO1FBQUEsaUJBTUM7O1FBTEMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUEsTUFBTTtZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUMxQyxDQUFDLENBQUM7UUFDSCxPQUFPLE1BQU0sQ0FBQztLQUNmOzs7O0lBRU8sMkNBQWE7Ozs7O1FBQ25CLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNwQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEVBQUU7WUFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3JCO1lBQ0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDM0I7Ozs7O0lBR0gsNkNBQWU7OztJQUFmO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDN0MsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7S0FDMUI7SUFFRCxZQUFZO0lBRVosMERBQTBEOzs7O0lBRTFELG1DQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ25CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN2QjtLQUNGOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQ0UsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4QjtLQUNGOzs7OztJQUVELDZDQUFlOzs7O0lBQWYsVUFBZ0IsS0FBWTtRQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUMvQzs7Ozs7SUFFRCw4Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsS0FBWTtRQUMzQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDZDs7Ozs7SUFHRCx1Q0FBUzs7OztJQURULFVBQ1UsS0FBb0I7O1FBQzVCLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFFOUIsSUFBSSxPQUFPLEtBQUssVUFBVTtZQUN4QixPQUFPLEtBQUssUUFBUTtZQUNwQixPQUFPLEtBQUssVUFBVTtZQUN0QixPQUFPLEtBQUssV0FBVztZQUN2QixPQUFPLEtBQUssS0FBSztZQUNqQixPQUFPLEtBQUssU0FBUztZQUNyQixPQUFPLEtBQUssTUFBTSxFQUNsQjtZQUNBLE9BQU87U0FDUjs7UUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxPQUFPLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUU7WUFDcEUsT0FBTyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xDOztRQUdELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksT0FBTyxLQUFLLFVBQVUsSUFBSSxPQUFPLEtBQUssV0FBVyxDQUFDLEVBQUU7WUFDcEcsT0FBTztTQUNSOztRQUdELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsSUFBSSxPQUFPLEtBQUssVUFBVSxFQUFFO2dCQUMxQixJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzFCO2lCQUFNLElBQUksT0FBTyxLQUFLLFFBQVEsRUFBRTtnQkFDL0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxVQUFVLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUNqQjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxXQUFXLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQjtpQkFBTSxJQUFJLE9BQU8sS0FBSyxLQUFLLEVBQUU7Z0JBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQjtTQUNGO0tBQ0Y7Ozs7O0lBR0QsNENBQWM7Ozs7SUFEZCxVQUNlLEtBQWlCO1FBQzlCLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixPQUFPO1NBQ1I7UUFDRCxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztLQUNsQjs7Ozs7SUFHRCxpREFBbUI7Ozs7SUFEbkIsVUFDb0IsS0FBaUI7UUFDbkMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ25CLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUM5RDtLQUNGOzs7OztJQUdELGlEQUFtQjs7OztJQURuQixVQUNvQixLQUFpQjtRQUNuQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDdkIsT0FBTztTQUNSO1FBQ0QsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sQ0FBQyxFQUFFOztZQUNqQyxJQUFNLFdBQVcscUJBQUcsS0FBSyxDQUFDLGFBQTRCLEVBQUM7O1lBQ3ZELElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUM7O1lBQ3ZCLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLHNCQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBNEIsQ0FBQSxDQUFDO1lBQ25FLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzVFLE9BQU87YUFDUjtZQUNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDekQ7S0FDRjs7Ozs7SUFFTyw2Q0FBZTs7OztjQUFDLE1BQXlCO1FBQy9DLE9BQU8sT0FBTyxJQUFJLENBQUMsZUFBZSxLQUFLLFFBQVE7WUFDN0MsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssTUFBTTtZQUNqQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7Ozs7O0lBR2xELDJDQUFhOzs7Ozs7SUFBYixVQUFjLE1BQXNCLEVBQUUsV0FBbUIsRUFBRSxLQUFZO1FBQ3JFLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxNQUFNLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM3QixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxXQUFXO1lBQ2QsQ0FBQyxDQUFDLElBQUksQ0FBQyx3QkFBd0IsbUJBQUMsTUFBOEIsR0FBRSxLQUFLLENBQUM7WUFDdEUsQ0FBQyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO0tBQ3hEOzs7O0lBRU8scUNBQU87Ozs7O1FBQ2IsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDbEUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLFdBQVcsQ0FBRSxDQUFDO1FBQ3BELElBQUksTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM5QixJQUFJLENBQUMsV0FBVztnQkFDZCxDQUFDLENBQUMsSUFBSSxDQUFDLHdCQUF3QixtQkFBQyxNQUE4QixHQUFFLElBQUksQ0FBQztnQkFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDakQ7Ozs7OztJQUdLLDBDQUFZOzs7O2NBQUMsSUFBYTs7UUFDaEMsSUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFDbEUsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFFLFdBQVcsQ0FBRSxDQUFDOztRQUMxRCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFFLFdBQVcsQ0FBRSxJQUFJLEVBQUUsQ0FBQzs7UUFDbEQsSUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQzs7UUFDOUIsSUFBSSxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkIsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLHNDQUFzQzs7WUFDekQsU0FBUyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQzthQUFNO1lBQ0wsU0FBUyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDM0M7UUFFRCxPQUFPLElBQUksRUFBRTtZQUNYLFNBQVMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDakQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxJQUFJLFNBQVMsSUFBSSxNQUFNLEVBQUU7Z0JBQ3hDLE1BQU07YUFDUDs7WUFDRCxJQUFNLFVBQVUsR0FBRyxPQUFPLENBQUUsU0FBUyxDQUFFLENBQUM7WUFDeEMsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxFQUFFO2dCQUN0QyxTQUFTO2FBQ1Y7WUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1lBQ2pELE1BQU07U0FDUDs7Ozs7SUFHSyxzQ0FBUTs7Ozs7UUFDZCxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO1lBQ2xCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNmOzs7OztJQUdLLHVDQUFTOzs7OztRQUNmLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUM7O1FBQzVDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUUsTUFBTSxDQUFFLENBQUM7UUFDdkMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTs7WUFDN0IsSUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBWCxDQUFXLENBQUMsQ0FBQztZQUMvQyxJQUFJLE9BQU8sRUFBRTtnQkFDWCxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzFDO1NBQ0Y7Ozs7Ozs7O0lBR0gsZ0RBQWtCOzs7Ozs7SUFBbEIsVUFBbUIsTUFBc0IsRUFBRSxXQUFtQixFQUFFLEtBQVk7UUFDMUUsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ3ZCLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ25EO0tBQ0Y7Ozs7Ozs7SUFFRCxnREFBa0I7Ozs7OztJQUFsQixVQUFtQixNQUFzQixFQUFFLFdBQW1CLEVBQUUsS0FBWTtRQUMxRSxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsZUFBZSxLQUFLLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDcEQ7S0FDRjs7OztJQUVPLG1EQUFxQjs7OztRQUMzQixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUN6QixZQUFZLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztTQUM5Qjs7Ozs7Ozs7SUFHSywrQ0FBaUI7Ozs7OztjQUFDLE1BQXNCLEVBQUUsS0FBYSxFQUFFLFFBQWlCOztRQUNoRixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLFFBQVEsRUFBRTtZQUNaLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZDLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7YUFDOUIsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUNUOzs7OztJQU9LLDhDQUFnQjs7Ozs7UUFDdEIsSUFBTSxjQUFjLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBRzFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLGNBQWMsRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQ3RELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7WUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7WUFFMUIsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFOztnQkFDZCxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7Z0JBQ25ELElBQUksQ0FBQyxrQkFBa0IsR0FBTSxLQUFLLE9BQUksQ0FBQzthQUN4QztTQUNGOztRQUdELElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QyxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDO1lBQ3RELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztZQUNwQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsRUFBRSxDQUFDO1lBQzdCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN6QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCOzs7OztJQUdLLGdEQUFrQjs7Ozs7O1FBQ3hCLElBQU0sT0FBTyxHQUEyQixFQUFFLENBQUM7O1FBQzNDLElBQU0sSUFBSSxHQUFxQixFQUFFLENBQUM7O1FBRWxDLElBQU0sYUFBYSxHQUFHLFVBQUMsVUFBa0IsRUFBRSxDQUFtQjtZQUM1RCxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDOztnQkFDYixJQUFNLEtBQUssR0FBRyxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxPQUFPLEtBQUssSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ2xELENBQUMsQ0FBQztTQUNKLENBQUM7O1FBRUYsSUFBTSxNQUFNLEdBQ1YsSUFBSSxDQUFDLFlBQVksWUFBWSxNQUFNLElBQUksbUJBQUMsSUFBSSxDQUFDLFlBQW1DLEVBQUMsQ0FBQyxNQUFNO1lBQ3RGLENBQUMsQ0FBQyxtQkFBQyxJQUFJLENBQUMsWUFBbUMsRUFBQyxDQUFDLE1BQU07WUFDbkQsQ0FBQyxDQUFDLGFBQWEsQ0FBQzs7UUFFcEIsSUFBTSxNQUFNLEdBQ1YsSUFBSSxDQUFDLFlBQVksWUFBWSxNQUFNLElBQUksbUJBQUMsSUFBSSxDQUFDLFlBQW1DLEVBQUMsQ0FBQyxNQUFNLENBQUM7O1FBRTNGLElBQU0sVUFBVSxHQUFHLFVBQUMsSUFBb0IsRUFBRSxhQUFxQjtZQUFyQiw4QkFBQSxFQUFBLHFCQUFxQjs7WUFDN0QsSUFBTSxRQUFRLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDaEQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7Z0JBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFO29CQUFFLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2lCQUFFO2dCQUMzQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtvQkFBRSxVQUFVLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2lCQUFFO2dCQUNuRCxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7b0JBQUUsU0FBUyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztpQkFBRTthQUMvRixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7U0FDWixDQUFDOztRQUVGLElBQU0sU0FBUyxHQUFHLFVBQUMsSUFBb0IsRUFBRSxhQUFxQjtZQUFyQiw4QkFBQSxFQUFBLHFCQUFxQjs7WUFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzs7WUFDaEIsSUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixJQUFJLE1BQU0sQ0FBQyxLQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxFQUFFOztnQkFDbkMsSUFBTSxRQUFRLEdBQUcsYUFBYSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUM7O2dCQUNoRCxJQUFNLE1BQU07d0JBQ1YsUUFBUSxVQUFBO3dCQUNSLE1BQU0sRUFBb0IsSUFBSTt3QkFDOUIsSUFBSSxFQUFzQixLQUFLOztvQkFDL0IsR0FBRSxLQUFJLENBQUMsZUFBZSxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDNUU7Z0JBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNaLENBQUM7UUFFRixJQUFJLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBRSxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQztZQUNoRyxDQUFDLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQztZQUNqQixDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUZzQixDQUV0QixDQUFDLENBQUM7UUFDdEIsSUFBSSxNQUFNLEVBQUU7WUFDVixPQUFPLENBQUMsSUFBSSxDQUFDLFVBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSyxPQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUF4QyxDQUF3QyxDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUUsT0FBTyxDQUFFLENBQUM7Ozs7Ozs7SUFHN0Isc0RBQXdCOzs7OztJQUF4QixVQUF5QixNQUE0QixFQUFFLEtBQVk7UUFBbkUsaUJBaUJDO1FBaEJDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFFLE1BQU0sQ0FBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFFckMsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7O1lBQ3JCLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQzs7WUFDckMsSUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBRSxLQUFLLENBQUUsQ0FBQzs7WUFFN0MsSUFBTSxlQUFlLEdBQUcsVUFBQyxJQUFvQixFQUFFLFdBQW1CO2dCQUNoRSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO29CQUN2QixlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQUM7aUJBQy9DO2dCQUNELEtBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQzthQUM5QyxDQUFDO1lBQ0YsZUFBZSxDQUFDLGVBQWUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN6QyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7MEJBTVcseUNBQVE7Ozs7O1lBQ2xCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7Ozs7OzBCQUdmLHlDQUFROzs7OztZQUNsQixPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQzs7Ozs7SUFHN0Msc0JBQUksZ0RBQWU7Ozs7UUFBbkI7WUFDRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUMxQzs7O09BQUE7SUFFRCxzQkFBSSxpREFBZ0I7Ozs7UUFBcEI7WUFDRSxPQUFPLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDbEY7OztPQUFBO0lBRUQsc0JBQUksc0RBQXFCOzs7O1FBQXpCO1lBQ0UsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztTQUM3Qjs7O09BQUE7SUFFRCxrQ0FBa0M7Ozs7O0lBQ2xDLDRDQUFjOzs7O0lBQWQsVUFBZSxNQUFzQjtRQUNuQyxPQUFPLE1BQU0sQ0FBRSxJQUFJLENBQUMsZUFBZSxJQUFJLE9BQU8sQ0FBRSxDQUFDO0tBQ2xEO0lBRUQsa0NBQWtDOzs7OztJQUNsQyw0Q0FBYzs7OztJQUFkLFVBQWUsTUFBc0I7UUFDbkMsT0FBTyxNQUFNLENBQUUsSUFBSSxDQUFDLGVBQWUsSUFBSSxPQUFPLENBQUUsQ0FBQztLQUNsRDs7Ozs7O0lBRUQsK0NBQWlCOzs7OztJQUFqQixVQUFrQixNQUFzQixFQUFFLEtBQWE7O1FBQ3JELElBQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxLQUFLLENBQUUsQ0FBQztRQUNqRCxPQUFPLFNBQVMsS0FBSyxNQUFNLENBQUM7S0FDN0I7Ozs7SUFFTywrQ0FBaUI7Ozs7OztRQUN2QixJQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDOztRQUM3QyxJQUFNLE1BQU0sR0FBYSxlQUFlLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsS0FBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQzFFLElBQUksSUFBSSxDQUFDLHFCQUFxQixFQUFFO1lBQzlCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLE1BQU0sUUFBQSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxDQUFDO1NBQ3ZEO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1NBQ2pGOztRQUVELElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7O0lBRzNCLFlBQVk7Ozs7O0lBRVosOENBQWdCOzs7O0lBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7S0FDOUI7Ozs7SUFFRCx1Q0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQzVCOzs7O0lBS0QseUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7S0FDOUI7Ozs7O0lBRUQsOENBQWdCOzs7O0lBQWhCLFVBQWlCLEVBQVk7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsK0NBQWlCOzs7O0lBQWpCLFVBQWtCLEVBQVk7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7S0FDckI7SUFFRCxrQ0FBa0M7Ozs7O0lBQ2xDLHdDQUFVOzs7O0lBQVYsVUFBVyxLQUFVOztRQUNuQixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM5QyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDYixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3JCO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNoQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztTQUN4QjtLQUNGOzs7OztJQUVELDhDQUFnQjs7OztJQUFoQixVQUFpQixRQUF3Qzs7UUFDdkQsSUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUNqRixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsS0FBSyxRQUFRLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztZQUNqQyxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQzFCO0tBQ0Y7O2dCQXZ4QkYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO29CQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtvQkFDM0MsUUFBUSxFQUFhLDJCQUEyQjtvQkFDaEQsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsdXpHQUFtRDtvQkFDbkQsVUFBVSxFQUFXLENBQUUsaUJBQWlCLENBQUU7b0JBQzFDLFNBQVMsRUFBWTt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFNLGlCQUFpQjs0QkFDOUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEVBQW5CLENBQW1CLENBQUM7NEJBQ2xELEtBQUssRUFBUSxJQUFJO3lCQUNsQjtxQkFDRjtvQkFDRCxJQUFJLEVBQWlCO3dCQUNuQixpQkFBaUIsRUFBeUIsS0FBSzt3QkFDL0Msc0JBQXNCLEVBQW9CLE1BQU07d0JBQ2hELDZCQUE2QixFQUFhLE1BQU07d0JBQ2hELHlCQUF5QixFQUFpQixvQkFBb0I7d0JBQzlELHlCQUF5QixFQUFpQixvQkFBb0I7d0JBQzlELHNDQUFzQyxFQUFJLFlBQVk7d0JBQ3RELGtDQUFrQyxFQUFRLGFBQWE7d0JBQ3ZELHdDQUF3QyxFQUFFLGNBQWM7d0JBQ3hELDhCQUE4QixFQUFZLFdBQVc7cUJBQ3REOzZCQUNzQiw0S0FTdEI7aUJBQ0Y7Ozs7Z0JBekRDLFVBQVU7Z0JBRlYsaUJBQWlCOzs7d0JBNkRoQixTQUFTLFNBQUMsT0FBTzt1QkFDakIsU0FBUyxTQUFDLE1BQU07OEJBRWhCLEtBQUs7OEJBQ0wsS0FBSzsrQkFDTCxLQUFLOzhCQUNMLEtBQUs7bUNBQ0wsS0FBSzs2QkFDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSztrQ0FDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSztvQ0FDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSztnQ0FDTCxLQUFLO2tDQUNMLEtBQUs7OEJBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7a0NBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUdMLEtBQUs7NEJBRUwsS0FBSztvQ0FhTCxNQUFNOzJCQUNOLE1BQU07MEJBQ04sTUFBTTtrQ0FDTixNQUFNOzJCQUNOLE1BQU07NEJBcVROLFlBQVksU0FBQyxTQUFTLEVBQUUsQ0FBRSxRQUFRLENBQUU7aUNBMENwQyxZQUFZLFNBQUMsT0FBTyxFQUFFLENBQUUsUUFBUSxDQUFFO3NDQWNsQyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFO3NDQVV2QyxZQUFZLFNBQUMsWUFBWSxFQUFFLENBQUUsUUFBUSxDQUFFOzs7UUFqYTlCLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzhCQTFFMUI7O1NBaUVhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIEVTQ0FQRSwgTEVGVF9BUlJPVywgUklHSFRfQVJST1csIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSwgQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcbmltcG9ydCB7IENsYXNzTWFwIH0gZnJvbSAnLi4vY29yZS9pbnRlcmZhY2UvaW50ZXJmYWNlJztcbmltcG9ydCB7IEVYUEFOREVEX0RST1BET1dOX1BPU0lUSU9OUyB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyBhcnJheUVxdWFscywgdG9BcnJheSB9IGZyb20gJy4uL2NvcmUvdXRpbC9hcnJheSc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IENhc2NhZGVyT3B0aW9uLCBDYXNjYWRlclNlYXJjaE9wdGlvbiwgTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIsIE56Q2FzY2FkZXJTaXplLCBOekNhc2NhZGVyVHJpZ2dlclR5cGUsIE56U2hvd1NlYXJjaE9wdGlvbnMgfSBmcm9tICcuL3R5cGVzJztcblxuY29uc3QgZGVmYXVsdERpc3BsYXlSZW5kZXIgPSBsYWJlbCA9PiBsYWJlbC5qb2luKCcgLyAnKTtcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWNhc2NhZGVyLFtuei1jYXNjYWRlcl0nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2FzY2FkZXIuY29tcG9uZW50Lmh0bWwnLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbIGRyb3BEb3duQW5pbWF0aW9uIF0sXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOekNhc2NhZGVyQ29tcG9uZW50KSxcbiAgICAgIG11bHRpICAgICAgOiB0cnVlXG4gICAgfVxuICBdLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1thdHRyLnRhYkluZGV4XScgICAgICAgICAgICAgICAgICAgICAgIDogJ1wiMFwiJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlcl0nICAgICAgICAgICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyXScgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLWxnXScgICAgICAgICAgICAgICA6ICduelNpemUgPT09IFwibGFyZ2VcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItc21dJyAgICAgICAgICAgICAgIDogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItZGlzYWJsZWRdJyAgOiAnbnpEaXNhYmxlZCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLW9wZW5dJyAgICAgIDogJ21lbnVWaXNpYmxlJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1waWNrZXItd2l0aC12YWx1ZV0nOiAnISFpbnB1dFZhbHVlJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1mb2N1c2VkXScgICAgICAgICAgOiAnaXNGb2N1c2VkJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICAuYW50LWNhc2NhZGVyLW1lbnVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIHRvcDogMTAwJTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIGAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhc2NhZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIEBWaWV3Q2hpbGQoJ2lucHV0JykgaW5wdXQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ21lbnUnKSBtZW51OiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dJbnB1dCA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dBcnJvdyA9IHRydWU7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekFsbG93Q2xlYXIgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBdXRvRm9jdXMgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56Q2hhbmdlT25TZWxlY3QgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDb2x1bW5DbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpFeHBhbmRUcmlnZ2VyOiBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljayc7XG4gIEBJbnB1dCgpIG56VmFsdWVQcm9wZXJ0eSA9ICd2YWx1ZSc7XG4gIEBJbnB1dCgpIG56TGFiZWxSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekxhYmVsUHJvcGVydHkgPSAnbGFiZWwnO1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICBASW5wdXQoKSBuelNpemU6IE56Q2FzY2FkZXJTaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelNob3dTZWFyY2g6IGJvb2xlYW4gfCBOelNob3dTZWFyY2hPcHRpb25zO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJ1BsZWFzZSBzZWxlY3QnO1xuICBASW5wdXQoKSBuek1lbnVDbGFzc05hbWU6IHN0cmluZztcbiAgQElucHV0KCkgbnpNZW51U3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmc7IH07XG4gIEBJbnB1dCgpIG56TW91c2VFbnRlckRlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56TW91c2VMZWF2ZURlbGF5OiBudW1iZXIgPSAxNTA7IC8vIG1zXG4gIEBJbnB1dCgpIG56VHJpZ2dlckFjdGlvbjogTnpDYXNjYWRlclRyaWdnZXJUeXBlIHwgTnpDYXNjYWRlclRyaWdnZXJUeXBlW10gPSBbICdjbGljaycgXSBhcyBOekNhc2NhZGVyVHJpZ2dlclR5cGVbXTtcbiAgQElucHV0KCkgbnpDaGFuZ2VPbjogKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGxldmVsOiBudW1iZXIpID0+IGJvb2xlYW47XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBuekxvYWREYXRhOiAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGluZGV4PzogbnVtYmVyKSA9PiBQcm9taXNlTGlrZTxhbnk+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuek9wdGlvbnMoKTogQ2FzY2FkZXJPcHRpb25bXSB7IHJldHVybiB0aGlzLmNvbHVtbnNbIDAgXTsgfVxuICBzZXQgbnpPcHRpb25zKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gfCBudWxsKSB7XG4gICAgdGhpcy5jb2x1bW5zU25hcHNob3QgPSB0aGlzLmNvbHVtbnMgPSBvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoID8gWyBvcHRpb25zIF0gOiBbXTtcbiAgICBpZiAoIXRoaXMuaXNTZWFyY2hpbmcpIHtcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZSAmJiB0aGlzLmNvbHVtbnMubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoMCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxDYXNjYWRlck9wdGlvbltdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPHsgb3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlciB9PigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGVhciA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56VmlzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTsgLy8gTm90IGV4cG9zZWQsIG9ubHkgZm9yIHRlc3RcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpOyAvLyBOb3QgZXhwb3NlZCwgb25seSBmb3IgdGVzdFxuXG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBkcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gIG1lbnVWaXNpYmxlID0gZmFsc2U7XG4gIGlzTG9hZGluZyA9IGZhbHNlO1xuICBsYWJlbFJlbmRlclRleHQ6IHN0cmluZztcbiAgbGFiZWxSZW5kZXJDb250ZXh0ID0ge307XG4gIGNvbHVtbnM6IENhc2NhZGVyT3B0aW9uW11bXSA9IFtdO1xuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuICBwb3NpdGlvbnM6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSA9IFsgLi4uRVhQQU5ERURfRFJPUERPV05fUE9TSVRJT05TIF07XG4gIGRyb3Bkb3duV2lkdGhTdHlsZTogc3RyaW5nO1xuICBpc1NlYXJjaGluZyA9IGZhbHNlO1xuICBpc0ZvY3VzZWQgPSBmYWxzZTtcblxuICBwcml2YXRlIGlzT3BlbmluZyA9IGZhbHNlO1xuICBwcml2YXRlIGRlZmF1bHRWYWx1ZTsgLy8gRGVmYXVsdCB2YWx1ZSB3cml0dGVuIGJ5IGBbbmdNb2RlbF1gXG4gIHByaXZhdGUgdmFsdWU7XG4gIHByaXZhdGUgc2VsZWN0ZWRPcHRpb25zOiBDYXNjYWRlck9wdGlvbltdID0gW107XG4gIHByaXZhdGUgYWN0aXZhdGVkT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIGNvbHVtbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXVtdO1xuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDogQ2FzY2FkZXJPcHRpb25bXTtcbiAgcHJpdmF0ZSBkZWxheU1lbnVUaW1lcjtcbiAgcHJpdmF0ZSBkZWxheVNlbGVjdFRpbWVyO1xuXG4gIHNldCBpbnB1dFZhbHVlKGlucHV0VmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2lucHV0VmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgIHRoaXMudG9nZ2xlU2VhcmNoTW9kZSgpO1xuICB9XG4gIGdldCBpbnB1dFZhbHVlKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLl9pbnB1dFZhbHVlOyB9XG4gIHByaXZhdGUgX2lucHV0VmFsdWUgPSAnJztcblxuICBnZXQgbWVudUNscygpOiBDbGFzc01hcCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFsgYCR7dGhpcy5uek1lbnVDbGFzc05hbWV9YCBdOiAhIXRoaXMubnpNZW51Q2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIGdldCBtZW51Q29sdW1uQ2xzKCk6IENsYXNzTWFwIHtcbiAgICByZXR1cm4ge1xuICAgICAgWyBgJHt0aGlzLm56Q29sdW1uQ2xhc3NOYW1lfWAgXTogISF0aGlzLm56Q29sdW1uQ2xhc3NOYW1lXG4gICAgfTtcbiAgfVxuXG4gIC8vI3JlZ2lvbiBNZW51XG5cbiAgZGVsYXlTZXRNZW51VmlzaWJsZSh2aXNpYmxlOiBib29sZWFuLCBkZWxheTogbnVtYmVyLCBzZXRPcGVuaW5nOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICBpZiAoZGVsYXkpIHtcbiAgICAgIGlmICh2aXNpYmxlICYmIHNldE9wZW5pbmcpIHtcbiAgICAgICAgdGhpcy5pc09wZW5pbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5kZWxheU1lbnVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIHRoaXMuY2xlYXJEZWxheU1lbnVUaW1lcigpO1xuICAgICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pc09wZW5pbmcgPSBmYWxzZTtcbiAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0TWVudVZpc2libGUodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgc2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSAhPT0gdmlzaWJsZSkge1xuICAgICAgdGhpcy5tZW51VmlzaWJsZSA9IHZpc2libGU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICBpZiAodmlzaWJsZSkge1xuICAgICAgICB0aGlzLmxvYWRSb290T3B0aW9ucygpO1xuICAgICAgfVxuICAgICAgdGhpcy5uelZpc2libGVDaGFuZ2UuZW1pdCh2aXNpYmxlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGVsYXlNZW51VGltZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZGVsYXlNZW51VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5TWVudVRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbG9hZFJvb3RPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgY29uc3Qgcm9vdCA9IHt9O1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5Bc3luYyhyb290LCAtMSk7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEluaXRcblxuICBwcml2YXRlIGlzTG9hZGVkKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jb2x1bW5zWyBpbmRleCBdICYmIHRoaXMuY29sdW1uc1sgaW5kZXggXS5sZW5ndGggPiAwO1xuICB9XG5cbiAgcHJpdmF0ZSBmaW5kT3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBDYXNjYWRlck9wdGlvbiB7XG4gICAgY29uc3Qgb3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IHRoaXMuY29sdW1uc1sgaW5kZXggXTtcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2Ygb3B0aW9uID09PSAnb2JqZWN0JyA/IHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSA6IG9wdGlvbjtcbiAgICAgIHJldHVybiBvcHRpb25zLmZpbmQobyA9PiB2YWx1ZSA9PT0gdGhpcy5nZXRPcHRpb25WYWx1ZShvKSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIGFjdGl2YXRlT25Jbml0KGluZGV4OiBudW1iZXIsIHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBsZXQgb3B0aW9uID0gdGhpcy5maW5kT3B0aW9uKHZhbHVlLCBpbmRleCk7XG4gICAgaWYgKCFvcHRpb24pIHtcbiAgICAgIG9wdGlvbiA9IHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgPyB2YWx1ZSA6IHtcbiAgICAgICAgWyBgJHt0aGlzLm56VmFsdWVQcm9wZXJ0eX1gIF06IHZhbHVlLFxuICAgICAgICBbIGAke3RoaXMubnpMYWJlbFByb3BlcnR5fWAgXTogdmFsdWVcbiAgICAgIH07XG4gICAgfVxuICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbiwgaW5kZXgsIGZhbHNlLCBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIGluaXRPcHRpb25zKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB2cyA9IHRoaXMuZGVmYXVsdFZhbHVlO1xuICAgIGNvbnN0IGxhc3RJbmRleCA9IHZzLmxlbmd0aCAtIDE7XG5cbiAgICBjb25zdCBsb2FkID0gKCkgPT4ge1xuICAgICAgdGhpcy5hY3RpdmF0ZU9uSW5pdChpbmRleCwgdnNbIGluZGV4IF0pO1xuICAgICAgaWYgKGluZGV4IDwgbGFzdEluZGV4KSB7XG4gICAgICAgIHRoaXMuaW5pdE9wdGlvbnMoaW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChpbmRleCA9PT0gbGFzdEluZGV4KSB7XG4gICAgICAgIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh0aGlzLmlzTG9hZGVkKGluZGV4KSB8fCAhdGhpcy5uekxvYWREYXRhKSB7XG4gICAgICBsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IC0gMSBdIHx8IHt9O1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5Bc3luYyhub2RlLCBpbmRleCAtIDEsIGxvYWQsIHRoaXMuYWZ0ZXJXcml0ZVZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gTXV0YXRpbmcgZGF0YVxuXG4gIHByaXZhdGUgc2V0T3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIHNlbGVjdDogYm9vbGVhbiA9IGZhbHNlLCBsb2FkQ2hpbGRyZW46IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XG4gICAgaWYgKCFvcHRpb24gfHwgb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdID0gb3B0aW9uO1xuXG4gICAgLy8gU2V0IHBhcmVudCBvcHRpb24gYW5kIGFsbCBhbmNlc3RvciBvcHRpb25zIGFzIGFjdGl2ZS5cbiAgICBmb3IgKGxldCBpID0gY29sdW1uSW5kZXggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKCF0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgXSkge1xuICAgICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgXSA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaSArIDEgXS5wYXJlbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IGNoaWxkIG9wdGlvbnMgYW5kIGFsbCBzdWNjZXNzIG9wdGlvbnMgYXMgaW5hY3RpdmUuXG4gICAgaWYgKGNvbHVtbkluZGV4IDwgdGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5zbGljZSgwLCBjb2x1bW5JbmRleCArIDEpO1xuICAgIH1cblxuICAgIC8vIExvYWQgY2hpbGQgb3B0aW9ucy5cbiAgICBpZiAob3B0aW9uLmNoaWxkcmVuICYmIG9wdGlvbi5jaGlsZHJlbi5sZW5ndGggJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IG9wdGlvbik7XG4gICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBjb2x1bW5JbmRleCArIDEpO1xuICAgIH0gZWxzZSBpZiAoIW9wdGlvbi5pc0xlYWYgJiYgbG9hZENoaWxkcmVuKSB7XG4gICAgICB0aGlzLmxvYWRDaGlsZHJlbkFzeW5jKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIGlmIChzZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfVxuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkQ2hpbGRyZW5Bc3luYyhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBzdWNjZXNzPzogKCkgPT4gdm9pZCwgZmFpbHVyZT86ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekxvYWREYXRhKSB7XG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGNvbHVtbkluZGV4IDwgMDtcbiAgICAgIG9wdGlvbi5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubnpMb2FkRGF0YShvcHRpb24sIGNvbHVtbkluZGV4KS50aGVuKCgpID0+IHtcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAob3B0aW9uLmNoaWxkcmVuKSB7XG4gICAgICAgICAgb3B0aW9uLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gY2hpbGQucGFyZW50ID0gY29sdW1uSW5kZXggPCAwID8gdW5kZWZpbmVkIDogb3B0aW9uKTtcbiAgICAgICAgICB0aGlzLnNldENvbHVtbkRhdGEob3B0aW9uLmNoaWxkcmVuLCBjb2x1bW5JbmRleCArIDEpO1xuICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3VjY2Vzcykge1xuICAgICAgICAgIHN1Y2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgfSwgKCkgPT4ge1xuICAgICAgICBvcHRpb24ubG9hZGluZyA9IHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIG9wdGlvbi5pc0xlYWYgPSB0cnVlO1xuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIGlmIChmYWlsdXJlKSB7XG4gICAgICAgICAgZmFpbHVyZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldE9wdGlvblNlbGVjdGVkKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uID0gKG86IENhc2NhZGVyT3B0aW9uLCBpOiBudW1iZXIpOiBib29sZWFuID0+IHtcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5uekNoYW5nZU9uID09PSAnZnVuY3Rpb24nID8gdGhpcy5uekNoYW5nZU9uKG8sIGkpID09PSB0cnVlIDogZmFsc2U7XG4gICAgfTtcblxuICAgIHRoaXMubnpTZWxlY3QuZW1pdCh7IG9wdGlvbiwgaW5kZXg6IGNvbHVtbkluZGV4IH0pO1xuXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYgfHwgdGhpcy5uekNoYW5nZU9uU2VsZWN0IHx8IHNob3VsZFBlcmZvcm1TZWxlY3Rpb24ob3B0aW9uLCBjb2x1bW5JbmRleCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDb2x1bW5EYXRhKG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10sIGNvbHVtbkluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoIWFycmF5RXF1YWxzKHRoaXMuY29sdW1uc1sgY29sdW1uSW5kZXggXSwgb3B0aW9ucykpIHtcbiAgICAgIHRoaXMuY29sdW1uc1sgY29sdW1uSW5kZXggXSA9IG9wdGlvbnM7XG4gICAgICBpZiAoY29sdW1uSW5kZXggPCB0aGlzLmNvbHVtbnMubGVuZ3RoIC0gMSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMgPSB0aGlzLmNvbHVtbnMuc2xpY2UoMCwgY29sdW1uSW5kZXggKyAxKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbGVhclNlbGVjdGlvbihldmVudD86IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcbiAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XG5cbiAgICB0aGlzLm9uVmFsdWVDaGFuZ2UoKTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0U3VibWl0VmFsdWUoKTogYW55W10ge1xuICAgIGNvbnN0IHZhbHVlcyA9IFtdO1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zLmZvckVhY2gob3B0aW9uID0+IHtcbiAgICAgIHZhbHVlcy5wdXNoKHRoaXMuZ2V0T3B0aW9uVmFsdWUob3B0aW9uKSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfVxuXG4gIHByaXZhdGUgb25WYWx1ZUNoYW5nZSgpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcbiAgICBpZiAoIWFycmF5RXF1YWxzKHRoaXMudmFsdWUsIHZhbHVlKSkge1xuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSBudWxsO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XG4gICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHRoaXMubnpDbGVhci5lbWl0KCk7XG4gICAgICB9XG4gICAgICB0aGlzLm56U2VsZWN0aW9uQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZE9wdGlvbnMpO1xuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBhZnRlcldyaXRlVmFsdWUoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnM7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMuZ2V0U3VibWl0VmFsdWUoKTtcbiAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gTW91c2UgYW5kIGtleWJvYXJkIGV2ZW50IGhhbmRsZXJzLCB2aWV3IGNoaWxkcmVuXG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5mb2N1cygpO1xuICAgICAgdGhpcy5pc0ZvY3VzZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGJsdXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNGb2N1c2VkKSB7XG4gICAgICAodGhpcy5pbnB1dCA/IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudCA6IHRoaXMuZWwpLmJsdXIoKTtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRCbHVyKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMubWVudVZpc2libGUgPyB0aGlzLmZvY3VzKCkgOiB0aGlzLmJsdXIoKTtcbiAgfVxuXG4gIGhhbmRsZUlucHV0Rm9jdXMoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5mb2N1cygpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsgJyRldmVudCcgXSlcbiAgb25LZXlEb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgY29uc3Qga2V5Q29kZSA9IGV2ZW50LmtleUNvZGU7XG5cbiAgICBpZiAoa2V5Q29kZSAhPT0gRE9XTl9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gVVBfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IExFRlRfQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IFJJR0hUX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBFTlRFUiAmJlxuICAgICAga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmXG4gICAgICBrZXlDb2RlICE9PSBFU0NBUEVcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBQcmVzcyBhbnkga2V5cyBhYm92ZSB0byByZW9wZW4gbWVudS5cbiAgICBpZiAoIXRoaXMubWVudVZpc2libGUgJiYga2V5Q29kZSAhPT0gQkFDS1NQQUNFICYmIGtleUNvZGUgIT09IEVTQ0FQRSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0TWVudVZpc2libGUodHJ1ZSk7XG4gICAgfVxuXG4gICAgLy8gTWFrZSB0aGVzZSBrZXlzIHdvcmsgYXMgZGVmYXVsdCBpbiBzZWFyY2hpbmcgbW9kZS5cbiAgICBpZiAodGhpcy5pc1NlYXJjaGluZyAmJiAoa2V5Q29kZSA9PT0gQkFDS1NQQUNFIHx8IGtleUNvZGUgPT09IExFRlRfQVJST1cgfHwga2V5Q29kZSA9PT0gUklHSFRfQVJST1cpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW50ZXJhY3Qgd2l0aCB0aGUgY29tcG9uZW50LlxuICAgIGlmICh0aGlzLm1lbnVWaXNpYmxlKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgaWYgKGtleUNvZGUgPT09IERPV05fQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlVXBPckRvd24oZmFsc2UpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVVcE9yRG93bih0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gTEVGVF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVMZWZ0KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVJpZ2h0KCk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIHRoaXMub25FbnRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyAnJGV2ZW50JyBdKVxuICBvblRyaWdnZXJDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTaG93U2VhcmNoKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQWN0aW9uVHJpZ2dlcignY2xpY2snKSkge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKCF0aGlzLm1lbnVWaXNpYmxlLCAxMDApO1xuICAgIH1cbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VlbnRlcicsIFsgJyRldmVudCcgXSlcbiAgb25UcmlnZ2VyTW91c2VFbnRlcihldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUodHJ1ZSwgdGhpcy5uek1vdXNlRW50ZXJEZWxheSwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignbW91c2VsZWF2ZScsIFsgJyRldmVudCcgXSlcbiAgb25UcmlnZ2VyTW91c2VMZWF2ZShldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm1lbnVWaXNpYmxlIHx8IHRoaXMuaXNPcGVuaW5nKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2hvdmVyJykpIHtcbiAgICAgIGNvbnN0IG1vdXNlVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldCBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGNvbnN0IGhvc3RFbCA9IHRoaXMuZWw7XG4gICAgICBjb25zdCBtZW51RWwgPSB0aGlzLm1lbnUgJiYgdGhpcy5tZW51Lm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoaG9zdEVsLmNvbnRhaW5zKG1vdXNlVGFyZ2V0KSB8fCAobWVudUVsICYmIG1lbnVFbC5jb250YWlucyhtb3VzZVRhcmdldCkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgdGhpcy5uek1vdXNlTGVhdmVEZWxheSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc0FjdGlvblRyaWdnZXIoYWN0aW9uOiAnY2xpY2snIHwgJ2hvdmVyJyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy5uelRyaWdnZXJBY3Rpb24gPT09ICdzdHJpbmcnXG4gICAgICA/IHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSBhY3Rpb25cbiAgICAgIDogdGhpcy5uelRyaWdnZXJBY3Rpb24uaW5kZXhPZihhY3Rpb24pICE9PSAtMTtcbiAgfVxuXG4gIG9uT3B0aW9uQ2xpY2sob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGV2ZW50KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgICBpZiAob3B0aW9uICYmIG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVsLmZvY3VzKCk7XG4gICAgdGhpcy5pc1NlYXJjaGluZ1xuICAgICAgPyB0aGlzLnNldFNlYXJjaE9wdGlvbkFjdGl2YXRlZChvcHRpb24gYXMgQ2FzY2FkZXJTZWFyY2hPcHRpb24sIGV2ZW50KVxuICAgICAgOiB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25FbnRlcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcbiAgICBjb25zdCBvcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGNvbHVtbkluZGV4IF07XG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICB0aGlzLmlzU2VhcmNoaW5nXG4gICAgICAgID8gdGhpcy5zZXRTZWFyY2hPcHRpb25BY3RpdmF0ZWQob3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBudWxsKVxuICAgICAgICA6IHRoaXMuc2V0T3B0aW9uU2VsZWN0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlVXBPckRvd24oaXNVcDogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IGNvbHVtbkluZGV4ID0gTWF0aC5tYXgodGhpcy5hY3RpdmF0ZWRPcHRpb25zLmxlbmd0aCAtIDEsIDApO1xuICAgIGNvbnN0IGFjdGl2ZU9wdGlvbiA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXTtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5jb2x1bW5zWyBjb2x1bW5JbmRleCBdIHx8IFtdO1xuICAgIGNvbnN0IGxlbmd0aCA9IG9wdGlvbnMubGVuZ3RoO1xuICAgIGxldCBuZXh0SW5kZXggPSAtMTtcbiAgICBpZiAoIWFjdGl2ZU9wdGlvbikgeyAvLyBOb3Qgc2VsZWN0ZWQgb3B0aW9ucyBpbiB0aGlzIGNvbHVtblxuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IGxlbmd0aCA6IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXh0SW5kZXggPSBvcHRpb25zLmluZGV4T2YoYWN0aXZlT3B0aW9uKTtcbiAgICB9XG5cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgbmV4dEluZGV4ID0gaXNVcCA/IG5leHRJbmRleCAtIDEgOiBuZXh0SW5kZXggKyAxO1xuICAgICAgaWYgKG5leHRJbmRleCA8IDAgfHwgbmV4dEluZGV4ID49IGxlbmd0aCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IG5leHRPcHRpb24gPSBvcHRpb25zWyBuZXh0SW5kZXggXTtcbiAgICAgIGlmICghbmV4dE9wdGlvbiB8fCBuZXh0T3B0aW9uLmRpc2FibGVkKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBtb3ZlTGVmdCgpOiB2b2lkIHtcbiAgICBjb25zdCBvcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIGlmIChvcHRpb25zLmxlbmd0aCkge1xuICAgICAgb3B0aW9ucy5wb3AoKTsgLy8gUmVtb3ZlIHRoZSBsYXN0IG9uZVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVJpZ2h0KCk6IHZvaWQge1xuICAgIGNvbnN0IGxlbmd0aCA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGg7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29sdW1uc1sgbGVuZ3RoIF07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG5leHRPcHQgPSBvcHRpb25zLmZpbmQobyA9PiAhby5kaXNhYmxlZCk7XG4gICAgICBpZiAobmV4dE9wdCkge1xuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChuZXh0T3B0LCBsZW5ndGgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uT3B0aW9uTW91c2VFbnRlcihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICh0aGlzLm56RXhwYW5kVHJpZ2dlciA9PT0gJ2hvdmVyJyAmJiAhb3B0aW9uLmlzTGVhZikge1xuICAgICAgdGhpcy5kZWxheVNlbGVjdE9wdGlvbihvcHRpb24sIGNvbHVtbkluZGV4LCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBvbk9wdGlvbk1vdXNlTGVhdmUob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RPcHRpb24ob3B0aW9uLCBjb2x1bW5JbmRleCwgZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5U2VsZWN0VGltZXIpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5U2VsZWN0VGltZXIpO1xuICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGRlbGF5U2VsZWN0T3B0aW9uKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIsIGRvU2VsZWN0OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcbiAgICBpZiAoZG9TZWxlY3QpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGluZGV4KTtcbiAgICAgICAgdGhpcy5kZWxheVNlbGVjdFRpbWVyID0gbnVsbDtcbiAgICAgIH0sIDE1MCk7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIFNlYXJjaFxuXG4gIHByaXZhdGUgdG9nZ2xlU2VhcmNoTW9kZSgpOiB2b2lkIHtcbiAgICBjb25zdCB3aWxsQmVJblNlYXJjaCA9ICEhdGhpcy5faW5wdXRWYWx1ZTtcblxuICAgIC8vIFRha2UgYSBzbmFwc2hvdCBiZWZvcmUgZW50ZXJpbmcgc2VhcmNoIG1vZGUuXG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoaW5nICYmIHdpbGxCZUluU2VhcmNoKSB7XG4gICAgICB0aGlzLmlzU2VhcmNoaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90ID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyVGV4dCA9ICcnO1xuXG4gICAgICBpZiAodGhpcy5pbnB1dCkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IHRoaXMuaW5wdXQubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSBgJHt3aWR0aH1weGA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmVzdG9yZSB0aGUgc25hcHNob3QgYWZ0ZXIgbGVhdmluZyBzZWFyY2ggbW9kZS5cbiAgICBpZiAodGhpcy5pc1NlYXJjaGluZyAmJiAhd2lsbEJlSW5TZWFyY2gpIHtcbiAgICAgIHRoaXMuaXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1NuYXBzaG90O1xuICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zU25hcHNob3Q7XG4gICAgICB0aGlzLmRyb3Bkb3duV2lkdGhTdHlsZSA9ICcnO1xuICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9ucykge1xuICAgICAgICB0aGlzLmJ1aWxkRGlzcGxheUxhYmVsKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuaXNTZWFyY2hpbmcpIHtcbiAgICAgIHRoaXMucHJlcGFyZVNlYXJjaFZhbHVlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBwcmVwYXJlU2VhcmNoVmFsdWUoKTogdm9pZCB7XG4gICAgY29uc3QgcmVzdWx0czogQ2FzY2FkZXJTZWFyY2hPcHRpb25bXSA9IFtdO1xuICAgIGNvbnN0IHBhdGg6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcblxuICAgIGNvbnN0IGRlZmF1bHRGaWx0ZXIgPSAoaW5wdXRWYWx1ZTogc3RyaW5nLCBwOiBDYXNjYWRlck9wdGlvbltdKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gcC5zb21lKG4gPT4ge1xuICAgICAgICBjb25zdCBsYWJlbCA9IHRoaXMuZ2V0T3B0aW9uTGFiZWwobik7XG4gICAgICAgIHJldHVybiBsYWJlbCAmJiBsYWJlbC5pbmRleE9mKGlucHV0VmFsdWUpICE9PSAtMTtcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBmaWx0ZXI6IChpbnB1dFZhbHVlOiBzdHJpbmcsIHA6IENhc2NhZGVyT3B0aW9uW10pID0+IGJvb2xlYW4gPVxuICAgICAgdGhpcy5uelNob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLmZpbHRlclxuICAgICAgICA/ICh0aGlzLm56U2hvd1NlYXJjaCBhcyBOelNob3dTZWFyY2hPcHRpb25zKS5maWx0ZXJcbiAgICAgICAgOiBkZWZhdWx0RmlsdGVyO1xuXG4gICAgY29uc3Qgc29ydGVyOiAoYTogQ2FzY2FkZXJPcHRpb25bXSwgYjogQ2FzY2FkZXJPcHRpb25bXSwgaW5wdXRWYWx1ZTogc3RyaW5nKSA9PiBudW1iZXIgPVxuICAgICAgdGhpcy5uelNob3dTZWFyY2ggaW5zdGFuY2VvZiBPYmplY3QgJiYgKHRoaXMubnpTaG93U2VhcmNoIGFzIE56U2hvd1NlYXJjaE9wdGlvbnMpLnNvcnRlcjtcblxuICAgIGNvbnN0IGxvb3BQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICBwYXRoLnB1c2gobm9kZSk7XG4gICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goKHNOb2RlKSA9PiB7XG4gICAgICAgIGlmICghc05vZGUucGFyZW50KSB7IHNOb2RlLnBhcmVudCA9IG5vZGU7IH0gLy8gQnVpbGQgcGFyZW50IHJlZmVyZW5jZSB3aGVuIGRvaW5nIHNlYXJjaGluZ1xuICAgICAgICBpZiAoIXNOb2RlLmlzTGVhZikgeyBsb29wUGFyZW50KHNOb2RlLCBkaXNhYmxlZCk7IH1cbiAgICAgICAgaWYgKHNOb2RlLmlzTGVhZiB8fCAhc05vZGUuY2hpbGRyZW4gfHwgIXNOb2RlLmNoaWxkcmVuLmxlbmd0aCkgeyBsb29wQ2hpbGQoc05vZGUsIGRpc2FibGVkKTsgfVxuICAgICAgfSk7XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG5cbiAgICBjb25zdCBsb29wQ2hpbGQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGZvcmNlRGlzYWJsZWQgPSBmYWxzZSkgPT4ge1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgY29uc3QgY1BhdGggPSBBcnJheS5mcm9tKHBhdGgpO1xuICAgICAgaWYgKGZpbHRlcih0aGlzLl9pbnB1dFZhbHVlLCBjUGF0aCkpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBmb3JjZURpc2FibGVkIHx8IG5vZGUuZGlzYWJsZWQ7XG4gICAgICAgIGNvbnN0IG9wdGlvbjogQ2FzY2FkZXJTZWFyY2hPcHRpb24gPSB7XG4gICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgaXNMZWFmICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgICAgIHBhdGggICAgICAgICAgICAgICAgICAgIDogY1BhdGgsXG4gICAgICAgICAgWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSBdOiBjUGF0aC5tYXAocCA9PiB0aGlzLmdldE9wdGlvbkxhYmVsKHApKS5qb2luKCcgLyAnKVxuICAgICAgICB9O1xuICAgICAgICByZXN1bHRzLnB1c2gob3B0aW9uKTtcbiAgICAgIH1cbiAgICAgIHBhdGgucG9wKCk7XG4gICAgfTtcblxuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90WyAwIF0uZm9yRWFjaChub2RlID0+IChub2RlLmlzTGVhZiB8fCAhbm9kZS5jaGlsZHJlbiB8fCAhbm9kZS5jaGlsZHJlbi5sZW5ndGgpXG4gICAgICA/IGxvb3BDaGlsZChub2RlKVxuICAgICAgOiBsb29wUGFyZW50KG5vZGUpKTtcbiAgICBpZiAoc29ydGVyKSB7XG4gICAgICByZXN1bHRzLnNvcnQoKGEsIGIpID0+IHNvcnRlcihhLnBhdGgsIGIucGF0aCwgdGhpcy5faW5wdXRWYWx1ZSkpO1xuICAgIH1cbiAgICB0aGlzLmNvbHVtbnMgPSBbIHJlc3VsdHMgXTtcbiAgfVxuXG4gIHNldFNlYXJjaE9wdGlvbkFjdGl2YXRlZChyZXN1bHQ6IENhc2NhZGVyU2VhcmNoT3B0aW9uLCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSBbIHJlc3VsdCBdO1xuICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZShmYWxzZSwgMjAwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XG4gICAgICBjb25zdCBpbmRleCA9IHJlc3VsdC5wYXRoLmxlbmd0aCAtIDE7XG4gICAgICBjb25zdCBkZXN0aW5hdGlvbk5vZGUgPSByZXN1bHQucGF0aFsgaW5kZXggXTtcbiAgICAgIC8vIE5PVEU6IG9wdGltaXplIHRoaXMuXG4gICAgICBjb25zdCBtb2NrQ2xpY2tQYXJlbnQgPSAobm9kZTogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIpID0+IHtcbiAgICAgICAgaWYgKG5vZGUgJiYgbm9kZS5wYXJlbnQpIHtcbiAgICAgICAgICBtb2NrQ2xpY2tQYXJlbnQobm9kZS5wYXJlbnQsIGNvbHVtbkluZGV4IC0gMSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbk9wdGlvbkNsaWNrKG5vZGUsIGNvbHVtbkluZGV4LCBldmVudCk7XG4gICAgICB9O1xuICAgICAgbW9ja0NsaWNrUGFyZW50KGRlc3RpbmF0aW9uTm9kZSwgaW5kZXgpO1xuICAgIH0sIDMwMCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICAvLyNyZWdpb24gSGVscGVyc1xuXG4gIHByaXZhdGUgZ2V0IGhhc0lucHV0KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMuaW5wdXRWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGhhc1ZhbHVlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhIXRoaXMudmFsdWUgJiYgISF0aGlzLnZhbHVlLmxlbmd0aDtcbiAgfVxuXG4gIGdldCBzaG93UGxhY2Vob2xkZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEodGhpcy5oYXNJbnB1dCB8fCB0aGlzLmhhc1ZhbHVlKTtcbiAgfVxuXG4gIGdldCBjbGVhckljb25WaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56QWxsb3dDbGVhciAmJiAhdGhpcy5uekRpc2FibGVkICYmICh0aGlzLmhhc1ZhbHVlIHx8IHRoaXMuaGFzSW5wdXQpO1xuICB9XG5cbiAgZ2V0IGlzTGFiZWxSZW5kZXJUZW1wbGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLm56TGFiZWxSZW5kZXI7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldE9wdGlvbkxhYmVsKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24pOiBhbnkge1xuICAgIHJldHVybiBvcHRpb25bIHRoaXMubnpMYWJlbFByb3BlcnR5IHx8ICdsYWJlbCcgXTtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0T3B0aW9uVmFsdWUob3B0aW9uOiBDYXNjYWRlck9wdGlvbik6IGFueSB7XG4gICAgcmV0dXJuIG9wdGlvblsgdGhpcy5uelZhbHVlUHJvcGVydHkgfHwgJ3ZhbHVlJyBdO1xuICB9XG5cbiAgaXNPcHRpb25BY3RpdmF0ZWQob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgaW5kZXg6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGFjdGl2ZU9wdCA9IHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgaW5kZXggXTtcbiAgICByZXR1cm4gYWN0aXZlT3B0ID09PSBvcHRpb247XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkRGlzcGxheUxhYmVsKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuc2VsZWN0ZWRPcHRpb25zO1xuICAgIGNvbnN0IGxhYmVsczogc3RyaW5nW10gPSBzZWxlY3RlZE9wdGlvbnMubWFwKG8gPT4gdGhpcy5nZXRPcHRpb25MYWJlbChvKSk7XG4gICAgaWYgKHRoaXMuaXNMYWJlbFJlbmRlclRlbXBsYXRlKSB7XG4gICAgICB0aGlzLmxhYmVsUmVuZGVyQ29udGV4dCA9IHsgbGFiZWxzLCBzZWxlY3RlZE9wdGlvbnMgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSBkZWZhdWx0RGlzcGxheVJlbmRlci5jYWxsKHRoaXMsIGxhYmVscywgc2VsZWN0ZWRPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gV2hlbiBjb21wb25lbnRzIGluaXRzIHdpdGggZGVmYXVsdCB2YWx1ZSwgdGhpcyB3b3VsZCBtYWtlIGRpc3BsYXkgbGFiZWwgYXBwZWFyIGNvcnJlY3RseS5cbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICAvLyNlbmRyZWdpb25cblxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xuICAgICAgdGhpcy5jbG9zZU1lbnUoKTtcbiAgICB9XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIGNsb3NlTWVudSgpOiB2b2lkIHtcbiAgICB0aGlzLmJsdXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICB0aGlzLnNldE1lbnVWaXNpYmxlKGZhbHNlKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICB0aGlzLmNsZWFyRGVsYXlTZWxlY3RUaW1lcigpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4ge30pOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB2cyA9IHRoaXMuZGVmYXVsdFZhbHVlID0gdG9BcnJheSh2YWx1ZSk7XG4gICAgaWYgKHZzLmxlbmd0aCkge1xuICAgICAgdGhpcy5pbml0T3B0aW9ucygwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHZzO1xuICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gW107XG4gICAgICB0aGlzLmFmdGVyV3JpdGVWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UocG9zaXRpb246IENvbm5lY3RlZE92ZXJsYXlQb3NpdGlvbkNoYW5nZSk6IHZvaWQge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gcG9zaXRpb24uY29ubmVjdGlvblBhaXIub3JpZ2luWSA9PT0gJ2JvdHRvbScgPyAnYm90dG9tJyA6ICd0b3AnO1xuICAgIGlmICh0aGlzLmRyb3BEb3duUG9zaXRpb24gIT09IG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLmRyb3BEb3duUG9zaXRpb24gPSBuZXdWYWx1ZTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==