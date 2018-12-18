/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { toBoolean } from '../core/util/convert';
import { MarksArray } from './nz-slider-marks.component';
export class NzSliderStepComponent {
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
        const orient = this.nzVertical ? 'bottom' : 'left';
        /** @type {?} */
        const prefixCls = this.nzPrefixCls;
        this.attrs = this.nzMarksArray.map(mark => {
            const { value, offset } = mark;
            return {
                id: value,
                value,
                offset,
                style: {
                    [orient]: `${offset}%`
                },
                classes: {
                    [`${prefixCls}-dot`]: true,
                    [`${prefixCls}-dot-active`]: false
                }
            };
        });
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
                attr.classes[`${this.nzPrefixCls}-dot-active`] = isActive;
            });
        }
    }
}
NzSliderStepComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-slider-step',
                preserveWhitespaces: false,
                template: "<div class=\"{{nzPrefixCls}}-step\">\n  <span *ngFor=\"let attr of attrs; trackBy: trackById\" [ngClass]=\"attr.classes\" [ngStyle]=\"attr.style\"></span>\n</div>"
            }] }
];
NzSliderStepComponent.propDecorators = {
    nzLowerBound: [{ type: Input }],
    nzUpperBound: [{ type: Input }],
    nzMarksArray: [{ type: Input }],
    nzPrefixCls: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzIncluded: [{ type: Input }]
};
function NzSliderStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSliderStepComponent.prototype._vertical;
    /** @type {?} */
    NzSliderStepComponent.prototype._included;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzLowerBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzUpperBound;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzMarksArray;
    /** @type {?} */
    NzSliderStepComponent.prototype.nzPrefixCls;
    /** @type {?} */
    NzSliderStepComponent.prototype.attrs;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLXN0ZXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNsaWRlci9uei1zbGlkZXItc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQUUzRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFakQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBT3pELE1BQU0sT0FBTyxxQkFBcUI7O3lCQUNaLEtBQUs7eUJBQ0wsS0FBSzs7UUFHekIsb0JBQWdDLElBQUksQ0FBQztRQUNyQyxvQkFBZ0MsSUFBSSxDQUFDOzs7Ozs7SUFNckMsSUFDSSxVQUFVLENBQUMsS0FBYzs7UUFDM0IsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDbkM7Ozs7SUFFRCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7S0FDdkI7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsS0FBYztRQUMzQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNuQzs7OztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztLQUN2Qjs7Ozs7SUFLRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLGtCQUFlO1lBQ3hCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNuQjtRQUNELElBQUksT0FBTyxvQkFBaUIsT0FBTyxnQkFBYSxJQUFJLE9BQU8sZ0JBQWEsRUFBRTtZQUN4RSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztTQUMxQjtLQUNGOzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLElBQXlHO1FBQ2hJLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQztLQUNoQjs7OztJQUVELFVBQVU7O1FBQ1IsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7O1FBQ25ELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUN4QyxNQUFNLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQztZQUMvQixPQUFPO2dCQUNMLEVBQUUsRUFBTyxLQUFLO2dCQUNkLEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixLQUFLLEVBQUk7b0JBQ1AsQ0FBRSxNQUFNLENBQUUsRUFBRSxHQUFHLE1BQU0sR0FBRztpQkFDekI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLENBQUUsR0FBRyxTQUFTLE1BQU0sQ0FBRSxFQUFTLElBQUk7b0JBQ25DLENBQUUsR0FBRyxTQUFTLGFBQWEsQ0FBRSxFQUFFLEtBQUs7aUJBQ3JDO2FBQ0YsQ0FBQztTQUNILENBQUMsQ0FBQztLQUNKOzs7O0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEtBQUssSUFBSSxFQUFFO1lBQzFFLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDeEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzs7Z0JBQ3pCLE1BQU0sUUFBUSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLEtBQUssS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO29CQUNoRSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDaEYsSUFBSSxDQUFDLE9BQU8sQ0FBRSxHQUFHLElBQUksQ0FBQyxXQUFXLGFBQWEsQ0FBRSxHQUFHLFFBQVEsQ0FBQzthQUM3RCxDQUFDLENBQUM7U0FDSjtLQUNGOzs7WUFoRkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxnQkFBZ0I7Z0JBQ3JDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDhLQUFzRDthQUN2RDs7OzJCQU1FLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzBCQUdMLEtBQUs7eUJBRUwsS0FBSzt5QkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcblxuaW1wb3J0IHsgTWFya3NBcnJheSB9IGZyb20gJy4vbnotc2xpZGVyLW1hcmtzLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc2xpZGVyLXN0ZXAnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotc2xpZGVyLXN0ZXAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyU3RlcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG4gIHByaXZhdGUgX2luY2x1ZGVkID0gZmFsc2U7XG5cbiAgLy8gRHluYW1pYyBwcm9wZXJ0aWVzXG4gIEBJbnB1dCgpIG56TG93ZXJCb3VuZDogbnVtYmVyID0gbnVsbDtcbiAgQElucHV0KCkgbnpVcHBlckJvdW5kOiBudW1iZXIgPSBudWxsO1xuICBASW5wdXQoKSBuek1hcmtzQXJyYXk6IE1hcmtzQXJyYXk7XG5cbiAgLy8gU3RhdGljIHByb3BlcnRpZXNcbiAgQElucHV0KCkgbnpQcmVmaXhDbHM6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikgeyAvLyBSZXF1aXJlZFxuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekluY2x1ZGVkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5jbHVkZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SW5jbHVkZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luY2x1ZGVkO1xuICB9XG5cbiAgLy8gVE9ETzogdXNpbmcgbmFtZWQgaW50ZXJmYWNlXG4gIGF0dHJzOiBBcnJheTx7IGlkOiBudW1iZXIsIHZhbHVlOiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBjbGFzc2VzOiB7IFsga2V5OiBzdHJpbmcgXTogYm9vbGVhbiB9LCBzdHlsZTogb2JqZWN0IH0+O1xuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkpIHtcbiAgICAgIHRoaXMuYnVpbGRBdHRycygpO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uek1hcmtzQXJyYXkgfHwgY2hhbmdlcy5uekxvd2VyQm91bmQgfHwgY2hhbmdlcy5uelVwcGVyQm91bmQpIHtcbiAgICAgIHRoaXMudG9nZ2xlUG9pbnRBY3RpdmUoKTtcbiAgICB9XG4gIH1cblxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgYXR0cjogeyBpZDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgY2xhc3NlczogeyBbIGtleTogc3RyaW5nIF06IGJvb2xlYW4gfSwgc3R5bGU6IG9iamVjdCB9KTogbnVtYmVyIHtcbiAgICByZXR1cm4gYXR0ci5pZDtcbiAgfVxuXG4gIGJ1aWxkQXR0cnMoKTogdm9pZCB7XG4gICAgY29uc3Qgb3JpZW50ID0gdGhpcy5uelZlcnRpY2FsID8gJ2JvdHRvbScgOiAnbGVmdCc7XG4gICAgY29uc3QgcHJlZml4Q2xzID0gdGhpcy5uelByZWZpeENscztcbiAgICB0aGlzLmF0dHJzID0gdGhpcy5uek1hcmtzQXJyYXkubWFwKG1hcmsgPT4ge1xuICAgICAgY29uc3QgeyB2YWx1ZSwgb2Zmc2V0IH0gPSBtYXJrO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQgICAgIDogdmFsdWUsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBvZmZzZXQsXG4gICAgICAgIHN0eWxlICA6IHtcbiAgICAgICAgICBbIG9yaWVudCBdOiBgJHtvZmZzZXR9JWBcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3Nlczoge1xuICAgICAgICAgIFsgYCR7cHJlZml4Q2xzfS1kb3RgIF0gICAgICAgOiB0cnVlLFxuICAgICAgICAgIFsgYCR7cHJlZml4Q2xzfS1kb3QtYWN0aXZlYCBdOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgdG9nZ2xlUG9pbnRBY3RpdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuYXR0cnMgJiYgdGhpcy5uekxvd2VyQm91bmQgIT09IG51bGwgJiYgdGhpcy5uelVwcGVyQm91bmQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuYXR0cnMuZm9yRWFjaChhdHRyID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBhdHRyLnZhbHVlO1xuICAgICAgICBjb25zdCBpc0FjdGl2ZSA9ICghdGhpcy5uekluY2x1ZGVkICYmIHZhbHVlID09PSB0aGlzLm56VXBwZXJCb3VuZCkgfHxcbiAgICAgICAgICAodGhpcy5uekluY2x1ZGVkICYmIHZhbHVlIDw9IHRoaXMubnpVcHBlckJvdW5kICYmIHZhbHVlID49IHRoaXMubnpMb3dlckJvdW5kKTtcbiAgICAgICAgYXR0ci5jbGFzc2VzWyBgJHt0aGlzLm56UHJlZml4Q2xzfS1kb3QtYWN0aXZlYCBdID0gaXNBY3RpdmU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIl19