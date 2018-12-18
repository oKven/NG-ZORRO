/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
export class NzAvatarComponent {
    /**
     * @param {?} elementRef
     * @param {?} cd
     * @param {?} updateHostClassService
     * @param {?} renderer
     */
    constructor(elementRef, cd, updateHostClassService, renderer) {
        this.elementRef = elementRef;
        this.cd = cd;
        this.updateHostClassService = updateHostClassService;
        this.renderer = renderer;
        this.nzShape = 'circle';
        this.nzSize = 'default';
        this.oldAPIIcon = true; // Make the user defined icon compatible to old API. Should be removed in 2.0.
        this.hasText = false;
        this.hasSrc = true;
        this.hasIcon = false;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-avatar';
        this.sizeMap = { large: 'lg', small: 'sm' };
    }
    /**
     * @return {?}
     */
    setClass() {
        /** @type {?} */
        const classMap = {
            [this.prefixCls]: true,
            [`${this.prefixCls}-${this.sizeMap[this.nzSize]}`]: this.sizeMap[this.nzSize],
            [`${this.prefixCls}-${this.nzShape}`]: this.nzShape,
            [`${this.prefixCls}-icon`]: this.nzIcon,
            [`${this.prefixCls}-image`]: this.hasSrc // downgrade after image error
        };
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    }
    /**
     * @return {?}
     */
    imgError() {
        this.hasSrc = false;
        this.hasIcon = false;
        this.hasText = false;
        if (this.nzIcon) {
            this.hasIcon = true;
        }
        else if (this.nzText) {
            this.hasText = true;
        }
        this.setClass().notifyCalc();
        this.setSizeStyle();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('nzIcon') && changes["nzIcon"].currentValue) {
            this.oldAPIIcon = changes["nzIcon"].currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    }
    /**
     * @return {?}
     */
    calcStringSize() {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        const avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: `${this.nzSize}px`
            });
        }
        this.cd.detectChanges();
    }
    /**
     * @return {?}
     */
    notifyCalc() {
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(() => {
            this.calcStringSize();
        });
        return this;
    }
    /**
     * @return {?}
     */
    setSizeStyle() {
        if (typeof this.nzSize === 'string') {
            return;
        }
        this.renderer.setStyle(this.el, 'width', `${this.nzSize}px`);
        this.renderer.setStyle(this.el, 'height', `${this.nzSize}px`);
        this.renderer.setStyle(this.el, 'line-height', `${this.nzSize}px`);
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', `${this.nzSize / 2}px`);
        }
    }
}
NzAvatarComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-avatar',
                template: "<i nz-icon *ngIf=\"nzIcon && hasIcon\" [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n<img [src]=\"nzSrc\" *ngIf=\"nzSrc && hasSrc\" (error)=\"imgError()\"/>\n<span class=\"ant-avatar-string\" #textEl [ngStyle]=\"textStyles\" *ngIf=\"nzText && hasText\">{{ nzText }}</span>",
                providers: [NzUpdateHostClassService],
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }] }
];
/** @nocollapse */
NzAvatarComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: NzUpdateHostClassService },
    { type: Renderer2 }
];
NzAvatarComponent.propDecorators = {
    nzShape: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzText: [{ type: Input }],
    nzSrc: [{ type: Input }],
    nzIcon: [{ type: Input }],
    textEl: [{ type: ViewChild, args: ['textEl',] }]
};
function NzAvatarComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAvatarComponent.prototype.nzShape;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSize;
    /** @type {?} */
    NzAvatarComponent.prototype.nzText;
    /** @type {?} */
    NzAvatarComponent.prototype.nzSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.nzIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.hasText;
    /** @type {?} */
    NzAvatarComponent.prototype.hasSrc;
    /** @type {?} */
    NzAvatarComponent.prototype.hasIcon;
    /** @type {?} */
    NzAvatarComponent.prototype.textStyles;
    /** @type {?} */
    NzAvatarComponent.prototype.textEl;
    /** @type {?} */
    NzAvatarComponent.prototype.el;
    /** @type {?} */
    NzAvatarComponent.prototype.prefixCls;
    /** @type {?} */
    NzAvatarComponent.prototype.sizeMap;
    /** @type {?} */
    NzAvatarComponent.prototype.elementRef;
    /** @type {?} */
    NzAvatarComponent.prototype.cd;
    /** @type {?} */
    NzAvatarComponent.prototype.updateHostClassService;
    /** @type {?} */
    NzAvatarComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdmF0YXIvbnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFldEYsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7OztJQW9CNUIsWUFDVSxZQUNBLElBQ0Esd0JBQ0E7UUFIQSxlQUFVLEdBQVYsVUFBVTtRQUNWLE9BQUUsR0FBRixFQUFFO1FBQ0YsMkJBQXNCLEdBQXRCLHNCQUFzQjtRQUN0QixhQUFRLEdBQVIsUUFBUTtRQXRCbEIsZUFBa0MsUUFBUSxDQUFDO1FBQzNDLGNBQWdDLFNBQVMsQ0FBQztRQUsxQyxrQkFBYSxJQUFJLENBQUM7UUFDbEIsZUFBbUIsS0FBSyxDQUFDO1FBQ3pCLGNBQWtCLElBQUksQ0FBQztRQUN2QixlQUFtQixLQUFLLENBQUM7a0JBS0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNuQyxZQUFZO3VCQUNkLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0tBTzdDOzs7O0lBRUQsUUFBUTs7UUFDTixNQUFNLFFBQVEsR0FBRztZQUNmLENBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBRSxFQUFzQyxJQUFJO1lBQzVELENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRSxFQUFFLENBQUUsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUU7WUFDbkYsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFFLEVBQWlCLElBQUksQ0FBQyxPQUFPO1lBQ3BFLENBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxPQUFPLENBQUUsRUFBNEIsSUFBSSxDQUFDLE1BQU07WUFDbkUsQ0FBRSxHQUFHLElBQUksQ0FBQyxTQUFTLFFBQVEsQ0FBRSxFQUEyQixJQUFJLENBQUMsTUFBTTtTQUNwRSxDQUFDO1FBQ0YsSUFBSSxDQUFDLHNCQUFzQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUM7S0FDYjs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjthQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUNELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxPQUFPLFdBQVEsWUFBWSxFQUFFO1lBQ25FLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxXQUFRLFlBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRTNCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7Ozs7SUFFTyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLE9BQU87U0FDUjs7UUFFRCxNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUM7O1FBQzVELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxLQUFLLENBQUM7O1FBQzFELE1BQU0sS0FBSyxHQUFHLFdBQVcsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsVUFBVSxHQUFHO1lBQ2hCLFNBQVMsRUFBRSxTQUFTLEtBQUssb0JBQW9CO1NBQzlDLENBQUM7UUFDRixJQUFJLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUM3QixVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJO2FBQy9CLENBQUMsQ0FBQztTQUNKO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7Ozs7SUFHbEIsVUFBVTs7UUFFaEIsVUFBVSxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN2QixDQUFDLENBQUM7UUFDSCxPQUFPLElBQUksQ0FBQzs7Ozs7SUFHTixZQUFZO1FBQ2xCLElBQUksT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsRUFBRTtZQUNuQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEU7Ozs7WUE5R0osU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxXQUFXO2dCQUNoQyx3VEFBaUQ7Z0JBQ2pELFNBQVMsRUFBWSxDQUFFLHdCQUF3QixDQUFFO2dCQUNqRCxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtnQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7YUFFNUM7Ozs7WUF2QkMsVUFBVTtZQUZWLGlCQUFpQjtZQVdWLHdCQUF3QjtZQU4vQixTQUFTOzs7c0JBdUJSLEtBQUs7cUJBQ0wsS0FBSztxQkFDTCxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztxQkFRTCxTQUFTLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXBkYXRlLWhvc3QtY2xhc3Muc2VydmljZSc7XG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcblxuZXhwb3J0IHR5cGUgTnpBdmF0YXJTaGFwZSA9ICdzcXVhcmUnIHwgJ2NpcmNsZSc7XG5leHBvcnQgdHlwZSBOekF2YXRhclNpemUgPSBOelNpemVMRFNUeXBlIHwgbnVtYmVyO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWF2YXRhcicsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWF2YXRhci5jb21wb25lbnQuaHRtbCcsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcblxufSlcbmV4cG9ydCBjbGFzcyBOekF2YXRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG5cbiAgQElucHV0KCkgbnpTaGFwZTogTnpBdmF0YXJTaGFwZSA9ICdjaXJjbGUnO1xuICBASW5wdXQoKSBuelNpemU6IE56QXZhdGFyU2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgbnpUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56U3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56SWNvbjogc3RyaW5nO1xuXG4gIG9sZEFQSUljb24gPSB0cnVlOyAvLyBNYWtlIHRoZSB1c2VyIGRlZmluZWQgaWNvbiBjb21wYXRpYmxlIHRvIG9sZCBBUEkuIFNob3VsZCBiZSByZW1vdmVkIGluIDIuMC5cbiAgaGFzVGV4dDogYm9vbGVhbiA9IGZhbHNlO1xuICBoYXNTcmM6IGJvb2xlYW4gPSB0cnVlO1xuICBoYXNJY29uOiBib29sZWFuID0gZmFsc2U7XG4gIHRleHRTdHlsZXM6IHt9O1xuXG4gIEBWaWV3Q2hpbGQoJ3RleHRFbCcpIHRleHRFbDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtYXZhdGFyJztcbiAgcHJpdmF0ZSBzaXplTWFwID0geyBsYXJnZTogJ2xnJywgc21hbGw6ICdzbScgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSB1cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBzZXRDbGFzcygpOiB0aGlzIHtcbiAgICBjb25zdCBjbGFzc01hcCA9IHtcbiAgICAgIFsgdGhpcy5wcmVmaXhDbHMgXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5zaXplTWFwWyB0aGlzLm56U2l6ZSBdfWAgXTogdGhpcy5zaXplTWFwWyB0aGlzLm56U2l6ZSBdLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56U2hhcGV9YCBdICAgICAgICAgICAgICAgOiB0aGlzLm56U2hhcGUsXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pY29uYCBdICAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMubnpJY29uLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30taW1hZ2VgIF0gICAgICAgICAgICAgICAgICAgICAgICAgOiB0aGlzLmhhc1NyYyAvLyBkb3duZ3JhZGUgYWZ0ZXIgaW1hZ2UgZXJyb3JcbiAgICB9O1xuICAgIHRoaXMudXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgaW1nRXJyb3IoKTogdm9pZCB7XG4gICAgdGhpcy5oYXNTcmMgPSBmYWxzZTtcbiAgICB0aGlzLmhhc0ljb24gPSBmYWxzZTtcbiAgICB0aGlzLmhhc1RleHQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5uekljb24pIHtcbiAgICAgIHRoaXMuaGFzSWNvbiA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLm56VGV4dCkge1xuICAgICAgdGhpcy5oYXNUZXh0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcbiAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLmhhc093blByb3BlcnR5KCduekljb24nKSAmJiBjaGFuZ2VzLm56SWNvbi5jdXJyZW50VmFsdWUpIHtcbiAgICAgIHRoaXMub2xkQVBJSWNvbiA9IGNoYW5nZXMubnpJY29uLmN1cnJlbnRWYWx1ZS5pbmRleE9mKCdhbnRpY29uJykgPiAtMTtcbiAgICB9XG4gICAgdGhpcy5oYXNUZXh0ID0gIXRoaXMubnpTcmMgJiYgISF0aGlzLm56VGV4dDtcbiAgICB0aGlzLmhhc0ljb24gPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpJY29uO1xuICAgIHRoaXMuaGFzU3JjID0gISF0aGlzLm56U3JjO1xuXG4gICAgdGhpcy5zZXRDbGFzcygpLm5vdGlmeUNhbGMoKTtcbiAgICB0aGlzLnNldFNpemVTdHlsZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjYWxjU3RyaW5nU2l6ZSgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuaGFzVGV4dCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNoaWxkcmVuV2lkdGggPSB0aGlzLnRleHRFbC5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgIGNvbnN0IGF2YXRhcldpZHRoID0gdGhpcy5lbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBzY2FsZSA9IGF2YXRhcldpZHRoIC0gOCA8IGNoaWxkcmVuV2lkdGggPyAoYXZhdGFyV2lkdGggLSA4KSAvIGNoaWxkcmVuV2lkdGggOiAxO1xuICAgIHRoaXMudGV4dFN0eWxlcyA9IHtcbiAgICAgIHRyYW5zZm9ybTogYHNjYWxlKCR7c2NhbGV9KSB0cmFuc2xhdGVYKC01MCUpYFxuICAgIH07XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24odGhpcy50ZXh0U3R5bGVzLCB7XG4gICAgICAgIGxpbmVIZWlnaHQ6IGAke3RoaXMubnpTaXplfXB4YFxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBub3RpZnlDYWxjKCk6IHRoaXMge1xuICAgIC8vIElmIHVzZSBuZ0FmdGVyVmlld0NoZWNrZWQsIGFsd2F5cyBkZW1hbmRzIG1vcmUgY29tcHV0YXRpb25zLCBzby4uLi4uLlxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jYWxjU3RyaW5nU2l6ZSgpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTaXplU3R5bGUoKTogdm9pZCB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2l6ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnd2lkdGgnLCBgJHt0aGlzLm56U2l6ZX1weGApO1xuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2hlaWdodCcsIGAke3RoaXMubnpTaXplfXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnbGluZS1oZWlnaHQnLCBgJHt0aGlzLm56U2l6ZX1weGApO1xuICAgIGlmICh0aGlzLmhhc0ljb24pIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2ZvbnQtc2l6ZScsIGAke3RoaXMubnpTaXplIC8gMn1weGApO1xuICAgIH1cbiAgfVxufVxuIl19