/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, ViewEncapsulation } from '@angular/core';
export class NzTimelineItemComponent {
    /**
     * @param {?} renderer
     * @param {?} cdr
     */
    constructor(renderer, cdr) {
        this.renderer = renderer;
        this.cdr = cdr;
        this.nzColor = 'blue';
        this.isLast = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.tryUpdateCustomColor();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzColor"]) {
            this.tryUpdateCustomColor();
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    tryUpdateCustomColor() {
        /** @type {?} */
        const defaultColors = ['blue', 'red', 'green'];
        /** @type {?} */
        const circle = this.liTemplate.nativeElement.querySelector('.ant-timeline-item-head');
        if (defaultColors.indexOf(this.nzColor) === -1) {
            this.renderer.setStyle(circle, 'border-color', this.nzColor);
        }
        else {
            this.renderer.removeStyle(circle, 'border-color');
        }
    }
}
NzTimelineItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                selector: 'nz-timeline-item, [nz-timeline-item]',
                template: "<li\n  class=\"ant-timeline-item\"\n  [class.ant-timeline-item-right]=\"position === 'right'\"\n  [class.ant-timeline-item-left]=\"position === 'left'\"\n  [class.ant-timeline-item-last]=\"isLast\"\n  #liTemplate>\n  <div class=\"ant-timeline-item-tail\"></div>\n  <div\n    class=\"ant-timeline-item-head\"\n    [class.ant-timeline-item-head-red]=\"nzColor === 'red'\"\n    [class.ant-timeline-item-head-blue]=\"nzColor === 'blue'\"\n    [class.ant-timeline-item-head-green]=\"nzColor === 'green'\"\n    [class.ant-timeline-item-head-custom]=\"!!nzDot\">\n    <ng-container *nzStringTemplateOutlet=\"nzDot\">{{ nzDot }}</ng-container>\n  </div>\n  <div class=\"ant-timeline-item-content\">\n    <ng-content></ng-content>\n  </div>\n</li>"
            }] }
];
/** @nocollapse */
NzTimelineItemComponent.ctorParameters = () => [
    { type: Renderer2 },
    { type: ChangeDetectorRef }
];
NzTimelineItemComponent.propDecorators = {
    liTemplate: [{ type: ViewChild, args: ['liTemplate',] }],
    nzColor: [{ type: Input }],
    nzDot: [{ type: Input }]
};
function NzTimelineItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimelineItemComponent.prototype.liTemplate;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzColor;
    /** @type {?} */
    NzTimelineItemComponent.prototype.nzDot;
    /** @type {?} */
    NzTimelineItemComponent.prototype.isLast;
    /** @type {?} */
    NzTimelineItemComponent.prototype.position;
    /** @type {?} */
    NzTimelineItemComponent.prototype.renderer;
    /** @type {?} */
    NzTimelineItemComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZWxpbmUvbnotdGltZWxpbmUtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFHVCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBV3ZCLE1BQU0sT0FBTyx1QkFBdUI7Ozs7O0lBUWxDLFlBQW9CLFFBQW1CLEVBQVUsR0FBc0I7UUFBbkQsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTnZFLGVBQTJCLE1BQU0sQ0FBQztRQUdsQyxjQUFTLEtBQUssQ0FBQztLQUc0RDs7OztJQUUzRSxRQUFRO1FBQ04sSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7S0FDN0I7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxhQUFVO1lBQ25CLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQzdCO0tBQ0Y7Ozs7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7OztJQUVPLG9CQUFvQjs7UUFDMUIsTUFBTSxhQUFhLEdBQUcsQ0FBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sQ0FBRSxDQUFDOztRQUNqRCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUN0RixJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzlEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDbkQ7Ozs7WUF0Q0osU0FBUyxTQUFDO2dCQUNULGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSztnQkFDMUIsUUFBUSxFQUFhLHNDQUFzQztnQkFDM0QsOHVCQUF3RDthQUN6RDs7OztZQWZDLFNBQVM7WUFMVCxpQkFBaUI7Ozt5QkFzQmhCLFNBQVMsU0FBQyxZQUFZO3NCQUN0QixLQUFLO29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgSW5wdXQsIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOelRpbWVsaW5lTW9kZSB9IGZyb20gJy4vbnotdGltZWxpbmUuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei10aW1lbGluZS1pdGVtLCBbbnotdGltZWxpbmUtaXRlbV0nLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei10aW1lbGluZS1pdGVtLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVsaW5lSXRlbUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQFZpZXdDaGlsZCgnbGlUZW1wbGF0ZScpIGxpVGVtcGxhdGU6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIG56Q29sb3I6IHN0cmluZyA9ICdibHVlJztcbiAgQElucHV0KCkgbnpEb3Q6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGlzTGFzdCA9IGZhbHNlO1xuICBwb3NpdGlvbjogTnpUaW1lbGluZU1vZGUgfCB1bmRlZmluZWQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy50cnlVcGRhdGVDdXN0b21Db2xvcigpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56Q29sb3IpIHtcbiAgICAgIHRoaXMudHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTtcbiAgICB9XG4gIH1cblxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgdHJ5VXBkYXRlQ3VzdG9tQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgZGVmYXVsdENvbG9ycyA9IFsgJ2JsdWUnLCAncmVkJywgJ2dyZWVuJyBdO1xuICAgIGNvbnN0IGNpcmNsZSA9IHRoaXMubGlUZW1wbGF0ZS5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbnQtdGltZWxpbmUtaXRlbS1oZWFkJyk7XG4gICAgaWYgKGRlZmF1bHRDb2xvcnMuaW5kZXhPZih0aGlzLm56Q29sb3IpID09PSAtMSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShjaXJjbGUsICdib3JkZXItY29sb3InLCB0aGlzLm56Q29sb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKGNpcmNsZSwgJ2JvcmRlci1jb2xvcicpO1xuICAgIH1cbiAgfVxufVxuIl19