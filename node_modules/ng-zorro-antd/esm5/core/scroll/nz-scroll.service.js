/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} t
 * @param {?} b
 * @param {?} c
 * @param {?} d
 * @return {?}
 */
function easeInOutCubic(t, b, c, d) {
    /** @type {?} */
    var cc = c - b;
    /** @type {?} */
    var tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
var NzScrollService = /** @class */ (function () {
    /* tslint:disable-next-line:no-any */
    function NzScrollService(doc) {
        this.doc = doc;
    }
    /** 设置 `el` 滚动条位置 */
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    NzScrollService.prototype.setScrollTop = /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    function (el, topValue) {
        if (topValue === void 0) { topValue = 0; }
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            (/** @type {?} */ (el)).scrollTop = topValue;
        }
    };
    /** 获取 `el` 相对于视窗距离 */
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    NzScrollService.prototype.getOffset = /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    function (el) {
        /** @type {?} */
        var ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        /** @type {?} */
        var rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            var doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    };
    /** 获取 `el` 滚动条位置 */
    // TODO: remove '| Window' as the fallback already happens here
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    NzScrollService.prototype.getScroll = /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    function (el, top) {
        if (top === void 0) { top = true; }
        /** @type {?} */
        var target = el ? el : window;
        /** @type {?} */
        var prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        var method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        var isWindow = target === window;
        /** @type {?} */
        var ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    };
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param containerEl 容器，默认 `window`
     * @param targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param easing 动作算法，默认：`easeInOutCubic`
     * @param callback 动画结束后回调
     */
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    NzScrollService.prototype.scrollTo = /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    function (containerEl, targetTopValue, easing, callback) {
        var _this = this;
        if (targetTopValue === void 0) { targetTopValue = 0; }
        /** @type {?} */
        var target = containerEl ? containerEl : window;
        /** @type {?} */
        var scrollTop = this.getScroll(target);
        /** @type {?} */
        var startTime = Date.now();
        /** @type {?} */
        var frameFunc = function () {
            /** @type {?} */
            var timestamp = Date.now();
            /** @type {?} */
            var time = timestamp - startTime;
            _this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    };
    NzScrollService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    NzScrollService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return NzScrollService;
}());
export { NzScrollService };
function NzScrollService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzScrollService.prototype.doc;
}
/**
 * @param {?} doc
 * @param {?} scrollService
 * @return {?}
 */
