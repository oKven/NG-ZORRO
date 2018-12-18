/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Inject, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NzScrollService } from '../core/scroll/nz-scroll.service';
import { shallowEqual } from '../core/util/check';
import { toNumber } from '../core/util/convert';
import { throttleByAnimationFrameDecorator } from '../core/util/throttleByAnimationFrame';
var NzAffixComponent = /** @class */ (function () {
    // tslint:disable-next-line:no-any
    function NzAffixComponent(scrollSrv, _el, doc, cd) {
        this.scrollSrv = scrollSrv;
        this._el = _el;
        this.doc = doc;
        this.cd = cd;
        this.nzChange = new EventEmitter();
        this.events = [
            'resize',
            'scroll',
            'touchstart',
            'touchmove',
            'touchend',
            'pageshow',
            'load'
        ];
        this._target = window;
    }
    Object.defineProperty(NzAffixComponent.prototype, "nzTarget", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.clearEventListeners();
            this._target = typeof value === 'string' ? this.doc.querySelector(value) : value || window;
            this.setTargetEventListeners();
            this.updatePosition({});
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetTop", {
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
            if (typeof value === 'undefined') {
                return;
            }
            this._offsetTop = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzAffixComponent.prototype, "nzOffsetBottom", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'undefined') {
                return;
            }
            this._offsetBottom = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.timeout = setTimeout(function () {
            _this.setTargetEventListeners();
            _this.updatePosition({});
        });
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.clearEventListeners();
        clearTimeout(this.timeout);
        // tslint:disable-next-line:no-any
        (/** @type {?} */ (this.updatePosition)).cancel();
    };
    /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getOffset = /**
     * @param {?} element
     * @param {?} target
     * @return {?}
     */
    function (element, target) {
        /** @type {?} */
        var elemRect = element.getBoundingClientRect();
        /** @type {?} */
        var targetRect = this.getTargetRect(target);
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(target, true);
        /** @type {?} */
        var scrollLeft = this.scrollSrv.getScroll(target, false);
        /** @type {?} */
        var docElem = this.doc.body;
        /** @type {?} */
        var clientTop = docElem.clientTop || 0;
        /** @type {?} */
        var clientLeft = docElem.clientLeft || 0;
        return {
            top: elemRect.top - targetRect.top + scrollTop - clientTop,
            left: elemRect.left - targetRect.left + scrollLeft - clientLeft,
            width: elemRect.width,
            height: elemRect.height
        };
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.setTargetEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearEventListeners();
        this.events.forEach(function (eventName) {
            _this._target.addEventListener(eventName, _this.updatePosition, false);
        });
    };
    /**
     * @return {?}
     */
    NzAffixComponent.prototype.clearEventListeners = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.events.forEach(function (eventName) {
            _this._target.removeEventListener(eventName, _this.updatePosition, false);
        });
    };
    /**
     * @param {?} target
     * @return {?}
     */
    NzAffixComponent.prototype.getTargetRect = /**
     * @param {?} target
     * @return {?}
     */
    function (target) {
        return target !== window ?
            (/** @type {?} */ (target)).getBoundingClientRect() : /** @type {?} */ ({ top: 0, left: 0, bottom: 0 });
    };
    /**
     * @param {?} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.genStyle = /**
     * @param {?} affixStyle
     * @return {?}
     */
    function (affixStyle) {
        if (affixStyle == null) {
            return '';
        }
        return Object.keys(affixStyle).map(function (key) {
            /** @type {?} */
            var val = affixStyle[key];
            return key + ":" + (typeof val === 'string' ? val : val + 'px');
        }).join(';');
    };
    /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setAffixStyle = /**
     * @param {?} e
     * @param {?} affixStyle
     * @return {?}
     */
    function (e, affixStyle) {
        /** @type {?} */
        var originalAffixStyle = this.affixStyle;
        /** @type {?} */
        var isWindow = this._target === window;
        if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
            return;
        }
        if (shallowEqual(originalAffixStyle, affixStyle)) {
            return;
        }
        /** @type {?} */
        var fixed = !!affixStyle;
        /** @type {?} */
        var wrapEl = /** @type {?} */ (this.wrap.nativeElement);
        wrapEl.style.cssText = this.genStyle(affixStyle);
        this.affixStyle = affixStyle;
        /** @type {?} */
        var cls = 'ant-affix';
        if (fixed) {
            wrapEl.classList.add(cls);
        }
        else {
            wrapEl.classList.remove(cls);
        }
        if ((affixStyle && !originalAffixStyle) || (!affixStyle && originalAffixStyle)) {
            this.nzChange.emit(fixed);
        }
    };
    /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    NzAffixComponent.prototype.setPlaceholderStyle = /**
     * @param {?} placeholderStyle
     * @return {?}
     */
    function (placeholderStyle) {
        /** @type {?} */
        var originalPlaceholderStyle = this.placeholderStyle;
        if (shallowEqual(placeholderStyle, originalPlaceholderStyle)) {
            return;
        }
        (/** @type {?} */ (this._el.nativeElement)).style.cssText = this.genStyle(placeholderStyle);
        this.placeholderStyle = placeholderStyle;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    NzAffixComponent.prototype.updatePosition = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        /** @type {?} */
        var targetNode = this._target;
        /** @type {?} */
        var offsetTop = this.nzOffsetTop;
        /** @type {?} */
        var scrollTop = this.scrollSrv.getScroll(targetNode, true);
        /** @type {?} */
        var affixNode = /** @type {?} */ (this._el.nativeElement);
        /** @type {?} */
        var elemOffset = this.getOffset(affixNode, targetNode);
        /** @type {?} */
        var elemSize = {
            width: affixNode.offsetWidth,
            height: affixNode.offsetHeight
        };
        /** @type {?} */
        var offsetMode = {
            top: false,
            bottom: false
        };
        // Default to `offsetTop=0`.
        if (typeof offsetTop !== 'number' && typeof this._offsetBottom !== 'number') {
            offsetMode.top = true;
            offsetTop = 0;
        }
        else {
            offsetMode.top = typeof offsetTop === 'number';
            offsetMode.bottom = typeof this._offsetBottom === 'number';
        }
        /** @type {?} */
        var targetRect = this.getTargetRect(targetNode);
        /** @type {?} */
        var targetInnerHeight = (/** @type {?} */ (targetNode)).innerHeight || (/** @type {?} */ (targetNode)).clientHeight;
        if (scrollTop > elemOffset.top - (/** @type {?} */ (offsetTop)) && offsetMode.top) {
            /** @type {?} */
            var width = elemOffset.width;
            /** @type {?} */
            var top_1 = targetRect.top + (/** @type {?} */ (offsetTop));
            this.setAffixStyle(e, {
                position: 'fixed',
                top: top_1,
                left: targetRect.left + elemOffset.left,
                maxHeight: "calc(100vh - " + top_1 + "px)",
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemSize.height
            });
        }
        else if (scrollTop < elemOffset.top + elemSize.height + (/** @type {?} */ (this._offsetBottom)) - targetInnerHeight &&
            offsetMode.bottom) {
            /** @type {?} */
            var targetBottomOffet = targetNode === window ? 0 : (window.innerHeight - targetRect.bottom);
            /** @type {?} */
            var width = elemOffset.width;
            this.setAffixStyle(e, {
                position: 'fixed',
                bottom: targetBottomOffet + (/** @type {?} */ (this._offsetBottom)),
                left: targetRect.left + elemOffset.left,
                width: width
            });
            this.setPlaceholderStyle({
                width: width,
                height: elemOffset.height
            });
        }
        else {
            if (e.type === 'resize' && this.affixStyle && this.affixStyle.position === 'fixed' && affixNode.offsetWidth) {
                this.setAffixStyle(e, tslib_1.__assign({}, this.affixStyle, { width: affixNode.offsetWidth }));
            }
            else {
                this.setAffixStyle(e, null);
            }
            this.setPlaceholderStyle(null);
        }
    };
    NzAffixComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-affix',
                    template: "<div #wrap>\n  <ng-content></ng-content>\n</div>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["\n    nz-affix {\n      display: block;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzAffixComponent.ctorParameters = function () { return [
        { type: NzScrollService },
        { type: ElementRef },
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
        { type: ChangeDetectorRef }
    ]; };
    NzAffixComponent.propDecorators = {
        nzTarget: [{ type: Input }],
        nzOffsetTop: [{ type: Input }],
        nzOffsetBottom: [{ type: Input }],
        nzChange: [{ type: Output }],
        wrap: [{ type: ViewChild, args: ['wrap',] }]
    };
    tslib_1.__decorate([
        throttleByAnimationFrameDecorator()
        // tslint:disable-next-line:no-any
        ,
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [Object]),
        tslib_1.__metadata("design:returntype", void 0)
    ], NzAffixComponent.prototype, "updatePosition", null);
    return NzAffixComponent;
}());
export { NzAffixComponent };
function NzAffixComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAffixComponent.prototype.nzChange;
    /** @type {?} */
    NzAffixComponent.prototype.timeout;
    /** @type {?} */
    NzAffixComponent.prototype.events;
    /** @type {?} */
    NzAffixComponent.prototype.affixStyle;
    /** @type {?} */
    NzAffixComponent.prototype.placeholderStyle;
    /** @type {?} */
    NzAffixComponent.prototype.wrap;
    /** @type {?} */
    NzAffixComponent.prototype._target;
    /** @type {?} */
    NzAffixComponent.prototype._offsetTop;
    /** @type {?} */
    NzAffixComponent.prototype._offsetBottom;
    /** @type {?} */
    NzAffixComponent.prototype.scrollSrv;
    /** @type {?} */
    NzAffixComponent.prototype._el;
    /** @type {?} */
    NzAffixComponent.prototype.doc;
    /** @type {?} */
    NzAffixComponent.prototype.cd;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWZmaXguY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFmZml4L256LWFmZml4LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixNQUFNLEVBQ04sS0FBSyxFQUdMLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbEQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOztJQThDeEYsa0NBQWtDO0lBQ2xDLDBCQUFvQixTQUEwQixFQUFVLEdBQWUsRUFBNEIsR0FBUSxFQUFVLEVBQXFCO1FBQXRILGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBWTtRQUE0QixRQUFHLEdBQUgsR0FBRyxDQUFLO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFKMUksZ0JBQzJDLElBQUksWUFBWSxFQUFFLENBQUM7c0JBTzdDO1lBQ2YsUUFBUTtZQUNSLFFBQVE7WUFDUixZQUFZO1lBQ1osV0FBVztZQUNYLFVBQVU7WUFDVixVQUFVO1lBQ1YsTUFBTTtTQUNQO3VCQU1tQyxNQUFNO0tBakJ6QztJQWpDRCxzQkFDSSxzQ0FBUTs7Ozs7UUFEWixVQUNhLEtBQWdDO1lBQzNDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxPQUFP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LElBQUk7Z0JBQzNDLEtBQUssT0FBQTthQUNOLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQztnQkFDdkIsS0FBSyxPQUFBO2dCQUNMLE1BQU0sRUFBRSxVQUFVLENBQUMsTUFBTTthQUMxQixDQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxLQUFLLE9BQU8sSUFBSSxTQUFTLENBQUMsV0FBVyxFQUFFO2dCQUMzRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsdUJBQU8sSUFBSSxDQUFDLFVBQVUsSUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLFdBQVcsSUFBRyxDQUFDO2FBQzdFO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzdCO1lBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2hDO0tBQ0Y7O2dCQTdPRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFTLFVBQVU7b0JBQzNCLDREQUE0QztvQkFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBTS9DLGFBQWEsRUFBSSxpQkFBaUIsQ0FBQyxJQUFJOzZCQUxwQixvREFJbEI7aUJBRUY7Ozs7Z0JBZlEsZUFBZTtnQkFYdEIsVUFBVTtnREE2RGdFLE1BQU0sU0FBQyxRQUFRO2dCQS9EekYsaUJBQWlCOzs7MkJBK0JoQixLQUFLOzhCQVFMLEtBQUs7aUNBWUwsS0FBSzsyQkFRTCxNQUFNO3VCQW9CTixTQUFTLFNBQUMsTUFBTTs7O1FBOEdoQixpQ0FBaUMsRUFBRTtRQUNwQyxrQ0FBa0M7Ozs7OzBEQWlFakM7MkJBbFFIOztTQWdDYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbmplY3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelNjcm9sbFNlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3Njcm9sbC9uei1zY3JvbGwuc2VydmljZSc7XG5pbXBvcnQgeyBzaGFsbG93RXF1YWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9OdW1iZXIgfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyB0aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWVEZWNvcmF0b3IgfSBmcm9tICcuLi9jb3JlL3V0aWwvdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgIDogJ256LWFmZml4JyxcbiAgdGVtcGxhdGVVcmwgICAgOiAnLi9uei1hZmZpeC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBzdHlsZXMgICAgICAgICA6IFsgYFxuICAgIG56LWFmZml4IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cbiAgYCBdLFxuICBlbmNhcHN1bGF0aW9uICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTnpBZmZpeENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKVxuICBzZXQgbnpUYXJnZXQodmFsdWU6IHN0cmluZyB8IEVsZW1lbnQgfCBXaW5kb3cpIHtcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLl90YXJnZXQgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdGhpcy5kb2MucXVlcnlTZWxlY3Rvcih2YWx1ZSkgOiB2YWx1ZSB8fCB3aW5kb3c7XG4gICAgdGhpcy5zZXRUYXJnZXRFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56T2Zmc2V0VG9wKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vZmZzZXRUb3AgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBnZXQgbnpPZmZzZXRUb3AoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fb2Zmc2V0VG9wO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56T2Zmc2V0Qm90dG9tKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vZmZzZXRCb3R0b20gPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2Nyb2xsU3J2OiBOelNjcm9sbFNlcnZpY2UsIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLCBASW5qZWN0KERPQ1VNRU5UKSBwcml2YXRlIGRvYzogYW55LCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgcHJpdmF0ZSB0aW1lb3V0O1xuICBwcml2YXRlIGV2ZW50cyA9IFtcbiAgICAncmVzaXplJyxcbiAgICAnc2Nyb2xsJyxcbiAgICAndG91Y2hzdGFydCcsXG4gICAgJ3RvdWNobW92ZScsXG4gICAgJ3RvdWNoZW5kJyxcbiAgICAncGFnZXNob3cnLFxuICAgICdsb2FkJ1xuICBdO1xuICBwcml2YXRlIGFmZml4U3R5bGU7XG4gIHByaXZhdGUgcGxhY2Vob2xkZXJTdHlsZTtcblxuICBAVmlld0NoaWxkKCd3cmFwJykgcHJpdmF0ZSB3cmFwOiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX3RhcmdldDogRWxlbWVudCB8IFdpbmRvdyA9IHdpbmRvdztcblxuICBwcml2YXRlIF9vZmZzZXRUb3A6IG51bWJlcjtcblxuICBwcml2YXRlIF9vZmZzZXRCb3R0b206IG51bWJlcjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuc2V0VGFyZ2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICAgIHRoaXMudXBkYXRlUG9zaXRpb24oe30pO1xuICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhckV2ZW50TGlzdGVuZXJzKCk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICh0aGlzLnVwZGF0ZVBvc2l0aW9uIGFzIGFueSkuY2FuY2VsKCk7XG4gIH1cblxuICBnZXRPZmZzZXQoZWxlbWVudDogRWxlbWVudCwgdGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCk6IHtcbiAgICB0b3A6IG51bWJlcjtcbiAgICBsZWZ0OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgfSB7XG4gICAgY29uc3QgZWxlbVJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLmdldFRhcmdldFJlY3QodGFyZ2V0KTtcblxuICAgIGNvbnN0IHNjcm9sbFRvcCA9IHRoaXMuc2Nyb2xsU3J2LmdldFNjcm9sbCh0YXJnZXQsIHRydWUpO1xuICAgIGNvbnN0IHNjcm9sbExlZnQgPSB0aGlzLnNjcm9sbFNydi5nZXRTY3JvbGwodGFyZ2V0LCBmYWxzZSk7XG5cbiAgICBjb25zdCBkb2NFbGVtID0gdGhpcy5kb2MuYm9keTtcbiAgICBjb25zdCBjbGllbnRUb3AgPSBkb2NFbGVtLmNsaWVudFRvcCB8fCAwO1xuICAgIGNvbnN0IGNsaWVudExlZnQgPSBkb2NFbGVtLmNsaWVudExlZnQgfHwgMDtcblxuICAgIHJldHVybiB7XG4gICAgICB0b3AgICA6IGVsZW1SZWN0LnRvcCAtIHRhcmdldFJlY3QudG9wICsgc2Nyb2xsVG9wIC0gY2xpZW50VG9wLFxuICAgICAgbGVmdCAgOiBlbGVtUmVjdC5sZWZ0IC0gdGFyZ2V0UmVjdC5sZWZ0ICsgc2Nyb2xsTGVmdCAtIGNsaWVudExlZnQsXG4gICAgICB3aWR0aCA6IGVsZW1SZWN0LndpZHRoLFxuICAgICAgaGVpZ2h0OiBlbGVtUmVjdC5oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRUYXJnZXRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyRXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKChldmVudE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgdGhpcy5fdGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnVwZGF0ZVBvc2l0aW9uLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XG4gICAgdGhpcy5ldmVudHMuZm9yRWFjaChldmVudE5hbWUgPT4ge1xuICAgICAgdGhpcy5fdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzLnVwZGF0ZVBvc2l0aW9uLCBmYWxzZSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRhcmdldFJlY3QodGFyZ2V0OiBFbGVtZW50IHwgV2luZG93IHwgbnVsbCk6IENsaWVudFJlY3Qge1xuICAgIHJldHVybiB0YXJnZXQgIT09IHdpbmRvdyA/XG4gICAgICAodGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6XG4gICAgICB7IHRvcDogMCwgbGVmdDogMCwgYm90dG9tOiAwIH0gYXMgQ2xpZW50UmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuU3R5bGUoYWZmaXhTdHlsZToge30pOiBzdHJpbmcge1xuICAgIGlmIChhZmZpeFN0eWxlID09IG51bGwpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFmZml4U3R5bGUpLm1hcChrZXkgPT4ge1xuICAgICAgY29uc3QgdmFsID0gYWZmaXhTdHlsZVsga2V5IF07XG4gICAgICByZXR1cm4gYCR7a2V5fToke3R5cGVvZiB2YWwgPT09ICdzdHJpbmcnID8gdmFsIDogdmFsICsgJ3B4J31gO1xuICAgIH0pLmpvaW4oJzsnKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0QWZmaXhTdHlsZShlOiBFdmVudCwgYWZmaXhTdHlsZToge30pOiB2b2lkIHtcbiAgICBjb25zdCBvcmlnaW5hbEFmZml4U3R5bGUgPSB0aGlzLmFmZml4U3R5bGU7XG4gICAgY29uc3QgaXNXaW5kb3cgPSB0aGlzLl90YXJnZXQgPT09IHdpbmRvdztcbiAgICBpZiAoZS50eXBlID09PSAnc2Nyb2xsJyAmJiBvcmlnaW5hbEFmZml4U3R5bGUgJiYgYWZmaXhTdHlsZSAmJiBpc1dpbmRvdykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoc2hhbGxvd0VxdWFsKG9yaWdpbmFsQWZmaXhTdHlsZSwgYWZmaXhTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBmaXhlZCA9ICEhYWZmaXhTdHlsZTtcbiAgICBjb25zdCB3cmFwRWwgPSB0aGlzLndyYXAubmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudDtcbiAgICB3cmFwRWwuc3R5bGUuY3NzVGV4dCA9IHRoaXMuZ2VuU3R5bGUoYWZmaXhTdHlsZSk7XG4gICAgdGhpcy5hZmZpeFN0eWxlID0gYWZmaXhTdHlsZTtcbiAgICBjb25zdCBjbHMgPSAnYW50LWFmZml4JztcbiAgICBpZiAoZml4ZWQpIHtcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBFbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgfVxuXG4gICAgaWYgKChhZmZpeFN0eWxlICYmICFvcmlnaW5hbEFmZml4U3R5bGUpIHx8ICghYWZmaXhTdHlsZSAmJiBvcmlnaW5hbEFmZml4U3R5bGUpKSB7XG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoZml4ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0UGxhY2Vob2xkZXJTdHlsZShwbGFjZWhvbGRlclN0eWxlOiB7fSk6IHZvaWQge1xuICAgIGNvbnN0IG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSA9IHRoaXMucGxhY2Vob2xkZXJTdHlsZTtcbiAgICBpZiAoc2hhbGxvd0VxdWFsKHBsYWNlaG9sZGVyU3R5bGUsIG9yaWdpbmFsUGxhY2Vob2xkZXJTdHlsZSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmNzc1RleHQgPSB0aGlzLmdlblN0eWxlKHBsYWNlaG9sZGVyU3R5bGUpO1xuICAgIHRoaXMucGxhY2Vob2xkZXJTdHlsZSA9IHBsYWNlaG9sZGVyU3R5bGU7XG4gIH1cblxuICBAdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lRGVjb3JhdG9yKClcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICB1cGRhdGVQb3NpdGlvbihlOiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCB0YXJnZXROb2RlID0gdGhpcy5fdGFyZ2V0O1xuICAgIC8vIEJhY2t3YXJkcyBzdXBwb3J0XG4gICAgbGV0IG9mZnNldFRvcCA9IHRoaXMubnpPZmZzZXRUb3A7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxTcnYuZ2V0U2Nyb2xsKHRhcmdldE5vZGUsIHRydWUpO1xuICAgIGNvbnN0IGFmZml4Tm9kZSA9IHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG4gICAgY29uc3QgZWxlbU9mZnNldCA9IHRoaXMuZ2V0T2Zmc2V0KGFmZml4Tm9kZSwgdGFyZ2V0Tm9kZSk7XG4gICAgY29uc3QgZWxlbVNpemUgPSB7XG4gICAgICB3aWR0aCA6IGFmZml4Tm9kZS5vZmZzZXRXaWR0aCxcbiAgICAgIGhlaWdodDogYWZmaXhOb2RlLm9mZnNldEhlaWdodFxuICAgIH07XG4gICAgY29uc3Qgb2Zmc2V0TW9kZSA9IHtcbiAgICAgIHRvcCAgIDogZmFsc2UsXG4gICAgICBib3R0b206IGZhbHNlXG4gICAgfTtcbiAgICAvLyBEZWZhdWx0IHRvIGBvZmZzZXRUb3A9MGAuXG4gICAgaWYgKHR5cGVvZiBvZmZzZXRUb3AgIT09ICdudW1iZXInICYmIHR5cGVvZiB0aGlzLl9vZmZzZXRCb3R0b20gIT09ICdudW1iZXInKSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHRydWU7XG4gICAgICBvZmZzZXRUb3AgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBvZmZzZXRNb2RlLnRvcCA9IHR5cGVvZiBvZmZzZXRUb3AgPT09ICdudW1iZXInO1xuICAgICAgb2Zmc2V0TW9kZS5ib3R0b20gPSB0eXBlb2YgdGhpcy5fb2Zmc2V0Qm90dG9tID09PSAnbnVtYmVyJztcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMuZ2V0VGFyZ2V0UmVjdCh0YXJnZXROb2RlKTtcbiAgICBjb25zdCB0YXJnZXRJbm5lckhlaWdodCA9XG4gICAgICAgICAgICAodGFyZ2V0Tm9kZSBhcyBXaW5kb3cpLmlubmVySGVpZ2h0IHx8ICh0YXJnZXROb2RlIGFzIEhUTUxFbGVtZW50KS5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKHNjcm9sbFRvcCA+IGVsZW1PZmZzZXQudG9wIC0gKG9mZnNldFRvcCBhcyBudW1iZXIpICYmIG9mZnNldE1vZGUudG9wKSB7XG4gICAgICBjb25zdCB3aWR0aCA9IGVsZW1PZmZzZXQud2lkdGg7XG4gICAgICBjb25zdCB0b3AgPSB0YXJnZXRSZWN0LnRvcCArIChvZmZzZXRUb3AgYXMgbnVtYmVyKTtcbiAgICAgIHRoaXMuc2V0QWZmaXhTdHlsZShlLCB7XG4gICAgICAgIHBvc2l0aW9uIDogJ2ZpeGVkJyxcbiAgICAgICAgdG9wLFxuICAgICAgICBsZWZ0ICAgICA6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgbWF4SGVpZ2h0OiBgY2FsYygxMDB2aCAtICR7dG9wfXB4KWAsXG4gICAgICAgIHdpZHRoXG4gICAgICB9KTtcbiAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXJTdHlsZSh7XG4gICAgICAgIHdpZHRoLFxuICAgICAgICBoZWlnaHQ6IGVsZW1TaXplLmhlaWdodFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChcbiAgICAgIHNjcm9sbFRvcCA8IGVsZW1PZmZzZXQudG9wICsgZWxlbVNpemUuaGVpZ2h0ICsgKHRoaXMuX29mZnNldEJvdHRvbSBhcyBudW1iZXIpIC0gdGFyZ2V0SW5uZXJIZWlnaHQgJiZcbiAgICAgIG9mZnNldE1vZGUuYm90dG9tXG4gICAgKSB7XG4gICAgICBjb25zdCB0YXJnZXRCb3R0b21PZmZldCA9IHRhcmdldE5vZGUgPT09IHdpbmRvdyA/IDAgOiAod2luZG93LmlubmVySGVpZ2h0IC0gdGFyZ2V0UmVjdC5ib3R0b20pO1xuICAgICAgY29uc3Qgd2lkdGggPSBlbGVtT2Zmc2V0LndpZHRoO1xuICAgICAgdGhpcy5zZXRBZmZpeFN0eWxlKGUsIHtcbiAgICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICAgIGJvdHRvbSAgOiB0YXJnZXRCb3R0b21PZmZldCArICh0aGlzLl9vZmZzZXRCb3R0b20gYXMgbnVtYmVyKSxcbiAgICAgICAgbGVmdCAgICA6IHRhcmdldFJlY3QubGVmdCArIGVsZW1PZmZzZXQubGVmdCxcbiAgICAgICAgd2lkdGhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5zZXRQbGFjZWhvbGRlclN0eWxlKHtcbiAgICAgICAgd2lkdGgsXG4gICAgICAgIGhlaWdodDogZWxlbU9mZnNldC5oZWlnaHRcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZS50eXBlID09PSAncmVzaXplJyAmJiB0aGlzLmFmZml4U3R5bGUgJiYgdGhpcy5hZmZpeFN0eWxlLnBvc2l0aW9uID09PSAnZml4ZWQnICYmIGFmZml4Tm9kZS5vZmZzZXRXaWR0aCkge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwgeyAuLi50aGlzLmFmZml4U3R5bGUsIHdpZHRoOiBhZmZpeE5vZGUub2Zmc2V0V2lkdGggfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNldEFmZml4U3R5bGUoZSwgbnVsbCk7XG4gICAgICB9XG4gICAgICB0aGlzLnNldFBsYWNlaG9sZGVyU3R5bGUobnVsbCk7XG4gICAgfVxuICB9XG59XG4iXX0=