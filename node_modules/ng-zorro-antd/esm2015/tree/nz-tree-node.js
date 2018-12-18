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
export class NzTreeNode {
    /**
     * @param {?} option
     * @param {?=} parent
     */
    constructor(option, parent = null) {
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
            option.children.forEach((nodeOptions) => {
                if (option.checked && !option.disabled && !nodeOptions.disabled && !nodeOptions.disableCheckbox) {
                    nodeOptions.checked = option.checked;
                }
                this.children.push(new NzTreeNode(nodeOptions, this));
            });
        }
    }
    /**
     * @param {?=} checked
     * @param {?=} halfChecked
     * @return {?}
     */
    setChecked(checked = false, halfChecked = false) {
        this.origin.checked = checked;
        this.isChecked = checked;
        this.isAllChecked = checked;
        this.isHalfChecked = halfChecked;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setExpanded(value) {
        this.origin.expanded = value;
        this.isExpanded = value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setSelected(value) {
        this.origin.selected = value;
        this.isSelected = value;
    }
    /**
     * @return {?}
     */
    getParentNode() {
        return this.parentNode;
    }
    /**
     * @return {?}
     */
    getChildren() {
        return this.children;
    }
    /**
     * 支持按索引位置插入,叶子节点不可添加
     * @param {?} children
     * @param {?=} childPos
     * @return {?}
     */
    addChildren(children, childPos = -1) {
        if (!this.isLeaf) {
            children.forEach((node) => {
                /** @type {?} */
                const refreshLevel = (n) => {
                    n.getChildren().forEach(c => {
                        c.level = c.getParentNode().level + 1;
                        // flush origin
                        c.origin.level = c.level;
                        refreshLevel(c);
                    });
                };
                /** @type {?} */
                let child = node;
                if (child instanceof NzTreeNode) {
                    child.parentNode = this;
                }
                else {
                    child = new NzTreeNode(node, this);
                }
                child.level = this.level + 1;
                child.origin.level = child.level;
                refreshLevel(child);
                try {
                    childPos === -1 ? this.children.push(child) : this.children.splice(childPos, 0, child);
                    // flush origin
                }
                catch (e) {
                }
            });
            this.origin.children = this.getChildren().map(v => v.origin);
            // remove loading state
            this.isLoading = false;
        }
    }
    /**
     * @return {?}
     */
    clearChildren() {
        this.children = [];
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyZWUvbnotdHJlZS1ub2RlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJBLE1BQU0sT0FBTyxVQUFVOzs7OztJQXFCckIsWUFBWSxNQUF5QixFQUFFLFNBQXFCLElBQUk7UUFsQmhFLGFBQWdCLENBQUMsQ0FBQztRQW1CaEIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQztRQUNuQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7UUFDckMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUM7O1FBRXpCLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsUUFBUSxJQUFJLEtBQUssQ0FBQztRQUMzQyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDLGVBQWUsSUFBSSxLQUFLLENBQUM7UUFDekQsSUFBSSxDQUFDLFVBQVUsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENB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LElBQUksS0FBSyxZQUFZLFVBQVUsRUFBRTtvQkFDL0IsS0FBSyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLEtBQUssR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQ3BDO2dCQUNELEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7Z0JBQzdCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7Z0JBQ2pDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDcEIsSUFBSTtvQkFDRixRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDOztpQkFFeEY7Z0JBQUMsT0FBTyxDQUFDLEVBQUU7aUJBQ1g7YUFDRixDQUFDLENBQUM7WUFDTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDOztZQUU3RCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztTQUN4Qjs7Ozs7SUFHSSxhQUFhO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDOztDQUV0QiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgTnpUcmVlTm9kZU9wdGlvbnMge1xuICB0aXRsZTogc3RyaW5nO1xuICBrZXk6IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgaXNMZWFmPzogYm9vbGVhbjtcbiAgY2hlY2tlZD86IGJvb2xlYW47XG4gIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgc2VsZWN0YWJsZT86IGJvb2xlYW47XG4gIGRpc2FibGVkPzogYm9vbGVhbjtcbiAgZGlzYWJsZUNoZWNrYm94PzogYm9vbGVhbjtcbiAgZXhwYW5kZWQ/OiBib29sZWFuO1xuICBjaGlsZHJlbj86IE56VHJlZU5vZGVPcHRpb25zW107XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBbIGtleTogc3RyaW5nIF06IGFueTtcbn1cblxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGUge1xuICB0aXRsZT86IHN0cmluZztcbiAga2V5Pzogc3RyaW5nO1xuICBsZXZlbDogbnVtYmVyID0gMDtcbiAgY2hpbGRyZW46IE56VHJlZU5vZGVbXTtcbiAgaXNMZWFmOiBib29sZWFuO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIG9yaWdpbjogYW55O1xuICAvLyBQYXJlbnQgTm9kZVxuICBwYXJlbnROb2RlOiBOelRyZWVOb2RlO1xuICBpc0NoZWNrZWQ6IGJvb2xlYW47XG4gIGlzU2VsZWN0YWJsZTogYm9vbGVhbjtcbiAgaXNEaXNhYmxlZDogYm9vbGVhbjtcbiAgaXNEaXNhYmxlQ2hlY2tib3g6IGJvb2xlYW47XG4gIGlzRXhwYW5kZWQ6IGJvb2xlYW47XG4gIGlzSGFsZkNoZWNrZWQ6IGJvb2xlYW47XG4gIGlzQWxsQ2hlY2tlZDogYm9vbGVhbjtcbiAgaXNTZWxlY3RlZDogYm9vbGVhbjtcbiAgaXNMb2FkaW5nOiBib29sZWFuO1xuICBpc01hdGNoZWQ6IGJvb2xlYW47XG5cbiAgY29uc3RydWN0b3Iob3B0aW9uOiBOelRyZWVOb2RlT3B0aW9ucywgcGFyZW50OiBOelRyZWVOb2RlID0gbnVsbCkge1xuICAgIHRoaXMudGl0bGUgPSBvcHRpb24udGl0bGUgfHwgJy0tLSc7XG4gICAgdGhpcy5rZXkgPSBvcHRpb24ua2V5IHx8IG51bGw7XG4gICAgdGhpcy5pc0xlYWYgPSBvcHRpb24uaXNMZWFmIHx8IGZhbHNlO1xuICAgIHRoaXMub3JpZ2luID0gb3B0aW9uO1xuICAgIHRoaXMuY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLnBhcmVudE5vZGUgPSBwYXJlbnQ7XG4gICAgLy8gb3B0aW9uIHBhcmFtc1xuICAgIHRoaXMuaXNDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XG4gICAgdGhpcy5pc1NlbGVjdGFibGUgPSBvcHRpb24uZGlzYWJsZWQgfHwgKG9wdGlvbi5zZWxlY3RhYmxlID09PSBmYWxzZSA/IGZhbHNlIDogdHJ1ZSk7XG4gICAgdGhpcy5pc0Rpc2FibGVkID0gb3B0aW9uLmRpc2FibGVkIHx8IGZhbHNlO1xuICAgIHRoaXMuaXNEaXNhYmxlQ2hlY2tib3ggPSBvcHRpb24uZGlzYWJsZUNoZWNrYm94IHx8IGZhbHNlO1xuICAgIHRoaXMuaXNFeHBhbmRlZCA9IG9wdGlvbi5pc0xlYWYgPyBmYWxzZSA6IChvcHRpb24uZXhwYW5kZWQgfHwgZmFsc2UpO1xuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gb3B0aW9uLmNoZWNrZWQgfHwgZmFsc2U7XG4gICAgdGhpcy5pc0hhbGZDaGVja2VkID0gZmFsc2U7XG4gICAgdGhpcy5pc1NlbGVjdGVkID0gKCFvcHRpb24uZGlzYWJsZWQgJiYgb3B0aW9uLnNlbGVjdGVkKSB8fCBmYWxzZTtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNNYXRjaGVkID0gZmFsc2U7XG5cbiAgICAvKipcbiAgICAgKiBwYXJlbnQncyBjaGVja2VkIHN0YXR1cyB3aWxsIGFmZmVjdCBjaGlsZHJlbiB3aGlsZSBpbml0aWFsaXppbmdcbiAgICAgKi9cbiAgICBpZiAocGFyZW50KSB7XG4gICAgICB0aGlzLmxldmVsID0gcGFyZW50LmxldmVsICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sZXZlbCA9IDA7XG4gICAgfVxuICAgIGlmICh0eXBlb2Yob3B0aW9uLmNoaWxkcmVuKSAhPT0gJ3VuZGVmaW5lZCcgJiYgb3B0aW9uLmNoaWxkcmVuICE9PSBudWxsKSB7XG4gICAgICBvcHRpb24uY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgICAgKG5vZGVPcHRpb25zKSA9PiB7XG4gICAgICAgICAgaWYgKG9wdGlvbi5jaGVja2VkICYmICFvcHRpb24uZGlzYWJsZWQgJiYgIW5vZGVPcHRpb25zLmRpc2FibGVkICYmICFub2RlT3B0aW9ucy5kaXNhYmxlQ2hlY2tib3gpIHtcbiAgICAgICAgICAgIG5vZGVPcHRpb25zLmNoZWNrZWQgPSBvcHRpb24uY2hlY2tlZDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKG5ldyBOelRyZWVOb2RlKG5vZGVPcHRpb25zLCB0aGlzKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHNldENoZWNrZWQoY2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlLCBoYWxmQ2hlY2tlZDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgdGhpcy5vcmlnaW4uY2hlY2tlZCA9IGNoZWNrZWQ7XG4gICAgdGhpcy5pc0NoZWNrZWQgPSBjaGVja2VkO1xuICAgIHRoaXMuaXNBbGxDaGVja2VkID0gY2hlY2tlZDtcbiAgICB0aGlzLmlzSGFsZkNoZWNrZWQgPSBoYWxmQ2hlY2tlZDtcbiAgfVxuXG4gIHB1YmxpYyBzZXRFeHBhbmRlZCh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMub3JpZ2luLmV4cGFuZGVkID0gdmFsdWU7XG4gICAgdGhpcy5pc0V4cGFuZGVkID0gdmFsdWU7XG4gIH1cblxuICBwdWJsaWMgc2V0U2VsZWN0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLm9yaWdpbi5zZWxlY3RlZCA9IHZhbHVlO1xuICAgIHRoaXMuaXNTZWxlY3RlZCA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIGdldFBhcmVudE5vZGUoKTogTnpUcmVlTm9kZSB7XG4gICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDaGlsZHJlbigpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLmNoaWxkcmVuO1xuICB9XG5cbiAgLyoqXG4gICAqIOaUr+aMgeaMiee0ouW8leS9jee9ruaPkuWFpSzlj7blrZDoioLngrnkuI3lj6/mt7vliqBcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHVibGljIGFkZENoaWxkcmVuKGNoaWxkcmVuOiBhbnlbXSwgY2hpbGRQb3M6IG51bWJlciA9IC0xKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzTGVhZikge1xuICAgICAgY2hpbGRyZW4uZm9yRWFjaChcbiAgICAgICAgKG5vZGUpID0+IHtcbiAgICAgICAgICBjb25zdCByZWZyZXNoTGV2ZWwgPSAobjogTnpUcmVlTm9kZSkgPT4ge1xuICAgICAgICAgICAgbi5nZXRDaGlsZHJlbigpLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgIGMubGV2ZWwgPSBjLmdldFBhcmVudE5vZGUoKS5sZXZlbCArIDE7XG4gICAgICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxuICAgICAgICAgICAgICBjLm9yaWdpbi5sZXZlbCA9IGMubGV2ZWw7XG4gICAgICAgICAgICAgIHJlZnJlc2hMZXZlbChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgICAgbGV0IGNoaWxkID0gbm9kZTtcbiAgICAgICAgICBpZiAoY2hpbGQgaW5zdGFuY2VvZiBOelRyZWVOb2RlKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2hpbGQgPSBuZXcgTnpUcmVlTm9kZShub2RlLCB0aGlzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgY2hpbGQubGV2ZWwgPSB0aGlzLmxldmVsICsgMTtcbiAgICAgICAgICBjaGlsZC5vcmlnaW4ubGV2ZWwgPSBjaGlsZC5sZXZlbDtcbiAgICAgICAgICByZWZyZXNoTGV2ZWwoY2hpbGQpO1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZFBvcyA9PT0gLTEgPyB0aGlzLmNoaWxkcmVuLnB1c2goY2hpbGQpIDogdGhpcy5jaGlsZHJlbi5zcGxpY2UoY2hpbGRQb3MsIDAsIGNoaWxkKTtcbiAgICAgICAgICAgIC8vIGZsdXNoIG9yaWdpblxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgdGhpcy5vcmlnaW4uY2hpbGRyZW4gPSB0aGlzLmdldENoaWxkcmVuKCkubWFwKHYgPT4gdi5vcmlnaW4pO1xuICAgICAgLy8gcmVtb3ZlIGxvYWRpbmcgc3RhdGVcbiAgICAgIHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGNsZWFyQ2hpbGRyZW4oKTogdm9pZCB7XG4gICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICB9XG59XG4iXX0=