/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { toBoolean } from '../core/util/convert';
import { Marks } from './nz-slider-marks.component';
import { NzSliderService } from './nz-slider.service';
var SliderHandle = /** @class */ (function () {
    function SliderHandle() {
    }
    return SliderHandle;
}());
export { SliderHandle };
function SliderHandle_tsickle_Closure_declarations() {
    /** @type {?} */
    SliderHandle.prototype.offset;
    /** @type {?} */
    SliderHandle.prototype.value;
    /** @type {?} */
    SliderHandle.prototype.active;
}
/**
 * @record
 */
function MouseTouchObserverConfig() { }
function MouseTouchObserverConfig_tsickle_Closure_declarations() {
    /** @type {?} */
    MouseTouchObserverConfig.prototype.start;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.move;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.end;
    /** @type {?} */
    MouseTouchObserverConfig.prototype.pluckKey;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.filter;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.startPlucked$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.end$;
    /** @type {?|undefined} */
    MouseTouchObserverConfig.prototype.moveResolved$;
}
var NzSliderComponent = /** @class */ (function () {
    // |--------------------------------------------------------------------------------------------
    // | Lifecycle hooks
    // |--------------------------------------------------------------------------------------------
    function NzSliderComponent(utils) {
        this.utils = utils;
        // Debugging
        this.nzDebugId = null;
        // Static configurations (properties that can only specify once)
        this.nzStep = 1;
        this.nzMarks = null;
        this.nzMin = 0;
        this.nzMax = 100;
        this.nzDefaultValue = null;
        this.nzOnAfterChange = new EventEmitter();
        this._disabled = false;
        this._dots = false;
        this._included = true;
        this._range = false;
        this._vertical = false;
        this.value = null; // CORE value state
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.prefixCls = 'ant-slider';
        this.activeValueIndex = null; // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        this.onTouched = function () {
        } // onTouch function registered via registerOnTouch (ControlValueAccessor).
        ; // onTouch function registered via registerOnTouch (ControlValueAccessor).
        this.isDragging = false; // Current dragging state
    }
    Object.defineProperty(NzSliderComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        // Dynamic property settings
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzRange", {
        get: /**
         * @return {?}
         */
        function () {
            return this._range;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._range = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzDots", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dots;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dots = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzSliderComponent.prototype, "nzIncluded", {
        get: /**
         * @return {?}
         */
        function () {
            return this._included;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._included = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    // |--------------------------------------------------------------------------------------------
    // | value accessors & ngModel accessors
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    NzSliderComponent.prototype.setValue = /**
     * @param {?} val
     * @param {?=} isWriteValue
     * @return {?}
     */
    function (val, isWriteValue) {
        if (isWriteValue === void 0) { isWriteValue = false; }
        if (isWriteValue) { // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            // [ngModel-writeValue]: Formatting before setting value, always update current value, but trigger onValueChange ONLY when the "formatted value" not equals "input value"
            this.value = this.formatValue(val);
            this.log("[ngModel:setValue/writeValue]Update track & handles");
            this.updateTrackAndHandles();
            // if (!this.isValueEqual(this.value, val)) {
            //   this.log(`[ngModel:setValue/writeValue]onValueChange`, val);
            //   if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
            //     this.onValueChange(this.value);
            //   }
            // }
        }
        else { // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            // [Normal]: setting value, ONLY check changed, then update and trigger onValueChange
            if (!this.isValueEqual(this.value, val)) {
                this.value = val;
                this.log("[Normal:setValue]Update track & handles");
                this.updateTrackAndHandles();
                this.log("[Normal:setValue]onValueChange", val);
                if (this.onValueChange) { // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    // NOTE: onValueChange will be unavailable when writeValue() called at the first time
                    this.onValueChange(this.value);
                }
            }
        }
    };
    /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    NzSliderComponent.prototype.getValue = /**
     * @param {?=} cloneAndSort
     * @return {?}
     */
    function (cloneAndSort) {
        if (cloneAndSort === void 0) { cloneAndSort = false; }
        // TODO: using type guard, remove type cast
        if (cloneAndSort && this.nzRange) { // clone & sort range values
            // clone & sort range values
            return this.utils.cloneArray(/** @type {?} */ (this.value)).sort(function (a, b) { return a - b; });
        }
        return this.value;
    };
    // clone & sort current value and convert them to offsets, then return the new one
    /**
     * @param {?=} value
     * @return {?}
     */
    NzSliderComponent.prototype.getValueToOffset = /**
     * @param {?=} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        // TODO: using type guard, remove type cast
        return this.nzRange ?
            (/** @type {?} */ (normalizedValue)).map(function (val) { return _this.valueToOffset(val); }) :
            this.valueToOffset(/** @type {?} */ (normalizedValue));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.writeValue = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.log("[ngModel/writeValue]current writing value = ", val);
        this.setValue(val, true);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onValueChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSliderComponent.prototype.registerOnTouched = /**
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
    NzSliderComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
        this.setClassMap();
    };
    // initialize event binding, class init, etc. (called only once)
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // initial checking
        this.checkValidValue(this.nzDefaultValue); // check nzDefaultValue
        // default handles
        this.handles = this._generateHandles(this.nzRange ? 2 : 1);
        // initialize
        this.sliderDOM = this.slider.nativeElement;
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        } // init with default value
        this.marksArray = this.nzMarks === null ? null : this.toMarksArray(this.nzMarks);
        // event bindings
        this.createDrag();
        // initialize drag's disabled status
        this.toggleDragDisabled(this.nzDisabled);
        // the first time to init classes
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzDisabled = changes.nzDisabled, nzMarks = changes.nzMarks, nzRange = changes.nzRange;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
            this.setClassMap();
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.toMarksArray(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null)); // Change to default value when nzRange changed
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeDrag();
    };
    // |--------------------------------------------------------------------------------------------
    // | Basic flow functions
    // |--------------------------------------------------------------------------------------------
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-disabled"] = this.nzDisabled,
            _a[this.prefixCls + "-vertical"] = this.nzVertical,
            _a[this.prefixCls + "-with-marks"] = this.marksArray ? this.marksArray.length : 0,
            _a);
    };
    // find the cloest value to be activated (only for range = true)
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValueIndex = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            var minimal_1 = null;
            /** @type {?} */
            var gap_1 = void 0;
            /** @type {?} */
            var activeIndex_1 = void 0;
            // TODO: using type guard, remove type cast
            (/** @type {?} */ (this.getValue())).forEach(function (val, index) {
                gap_1 = Math.abs(pointerValue - val);
                if (minimal_1 === null || gap_1 < minimal_1) {
                    minimal_1 = gap_1;
                    activeIndex_1 = index;
                }
            });
            this.activeValueIndex = activeIndex_1;
        }
    };
    /**
     * @param {?} pointerValue
     * @return {?}
     */
    NzSliderComponent.prototype.setActiveValue = /**
     * @param {?} pointerValue
     * @return {?}
     */
    function (pointerValue) {
        if (this.nzRange) {
            /** @type {?} */
            var newValue = this.utils.cloneArray(/** @type {?} */ (this.value));
            newValue[this.activeValueIndex] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.updateTrackAndHandles = /**
     * @return {?}
     */
    function () {
        var _this = this;
        var _a, _b;
        /** @type {?} */
        var value = this.getValue();
        /** @type {?} */
        var offset = this.getValueToOffset(value);
        /** @type {?} */
        var valueSorted = this.getValue(true);
        /** @type {?} */
        var offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        var boundParts = this.nzRange ? /** @type {?} */ (valueSorted) : [0, valueSorted];
        /** @type {?} */
        var trackParts = this.nzRange ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]] : [0, offsetSorted];
        this.handles.forEach(function (handle, index) {
            handle.offset = _this.nzRange ? offset[index] : offset;
            handle.value = _this.nzRange ? value[index] : value;
        });
        _a = tslib_1.__read(boundParts, 2), this.bounds.lower = _a[0], this.bounds.upper = _a[1];
        _b = tslib_1.__read(trackParts, 2), this.track.offset = _b[0], this.track.length = _b[1];
    };
    /**
     * @param {?} marks
     * @return {?}
     */
    NzSliderComponent.prototype.toMarksArray = /**
     * @param {?} marks
     * @return {?}
     */
    function (marks) {
        /** @type {?} */
        var marksArray = [];
        for (var key in marks) {
            /** @type {?} */
            var mark = marks[key];
            /** @type {?} */
            var val = typeof key === 'number' ? key : parseFloat(key);
            if (val < this.nzMin || val > this.nzMax) {
                continue;
            }
            marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
        }
        return marksArray;
    };
    // |--------------------------------------------------------------------------------------------
    // | Event listeners & bindings
    // |--------------------------------------------------------------------------------------------
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragStart = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragStart]dragging value = ', value);
        this.toggleDragMoving(true);
        // cache DOM layout/reflow operations
        this.cacheSliderProperty();
        // trigger drag start
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        // Tooltip visibility of handles
        this._showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.onDragMove = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.log('[onDragMove]dragging value = ', value);
        // trigger drag moving
        this.setActiveValue(value);
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.onDragEnd = /**
     * @return {?}
     */
    function () {
        this.log('[onDragEnd]');
        this.toggleDragMoving(false);
        this.nzOnAfterChange.emit(this.getValue(true));
        // remove cache DOM layout/reflow operations
        this.cacheSliderProperty(true);
        // Hide all tooltip
        this._hideAllHandleTooltip();
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.createDrag = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        /** @type {?} */
        var orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        var mouse = {
            start: 'mousedown', move: 'mousemove', end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        var touch = {
            start: 'touchstart', move: 'touchmove', end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: function (e) { return !_this.utils.isNotTouchEvent(/** @type {?} */ (e)); }
        };
        // make observables
        [mouse, touch].forEach(function (source) {
            var start = source.start, move = source.move, end = source.end, pluckKey = source.pluckKey, _a = source.filter, filterFunc = _a === void 0 ? (function () { return true; }) : _a;
            // start
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), map(function (position) { return _this.findClosestValue(position); }));
            // end
            source.end$ = fromEvent(document, end);
            // resolve move
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(_this.utils.pauseEvent), pluck.apply(void 0, tslib_1.__spread(pluckKey)), distinctUntilChanged(), map(function (position) { return _this.findClosestValue(position); }), distinctUntilChanged(), takeUntil(source.end$));
            // merge to become moving
            // source.move$ = source.startPlucked$.mergeMapTo(source.moveResolved$);
        });
        // merge mouse and touch observables
        this.dragstart$ = merge(mouse.startPlucked$, touch.startPlucked$);
        // this.dragmove$ = Observable.merge(mouse.move$, touch.move$);
        this.dragmove$ = merge(mouse.moveResolved$, touch.moveResolved$);
        this.dragend$ = merge(mouse.end$, touch.end$);
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.subscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[subscribeDrag]this.dragstart$ = ', this.dragstart$);
        if (periods.indexOf('start') !== -1 && this.dragstart$ && !this.dragstart_) {
            this.dragstart_ = this.dragstart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragmove$ && !this.dragmove_) {
            this.dragmove_ = this.dragmove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragend$ && !this.dragend_) {
            this.dragend_ = this.dragend$.subscribe(this.onDragEnd.bind(this));
        }
    };
    /**
     * @param {?=} periods
     * @return {?}
     */
    NzSliderComponent.prototype.unsubscribeDrag = /**
     * @param {?=} periods
     * @return {?}
     */
    function (periods) {
        if (periods === void 0) { periods = ['start', 'move', 'end']; }
        this.log('[unsubscribeDrag]this.dragstart_ = ', this.dragstart_);
        if (periods.indexOf('start') !== -1 && this.dragstart_) {
            this.dragstart_.unsubscribe();
            this.dragstart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragmove_) {
            this.dragmove_.unsubscribe();
            this.dragmove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragend_) {
            this.dragend_.unsubscribe();
            this.dragend_ = null;
        }
    };
    /**
     * @param {?} movable
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragMoving = /**
     * @param {?} movable
     * @return {?}
     */
    function (movable) {
        /** @type {?} */
        var periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    };
    /**
     * @param {?} disabled
     * @return {?}
     */
    NzSliderComponent.prototype.toggleDragDisabled = /**
     * @param {?} disabled
     * @return {?}
     */
    function (disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    };
    // |--------------------------------------------------------------------------------------------
    // | Util functions (tools)
    // |--------------------------------------------------------------------------------------------
    // find the closest value depend on pointer's position
    /**
     * @param {?} position
     * @return {?}
     */
    NzSliderComponent.prototype.findClosestValue = /**
     * @param {?} position
     * @return {?}
     */
    function (position) {
        /** @type {?} */
        var sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        var sliderLength = this.getSliderLength();
        /** @type {?} */
        var ratio = this.utils.correctNumLimit((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        var val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        var points = (this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat));
        // push closest step
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            var closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        var gaps = points.map(function (point) { return Math.abs(val - point); });
        /** @type {?} */
        var closest = points[gaps.indexOf(Math.min.apply(Math, tslib_1.__spread(gaps)))];
        // return the fixed
        return this.nzStep === null ? closest :
            parseFloat(closest.toFixed(this.utils.getPrecision(this.nzStep)));
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.valueToOffset = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        return this.utils.valueToOffset(this.nzMin, this.nzMax, value);
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderStartPosition = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        var offset = this.utils.getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype.getSliderLength = /**
     * @return {?}
     */
    function () {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        var sliderDOM = this.sliderDOM;
        return this.nzVertical ?
            sliderDOM.clientHeight : sliderDOM.clientWidth;
    };
    // cache DOM layout/reflow operations for performance (may not necessary?)
    /**
     * @param {?=} remove
     * @return {?}
     */
    NzSliderComponent.prototype.cacheSliderProperty = /**
     * @param {?=} remove
     * @return {?}
     */
    function (remove) {
        if (remove === void 0) { remove = false; }
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.formatValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        /** @type {?} */
        var res = value;
        if (!this.checkValidValue(value)) { // if empty, use default value
            // if empty, use default value
            res = this.nzDefaultValue === null ?
                (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else { // format
            // format
            // TODO: using type guard, remove type cast
            res = this.nzRange ?
                (/** @type {?} */ (value)).map(function (val) { return _this.utils.correctNumLimit(val, _this.nzMin, _this.nzMax); }) :
                this.utils.correctNumLimit(/** @type {?} */ (value), this.nzMin, this.nzMax);
        }
        return res;
    };
    // check if value is valid and throw error if value-type/range not match
    /**
     * @param {?} value
     * @return {?}
     */
    NzSliderComponent.prototype.checkValidValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var range = this.nzRange;
        if (value === null || value === undefined) {
            return false;
        }
        /** @type {?} */
        var isArray = Array.isArray(value);
        if (!Array.isArray(value)) {
            /** @type {?} */
            var parsedValue = value;
            if (typeof value !== 'number') {
                parsedValue = parseFloat(value);
            }
            if (isNaN(parsedValue)) {
                return false;
            } // it's an invalid value, just return
        }
        if (isArray !== !!range) { // value type not match
            // value type not match
            throw new Error("The \"nzRange\" can't match the \"nzValue\"'s type, please check these properties: \"nzRange\", \"nzValue\", \"nzDefaultValue\".");
        }
        return true;
    };
    /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    NzSliderComponent.prototype.isValueEqual = /**
     * @param {?} value
     * @param {?} val
     * @return {?}
     */
    function (value, val) {
        if (typeof value !== typeof val) {
            return false;
        }
        if (Array.isArray(value)) {
            /** @type {?} */
            var len = value.length;
            for (var i = 0; i < len; i++) {
                if (value[i] !== val[i]) {
                    return false;
                }
            }
            return true;
        }
        else {
            return value === val;
        }
    };
    // print debug info
    // TODO: should not kept in component
    /* tslint:disable-next-line:no-any */
    /**
     * @param {...?} messages
     * @return {?}
     */
    NzSliderComponent.prototype.log = /**
     * @param {...?} messages
     * @return {?}
     */
    function () {
        var messages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            messages[_i] = arguments[_i];
        }
        if (this.nzDebugId !== null) {
            /** @type {?} */
            var args = ["[nz-slider][#" + this.nzDebugId + "] "].concat(Array.prototype.slice.call(arguments));
            console.log.apply(null, args);
        }
    };
    /**
     * @param {?=} handleIndex
     * @return {?}
     */
    NzSliderComponent.prototype._showHandleTooltip = /**
     * @param {?=} handleIndex
     * @return {?}
     */
    function (handleIndex) {
        var _this = this;
        if (handleIndex === void 0) { handleIndex = 0; }
        this.handles.forEach(function (handle, index) {
            _this.handles[index].active = index === handleIndex;
        });
    };
    /**
     * @return {?}
     */
    NzSliderComponent.prototype._hideAllHandleTooltip = /**
     * @return {?}
     */
    function () {
        this.handles.forEach(function (handle) { return handle.active = false; });
    };
    /**
     * @param {?} amount
     * @return {?}
     */
    NzSliderComponent.prototype._generateHandles = /**
     * @param {?} amount
     * @return {?}
     */
    function (amount) {
        /** @type {?} */
        var handles = [];
        for (var i = 0; i < amount; i++) {
            handles.push({ offset: null, value: null, active: false });
        }
        return handles;
    };
    NzSliderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-slider',
                    preserveWhitespaces: false,
                    providers: [{
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzSliderComponent; }),
                            multi: true
                        }],
                    template: "<div #slider [ngClass]=\"classMap\">\n  <div class=\"ant-slider-rail\"></div>\n  <nz-slider-track\n    nzClassName=\"{{prefixCls}}-track\"\n    [nzVertical]=\"nzVertical\"\n    [nzIncluded]=\"nzIncluded\"\n    [nzOffset]=\"track.offset\"\n    [nzLength]=\"track.length\"\n  ></nz-slider-track>\n  <nz-slider-step *ngIf=\"marksArray\"\n    nzPrefixCls=\"{{prefixCls}}\"\n    [nzVertical]=\"nzVertical\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"\n  ></nz-slider-step>\n  <nz-slider-handle\n    *ngFor=\"let handle of handles;\"\n    nzClassName=\"{{prefixCls}}-handle\"\n    [nzVertical]=\"nzVertical\"\n    [nzOffset]=\"handle.offset\"\n    [nzValue]=\"handle.value\"\n    [nzActive]=\"handle.active\"\n    [nzTipFormatter]=\"nzTipFormatter\"\n  ></nz-slider-handle>\n  <nz-slider-marks *ngIf=\"marksArray\"\n    nzClassName=\"{{prefixCls}}-mark\"\n    [nzVertical]=\"nzVertical\"\n    [nzMin]=\"nzMin\"\n    [nzMax]=\"nzMax\"\n    [nzLowerBound]=\"bounds.lower\"\n    [nzUpperBound]=\"bounds.upper\"\n    [nzMarksArray]=\"marksArray\"\n    [nzIncluded]=\"nzIncluded\"\n  ></nz-slider-marks>\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzSliderComponent.ctorParameters = function () { return [
        { type: NzSliderService }
    ]; };
    NzSliderComponent.propDecorators = {
        nzDebugId: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzStep: [{ type: Input }],
        nzMarks: [{ type: Input }],
        nzMin: [{ type: Input }],
        nzMax: [{ type: Input }],
        nzDefaultValue: [{ type: Input }],
        nzTipFormatter: [{ type: Input }],
        nzOnAfterChange: [{ type: Output }],
        nzVertical: [{ type: Input }],
        nzRange: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzIncluded: [{ type: Input }],
        slider: [{ type: ViewChild, args: ['slider',] }]
    };
    return NzSliderComponent;
}());
export { NzSliderComponent };
function NzSliderComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderComponent.prototype.nzDebugId;
    /** @type {?} */
    NzSliderComponent.prototype.nzStep;
    /** @type {?} */
    NzSliderComponent.prototype.nzMarks;
    /** @type {?} */
    NzSliderComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderComponent.prototype.nzDefaultValue;
    /** @type {?} */
    NzSliderComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderComponent.prototype.nzOnAfterChange;
    /** @type {?} */
    NzSliderComponent.prototype._disabled;
    /** @type {?} */
    NzSliderComponent.prototype._dots;
    /** @type {?} */
    NzSliderComponent.prototype._included;
    /** @type {?} */
    NzSliderComponent.prototype._range;
    /** @type {?} */
    NzSliderComponent.prototype._vertical;
    /** @type {?} */
    NzSliderComponent.prototype.value;
    /** @type {?} */
    NzSliderComponent.prototype.slider;
    /** @type {?} */
    NzSliderComponent.prototype.sliderDOM;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    NzSliderComponent.prototype.prefixCls;
    /** @type {?} */
    NzSliderComponent.prototype.classMap;
    /** @type {?} */
    NzSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    NzSliderComponent.prototype.track;
    /** @type {?} */
    NzSliderComponent.prototype.handles;
    /** @type {?} */
    NzSliderComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderComponent.prototype.bounds;
    /** @type {?} */
    NzSliderComponent.prototype.onValueChange;
    /** @type {?} */
    NzSliderComponent.prototype.onTouched;
    /** @type {?} */
    NzSliderComponent.prototype.isDragging;
    /** @type {?} */
    NzSliderComponent.prototype.dragstart$;
    /** @type {?} */
    NzSliderComponent.prototype.dragmove$;
    /** @type {?} */
    NzSliderComponent.prototype.dragend$;
    /** @type {?} */
    NzSliderComponent.prototype.dragstart_;
    /** @type {?} */
    NzSliderComponent.prototype.dragmove_;
    /** @type {?} */
    NzSliderComponent.prototype.dragend_;
    /** @type {?} */
    NzSliderComponent.prototype.utils;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUNsRSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsS0FBSyxFQUFjLE1BQU0sNkJBQTZCLENBQUM7QUFDaEUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBSXRELElBQUE7Ozt1QkF6QkE7SUE2QkMsQ0FBQTtBQUpELHdCQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQXdMQyxnR0FBZ0c7SUFDaEcsb0JBQW9CO0lBQ3BCLGdHQUFnRztJQUVoRywyQkFBb0IsS0FBc0I7UUFBdEIsVUFBSyxHQUFMLEtBQUssQ0FBaUI7O1FBaEsxQyxpQkFBc0MsSUFBSSxDQUFDOztRQWEzQyxjQUFrQixDQUFDLENBQUM7UUFDcEIsZUFBMEIsSUFBSSxDQUFDO1FBQy9CLGFBQWlCLENBQUMsQ0FBQztRQUNuQixhQUFpQixHQUFHLENBQUM7UUFDckIsc0JBQXVDLElBQUksQ0FBQztRQUU1Qyx1QkFBcUMsSUFBSSxZQUFZLEVBQWUsQ0FB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cmlhYmxlLW5hbWUgKi9cbmltcG9ydCB7XG4gIGZvcndhcmRSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgcGx1Y2ssIHRha2VVbnRpbCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE1hcmtzLCBNYXJrc0FycmF5IH0gZnJvbSAnLi9uei1zbGlkZXItbWFya3MuY29tcG9uZW50JztcbmltcG9ydCB7IE56U2xpZGVyU2VydmljZSB9IGZyb20gJy4vbnotc2xpZGVyLnNlcnZpY2UnO1xuXG5leHBvcnQgdHlwZSBTbGlkZXJWYWx1ZSA9IG51bWJlcltdIHwgbnVtYmVyO1xuXG5leHBvcnQgY2xhc3MgU2xpZGVySGFuZGxlIHtcbiAgb2Zmc2V0OiBudW1iZXI7XG4gIHZhbHVlOiBudW1iZXI7XG4gIGFjdGl2ZTogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyB7XG4gIHN0YXJ0OiBzdHJpbmc7XG4gIG1vdmU6IHN0cmluZztcbiAgZW5kOiBzdHJpbmc7XG4gIHBsdWNrS2V5OiBzdHJpbmdbXTtcblxuICBmaWx0ZXI/KGU6IEV2ZW50KTogYm9vbGVhbjtcblxuICBzdGFydFBsdWNrZWQkPzogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICBlbmQkPzogT2JzZXJ2YWJsZTxFdmVudD47XG4gIG1vdmVSZXNvbHZlZCQ/OiBPYnNlcnZhYmxlPG51bWJlcj47XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsge1xuICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNsaWRlckNvbXBvbmVudCksXG4gICAgbXVsdGkgICAgICA6IHRydWVcbiAgfSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zbGlkZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuXG4gIC8vIERlYnVnZ2luZ1xuICBASW5wdXQoKSBuekRlYnVnSWQ6IG51bWJlciB8IHN0cmluZyA9IG51bGw7IC8vIHNldCB0aGlzIGlkIHdpbGwgcHJpbnQgZGVidWcgaW5mb3JtYXRpb25zIHRvIGNvbnNvbGVcblxuICAvLyBEeW5hbWljIHByb3BlcnR5IHNldHRpbmdzXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgLy8gU3RhdGljIGNvbmZpZ3VyYXRpb25zIChwcm9wZXJ0aWVzIHRoYXQgY2FuIG9ubHkgc3BlY2lmeSBvbmNlKVxuICBASW5wdXQoKSBuelN0ZXAgPSAxO1xuICBASW5wdXQoKSBuek1hcmtzOiBNYXJrcyA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWluID0gMDtcbiAgQElucHV0KCkgbnpNYXggPSAxMDA7XG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBTbGlkZXJWYWx1ZSA9IG51bGw7XG4gIEBJbnB1dCgpIG56VGlwRm9ybWF0dGVyOiAodmFsdWU6IG51bWJlcikgPT4gc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkFmdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxTbGlkZXJWYWx1ZT4oKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelJhbmdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fcmFuZ2UgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56UmFuZ2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3JhbmdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RG90cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5jbHVkZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SW5jbHVkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xuICB9XG5cbiAgLy8gSW5zaWRlIHByb3BlcnRpZXNcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZG90cyA9IGZhbHNlO1xuICBwcml2YXRlIF9pbmNsdWRlZCA9IHRydWU7XG4gIHByaXZhdGUgX3JhbmdlID0gZmFsc2U7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG5cbiAgdmFsdWU6IFNsaWRlclZhbHVlID0gbnVsbDsgLy8gQ09SRSB2YWx1ZSBzdGF0ZVxuICBAVmlld0NoaWxkKCdzbGlkZXInKSBzbGlkZXI6IEVsZW1lbnRSZWY7XG4gIHNsaWRlckRPTTogSFRNTERpdkVsZW1lbnQ7XG4gIGNhY2hlU2xpZGVyU3RhcnQ6IG51bWJlciA9IG51bGw7XG4gIGNhY2hlU2xpZGVyTGVuZ3RoOiBudW1iZXIgPSBudWxsO1xuICBwcmVmaXhDbHMgPSAnYW50LXNsaWRlcic7XG4gIGNsYXNzTWFwOiBvYmplY3Q7XG4gIGFjdGl2ZVZhbHVlSW5kZXg6IG51bWJlciA9IG51bGw7IC8vIEN1cnJlbnQgYWN0aXZhdGVkIGhhbmRsZSdzIGluZGV4IE9OTFkgZm9yIHJhbmdlPXRydWVcbiAgdHJhY2sgPSB7IG9mZnNldDogbnVsbCwgbGVuZ3RoOiBudWxsIH07IC8vIFRyYWNrJ3Mgb2Zmc2V0IGFuZCBsZW5ndGhcbiAgaGFuZGxlczogU2xpZGVySGFuZGxlW107IC8vIEhhbmRsZXMnIG9mZnNldFxuICBtYXJrc0FycmF5OiBNYXJrc1tdOyAvLyBcIm1hcmtzXCIgaW4gYXJyYXkgdHlwZSB3aXRoIG1vcmUgZGF0YSAmIEZJTFRFUiBvdXQgdGhlIGludmFsaWQgbWFya1xuICBib3VuZHMgPSB7IGxvd2VyOiBudWxsLCB1cHBlcjogbnVsbCB9OyAvLyBub3cgZm9yIG56LXNsaWRlci1zdGVwXG4gIG9uVmFsdWVDaGFuZ2U6ICh2YWx1ZTogU2xpZGVyVmFsdWUpID0+IHZvaWQ7IC8vIFVzZWQgYnkgbmdNb2RlbC4gQlVHOiBvblZhbHVlQ2hhbmdlKCkgd2lsbCBub3Qgc3VjY2VzcyB0byBlZmZlY3QgdGhlIFwidmFsdWVcIiB2YXJpYWJsZSAoIFsobmdNb2RlbCldPVwidmFsdWVcIiApIHdoZW4gdGhlIGZpcnN0IGluaXRpYWxpemluZywgZXhjZXB0IHVzaW5nIFwibmV4dFRpY2tcIiBmdW5jdGlvbmFsaXR5IChNQVkgYW5ndWxhcjIncyBwcm9ibGVtID8pXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IHtcbiAgfSAvLyBvblRvdWNoIGZ1bmN0aW9uIHJlZ2lzdGVyZWQgdmlhIHJlZ2lzdGVyT25Ub3VjaCAoQ29udHJvbFZhbHVlQWNjZXNzb3IpLlxuICBpc0RyYWdnaW5nID0gZmFsc2U7IC8vIEN1cnJlbnQgZHJhZ2dpbmcgc3RhdGVcblxuICAvLyBFdmVudHMgb2JzZXJ2YWJsZXMgJiBzdWJzY3JpcHRpb25zXG4gIGRyYWdzdGFydCQ6IE9ic2VydmFibGU8bnVtYmVyPjtcbiAgZHJhZ21vdmUkOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gIGRyYWdlbmQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcbiAgZHJhZ3N0YXJ0XzogU3Vic2NyaXB0aW9uO1xuICBkcmFnbW92ZV86IFN1YnNjcmlwdGlvbjtcbiAgZHJhZ2VuZF86IFN1YnNjcmlwdGlvbjtcblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCB2YWx1ZSBhY2Nlc3NvcnMgJiBuZ01vZGVsIGFjY2Vzc29yc1xuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICBzZXRWYWx1ZSh2YWw6IFNsaWRlclZhbHVlLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIGlmIChpc1dyaXRlVmFsdWUpIHsgLy8gW25nTW9kZWwtd3JpdGVWYWx1ZV06IEZvcm1hdHRpbmcgYmVmb3JlIHNldHRpbmcgdmFsdWUsIGFsd2F5cyB1cGRhdGUgY3VycmVudCB2YWx1ZSwgYnV0IHRyaWdnZXIgb25WYWx1ZUNoYW5nZSBPTkxZIHdoZW4gdGhlIFwiZm9ybWF0dGVkIHZhbHVlXCIgbm90IGVxdWFscyBcImlucHV0IHZhbHVlXCJcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmZvcm1hdFZhbHVlKHZhbCk7XG4gICAgICB0aGlzLmxvZyhgW25nTW9kZWw6c2V0VmFsdWUvd3JpdGVWYWx1ZV1VcGRhdGUgdHJhY2sgJiBoYW5kbGVzYCk7XG4gICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xuICAgICAgLy8gaWYgKCF0aGlzLmlzVmFsdWVFcXVhbCh0aGlzLnZhbHVlLCB2YWwpKSB7XG4gICAgICAvLyAgIHRoaXMubG9nKGBbbmdNb2RlbDpzZXRWYWx1ZS93cml0ZVZhbHVlXW9uVmFsdWVDaGFuZ2VgLCB2YWwpO1xuICAgICAgLy8gICBpZiAodGhpcy5vblZhbHVlQ2hhbmdlKSB7IC8vIE5PVEU6IG9uVmFsdWVDaGFuZ2Ugd2lsbCBiZSB1bmF2YWlsYWJsZSB3aGVuIHdyaXRlVmFsdWUoKSBjYWxsZWQgYXQgdGhlIGZpcnN0IHRpbWVcbiAgICAgIC8vICAgICB0aGlzLm9uVmFsdWVDaGFuZ2UodGhpcy52YWx1ZSk7XG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cbiAgICB9IGVsc2UgeyAvLyBbTm9ybWFsXTogc2V0dGluZyB2YWx1ZSwgT05MWSBjaGVjayBjaGFuZ2VkLCB0aGVuIHVwZGF0ZSBhbmQgdHJpZ2dlciBvblZhbHVlQ2hhbmdlXG4gICAgICBpZiAoIXRoaXMuaXNWYWx1ZUVxdWFsKHRoaXMudmFsdWUsIHZhbCkpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbDtcbiAgICAgICAgdGhpcy5sb2coYFtOb3JtYWw6c2V0VmFsdWVdVXBkYXRlIHRyYWNrICYgaGFuZGxlc2ApO1xuICAgICAgICB0aGlzLnVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpO1xuICAgICAgICB0aGlzLmxvZyhgW05vcm1hbDpzZXRWYWx1ZV1vblZhbHVlQ2hhbmdlYCwgdmFsKTtcbiAgICAgICAgaWYgKHRoaXMub25WYWx1ZUNoYW5nZSkgeyAvLyBOT1RFOiBvblZhbHVlQ2hhbmdlIHdpbGwgYmUgdW5hdmFpbGFibGUgd2hlbiB3cml0ZVZhbHVlKCkgY2FsbGVkIGF0IHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0VmFsdWUoY2xvbmVBbmRTb3J0OiBib29sZWFuID0gZmFsc2UpOiBTbGlkZXJWYWx1ZSB7XG4gICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy5uelJhbmdlKSB7IC8vIGNsb25lICYgc29ydCByYW5nZSB2YWx1ZXNcbiAgICAgIHJldHVybiB0aGlzLnV0aWxzLmNsb25lQXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8vIGNsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmVcbiAgZ2V0VmFsdWVUb09mZnNldCh2YWx1ZT86IFNsaWRlclZhbHVlKTogU2xpZGVyVmFsdWUge1xuICAgIGxldCBub3JtYWxpemVkVmFsdWUgPSB2YWx1ZTtcbiAgICBpZiAodHlwZW9mIG5vcm1hbGl6ZWRWYWx1ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XG4gICAgfVxuICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICByZXR1cm4gdGhpcy5uelJhbmdlID9cbiAgICAgIChub3JtYWxpemVkVmFsdWUgYXMgbnVtYmVyW10pLm1hcCh2YWwgPT4gdGhpcy52YWx1ZVRvT2Zmc2V0KHZhbCkpIDpcbiAgICAgIHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUgYXMgbnVtYmVyKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsOiBTbGlkZXJWYWx1ZSk6IHZvaWQge1xuICAgIHRoaXMubG9nKGBbbmdNb2RlbC93cml0ZVZhbHVlXWN1cnJlbnQgd3JpdGluZyB2YWx1ZSA9IGAsIHZhbCk7XG4gICAgdGhpcy5zZXRWYWx1ZSh2YWwsIHRydWUpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25WYWx1ZUNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZChpc0Rpc2FibGVkKTtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gIH1cblxuICAvLyB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBMaWZlY3ljbGUgaG9va3NcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSB1dGlsczogTnpTbGlkZXJTZXJ2aWNlKSB7XG4gIH1cblxuICAvLyBpbml0aWFsaXplIGV2ZW50IGJpbmRpbmcsIGNsYXNzIGluaXQsIGV0Yy4gKGNhbGxlZCBvbmx5IG9uY2UpXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIGluaXRpYWwgY2hlY2tpbmdcbiAgICB0aGlzLmNoZWNrVmFsaWRWYWx1ZSh0aGlzLm56RGVmYXVsdFZhbHVlKTsgLy8gY2hlY2sgbnpEZWZhdWx0VmFsdWVcbiAgICAvLyBkZWZhdWx0IGhhbmRsZXNcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLl9nZW5lcmF0ZUhhbmRsZXModGhpcy5uelJhbmdlID8gMiA6IDEpO1xuICAgIC8vIGluaXRpYWxpemVcbiAgICB0aGlzLnNsaWRlckRPTSA9IHRoaXMuc2xpZGVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcbiAgICB9IC8vIGluaXQgd2l0aCBkZWZhdWx0IHZhbHVlXG4gICAgdGhpcy5tYXJrc0FycmF5ID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gbnVsbCA6IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcyk7XG4gICAgLy8gZXZlbnQgYmluZGluZ3NcbiAgICB0aGlzLmNyZWF0ZURyYWcoKTtcbiAgICAvLyBpbml0aWFsaXplIGRyYWcncyBkaXNhYmxlZCBzdGF0dXNcbiAgICB0aGlzLnRvZ2dsZURyYWdEaXNhYmxlZCh0aGlzLm56RGlzYWJsZWQpO1xuICAgIC8vIHRoZSBmaXJzdCB0aW1lIHRvIGluaXQgY2xhc3Nlc1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBjb25zdCB7IG56RGlzYWJsZWQsIG56TWFya3MsIG56UmFuZ2UgfSA9IGNoYW5nZXM7XG4gICAgaWYgKG56RGlzYWJsZWQgJiYgIW56RGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKG56RGlzYWJsZWQuY3VycmVudFZhbHVlKTtcbiAgICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgICB9IGVsc2UgaWYgKG56TWFya3MgJiYgIW56TWFya3MuZmlyc3RDaGFuZ2UpIHtcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMudG9NYXJrc0FycmF5KHRoaXMubnpNYXJrcykgOiBudWxsO1xuICAgIH0gZWxzZSBpZiAobnpSYW5nZSAmJiAhbnpSYW5nZS5maXJzdENoYW5nZSkge1xuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTsgLy8gQ2hhbmdlIHRvIGRlZmF1bHQgdmFsdWUgd2hlbiBuelJhbmdlIGNoYW5nZWRcbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICB9XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgQmFzaWMgZmxvdyBmdW5jdGlvbnNcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICA6IHRydWUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1kaXNhYmxlZGAgXSAgOiB0aGlzLm56RGlzYWJsZWQsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS12ZXJ0aWNhbGAgXSAgOiB0aGlzLm56VmVydGljYWwsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS13aXRoLW1hcmtzYCBdOiB0aGlzLm1hcmtzQXJyYXkgPyB0aGlzLm1hcmtzQXJyYXkubGVuZ3RoIDogMFxuICAgIH07XG4gIH1cblxuICAvLyBmaW5kIHRoZSBjbG9lc3QgdmFsdWUgdG8gYmUgYWN0aXZhdGVkIChvbmx5IGZvciByYW5nZSA9IHRydWUpXG4gIHNldEFjdGl2ZVZhbHVlSW5kZXgocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelJhbmdlKSB7XG4gICAgICBsZXQgbWluaW1hbCA9IG51bGw7XG4gICAgICBsZXQgZ2FwO1xuICAgICAgbGV0IGFjdGl2ZUluZGV4O1xuICAgICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgICAgKHRoaXMuZ2V0VmFsdWUoKSBhcyBudW1iZXJbXSkuZm9yRWFjaCgodmFsLCBpbmRleCkgPT4ge1xuICAgICAgICBnYXAgPSBNYXRoLmFicyhwb2ludGVyVmFsdWUgLSB2YWwpO1xuICAgICAgICBpZiAobWluaW1hbCA9PT0gbnVsbCB8fCBnYXAgPCBtaW5pbWFsKSB7XG4gICAgICAgICAgbWluaW1hbCA9IGdhcDtcbiAgICAgICAgICBhY3RpdmVJbmRleCA9IGluZGV4O1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMuYWN0aXZlVmFsdWVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIH1cbiAgfVxuXG4gIHNldEFjdGl2ZVZhbHVlKHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpSYW5nZSkge1xuICAgICAgLy8gVE9ETzogdXNpbmcgdHlwZSBndWFyZCwgcmVtb3ZlIHR5cGUgY2FzdFxuICAgICAgY29uc3QgbmV3VmFsdWUgPSB0aGlzLnV0aWxzLmNsb25lQXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSk7XG4gICAgICBuZXdWYWx1ZVsgdGhpcy5hY3RpdmVWYWx1ZUluZGV4IF0gPSBwb2ludGVyVmFsdWU7XG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRWYWx1ZShwb2ludGVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICBjb25zdCBvZmZzZXQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWUpO1xuICAgIGNvbnN0IHZhbHVlU29ydGVkID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcbiAgICBjb25zdCBvZmZzZXRTb3J0ZWQgPSB0aGlzLmdldFZhbHVlVG9PZmZzZXQodmFsdWVTb3J0ZWQpO1xuICAgIGNvbnN0IGJvdW5kUGFydHMgPSB0aGlzLm56UmFuZ2UgPyB2YWx1ZVNvcnRlZCBhcyBudW1iZXJbXSA6IFsgMCwgdmFsdWVTb3J0ZWQgXTtcbiAgICBjb25zdCB0cmFja1BhcnRzID0gdGhpcy5uelJhbmdlID8gWyBvZmZzZXRTb3J0ZWRbIDAgXSwgb2Zmc2V0U29ydGVkWyAxIF0gLSBvZmZzZXRTb3J0ZWRbIDAgXSBdIDogWyAwLCBvZmZzZXRTb3J0ZWQgXTtcblxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XG4gICAgICBoYW5kbGUub2Zmc2V0ID0gdGhpcy5uelJhbmdlID8gb2Zmc2V0WyBpbmRleCBdIDogb2Zmc2V0O1xuICAgICAgaGFuZGxlLnZhbHVlID0gdGhpcy5uelJhbmdlID8gdmFsdWVbIGluZGV4IF0gOiB2YWx1ZTtcbiAgICB9KTtcbiAgICBbIHRoaXMuYm91bmRzLmxvd2VyLCB0aGlzLmJvdW5kcy51cHBlciBdID0gYm91bmRQYXJ0cztcbiAgICBbIHRoaXMudHJhY2sub2Zmc2V0LCB0aGlzLnRyYWNrLmxlbmd0aCBdID0gdHJhY2tQYXJ0cztcbiAgfVxuXG4gIHRvTWFya3NBcnJheShtYXJrczogTWFya3MpOiBNYXJrc1tdIHtcbiAgICBjb25zdCBtYXJrc0FycmF5ID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gbWFya3MpIHtcbiAgICAgIGNvbnN0IG1hcmsgPSBtYXJrc1sga2V5IF07XG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcbiAgICAgIGlmICh2YWwgPCB0aGlzLm56TWluIHx8IHZhbCA+IHRoaXMubnpNYXgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBtYXJrc0FycmF5LnB1c2goeyB2YWx1ZTogdmFsLCBvZmZzZXQ6IHRoaXMudmFsdWVUb09mZnNldCh2YWwpLCBjb25maWc6IG1hcmsgfSk7XG4gICAgfVxuICAgIHJldHVybiBtYXJrc0FycmF5O1xuICB9XG5cbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgRXZlbnQgbGlzdGVuZXJzICYgYmluZGluZ3NcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgb25EcmFnU3RhcnQodmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbb25EcmFnU3RhcnRdZHJhZ2dpbmcgdmFsdWUgPSAnLCB2YWx1ZSk7XG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKHRydWUpO1xuICAgIC8vIGNhY2hlIERPTSBsYXlvdXQvcmVmbG93IG9wZXJhdGlvbnNcbiAgICB0aGlzLmNhY2hlU2xpZGVyUHJvcGVydHkoKTtcbiAgICAvLyB0cmlnZ2VyIGRyYWcgc3RhcnRcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlSW5kZXgodmFsdWUpO1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodmFsdWUpO1xuICAgIC8vIFRvb2x0aXAgdmlzaWJpbGl0eSBvZiBoYW5kbGVzXG4gICAgdGhpcy5fc2hvd0hhbmRsZVRvb2x0aXAodGhpcy5uelJhbmdlID8gdGhpcy5hY3RpdmVWYWx1ZUluZGV4IDogMCk7XG4gIH1cblxuICBvbkRyYWdNb3ZlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmxvZygnW29uRHJhZ01vdmVdZHJhZ2dpbmcgdmFsdWUgPSAnLCB2YWx1ZSk7XG4gICAgLy8gdHJpZ2dlciBkcmFnIG1vdmluZ1xuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodmFsdWUpO1xuICB9XG5cbiAgb25EcmFnRW5kKCk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbb25EcmFnRW5kXScpO1xuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyhmYWxzZSk7XG4gICAgdGhpcy5uek9uQWZ0ZXJDaGFuZ2UuZW1pdCh0aGlzLmdldFZhbHVlKHRydWUpKTtcbiAgICAvLyByZW1vdmUgY2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9uc1xuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcbiAgICAvLyBIaWRlIGFsbCB0b29sdGlwXG4gICAgdGhpcy5faGlkZUFsbEhhbmRsZVRvb2x0aXAoKTtcbiAgfVxuXG4gIGNyZWF0ZURyYWcoKTogdm9pZCB7XG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XG4gICAgY29uc3Qgb3JpZW50RmllbGQgPSB0aGlzLm56VmVydGljYWwgPyAncGFnZVknIDogJ3BhZ2VYJztcbiAgICBjb25zdCBtb3VzZTogTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgc3RhcnQgICA6ICdtb3VzZWRvd24nLCBtb3ZlOiAnbW91c2Vtb3ZlJywgZW5kOiAnbW91c2V1cCcsXG4gICAgICBwbHVja0tleTogWyBvcmllbnRGaWVsZCBdXG4gICAgfTtcbiAgICBjb25zdCB0b3VjaDogTW91c2VUb3VjaE9ic2VydmVyQ29uZmlnID0ge1xuICAgICAgc3RhcnQgICA6ICd0b3VjaHN0YXJ0JywgbW92ZTogJ3RvdWNobW92ZScsIGVuZDogJ3RvdWNoZW5kJyxcbiAgICAgIHBsdWNrS2V5OiBbICd0b3VjaGVzJywgJzAnLCBvcmllbnRGaWVsZCBdLFxuICAgICAgZmlsdGVyICA6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gIXRoaXMudXRpbHMuaXNOb3RUb3VjaEV2ZW50KGUgYXMgVG91Y2hFdmVudClcbiAgICB9O1xuICAgIC8vIG1ha2Ugb2JzZXJ2YWJsZXNcbiAgICBbIG1vdXNlLCB0b3VjaCBdLmZvckVhY2goc291cmNlID0+IHtcbiAgICAgIGNvbnN0IHsgc3RhcnQsIG1vdmUsIGVuZCwgcGx1Y2tLZXksIGZpbHRlcjogZmlsdGVyRnVuYyA9ICgoKSA9PiB0cnVlKSB9ID0gc291cmNlO1xuICAgICAgLy8gc3RhcnRcbiAgICAgIHNvdXJjZS5zdGFydFBsdWNrZWQkID0gZnJvbUV2ZW50KHNsaWRlckRPTSwgc3RhcnQpLnBpcGUoXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcbiAgICAgICAgdGFwKHRoaXMudXRpbHMucGF1c2VFdmVudCksXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcbiAgICAgICAgbWFwKChwb3NpdGlvbjogbnVtYmVyKSA9PiB0aGlzLmZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb24pKVxuICAgICAgKTtcbiAgICAgIC8vIGVuZFxuICAgICAgc291cmNlLmVuZCQgPSBmcm9tRXZlbnQoZG9jdW1lbnQsIGVuZCk7XG4gICAgICAvLyByZXNvbHZlIG1vdmVcbiAgICAgIHNvdXJjZS5tb3ZlUmVzb2x2ZWQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBtb3ZlKS5waXBlKFxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXG4gICAgICAgIHRhcCh0aGlzLnV0aWxzLnBhdXNlRXZlbnQpLFxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIG1hcCgocG9zaXRpb246IG51bWJlcikgPT4gdGhpcy5maW5kQ2xvc2VzdFZhbHVlKHBvc2l0aW9uKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXG4gICAgICAgIHRha2VVbnRpbChzb3VyY2UuZW5kJClcbiAgICAgICk7XG4gICAgICAvLyBtZXJnZSB0byBiZWNvbWUgbW92aW5nXG4gICAgICAvLyBzb3VyY2UubW92ZSQgPSBzb3VyY2Uuc3RhcnRQbHVja2VkJC5tZXJnZU1hcFRvKHNvdXJjZS5tb3ZlUmVzb2x2ZWQkKTtcbiAgICB9KTtcbiAgICAvLyBtZXJnZSBtb3VzZSBhbmQgdG91Y2ggb2JzZXJ2YWJsZXNcbiAgICB0aGlzLmRyYWdzdGFydCQgPSBtZXJnZShtb3VzZS5zdGFydFBsdWNrZWQkLCB0b3VjaC5zdGFydFBsdWNrZWQkKTtcbiAgICAvLyB0aGlzLmRyYWdtb3ZlJCA9IE9ic2VydmFibGUubWVyZ2UobW91c2UubW92ZSQsIHRvdWNoLm1vdmUkKTtcbiAgICB0aGlzLmRyYWdtb3ZlJCA9IG1lcmdlKG1vdXNlLm1vdmVSZXNvbHZlZCQsIHRvdWNoLm1vdmVSZXNvbHZlZCQpO1xuICAgIHRoaXMuZHJhZ2VuZCQgPSBtZXJnZShtb3VzZS5lbmQkLCB0b3VjaC5lbmQkKTtcbiAgfVxuXG4gIHN1YnNjcmliZURyYWcocGVyaW9kczogc3RyaW5nW10gPSBbICdzdGFydCcsICdtb3ZlJywgJ2VuZCcgXSk6IHZvaWQge1xuICAgIHRoaXMubG9nKCdbc3Vic2NyaWJlRHJhZ110aGlzLmRyYWdzdGFydCQgPSAnLCB0aGlzLmRyYWdzdGFydCQpO1xuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ3N0YXJ0JykgIT09IC0xICYmIHRoaXMuZHJhZ3N0YXJ0JCAmJiAhdGhpcy5kcmFnc3RhcnRfKSB7XG4gICAgICB0aGlzLmRyYWdzdGFydF8gPSB0aGlzLmRyYWdzdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdtb3ZlJCAmJiAhdGhpcy5kcmFnbW92ZV8pIHtcbiAgICAgIHRoaXMuZHJhZ21vdmVfID0gdGhpcy5kcmFnbW92ZSQuc3Vic2NyaWJlKHRoaXMub25EcmFnTW92ZS5iaW5kKHRoaXMpKTtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdlbmQnKSAhPT0gLTEgJiYgdGhpcy5kcmFnZW5kJCAmJiAhdGhpcy5kcmFnZW5kXykge1xuICAgICAgdGhpcy5kcmFnZW5kXyA9IHRoaXMuZHJhZ2VuZCQuc3Vic2NyaWJlKHRoaXMub25EcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIHVuc3Vic2NyaWJlRHJhZyhwZXJpb2RzOiBzdHJpbmdbXSA9IFsgJ3N0YXJ0JywgJ21vdmUnLCAnZW5kJyBdKTogdm9pZCB7XG4gICAgdGhpcy5sb2coJ1t1bnN1YnNjcmliZURyYWdddGhpcy5kcmFnc3RhcnRfID0gJywgdGhpcy5kcmFnc3RhcnRfKTtcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdzdGFydF8pIHtcbiAgICAgIHRoaXMuZHJhZ3N0YXJ0Xy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnc3RhcnRfID0gbnVsbDtcbiAgICB9XG5cbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdtb3ZlJykgIT09IC0xICYmIHRoaXMuZHJhZ21vdmVfKSB7XG4gICAgICB0aGlzLmRyYWdtb3ZlXy51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5kcmFnbW92ZV8gPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ2VuZCcpICE9PSAtMSAmJiB0aGlzLmRyYWdlbmRfKSB7XG4gICAgICB0aGlzLmRyYWdlbmRfLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmRyYWdlbmRfID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB0b2dnbGVEcmFnTW92aW5nKG1vdmFibGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwZXJpb2RzID0gWyAnbW92ZScsICdlbmQnIF07XG4gICAgaWYgKG1vdmFibGUpIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IHRydWU7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy51bnN1YnNjcmliZURyYWcocGVyaW9kcyk7XG4gICAgfVxuICB9XG5cbiAgdG9nZ2xlRHJhZ0Rpc2FibGVkKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnN1YnNjcmliZURyYWcoWyAnc3RhcnQnIF0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFV0aWwgZnVuY3Rpb25zICh0b29scylcbiAgLy8gfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gZmluZCB0aGUgY2xvc2VzdCB2YWx1ZSBkZXBlbmQgb24gcG9pbnRlcidzIHBvc2l0aW9uXG4gIGZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc2xpZGVyU3RhcnQgPSB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcbiAgICBjb25zdCBzbGlkZXJMZW5ndGggPSB0aGlzLmdldFNsaWRlckxlbmd0aCgpO1xuICAgIGNvbnN0IHJhdGlvID0gdGhpcy51dGlscy5jb3JyZWN0TnVtTGltaXQoKHBvc2l0aW9uIC0gc2xpZGVyU3RhcnQpIC8gc2xpZGVyTGVuZ3RoLCAwLCAxKTtcbiAgICBjb25zdCB2YWwgPSAodGhpcy5uek1heCAtIHRoaXMubnpNaW4pICogKHRoaXMubnpWZXJ0aWNhbCA/IDEgLSByYXRpbyA6IHJhdGlvKSArIHRoaXMubnpNaW47XG4gICAgY29uc3QgcG9pbnRzID0gKHRoaXMubnpNYXJrcyA9PT0gbnVsbCA/IFtdIDogT2JqZWN0LmtleXModGhpcy5uek1hcmtzKS5tYXAocGFyc2VGbG9hdCkpO1xuICAgIC8vIHB1c2ggY2xvc2VzdCBzdGVwXG4gICAgaWYgKHRoaXMubnpTdGVwICE9PSBudWxsICYmICF0aGlzLm56RG90cykge1xuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XG4gICAgICBwb2ludHMucHVzaChjbG9zZXN0T25lKTtcbiAgICB9XG4gICAgLy8gY2FsY3VsYXRlIGdhcHNcbiAgICBjb25zdCBnYXBzID0gcG9pbnRzLm1hcChwb2ludCA9PiBNYXRoLmFicyh2YWwgLSBwb2ludCkpO1xuICAgIGNvbnN0IGNsb3Nlc3QgPSBwb2ludHNbIGdhcHMuaW5kZXhPZihNYXRoLm1pbiguLi5nYXBzKSkgXTtcbiAgICAvLyByZXR1cm4gdGhlIGZpeGVkXG4gICAgcmV0dXJuIHRoaXMubnpTdGVwID09PSBudWxsID8gY2xvc2VzdCA6XG4gICAgICBwYXJzZUZsb2F0KGNsb3Nlc3QudG9GaXhlZCh0aGlzLnV0aWxzLmdldFByZWNpc2lvbih0aGlzLm56U3RlcCkpKTtcbiAgfVxuXG4gIHZhbHVlVG9PZmZzZXQodmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudXRpbHMudmFsdWVUb09mZnNldCh0aGlzLm56TWluLCB0aGlzLm56TWF4LCB2YWx1ZSk7XG4gIH1cblxuICBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJTdGFydCAhPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJTdGFydDtcbiAgICB9XG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy51dGlscy5nZXRFbGVtZW50T2Zmc2V0KHRoaXMuc2xpZGVyRE9NKTtcbiAgICByZXR1cm4gdGhpcy5uelZlcnRpY2FsID8gb2Zmc2V0LnRvcCA6IG9mZnNldC5sZWZ0O1xuICB9XG5cbiAgZ2V0U2xpZGVyTGVuZ3RoKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyTGVuZ3RoO1xuICAgIH1cbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcbiAgICByZXR1cm4gdGhpcy5uelZlcnRpY2FsID9cbiAgICAgIHNsaWRlckRPTS5jbGllbnRIZWlnaHQgOiBzbGlkZXJET00uY2xpZW50V2lkdGg7XG4gIH1cblxuICAvLyBjYWNoZSBET00gbGF5b3V0L3JlZmxvdyBvcGVyYXRpb25zIGZvciBwZXJmb3JtYW5jZSAobWF5IG5vdCBuZWNlc3Nhcnk/KVxuICBjYWNoZVNsaWRlclByb3BlcnR5KHJlbW92ZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5jYWNoZVNsaWRlclN0YXJ0ID0gcmVtb3ZlID8gbnVsbCA6IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xuICAgIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcbiAgfVxuXG4gIGZvcm1hdFZhbHVlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IFNsaWRlclZhbHVlIHsgLy8gTk9URTogd2lsbCByZXR1cm4gbmV3IHZhbHVlXG4gICAgbGV0IHJlcyA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5jaGVja1ZhbGlkVmFsdWUodmFsdWUpKSB7IC8vIGlmIGVtcHR5LCB1c2UgZGVmYXVsdCB2YWx1ZVxuICAgICAgcmVzID0gdGhpcy5uekRlZmF1bHRWYWx1ZSA9PT0gbnVsbCA/XG4gICAgICAgICh0aGlzLm56UmFuZ2UgPyBbIHRoaXMubnpNaW4sIHRoaXMubnpNYXggXSA6IHRoaXMubnpNaW4pIDogdGhpcy5uekRlZmF1bHRWYWx1ZTtcbiAgICB9IGVsc2UgeyAvLyBmb3JtYXRcbiAgICAgIC8vIFRPRE86IHVzaW5nIHR5cGUgZ3VhcmQsIHJlbW92ZSB0eXBlIGNhc3RcbiAgICAgIHJlcyA9IHRoaXMubnpSYW5nZSA/XG4gICAgICAgICh2YWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiB0aGlzLnV0aWxzLmNvcnJlY3ROdW1MaW1pdCh2YWwsIHRoaXMubnpNaW4sIHRoaXMubnpNYXgpKSA6XG4gICAgICAgIHRoaXMudXRpbHMuY29ycmVjdE51bUxpbWl0KHZhbHVlIGFzIG51bWJlciwgdGhpcy5uek1pbiwgdGhpcy5uek1heCk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG4gIH1cblxuICAvLyBjaGVjayBpZiB2YWx1ZSBpcyB2YWxpZCBhbmQgdGhyb3cgZXJyb3IgaWYgdmFsdWUtdHlwZS9yYW5nZSBub3QgbWF0Y2hcbiAgY2hlY2tWYWxpZFZhbHVlKHZhbHVlOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uelJhbmdlO1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSAvLyBpdCdzIGFuIGludmFsaWQgdmFsdWUsIGp1c3QgcmV0dXJuXG4gICAgY29uc3QgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkodmFsdWUpO1xuICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGxldCBwYXJzZWRWYWx1ZTogbnVtYmVyID0gdmFsdWU7XG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnbnVtYmVyJykge1xuICAgICAgICBwYXJzZWRWYWx1ZSA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKGlzTmFOKHBhcnNlZFZhbHVlKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IC8vIGl0J3MgYW4gaW52YWxpZCB2YWx1ZSwganVzdCByZXR1cm5cbiAgICB9XG4gICAgaWYgKGlzQXJyYXkgIT09ICEhcmFuZ2UpIHsgLy8gdmFsdWUgdHlwZSBub3QgbWF0Y2hcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwibnpSYW5nZVwiIGNhbid0IG1hdGNoIHRoZSBcIm56VmFsdWVcIidzIHR5cGUsIHBsZWFzZSBjaGVjayB0aGVzZSBwcm9wZXJ0aWVzOiBcIm56UmFuZ2VcIiwgXCJuelZhbHVlXCIsIFwibnpEZWZhdWx0VmFsdWVcIi5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpc1ZhbHVlRXF1YWwodmFsdWU6IFNsaWRlclZhbHVlLCB2YWw6IFNsaWRlclZhbHVlKTogYm9vbGVhbiB7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gdHlwZW9mIHZhbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHZhbHVlWyBpIF0gIT09IHZhbFsgaSBdKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhbHVlID09PSB2YWw7XG4gICAgfVxuICB9XG5cbiAgLy8gcHJpbnQgZGVidWcgaW5mb1xuICAvLyBUT0RPOiBzaG91bGQgbm90IGtlcHQgaW4gY29tcG9uZW50XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgbG9nKC4uLm1lc3NhZ2VzOiBhbnlbXSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGVidWdJZCAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgYXJncyA9IFsgYFtuei1zbGlkZXJdWyMke3RoaXMubnpEZWJ1Z0lkfV0gYCBdLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgIGNvbnNvbGUubG9nLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cgb25lIGhhbmRsZSdzIHRvb2x0aXAgYW5kIGhpZGUgb3RoZXJzJ1xuICBwcml2YXRlIF9zaG93SGFuZGxlVG9vbHRpcChoYW5kbGVJbmRleDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZXNbIGluZGV4IF0uYWN0aXZlID0gaW5kZXggPT09IGhhbmRsZUluZGV4O1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goaGFuZGxlID0+IGhhbmRsZS5hY3RpdmUgPSBmYWxzZSk7XG4gIH1cblxuICBwcml2YXRlIF9nZW5lcmF0ZUhhbmRsZXMoYW1vdW50OiBudW1iZXIpOiBTbGlkZXJIYW5kbGVbXSB7XG4gICAgY29uc3QgaGFuZGxlczogU2xpZGVySGFuZGxlW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFtb3VudDsgaSsrKSB7XG4gICAgICBoYW5kbGVzLnB1c2goeyBvZmZzZXQ6IG51bGwsIHZhbHVlOiBudWxsLCBhY3RpdmU6IGZhbHNlIH0pO1xuICAgIH1cbiAgICByZXR1cm4gaGFuZGxlcztcbiAgfVxuXG59XG4iXX0=