import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
export declare class NzAnchorLinkComponent implements OnInit, OnDestroy {
    el: ElementRef;
    private anchorComp;
    private cdr;
    nzHref: string;
    titleStr: string;
    titleTpl: TemplateRef<void>;
    nzTitle: string | TemplateRef<void>;
    nzTemplate: TemplateRef<void>;
    active: boolean;
    constructor(el: ElementRef, anchorComp: NzAnchorComponent, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    goToClick(e: Event): void;
    markForCheck(): void;
    ngOnDestroy(): void;
}
