/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class CssUnitPipe {
    /**
     * @param {?} value
     * @param {?=} defaultUnit
     * @return {?}
     */
    transform(value, defaultUnit = 'px') {
        /** @type {?} */
        const formatted = +value; // force convert
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
}
CssUnitPipe.decorators = [
    { type: Pipe, args: [{
                name: 'toCssUnit'
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtb2RhbC9jc3MtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQztBQU1wRCxNQUFNLE9BQU8sV0FBVzs7Ozs7O0lBQ3RCLFNBQVMsQ0FBQyxLQUFzQixFQUFFLGNBQXNCLElBQUk7O1FBQzFELE1BQU0sU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDO1FBQ3pCLE9BQU8sS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLFNBQVMsR0FBRyxXQUFXLEVBQUUsQ0FBQztLQUNyRTs7O1lBUkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxXQUFXO2FBQ2xCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICd0b0Nzc1VuaXQnXG59KVxuXG5leHBvcnQgY2xhc3MgQ3NzVW5pdFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGRlZmF1bHRVbml0OiBzdHJpbmcgPSAncHgnKTogc3RyaW5nIHtcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSArdmFsdWU7IC8vIGZvcmNlIGNvbnZlcnRcbiAgICByZXR1cm4gaXNOYU4oZm9ybWF0dGVkKSA/IGAke3ZhbHVlfWAgOiBgJHtmb3JtYXR0ZWR9JHtkZWZhdWx0VW5pdH1gO1xuICB9XG59XG4iXX0=