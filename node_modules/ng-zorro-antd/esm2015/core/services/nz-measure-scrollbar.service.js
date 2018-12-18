/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { isNotNil } from '../util/check';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class NzMeasureScrollbarService {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.scrollbarMeasure = {
            position: 'absolute',
            top: '-9999px',
            width: '50px',
            height: '50px',
            overflow: 'scroll'
        };
        this.initScrollBarWidth();
    }
    /**
     * @return {?}
     */
    get scrollBarWidth() {
        if (isNotNil(this._scrollbarWidth)) {
            return this._scrollbarWidth;
        }
        this.initScrollBarWidth();
        return this._scrollbarWidth;
    }
    /**
     * @return {?}
     */
    initScrollBarWidth() {
        /** @type {?} */
        const scrollDiv = this.document.createElement('div');
        for (const scrollProp in this.scrollbarMeasure) {
            if (this.scrollbarMeasure.hasOwnProperty(scrollProp)) {
                scrollDiv.style[scrollProp] = this.scrollbarMeasure[scrollProp];
            }
        }
        this.document.body.appendChild(scrollDiv);
        /** @type {?} */
        const width = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        this.document.body.removeChild(scrollDiv);
        this._scrollbarWidth = width;
    }
}
NzMeasureScrollbarService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzMeasureScrollbarService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzMeasureScrollbarService.ngInjectableDef = i0.defineInjectable({ factory: function NzMeasureScrollbarService_Factory() { return new NzMeasureScrollbarService(i0.inject(i1.DOCUMENT)); }, token: NzMeasureScrollbarService, providedIn: "root" });
function NzMeasureScrollbarService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMeasureScrollbarService.prototype._scrollbarWidth;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.scrollbarMeasure;
    /** @type {?} */
    NzMeasureScrollbarService.prototype.document;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFLekMsTUFBTSxPQUFPLHlCQUF5Qjs7OztJQWdDcEMsWUFBc0MsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7Z0NBOUJ4QjtZQUN6QixRQUFRLEVBQUUsVUFBVTtZQUNwQixHQUFHLEVBQU8sU0FBUztZQUNuQixLQUFLLEVBQUssTUFBTTtZQUNoQixNQUFNLEVBQUksTUFBTTtZQUNoQixRQUFRLEVBQUUsUUFBUTtTQUNuQjtRQXlCQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7OztJQXhCRCxJQUFJLGNBQWM7UUFDaEIsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xDLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztTQUM3QjtRQUNELElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztLQUM3Qjs7OztJQUVELGtCQUFrQjs7UUFDaEIsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckQsS0FBSyxNQUFNLFVBQVUsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dCQUNwRCxTQUFTLENBQUMsS0FBSyxDQUFFLFVBQVUsQ0FBRSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBRSxVQUFVLENBQUUsQ0FBQzthQUNyRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDOztRQUMxQyxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxXQUFXLENBQUM7UUFDNUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO0tBQzlCOzs7WUFoQ0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7OzRDQWlDYyxNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi91dGlsL2NoZWNrJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSB7XG4gIHByaXZhdGUgX3Njcm9sbGJhcldpZHRoOiBudW1iZXI7XG4gIHByaXZhdGUgc2Nyb2xsYmFyTWVhc3VyZSA9IHtcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICB0b3AgICAgIDogJy05OTk5cHgnLFxuICAgIHdpZHRoICAgOiAnNTBweCcsXG4gICAgaGVpZ2h0ICA6ICc1MHB4JyxcbiAgICBvdmVyZmxvdzogJ3Njcm9sbCdcbiAgfTtcblxuICBnZXQgc2Nyb2xsQmFyV2lkdGgoKTogbnVtYmVyIHtcbiAgICBpZiAoaXNOb3ROaWwodGhpcy5fc2Nyb2xsYmFyV2lkdGgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fc2Nyb2xsYmFyV2lkdGg7XG4gICAgfVxuICAgIHRoaXMuaW5pdFNjcm9sbEJhcldpZHRoKCk7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGJhcldpZHRoO1xuICB9XG5cbiAgaW5pdFNjcm9sbEJhcldpZHRoKCk6IHZvaWQge1xuICAgIGNvbnN0IHNjcm9sbERpdiA9IHRoaXMuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yIChjb25zdCBzY3JvbGxQcm9wIGluIHRoaXMuc2Nyb2xsYmFyTWVhc3VyZSkge1xuICAgICAgaWYgKHRoaXMuc2Nyb2xsYmFyTWVhc3VyZS5oYXNPd25Qcm9wZXJ0eShzY3JvbGxQcm9wKSkge1xuICAgICAgICBzY3JvbGxEaXYuc3R5bGVbIHNjcm9sbFByb3AgXSA9IHRoaXMuc2Nyb2xsYmFyTWVhc3VyZVsgc2Nyb2xsUHJvcCBdO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICBjb25zdCB3aWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgICB0aGlzLmRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgICB0aGlzLl9zY3JvbGxiYXJXaWR0aCA9IHdpZHRoO1xuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvY3VtZW50OiBhbnkpIHtcbiAgICB0aGlzLmluaXRTY3JvbGxCYXJXaWR0aCgpO1xuICB9XG59XG4iXX0=