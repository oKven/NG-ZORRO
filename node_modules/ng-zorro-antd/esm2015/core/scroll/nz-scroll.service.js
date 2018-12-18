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
    const cc = c - b;
    /** @type {?} */
    let tt = t / (d / 2);
    if (tt < 1) {
        return cc / 2 * tt * tt * tt + b;
    }
    else {
        return cc / 2 * ((tt -= 2) * tt * tt + 2) + b;
    }
}
export class NzScrollService {
    /**
     * @param {?} doc
     */
    constructor(doc) {
        this.doc = doc;
    }
    /**
     * 设置 `el` 滚动条位置
     * @param {?} el
     * @param {?=} topValue
     * @return {?}
     */
    setScrollTop(el, topValue = 0) {
        if (el === window) {
            this.doc.body.scrollTop = topValue;
            this.doc.documentElement.scrollTop = topValue;
        }
        else {
            (/** @type {?} */ (el)).scrollTop = topValue;
        }
    }
    /**
     * 获取 `el` 相对于视窗距离
     * @param {?} el
     * @return {?}
     */
    getOffset(el) {
        /** @type {?} */
        const ret = {
            top: 0,
            left: 0
        };
        if (!el || !el.getClientRects().length)
            return ret;
        /** @type {?} */
        const rect = el.getBoundingClientRect();
        if (rect.width || rect.height) {
            /** @type {?} */
            const doc = el.ownerDocument.documentElement;
            ret.top = rect.top - doc.clientTop;
            ret.left = rect.left - doc.clientLeft;
        }
        else {
            ret.top = rect.top;
            ret.left = rect.left;
        }
        return ret;
    }
    /**
     * 获取 `el` 滚动条位置
     * @param {?=} el
     * @param {?=} top
     * @return {?}
     */
    getScroll(el, top = true) {
        /** @type {?} */
        const target = el ? el : window;
        /** @type {?} */
        const prop = top ? 'pageYOffset' : 'pageXOffset';
        /** @type {?} */
        const method = top ? 'scrollTop' : 'scrollLeft';
        /** @type {?} */
        const isWindow = target === window;
        /** @type {?} */
        let ret = isWindow ? target[prop] : target[method];
        if (isWindow && typeof ret !== 'number') {
            ret = this.doc.documentElement[method];
        }
        return ret;
    }
    /**
     * 使用动画形式将 `el` 滚动至某位置
     *
     * @param {?} containerEl 容器，默认 `window`
     * @param {?=} targetTopValue 滚动至目标 `top` 值，默认：0，相当于顶部
     * @param {?=} easing 动作算法，默认：`easeInOutCubic`
     * @param {?=} callback 动画结束后回调
     * @return {?}
     */
    scrollTo(containerEl, targetTopValue = 0, easing, callback) {
        /** @type {?} */
        const target = containerEl ? containerEl : window;
        /** @type {?} */
        const scrollTop = this.getScroll(target);
        /** @type {?} */
        const startTime = Date.now();
        /** @type {?} */
        const frameFunc = () => {
            /** @type {?} */
            const timestamp = Date.now();
            /** @type {?} */
            const time = timestamp - startTime;
            this.setScrollTop(target, (easing || easeInOutCubic)(time, scrollTop, targetTopValue, 450));
            if (time < 450) {
                reqAnimFrame(frameFunc);
            }
            else {
                if (callback)
                    callback();
            }
        };
        reqAnimFrame(frameFunc);
    }
}
NzScrollService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
NzScrollService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
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
export const SCROLL_SERVICE_PROVIDER = {
    provide: NzScrollService,
    useFactory: SCROLL_SERVICE_PROVIDER_FACTORY,
    deps: [DOCUMENT, [new Optional(), new SkipSelf(), NzScrollService]]
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9zY3JvbGwvbnotc2Nyb2xsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQVksUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWpGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7Ozs7QUFJN0QsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUzs7SUFDaEUsTUFBTSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7SUFDakIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3JCLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRTtRQUNWLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7S0FDbEM7U0FBTTtRQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQy9DO0NBQ0Y7QUFHRCxNQUFNLE9BQU8sZUFBZTs7OztJQUkxQixZQUE4QixHQUFRO1FBQ3BDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO0tBQ2hCOzs7Ozs7O0lBR0QsWUFBWSxDQUFDLEVBQW9CLEVBQUUsV0FBbUIsQ0FBQztRQUNyRCxJQUFJLEVBQUUsS0FBSyxNQUFNLEVBQUU7WUFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMs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WUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksUUFBUTtvQkFBRSxRQUFRLEVBQUUsQ0FBQzthQUMxQjtTQUNGLENBQUM7UUFDRixZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7S0FDekI7OztZQWxGRixVQUFVOzs7OzRDQUtJLE1BQU0sU0FBQyxRQUFROzs7Ozs7Ozs7OztBQWlGOUIsTUFBTSxVQUFVLCtCQUErQixDQUFDLEdBQWEsRUFBRSxhQUE4QjtJQUMzRixPQUFPLGFBQWEsSUFBSSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQztDQUNsRDs7QUFFRCxhQUFhLHVCQUF1QixHQUFhO0lBQy9DLE9BQU8sRUFBSyxlQUFlO0lBQzNCLFVBQVUsRUFBRSwrQkFBK0I7SUFDM0MsSUFBSSxFQUFRLENBQUUsUUFBUSxFQUFFLENBQUUsSUFBSSxRQUFRLEVBQUUsRUFBRSxJQUFJLFFBQVEsRUFBRSxFQUFFLGVBQWUsQ0FBRSxDQUFFO0NBQzlFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9wdGlvbmFsLCBQcm92aWRlciwgU2tpcFNlbGYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgcmVxQW5pbUZyYW1lIH0gZnJvbSAnLi4vcG9seWZpbGwvcmVxdWVzdC1hbmltYXRpb24nO1xuXG5leHBvcnQgdHlwZSBFYXN5aW5nRm4gPSAodDogbnVtYmVyLCBiOiBudW1iZXIsIGM6IG51bWJlciwgZDogbnVtYmVyKSA9PiBudW1iZXI7XG5cbmZ1bmN0aW9uIGVhc2VJbk91dEN1YmljKHQ6IG51bWJlciwgYjogbnVtYmVyLCBjOiBudW1iZXIsIGQ6IG51bWJlcik6IG51bWJlciB7XG4gIGNvbnN0IGNjID0gYyAtIGI7XG4gIGxldCB0dCA9IHQgLyAoZCAvIDIpO1xuICBpZiAodHQgPCAxKSB7XG4gICAgcmV0dXJuIGNjIC8gMiAqIHR0ICogdHQgKiB0dCArIGI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNjIC8gMiAqICgodHQgLT0gMikgKiB0dCAqIHR0ICsgMikgKyBiO1xuICB9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOelNjcm9sbFNlcnZpY2Uge1xuICBwcml2YXRlIGRvYzogRG9jdW1lbnQ7XG5cbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3RvcihASW5qZWN0KERPQ1VNRU5UKSBkb2M6IGFueSkge1xuICAgIHRoaXMuZG9jID0gZG9jO1xuICB9XG5cbiAgLyoqIOiuvue9riBgZWxgIOa7muWKqOadoeS9jee9riAqL1xuICBzZXRTY3JvbGxUb3AoZWw6IEVsZW1lbnQgfCBXaW5kb3csIHRvcFZhbHVlOiBudW1iZXIgPSAwKTogdm9pZCB7XG4gICAgaWYgKGVsID09PSB3aW5kb3cpIHtcbiAgICAgIHRoaXMuZG9jLmJvZHkuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgICB0aGlzLmRvYy5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wID0gdG9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIChlbCBhcyBFbGVtZW50KS5zY3JvbGxUb3AgPSB0b3BWYWx1ZTtcbiAgICB9XG4gIH1cblxuICAvKiog6I635Y+WIGBlbGAg55u45a+55LqO6KeG56qX6Led56a7ICovXG4gIGdldE9mZnNldChlbDogRWxlbWVudCk6IHsgdG9wOiBudW1iZXIsIGxlZnQ6IG51bWJlciB9IHtcbiAgICBjb25zdCByZXQgPSB7XG4gICAgICB0b3AgOiAwLFxuICAgICAgbGVmdDogMFxuICAgIH07XG4gICAgaWYgKCFlbCB8fCAhZWwuZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpIHJldHVybiByZXQ7XG5cbiAgICBjb25zdCByZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKHJlY3Qud2lkdGggfHwgcmVjdC5oZWlnaHQpIHtcbiAgICAgIGNvbnN0IGRvYyA9IGVsLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuICAgICAgcmV0LnRvcCA9IHJlY3QudG9wIC0gZG9jLmNsaWVudFRvcDtcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0IC0gZG9jLmNsaWVudExlZnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldC50b3AgPSByZWN0LnRvcDtcbiAgICAgIHJldC5sZWZ0ID0gcmVjdC5sZWZ0O1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKiog6I635Y+WIGBlbGAg5rua5Yqo5p2h5L2N572uICovXG4gIC8vIFRPRE86IHJlbW92ZSAnfCBXaW5kb3cnIGFzIHRoZSBmYWxsYmFjayBhbHJlYWR5IGhhcHBlbnMgaGVyZVxuICBnZXRTY3JvbGwoZWw/OiBFbGVtZW50IHwgV2luZG93LCB0b3A6IGJvb2xlYW4gPSB0cnVlKTogbnVtYmVyIHtcbiAgICBjb25zdCB0YXJnZXQgPSBlbCA/IGVsIDogd2luZG93O1xuICAgIGNvbnN0IHByb3AgPSB0b3AgPyAncGFnZVlPZmZzZXQnIDogJ3BhZ2VYT2Zmc2V0JztcbiAgICBjb25zdCBtZXRob2QgPSB0b3AgPyAnc2Nyb2xsVG9wJyA6ICdzY3JvbGxMZWZ0JztcbiAgICBjb25zdCBpc1dpbmRvdyA9IHRhcmdldCA9PT0gd2luZG93O1xuICAgIGxldCByZXQgPSBpc1dpbmRvdyA/IHRhcmdldFsgcHJvcCBdIDogdGFyZ2V0WyBtZXRob2QgXTtcbiAgICBpZiAoaXNXaW5kb3cgJiYgdHlwZW9mIHJldCAhPT0gJ251bWJlcicpIHtcbiAgICAgIHJldCA9IHRoaXMuZG9jLmRvY3VtZW50RWxlbWVudFsgbWV0aG9kIF07XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICog5L2/55So5Yqo55S75b2i5byP5bCGIGBlbGAg5rua5Yqo6Iez5p+Q5L2N572uXG4gICAqXG4gICAqIEBwYXJhbSBjb250YWluZXJFbCDlrrnlmajvvIzpu5jorqQgYHdpbmRvd2BcbiAgICogQHBhcmFtIHRhcmdldFRvcFZhbHVlIOa7muWKqOiHs+ebruaghyBgdG9wYCDlgLzvvIzpu5jorqTvvJow77yM55u45b2T5LqO6aG26YOoXG4gICAqIEBwYXJhbSBlYXNpbmcg5Yqo5L2c566X5rOV77yM6buY6K6k77yaYGVhc2VJbk91dEN1YmljYFxuICAgKiBAcGFyYW0gY2FsbGJhY2sg5Yqo55S757uT5p2f5ZCO5Zue6LCDXG4gICAqL1xuICBzY3JvbGxUbyhcbiAgICBjb250YWluZXJFbDogRWxlbWVudCB8IFdpbmRvdyxcbiAgICB0YXJnZXRUb3BWYWx1ZTogbnVtYmVyID0gMCxcbiAgICBlYXNpbmc/OiBFYXN5aW5nRm4sXG4gICAgY2FsbGJhY2s/OiAoKSA9PiB2b2lkXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IHRhcmdldCA9IGNvbnRhaW5lckVsID8gY29udGFpbmVyRWwgOiB3aW5kb3c7XG4gICAgY29uc3Qgc2Nyb2xsVG9wID0gdGhpcy5nZXRTY3JvbGwodGFyZ2V0KTtcbiAgICBjb25zdCBzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGNvbnN0IGZyYW1lRnVuYyA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICBjb25zdCB0aW1lID0gdGltZXN0YW1wIC0gc3RhcnRUaW1lO1xuICAgICAgdGhpcy5zZXRTY3JvbGxUb3AodGFyZ2V0LCAoZWFzaW5nIHx8IGVhc2VJbk91dEN1YmljKSh0aW1lLCBzY3JvbGxUb3AsIHRhcmdldFRvcFZhbHVlLCA0NTApKTtcbiAgICAgIGlmICh0aW1lIDwgNDUwKSB7XG4gICAgICAgIHJlcUFuaW1GcmFtZShmcmFtZUZ1bmMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH07XG4gICAgcmVxQW5pbUZyYW1lKGZyYW1lRnVuYyk7XG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWShkb2M6IERvY3VtZW50LCBzY3JvbGxTZXJ2aWNlOiBOelNjcm9sbFNlcnZpY2UpOiBOelNjcm9sbFNlcnZpY2Uge1xuICByZXR1cm4gc2Nyb2xsU2VydmljZSB8fCBuZXcgTnpTY3JvbGxTZXJ2aWNlKGRvYyk7XG59XG5cbmV4cG9ydCBjb25zdCBTQ1JPTExfU0VSVklDRV9QUk9WSURFUjogUHJvdmlkZXIgPSB7XG4gIHByb3ZpZGUgICA6IE56U2Nyb2xsU2VydmljZSxcbiAgdXNlRmFjdG9yeTogU0NST0xMX1NFUlZJQ0VfUFJPVklERVJfRkFDVE9SWSxcbiAgZGVwcyAgICAgIDogWyBET0NVTUVOVCwgWyBuZXcgT3B0aW9uYWwoKSwgbmV3IFNraXBTZWxmKCksIE56U2Nyb2xsU2VydmljZSBdIF1cbn07XG4iXX0=