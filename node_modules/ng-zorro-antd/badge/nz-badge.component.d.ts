import { AfterViewInit, ElementRef, OnInit, Renderer2 } from '@angular/core';
export declare type NzBadgeStatusType = 'success' | 'processing' | 'default' | 'error' | 'warning';
export declare class NzBadgeComponent implements OnInit, AfterViewInit {
    private renderer;
    private elementRef;
    maxNumberArray: any[];
    countArray: any[];
    countSingleArray: number[];
    contentElement: ElementRef;
    nzShowZero: boolean;
    nzShowDot: boolean;
    nzDot: boolean;
    nzOverflowCount: number;
    nzText: string;
    nzStyle: {
        [key: string]: string;
    };
    nzStatus: NzBadgeStatusType;
    nzCount: number;
    readonly showSup: boolean;
    constructor(renderer: Renderer2, elementRef: ElementRef);
    private _count;
    checkContent(): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}
