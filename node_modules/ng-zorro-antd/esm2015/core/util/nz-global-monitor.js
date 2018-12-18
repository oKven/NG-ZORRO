/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { EventEmitter } from '@angular/core';
/**
 * @record
 */
export function Position() { }
function Position_tsickle_Closure_declarations() {
    /** @type {?} */
    Position.prototype.x;
    /** @type {?} */
    Position.prototype.y;
}
export class NzGlobalMonitorService {
    constructor() {
        this.counter = 0;
        this.lastClickPos = {
            x: 0,
            y: 0
        };
        this._navItemSource = new EventEmitter();
        this._observeGlobalEvents();
    }
    /**
     * @return {?}
     */
    getGlobalCount() {
        return ++this.counter;
    }
    /**
     * @param {?} status
     * @return {?}
     */
    setDocumentOverflowHidden(status) {
        document.body.style.overflow = status ? 'hidden' : '';
    }
    /**
     * @return {?}
     */
    _observeGlobalEvents() {
        // 监听document的点击事件，记录点击坐标，并抛出 documentClick 事件
        document.addEventListener('click', (e) => {
            this.lastClickPos = {
                x: e.clientX,
                y: e.clientY
            };
            this._navItemSource.emit('documentClick');
        });
    }
}
function NzGlobalMonitorService_tsickle_Closure_declarations() {
    /** @type {?} */
    NzGlobalMonitorService.prototype.counter;
    /** @type {?} */
    NzGlobalMonitorService.prototype.lastClickPos;
    /** @type {?} */
    NzGlobalMonitorService.prototype._navItemSource;
}
export default new NzGlobalMonitorService();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZ2xvYmFsLW1vbml0b3IuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS91dGlsL256LWdsb2JhbC1tb25pdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7OztBQU83QyxNQUFNLE9BQU8sc0JBQXNCO0lBNEJqQztRQTNCQSxlQUFVLENBQUMsQ0FBQztRQUNaLG9CQUF5QjtZQUN2QixDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ0wsQ0FBQztRQUVGLHNCQUF1QyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBc0J4RCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztLQUM3Qjs7OztJQXJCRCxjQUFjO1FBQ1osT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUM7S0FDdkI7Ozs7O0lBRUQseUJBQXlCLENBQUMsTUFBZTtRQUN2QyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUN2RDs7OztJQUVELG9CQUFvQjs7UUFFbEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLEdBQUc7Z0JBQ2xCLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTztnQkFDWixDQUFDLEVBQUUsQ0FBQyxDQUFDLE9BQU87YUFDYixDQUFDO1lBQ0YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDM0MsQ0FBQyxDQUFDO0tBQ0o7Q0FLRjs7Ozs7Ozs7O0FBRUQsZUFBZSxJQUFJLHNCQUFzQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBQb3NpdGlvbiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTnpHbG9iYWxNb25pdG9yU2VydmljZSB7XG4gIGNvdW50ZXIgPSAwO1xuICBsYXN0Q2xpY2tQb3M6IFBvc2l0aW9uID0ge1xuICAgIHg6IDAsXG4gICAgeTogMFxuICB9O1xuXG4gIF9uYXZJdGVtU291cmNlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBnZXRHbG9iYWxDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiArK3RoaXMuY291bnRlcjtcbiAgfVxuXG4gIHNldERvY3VtZW50T3ZlcmZsb3dIaWRkZW4oc3RhdHVzOiBib29sZWFuKTogdm9pZCB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvdyA9IHN0YXR1cyA/ICdoaWRkZW4nIDogJyc7XG4gIH1cblxuICBfb2JzZXJ2ZUdsb2JhbEV2ZW50cygpOiB2b2lkIHtcbiAgICAvLyDnm5HlkKxkb2N1bWVudOeahOeCueWHu+S6i+S7tu+8jOiusOW9leeCueWHu+WdkOagh++8jOW5tuaKm+WHuiBkb2N1bWVudENsaWNrIOS6i+S7tlxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIHRoaXMubGFzdENsaWNrUG9zID0ge1xuICAgICAgICB4OiBlLmNsaWVudFgsXG4gICAgICAgIHk6IGUuY2xpZW50WVxuICAgICAgfTtcbiAgICAgIHRoaXMuX25hdkl0ZW1Tb3VyY2UuZW1pdCgnZG9jdW1lbnRDbGljaycpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fb2JzZXJ2ZUdsb2JhbEV2ZW50cygpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBOekdsb2JhbE1vbml0b3JTZXJ2aWNlKCk7XG4iXX0=