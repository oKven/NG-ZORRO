/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { LEFT_ARROW, RIGHT_ARROW } from '@angular/cdk/keycodes';
import { Component, ContentChildren, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output, QueryList, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { toBoolean, toNumber } from '../core/util/convert';
import { NzCarouselContentDirective } from './nz-carousel-content.directive';
var NzCarouselComponent = /** @class */ (function () {
    function NzCarouselComponent(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this._autoPlay = false;
        this._autoPlaySpeed = 3000;
        this._dots = true;
        this._vertical = false;
        this._effect = 'scrollx';
        this.unsubscribe$ = new Subject();
        this.activeIndex = 0;
        this.transform = 'translate3d(0px, 0px, 0px)';
        this.nzAfterChange = new EventEmitter();
        this.nzBeforeChange = new EventEmitter();
        this.nzEnableSwipe = true;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onWindowResize = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        this.renderContent();
    };
    Object.defineProperty(NzCarouselComponent.prototype, "nextIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "prevIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzDots", {
        get: /**
         * @return {?}
         */
        function () {
            return this._dots;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._dots = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzEffect", {
        get: /**
         * @return {?}
         */
        function () {
            return this._effect;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._effect = value;
            this.updateMode();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzAutoPlay", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoPlay;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoPlay = toBoolean(value);
            this.setUpAutoPlay();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzAutoPlaySpeed", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoPlaySpeed;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoPlaySpeed = toNumber(value, null);
            this.setUpAutoPlay();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzCarouselComponent.prototype, "nzVertical", {
        get: /**
         * @return {?}
         */
        function () {
            return this._vertical;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._vertical = toBoolean(value);
            this.updateMode();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    NzCarouselComponent.prototype.setActive = /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    function (content, i) {
        if (this.slideContents && this.slideContents.length) {
            this.setUpAutoPlay();
            /** @type {?} */
            var beforeIndex = this.slideContents.toArray().findIndex(function (slide) { return slide.isActive; });
            this.nzBeforeChange.emit({ from: beforeIndex, to: i });
            this.activeIndex = i;
            if (this.nzEffect === 'scrollx') {
                if (this.nzVertical) {
                    this.transform = "translate3d(0px, " + -this.activeIndex * this.elementRef.nativeElement.offsetHeight + "px, 0px)";
                }
                else {
                    this.transform = "translate3d(" + -this.activeIndex * this.elementRef.nativeElement.offsetWidth + "px, 0px, 0px)";
                }
            }
            else {
                this.transform = 'translate3d(0px, 0px, 0px)';
            }
            this.slideContents.forEach(function (slide) { return slide.isActive = slide === content; });
            this.nzAfterChange.emit(i);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.renderContent = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.forEach(function (content, i) {
                content.width = _this.elementRef.nativeElement.offsetWidth;
                if (_this.nzEffect === 'fade') {
                    content.fadeMode = true;
                    if (_this.nzVertical) {
                        content.top = -i * _this.elementRef.nativeElement.offsetHeight;
                    }
                    else {
                        content.left = -i * content.width;
                    }
                }
                else {
                    content.fadeMode = false;
                    content.left = null;
                    content.top = null;
                }
            });
            if (this.nzVertical) {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'width');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.setStyle(this.slickList.nativeElement, 'height', this.slideContents.first.el.offsetHeight + "px");
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'height', this.slideContents.length * this.elementRef.nativeElement.offsetHeight + "px");
            }
            else {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'width', this.slideContents.length * this.elementRef.nativeElement.offsetWidth + "px");
            }
            this.setUpAutoPlay();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.setUpAutoPlay = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.clearTimeout();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0) {
            this.timeout = setTimeout(function (_) {
                _this.setActive(_this.slideContents.toArray()[_this.nextIndex], _this.nextIndex);
            }, this.nzAutoPlaySpeed);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.updateMode = /**
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.renderContent();
            this.setActive(this.slideContents.first, 0);
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.clearTimeout = /**
     * @return {?}
     */
    function () {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.next = /**
     * @return {?}
     */
    function () {
        this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.pre = /**
     * @return {?}
     */
    function () {
        this.setActive(this.slideContents.toArray()[this.prevIndex], this.prevIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzCarouselComponent.prototype.goTo = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        if (index >= 0 && index <= this.slideContents.length - 1) {
            this.setActive(this.slideContents.toArray()[index], index);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.keyCode === LEFT_ARROW) { // Left
            // Left
            this.pre();
            e.preventDefault();
        }
        else if (e.keyCode === RIGHT_ARROW) { // Right
            // Right
            this.next();
            e.preventDefault();
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    NzCarouselComponent.prototype.swipe = /**
     * @param {?=} action
     * @return {?}
     */
    function (action) {
        if (action === void 0) { action = 'swipeleft'; }
        if (!this.nzEnableSwipe) {
            return;
        }
        if (action === 'swipeleft') {
            this.next();
        }
        if (action === 'swiperight') {
            this.pre();
        }
    };
    /* tslint:disable:no-any */
    /**
     * @param {?} e
     * @return {?}
     */
    NzCarouselComponent.prototype.swipeInProgress = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (this.nzEffect === 'scrollx') {
            /** @type {?} */
            var final = e.isFinal;
            /** @type {?} */
            var scrollWidth = final ? 0 : e.deltaX * 1.2;
            /** @type {?} */
            var totalWidth = this.elementRef.nativeElement.offsetWidth;
            if (this.nzVertical) {
                /** @type {?} */
                var totalHeight = this.elementRef.nativeElement.offsetHeight;
                /** @type {?} */
                var scrollPercent = scrollWidth / totalWidth;
                /** @type {?} */
                var scrollHeight = scrollPercent * totalHeight;
                this.transform = "translate3d(0px, " + (-this.activeIndex * totalHeight + scrollHeight) + "px, 0px)";
            }
            else {
                this.transform = "translate3d(" + (-this.activeIndex * totalWidth + scrollWidth) + "px, 0px, 0px)";
            }
        }
        if (e.isFinal) {
            this.setUpAutoPlay();
        }
        else {
            this.clearTimeout();
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.first.isActive = true;
        }
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.slideContents.changes
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(function () {
            _this.renderContent();
        });
        this.renderContent();
    };
    /**
     * @return {?}
     */
    NzCarouselComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.clearTimeout();
    };
    NzCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-carousel',
                    preserveWhitespaces: false,
                    template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\n  <div class=\"slick-list\" #slickList tabindex=\"-1\" (keydown)=\"onKeyDown($event)\" \n    (swipeleft)=\"swipe('swipeleft')\" (swiperight)=\"swipe('swiperight')\" (pan)=\"swipeInProgress($event);\">\n    <div class=\"slick-track\" [style.transform]=\"transform\" #slickTrack (mousedown)=\"$event.preventDefault()\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ul class=\"slick-dots\" *ngIf=\"nzDots\">\n    <li\n      *ngFor=\"let content of slideContents; let i =index\"\n      [class.slick-active]=\"content.isActive\"\n      (click)=\"setActive(content,i)\">\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-template #renderDotTemplate let-index>\n  <button>{{index + 1}}</button>\n</ng-template>",
                    host: {
                        '[class.ant-carousel]': 'true'
                    },
                    styles: ["\n      :host {\n        display: block;\n        position: relative;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      .slick-dots {\n        display: block;\n      }\n\n      .slick-track {\n        opacity: 1;\n        transition: all 0.5s ease;\n      }\n\n      .slick-slide {\n        transition: opacity 500ms ease;\n      }\n\n    "]
                }] }
    ];
    /** @nocollapse */
    NzCarouselComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    NzCarouselComponent.propDecorators = {
        slideContents: [{ type: ContentChildren, args: [NzCarouselContentDirective,] }],
        slickList: [{ type: ViewChild, args: ['slickList',] }],
        slickTrack: [{ type: ViewChild, args: ['slickTrack',] }],
        nzAfterChange: [{ type: Output }],
        nzBeforeChange: [{ type: Output }],
        nzEnableSwipe: [{ type: Input }],
        onWindowResize: [{ type: HostListener, args: ['window:resize', ['$event'],] }],
        nzDotRender: [{ type: Input }],
        nzDots: [{ type: Input }],
        nzEffect: [{ type: Input }],
        nzAutoPlay: [{ type: Input }],
        nzAutoPlaySpeed: [{ type: Input }],
        nzVertical: [{ type: Input }, { type: HostBinding, args: ['class.ant-carousel-vertical',] }]
    };
    return NzCarouselComponent;
}());
export { NzCarouselComponent };
function NzCarouselComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCarouselComponent.prototype._autoPlay;
    /** @type {?} */
    NzCarouselComponent.prototype._autoPlaySpeed;
    /** @type {?} */
    NzCarouselComponent.prototype._dots;
    /** @type {?} */
    NzCarouselComponent.prototype._vertical;
    /** @type {?} */
    NzCarouselComponent.prototype._effect;
    /** @type {?} */
    NzCarouselComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzCarouselComponent.prototype.activeIndex;
    /** @type {?} */
    NzCarouselComponent.prototype.transform;
    /** @type {?} */
    NzCarouselComponent.prototype.timeout;
    /** @type {?} */
    NzCarouselComponent.prototype.slideContents;
    /** @type {?} */
    NzCarouselComponent.prototype.slickList;
    /** @type {?} */
    NzCarouselComponent.prototype.slickTrack;
    /** @type {?} */
    NzCarouselComponent.prototype.nzAfterChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzBeforeChange;
    /** @type {?} */
    NzCarouselComponent.prototype.nzEnableSwipe;
    /** @type {?} */
    NzCarouselComponent.prototype.nzDotRender;
    /** @type {?} */
    NzCarouselComponent.prototype.elementRef;
    /** @type {?} */
    NzCarouselComponent.prototype.renderer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhcm91c2VsL256LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBR0wsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQzs7SUEwUDNFLDZCQUFtQixVQUFzQixFQUFVLFFBQW1CO1FBQW5ELGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO3lCQXBObEQsS0FBSzs4QkFDQSxJQUFJO3FCQUNiLElBQUk7eUJBQ0EsS0FBSzt1QkFDUCxTQUFTOzRCQUNKLElBQUksT0FBTyxFQUFRO1FBRTFDLG1CQUFjLENBQUMsQ0FBQztRQUNoQixpQkFBWSw0QkFBNEIsQ0FBQztRQU16QyxxQkFBeUQsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUM1RSxzQkFBZ0YsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRyxxQkFBeUIsSUFBSSxDQUFDO0tBcU03Qjs7Ozs7SUFsTUQsNENBQWM7Ozs7SUFEZCxVQUNlLENBQVU7UUFDdkIsSUFBSSxDQUFDLGFBQWEs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NkJBVUwsS0FBSyxZQUNMLFdBQVcsU0FBQyw2QkFBNkI7OzhCQXBJNUM7O1NBMERhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExFRlRfQVJST1csIFJJR0hUX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcbmltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBSZW5kZXJlcjIsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4sIHRvTnVtYmVyIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcm91c2VsLWNvbnRlbnQuZGlyZWN0aXZlJztcblxuZXhwb3J0IHR5cGUgU3dpcGVEaXJlY3Rpb24gPSAnc3dpcGVsZWZ0JyB8ICdzd2lwZXJpZ2h0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jYXJvdXNlbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jYXJvdXNlbC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1jYXJvdXNlbF0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLWRvdHMge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXRyYWNrIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZTtcbiAgICAgIH1cblxuICAgICAgLnNsaWNrLXNsaWRlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSA1MDBtcyBlYXNlO1xuICAgICAgfVxuXG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2Fyb3VzZWxDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9hdXRvUGxheSA9IGZhbHNlO1xuICBwcml2YXRlIF9hdXRvUGxheVNwZWVkID0gMzAwMDtcbiAgcHJpdmF0ZSBfZG90cyA9IHRydWU7XG4gIHByaXZhdGUgX3ZlcnRpY2FsID0gZmFsc2U7XG4gIHByaXZhdGUgX2VmZmVjdCA9ICdzY3JvbGx4JztcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGFjdGl2ZUluZGV4ID0gMDtcbiAgdHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJztcbiAgdGltZW91dDtcblxuICBAQ29udGVudENoaWxkcmVuKE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlKSBzbGlkZUNvbnRlbnRzOiBRdWVyeUxpc3Q8TnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmU+O1xuICBAVmlld0NoaWxkKCdzbGlja0xpc3QnKSBzbGlja0xpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NsaWNrVHJhY2snKSBzbGlja1RyYWNrOiBFbGVtZW50UmVmO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpBZnRlckNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekJlZm9yZUNoYW5nZTogRXZlbnRFbWl0dGVyPHsgZnJvbTogbnVtYmVyOyB0bzogbnVtYmVyIH0+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBuekVuYWJsZVN3aXBlID0gdHJ1ZTtcblxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgWyAnJGV2ZW50JyBdKVxuICBvbldpbmRvd1Jlc2l6ZShlOiBVSUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJDb250ZW50KCk7XG4gIH1cblxuICBnZXQgbmV4dEluZGV4KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlSW5kZXggPCB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoIC0gMSA/ICh0aGlzLmFjdGl2ZUluZGV4ICsgMSkgOiAwO1xuICB9XG5cbiAgZ2V0IHByZXZJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluZGV4ID4gMCA/ICh0aGlzLmFjdGl2ZUluZGV4IC0gMSkgOiAodGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgQElucHV0KCkgbnpEb3RSZW5kZXI6IFRlbXBsYXRlUmVmPHsgJGltcGxpY2l0OiBudW1iZXIgfT47XG5cbiAgQElucHV0KClcbiAgc2V0IG56RG90cyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2RvdHMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56RG90cygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fZG90cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekVmZmVjdCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5fZWZmZWN0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gIH1cblxuICBnZXQgbnpFZmZlY3QoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b1BsYXkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvUGxheSA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRVcEF1dG9QbGF5KCk7XG4gIH1cblxuICBnZXQgbnpBdXRvUGxheSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1BsYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBdXRvUGxheVNwZWVkKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9hdXRvUGxheVNwZWVkID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xuICB9XG5cbiAgZ2V0IG56QXV0b1BsYXlTcGVlZCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9hdXRvUGxheVNwZWVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtY2Fyb3VzZWwtdmVydGljYWwnKVxuICBzZXQgbnpWZXJ0aWNhbCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX3ZlcnRpY2FsID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnVwZGF0ZU1vZGUoKTtcbiAgfVxuXG4gIGdldCBuelZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIHNldEFjdGl2ZShjb250ZW50OiBOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSwgaTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVDb250ZW50cyAmJiB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNldFVwQXV0b1BsYXkoKTtcbiAgICAgIGNvbnN0IGJlZm9yZUluZGV4ID0gdGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKS5maW5kSW5kZXgoc2xpZGUgPT4gc2xpZGUuaXNBY3RpdmUpO1xuICAgICAgdGhpcy5uekJlZm9yZUNoYW5nZS5lbWl0KHsgZnJvbTogYmVmb3JlSW5kZXgsIHRvOiBpIH0pO1xuICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGk7XG4gICAgICBpZiAodGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnKSB7XG4gICAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7LXRoaXMuYWN0aXZlSW5kZXggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHR9cHgsIDBweClgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LXRoaXMuYWN0aXZlSW5kZXggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weCwgMHB4LCAwcHgpYDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCknO1xuICAgICAgfVxuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZvckVhY2goc2xpZGUgPT4gc2xpZGUuaXNBY3RpdmUgPSBzbGlkZSA9PT0gY29udGVudCk7XG4gICAgICB0aGlzLm56QWZ0ZXJDaGFuZ2UuZW1pdChpKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXJDb250ZW50KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zbGlkZUNvbnRlbnRzLmZvckVhY2goKGNvbnRlbnQsIGkpID0+IHtcbiAgICAgICAgY29udGVudC53aWR0aCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICBpZiAodGhpcy5uekVmZmVjdCA9PT0gJ2ZhZGUnKSB7XG4gICAgICAgICAgY29udGVudC5mYWRlTW9kZSA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY29udGVudC50b3AgPSAtaSAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGVudC5sZWZ0ID0gLWkgKiBjb250ZW50LndpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb250ZW50LmZhZGVNb2RlID0gZmFsc2U7XG4gICAgICAgICAgY29udGVudC5sZWZ0ID0gbnVsbDtcbiAgICAgICAgICBjb250ZW50LnRvcCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubnpWZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5maXJzdC5lbC5vZmZzZXRIZWlnaHR9cHhgKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgYCR7dGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAqIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50Lm9mZnNldEhlaWdodH1weGApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aH1weGApO1xuICAgICAgfVxuICAgICAgdGhpcy5zZXRVcEF1dG9QbGF5KCk7XG4gICAgfVxuICB9XG5cbiAgc2V0VXBBdXRvUGxheSgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgIGlmICh0aGlzLm56QXV0b1BsYXkgJiYgdGhpcy5uekF1dG9QbGF5U3BlZWQgPiAwKSB7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4ge1xuICAgICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpWyB0aGlzLm5leHRJbmRleCBdLCB0aGlzLm5leHRJbmRleCk7XG4gICAgICB9LCB0aGlzLm56QXV0b1BsYXlTcGVlZCk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlTW9kZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLmZpcnN0LCAwKTtcbiAgICB9XG4gIH1cblxuICBjbGVhclRpbWVvdXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudGltZW91dCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgICB0aGlzLnRpbWVvdXQgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKVsgdGhpcy5uZXh0SW5kZXggXSwgdGhpcy5uZXh0SW5kZXgpO1xuICB9XG5cbiAgcHJlKCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KClbIHRoaXMucHJldkluZGV4IF0sIHRoaXMucHJldkluZGV4KTtcbiAgfVxuXG4gIGdvVG8oaW5kZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDw9IHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpWyBpbmRleCBdLCBpbmRleCk7XG4gICAgfVxuICB9XG5cbiAgb25LZXlEb3duKGU6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7IC8vIExlZnRcbiAgICAgIHRoaXMucHJlKCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFJJR0hUX0FSUk9XKSB7IC8vIFJpZ2h0XG4gICAgICB0aGlzLm5leHQoKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBzd2lwZShhY3Rpb246IFN3aXBlRGlyZWN0aW9uID0gJ3N3aXBlbGVmdCcpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMubnpFbmFibGVTd2lwZSkgeyByZXR1cm47IH1cbiAgICBpZiAoYWN0aW9uID09PSAnc3dpcGVsZWZ0JykgeyB0aGlzLm5leHQoKTsgfVxuICAgIGlmIChhY3Rpb24gPT09ICdzd2lwZXJpZ2h0JykgeyB0aGlzLnByZSgpOyB9XG4gIH1cblxuICAvKiB0c2xpbnQ6ZGlzYWJsZTpuby1hbnkgKi9cbiAgc3dpcGVJblByb2dyZXNzKGU6IGFueSk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RWZmZWN0ID09PSAnc2Nyb2xseCcpIHtcbiAgICAgIGNvbnN0IGZpbmFsID0gZS5pc0ZpbmFsO1xuICAgICAgY29uc3Qgc2Nyb2xsV2lkdGggPSBmaW5hbCA/IDAgOiBlLmRlbHRhWCAqIDEuMjtcbiAgICAgIGNvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgY29uc3QgdG90YWxIZWlnaHQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgIGNvbnN0IHNjcm9sbFBlcmNlbnQgPSBzY3JvbGxXaWR0aCAvIHRvdGFsV2lkdGg7XG4gICAgICAgIGNvbnN0IHNjcm9sbEhlaWdodCA9ICBzY3JvbGxQZXJjZW50ICogdG90YWxIZWlnaHQ7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKDBweCwgJHstdGhpcy5hY3RpdmVJbmRleCAqIHRvdGFsSGVpZ2h0ICsgc2Nyb2xsSGVpZ2h0fXB4LCAwcHgpYDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gYHRyYW5zbGF0ZTNkKCR7LXRoaXMuYWN0aXZlSW5kZXggKiB0b3RhbFdpZHRoICsgc2Nyb2xsV2lkdGh9cHgsIDBweCwgMHB4KWA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChlLmlzRmluYWwpIHtcbiAgICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyVGltZW91dCgpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2xpZGVDb250ZW50cy5maXJzdC5pc0FjdGl2ZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVDb250ZW50cy5jaGFuZ2VzXG4gICAgLnBpcGUodGFrZVVudGlsKHRoaXMudW5zdWJzY3JpYmUkKSlcbiAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICAgIH0pO1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgfVxuXG59XG4iXX0=