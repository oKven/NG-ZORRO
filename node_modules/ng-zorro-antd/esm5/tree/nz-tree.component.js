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
var NzTreeComponent = /** @class */ (function () {
    function NzTreeComponent(nzTreeService) {
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
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
    }
    Object.defineProperty(NzTreeComponent.prototype, "nzData", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (Array.isArray(value)) {
                if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
                    // has not been new NzTreeNode
                    this.nzNodes = value.map(function (item) { return (new NzTreeNode(item)); });
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultExpandedKeys", {
        /**
         * @deprecated use
         * nzExpandedKeys instead
         */
        set: /**
         * @deprecated use
         * nzExpandedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultSelectedKeys", {
        /**
         * @deprecated use
         * nzSelectedKeys instead
         */
        set: /**
         * @deprecated use
         * nzSelectedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzDefaultCheckedKeys", {
        /**
         * @deprecated use
         * nzCheckedKeys instead
         */
        set: /**
         * @deprecated use
         * nzCheckedKeys instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzExpandedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzExpandedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSelectedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzSelectedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzCheckedKeys", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.nzDefaultSubject.next({ type: 'nzCheckedKeys', keys: value });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeComponent.prototype, "nzSearchValue", {
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
            this.nzTreeService.searchExpand(value);
            if (isNotNil(value)) {
                this.nzSearchValueChange.emit(this.nzTreeService.formatEvent('search', null, null));
                this.nzOnSearchNode.emit(this.nzTreeService.formatEvent('search', null, null));
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getTreeNodes = /**
     * @return {?}
     */
    function () {
        return this.nzNodes;
    };
    /**
     * public function
     */
    /**
     * public function
     * @return {?}
     */
    NzTreeComponent.prototype.getCheckedNodeList = /**
     * public function
     * @return {?}
     */
    function () {
        return this.nzTreeService.getCheckedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getSelectedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getSelectedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getHalfCheckedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getHalfCheckedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getExpandedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getExpandedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.getMatchedNodeList = /**
     * @return {?}
     */
    function () {
        return this.nzTreeService.getMatchedNodeList();
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.nzTreeClass = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + '-show-line'] = this.nzShowLine,
            _a[this.prefixCls + "-icon-hide"] = !this.nzShowIcon,
            _a['draggable-tree'] = this.nzDraggable,
            _a);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzTreeComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
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
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTreeComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.setClassMap();
        this.nzDefaultSubscription = this.nzDefaultSubject.subscribe(function (data) {
            if (!data || !data.keys) {
                return;
            }
            switch (data.type) {
                case 'nzExpandedKeys':
                    _this.nzTreeService.calcExpandedKeys(data.keys, _this.nzNodes);
                    _this.nzExpandedKeysChange.emit(data.keys);
                    break;
                case 'nzSelectedKeys':
                    _this.nzTreeService.calcSelectedKeys(data.keys, _this.nzNodes, _this.nzMultiple);
                    _this.nzSelectedKeysChange.emit(data.keys);
                    break;
                case 'nzCheckedKeys':
                    _this.nzTreeService.calcCheckedKeys(data.keys, _this.nzNodes, _this.nzCheckStrictly);
                    _this.nzCheckedKeysChange.emit(data.keys);
                    break;
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes["nzCheckStrictly"]) {
            this.nzTreeService.conductOption.isCheckStrictly = changes["nzCheckStrictly"].currentValue;
        }
    };
    /**
     * @return {?}
     */
    NzTreeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.nzDefaultSubscription) {
            this.nzDefaultSubscription.unsubscribe();
            this.nzDefaultSubscription = null;
        }
    };
    NzTreeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree',
                    template: "<ul\n  role=\"tree\"\n  unselectable=\"on\"\n  [ngClass]=\"nzTreeClass\">\n  <nz-tree-node\n    *ngFor=\"let node of nzNodes\"\n    [nzTreeNode]=\"node\"\n    [nzShowLine]=\"nzShowLine\"\n    [nzDraggable]=\"nzDraggable\"\n    [nzCheckable]=\"nzCheckable\"\n    [nzShowExpand]=\"nzShowExpand\"\n    [nzAsyncData]=\"nzAsyncData\"\n    [nzMultiple]=\"nzMultiple\"\n    [nzSearchValue]=\"nzSearchValue\"\n    [nzHideUnMatched]=\"nzHideUnMatched\"\n    [nzBeforeDrop]=\"nzBeforeDrop\"\n    [nzCheckStrictly]=\"nzCheckStrictly\"\n    [nzExpandAll]=\"nzExpandAll\"\n    [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\n    [nzTreeTemplate]=\"nzTreeTemplate\"\n    (clickNode)=\"nzClick.emit($event)\"\n    (dblClick)=\"nzDblClick.emit($event)\"\n    (contextMenu)=\"nzContextMenu.emit($event)\"\n    (clickExpand)=\"nzExpandChange.emit($event)\"\n    (clickCheckBox)=\"nzCheckBoxChange.emit($event)\"\n    (nzDragStart)=\"nzOnDragStart.emit($event)\"\n    (nzDragEnter)=\"nzOnDragEnter.emit($event)\"\n    (nzDragOver)=\"nzOnDragOver.emit($event)\"\n    (nzDragLeave)=\"nzOnDragLeave.emit($event)\"\n    (nzDrop)=\"nzOnDrop.emit($event)\"\n    (nzDragEnd)=\"nzOnDragEnd.emit($event)\">\n  </nz-tree-node>\n</ul>",
                    providers: [
                        NzTreeService,
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzTreeComponent; }),
                            multi: true
                        }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzTreeComponent.ctorParameters = function () { return [
        { type: NzTreeService }
    ]; };
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
    return NzTreeComponent;
}());
export { NzTreeComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidHJlZS9uei10cmVlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNULFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFFTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDbkQsT0FBTyxFQUFjLGFBQWEsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztJQXdNaEQseUJBQW1CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBeEwvQyxrQkFBc0MsS0FBSyxDQUFDO1FBQzVDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsdUJBQTJDLEtBQUssQ0FBQztRQUNqRCxtQkFBdUMsS0FBSyxDQUFDO1FBQzdDLG9CQUF3QyxJQUFJLENBQUM7UUFDN0MsbUJBQXVDLEtBQUssQ0FBQztRQUM3QyxtQkFBdUMsS0FBSyxDQUFDO1FBQzdDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsbUJBQWdELEtBQUssQ0FBQztRQUN0RCx1QkFBMkMsS0FBSyxDQUFDOzs7OztRQUtqRCwwQkFBdUQsS0FBSyxDQUFDOztRQStFN0QsNEJBQWtFLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0YsNEJBQWtFLElBQUksWUFBWSxFQUFZLENBQUM7UUFDL0YsMkJBQWlFLElBQUksWUFB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TTswQkFFTixNQUFNOzZCQUNOLE1BQU07Z0NBQ04sTUFBTTttQ0FDTixNQUFNO2lDQUNOLE1BQU07Z0NBRU4sTUFBTTtnQ0FDTixNQUFNOytCQUNOLE1BQU07Z0NBQ04sTUFBTTsyQkFDTixNQUFNOzhCQUNOLE1BQU07aUNBRU4sWUFBWSxTQUFDLGdCQUFnQjs7O1FBckhwQixZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFLZCxZQUFZLEVBQUU7OzswQkFqRDFCOztTQWtDYSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBUZW1wbGF0ZVJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgUmVwbGF5U3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekZvcm1hdEJlZm9yZURyb3BFdmVudCwgTnpGb3JtYXRFbWl0RXZlbnQgfSBmcm9tICcuLi90cmVlL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi9uei10cmVlLW5vZGUnO1xuaW1wb3J0IHsgTnpUcmVlU2VydmljZSB9IGZyb20gJy4vbnotdHJlZS5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgOiAnbnotdHJlZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10cmVlLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICA6IFtcbiAgICBOelRyZWVTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56VHJlZUNvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE56VHJlZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93SWNvbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5ID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93RXhwYW5kID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRyYWdnYWJsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpFeHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56SGlkZVVuTWF0Y2hlZCA9IGZhbHNlO1xuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56RXhwYW5kQWxsIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRlZmF1bHRFeHBhbmRBbGw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICBzZXQgbnpEYXRhKHZhbHVlOiBhbnlbXSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgaWYgKCF0aGlzLm56VHJlZVNlcnZpY2UuaXNBcnJheU9mTnpUcmVlTm9kZSh2YWx1ZSkpIHtcbiAgICAgICAgLy8gaGFzIG5vdCBiZWVuIG5ldyBOelRyZWVOb2RlXG4gICAgICAgIHRoaXMubnpOb2RlcyA9IHZhbHVlLm1hcChpdGVtID0+IChuZXcgTnpUcmVlTm9kZShpdGVtKSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5uek5vZGVzID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY29uZHVjdE9wdGlvbi5pc0NoZWNrU3RyaWN0bHkgPSB0aGlzLm56Q2hlY2tTdHJpY3RseTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5pbml0VHJlZSh0aGlzLm56Tm9kZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCduZ01vZGVsIG9ubHkgYWNjZXB0cyBhbiBhcnJheSBhbmQgbXVzdCBiZSBub3QgZW1wdHknKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56RXhwYW5kZWRLZXlzIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZGVwcmVjYXRlZCB1c2VcbiAgICogbnpTZWxlY3RlZEtleXMgaW5zdGVhZFxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IG56RGVmYXVsdFNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBuekNoZWNrZWRLZXlzIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRDaGVja2VkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduekNoZWNrZWRLZXlzJywga2V5czogdmFsdWUgfSk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpFeHBhbmRlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpFeHBhbmRlZEtleXMnLCBrZXlzOiB2YWx1ZSB9KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlbGVjdGVkS2V5cyh2YWx1ZTogc3RyaW5nW10pIHtcbiAgICB0aGlzLm56RGVmYXVsdFN1YmplY3QubmV4dCh7IHR5cGU6ICduelNlbGVjdGVkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2hlY2tlZEtleXModmFsdWU6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJqZWN0Lm5leHQoeyB0eXBlOiAnbnpDaGVja2VkS2V5cycsIGtleXM6IHZhbHVlIH0pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2VhcmNoVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NlYXJjaFZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNlYXJjaEV4cGFuZCh2YWx1ZSk7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5uelNlYXJjaFZhbHVlQ2hhbmdlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgICB0aGlzLm56T25TZWFyY2hOb2RlLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdzZWFyY2gnLCBudWxsLCBudWxsKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICAvLyBtb2RlbCBiaW5kXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekV4cGFuZGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNlbGVjdGVkS2V5c0NoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZ1tdPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nW10+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoZWNrZWRLZXlzQ2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nW10+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmdbXT4oKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpTZWFyY2hWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIHVzZVxuICAgKiBuelNlYXJjaFZhbHVlQ2hhbmdlIGluc3RlYWRcbiAgICovXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uU2VhcmNoTm9kZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDbGljazogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RGJsQ2xpY2s6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNvbnRleHRNZW51OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGVja0JveENoYW5nZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RXhwYW5kQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpPbkRyYWdFbnRlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnT3ZlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnTGVhdmU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uRHJvcDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25EcmFnRW5kOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIEBDb250ZW50Q2hpbGQoJ256VHJlZVRlbXBsYXRlJykgbnpUcmVlVGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT47XG4gIF9zZWFyY2hWYWx1ZSA9IG51bGw7XG4gIG56RGVmYXVsdFN1YmplY3QgPSBuZXcgUmVwbGF5U3ViamVjdDwgeyB0eXBlOiBzdHJpbmcsIGtleXM6IHN0cmluZ1tdIH0+KDYpO1xuICBuekRlZmF1bHRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgbnpOb2RlczogTnpUcmVlTm9kZVtdID0gW107XG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XG4gIG56VHJlZUNsYXNzID0ge307XG5cbiAgb25DaGFuZ2U6ICh2YWx1ZTogTnpUcmVlTm9kZVtdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcbiAgb25Ub3VjaGVkOiAoKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcblxuICBnZXRUcmVlTm9kZXMoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uek5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIHB1YmxpYyBmdW5jdGlvblxuICAgKi9cbiAgZ2V0Q2hlY2tlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldFNlbGVjdGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEV4cGFuZGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIGdldE1hdGNoZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0TWF0Y2hlZE5vZGVMaXN0KCk7XG4gIH1cblxuICBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLm56VHJlZUNsYXNzID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyB0aGlzLnByZWZpeENscyArICctc2hvdy1saW5lJyBdOiB0aGlzLm56U2hvd0xpbmUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uLWhpZGVgIF06ICF0aGlzLm56U2hvd0ljb24sXG4gICAgICBbICdkcmFnZ2FibGUtdHJlZScgXSAgICAgICAgICAgICA6IHRoaXMubnpEcmFnZ2FibGVcbiAgICB9O1xuICB9XG5cbiAgd3JpdGVWYWx1ZSh2YWx1ZTogTnpUcmVlTm9kZVtdKTogdm9pZCB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB0aGlzLm56Tm9kZXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jb25kdWN0T3B0aW9uLmlzQ2hlY2tTdHJpY3RseSA9IHRoaXMubnpDaGVja1N0cmljdGx5O1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmluaXRUcmVlKHRoaXMubnpOb2Rlcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ25nTW9kZWwgb25seSBhY2NlcHRzIGFuIGFycmF5IGFuZCBzaG91bGQgYmUgbm90IGVtcHR5Jyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKF86IE56VHJlZU5vZGVbXSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuelRyZWVTZXJ2aWNlOiBOelRyZWVTZXJ2aWNlKSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XG4gICAgdGhpcy5uekRlZmF1bHRTdWJzY3JpcHRpb24gPSB0aGlzLm56RGVmYXVsdFN1YmplY3Quc3Vic2NyaWJlKChkYXRhOiB7IHR5cGU6IHN0cmluZywga2V5czogc3RyaW5nW10gfSkgPT4ge1xuICAgICAgaWYgKCFkYXRhIHx8ICFkYXRhLmtleXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChkYXRhLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnbnpFeHBhbmRlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjRXhwYW5kZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzKTtcbiAgICAgICAgICB0aGlzLm56RXhwYW5kZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbnpTZWxlY3RlZEtleXMnOlxuICAgICAgICAgIHRoaXMubnpUcmVlU2VydmljZS5jYWxjU2VsZWN0ZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56TXVsdGlwbGUpO1xuICAgICAgICAgIHRoaXMubnpTZWxlY3RlZEtleXNDaGFuZ2UuZW1pdChkYXRhLmtleXMpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICduekNoZWNrZWRLZXlzJzpcbiAgICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuY2FsY0NoZWNrZWRLZXlzKGRhdGEua2V5cywgdGhpcy5uek5vZGVzLCB0aGlzLm56Q2hlY2tTdHJpY3RseSk7XG4gICAgICAgICAgdGhpcy5uekNoZWNrZWRLZXlzQ2hhbmdlLmVtaXQoZGF0YS5rZXlzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgWyBwcm9wZXJ0eU5hbWU6IHN0cmluZyBdOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3RPcHRpb24uaXNDaGVja1N0cmljdGx5ID0gY2hhbmdlcy5uekNoZWNrU3RyaWN0bHkuY3VycmVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGVmYXVsdFN1YnNjcmlwdGlvbikge1xuICAgICAgdGhpcy5uekRlZmF1bHRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMubnpEZWZhdWx0U3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==