/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { toBoolean } from '../core/util/convert';
var NzMenuDirective = /** @class */ (function () {
    function NzMenuDirective(el) {
        this.el = el;
        this._selectable = true;
        this._inlineCollapsed = false;
        this._inDropDown = false;
        /**
         * view init flat
         */
        this.isInit = false;
        /**
         * opened index of array
         */
        this.subMenusOpenIndex = [];
        /**
         * collection of menu item
         */
        this.menuItems = [];
        /**
         * collection of sub menu
         */
        this.subMenus = [];
        this.nzTheme = 'light';
        this.nzInlineIndent = 24;
        this.nzMode = 'vertical';
        this.nzClick = new EventEmitter();
    }
    Object.defineProperty(NzMenuDirective.prototype, "nzInDropDown", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inDropDown;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            var _this = this;
            this._inDropDown = toBoolean(value);
            this.nzSelectable = !this._inDropDown;
            this.menuItems.forEach(function (menu) { return menu.isInDropDown = _this._inDropDown; });
            this.subMenus.forEach(function (subMenu) { return subMenu.isInDropDown = _this._inDropDown; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "nzSelectable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._selectable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._selectable = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "nzInlineCollapsed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._inlineCollapsed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._inlineCollapsed = toBoolean(value);
            if (this.isInit) {
                this.updateInlineCollapse();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.updateInlineCollapse = /**
     * @return {?}
     */
    function () {
        if (this._inlineCollapsed) {
            this.hideSubMenus();
            this.nzMode = 'vertical';
        }
        else {
            this.reductionSubMenus();
            this.nzMode = this.cacheMode;
        }
    };
    Object.defineProperty(NzMenuDirective.prototype, "isInDropDownClass", {
        /** define host class */
        get: /**
         * define host class
         * @return {?}
         */
        function () {
            return this.nzInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "isNotInDropDownClass", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzInDropDown;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setDropDownThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzInDropDown && (this.nzTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setDropDownThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzInDropDown && (this.nzTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuThemeLightClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzTheme === 'light');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuThemeDarkClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzTheme === 'dark');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuVerticalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'vertical');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuHorizontalClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'horizontal');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuInlineClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode === 'inline');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzMenuDirective.prototype, "setMenuInlineCollapsedClass", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzInDropDown) && (this.nzMode !== 'horizontal') && this.nzInlineCollapsed;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.cacheMode = this.nzMode;
        this.updateInlineCollapse();
    };
    /** trigger when menu item clicked */
    /**
     * trigger when menu item clicked
     * @return {?}
     */
    NzMenuDirective.prototype.clearAllSelected = /**
     * trigger when menu item clicked
     * @return {?}
     */
    function () {
        this.menuItems.forEach(function (menu) { return menu.nzSelected = false; });
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.hideSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex = [];
        this.subMenus.forEach(function (submenu, index) {
            if (submenu.nzOpen) {
                _this.subMenusOpenIndex.push(index);
            }
            submenu.nzOpen = false;
        });
    };
    /**
     * @return {?}
     */
    NzMenuDirective.prototype.reductionSubMenus = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.subMenusOpenIndex.forEach(function (i) { return _this.subMenus[i].nzOpen = true; });
        this.subMenusOpenIndex = [];
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzMenuDirective.prototype.clickItem = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzClick.emit(value);
    };
    NzMenuDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-menu]'
                },] }
    ];
    /** @nocollapse */
    NzMenuDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    NzMenuDirective.propDecorators = {
        nzTheme: [{ type: Input }],
        nzInlineIndent: [{ type: Input }],
        nzMode: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzInDropDown: [{ type: Input }],
        nzSelectable: [{ type: Input }],
        nzInlineCollapsed: [{ type: Input }],
        isInDropDownClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu',] }, { type: HostBinding, args: ['class.ant-menu-dropdown-vertical',] }, { type: HostBinding, args: ['class.ant-dropdown-menu-root',] }],
        isNotInDropDownClass: [{ type: HostBinding, args: ['class.ant-menu',] }, { type: HostBinding, args: ['class.ant-menu-root',] }],
        setDropDownThemeLightClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-light',] }],
        setDropDownThemeDarkClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-dark',] }],
        setMenuThemeLightClass: [{ type: HostBinding, args: ['class.ant-menu-light',] }],
        setMenuThemeDarkClass: [{ type: HostBinding, args: ['class.ant-menu-dark',] }],
        setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-vertical',] }],
        setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-horizontal',] }],
        setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-inline',] }],
        setMenuInlineCollapsedClass: [{ type: HostBinding, args: ['class.ant-menu-inline-collapsed',] }]
    };
    return NzMenuDirective;
}());
export { NzMenuDirective };
function NzMenuDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzMenuDirective.prototype._selectable;
    /** @type {?} */
    NzMenuDirective.prototype._inlineCollapsed;
    /** @type {?} */
    NzMenuDirective.prototype._inDropDown;
    /**
     * view init flat
     * @type {?}
     */
    NzMenuDirective.prototype.isInit;
    /**
     * cache mode
     * @type {?}
     */
    NzMenuDirective.prototype.cacheMode;
    /**
     * opened index of array
     * @type {?}
     */
    NzMenuDirective.prototype.subMenusOpenIndex;
    /**
     * collection of menu item
     * @type {?}
     */
    NzMenuDirective.prototype.menuItems;
    /**
     * collection of sub menu
     * @type {?}
     */
    NzMenuDirective.prototype.subMenus;
    /** @type {?} */
    NzMenuDirective.prototype.nzTheme;
    /** @type {?} */
    NzMenuDirective.prototype.nzInlineIndent;
    /** @type {?} */
    NzMenuDirective.prototype.nzMode;
    /** @type {?} */
    NzMenuDirective.prototype.nzClick;
    /** @type {?} */
    NzMenuDirective.prototype.el;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1tZW51LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7SUFnSS9DLHlCQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTsyQkFwSFgsSUFBSTtnQ0FDQyxLQUFLOzJCQUNWLEtBQUs7Ozs7c0JBRVYsS0FBSzs7OztpQ0FJTSxFQUFFOzs7O1FBRzlCLGlCQUFtQyxFQUFFLENBQUM7Ozs7UUFFdEMsZ0JBQWlDLEVBQUUsQ0FBQztRQUNwQyxlQUFxQyxPQUFPLENBQUM7UUFDN0Msc0JBQTBCLEVBQUUsQ0FBQztRQUM3QixjQUEwQixVQUFVLENBQUM7UUFDckMsZUFBNkIsSUFBSSxZQUFZLEVBQXVCLENBQUM7S0FxR3BFO0lBbkdELHNCQUNJLHlDQUFZOzs7O1FBT2hCO1lBQ0UsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3pCOzs7OztRQVZELFVBQ2lCLEtBQWM7WUFEL0IsaUJBTUM7WUFKQyxJQUFJLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLFdBQVcsRUFBcEMsQ0FBb0MsQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUEsT0FBTyxJ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LFFBQVEsRUFBRSxXQUFXO2lCQUN0Qjs7OztnQkFoQkMsVUFBVTs7OzBCQWlDVCxLQUFLO2lDQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxNQUFNOytCQUVOLEtBQUs7K0JBWUwsS0FBSztvQ0FTTCxLQUFLO29DQXVCTCxXQUFXLFNBQUMseUJBQXlCLGNBQ3JDLFdBQVcsU0FBQyxrQ0FBa0MsY0FDOUMsV0FBVyxTQUFDLDhCQUE4Qjt1Q0FLMUMsV0FBVyxTQUFDLGdCQUFnQixjQUM1QixXQUFXLFNBQUMscUJBQXFCOzZDQUtqQyxXQUFXLFNBQUMsK0JBQStCOzRDQUszQyxXQUFXLFNBQUMsOEJBQThCO3lDQUsxQyxXQUFXLFNBQUMsc0JBQXNCO3dDQUtsQyxXQUFXLFNBQUMscUJBQXFCO3VDQUtqQyxXQUFXLFNBQUMseUJBQXlCO3lDQUtyQyxXQUFXLFNBQUMsMkJBQTJCO3FDQUt2QyxXQUFXLFNBQUMsdUJBQXVCOzhDQUtuQyxXQUFXLFNBQUMsaUNBQWlDOzswQkFySWhEOztTQXFCYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56TWVudUl0ZW1EaXJlY3RpdmUgfSBmcm9tICcuL256LW1lbnUtaXRlbS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpTdWJNZW51Q29tcG9uZW50IH0gZnJvbSAnLi9uei1zdWJtZW51LmNvbXBvbmVudCc7XG5cbmV4cG9ydCB0eXBlIE56TW9kZSA9ICd2ZXJ0aWNhbCcgfCAnaG9yaXpvbnRhbCcgfCAnaW5saW5lJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW256LW1lbnVdJ1xufSlcblxuZXhwb3J0IGNsYXNzIE56TWVudURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9zZWxlY3RhYmxlID0gdHJ1ZTtcbiAgcHJpdmF0ZSBfaW5saW5lQ29sbGFwc2VkID0gZmFsc2U7XG4gIHByaXZhdGUgX2luRHJvcERvd24gPSBmYWxzZTtcbiAgLyoqIHZpZXcgaW5pdCBmbGF0ICovXG4gIHByaXZhdGUgaXNJbml0ID0gZmFsc2U7XG4gIC8qKiBjYWNoZSBtb2RlICovXG4gIHByaXZhdGUgY2FjaGVNb2RlOiBOek1vZGU7XG4gIC8qKiBvcGVuZWQgaW5kZXggb2YgYXJyYXkgKi9cbiAgcHJpdmF0ZSBzdWJNZW51c09wZW5JbmRleCA9IFtdO1xuXG4gIC8qKiBjb2xsZWN0aW9uIG9mIG1lbnUgaXRlbSAqL1xuICBtZW51SXRlbXM6IE56TWVudUl0ZW1EaXJlY3RpdmVbXSA9IFtdO1xuICAvKiogY29sbGVjdGlvbiBvZiBzdWIgbWVudSAqL1xuICBzdWJNZW51czogTnpTdWJNZW51Q29tcG9uZW50W10gPSBbXTtcbiAgQElucHV0KCkgbnpUaGVtZTogJ2xpZ2h0JyB8ICdkYXJrJyA9ICdsaWdodCc7XG4gIEBJbnB1dCgpIG56SW5saW5lSW5kZW50ID0gMjQ7XG4gIEBJbnB1dCgpIG56TW9kZTogTnpNb2RlID0gJ3ZlcnRpY2FsJztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPE56TWVudUl0ZW1EaXJlY3RpdmU+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5Ecm9wRG93bih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2luRHJvcERvd24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMubnpTZWxlY3RhYmxlID0gIXRoaXMuX2luRHJvcERvd247XG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUuaXNJbkRyb3BEb3duID0gdGhpcy5faW5Ecm9wRG93bik7XG4gICAgdGhpcy5zdWJNZW51cy5mb3JFYWNoKHN1Yk1lbnUgPT4gc3ViTWVudS5pc0luRHJvcERvd24gPSB0aGlzLl9pbkRyb3BEb3duKTtcbiAgfVxuXG4gIGdldCBuekluRHJvcERvd24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2luRHJvcERvd247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWxlY3RhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2VsZWN0YWJsZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTZWxlY3RhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3RhYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56SW5saW5lQ29sbGFwc2VkKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faW5saW5lQ29sbGFwc2VkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgIHRoaXMudXBkYXRlSW5saW5lQ29sbGFwc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpJbmxpbmVDb2xsYXBzZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lubGluZUNvbGxhcHNlZDtcbiAgfVxuXG4gIHVwZGF0ZUlubGluZUNvbGxhcHNlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9pbmxpbmVDb2xsYXBzZWQpIHtcbiAgICAgIHRoaXMuaGlkZVN1Yk1lbnVzKCk7XG4gICAgICB0aGlzLm56TW9kZSA9ICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVkdWN0aW9uU3ViTWVudXMoKTtcbiAgICAgIHRoaXMubnpNb2RlID0gdGhpcy5jYWNoZU1vZGU7XG4gICAgfVxuICB9XG5cbiAgLyoqIGRlZmluZSBob3N0IGNsYXNzICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWRyb3Bkb3duLXZlcnRpY2FsJylcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1yb290JylcbiAgZ2V0IGlzSW5Ecm9wRG93bkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56SW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUnKVxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXJvb3QnKVxuICBnZXQgaXNOb3RJbkRyb3BEb3duQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICF0aGlzLm56SW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWRyb3Bkb3duLW1lbnUtbGlnaHQnKVxuICBnZXQgc2V0RHJvcERvd25UaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpJbkRyb3BEb3duICYmICh0aGlzLm56VGhlbWUgPT09ICdsaWdodCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1kYXJrJylcbiAgZ2V0IHNldERyb3BEb3duVGhlbWVEYXJrQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpJbkRyb3BEb3duICYmICh0aGlzLm56VGhlbWUgPT09ICdkYXJrJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWxpZ2h0JylcbiAgZ2V0IHNldE1lbnVUaGVtZUxpZ2h0Q2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56VGhlbWUgPT09ICdsaWdodCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1kYXJrJylcbiAgZ2V0IHNldE1lbnVUaGVtZURhcmtDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLm56SW5Ecm9wRG93bikgJiYgKHRoaXMubnpUaGVtZSA9PT0gJ2RhcmsnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtdmVydGljYWwnKVxuICBnZXQgc2V0TWVudVZlcnRpY2FsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSA9PT0gJ3ZlcnRpY2FsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0TWVudUhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLm56SW5Ecm9wRG93bikgJiYgKHRoaXMubnpNb2RlID09PSAnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1pbmxpbmUnKVxuICBnZXQgc2V0TWVudUlubGluZUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMubnpJbkRyb3BEb3duKSAmJiAodGhpcy5uek1vZGUgPT09ICdpbmxpbmUnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtaW5saW5lLWNvbGxhcHNlZCcpXG4gIGdldCBzZXRNZW51SW5saW5lQ29sbGFwc2VkQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uekluRHJvcERvd24pICYmICh0aGlzLm56TW9kZSAhPT0gJ2hvcml6b250YWwnKSAmJiB0aGlzLm56SW5saW5lQ29sbGFwc2VkO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmKSB7XG5cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy5jYWNoZU1vZGUgPSB0aGlzLm56TW9kZTtcbiAgICB0aGlzLnVwZGF0ZUlubGluZUNvbGxhcHNlKCk7XG4gIH1cblxuICAvKiogdHJpZ2dlciB3aGVuIG1lbnUgaXRlbSBjbGlja2VkICovXG4gIGNsZWFyQWxsU2VsZWN0ZWQoKTogdm9pZCB7XG4gICAgdGhpcy5tZW51SXRlbXMuZm9yRWFjaChtZW51ID0+IG1lbnUubnpTZWxlY3RlZCA9IGZhbHNlKTtcbiAgfVxuXG4gIGhpZGVTdWJNZW51cygpOiB2b2lkIHtcbiAgICB0aGlzLnN1Yk1lbnVzT3BlbkluZGV4ID0gW107XG4gICAgdGhpcy5zdWJNZW51cy5mb3JFYWNoKChzdWJtZW51LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKHN1Ym1lbnUubnpPcGVuKSB7XG4gICAgICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXgucHVzaChpbmRleCk7XG4gICAgICB9XG4gICAgICBzdWJtZW51Lm56T3BlbiA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgcmVkdWN0aW9uU3ViTWVudXMoKTogdm9pZCB7XG4gICAgdGhpcy5zdWJNZW51c09wZW5JbmRleC5mb3JFYWNoKGkgPT4gdGhpcy5zdWJNZW51c1sgaSBdLm56T3BlbiA9IHRydWUpO1xuICAgIHRoaXMuc3ViTWVudXNPcGVuSW5kZXggPSBbXTtcbiAgfVxuXG4gIGNsaWNrSXRlbSh2YWx1ZTogTnpNZW51SXRlbURpcmVjdGl2ZSk6IHZvaWQge1xuICAgIHRoaXMubnpDbGljay5lbWl0KHZhbHVlKTtcbiAgfVxufVxuIl19