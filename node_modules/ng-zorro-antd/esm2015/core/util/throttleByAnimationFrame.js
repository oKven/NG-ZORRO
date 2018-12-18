/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { cancelRequestAnimationFrame, reqAnimFrame } from '../polyfill/request-animation';
/**
 * @param {?} fn
 * @return {?}
 */
export default function throttleByAnimationFrame(fn) {
    /** @type {?} */
    let requestId;
    /** @type {?} */
    const later = (args) => () => {
        requestId = null;
        fn(...args);
    };
    /** @type {?} */
    const throttled = (...args) => {
        if (requestId == null) {
            requestId = reqAnimFrame(later(args));
        }
    };
    // tslint:disable-next-line:no-non-null-assertion
    (/** @type {?} */ (throttled)).cancel = () => cancelRequestAnimationFrame(/** @type {?} */ ((requestId)));
    return throttled;
}
/**
 * @return {?}
 */
export function throttleByAnimationFrameDecorator() {
    return function (target, key, descriptor) {
        /** @type {?} */
        const fn = descriptor.value;
        /** @type {?} */
        let definingProperty = false;
        return {
            configurable: true,
            /**
             * @return {?}
             */
            get() {
                if (definingProperty || this === target.prototype || this.hasOwnProperty(key)) {
                    return fn;
                }
                /** @type {?} */
                const boundFn = throttleByAnimationFrame(fn.bind(this));
                definingProperty = true;
                Object.defineProperty(this, key, {
                    value: boundFn,
                    configurable: true,
                    writable: true
                });
                definingProperty = false;
                return boundFn;
            }
        };
    };
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNvcmUvdXRpbC90aHJvdHRsZUJ5QW5pbWF0aW9uRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxZQUFZLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQzs7Ozs7QUFFMUYsTUFBTSxDQUFDLE9BQU8sVUFBVSx3QkFBd0IsQ0FBQyxFQUFPOztJQUN0RCxJQUFJLFNBQVMsQ0FBZ0I7O0lBRTdCLE1BQU0sS0FBSyxHQUFHLENBQUMsSUFBVyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUU7UUFDbEMsU0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztLQUNiLENBQUM7O0lBRUYsTUFBTSxTQUFTLEdBQUcsQ0FBQyxHQUFHLElBQVcsRUFBRSxFQUFFO1FBQ25DLElBQUksU0FBUyxJQUFJLElBQUksRUFBRTtZQUNyQixTQUFTLEdBQUcsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO0tBQ0YsQ0FBQzs7SUFHRixtQkFBQyxTQUFnQixFQUFDLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLDJCQUEyQixvQkFBQyxTQUFTLEdBQUUsQ0FBQztJQUUxRSxPQUFPLFNBQVMsQ0FBQztDQUNsQjs7OztBQUVELE1BQU0sVUFBVSxpQ0FBaUM7SUFDL0MsT0FBTyxVQUFVLE1BQVcsRUFBRSxHQUFXLEVBQUUsVUFBZTs7UUFDeEQsTUFBTSxFQUFFLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQzs7UUFDNUIsSUFBSSxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDN0IsT0FBTztZQUNMLFlBQVksRUFBRSxJQUFJOzs7O1lBQ2xCLEdBQUc7Z0JBQ0QsSUFBSSxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssTUFBTSxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM3RSxPQUFPLEVBQUUsQ0FBQztpQkFDWDs7Z0JBRUQsTUFBTSxPQUFPLEdBQUcsd0JBQXdCLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU0sQ0FBQyxjQUFjLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtvQkFDL0IsS0FBSyxFQUFTLE9BQU87b0JBQ3JCLFlBQVksRUFBRSxJQUFJO29CQUNsQixRQUFRLEVBQU0sSUFBSTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILGdCQUFnQixHQUFHLEtBQUssQ0FBQztnQkFDekIsT0FBTyxPQUFPLENBQUM7YUFDaEI7U0FDRixDQUFDO0tBQ0gsQ0FBQztDQUNIIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXG5pbXBvcnQgeyBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUsIHJlcUFuaW1GcmFtZSB9IGZyb20gJy4uL3BvbHlmaWxsL3JlcXVlc3QtYW5pbWF0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGhyb3R0bGVCeUFuaW1hdGlvbkZyYW1lKGZuOiBhbnkpIHtcbiAgbGV0IHJlcXVlc3RJZDogbnVtYmVyIHwgbnVsbDtcblxuICBjb25zdCBsYXRlciA9IChhcmdzOiBhbnlbXSkgPT4gKCkgPT4ge1xuICAgIHJlcXVlc3RJZCA9IG51bGw7XG4gICAgZm4oLi4uYXJncyk7XG4gIH07XG5cbiAgY29uc3QgdGhyb3R0bGVkID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKHJlcXVlc3RJZCA9PSBudWxsKSB7XG4gICAgICByZXF1ZXN0SWQgPSByZXFBbmltRnJhbWUobGF0ZXIoYXJncykpO1xuICAgIH1cbiAgfTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICh0aHJvdHRsZWQgYXMgYW55KS5jYW5jZWwgPSAoKSA9PiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVxdWVzdElkISk7XG5cbiAgcmV0dXJuIHRocm90dGxlZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRocm90dGxlQnlBbmltYXRpb25GcmFtZURlY29yYXRvcigpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQ6IGFueSwga2V5OiBzdHJpbmcsIGRlc2NyaXB0b3I6IGFueSkge1xuICAgIGNvbnN0IGZuID0gZGVzY3JpcHRvci52YWx1ZTtcbiAgICBsZXQgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgIHJldHVybiB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQoKSB7XG4gICAgICAgIGlmIChkZWZpbmluZ1Byb3BlcnR5IHx8IHRoaXMgPT09IHRhcmdldC5wcm90b3R5cGUgfHwgdGhpcy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmV0dXJuIGZuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm91bmRGbiA9IHRocm90dGxlQnlBbmltYXRpb25GcmFtZShmbi5iaW5kKHRoaXMpKTtcbiAgICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IHRydWU7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBrZXksIHtcbiAgICAgICAgICB2YWx1ZSAgICAgICA6IGJvdW5kRm4sXG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlICAgIDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgZGVmaW5pbmdQcm9wZXJ0eSA9IGZhbHNlO1xuICAgICAgICByZXR1cm4gYm91bmRGbjtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuIl19