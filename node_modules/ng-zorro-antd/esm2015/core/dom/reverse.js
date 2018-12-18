/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} parent
 * @return {?}
 */
export function reverseChildNodes(parent) {
    /** @type {?} */
    const children = parent.childNodes;
    /** @type {?} */
    let length = children.length;
    if (length) {
        /** @type {?} */
        const nodes = [];
        children.forEach((node, i) => nodes[i] = node);
        while (length--) {
            parent.appendChild(nodes[length]);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL2RvbS9yZXZlcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztJQUNuRCxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDOztJQUNuQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksTUFBTSxFQUFFOztRQUNWLE1BQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFFLENBQUMsQ0FBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2pELE9BQU8sTUFBTSxFQUFFLEVBQUU7WUFDZixNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBRSxNQUFNLENBQUUsQ0FBQyxDQUFDO1NBQ3JDO0tBQ0Y7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiByZXZlcnNlQ2hpbGROb2RlcyhwYXJlbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIGNvbnN0IGNoaWxkcmVuID0gcGFyZW50LmNoaWxkTm9kZXM7XG4gIGxldCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gIGlmIChsZW5ndGgpIHtcbiAgICBjb25zdCBub2RlczogTm9kZVtdID0gW107XG4gICAgY2hpbGRyZW4uZm9yRWFjaCgobm9kZSwgaSkgPT4gbm9kZXNbIGkgXSA9IG5vZGUpO1xuICAgIHdoaWxlIChsZW5ndGgtLSkge1xuICAgICAgcGFyZW50LmFwcGVuZENoaWxkKG5vZGVzWyBsZW5ndGggXSk7XG4gICAgfVxuICB9XG59XG4iXX0=