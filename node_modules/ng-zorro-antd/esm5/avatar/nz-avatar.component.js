/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
var NzAvatarComponent = /** @class */ (function () {
    function NzAvatarComponent(elementRef, cd, updateHostClassService, renderer) {
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
    NzAvatarComponent.prototype.setClass = /**
     * @return {?}
     */
    function () {
        var _a;
        /** @type {?} */
        var classMap = (_a = {},
            _a[this.prefixCls] = true,
            _a[this.prefixCls + "-" + this.sizeMap[this.nzSize]] = this.sizeMap[this.nzSize],
            _a[this.prefixCls + "-" + this.nzShape] = this.nzShape,
            _a[this.prefixCls + "-icon"] = this.nzIcon,
            _a[this.prefixCls + "-image"] = this.hasSrc // downgrade after image error
        ,
            _a);
        this.updateHostClassService.updateHostClass(this.el, classMap);
        this.cd.detectChanges();
        return this;
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.imgError = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzAvatarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.hasOwnProperty('nzIcon') && changes["nzIcon"].currentValue) {
            this.oldAPIIcon = changes["nzIcon"].currentValue.indexOf('anticon') > -1;
        }
        this.hasText = !this.nzSrc && !!this.nzText;
        this.hasIcon = !this.nzSrc && !!this.nzIcon;
        this.hasSrc = !!this.nzSrc;
        this.setClass().notifyCalc();
        this.setSizeStyle();
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.calcStringSize = /**
     * @return {?}
     */
    function () {
        if (!this.hasText) {
            return;
        }
        /** @type {?} */
        var childrenWidth = this.textEl.nativeElement.offsetWidth;
        /** @type {?} */
        var avatarWidth = this.el.getBoundingClientRect().width;
        /** @type {?} */
        var scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: "scale(" + scale + ") translateX(-50%)"
        };
        if (typeof this.nzSize === 'number') {
            Object.assign(this.textStyles, {
                lineHeight: this.nzSize + "px"
            });
        }
        this.cd.detectChanges();
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.notifyCalc = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If use ngAfterViewChecked, always demands more computations, so......
        setTimeout(function () {
            _this.calcStringSize();
        });
        return this;
    };
    /**
     * @return {?}
     */
    NzAvatarComponent.prototype.setSizeStyle = /**
     * @return {?}
     */
    function () {
        if (typeof this.nzSize === 'string') {
            return;
        }
        this.renderer.setStyle(this.el, 'width', this.nzSize + "px");
        this.renderer.setStyle(this.el, 'height', this.nzSize + "px");
        this.renderer.setStyle(this.el, 'line-height', this.nzSize + "px");
        if (this.hasIcon) {
            this.renderer.setStyle(this.el, 'font-size', this.nzSize / 2 + "px");
        }
    };
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
    NzAvatarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: NzUpdateHostClassService },
        { type: Renderer2 }
    ]; };
    NzAvatarComponent.propDecorators = {
        nzShape: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzText: [{ type: Input }],
        nzSrc: [{ type: Input }],
        nzIcon: [{ type: Input }],
        textEl: [{ type: ViewChild, args: ['textEl',] }]
    };
    return NzAvatarComponent;
}());
export { NzAvatarComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXZhdGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhdmF0YXIvbnotYXZhdGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUVULFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0lBbUNwRiwyQkFDVSxZQUNBLElBQ0Esd0JBQ0E7UUFIQSxlQUFVLEdBQVYsVUFBVTtRQUNWLE9BQUUsR0FBRixFQUFFO1FBQ0YsMkJBQXNCLEdBQXRCLHNCQUFzQjtRQUN0QixhQUFRLEdBQVIsUUFBUTtRQXRCbEIsZUFBa0MsUUFBUSxDQUFDO1FBQzNDLGNBQWdDLFNBQVMsQ0FBQztRQUsxQyxrQkFBYSxJQUFJLENBQUM7UUFDbEIsZUFBbUIsS0FBSyxDQUFDO1FBQ3pCLGNBQWtCLElBQUksQ0FBQztRQUN2QixlQUFtQixLQUFLLENBQUM7a0JBS0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhO3lCQUNuQyxZQUFZO3VCQUNkLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0tBTzdDOzs7O0lBRUQsb0NBQVE7OztJQUFSOzs7UUFDRSxJQUFNLFFBQVE7WUFDWixHQUFFLElBQUksQ0FBQyxTQUFTLElBQXdDLElBQUk7WUFDNUQsR0FBSyxJQUFJLENBQUMsU0FBUyxTQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBRTtZQUNuRixHQUFLLElBQUksQ0FBQyxTQUFTLFNBQUksSUFBSSxDQUFDLE9BQVMs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bmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzL3NpemUnO1xuXG5leHBvcnQgdHlwZSBOekF2YXRhclNoYXBlID0gJ3NxdWFyZScgfCAnY2lyY2xlJztcbmV4cG9ydCB0eXBlIE56QXZhdGFyU2l6ZSA9IE56U2l6ZUxEU1R5cGUgfCBudW1iZXI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYXZhdGFyJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotYXZhdGFyLmNvbXBvbmVudC5odG1sJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogWyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgXSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxuXG59KVxuZXhwb3J0IGNsYXNzIE56QXZhdGFyQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcblxuICBASW5wdXQoKSBuelNoYXBlOiBOekF2YXRhclNoYXBlID0gJ2NpcmNsZSc7XG4gIEBJbnB1dCgpIG56U2l6ZTogTnpBdmF0YXJTaXplID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBuelRleHQ6IHN0cmluZztcbiAgQElucHV0KCkgbnpTcmM6IHN0cmluZztcbiAgQElucHV0KCkgbnpJY29uOiBzdHJpbmc7XG5cbiAgb2xkQVBJSWNvbiA9IHRydWU7IC8vIE1ha2UgdGhlIHVzZXIgZGVmaW5lZCBpY29uIGNvbXBhdGlibGUgdG8gb2xkIEFQSS4gU2hvdWxkIGJlIHJlbW92ZWQgaW4gMi4wLlxuICBoYXNUZXh0OiBib29sZWFuID0gZmFsc2U7XG4gIGhhc1NyYzogYm9vbGVhbiA9IHRydWU7XG4gIGhhc0ljb246IGJvb2xlYW4gPSBmYWxzZTtcbiAgdGV4dFN0eWxlczoge307XG5cbiAgQFZpZXdDaGlsZCgndGV4dEVsJykgdGV4dEVsOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgZWw6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC1hdmF0YXInO1xuICBwcml2YXRlIHNpemVNYXAgPSB7IGxhcmdlOiAnbGcnLCBzbWFsbDogJ3NtJyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSxcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIHNldENsYXNzKCk6IHRoaXMge1xuICAgIGNvbnN0IGNsYXNzTWFwID0ge1xuICAgICAgWyB0aGlzLnByZWZpeENscyBdICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB0cnVlLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF19YCBdOiB0aGlzLnNpemVNYXBbIHRoaXMubnpTaXplIF0sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTaGFwZX1gIF0gICAgICAgICAgICAgICA6IHRoaXMubnpTaGFwZSxcbiAgICAgIFsgYCR7dGhpcy5wcmVmaXhDbHN9LWljb25gIF0gICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5uekljb24sXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1pbWFnZWAgXSAgICAgICAgICAgICAgICAgICAgICAgICA6IHRoaXMuaGFzU3JjIC8vIGRvd25ncmFkZSBhZnRlciBpbWFnZSBlcnJvclxuICAgIH07XG4gICAgdGhpcy51cGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLnVwZGF0ZUhvc3RDbGFzcyh0aGlzLmVsLCBjbGFzc01hcCk7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpbWdFcnJvcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhc1NyYyA9IGZhbHNlO1xuICAgIHRoaXMuaGFzSWNvbiA9IGZhbHNlO1xuICAgIHRoaXMuaGFzVGV4dCA9IGZhbHNlO1xuICAgIGlmICh0aGlzLm56SWNvbikge1xuICAgICAgdGhpcy5oYXNJY29uID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpUZXh0KSB7XG4gICAgICB0aGlzLmhhc1RleHQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnNldENsYXNzKCkubm90aWZ5Q2FsYygpO1xuICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuaGFzT3duUHJvcGVydHkoJ256SWNvbicpICYmIGNoYW5nZXMubnpJY29uLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5vbGRBUElJY29uID0gY2hhbmdlcy5uekljb24uY3VycmVudFZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgIH1cbiAgICB0aGlzLmhhc1RleHQgPSAhdGhpcy5uelNyYyAmJiAhIXRoaXMubnpUZXh0O1xuICAgIHRoaXMuaGFzSWNvbiA9ICF0aGlzLm56U3JjICYmICEhdGhpcy5uekljb247XG4gICAgdGhpcy5oYXNTcmMgPSAhIXRoaXMubnpTcmM7XG5cbiAgICB0aGlzLnNldENsYXNzKCkubm90aWZ5Q2FsYygpO1xuICAgIHRoaXMuc2V0U2l6ZVN0eWxlKCk7XG4gIH1cblxuICBwcml2YXRlIGNhbGNTdHJpbmdTaXplKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNUZXh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgY2hpbGRyZW5XaWR0aCA9IHRoaXMudGV4dEVsLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgY29uc3QgYXZhdGFyV2lkdGggPSB0aGlzLmVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IHNjYWxlID0gYXZhdGFyV2lkdGggLSA4IDwgY2hpbGRyZW5XaWR0aCA/IChhdmF0YXJXaWR0aCAtIDgpIC8gY2hpbGRyZW5XaWR0aCA6IDE7XG4gICAgdGhpcy50ZXh0U3R5bGVzID0ge1xuICAgICAgdHJhbnNmb3JtOiBgc2NhbGUoJHtzY2FsZX0pIHRyYW5zbGF0ZVgoLTUwJSlgXG4gICAgfTtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaXplID09PSAnbnVtYmVyJykge1xuICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLnRleHRTdHlsZXMsIHtcbiAgICAgICAgbGluZUhlaWdodDogYCR7dGhpcy5uelNpemV9cHhgXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gIH1cblxuICBwcml2YXRlIG5vdGlmeUNhbGMoKTogdGhpcyB7XG4gICAgLy8gSWYgdXNlIG5nQWZ0ZXJWaWV3Q2hlY2tlZCwgYWx3YXlzIGRlbWFuZHMgbW9yZSBjb21wdXRhdGlvbnMsIHNvLi4uLi4uXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNhbGNTdHJpbmdTaXplKCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwcml2YXRlIHNldFNpemVTdHlsZSgpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaXplID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd3aWR0aCcsIGAke3RoaXMubnpTaXplfXB4YCk7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnaGVpZ2h0JywgYCR7dGhpcy5uelNpemV9cHhgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdsaW5lLWhlaWdodCcsIGAke3RoaXMubnpTaXplfXB4YCk7XG4gICAgaWYgKHRoaXMuaGFzSWNvbikge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAnZm9udC1zaXplJywgYCR7dGhpcy5uelNpemUgLyAyfXB4YCk7XG4gICAgfVxuICB9XG59XG4iXX0=