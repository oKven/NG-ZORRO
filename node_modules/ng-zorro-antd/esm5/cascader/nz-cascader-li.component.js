/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, SecurityContext, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
var NzCascaderOptionComponent = /** @class */ (function () {
    function NzCascaderOptionComponent(sanitizer) {
        this.sanitizer = sanitizer;
        this.activated = false;
        this.nzLabelProperty = 'label';
    }
    /**
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.getOptionLabel = /**
     * @return {?}
     */
    function () {
        return this.option ? this.option[this.nzLabelProperty] : '';
    };
    /**
     * @param {?} str
     * @return {?}
     */
    NzCascaderOptionComponent.prototype.renderHighlightString = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var safeHtml = this.sanitizer.sanitize(SecurityContext.HTML, "<span class=\"ant-cascader-menu-item-keyword\">" + this.highlightText + "</span>");
        if (!safeHtml) {
            throw new Error("[NG-ZORRO] Input value \"" + this.highlightText + "\" is not considered security.");
        }
        return str.replace(new RegExp(this.highlightText, 'g'), safeHtml);
    };
    NzCascaderOptionComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: '[nz-cascader-option]',
                    template: "<ng-container *ngIf=\"highlightText\"><span [innerHTML]=\"renderHighlightString(getOptionLabel())\"></span></ng-container>\n<ng-container *ngIf=\"!highlightText\">{{ getOptionLabel() }}</ng-container>\n<span *ngIf=\"!option.isLeaf || option.children && option.children.length || option.loading\" class=\"ant-cascader-menu-item-expand-icon\">\n  <i nz-icon [type]=\"option.loading ? 'loading' : 'right'\"></i>\n</span>",
                    host: {
                        '[attr.title]': 'option.title || getOptionLabel()',
                        '[class.ant-cascader-menu-item]': 'true',
                        '[class.ant-cascader-menu-item-active]': 'activated',
                        '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                        '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                    }
                }] }
    ];
    /** @nocollapse */
    NzCascaderOptionComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    NzCascaderOptionComponent.propDecorators = {
        option: [{ type: Input }],
        activated: [{ type: Input }],
        highlightText: [{ type: Input }],
        nzLabelProperty: [{ type: Input }]
    };
    return NzCascaderOptionComponent;
}());
export { NzCascaderOptionComponent };
function NzCascaderOptionComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.sanitizer;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQzs7SUFzQnZELG1DQUFvQixTQUF1QjtRQUF2QixjQUFTLEdBQVQsU0FBUyxDQUFjO1FBSjNDLGlCQUFxQixLQUFLLENBQUM7UUFFM0IsdUJBQTJCLE9BQU8sQ0FBQztLQUVZOzs7O0lBRS9DLGtEQUFjOzs7SUFBZDtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBRSxJQUFJLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztLQUMvRDs7Ozs7SUFFRCx5REFBcUI7Ozs7SUFBckIsVUFBc0IsR0FBVzs7UUFDL0IsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxvREFBZ0QsSUFBSSxDQUFDLGFBQWEsWUFBUyxDQUFDLENBQUM7UUFDNUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNiLE1BQU0sSUFBSSxLQUFLLENBQUMsOEJBQTJCLElBQUksQ0FBQyxhQUFhLG1DQUErQixDQUFDLENBQUM7U0FDL0Y7UUFDRCxPQUFPLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQztLQUNuRTs7Z0JBL0JGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFJLGlCQUFpQixDQUFDLElBQUk7b0JBQ3ZDLFFBQVEsRUFBUyxzQkFBc0I7b0JBQ3ZDLDZhQUFrRDtvQkFDbEQsSUFBSSxFQUFhO3dCQUNmLGNBQWMsRUFBNkIsa0NBQWtDO3dCQUM3RSxnQ0FBZ0MsRUFBVyxNQUFNO3dCQUNqRCx1Q0FBdUMsRUFBSSxXQUFXO3dCQUN0RCx1Q0FBdUMsRUFBSSxnQkFBZ0I7d0JBQzNELHlDQUF5QyxFQUFFLGlCQUFpQjtxQkFDN0Q7aUJBQ0Y7Ozs7Z0JBZlEsWUFBWTs7O3lCQWlCbEIsS0FBSzs0QkFDTCxLQUFLO2dDQUNMLEtBQUs7a0NBQ0wsS0FBSzs7b0NBckJSOztTQWlCYSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgU2VjdXJpdHlDb250ZXh0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDYXNjYWRlck9wdGlvbiB9IGZyb20gJy4vdHlwZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgOiAnW256LWNhc2NhZGVyLW9wdGlvbl0nLFxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LWNhc2NhZGVyLWxpLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgOiB7XG4gICAgJ1thdHRyLnRpdGxlXScgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICdvcHRpb24udGl0bGUgfHwgZ2V0T3B0aW9uTGFiZWwoKScsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtXScgICAgICAgICA6ICd0cnVlJyxcbiAgICAnW2NsYXNzLmFudC1jYXNjYWRlci1tZW51LWl0ZW0tYWN0aXZlXScgIDogJ2FjdGl2YXRlZCcsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWV4cGFuZF0nICA6ICchb3B0aW9uLmlzTGVhZicsXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWRpc2FibGVkXSc6ICdvcHRpb24uZGlzYWJsZWQnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB7XG4gIEBJbnB1dCgpIG9wdGlvbjogQ2FzY2FkZXJPcHRpb247XG4gIEBJbnB1dCgpIGFjdGl2YXRlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBoaWdobGlnaHRUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge31cblxuICBnZXRPcHRpb25MYWJlbCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLm9wdGlvbiA/IHRoaXMub3B0aW9uWyB0aGlzLm56TGFiZWxQcm9wZXJ0eSBdIDogJyc7XG4gIH1cblxuICByZW5kZXJIaWdobGlnaHRTdHJpbmcoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IHNhZmVIdG1sID0gdGhpcy5zYW5pdGl6ZXIuc2FuaXRpemUoU2VjdXJpdHlDb250ZXh0LkhUTUwsIGA8c3BhbiBjbGFzcz1cImFudC1jYXNjYWRlci1tZW51LWl0ZW0ta2V5d29yZFwiPiR7dGhpcy5oaWdobGlnaHRUZXh0fTwvc3Bhbj5gKTtcbiAgICBpZiAoIXNhZmVIdG1sKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFtORy1aT1JST10gSW5wdXQgdmFsdWUgXCIke3RoaXMuaGlnaGxpZ2h0VGV4dH1cIiBpcyBub3QgY29uc2lkZXJlZCBzZWN1cml0eS5gKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAodGhpcy5oaWdobGlnaHRUZXh0LCAnZycpLCBzYWZlSHRtbCk7XG4gIH1cbn1cbiJdfQ==