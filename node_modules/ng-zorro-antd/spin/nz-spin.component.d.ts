import { AfterViewInit, ElementRef, Renderer2, TemplateRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
export declare class NzSpinComponent implements AfterViewInit {
    private elementRef;
    private renderer;
    spinning$: BehaviorSubject<boolean>;
    debounceSpinning$: Observable<boolean>;
    containerElement: ElementRef;
    nestedElement: ElementRef;
    nzIndicator: TemplateRef<void>;
    nzSize: string;
    nzTip: string;
    nzDelay: number;
    nzSpinning: boolean;
    checkNested(): void;
    constructor(elementRef: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
}
