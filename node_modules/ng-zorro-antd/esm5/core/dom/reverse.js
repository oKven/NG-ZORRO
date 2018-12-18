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
    var children = parent.childNodes;
    /** @type {?} */
    var length = children.length;
    if (length) {
        /** @type {?} */
        var nodes_1 = [];
        children.forEach(function (node, i) { return nodes_1[i] = node; });
        while (length--) {
            parent.appendChild(nodes_1[length]);
        }
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZXJzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJjb3JlL2RvbS9yZXZlcnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLGlCQUFpQixDQUFDLE1BQW1COztJQUNuRCxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDOztJQUNuQyxJQUFJLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO0lBQzdCLElBQUksTUFBTSxFQUFFOztRQUNWLElBQU0sT0FBSyxHQUFXLEVBQUUsQ0FBQztRQUN6QixRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxFQUFFLENBQUMsSUFBSyxPQUFBLE9BQUssQ0FBRSxDQUFDLENBQUUsR0FBRyxJQUFJLEVBQWpCLENBQWlCLENBQUMsQ0FBQztRQUNqRCxPQUFPLE1BQU0sRUFBRSxFQUFFO1lBQ2YsTUFBTSxDQUFDLFdBQVcsQ0FBQyxPQUFLLENBQUUsTUFBTSxDQUFFLENBQUMsQ0FBQztTQUNyQztLQUNGO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcmV2ZXJzZUNoaWxkTm9kZXMocGFyZW50OiBIVE1MRWxlbWVudCk6IHZvaWQge1xuICBjb25zdCBjaGlsZHJlbiA9IHBhcmVudC5jaGlsZE5vZGVzO1xuICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICBpZiAobGVuZ3RoKSB7XG4gICAgY29uc3Qgbm9kZXM6IE5vZGVbXSA9IFtdO1xuICAgIGNoaWxkcmVuLmZvckVhY2goKG5vZGUsIGkpID0+IG5vZGVzWyBpIF0gPSBub2RlKTtcbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChub2Rlc1sgbGVuZ3RoIF0pO1xuICAgIH1cbiAgfVxufVxuIl19