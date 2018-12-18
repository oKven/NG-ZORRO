/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function NzTreeNodeOptions() { }
function NzTreeNodeOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNodeOptions.prototype.title;
    /** @type {?} */
    NzTreeNodeOptions.prototype.key;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.icon;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.isLeaf;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.checked;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selected;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.selectable;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disabled;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.disableCheckbox;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.expanded;
    /** @type {?|undefined} */
    NzTreeNodeOptions.prototype.children;
    /* TODO: handle strange member:
    [ key: string ]: any;
    */
}
var NzTreeNode = /** @class */ (function () {
    function NzTreeNode(option, parent) {
        if (parent === void 0) { parent = null; }
        var _this = this;
        this.level = 0;
        this.title = option.title || '---';
        this.key = option.key || null;
        this.isLeaf = option.isLeaf || false;
        this.origin = option;
        this.children = [];
        this.parentNode = parent;
        // option params
        this.isChecked = option.checked || false;
        this.isSelectable = option.disabled || (option.selectable === false ? false : true);
        this.isDisabled = option.disabled || false;
        this.isDisableCheckbox = option.disableCheckbox || false;
        this.isExpanded = option.isLeaf ? false : (option.expanded || false);
        this.isAllChecked = option.checked || false;
        this.isHalfChecked = false;
        this.isSelected = (!option.disabled && option.selected) || false;
        this.isLoading = false;
        this.isMatched = false;
        /**
             * parent's checked status will affect children while initializing
             */
        if (parent) {
            this.level = parent.level + 1;
        }
        else {
            this.level = 0;
        }
        if (typeof (option.children) !== 'undefined' && option.children !== null) {
            option.children.forEach(function (nodeOptions) {
                if (option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                _this.children.push(new NzTreeNode(nodeOptions, _this));
            });
        }
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    NzTreeNode.prototype.setChecked = /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    function (checked, halfChecked) {
        if (checked === void 0) { checked = false; }
        if (halfChecked === void 0) { halfChecked = false; }
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setExpanded = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.origin.expanded = value;
        this.isExpanded = value;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeNode.prototype.setSelected = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.origin.selected = value;
        this.isSelected = value;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getParentNode = /**
     * @return {?}
     */
    function () {
        return this.parentNode;
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.getChildren = /**
     * @return {?}
     */
    function () {
        return this.children;
    };
    /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    NzTreeNode.prototype.addChildren = /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    function (children, childPos) {
        var _this = this;
        if (childPos === void 0) { childPos = -1; }
        if (!this.isLeaf) {
            children.forEach(function (node) {
                /** @type {?} */
                var refreshLevel = function (n) {
                    n.getChildren().forEach(function (c) {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                /** @type {?} */
                var child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = _this;
                }
                else {
                    child = new NzTreeNode(node, _this);
                }
                child.level = _this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? _this.children.push(child) : _this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) {
                }
            });
            this.origin.children = this.getChildren().map(function (v) { return v.origin; });
            // remove loading state
            this.isLoading = false;
        }
    };
    /**
     * @return {?}
     */
    NzTreeNode.prototype.clearChildren = /**
     * @return {?}
     */
    function () {
        this.children = [];
    };
    return NzTreeNode;
}());
export { NzTreeNode };
function NzTreeNode_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNode.prototype.title;
    /** @type {?} */
    NzTreeNode.prototype.key;
    /** @type {?} */
    NzTreeNode.prototype.level;
    /** @type {?} */
    NzTreeNode.prototype.children;
    /** @type {?} */
    NzTreeNode.prototype.isLeaf;
    /** @type {?} */
    NzTreeNode.prototype.origin;
    /** @type {?} */
    NzTreeNode.prototype.parentNode;
    /** @type {?} */
    NzTreeNode.prototype.isChecked;
    /** @type {?} */
    NzTreeNode.prototype.isSelectable;
    /** @type {?} */
    NzTreeNode.prototype.isDisabled;
    /** @type {?} */
    NzTreeNode.prototype.isDisableCheckbox;
    /** @type {?} */
    NzTreeNode.prototype.isExpanded;
    /** @type {?} */
    NzTreeNode.prototype.isHalfChecked;
    /** @type {?} */
    NzTreeNode.prototype.isAllChecked;
    /** @type {?} */
    NzTreeNode.prototype.isSelected;
    /** @type {?} */
    NzTreeNode.prototype.isLoading;
    /** @type {?} */
    NzTreeNode.prototype.isMatched;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLElBQUE7SUFxQkUsb0JBQVksTUFBeUIsRUFBRSxNQUF5QjtRQUF6Qix1QkFBQSxFQUFBLGFBQXlCO1FBQWhFLGlCQXFDQztRQXZERCxhQUFnQixDQUFDLENBQUM7UUFtQmhCLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUM7UUFDbkMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQztRQUM5QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDOztRQUV6QixJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUM7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQyxlQUFlLElBQUksS0FBSyxDQUFDO1FBQ3pELElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxD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Q2pCLENBQUMsQ0FBQztpQkFDSixDQUFDOztnQkFDRixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2pCLElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtvQkFDL0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFJLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELEtBQUssQ0FBQyxLQUFLLEdBQUcsS0FBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsSUFBSTtvQkFDRixRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztpQkFFeEY7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7aUJBQ1g7YUFDRixDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE1BQU0sRUFBUixDQUFRLENBQUMsQ0FBQzs7WUFFN0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7U0FDeEI7Ozs7O0lBR0ksa0NBQWE7Ozs7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7O3FCQTVJdkI7SUE4SUMsQ0FBQTtBQTdIRCxzQkE2SEMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgaW50ZXJmYWNlIE56VHJlZU5vZGVPcHRpb25zIHtcbiAgdGl0bGU6IHN0cmluZztcbiAga2V5OiBzdHJpbmc7XG4gIGljb24/OiBzdHJpbmc7XG4gIGlzTGVhZj86IGJvb2xlYW47XG4gIGNoZWNrZWQ/OiBib29sZWFuO1xuICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIHNlbGVjdGFibGU/OiBib29sZWFuO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG4gIGRpc2FibGVDaGVja2JveD86IGJvb2xlYW47XG4gIGV4cGFuZGVkPzogYm9vbGVhbjtcbiAgY2hpbGRyZW4/OiBOelRyZWVOb2RlT3B0aW9uc1tdO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgWyBrZXk6IHN0cmluZyBdOiBhbnk7XG59XG5cbmV4cG9ydCBjbGFzcyBOelRyZWVOb2RlIHtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGtleT86IHN0cmluZztcbiAgbGV2ZWw6IG51bWJlciA9IDA7XG4gIGNoaWxkcmVuOiBOelRyZWVOb2RlW107XG4gIGlzTGVhZjogYm9vbGVhbjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBvcmlnaW46IGFueTtcbiAgLy8gUGFyZW50IE5vZGVcbiAgcGFyZW50Tm9kZTogTnpUcmVlTm9kZTtcbiAgaXNDaGVja2VkOiBib29sZWFuO1xuICBpc1NlbGVjdGFibGU6IGJvb2xlYW47XG4gIGlzRGlzYWJsZWQ6IGJvb2xlYW47XG4gIGlzRGlzYWJsZUNoZWNrYm94OiBib29sZWFuO1xuICBpc0V4cGFuZGVkOiBib29sZWFuO1xuICBpc0hhbGZDaGVja2VkOiBib29sZWFuO1xuICBpc0FsbENoZWNrZWQ6IGJvb2xlYW47XG4gIGlzU2VsZWN0ZWQ6IGJvb2xlYW47XG4gIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgaXNNYXRjaGVkOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKG9wdGlvbjogTnpUcmVlTm9kZU9wdGlvbnMsIHBhcmVudDogTnpUcmVlTm9kZSA9IG51bGwpIHtcbiAgICB0aGlzLnRpdGxlID0gb3B0aW9uLnRpdGxlIHx8ICctLS0nO1xuICAgIHRoaXMua2V5ID0gb3B0aW9uLmtleSB8fCBudWxsO1xuICAgIHRoaXMuaXNMZWFmID0gb3B0aW9uLmlzTGVhZiB8fCBmYWxzZTtcbiAgICB0aGlzLm9yaWdpbiA9IG9wdGlvbjtcbiAgICB0aGlzLmNoaWxkcmVuID0gW107XG4gICAgdGhpcy5wYXJlbnROb2RlID0gcGFyZW50O1xuICAgIC8vIG9wdGlvbiBwYXJhbXNcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkIHx8IGZhbHNlO1xuICAgIHRoaXMuaXNTZWxlY3RhYmxlID0gb3B0aW9uLmRpc2FibGVkIHx8IChvcHRpb24uc2VsZWN0YWJsZSA9PT0gZmFsc2UgPyBmYWxzZSA6IHRydWUpO1xuICAgIHRoaXMuaXNEaXNhYmxlZCA9IG9wdGlvbi5kaXNhYmxlZCB8fCBmYWxzZTtcbiAgICB0aGlzLmlzRGlzYWJsZUNoZWNrYm94ID0gb3B0aW9uLmRpc2FibGVDaGVja2JveCB8fCBmYWxzZTtcbiAgICB0aGlzLmlzRXhwYW5kZWQgPSBvcHRpb24uaXNMZWFmID8gZmFsc2UgOiAob3B0aW9uLmV4cGFuZGVkIHx8IGZhbHNlKTtcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IG9wdGlvbi5jaGVja2VkIHx8IGZhbHNlO1xuICAgIHRoaXMuaXNIYWxmQ2hlY2tlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9ICghb3B0aW9uLmRpc2FibGVkICYmIG9wdGlvbi5zZWxlY3RlZCkgfHwgZmFsc2U7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzTWF0Y2hlZCA9IGZhbHNlO1xuXG4gICAgLyoqXG4gICAgICogcGFyZW50J3MgY2hlY2tlZCBzdGF0dXMgd2lsbCBhZmZlY3QgY2hpbGRyZW4gd2hpbGUgaW5pdGlhbGl6aW5nXG4gICAgICovXG4gICAgaWYgKHBhcmVudCkge1xuICAgICAgdGhpcy5sZXZlbCA9IHBhcmVudC5sZXZlbCArIDE7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIH1cbiAgICBpZiAodHlwZW9mKG9wdGlvbi5jaGlsZHJlbikgIT09ICd1bmRlZmluZWQnICYmIG9wdGlvbi5jaGlsZHJlbiAhPT0gbnVsbCkge1xuICAgICAgb3B0aW9uLmNoaWxkcmVuLmZvckVhY2goXG4gICAgICAgIChub2RlT3B0aW9ucykgPT4ge1xuICAgICAgICAgIGlmIChvcHRpb24uY2hlY2tlZCAmJiAhb3B0aW9uLmRpc2FibGVkICYmICFub2RlT3B0aW9ucy5kaXNhYmxlZCAmJiAhbm9kZU9wdGlvbnMuZGlzYWJsZUNoZWNrYm94KSB7XG4gICAgICAgICAgICBub2RlT3B0aW9ucy5jaGVja2VkID0gb3B0aW9uLmNoZWNrZWQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChuZXcgTnpUcmVlTm9kZShub2RlT3B0aW9ucywgdGhpcykpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXRDaGVja2VkKGNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSwgaGFsZkNoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xuICAgIHRoaXMub3JpZ2luLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuaXNDaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmlzQWxsQ2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5pc0hhbGZDaGVja2VkID0gaGFsZkNoZWNrZWQ7XG4gIH1cblxuICBwdWJsaWMgc2V0RXhwYW5kZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9yaWdpbi5leHBhbmRlZCA9IHZhbHVlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHNldFNlbGVjdGVkKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5vcmlnaW4uc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmlzU2VsZWN0ZWQgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRQYXJlbnROb2RlKCk6IE56VHJlZU5vZGUge1xuICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0Q2hpbGRyZW4oKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5jaGlsZHJlbjtcbiAgfVxuXG4gIC8qKlxuICAgKiDmlK/mjIHmjInntKLlvJXkvY3nva7mj5LlhaUs5Y+25a2Q6IqC54K55LiN5Y+v5re75YqgXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHB1YmxpYyBhZGRDaGlsZHJlbihjaGlsZHJlbjogYW55W10sIGNoaWxkUG9zOiBudW1iZXIgPSAtMSk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0xlYWYpIHtcbiAgICAgIGNoaWxkcmVuLmZvckVhY2goXG4gICAgICAgIChub2RlKSA9PiB7XG4gICAgICAgICAgY29uc3QgcmVmcmVzaExldmVsID0gKG46IE56VHJlZU5vZGUpID0+IHtcbiAgICAgICAgICAgIG4uZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgICBjLmxldmVsID0gYy5nZXRQYXJlbnROb2RlKCkubGV2ZWwgKyAxO1xuICAgICAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cbiAgICAgICAgICAgICAgYy5vcmlnaW4ubGV2ZWwgPSBjLmxldmVsO1xuICAgICAgICAgICAgICByZWZyZXNoTGV2ZWwoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGxldCBjaGlsZCA9IG5vZGU7XG4gICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgTnpUcmVlTm9kZSkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkID0gbmV3IE56VHJlZU5vZGUobm9kZSwgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNoaWxkLmxldmVsID0gdGhpcy5sZXZlbCArIDE7XG4gICAgICAgICAgY2hpbGQub3JpZ2luLmxldmVsID0gY2hpbGQubGV2ZWw7XG4gICAgICAgICAgcmVmcmVzaExldmVsKGNoaWxkKTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGRQb3MgPT09IC0xID8gdGhpcy5jaGlsZHJlbi5wdXNoKGNoaWxkKSA6IHRoaXMuY2hpbGRyZW4uc3BsaWNlKGNoaWxkUG9zLCAwLCBjaGlsZCk7XG4gICAgICAgICAgICAvLyBmbHVzaCBvcmlnaW5cbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIHRoaXMub3JpZ2luLmNoaWxkcmVuID0gdGhpcy5nZXRDaGlsZHJlbigpLm1hcCh2ID0+IHYub3JpZ2luKTtcbiAgICAgIC8vIHJlbW92ZSBsb2FkaW5nIHN0YXRlXG4gICAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBjbGVhckNoaWxkcmVuKCk6IHZvaWQge1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgfVxufVxuIl19