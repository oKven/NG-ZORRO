/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Directive, ElementRef, Renderer2 } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzCarouselContentDirective = /** @class */ (function () {
    function NzCarouselContentDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._active = false;
        this._width = 0;
        this._fadeMode = false;
        this.el = this.elementRef.nativeElement;
    }
    Object.defineProperty(NzCarouselContentDirective.prototype, "width", {
        get: /**
         * @return {?}
         */
        function () {
            return this._width;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._width = value;
            this.renderer.setStyle(this.el, 'width', this.width + "px");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "left", {
        get: /**
         * @return {?}
         */
        function () {
            return this._left;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._left = value;
            if (isNotNil(this.left)) {
                this.renderer.setStyle(this.el, 'left', this.left + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'left');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "top", {
        get: /**
         * @return {?}
         */
        function () {
            return this._top;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._top = value;
            if (isNotNil(this.top)) {
                this.renderer.setStyle(this.el, 'top', this.top + "px");
            }
            else {
                this.renderer.removeStyle(this.el, 'top');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "isActive", {
        get: /**
         * @return {?}
         */
        function () {
            return this._active;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._active = value;
            this.updateOpacity();
            if (this.isActive) {
                this.renderer.addClass(this.el, 'slick-active');
            }
            else {
                this.renderer.removeClass(this.el, 'slick-active');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselContentDirective.prototype, "fadeMode", {
        get: /**
         * @return {?}
         */
        function () {
            return this._fadeMode;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._fadeMode = value;
            if (this.fadeMode) {
                this.renderer.setStyle(this.el, 'position', 'relative');
            }
            else {
                this.renderer.removeStyle(this.el, 'position');
            }
            this.updateOpacity();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzCarouselContentDirective.prototype.updateOpacity = /**
     * @return {?}
     */
    function () {
        if (this.fadeMode) {
            this.renderer.setStyle(this.el, 'opacity', this.isActive ? 1 : 0);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselContentDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.setStyle(this.el, 'transition', 'opacity 500ms ease');
    };
    NzCarouselContentDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-carousel-content]',
                    host: {
                        '[class.slick-slide]': 'true'
                    }
                },] }
    ];
    /** @nocollapse */
    NzCarouselContentDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    return NzCarouselContentDirective;
}());
export { NzCarouselContentDirective };
function NzCarouselContentDirective_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCarouselContentDirective.prototype._active;
    /** @type {?} */
    NzCarouselContentDirective.prototype._width;
    /** @type {?} */
    NzCarouselContentDirective.prototype._left;
    /** @type {?} */
    NzCarouselContentDirective.prototype._top;
    /** @type {?} */
    NzCarouselContentDirective.prototype._fadeMode;
    /** @type {?} */
    NzCarouselContentDirective.prototype.el;
    /** @type {?} */
    NzCarouselContentDirective.prototype.elementRef;
    /** @type {?} */
    NzCarouselContentDirective.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2Fyb3VzZWwvbnotY2Fyb3VzZWwtY29udGVudC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7O0lBcUY1QyxvQ0FBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVzt1QkE1RXJELEtBQUs7c0JBQ0UsQ0FBQzt5QkFHTixLQUFLO1FBQ3pCLFVBQWtCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO0tBd0UvQztJQXRFRCxzQkFBSSw2Q0FBSzs7OztRQUtUO1lBQ0UsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3BCOzs7OztRQVBELFVBQVUsS0FBYTtZQUNyQixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBSyxJQUFJLENBQUMsS0FBSyxPQUFJLENBQUMsQ0FBQztTQUM3RDs7O09BQUE7SUFNRCxzQkFBSSw0Q0FBSTs7OztRQVNSO1lBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQ25COzs7OztRQVhELFVBQVMsS0FBYTtZQUNwQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUNuQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFLLElBQUksQ0FBQyxJQUFJLE9BQUksQ0FBQyxDQUFDO2FBQzNEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUM7YUFDNUM7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSwyQ0FBRzs7OztRQVNQO1lBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ2xCOzs7OztRQVhELFVBQVEsS0FBYTtZQUNuQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztZQUNsQixJQUFJLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxFQUFLLElBQUksQ0FBQyxHQUFHLE9BQUksQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDM0M7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSxnREFBUTs7OztRQVVaO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3JCOzs7OztRQVpELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ2pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDcEQ7U0FDRjs7O09BQUE7SUFNRCxzQkFBSSxnREFBUTs7OztRQVVaO1lBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3ZCOzs7OztRQVpELFVBQWEsS0FBYztZQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsVUFBVSxDQUFDLENBQUM7YUFDaEQ7WUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEI7OztPQUFBOzs7O0lBTUQsa0RBQWE7OztJQUFiO1FBQ0UsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbkU7S0FDRjs7OztJQUtELDZDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsWUFBWSxFQUFFLG9CQUFvQixDQUFDLENBQUM7S0FDckU7O2dCQXhGRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtvQkFDakMsSUFBSSxFQUFNO3dCQUNSLHFCQUFxQixFQUFFLE1BQU07cUJBQzlCO2lCQUNGOzs7O2dCQVpDLFVBQVU7Z0JBRVYsU0FBUzs7cUNBSlg7O1NBZWEsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBPbkluaXQsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbnotY2Fyb3VzZWwtY29udGVudF0nLFxuICBob3N0ICAgIDoge1xuICAgICdbY2xhc3Muc2xpY2stc2xpZGVdJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xuICBwcml2YXRlIF9hY3RpdmUgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX2xlZnQ6IG51bWJlcjtcbiAgcHJpdmF0ZSBfdG9wOiBudW1iZXI7XG4gIHByaXZhdGUgX2ZhZGVNb2RlID0gZmFsc2U7XG4gIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuXG4gIHNldCB3aWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fd2lkdGggPSB2YWx1ZTtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd3aWR0aCcsIGAke3RoaXMud2lkdGh9cHhgKTtcbiAgfVxuXG4gIGdldCB3aWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl93aWR0aDtcbiAgfVxuXG4gIHNldCBsZWZ0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9sZWZ0ID0gdmFsdWU7XG4gICAgaWYgKGlzTm90TmlsKHRoaXMubGVmdCkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbCwgJ2xlZnQnLCBgJHt0aGlzLmxlZnR9cHhgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLmVsLCAnbGVmdCcpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBsZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xlZnQ7XG4gIH1cblxuICBzZXQgdG9wKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl90b3AgPSB2YWx1ZTtcbiAgICBpZiAoaXNOb3ROaWwodGhpcy50b3ApKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICd0b3AnLCBgJHt0aGlzLnRvcH1weGApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICd0b3AnKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdG9wKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3RvcDtcbiAgfVxuXG4gIHNldCBpc0FjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2FjdGl2ZSA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlT3BhY2l0eSgpO1xuICAgIGlmICh0aGlzLmlzQWN0aXZlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsICdzbGljay1hY3RpdmUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLCAnc2xpY2stYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hY3RpdmU7XG4gIH1cblxuICBzZXQgZmFkZU1vZGUodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9mYWRlTW9kZSA9IHZhbHVlO1xuICAgIGlmICh0aGlzLmZhZGVNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicsICdyZWxhdGl2ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuZWwsICdwb3NpdGlvbicpO1xuICAgIH1cbiAgICB0aGlzLnVwZGF0ZU9wYWNpdHkoKTtcbiAgfVxuXG4gIGdldCBmYWRlTW9kZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZmFkZU1vZGU7XG4gIH1cblxuICB1cGRhdGVPcGFjaXR5KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmZhZGVNb2RlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwsICdvcGFjaXR5JywgdGhpcy5pc0FjdGl2ZSA/IDEgOiAwKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLCAndHJhbnNpdGlvbicsICdvcGFjaXR5IDUwMG1zIGVhc2UnKTtcbiAgfVxuXG59XG4iXX0=