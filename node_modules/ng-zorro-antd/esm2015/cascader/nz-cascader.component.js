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
const defaultDisplayRender = label => label.join(' / ');
const ɵ0 = defaultDisplayRender;
export class NzCascaderComponent {
    /**
     * @param {?} elementRef
     * @param {?} cdr
     */
    constructor(elementRef, cdr) {
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
        this.positions = [...EXPANDED_DROPDOWN_POSITIONS];
        this.isSearching = false;
        this.isFocused = false;
        this.isOpening = false;
        this.selectedOptions = [];
        this.activatedOptions = [];
        this._inputValue = '';
    }
    /**
     * @return {?}
     */
    get nzOptions() { return this.columns[0]; }
    /**
     * @param {?} options
     * @return {?}
     */
    set nzOptions(options) {
        this.columnsSnapshot = this.columns = options && options.length ? [options] : [];
        if (!this.isSearching) {
            if (this.defaultValue && this.columns.length) {
                this.initOptions(0);
            }
        }
        else {
            this.prepareSearchValue();
        }
    }
    /**
     * @param {?} inputValue
     * @return {?}
     */
    set inputValue(inputValue) {
        this._inputValue = inputValue;
        this.toggleSearchMode();
    }
    /**
     * @return {?}
     */
    get inputValue() { return this._inputValue; }
    /**
     * @return {?}
     */
    get menuCls() {
        return {
            [`${this.nzMenuClassName}`]: !!this.nzMenuClassName
        };
    }
    /**
     * @return {?}
     */
    get menuColumnCls() {
        return {
            [`${this.nzColumnClassName}`]: !!this.nzColumnClassName
        };
    }
    /**
     * @param {?} visible
     * @param {?} delay
     * @param {?=} setOpening
     * @return {?}
     */
    delaySetMenuVisible(visible, delay, setOpening = false) {
        this.clearDelayMenuTimer();
        if (delay) {
            if (visible && setOpening) {
                this.isOpening = true;
            }
            this.delayMenuTimer = setTimeout(() => {
                this.setMenuVisible(visible);
                this.cdr.detectChanges();
                this.clearDelayMenuTimer();
                if (visible) {
                    setTimeout(() => {
                        this.isOpening = false;
                    }, 100);
                }
            }, delay);
        }
        else {
            this.setMenuVisible(visible);
        }
    }
    /**
     * @param {?} visible
     * @return {?}
     */
    setMenuVisible(visible) {
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
    }
    /**
     * @return {?}
     */
    clearDelayMenuTimer() {
        if (this.delayMenuTimer) {
            clearTimeout(this.delayMenuTimer);
            this.delayMenuTimer = null;
        }
    }
    /**
     * @return {?}
     */
    loadRootOptions() {
        if (!this.columns.length) {
            /** @type {?} */
            const root = {};
            this.loadChildrenAsync(root, -1);
        }
    }
    /**
     * @param {?} index
     * @return {?}
     */
    isLoaded(index) {
        return this.columns[index] && this.columns[index].length > 0;
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    findOption(option, index) {
        /** @type {?} */
        const options = this.columns[index];
        if (options) {
            /** @type {?} */
            const value = typeof option === 'object' ? this.getOptionValue(option) : option;
            return options.find(o => value === this.getOptionValue(o));
        }
        return null;
    }
    /**
     * @param {?} index
     * @param {?} value
     * @return {?}
     */
    activateOnInit(index, value) {
        /** @type {?} */
        let option = this.findOption(value, index);
        if (!option) {
            option = typeof value === 'object' ? value : {
                [`${this.nzValueProperty}`]: value,
                [`${this.nzLabelProperty}`]: value
            };
        }
        this.setOptionActivated(option, index, false, false);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    initOptions(index) {
        /** @type {?} */
        const vs = this.defaultValue;
        /** @type {?} */
        const lastIndex = vs.length - 1;
        /** @type {?} */
        const load = () => {
            this.activateOnInit(index, vs[index]);
            if (index < lastIndex) {
                this.initOptions(index + 1);
            }
            if (index === lastIndex) {
                this.afterWriteValue();
            }
        };
        if (this.isLoaded(index) || !this.nzLoadData) {
            load();
        }
        else {
            /** @type {?} */
            const node = this.activatedOptions[index - 1] || {};
            this.loadChildrenAsync(node, index - 1, load, this.afterWriteValue);
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} select
     * @param {?=} loadChildren
     * @return {?}
     */
    setOptionActivated(option, columnIndex, select = false, loadChildren = true) {
        if (!option || option.disabled) {
            return;
        }
        this.activatedOptions[columnIndex] = option;
        // Set parent option and all ancestor options as active.
        for (let i = columnIndex - 1; i >= 0; i--) {
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
            option.children.forEach(child => child.parent = option);
            this.setColumnData(option.children, columnIndex + 1);
        }
        else if (!option.isLeaf && loadChildren) {
            this.loadChildrenAsync(option, columnIndex);
        }
        if (select) {
            this.setOptionSelected(option, columnIndex);
        }
        this.cdr.detectChanges();
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?=} success
     * @param {?=} failure
     * @return {?}
     */
    loadChildrenAsync(option, columnIndex, success, failure) {
        if (this.nzLoadData) {
            this.isLoading = columnIndex < 0;
            option.loading = true;
            this.nzLoadData(option, columnIndex).then(() => {
                option.loading = this.isLoading = false;
                if (option.children) {
                    option.children.forEach(child => child.parent = columnIndex < 0 ? undefined : option);
                    this.setColumnData(option.children, columnIndex + 1);
                    this.cdr.detectChanges();
                }
                if (success) {
                    success();
                }
            }, () => {
                option.loading = this.isLoading = false;
                option.isLeaf = true;
                this.cdr.detectChanges();
                if (failure) {
                    failure();
                }
            });
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @return {?}
     */
    setOptionSelected(option, columnIndex) {
        /** @type {?} */
        const shouldPerformSelection = (o, i) => {
            return typeof this.nzChangeOn === 'function' ? this.nzChangeOn(o, i) === true : false;
        };
        this.nzSelect.emit({ option, index: columnIndex });
        if (option.isLeaf || this.nzChangeOnSelect || shouldPerformSelection(option, columnIndex)) {
            this.selectedOptions = this.activatedOptions;
            this.buildDisplayLabel();
            this.onValueChange();
        }
        if (option.isLeaf) {
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    }
    /**
     * @param {?} options
     * @param {?} columnIndex
     * @return {?}
     */
    setColumnData(options, columnIndex) {
        if (!arrayEquals(this.columns[columnIndex], options)) {
            this.columns[columnIndex] = options;
            if (columnIndex < this.columns.length - 1) {
                this.columns = this.columns.slice(0, columnIndex + 1);
            }
        }
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    clearSelection(event) {
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
    }
    /**
     * @return {?}
     */
    getSubmitValue() {
        /** @type {?} */
        const values = [];
        this.selectedOptions.forEach(option => {
            values.push(this.getOptionValue(option));
        });
        return values;
    }
    /**
     * @return {?}
     */
    onValueChange() {
        /** @type {?} */
        const value = this.getSubmitValue();
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
    }
    /**
     * @return {?}
     */
    afterWriteValue() {
        this.selectedOptions = this.activatedOptions;
        this.value = this.getSubmitValue();
        this.buildDisplayLabel();
    }
    /**
     * @return {?}
     */
    focus() {
        if (!this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).focus();
            this.isFocused = true;
        }
    }
    /**
     * @return {?}
     */
    blur() {
        if (this.isFocused) {
            (this.input ? this.input.nativeElement : this.el).blur();
            this.isFocused = false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInputBlur(event) {
        this.menuVisible ? this.focus() : this.blur();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleInputFocus(event) {
        this.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyDown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerClick(event) {
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseEnter(event) {
        if (this.nzDisabled) {
            return;
        }
        if (this.isActionTrigger('hover')) {
            this.delaySetMenuVisible(true, this.nzMouseEnterDelay, true);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onTriggerMouseLeave(event) {
        if (this.nzDisabled) {
            return;
        }
        if (!this.menuVisible || this.isOpening) {
            event.preventDefault();
            return;
        }
        if (this.isActionTrigger('hover')) {
            /** @type {?} */
            const mouseTarget = /** @type {?} */ (event.relatedTarget);
            /** @type {?} */
            const hostEl = this.el;
            /** @type {?} */
            const menuEl = this.menu && /** @type {?} */ (this.menu.nativeElement);
            if (hostEl.contains(mouseTarget) || (menuEl && menuEl.contains(mouseTarget))) {
                return;
            }
            this.delaySetMenuVisible(false, this.nzMouseLeaveDelay);
        }
    }
    /**
     * @param {?} action
     * @return {?}
     */
    isActionTrigger(action) {
        return typeof this.nzTriggerAction === 'string'
            ? this.nzTriggerAction === action
            : this.nzTriggerAction.indexOf(action) !== -1;
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionClick(option, columnIndex, event) {
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
    }
    /**
     * @return {?}
     */
    onEnter() {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const option = this.activatedOptions[columnIndex];
        if (option && !option.disabled) {
            this.isSearching
                ? this.setSearchOptionActivated(/** @type {?} */ (option), null)
                : this.setOptionSelected(option, columnIndex);
        }
    }
    /**
     * @param {?} isUp
     * @return {?}
     */
    moveUpOrDown(isUp) {
        /** @type {?} */
        const columnIndex = Math.max(this.activatedOptions.length - 1, 0);
        /** @type {?} */
        const activeOption = this.activatedOptions[columnIndex];
        /** @type {?} */
        const options = this.columns[columnIndex] || [];
        /** @type {?} */
        const length = options.length;
        /** @type {?} */
        let nextIndex = -1;
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
            const nextOption = options[nextIndex];
            if (!nextOption || nextOption.disabled) {
                continue;
            }
            this.setOptionActivated(nextOption, columnIndex);
            break;
        }
    }
    /**
     * @return {?}
     */
    moveLeft() {
        /** @type {?} */
        const options = this.activatedOptions;
        if (options.length) {
            options.pop(); // Remove the last one
        }
    }
    /**
     * @return {?}
     */
    moveRight() {
        /** @type {?} */
        const length = this.activatedOptions.length;
        /** @type {?} */
        const options = this.columns[length];
        if (options && options.length) {
            /** @type {?} */
            const nextOpt = options.find(o => !o.disabled);
            if (nextOpt) {
                this.setOptionActivated(nextOpt, length);
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseEnter(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, true);
        }
    }
    /**
     * @param {?} option
     * @param {?} columnIndex
     * @param {?} event
     * @return {?}
     */
    onOptionMouseLeave(option, columnIndex, event) {
        event.preventDefault();
        if (this.nzExpandTrigger === 'hover' && !option.isLeaf) {
            this.delaySelectOption(option, columnIndex, false);
        }
    }
    /**
     * @return {?}
     */
    clearDelaySelectTimer() {
        if (this.delaySelectTimer) {
            clearTimeout(this.delaySelectTimer);
            this.delaySelectTimer = null;
        }
    }
    /**
     * @param {?} option
     * @param {?} index
     * @param {?} doSelect
     * @return {?}
     */
    delaySelectOption(option, index, doSelect) {
        this.clearDelaySelectTimer();
        if (doSelect) {
            this.delaySelectTimer = setTimeout(() => {
                this.setOptionActivated(option, index);
                this.delaySelectTimer = null;
            }, 150);
        }
    }
    /**
     * @return {?}
     */
    toggleSearchMode() {
        /** @type {?} */
        const willBeInSearch = !!this._inputValue;
        // Take a snapshot before entering search mode.
        if (!this.isSearching && willBeInSearch) {
            this.isSearching = true;
            this.activatedOptionsSnapshot = this.activatedOptions;
            this.activatedOptions = [];
            this.labelRenderText = '';
            if (this.input) {
                /** @type {?} */
                const width = this.input.nativeElement.offsetWidth;
                this.dropdownWidthStyle = `${width}px`;
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
    }
    /**
     * @return {?}
     */
    prepareSearchValue() {
        /** @type {?} */
        const results = [];
        /** @type {?} */
        const path = [];
        /** @type {?} */
        const defaultFilter = (inputValue, p) => {
            return p.some(n => {
                /** @type {?} */
                const label = this.getOptionLabel(n);
                return label && label.indexOf(inputValue) !== -1;
            });
        };
        /** @type {?} */
        const filter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).filter
            ? (/** @type {?} */ (this.nzShowSearch)).filter
            : defaultFilter;
        /** @type {?} */
        const sorter = this.nzShowSearch instanceof Object && (/** @type {?} */ (this.nzShowSearch)).sorter;
        /** @type {?} */
        const loopParent = (node, forceDisabled = false) => {
            /** @type {?} */
            const disabled = forceDisabled || node.disabled;
            path.push(node);
            node.children.forEach((sNode) => {
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
        const loopChild = (node, forceDisabled = false) => {
            path.push(node);
            /** @type {?} */
            const cPath = Array.from(path);
            if (filter(this._inputValue, cPath)) {
                /** @type {?} */
                const disabled = forceDisabled || node.disabled;
                /** @type {?} */
                const option = {
                    disabled,
                    isLeaf: true,
                    path: cPath,
                    [this.nzLabelProperty]: cPath.map(p => this.getOptionLabel(p)).join(' / ')
                };
                results.push(option);
            }
            path.pop();
        };
        this.columnsSnapshot[0].forEach(node => (node.isLeaf || !node.children || !node.children.length)
            ? loopChild(node)
            : loopParent(node));
        if (sorter) {
            results.sort((a, b) => sorter(a.path, b.path, this._inputValue));
        }
        this.columns = [results];
    }
    /**
     * @param {?} result
     * @param {?} event
     * @return {?}
     */
    setSearchOptionActivated(result, event) {
        this.activatedOptions = [result];
        this.delaySetMenuVisible(false, 200);
        setTimeout(() => {
            this.inputValue = '';
            /** @type {?} */
            const index = result.path.length - 1;
            /** @type {?} */
            const destinationNode = result.path[index];
            /** @type {?} */
            const mockClickParent = (node, columnIndex) => {
                if (node && node.parent) {
                    mockClickParent(node.parent, columnIndex - 1);
                }
                this.onOptionClick(node, columnIndex, event);
            };
            mockClickParent(destinationNode, index);
        }, 300);
    }
    /**
     * @return {?}
     */
    get hasInput() {
        return !!this.inputValue;
    }
    /**
     * @return {?}
     */
    get hasValue() {
        return !!this.value && !!this.value.length;
    }
    /**
     * @return {?}
     */
    get showPlaceholder() {
        return !(this.hasInput || this.hasValue);
    }
    /**
     * @return {?}
     */
    get clearIconVisible() {
        return this.nzAllowClear && !this.nzDisabled && (this.hasValue || this.hasInput);
    }
    /**
     * @return {?}
     */
    get isLabelRenderTemplate() {
        return !!this.nzLabelRender;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionLabel(option) {
        return option[this.nzLabelProperty || 'label'];
    }
    /**
     * @param {?} option
     * @return {?}
     */
    getOptionValue(option) {
        return option[this.nzValueProperty || 'value'];
    }
    /**
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    isOptionActivated(option, index) {
        /** @type {?} */
        const activeOpt = this.activatedOptions[index];
        return activeOpt === option;
    }
    /**
     * @return {?}
     */
    buildDisplayLabel() {
        /** @type {?} */
        const selectedOptions = this.selectedOptions;
        /** @type {?} */
        const labels = selectedOptions.map(o => this.getOptionLabel(o));
        if (this.isLabelRenderTemplate) {
            this.labelRenderContext = { labels, selectedOptions };
        }
        else {
            this.labelRenderText = defaultDisplayRender.call(this, labels, selectedOptions);
        }
        // When components inits with default value, this would make display label appear correctly.
        this.cdr.detectChanges();
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        if (isDisabled) {
            this.closeMenu();
        }
        this.nzDisabled = isDisabled;
    }
    /**
     * @return {?}
     */
    closeMenu() {
        this.blur();
        this.clearDelayMenuTimer();
        this.setMenuVisible(false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.clearDelayMenuTimer();
        this.clearDelaySelectTimer();
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
        this.onTouched = fn;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        /** @type {?} */
        const vs = this.defaultValue = toArray(value);
        if (vs.length) {
            this.initOptions(0);
        }
        else {
            this.value = vs;
            this.activatedOptions = [];
            this.afterWriteValue();
        }
    }
    /**
     * @param {?} position
     * @return {?}
     */
    onPositionChange(position) {
        /** @type {?} */
        const newValue = position.connectionPair.originY === 'bottom' ? 'bottom' : 'top';
        if (this.dropDownPosition !== newValue) {
            this.dropDownPosition = newValue;
            this.cdr.detectChanges();
        }
    }
}
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
                        useExisting: forwardRef(() => NzCascaderComponent),
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
                styles: [`
    .ant-cascader-menus {
      margin-top: 4px;
      margin-bottom: 4px;
      top: 100%;
      left: 0;
      position: relative;
      width: 100%;
    }
  `]
            }] }
];
/** @nocollapse */
NzCascaderComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVoSCxPQUFPLEVBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBRTFFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDOztBQUlwRCxNQUFNLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzs7QUFzQ3hELE1BQU0sT0FBTyxtQkFBbUI7Ozs7O0lBaXRCOUIsWUFBb0IsVUFBc0IsRUFBVSxHQUFzQjtRQUF0RCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUE3c0IxRSxtQkFBdUMsSUFBSSxDQUFDO1FBQzVDLG1CQUF1QyxJQUFJLENBQUM7UUFDNUMsb0JB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QUs7Z0NBQ0wsS0FBSztnQ0FDTCxLQUFLOzhCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFHTCxLQUFLO3dCQUVMLEtBQUs7Z0NBYUwsTUFBTTt1QkFDTixNQUFNO3NCQUNOLE1BQU07OEJBQ04sTUFBTTt1QkFDTixNQUFNO3dCQXFUTixZQUFZLFNBQUMsU0FBUyxFQUFFLENBQUUsUUFBUSxDQUFFOzZCQTBDcEMsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTtrQ0FjbEMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTtrQ0FVdkMsWUFBWSxTQUFDLFlBQVksRUFBRSxDQUFFLFFBQVEsQ0FBRTs7O0lBamE5QixZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCQUNLU1BBQ0UsIERPV05fQVJST1csIEVOVEVSLCBFU0NBUEUsIExFRlRfQVJST1csIFJJR0hUX0FSUk9XLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBmb3J3YXJkUmVmLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IGRyb3BEb3duQW5pbWF0aW9uIH0gZnJvbSAnLi4vY29yZS9hbmltYXRpb24vZHJvcGRvd24tYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDbGFzc01hcCB9IGZyb20gJy4uL2NvcmUvaW50ZXJmYWNlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBFWFBBTkRFRF9EUk9QRE9XTl9QT1NJVElPTlMgfSBmcm9tICcuLi9jb3JlL292ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi1tYXAnO1xuaW1wb3J0IHsgYXJyYXlFcXVhbHMsIHRvQXJyYXkgfSBmcm9tICcuLi9jb3JlL3V0aWwvYXJyYXknO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5pbXBvcnQgeyBDYXNjYWRlck9wdGlvbiwgQ2FzY2FkZXJTZWFyY2hPcHRpb24sIE56Q2FzY2FkZXJFeHBhbmRUcmlnZ2VyLCBOekNhc2NhZGVyU2l6ZSwgTnpDYXNjYWRlclRyaWdnZXJUeXBlLCBOelNob3dTZWFyY2hPcHRpb25zIH0gZnJvbSAnLi90eXBlcyc7XG5cbmNvbnN0IGRlZmF1bHREaXNwbGF5UmVuZGVyID0gbGFiZWwgPT4gbGFiZWwuam9pbignIC8gJyk7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jYXNjYWRlcixbbnotY2FzY2FkZXJdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWNhc2NhZGVyLmNvbXBvbmVudC5odG1sJyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBkcm9wRG93bkFuaW1hdGlvbiBdLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbXG4gICAge1xuICAgICAgcHJvdmlkZSAgICA6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpDYXNjYWRlckNvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbYXR0ci50YWJJbmRleF0nICAgICAgICAgICAgICAgICAgICAgICA6ICdcIjBcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXJdJyAgICAgICAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlcl0nICAgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1sZ10nICAgICAgICAgICAgICAgOiAnbnpTaXplID09PSBcImxhcmdlXCInLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXNtXScgICAgICAgICAgICAgICA6ICduelNpemUgPT09IFwic21hbGxcIicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLWRpc2FibGVkXScgIDogJ256RGlzYWJsZWQnLFxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLXBpY2tlci1vcGVuXScgICAgICA6ICdtZW51VmlzaWJsZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItcGlja2VyLXdpdGgtdmFsdWVdJzogJyEhaW5wdXRWYWx1ZScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItZm9jdXNlZF0nICAgICAgICAgIDogJ2lzRm9jdXNlZCdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgLmFudC1jYXNjYWRlci1tZW51cyB7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICB0b3A6IDEwMCU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICBgIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBAVmlld0NoaWxkKCdpbnB1dCcpIGlucHV0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdtZW51JykgbWVudTogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SW5wdXQgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QXJyb3cgPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpBbGxvd0NsZWFyID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXV0b0ZvY3VzID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoYW5nZU9uU2VsZWN0ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q29sdW1uQ2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56RXhwYW5kVHJpZ2dlcjogTnpDYXNjYWRlckV4cGFuZFRyaWdnZXIgPSAnY2xpY2snO1xuICBASW5wdXQoKSBuelZhbHVlUHJvcGVydHkgPSAndmFsdWUnO1xuICBASW5wdXQoKSBuekxhYmVsUmVuZGVyOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpMYWJlbFByb3BlcnR5ID0gJ2xhYmVsJztcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpTaXplOiBOekNhc2NhZGVyU2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTaG93U2VhcmNoOiBib29sZWFuIHwgTnpTaG93U2VhcmNoT3B0aW9ucztcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlciA9ICdQbGVhc2Ugc2VsZWN0JztcbiAgQElucHV0KCkgbnpNZW51Q2xhc3NOYW1lOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56TWVudVN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nOyB9O1xuICBASW5wdXQoKSBuek1vdXNlRW50ZXJEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xuICBASW5wdXQoKSBuek1vdXNlTGVhdmVEZWxheTogbnVtYmVyID0gMTUwOyAvLyBtc1xuICBASW5wdXQoKSBuelRyaWdnZXJBY3Rpb246IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZSB8IE56Q2FzY2FkZXJUcmlnZ2VyVHlwZVtdID0gWyAnY2xpY2snIF0gYXMgTnpDYXNjYWRlclRyaWdnZXJUeXBlW107XG4gIEBJbnB1dCgpIG56Q2hhbmdlT246IChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKSA9PiBib29sZWFuO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQElucHV0KCkgbnpMb2FkRGF0YTogKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcikgPT4gUHJvbWlzZUxpa2U8YW55PjtcblxuICBASW5wdXQoKVxuICBnZXQgbnpPcHRpb25zKCk6IENhc2NhZGVyT3B0aW9uW10geyByZXR1cm4gdGhpcy5jb2x1bW5zWyAwIF07IH1cbiAgc2V0IG56T3B0aW9ucyhvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdIHwgbnVsbCkge1xuICAgIHRoaXMuY29sdW1uc1NuYXBzaG90ID0gdGhpcy5jb2x1bW5zID0gb3B0aW9ucyAmJiBvcHRpb25zLmxlbmd0aCA/IFsgb3B0aW9ucyBdIDogW107XG4gICAgaWYgKCF0aGlzLmlzU2VhcmNoaW5nKSB7XG4gICAgICBpZiAodGhpcy5kZWZhdWx0VmFsdWUgJiYgdGhpcy5jb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKDApO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FzY2FkZXJPcHRpb25bXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjx7IG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIgfT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xlYXIgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelZpc2libGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7IC8vIE5vdCBleHBvc2VkLCBvbmx5IGZvciB0ZXN0XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTsgLy8gTm90IGV4cG9zZWQsIG9ubHkgZm9yIHRlc3RcblxuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgZHJvcERvd25Qb3NpdGlvbiA9ICdib3R0b20nO1xuICBtZW51VmlzaWJsZSA9IGZhbHNlO1xuICBpc0xvYWRpbmcgPSBmYWxzZTtcbiAgbGFiZWxSZW5kZXJUZXh0OiBzdHJpbmc7XG4gIGxhYmVsUmVuZGVyQ29udGV4dCA9IHt9O1xuICBjb2x1bW5zOiBDYXNjYWRlck9wdGlvbltdW10gPSBbXTtcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgcG9zaXRpb25zOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10gPSBbIC4uLkVYUEFOREVEX0RST1BET1dOX1BPU0lUSU9OUyBdO1xuICBkcm9wZG93bldpZHRoU3R5bGU6IHN0cmluZztcbiAgaXNTZWFyY2hpbmcgPSBmYWxzZTtcbiAgaXNGb2N1c2VkID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSBpc09wZW5pbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSBkZWZhdWx0VmFsdWU7IC8vIERlZmF1bHQgdmFsdWUgd3JpdHRlbiBieSBgW25nTW9kZWxdYFxuICBwcml2YXRlIHZhbHVlO1xuICBwcml2YXRlIHNlbGVjdGVkT3B0aW9uczogQ2FzY2FkZXJPcHRpb25bXSA9IFtdO1xuICBwcml2YXRlIGFjdGl2YXRlZE9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSBbXTtcbiAgcHJpdmF0ZSBjb2x1bW5zU25hcHNob3Q6IENhc2NhZGVyT3B0aW9uW11bXTtcbiAgcHJpdmF0ZSBhY3RpdmF0ZWRPcHRpb25zU25hcHNob3Q6IENhc2NhZGVyT3B0aW9uW107XG4gIHByaXZhdGUgZGVsYXlNZW51VGltZXI7XG4gIHByaXZhdGUgZGVsYXlTZWxlY3RUaW1lcjtcblxuICBzZXQgaW5wdXRWYWx1ZShpbnB1dFZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICB0aGlzLnRvZ2dsZVNlYXJjaE1vZGUoKTtcbiAgfVxuICBnZXQgaW5wdXRWYWx1ZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5faW5wdXRWYWx1ZTsgfVxuICBwcml2YXRlIF9pbnB1dFZhbHVlID0gJyc7XG5cbiAgZ2V0IG1lbnVDbHMoKTogQ2xhc3NNYXAge1xuICAgIHJldHVybiB7XG4gICAgICBbIGAke3RoaXMubnpNZW51Q2xhc3NOYW1lfWAgXTogISF0aGlzLm56TWVudUNsYXNzTmFtZVxuICAgIH07XG4gIH1cblxuICBnZXQgbWVudUNvbHVtbkNscygpOiBDbGFzc01hcCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFsgYCR7dGhpcy5uekNvbHVtbkNsYXNzTmFtZX1gIF06ICEhdGhpcy5uekNvbHVtbkNsYXNzTmFtZVxuICAgIH07XG4gIH1cblxuICAvLyNyZWdpb24gTWVudVxuXG4gIGRlbGF5U2V0TWVudVZpc2libGUodmlzaWJsZTogYm9vbGVhbiwgZGVsYXk6IG51bWJlciwgc2V0T3BlbmluZzogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XG4gICAgaWYgKGRlbGF5KSB7XG4gICAgICBpZiAodmlzaWJsZSAmJiBzZXRPcGVuaW5nKSB7XG4gICAgICAgIHRoaXMuaXNPcGVuaW5nID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZGVsYXlNZW51VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRNZW51VmlzaWJsZSh2aXNpYmxlKTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICB0aGlzLmNsZWFyRGVsYXlNZW51VGltZXIoKTtcbiAgICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgfSwgZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldE1lbnVWaXNpYmxlKHZpc2libGUpO1xuICAgIH1cbiAgfVxuXG4gIHNldE1lbnVWaXNpYmxlKHZpc2libGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubWVudVZpc2libGUgIT09IHZpc2libGUpIHtcbiAgICAgIHRoaXMubWVudVZpc2libGUgPSB2aXNpYmxlO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgaWYgKHZpc2libGUpIHtcbiAgICAgICAgdGhpcy5sb2FkUm9vdE9wdGlvbnMoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubnpWaXNpYmxlQ2hhbmdlLmVtaXQodmlzaWJsZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjbGVhckRlbGF5TWVudVRpbWVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlbGF5TWVudVRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheU1lbnVUaW1lcik7XG4gICAgICB0aGlzLmRlbGF5TWVudVRpbWVyID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGxvYWRSb290T3B0aW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHJvb3QgPSB7fTtcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuQXN5bmMocm9vdCwgLTEpO1xuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBJbml0XG5cbiAgcHJpdmF0ZSBpc0xvYWRlZChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuY29sdW1uc1sgaW5kZXggXSAmJiB0aGlzLmNvbHVtbnNbIGluZGV4IF0ubGVuZ3RoID4gMDtcbiAgfVxuXG4gIHByaXZhdGUgZmluZE9wdGlvbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyKTogQ2FzY2FkZXJPcHRpb24ge1xuICAgIGNvbnN0IG9wdGlvbnM6IENhc2NhZGVyT3B0aW9uW10gPSB0aGlzLmNvbHVtbnNbIGluZGV4IF07XG4gICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIG9wdGlvbiA9PT0gJ29iamVjdCcgPyB0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikgOiBvcHRpb247XG4gICAgICByZXR1cm4gb3B0aW9ucy5maW5kKG8gPT4gdmFsdWUgPT09IHRoaXMuZ2V0T3B0aW9uVmFsdWUobykpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBhY3RpdmF0ZU9uSW5pdChpbmRleDogbnVtYmVyLCB2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgbGV0IG9wdGlvbiA9IHRoaXMuZmluZE9wdGlvbih2YWx1ZSwgaW5kZXgpO1xuICAgIGlmICghb3B0aW9uKSB7XG4gICAgICBvcHRpb24gPSB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnID8gdmFsdWUgOiB7XG4gICAgICAgIFsgYCR7dGhpcy5uelZhbHVlUHJvcGVydHl9YCBdOiB2YWx1ZSxcbiAgICAgICAgWyBgJHt0aGlzLm56TGFiZWxQcm9wZXJ0eX1gIF06IHZhbHVlXG4gICAgICB9O1xuICAgIH1cbiAgICB0aGlzLnNldE9wdGlvbkFjdGl2YXRlZChvcHRpb24sIGluZGV4LCBmYWxzZSwgZmFsc2UpO1xuICB9XG5cbiAgcHJpdmF0ZSBpbml0T3B0aW9ucyhpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgdnMgPSB0aGlzLmRlZmF1bHRWYWx1ZTtcbiAgICBjb25zdCBsYXN0SW5kZXggPSB2cy5sZW5ndGggLSAxO1xuXG4gICAgY29uc3QgbG9hZCA9ICgpID0+IHtcbiAgICAgIHRoaXMuYWN0aXZhdGVPbkluaXQoaW5kZXgsIHZzWyBpbmRleCBdKTtcbiAgICAgIGlmIChpbmRleCA8IGxhc3RJbmRleCkge1xuICAgICAgICB0aGlzLmluaXRPcHRpb25zKGluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgICBpZiAoaW5kZXggPT09IGxhc3RJbmRleCkge1xuICAgICAgICB0aGlzLmFmdGVyV3JpdGVWYWx1ZSgpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAodGhpcy5pc0xvYWRlZChpbmRleCkgfHwgIXRoaXMubnpMb2FkRGF0YSkge1xuICAgICAgbG9hZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBub2RlID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpbmRleCAtIDEgXSB8fCB7fTtcbiAgICAgIHRoaXMubG9hZENoaWxkcmVuQXN5bmMobm9kZSwgaW5kZXggLSAxLCBsb2FkLCB0aGlzLmFmdGVyV3JpdGVWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIE11dGF0aW5nIGRhdGFcblxuICBwcml2YXRlIHNldE9wdGlvbkFjdGl2YXRlZChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyLCBzZWxlY3Q6IGJvb2xlYW4gPSBmYWxzZSwgbG9hZENoaWxkcmVuOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIGlmICghb3B0aW9uIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uc1sgY29sdW1uSW5kZXggXSA9IG9wdGlvbjtcblxuICAgIC8vIFNldCBwYXJlbnQgb3B0aW9uIGFuZCBhbGwgYW5jZXN0b3Igb3B0aW9ucyBhcyBhY3RpdmUuXG4gICAgZm9yIChsZXQgaSA9IGNvbHVtbkluZGV4IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICghdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpIF0pIHtcbiAgICAgICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBpIF0gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGkgKyAxIF0ucGFyZW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNldCBjaGlsZCBvcHRpb25zIGFuZCBhbGwgc3VjY2VzcyBvcHRpb25zIGFzIGluYWN0aXZlLlxuICAgIGlmIChjb2x1bW5JbmRleCA8IHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMuc2xpY2UoMCwgY29sdW1uSW5kZXggKyAxKTtcbiAgICB9XG5cbiAgICAvLyBMb2FkIGNoaWxkIG9wdGlvbnMuXG4gICAgaWYgKG9wdGlvbi5jaGlsZHJlbiAmJiBvcHRpb24uY2hpbGRyZW4ubGVuZ3RoICYmICFvcHRpb24uaXNMZWFmKSB7XG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiBjaGlsZC5wYXJlbnQgPSBvcHRpb24pO1xuICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxKTtcbiAgICB9IGVsc2UgaWYgKCFvcHRpb24uaXNMZWFmICYmIGxvYWRDaGlsZHJlbikge1xuICAgICAgdGhpcy5sb2FkQ2hpbGRyZW5Bc3luYyhvcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0KSB7XG4gICAgICB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgIH1cblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZENoaWxkcmVuQXN5bmMob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgc3VjY2Vzcz86ICgpID0+IHZvaWQsIGZhaWx1cmU/OiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpMb2FkRGF0YSkge1xuICAgICAgdGhpcy5pc0xvYWRpbmcgPSBjb2x1bW5JbmRleCA8IDA7XG4gICAgICBvcHRpb24ubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLm56TG9hZERhdGEob3B0aW9uLCBjb2x1bW5JbmRleCkudGhlbigoKSA9PiB7XG4gICAgICAgIG9wdGlvbi5sb2FkaW5nID0gdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKG9wdGlvbi5jaGlsZHJlbikge1xuICAgICAgICAgIG9wdGlvbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IGNoaWxkLnBhcmVudCA9IGNvbHVtbkluZGV4IDwgMCA/IHVuZGVmaW5lZCA6IG9wdGlvbik7XG4gICAgICAgICAgdGhpcy5zZXRDb2x1bW5EYXRhKG9wdGlvbi5jaGlsZHJlbiwgY29sdW1uSW5kZXggKyAxKTtcbiAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcbiAgICAgICAgICBzdWNjZXNzKCk7XG4gICAgICAgIH1cbiAgICAgIH0sICgpID0+IHtcbiAgICAgICAgb3B0aW9uLmxvYWRpbmcgPSB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBvcHRpb24uaXNMZWFmID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgICBpZiAoZmFpbHVyZSkge1xuICAgICAgICAgIGZhaWx1cmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRPcHRpb25TZWxlY3RlZChvcHRpb246IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgc2hvdWxkUGVyZm9ybVNlbGVjdGlvbiA9IChvOiBDYXNjYWRlck9wdGlvbiwgaTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpDaGFuZ2VPbiA9PT0gJ2Z1bmN0aW9uJyA/IHRoaXMubnpDaGFuZ2VPbihvLCBpKSA9PT0gdHJ1ZSA6IGZhbHNlO1xuICAgIH07XG5cbiAgICB0aGlzLm56U2VsZWN0LmVtaXQoeyBvcHRpb24sIGluZGV4OiBjb2x1bW5JbmRleCB9KTtcblxuICAgIGlmIChvcHRpb24uaXNMZWFmIHx8IHRoaXMubnpDaGFuZ2VPblNlbGVjdCB8fCBzaG91bGRQZXJmb3JtU2VsZWN0aW9uKG9wdGlvbiwgY29sdW1uSW5kZXgpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICAgIHRoaXMuYnVpbGREaXNwbGF5TGFiZWwoKTtcbiAgICAgIHRoaXMub25WYWx1ZUNoYW5nZSgpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb24uaXNMZWFmKSB7XG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UsIHRoaXMubnpNb3VzZUxlYXZlRGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q29sdW1uRGF0YShvcHRpb25zOiBDYXNjYWRlck9wdGlvbltdLCBjb2x1bW5JbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCFhcnJheUVxdWFscyh0aGlzLmNvbHVtbnNbIGNvbHVtbkluZGV4IF0sIG9wdGlvbnMpKSB7XG4gICAgICB0aGlzLmNvbHVtbnNbIGNvbHVtbkluZGV4IF0gPSBvcHRpb25zO1xuICAgICAgaWYgKGNvbHVtbkluZGV4IDwgdGhpcy5jb2x1bW5zLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gdGhpcy5jb2x1bW5zLnNsaWNlKDAsIGNvbHVtbkluZGV4ICsgMSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJTZWxlY3Rpb24oZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cblxuICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gJyc7XG4gICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7fTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgIHRoaXMuc2V0TWVudVZpc2libGUoZmFsc2UpO1xuXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlKCk7XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldFN1Ym1pdFZhbHVlKCk6IGFueVtdIHtcbiAgICBjb25zdCB2YWx1ZXMgPSBbXTtcbiAgICB0aGlzLnNlbGVjdGVkT3B0aW9ucy5mb3JFYWNoKG9wdGlvbiA9PiB7XG4gICAgICB2YWx1ZXMucHVzaCh0aGlzLmdldE9wdGlvblZhbHVlKG9wdGlvbikpO1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZXM7XG4gIH1cblxuICBwcml2YXRlIG9uVmFsdWVDaGFuZ2UoKTogdm9pZCB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLmdldFN1Ym1pdFZhbHVlKCk7XG4gICAgaWYgKCFhcnJheUVxdWFscyh0aGlzLnZhbHVlLCB2YWx1ZSkpIHtcbiAgICAgIHRoaXMuZGVmYXVsdFZhbHVlID0gbnVsbDtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xuICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB0aGlzLm56Q2xlYXIuZW1pdCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5uelNlbGVjdGlvbkNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRPcHRpb25zKTtcbiAgICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgYWZ0ZXJXcml0ZVZhbHVlKCk6IHZvaWQge1xuICAgIHRoaXMuc2VsZWN0ZWRPcHRpb25zID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFN1Ym1pdFZhbHVlKCk7XG4gICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIE1vdXNlIGFuZCBrZXlib2FyZCBldmVudCBoYW5kbGVycywgdmlldyBjaGlsZHJlblxuXG4gIGZvY3VzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0ZvY3VzZWQpIHtcbiAgICAgICh0aGlzLmlucHV0ID8gdGhpcy5pbnB1dC5uYXRpdmVFbGVtZW50IDogdGhpcy5lbCkuZm9jdXMoKTtcbiAgICAgIHRoaXMuaXNGb2N1c2VkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzRm9jdXNlZCkge1xuICAgICAgKHRoaXMuaW5wdXQgPyB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQgOiB0aGlzLmVsKS5ibHVyKCk7XG4gICAgICB0aGlzLmlzRm9jdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUlucHV0Qmx1cihldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICB0aGlzLm1lbnVWaXNpYmxlID8gdGhpcy5mb2N1cygpIDogdGhpcy5ibHVyKCk7XG4gIH1cblxuICBoYW5kbGVJbnB1dEZvY3VzKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXMoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24nLCBbICckZXZlbnQnIF0pXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC5rZXlDb2RlO1xuXG4gICAgaWYgKGtleUNvZGUgIT09IERPV05fQVJST1cgJiZcbiAgICAgIGtleUNvZGUgIT09IFVQX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBMRUZUX0FSUk9XICYmXG4gICAgICBrZXlDb2RlICE9PSBSSUdIVF9BUlJPVyAmJlxuICAgICAga2V5Q29kZSAhPT0gRU5URVIgJiZcbiAgICAgIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJlxuICAgICAga2V5Q29kZSAhPT0gRVNDQVBFXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUHJlc3MgYW55IGtleXMgYWJvdmUgdG8gcmVvcGVuIG1lbnUuXG4gICAgaWYgKCF0aGlzLm1lbnVWaXNpYmxlICYmIGtleUNvZGUgIT09IEJBQ0tTUEFDRSAmJiBrZXlDb2RlICE9PSBFU0NBUEUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldE1lbnVWaXNpYmxlKHRydWUpO1xuICAgIH1cblxuICAgIC8vIE1ha2UgdGhlc2Uga2V5cyB3b3JrIGFzIGRlZmF1bHQgaW4gc2VhcmNoaW5nIG1vZGUuXG4gICAgaWYgKHRoaXMuaXNTZWFyY2hpbmcgJiYgKGtleUNvZGUgPT09IEJBQ0tTUEFDRSB8fCBrZXlDb2RlID09PSBMRUZUX0FSUk9XIHx8IGtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEludGVyYWN0IHdpdGggdGhlIGNvbXBvbmVudC5cbiAgICBpZiAodGhpcy5tZW51VmlzaWJsZSkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGlmIChrZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICAgIHRoaXMubW92ZVVwT3JEb3duKGZhbHNlKTtcbiAgICAgIH0gZWxzZSBpZiAoa2V5Q29kZSA9PT0gVVBfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlVXBPckRvd24odHJ1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgICAgdGhpcy5tb3ZlTGVmdCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICB0aGlzLm1vdmVSaWdodCgpO1xuICAgICAgfSBlbHNlIGlmIChrZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICB0aGlzLm9uRW50ZXIoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgb25UcmlnZ2VyQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLm56U2hvd1NlYXJjaCkge1xuICAgICAgdGhpcy5mb2N1cygpO1xuICAgIH1cbiAgICBpZiAodGhpcy5pc0FjdGlvblRyaWdnZXIoJ2NsaWNrJykpIHtcbiAgICAgIHRoaXMuZGVsYXlTZXRNZW51VmlzaWJsZSghdGhpcy5tZW51VmlzaWJsZSwgMTAwKTtcbiAgICB9XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBbICckZXZlbnQnIF0pXG4gIG9uVHJpZ2dlck1vdXNlRW50ZXIoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQWN0aW9uVHJpZ2dlcignaG92ZXInKSkge1xuICAgICAgdGhpcy5kZWxheVNldE1lbnVWaXNpYmxlKHRydWUsIHRoaXMubnpNb3VzZUVudGVyRGVsYXksIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBbICckZXZlbnQnIF0pXG4gIG9uVHJpZ2dlck1vdXNlTGVhdmUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5tZW51VmlzaWJsZSB8fCB0aGlzLmlzT3BlbmluZykge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBY3Rpb25UcmlnZ2VyKCdob3ZlcicpKSB7XG4gICAgICBjb25zdCBtb3VzZVRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBjb25zdCBob3N0RWwgPSB0aGlzLmVsO1xuICAgICAgY29uc3QgbWVudUVsID0gdGhpcy5tZW51ICYmIHRoaXMubWVudS5uYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGhvc3RFbC5jb250YWlucyhtb3VzZVRhcmdldCkgfHwgKG1lbnVFbCAmJiBtZW51RWwuY29udGFpbnMobW91c2VUYXJnZXQpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UsIHRoaXMubnpNb3VzZUxlYXZlRGVsYXkpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNBY3Rpb25UcmlnZ2VyKGFjdGlvbjogJ2NsaWNrJyB8ICdob3ZlcicpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMubnpUcmlnZ2VyQWN0aW9uID09PSAnc3RyaW5nJ1xuICAgICAgPyB0aGlzLm56VHJpZ2dlckFjdGlvbiA9PT0gYWN0aW9uXG4gICAgICA6IHRoaXMubnpUcmlnZ2VyQWN0aW9uLmluZGV4T2YoYWN0aW9uKSAhPT0gLTE7XG4gIH1cblxuICBvbk9wdGlvbkNsaWNrKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGlmIChldmVudCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbiAmJiBvcHRpb24uZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbC5mb2N1cygpO1xuICAgIHRoaXMuaXNTZWFyY2hpbmdcbiAgICAgID8gdGhpcy5zZXRTZWFyY2hPcHRpb25BY3RpdmF0ZWQob3B0aW9uIGFzIENhc2NhZGVyU2VhcmNoT3B0aW9uLCBldmVudClcbiAgICAgIDogdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIG9uRW50ZXIoKTogdm9pZCB7XG4gICAgY29uc3QgY29sdW1uSW5kZXggPSBNYXRoLm1heCh0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoIC0gMSwgMCk7XG4gICAgY29uc3Qgb3B0aW9uID0gdGhpcy5hY3RpdmF0ZWRPcHRpb25zWyBjb2x1bW5JbmRleCBdO1xuICAgIGlmIChvcHRpb24gJiYgIW9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5pc1NlYXJjaGluZ1xuICAgICAgICA/IHRoaXMuc2V0U2VhcmNoT3B0aW9uQWN0aXZhdGVkKG9wdGlvbiBhcyBDYXNjYWRlclNlYXJjaE9wdGlvbiwgbnVsbClcbiAgICAgICAgOiB0aGlzLnNldE9wdGlvblNlbGVjdGVkKG9wdGlvbiwgY29sdW1uSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZVVwT3JEb3duKGlzVXA6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBjb2x1bW5JbmRleCA9IE1hdGgubWF4KHRoaXMuYWN0aXZhdGVkT3B0aW9ucy5sZW5ndGggLSAxLCAwKTtcbiAgICBjb25zdCBhY3RpdmVPcHRpb24gPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGNvbHVtbkluZGV4IF07XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuY29sdW1uc1sgY29sdW1uSW5kZXggXSB8fCBbXTtcbiAgICBjb25zdCBsZW5ndGggPSBvcHRpb25zLmxlbmd0aDtcbiAgICBsZXQgbmV4dEluZGV4ID0gLTE7XG4gICAgaWYgKCFhY3RpdmVPcHRpb24pIHsgLy8gTm90IHNlbGVjdGVkIG9wdGlvbnMgaW4gdGhpcyBjb2x1bW5cbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBsZW5ndGggOiAtMTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV4dEluZGV4ID0gb3B0aW9ucy5pbmRleE9mKGFjdGl2ZU9wdGlvbik7XG4gICAgfVxuXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIG5leHRJbmRleCA9IGlzVXAgPyBuZXh0SW5kZXggLSAxIDogbmV4dEluZGV4ICsgMTtcbiAgICAgIGlmIChuZXh0SW5kZXggPCAwIHx8IG5leHRJbmRleCA+PSBsZW5ndGgpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjb25zdCBuZXh0T3B0aW9uID0gb3B0aW9uc1sgbmV4dEluZGV4IF07XG4gICAgICBpZiAoIW5leHRPcHRpb24gfHwgbmV4dE9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0T3B0aW9uQWN0aXZhdGVkKG5leHRPcHRpb24sIGNvbHVtbkluZGV4KTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbW92ZUxlZnQoKTogdm9pZCB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICBpZiAob3B0aW9ucy5sZW5ndGgpIHtcbiAgICAgIG9wdGlvbnMucG9wKCk7IC8vIFJlbW92ZSB0aGUgbGFzdCBvbmVcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG1vdmVSaWdodCgpOiB2b2lkIHtcbiAgICBjb25zdCBsZW5ndGggPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnMubGVuZ3RoO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmNvbHVtbnNbIGxlbmd0aCBdO1xuICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBuZXh0T3B0ID0gb3B0aW9ucy5maW5kKG8gPT4gIW8uZGlzYWJsZWQpO1xuICAgICAgaWYgKG5leHRPcHQpIHtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQobmV4dE9wdCwgbGVuZ3RoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbk9wdGlvbk1vdXNlRW50ZXIob3B0aW9uOiBDYXNjYWRlck9wdGlvbiwgY29sdW1uSW5kZXg6IG51bWJlciwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAodGhpcy5uekV4cGFuZFRyaWdnZXIgPT09ICdob3ZlcicgJiYgIW9wdGlvbi5pc0xlYWYpIHtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RPcHRpb24ob3B0aW9uLCBjb2x1bW5JbmRleCwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgb25PcHRpb25Nb3VzZUxlYXZlKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGNvbHVtbkluZGV4OiBudW1iZXIsIGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKHRoaXMubnpFeHBhbmRUcmlnZ2VyID09PSAnaG92ZXInICYmICFvcHRpb24uaXNMZWFmKSB7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0T3B0aW9uKG9wdGlvbiwgY29sdW1uSW5kZXgsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRGVsYXlTZWxlY3RUaW1lcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWxheVNlbGVjdFRpbWVyKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheVNlbGVjdFRpbWVyKTtcbiAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBkZWxheVNlbGVjdE9wdGlvbihvcHRpb246IENhc2NhZGVyT3B0aW9uLCBpbmRleDogbnVtYmVyLCBkb1NlbGVjdDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2xlYXJEZWxheVNlbGVjdFRpbWVyKCk7XG4gICAgaWYgKGRvU2VsZWN0KSB7XG4gICAgICB0aGlzLmRlbGF5U2VsZWN0VGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRPcHRpb25BY3RpdmF0ZWQob3B0aW9uLCBpbmRleCk7XG4gICAgICAgIHRoaXMuZGVsYXlTZWxlY3RUaW1lciA9IG51bGw7XG4gICAgICB9LCAxNTApO1xuICAgIH1cbiAgfVxuXG4gIC8vI2VuZHJlZ2lvblxuXG4gIC8vI3JlZ2lvbiBTZWFyY2hcblxuICBwcml2YXRlIHRvZ2dsZVNlYXJjaE1vZGUoKTogdm9pZCB7XG4gICAgY29uc3Qgd2lsbEJlSW5TZWFyY2ggPSAhIXRoaXMuX2lucHV0VmFsdWU7XG5cbiAgICAvLyBUYWtlIGEgc25hcHNob3QgYmVmb3JlIGVudGVyaW5nIHNlYXJjaCBtb2RlLlxuICAgIGlmICghdGhpcy5pc1NlYXJjaGluZyAmJiB3aWxsQmVJblNlYXJjaCkge1xuICAgICAgdGhpcy5pc1NlYXJjaGluZyA9IHRydWU7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdCA9IHRoaXMuYWN0aXZhdGVkT3B0aW9ucztcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5sYWJlbFJlbmRlclRleHQgPSAnJztcblxuICAgICAgaWYgKHRoaXMuaW5wdXQpIHtcbiAgICAgICAgY29uc3Qgd2lkdGggPSB0aGlzLmlucHV0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgIHRoaXMuZHJvcGRvd25XaWR0aFN0eWxlID0gYCR7d2lkdGh9cHhgO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgdGhlIHNuYXBzaG90IGFmdGVyIGxlYXZpbmcgc2VhcmNoIG1vZGUuXG4gICAgaWYgKHRoaXMuaXNTZWFyY2hpbmcgJiYgIXdpbGxCZUluU2VhcmNoKSB7XG4gICAgICB0aGlzLmlzU2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbnMgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNTbmFwc2hvdDtcbiAgICAgIHRoaXMuY29sdW1ucyA9IHRoaXMuY29sdW1uc1NuYXBzaG90O1xuICAgICAgdGhpcy5kcm9wZG93bldpZHRoU3R5bGUgPSAnJztcbiAgICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5idWlsZERpc3BsYXlMYWJlbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmlzU2VhcmNoaW5nKSB7XG4gICAgICB0aGlzLnByZXBhcmVTZWFyY2hWYWx1ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgcHJlcGFyZVNlYXJjaFZhbHVlKCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3VsdHM6IENhc2NhZGVyU2VhcmNoT3B0aW9uW10gPSBbXTtcbiAgICBjb25zdCBwYXRoOiBDYXNjYWRlck9wdGlvbltdID0gW107XG5cbiAgICBjb25zdCBkZWZhdWx0RmlsdGVyID0gKGlucHV0VmFsdWU6IHN0cmluZywgcDogQ2FzY2FkZXJPcHRpb25bXSk6IGJvb2xlYW4gPT4ge1xuICAgICAgcmV0dXJuIHAuc29tZShuID0+IHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSB0aGlzLmdldE9wdGlvbkxhYmVsKG4pO1xuICAgICAgICByZXR1cm4gbGFiZWwgJiYgbGFiZWwuaW5kZXhPZihpbnB1dFZhbHVlKSAhPT0gLTE7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgZmlsdGVyOiAoaW5wdXRWYWx1ZTogc3RyaW5nLCBwOiBDYXNjYWRlck9wdGlvbltdKSA9PiBib29sZWFuID1cbiAgICAgIHRoaXMubnpTaG93U2VhcmNoIGluc3RhbmNlb2YgT2JqZWN0ICYmICh0aGlzLm56U2hvd1NlYXJjaCBhcyBOelNob3dTZWFyY2hPcHRpb25zKS5maWx0ZXJcbiAgICAgICAgPyAodGhpcy5uelNob3dTZWFyY2ggYXMgTnpTaG93U2VhcmNoT3B0aW9ucykuZmlsdGVyXG4gICAgICAgIDogZGVmYXVsdEZpbHRlcjtcblxuICAgIGNvbnN0IHNvcnRlcjogKGE6IENhc2NhZGVyT3B0aW9uW10sIGI6IENhc2NhZGVyT3B0aW9uW10sIGlucHV0VmFsdWU6IHN0cmluZykgPT4gbnVtYmVyID1cbiAgICAgIHRoaXMubnpTaG93U2VhcmNoIGluc3RhbmNlb2YgT2JqZWN0ICYmICh0aGlzLm56U2hvd1NlYXJjaCBhcyBOelNob3dTZWFyY2hPcHRpb25zKS5zb3J0ZXI7XG5cbiAgICBjb25zdCBsb29wUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgcGF0aC5wdXNoKG5vZGUpO1xuICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKChzTm9kZSkgPT4ge1xuICAgICAgICBpZiAoIXNOb2RlLnBhcmVudCkgeyBzTm9kZS5wYXJlbnQgPSBub2RlOyB9IC8vIEJ1aWxkIHBhcmVudCByZWZlcmVuY2Ugd2hlbiBkb2luZyBzZWFyY2hpbmdcbiAgICAgICAgaWYgKCFzTm9kZS5pc0xlYWYpIHsgbG9vcFBhcmVudChzTm9kZSwgZGlzYWJsZWQpOyB9XG4gICAgICAgIGlmIChzTm9kZS5pc0xlYWYgfHwgIXNOb2RlLmNoaWxkcmVuIHx8ICFzTm9kZS5jaGlsZHJlbi5sZW5ndGgpIHsgbG9vcENoaWxkKHNOb2RlLCBkaXNhYmxlZCk7IH1cbiAgICAgIH0pO1xuICAgICAgcGF0aC5wb3AoKTtcbiAgICB9O1xuXG4gICAgY29uc3QgbG9vcENoaWxkID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBmb3JjZURpc2FibGVkID0gZmFsc2UpID0+IHtcbiAgICAgIHBhdGgucHVzaChub2RlKTtcbiAgICAgIGNvbnN0IGNQYXRoID0gQXJyYXkuZnJvbShwYXRoKTtcbiAgICAgIGlmIChmaWx0ZXIodGhpcy5faW5wdXRWYWx1ZSwgY1BhdGgpKSB7XG4gICAgICAgIGNvbnN0IGRpc2FibGVkID0gZm9yY2VEaXNhYmxlZCB8fCBub2RlLmRpc2FibGVkO1xuICAgICAgICBjb25zdCBvcHRpb246IENhc2NhZGVyU2VhcmNoT3B0aW9uID0ge1xuICAgICAgICAgIGRpc2FibGVkLFxuICAgICAgICAgIGlzTGVhZiAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgICAgICBwYXRoICAgICAgICAgICAgICAgICAgICA6IGNQYXRoLFxuICAgICAgICAgIFsgdGhpcy5uekxhYmVsUHJvcGVydHkgXTogY1BhdGgubWFwKHAgPT4gdGhpcy5nZXRPcHRpb25MYWJlbChwKSkuam9pbignIC8gJylcbiAgICAgICAgfTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKG9wdGlvbik7XG4gICAgICB9XG4gICAgICBwYXRoLnBvcCgpO1xuICAgIH07XG5cbiAgICB0aGlzLmNvbHVtbnNTbmFwc2hvdFsgMCBdLmZvckVhY2gobm9kZSA9PiAobm9kZS5pc0xlYWYgfHwgIW5vZGUuY2hpbGRyZW4gfHwgIW5vZGUuY2hpbGRyZW4ubGVuZ3RoKVxuICAgICAgPyBsb29wQ2hpbGQobm9kZSlcbiAgICAgIDogbG9vcFBhcmVudChub2RlKSk7XG4gICAgaWYgKHNvcnRlcikge1xuICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiBzb3J0ZXIoYS5wYXRoLCBiLnBhdGgsIHRoaXMuX2lucHV0VmFsdWUpKTtcbiAgICB9XG4gICAgdGhpcy5jb2x1bW5zID0gWyByZXN1bHRzIF07XG4gIH1cblxuICBzZXRTZWFyY2hPcHRpb25BY3RpdmF0ZWQocmVzdWx0OiBDYXNjYWRlclNlYXJjaE9wdGlvbiwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb25zID0gWyByZXN1bHQgXTtcbiAgICB0aGlzLmRlbGF5U2V0TWVudVZpc2libGUoZmFsc2UsIDIwMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xuICAgICAgY29uc3QgaW5kZXggPSByZXN1bHQucGF0aC5sZW5ndGggLSAxO1xuICAgICAgY29uc3QgZGVzdGluYXRpb25Ob2RlID0gcmVzdWx0LnBhdGhbIGluZGV4IF07XG4gICAgICAvLyBOT1RFOiBvcHRpbWl6ZSB0aGlzLlxuICAgICAgY29uc3QgbW9ja0NsaWNrUGFyZW50ID0gKG5vZGU6IENhc2NhZGVyT3B0aW9uLCBjb2x1bW5JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICAgIGlmIChub2RlICYmIG5vZGUucGFyZW50KSB7XG4gICAgICAgICAgbW9ja0NsaWNrUGFyZW50KG5vZGUucGFyZW50LCBjb2x1bW5JbmRleCAtIDEpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub25PcHRpb25DbGljayhub2RlLCBjb2x1bW5JbmRleCwgZXZlbnQpO1xuICAgICAgfTtcbiAgICAgIG1vY2tDbGlja1BhcmVudChkZXN0aW5hdGlvbk5vZGUsIGluZGV4KTtcbiAgICB9LCAzMDApO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgLy8jcmVnaW9uIEhlbHBlcnNcblxuICBwcml2YXRlIGdldCBoYXNJbnB1dCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLmlucHV0VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGdldCBoYXNWYWx1ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnZhbHVlICYmICEhdGhpcy52YWx1ZS5sZW5ndGg7XG4gIH1cblxuICBnZXQgc2hvd1BsYWNlaG9sZGVyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhKHRoaXMuaGFzSW5wdXQgfHwgdGhpcy5oYXNWYWx1ZSk7XG4gIH1cblxuICBnZXQgY2xlYXJJY29uVmlzaWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uekFsbG93Q2xlYXIgJiYgIXRoaXMubnpEaXNhYmxlZCAmJiAodGhpcy5oYXNWYWx1ZSB8fCB0aGlzLmhhc0lucHV0KTtcbiAgfVxuXG4gIGdldCBpc0xhYmVsUmVuZGVyVGVtcGxhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5uekxhYmVsUmVuZGVyO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXRPcHRpb25MYWJlbChvcHRpb246IENhc2NhZGVyT3B0aW9uKTogYW55IHtcbiAgICByZXR1cm4gb3B0aW9uWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSB8fCAnbGFiZWwnIF07XG4gIH1cblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGdldE9wdGlvblZhbHVlKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24pOiBhbnkge1xuICAgIHJldHVybiBvcHRpb25bIHRoaXMubnpWYWx1ZVByb3BlcnR5IHx8ICd2YWx1ZScgXTtcbiAgfVxuXG4gIGlzT3B0aW9uQWN0aXZhdGVkKG9wdGlvbjogQ2FzY2FkZXJPcHRpb24sIGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBhY3RpdmVPcHQgPSB0aGlzLmFjdGl2YXRlZE9wdGlvbnNbIGluZGV4IF07XG4gICAgcmV0dXJuIGFjdGl2ZU9wdCA9PT0gb3B0aW9uO1xuICB9XG5cbiAgcHJpdmF0ZSBidWlsZERpc3BsYXlMYWJlbCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbnMgPSB0aGlzLnNlbGVjdGVkT3B0aW9ucztcbiAgICBjb25zdCBsYWJlbHM6IHN0cmluZ1tdID0gc2VsZWN0ZWRPcHRpb25zLm1hcChvID0+IHRoaXMuZ2V0T3B0aW9uTGFiZWwobykpO1xuICAgIGlmICh0aGlzLmlzTGFiZWxSZW5kZXJUZW1wbGF0ZSkge1xuICAgICAgdGhpcy5sYWJlbFJlbmRlckNvbnRleHQgPSB7IGxhYmVscywgc2VsZWN0ZWRPcHRpb25zIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGFiZWxSZW5kZXJUZXh0ID0gZGVmYXVsdERpc3BsYXlSZW5kZXIuY2FsbCh0aGlzLCBsYWJlbHMsIHNlbGVjdGVkT3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIFdoZW4gY29tcG9uZW50cyBpbml0cyB3aXRoIGRlZmF1bHQgdmFsdWUsIHRoaXMgd291bGQgbWFrZSBkaXNwbGF5IGxhYmVsIGFwcGVhciBjb3JyZWN0bHkuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8jZW5kcmVnaW9uXG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGlzRGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VNZW51KCk7XG4gICAgfVxuICAgIHRoaXMubnpEaXNhYmxlZCA9IGlzRGlzYWJsZWQ7XG4gIH1cblxuICBjbG9zZU1lbnUoKTogdm9pZCB7XG4gICAgdGhpcy5ibHVyKCk7XG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XG4gICAgdGhpcy5zZXRNZW51VmlzaWJsZShmYWxzZSk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckRlbGF5TWVudVRpbWVyKCk7XG4gICAgdGhpcy5jbGVhckRlbGF5U2VsZWN0VGltZXIoKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHt9KTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55KTogdm9pZCB7XG4gICAgY29uc3QgdnMgPSB0aGlzLmRlZmF1bHRWYWx1ZSA9IHRvQXJyYXkodmFsdWUpO1xuICAgIGlmICh2cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuaW5pdE9wdGlvbnMoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB2cztcbiAgICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9ucyA9IFtdO1xuICAgICAgdGhpcy5hZnRlcldyaXRlVmFsdWUoKTtcbiAgICB9XG4gIH1cblxuICBvblBvc2l0aW9uQ2hhbmdlKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyLm9yaWdpblkgPT09ICdib3R0b20nID8gJ2JvdHRvbScgOiAndG9wJztcbiAgICBpZiAodGhpcy5kcm9wRG93blBvc2l0aW9uICE9PSBuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5kcm9wRG93blBvc2l0aW9uID0gbmV3VmFsdWU7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=