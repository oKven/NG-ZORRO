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
export class NzCarouselComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
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
    onWindowResize(e) {
        this.renderContent();
    }
    /**
     * @return {?}
     */
    get nextIndex() {
        return this.activeIndex < this.slideContents.length - 1 ? (this.activeIndex + 1) : 0;
    }
    /**
     * @return {?}
     */
    get prevIndex() {
        return this.activeIndex > 0 ? (this.activeIndex - 1) : (this.slideContents.length - 1);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDots(value) {
        this._dots = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDots() {
        return this._dots;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzEffect(value) {
        this._effect = value;
        this.updateMode();
    }
    /**
     * @return {?}
     */
    get nzEffect() {
        return this._effect;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoPlay(value) {
        this._autoPlay = toBoolean(value);
        this.setUpAutoPlay();
    }
    /**
     * @return {?}
     */
    get nzAutoPlay() {
        return this._autoPlay;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzAutoPlaySpeed(value) {
        this._autoPlaySpeed = toNumber(value, null);
        this.setUpAutoPlay();
    }
    /**
     * @return {?}
     */
    get nzAutoPlaySpeed() {
        return this._autoPlaySpeed;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzVertical(value) {
        this._vertical = toBoolean(value);
        this.updateMode();
    }
    /**
     * @return {?}
     */
    get nzVertical() {
        return this._vertical;
    }
    /**
     * @param {?} content
     * @param {?} i
     * @return {?}
     */
    setActive(content, i) {
        if (this.slideContents && this.slideContents.length) {
            this.setUpAutoPlay();
            /** @type {?} */
            const beforeIndex = this.slideContents.toArray().findIndex(slide => slide.isActive);
            this.nzBeforeChange.emit({ from: beforeIndex, to: i });
            this.activeIndex = i;
            if (this.nzEffect === 'scrollx') {
                if (this.nzVertical) {
                    this.transform = `translate3d(0px, ${-this.activeIndex * this.elementRef.nativeElement.offsetHeight}px, 0px)`;
                }
                else {
                    this.transform = `translate3d(${-this.activeIndex * this.elementRef.nativeElement.offsetWidth}px, 0px, 0px)`;
                }
            }
            else {
                this.transform = 'translate3d(0px, 0px, 0px)';
            }
            this.slideContents.forEach(slide => slide.isActive = slide === content);
            this.nzAfterChange.emit(i);
        }
    }
    /**
     * @return {?}
     */
    renderContent() {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.forEach((content, i) => {
                content.width = this.elementRef.nativeElement.offsetWidth;
                if (this.nzEffect === 'fade') {
                    content.fadeMode = true;
                    if (this.nzVertical) {
                        content.top = -i * this.elementRef.nativeElement.offsetHeight;
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
                this.renderer.setStyle(this.slickList.nativeElement, 'height', `${this.slideContents.first.el.offsetHeight}px`);
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'height', `${this.slideContents.length * this.elementRef.nativeElement.offsetHeight}px`);
            }
            else {
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'height');
                this.renderer.removeStyle(this.slickList.nativeElement, 'height');
                this.renderer.removeStyle(this.slickTrack.nativeElement, 'width');
                this.renderer.setStyle(this.slickTrack.nativeElement, 'width', `${this.slideContents.length * this.elementRef.nativeElement.offsetWidth}px`);
            }
            this.setUpAutoPlay();
        }
    }
    /**
     * @return {?}
     */
    setUpAutoPlay() {
        this.clearTimeout();
        if (this.nzAutoPlay && this.nzAutoPlaySpeed > 0) {
            this.timeout = setTimeout(_ => {
                this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
            }, this.nzAutoPlaySpeed);
        }
    }
    /**
     * @return {?}
     */
    updateMode() {
        if (this.slideContents && this.slideContents.length) {
            this.renderContent();
            this.setActive(this.slideContents.first, 0);
        }
    }
    /**
     * @return {?}
     */
    clearTimeout() {
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
    }
    /**
     * @return {?}
     */
    next() {
        this.setActive(this.slideContents.toArray()[this.nextIndex], this.nextIndex);
    }
    /**
     * @return {?}
     */
    pre() {
        this.setActive(this.slideContents.toArray()[this.prevIndex], this.prevIndex);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    goTo(index) {
        if (index >= 0 && index <= this.slideContents.length - 1) {
            this.setActive(this.slideContents.toArray()[index], index);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onKeyDown(e) {
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
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = 'swipeleft') {
        if (!this.nzEnableSwipe) {
            return;
        }
        if (action === 'swipeleft') {
            this.next();
        }
        if (action === 'swiperight') {
            this.pre();
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    swipeInProgress(e) {
        if (this.nzEffect === 'scrollx') {
            /** @type {?} */
            const final = e.isFinal;
            /** @type {?} */
            const scrollWidth = final ? 0 : e.deltaX * 1.2;
            /** @type {?} */
            const totalWidth = this.elementRef.nativeElement.offsetWidth;
            if (this.nzVertical) {
                /** @type {?} */
                const totalHeight = this.elementRef.nativeElement.offsetHeight;
                /** @type {?} */
                const scrollPercent = scrollWidth / totalWidth;
                /** @type {?} */
                const scrollHeight = scrollPercent * totalHeight;
                this.transform = `translate3d(0px, ${-this.activeIndex * totalHeight + scrollHeight}px, 0px)`;
            }
            else {
                this.transform = `translate3d(${-this.activeIndex * totalWidth + scrollWidth}px, 0px, 0px)`;
            }
        }
        if (e.isFinal) {
            this.setUpAutoPlay();
        }
        else {
            this.clearTimeout();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.slideContents && this.slideContents.length) {
            this.slideContents.first.isActive = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.slideContents.changes
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe(() => {
            this.renderContent();
        });
        this.renderContent();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
        this.clearTimeout();
    }
}
NzCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-carousel',
                preserveWhitespaces: false,
                template: "<div class=\"slick-initialized slick-slider\" [class.slick-vertical]=\"nzVertical\">\n  <div class=\"slick-list\" #slickList tabindex=\"-1\" (keydown)=\"onKeyDown($event)\" \n    (swipeleft)=\"swipe('swipeleft')\" (swiperight)=\"swipe('swiperight')\" (pan)=\"swipeInProgress($event);\">\n    <div class=\"slick-track\" [style.transform]=\"transform\" #slickTrack (mousedown)=\"$event.preventDefault()\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n  <ul class=\"slick-dots\" *ngIf=\"nzDots\">\n    <li\n      *ngFor=\"let content of slideContents; let i =index\"\n      [class.slick-active]=\"content.isActive\"\n      (click)=\"setActive(content,i)\">\n      <ng-template [ngTemplateOutlet]=\"nzDotRender || renderDotTemplate\" [ngTemplateOutletContext]=\"{ $implicit: i }\"></ng-template>\n    </li>\n  </ul>\n</div>\n\n<ng-template #renderDotTemplate let-index>\n  <button>{{index + 1}}</button>\n</ng-template>",
                host: {
                    '[class.ant-carousel]': 'true'
                },
                styles: [`
      :host {
        display: block;
        position: relative;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      .slick-dots {
        display: block;
      }

      .slick-track {
        opacity: 1;
        transition: all 0.5s ease;
      }

      .slick-slide {
        transition: opacity 500ms ease;
      }

    `]
            }] }
];
/** @nocollapse */
NzCarouselComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhcm91c2VsL256LWNhcm91c2VsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNoRSxPQUFPLEVBR0wsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFDTixTQUFTLEVBQ1QsU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQXFDN0UsTUFBTSxPQUFPLG1CQUFtQjs7Ozs7SUFxTjlCLFlBQW1CLFVBQXNCLEVBQVUsUUFBbUI7UUFBbkQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7eUJBcE5sRCxLQUFLOzhCQUNBLElBQUk7cUJBQ2IsSUFBSTt5QkFDQSxLQUFLO3VCQUNQLFNBQVM7NEJBQ0osSUFBSSxPQUFPLEVBQVE7UUFFMUMsbUJBQWMsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFZLDRCQUE0QixDQUFDO1FBTXpDLHFCQUF5RCxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzVFLHNCQUFnRixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ25HLHFCQUF5QixJQUFJLENBQUM7S0FxTTdCOzs7OztJQWxNRCxjQUFjLENBQUMsQ0FBVTtRQUN2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QUFlO1FBQ2IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPO2FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ2xDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDdEIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0tBQ3RCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7S0FDckI7OztZQTVRRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFhLGFBQWE7Z0JBQ2xDLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDA2QkFBbUQ7Z0JBQ25ELElBQUksRUFBaUI7b0JBQ25CLHNCQUFzQixFQUFFLE1BQU07aUJBQy9CO3lCQUVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBc0JDO2FBRUo7Ozs7WUFuREMsVUFBVTtZQVFWLFNBQVM7Ozs0QkF3RFIsZUFBZSxTQUFDLDBCQUEwQjt3QkFDMUMsU0FBUyxTQUFDLFdBQVc7eUJBQ3JCLFNBQVMsU0FBQyxZQUFZOzRCQUN0QixNQUFNOzZCQUNOLE1BQU07NEJBQ04sS0FBSzs2QkFFTCxZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUUsUUFBUSxDQUFFOzBCQWExQyxLQUFLO3FCQUVMLEtBQUs7dUJBU0wsS0FBSzt5QkFVTCxLQUFLOzhCQVVMLEtBQUs7eUJBVUwsS0FBSyxZQUNMLFdBQVcsU0FBQyw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVyB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9rZXljb2Rlcyc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPdXRwdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgdG9Cb29sZWFuLCB0b051bWJlciB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYXJvdXNlbC1jb250ZW50LmRpcmVjdGl2ZSc7XG5cbmV4cG9ydCB0eXBlIFN3aXBlRGlyZWN0aW9uID0gJ3N3aXBlbGVmdCcgfCAnc3dpcGVyaWdodCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotY2Fyb3VzZWwnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtY2Fyb3VzZWxdJzogJ3RydWUnXG4gIH0sXG4gIHN0eWxlcyAgICAgICAgICAgICA6IFtcbiAgICBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIC5zbGljay1kb3RzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC5zbGljay10cmFjayB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2U7XG4gICAgICB9XG5cbiAgICAgIC5zbGljay1zbGlkZSB7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgZWFzZTtcbiAgICAgIH1cblxuICAgIGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfYXV0b1BsYXkgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfYXV0b1BsYXlTcGVlZCA9IDMwMDA7XG4gIHByaXZhdGUgX2RvdHMgPSB0cnVlO1xuICBwcml2YXRlIF92ZXJ0aWNhbCA9IGZhbHNlO1xuICBwcml2YXRlIF9lZmZlY3QgPSAnc2Nyb2xseCc7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBhY3RpdmVJbmRleCA9IDA7XG4gIHRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KSc7XG4gIHRpbWVvdXQ7XG5cbiAgQENvbnRlbnRDaGlsZHJlbihOekNhcm91c2VsQ29udGVudERpcmVjdGl2ZSkgc2xpZGVDb250ZW50czogUXVlcnlMaXN0PE56Q2Fyb3VzZWxDb250ZW50RGlyZWN0aXZlPjtcbiAgQFZpZXdDaGlsZCgnc2xpY2tMaXN0Jykgc2xpY2tMaXN0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzbGlja1RyYWNrJykgc2xpY2tUcmFjazogRWxlbWVudFJlZjtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56QWZ0ZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxudW1iZXI+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpCZWZvcmVDaGFuZ2U6IEV2ZW50RW1pdHRlcjx7IGZyb206IG51bWJlcjsgdG86IG51bWJlciB9PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQElucHV0KCkgbnpFbmFibGVTd2lwZSA9IHRydWU7XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsgJyRldmVudCcgXSlcbiAgb25XaW5kb3dSZXNpemUoZTogVUlFdmVudCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyQ29udGVudCgpO1xuICB9XG5cbiAgZ2V0IG5leHRJbmRleCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmFjdGl2ZUluZGV4IDwgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCAtIDEgPyAodGhpcy5hY3RpdmVJbmRleCArIDEpIDogMDtcbiAgfVxuXG4gIGdldCBwcmV2SW5kZXgoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVJbmRleCA+IDAgPyAodGhpcy5hY3RpdmVJbmRleCAtIDEpIDogKHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggLSAxKTtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RG90UmVuZGVyOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogbnVtYmVyIH0+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRvdHModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9kb3RzID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRvdHMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2RvdHM7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpFZmZlY3QodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX2VmZmVjdCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlTW9kZSgpO1xuICB9XG5cbiAgZ2V0IG56RWZmZWN0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2VmZmVjdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekF1dG9QbGF5KHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fYXV0b1BsYXkgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xuICB9XG5cbiAgZ2V0IG56QXV0b1BsYXkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9QbGF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56QXV0b1BsYXlTcGVlZCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fYXV0b1BsYXlTcGVlZCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgICB0aGlzLnNldFVwQXV0b1BsYXkoKTtcbiAgfVxuXG4gIGdldCBuekF1dG9QbGF5U3BlZWQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fYXV0b1BsYXlTcGVlZDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LWNhcm91c2VsLXZlcnRpY2FsJylcbiAgc2V0IG56VmVydGljYWwodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy51cGRhdGVNb2RlKCk7XG4gIH1cblxuICBnZXQgbnpWZXJ0aWNhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fdmVydGljYWw7XG4gIH1cblxuICBzZXRBY3RpdmUoY29udGVudDogTnpDYXJvdXNlbENvbnRlbnREaXJlY3RpdmUsIGk6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLnNsaWRlQ29udGVudHMgJiYgdGhpcy5zbGlkZUNvbnRlbnRzLmxlbmd0aCkge1xuICAgICAgdGhpcy5zZXRVcEF1dG9QbGF5KCk7XG4gICAgICBjb25zdCBiZWZvcmVJbmRleCA9IHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KCkuZmluZEluZGV4KHNsaWRlID0+IHNsaWRlLmlzQWN0aXZlKTtcbiAgICAgIHRoaXMubnpCZWZvcmVDaGFuZ2UuZW1pdCh7IGZyb206IGJlZm9yZUluZGV4LCB0bzogaSB9KTtcbiAgICAgIHRoaXMuYWN0aXZlSW5kZXggPSBpO1xuICAgICAgaWYgKHRoaXMubnpFZmZlY3QgPT09ICdzY3JvbGx4Jykge1xuICAgICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoMHB4LCAkey10aGlzLmFjdGl2ZUluZGV4ICogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0fXB4LCAwcHgpYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHgsIDBweCwgMHB4KWA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpJztcbiAgICAgIH1cbiAgICAgIHRoaXMuc2xpZGVDb250ZW50cy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLmlzQWN0aXZlID0gc2xpZGUgPT09IGNvbnRlbnQpO1xuICAgICAgdGhpcy5uekFmdGVyQ2hhbmdlLmVtaXQoaSk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyQ29udGVudCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zbGlkZUNvbnRlbnRzICYmIHRoaXMuc2xpZGVDb250ZW50cy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuc2xpZGVDb250ZW50cy5mb3JFYWNoKChjb250ZW50LCBpKSA9PiB7XG4gICAgICAgIGNvbnRlbnQud2lkdGggPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgaWYgKHRoaXMubnpFZmZlY3QgPT09ICdmYWRlJykge1xuICAgICAgICAgIGNvbnRlbnQuZmFkZU1vZGUgPSB0cnVlO1xuICAgICAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgICAgIGNvbnRlbnQudG9wID0gLWkgKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRlbnQubGVmdCA9IC1pICogY29udGVudC53aWR0aDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGVudC5mYWRlTW9kZSA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRlbnQubGVmdCA9IG51bGw7XG4gICAgICAgICAgY29udGVudC50b3AgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm56VmVydGljYWwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudCwgJ3dpZHRoJyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja0xpc3QubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tMaXN0Lm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBgJHt0aGlzLnNsaWRlQ29udGVudHMuZmlyc3QuZWwub2Zmc2V0SGVpZ2h0fXB4YCk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLnNsaWNrVHJhY2submF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIGAke3RoaXMuc2xpZGVDb250ZW50cy5sZW5ndGggKiB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5vZmZzZXRIZWlnaHR9cHhgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnKTtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVTdHlsZSh0aGlzLnNsaWNrTGlzdC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0Jyk7XG4gICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5zbGlja1RyYWNrLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcpO1xuICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuc2xpY2tUcmFjay5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBgJHt0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoICogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGh9cHhgKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuc2V0VXBBdXRvUGxheSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldFVwQXV0b1BsYXkoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgICBpZiAodGhpcy5uekF1dG9QbGF5ICYmIHRoaXMubnpBdXRvUGxheVNwZWVkID4gMCkge1xuICAgICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChfID0+IHtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKVsgdGhpcy5uZXh0SW5kZXggXSwgdGhpcy5uZXh0SW5kZXgpO1xuICAgICAgfSwgdGhpcy5uekF1dG9QbGF5U3BlZWQpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZU1vZGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVDb250ZW50cyAmJiB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2xpZGVDb250ZW50cy5maXJzdCwgMCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJUaW1lb3V0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgICAgdGhpcy50aW1lb3V0ID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBuZXh0KCk6IHZvaWQge1xuICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuc2xpZGVDb250ZW50cy50b0FycmF5KClbIHRoaXMubmV4dEluZGV4IF0sIHRoaXMubmV4dEluZGV4KTtcbiAgfVxuXG4gIHByZSgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFjdGl2ZSh0aGlzLnNsaWRlQ29udGVudHMudG9BcnJheSgpWyB0aGlzLnByZXZJbmRleCBdLCB0aGlzLnByZXZJbmRleCk7XG4gIH1cblxuICBnb1RvKGluZGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8PSB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5zbGlkZUNvbnRlbnRzLnRvQXJyYXkoKVsgaW5kZXggXSwgaW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykgeyAvLyBMZWZ0XG4gICAgICB0aGlzLnByZSgpO1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykgeyAvLyBSaWdodFxuICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgc3dpcGUoYWN0aW9uOiBTd2lwZURpcmVjdGlvbiA9ICdzd2lwZWxlZnQnKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56RW5hYmxlU3dpcGUpIHsgcmV0dXJuOyB9XG4gICAgaWYgKGFjdGlvbiA9PT0gJ3N3aXBlbGVmdCcpIHsgdGhpcy5uZXh0KCk7IH1cbiAgICBpZiAoYWN0aW9uID09PSAnc3dpcGVyaWdodCcpIHsgdGhpcy5wcmUoKTsgfVxuICB9XG5cbiAgLyogdHNsaW50OmRpc2FibGU6bm8tYW55ICovXG4gIHN3aXBlSW5Qcm9ncmVzcyhlOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uekVmZmVjdCA9PT0gJ3Njcm9sbHgnKSB7XG4gICAgICBjb25zdCBmaW5hbCA9IGUuaXNGaW5hbDtcbiAgICAgIGNvbnN0IHNjcm9sbFdpZHRoID0gZmluYWwgPyAwIDogZS5kZWx0YVggKiAxLjI7XG4gICAgICBjb25zdCB0b3RhbFdpZHRoID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICBpZiAodGhpcy5uelZlcnRpY2FsKSB7XG4gICAgICAgIGNvbnN0IHRvdGFsSGVpZ2h0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICBjb25zdCBzY3JvbGxQZXJjZW50ID0gc2Nyb2xsV2lkdGggLyB0b3RhbFdpZHRoO1xuICAgICAgICBjb25zdCBzY3JvbGxIZWlnaHQgPSAgc2Nyb2xsUGVyY2VudCAqIHRvdGFsSGVpZ2h0O1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgwcHgsICR7LXRoaXMuYWN0aXZlSW5kZXggKiB0b3RhbEhlaWdodCArIHNjcm9sbEhlaWdodH1weCwgMHB4KWA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGUzZCgkey10aGlzLmFjdGl2ZUluZGV4ICogdG90YWxXaWR0aCArIHNjcm9sbFdpZHRofXB4LCAwcHgsIDBweClgO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZS5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLnNldFVwQXV0b1BsYXkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jbGVhclRpbWVvdXQoKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2xpZGVDb250ZW50cyAmJiB0aGlzLnNsaWRlQ29udGVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLnNsaWRlQ29udGVudHMuZmlyc3QuaXNBY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNsaWRlQ29udGVudHMuY2hhbmdlc1xuICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgICB9KTtcbiAgICB0aGlzLnJlbmRlckNvbnRlbnQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLm5leHQoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xuICAgIHRoaXMuY2xlYXJUaW1lb3V0KCk7XG4gIH1cblxufVxuIl19