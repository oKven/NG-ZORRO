/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
const availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    let lastTime = 0;
    return function (callback) {
        /** @type {?} */
        const currTime = new Date().getTime();
        /** @type {?} */
        const timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        const id = window.setTimeout(() => {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}
/**
 * @return {?}
 */
function getRequestAnimationFrame() {
    if (typeof window === 'undefined') {
        return () => null;
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    const prefix = availablePrefixs.filter(key => `${key}RequestAnimationFrame` in window)[0];
    return prefix
        ? window[`${prefix}RequestAnimationFrame`]
        : requestAnimationFramePolyfill();
}
/**
 * @param {?} id
 * @return {?}
 */
export function cancelRequestAnimationFrame(id) {
    if (typeof window === 'undefined') {
        return null;
    }
    if (window.cancelAnimationFrame) {
        return window.cancelAnimationFrame(id);
    }
    /** @type {?} */
    const prefix = availablePrefixs.filter(key => `${key}CancelAnimationFrame` in window || `${key}CancelRequestAnimationFrame` in window)[0];
    return prefix ?
        ((/** @type {?} */ (window))[`${prefix}CancelAnimationFrame`] ||
            (/** @type {?} */ (window))[`${prefix}CancelRequestAnimationFrame`]).call(this, id) : clearTimeout(id);
}
/** @type {?} */
export const reqAnimFrame = getRequestAnimationFrame();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLE1BQU0sZ0JBQWdCLEdBQUcsQ0FBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxDQUFDOzs7O0FBRW5ELFNBQVMsNkJBQTZCOztJQUNwQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxVQUFVLFFBQThCOztRQUM3QyxNQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQzs7UUFDM0QsTUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDaEMsUUFBUSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsQ0FBQztTQUNqQyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1FBQ2YsUUFBUSxHQUFHLFFBQVEsR0FBRyxVQUFVLENBQUM7UUFDakMsT0FBTyxFQUFFLENBQUM7S0FDWCxDQUFDO0NBQ0g7Ozs7QUFFRCxTQUFTLHdCQUF3QjtJQUMvQixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtRQUNqQyxPQUFPLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztLQUNuQjtJQUNELElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFOztRQUVoQyxPQUFPLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7S0FDbEQ7O0lBRUQsTUFBTSxNQUFNLEdBQUcsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxHQUFHLHVCQUF1QixJQUFJLE1BQU0sQ0FBQyxDQUFFLENBQUMsQ0FBRSxDQUFDO0lBRTVGLE9BQU8sTUFBTTtRQUNYLENBQUMsQ0FBQyxNQUFNLENBQUUsR0FBRyxNQUFNLHVCQUF1QixDQUFFO1FBQzVDLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7SUFDRCxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FDM0MsR0FBRyxHQUFHLHNCQUFzQixJQUFJLE1BQU0sSUFBSSxHQUFHLEdBQUcsNkJBQTZCLElBQUksTUFBTSxDQUN4RixDQUFFLENBQUMsQ0FBRSxDQUFDO0lBRVAsT0FBTyxNQUFNLENBQUMsQ0FBQztRQUNiLENBQ0UsbUJBQUMsTUFBYSxFQUFDLENBQUUsR0FBRyxNQUFNLHNCQUFzQixDQUFFO1lBQ2xELG1CQUFDLE1BQWEsRUFBQyxDQUFFLEdBQUcsTUFBTSw2QkFBNkIsQ0FBRSxDQUMxRCxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQztDQUN2Qzs7QUFFRCxhQUFhLFlBQVksR0FBRyx3QkFBd0IsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdHNsaW50OmRpc2FibGU6bm8tYW55IHR5cGVkZWYgbm8taW52YWxpZC10aGlzXG5jb25zdCBhdmFpbGFibGVQcmVmaXhzID0gWyAnbW96JywgJ21zJywgJ3dlYmtpdCcgXTtcblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTogdHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSB7XG4gIGxldCBsYXN0VGltZSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbiAoY2FsbGJhY2s6IEZyYW1lUmVxdWVzdENhbGxiYWNrKTogbnVtYmVyIHtcbiAgICBjb25zdCBjdXJyVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIGNvbnN0IHRpbWVUb0NhbGwgPSBNYXRoLm1heCgwLCAxNiAtIChjdXJyVGltZSAtIGxhc3RUaW1lKSk7XG4gICAgY29uc3QgaWQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjYWxsYmFjayhjdXJyVGltZSArIHRpbWVUb0NhbGwpO1xuICAgIH0sIHRpbWVUb0NhbGwpO1xuICAgIGxhc3RUaW1lID0gY3VyclRpbWUgKyB0aW1lVG9DYWxsO1xuICAgIHJldHVybiBpZDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gKCkgPT4gbnVsbDtcbiAgfVxuICBpZiAod2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkge1xuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92dWVqcy92dWUvaXNzdWVzLzQ0NjVcbiAgICByZXR1cm4gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZS5iaW5kKHdpbmRvdyk7XG4gIH1cblxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhzLmZpbHRlcihrZXkgPT4gYCR7a2V5fVJlcXVlc3RBbmltYXRpb25GcmFtZWAgaW4gd2luZG93KVsgMCBdO1xuXG4gIHJldHVybiBwcmVmaXhcbiAgICA/IHdpbmRvd1sgYCR7cHJlZml4fVJlcXVlc3RBbmltYXRpb25GcmFtZWAgXVxuICAgIDogcmVxdWVzdEFuaW1hdGlvbkZyYW1lUG9seWZpbGwoKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZShpZDogbnVtYmVyKTogYW55IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgaWYgKHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgIHJldHVybiB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUoaWQpO1xuICB9XG4gIGNvbnN0IHByZWZpeCA9IGF2YWlsYWJsZVByZWZpeHMuZmlsdGVyKGtleSA9PlxuICAgIGAke2tleX1DYW5jZWxBbmltYXRpb25GcmFtZWAgaW4gd2luZG93IHx8IGAke2tleX1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvd1xuICApWyAwIF07XG5cbiAgcmV0dXJuIHByZWZpeCA/XG4gICAgKFxuICAgICAgKHdpbmRvdyBhcyBhbnkpWyBgJHtwcmVmaXh9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgIF0gfHxcbiAgICAgICh3aW5kb3cgYXMgYW55KVsgYCR7cHJlZml4fUNhbmNlbFJlcXVlc3RBbmltYXRpb25GcmFtZWAgXVxuICAgICkuY2FsbCh0aGlzLCBpZCkgOiBjbGVhclRpbWVvdXQoaWQpO1xufVxuXG5leHBvcnQgY29uc3QgcmVxQW5pbUZyYW1lID0gZ2V0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XG4iXX0=