export function SCROLL_SERVICE_PROVIDER_FACTORY(doc, scrollService) {
    return scrollService || new NzScrollService(doc);
}
/** @type {?} */
export var SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9zY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7QUFJN0QsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUzs7SUFDaEUsSUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbEM7U0FBTTtRQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9DO0NBQ0Y7O0lBTUMscUNBQXFDO0lBQ3JDLHlCQUE4QixHQUFRO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2hCO0lBRUQsb0JBQW9COzs7Ozs7O0lBQ3BCLHNDQUFZOzs7Ozs7SUFBWixVQUFhLEVBQW9CLEVBQUUsUUFBb0I7UUFBcEIseUJBQUEsRUFBQSxZQUFvQjtRQUNyRCxJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFD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U0FBUyxDQUFDO1lBQ25DLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxJQUFJLGNBQWMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDNUYsSUFBSSxJQUFJLEdBQUcsR0FBRyxFQUFFO2dCQUNkLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLFFBQVE7b0JBQUUsUUFBUSxFQUFFLENBQUM7YUFDMUI7U0FDRixDQUFDO1FBQ0YsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQ3pCOztnQkFsRkYsVUFBVTs7OztnREFLSSxNQUFNLFNBQUMsUUFBUTs7MEJBdEI5Qjs7U0FrQmEsZUFBZTs7Ozs7Ozs7OztBQXFGNUIsTUFBTSxVQUFVLCtCQUErQixDQUFDLEdBQWEsRUFBRSxhQUE4QjtJQUMzRixPQUFPLGFBQWEsSUFBSSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNsRDs7QUFFRCxXQUFhLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBSyxlQUFlO0lBQzNCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFRLENBQUUsUUFBUSxFQUFFLENBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFFO0NBQzlFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuXG5leHBvcnQgdHlwZSBFYXN5aW5nRm4gPSAodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSA9PiBudW1iZXI7XG5cbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGNjID0gYyAtIGI7XG4gIGxldCB0dCA9IHQgLyAoZCAvIDIpO1xuICBpZiAodHQgPCAxKSB7XG4gICAgcmV0dXJuIGNjIC8gMiAqIHR0ICogdHQgKiB0dCArIGI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNjIC8gMiAqICgodHQgLT0gMikgKiB0dCAqIHR0ICsgMikgKyBiO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelNjcm9sbFNlcnZpY2Uge1xuICBwcml2YXRlIGRvYzogRG9jdW1lbnQ7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSkge1xuICAgIHRoaXMuZG9jID0gZG9jO1xuICB9XG5cbiAgLyoqIOiuvue9riBgZWxgIOa7muWKqOadoeS9jee9riAqL1xuICBzZXRTY3JvbGxUb3AoZWw6IEVsZW1lbnQgfCBXaW5kb3csIHRvcFZhbHVlOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKGVsID09PSB3aW5kb3cpIHtcbiAgICAgIHRoaXMuZG9jLmJvZHkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIChlbCBhcyBFbGVtZW50KS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+WIGBlbGAg55u45a+55LqO6KeG56qX6Led56a7ICovXG4gIGdldE9mZnNldChlbDogRWxlbWVudCk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCByZXQgPSB7XG4gICAgICB0b3AgOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gICAgaWYgKCFlbCB8fCAhZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHJldHVybiByZXQ7XG5cbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcbiAgICAgIGNvbnN0IGRvYyA9IGVsLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wIC0gZG9jLmNsaWVudFRvcDtcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0IC0gZG9jLmNsaWVudExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcDtcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKiog6I635Y+WIGBlbGAg5rua5Yqo5p2h5L2N572uICovXG4gIC8vIFRPRE86IHJlbW92ZSAnfCBXaW5kb3cnIGFzIHRoZSBmYWxsYmFjayBhbHJlYWR5IGhhcHBlbnMgaGVyZVxuICBnZXRTY3JvbGwoZWw/OiBFbGVtZW50IHwgV2luZG93LCB0b3A6IGJvb2xlYW4gPSB0cnVlKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlbCA/IGVsIDogd2luZG93O1xuICAgIGNvbnN0IHByb3AgPSB0b3AgPyAncGFnZVlPZmZzZXQnIDogJ3BhZ2VYT2Zmc2V0JztcbiAgICBjb25zdCBtZXRob2QgPSB0b3AgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRhcmdldCA9PT0gd2luZG93O1xuICAgIGxldCByZXQgPSBpc1dpbmRvdyA/IHRhcmdldFsgcHJvcCBdIDogdGFyZ2V0WyBtZXRob2QgXTtcbiAgICBpZiAoaXNXaW5kb3cgJiYgdHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldCA9IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudFsgbWV0aG9kIF07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5L2/55So5Yqo55S75b2i5byP5bCGIGBlbGAg5rua5Yqo6Iez5p+Q5L2N572uXG4gICAqXG4gICAqIEBwYXJhbSBjb250YWluZXJFbCDlrrnlmajvvIzpu5jorqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIHRhcmdldFRvcFZhbHVlIOa7muWKqOiHs+ebruaghyBgdG9wYCDlgLzvvIzpu5jorqTvvJow77yM55u45b2T5LqO6aG26YOoXG4gICAqIEBwYXJhbSBlYXNpbmcg5Yqo5L2c566X5rOV77yM6buY6K6k77yaYGVhc2VJbk91dEN1YmljYFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Yqo55S757uT5p2f5ZCO5Zue6LCDXG4gICAqL1xuICBzY3JvbGxUbyhcbiAgICBjb250YWluZXJFbDogRWxlbWVudCB8IFdpbmRvdyxcbiAgICB0YXJnZXRUb3BWYWx1ZTogbnVtYmVyID0gMCxcbiAgICBlYXNpbmc/OiBFYXN5aW5nRm4sXG4gICAgY2FsbGJhY2s/OiAoKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGNvbnRhaW5lckVsID8gY29udGFpbmVyRWwgOiB3aW5kb3c7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGwodGFyZ2V0KTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGZyYW1lRnVuYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuICAgICAgdGhpcy5zZXRTY3JvbGxUb3AodGFyZ2V0LCAoZWFzaW5nIHx8IGVhc2VJbk91dEN1YmljKSh0aW1lLCBzY3JvbGxUb3AsIHRhcmdldFRvcFZhbHVlLCA0NTApKTtcbiAgICAgIGlmICh0aW1lIDwgNDUwKSB7XG4gICAgICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCBzY3JvbGxTZXJ2aWNlOiBOelNjcm9sbFNlcnZpY2UpOiBOelNjcm9sbFNlcnZpY2Uge1xuICByZXR1cm4gc2Nyb2xsU2VydmljZSB8fCBuZXcgTnpTY3JvbGxTZXJ2aWNlKGRvYyk7XG59XG5cbmV4cG9ydCBjb25zdCBTQ1JPTExfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUgICA6IE56U2Nyb2xsU2VydmljZSxcbiAgdXNlRmFjdG9yeTogU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwcyAgICAgIDogWyBET0NVTUVOVCwgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE56U2Nyb2xsU2VydmljZSBdIF1cbn07XG4iXX0=