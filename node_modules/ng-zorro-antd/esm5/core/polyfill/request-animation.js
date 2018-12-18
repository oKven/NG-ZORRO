/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @type {?} */
var availablePrefixs = ['moz', 'ms', 'webkit'];
/**
 * @return {?}
 */
function requestAnimationFramePolyfill() {
    /** @type {?} */
    var lastTime = 0;
    return function (callback) {
        /** @type {?} */
        var currTime = new Date().getTime();
        /** @type {?} */
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        /** @type {?} */
        var id = window.setTimeout(function () {
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
        return function () { return null; };
    }
    if (window.requestAnimationFrame) {
        // https://github.com/vuejs/vue/issues/4465
        return window.requestAnimationFrame.bind(window);
    }
    /** @type {?} */
    var prefix = availablePrefixs.filter(function (key) { return key + "RequestAnimationFrame" in window; })[0];
    return prefix
        ? window[prefix + "RequestAnimationFrame"]
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
    var prefix = availablePrefixs.filter(function (key) {
        return key + "CancelAnimationFrame" in window || key + "CancelRequestAnimationFrame" in window;
    })[0];
    return prefix ?
        ((/** @type {?} */ (window))[prefix + "CancelAnimationFrame"] ||
            (/** @type {?} */ (window))[prefix + "CancelRequestAnimationFrame"]).call(this, id) : clearTimeout(id);
}
/** @type {?} */
export var reqAnimFrame = getRequestAnimationFrame();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVxdWVzdC1hbmltYXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9wb2x5ZmlsbC9yZXF1ZXN0LWFuaW1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUNBLElBQU0sZ0JBQWdCLEdBQUcsQ0FBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLFFBQVEsQ0FBRSxDQUFDOzs7O0FBRW5ELFNBQVMsNkJBQTZCOztJQUNwQyxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsT0FBTyxVQUFVLFFBQThCOztRQUM3QyxJQUFNLFFBQVEsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOztRQUN0QyxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQzs7UUFDM0QsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQztZQUMzQixRQUFRLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQyxDQUFDO1NBQ2pDLEVBQUUsVUFBVSxDQUFDLENBQUM7UUFDZixRQUFRLEdBQUcsUUFBUSxHQUFHLFVBQVUsQ0FBQztRQUNqQyxPQUFPLEVBQUUsQ0FBQztLQUNYLENBQUM7Q0FDSDs7OztBQUVELFNBQVMsd0JBQXdCO0lBQy9CLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7S0FDbkI7SUFDRCxJQUFJLE1BQU0sQ0FBQyxxQkFBcUIsRUFBRTs7UUFFaEMsT0FBTyxNQUFNLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0tBQ2xEOztJQUVELElBQU0sTUFBTSxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxVQUFBLEdBQUcsSUFBSSxPQUFHLEdBQUcsMEJBQXVCLElBQUksTUFBTSxFQUF2QyxDQUF1QyxDQUFDLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFFNUYsT0FBTyxNQUFNO1FBQ1gsQ0FBQyxDQUFDLE1BQU0sQ0FBSyxNQUFNLDBCQUF1QixDQUFFO1FBQzVDLENBQUMsQ0FBQyw2QkFBNkIsRUFBRSxDQUFDO0NBQ3JDOzs7OztBQUVELE1BQU0sVUFBVSwyQkFBMkIsQ0FBQyxFQUFVO0lBQ3BELElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO1FBQ2pDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxJQUFJLE1BQU0sQ0FBQyxvQkFBb0IsRUFBRTtRQUMvQixPQUFPLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQUN4Qzs7SUFDRCxJQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsVUFBQSxHQUFHO1FBQ3hDLE9BQUcsR0FBRyx5QkFBc0IsSUFBSSxNQUFNLElBQU8sR0FBRyxnQ0FBNkIsSUFBSSxNQUFNO0lBQXZGLENBQXVGLENBQ3hGLENBQUUsQ0FBQyxDQUFFLENBQUM7SUFFUCxPQUFPLE1BQU0sQ0FBQyxDQUFDO1FBQ2IsQ0FDRSxtQkFBQyxNQUFhLEVBQUMsQ0FBSyxNQUFNLHlCQUFzQixDQUFFO1lBQ2xELG1CQUFDLE1BQWEsRUFBQyxDQUFLLE1BQU0sZ0NBQTZCLENBQUUsQ0FDMUQsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7Q0FDdkM7O0FBRUQsV0FBYSxZQUFZLEdBQUcsd0JBQXdCLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIHRzbGludDpkaXNhYmxlOm5vLWFueSB0eXBlZGVmIG5vLWludmFsaWQtdGhpc1xuY29uc3QgYXZhaWxhYmxlUHJlZml4cyA9IFsgJ21veicsICdtcycsICd3ZWJraXQnIF07XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk6IHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUge1xuICBsZXQgbGFzdFRpbWUgPSAwO1xuICByZXR1cm4gZnVuY3Rpb24gKGNhbGxiYWNrOiBGcmFtZVJlcXVlc3RDYWxsYmFjayk6IG51bWJlciB7XG4gICAgY29uc3QgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBjb25zdCB0aW1lVG9DYWxsID0gTWF0aC5tYXgoMCwgMTYgLSAoY3VyclRpbWUgLSBsYXN0VGltZSkpO1xuICAgIGNvbnN0IGlkID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY2FsbGJhY2soY3VyclRpbWUgKyB0aW1lVG9DYWxsKTtcbiAgICB9LCB0aW1lVG9DYWxsKTtcbiAgICBsYXN0VGltZSA9IGN1cnJUaW1lICsgdGltZVRvQ2FsbDtcbiAgICByZXR1cm4gaWQ7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpOiB0eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuICgpID0+IG51bGw7XG4gIH1cbiAgaWYgKHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdnVlanMvdnVlL2lzc3Vlcy80NDY1XG4gICAgcmV0dXJuIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUuYmluZCh3aW5kb3cpO1xuICB9XG5cbiAgY29uc3QgcHJlZml4ID0gYXZhaWxhYmxlUHJlZml4cy5maWx0ZXIoa2V5ID0+IGAke2tleX1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdylbIDAgXTtcblxuICByZXR1cm4gcHJlZml4XG4gICAgPyB3aW5kb3dbIGAke3ByZWZpeH1SZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIF1cbiAgICA6IHJlcXVlc3RBbmltYXRpb25GcmFtZVBvbHlmaWxsKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWUoaWQ6IG51bWJlcik6IGFueSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICByZXR1cm4gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKGlkKTtcbiAgfVxuICBjb25zdCBwcmVmaXggPSBhdmFpbGFibGVQcmVmaXhzLmZpbHRlcihrZXkgPT5cbiAgICBgJHtrZXl9Q2FuY2VsQW5pbWF0aW9uRnJhbWVgIGluIHdpbmRvdyB8fCBgJHtrZXl9Q2FuY2VsUmVxdWVzdEFuaW1hdGlvbkZyYW1lYCBpbiB3aW5kb3dcbiAgKVsgMCBdO1xuXG4gIHJldHVybiBwcmVmaXggP1xuICAgIChcbiAgICAgICh3aW5kb3cgYXMgYW55KVsgYCR7cHJlZml4fUNhbmNlbEFuaW1hdGlvbkZyYW1lYCBdIHx8XG4gICAgICAod2luZG93IGFzIGFueSlbIGAke3ByZWZpeH1DYW5jZWxSZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIF1cbiAgICApLmNhbGwodGhpcywgaWQpIDogY2xlYXJUaW1lb3V0KGlkKTtcbn1cblxuZXhwb3J0IGNvbnN0IHJlcUFuaW1GcmFtZSA9IGdldFJlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xuIl19