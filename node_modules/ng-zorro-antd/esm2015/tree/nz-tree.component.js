/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { forwardRef, Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ReplaySubject } from 'rxjs';
import { isNotNil } from '../core/util/check';
import { InputBoolean } from '../core/util/convert';
import { NzTreeNode } from './nz-tree-node';
import { NzTreeService } from './nz-tree.service';
export class NzTreeComponent {
    /**
     * @param {?} nzTreeService
     */
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
        this.nzShowIcon = false;
        this.nzShowLine = false;
        this.nzCheckStrictly = false;
        this.nzCheckable = false;
        this.nzShowExpand = true;
        this.nzAsyncData = false;
        this.nzDraggable = false;
        this.nzMultiple = false;
        this.nzExpandAll = false;
        this.nzHideUnMatched = false;
        /**
         * @deprecated use
         * nzExpandAll instead
         */
        this.nzDefaultExpandAll = false;
        // model bind
        this.nzExpandedKeysChange = new EventEmitter();
        this.nzSelectedKeysChange = new EventEmitter();
        this.nzCheckedKeysChange = new EventEmitter();
        this.nzSearchValueChange = new EventEmitter();
        /**
         * @deprecated use
         * nzSearchValueChange instead
         */
        this.nzOnSearchNode = new EventEmitter();
        this.nzClick = new EventEmitter();
        this.nzDblClick = new EventEmitter();
        this.nzContextMenu = new EventEmitter();
        this.nzCheckBoxChange = new EventEmitter();
        this.nzExpandChange = new EventEmitter();
        this.nzOnDragStart = new EventEmitter();
        this.nzOnDragEnter = new EventEmitter();
        this.nzOnDragOver = new EventEmitter();
        this.nzOnDragLeave = new EventEmitter();
        this.nzOnDrop = new EventEmitter();
        this.nzOnDragEnd = new EventEmitter();
        this._searchValue = null;
        this.nzDefaultSubject = new ReplaySubject(6);
        this.nzNodes = [];
        this.prefixCls = 'ant-tree';
        this.nzTreeClass = {};
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzData(value) {
        if (Array.isArray(value)) {
            if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
                // has not been new NzTreeNode
                this.nzNodes = value.map(item => (new NzTreeNode(item)));
            }
            else {
                this.nzNodes = value;
            }
            this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(this.nzNodes);
        }
        else {
            if (value !== null) {
                console.warn('ngModel only accepts an array and must be not empty');
            }
        }
    }
    /**
     * @deprecated use
     * nzExpandedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzSelectedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @deprecated use
     * nzCheckedKeys instead
     * @param {?} value
     * @return {?}
     */
    set nzDefaultCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzExpandedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSelectedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzCheckedKeys(value) {
        this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSearchValue(value) {
        this._searchValue = value;
        this.nzTreeService.searchExpand(value);
        if (isNotNil(value)) {
            this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
            this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
        }
    }
    /**
     * @return {?}
     */
    get nzSearchValue() {
        return this._searchValue;
    }
    /**
     * @return {?}
     */
    getTreeNodes() {
        return this.nzNodes;
    }
    /**
     * public function
     * @return {?}
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * @return {?}
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * @return {?}
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * @return {?}
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * @return {?}
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.nzTreeClass = {
            [this.prefixCls]: true,
            [this.prefixCls + '-show-line']: this.nzShowLine,
            [`${this.prefixCls}-icon-hide`]: !this.nzShowIcon,
            ['draggable-tree']: this.nzDraggable
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (Array.isArray(value)) {
            this.nzNodes = value;
            this.nzTreeService.conductOption.isCheckStrictly = this.nzCheckStrictly;
            this.nzTreeService.initTree(this.nzNodes);
        }
        else {
            if (value !== null) {
                console.warn('ngModel only accepts an array and should be not empty');
            }
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
        this.nzDefaultSubscription = this.nzDefaultSubject.subscribe((data) => {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    this.nzTreeService.calcExpandedKeys(data.keys, this.nzNodes);
                    this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    this.nzTreeService.calcSelectedKeys(data.keys, this.nzNodes, this.nzMultiple);
                    this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    this.nzTreeService.calcCheckedKeys(data.keys, this.nzNodes, this.nzCheckStrictly);
                    this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzCheckStrictly"]) {
            this.nzTreeService.conductOption.isCheckStrictly = changes["nzCheckStrictly"].currentValue;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.nzDefaultSubscription) {
            this.nzDefaultSubscription.unsubscribe();
            this.nzDefaultSubscription = null;
        }
    }
}
NzTreeComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-tree',
                template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"nzTreeClass\">\n  <nz-tree-node\n    *ngFor=\"let node of nzNodes\"\n    [nzTreeNode]=\"node\"\n    [nzShowLine]=\"nzShowLine\"\n    [nzDraggable]=\"nzDraggable\"\n    [nzCheckable]=\"nzCheckable\"\n    [nzShowExpand]=\"nzShowExpand\"\n    [nzAsyncData]=\"nzAsyncData\"\n    [nzMultiple]=\"nzMultiple\"\n    [nzSearchValue]=\"nzSearchValue\"\n    [nzHideUnMatched]=\"nzHideUnMatched\"\n    [nzBeforeDrop]=\"nzBeforeDrop\"\n    [nzCheckStrictly]=\"nzCheckStrictly\"\n    [nzExpandAll]=\"nzExpandAll\"\n    [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\n    [nzTreeTemplate]=\"nzTreeTemplate\"\n    (clickNode)=\"nzClick.emit($event)\"\n    (dblClick)=\"nzDblClick.emit($event)\"\n    (contextMenu)=\"nzContextMenu.emit($event)\"\n    (clickExpand)=\"nzExpandChange.emit($event)\"\n    (clickCheckBox)=\"nzCheckBoxChange.emit($event)\"\n    (nzDragStart)=\"nzOnDragStart.emit($event)\"\n    (nzDragEnter)=\"nzOnDragEnter.emit($event)\"\n    (nzDragOver)=\"nzOnDragOver.emit($event)\"\n    (nzDragLeave)=\"nzOnDragLeave.emit($event)\"\n    (nzDrop)=\"nzOnDrop.emit($event)\"\n    (nzDragEnd)=\"nzOnDragEnd.emit($event)\">\n  </nz-tree-node>\n</ul>",
                providers: [
                    NzTreeService,
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzTreeComponent),
                        multi: true
                    }
                ]
            }] }
];
/** @nocollapse */
NzTreeComponent.ctorParameters = () => [
    { type: NzTreeService }
];
NzTreeComponent.propDecorators = {
    nzShowIcon: [{ type: Input }],
    nzShowLine: [{ type: Input }],
    nzCheckStrictly: [{ type: Input }],
    nzCheckable: [{ type: Input }],
    nzShowExpand: [{ type: Input }],
    nzAsyncData: [{ type: Input }],
    nzDraggable: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzExpandAll: [{ type: Input }],
    nzHideUnMatched: [{ type: Input }],
    nzDefaultExpandAll: [{ type: Input }],
    nzBeforeDrop: [{ type: Input }],
    nzData: [{ type: Input }],
    nzDefaultExpandedKeys: [{ type: Input }],
    nzDefaultSelectedKeys: [{ type: Input }],
    nzDefaultCheckedKeys: [{ type: Input }],
    nzExpandedKeys: [{ type: Input }],
    nzSelectedKeys: [{ type: Input }],
    nzCheckedKeys: [{ type: Input }],
    nzSearchValue: [{ type: Input }],
    nzExpandedKeysChange: [{ type: Output }],
    nzSelectedKeysChange: [{ type: Output }],
    nzCheckedKeysChange: [{ type: Output }],
    nzSearchValueChange: [{ type: Output }],
    nzOnSearchNode: [{ type: Output }],
    nzClick: [{ type: Output }],
    nzDblClick: [{ type: Output }],
    nzContextMenu: [{ type: Output }],
    nzCheckBoxChange: [{ type: Output }],
    nzExpandChange: [{ type: Output }],
    nzOnDragStart: [{ type: Output }],
    nzOnDragEnter: [{ type: Output }],
    nzOnDragOver: [{ type: Output }],
    nzOnDragLeave: [{ type: Output }],
    nzOnDrop: [{ type: Output }],
    nzOnDragEnd: [{ type: Output }],
    nzTreeTemplate: [{ type: ContentChild, args: ['nzTreeTemplate',] }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowIcon", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowLine", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckStrictly", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzCheckable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzShowExpand", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzAsyncData", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzDraggable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzExpandAll", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzTreeComponent.prototype, "nzHideUnMatched", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzTreeComponent.prototype, "nzDefaultExpandAll", void 0);
function NzTreeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeComponent.prototype.nzDraggable;
    /** @type {?} */
    NzTreeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzHideUnMatched;
    /**
     * @deprecated use
     * nzExpandAll instead
     * @type {?}
     */
    NzTreeComponent.prototype.nzDefaultExpandAll;
    /** @type {?} */
    NzTreeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSelectedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckedKeysChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzSearchValueChange;
    /**
     * @deprecated use
     * nzSearchValueChange instead
     * @type {?}
     */
    NzTreeComponent.prototype.nzOnSearchNode;
    /** @type {?} */
    NzTreeComponent.prototype.nzClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzDblClick;
    /** @type {?} */
    NzTreeComponent.prototype.nzContextMenu;
    /** @type {?} */
    NzTreeComponent.prototype.nzCheckBoxChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzExpandChange;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragStart;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnter;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragOver;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragLeave;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDrop;
    /** @type {?} */
    NzTreeComponent.prototype.nzOnDragEnd;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeComponent.prototype._searchValue;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubject;
    /** @type {?} */
    NzTreeComponent.prototype.nzDefaultSubscription;
    /** @type {?} */
    NzTreeComponent.prototype.nzNodes;
    /** @type {?} */
    NzTreeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeClass;
    /** @type {?} */
    NzTreeComponent.prototype.onChange;
    /** @type {?} */
    NzTreeComponent.prototype.onTouched;
    /** @type {?} */
    NzTreeComponent.prototype.nzTreeService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFjLGFBQWEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBZWxELE1BQU0sT0FBTyxlQUFlOzs7O0lBeUwxQixZQUFtQixhQUE0QjtRQUE1QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQXhML0Msa0JBQXNDLEtBQUssQ0FBQztRQUM1QyxrQkFBc0MsS0FBSyxDQUFDO1FBQzVDLHVCQUEyQyxLQUFLLENBQUM7UUFDakQsbUJBQXVDLEtBQUssQ0FBQztRQUM3QyxvQkFBd0MsSUFBSSxDQUFDO1FBQzdDLG1CQUF1QyxLQUFLLENBQUM7UUFDN0MsbUJBQXVDLEtBQUssQ0FBQztRQUM3QyxrQkFBc0MsS0FBSyxDQUFDO1FBQzVDLG1CQUFnRCxLQUFLLENBQUM7UUFDdEQsdUJBQTJDLEtBQUssQ0FBQzs7Ozs7UUFLakQsMEJBQXVELEtBQUssQ0FBQzs7UUErRTdELDRCQUFrRSxJQUFJLFlBQVksRUFBWSxDQUFDO1FBQy9GLDRCQUFrRSxJQUFJLFlBQVksRUFBWSxDQUFD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O0lBQ2QsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBQ2QsWUFBWSxFQUFFOzs7O0lBS2QsWUFBWSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekZvcm1hdEJlZm9yZURyb3BFdmVudCwgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi90cmVlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLW5vZGUnO1xuaW1wb3J0IHsgTnpUcmVlU2VydmljZSB9IGZyb20gJy4vbnotdHJlZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFtcbiAgICBOelRyZWVTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZUNvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE56VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SWNvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRyYWdnYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56RXhwYW5kQWxsIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRlZmF1bHRFeHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpEYXRhKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKCF0aGlzLm56VHJlZVNlcnZpY2UuaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gaGFzIG5vdCBiZWVuIG5ldyBOelRyZWVOb2RlXG4gICAgICAgIHRoaXMubnpOb2RlcyA9IHZhbHVlLm1hcChpdGVtID0+IChuZXcgTnpUcmVlTm9kZShpdGVtKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uek5vZGVzID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdE9wdGlvbi5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLm56Tm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCduZ01vZGVsIG9ubHkgYWNjZXB0cyBhbiBhcnJheSBhbmQgbXVzdCBiZSBub3QgZW1wdHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56RXhwYW5kZWRLZXlzIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogbnpTZWxlY3RlZEtleXMgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBuekNoZWNrZWRLZXlzIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5uelNlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgICB0aGlzLm56T25TZWFyY2hOb2RlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICAvLyBtb2RlbCBiaW5kXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBuelNlYXJjaFZhbHVlQ2hhbmdlIGluc3RlYWRcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBDb250ZW50Q2hpbGQoJ256VHJlZVRlbXBsYXRlJykgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9zZWFyY2hWYWx1ZSA9IG51bGw7XG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDwgeyB0eXBlOiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdIH0+KDYpO1xuICBuekRlZmF1bHRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbnpOb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XG4gIG56VHJlZUNsYXNzID0ge307XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBnZXRUcmVlTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uek5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIHB1YmxpYyBmdW5jdGlvblxuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEV4cGFuZGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0TWF0Y2hlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VHJlZUNsYXNzID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyB0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJyBdOiB0aGlzLm56U2hvd0xpbmUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgIF06ICF0aGlzLm56U2hvd0ljb24sXG4gICAgICBbICdkcmFnZ2FibGUtdHJlZScgXSAgICAgICAgICAgICA6IHRoaXMubnpEcmFnZ2FibGVcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLm56Tm9kZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMubnpOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25nTW9kZWwgb25seSBhY2NlcHRzIGFuIGFycmF5IGFuZCBzaG91bGQgYmUgbm90IGVtcHR5Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBOelRyZWVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJzY3JpcHRpb24gPSB0aGlzLm56RGVmYXVsdFN1YmplY3Quc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZywga2V5czogc3RyaW5nW10gfSkgPT4ge1xuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmtleXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzKTtcbiAgICAgICAgICB0aGlzLm56RXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xuICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduekNoZWNrZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XG4gICAgICAgICAgdGhpcy5uekNoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgWyBwcm9wZXJ0eU5hbWU6IHN0cmluZyBdOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5ID0gY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGVmYXVsdFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5uekRlZmF1bHRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMubnpEZWZhdWx0U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==