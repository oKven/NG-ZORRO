/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
import { merge, Subject } from 'rxjs';
import { NzOptionLiComponent } from './nz-option-li.component';
import { defaultFilterOption, NzOptionPipe } from './nz-option.pipe';
var NzOptionContainerComponent = /** @class */ (function () {
    function NzOptionContainerComponent() {
        this.isInit = false;
        this.isAddTagOptionDisplay = false;
        this.listOfAllTemplateOption = [];
        this.listOfTagOption = [];
        this.listOfFilterOption = [];
        // tslint:disable-next-line:no-any
        this.nzListOfSelectedValueChange = new EventEmitter();
        this.nzListOfTemplateOptionChange = new EventEmitter();
        this.nzClickOption = new EventEmitter();
        this.nzScrollToBottom = new EventEmitter();
        this.nzMode = 'default';
        this.nzServerSearch = false;
        this.nzFilterOption = defaultFilterOption;
        this.nzMaxMultipleCount = Infinity;
        // tslint:disable-next-line:no-any
        this.compareWith = function (o1, o2) { return o1 === o2; };
    }
    Object.defineProperty(NzOptionContainerComponent.prototype, "nzSearchValue", {
        get: /**
         * @return {?}
         */
        function () {
            return this._searchValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._searchValue = value;
            this.updateAddTagOptionDisplay();
            this.updateListOfFilterOption();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionContainerComponent.prototype, "nzListOfSelectedValue", {
        // tslint:disable-next-line:no-any
        get: /**
         * @return {?}
         */
        function () {
            return this._listOfSelectedValue;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._listOfSelectedValue !== value) {
                this._listOfSelectedValue = value;
                /** should clear activedOption when listOfSelectedValue change **/
                this.clearActivatedOption();
                this.refreshAllOptionStatus(false);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.addTagOption = /**
     * @return {?}
     */
    function () {
        if (this.nzListOfSelectedValue.length < this.nzMaxMultipleCount) {
            this.nzListOfSelectedValue = tslib_1.__spread(this.nzListOfSelectedValue, [this.nzSearchValue]);
            this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        }
    };
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    NzOptionContainerComponent.prototype.clickOption = /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    function (option, isPressEnter) {
        this.updateSelectedOption(option, isPressEnter);
        this.nzClickOption.emit();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzOptionContainerComponent.prototype.onKeyDownUl = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        if ([UP_ARROW, DOWN_ARROW, ENTER].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            /** @type {?} */
            var activeIndex = this.listOfFilterOption.findIndex(function (item) { return item === _this.activatedOption; });
            if (e.keyCode === UP_ARROW) {
                /** @type {?} */
                var preIndex = activeIndex > 0 ? (activeIndex - 1) : (this.listOfFilterOption.length - 1);
                this.setActiveOption(this.listOfFilterOption[preIndex]);
            }
            else if (e.keyCode === DOWN_ARROW) {
                /** @type {?} */
                var nextIndex = activeIndex < this.listOfFilterOption.length - 1 ? (activeIndex + 1) : 0;
                this.setActiveOption(this.listOfFilterOption[nextIndex]);
            }
            else if (e.keyCode === ENTER) {
                // enter
                if (this.isTagsMode) {
                    if (!this.isAddTagOptionDisplay) {
                        this.clickOption(this.activatedOption, true);
                    }
                    else {
                        this.addTagOption();
                        this.nzClickOption.emit();
                    }
                }
                else {
                    this.clickOption(this.activatedOption, true);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.resetActiveOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var firstActiveOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).find(function (item) { return _this.compareWith(item.nzValue, _this.nzListOfSelectedValue[0]); });
        this.setActiveOption(firstActiveOption);
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.clearActivatedOption = /**
     * @return {?}
     */
    function () {
        this.setActiveOption(null);
    };
    /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    NzOptionContainerComponent.prototype.setActiveOption = /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    function (option, scroll) {
        if (scroll === void 0) { scroll = true; }
        this.activatedOption = option;
        if (scroll) {
            this.scrollIntoView();
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.scrollIntoView = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length) {
            /** @type {?} */
            var targetOption_1 = this.listOfNzOptionLiComponent.find(function (o) { return o.nzOption === _this.activatedOption; });
            /* tslint:disable-next-line:no-string-literal */
            if (targetOption_1 && targetOption_1.el && targetOption_1.el['scrollIntoViewIfNeeded']) {
                /* tslint:disable-next-line:no-string-literal */
                setTimeout(function () { return targetOption_1.el['scrollIntoViewIfNeeded'](false); }, 150);
            }
        }
    };
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    NzOptionContainerComponent.prototype.updateSelectedOption = /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    function (option, isPressEnter) {
        var _this = this;
        /** update listOfSelectedOption -> update nzListOfSelectedValue -> emit nzListOfSelectedValueChange **/
        if (option && !option.nzDisabled) {
            /** @type {?} */
            var changed = false;
            this.setActiveOption(option);
            /** @type {?} */
            var listOfSelectedValue = tslib_1.__spread(this.nzListOfSelectedValue);
            if (this.isMultipleOrTags) {
                /** @type {?} */
                var targetValue = listOfSelectedValue.find(function (o) { return _this.compareWith(o, option.nzValue); });
                if (isNotNil(targetValue)) {
                    if (!isPressEnter) {
                        /** should not toggle option when press enter **/
                        listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                        changed = true;
                    }
                }
                else if (this.nzListOfSelectedValue.length < this.nzMaxMultipleCount) {
                    listOfSelectedValue.push(option.nzValue);
                    changed = true;
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                listOfSelectedValue = [option.nzValue];
                changed = true;
            }
            /** update selectedValues when click option **/
            if (changed) {
                this._listOfSelectedValue = listOfSelectedValue;
                this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
                if (this.isTagsMode) {
                    this.refreshAllOptionStatus(false);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.refreshListOfTagOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.isTagsMode) {
            /** *
             * refresh tags option *
              @type {?} */
            var listOfTagsOption_1 = [];
            this.nzListOfSelectedValue.forEach(function (value) {
                /** @type {?} */
                var existedOption = _this.listOfAllTemplateOption.find(function (o) { return _this.compareWith(o.nzValue, value); });
                if (!existedOption) {
                    /** @type {?} */
                    var nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    listOfTagsOption_1.push(nzOptionComponent);
                }
            });
            this.listOfTagOption = listOfTagsOption_1;
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.refreshListOfAllTemplateOption = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.listOfAllTemplateOption = this.listOfNzOptionComponent.toArray().concat(this.listOfNzOptionGroupComponent.toArray().reduce(function (pre, cur) { return tslib_1.__spread(pre, cur.listOfNzOptionComponent.toArray()); }, []));
        Promise.resolve().then(function () { return _this.nzListOfTemplateOptionChange.emit(_this.listOfAllTemplateOption); });
    };
    /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    NzOptionContainerComponent.prototype.refreshAllOptionStatus = /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    function (isTemplateOptionChange) {
        /** update nzListOfSelectedValue | update option list -> update listOfAllTemplateOption -> update listOfSelectedOption -> update activatedOption **/
        if (this.isInit) {
            if (isTemplateOptionChange) {
                this.refreshListOfAllTemplateOption();
            }
            this.refreshListOfTagOption();
            this.updateListOfFilterOption();
            this.updateAddTagOptionDisplay();
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.updateListOfFilterOption = /**
     * @return {?}
     */
    function () {
        this.listOfFilterOption = /** @type {?} */ (new NzOptionPipe().transform(this.listOfAllTemplateOption.concat(this.listOfTagOption), this.nzSearchValue, this.nzFilterOption, this.nzServerSearch));
        if (this.nzSearchValue) {
            this.setActiveOption(this.listOfFilterOption[0]);
        }
    };
    /** watch options change in option group **/
    /**
     * watch options change in option group *
     * @return {?}
     */
    NzOptionContainerComponent.prototype.watchSubOptionChanges = /**
     * watch options change in option group *
     * @return {?}
     */
    function () {
        var _this = this;
        this.unsubscribeOption();
        /** @type {?} */
        var optionChanges$ = merge(new Subject().asObservable(), this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes);
        if (this.listOfNzOptionGroupComponent.length) {
            this.listOfNzOptionGroupComponent.forEach(function (group) { return optionChanges$ = group.listOfNzOptionComponent ? merge(group.listOfNzOptionComponent.changes, optionChanges$) : optionChanges$; });
        }
        this.optionSubscription = optionChanges$.subscribe(function () { return _this.refreshAllOptionStatus(true); });
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.unsubscribeGroup = /**
     * @return {?}
     */
    function () {
        if (this.groupSubscription) {
            this.groupSubscription.unsubscribe();
            this.groupSubscription = null;
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.unsubscribeOption = /**
     * @return {?}
     */
    function () {
        if (this.optionSubscription) {
            this.optionSubscription.unsubscribe();
            this.optionSubscription = null;
        }
    };
    Object.defineProperty(NzOptionContainerComponent.prototype, "isTagsMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionContainerComponent.prototype, "isMultipleOrTags", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzMode === 'tags' || this.nzMode === 'multiple';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzOptionContainerComponent.prototype, "isNotFoundDisplay", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.isTagsMode) && (!this.listOfFilterOption.length);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.updateAddTagOptionDisplay = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var listOfAllOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).map(function (item) { return item.nzLabel; });
        /** @type {?} */
        var isMatch = listOfAllOption.indexOf(this.nzSearchValue) > -1;
        this.isAddTagOptionDisplay = this.isTagsMode && this.nzSearchValue && (!isMatch);
    };
    /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    NzOptionContainerComponent.prototype.dropDownScroll = /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    function (e, ul) {
        e.preventDefault();
        e.stopPropagation();
        if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
            this.nzScrollToBottom.emit();
        }
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.isInit = true;
        this.refreshAllOptionStatus(true);
        this.watchSubOptionChanges();
        this.groupSubscription = this.listOfNzOptionGroupComponent.changes.subscribe(function () { return _this.watchSubOptionChanges(); });
    };
    /**
     * @return {?}
     */
    NzOptionContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribeGroup();
        this.unsubscribeOption();
    };
    NzOptionContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: '[nz-option-container]',
                    preserveWhitespaces: false,
                    template: "<ul\n  #dropdownUl\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\n  role=\"menu\"\n  (keydown)=\"onKeyDownUl($event)\"\n  (scroll)=\"dropDownScroll($event,dropdownUl)\"\n  tabindex=\"0\">\n  <li\n    *ngIf=\"isNotFoundDisplay\"\n    nz-select-unselectable\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\n    {{ nzNotFoundContent ? nzNotFoundContent : ('Select.notFoundContent' | nzI18n) }}\n  </li>\n  <li\n    *ngIf=\"isAddTagOptionDisplay\"\n    nz-select-unselectable\n    (click)=\"addTagOption()\"\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-active\">\n    {{ nzSearchValue }}\n  </li>\n  <li\n    nz-option-li\n    [nzMode]=\"nzMode\"\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfNzOptionComponent | nzFilterOptionPipe : nzSearchValue : nzFilterOption : nzServerSearch \"\n    (click)=\"clickOption(option,false)\"\n    [nzActiveOption]=\"activatedOption\"\n    [nzOption]=\"option\"\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\">\n  </li>\n  <li\n    *ngFor=\"let group of listOfNzOptionGroupComponent | nzSubFilterOptionPipe : nzSearchValue : nzFilterOption : nzServerSearch\"\n    class=\"ant-select-dropdown-menu-item-group\">\n    <div\n      class=\"ant-select-dropdown-menu-item-group-title\"\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\n      <ng-container *ngIf=\"group.isLabelString; else labelTemplate\">{{ group.nzLabel }}</ng-container>\n      <ng-template #labelTemplate>\n        <ng-template [ngTemplateOutlet]=\"group.nzLabel\"></ng-template>\n      </ng-template>\n    </div>\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\n      <li\n        nz-option-li\n        [nzMode]=\"nzMode\"\n        [compareWith]=\"compareWith\"\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOptionPipe : nzSearchValue : nzFilterOption : nzServerSearch\"\n        (click)=\"clickOption(option,false)\"\n        [nzActiveOption]=\"activatedOption\"\n        [nzShowActive]=\"!isAddTagOptionDisplay\"\n        [nzOption]=\"option\"\n        [nzListOfSelectedValue]=\"nzListOfSelectedValue\">\n      </li>\n    </ul>\n  </li>\n  <li\n    nz-option-li\n    [nzMode]=\"nzMode\"\n    [compareWith]=\"compareWith\"\n    *ngFor=\"let option of listOfTagOption | nzFilterOptionPipe : nzSearchValue : nzFilterOption : nzServerSearch \"\n    (click)=\"clickOption(option,false)\"\n    [nzActiveOption]=\"activatedOption\"\n    [nzShowActive]=\"!isAddTagOptionDisplay\"\n    [nzOption]=\"option\"\n    [nzListOfSelectedValue]=\"nzListOfSelectedValue\">\n  </li>\n</ul>"
                }] }
    ];
    NzOptionContainerComponent.propDecorators = {
        listOfNzOptionLiComponent: [{ type: ViewChildren, args: [NzOptionLiComponent,] }],
        listOfNzOptionComponent: [{ type: Input }],
        listOfNzOptionGroupComponent: [{ type: Input }],
        nzListOfSelectedValueChange: [{ type: Output }],
        nzListOfTemplateOptionChange: [{ type: Output }],
        nzClickOption: [{ type: Output }],
        nzScrollToBottom: [{ type: Output }],
        nzMode: [{ type: Input }],
        nzServerSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzMaxMultipleCount: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        compareWith: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        nzListOfSelectedValue: [{ type: Input }]
    };
    return NzOptionContainerComponent;
}());
export { NzOptionContainerComponent };
function NzOptionContainerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzOptionContainerComponent.prototype._listOfSelectedValue;
    /** @type {?} */
    NzOptionContainerComponent.prototype._searchValue;
    /** @type {?} */
    NzOptionContainerComponent.prototype.isInit;
    /** @type {?} */
    NzOptionContainerComponent.prototype.isAddTagOptionDisplay;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfAllTemplateOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.optionSubscription;
    /** @type {?} */
    NzOptionContainerComponent.prototype.groupSubscription;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfTagOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfFilterOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.activatedOption;
    /**
     * can not use ViewChild since it will match sub options in option group *
     * @type {?}
     */
    NzOptionContainerComponent.prototype.listOfNzOptionLiComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfNzOptionComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.listOfNzOptionGroupComponent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzListOfSelectedValueChange;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzListOfTemplateOptionChange;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzClickOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzScrollToBottom;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzMode;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzServerSearch;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzMaxMultipleCount;
    /** @type {?} */
    NzOptionContainerComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzOptionContainerComponent.prototype.compareWith;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDcEUsT0FBTyxFQUVMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsWUFBWSxFQUNiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFlBQVksRUFBaUIsTUFBTSxrQkFBa0IsQ0FBQzs7O1FBV2xGLGNBQVMsS0FBSyxDQUFDO1FBQ2YsNkJBQXdCLEtBQUssQ0FBQztRQUM5QiwrQkFBK0MsRUFBRSxDQUFDO1FBR2xELHVCQUF1QyxFQUFFLENBQUM7UUFDMUMsMEJBQTBDLEVBQUUsQ0FBQzs7UUFPN0MsbUNBQWlELElBQUksWUFBWSxFQUFTLENBQUM7UUFDM0Usb0NBQWtELElBQUksWUFBWSxFQUF1QixDQUFDO1FBQzFGLHFCQUFtQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVELHdCQUFzQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQy9ELGNBQWtCLFNBQVMsQ0FBQztRQUM1QixzQkFBMEIsS0FBSyxDQUFDO1FBQ2hDLHNCQUF5QyxtQkFBbUIsQ0FBQztRQUM3RCwwQkFBOEIsUUFB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QUNMLEtBQUs7cUNBQ0wsS0FBSztvQ0FDTCxLQUFLOzhCQUVMLEtBQUs7Z0NBRUwsS0FBSzt3Q0FXTCxLQUFLOztxQ0FoRVI7O1NBd0JhLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPV05fQVJST1csIEVOVEVSLCBVUF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT3V0cHV0LFxuICBRdWVyeUxpc3QsXG4gIFZpZXdDaGlsZHJlblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcbmltcG9ydCB7IE56T3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpPcHRpb25Db21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBtZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBOek9wdGlvbkxpQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tbGkuY29tcG9uZW50JztcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIE56T3B0aW9uUGlwZSwgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vbnotb3B0aW9uLnBpcGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei1vcHRpb24tY29udGFpbmVyXScsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1vcHRpb24tY29udGFpbmVyLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOek9wdGlvbkNvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyQ29udGVudEluaXQsIE9uRGVzdHJveSB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgcHJpdmF0ZSBfbGlzdE9mU2VsZWN0ZWRWYWx1ZTogYW55W107XG4gIHByaXZhdGUgX3NlYXJjaFZhbHVlOiBzdHJpbmc7XG4gIGlzSW5pdCA9IGZhbHNlO1xuICBpc0FkZFRhZ09wdGlvbkRpc3BsYXkgPSBmYWxzZTtcbiAgbGlzdE9mQWxsVGVtcGxhdGVPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgb3B0aW9uU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGdyb3VwU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gIGxpc3RPZlRhZ09wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBsaXN0T2ZGaWx0ZXJPcHRpb246IE56T3B0aW9uQ29tcG9uZW50W10gPSBbXTtcbiAgYWN0aXZhdGVkT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudDtcbiAgLyoqIGNhbiBub3QgdXNlIFZpZXdDaGlsZCBzaW5jZSBpdCB3aWxsIG1hdGNoIHN1YiBvcHRpb25zIGluIG9wdGlvbiBncm91cCAqKi9cbiAgQFZpZXdDaGlsZHJlbihOek9wdGlvbkxpQ29tcG9uZW50KSBsaXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25MaUNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Db21wb25lbnQ+O1xuICBASW5wdXQoKSBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55W10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekxpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOek9wdGlvbkNvbXBvbmVudFtdPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGlja09wdGlvbiA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2Nyb2xsVG9Cb3R0b20gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XG4gIEBJbnB1dCgpIG56TW9kZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpTZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IFRGaWx0ZXJPcHRpb24gPSBkZWZhdWx0RmlsdGVyT3B0aW9uO1xuICBASW5wdXQoKSBuek1heE11bHRpcGxlQ291bnQgPSBJbmZpbml0eTtcbiAgQElucHV0KCkgbnpOb3RGb3VuZENvbnRlbnQ6IHN0cmluZztcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBASW5wdXQoKSBjb21wYXJlV2l0aCA9IChvMTogYW55LCBvMjogYW55KSA9PiBvMSA9PT0gbzI7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk7XG4gICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTtcbiAgfVxuXG4gIGdldCBuelNlYXJjaFZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NlYXJjaFZhbHVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmICh0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgICAgLyoqIHNob3VsZCBjbGVhciBhY3RpdmVkT3B0aW9uIHdoZW4gbGlzdE9mU2VsZWN0ZWRWYWx1ZSBjaGFuZ2UgKiovXG4gICAgICB0aGlzLmNsZWFyQWN0aXZhdGVkT3B0aW9uKCk7XG4gICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgZ2V0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWU7XG4gIH1cblxuICBhZGRUYWdPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA8IHRoaXMubnpNYXhNdWx0aXBsZUNvdW50KSB7XG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsgLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUsIHRoaXMubnpTZWFyY2hWYWx1ZSBdO1xuICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgaXNQcmVzc0VudGVyOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTZWxlY3RlZE9wdGlvbihvcHRpb24sIGlzUHJlc3NFbnRlcik7XG4gICAgdGhpcy5uekNsaWNrT3B0aW9uLmVtaXQoKTtcbiAgfVxuXG4gIG9uS2V5RG93blVsKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoWyBVUF9BUlJPVywgRE9XTl9BUlJPVywgRU5URVIgXS5pbmRleE9mKGUua2V5Q29kZSkgPiAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5maW5kSW5kZXgoaXRlbSA9PiBpdGVtID09PSB0aGlzLmFjdGl2YXRlZE9wdGlvbik7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBVUF9BUlJPVykge1xuICAgICAgICAvLyBhcnJvdyB1cFxuICAgICAgICBjb25zdCBwcmVJbmRleCA9IGFjdGl2ZUluZGV4ID4gMCA/IChhY3RpdmVJbmRleCAtIDEpIDogKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCAtIDEpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvblsgcHJlSW5kZXggXSk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gRE9XTl9BUlJPVykge1xuICAgICAgICAvLyBhcnJvdyBkb3duXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2ZUluZGV4IDwgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoIC0gMSA/IChhY3RpdmVJbmRleCArIDEpIDogMDtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJPcHRpb25bIG5leHRJbmRleCBdKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICAvLyBlbnRlclxuICAgICAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAgICAgaWYgKCF0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSkge1xuICAgICAgICAgICAgdGhpcy5jbGlja09wdGlvbih0aGlzLmFjdGl2YXRlZE9wdGlvbiwgdHJ1ZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkVGFnT3B0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLm56Q2xpY2tPcHRpb24uZW1pdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlc2V0QWN0aXZlT3B0aW9uKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpcnN0QWN0aXZlT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLmZpbmQoaXRlbSA9PiB0aGlzLmNvbXBhcmVXaXRoKGl0ZW0ubnpWYWx1ZSwgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVbIDAgXSkpO1xuICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKGZpcnN0QWN0aXZlT3B0aW9uKTtcbiAgfVxuXG4gIGNsZWFyQWN0aXZhdGVkT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG51bGwpO1xuICB9XG5cbiAgc2V0QWN0aXZlT3B0aW9uKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQsIHNjcm9sbDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiA9IG9wdGlvbjtcbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgc2Nyb2xsSW50b1ZpZXcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudCAmJiB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICBjb25zdCB0YXJnZXRPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQuZmluZChvID0+IG8ubnpPcHRpb24gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcbiAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgaWYgKHRhcmdldE9wdGlvbiAmJiB0YXJnZXRPcHRpb24uZWwgJiYgdGFyZ2V0T3B0aW9uLmVsWyAnc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZCcgXSkge1xuICAgICAgICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tc3RyaW5nLWxpdGVyYWwgKi9cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0YXJnZXRPcHRpb24uZWxbICdzY3JvbGxJbnRvVmlld0lmTmVlZGVkJyBdKGZhbHNlKSwgMTUwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB1cGRhdGVTZWxlY3RlZE9wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAvKiogdXBkYXRlIGxpc3RPZlNlbGVjdGVkT3B0aW9uIC0+IHVwZGF0ZSBuekxpc3RPZlNlbGVjdGVkVmFsdWUgLT4gZW1pdCBuekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UgKiovXG4gICAgaWYgKG9wdGlvbiAmJiAhb3B0aW9uLm56RGlzYWJsZWQpIHtcbiAgICAgIGxldCBjaGFuZ2VkID0gZmFsc2U7XG4gICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbihvcHRpb24pO1xuICAgICAgbGV0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbIC4uLnRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlIF07XG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzKSB7XG4gICAgICAgIGNvbnN0IHRhcmdldFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLCBvcHRpb24ubnpWYWx1ZSkpO1xuICAgICAgICBpZiAoaXNOb3ROaWwodGFyZ2V0VmFsdWUpKSB7XG4gICAgICAgICAgaWYgKCFpc1ByZXNzRW50ZXIpIHtcbiAgICAgICAgICAgIC8qKiBzaG91bGQgbm90IHRvZ2dsZSBvcHRpb24gd2hlbiBwcmVzcyBlbnRlciAqKi9cbiAgICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUuc3BsaWNlKGxpc3RPZlNlbGVjdGVkVmFsdWUuaW5kZXhPZih0YXJnZXRWYWx1ZSksIDEpO1xuICAgICAgICAgICAgY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA8IHRoaXMubnpNYXhNdWx0aXBsZUNvdW50KSB7XG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5uelZhbHVlKTtcbiAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICghdGhpcy5jb21wYXJlV2l0aChsaXN0T2ZTZWxlY3RlZFZhbHVlWyAwIF0sIG9wdGlvbi5uelZhbHVlKSkge1xuICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWyBvcHRpb24ubnpWYWx1ZSBdO1xuICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8qKiB1cGRhdGUgc2VsZWN0ZWRWYWx1ZXMgd2hlbiBjbGljayBvcHRpb24gKiovXG4gICAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWVDaGFuZ2UuZW1pdCh0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgICAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXMoZmFsc2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVmcmVzaExpc3RPZlRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc1RhZ3NNb2RlKSB7XG4gICAgICAvKiogcmVmcmVzaCB0YWdzIG9wdGlvbiAqKi9cbiAgICAgIGNvbnN0IGxpc3RPZlRhZ3NPcHRpb24gPSBbXTtcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgICBjb25zdCBleGlzdGVkT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5maW5kKG8gPT4gdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHZhbHVlKSk7XG4gICAgICAgIGlmICghZXhpc3RlZE9wdGlvbikge1xuICAgICAgICAgIGNvbnN0IG56T3B0aW9uQ29tcG9uZW50ID0gbmV3IE56T3B0aW9uQ29tcG9uZW50KCk7XG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIG56T3B0aW9uQ29tcG9uZW50Lm56TGFiZWwgPSB2YWx1ZTtcbiAgICAgICAgICBsaXN0T2ZUYWdzT3B0aW9uLnB1c2gobnpPcHRpb25Db21wb25lbnQpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mVGFnc09wdGlvbjtcbiAgICB9XG5cbiAgfVxuXG4gIHJlZnJlc2hMaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC50b0FycmF5KCkuY29uY2F0KHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC50b0FycmF5KCkucmVkdWNlKChwcmUsIGN1cikgPT4gWyAuLi5wcmUsIC4uLmN1ci5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC50b0FycmF5KCkgXSwgW10pKTtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpMaXN0T2ZUZW1wbGF0ZU9wdGlvbkNoYW5nZS5lbWl0KHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24pKTtcbiAgfVxuXG4gIHJlZnJlc2hBbGxPcHRpb25TdGF0dXMoaXNUZW1wbGF0ZU9wdGlvbkNoYW5nZTogYm9vbGVhbik6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlIHwgdXBkYXRlIG9wdGlvbiBsaXN0IC0+IHVwZGF0ZSBsaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbiAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIGFjdGl2YXRlZE9wdGlvbiAqKi9cbiAgICBpZiAodGhpcy5pc0luaXQpIHtcbiAgICAgIGlmIChpc1RlbXBsYXRlT3B0aW9uQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMucmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlZnJlc2hMaXN0T2ZUYWdPcHRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyT3B0aW9uKCk7XG4gICAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24gPSBuZXcgTnpPcHRpb25QaXBlKCkudHJhbnNmb3JtKHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKSwgdGhpcy5uelNlYXJjaFZhbHVlLCB0aGlzLm56RmlsdGVyT3B0aW9uLCB0aGlzLm56U2VydmVyU2VhcmNoKSBhcyBOek9wdGlvbkNvbXBvbmVudFtdO1xuICAgIGlmICh0aGlzLm56U2VhcmNoVmFsdWUpIHtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uWyAwIF0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKiB3YXRjaCBvcHRpb25zIGNoYW5nZSBpbiBvcHRpb24gZ3JvdXAgKiovXG4gIHdhdGNoU3ViT3B0aW9uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT3B0aW9uKCk7XG4gICAgbGV0IG9wdGlvbkNoYW5nZXMkID0gbWVyZ2UoXG4gICAgICBuZXcgU3ViamVjdCgpLmFzT2JzZXJ2YWJsZSgpLFxuICAgICAgdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMsXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNoYW5nZXNcbiAgICApO1xuICAgIGlmICh0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQubGVuZ3RoKSB7XG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuZm9yRWFjaChncm91cCA9PiBvcHRpb25DaGFuZ2VzJCA9IGdyb3VwLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50ID8gbWVyZ2UoZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlcywgb3B0aW9uQ2hhbmdlcyQpIDogb3B0aW9uQ2hhbmdlcyQpO1xuICAgIH1cbiAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbiA9IG9wdGlvbkNoYW5nZXMkLnN1YnNjcmliZSgoKSA9PiB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSkpO1xuICB9XG5cbiAgdW5zdWJzY3JpYmVHcm91cCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5ncm91cFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgdW5zdWJzY3JpYmVPcHRpb24oKTogdm9pZCB7XG4gICAgaWYgKHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5vcHRpb25TdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc1RhZ3NNb2RlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56TW9kZSA9PT0gJ3RhZ3MnO1xuICB9XG5cbiAgZ2V0IGlzTXVsdGlwbGVPclRhZ3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncycgfHwgdGhpcy5uek1vZGUgPT09ICdtdWx0aXBsZSc7XG4gIH1cblxuICBnZXQgaXNOb3RGb3VuZERpc3BsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc1RhZ3NNb2RlKSAmJiAoIXRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmxlbmd0aCk7XG4gIH1cblxuICB1cGRhdGVBZGRUYWdPcHRpb25EaXNwbGF5KCk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3RPZkFsbE9wdGlvbiA9IHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24uY29uY2F0KHRoaXMubGlzdE9mVGFnT3B0aW9uKS5tYXAoaXRlbSA9PiBpdGVtLm56TGFiZWwpO1xuICAgIGNvbnN0IGlzTWF0Y2ggPSBsaXN0T2ZBbGxPcHRpb24uaW5kZXhPZih0aGlzLm56U2VhcmNoVmFsdWUpID4gLTE7XG4gICAgdGhpcy5pc0FkZFRhZ09wdGlvbkRpc3BsYXkgPSB0aGlzLmlzVGFnc01vZGUgJiYgdGhpcy5uelNlYXJjaFZhbHVlICYmICghaXNNYXRjaCk7XG4gIH1cblxuICBkcm9wRG93blNjcm9sbChlOiBNb3VzZUV2ZW50LCB1bDogSFRNTFVMaXN0RWxlbWVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICh1bCAmJiAodWwuc2Nyb2xsSGVpZ2h0IC0gdWwuc2Nyb2xsVG9wID09PSB1bC5jbGllbnRIZWlnaHQpKSB7XG4gICAgICB0aGlzLm56U2Nyb2xsVG9Cb3R0b20uZW1pdCgpO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy5yZWZyZXNoQWxsT3B0aW9uU3RhdHVzKHRydWUpO1xuICAgIHRoaXMud2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCk7XG4gICAgdGhpcy5ncm91cFN1YnNjcmlwdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5jaGFuZ2VzLnN1YnNjcmliZSgoKSA9PiB0aGlzLndhdGNoU3ViT3B0aW9uQ2hhbmdlcygpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVHcm91cCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVPcHRpb24oKTtcbiAgfVxufVxuIl19