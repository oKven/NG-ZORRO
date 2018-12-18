/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { isInteger } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
var NzPaginationComponent = /** @class */ (function () {
    function NzPaginationComponent(i18n) {
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._simple = false;
        this._hideOnSinglePage = false;
        this._pageSize = 10;
        this._pageSizeOptions = [10, 20, 30, 40];
        this._pageIndex = 1;
        this.firstIndex = 1;
        this.pages = [];
        this.nzInTable = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
    }
    Object.defineProperty(NzPaginationComponent.prototype, "nzItemRender", {
        get: /**
         * @return {?}
         */
        function () {
            return this._itemRender;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._itemRender = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzShowSizeChanger", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSizeChanger;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSizeChanger = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzHideOnSinglePage", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideOnSinglePage;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideOnSinglePage = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzShowQuickJumper", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showQuickJumper;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showQuickJumper = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzSimple", {
        get: /**
         * @return {?}
         */
        function () {
            return this._simple;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._simple = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageSizeOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSizeOptions;
        },
        /** page size changer select values */
        set: /**
         * page size changer select values
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.length) {
                this._pageSizeOptions = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageIndex;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (this._pageIndex === value) {
                return;
            }
            if (value > this.lastIndex) {
                this._pageIndex = this.lastIndex;
            }
            else if (value < this.firstIndex) {
                this._pageIndex = this.firstIndex;
            }
            else {
                this._pageIndex = Number(value);
            }
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzPageSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._pageSize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value === this._pageSize) {
                return;
            }
            this._pageSize = value;
            /** @type {?} */
            var pageIndexOverflow = this.checkLastIndexOverflow();
            if (pageIndexOverflow) {
                this.nzPageIndex = this.lastIndex;
                this.nzPageIndexChange.emit(this.lastIndex);
            }
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "nzTotal", {
        get: /**
         * @return {?}
         */
        function () {
            return this._total;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._total = value;
            this.buildIndexes();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPage = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index === this.nzPageIndex) {
            return;
        }
        if (index < this.firstIndex) {
            this.nzPageIndex = this.firstIndex;
        }
        else if (index > this.lastIndex) {
            this.nzPageIndex = this.lastIndex;
        }
        else {
            this.nzPageIndex = index;
        }
        this.nzPageIndexChange.emit(this.nzPageIndex);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPreFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.nzPageIndex - 5);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpNextFive = /**
     * @return {?}
     */
    function () {
        this.jumpPage(this.nzPageIndex + 5);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpPreOne = /**
     * @return {?}
     */
    function () {
        if (this.isFirstIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex - 1);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.jumpNextOne = /**
     * @return {?}
     */
    function () {
        if (this.isLastIndex) {
            return;
        }
        this.jumpPage(this.nzPageIndex + 1);
    };
    /**
     * @param {?} $event
     * @return {?}
     */
    NzPaginationComponent.prototype.onPageSizeChange = /**
     * @param {?} $event
     * @return {?}
     */
    function ($event) {
        this.nzPageSize = $event;
        this.nzPageSizeChange.emit($event);
    };
    /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    NzPaginationComponent.prototype.handleKeyDown = /**
     * @param {?} e
     * @param {?} input
     * @param {?} clearInputValue
     * @return {?}
     */
    function (e, input, clearInputValue) {
        /** @type {?} */
        var target = input;
        /** @type {?} */
        var inputValue = target.value;
        /** @type {?} */
        var currentInputValue = this.nzPageIndex;
        /** @type {?} */
        var value;
        if (inputValue === '') {
            value = inputValue;
        }
        else if (isNaN(Number(inputValue))) {
            value = currentInputValue;
        }
        else {
            value = Number(inputValue);
        }
        this.handleChange(value, target, clearInputValue);
    };
    /**
     * @param {?} page
     * @return {?}
     */
    NzPaginationComponent.prototype.isValid = /**
     * @param {?} page
     * @return {?}
     */
    function (page) {
        return isInteger(page) && (page >= 1) && (page !== this.nzPageIndex) && (page <= this.lastIndex);
    };
    /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    NzPaginationComponent.prototype.handleChange = /**
     * @param {?} value
     * @param {?} target
     * @param {?} clearInputValue
     * @return {?}
     */
    function (value, target, clearInputValue) {
        /** @type {?} */
        var page = value;
        if (this.isValid(page)) {
            this.nzPageIndex = page;
            this.nzPageIndexChange.emit(this.nzPageIndex);
        }
        if (clearInputValue) {
            target.value = null;
        }
        else {
            target.value = "" + this.nzPageIndex;
        }
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.checkLastIndexOverflow = /**
     * @return {?}
     */
    function () {
        return this.nzPageIndex > this.lastIndex;
    };
    Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return Math.ceil(this.nzTotal / this.nzPageSize);
        },
        enumerable: true,
        configurable: true
    });
    /** generate indexes list */
    /**
     * generate indexes list
     * @return {?}
     */
    NzPaginationComponent.prototype.buildIndexes = /**
     * generate indexes list
     * @return {?}
     */
    function () {
        /** @type {?} */
        var tmpPages = [];
        if (this.lastIndex <= 9) {
            for (var i = 2; i <= this.lastIndex - 1; i++) {
                tmpPages.push({ index: i });
            }
        }
        else {
            /** @type {?} */
            var current = +this.nzPageIndex;
            /** @type {?} */
            var left = Math.max(2, current - 2);
            /** @type {?} */
            var right = Math.min(current + 2, this.lastIndex - 1);
            if (current - 1 <= 2) {
                right = 5;
            }
            if (this.lastIndex - current <= 2) {
                left = this.lastIndex - 4;
            }
            for (var i = left; i <= right; i++) {
                tmpPages.push({ index: i });
            }
        }
        this.pages = tmpPages;
    };
    Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.lastIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzPageIndex === this.firstIndex;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    NzPaginationComponent.prototype.min = /**
     * @param {?} val1
     * @param {?} val2
     * @return {?}
     */
    function (val1, val2) {
        return Math.min(val1, val2);
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () { return _this.locale = _this.i18n.getLocaleData('Pagination'); });
    };
    /**
     * @return {?}
     */
    NzPaginationComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzPaginationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-pagination',
                    preserveWhitespaces: false,
                    template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon type=\"left\"></i></a>\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon type=\"right\"></i></a>\n  <a *ngIf=\"type=='page'\">{{page}}</a>\n</ng-template>\n<ng-container *ngIf=\"(nzHideOnSinglePage&&(nzTotal>nzPageSize))||!nzHideOnSinglePage\">\n  <ul\n    *ngIf=\"nzSimple\"\n    [class.ant-table-pagination]=\"nzInTable\"\n    class=\"ant-pagination ant-pagination-simple\">\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\n      <input\n        #simplePagerInput\n        [ngModel]=\"nzPageIndex\"\n        (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\"\n        size=\"3\">\n      <span class=\"ant-pagination-slash\">\uFF0F</span>\n      {{ lastIndex }}\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n  </ul>\n  <ul\n    *ngIf=\"!nzSimple\"\n    [class.mini]=\"nzSize=='small'\"\n    [class.ant-table-pagination]=\"nzInTable\"\n    class=\"ant-pagination\">\n    <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\n      <ng-template\n        [ngTemplateOutlet]=\"nzShowTotal\"\n        [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:[(nzPageIndex-1)*nzPageSize+1, min(nzPageIndex*nzPageSize, nzTotal)] }\">\n      </ng-template>\n    </li>\n    <li\n      title=\"{{ locale.prev_page }}\"\n      class=\"ant-pagination-prev\"\n      (click)=\"jumpPreOne()\"\n      [class.ant-pagination-disabled]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"firstIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(firstIndex)\"\n      [class.ant-pagination-item-active]=\"isFirstIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.prev_5\"\n      (click)=\"jumpPreFive()\"\n      class=\"ant-pagination-jump-prev\"\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex-3>firstIndex)\">\n      <a class=\"ant-pagination-item-link\">\n        <div class=\"ant-pagination-item-container\">\n          <i nz-icon type=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n        </div>\n      </a>\n    </li>\n    <li\n      *ngFor=\"let page of pages\"\n      [attr.title]=\"page.index\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(page.index)\"\n      [class.ant-pagination-item-active]=\"nzPageIndex==page.index\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page.index }\"></ng-template>\n    </li>\n    <li\n      [attr.title]=\"locale.next_5\"\n      (click)=\"jumpNextFive()\"\n      class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\n      *ngIf=\"(lastIndex >9)&&(nzPageIndex+3<lastIndex)\">\n      <a class=\"ant-pagination-item-link\">\n        <div class=\"ant-pagination-item-container\">\n          <i nz-icon type=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\n          <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\n        </div>\n      </a>\n    </li>\n    <li\n      [attr.title]=\"lastIndex\"\n      class=\"ant-pagination-item\"\n      (click)=\"jumpPage(lastIndex)\"\n      *ngIf=\"(lastIndex>0)&&(lastIndex!==firstIndex)\"\n      [class.ant-pagination-item-active]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\n    </li>\n    <li\n      title=\"{{ locale.next_page }}\"\n      class=\"ant-pagination-next\"\n      (click)=\"jumpNextOne()\"\n      [class.ant-pagination-disabled]=\"isLastIndex\">\n      <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\n    </li>\n    <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper||nzShowSizeChanger\">\n      <nz-select\n        *ngIf=\"nzShowSizeChanger\"\n        [nzSize]=\"nzSize=='small'?'small':''\"\n        class=\"ant-pagination-options-size-changer\"\n        [ngModel]=\"nzPageSize\"\n        (ngModelChange)=\"onPageSizeChange($event)\">\n        <nz-option\n          *ngFor=\"let option of nzPageSizeOptions\"\n          [nzLabel]=\"option + locale.items_per_page\"\n          [nzValue]=\"option\">\n        </nz-option>\n        <nz-option\n          *ngIf=\"nzPageSizeOptions.indexOf(nzPageSize)==-1\"\n          [nzLabel]=\"nzPageSize + locale.items_per_page\"\n          [nzValue]=\"nzPageSize\">\n        </nz-option>\n      </nz-select>\n      <div class=\"ant-pagination-options-quick-jumper\"\n        *ngIf=\"nzShowQuickJumper\">\n        {{ locale.jump_to }}\n        <input #quickJumperInput (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\n        {{ locale.page }}\n      </div>\n    </div>\n  </ul>\n</ng-container>"
                }] }
    ];
    /** @nocollapse */
    NzPaginationComponent.ctorParameters = function () { return [
        { type: NzI18nService }
    ]; };
    NzPaginationComponent.propDecorators = {
        _itemRender: [{ type: ViewChild, args: ['renderItemTemplate',] }],
        nzShowTotal: [{ type: Input }],
        nzInTable: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzPageSizeChange: [{ type: Output }],
        nzPageIndexChange: [{ type: Output }],
        nzItemRender: [{ type: Input }],
        nzShowSizeChanger: [{ type: Input }],
        nzHideOnSinglePage: [{ type: Input }],
        nzShowQuickJumper: [{ type: Input }],
        nzSimple: [{ type: Input }],
        nzPageSizeOptions: [{ type: Input }],
        nzPageIndex: [{ type: Input }],
        nzPageSize: [{ type: Input }],
        nzTotal: [{ type: Input }]
    };
    return NzPaginationComponent;
}());
export { NzPaginationComponent };
function NzPaginationComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzPaginationComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzPaginationComponent.prototype.locale;
    /** @type {?} */
    NzPaginationComponent.prototype._itemRender;
    /** @type {?} */
    NzPaginationComponent.prototype._showSizeChanger;
    /** @type {?} */
    NzPaginationComponent.prototype._showQuickJumper;
    /** @type {?} */
    NzPaginationComponent.prototype._simple;
    /** @type {?} */
    NzPaginationComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    NzPaginationComponent.prototype._pageSize;
    /** @type {?} */
    NzPaginationComponent.prototype._pageSizeOptions;
    /** @type {?} */
    NzPaginationComponent.prototype._total;
    /** @type {?} */
    NzPaginationComponent.prototype._pageIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.firstIndex;
    /** @type {?} */
    NzPaginationComponent.prototype.pages;
    /** @type {?} */
    NzPaginationComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzPaginationComponent.prototype.nzInTable;
    /** @type {?} */
    NzPaginationComponent.prototype.nzSize;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzPaginationComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzPaginationComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsicGFnaW5hdGlvbi9uei1wYWdpbmF0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUdMLE1BQU0sRUFDTixXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQThQdEQsK0JBQW9CLElBQW1CO1FBQW5CLFNBQUksR0FBSixJQUFJLENBQWU7NEJBdFBoQixJQUFJLE9BQU8sRUFBUTs7UUFFMUMsY0FBYyxFQUFFLENBQUM7Z0NBRVUsS0FBSztnQ0FDTCxLQUFLO3VCQUNkLEtBQUs7aUNBQ0ssS0FBSzt5QkFDYixFQUFFO2dDQUNLLENBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFFOzBCQUV4QixDQUFDO1FBQ3RCLGtCQUFhLENBQUMsQ0FBQztRQUNmLGFBQVEsRUFBRSxDQUFDO1FBRVgsaUJBQXFCLEtBQUssQ0FBQztRQUUzQix3QkFBNEQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUMvRSx5QkFBNkQsSUFBSSxZQUFZLEVBQUUsQ0FBQztLQXFPL0U7SUFuT0Qsc0JBQ0ksK0NBQVk7Ozs7UUFJaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDekI7Ozs7O1FBUEQsVUFDaUIsS0FBeUU7WUFD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RSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7S0FDOUI7O2dCQXRRRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGVBQWU7b0JBQ3BDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLDhuTEFBcUQ7aUJBQ3REOzs7O2dCQU5RLGFBQWE7Ozs4QkFXbkIsU0FBUyxTQUFDLG9CQUFvQjs4QkFXOUIsS0FBSzs0QkFDTCxLQUFLO3lCQUNMLEtBQUs7bUNBQ0wsTUFBTTtvQ0FDTixNQUFNOytCQUVOLEtBQUs7b0NBU0wsS0FBSztxQ0FTTCxLQUFLO29DQVNMLEtBQUs7MkJBU0wsS0FBSztvQ0FVTCxLQUFLOzhCQVdMLEtBQUs7NkJBbUJMLEtBQUs7MEJBa0JMLEtBQUs7O2dDQTFJUjs7U0F1QmEscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IGlzSW50ZWdlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXBhZ2luYXRpb24nLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpQYWdpbmF0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHVuc3Vic2NyaWJlJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcbiAgQFZpZXdDaGlsZCgncmVuZGVySXRlbVRlbXBsYXRlJykgcHJpdmF0ZSBfaXRlbVJlbmRlcjogVGVtcGxhdGVSZWY8eyAkaW1wbGljaXQ6ICdwYWdlJyB8ICdwcmV2JyB8ICduZXh0JywgcGFnZTogbnVtYmVyIH0+O1xuICBwcml2YXRlIF9zaG93U2l6ZUNoYW5nZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1F1aWNrSnVtcGVyID0gZmFsc2U7XG4gIHByaXZhdGUgX3NpbXBsZSA9IGZhbHNlO1xuICBwcml2YXRlIF9oaWRlT25TaW5nbGVQYWdlID0gZmFsc2U7XG4gIHByaXZhdGUgX3BhZ2VTaXplID0gMTA7XG4gIHByaXZhdGUgX3BhZ2VTaXplT3B0aW9ucyA9IFsgMTAsIDIwLCAzMCwgNDAgXTtcbiAgcHJpdmF0ZSBfdG90YWw6IG51bWJlcjtcbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMTtcbiAgZmlyc3RJbmRleCA9IDE7XG4gIHBhZ2VzID0gW107XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyLCByYW5nZTogWyBudW1iZXIsIG51bWJlciBdIH0+O1xuICBASW5wdXQoKSBuekluVGFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmc7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VTaXplQ2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56UGFnZUluZGV4Q2hhbmdlOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpJdGVtUmVuZGVyKHZhbHVlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogJ3BhZ2UnIHwgJ3ByZXYnIHwgJ25leHQnLCBwYWdlOiBudW1iZXIgfT4pIHtcbiAgICB0aGlzLl9pdGVtUmVuZGVyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpJdGVtUmVuZGVyKCk6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiAncGFnZScgfCAncHJldicgfCAnbmV4dCcsIHBhZ2U6IG51bWJlciB9PiB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1SZW5kZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93U2l6ZUNoYW5nZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U2l6ZUNoYW5nZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NpemVDaGFuZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93U2l6ZUNoYW5nZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpIaWRlT25TaW5nbGVQYWdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZU9uU2luZ2xlUGFnZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpIaWRlT25TaW5nbGVQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlT25TaW5nbGVQYWdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1F1aWNrSnVtcGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1F1aWNrSnVtcGVyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dRdWlja0p1bXBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1F1aWNrSnVtcGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2ltcGxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2ltcGxlID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNpbXBsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2ltcGxlO1xuICB9XG5cbiAgLyoqIHBhZ2Ugc2l6ZSBjaGFuZ2VyIHNlbGVjdCB2YWx1ZXMgKi9cbiAgQElucHV0KClcbiAgc2V0IG56UGFnZVNpemVPcHRpb25zKHZhbHVlOiBudW1iZXJbXSkge1xuICAgIGlmICh2YWx1ZSAmJiB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3BhZ2VTaXplT3B0aW9ucyA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBhZ2VTaXplT3B0aW9ucygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VTaXplT3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBhZ2VJbmRleCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMuX3BhZ2VJbmRleCA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbHVlID4gdGhpcy5sYXN0SW5kZXgpIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAodmFsdWUgPCB0aGlzLmZpcnN0SW5kZXgpIHtcbiAgICAgIHRoaXMuX3BhZ2VJbmRleCA9IHRoaXMuZmlyc3RJbmRleDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcGFnZUluZGV4ID0gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5idWlsZEluZGV4ZXMoKTtcbiAgfVxuXG4gIGdldCBuelBhZ2VJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wYWdlSW5kZXg7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQYWdlU2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl9wYWdlU2l6ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9wYWdlU2l6ZSA9IHZhbHVlO1xuICAgIGNvbnN0IHBhZ2VJbmRleE92ZXJmbG93ID0gdGhpcy5jaGVja0xhc3RJbmRleE92ZXJmbG93KCk7XG4gICAgaWYgKHBhZ2VJbmRleE92ZXJmbG93KSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gdGhpcy5sYXN0SW5kZXg7XG4gICAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5sYXN0SW5kZXgpO1xuICAgIH1cbiAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xuICB9XG5cbiAgZ2V0IG56UGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUb3RhbCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fdG90YWwgPSB2YWx1ZTtcbiAgICB0aGlzLmJ1aWxkSW5kZXhlcygpO1xuICB9XG5cbiAgZ2V0IG56VG90YWwoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fdG90YWw7XG4gIH1cblxuICBqdW1wUGFnZShpbmRleDogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKGluZGV4ID09PSB0aGlzLm56UGFnZUluZGV4KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgdGhpcy5maXJzdEluZGV4KSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gdGhpcy5maXJzdEluZGV4O1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiB0aGlzLmxhc3RJbmRleCkge1xuICAgICAgdGhpcy5uelBhZ2VJbmRleCA9IHRoaXMubGFzdEluZGV4O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gaW5kZXg7XG4gICAgfVxuICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgfVxuXG4gIGp1bXBQcmVGaXZlKCk6IHZvaWQge1xuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5uelBhZ2VJbmRleCAtIDUpO1xuICB9XG5cbiAganVtcE5leHRGaXZlKCk6IHZvaWQge1xuICAgIHRoaXMuanVtcFBhZ2UodGhpcy5uelBhZ2VJbmRleCArIDUpO1xuICB9XG5cbiAganVtcFByZU9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0ZpcnN0SW5kZXgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5qdW1wUGFnZSh0aGlzLm56UGFnZUluZGV4IC0gMSk7XG4gIH1cblxuICBqdW1wTmV4dE9uZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0xhc3RJbmRleCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmp1bXBQYWdlKHRoaXMubnpQYWdlSW5kZXggKyAxKTtcbiAgfVxuXG4gIG9uUGFnZVNpemVDaGFuZ2UoJGV2ZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLm56UGFnZVNpemUgPSAkZXZlbnQ7XG4gICAgdGhpcy5uelBhZ2VTaXplQ2hhbmdlLmVtaXQoJGV2ZW50KTtcbiAgfVxuXG4gIGhhbmRsZUtleURvd24oZTogS2V5Ym9hcmRFdmVudCwgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNsZWFySW5wdXRWYWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGlucHV0O1xuICAgIGNvbnN0IGlucHV0VmFsdWUgPSB0YXJnZXQudmFsdWU7XG4gICAgY29uc3QgY3VycmVudElucHV0VmFsdWUgPSB0aGlzLm56UGFnZUluZGV4O1xuICAgIGxldCB2YWx1ZTtcblxuICAgIGlmIChpbnB1dFZhbHVlID09PSAnJykge1xuICAgICAgdmFsdWUgPSBpbnB1dFZhbHVlO1xuICAgIH0gZWxzZSBpZiAoaXNOYU4oTnVtYmVyKGlucHV0VmFsdWUpKSkge1xuICAgICAgdmFsdWUgPSBjdXJyZW50SW5wdXRWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBOdW1iZXIoaW5wdXRWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlKHZhbHVlLCB0YXJnZXQsIGNsZWFySW5wdXRWYWx1ZSk7XG4gIH1cblxuICBpc1ZhbGlkKHBhZ2U6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBpc0ludGVnZXIocGFnZSkgJiYgKHBhZ2UgPj0gMSkgJiYgKHBhZ2UgIT09IHRoaXMubnpQYWdlSW5kZXgpICYmIChwYWdlIDw9IHRoaXMubGFzdEluZGV4KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh2YWx1ZTogbnVtYmVyLCB0YXJnZXQ6IEhUTUxJbnB1dEVsZW1lbnQsIGNsZWFySW5wdXRWYWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGNvbnN0IHBhZ2UgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5pc1ZhbGlkKHBhZ2UpKSB7XG4gICAgICB0aGlzLm56UGFnZUluZGV4ID0gcGFnZTtcbiAgICAgIHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZUluZGV4KTtcbiAgICB9XG4gICAgaWYgKGNsZWFySW5wdXRWYWx1ZSkge1xuICAgICAgdGFyZ2V0LnZhbHVlID0gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFyZ2V0LnZhbHVlID0gYCR7dGhpcy5uelBhZ2VJbmRleH1gO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrTGFzdEluZGV4T3ZlcmZsb3coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPiB0aGlzLmxhc3RJbmRleDtcbiAgfVxuXG4gIGdldCBsYXN0SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMubnpUb3RhbCAvIHRoaXMubnpQYWdlU2l6ZSk7XG4gIH1cblxuICAvKiogZ2VuZXJhdGUgaW5kZXhlcyBsaXN0ICovXG4gIGJ1aWxkSW5kZXhlcygpOiB2b2lkIHtcbiAgICBjb25zdCB0bXBQYWdlcyA9IFtdO1xuICAgIGlmICh0aGlzLmxhc3RJbmRleCA8PSA5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSB0aGlzLmxhc3RJbmRleCAtIDE7IGkrKykge1xuICAgICAgICB0bXBQYWdlcy5wdXNoKHsgaW5kZXg6IGkgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSArdGhpcy5uelBhZ2VJbmRleDtcbiAgICAgIGxldCBsZWZ0ID0gTWF0aC5tYXgoMiwgY3VycmVudCAtIDIpO1xuICAgICAgbGV0IHJpZ2h0ID0gTWF0aC5taW4oY3VycmVudCArIDIsIHRoaXMubGFzdEluZGV4IC0gMSk7XG5cbiAgICAgIGlmIChjdXJyZW50IC0gMSA8PSAyKSB7XG4gICAgICAgIHJpZ2h0ID0gNTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMubGFzdEluZGV4IC0gY3VycmVudCA8PSAyKSB7XG4gICAgICAgIGxlZnQgPSB0aGlzLmxhc3RJbmRleCAtIDQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IGkgPSBsZWZ0OyBpIDw9IHJpZ2h0OyBpKyspIHtcbiAgICAgICAgdG1wUGFnZXMucHVzaCh7IGluZGV4OiBpIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnBhZ2VzID0gdG1wUGFnZXM7XG4gIH1cblxuICBnZXQgaXNMYXN0SW5kZXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpQYWdlSW5kZXggPT09IHRoaXMubGFzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGlzRmlyc3RJbmRleCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelBhZ2VJbmRleCA9PT0gdGhpcy5maXJzdEluZGV4O1xuICB9XG5cbiAgbWluKHZhbDE6IG51bWJlciwgdmFsMjogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gTWF0aC5taW4odmFsMSwgdmFsMik7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnUGFnaW5hdGlvbicpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=