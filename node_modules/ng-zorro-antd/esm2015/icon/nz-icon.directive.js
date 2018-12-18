/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
const iconTypeRE = /^anticon\-\w/;
/** @type {?} */
const getIconTypeClass = (className) => {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        const classArr = className.split(/\s/);
        /** @type {?} */
        const index = classArr.findIndex((cls => cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE)));
        return index === -1 ? undefined : { name: classArr[index], index };
    }
};
const ɵ0 = getIconTypeClass;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 */
export class NzIconDirective extends IconDirective {
    /**
     * @param {?} iconService
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(iconService, elementRef, renderer) {
        super(iconService, elementRef, renderer);
        this.iconService = iconService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.spin = false;
        this.el = this.elementRef.nativeElement;
    }
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param {?=} oldAPI
     * @return {?}
     */
    changeIcon2(oldAPI = false) {
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then(svg => {
            this.setSVGData(svg);
            if (!oldAPI) {
                this.toggleSpin(svg);
            }
        }).catch((err) => {
            if (err) {
                console.error(err);
                console.warn('[NG-ZORRO]', `You can find more about this error on http://ng.ant.design/components/icon/en`);
            }
        });
    }
    /**
     * @param {?} className
     * @return {?}
     */
    classChangeHandler(className) {
        /** @type {?} */
        const ret = getIconTypeClass(className);
        if (ret) {
            /** @type {?} */
            let type = ret.name.replace('anticon-', '');
            if (type.includes('verticle')) {
                type = type.replace('verticle', 'vertical');
                this.iconService.warnAPI('cross');
            }
            if (type.startsWith('cross')) {
                type = type.replace('cross', 'close');
                this.iconService.warnAPI('vertical');
            }
            if (this.type !== type) {
                this.type = type;
                this.changeIcon2(true);
            }
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    toggleSpin(svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    }
    /**
     * @return {?}
     */
    setClassName() {
        if (typeof this.type === 'string') {
            /** @type {?} */
            const iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            const ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, `anticon-${this.type}`);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, `anticon-${this.type}`);
            }
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    setSVGData(svg) {
        if (typeof this.type === 'string') {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        if (!this.iconfont) {
            this.changeIcon2();
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon(`#${this.iconfont}`));
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            // Add `class` mutation observer.
            this.classNameObserver = new MutationObserver((mutations) => {
                mutations
                    .filter((mutation) => mutation.attributeName === 'class')
                    .forEach((mutation) => this.classChangeHandler((/** @type {?} */ (mutation.target)).className));
            });
            this.classNameObserver.observe(this.el, { attributes: true });
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', `anticon ${this.el.className}`.trim());
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
    }
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    ngAfterContentChecked() {
        /** @type {?} */
        const children = this.el.children;
        /** @type {?} */
        let length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                const child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement(/** @type {?} */ (child));
                }
            }
        }
    }
}
NzIconDirective.decorators = [
    { type: Directive, args: [{
                selector: 'i.anticon, [nz-icon]'
            },] }
];
/** @nocollapse */
NzIconDirective.ctorParameters = () => [
    { type: NzIconService },
    { type: ElementRef },
    { type: Renderer2 }
];
NzIconDirective.propDecorators = {
    spin: [{ type: Input }],
    iconfont: [{ type: Input }]
};
function NzIconDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzIconDirective.prototype.spin;
    /** @type {?} */
    NzIconDirective.prototype.iconfont;
    /** @type {?} */
    NzIconDirective.prototype.classNameObserver;
    /** @type {?} */
    NzIconDirective.prototype.el;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.elementRef;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
}
export { ɵ0 };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiaWNvbi9uei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUdMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDOztBQUVsRCxNQUFNLFVBQVUsR0FBRyxjQUFjLENBQUM7O0FBRWxDLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBQyxTQUFpQixFQUFtQyxFQUFFO0lBQzlFLElBQUksQ0FBQyxTQUFTLEVBQUU7UUFDZCxPQUFPLFNBQVMsQ0FBQztLQUNsQjtTQUFNOztRQUNMLE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7O1FBQ3ZDLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEgsT0FBTyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO0tBQ3BFO0NBQ0YsQ0FBQzs7Ozs7Ozs7O0FBWUYsTUFBTSxPQUFPLGVBQWdCLFNBQVEsYUFBYTs7Ozs7O0lBeUVoRCxZQUFtQixXQUEwQixFQUFTLFVBQXNCLEVBQVMsUUFBbUI7UUFDdEcsS0FBSyxDQUFDLFdBQVcsRUFB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LE9BQU8sTUFBTSxFQUFFLEVBQUU7O2dCQUNmLE1BQU0sS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLEtBQUssRUFBRTtvQkFDekMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsbUJBQUMsS0FBbUIsRUFBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7S0FDRjs7O1lBaElGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDOzs7O1lBdkJRLGFBQWE7WUFScEIsVUFBVTtZQUtWLFNBQVM7OzttQkE0QlIsS0FBSzt1QkFDTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgaXNEZXZNb2RlLFxuICBBZnRlckNvbnRlbnRDaGVja2VkLFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uRGlyZWN0aXZlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XG5pbXBvcnQgeyBOekljb25TZXJ2aWNlIH0gZnJvbSAnLi9uei1pY29uLnNlcnZpY2UnO1xuXG5jb25zdCBpY29uVHlwZVJFID0gL15hbnRpY29uXFwtXFx3LztcblxuY29uc3QgZ2V0SWNvblR5cGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZyk6IHsgbmFtZTogc3RyaW5nLCBpbmRleDogbnVtYmVyIH0gPT4ge1xuICBpZiAoIWNsYXNzTmFtZSkge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgY2xhc3NBcnIgPSBjbGFzc05hbWUuc3BsaXQoL1xccy8pO1xuICAgIGNvbnN0IGluZGV4ID0gY2xhc3NBcnIuZmluZEluZGV4KChjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSkpO1xuICAgIHJldHVybiBpbmRleCA9PT0gLTEgPyB1bmRlZmluZWQgOiB7IG5hbWU6IGNsYXNzQXJyW2luZGV4XSwgaW5kZXggfTtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIGRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgdG8gcHJvdmlkZTpcbiAqXG4gKiAtIEljb25Gb250IHN1cHBvcnRcbiAqIC0gc3Bpbm5pbmdcbiAqIC0gb2xkIEFQSSBjb21wYXRpYmlsaXR5XG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ2kuYW50aWNvbiwgW256LWljb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBOekljb25EaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIHNwaW4gPSBmYWxzZTtcbiAgQElucHV0KCkgaWNvbmZvbnQ6IHN0cmluZztcblxuICBwcml2YXRlIGNsYXNzTmFtZU9ic2VydmVyOiBNdXRhdGlvbk9ic2VydmVyO1xuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG5cbiAgLyoqXG4gICAqIFJlcGxhY2VtZW50IG9mIGBjaGFuZ2VJY29uYCBmb3IgbW9yZSBtb2RpZmljYXRpb25zLlxuICAgKiBAcGFyYW0gb2xkQVBJXG4gICAqL1xuICBwcml2YXRlIGNoYW5nZUljb24yKG9sZEFQSTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XG4gICAgaWYgKCFvbGRBUEkpIHsgdGhpcy5zZXRDbGFzc05hbWUoKTsgfVxuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2ZyA9PiB7XG4gICAgICB0aGlzLnNldFNWR0RhdGEoc3ZnKTtcbiAgICAgIGlmICghb2xkQVBJKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlU3BpbihzdmcpO1xuICAgICAgfVxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgICBjb25zb2xlLndhcm4oJ1tORy1aT1JST10nLCBgWW91IGNhbiBmaW5kIG1vcmUgYWJvdXQgdGhpcyBlcnJvciBvbiBodHRwOi8vbmcuYW50LmRlc2lnbi9jb21wb25lbnRzL2ljb24vZW5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyhjbGFzc05hbWUpO1xuICAgIGlmIChyZXQpIHtcbiAgICAgIGxldCB0eXBlID0gcmV0Lm5hbWUucmVwbGFjZSgnYW50aWNvbi0nLCAnJyk7XG4gICAgICBpZiAodHlwZS5pbmNsdWRlcygndmVydGljbGUnKSkge1xuICAgICAgICB0eXBlID0gdHlwZS5yZXBsYWNlKCd2ZXJ0aWNsZScsICd2ZXJ0aWNhbCcpO1xuICAgICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ2Nyb3NzJyk7XG4gICAgICB9XG4gICAgICBpZiAodHlwZS5zdGFydHNXaXRoKCdjcm9zcycpKSB7XG4gICAgICAgIHR5cGUgPSB0eXBlLnJlcGxhY2UoJ2Nyb3NzJywgJ2Nsb3NlJyk7XG4gICAgICAgIHRoaXMuaWNvblNlcnZpY2Uud2FybkFQSSgndmVydGljYWwnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VJY29uMih0cnVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgaWYgKCh0aGlzLnNwaW4gfHwgdGhpcy50eXBlID09PSAnbG9hZGluZycpICYmICF0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FudGljb24tc3BpbicpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHN2ZywgJ2FudGljb24tc3BpbicpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0Q2xhc3NOYW1lKCk6IHZvaWQge1xuICAgIGlmICh0eXBlb2YgdGhpcy50eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgY29uc3QgaWNvbkNsYXNzTmFtZUFyciA9IHRoaXMuZWwuY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcbiAgICAgIGNvbnN0IHJldCA9IGdldEljb25UeXBlQ2xhc3ModGhpcy5lbC5jbGFzc05hbWUpO1xuICAgICAgaWYgKHJldCkge1xuICAgICAgICBpY29uQ2xhc3NOYW1lQXJyLnNwbGljZShyZXQuaW5kZXgsIDEsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLCAnY2xhc3MnLCBpY29uQ2xhc3NOYW1lQXJyLmpvaW4oJyAnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U1ZHRGF0YShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2RhdGEtaWNvbicsIHRoaXMudHlwZSk7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIGljb25TZXJ2aWNlOiBOekljb25TZXJ2aWNlLCBwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgICBzdXBlcihpY29uU2VydmljZSwgZWxlbWVudFJlZiwgcmVuZGVyZXIpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmljb25mb250KSB7XG4gICAgICB0aGlzLmNoYW5nZUljb24yKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NldFNWR0VsZW1lbnQodGhpcy5pY29uU2VydmljZS5jcmVhdGVJY29uZm9udEljb24oYCMke3RoaXMuaWNvbmZvbnR9YCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIC8vIElmIGB0aGlzLnR5cGVgIGlzIG5vdCBzcGVjaWZpZWQgYW5kIGBjbGFzc0xpc3RgIGNvbnRhaW5zIGBhbnRpY29uYCwgaXQgc2hvdWxkIGJlIGFuIGljb24gdXNpbmcgb2xkIEFQSS5cbiAgICBpZiAoIXRoaXMudHlwZSAmJiB0aGlzLmVsLmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbicpKSB7XG4gICAgICB0aGlzLmljb25TZXJ2aWNlLndhcm5BUEkoJ29sZCcpO1xuICAgICAgLy8gR2V0IGB0eXBlYCBmcm9tIGBjbGFzc05hbWVgLiBJZiBub3QsIGluaXRpYWwgcmVuZGVyaW5nIHdvdWxkIGJlIG1pc3NlZC5cbiAgICAgIHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKHRoaXMuZWwuY2xhc3NOYW1lKTtcbiAgICAgIC8vIEFkZCBgY2xhc3NgIG11dGF0aW9uIG9ic2VydmVyLlxuICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKChtdXRhdGlvbnM6IE11dGF0aW9uUmVjb3JkW10pID0+IHtcbiAgICAgICAgbXV0YXRpb25zXG4gICAgICAgICAgLmZpbHRlcigobXV0YXRpb246IE11dGF0aW9uUmVjb3JkKSA9PiBtdXRhdGlvbi5hdHRyaWJ1dGVOYW1lID09PSAnY2xhc3MnKVxuICAgICAgICAgIC5mb3JFYWNoKChtdXRhdGlvbjogTXV0YXRpb25SZWNvcmQpID0+IHRoaXMuY2xhc3NDaGFuZ2VIYW5kbGVyKChtdXRhdGlvbi50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsYXNzTmFtZSkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbCwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xuICAgIH1cbiAgICAvLyBJZiBgY2xhc3NMaXN0YCBkb2VzIG5vdCBjb250YWluIGBhbnRpY29uYCwgYWRkIGl0IGJlZm9yZSBvdGhlciBjbGFzcyBuYW1lcy5cbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGBhbnRpY29uICR7dGhpcy5lbC5jbGFzc05hbWV9YC50cmltKCkpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYXNzTmFtZU9ic2VydmVyKSB7XG4gICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHRyeSB0byBub3JtYWxpemUgU1ZHIGVsZW1lbnRzLlxuICAgKi9cbiAgbmdBZnRlckNvbnRlbnRDaGVja2VkKCk6IHZvaWQge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcbiAgICBsZXQgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGlmICghdGhpcy50eXBlICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bbGVuZ3RoXTtcbiAgICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgICB0aGlzLmljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGQgYXMgU1ZHRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==