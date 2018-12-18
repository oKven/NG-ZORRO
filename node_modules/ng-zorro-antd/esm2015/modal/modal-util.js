/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
export function ClickPosition() { }
function ClickPosition_tsickle_Closure_declarations() {
    /** @type {?} */
    ClickPosition.prototype.x;
    /** @type {?} */
    ClickPosition.prototype.y;
}
export class ModalUtil {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.lastPosition = null;
        this.listenDocumentClick();
    }
    /**
     * @return {?}
     */
    getLastClickPosition() {
        return this.lastPosition;
    }
    /**
     * @return {?}
     */
    listenDocumentClick() {
        this.document.addEventListener('click', (event) => {
            this.lastPosition = { x: event.clientX, y: event.clientY };
        });
    }
}
function ModalUtil_tsickle_Closure_declarations() {
    /** @type {?} */
    ModalUtil.prototype.lastPosition;
    /** @type {?} */
    ModalUtil.prototype.document;
}
export default new ModalUtil(document);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtdXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJtb2RhbC9tb2RhbC11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBS0EsTUFBTSxPQUFPLFNBQVM7Ozs7SUFHcEIsWUFBb0IsUUFBa0I7UUFBbEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTs0QkFGQSxJQUFJO1FBR3hDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0tBQzVCOzs7O0lBRUQsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztLQUMxQjs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLEtBQWlCLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUM1RCxDQUFDLENBQUM7S0FDSjtDQUNGOzs7Ozs7O0FBRUQsZUFBZSxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBpbnRlcmZhY2UgQ2xpY2tQb3NpdGlvbiB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xufVxuXG5leHBvcnQgY2xhc3MgTW9kYWxVdGlsIHtcbiAgcHJpdmF0ZSBsYXN0UG9zaXRpb246IENsaWNrUG9zaXRpb24gPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZG9jdW1lbnQ6IERvY3VtZW50KSB7XG4gICAgdGhpcy5saXN0ZW5Eb2N1bWVudENsaWNrKCk7XG4gIH1cblxuICBnZXRMYXN0Q2xpY2tQb3NpdGlvbigpOiBDbGlja1Bvc2l0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xuICB9XG5cbiAgbGlzdGVuRG9jdW1lbnRDbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgICB0aGlzLmxhc3RQb3NpdGlvbiA9IHsgeDogZXZlbnQuY2xpZW50WCwgeTogZXZlbnQuY2xpZW50WSB9O1xuICAgIH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBNb2RhbFV0aWwoZG9jdW1lbnQpO1xuIl19