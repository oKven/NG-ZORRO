/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { TemplateRef, Type } from '@angular/core';
/**
 * @param {?} value
 * @return {?}
 */
export function isNotNil(value) {
    return (typeof (value) !== 'undefined') && value !== null;
}
/**
 * 校验对象是否相等
 * @param {?} objA
 * @param {?} objB
 * @return {?}
 */
export function shallowEqual(objA, objB) {
    if (objA === objB) {
        return true;
    }
    if (typeof objA !== 'object' || !objA || typeof objB !== 'object' || !objB) {
        return false;
    }
    /** @type {?} */
    const keysA = Object.keys(objA);
    /** @type {?} */
    const keysB = Object.keys(objB);
    if (keysA.length !== keysB.length) {
        return false;
    }
    /** @type {?} */
    const bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
    // tslint:disable-next-line:prefer-for-of
    for (let idx = 0; idx < keysA.length; idx++) {
        /** @type {?} */
        const key = keysA[idx];
        if (!bHasOwnProperty(key)) {
            return false;
        }
        if (objA[key] !== objB[key]) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isInteger(value) {
    return typeof value === 'number' &&
        isFinite(value) &&
        Math.floor(value) === value;
}
/**
 * @param {?} element
 * @return {?}
 */
export function isEmpty(element) {
    /** @type {?} */
    const nodes = element.childNodes;
    for (let i = 0; i < nodes.length; i++) {
        if (filterNotEmptyNode(nodes.item(i))) {
            return false;
        }
    }
    return true;
}
/**
 * @param {?} node
 * @return {?}
 */
export function filterNotEmptyNode(node) {
    if (node) {
        if ((node.nodeType === 1) && ((/** @type {?} */ (node)).outerHTML.toString().trim().length !== 0)) {
            // ELEMENT_NODE
            return node;
        }
        else if ((node.nodeType === 3) && (node.textContent.toString().trim().length !== 0)) {
            // TEXT_NODE
            return node;
        }
        return null;
    }
    return null;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isNonEmptyString(value) {
    // tslint:disable-line:no-any
    return typeof value === 'string' && value !== '';
}
/**
 * @param {?} value
 * @return {?}
 */
export function isTemplateRef(value) {
    // tslint:disable-line:no-any
    return value instanceof TemplateRef;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isComponent(value) {
    // tslint:disable-line:no-any
    return value instanceof Type;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2suanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL2NoZWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7QUFHbEQsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFVO0lBQ2pDLE9BQU8sQ0FBQyxPQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssV0FBVyxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksQ0FBQztDQUMxRDs7Ozs7OztBQUdELE1BQU0sVUFBVSxZQUFZLENBQUMsSUFBUSxFQUFFLElBQVE7SUFDN0MsSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFO1FBQ2pCLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksQ0FBQyxJQUFJLEVBQUU7UUFDMUUsT0FBTyxLQUFLLENBQUM7S0FDZDs7SUFFRCxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUNoQyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBRWhDLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxLQUFLLENBQUMsTUFBTSxFQUFFO1FBQ2pDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7O0lBRUQsTUFBTSxlQUFlLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUduRSxLQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsRUFBRTs7UUFDM0MsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFFLEdBQUcsQ0FBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELElBQUksSUFBSSxDQUFFLEdBQUcsQ0FBRSxLQUFLLElBQUksQ0FBRSxHQUFHLENBQUUsRUFBRTtZQUMvQixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7OztBQUVELE1BQU0sVUFBVSxTQUFTLENBQUMsS0FBc0I7SUFDOUMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRO1FBQzlCLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDZixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLEtBQUssQ0FBQztDQUMvQjs7Ozs7QUFFRCxNQUFNLFVBQVUsT0FBTyxDQUFDLE9BQW9COztJQUMxQyxNQUFNLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDO0lBQ2pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQ3JDLElBQUksa0JBQWtCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ3JDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUNELE9BQU8sSUFBSSxDQUFDO0NBQ2I7Ozs7O0FBRUQsTUFBTSxVQUFVLGtCQUFrQixDQUFDLElBQVU7SUFDM0MsSUFBSSxJQUFJLEVBQUU7UUFDUixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLG1CQUFDLElBQW1CLEVBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxFQUFFOztZQUU3RixPQUFPLElBQUksQ0FBQztTQUNiO2FBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTs7WUFFckYsT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiOzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxLQUFVOztJQUN6QyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVEsSUFBSSxLQUFLLEtBQUssRUFBRSxDQUFDO0NBQ2xEOzs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBVTs7SUFDdEMsT0FBTyxLQUFLLFlBQVksV0FBVyxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBVTs7SUFDcEMsT0FBTyxLQUFLLFlBQVksSUFBSSxDQUFDO0NBQzlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90TmlsKHZhbHVlOiBhbnkpOiBib29sZWFuIHtcbiAgcmV0dXJuICh0eXBlb2YodmFsdWUpICE9PSAndW5kZWZpbmVkJykgJiYgdmFsdWUgIT09IG51bGw7XG59XG5cbi8qKiDmoKHpqozlr7nosaHmmK/lkKbnm7jnrYkgKi9cbmV4cG9ydCBmdW5jdGlvbiBzaGFsbG93RXF1YWwob2JqQToge30sIG9iakI6IHt9KTogYm9vbGVhbiB7XG4gIGlmIChvYmpBID09PSBvYmpCKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBpZiAodHlwZW9mIG9iakEgIT09ICdvYmplY3QnIHx8ICFvYmpBIHx8IHR5cGVvZiBvYmpCICE9PSAnb2JqZWN0JyB8fCAhb2JqQikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGNvbnN0IGtleXNBID0gT2JqZWN0LmtleXMob2JqQSk7XG4gIGNvbnN0IGtleXNCID0gT2JqZWN0LmtleXMob2JqQik7XG5cbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5c0IubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgY29uc3QgYkhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5iaW5kKG9iakIpO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXG4gIGZvciAobGV0IGlkeCA9IDA7IGlkeCA8IGtleXNBLmxlbmd0aDsgaWR4KyspIHtcbiAgICBjb25zdCBrZXkgPSBrZXlzQVsgaWR4IF07XG4gICAgaWYgKCFiSGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAob2JqQVsga2V5IF0gIT09IG9iakJbIGtleSBdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ludGVnZXIodmFsdWU6IHN0cmluZyB8IG51bWJlcik6IGJvb2xlYW4ge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyAmJlxuICAgIGlzRmluaXRlKHZhbHVlKSAmJlxuICAgIE1hdGguZmxvb3IodmFsdWUpID09PSB2YWx1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW1wdHkoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBib29sZWFuIHtcbiAgY29uc3Qgbm9kZXMgPSBlbGVtZW50LmNoaWxkTm9kZXM7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZmlsdGVyTm90RW1wdHlOb2RlKG5vZGVzLml0ZW0oaSkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyTm90RW1wdHlOb2RlKG5vZGU6IE5vZGUpOiBOb2RlIHtcbiAgaWYgKG5vZGUpIHtcbiAgICBpZiAoKG5vZGUubm9kZVR5cGUgPT09IDEpICYmICgobm9kZSBhcyBIVE1MRWxlbWVudCkub3V0ZXJIVE1MLnRvU3RyaW5nKCkudHJpbSgpLmxlbmd0aCAhPT0gMCkpIHtcbiAgICAgIC8vIEVMRU1FTlRfTk9ERVxuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfSBlbHNlIGlmICgobm9kZS5ub2RlVHlwZSA9PT0gMykgJiYgKG5vZGUudGV4dENvbnRlbnQudG9TdHJpbmcoKS50cmltKCkubGVuZ3RoICE9PSAwKSkge1xuICAgICAgLy8gVEVYVF9OT0RFXG4gICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc05vbkVtcHR5U3RyaW5nKHZhbHVlOiBhbnkpOiBib29sZWFuIHsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09ICcnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUZW1wbGF0ZVJlZih2YWx1ZTogYW55KTogYm9vbGVhbiB7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNDb21wb25lbnQodmFsdWU6IGFueSk6IGJvb2xlYW4geyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxuICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBUeXBlO1xufVxuIl19