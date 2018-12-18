/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzMeasureScrollbarService } from '../core/services/nz-measure-scrollbar.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzThComponent } from './nz-th.component';
export class NzTableComponent {
    /**
     * @param {?} renderer
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} cdr
     * @param {?} nzMeasureScrollbarService
     * @param {?} i18n
     */
    constructor(renderer, ngZone, elementRef, cdr, nzMeasureScrollbarService, i18n) {
        this.renderer = renderer;
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.i18n = i18n;
        this.unsubscribe$ = new Subject();
        this._bordered = false;
        this._showPagination = true;
        this._loading = false;
        this._showSizeChanger = false;
        this._showQuickJumper = false;
        this._hideOnSinglePage = false;
        this._scroll = { x: null, y: null };
        this._pageIndex = 1;
        this._pageSize = 10;
        this._widthConfig = [];
        this._frontPagination = true;
        this._simple = false;
        /* tslint:disable-next-line:no-any */
        this.locale = {};
        this.el = this.elementRef.nativeElement;
        this.lastScrollLeft = 0;
        /* tslint:disable-next-line:no-any */
        this.rawData = [];
        /* tslint:disable-next-line:no-any */
        this.syncData = [];
        /**
         * public data for ngFor tr
         */
        this.data = [];
        this.isWidthConfigSet = false;
        this.nzPageSizeChange = new EventEmitter();
        this.nzPageIndexChange = new EventEmitter();
        /* tslint:disable-next-line:no-any */
        this.nzCurrentPageDataChange = new EventEmitter();
        this.nzSize = 'default';
        /**
         * page size changer select values
         */
        this.nzPageSizeOptions = [10, 20, 30, 40, 50];
        this.nzLoadingDelay = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSimple(value) {
        this._simple = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzSimple() {
        return this._simple;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFrontPagination(value) {
        this._frontPagination = toBoolean(value);
        this.parseInputData();
    }
    /**
     * @return {?}
     */
    get nzFrontPagination() {
        return this._frontPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzWidthConfig(value) {
        this.isWidthConfigSet = true;
        this._widthConfig = value;
    }
    /**
     * @return {?}
     */
    get nzWidthConfig() {
        return this._widthConfig;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        this.isTitleString = !(value instanceof TemplateRef);
        this._title = value;
    }
    /**
     * @return {?}
     */
    get nzTitle() {
        return this._title;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFooter(value) {
        this.isFooterString = !(value instanceof TemplateRef);
        this._footer = value;
    }
    /**
     * @return {?}
     */
    get nzFooter() {
        return this._footer;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzNoResult(value) {
        this.isNoResultString = !(value instanceof TemplateRef);
        this._noResult = value;
    }
    /**
     * @return {?}
     */
    get nzNoResult() {
        return this._noResult;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzBordered(value) {
        this._bordered = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzBordered() {
        return this._bordered;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowPagination(value) {
        this._showPagination = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowPagination() {
        return this._showPagination;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLoading(value) {
        this._loading = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzLoading() {
        return this._loading;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowSizeChanger(value) {
        this._showSizeChanger = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowSizeChanger() {
        return this._showSizeChanger;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHideOnSinglePage(value) {
        this._hideOnSinglePage = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzHideOnSinglePage() {
        return this._hideOnSinglePage;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowQuickJumper(value) {
        this._showQuickJumper = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzShowQuickJumper() {
        return this._showQuickJumper;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzScroll(value) {
        if (isNotNil(value)) {
            this._scroll = value;
        }
        else {
            this._scroll = { x: null, y: null };
        }
        this.cdr.detectChanges();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    get nzScroll() {
        return this._scroll;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    set nzData(data) {
        if (Array.isArray(data)) {
            this.rawData = data;
            this.parseInputData();
        }
        else {
            console.warn('nzData only accept array');
        }
    }
    /**
     * @return {?}
     */
    parseInputData() {
        if (this.nzFrontPagination) {
            this.syncData = this.rawData;
            this.nzTotal = this.syncData.length;
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
        else {
            this.data = this.rawData;
            this.nzCurrentPageDataChange.emit(this.data);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageIndex(value) {
        if (this._pageIndex === value) {
            return;
        }
        this._pageIndex = value;
        if (this.nzFrontPagination) {
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get nzPageIndex() {
        return this._pageIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    emitPageIndex(index) {
        this.nzPageIndex = index;
        this.nzPageIndexChange.emit(this.nzPageIndex);
    }
    /**
     * @param {?} size
     * @return {?}
     */
    emitPageSize(size) {
        this.nzPageSize = size;
        this.nzPageSizeChange.emit(this.nzPageSize);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPageSize(value) {
        if (this._pageSize === value) {
            return;
        }
        this._pageSize = value;
        if (this.nzFrontPagination) {
            this.checkPageIndexBounding();
            this.generateSyncDisplayData();
        }
    }
    /**
     * @return {?}
     */
    get nzPageSize() {
        return this._pageSize;
    }
    /**
     * @return {?}
     */
    checkPageIndexBounding() {
        if (this.nzFrontPagination) {
            /** @type {?} */
            const maxPageIndex = Math.ceil(this.syncData.length / this.nzPageSize);
            /** @type {?} */
            const pageIndex = !this.nzPageIndex ? 1 : (this.nzPageIndex > maxPageIndex ? maxPageIndex : this.nzPageIndex);
            if (pageIndex !== this.nzPageIndex) {
                this._pageIndex = pageIndex;
                Promise.resolve().then(() => this.nzPageIndexChange.emit(pageIndex));
            }
        }
    }
    /**
     * @return {?}
     */
    generateSyncDisplayData() {
        this.data = this.syncData.slice((this.nzPageIndex - 1) * this.nzPageSize, this.nzPageIndex * this.nzPageSize);
        this.nzCurrentPageDataChange.emit(this.data);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    syncScrollTable(e) {
        if (e.currentTarget === e.target) {
            /** @type {?} */
            const target = /** @type {?} */ (e.target);
            if (target.scrollLeft !== this.lastScrollLeft && this.nzScroll && this.nzScroll.x) {
                if (target === this.tableBodyElement.nativeElement && this.tableHeaderElement) {
                    this.tableHeaderElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                else if (target === this.tableHeaderElement.nativeElement && this.tableBodyElement) {
                    this.tableBodyElement.nativeElement.scrollLeft = target.scrollLeft;
                }
                this.setScrollPositionClassName();
            }
            this.lastScrollLeft = target.scrollLeft;
        }
    }
    /**
     * @return {?}
     */
    setScrollPositionClassName() {
        if (this.tableBodyElement && this.nzScroll && this.nzScroll.x) {
            if ((this.tableBodyElement.nativeElement.scrollWidth === this.tableBodyElement.nativeElement.clientWidth) && (this.tableBodyElement.nativeElement.scrollWidth !== 0)) {
                this.setScrollName();
            }
            else if (this.tableBodyElement.nativeElement.scrollLeft === 0) {
                this.setScrollName('left');
            }
            else if (this.tableBodyElement.nativeElement.scrollWidth === (this.tableBodyElement.nativeElement.scrollLeft + this.tableBodyElement.nativeElement.clientWidth)) {
                this.setScrollName('right');
            }
            else {
                this.setScrollName('middle');
            }
        }
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    setScrollName(position) {
        /** @type {?} */
        const prefix = 'ant-table-scroll-position';
        /** @type {?} */
        const classList = ['left', 'right', 'middle'];
        classList.forEach(name => {
            this.renderer.removeClass(this.tableMainElement.nativeElement, `${prefix}-${name}`);
        });
        if (position) {
            this.renderer.addClass(this.tableMainElement.nativeElement, `${prefix}-${position}`);
        }
    }
    /**
     * @return {?}
     */
    fitScrollBar() {
        /** @type {?} */
        const scrollbarWidth = this.nzMeasureScrollbarService.scrollBarWidth;
        if (scrollbarWidth) {
            this.headerBottomStyle = {
                marginBottom: `-${scrollbarWidth}px`,
                paddingBottom: `0px`
            };
        }
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.fitScrollBar();
        this.setScrollPositionClassName();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n.localeChange.pipe(takeUntil(this.unsubscribe$)).subscribe(() => this.locale = this.i18n.getLocaleData('Table'));
        this.fitScrollBar();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout(() => this.setScrollPositionClassName());
        this.ngZone.runOutsideAngular(() => {
            if (this.tableHeaderElement
                && this.tableHeaderElement.nativeElement
                && this.tableBodyElement
                && this.tableBodyElement.nativeElement) {
                merge(fromEvent(this.tableHeaderElement.nativeElement, 'scroll'), fromEvent(this.tableBodyElement.nativeElement, 'scroll')).pipe(takeUntil(this.unsubscribe$)).subscribe((data) => {
                    this.syncScrollTable(data);
                });
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzTableComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-table',
                preserveWhitespaces: false,
                template: "<ng-template #colGroupTemplate>\n  <colgroup *ngIf=\"!isWidthConfigSet\">\n    <col [style.width]=\"th.nzWidth\" [style.minWidth]=\"th.nzWidth\" *ngFor=\"let th of listOfNzThComponent\">\n  </colgroup>\n  <colgroup *ngIf=\"isWidthConfigSet\">\n    <col [style.width]=\"width\" [style.minWidth]=\"width\" *ngFor=\"let width of nzWidthConfig\">\n  </colgroup>\n</ng-template>\n<ng-template #tableInnerTemplate>\n  <div\n    #tableHeaderElement\n    *ngIf=\"nzScroll.x || nzScroll.y\"\n    class=\"ant-table-header\"\n    [ngStyle]=\"headerBottomStyle\">\n    <table\n      [class.ant-table-fixed]=\"nzScroll.x\"\n      [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\n      </thead>\n    </table>\n  </div>\n  <div\n    #tableBodyElement\n    class=\"ant-table-body\"\n    [style.maxHeight]=\"nzScroll.y\"\n    [style.overflow-y]=\"nzScroll.y?'scroll':''\"\n    [style.overflow-x]=\"nzScroll.x?'auto':''\">\n    <table [class.ant-table-fixed]=\"nzScroll.x\" [style.width]=\"nzScroll.x\">\n      <ng-template [ngTemplateOutlet]=\"colGroupTemplate\"></ng-template>\n      <thead class=\"ant-table-thead\" *ngIf=\"!nzScroll.y\">\n        <ng-template [ngTemplateOutlet]=\"nzTheadComponent?.template\"></ng-template>\n      </thead>\n      <ng-content></ng-content>\n    </table>\n  </div>\n  <div class=\"ant-table-placeholder\" *ngIf=\"(data.length==0)&&!nzLoading\">\n    <span *ngIf=\"!nzNoResult\">{{ locale.emptyText }}</span>\n    <ng-container *ngIf=\"nzNoResult\">\n      <ng-container *ngIf=\"isNoResultString; else noResultTemplate\">{{ nzNoResult }}</ng-container>\n      <ng-template #noResultTemplate>\n        <ng-template [ngTemplateOutlet]=\"nzNoResult\"></ng-template>\n      </ng-template>\n    </ng-container>\n  </div>\n  <div class=\"ant-table-footer\" *ngIf=\"nzFooter\">\n    <ng-container *ngIf=\"isFooterString; else footerTemplate\">{{ nzFooter }}</ng-container>\n    <ng-template #footerTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzFooter\"></ng-template>\n    </ng-template>\n  </div>\n</ng-template>\n<div\n  class=\"ant-table-wrapper\"\n  [class.ant-table-empty]=\"data.length==0\">\n  <nz-spin\n    [nzDelay]=\"nzLoadingDelay\"\n    [nzSpinning]=\"nzLoading\">\n    <div>\n      <div\n        class=\"ant-table\"\n        #tableMainElement\n        [class.ant-table-fixed-header]=\"nzScroll.x || nzScroll.y\"\n        [class.ant-table-bordered]=\"nzBordered\"\n        [class.ant-table-large]=\"nzSize=='default'\"\n        [class.ant-table-middle]=\"nzSize=='middle'\"\n        [class.ant-table-small]=\"nzSize=='small'\">\n        <div class=\"ant-table-title\" *ngIf=\"nzTitle\">\n          <ng-container *ngIf=\"isTitleString; else titleTemplate\">{{ nzTitle }}</ng-container>\n          <ng-template #titleTemplate>\n            <ng-template [ngTemplateOutlet]=\"nzTitle\"></ng-template>\n          </ng-template>\n        </div>\n        <div class=\"ant-table-content\">\n          <ng-container *ngIf=\"nzScroll.x || nzScroll.y; else tableInnerTemplate\">\n            <div class=\"ant-table-scroll\">\n              <ng-template [ngTemplateOutlet]=\"tableInnerTemplate\"></ng-template>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </div>\n    <nz-pagination\n      *ngIf=\"nzShowPagination&&data.length\"\n      [nzInTable]=\"true\"\n      [nzShowSizeChanger]=\"nzShowSizeChanger\"\n      [nzPageSizeOptions]=\"nzPageSizeOptions\"\n      [nzShowQuickJumper]=\"nzShowQuickJumper\"\n      [nzHideOnSinglePage]=\"nzHideOnSinglePage\"\n      [nzShowTotal]=\"nzShowTotal\"\n      [nzSize]=\"(nzSize=='middle'||nzSize=='small')?'small':''\"\n      [nzPageSize]=\"nzPageSize\"\n      (nzPageSizeChange)=\"emitPageSize($event)\"\n      [nzTotal]=\"nzTotal\"\n      [nzSimple]=\"nzSimple\"\n      [nzPageIndex]=\"nzPageIndex\"\n      (nzPageIndexChange)=\"emitPageIndex($event)\">\n    </nz-pagination>\n  </nz-spin>\n</div>"
            }] }
];
/** @nocollapse */
NzTableComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: NgZone },
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzMeasureScrollbarService },
    { type: NzI18nService }
];
NzTableComponent.propDecorators = {
    tableHeaderElement: [{ type: ViewChild, args: ['tableHeaderElement',] }],
    tableBodyElement: [{ type: ViewChild, args: ['tableBodyElement',] }],
    tableMainElement: [{ type: ViewChild, args: ['tableMainElement',] }],
    listOfNzThComponent: [{ type: ContentChildren, args: [NzThComponent, { descendants: true },] }],
    nzPageSizeChange: [{ type: Output }],
    nzPageIndexChange: [{ type: Output }],
    nzShowTotal: [{ type: Input }],
    nzCurrentPageDataChange: [{ type: Output }],
    nzSize: [{ type: Input }],
    nzPageSizeOptions: [{ type: Input }],
    nzLoadingDelay: [{ type: Input }],
    nzTotal: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzFrontPagination: [{ type: Input }],
    nzWidthConfig: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzFooter: [{ type: Input }],
    nzNoResult: [{ type: Input }],
    nzBordered: [{ type: Input }],
    nzShowPagination: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzShowSizeChanger: [{ type: Input }],
    nzHideOnSinglePage: [{ type: Input }],
    nzShowQuickJumper: [{ type: Input }],
    nzScroll: [{ type: Input }],
    nzData: [{ type: Input }],
    nzPageIndex: [{ type: Input }],
    nzPageSize: [{ type: Input }],
    onWindowResize: [{ type: HostListener, args: ['window:resize',] }]
};
function NzTableComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTableComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzTableComponent.prototype._bordered;
    /** @type {?} */
    NzTableComponent.prototype._showPagination;
    /** @type {?} */
    NzTableComponent.prototype._loading;
    /** @type {?} */
    NzTableComponent.prototype._showSizeChanger;
    /** @type {?} */
    NzTableComponent.prototype._showQuickJumper;
    /** @type {?} */
    NzTableComponent.prototype._hideOnSinglePage;
    /** @type {?} */
    NzTableComponent.prototype._scroll;
    /** @type {?} */
    NzTableComponent.prototype._footer;
    /** @type {?} */
    NzTableComponent.prototype._title;
    /** @type {?} */
    NzTableComponent.prototype._noResult;
    /** @type {?} */
    NzTableComponent.prototype._pageIndex;
    /** @type {?} */
    NzTableComponent.prototype._pageSize;
    /** @type {?} */
    NzTableComponent.prototype._widthConfig;
    /** @type {?} */
    NzTableComponent.prototype._frontPagination;
    /** @type {?} */
    NzTableComponent.prototype._simple;
    /** @type {?} */
    NzTableComponent.prototype.locale;
    /** @type {?} */
    NzTableComponent.prototype.nzTheadComponent;
    /** @type {?} */
    NzTableComponent.prototype.isFooterString;
    /** @type {?} */
    NzTableComponent.prototype.isTitleString;
    /** @type {?} */
    NzTableComponent.prototype.isNoResultString;
    /** @type {?} */
    NzTableComponent.prototype.el;
    /** @type {?} */
    NzTableComponent.prototype.lastScrollLeft;
    /** @type {?} */
    NzTableComponent.prototype.rawData;
    /** @type {?} */
    NzTableComponent.prototype.syncData;
    /**
     * public data for ngFor tr
     * @type {?}
     */
    NzTableComponent.prototype.data;
    /** @type {?} */
    NzTableComponent.prototype.headerBottomStyle;
    /** @type {?} */
    NzTableComponent.prototype.isWidthConfigSet;
    /** @type {?} */
    NzTableComponent.prototype.tableHeaderElement;
    /** @type {?} */
    NzTableComponent.prototype.tableBodyElement;
    /** @type {?} */
    NzTableComponent.prototype.tableMainElement;
    /** @type {?} */
    NzTableComponent.prototype.listOfNzThComponent;
    /** @type {?} */
    NzTableComponent.prototype.nzPageSizeChange;
    /** @type {?} */
    NzTableComponent.prototype.nzPageIndexChange;
    /** @type {?} */
    NzTableComponent.prototype.nzShowTotal;
    /** @type {?} */
    NzTableComponent.prototype.nzCurrentPageDataChange;
    /** @type {?} */
    NzTableComponent.prototype.nzSize;
    /**
     * page size changer select values
     * @type {?}
     */
    NzTableComponent.prototype.nzPageSizeOptions;
    /** @type {?} */
    NzTableComponent.prototype.nzLoadingDelay;
    /** @type {?} */
    NzTableComponent.prototype.nzTotal;
    /** @type {?} */
    NzTableComponent.prototype.renderer;
    /** @type {?} */
    NzTableComponent.prototype.ngZone;
    /** @type {?} */
    NzTableComponent.prototype.elementRef;
    /** @type {?} */
    NzTableComponent.prototype.cdr;
    /** @type {?} */
    NzTableComponent.prototype.nzMeasureScrollbarService;
    /** @type {?} */
    NzTableComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUVMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBR04sTUFBTSxFQUNOLFNBQVMsRUFDVCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTNDLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQzFGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUM5QyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXhELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVFsRCxNQUFNLE9BQU8sZ0JBQWdCOzs7Ozs7Ozs7SUFzVjNCLFlBQW9CLFFBQW1CLEVBQVUsTUFBYyxFQUFVLFVBQXNCLEVBQVUsR0FBc0IsRUFBVSx5QkFBb0QsRUFBVSxJQUFtQjtRQUF0TSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLDhCQUF5QixHQUF6Qix5QkFBeUIsQ0FBMkI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOzRCQXJW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O2dDQUNOLE1BQU07MEJBQ04sS0FBSztzQ0FHTCxNQUFNO3FCQUNOLEtBQUs7Z0NBRUwsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7dUJBRUwsS0FBSztnQ0FTTCxLQUFLOzRCQVVMLEtBQUs7c0JBVUwsS0FBSzt1QkFVTCxLQUFLO3lCQVVMLEtBQUs7eUJBVUwsS0FBSzsrQkFTTCxLQUFLO3dCQVNMLEtBQUs7Z0NBU0wsS0FBSztpQ0FTTCxLQUFLO2dDQVNMLEtBQUs7dUJBU0wsS0FBSztxQkFlTCxLQUFLOzBCQXVCTCxLQUFLO3lCQXlCTCxLQUFLOzZCQWtGTCxZQUFZLFNBQUMsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0luaXQsXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IE56TWVhc3VyZVNjcm9sbGJhclNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL256LW1lYXN1cmUtc2Nyb2xsYmFyLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHsgTnpUaENvbXBvbmVudCB9IGZyb20gJy4vbnotdGguY29tcG9uZW50JztcbmltcG9ydCB7IE56VGhlYWRDb21wb25lbnQgfSBmcm9tICcuL256LXRoZWFkLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdGFibGUnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdGFibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56VGFibGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfYm9yZGVyZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xuICBwcml2YXRlIF9sb2FkaW5nID0gZmFsc2U7XG4gIHByaXZhdGUgX3Nob3dTaXplQ2hhbmdlciA9IGZhbHNlO1xuICBwcml2YXRlIF9zaG93UXVpY2tKdW1wZXIgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfaGlkZU9uU2luZ2xlUGFnZSA9IGZhbHNlO1xuICBwcml2YXRlIF9zY3JvbGw6IHsgeDogc3RyaW5nOyB5OiBzdHJpbmcgfSA9IHsgeDogbnVsbCwgeTogbnVsbCB9O1xuICBwcml2YXRlIF9mb290ZXI6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBwcml2YXRlIF90aXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIHByaXZhdGUgX25vUmVzdWx0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgcHJpdmF0ZSBfcGFnZUluZGV4ID0gMTtcbiAgcHJpdmF0ZSBfcGFnZVNpemUgPSAxMDtcbiAgcHJpdmF0ZSBfd2lkdGhDb25maWc6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgX2Zyb250UGFnaW5hdGlvbiA9IHRydWU7XG4gIHByaXZhdGUgX3NpbXBsZSA9IGZhbHNlO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIGxvY2FsZTogYW55ID0ge307XG4gIG56VGhlYWRDb21wb25lbnQ6IE56VGhlYWRDb21wb25lbnQ7XG4gIGlzRm9vdGVyU3RyaW5nOiBib29sZWFuO1xuICBpc1RpdGxlU3RyaW5nOiBib29sZWFuO1xuICBpc05vUmVzdWx0U3RyaW5nOiBib29sZWFuO1xuICBlbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgbGFzdFNjcm9sbExlZnQgPSAwO1xuICAvKiB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55ICovXG4gIHJhd0RhdGE6IGFueVtdID0gW107XG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgc3luY0RhdGE6IGFueVtdID0gW107XG4gIC8qKiBwdWJsaWMgZGF0YSBmb3IgbmdGb3IgdHIgKi9cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBkYXRhOiBhbnlbXSA9IFtdO1xuICBoZWFkZXJCb3R0b21TdHlsZTtcbiAgaXNXaWR0aENvbmZpZ1NldCA9IGZhbHNlO1xuICBAVmlld0NoaWxkKCd0YWJsZUhlYWRlckVsZW1lbnQnKSB0YWJsZUhlYWRlckVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3RhYmxlQm9keUVsZW1lbnQnKSB0YWJsZUJvZHlFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCd0YWJsZU1haW5FbGVtZW50JykgdGFibGVNYWluRWxlbWVudDogRWxlbWVudFJlZjtcbiAgQENvbnRlbnRDaGlsZHJlbihOelRoQ29tcG9uZW50LCB7IGRlc2NlbmRhbnRzOiB0cnVlIH0pIGxpc3RPZk56VGhDb21wb25lbnQ6IFF1ZXJ5TGlzdDxOelRoQ29tcG9uZW50PjtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpQYWdlU2l6ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelBhZ2VJbmRleENoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBJbnB1dCgpIG56U2hvd1RvdGFsOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyLCByYW5nZTogWyBudW1iZXIsIG51bWJlciBdIH0+O1xuXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnkgKi9cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBuelNpemU6IHN0cmluZyA9ICdkZWZhdWx0JztcbiAgLyoqIHBhZ2Ugc2l6ZSBjaGFuZ2VyIHNlbGVjdCB2YWx1ZXMgKi9cbiAgQElucHV0KCkgbnpQYWdlU2l6ZU9wdGlvbnMgPSBbIDEwLCAyMCwgMzAsIDQwLCA1MCBdO1xuICBASW5wdXQoKSBuekxvYWRpbmdEZWxheSA9IDA7XG4gIEBJbnB1dCgpIG56VG90YWw6IG51bWJlcjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTaW1wbGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaW1wbGUgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2ltcGxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaW1wbGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpGcm9udFBhZ2luYXRpb24odmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mcm9udFBhZ2luYXRpb24gPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMucGFyc2VJbnB1dERhdGEoKTtcbiAgfVxuXG4gIGdldCBuekZyb250UGFnaW5hdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZnJvbnRQYWdpbmF0aW9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56V2lkdGhDb25maWcodmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5pc1dpZHRoQ29uZmlnU2V0ID0gdHJ1ZTtcbiAgICB0aGlzLl93aWR0aENvbmZpZyA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56V2lkdGhDb25maWcoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLl93aWR0aENvbmZpZztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIHRoaXMuaXNUaXRsZVN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fdGl0bGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelRpdGxlKCk6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpGb290ZXIodmFsdWU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+KSB7XG4gICAgdGhpcy5pc0Zvb3RlclN0cmluZyA9ICEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZik7XG4gICAgdGhpcy5fZm9vdGVyID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpGb290ZXIoKTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLl9mb290ZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpOb1Jlc3VsdCh2YWx1ZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4pIHtcbiAgICB0aGlzLmlzTm9SZXN1bHRTdHJpbmcgPSAhKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpO1xuICAgIHRoaXMuX25vUmVzdWx0ID0gdmFsdWU7XG4gIH1cblxuICBnZXQgbnpOb1Jlc3VsdCgpOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuX25vUmVzdWx0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Qm9yZGVyZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9ib3JkZXJlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpCb3JkZXJlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYm9yZGVyZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93UGFnaW5hdGlvbih2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3Nob3dQYWdpbmF0aW9uID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dQYWdpbmF0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93UGFnaW5hdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekxvYWRpbmcodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9sb2FkaW5nID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekxvYWRpbmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2xvYWRpbmc7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTaG93U2l6ZUNoYW5nZXIodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93U2l6ZUNoYW5nZXIgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56U2hvd1NpemVDaGFuZ2VyKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9zaG93U2l6ZUNoYW5nZXI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpIaWRlT25TaW5nbGVQYWdlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGlkZU9uU2luZ2xlUGFnZSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpIaWRlT25TaW5nbGVQYWdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9oaWRlT25TaW5nbGVQYWdlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1F1aWNrSnVtcGVyKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fc2hvd1F1aWNrSnVtcGVyID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuelNob3dRdWlja0p1bXBlcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1F1aWNrSnVtcGVyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2Nyb2xsKHZhbHVlOiB7IHg6IHN0cmluZzsgeTogc3RyaW5nIH0pIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zY3JvbGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2Nyb2xsID0geyB4OiBudWxsLCB5OiBudWxsIH07XG4gICAgfVxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB0aGlzLnNldFNjcm9sbFBvc2l0aW9uQ2xhc3NOYW1lKCk7XG4gIH1cblxuICBnZXQgbnpTY3JvbGwoKTogeyB4OiBzdHJpbmc7IHk6IHN0cmluZyB9IHtcbiAgICByZXR1cm4gdGhpcy5fc2Nyb2xsO1xuICB9XG5cbiAgQElucHV0KClcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBzZXQgbnpEYXRhKGRhdGE6IGFueVtdKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHRoaXMucmF3RGF0YSA9IGRhdGE7XG4gICAgICB0aGlzLnBhcnNlSW5wdXREYXRhKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2FybignbnpEYXRhIG9ubHkgYWNjZXB0IGFycmF5Jyk7XG4gICAgfVxuICB9XG5cbiAgcGFyc2VJbnB1dERhdGEoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubnpGcm9udFBhZ2luYXRpb24pIHtcbiAgICAgIHRoaXMuc3luY0RhdGEgPSB0aGlzLnJhd0RhdGE7XG4gICAgICB0aGlzLm56VG90YWwgPSB0aGlzLnN5bmNEYXRhLmxlbmd0aDtcbiAgICAgIHRoaXMuY2hlY2tQYWdlSW5kZXhCb3VuZGluZygpO1xuICAgICAgdGhpcy5nZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRhdGEgPSB0aGlzLnJhd0RhdGE7XG4gICAgICB0aGlzLm56Q3VycmVudFBhZ2VEYXRhQ2hhbmdlLmVtaXQodGhpcy5kYXRhKTtcbiAgICB9XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpQYWdlSW5kZXgodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9wYWdlSW5kZXggPT09IHZhbHVlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BhZ2VJbmRleCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICB0aGlzLmdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56UGFnZUluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BhZ2VJbmRleDtcbiAgfVxuXG4gIGVtaXRQYWdlSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubnpQYWdlSW5kZXggPSBpbmRleDtcbiAgICB0aGlzLm56UGFnZUluZGV4Q2hhbmdlLmVtaXQodGhpcy5uelBhZ2VJbmRleCk7XG4gIH1cblxuICBlbWl0UGFnZVNpemUoc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5uelBhZ2VTaXplID0gc2l6ZTtcbiAgICB0aGlzLm56UGFnZVNpemVDaGFuZ2UuZW1pdCh0aGlzLm56UGFnZVNpemUpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGFnZVNpemUodmFsdWU6IG51bWJlcikge1xuICAgIGlmICh0aGlzLl9wYWdlU2l6ZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fcGFnZVNpemUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5uekZyb250UGFnaW5hdGlvbikge1xuICAgICAgdGhpcy5jaGVja1BhZ2VJbmRleEJvdW5kaW5nKCk7XG4gICAgICB0aGlzLmdlbmVyYXRlU3luY0Rpc3BsYXlEYXRhKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56UGFnZVNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGFnZVNpemU7XG4gIH1cblxuICBjaGVja1BhZ2VJbmRleEJvdW5kaW5nKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RnJvbnRQYWdpbmF0aW9uKSB7XG4gICAgICBjb25zdCBtYXhQYWdlSW5kZXggPSBNYXRoLmNlaWwodGhpcy5zeW5jRGF0YS5sZW5ndGggLyB0aGlzLm56UGFnZVNpemUpO1xuICAgICAgY29uc3QgcGFnZUluZGV4ID0gIXRoaXMubnpQYWdlSW5kZXggPyAxIDogKHRoaXMubnpQYWdlSW5kZXggPiBtYXhQYWdlSW5kZXggPyBtYXhQYWdlSW5kZXggOiB0aGlzLm56UGFnZUluZGV4KTtcbiAgICAgIGlmIChwYWdlSW5kZXggIT09IHRoaXMubnpQYWdlSW5kZXgpIHtcbiAgICAgICAgdGhpcy5fcGFnZUluZGV4ID0gcGFnZUluZGV4O1xuICAgICAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKCgpID0+IHRoaXMubnpQYWdlSW5kZXhDaGFuZ2UuZW1pdChwYWdlSW5kZXgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZW5lcmF0ZVN5bmNEaXNwbGF5RGF0YSgpOiB2b2lkIHtcbiAgICB0aGlzLmRhdGEgPSB0aGlzLnN5bmNEYXRhLnNsaWNlKCh0aGlzLm56UGFnZUluZGV4IC0gMSkgKiB0aGlzLm56UGFnZVNpemUsIHRoaXMubnpQYWdlSW5kZXggKiB0aGlzLm56UGFnZVNpemUpO1xuICAgIHRoaXMubnpDdXJyZW50UGFnZURhdGFDaGFuZ2UuZW1pdCh0aGlzLmRhdGEpO1xuICB9XG5cbiAgc3luY1Njcm9sbFRhYmxlKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09PSBlLnRhcmdldCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAodGFyZ2V0LnNjcm9sbExlZnQgIT09IHRoaXMubGFzdFNjcm9sbExlZnQgJiYgdGhpcy5uelNjcm9sbCAmJiB0aGlzLm56U2Nyb2xsLngpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy50YWJsZUhlYWRlckVsZW1lbnQpIHtcbiAgICAgICAgICB0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQgPT09IHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50KSB7XG4gICAgICAgICAgdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9IHRhcmdldC5zY3JvbGxMZWZ0O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubGFzdFNjcm9sbExlZnQgPSB0YXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH1cblxuICBzZXRTY3JvbGxQb3NpdGlvbkNsYXNzTmFtZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy50YWJsZUJvZHlFbGVtZW50ICYmIHRoaXMubnpTY3JvbGwgJiYgdGhpcy5uelNjcm9sbC54KSB7XG4gICAgICBpZiAoKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoID09PSB0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5jbGllbnRXaWR0aCkgJiYgKHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LnNjcm9sbFdpZHRoICE9PSAwKSkge1xuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsTGVmdCA9PT0gMCkge1xuICAgICAgICB0aGlzLnNldFNjcm9sbE5hbWUoJ2xlZnQnKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc2Nyb2xsV2lkdGggPT09ICh0aGlzLnRhYmxlQm9keUVsZW1lbnQubmF0aXZlRWxlbWVudC5zY3JvbGxMZWZ0ICsgdGhpcy50YWJsZUJvZHlFbGVtZW50Lm5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGgpKSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgncmlnaHQnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuc2V0U2Nyb2xsTmFtZSgnbWlkZGxlJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0U2Nyb2xsTmFtZShwb3NpdGlvbj86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IHByZWZpeCA9ICdhbnQtdGFibGUtc2Nyb2xsLXBvc2l0aW9uJztcbiAgICBjb25zdCBjbGFzc0xpc3QgPSBbICdsZWZ0JywgJ3JpZ2h0JywgJ21pZGRsZScgXTtcbiAgICBjbGFzc0xpc3QuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy50YWJsZU1haW5FbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGAke3ByZWZpeH0tJHtuYW1lfWApO1xuICAgIH0pO1xuICAgIGlmIChwb3NpdGlvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLnRhYmxlTWFpbkVsZW1lbnQubmF0aXZlRWxlbWVudCwgYCR7cHJlZml4fS0ke3Bvc2l0aW9ufWApO1xuICAgIH1cbiAgfVxuXG4gIGZpdFNjcm9sbEJhcigpOiB2b2lkIHtcbiAgICBjb25zdCBzY3JvbGxiYXJXaWR0aCA9IHRoaXMubnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZS5zY3JvbGxCYXJXaWR0aDtcbiAgICBpZiAoc2Nyb2xsYmFyV2lkdGgpIHtcbiAgICAgIHRoaXMuaGVhZGVyQm90dG9tU3R5bGUgPSB7XG4gICAgICAgIG1hcmdpbkJvdHRvbSA6IGAtJHtzY3JvbGxiYXJXaWR0aH1weGAsXG4gICAgICAgIHBhZGRpbmdCb3R0b206IGAwcHhgXG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnKVxuICBvbldpbmRvd1Jlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmZpdFNjcm9sbEJhcigpO1xuICAgIHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVGFibGUnKSk7XG4gICAgdGhpcy5maXRTY3JvbGxCYXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2V0U2Nyb2xsUG9zaXRpb25DbGFzc05hbWUoKSk7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMudGFibGVIZWFkZXJFbGVtZW50XG4gICAgICAgICYmIHRoaXMudGFibGVIZWFkZXJFbGVtZW50Lm5hdGl2ZUVsZW1lbnRcbiAgICAgICAgJiYgdGhpcy50YWJsZUJvZHlFbGVtZW50XG4gICAgICAgICYmIHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIG1lcmdlPE1vdXNlRXZlbnQ+KFxuICAgICAgICAgIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLnRhYmxlSGVhZGVyRWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJyksXG4gICAgICAgICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KHRoaXMudGFibGVCb2R5RWxlbWVudC5uYXRpdmVFbGVtZW50LCAnc2Nyb2xsJylcbiAgICAgICAgKS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoZGF0YTogTW91c2VFdmVudCkgPT4ge1xuICAgICAgICAgIHRoaXMuc3luY1Njcm9sbFRhYmxlKGRhdGEpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBuek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgfVxufVxuIl19