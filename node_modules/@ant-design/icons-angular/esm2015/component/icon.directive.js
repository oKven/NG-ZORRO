/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { Input, ElementRef, Directive, Renderer2 } from '@angular/core';
import { IconService } from './icon.service';
import { isIconDefinition, printErr, withSuffix, alreadyHasAThemeSuffix } from '../utils';
/**
 * Developers use this component to render an SVG element.
 */
export class IconDirective {
    /**
     * @param {?} _iconService
     * @param {?} _elementRef
     * @param {?} _renderer
     */
    constructor(_iconService, _elementRef, _renderer) {
        this._iconService = _iconService;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    /**
     * Render an icon with given type and theme. Return an SVG element for extra behaviors (extended by child classes).
     * @return {?}
     */
    _changeIcon() {
        return new Promise((resolve, reject) => {
            if (!this.type) {
                this._clearSVGElement();
            }
            else {
                this._iconService.getRenderedContent(this._parseIcon(this.type, this.theme), this.twoToneColor)
                    .subscribe(svg => {
                    if (svg) {
                        this._setSVGElement(svg);
                        resolve((/** @type {?} */ (svg)));
                    }
                    else {
                        reject(null);
                    }
                });
            }
        });
    }
    /**
     * Parse an icon's type.
     * @param {?} type
     * @param {?} theme
     * @return {?}
     */
    _parseIcon(type, theme) {
        if (isIconDefinition(type)) {
            return type;
        }
        else {
            if (alreadyHasAThemeSuffix(type)) {
                if (!!theme) {
                    printErr(`'type' ${type} already gets a theme inside so 'theme' ${theme} would be ignored`);
                }
                return type;
            }
            else {
                return withSuffix(type, theme || this._iconService.defaultTheme);
            }
        }
    }
    /**
     * Render an SVG element into the directive after removing other icons.
     * @param {?} svg
     * @return {?}
     */
    _setSVGElement(svg) {
        /** @type {?} */
        const self = this._elementRef.nativeElement;
        this._clearSVGElement();
        this._renderer.appendChild(self, svg);
    }
    /**
     * @return {?}
     */
    _clearSVGElement() {
        /** @type {?} */
        const self = this._elementRef.nativeElement;
        /** @type {?} */
        const children = self.childNodes;
        /** @type {?} */
        const childCount = children.length;
        for (let i = childCount - 1; i >= 0; i--) {
            /** @type {?} */
            const child = (/** @type {?} */ (children[i]));
            if (child.tagName.toLowerCase() === 'svg') {
                this._renderer.removeChild(self, child);
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this._changeIcon().then(() => {
        });
    }
}
IconDirective.decorators = [
    { type: Directive, args: [{
                selector: '[antIcon]'
            },] }
];
/** @nocollapse */
IconDirective.ctorParameters = () => [
    { type: IconService },
    { type: ElementRef },
    { type: Renderer2 }
];
IconDirective.propDecorators = {
    type: [{ type: Input }],
    theme: [{ type: Input }],
    twoToneColor: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    IconDirective.prototype.type;
    /** @type {?} */
    IconDirective.prototype.theme;
    /** @type {?} */
    IconDirective.prototype.twoToneColor;
    /** @type {?} */
    IconDirective.prototype._iconService;
    /** @type {?} */
    IconDirective.prototype._elementRef;
    /** @type {?} */
    IconDirective.prototype._renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50L2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUVMLFVBQVUsRUFDVixTQUFTLEVBQUUsU0FBUyxFQUNyQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFRMUYsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQWlFeEIsWUFDWSxZQUF5QixFQUN6QixXQUF1QixFQUN2QixTQUFvQjtRQUZwQixpQkFBWSxHQUFaLFlBQVksQ0FBYTtRQUN6QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBRWhDLENBQUM7Ozs7O0lBOURTLFdBQVc7UUFDbkIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDZCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUN6QjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQztxQkFDOUYsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNmLElBQUksR0FBRyxFQUFFO3dCQUNQLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxtQkFBQSxHQUFHLEVBQWUsQ0FBQyxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Q7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7OztJQUtTLFVBQVUsQ0FBQyxJQUE2QixFQUFFLEtBQWdCO1FBQ2xFLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUNYLFFBQVEsQ0FBQyxVQUFVLElBQUksMkNBQTJDLEtBQUssbUJBQW1CLENBQUMsQ0FBQztpQkFDN0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEU7U0FDRjtJQUNILENBQUM7Ozs7OztJQUtTLGNBQWMsQ0FBQyxHQUFlOztjQUNoQyxJQUFJLEdBQWdCLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYTtRQUN4RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVTLGdCQUFnQjs7Y0FDbEIsSUFBSSxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7O2NBQ2xELFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVTs7Y0FDMUIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztrQkFDbEMsS0FBSyxHQUFHLG1CQUFBLFFBQVEsQ0FBRSxDQUFDLENBQUUsRUFBZTtZQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7Ozs7SUFTRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDN0IsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUE5RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzs7O1lBVFEsV0FBVztZQUhsQixVQUFVO1lBQ0MsU0FBUzs7O21CQWFuQixLQUFLO29CQUNMLEtBQUs7MkJBQ0wsS0FBSzs7OztJQUZOLDZCQUF1Qzs7SUFDdkMsOEJBQTBCOztJQUMxQixxQ0FBOEI7O0lBK0Q1QixxQ0FBbUM7O0lBQ25DLG9DQUFpQzs7SUFDakMsa0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgRGlyZWN0aXZlLCBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEljb25EZWZpbml0aW9uLCBUaGVtZVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBpc0ljb25EZWZpbml0aW9uLCBwcmludEVyciwgd2l0aFN1ZmZpeCwgYWxyZWFkeUhhc0FUaGVtZVN1ZmZpeCB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBEZXZlbG9wZXJzIHVzZSB0aGlzIGNvbXBvbmVudCB0byByZW5kZXIgYW4gU1ZHIGVsZW1lbnQuXG4gKi9cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbnRJY29uXSdcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIHR5cGU6IHN0cmluZyB8IEljb25EZWZpbml0aW9uO1xuICBASW5wdXQoKSB0aGVtZTogVGhlbWVUeXBlO1xuICBASW5wdXQoKSB0d29Ub25lQ29sb3I6IHN0cmluZztcblxuICAvKipcbiAgICogUmVuZGVyIGFuIGljb24gd2l0aCBnaXZlbiB0eXBlIGFuZCB0aGVtZS4gUmV0dXJuIGFuIFNWRyBlbGVtZW50IGZvciBleHRyYSBiZWhhdmlvcnMgKGV4dGVuZGVkIGJ5IGNoaWxkIGNsYXNzZXMpLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9jaGFuZ2VJY29uKCk6IFByb21pc2U8U1ZHQUVsZW1lbnQgfCBudWxsPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmICghdGhpcy50eXBlKSB7XG4gICAgICAgIHRoaXMuX2NsZWFyU1ZHRWxlbWVudCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5faWNvblNlcnZpY2UuZ2V0UmVuZGVyZWRDb250ZW50KHRoaXMuX3BhcnNlSWNvbih0aGlzLnR5cGUsIHRoaXMudGhlbWUpLCB0aGlzLnR3b1RvbmVDb2xvcilcbiAgICAgICAgLnN1YnNjcmliZShzdmcgPT4ge1xuICAgICAgICAgIGlmIChzdmcpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldFNWR0VsZW1lbnQoc3ZnKTtcbiAgICAgICAgICAgIHJlc29sdmUoc3ZnIGFzIFNWR0FFbGVtZW50KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2UgYW4gaWNvbidzIHR5cGUuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3BhcnNlSWNvbih0eXBlOiBzdHJpbmcgfCBJY29uRGVmaW5pdGlvbiwgdGhlbWU6IFRoZW1lVHlwZSk6IEljb25EZWZpbml0aW9uIHwgc3RyaW5nIHtcbiAgICBpZiAoaXNJY29uRGVmaW5pdGlvbih0eXBlKSkge1xuICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhbHJlYWR5SGFzQVRoZW1lU3VmZml4KHR5cGUpKSB7XG4gICAgICAgIGlmICghIXRoZW1lKSB7XG4gICAgICAgICAgcHJpbnRFcnIoYCd0eXBlJyAke3R5cGV9IGFscmVhZHkgZ2V0cyBhIHRoZW1lIGluc2lkZSBzbyAndGhlbWUnICR7dGhlbWV9IHdvdWxkIGJlIGlnbm9yZWRgKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB3aXRoU3VmZml4KHR5cGUsIHRoZW1lIHx8IHRoaXMuX2ljb25TZXJ2aWNlLmRlZmF1bHRUaGVtZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBTVkcgZWxlbWVudCBpbnRvIHRoZSBkaXJlY3RpdmUgYWZ0ZXIgcmVtb3Zpbmcgb3RoZXIgaWNvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3NldFNWR0VsZW1lbnQoc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZjogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgdGhpcy5fY2xlYXJTVkdFbGVtZW50KCk7XG4gICAgdGhpcy5fcmVuZGVyZXIuYXBwZW5kQ2hpbGQoc2VsZiwgc3ZnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY2xlYXJTVkdFbGVtZW50KCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGY6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIGNvbnN0IGNoaWxkcmVuID0gc2VsZi5jaGlsZE5vZGVzO1xuICAgIGNvbnN0IGNoaWxkQ291bnQgPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgZm9yIChsZXQgaSA9IGNoaWxkQ291bnQgLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlblsgaSBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgaWYgKGNoaWxkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2hpbGQoc2VsZiwgY2hpbGQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfaWNvblNlcnZpY2U6IEljb25TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgX3JlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2VJY29uKCkudGhlbigoKSA9PiB7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==