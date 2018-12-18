import { EventEmitter, OnChanges, OnDestroy, OnInit, SimpleChange, TemplateRef } from '@angular/core';
import { Observable, ReplaySubject, Subscription } from 'rxjs';
import { NzFormatBeforeDropEvent, NzFormatEmitEvent } from '../tree/interface';
import { NzTreeNode } from './nz-tree-node';
import { NzTreeService } from './nz-tree.service';
export declare class NzTreeComponent implements OnInit, OnChanges, OnDestroy {
    nzTreeService: NzTreeService;
    nzShowIcon: boolean;
    nzShowLine: boolean;
    nzCheckStrictly: boolean;
    nzCheckable: boolean;
    nzShowExpand: boolean;
    nzAsyncData: boolean;
    nzDraggable: boolean;
    nzMultiple: boolean;
    nzExpandAll: boolean;
    nzHideUnMatched: boolean;
    /**
     * @deprecated use
     * nzExpandAll instead
     */
    nzDefaultExpandAll: boolean;
    nzBeforeDrop: (confirm: NzFormatBeforeDropEvent) => Observable<boolean>;
    nzData: any[];
    /**
     * @deprecated use
     * nzExpandedKeys instead
     */
    nzDefaultExpandedKeys: string[];
    /**
     * @deprecated use
     * nzSelectedKeys instead
     */
    nzDefaultSelectedKeys: string[];
    /**
     * @deprecated use
     * nzCheckedKeys instead
     */
    nzDefaultCheckedKeys: string[];
    nzExpandedKeys: string[];
    nzSelectedKeys: string[];
    nzCheckedKeys: string[];
    nzSearchValue: string;
    readonly nzExpandedKeysChange: EventEmitter<string[]>;
    readonly nzSelectedKeysChange: EventEmitter<string[]>;
    readonly nzCheckedKeysChange: EventEmitter<string[]>;
    readonly nzSearchValueChange: EventEmitter<NzFormatEmitEvent>;
    /**
     * @deprecated use
     * nzSearchValueChange instead
     */
    readonly nzOnSearchNode: EventEmitter<NzFormatEmitEvent>;
    readonly nzClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzDblClick: EventEmitter<NzFormatEmitEvent>;
    readonly nzContextMenu: EventEmitter<NzFormatEmitEvent>;
    readonly nzCheckBoxChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzExpandChange: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragStart: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnter: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragOver: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragLeave: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDrop: EventEmitter<NzFormatEmitEvent>;
    readonly nzOnDragEnd: EventEmitter<NzFormatEmitEvent>;
    nzTreeTemplate: TemplateRef<any>;
    _searchValue: any;
    nzDefaultSubject: ReplaySubject<{
        type: string;
        keys: string[];
    }>;
    nzDefaultSubscription: Subscription;
    nzNodes: NzTreeNode[];
    prefixCls: string;
    nzTreeClass: {};
    onChange: (value: NzTreeNode[]) => void;
    onTouched: () => void;
    getTreeNodes(): NzTreeNode[];
    /**
     * public function
     */
    getCheckedNodeList(): NzTreeNode[];
    getSelectedNodeList(): NzTreeNode[];
    getHalfCheckedNodeList(): NzTreeNode[];
    getExpandedNodeList(): NzTreeNode[];
    getMatchedNodeList(): NzTreeNode[];
    setClassMap(): void;
    writeValue(value: NzTreeNode[]): void;
    registerOnChange(fn: (_: NzTreeNode[]) => void): void;
    registerOnTouched(fn: () => void): void;
    constructor(nzTreeService: NzTreeService);
    ngOnInit(): void;
    ngOnChanges(changes: {
        [propertyName: string]: SimpleChange;
    }): void;
    ngOnDestroy(): void;
}
