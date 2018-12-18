import { ElementRef, NgZone, Renderer2 } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzRowComponent } from './nz-row.component';
export declare class NzRowDirective extends NzRowComponent {
    constructor(elementRef: ElementRef, renderer: Renderer2, nzUpdateHostClassService: NzUpdateHostClassService, mediaMatcher: MediaMatcher, ngZone: NgZone, platform: Platform);
}
