/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, EventEmitter, HostListener, Input, NgZone, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InputBoolean } from '../core/util/convert';
import { NzTreeNode } from './nz-tree-node';
import { isCheckDisabled } from './nz-tree-util';
import { NzTreeService } from './nz-tree.service';
var NzTreeNodeComponent = /** @class */ (function () {
    function NzTreeNodeComponent(nzTreeService, ngZone, renderer, elRef) {
        this.nzTreeService = nzTreeService;
        this.ngZone = ngZone;
        this.renderer = renderer;
        this.elRef = elRef;
        this.nzHideUnMatched = false;
        // Output
        this.clickNode = new EventEmitter();
        this.dblClick = new EventEmitter();
        this.contextMenu = new EventEmitter();
        this.clickCheckBox = new EventEmitter();
        this.clickExpand = new EventEmitter();
        this.nzDragStart = new EventEmitter();
        this.nzDragEnter = new EventEmitter();
        this.nzDragOver = new EventEmitter();
        this.nzDragLeave = new EventEmitter();
        this.nzDrop = new EventEmitter();
        this.nzDragEnd = new EventEmitter();
        // default var
        this.prefixCls = 'ant-tree';
        this.highlightKeys = [];
        this.nzNodeClass = {};
        this.nzNodeSwitcherClass = {};
        this.nzNodeContentClass = {};
        this.nzNodeContentIconClass = {};
        this.nzNodeContentLoadingClass = {};
        this.nzNodeChildrenClass = {};
        /**
         * drag var
         */
        this.destory$ = new Subject();
        this.dragPos = 2;
        this.dragPosClass = {
            '0': 'drag-over',
            '1': 'drag-over-gap-bottom',
            '-1': 'drag-over-gap-top'
        };
        this._searchValue = '';
        this._nzExpandAll = false;
        this._nzDraggable = false;
        this.oldAPIIcon = true;
    }
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzTreeNode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzTreeNode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            // add to checked list & selected list
            if (value.isChecked) {
                this.nzTreeService.setCheckedNodeList(value);
            }
            // add select list
            if (value.isSelected) {
                this.nzTreeService.setSelectedNodeList(value, this.nzMultiple);
            }
            if (!value.isLeaf) {
                this.nzTreeService.setExpandedNodeList(value);
            }
            this._nzTreeNode = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzDraggable;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzDraggable = value;
            this.handDragEvent();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzDefaultExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzExpandAll;
        },
        /**
         * @deprecated use
         * nzExpandAll instead
         */
        set: /**
         * @deprecated use
         * nzExpandAll instead
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.setExpanded(true);
                this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzExpandAll", {
        get: /**
         * @return {?}
         */
        function () {
            return this._nzExpandAll;
        },
        // default set
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._nzExpandAll = value;
            if (value && this.nzTreeNode && !this.nzTreeNode.isLeaf) {
                this.nzTreeNode.setExpanded(true);
                this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzSearchValue", {
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
            this.highlightKeys = [];
            if (value && this.nzTreeNode.title.includes(value)) {
                /** @type {?} */
                var index = this.nzTreeNode.title.indexOf(value);
                this.highlightKeys.push(this.nzTreeNode.title.slice(0, index));
                this.highlightKeys.push(this.nzTreeNode.title.slice(index + value.length, this.nzTreeNode.title.length));
            }
            this._searchValue = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzTreeNode && this.nzTreeNode.origin.icon) {
                this.oldAPIIcon = this.nzTreeNode.origin.icon.indexOf('anticon') > -1;
            }
            return this.nzTreeNode && this.nzTreeNode.origin.icon;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "canDraggable", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzDraggable && this.nzTreeNode && !this.nzTreeNode.isDisabled) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowLineIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzTreeNode.isLeaf && this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isShowSwitchIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return !this.nzTreeNode.isLeaf && !this.nzShowLine;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "isSwitcherClose", {
        get: /**
         * @return {?}
         */
        function () {
            return (!this.nzTreeNode.isExpanded && !this.nzTreeNode.isLeaf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTreeNodeComponent.prototype, "displayStyle", {
        get: /**
         * @return {?}
         */
        function () {
            // TODO
            return (this.nzSearchValue && this.nzHideUnMatched && !this.nzTreeNode.isMatched && !this.nzTreeNode.isExpanded) ? 'none' : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * reset node class
     */
    /**
     * reset node class
     * @return {?}
     */
    NzTreeNodeComponent.prototype.setClassMap = /**
     * reset node class
     * @return {?}
     */
    function () {
        var _a, _b, _c, _d, _e, _f;
        this.nzNodeClass = (_a = {},
            _a[this.prefixCls + "-treenode-disabled"] = this.nzTreeNode.isDisabled,
            _a);
        this.nzNodeSwitcherClass = (_b = {},
            _b[this.prefixCls + "-switcher"] = true,
            _b[this.prefixCls + "-switcher-noop"] = this.nzTreeNode.isLeaf,
            _b);
        this.nzNodeContentClass = (_c = {},
            _c[this.prefixCls + "-node-content-wrapper"] = true,
            _c);
        this.nzNodeContentIconClass = (_d = {},
            _d[this.prefixCls + "-iconEle"] = true,
            _d[this.prefixCls + "-icon__customize"] = true,
            _d);
        this.nzNodeContentLoadingClass = (_e = {},
            _e[this.prefixCls + "-iconEle"] = true,
            _e);
        this.nzNodeChildrenClass = (_f = {},
            _f[this.prefixCls + "-child-tree"] = true,
            _f[this.prefixCls + "-child-tree-open"] = true,
            _f);
    };
    /**
     * click node to select, 200ms to dbl click
     */
    /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzClick = /**
     * click node to select, 200ms to dbl click
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.nzTreeNode.isSelectable) {
            this.nzTreeService.setNodeActive(this.nzTreeNode, this.nzMultiple);
        }
        this.clickNode.emit(this.nzTreeService.formatEvent('click', this.nzTreeNode, event));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzDblClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.dblClick.emit(this.nzTreeService.formatEvent('dblclick', this.nzTreeNode, event));
    };
    /**
     * @param event
     */
    /**
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.nzContextMenu = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        this.contextMenu.emit(this.nzTreeService.formatEvent('contextmenu', this.nzTreeNode, event));
    };
    /**
     * collapse node
     * @param event
     */
    /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype._clickExpand = /**
     * collapse node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        if (!this.nzTreeNode.isLoading && !this.nzTreeNode.isLeaf) {
            // set async state
            if (this.nzAsyncData && this.nzTreeNode.getChildren().length === 0 && !this.nzTreeNode.isExpanded) {
                this.nzTreeNode.isLoading = true;
            }
            this.nzTreeNode.setExpanded(!this.nzTreeNode.isExpanded);
            this.nzTreeService.setExpandedNodeList(this.nzTreeNode);
            this.clickExpand.emit(this.nzTreeService.formatEvent('expand', this.nzTreeNode, event));
        }
    };
    /**
     * check node
     * @param event
     */
    /**
     * check node
     * @param {?} event
     * @return {?}
     */
    NzTreeNodeComponent.prototype._clickCheckBox = /**
     * check node
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        event.stopPropagation();
        // return if node is disabled
        if (isCheckDisabled(this.nzTreeNode)) {
            return;
        }
        this.nzTreeNode.setChecked(!this.nzTreeNode.isChecked);
        this.nzTreeService.setCheckedNodeList(this.nzTreeNode);
        if (!this.nzCheckStrictly) {
            this.nzTreeService.conduct(this.nzTreeNode);
        }
        this.clickCheckBox.emit(this.nzTreeService.formatEvent('check', this.nzTreeNode, event));
    };
    /**
     * drag event
     * @param e
     */
    /**
     * drag event
     * @return {?}
     */
    NzTreeNodeComponent.prototype.clearDragClass = /**
     * drag event
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dragClass = ['drag-over-gap-top', 'drag-over-gap-bottom', 'drag-over'];
        dragClass.forEach(function (e) {
            _this.renderer.removeClass(_this.dragElement.nativeElement, e);
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragStart = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.stopPropagation();
        try {
            // ie throw error
            // firefox-need-it
            e.dataTransfer.setData('text/plain', '');
        }
        catch (error) {
            // empty
        }
        this.nzTreeService.setSelectedNode(this.nzTreeNode);
        this.nzTreeNode.setExpanded(false);
        this.nzDragStart.emit(this.nzTreeService.formatEvent('dragstart', null, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnter = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        // reset position
        this.dragPos = 2;
        this.ngZone.run(function () {
            if ((_this.nzTreeNode !== _this.nzTreeService.getSelectedNode()) && !_this.nzTreeNode.isLeaf) {
                _this.nzTreeNode.setExpanded(true);
            }
        });
        this.nzDragEnter.emit(this.nzTreeService.formatEvent('dragenter', this.nzTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragOver = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        e.stopPropagation();
        /** @type {?} */
        var dropPosition = this.nzTreeService.calcDropPosition(e);
        if (this.dragPos !== dropPosition) {
            this.clearDragClass();
            this.dragPos = dropPosition;
            // leaf node will pass
            if (!(this.dragPos === 0 && this.nzTreeNode.isLeaf)) {
                this.renderer.addClass(this.dragElement.nativeElement, this.dragPosClass[this.dragPos]);
            }
        }
        this.nzDragOver.emit(this.nzTreeService.formatEvent('dragover', this.nzTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragLeave = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
        });
        this.nzDragLeave.emit(this.nzTreeService.formatEvent('dragleave', this.nzTreeNode, e));
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.preventDefault();
        e.stopPropagation();
        this.ngZone.run(function () {
            _this.clearDragClass();
            if (_this.nzTreeService.getSelectedNode() === _this.nzTreeNode) {
                return;
            }
            else if (_this.dragPos === 0 && _this.nzTreeNode.isLeaf) {
                return;
            }
            // pass if node is leafNo
            if (_this.nzBeforeDrop) {
                _this.nzBeforeDrop({
                    dragNode: _this.nzTreeService.getSelectedNode(),
                    node: _this.nzTreeNode,
                    pos: _this.dragPos
                }).subscribe(function (canDrop) {
                    if (canDrop) {
                        _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                    }
                    _this.nzDrop.emit(_this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e));
                    _this.nzDragEnd.emit(_this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e));
                });
            }
            else if (_this.nzTreeNode) {
                _this.nzTreeService.dropAndApply(_this.nzTreeNode, _this.dragPos);
                _this.nzDrop.emit(_this.nzTreeService.formatEvent('drop', _this.nzTreeNode, e));
            }
        });
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handleDragEnd = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        e.stopPropagation();
        this.ngZone.run(function () {
            // if user do not custom beforeDrop
            if (!_this.nzBeforeDrop) {
                _this.nzTreeService.setSelectedNode(null);
                _this.nzDragEnd.emit(_this.nzTreeService.formatEvent('dragend', _this.nzTreeNode, e));
            }
        });
    };
    /**
     * 监听拖拽事件
     */
    /**
     * 监听拖拽事件
     * @return {?}
     */
    NzTreeNodeComponent.prototype.handDragEvent = /**
     * 监听拖拽事件
     * @return {?}
     */
    function () {
        var _this = this;
        this.ngZone.runOutsideAngular(function () {
            if (_this.nzDraggable) {
                _this.destory$ = new Subject();
                fromEvent(_this.elRef.nativeElement, 'dragstart').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragStart(e); });
                fromEvent(_this.elRef.nativeElement, 'dragenter').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragEnter(e); });
                fromEvent(_this.elRef.nativeElement, 'dragover').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragOver(e); });
                fromEvent(_this.elRef.nativeElement, 'dragleave').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragLeave(e); });
                fromEvent(_this.elRef.nativeElement, 'drop').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragDrop(e); });
                fromEvent(_this.elRef.nativeElement, 'dragend').pipe(takeUntil(_this.destory$)).subscribe(function (e) { return _this.handleDragEnd(e); });
            }
            else {
                _this.destory$.next();
                _this.destory$.complete();
            }
        });
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzTreeNodeComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destory$.next();
        this.destory$.complete();
    };
    NzTreeNodeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-tree-node',
                    template: "<li\n  #dragElement\n  role=\"treeitem\"\n  [style.display]=\"displayStyle\"\n  [ngClass]=\"nzNodeClass\"\n  [class.ant-tree-treenode-switcher-open]=\"isSwitcherOpen\"\n  [class.ant-tree-treenode-switcher-close]=\"isSwitcherClose\"\n  [class.ant-tree-treenode-checkbox-checked]=\"nzTreeNode.isChecked\"\n  [class.ant-tree-treenode-checkbox-indeterminate]=\"nzTreeNode.isHalfChecked\"\n  [class.ant-tree-treenode-selected]=\"nzTreeNode.isSelected\"\n  [class.ant-tree-treenode-loading]=\"nzTreeNode.isLoading\">\n  <ng-container *ngIf=\"nzShowExpand\">\n    <span\n      [ngClass]=\"nzNodeSwitcherClass\"\n      [class.ant-tree-switcher_open]=\"isSwitcherOpen\"\n      [class.ant-tree-switcher_close]=\"isSwitcherClose\"\n      (click)=\"_clickExpand($event)\">\n      <ng-container *ngIf=\"isShowSwitchIcon\">\n        <i *ngIf=\"!nzTreeNode.isLoading\" nz-icon type=\"caret-down\" class=\"ant-tree-switcher-icon\"></i>\n        <i *ngIf=\"nzTreeNode.isLoading\" nz-icon type=\"loading\" [spin]=\"true\" class=\"ant-tree-switcher-loading-icon\"></i>\n      </ng-container>\n      <ng-container *ngIf=\"nzShowLine\">\n        <i *ngIf=\"isShowLineIcon\" nz-icon [type]=\"isSwitcherOpen ? 'minus-square' : 'plus-square'\" class=\"ant-tree-switcher-line-icon\"></i>\n        <i *ngIf=\"!isShowLineIcon\" nz-icon type=\"file\" class=\"ant-tree-switcher-line-icon\"></i>\n      </ng-container>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"nzCheckable\">\n    <span\n      class=\"ant-tree-checkbox\"\n      [class.ant-tree-checkbox-checked]=\"nzTreeNode.isChecked\"\n      [class.ant-tree-checkbox-indeterminate]=\"nzTreeNode.isHalfChecked\"\n      [class.ant-tree-checkbox-disabled]=\"(nzTreeNode.isDisabled || nzTreeNode.isDisableCheckbox)\"\n      (click)=\"_clickCheckBox($event)\">\n      <span class=\"ant-tree-checkbox-inner\"></span>\n    </span>\n  </ng-container>\n  <ng-container *ngIf=\"!nzTreeTemplate\">\n    <span\n      title=\"{{nzTreeNode.title}}\"\n      [attr.draggable]=\"canDraggable\"\n      [attr.aria-grabbed]=\"canDraggable\"\n      [ngClass]=\"nzNodeContentClass\"\n      [class.ant-tree-node-content-wrapper-open]=\"isSwitcherOpen\"\n      [class.ant-tree-node-content-wrapper-close]=\"isSwitcherClose\"\n      [class.ant-tree-node-selected]=\"nzTreeNode.isSelected\"\n      [class.draggable]=\"canDraggable\">\n      <span\n        *ngIf=\"nzTreeNode.origin.icon\"\n        [class.ant-tree-icon__open]=\"isSwitcherOpen\"\n        [class.ant-tree-icon__close]=\"isSwitcherClose\"\n        [class.ant-tree-icon_loading]=\"nzTreeNode.isLoading\"\n        [ngClass]=\"nzNodeContentLoadingClass\">\n        <span\n          [ngClass]=\"nzNodeContentIconClass\">\n          <i nz-icon *ngIf=\"nzIcon\" [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n        </span>\n      </span>\n      <span class=\"ant-tree-title\">\n        <ng-container *ngIf=\"nzTreeNode.isMatched\">\n          <span>\n            {{highlightKeys[0]}}<span class=\"font-highlight\">{{nzSearchValue}}</span>{{highlightKeys[1]}}\n          </span>\n        </ng-container>\n        <ng-container *ngIf=\"!nzTreeNode.isMatched\">\n          {{nzTreeNode.title}}\n        </ng-container>\n      </span>\n    </span>\n  </ng-container>\n  <ng-template\n    [ngTemplateOutlet]=\"nzTreeTemplate\"\n    [ngTemplateOutletContext]=\"{ $implicit: nzTreeNode }\">\n  </ng-template>\n\n  <ul\n    role=\"group\"\n    [attr.data-expanded]=\"nzTreeNode.isExpanded\"\n    [ngClass]=\"nzNodeChildrenClass\"\n    [@nodeState]=\"nzTreeNode.isExpanded ? 'active' : 'inactive'\">\n    <nz-tree-node\n      *ngFor=\"let node of nzTreeNode.getChildren()\"\n      [nzTreeNode]=\"node\"\n      [nzShowLine]=\"nzShowLine\"\n      [nzDraggable]=\"nzDraggable\"\n      [nzCheckable]=\"nzCheckable\"\n      [nzShowExpand]=\"nzShowExpand\"\n      [nzAsyncData]=\"nzAsyncData\"\n      [nzMultiple]=\"nzMultiple\"\n      [nzExpandAll]=\"nzExpandAll\"\n      [nzDefaultExpandAll]=\"nzDefaultExpandAll\"\n      [nzSearchValue]=\"nzSearchValue\"\n      [nzHideUnMatched]=\"nzHideUnMatched\"\n      [nzBeforeDrop]=\"nzBeforeDrop\"\n      [nzCheckStrictly]=\"nzCheckStrictly\"\n      [nzTreeTemplate]=\"nzTreeTemplate\"\n      (clickNode)=\"clickNode.emit($event)\"\n      (dblClick)=\"dblClick.emit($event)\"\n      (contextMenu)=\"contextMenu.emit($event)\"\n      (clickExpand)=\"clickExpand.emit($event)\"\n      (clickCheckBox)=\"clickCheckBox.emit($event)\"\n      (nzDragStart)=\"nzDragStart.emit($event)\"\n      (nzDragEnter)=\"nzDragEnter.emit($event)\"\n      (nzDragOver)=\"nzDragOver.emit($event)\"\n      (nzDragLeave)=\"nzDragLeave.emit($event)\"\n      (nzDrop)=\"nzDrop.emit($event)\"\n      (nzDragEnd)=\"nzDragEnd.emit($event)\">\n    </nz-tree-node>\n  </ul>\n</li>",
                    preserveWhitespaces: false,
                    animations: [
                        trigger('nodeState', [
                            state('inactive', style({
                                opacity: '0',
                                height: '0',
                                display: 'none'
                            })),
                            state('active', style({
                                opacity: '1',
                                height: '*'
                            })),
                            transition('inactive => active', animate('100ms ease-in')),
                            transition('active => inactive', animate('100ms ease-out'))
                        ])
                    ]
                }] }
    ];
    /** @nocollapse */
    NzTreeNodeComponent.ctorParameters = function () { return [
        { type: NzTreeService },
        { type: NgZone },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzTreeNodeComponent.propDecorators = {
        dragElement: [{ type: ViewChild, args: ['dragElement',] }],
        nzShowLine: [{ type: Input }],
        nzShowExpand: [{ type: Input }],
        nzMultiple: [{ type: Input }],
        nzCheckable: [{ type: Input }],
        nzAsyncData: [{ type: Input }],
        nzCheckStrictly: [{ type: Input }],
        nzHideUnMatched: [{ type: Input }],
        nzTreeTemplate: [{ type: Input }],
        nzBeforeDrop: [{ type: Input }],
        nzTreeNode: [{ type: Input }],
        nzDraggable: [{ type: Input }],
        nzDefaultExpandAll: [{ type: Input }],
        nzExpandAll: [{ type: Input }],
        nzSearchValue: [{ type: Input }],
        clickNode: [{ type: Output }],
        dblClick: [{ type: Output }],
        contextMenu: [{ type: Output }],
        clickCheckBox: [{ type: Output }],
        clickExpand: [{ type: Output }],
        nzDragStart: [{ type: Output }],
        nzDragEnter: [{ type: Output }],
        nzDragOver: [{ type: Output }],
        nzDragLeave: [{ type: Output }],
        nzDrop: [{ type: Output }],
        nzDragEnd: [{ type: Output }],
        nzClick: [{ type: HostListener, args: ['click', ['$event'],] }],
        nzDblClick: [{ type: HostListener, args: ['dblclick', ['$event'],] }],
        nzContextMenu: [{ type: HostListener, args: ['contextmenu', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowLine", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzShowExpand", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzMultiple", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzCheckable", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzAsyncData", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean)
    ], NzTreeNodeComponent.prototype, "nzCheckStrictly", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzTreeNodeComponent.prototype, "nzHideUnMatched", void 0);
    return NzTreeNodeComponent;
}());
export { NzTreeNodeComponent };
function NzTreeNodeComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragElement;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowLine;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzShowExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzMultiple;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzAsyncData;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzCheckStrictly;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzHideUnMatched;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeTemplate;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzBeforeDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.clickNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dblClick;
    /** @type {?} */
    NzTreeNodeComponent.prototype.contextMenu;
    /** @type {?} */
    NzTreeNodeComponent.prototype.clickCheckBox;
    /** @type {?} */
    NzTreeNodeComponent.prototype.clickExpand;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragStart;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragEnter;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragOver;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragLeave;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDrop;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzDragEnd;
    /** @type {?} */
    NzTreeNodeComponent.prototype.prefixCls;
    /** @type {?} */
    NzTreeNodeComponent.prototype.highlightKeys;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeSwitcherClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentIconClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeContentLoadingClass;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzNodeChildrenClass;
    /**
     * drag var
     * @type {?}
     */
    NzTreeNodeComponent.prototype.destory$;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPos;
    /** @type {?} */
    NzTreeNodeComponent.prototype.dragPosClass;
    /**
     * default set
     * @type {?}
     */
    NzTreeNodeComponent.prototype._nzTreeNode;
    /** @type {?} */
    NzTreeNodeComponent.prototype._searchValue;
    /** @type {?} */
    NzTreeNodeComponent.prototype._nzExpandAll;
    /** @type {?} */
    NzTreeNodeComponent.prototype._nzDraggable;
    /** @type {?} */
    NzTreeNodeComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzTreeNodeComponent.prototype.nzTreeService;
    /** @type {?} */
    NzTreeNodeComponent.prototype.ngZone;
    /** @type {?} */
    NzTreeNodeComponent.prototype.renderer;
    /** @type {?} */
    NzTreeNodeComponent.prototype.elRef;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1ub2RlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ0cmVlL256LXRyZWUtbm9kZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFJTixNQUFNLEVBQ04sU0FBUyxFQUVULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFvWmhELDZCQUFvQixhQUE0QixFQUFVLE1BQWMsRUFBVSxRQUFtQixFQUFVLEtBQWlCO1FBQTVHLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxVQUFLLEdBQUwsS0FBSyxDQUFZO1FBcFhoSSx1QkFBMkMsS0FBSyxDQUFDOztRQWtGakQsaUJBQWdFLElBQUksWUFBWSxFQUFFLENBQUM7UUFDbkYsZ0JBQStELElBQUksWUFBWSxFQUFFLENBQUM7UUFDbEYsbUJBQWtFLElBQUks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ZCxZQUFZLEVBQUU7Ozs4QkF2RDFCOztTQThDYSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBOZ1pvbmUsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2UsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Rm9ybWF0QmVmb3JlRHJvcEV2ZW50LCBOekZvcm1hdEVtaXRFdmVudCB9IGZyb20gJy4uL3RyZWUvaW50ZXJmYWNlJztcbmltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtbm9kZSc7XG5pbXBvcnQgeyBpc0NoZWNrRGlzYWJsZWQgfSBmcm9tICcuL256LXRyZWUtdXRpbCc7XG5pbXBvcnQgeyBOelRyZWVTZXJ2aWNlIH0gZnJvbSAnLi9uei10cmVlLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXRyZWUtbm9kZScsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXRyZWUtbm9kZS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBhbmltYXRpb25zICAgICAgICAgOiBbXG4gICAgdHJpZ2dlcignbm9kZVN0YXRlJywgW1xuICAgICAgc3RhdGUoJ2luYWN0aXZlJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAnMCcsXG4gICAgICAgIGhlaWdodCA6ICcwJyxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnYWN0aXZlJywgc3R5bGUoe1xuICAgICAgICBvcGFjaXR5OiAnMScsXG4gICAgICAgIGhlaWdodCA6ICcqJ1xuICAgICAgfSkpLFxuICAgICAgdHJhbnNpdGlvbignaW5hY3RpdmUgPT4gYWN0aXZlJywgYW5pbWF0ZSgnMTAwbXMgZWFzZS1pbicpKSxcbiAgICAgIHRyYW5zaXRpb24oJ2FjdGl2ZSA9PiBpbmFjdGl2ZScsIGFuaW1hdGUoJzEwMG1zIGVhc2Utb3V0JykpXG4gICAgXSlcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIE56VHJlZU5vZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZCgnZHJhZ0VsZW1lbnQnKSBkcmFnRWxlbWVudDogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93TGluZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0V4cGFuZDogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNoZWNrYWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QXN5bmNEYXRhOiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDaGVja1N0cmljdGx5OiBib29sZWFuO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpIaWRlVW5NYXRjaGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56VHJlZVRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpCZWZvcmVEcm9wOiAoY29uZmlybTogTnpGb3JtYXRCZWZvcmVEcm9wRXZlbnQpID0+IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHJlZU5vZGUodmFsdWU6IE56VHJlZU5vZGUpIHtcbiAgICAvLyBhZGQgdG8gY2hlY2tlZCBsaXN0ICYgc2VsZWN0ZWQgbGlzdFxuICAgIGlmICh2YWx1ZS5pc0NoZWNrZWQpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRDaGVja2VkTm9kZUxpc3QodmFsdWUpO1xuICAgIH1cbiAgICAvLyBhZGQgc2VsZWN0IGxpc3RcbiAgICBpZiAodmFsdWUuaXNTZWxlY3RlZCkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZUxpc3QodmFsdWUsIHRoaXMubnpNdWx0aXBsZSk7XG4gICAgfVxuICAgIGlmICghdmFsdWUuaXNMZWFmKSB7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh2YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuX256VHJlZU5vZGUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBuelRyZWVOb2RlKCk6IE56VHJlZU5vZGUge1xuICAgIHJldHVybiB0aGlzLl9uelRyZWVOb2RlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56RHJhZ2dhYmxlKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fbnpEcmFnZ2FibGUgPSB2YWx1ZTtcbiAgICB0aGlzLmhhbmREcmFnRXZlbnQoKTtcbiAgfVxuXG4gIGdldCBuekRyYWdnYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbnpEcmFnZ2FibGU7XG4gIH1cblxuICAvKipcbiAgICogQGRlcHJlY2F0ZWQgdXNlXG4gICAqIG56RXhwYW5kQWxsIGluc3RlYWRcbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBuekRlZmF1bHRFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9uekV4cGFuZEFsbCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0aGlzLm56VHJlZU5vZGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgIHRoaXMubnpUcmVlTm9kZS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHRoaXMubnpUcmVlTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGVmYXVsdEV4cGFuZEFsbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fbnpFeHBhbmRBbGw7XG4gIH1cblxuICAvLyBkZWZhdWx0IHNldFxuICBASW5wdXQoKVxuICBzZXQgbnpFeHBhbmRBbGwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9uekV4cGFuZEFsbCA9IHZhbHVlO1xuICAgIGlmICh2YWx1ZSAmJiB0aGlzLm56VHJlZU5vZGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgIHRoaXMubnpUcmVlTm9kZS5zZXRFeHBhbmRlZCh0cnVlKTtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXRFeHBhbmRlZE5vZGVMaXN0KHRoaXMubnpUcmVlTm9kZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RXhwYW5kQWxsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9uekV4cGFuZEFsbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmhpZ2hsaWdodEtleXMgPSBbXTtcbiAgICBpZiAodmFsdWUgJiYgdGhpcy5uelRyZWVOb2RlLnRpdGxlLmluY2x1ZGVzKHZhbHVlKSkge1xuICAgICAgLy8gbWF0Y2ggdGhlIHNlYXJjaCB2YWx1ZVxuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLm56VHJlZU5vZGUudGl0bGUuaW5kZXhPZih2YWx1ZSk7XG4gICAgICB0aGlzLmhpZ2hsaWdodEtleXMucHVzaCh0aGlzLm56VHJlZU5vZGUudGl0bGUuc2xpY2UoMCwgaW5kZXgpKTtcbiAgICAgIHRoaXMuaGlnaGxpZ2h0S2V5cy5wdXNoKHRoaXMubnpUcmVlTm9kZS50aXRsZS5zbGljZShpbmRleCArIHZhbHVlLmxlbmd0aCwgdGhpcy5uelRyZWVOb2RlLnRpdGxlLmxlbmd0aCkpO1xuICAgIH1cbiAgICB0aGlzLl9zZWFyY2hWYWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56U2VhcmNoVmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2VhcmNoVmFsdWU7XG4gIH1cblxuICAvLyBPdXRwdXRcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNsaWNrTm9kZTogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGRibENsaWNrOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY29udGV4dE1lbnU6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjbGlja0NoZWNrQm94OiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgY2xpY2tFeHBhbmQ6IEV2ZW50RW1pdHRlcjxOekZvcm1hdEVtaXRFdmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekRyYWdTdGFydDogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RHJhZ0VudGVyOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEcmFnT3ZlcjogRXZlbnRFbWl0dGVyPE56Rm9ybWF0RW1pdEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56RHJhZ0xlYXZlOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEcm9wOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpEcmFnRW5kOiBFdmVudEVtaXR0ZXI8TnpGb3JtYXRFbWl0RXZlbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIGRlZmF1bHQgdmFyXG4gIHByZWZpeENscyA9ICdhbnQtdHJlZSc7XG4gIGhpZ2hsaWdodEtleXMgPSBbXTtcbiAgbnpOb2RlQ2xhc3MgPSB7fTtcbiAgbnpOb2RlU3dpdGNoZXJDbGFzcyA9IHt9O1xuICBuek5vZGVDb250ZW50Q2xhc3MgPSB7fTtcbiAgbnpOb2RlQ29udGVudEljb25DbGFzcyA9IHt9O1xuICBuek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge307XG4gIG56Tm9kZUNoaWxkcmVuQ2xhc3MgPSB7fTtcblxuICAvKipcbiAgICogZHJhZyB2YXJcbiAgICovXG4gIGRlc3RvcnkkID0gbmV3IFN1YmplY3QoKTtcbiAgZHJhZ1BvcyA9IDI7XG4gIGRyYWdQb3NDbGFzczogb2JqZWN0ID0ge1xuICAgICcwJyA6ICdkcmFnLW92ZXInLFxuICAgICcxJyA6ICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsXG4gICAgJy0xJzogJ2RyYWctb3Zlci1nYXAtdG9wJ1xuICB9O1xuXG4gIC8qKlxuICAgKiBkZWZhdWx0IHNldFxuICAgKi9cbiAgX256VHJlZU5vZGU6IE56VHJlZU5vZGU7XG4gIF9zZWFyY2hWYWx1ZSA9ICcnO1xuICBfbnpFeHBhbmRBbGwgPSBmYWxzZTtcbiAgX256RHJhZ2dhYmxlID0gZmFsc2U7XG4gIG9sZEFQSUljb24gPSB0cnVlO1xuXG4gIGdldCBuekljb24oKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5uelRyZWVOb2RlICYmIHRoaXMubnpUcmVlTm9kZS5vcmlnaW4uaWNvbikge1xuICAgICAgdGhpcy5vbGRBUElJY29uID0gdGhpcy5uelRyZWVOb2RlLm9yaWdpbi5pY29uLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5uelRyZWVOb2RlICYmIHRoaXMubnpUcmVlTm9kZS5vcmlnaW4uaWNvbjtcbiAgfVxuXG4gIGdldCBjYW5EcmFnZ2FibGUoKTogYm9vbGVhbiB8IG51bGwge1xuICAgIHJldHVybiAodGhpcy5uekRyYWdnYWJsZSAmJiB0aGlzLm56VHJlZU5vZGUgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0Rpc2FibGVkKSA/IHRydWUgOiBudWxsO1xuICB9XG5cbiAgZ2V0IGlzU2hvd0xpbmVJY29uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZiAmJiB0aGlzLm56U2hvd0xpbmU7XG4gIH1cblxuICBnZXQgaXNTaG93U3dpdGNoSWNvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYgJiYgIXRoaXMubnpTaG93TGluZTtcbiAgfVxuXG4gIGdldCBpc1N3aXRjaGVyT3BlbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkICYmICF0aGlzLm56VHJlZU5vZGUuaXNMZWFmKTtcbiAgfVxuXG4gIGdldCBpc1N3aXRjaGVyQ2xvc2UoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpO1xuICB9XG5cbiAgZ2V0IGRpc3BsYXlTdHlsZSgpOiBzdHJpbmcge1xuICAgIC8vIFRPRE9cbiAgICByZXR1cm4gKHRoaXMubnpTZWFyY2hWYWx1ZSAmJiB0aGlzLm56SGlkZVVuTWF0Y2hlZCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTWF0Y2hlZCAmJiAhdGhpcy5uelRyZWVOb2RlLmlzRXhwYW5kZWQpID8gJ25vbmUnIDogJyc7XG4gIH1cblxuICAvKipcbiAgICogcmVzZXQgbm9kZSBjbGFzc1xuICAgKi9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5uek5vZGVDbGFzcyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXRyZWVub2RlLWRpc2FibGVkYCBdOiB0aGlzLm56VHJlZU5vZGUuaXNEaXNhYmxlZFxuICAgIH07XG4gICAgdGhpcy5uek5vZGVTd2l0Y2hlckNsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tc3dpdGNoZXJgIF0gICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LXN3aXRjaGVyLW5vb3BgIF06IHRoaXMubnpUcmVlTm9kZS5pc0xlYWZcbiAgICB9O1xuICAgIHRoaXMubnpOb2RlQ29udGVudENsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tbm9kZS1jb250ZW50LXdyYXBwZXJgIF06IHRydWVcbiAgICB9O1xuICAgIHRoaXMubnpOb2RlQ29udGVudEljb25DbGFzcyA9IHtcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25FbGVgIF0gICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25fX2N1c3RvbWl6ZWAgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5uek5vZGVDb250ZW50TG9hZGluZ0NsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taWNvbkVsZWAgXTogdHJ1ZVxuICAgIH07XG4gICAgdGhpcy5uek5vZGVDaGlsZHJlbkNsYXNzID0ge1xuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tY2hpbGQtdHJlZWAgXSAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tY2hpbGQtdHJlZS1vcGVuYCBdOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBjbGljayBub2RlIHRvIHNlbGVjdCwgMjAwbXMgdG8gZGJsIGNsaWNrXG4gICAqL1xuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsgJyRldmVudCcgXSlcbiAgbnpDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgaWYgKHRoaXMubnpUcmVlTm9kZS5pc1NlbGVjdGFibGUpIHtcbiAgICAgIHRoaXMubnpUcmVlU2VydmljZS5zZXROb2RlQWN0aXZlKHRoaXMubnpUcmVlTm9kZSwgdGhpcy5uek11bHRpcGxlKTtcbiAgICB9XG4gICAgdGhpcy5jbGlja05vZGUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZGJsY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIG56RGJsQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZGJsQ2xpY2suZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RibGNsaWNrJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQEhvc3RMaXN0ZW5lcignY29udGV4dG1lbnUnLCBbICckZXZlbnQnIF0pXG4gIG56Q29udGV4dE1lbnUoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuY29udGV4dE1lbnUuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2NvbnRleHRtZW51JywgdGhpcy5uelRyZWVOb2RlLCBldmVudCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGNvbGxhcHNlIG5vZGVcbiAgICogQHBhcmFtIGV2ZW50XG4gICAqL1xuICBfY2xpY2tFeHBhbmQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGlmICghdGhpcy5uelRyZWVOb2RlLmlzTG9hZGluZyAmJiAhdGhpcy5uelRyZWVOb2RlLmlzTGVhZikge1xuICAgICAgLy8gc2V0IGFzeW5jIHN0YXRlXG4gICAgICBpZiAodGhpcy5uekFzeW5jRGF0YSAmJiB0aGlzLm56VHJlZU5vZGUuZ2V0Q2hpbGRyZW4oKS5sZW5ndGggPT09IDAgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0V4cGFuZGVkKSB7XG4gICAgICAgIHRoaXMubnpUcmVlTm9kZS5pc0xvYWRpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGhpcy5uelRyZWVOb2RlLnNldEV4cGFuZGVkKCF0aGlzLm56VHJlZU5vZGUuaXNFeHBhbmRlZCk7XG4gICAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0RXhwYW5kZWROb2RlTGlzdCh0aGlzLm56VHJlZU5vZGUpO1xuICAgICAgdGhpcy5jbGlja0V4cGFuZC5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZXhwYW5kJywgdGhpcy5uelRyZWVOb2RlLCBldmVudCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBjaGVjayBub2RlXG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgX2NsaWNrQ2hlY2tCb3goZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHJldHVybiBpZiBub2RlIGlzIGRpc2FibGVkXG4gICAgaWYgKGlzQ2hlY2tEaXNhYmxlZCh0aGlzLm56VHJlZU5vZGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMubnpUcmVlTm9kZS5zZXRDaGVja2VkKCF0aGlzLm56VHJlZU5vZGUuaXNDaGVja2VkKTtcbiAgICB0aGlzLm56VHJlZVNlcnZpY2Uuc2V0Q2hlY2tlZE5vZGVMaXN0KHRoaXMubnpUcmVlTm9kZSk7XG4gICAgaWYgKCF0aGlzLm56Q2hlY2tTdHJpY3RseSkge1xuICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmNvbmR1Y3QodGhpcy5uelRyZWVOb2RlKTtcbiAgICB9XG4gICAgdGhpcy5jbGlja0NoZWNrQm94LmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdjaGVjaycsIHRoaXMubnpUcmVlTm9kZSwgZXZlbnQpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBkcmFnIGV2ZW50XG4gICAqIEBwYXJhbSBlXG4gICAqL1xuICBjbGVhckRyYWdDbGFzcygpOiB2b2lkIHtcbiAgICBjb25zdCBkcmFnQ2xhc3MgPSBbICdkcmFnLW92ZXItZ2FwLXRvcCcsICdkcmFnLW92ZXItZ2FwLWJvdHRvbScsICdkcmFnLW92ZXInIF07XG4gICAgZHJhZ0NsYXNzLmZvckVhY2goZSA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuZHJhZ0VsZW1lbnQubmF0aXZlRWxlbWVudCwgZSk7XG4gICAgfSk7XG4gIH1cblxuICBoYW5kbGVEcmFnU3RhcnQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0cnkge1xuICAgICAgLy8gaWUgdGhyb3cgZXJyb3JcbiAgICAgIC8vIGZpcmVmb3gtbmVlZC1pdFxuICAgICAgZS5kYXRhVHJhbnNmZXIuc2V0RGF0YSgndGV4dC9wbGFpbicsICcnKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gZW1wdHlcbiAgICB9XG4gICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZSh0aGlzLm56VHJlZU5vZGUpO1xuICAgIHRoaXMubnpUcmVlTm9kZS5zZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgdGhpcy5uekRyYWdTdGFydC5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ3N0YXJ0JywgbnVsbCwgZSkpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ0VudGVyKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIC8vIHJlc2V0IHBvc2l0aW9uXG4gICAgdGhpcy5kcmFnUG9zID0gMjtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgaWYgKCh0aGlzLm56VHJlZU5vZGUgIT09IHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSkgJiYgIXRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgdGhpcy5uelRyZWVOb2RlLnNldEV4cGFuZGVkKHRydWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMubnpEcmFnRW50ZXIuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbnRlcicsIHRoaXMubnpUcmVlTm9kZSwgZSkpO1xuICB9XG5cbiAgaGFuZGxlRHJhZ092ZXIoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgY29uc3QgZHJvcFBvc2l0aW9uID0gdGhpcy5uelRyZWVTZXJ2aWNlLmNhbGNEcm9wUG9zaXRpb24oZSk7XG4gICAgaWYgKHRoaXMuZHJhZ1BvcyAhPT0gZHJvcFBvc2l0aW9uKSB7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgICB0aGlzLmRyYWdQb3MgPSBkcm9wUG9zaXRpb247XG4gICAgICAvLyBsZWFmIG5vZGUgd2lsbCBwYXNzXG4gICAgICBpZiAoISh0aGlzLmRyYWdQb3MgPT09IDAgJiYgdGhpcy5uelRyZWVOb2RlLmlzTGVhZikpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmRyYWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMuZHJhZ1Bvc0NsYXNzWyB0aGlzLmRyYWdQb3MgXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubnpEcmFnT3Zlci5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ292ZXInLCB0aGlzLm56VHJlZU5vZGUsIGUpKTtcbiAgfVxuXG4gIGhhbmRsZURyYWdMZWF2ZShlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XG4gICAgICB0aGlzLmNsZWFyRHJhZ0NsYXNzKCk7XG4gICAgfSk7XG4gICAgdGhpcy5uekRyYWdMZWF2ZS5lbWl0KHRoaXMubnpUcmVlU2VydmljZS5mb3JtYXRFdmVudCgnZHJhZ2xlYXZlJywgdGhpcy5uelRyZWVOb2RlLCBlKSk7XG4gIH1cblxuICBoYW5kbGVEcmFnRHJvcChlOiBEcmFnRXZlbnQpOiB2b2lkIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgdGhpcy5jbGVhckRyYWdDbGFzcygpO1xuICAgICAgaWYgKHRoaXMubnpUcmVlU2VydmljZS5nZXRTZWxlY3RlZE5vZGUoKSA9PT0gdGhpcy5uelRyZWVOb2RlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kcmFnUG9zID09PSAwICYmIHRoaXMubnpUcmVlTm9kZS5pc0xlYWYpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgLy8gcGFzcyBpZiBub2RlIGlzIGxlYWZOb1xuICAgICAgaWYgKHRoaXMubnpCZWZvcmVEcm9wKSB7XG4gICAgICAgIHRoaXMubnpCZWZvcmVEcm9wKHtcbiAgICAgICAgICBkcmFnTm9kZTogdGhpcy5uelRyZWVTZXJ2aWNlLmdldFNlbGVjdGVkTm9kZSgpLFxuICAgICAgICAgIG5vZGUgICAgOiB0aGlzLm56VHJlZU5vZGUsXG4gICAgICAgICAgcG9zICAgICA6IHRoaXMuZHJhZ1Bvc1xuICAgICAgICB9KS5zdWJzY3JpYmUoKGNhbkRyb3A6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgICBpZiAoY2FuRHJvcCkge1xuICAgICAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLmRyb3BBbmRBcHBseSh0aGlzLm56VHJlZU5vZGUsIHRoaXMuZHJhZ1Bvcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMubnpEcm9wLmVtaXQodGhpcy5uelRyZWVTZXJ2aWNlLmZvcm1hdEV2ZW50KCdkcm9wJywgdGhpcy5uelRyZWVOb2RlLCBlKSk7XG4gICAgICAgICAgdGhpcy5uekRyYWdFbmQuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMubnpUcmVlTm9kZSkge1xuICAgICAgICB0aGlzLm56VHJlZVNlcnZpY2UuZHJvcEFuZEFwcGx5KHRoaXMubnpUcmVlTm9kZSwgdGhpcy5kcmFnUG9zKTtcbiAgICAgICAgdGhpcy5uekRyb3AuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2Ryb3AnLCB0aGlzLm56VHJlZU5vZGUsIGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZURyYWdFbmQoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgLy8gaWYgdXNlciBkbyBub3QgY3VzdG9tIGJlZm9yZURyb3BcbiAgICAgIGlmICghdGhpcy5uekJlZm9yZURyb3ApIHtcbiAgICAgICAgdGhpcy5uelRyZWVTZXJ2aWNlLnNldFNlbGVjdGVkTm9kZShudWxsKTtcbiAgICAgICAgdGhpcy5uekRyYWdFbmQuZW1pdCh0aGlzLm56VHJlZVNlcnZpY2UuZm9ybWF0RXZlbnQoJ2RyYWdlbmQnLCB0aGlzLm56VHJlZU5vZGUsIGUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDnm5HlkKzmi5bmi73kuovku7ZcbiAgICovXG4gIGhhbmREcmFnRXZlbnQoKTogdm9pZCB7XG4gICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubnpEcmFnZ2FibGUpIHtcbiAgICAgICAgdGhpcy5kZXN0b3J5JCA9IG5ldyBTdWJqZWN0KCk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdzdGFydCcpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdG9yeSQpKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnU3RhcnQoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnZW50ZXInKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkkKSkuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VudGVyKGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJhZ292ZXInKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkkKSkuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ092ZXIoZSkpO1xuICAgICAgICBmcm9tRXZlbnQ8RHJhZ0V2ZW50Pih0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsICdkcmFnbGVhdmUnKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkkKSkuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0xlYXZlKGUpKTtcbiAgICAgICAgZnJvbUV2ZW50PERyYWdFdmVudD4odGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCAnZHJvcCcpLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdG9yeSQpKS5zdWJzY3JpYmUoKGU6IERyYWdFdmVudCkgPT4gdGhpcy5oYW5kbGVEcmFnRHJvcChlKSk7XG4gICAgICAgIGZyb21FdmVudDxEcmFnRXZlbnQ+KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgJ2RyYWdlbmQnKS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3RvcnkkKSkuc3Vic2NyaWJlKChlOiBEcmFnRXZlbnQpID0+IHRoaXMuaGFuZGxlRHJhZ0VuZChlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRlc3RvcnkkLm5leHQoKTtcbiAgICAgICAgdGhpcy5kZXN0b3J5JC5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelRyZWVTZXJ2aWNlOiBOelRyZWVTZXJ2aWNlLCBwcml2YXRlIG5nWm9uZTogTmdab25lLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYpIHtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgWyBwcm9wZXJ0eU5hbWU6IHN0cmluZyBdOiBTaW1wbGVDaGFuZ2UgfSk6IHZvaWQge1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdG9yeSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdG9yeSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19