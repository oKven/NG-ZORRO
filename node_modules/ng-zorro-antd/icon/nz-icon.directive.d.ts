import { AfterContentChecked, ElementRef, OnChanges, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 */
export declare class NzIconDirective extends IconDirective implements OnInit, OnChanges, OnDestroy, AfterContentChecked {
    iconService: NzIconService;
    elementRef: ElementRef;
    renderer: Renderer2;
    spin: boolean;
    iconfont: string;
    private classNameObserver;
    private el;
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param oldAPI
     */
    private changeIcon2;
    private classChangeHandler;
    private toggleSpin;
    private setClassName;
    private setSVGData;
    constructor(iconService: NzIconService, elementRef: ElementRef, renderer: Renderer2);
    ngOnChanges(): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    ngAfterContentChecked(): void;
}
