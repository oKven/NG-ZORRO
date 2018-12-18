/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
export class NzSliderMarksComponent {
    constructor() {
        this._vertical = false;
        this._included = false;
        // Dynamic properties
        this.nzLowerBound = null;
        this.nzUpperBound = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        // Required
        this._vertical = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIncluded(value) {
        this._included = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzIncluded() {
        return this._included;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzMarksArray"]) {
            this.buildAttrs();
        }
        if (changes["nzMarksArray"] || changes["nzLowerBound"] || changes["nzUpperBound"]) {
            this.togglePointActive();
        }
    }
    /**
     * @param {?} index
     * @param {?} attr
     * @return {?}
     */
    trackById(index, attr) {
        return attr.id;
    }
    /**
     * @return {?}
     */
    buildAttrs() {
        /** @type {?} */
        const range = this.nzMax - this.nzMin;
        this.attrs = this.nzMarksArray.map(mark => {
            const { value, offset, config } = mark;
            /** @type {?} */
            let label = config;
            /** @type {?} */
            let style;
            if (this.nzVertical) {
                style = {
                    marginBottom: '-50%',
                    bottom: `${(value - this.nzMin) / range * 100}%`
                };
            }
            else {
                /** @type {?} */
                const marksCount = this.nzMarksArray.length;
                /** @type {?} */
                const unit = 100 / (marksCount - 1);
                /** @type {?} */
                const markWidth = unit * 0.9;
                style = {
                    width: `${markWidth}%`,
                    marginLeft: `${-markWidth / 2}%`,
                    left: `${(value - this.nzMin) / range * 100}%`
                };
            }
            // custom configuration
            if (typeof config === 'object') {
                label = config.label;
                if (config.style) {
                    style = Object.assign({}, style, config.style);
                }
            }
            return {
                id: value,
                value,
                offset,
                classes: {
                    [`${this.nzClassName}-text`]: true
                },
                style,
                label
            };
        }); // END - map
    }
    /**
     * @return {?}
     */
    togglePointActive() {
        if (this.attrs && this.nzLowerBound !== null && this.nzUpperBound !== null) {
            this.attrs.forEach(attr => {
                /** @type {?} */
                const value = attr.value;
                /** @type {?} */
                const isActive = (!this.nzIncluded && value === this.nzUpperBound) ||
                    (this.nzIncluded && value <= this.nzUpperBound && value >= this.nzLowerBound);
                attr.classes[`${this.nzClassName}-text-active`] = isActive;
            });
        }
    }
}
NzSliderMarksComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider-marks',
                preserveWhitespaces: false,
                template: "<div [class]=\"nzClassName\">\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\" [innerHTML]=\"attr.label\"></span>\n</div>"
            }] }
];
NzSliderMarksComponent.propDecorators = {
    nzLowerBound: [{ type: Input }],
    nzUpperBound: [{ type: Input }],
    nzMarksArray: [{ type: Input }],
    nzClassName: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
function NzSliderMarksComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderMarksComponent.prototype._vertical;
    /** @type {?} */
    NzSliderMarksComponent.prototype._included;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzClassName;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderMarksComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderMarksComponent.prototype.attrs;
}
export class Marks {
}
function Marks_tsickle_Closure_declarations() {
    /** @type {?} */
    Marks.prototype.number;
}
export class MarksArray extends Array {
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzbGlkZXIvbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTNFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQU9qRCxNQUFNLE9BQU8sc0JBQXNCOzt5QkFDYixLQUFLO3lCQUNMLEtBQUs7O1FBR3pCLG9CQUFnQyxJQUFJLENBQUM7UUFDckMsb0JBQWdDLElBQUksQ0FBQzs7Ozs7O0lBUXJDLElBQ0ksVUFBVSxDQUFDLEtBQWM7O1FBQzNCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ25DOzs7O0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0tBQ3ZCOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLEtBQWM7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBS0QsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxrQkFBZTtZQUN4QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDbkI7UUFDRCxJQUFJLE9BQU8sb0JBQWlCLE9BQU8sZ0JBQWEsSUFBSSxPQUFPLGdCQUFhLEVBQUU7WUFDeEUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDMUI7S0FDRjs7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQWEsRUFBRSxJQUFzSDtRQUM3SSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUM7S0FDaEI7Ozs7SUFFRCxVQUFV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UixNQUFNLE9BQU8sS0FBSztDQUVqQjs7Ozs7QUFHRCxNQUFNLE9BQU8sVUFBVyxTQUFRLEtBQXNEO0NBTXJGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1zbGlkZXItbWFya3MnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelNsaWRlck1hcmtzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgcHJpdmF0ZSBfdmVydGljYWwgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaW5jbHVkZWQgPSBmYWxzZTtcblxuICAvLyBEeW5hbWljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgbnpMb3dlckJvdW5kOiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKSBuelVwcGVyQm91bmQ6IG51bWJlciA9IG51bGw7XG4gIEBJbnB1dCgpIG56TWFya3NBcnJheTogTWFya3NBcnJheTtcblxuICAvLyBTdGF0aWMgcHJvcGVydGllc1xuICBASW5wdXQoKSBuekNsYXNzTmFtZTogc3RyaW5nO1xuICBASW5wdXQoKSBuek1pbjogbnVtYmVyOyAvLyBSZXF1aXJlZFxuICBASW5wdXQoKSBuek1heDogbnVtYmVyOyAvLyBSZXF1aXJlZFxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7IC8vIFJlcXVpcmVkXG4gICAgdGhpcy5fdmVydGljYWwgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56VmVydGljYWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZlcnRpY2FsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5jbHVkZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9pbmNsdWRlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpJbmNsdWRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faW5jbHVkZWQ7XG4gIH1cblxuICAvLyBUT0RPOiB1c2luZyBuYW1lZCBpbnRlcmZhY2VcbiAgYXR0cnM6IEFycmF5PHsgaWQ6IG51bWJlciwgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNsYXNzZXM6IHsgWyBrZXk6IHN0cmluZyBdOiBib29sZWFuIH0sIHN0eWxlOiBvYmplY3QsIGxhYmVsOiBNYXJrIH0+OyAvLyBwb2ludHMgZm9yIGlubmVyIHVzZVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcbiAgICAgIHRoaXMuYnVpbGRBdHRycygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgYXR0cjogeyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCwgbGFiZWw6IE1hcmsgfSk6IG51bWJlciB7XG4gICAgcmV0dXJuIGF0dHIuaWQ7XG4gIH1cblxuICBidWlsZEF0dHJzKCk6IHZvaWQge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5uek1heCAtIHRoaXMubnpNaW47XG4gICAgdGhpcy5hdHRycyA9IHRoaXMubnpNYXJrc0FycmF5Lm1hcChtYXJrID0+IHtcbiAgICAgIGNvbnN0IHsgdmFsdWUsIG9mZnNldCwgY29uZmlnIH0gPSBtYXJrO1xuICAgICAgLy8gY2FsYyBzdHlsZXNcbiAgICAgIGxldCBsYWJlbCA9IGNvbmZpZztcbiAgICAgIGxldCBzdHlsZTogb2JqZWN0O1xuICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICBtYXJnaW5Cb3R0b206ICctNTAlJyxcbiAgICAgICAgICBib3R0b20gICAgICA6IGAkeyh2YWx1ZSAtIHRoaXMubnpNaW4pIC8gcmFuZ2UgKiAxMDB9JWBcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG1hcmtzQ291bnQgPSB0aGlzLm56TWFya3NBcnJheS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IHVuaXQgPSAxMDAgLyAobWFya3NDb3VudCAtIDEpO1xuICAgICAgICBjb25zdCBtYXJrV2lkdGggPSB1bml0ICogMC45O1xuICAgICAgICBzdHlsZSA9IHtcbiAgICAgICAgICB3aWR0aCAgICAgOiBgJHttYXJrV2lkdGh9JWAsXG4gICAgICAgICAgbWFyZ2luTGVmdDogYCR7LW1hcmtXaWR0aCAvIDJ9JWAsXG4gICAgICAgICAgbGVmdCAgICAgIDogYCR7KHZhbHVlIC0gdGhpcy5uek1pbikgLyByYW5nZSAqIDEwMH0lYFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgLy8gY3VzdG9tIGNvbmZpZ3VyYXRpb25cbiAgICAgIGlmICh0eXBlb2YgY29uZmlnID09PSAnb2JqZWN0Jykge1xuICAgICAgICBsYWJlbCA9IGNvbmZpZy5sYWJlbDtcbiAgICAgICAgaWYgKGNvbmZpZy5zdHlsZSkge1xuICAgICAgICAgIHN0eWxlID0geyAuLi5zdHlsZSwgLi4uY29uZmlnLnN0eWxlIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGlkICAgICA6IHZhbHVlLFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2Zmc2V0LFxuICAgICAgICBjbGFzc2VzOiB7XG4gICAgICAgICAgWyBgJHt0aGlzLm56Q2xhc3NOYW1lfS10ZXh0YCBdOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlLFxuICAgICAgICBsYWJlbFxuICAgICAgfTtcbiAgICB9KTsgLy8gRU5EIC0gbWFwXG4gIH1cblxuICB0b2dnbGVQb2ludEFjdGl2ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hdHRycyAmJiB0aGlzLm56TG93ZXJCb3VuZCAhPT0gbnVsbCAmJiB0aGlzLm56VXBwZXJCb3VuZCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdHRycy5mb3JFYWNoKGF0dHIgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGF0dHIudmFsdWU7XG4gICAgICAgIGNvbnN0IGlzQWN0aXZlID0gKCF0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPT09IHRoaXMubnpVcHBlckJvdW5kKSB8fFxuICAgICAgICAgICh0aGlzLm56SW5jbHVkZWQgJiYgdmFsdWUgPD0gdGhpcy5uelVwcGVyQm91bmQgJiYgdmFsdWUgPj0gdGhpcy5uekxvd2VyQm91bmQpO1xuICAgICAgICBhdHRyLmNsYXNzZXNbIGAke3RoaXMubnpDbGFzc05hbWV9LXRleHQtYWN0aXZlYCBdID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuXG4vLyBERUZJTklUSU9OU1xuXG5leHBvcnQgdHlwZSBNYXJrID0gc3RyaW5nIHwge1xuICBzdHlsZTogb2JqZWN0O1xuICBsYWJlbDogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNsYXNzIE1hcmtzIHtcbiAgbnVtYmVyOiBNYXJrO1xufVxuXG4vLyBUT0RPOiBleHRlbmRzIEFycmF5IGNvdWxkIGNhdXNlIHVuZXhwZWN0ZWQgYmVoYXZpb3Igd2hlbiB0YXJnZXRpbmcgZXM1IG9yIGJlbG93XG5leHBvcnQgY2xhc3MgTWFya3NBcnJheSBleHRlbmRzIEFycmF5PHsgdmFsdWU6IG51bWJlciwgb2Zmc2V0OiBudW1iZXIsIGNvbmZpZzogTWFyayB9PiB7XG4gIFsgaW5kZXg6IG51bWJlciBdOiB7XG4gICAgdmFsdWU6IG51bWJlcjtcbiAgICBvZmZzZXQ6IG51bWJlcjtcbiAgICBjb25maWc6IE1hcms7XG4gIH1cbn1cbiJdfQ==