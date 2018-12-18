/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Injectable } from '@angular/core';
export class NzSliderService {
    /**
     * @param {?} e
     * @return {?}
     */
    pauseEvent(e) {
        e.stopPropagation();
        e.preventDefault();
    }
    /**
     * @param {?} num
     * @return {?}
     */
    getPrecision(num) {
        /** @type {?} */
        const numStr = num.toString();
        /** @type {?} */
        const dotIndex = numStr.indexOf('.');
        return dotIndex >= 0 ? numStr.length - dotIndex - 1 : 0;
    }
    /**
     * @template T
     * @param {?} arr
     * @return {?}
     */
    cloneArray(arr) {
        return arr.slice();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    isNotTouchEvent(e) {
        return !e.touches || e.touches.length > 1 ||
            (e.type.toLowerCase() === 'touchend' && e.touches.length > 0);
    }
    /**
     * @param {?} min
     * @param {?} max
     * @param {?} value
     * @return {?}
     */
    valueToOffset(min, max, value) {
        return (value - min) / (max - min) * 100;
    }
    /**
     * @param {?} num
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    correctNumLimit(num, min, max) {
        /** @type {?} */
        let res = +num;
        if (isNaN(res)) {
            return min;
        }
        if (num < min) {
            res = min;
        }
        else if (num > max) {
            res = max;
        }
        return res;
    }
    /**
     * get the offset of an element relative to the document (Reference from jquery's offset())
     * @param {?} elem HTMLElement ref
     * @return {?}
     */
    getElementOffset(elem) {
        // Return zeros for disconnected and hidden (display: none) elements (gh-2310)
        // Support: IE <=11 only
        // Running getBoundingClientRect on a
        // disconnected node in IE throws an error
        if (!elem.getClientRects().length) {
            return { top: 0, left: 0 };
        }
        /** @type {?} */
        const rect = elem.getBoundingClientRect();
        /** @type {?} */
        const win = elem.ownerDocument.defaultView;
        return {
            top: rect.top + win.pageYOffset,
            left: rect.left + win.pageXOffset
        };
    }
}
NzSliderService.decorators = [
    { type: Injectable }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2xpZGVyL256LXNsaWRlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRzNDLE1BQU0sT0FBTyxlQUFlOzs7OztJQUUxQixVQUFVLENBQUMsQ0FBUTtRQUNqQixDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDcEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO0tBQ3BCOzs7OztJQUVELFlBQVksQ0FBQyxHQUFXOztRQUN0QixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7O1FBQzlCLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDckMsT0FBTyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN6RDs7Ozs7O0lBRUQsVUFBVSxDQUFJLEdBQVE7UUFDcEIsT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLENBQUM7S0FDcEI7Ozs7O0lBRUQsZUFBZSxDQUFDLENBQWE7UUFDM0IsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQztZQUN2QyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0tBQ2pFOzs7Ozs7O0lBR0QsYUFBYSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYTtRQUNuRCxPQUFPLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztLQUMxQzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7O1FBQ25ELElBQUksR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ2YsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFBRSxPQUFPLEdBQUcsQ0FBQztTQUFFO1FBQy9CLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUFFLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FBRTthQUFNLElBQUksR0FBRyxHQUFHLEdBQUcsRUFBRTtZQUFFLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FBRTtRQUNoRSxPQUFPLEdBQUcsQ0FBQztLQUNaOzs7Ozs7SUFNRCxnQkFBZ0IsQ0FBQyxJQUFpQjs7Ozs7UUFLaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFDakMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQzVCOztRQUVELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDOztRQUMxQyxNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUMzQyxPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFdBQVc7WUFDL0IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLFdBQVc7U0FDbEMsQ0FBQztLQUNIOzs7WUF0REYsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE56U2xpZGVyU2VydmljZSB7XG5cbiAgcGF1c2VFdmVudChlOiBFdmVudCk6IHZvaWQge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgZ2V0UHJlY2lzaW9uKG51bTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBudW1TdHIgPSBudW0udG9TdHJpbmcoKTtcbiAgICBjb25zdCBkb3RJbmRleCA9IG51bVN0ci5pbmRleE9mKCcuJyk7XG4gICAgcmV0dXJuIGRvdEluZGV4ID49IDAgPyBudW1TdHIubGVuZ3RoIC0gZG90SW5kZXggLSAxIDogMDtcbiAgfVxuXG4gIGNsb25lQXJyYXk8VD4oYXJyOiBUW10pOiBUW10ge1xuICAgIHJldHVybiBhcnIuc2xpY2UoKTtcbiAgfVxuXG4gIGlzTm90VG91Y2hFdmVudChlOiBUb3VjaEV2ZW50KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICFlLnRvdWNoZXMgfHwgZS50b3VjaGVzLmxlbmd0aCA+IDEgfHxcbiAgICAgIChlLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3RvdWNoZW5kJyAmJiBlLnRvdWNoZXMubGVuZ3RoID4gMCk7XG4gIH1cblxuICAvLyBjb252ZXJ0IHZhbHVlIHRvIG9mZnNldCBpbiBwZXJjZW50XG4gIHZhbHVlVG9PZmZzZXQobWluOiBudW1iZXIsIG1heDogbnVtYmVyLCB2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gKHZhbHVlIC0gbWluKSAvIChtYXggLSBtaW4pICogMTAwO1xuICB9XG5cbiAgY29ycmVjdE51bUxpbWl0KG51bTogbnVtYmVyLCBtaW46IG51bWJlciwgbWF4OiBudW1iZXIpOiBudW1iZXIge1xuICAgIGxldCByZXMgPSArbnVtO1xuICAgIGlmIChpc05hTihyZXMpKSB7IHJldHVybiBtaW47IH1cbiAgICBpZiAobnVtIDwgbWluKSB7IHJlcyA9IG1pbjsgfSBlbHNlIGlmIChudW0gPiBtYXgpIHsgcmVzID0gbWF4OyB9XG4gICAgcmV0dXJuIHJlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgdGhlIG9mZnNldCBvZiBhbiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBkb2N1bWVudCAoUmVmZXJlbmNlIGZyb20ganF1ZXJ5J3Mgb2Zmc2V0KCkpXG4gICAqIEBwYXJhbSBlbGVtIEhUTUxFbGVtZW50IHJlZlxuICAgKi9cbiAgZ2V0RWxlbWVudE9mZnNldChlbGVtOiBIVE1MRWxlbWVudCk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcbiAgICAvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcbiAgICAvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcbiAgICAvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhXG4gICAgLy8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXG4gICAgaWYgKCFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4geyB0b3A6IDAsIGxlZnQ6IDAgfTtcbiAgICB9XG4gICAgLy8gR2V0IGRvY3VtZW50LXJlbGF0aXZlIHBvc2l0aW9uIGJ5IGFkZGluZyB2aWV3cG9ydCBzY3JvbGwgdG8gdmlld3BvcnQtcmVsYXRpdmUgZ0JDUlxuICAgIGNvbnN0IHJlY3QgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHdpbiA9IGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiByZWN0LnRvcCArIHdpbi5wYWdlWU9mZnNldCxcbiAgICAgIGxlZnQ6IHJlY3QubGVmdCArIHdpbi5wYWdlWE9mZnNldFxuICAgIH07XG4gIH1cblxufVxuIl19