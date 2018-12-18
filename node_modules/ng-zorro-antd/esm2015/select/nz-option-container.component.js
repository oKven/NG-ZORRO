/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOWN_ARROW, ENTER, UP_ARROW } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { NzOptionComponent } from './nz-option.component';
import { merge, Subject } from 'rxjs';
import { NzOptionLiComponent } from './nz-option-li.component';
import { defaultFilterOption, NzOptionPipe } from './nz-option.pipe';
export class NzOptionContainerComponent {
    constructor() {
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
        this.compareWith = (o1, o2) => o1 === o2;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSearchValue(value) {
        this._searchValue = value;
        this.updateAddTagOptionDisplay();
        this.updateListOfFilterOption();
    }
    /**
     * @return {?}
     */
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzListOfSelectedValue(value) {
        if (this._listOfSelectedValue !== value) {
            this._listOfSelectedValue = value;
            /** should clear activedOption when listOfSelectedValue change **/
            this.clearActivatedOption();
            this.refreshAllOptionStatus(false);
        }
    }
    /**
     * @return {?}
     */
    get nzListOfSelectedValue() {
        return this._listOfSelectedValue;
    }
    /**
     * @return {?}
     */
    addTagOption() {
        if (this.nzListOfSelectedValue.length < this.nzMaxMultipleCount) {
            this.nzListOfSelectedValue = [...this.nzListOfSelectedValue, this.nzSearchValue];
            this.nzListOfSelectedValueChange.emit(this.nzListOfSelectedValue);
        }
    }
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    clickOption(option, isPressEnter) {
        this.updateSelectedOption(option, isPressEnter);
        this.nzClickOption.emit();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDownUl(e) {
        if ([UP_ARROW, DOWN_ARROW, ENTER].indexOf(e.keyCode) > -1) {
            e.preventDefault();
            /** @type {?} */
            const activeIndex = this.listOfFilterOption.findIndex(item => item === this.activatedOption);
            if (e.keyCode === UP_ARROW) {
                /** @type {?} */
                const preIndex = activeIndex > 0 ? (activeIndex - 1) : (this.listOfFilterOption.length - 1);
                this.setActiveOption(this.listOfFilterOption[preIndex]);
            }
            else if (e.keyCode === DOWN_ARROW) {
                /** @type {?} */
                const nextIndex = activeIndex < this.listOfFilterOption.length - 1 ? (activeIndex + 1) : 0;
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
    }
    /**
     * @return {?}
     */
    resetActiveOption() {
        /** @type {?} */
        const firstActiveOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).find(item => this.compareWith(item.nzValue, this.nzListOfSelectedValue[0]));
        this.setActiveOption(firstActiveOption);
    }
    /**
     * @return {?}
     */
    clearActivatedOption() {
        this.setActiveOption(null);
    }
    /**
     * @param {?} option
     * @param {?=} scroll
     * @return {?}
     */
    setActiveOption(option, scroll = true) {
        this.activatedOption = option;
        if (scroll) {
            this.scrollIntoView();
        }
    }
    /**
     * @return {?}
     */
    scrollIntoView() {
        if (this.listOfNzOptionLiComponent && this.listOfNzOptionLiComponent.length) {
            /** @type {?} */
            const targetOption = this.listOfNzOptionLiComponent.find(o => o.nzOption === this.activatedOption);
            /* tslint:disable-next-line:no-string-literal */
            if (targetOption && targetOption.el && targetOption.el['scrollIntoViewIfNeeded']) {
                /* tslint:disable-next-line:no-string-literal */
                setTimeout(() => targetOption.el['scrollIntoViewIfNeeded'](false), 150);
            }
        }
    }
    /**
     * @param {?} option
     * @param {?} isPressEnter
     * @return {?}
     */
    updateSelectedOption(option, isPressEnter) {
        /** update listOfSelectedOption -> update nzListOfSelectedValue -> emit nzListOfSelectedValueChange **/
        if (option && !option.nzDisabled) {
            /** @type {?} */
            let changed = false;
            this.setActiveOption(option);
            /** @type {?} */
            let listOfSelectedValue = [...this.nzListOfSelectedValue];
            if (this.isMultipleOrTags) {
                /** @type {?} */
                const targetValue = listOfSelectedValue.find(o => this.compareWith(o, option.nzValue));
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
    }
    /**
     * @return {?}
     */
    refreshListOfTagOption() {
        if (this.isTagsMode) {
            /** *
             * refresh tags option *
              @type {?} */
            const listOfTagsOption = [];
            this.nzListOfSelectedValue.forEach(value => {
                /** @type {?} */
                const existedOption = this.listOfAllTemplateOption.find(o => this.compareWith(o.nzValue, value));
                if (!existedOption) {
                    /** @type {?} */
                    const nzOptionComponent = new NzOptionComponent();
                    nzOptionComponent.nzValue = value;
                    nzOptionComponent.nzLabel = value;
                    listOfTagsOption.push(nzOptionComponent);
                }
            });
            this.listOfTagOption = listOfTagsOption;
        }
    }
    /**
     * @return {?}
     */
    refreshListOfAllTemplateOption() {
        this.listOfAllTemplateOption = this.listOfNzOptionComponent.toArray().concat(this.listOfNzOptionGroupComponent.toArray().reduce((pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()], []));
        Promise.resolve().then(() => this.nzListOfTemplateOptionChange.emit(this.listOfAllTemplateOption));
    }
    /**
     * @param {?} isTemplateOptionChange
     * @return {?}
     */
    refreshAllOptionStatus(isTemplateOptionChange) {
        /** update nzListOfSelectedValue | update option list -> update listOfAllTemplateOption -> update listOfSelectedOption -> update activatedOption **/
        if (this.isInit) {
            if (isTemplateOptionChange) {
                this.refreshListOfAllTemplateOption();
            }
            this.refreshListOfTagOption();
            this.updateListOfFilterOption();
            this.updateAddTagOptionDisplay();
        }
    }
    /**
     * @return {?}
     */
    updateListOfFilterOption() {
        this.listOfFilterOption = /** @type {?} */ (new NzOptionPipe().transform(this.listOfAllTemplateOption.concat(this.listOfTagOption), this.nzSearchValue, this.nzFilterOption, this.nzServerSearch));
        if (this.nzSearchValue) {
            this.setActiveOption(this.listOfFilterOption[0]);
        }
    }
    /**
     * watch options change in option group *
     * @return {?}
     */
    watchSubOptionChanges() {
        this.unsubscribeOption();
        /** @type {?} */
        let optionChanges$ = merge(new Subject().asObservable(), this.listOfNzOptionGroupComponent.changes, this.listOfNzOptionComponent.changes);
        if (this.listOfNzOptionGroupComponent.length) {
            this.listOfNzOptionGroupComponent.forEach(group => optionChanges$ = group.listOfNzOptionComponent ? merge(group.listOfNzOptionComponent.changes, optionChanges$) : optionChanges$);
        }
        this.optionSubscription = optionChanges$.subscribe(() => this.refreshAllOptionStatus(true));
    }
    /**
     * @return {?}
     */
    unsubscribeGroup() {
        if (this.groupSubscription) {
            this.groupSubscription.unsubscribe();
            this.groupSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOption() {
        if (this.optionSubscription) {
            this.optionSubscription.unsubscribe();
            this.optionSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    get isTagsMode() {
        return this.nzMode === 'tags';
    }
    /**
     * @return {?}
     */
    get isMultipleOrTags() {
        return this.nzMode === 'tags' || this.nzMode === 'multiple';
    }
    /**
     * @return {?}
     */
    get isNotFoundDisplay() {
        return (!this.isTagsMode) && (!this.listOfFilterOption.length);
    }
    /**
     * @return {?}
     */
    updateAddTagOptionDisplay() {
        /** @type {?} */
        const listOfAllOption = this.listOfAllTemplateOption.concat(this.listOfTagOption).map(item => item.nzLabel);
        /** @type {?} */
        const isMatch = listOfAllOption.indexOf(this.nzSearchValue) > -1;
        this.isAddTagOptionDisplay = this.isTagsMode && this.nzSearchValue && (!isMatch);
    }
    /**
     * @param {?} e
     * @param {?} ul
     * @return {?}
     */
    dropDownScroll(e, ul) {
        e.preventDefault();
        e.stopPropagation();
        if (ul && (ul.scrollHeight - ul.scrollTop === ul.clientHeight)) {
            this.nzScrollToBottom.emit();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this.isInit = true;
        this.refreshAllOptionStatus(true);
        this.watchSubOptionChanges();
        this.groupSubscription = this.listOfNzOptionGroupComponent.changes.subscribe(() => this.watchSubOptionChanges());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeGroup();
        this.unsubscribeOption();
    }
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNwRSxPQUFPLEVBRUwsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxZQUFZLEVBQ2IsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRTFELE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsWUFBWSxFQUFpQixNQUFNLGtCQUFrQixDQUFDO0FBT3BGLE1BQU0sT0FBTywwQkFBMEI7O1FBSXJDLGNBQVMsS0FBSyxDQUFDO1FBQ2YsNkJBQXdCLEtBQUssQ0FBQztRQUM5QiwrQkFBK0MsRUFBRSxDQUFDO1FBR2xELHVCQUF1QyxFQUFFLENBQUM7UUFDMUMsMEJBQTBDLEVBQUUsQ0FBQzs7UUFPN0MsbUNBQWlELElBQUksWUFBWSxFQUFTLENBQUM7UUFDM0Usb0NBQWtELElBQUksWUFBWSxFQUF1QixDQUFDO1FBQzFGLHFCQUFtQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQzVELHdCQUFzQyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBQy9ELGNBQWtCLFNBQVMsQ0FBQztRQUM1QixzQkFBMEIsS0FBSyxDQUFDO1FBQ2hDLHNCQUF5QyxtQkFBbUIs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QUcsSUFBSSxDQUFDO1FBQ25CLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUMsQ0FBQztLQUNsSDs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztLQUMxQjs7O1lBM1FGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsdUJBQXVCO2dCQUM1QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixnb0ZBQTJEO2FBQzVEOzs7d0NBY0UsWUFBWSxTQUFDLG1CQUFtQjtzQ0FDaEMsS0FBSzsyQ0FDTCxLQUFLOzBDQUVMLE1BQU07MkNBQ04sTUFBTTs0QkFDTixNQUFNOytCQUNOLE1BQU07cUJBQ04sS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7aUNBQ0wsS0FBSztnQ0FDTCxLQUFLOzBCQUVMLEtBQUs7NEJBRUwsS0FBSztvQ0FXTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9XTl9BUlJPVywgRU5URVIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkcmVuXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgTnpPcHRpb25Hcm91cENvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLWdyb3VwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOek9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotb3B0aW9uLmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IG1lcmdlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE56T3B0aW9uTGlDb21wb25lbnQgfSBmcm9tICcuL256LW9wdGlvbi1saS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZGVmYXVsdEZpbHRlck9wdGlvbiwgTnpPcHRpb25QaXBlLCBURmlsdGVyT3B0aW9uIH0gZnJvbSAnLi9uei1vcHRpb24ucGlwZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LW9wdGlvbi1jb250YWluZXJdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LW9wdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgT25EZXN0cm95IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBwcml2YXRlIF9saXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXTtcbiAgcHJpdmF0ZSBfc2VhcmNoVmFsdWU6IHN0cmluZztcbiAgaXNJbml0ID0gZmFsc2U7XG4gIGlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IGZhbHNlO1xuICBsaXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBvcHRpb25TdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgZ3JvdXBTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbGlzdE9mVGFnT3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudFtdID0gW107XG4gIGxpc3RPZkZpbHRlck9wdGlvbjogTnpPcHRpb25Db21wb25lbnRbXSA9IFtdO1xuICBhY3RpdmF0ZWRPcHRpb246IE56T3B0aW9uQ29tcG9uZW50O1xuICAvKiogY2FuIG5vdCB1c2UgVmlld0NoaWxkIHNpbmNlIGl0IHdpbGwgbWF0Y2ggc3ViIG9wdGlvbnMgaW4gb3B0aW9uIGdyb3VwICoqL1xuICBAVmlld0NoaWxkcmVuKE56T3B0aW9uTGlDb21wb25lbnQpIGxpc3RPZk56T3B0aW9uTGlDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkxpQ29tcG9uZW50PjtcbiAgQElucHV0KCkgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD47XG4gIEBJbnB1dCgpIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PjtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56TGlzdE9mVGVtcGxhdGVPcHRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56T3B0aW9uQ29tcG9uZW50W10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNsaWNrT3B0aW9uID0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTY3JvbGxUb0JvdHRvbSA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcbiAgQElucHV0KCkgbnpNb2RlID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelNlcnZlclNlYXJjaCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XG4gIEBJbnB1dCgpIG56TWF4TXVsdGlwbGVDb3VudCA9IEluZmluaXR5O1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBJbnB1dCgpIGNvbXBhcmVXaXRoID0gKG8xOiBhbnksIG8yOiBhbnkpID0+IG8xID09PSBvMjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTZWFyY2hWYWx1ZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc2VhcmNoVmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTtcbiAgICB0aGlzLnVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpO1xuICB9XG5cbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICBASW5wdXQoKVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIHNldCBuekxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdKSB7XG4gICAgaWYgKHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9saXN0T2ZTZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgICAvKiogc2hvdWxkIGNsZWFyIGFjdGl2ZWRPcHRpb24gd2hlbiBsaXN0T2ZTZWxlY3RlZFZhbHVlIGNoYW5nZSAqKi9cbiAgICAgIHRoaXMuY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTtcbiAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBnZXQgbnpMaXN0T2ZTZWxlY3RlZFZhbHVlKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdE9mU2VsZWN0ZWRWYWx1ZTtcbiAgfVxuXG4gIGFkZFRhZ09wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5uek1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgIHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlID0gWyAuLi50aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdGhpcy5uelNlYXJjaFZhbHVlIF07XG4gICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBjbGlja09wdGlvbihvcHRpb246IE56T3B0aW9uQ29tcG9uZW50LCBpc1ByZXNzRW50ZXI6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbiwgaXNQcmVzc0VudGVyKTtcbiAgICB0aGlzLm56Q2xpY2tPcHRpb24uZW1pdCgpO1xuICB9XG5cbiAgb25LZXlEb3duVWwoZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmIChbIFVQX0FSUk9XLCBET1dOX0FSUk9XLCBFTlRFUiBdLmluZGV4T2YoZS5rZXlDb2RlKSA+IC0xKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBjb25zdCBhY3RpdmVJbmRleCA9IHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uLmZpbmRJbmRleChpdGVtID0+IGl0ZW0gPT09IHRoaXMuYWN0aXZhdGVkT3B0aW9uKTtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IFVQX0FSUk9XKSB7XG4gICAgICAgIC8vIGFycm93IHVwXG4gICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZlSW5kZXggPiAwID8gKGFjdGl2ZUluZGV4IC0gMSkgOiAodGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoIC0gMSk7XG4gICAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyT3B0aW9uWyBwcmVJbmRleCBdKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBET1dOX0FSUk9XKSB7XG4gICAgICAgIC8vIGFycm93IGRvd25cbiAgICAgICAgY29uc3QgbmV4dEluZGV4ID0gYWN0aXZlSW5kZXggPCB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbi5sZW5ndGggLSAxID8gKGFjdGl2ZUluZGV4ICsgMSkgOiAwO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZU9wdGlvbih0aGlzLmxpc3RPZkZpbHRlck9wdGlvblsgbmV4dEluZGV4IF0pO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IEVOVEVSKSB7XG4gICAgICAgIC8vIGVudGVyXG4gICAgICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgICAgICBpZiAoIXRoaXMuaXNBZGRUYWdPcHRpb25EaXNwbGF5KSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3B0aW9uKHRoaXMuYWN0aXZhdGVkT3B0aW9uLCB0cnVlKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRUYWdPcHRpb24oKTtcbiAgICAgICAgICAgIHRoaXMubnpDbGlja09wdGlvbi5lbWl0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVzZXRBY3RpdmVPcHRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZmlyc3RBY3RpdmVPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmNvbmNhdCh0aGlzLmxpc3RPZlRhZ09wdGlvbikuZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZVsgMCBdKSk7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24oZmlyc3RBY3RpdmVPcHRpb24pO1xuICB9XG5cbiAgY2xlYXJBY3RpdmF0ZWRPcHRpb24oKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmVPcHRpb24obnVsbCk7XG4gIH1cblxuICBzZXRBY3RpdmVPcHRpb24ob3B0aW9uOiBOek9wdGlvbkNvbXBvbmVudCwgc2Nyb2xsOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uID0gb3B0aW9uO1xuICAgIGlmIChzY3JvbGwpIHtcbiAgICAgIHRoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICB9XG4gIH1cblxuICBzY3JvbGxJbnRvVmlldygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5saXN0T2ZOek9wdGlvbkxpQ29tcG9uZW50ICYmIHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHRhcmdldE9wdGlvbiA9IHRoaXMubGlzdE9mTnpPcHRpb25MaUNvbXBvbmVudC5maW5kKG8gPT4gby5uek9wdGlvbiA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xuICAgICAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLXN0cmluZy1saXRlcmFsICovXG4gICAgICBpZiAodGFyZ2V0T3B0aW9uICYmIHRhcmdldE9wdGlvbi5lbCAmJiB0YXJnZXRPcHRpb24uZWxbICdzY3JvbGxJbnRvVmlld0lmTmVlZGVkJyBdKSB7XG4gICAgICAgIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1zdHJpbmctbGl0ZXJhbCAqL1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRhcmdldE9wdGlvbi5lbFsgJ3Njcm9sbEludG9WaWV3SWZOZWVkZWQnIF0oZmFsc2UpLCAxNTApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVNlbGVjdGVkT3B0aW9uKG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQsIGlzUHJlc3NFbnRlcjogYm9vbGVhbik6IHZvaWQge1xuICAgIC8qKiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRPcHRpb24gLT4gdXBkYXRlIG56TGlzdE9mU2VsZWN0ZWRWYWx1ZSAtPiBlbWl0IG56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZSAqKi9cbiAgICBpZiAob3B0aW9uICYmICFvcHRpb24ubnpEaXNhYmxlZCkge1xuICAgICAgbGV0IGNoYW5nZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc2V0QWN0aXZlT3B0aW9uKG9wdGlvbik7XG4gICAgICBsZXQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsgLi4udGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUgXTtcbiAgICAgIGlmICh0aGlzLmlzTXVsdGlwbGVPclRhZ3MpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSk7XG4gICAgICAgIGlmIChpc05vdE5pbCh0YXJnZXRWYWx1ZSkpIHtcbiAgICAgICAgICBpZiAoIWlzUHJlc3NFbnRlcikge1xuICAgICAgICAgICAgLyoqIHNob3VsZCBub3QgdG9nZ2xlIG9wdGlvbiB3aGVuIHByZXNzIGVudGVyICoqL1xuICAgICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zcGxpY2UobGlzdE9mU2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKSwgMSk7XG4gICAgICAgICAgICBjaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUubGVuZ3RoIDwgdGhpcy5uek1heE11bHRpcGxlQ291bnQpIHtcbiAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xuICAgICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLmNvbXBhcmVXaXRoKGxpc3RPZlNlbGVjdGVkVmFsdWVbIDAgXSwgb3B0aW9uLm56VmFsdWUpKSB7XG4gICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbIG9wdGlvbi5uelZhbHVlIF07XG4gICAgICAgIGNoYW5nZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLyoqIHVwZGF0ZSBzZWxlY3RlZFZhbHVlcyB3aGVuIGNsaWNrIG9wdGlvbiAqKi9cbiAgICAgIGlmIChjaGFuZ2VkKSB7XG4gICAgICAgIHRoaXMuX2xpc3RPZlNlbGVjdGVkVmFsdWUgPSBsaXN0T2ZTZWxlY3RlZFZhbHVlO1xuICAgICAgICB0aGlzLm56TGlzdE9mU2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMubnpMaXN0T2ZTZWxlY3RlZFZhbHVlKTtcbiAgICAgICAgaWYgKHRoaXMuaXNUYWdzTW9kZSkge1xuICAgICAgICAgIHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyhmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZWZyZXNoTGlzdE9mVGFnT3B0aW9uKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzVGFnc01vZGUpIHtcbiAgICAgIC8qKiByZWZyZXNoIHRhZ3Mgb3B0aW9uICoqL1xuICAgICAgY29uc3QgbGlzdE9mVGFnc09wdGlvbiA9IFtdO1xuICAgICAgdGhpcy5uekxpc3RPZlNlbGVjdGVkVmFsdWUuZm9yRWFjaCh2YWx1ZSA9PiB7XG4gICAgICAgIGNvbnN0IGV4aXN0ZWRPcHRpb24gPSB0aGlzLmxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8ubnpWYWx1ZSwgdmFsdWUpKTtcbiAgICAgICAgaWYgKCFleGlzdGVkT3B0aW9uKSB7XG4gICAgICAgICAgY29uc3QgbnpPcHRpb25Db21wb25lbnQgPSBuZXcgTnpPcHRpb25Db21wb25lbnQoKTtcbiAgICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uelZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpMYWJlbCA9IHZhbHVlO1xuICAgICAgICAgIGxpc3RPZlRhZ3NPcHRpb24ucHVzaChuek9wdGlvbkNvbXBvbmVudCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5saXN0T2ZUYWdPcHRpb24gPSBsaXN0T2ZUYWdzT3B0aW9uO1xuICAgIH1cblxuICB9XG5cbiAgcmVmcmVzaExpc3RPZkFsbFRlbXBsYXRlT3B0aW9uKCk6IHZvaWQge1xuICAgIHRoaXMubGlzdE9mQWxsVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKS5jb25jYXQodGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LnRvQXJyYXkoKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiBbIC4uLnByZSwgLi4uY3VyLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LnRvQXJyYXkoKSBdLCBbXSkpO1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5uekxpc3RPZlRlbXBsYXRlT3B0aW9uQ2hhbmdlLmVtaXQodGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbikpO1xuICB9XG5cbiAgcmVmcmVzaEFsbE9wdGlvblN0YXR1cyhpc1RlbXBsYXRlT3B0aW9uQ2hhbmdlOiBib29sZWFuKTogdm9pZCB7XG4gICAgLyoqIHVwZGF0ZSBuekxpc3RPZlNlbGVjdGVkVmFsdWUgfCB1cGRhdGUgb3B0aW9uIGxpc3QgLT4gdXBkYXRlIGxpc3RPZkFsbFRlbXBsYXRlT3B0aW9uIC0+IHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgYWN0aXZhdGVkT3B0aW9uICoqL1xuICAgIGlmICh0aGlzLmlzSW5pdCkge1xuICAgICAgaWYgKGlzVGVtcGxhdGVPcHRpb25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5yZWZyZXNoTGlzdE9mQWxsVGVtcGxhdGVPcHRpb24oKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVmcmVzaExpc3RPZlRhZ09wdGlvbigpO1xuICAgICAgdGhpcy51cGRhdGVMaXN0T2ZGaWx0ZXJPcHRpb24oKTtcbiAgICAgIHRoaXMudXBkYXRlQWRkVGFnT3B0aW9uRGlzcGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZUxpc3RPZkZpbHRlck9wdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLmxpc3RPZkZpbHRlck9wdGlvbiA9IG5ldyBOek9wdGlvblBpcGUoKS50cmFuc2Zvcm0odGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLCB0aGlzLm56U2VhcmNoVmFsdWUsIHRoaXMubnpGaWx0ZXJPcHRpb24sIHRoaXMubnpTZXJ2ZXJTZWFyY2gpIGFzIE56T3B0aW9uQ29tcG9uZW50W107XG4gICAgaWYgKHRoaXMubnpTZWFyY2hWYWx1ZSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmVPcHRpb24odGhpcy5saXN0T2ZGaWx0ZXJPcHRpb25bIDAgXSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIHdhdGNoIG9wdGlvbnMgY2hhbmdlIGluIG9wdGlvbiBncm91cCAqKi9cbiAgd2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmVPcHRpb24oKTtcbiAgICBsZXQgb3B0aW9uQ2hhbmdlcyQgPSBtZXJnZShcbiAgICAgIG5ldyBTdWJqZWN0KCkuYXNPYnNlcnZhYmxlKCksXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQuY2hhbmdlcyxcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQuY2hhbmdlc1xuICAgICk7XG4gICAgaWYgKHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5sZW5ndGgpIHtcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudC5mb3JFYWNoKGdyb3VwID0+IG9wdGlvbkNoYW5nZXMkID0gZ3JvdXAubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPyBtZXJnZShncm91cC5saXN0T2ZOek9wdGlvbkNvbXBvbmVudC5jaGFuZ2VzLCBvcHRpb25DaGFuZ2VzJCkgOiBvcHRpb25DaGFuZ2VzJCk7XG4gICAgfVxuICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uID0gb3B0aW9uQ2hhbmdlcyQuc3Vic2NyaWJlKCgpID0+IHRoaXMucmVmcmVzaEFsbE9wdGlvblN0YXR1cyh0cnVlKSk7XG4gIH1cblxuICB1bnN1YnNjcmliZUdyb3VwKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmdyb3VwU3Vic2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB1bnN1YnNjcmliZU9wdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcHRpb25TdWJzY3JpcHRpb24pIHtcbiAgICAgIHRoaXMub3B0aW9uU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm9wdGlvblN1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzVGFnc01vZGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpNb2RlID09PSAndGFncyc7XG4gIH1cblxuICBnZXQgaXNNdWx0aXBsZU9yVGFncygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uek1vZGUgPT09ICd0YWdzJyB8fCB0aGlzLm56TW9kZSA9PT0gJ211bHRpcGxlJztcbiAgfVxuXG4gIGdldCBpc05vdEZvdW5kRGlzcGxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzVGFnc01vZGUpICYmICghdGhpcy5saXN0T2ZGaWx0ZXJPcHRpb24ubGVuZ3RoKTtcbiAgfVxuXG4gIHVwZGF0ZUFkZFRhZ09wdGlvbkRpc3BsYXkoKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mQWxsT3B0aW9uID0gdGhpcy5saXN0T2ZBbGxUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCk7XG4gICAgY29uc3QgaXNNYXRjaCA9IGxpc3RPZkFsbE9wdGlvbi5pbmRleE9mKHRoaXMubnpTZWFyY2hWYWx1ZSkgPiAtMTtcbiAgICB0aGlzLmlzQWRkVGFnT3B0aW9uRGlzcGxheSA9IHRoaXMuaXNUYWdzTW9kZSAmJiB0aGlzLm56U2VhcmNoVmFsdWUgJiYgKCFpc01hdGNoKTtcbiAgfVxuXG4gIGRyb3BEb3duU2Nyb2xsKGU6IE1vdXNlRXZlbnQsIHVsOiBIVE1MVUxpc3RFbGVtZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHVsICYmICh1bC5zY3JvbGxIZWlnaHQgLSB1bC5zY3JvbGxUb3AgPT09IHVsLmNsaWVudEhlaWdodCkpIHtcbiAgICAgIHRoaXMubnpTY3JvbGxUb0JvdHRvbS5lbWl0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaXNJbml0ID0gdHJ1ZTtcbiAgICB0aGlzLnJlZnJlc2hBbGxPcHRpb25TdGF0dXModHJ1ZSk7XG4gICAgdGhpcy53YXRjaFN1Yk9wdGlvbkNoYW5nZXMoKTtcbiAgICB0aGlzLmdyb3VwU3Vic2NyaXB0aW9uID0gdGhpcy5saXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50LmNoYW5nZXMuc3Vic2NyaWJlKCgpID0+IHRoaXMud2F0Y2hTdWJPcHRpb25DaGFuZ2VzKCkpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZUdyb3VwKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZU9wdGlvbigpO1xuICB9XG59XG4iXX0=