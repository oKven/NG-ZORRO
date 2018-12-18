import { ChangeDetectorRef, ElementRef, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
export declare class NzAffixComponent implements OnInit, OnDestroy {
    private scrollSrv;
    private _el;
    private doc;
    private cd;
    nzTarget: string | Element | Window;
    nzOffsetTop: number;
    nzOffsetBottom: number;
    readonly nzChange: EventEmitter<boolean>;
    constructor(scrollSrv: NzScrollService, _el: ElementRef, doc: any, cd: ChangeDetectorRef);
    private timeout;
    private events;
    private affixStyle;
    private placeholderStyle;
    private wrap;
    private _target;
    private _offsetTop;
    private _offsetBottom;
    ngOnInit(): void;
    ngOnDestroy(): void;
    getOffset(element: Element, target: Element | Window | null): {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    private setTargetEventListeners;
    private clearEventListeners;
    private getTargetRect;
    private genStyle;
    private setAffixStyle;
    private setPlaceholderStyle;
    updatePosition(e: any): void;
}
