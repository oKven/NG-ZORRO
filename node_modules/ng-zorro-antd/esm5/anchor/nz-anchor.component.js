/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { distinctUntilChanged, throttleTime } from 'rxjs/operators';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { toBoolean, toNumber } from '../core/util/convert';
/**
 * @record
 */
function Section() { }
function Section_tsickle_Closure_declarations() {
    /** @type {?} */
    Section.prototype.comp;
    /** @type {?} */
    Section.prototype.top;
}
/** @type {?} */
var sharpMatcherRegx = /#([^#]+)$/;
var NzAnchorComponent = /** @class */ (function () {
    // endregion
    /* tslint:disable-next-line:no-any */
    function NzAnchorComponent(scrollSrv, doc, cd) {
        this.scrollSrv = scrollSrv;
        this.doc = doc;
        this.cd = cd;
        this.links = [];
        this.animating = false;
        this.target = null;
        this.scroll$ = null;
        this.visible = false;
        this.wrapperStyle = { 'max-height': '100vh' };
        this._affix = true;
        this._bounds = 5;
        this._showInkInFixed = false;
        this.nzClick = new EventEmitter();
        this.nzScroll = new EventEmitter();
    }
    Object.defineProperty(NzAnchorComponent.prototype, "nzAffix", {
        get: /**
         * @return {?}
         */
        function () {
            return this._affix;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._affix = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzBounds", {
        get: /**
         * @return {?}
         */
        function () {
            return this._bounds;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._bounds = toNumber(value, 5);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzOffsetTop", {
        get: /**
         * @return {?}
         */
        function () {
            return this._offsetTop;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._offsetTop = toNumber(value, 0);
            this.wrapperStyle = {
                'max-height': "calc(100vh - " + this._offsetTop + "px)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzShowInkInFixed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showInkInFixed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showInkInFixed = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAnchorComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            this.target = typeof el === 'string' ? this.doc.querySelector(el) : el;
            this.registerScrollEvent();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.registerLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.push(link);
    };
    /**
     * @param {?} link
     * @return {?}
     */
    NzAnchorComponent.prototype.unregisterLink = /**
     * @param {?} link
     * @return {?}
     */
    function (link) {
        this.links.splice(this.links.indexOf(link), 1);
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.getTarget = /**
     * @return {?}
     */
    function () {
        return this.target || window;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.registerScrollEvent();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeListen();
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.registerScrollEvent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeListen();
        this.scroll$ = fromEvent(this.getTarget(), 'scroll')
            .pipe(throttleTime(50), distinctUntilChanged())
            .subscribe(function () { return _this.handleScroll(); });
        // 由于页面刷新时滚动条位置的记忆
        // 倒置在dom未渲染完成，导致计算不正确
        setTimeout(function () { return _this.handleScroll(); });
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.removeListen = /**
     * @return {?}
     */
    function () {
        if (this.scroll$) {
            this.scroll$.unsubscribe();
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NzAnchorComponent.prototype.getOffsetTop = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        if (!element || !element.getClientRects().length) {
            return 0;
        }
        /** @type {?} */
        var rect = element.getBoundingClientRect();
        if (!rect.width && !rect.height) {
            return rect.top;
        }
        return rect.top - element.ownerDocument.documentElement.clientTop;
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScroll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.animating) {
            return;
        }
        /** @type {?} */
        var sections = [];
        /** @type {?} */
        var scope = (this.nzOffsetTop || 0) + this.nzBounds;
        this.links.forEach(function (comp) {
            /** @type {?} */
            var sharpLinkMatch = sharpMatcherRegx.exec(comp.nzHref.toString());
            if (!sharpLinkMatch) {
                return;
            }
            /** @type {?} */
            var target = _this.doc.getElementById(sharpLinkMatch[1]);
            if (target && _this.getOffsetTop(target) < scope) {
                /** @type {?} */
                var top_1 = _this.getOffsetTop(target);
                sections.push({
                    top: top_1,
                    comp: comp
                });
            }
        });
        this.visible = !!sections.length;
        if (!this.visible) {
            this.clearActive();
            this.cd.detectChanges();
        }
        else {
            /** @type {?} */
            var maxSection = sections.reduce(function (prev, curr) { return curr.top > prev.top ? curr : prev; });
            this.handleActive(maxSection.comp);
        }
    };
    /**
     * @return {?}
     */
    NzAnchorComponent.prototype.clearActive = /**
     * @return {?}
     */
    function () {
        this.links.forEach(function (i) {
            i.active = false;
            i.markForCheck();
        });
    };
    /**
     * @param {?} comp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleActive = /**
     * @param {?} comp
     * @return {?}
     */
    function (comp) {
        this.clearActive();
        comp.active = true;
        comp.markForCheck();
        /** @type {?} */
        var linkNode = /** @type {?} */ ((/** @type {?} */ (comp.el.nativeElement)).querySelector('.ant-anchor-link-title'));
        this.ink.nativeElement.style.top = linkNode.offsetTop + linkNode.clientHeight / 2 - 4.5 + "px";
        this.cd.detectChanges();
        this.nzScroll.emit(comp);
    };
    /**
     * @param {?} linkComp
     * @return {?}
     */
    NzAnchorComponent.prototype.handleScrollTo = /**
     * @param {?} linkComp
     * @return {?}
     */
    function (linkComp) {
        var _this = this;
        /** @type {?} */
        var el = this.doc.querySelector(linkComp.nzHref);
        if (!el) {
            return;
        }
        this.animating = true;
        /** @type {?} */
        var containerScrollTop = this.scrollSrv.getScroll(this.getTarget());
        /** @type {?} */
        var elOffsetTop = this.scrollSrv.getOffset(el).top;
        /** @type {?} */
        var targetScrollTop = containerScrollTop + elOffsetTop - (this.nzOffsetTop || 0);
        this.scrollSrv.scrollTo(this.getTarget(), targetScrollTop, null, function () {
            _this.animating = false;
            _this.handleActive(linkComp);
        });
        this.nzClick.emit(linkComp.nzHref);
    };
    NzAnchorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-anchor',
                    preserveWhitespaces: false,
                    template: "<nz-affix *ngIf=\"nzAffix;else content\" [nzOffsetTop]=\"nzOffsetTop\">\n  <ng-template [ngTemplateOutlet]=\"content\"></ng-template>\n</nz-affix>\n<ng-template #content>\n  <div class=\"ant-anchor-wrapper\" [ngStyle]=\"wrapperStyle\">\n    <div class=\"ant-anchor\" [ngClass]=\"{'fixed': !nzAffix && !nzShowInkInFixed}\">\n      <div class=\"ant-anchor-ink\">\n        <div class=\"ant-anchor-ink-ball\" [class.visible]=\"visible\" #ink></div>\n      </div>\n      <ng-content></ng-content>\n    </div>\n  </div>\n</ng-template>",
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NzAnchorComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
    NzAnchorComponent.propDecorators = {
        ink: [{ type: ViewChild, args: ['ink',] }],
        nzAffix: [{ type: Input }],
        nzBounds: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzShowInkInFixed: [{ type: Input }],
        nzTarget: [{ type: Input }],
        nzClick: [{ type: Output }],
        nzScroll: [{ type: Output }]
    };
    return NzAnchorComponent;
}());
export { NzAnchorComponent };
function NzAnchorComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnchorComponent.prototype.links;
    /** @type {?} */
    NzAnchorComponent.prototype.animating;
    /** @type {?} */
    NzAnchorComponent.prototype.target;
    /** @type {?} */
    NzAnchorComponent.prototype.scroll$;
    /** @type {?} */
    NzAnchorComponent.prototype.ink;
    /** @type {?} */
    NzAnchorComponent.prototype.visible;
    /** @type {?} */
    NzAnchorComponent.prototype.wrapperStyle;
    /** @type {?} */
    NzAnchorComponent.prototype._affix;
    /** @type {?} */
    NzAnchorComponent.prototype._bounds;
    /** @type {?} */
    NzAnchorComponent.prototype._offsetTop;
    /** @type {?} */
    NzAnchorComponent.prototype._showInkInFixed;
    /** @type {?} */
    NzAnchorComponent.prototype.nzClick;
    /** @type {?} */
    NzAnchorComponent.prototype.nzScroll;
    /** @type {?} */
    NzAnchorComponent.prototype.scrollSrv;
    /** @type {?} */
    NzAnchorComponent.prototype.doc;
    /** @type {?} */
    NzAnchorComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJhbmNob3IvbnotYW5jaG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLG9CQUFvQixFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7Ozs7QUFTM0QsSUFBTSxnQkFBZ0IsR0FBRyxXQUFXLENBQUM7O0lBOEVuQyxZQUFZO0lBRVoscUNBQXFDO0lBQ3JDLDJCQUFvQixTQUEwQixFQUE0QixHQUFRLEVBQVUsRUFBcUI7UUFBN0YsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFBNEIsUUFBRyxHQUFILEdBQUcsQ0FBSztRQUFVLE9BQUUsR0FBRixFQUFFLENBQW1CO3FCQXRFeEUsRUFBRTt5QkFDdkIsS0FBSztzQkFDQyxJQUFJO3VCQUNFLElBQUk7UUFFcEMsZUFBVSxLQUFLLENBQUM7UUFDaEIsb0JBQW1CLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxDQUFDO3NCQUluQixJQUFJO3VCQVdKLENBQUM7K0JBeUJRLEtBQUs7UUFpQnhDLGVBQW1ELElBQUksWUFBWSxFQUFFLENBQUM7UUFFdEUs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QUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtvQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07aUJBQ3BEOzs7O2dCQWxCUSxlQUFlO2dEQTJGMkIsTUFBTSxTQUFDLFFBQVE7Z0JBeEdoRSxpQkFBaUI7OztzQkFzQ2hCLFNBQVMsU0FBQyxLQUFLOzBCQVFmLEtBQUs7MkJBV0wsS0FBSzs4QkFXTCxLQUFLO21DQWNMLEtBQUs7MkJBU0wsS0FBSzswQkFNTCxNQUFNOzJCQUVOLE1BQU07OzRCQXZHVDs7U0FvQ2EsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5qZWN0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIHRocm90dGxlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE56U2Nyb2xsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2Nyb2xsL256LXNjcm9sbC5zZXJ2aWNlJztcbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5cbmltcG9ydCB7IE56QW5jaG9yTGlua0NvbXBvbmVudCB9IGZyb20gJy4vbnotYW5jaG9yLWxpbmsuY29tcG9uZW50JztcblxuaW50ZXJmYWNlIFNlY3Rpb24ge1xuICBjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQ7XG4gIHRvcDogbnVtYmVyO1xufVxuXG5jb25zdCBzaGFycE1hdGNoZXJSZWd4ID0gLyMoW14jXSspJC87XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotYW5jaG9yJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWFuY2hvci5jb21wb25lbnQuaHRtbCcsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOekFuY2hvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCB7XG5cbiAgcHJpdmF0ZSBsaW5rczogTnpBbmNob3JMaW5rQ29tcG9uZW50W10gPSBbXTtcbiAgcHJpdmF0ZSBhbmltYXRpbmcgPSBmYWxzZTtcbiAgcHJpdmF0ZSB0YXJnZXQ6IEVsZW1lbnQgPSBudWxsO1xuICBwcml2YXRlIHNjcm9sbCQ6IFN1YnNjcmlwdGlvbiA9IG51bGw7XG4gIEBWaWV3Q2hpbGQoJ2luaycpIHByaXZhdGUgaW5rOiBFbGVtZW50UmVmO1xuICB2aXNpYmxlID0gZmFsc2U7XG4gIHdyYXBwZXJTdHlsZToge30gPSB7ICdtYXgtaGVpZ2h0JzogJzEwMHZoJyB9O1xuXG4gIC8vIHJlZ2lvbjogZmllbGRzXG5cbiAgcHJpdmF0ZSBfYWZmaXg6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFmZml4KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYWZmaXggPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56QWZmaXgoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FmZml4O1xuICB9XG5cbiAgcHJpdmF0ZSBfYm91bmRzOiBudW1iZXIgPSA1O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekJvdW5kcyh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYm91bmRzID0gdG9OdW1iZXIodmFsdWUsIDUpO1xuICB9XG5cbiAgZ2V0IG56Qm91bmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2JvdW5kcztcbiAgfVxuXG4gIHByaXZhdGUgX29mZnNldFRvcDogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuek9mZnNldFRvcCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fb2Zmc2V0VG9wID0gdG9OdW1iZXIodmFsdWUsIDApO1xuICAgIHRoaXMud3JhcHBlclN0eWxlID0ge1xuICAgICAgJ21heC1oZWlnaHQnOiBgY2FsYygxMDB2aCAtICR7dGhpcy5fb2Zmc2V0VG9wfXB4KWBcbiAgICB9O1xuICB9XG5cbiAgZ2V0IG56T2Zmc2V0VG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX29mZnNldFRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX3Nob3dJbmtJbkZpeGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd0lua0luRml4ZWQodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9zaG93SW5rSW5GaXhlZCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gIH1cblxuICBnZXQgbnpTaG93SW5rSW5GaXhlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd0lua0luRml4ZWQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpUYXJnZXQoZWw6IHN0cmluZyB8IEVsZW1lbnQpIHtcbiAgICB0aGlzLnRhcmdldCA9IHR5cGVvZiBlbCA9PT0gJ3N0cmluZycgPyB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGVsKSA6IGVsO1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56Q2xpY2s6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuelNjcm9sbDogRXZlbnRFbWl0dGVyPE56QW5jaG9yTGlua0NvbXBvbmVudD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gZW5kcmVnaW9uXG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcm9sbFNydjogTnpTY3JvbGxTZXJ2aWNlLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3MucHVzaChsaW5rKTtcbiAgfVxuXG4gIHVucmVnaXN0ZXJMaW5rKGxpbms6IE56QW5jaG9yTGlua0NvbXBvbmVudCk6IHZvaWQge1xuICAgIHRoaXMubGlua3Muc3BsaWNlKHRoaXMubGlua3MuaW5kZXhPZihsaW5rKSwgMSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldCgpOiBFbGVtZW50IHwgV2luZG93IHtcbiAgICByZXR1cm4gdGhpcy50YXJnZXQgfHwgd2luZG93O1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMucmVnaXN0ZXJTY3JvbGxFdmVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVMaXN0ZW4oKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVnaXN0ZXJTY3JvbGxFdmVudCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZUxpc3RlbigpO1xuICAgIHRoaXMuc2Nyb2xsJCA9IGZyb21FdmVudCh0aGlzLmdldFRhcmdldCgpLCAnc2Nyb2xsJylcbiAgICAgIC5waXBlKHRocm90dGxlVGltZSg1MCksIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHRoaXMuaGFuZGxlU2Nyb2xsKCkpO1xuICAgIC8vIOeUseS6jumhtemdouWIt+aWsOaXtua7muWKqOadoeS9jee9rueahOiusOW/hlxuICAgIC8vIOWAkue9ruWcqGRvbeacqua4suafk+WujOaIkO+8jOWvvOiHtOiuoeeul+S4jeato+ehrlxuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5oYW5kbGVTY3JvbGwoKSk7XG4gIH1cblxuICBwcml2YXRlIHJlbW92ZUxpc3RlbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zY3JvbGwkKSB7XG4gICAgICB0aGlzLnNjcm9sbCQudW5zdWJzY3JpYmUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9mZnNldFRvcChlbGVtZW50OiBIVE1MRWxlbWVudCk6IG51bWJlciB7XG4gICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFyZWN0LndpZHRoICYmICFyZWN0LmhlaWdodCkge1xuICAgICAgcmV0dXJuIHJlY3QudG9wO1xuICAgIH1cbiAgICByZXR1cm4gcmVjdC50b3AgLSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFRvcDtcbiAgfVxuXG4gIGhhbmRsZVNjcm9sbCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzZWN0aW9uczogU2VjdGlvbltdID0gW107XG4gICAgY29uc3Qgc2NvcGUgPSAodGhpcy5uek9mZnNldFRvcCB8fCAwKSArIHRoaXMubnpCb3VuZHM7XG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGNvbXAgPT4ge1xuICAgICAgY29uc3Qgc2hhcnBMaW5rTWF0Y2ggPSBzaGFycE1hdGNoZXJSZWd4LmV4ZWMoY29tcC5uekhyZWYudG9TdHJpbmcoKSk7XG4gICAgICBpZiAoIXNoYXJwTGlua01hdGNoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZG9jLmdldEVsZW1lbnRCeUlkKHNoYXJwTGlua01hdGNoWyAxIF0pO1xuICAgICAgaWYgKHRhcmdldCAmJiB0aGlzLmdldE9mZnNldFRvcCh0YXJnZXQpIDwgc2NvcGUpIHtcbiAgICAgICAgY29uc3QgdG9wID0gdGhpcy5nZXRPZmZzZXRUb3AodGFyZ2V0KTtcbiAgICAgICAgc2VjdGlvbnMucHVzaCh7XG4gICAgICAgICAgdG9wLFxuICAgICAgICAgIGNvbXBcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpc2libGUgPSAhIXNlY3Rpb25zLmxlbmd0aDtcbiAgICBpZiAoIXRoaXMudmlzaWJsZSkge1xuICAgICAgdGhpcy5jbGVhckFjdGl2ZSgpO1xuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG1heFNlY3Rpb24gPSBzZWN0aW9ucy5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IGN1cnIudG9wID4gcHJldi50b3AgPyBjdXJyIDogcHJldik7XG4gICAgICB0aGlzLmhhbmRsZUFjdGl2ZShtYXhTZWN0aW9uLmNvbXApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJBY3RpdmUoKTogdm9pZCB7XG4gICAgdGhpcy5saW5rcy5mb3JFYWNoKGkgPT4ge1xuICAgICAgaS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIGkubWFya0ZvckNoZWNrKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUFjdGl2ZShjb21wOiBOekFuY2hvckxpbmtDb21wb25lbnQpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyQWN0aXZlKCk7XG5cbiAgICBjb21wLmFjdGl2ZSA9IHRydWU7XG4gICAgY29tcC5tYXJrRm9yQ2hlY2soKTtcblxuICAgIGNvbnN0IGxpbmtOb2RlID0gKGNvbXAuZWwubmF0aXZlRWxlbWVudCBhcyBIVE1MRGl2RWxlbWVudCkucXVlcnlTZWxlY3RvcignLmFudC1hbmNob3ItbGluay10aXRsZScpIGFzIEhUTUxFbGVtZW50O1xuICAgIHRoaXMuaW5rLm5hdGl2ZUVsZW1lbnQuc3R5bGUudG9wID0gYCR7bGlua05vZGUub2Zmc2V0VG9wICsgbGlua05vZGUuY2xpZW50SGVpZ2h0IC8gMiAtIDQuNX1weGA7XG4gICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG5cbiAgICB0aGlzLm56U2Nyb2xsLmVtaXQoY29tcCk7XG4gIH1cblxuICBoYW5kbGVTY3JvbGxUbyhsaW5rQ29tcDogTnpBbmNob3JMaW5rQ29tcG9uZW50KTogdm9pZCB7XG4gICAgY29uc3QgZWwgPSB0aGlzLmRvYy5xdWVyeVNlbGVjdG9yKGxpbmtDb21wLm56SHJlZik7XG4gICAgaWYgKCFlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICBjb25zdCBjb250YWluZXJTY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGhpcy5nZXRUYXJnZXQoKSk7XG4gICAgY29uc3QgZWxPZmZzZXRUb3AgPSB0aGlzLnNjcm9sbFNydi5nZXRPZmZzZXQoZWwpLnRvcDtcbiAgICBjb25zdCB0YXJnZXRTY3JvbGxUb3AgPSBjb250YWluZXJTY3JvbGxUb3AgKyBlbE9mZnNldFRvcCAtICh0aGlzLm56T2Zmc2V0VG9wIHx8IDApO1xuICAgIHRoaXMuc2Nyb2xsU3J2LnNjcm9sbFRvKHRoaXMuZ2V0VGFyZ2V0KCksIHRhcmdldFNjcm9sbFRvcCwgbnVsbCwgKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMuaGFuZGxlQWN0aXZlKGxpbmtDb21wKTtcbiAgICB9KTtcbiAgICB0aGlzLm56Q2xpY2suZW1pdChsaW5rQ29tcC5uekhyZWYpO1xuICB9XG5cbn1cbiJdfQ==