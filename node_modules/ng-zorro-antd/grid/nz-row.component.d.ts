import { AfterViewInit, ElementRef, NgZone, OnChanges, OnDestroy, OnInit, Renderer2, SimpleChanges } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { Subject } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export declare type NzJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between';
export declare type NzAlign = 'top' | 'middle' | 'bottom';
export declare type NzType = 'flex' | null;
export declare enum Breakpoint {
    'xxl' = 0,
    'xl' = 1,
    'lg' = 2,
    'md' = 3,
    'sm' = 4,
    'xs' = 5
}
export declare type BreakpointMap = {
    [index in keyof typeof Breakpoint]: string;
};
export declare class NzRowComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
    elementRef: ElementRef;
    renderer: Renderer2;
    nzUpdateHostClassService: NzUpdateHostClassService;
    mediaMatcher: MediaMatcher;
    ngZone: NgZone;
    platform: Platform;
    nzType: NzType;
    nzAlign: NzAlign;
    nzJustify: NzJustify;
    nzGutter: number | object;
    private el;
    private prefixCls;
    private breakPoint;
    actualGutter: number;
    destroy$: Subject<{}>;
    calculateGutter(): number;
    updateGutter(): void;
    watchMedia(): void;
    /** temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289*/
    setClassMap(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
}
