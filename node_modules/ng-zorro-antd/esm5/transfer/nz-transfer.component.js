/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, QueryList, TemplateRef, ViewChildren, ViewEncapsulation } from '@angular/core';
import { of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzTransferListComponent } from './nz-transfer-list.component';
var NzTransferComponent = /** @class */ (function () {
    // #endregion
    function NzTransferComponent(cdr, i18n) {
        var _this = this;
        this.cdr = cdr;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        // tslint:disable-next-line:no-any
        this.locale = {};
        this.leftFilter = '';
        this.rightFilter = '';
        // #region fields
        this.nzDisabled = false;
        this.nzDataSource = [];
        this.nzTitles = ['', ''];
        this.nzOperations = [];
        this.nzCanMove = function (arg) { return of(arg.list); };
        this.nzShowSearch = false;
        // events
        this.nzChange = new EventEmitter();
        this.nzSearchChange = new EventEmitter();
        this.nzSelectChange = new EventEmitter();
        // #endregion
        // #region process data
        // left
        this.leftDataSource = [];
        // right
        this.rightDataSource = [];
        this.handleLeftSelectAll = function (checked) { return _this.handleSelect('left', checked); };
        this.handleRightSelectAll = function (checked) { return _this.handleSelect('right', checked); };
        this.handleLeftSelect = function (item) { return _this.handleSelect('left', item.checked, item); };
        this.handleRightSelect = function (item) { return _this.handleSelect('right', item.checked, item); };
        // #endregion
        // #region operation
        this.leftActive = false;
        this.rightActive = false;
        this.moveToLeft = function () { return _this.moveTo('left'); };
        this.moveToRight = function () { return _this.moveTo('right'); };
    }
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.splitDataSource = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.leftDataSource = [];
        this.rightDataSource = [];
        this.nzDataSource.forEach(function (record) {
            if (record.direction === 'right') {
                _this.rightDataSource.push(record);
            }
            else {
                _this.leftDataSource.push(record);
            }
        });
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.getCheckedData = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        return this[direction === 'left' ? 'leftDataSource' : 'rightDataSource'].filter(function (w) { return w.checked; });
    };
    /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    NzTransferComponent.prototype.handleSelect = /**
     * @param {?} direction
     * @param {?} checked
     * @param {?=} item
     * @return {?}
     */
    function (direction, checked, item) {
        /** @type {?} */
        var list = this.getCheckedData(direction);
        this.updateOperationStatus(direction, list.length);
        this.nzSelectChange.emit({ direction: direction, checked: checked, list: list, item: item });
    };
    /**
     * @param {?} ret
     * @return {?}
     */
    NzTransferComponent.prototype.handleFilterChange = /**
     * @param {?} ret
     * @return {?}
     */
    function (ret) {
        this.nzSearchChange.emit(ret);
    };
    /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    NzTransferComponent.prototype.updateOperationStatus = /**
     * @param {?} direction
     * @param {?=} count
     * @return {?}
     */
    function (direction, count) {
        this[direction === 'right' ? 'leftActive' : 'rightActive'] = (typeof count === 'undefined' ? this.getCheckedData(direction).filter(function (w) { return !w.disabled; }).length : count) > 0;
    };
    /**
     * @param {?} direction
     * @return {?}
     */
    NzTransferComponent.prototype.moveTo = /**
     * @param {?} direction
     * @return {?}
     */
    function (direction) {
        var _this = this;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        this.updateOperationStatus(oppositeDirection, 0);
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var moveList = datasource.filter(function (item) { return item.checked === true && !item.disabled; });
        this.nzCanMove({ direction: direction, list: moveList })
            .subscribe(function (newMoveList) { return _this.truthMoveTo(direction, newMoveList.filter(function (i) { return !!i; })); }, function () { return moveList.forEach(function (i) { return i.checked = false; }); });
    };
    /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    NzTransferComponent.prototype.truthMoveTo = /**
     * @param {?} direction
     * @param {?} list
     * @return {?}
     */
    function (direction, list) {
        var e_1, _a;
        /** @type {?} */
        var oppositeDirection = direction === 'left' ? 'right' : 'left';
        /** @type {?} */
        var datasource = direction === 'left' ? this.rightDataSource : this.leftDataSource;
        /** @type {?} */
        var targetDatasource = direction === 'left' ? this.leftDataSource : this.rightDataSource;
        try {
            for (var list_1 = tslib_1.__values(list), list_1_1 = list_1.next(); !list_1_1.done; list_1_1 = list_1.next()) {
                var item = list_1_1.value;
                item.checked = false;
                targetDatasource.push(item);
                datasource.splice(datasource.indexOf(item), 1);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (list_1_1 && !list_1_1.done && (_a = list_1.return)) _a.call(list_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.updateOperationStatus(oppositeDirection);
        this.nzChange.emit({
            from: oppositeDirection,
            to: direction,
            list: list
        });
        this.markForCheckAllList();
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.markForCheckAllList = /**
     * @return {?}
     */
    function () {
        if (!this.lists) {
            return;
        }
        this.lists.forEach(function (i) { return i.markForCheck(); });
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Transfer');
            _this.markForCheckAllList();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if ('nzDataSource' in changes) {
            this.splitDataSource();
            this.updateOperationStatus('left');
            this.updateOperationStatus('right');
            this.cdr.detectChanges();
            this.markForCheckAllList();
        }
    };
    /**
     * @return {?}
     */
    NzTransferComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    };
    NzTransferComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-transfer',
                    preserveWhitespaces: false,
                    template: "<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"left\"\n  [titleText]=\"nzTitles[0]\"\n  [dataSource]=\"leftDataSource\"\n  [filter]=\"leftFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [render]=\"nzRender\"\n  [disabled]=\"nzDisabled\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent || locale.notFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleLeftSelect($event)\"\n  (handleSelectAll)=\"handleLeftSelectAll($event)\"></nz-transfer-list>\n<div class=\"ant-transfer-operation\">\n  <button nz-button (click)=\"moveToLeft()\" [disabled]=\"nzDisabled || !leftActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon type=\"left\"></i><span *ngIf=\"nzOperations[1]\">{{ nzOperations[1] }}</span>\n  </button>\n  <button nz-button (click)=\"moveToRight()\" [disabled]=\"nzDisabled || !rightActive\" [nzType]=\"'primary'\" [nzSize]=\"'small'\">\n    <i nz-icon type=\"right\"></i><span *ngIf=\"nzOperations[0]\">{{ nzOperations[0] }}</span>\n  </button>\n</div>\n<nz-transfer-list class=\"ant-transfer-list\" [ngStyle]=\"nzListStyle\" data-direction=\"right\"\n  [titleText]=\"nzTitles[1]\"\n  [dataSource]=\"rightDataSource\"\n  [filter]=\"rightFilter\"\n  [filterOption]=\"nzFilterOption\"\n  (filterChange)=\"handleFilterChange($event)\"\n  [render]=\"nzRender\"\n  [disabled]=\"nzDisabled\"\n  [showSearch]=\"nzShowSearch\"\n  [searchPlaceholder]=\"nzSearchPlaceholder || locale.searchPlaceholder\"\n  [notFoundContent]=\"nzNotFoundContent || locale.notFoundContent\"\n  [itemUnit]=\"nzItemUnit || locale.itemUnit\"\n  [itemsUnit]=\"nzItemsUnit || locale.itemsUnit\"\n  [footer]=\"nzFooter\"\n  (handleSelect)=\"handleRightSelect($event)\"\n  (handleSelectAll)=\"handleRightSelectAll($event)\"></nz-transfer-list>",
                    host: {
                        '[class.ant-transfer]': 'true',
                        '[class.ant-transfer-disabled]': 'nzDisabled'
                    },
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzTransferComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
    NzTransferComponent.propDecorators = {
        lists: [{ type: ViewChildren, args: [NzTransferListComponent,] }],
        nzDisabled: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        nzTitles: [{ type: Input }],
        nzOperations: [{ type: Input }],
        nzListStyle: [{ type: Input }],
        nzItemUnit: [{ type: Input }],
        nzItemsUnit: [{ type: Input }],
        nzCanMove: [{ type: Input }],
        nzRender: [{ type: Input }],
        nzFooter: [{ type: Input }],
        nzShowSearch: [{ type: Input }],
        nzFilterOption: [{ type: Input }],
        nzSearchPlaceholder: [{ type: Input }],
        nzNotFoundContent: [{ type: Input }],
        nzChange: [{ type: Output }],
        nzSearchChange: [{ type: Output }],
        nzSelectChange: [{ type: Output }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTransferComponent.prototype, "nzShowSearch", void 0);
    return NzTransferComponent;
}());
export { NzTransferComponent };
function NzTransferComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTransferComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTransferComponent.prototype.lists;
    /** @type {?} */
    NzTransferComponent.prototype.locale;
    /** @type {?} */
    NzTransferComponent.prototype.leftFilter;
    /** @type {?} */
    NzTransferComponent.prototype.rightFilter;
    /** @type {?} */
    NzTransferComponent.prototype.nzDisabled;
    /** @type {?} */
    NzTransferComponent.prototype.nzDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.nzTitles;
    /** @type {?} */
    NzTransferComponent.prototype.nzOperations;
    /** @type {?} */
    NzTransferComponent.prototype.nzListStyle;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzItemsUnit;
    /** @type {?} */
    NzTransferComponent.prototype.nzCanMove;
    /** @type {?} */
    NzTransferComponent.prototype.nzRender;
    /** @type {?} */
    NzTransferComponent.prototype.nzFooter;
    /** @type {?} */
    NzTransferComponent.prototype.nzShowSearch;
    /** @type {?} */
    NzTransferComponent.prototype.nzFilterOption;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchPlaceholder;
    /** @type {?} */
    NzTransferComponent.prototype.nzNotFoundContent;
    /** @type {?} */
    NzTransferComponent.prototype.nzChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSearchChange;
    /** @type {?} */
    NzTransferComponent.prototype.nzSelectChange;
    /** @type {?} */
    NzTransferComponent.prototype.leftDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.rightDataSource;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelectAll;
    /** @type {?} */
    NzTransferComponent.prototype.handleLeftSelect;
    /** @type {?} */
    NzTransferComponent.prototype.handleRightSelect;
    /** @type {?} */
    NzTransferComponent.prototype.leftActive;
    /** @type {?} */
    NzTransferComponent.prototype.rightActive;
    /** @type {?} */
    NzTransferComponent.prototype.moveToLeft;
    /** @type {?} */
    NzTransferComponent.prototype.moveToRight;
    /** @type {?} */
    NzTransferComponent.prototype.cdr;
    /** @type {?} */
    NzTransferComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJhbnNmZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRyYW5zZmVyL256LXRyYW5zZmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFDTixTQUFTLEVBRVQsV0FBVyxFQUNYLFlBQVksRUFDWixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLEVBQUUsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHeEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sOEJBQThCLENBQUM7O0lBbUlyRSxhQUFhO0lBRWIsNkJBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBdkUsaUJBQ0M7UUFEbUIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOzRCQXZIaEQsSUFBSSxPQUFPLEVBQVE7O1FBSTFDLGNBQWMsRUFBRSxDQUFDO1FBRWpCLGtCQUFhLEVBQUUsQ0FBQztRQUNoQixtQkFBYyxFQUFFLENBQUM7O1FBSWpCLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsb0JBQXdDLEVBQUUsQ0FBQztRQUMzQyxnQkFBOEIsQ0FBRSxFQUFFLEVBQUUsRUFBRSxDQUFFLENBQUM7UUFDekMsb0JBQWtDLEVBQUUsQ0FBQztRQUlyQyxpQkFBMkUsVUFBQyxHQUFvQixJQUFLLE9BQUEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBWixD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O29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtpQkFDcEQ7Ozs7Z0JBbENDLGlCQUFpQjtnQkFtQlYsYUFBYTs7O3dCQWtCbkIsWUFBWSxTQUFDLHVCQUF1Qjs2QkFVcEMsS0FBSzsrQkFDTCxLQUFLOzJCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzJCQUNMLEtBQUs7MkJBQ0wsS0FBSzsrQkFDTCxLQUFLO2lDQUNMLEtBQUs7c0NBQ0wsS0FBSztvQ0FDTCxLQUFLOzJCQUdMLE1BQU07aUNBQ04sTUFBTTtpQ0FDTixNQUFNOzs7UUFsQkcsWUFBWSxFQUFFOzs7O1FBVWQsWUFBWSxFQUFFOzs7OEJBM0QxQjs7U0FxQ2EsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkcmVuLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgb2YsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgVHJhbnNmZXJDYW5Nb3ZlLCBUcmFuc2ZlckNoYW5nZSwgVHJhbnNmZXJJdGVtLCBUcmFuc2ZlclNlYXJjaENoYW5nZSwgVHJhbnNmZXJTZWxlY3RDaGFuZ2UgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyYW5zZmVyTGlzdENvbXBvbmVudCB9IGZyb20gJy4vbnotdHJhbnNmZXItbGlzdC5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRyYW5zZmVyJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRyYW5zZmVyLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXRyYW5zZmVyXSc6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC10cmFuc2Zlci1kaXNhYmxlZF0nOiAnbnpEaXNhYmxlZCdcbiAgfSxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56VHJhbnNmZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuICBAVmlld0NoaWxkcmVuKE56VHJhbnNmZXJMaXN0Q29tcG9uZW50KVxuICBwcml2YXRlIGxpc3RzICE6IFF1ZXJ5TGlzdDxOelRyYW5zZmVyTGlzdENvbXBvbmVudD47XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcblxuICBsZWZ0RmlsdGVyID0gJyc7XG4gIHJpZ2h0RmlsdGVyID0gJyc7XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekRhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG4gIEBJbnB1dCgpIG56VGl0bGVzOiBzdHJpbmdbXSA9IFsgJycsICcnIF07XG4gIEBJbnB1dCgpIG56T3BlcmF0aW9uczogc3RyaW5nW10gPSBbXTtcbiAgQElucHV0KCkgbnpMaXN0U3R5bGU6IG9iamVjdDtcbiAgQElucHV0KCkgbnpJdGVtVW5pdDogc3RyaW5nO1xuICBASW5wdXQoKSBuekl0ZW1zVW5pdDogc3RyaW5nO1xuICBASW5wdXQoKSBuekNhbk1vdmU6IChhcmc6IFRyYW5zZmVyQ2FuTW92ZSkgPT4gT2JzZXJ2YWJsZTxUcmFuc2Zlckl0ZW1bXT4gPSAoYXJnOiBUcmFuc2ZlckNhbk1vdmUpID0+IG9mKGFyZy5saXN0KTtcbiAgQElucHV0KCkgbnpSZW5kZXI6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dTZWFyY2ggPSBmYWxzZTtcbiAgQElucHV0KCkgbnpGaWx0ZXJPcHRpb246IChpbnB1dFZhbHVlOiBzdHJpbmcsIGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gYm9vbGVhbjtcbiAgQElucHV0KCkgbnpTZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nO1xuICBASW5wdXQoKSBuek5vdEZvdW5kQ29udGVudDogc3RyaW5nO1xuXG4gIC8vIGV2ZW50c1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxUcmFuc2ZlckNoYW5nZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlYXJjaENoYW5nZTogRXZlbnRFbWl0dGVyPFRyYW5zZmVyU2VhcmNoQ2hhbmdlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56U2VsZWN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VHJhbnNmZXJTZWxlY3RDaGFuZ2U+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIHByb2Nlc3MgZGF0YVxuXG4gIC8vIGxlZnRcbiAgbGVmdERhdGFTb3VyY2U6IFRyYW5zZmVySXRlbVtdID0gW107XG5cbiAgLy8gcmlnaHRcbiAgcmlnaHREYXRhU291cmNlOiBUcmFuc2Zlckl0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgc3BsaXREYXRhU291cmNlKCk6IHZvaWQge1xuICAgIHRoaXMubGVmdERhdGFTb3VyY2UgPSBbXTtcbiAgICB0aGlzLnJpZ2h0RGF0YVNvdXJjZSA9IFtdO1xuICAgIHRoaXMubnpEYXRhU291cmNlLmZvckVhY2gocmVjb3JkID0+IHtcbiAgICAgIGlmIChyZWNvcmQuZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgIHRoaXMucmlnaHREYXRhU291cmNlLnB1c2gocmVjb3JkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubGVmdERhdGFTb3VyY2UucHVzaChyZWNvcmQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGVja2VkRGF0YShkaXJlY3Rpb246IHN0cmluZyk6IFRyYW5zZmVySXRlbVtdIHtcbiAgICByZXR1cm4gdGhpc1sgZGlyZWN0aW9uID09PSAnbGVmdCcgPyAnbGVmdERhdGFTb3VyY2UnIDogJ3JpZ2h0RGF0YVNvdXJjZScgXS5maWx0ZXIodyA9PiB3LmNoZWNrZWQpO1xuICB9XG5cbiAgaGFuZGxlTGVmdFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgnbGVmdCcsIGNoZWNrZWQpO1xuICBoYW5kbGVSaWdodFNlbGVjdEFsbCA9IChjaGVja2VkOiBib29sZWFuKSA9PiB0aGlzLmhhbmRsZVNlbGVjdCgncmlnaHQnLCBjaGVja2VkKTtcblxuICBoYW5kbGVMZWZ0U2VsZWN0ID0gKGl0ZW06IFRyYW5zZmVySXRlbSkgPT4gdGhpcy5oYW5kbGVTZWxlY3QoJ2xlZnQnLCBpdGVtLmNoZWNrZWQsIGl0ZW0pO1xuICBoYW5kbGVSaWdodFNlbGVjdCA9IChpdGVtOiBUcmFuc2Zlckl0ZW0pID0+IHRoaXMuaGFuZGxlU2VsZWN0KCdyaWdodCcsIGl0ZW0uY2hlY2tlZCwgaXRlbSk7XG5cbiAgaGFuZGxlU2VsZWN0KGRpcmVjdGlvbjogJ2xlZnQnIHwgJ3JpZ2h0JywgY2hlY2tlZDogYm9vbGVhbiwgaXRlbT86IFRyYW5zZmVySXRlbSk6IHZvaWQge1xuICAgIGNvbnN0IGxpc3QgPSB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbik7XG4gICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uLCBsaXN0Lmxlbmd0aCk7XG4gICAgdGhpcy5uelNlbGVjdENoYW5nZS5lbWl0KHsgZGlyZWN0aW9uLCBjaGVja2VkLCBsaXN0LCBpdGVtIH0pO1xuICB9XG5cbiAgaGFuZGxlRmlsdGVyQ2hhbmdlKHJldDogeyBkaXJlY3Rpb246IHN0cmluZywgdmFsdWU6IHN0cmluZyB9KTogdm9pZCB7XG4gICAgdGhpcy5uelNlYXJjaENoYW5nZS5lbWl0KHJldCk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBvcGVyYXRpb25cblxuICBsZWZ0QWN0aXZlID0gZmFsc2U7XG4gIHJpZ2h0QWN0aXZlID0gZmFsc2U7XG5cbiAgcHJpdmF0ZSB1cGRhdGVPcGVyYXRpb25TdGF0dXMoZGlyZWN0aW9uOiBzdHJpbmcsIGNvdW50PzogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpc1sgZGlyZWN0aW9uID09PSAncmlnaHQnID8gJ2xlZnRBY3RpdmUnIDogJ3JpZ2h0QWN0aXZlJyBdID0gKHR5cGVvZiBjb3VudCA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzLmdldENoZWNrZWREYXRhKGRpcmVjdGlvbikuZmlsdGVyKHcgPT4gIXcuZGlzYWJsZWQpLmxlbmd0aCA6IGNvdW50KSA+IDA7XG4gIH1cblxuICBtb3ZlVG9MZWZ0ID0gKCkgPT4gdGhpcy5tb3ZlVG8oJ2xlZnQnKTtcbiAgbW92ZVRvUmlnaHQgPSAoKSA9PiB0aGlzLm1vdmVUbygncmlnaHQnKTtcblxuICBtb3ZlVG8oZGlyZWN0aW9uOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBvcHBvc2l0ZURpcmVjdGlvbiA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gJ3JpZ2h0JyA6ICdsZWZ0JztcbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbiwgMCk7XG4gICAgY29uc3QgZGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5yaWdodERhdGFTb3VyY2UgOiB0aGlzLmxlZnREYXRhU291cmNlO1xuICAgIGNvbnN0IG1vdmVMaXN0ID0gZGF0YXNvdXJjZS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQgPT09IHRydWUgJiYgIWl0ZW0uZGlzYWJsZWQpO1xuICAgIHRoaXMubnpDYW5Nb3ZlKHsgZGlyZWN0aW9uLCBsaXN0OiBtb3ZlTGlzdCB9KVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICBuZXdNb3ZlTGlzdCA9PiB0aGlzLnRydXRoTW92ZVRvKGRpcmVjdGlvbiwgbmV3TW92ZUxpc3QuZmlsdGVyKGkgPT4gISFpKSksXG4gICAgICAoKSA9PiBtb3ZlTGlzdC5mb3JFYWNoKGkgPT4gaS5jaGVja2VkID0gZmFsc2UpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ1dGhNb3ZlVG8oZGlyZWN0aW9uOiBzdHJpbmcsIGxpc3Q6IFRyYW5zZmVySXRlbVtdKTogdm9pZCB7XG4gICAgY29uc3Qgb3Bwb3NpdGVEaXJlY3Rpb24gPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/ICdyaWdodCcgOiAnbGVmdCc7XG4gICAgY29uc3QgZGF0YXNvdXJjZSA9IGRpcmVjdGlvbiA9PT0gJ2xlZnQnID8gdGhpcy5yaWdodERhdGFTb3VyY2UgOiB0aGlzLmxlZnREYXRhU291cmNlO1xuICAgIGNvbnN0IHRhcmdldERhdGFzb3VyY2UgPSBkaXJlY3Rpb24gPT09ICdsZWZ0JyA/IHRoaXMubGVmdERhdGFTb3VyY2UgOiB0aGlzLnJpZ2h0RGF0YVNvdXJjZTtcbiAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgbGlzdCkge1xuICAgICAgaXRlbS5jaGVja2VkID0gZmFsc2U7XG4gICAgICB0YXJnZXREYXRhc291cmNlLnB1c2goaXRlbSk7XG4gICAgICBkYXRhc291cmNlLnNwbGljZShkYXRhc291cmNlLmluZGV4T2YoaXRlbSksIDEpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU9wZXJhdGlvblN0YXR1cyhvcHBvc2l0ZURpcmVjdGlvbik7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGZyb206IG9wcG9zaXRlRGlyZWN0aW9uLFxuICAgICAgdG8gIDogZGlyZWN0aW9uLFxuICAgICAgbGlzdFxuICAgIH0pO1xuICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICBwcml2YXRlIG1hcmtGb3JDaGVja0FsbExpc3QoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxpc3RzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB0aGlzLmxpc3RzLmZvckVhY2goaSA9PiBpLm1hcmtGb3JDaGVjaygpKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVHJhbnNmZXInKTtcbiAgICAgIHRoaXMubWFya0ZvckNoZWNrQWxsTGlzdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmICgnbnpEYXRhU291cmNlJyBpbiBjaGFuZ2VzKSB7XG4gICAgICB0aGlzLnNwbGl0RGF0YVNvdXJjZSgpO1xuICAgICAgdGhpcy51cGRhdGVPcGVyYXRpb25TdGF0dXMoJ2xlZnQnKTtcbiAgICAgIHRoaXMudXBkYXRlT3BlcmF0aW9uU3RhdHVzKCdyaWdodCcpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgdGhpcy5tYXJrRm9yQ2hlY2tBbGxMaXN0KCk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==