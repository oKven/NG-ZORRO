/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, HostBinding, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzAnchorComponent } from './nz-anchor.component';
export class NzAnchorLinkComponent {
    /**
     * @param {?} el
     * @param {?} anchorComp
     * @param {?} cdr
     */
    constructor(el, anchorComp, cdr) {
        this.el = el;
        this.anchorComp = anchorComp;
        this.cdr = cdr;
        this.nzHref = '#';
        this.titleStr = '';
        this.active = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzTitle(value) {
        if (value instanceof TemplateRef) {
            this.titleStr = null;
            this.titleTpl = value;
        }
        else {
            this.titleStr = value;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.anchorComp.registerLink(this);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    goToClick(e) {
        e.preventDefault();
        e.stopPropagation();
        this.anchorComp.handleScrollTo(this);
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.anchorComp.unregisterLink(this);
    }
}
NzAnchorLinkComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-link',
                preserveWhitespaces: false,
                template: "<a (click)=\"goToClick($event)\" href=\"{{nzHref}}\" class=\"ant-anchor-link-title\" title=\"{{titleStr}}\">\n  <span *ngIf=\"titleStr; else (titleTpl || nzTemplate)\">{{ titleStr }}</span>\n</a>\n<ng-content></ng-content>",
                host: {
                    '[class.ant-anchor-link]': 'true'
                },
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [`
    nz-link {
      display: block;
    }
  `]
            }] }
];
/** @nocollapse */
NzAnchorLinkComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: NzAnchorComponent },
    { type: ChangeDetectorRef }
];
NzAnchorLinkComponent.propDecorators = {
    nzHref: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzTemplate: [{ type: ContentChild, args: ['nzTemplate',] }],
    active: [{ type: HostBinding, args: ['class.ant-anchor-link-active',] }]
};
function NzAnchorLinkComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzHref;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleStr;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.titleTpl;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.nzTemplate;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.active;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.el;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.anchorComp;
    /** @type {?} */
    NzAnchorLinkComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYW5jaG9yLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFuY2hvci9uei1hbmNob3ItbGluay5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBR0wsV0FBVyxFQUNYLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQWlCMUQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBcUJoQyxZQUFtQixFQUFjLEVBQVUsVUFBNkIsRUFBVSxHQUFzQjtRQUFyRixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQW5CeEcsY0FBa0IsR0FBRyxDQUFDO1FBRXRCLGdCQUFXLEVBQUUsQ0FBQztRQWVkLGNBQStELEtBQUssQ0FBQztLQUdwRTs7Ozs7SUFmRCxJQUNJLE9BQU8sQ0FBQyxLQUFpQztRQUMzQyxJQUFJLEtBQUssWUFBWSxXQUFXLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7U0FDdkI7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDcEM7Ozs7O0lBRUQsU0FBUyxDQUFDLENBQVE7UUFDaEIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLENBQUMsQ0FBQyxlQUFlLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQztLQUN0Qzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0tBQ3pCOzs7O0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3RDOzs7WUF2REYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxTQUFTO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQiwwT0FBc0Q7Z0JBQ3RELElBQUksRUFBaUI7b0JBQ25CLHlCQUF5QixFQUFFLE1BQU07aUJBQ2xDO2dCQU1ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTt5QkFONUI7Ozs7R0FJdEI7YUFHRjs7OztZQXpCQyxVQUFVO1lBU0gsaUJBQWlCO1lBWnhCLGlCQUFpQjs7O3FCQStCaEIsS0FBSztzQkFLTCxLQUFLO3lCQVVMLFlBQVksU0FBQyxZQUFZO3FCQUV6QixXQUFXLFNBQUMsOEJBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIENvbnRlbnRDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekFuY2hvckNvbXBvbmVudCB9IGZyb20gJy4vbnotYW5jaG9yLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotbGluaycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1hbmNob3ItbGluay5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1hbmNob3ItbGlua10nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgbnotbGluayB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gIGAgXSxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIE56QW5jaG9yTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBASW5wdXQoKSBuekhyZWYgPSAnIyc7XG5cbiAgdGl0bGVTdHIgPSAnJztcbiAgdGl0bGVUcGw6IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelRpdGxlKHZhbHVlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICB0aGlzLnRpdGxlU3RyID0gbnVsbDtcbiAgICAgIHRoaXMudGl0bGVUcGwgPSB2YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aXRsZVN0ciA9IHZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBuelRlbXBsYXRlOiBUZW1wbGF0ZVJlZjx2b2lkPjtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1hbmNob3ItbGluay1hY3RpdmUnKSBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgYW5jaG9yQ29tcDogTnpBbmNob3JDb21wb25lbnQsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5hbmNob3JDb21wLnJlZ2lzdGVyTGluayh0aGlzKTtcbiAgfVxuXG4gIGdvVG9DbGljayhlOiBFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuYW5jaG9yQ29tcC5oYW5kbGVTY3JvbGxUbyh0aGlzKTtcbiAgfVxuXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuYW5jaG9yQ29tcC51bnJlZ2lzdGVyTGluayh0aGlzKTtcbiAgfVxuXG59XG4iXX0=