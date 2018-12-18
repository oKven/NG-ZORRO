/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
/**
 * @record
 */
export function NzThItemInterface() { }
function NzThItemInterface_tsickle_Closure_declarations() {
    /** @type {?} */
    NzThItemInterface.prototype.text;
    /** @type {?} */
    NzThItemInterface.prototype.value;
    /** @type {?} */
    NzThItemInterface.prototype.checked;
}
var NzThComponent = /** @class */ (function () {
    function NzThComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._sort = null;
        this._filters = [];
        this._showSort = false;
        this._showFilter = false;
        this._showCheckbox = false;
        this._showRowSelection = false;
        this._hasDefaultFilter = false;
        this._customFilter = false;
        this.el = this.elementRef.nativeElement;
        this.hasFilterValue = false;
        this.filterVisible = false;
        this.multipleFilterList = [];
        this.singleFilterList = [];
        /* tslint:disable-next-line:no-any */
        this.nzSelections = [];
        this.nzChecked = false;
        this.nzDisabled = false;
        this.nzIndeterminate = false;
        this.nzFilterMultiple = true;
        this.nzCheckedChange = new EventEmitter();
        this.nzSortChange = new EventEmitter();
        this.nzSortChangeWithKey = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzFilterChange = new EventEmitter();
    }
    Object.defineProperty(NzThComponent.prototype, "hasActionsClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzShowFilter || this.nzShowSort || this.nzCustomFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "hasFiltersClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzShowFilter || this.nzCustomFilter;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "hasSortersClass", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzShowSort;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateSortValue = /**
     * @return {?}
     */
    function () {
        if (this.nzShowSort) {
            if (this.nzSort === 'descend') {
                this.setSortValue('ascend');
            }
            else if (this.nzSort === 'ascend') {
                this.setSortValue(null);
            }
            else {
                this.setSortValue('descend');
            }
        }
    };
    Object.defineProperty(NzThComponent.prototype, "nzCustomFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._customFilter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._customFilter = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showSort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showSort = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowFilter", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showFilter;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showFilter = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowRowSelection", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showRowSelection;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showRowSelection = toBoolean(value);
            if (this._showRowSelection) {
                this.renderer.addClass(this.el, 'ant-table-selection-column-custom');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column-custom');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzLeft", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-th-left-sticky');
                this.renderer.setStyle(this.el, 'left', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-th-left-sticky');
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzRight", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this.renderer.addClass(this.el, 'ant-table-th-right-sticky');
                this.renderer.setStyle(this.el, 'right', value);
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-th-right-sticky');
                this.renderer.removeStyle(this.el, 'right');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzExpand", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            /** @type {?} */
            var isExpand = toBoolean(value);
            if (isExpand) {
                this.renderer.addClass(this.el, 'ant-table-expand-icon-th');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-expand-icon-th');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzShowCheckbox", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showCheckbox;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showCheckbox = toBoolean(value);
            if (this._showCheckbox) {
                this.renderer.addClass(this.el, 'ant-table-selection-column');
            }
            else {
                this.renderer.removeClass(this.el, 'ant-table-selection-column');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "nzSort", {
        get: /**
         * @return {?}
         */
        function () {
            return this._sort;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._sort = value;
            if ((value !== 'ascend') && (value !== 'descend')) {
                this.renderer.removeClass(this.el, 'ant-table-column-sort');
            }
            else {
                this.renderer.addClass(this.el, 'ant-table-column-sort');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.setSortValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.nzSort = value;
        this.nzSortChangeWithKey.emit({ key: this.nzSortKey, value: this.nzSort });
        this.nzSortChange.emit(this.nzSort);
    };
    Object.defineProperty(NzThComponent.prototype, "filterList", {
        get: /**
         * @return {?}
         */
        function () {
            return this.multipleFilterList.filter(function (item) { return item.checked; }).map(function (item) { return item.value; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzThComponent.prototype, "filterValue", {
        /* tslint:disable-next-line:no-any */
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var checkedFilter = this.singleFilterList.find(function (item) { return item.checked; });
            return checkedFilter ? checkedFilter.value : null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzThComponent.prototype.updateFilterStatus = /**
     * @return {?}
     */
    function () {
        if (this.nzFilterMultiple) {
            this.hasFilterValue = this.filterList.length > 0;
        }
        else {
            this.hasFilterValue = isNotNil(this.filterValue);
        }
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.search = /**
     * @return {?}
     */
    function () {
        this.updateFilterStatus();
        if (this.nzFilterMultiple) {
            this.nzFilterChange.emit(this.filterList);
        }
        else {
            this.nzFilterChange.emit(this.filterValue);
        }
        this.hideDropDown();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.initMultipleFilterList(true);
        this.initSingleFilterList(true);
        this.search();
        this.hideDropDown();
        this.hasFilterValue = false;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkMultiple = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        filter.checked = !filter.checked;
    };
    /**
     * @param {?} filter
     * @return {?}
     */
    NzThComponent.prototype.checkSingle = /**
     * @param {?} filter
     * @return {?}
     */
    function (filter) {
        this.singleFilterList.forEach(function (item) { return item.checked = item === filter; });
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.hideDropDown = /**
     * @return {?}
     */
    function () {
        this.nzDropDownComponent.nzVisible = false;
        this.nzDropDownComponent.hide();
        this.filterVisible = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzThComponent.prototype.dropDownVisibleChange = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.filterVisible = value;
        if (!value) {
            this.search();
        }
    };
    Object.defineProperty(NzThComponent.prototype, "nzFilters", {
        get: /**
         * @return {?}
         */
        function () {
            return this._filters;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value)) {
                this._filters = value;
                this.initMultipleFilterList();
                this.initSingleFilterList();
                this.updateFilterStatus();
            }
            else {
                console.warn('nzFilters only accept type of Array<{ text: string; value: any }>');
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initMultipleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.multipleFilterList = this.nzFilters.map(function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    /**
     * @param {?=} force
     * @return {?}
     */
    NzThComponent.prototype.initSingleFilterList = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        this.singleFilterList = this.nzFilters.map(function (item) {
            /** @type {?} */
            var checked = force ? false : !!item.byDefault;
            if (checked) {
                _this._hasDefaultFilter = true;
            }
            return { text: item.text, value: item.value, checked: checked };
        });
        this.checkDefaultFilters();
    };
    /**
     * @return {?}
     */
    NzThComponent.prototype.checkDefaultFilters = /**
     * @return {?}
     */
    function () {
        if (!this.nzFilters || this.nzFilters.length === 0 || !this._hasDefaultFilter) {
            return;
        }
        this.updateFilterStatus();
    };
    NzThComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'th:not(.nz-disable-th)',
                    preserveWhitespaces: false,
                    template: "<ng-template #checkboxTemplate>\n  <label\n    [class.ant-table-selection-select-all-custom]=\"nzShowRowSelection\"\n    nz-checkbox\n    [(ngModel)]=\"nzChecked\"\n    [nzDisabled]=\"nzDisabled\"\n    [nzIndeterminate]=\"nzIndeterminate\"\n    (ngModelChange)=\"nzCheckedChange.emit($event)\">\n  </label>\n</ng-template>\n<div [class.ant-table-column-sorters]=\"nzShowSort\" (click)=\"updateSortValue()\">\n  <div class=\"ant-table-selection\" *ngIf=\"nzShowRowSelection\">\n    <ng-container *ngIf=\"nzShowCheckbox\">\n      <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n    </ng-container>\n    <nz-dropdown nzPlacement=\"bottomLeft\">\n      <div nz-dropdown class=\"ant-table-selection-down\">\n        <i nz-icon type=\"down\"></i>\n      </div>\n      <ul nz-menu class=\"ant-table-selection-menu\">\n        <li nz-menu-item *ngFor=\"let selection of nzSelections\" (click)=\"selection.onSelect()\">{{selection.text}}</li>\n      </ul>\n    </nz-dropdown>\n  </div>\n  <ng-container *ngIf=\"nzShowCheckbox && !nzShowRowSelection\">\n    <ng-template [ngTemplateOutlet]=\"checkboxTemplate\"></ng-template>\n  </ng-container>\n  <ng-content></ng-content>\n  <div class=\"ant-table-column-sorter\" *ngIf=\"nzShowSort\">\n    <i nz-icon\n      type=\"caret-up\"\n      class=\"ant-table-column-sorter-up\"\n      [class.on]=\"nzSort == 'ascend'\"\n      [class.off]=\"nzSort != 'ascend'\"></i>\n    <i nz-icon\n      type=\"caret-down\"\n      class=\"ant-table-column-sorter-down\"\n      [class.on]=\"nzSort == 'descend'\"\n      [class.off]=\"nzSort != 'descend'\"></i>\n  </div>\n</div>\n<nz-dropdown nzTrigger=\"click\" *ngIf=\"nzShowFilter\" [nzClickHide]=\"false\" [hasFilterButton]=\"true\" (nzVisibleChange)=\"dropDownVisibleChange($event)\">\n  <i nz-icon type=\"filter\" theme=\"fill\" [class.ant-table-filter-selected]=\"hasFilterValue\" [class.ant-table-filter-open]=\"filterVisible\" nz-dropdown></i>\n  <ul nz-menu>\n    <ng-container *ngIf=\"nzFilterMultiple\">\n      <li nz-menu-item *ngFor=\"let filter of multipleFilterList\" (click)=\"checkMultiple(filter)\">\n        <label nz-checkbox [ngModel]=\"filter.checked\"></label><span>{{filter.text}}</span>\n      </li>\n    </ng-container>\n    <ng-container *ngIf=\"!nzFilterMultiple\">\n      <li nz-menu-item *ngFor=\"let filter of singleFilterList\" (click)=\"checkSingle(filter)\">\n        <label nz-radio [ngModel]=\"filter.checked\">{{filter.text}}</label>\n      </li>\n    </ng-container>\n  </ul>\n  <div class=\"ant-table-filter-dropdown-btns\">\n    <a class=\"ant-table-filter-dropdown-link confirm\" (click)=\"hideDropDown()\">\n      <span (click)=\"search()\">{{'Table.filterConfirm' | nzI18n}}</span>\n    </a>\n    <a class=\"ant-table-filter-dropdown-link clear\" (click)=\"hideDropDown()\">\n      <span (click)=\"reset()\">{{'Table.filterReset' | nzI18n}}</span>\n    </a>\n  </div>\n</nz-dropdown>\n"
                }] }
    ];
    /** @nocollapse */
    NzThComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzThComponent.propDecorators = {
        nzDropDownComponent: [{ type: ViewChild, args: [NzDropDownComponent,] }],
        nzSelections: [{ type: Input }],
        nzChecked: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzIndeterminate: [{ type: Input }],
        nzSortKey: [{ type: Input }],
        nzFilterMultiple: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzCheckedChange: [{ type: Output }],
        nzSortChange: [{ type: Output }],
        nzSortChangeWithKey: [{ type: Output }],
        nzFilterChange: [{ type: Output }],
        hasActionsClass: [{ type: HostBinding, args: ['class.ant-table-column-has-actions',] }],
        hasFiltersClass: [{ type: HostBinding, args: ['class.ant-table-column-has-filters',] }],
        hasSortersClass: [{ type: HostBinding, args: ['class.ant-table-column-has-sorters',] }],
        nzCustomFilter: [{ type: Input }],
        nzShowSort: [{ type: Input }],
        nzShowFilter: [{ type: Input }],
        nzShowRowSelection: [{ type: Input }],
        nzLeft: [{ type: Input }],
        nzRight: [{ type: Input }],
        nzExpand: [{ type: Input }],
        nzShowCheckbox: [{ type: Input }],
        nzSort: [{ type: Input }],
        nzFilters: [{ type: Input }]
    };
    return NzThComponent;
}());
export { NzThComponent };
function NzThComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzThComponent.prototype._sort;
    /** @type {?} */
    NzThComponent.prototype._filters;
    /** @type {?} */
    NzThComponent.prototype._showSort;
    /** @type {?} */
    NzThComponent.prototype._showFilter;
    /** @type {?} */
    NzThComponent.prototype._showCheckbox;
    /** @type {?} */
    NzThComponent.prototype._showRowSelection;
    /** @type {?} */
    NzThComponent.prototype._hasDefaultFilter;
    /** @type {?} */
    NzThComponent.prototype._customFilter;
    /** @type {?} */
    NzThComponent.prototype.el;
    /** @type {?} */
    NzThComponent.prototype.hasFilterValue;
    /** @type {?} */
    NzThComponent.prototype.filterVisible;
    /** @type {?} */
    NzThComponent.prototype.multipleFilterList;
    /** @type {?} */
    NzThComponent.prototype.singleFilterList;
    /** @type {?} */
    NzThComponent.prototype.nzDropDownComponent;
    /** @type {?} */
    NzThComponent.prototype.nzSelections;
    /** @type {?} */
    NzThComponent.prototype.nzChecked;
    /** @type {?} */
    NzThComponent.prototype.nzDisabled;
    /** @type {?} */
    NzThComponent.prototype.nzIndeterminate;
    /** @type {?} */
    NzThComponent.prototype.nzSortKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterMultiple;
    /** @type {?} */
    NzThComponent.prototype.nzWidth;
    /** @type {?} */
    NzThComponent.prototype.nzCheckedChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChange;
    /** @type {?} */
    NzThComponent.prototype.nzSortChangeWithKey;
    /** @type {?} */
    NzThComponent.prototype.nzFilterChange;
    /** @type {?} */
    NzThComponent.prototype.elementRef;
    /** @type {?} */
    NzThComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVqRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7SUEyUnRFLHVCQUFvQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO3FCQXhRdkQsSUFBSTt3QkFDZSxFQUFFO3lCQUNqQixLQUFLOzJCQUNILEtBQUs7NkJBQ0gsS0FBSztpQ0FDRCxLQUFLO2lDQUNMLEtBQUs7NkJBQ1QsS0FBSztRQUM3QixVQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUNoRCxzQkFBaUIsS0FBSyxDQUFDO1FBQ3ZCLHFCQUFnQixLQUFLLENBQUM7UUFDdEIsMEJBQTBDLEVBQUUsQ0FBQztRQUM3Qyx3QkFBd0MsRUFBRSxDQUFDOztRQUczQyxvQkFBZ0UsRUFBRSxDQUFDO1FBQ25FLGlCQUFxQixLQUFLLENBQUM7UUFDM0Isa0JBQXNCLEtBQUssQ0FBQztRQUM1Qix1QkFBMkIsS0FBSyxDQUFDO1FBRWpDLHdCQUE0QixJQUFJLENBQUM7UUFFakMsdUJBQXFDLElBQUksWUFBWSxFQUFXLENBQUM7UUFDakUsb0JBQWtDLElBQUksWUFBWSxFQUFVLENBQUM7UUFDN0QsMkJBQXlDLElB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QyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUM3RSxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztLQUMzQjs7Z0JBN1FGLFNBQVMsU0FBQzs7b0JBRVQsUUFBUSxFQUFhLHdCQUF3QjtvQkFDN0MsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsbTNGQUE2QztpQkFDOUM7Ozs7Z0JBN0JDLFVBQVU7Z0JBS1YsU0FBUzs7O3NDQXVDUixTQUFTLFNBQUMsbUJBQW1COytCQUU3QixLQUFLOzRCQUNMLEtBQUs7NkJBQ0wsS0FBSztrQ0FDTCxLQUFLOzRCQUNMLEtBQUs7bUNBQ0wsS0FBSzswQkFDTCxLQUFLO2tDQUNMLE1BQU07K0JBQ04sTUFBTTtzQ0FDTixNQUFNO2lDQUVOLE1BQU07a0NBRU4sV0FBVyxTQUFDLG9DQUFvQztrQ0FLaEQsV0FBVyxTQUFDLG9DQUFvQztrQ0FLaEQsV0FBVyxTQUFDLG9DQUFvQztpQ0FpQmhELEtBQUs7NkJBU0wsS0FBSzsrQkFTTCxLQUFLO3FDQVNMLEtBQUs7eUJBY0wsS0FBSzswQkFXTCxLQUFLOzJCQVdMLEtBQUs7aUNBVUwsS0FBSzt5QkFjTCxLQUFLOzRCQTZFTCxLQUFLOzt3QkE1UFI7O1NBZ0NhLGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56RHJvcERvd25Db21wb25lbnQgfSBmcm9tICcuLi9kcm9wZG93bi9uei1kcm9wZG93bi5jb21wb25lbnQnO1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG5leHBvcnQgdHlwZSBOelRoRmlsdGVyVHlwZSA9IEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55OyBieURlZmF1bHQ/OiBib29sZWFuIH0+O1xuXG5leHBvcnQgaW50ZXJmYWNlIE56VGhJdGVtSW50ZXJmYWNlIHtcbiAgdGV4dDogc3RyaW5nO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHZhbHVlOiBhbnk7XG4gIGNoZWNrZWQ6IGJvb2xlYW47XG59XG5cbkBDb21wb25lbnQoe1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Y29tcG9uZW50LXNlbGVjdG9yXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICd0aDpub3QoLm56LWRpc2FibGUtdGgpJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRoLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRoQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSBfc29ydCA9IG51bGw7XG4gIHByaXZhdGUgX2ZpbHRlcnM6IE56VGhGaWx0ZXJUeXBlID0gW107XG4gIHByaXZhdGUgX3Nob3dTb3J0ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dGaWx0ZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd0NoZWNrYm94ID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dSb3dTZWxlY3Rpb24gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGFzRGVmYXVsdEZpbHRlciA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXN0b21GaWx0ZXIgPSBmYWxzZTtcbiAgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIGhhc0ZpbHRlclZhbHVlID0gZmFsc2U7XG4gIGZpbHRlclZpc2libGUgPSBmYWxzZTtcbiAgbXVsdGlwbGVGaWx0ZXJMaXN0OiBOelRoSXRlbUludGVyZmFjZVtdID0gW107XG4gIHNpbmdsZUZpbHRlckxpc3Q6IE56VGhJdGVtSW50ZXJmYWNlW10gPSBbXTtcbiAgQFZpZXdDaGlsZChOekRyb3BEb3duQ29tcG9uZW50KSBuekRyb3BEb3duQ29tcG9uZW50OiBOekRyb3BEb3duQ29tcG9uZW50O1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIEBJbnB1dCgpIG56U2VsZWN0aW9uczogQXJyYXk8eyB0ZXh0OiBzdHJpbmcsIG9uU2VsZWN0OiBhbnkgfT4gPSBbXTtcbiAgQElucHV0KCkgbnpDaGVja2VkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpJbmRldGVybWluYXRlID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56U29ydEtleTogc3RyaW5nO1xuICBASW5wdXQoKSBuekZpbHRlck11bHRpcGxlID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpXaWR0aDogc3RyaW5nO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTb3J0Q2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNvcnRDaGFuZ2VXaXRoS2V5ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nIH0+KCk7XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RmlsdGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXSB8IGFueT4oKTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLWFjdGlvbnMnKVxuICBnZXQgaGFzQWN0aW9uc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2hvd0ZpbHRlciB8fCB0aGlzLm56U2hvd1NvcnQgfHwgdGhpcy5uekN1c3RvbUZpbHRlcjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LXRhYmxlLWNvbHVtbi1oYXMtZmlsdGVycycpXG4gIGdldCBoYXNGaWx0ZXJzQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubnpTaG93RmlsdGVyIHx8IHRoaXMubnpDdXN0b21GaWx0ZXI7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC10YWJsZS1jb2x1bW4taGFzLXNvcnRlcnMnKVxuICBnZXQgaGFzU29ydGVyc0NsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56U2hvd1NvcnQ7XG4gIH1cblxuICB1cGRhdGVTb3J0VmFsdWUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpTaG93U29ydCkge1xuICAgICAgaWYgKHRoaXMubnpTb3J0ID09PSAnZGVzY2VuZCcpIHtcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUoJ2FzY2VuZCcpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLm56U29ydCA9PT0gJ2FzY2VuZCcpIHtcbiAgICAgICAgdGhpcy5zZXRTb3J0VmFsdWUobnVsbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldFNvcnRWYWx1ZSgnZGVzY2VuZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekN1c3RvbUZpbHRlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2N1c3RvbUZpbHRlciA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpDdXN0b21GaWx0ZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2N1c3RvbUZpbHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dTb3J0KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1NvcnQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NvcnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dTb3J0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0ZpbHRlcih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dGaWx0ZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd0ZpbHRlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0ZpbHRlcjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dSb3dTZWxlY3Rpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93Um93U2VsZWN0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2hvd1Jvd1NlbGVjdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXNlbGVjdGlvbi1jb2x1bW4tY3VzdG9tJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1zZWxlY3Rpb24tY29sdW1uLWN1c3RvbScpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNob3dSb3dTZWxlY3Rpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX3Nob3dSb3dTZWxlY3Rpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpMZWZ0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtbGVmdC1zdGlja3knKTtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS10aC1sZWZ0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnbGVmdCcpO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelJpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtdGgtcmlnaHQtc3RpY2t5Jyk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdyaWdodCcsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLXRoLXJpZ2h0LXN0aWNreScpO1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAncmlnaHQnKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpFeHBhbmQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpc0V4cGFuZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgaWYgKGlzRXhwYW5kKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtZXhwYW5kLWljb24tdGgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnYW50LXRhYmxlLWV4cGFuZC1pY29uLXRoJyk7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0NoZWNrYm94KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd0NoZWNrYm94ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICBpZiAodGhpcy5fc2hvd0NoZWNrYm94KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtc2VsZWN0aW9uLWNvbHVtbicpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNob3dDaGVja2JveCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0NoZWNrYm94O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U29ydCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fc29ydCA9IHZhbHVlO1xuICAgIGlmICgodmFsdWUgIT09ICdhc2NlbmQnKSAmJiAodmFsdWUgIT09ICdkZXNjZW5kJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbCwgJ2FudC10YWJsZS1jb2x1bW4tc29ydCcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdhbnQtdGFibGUtY29sdW1uLXNvcnQnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTb3J0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NvcnQ7XG4gIH1cblxuICBzZXRTb3J0VmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMubnpTb3J0ID0gdmFsdWU7XG4gICAgdGhpcy5uelNvcnRDaGFuZ2VXaXRoS2V5LmVtaXQoeyBrZXk6IHRoaXMubnpTb3J0S2V5LCB2YWx1ZTogdGhpcy5uelNvcnQgfSk7XG4gICAgdGhpcy5uelNvcnRDaGFuZ2UuZW1pdCh0aGlzLm56U29ydCk7XG4gIH1cblxuICBnZXQgZmlsdGVyTGlzdCgpOiBOelRoSXRlbUludGVyZmFjZVtdIHtcbiAgICByZXR1cm4gdGhpcy5tdWx0aXBsZUZpbHRlckxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKTtcbiAgfVxuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgZ2V0IGZpbHRlclZhbHVlKCk6IGFueSB7XG4gICAgY29uc3QgY2hlY2tlZEZpbHRlciA9IHRoaXMuc2luZ2xlRmlsdGVyTGlzdC5maW5kKGl0ZW0gPT4gaXRlbS5jaGVja2VkKTtcbiAgICByZXR1cm4gY2hlY2tlZEZpbHRlciA/IGNoZWNrZWRGaWx0ZXIudmFsdWUgOiBudWxsO1xuICB9XG5cbiAgdXBkYXRlRmlsdGVyU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RmlsdGVyTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMuaGFzRmlsdGVyVmFsdWUgPSB0aGlzLmZpbHRlckxpc3QubGVuZ3RoID4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGlzTm90TmlsKHRoaXMuZmlsdGVyVmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIHNlYXJjaCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xuICAgIGlmICh0aGlzLm56RmlsdGVyTXVsdGlwbGUpIHtcbiAgICAgIHRoaXMubnpGaWx0ZXJDaGFuZ2UuZW1pdCh0aGlzLmZpbHRlckxpc3QpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm56RmlsdGVyQ2hhbmdlLmVtaXQodGhpcy5maWx0ZXJWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuaGlkZURyb3BEb3duKCk7XG4gIH1cblxuICByZXNldCgpOiB2b2lkIHtcbiAgICB0aGlzLmluaXRNdWx0aXBsZUZpbHRlckxpc3QodHJ1ZSk7XG4gICAgdGhpcy5pbml0U2luZ2xlRmlsdGVyTGlzdCh0cnVlKTtcbiAgICB0aGlzLnNlYXJjaCgpO1xuICAgIHRoaXMuaGlkZURyb3BEb3duKCk7XG4gICAgdGhpcy5oYXNGaWx0ZXJWYWx1ZSA9IGZhbHNlO1xuICB9XG5cbiAgY2hlY2tNdWx0aXBsZShmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgZmlsdGVyLmNoZWNrZWQgPSAhZmlsdGVyLmNoZWNrZWQ7XG4gIH1cblxuICBjaGVja1NpbmdsZShmaWx0ZXI6IE56VGhJdGVtSW50ZXJmYWNlKTogdm9pZCB7XG4gICAgdGhpcy5zaW5nbGVGaWx0ZXJMaXN0LmZvckVhY2goaXRlbSA9PiBpdGVtLmNoZWNrZWQgPSBpdGVtID09PSBmaWx0ZXIpO1xuICB9XG5cbiAgaGlkZURyb3BEb3duKCk6IHZvaWQge1xuICAgIHRoaXMubnpEcm9wRG93bkNvbXBvbmVudC5uelZpc2libGUgPSBmYWxzZTtcbiAgICB0aGlzLm56RHJvcERvd25Db21wb25lbnQuaGlkZSgpO1xuICAgIHRoaXMuZmlsdGVyVmlzaWJsZSA9IGZhbHNlO1xuICB9XG5cbiAgZHJvcERvd25WaXNpYmxlQ2hhbmdlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5maWx0ZXJWaXNpYmxlID0gdmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpcy5zZWFyY2goKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpGaWx0ZXJzKHZhbHVlOiBOelRoRmlsdGVyVHlwZSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdGhpcy5fZmlsdGVycyA9IHZhbHVlO1xuICAgICAgdGhpcy5pbml0TXVsdGlwbGVGaWx0ZXJMaXN0KCk7XG4gICAgICB0aGlzLmluaXRTaW5nbGVGaWx0ZXJMaXN0KCk7XG4gICAgICB0aGlzLnVwZGF0ZUZpbHRlclN0YXR1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oJ256RmlsdGVycyBvbmx5IGFjY2VwdCB0eXBlIG9mIEFycmF5PHsgdGV4dDogc3RyaW5nOyB2YWx1ZTogYW55IH0+Jyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RmlsdGVycygpOiBOelRoRmlsdGVyVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZpbHRlcnM7XG4gIH1cblxuICBpbml0TXVsdGlwbGVGaWx0ZXJMaXN0KGZvcmNlPzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMubXVsdGlwbGVGaWx0ZXJMaXN0ID0gdGhpcy5uekZpbHRlcnMubWFwKGl0ZW0gPT4ge1xuICAgICAgY29uc3QgY2hlY2tlZCA9IGZvcmNlID8gZmFsc2UgOiAhIWl0ZW0uYnlEZWZhdWx0O1xuICAgICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgdGhpcy5faGFzRGVmYXVsdEZpbHRlciA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4geyB0ZXh0OiBpdGVtLnRleHQsIHZhbHVlOiBpdGVtLnZhbHVlLCBjaGVja2VkIH07XG4gICAgfSk7XG4gICAgdGhpcy5jaGVja0RlZmF1bHRGaWx0ZXJzKCk7XG4gIH1cblxuICBpbml0U2luZ2xlRmlsdGVyTGlzdChmb3JjZT86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnNpbmdsZUZpbHRlckxpc3QgPSB0aGlzLm56RmlsdGVycy5tYXAoaXRlbSA9PiB7XG4gICAgICBjb25zdCBjaGVja2VkID0gZm9yY2UgPyBmYWxzZSA6ICEhaXRlbS5ieURlZmF1bHQ7XG4gICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICB0aGlzLl9oYXNEZWZhdWx0RmlsdGVyID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IHRleHQ6IGl0ZW0udGV4dCwgdmFsdWU6IGl0ZW0udmFsdWUsIGNoZWNrZWQgfTtcbiAgICB9KTtcbiAgICB0aGlzLmNoZWNrRGVmYXVsdEZpbHRlcnMoKTtcbiAgfVxuXG4gIGNoZWNrRGVmYXVsdEZpbHRlcnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RmlsdGVycyB8fCB0aGlzLm56RmlsdGVycy5sZW5ndGggPT09IDAgfHwgIXRoaXMuX2hhc0RlZmF1bHRGaWx0ZXIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVGaWx0ZXJTdGF0dXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cbn1cbiJdfQ==