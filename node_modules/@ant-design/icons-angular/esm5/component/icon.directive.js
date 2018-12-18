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
var IconDirective = /** @class */ (function () {
    function IconDirective(_iconService, _elementRef, _renderer) {
        this._iconService = _iconService;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
    }
    /**
     * Render an icon with given type and theme. Return an SVG element for extra behaviors (extended by child classes).
     */
    /**
     * Render an icon with given type and theme. Return an SVG element for extra behaviors (extended by child classes).
     * @return {?}
     */
    IconDirective.prototype._changeIcon = /**
     * Render an icon with given type and theme. Return an SVG element for extra behaviors (extended by child classes).
     * @return {?}
     */
    function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.type) {
                _this._clearSVGElement();
            }
            else {
                _this._iconService.getRenderedContent(_this._parseIcon(_this.type, _this.theme), _this.twoToneColor)
                    .subscribe(function (svg) {
                    if (svg) {
                        _this._setSVGElement(svg);
                        resolve((/** @type {?} */ (svg)));
                    }
                    else {
                        reject(null);
                    }
                });
            }
        });
    };
    /**
     * Parse an icon's type.
     */
    /**
     * Parse an icon's type.
     * @param {?} type
     * @param {?} theme
     * @return {?}
     */
    IconDirective.prototype._parseIcon = /**
     * Parse an icon's type.
     * @param {?} type
     * @param {?} theme
     * @return {?}
     */
    function (type, theme) {
        if (isIconDefinition(type)) {
            return type;
        }
        else {
            if (alreadyHasAThemeSuffix(type)) {
                if (!!theme) {
                    printErr("'type' " + type + " already gets a theme inside so 'theme' " + theme + " would be ignored");
                }
                return type;
            }
            else {
                return withSuffix(type, theme || this._iconService.defaultTheme);
            }
        }
    };
    /**
     * Render an SVG element into the directive after removing other icons.
     */
    /**
     * Render an SVG element into the directive after removing other icons.
     * @param {?} svg
     * @return {?}
     */
    IconDirective.prototype._setSVGElement = /**
     * Render an SVG element into the directive after removing other icons.
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        /** @type {?} */
        var self = this._elementRef.nativeElement;
        this._clearSVGElement();
        this._renderer.appendChild(self, svg);
    };
    /**
     * @return {?}
     */
    IconDirective.prototype._clearSVGElement = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var self = this._elementRef.nativeElement;
        /** @type {?} */
        var children = self.childNodes;
        /** @type {?} */
        var childCount = children.length;
        for (var i = childCount - 1; i >= 0; i--) {
            /** @type {?} */
            var child = (/** @type {?} */ (children[i]));
            if (child.tagName.toLowerCase() === 'svg') {
                this._renderer.removeChild(self, child);
            }
        }
    };
    /**
     * @return {?}
     */
    IconDirective.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this._changeIcon().then(function () {
        });
    };
    IconDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[antIcon]'
                },] }
    ];
    /** @nocollapse */
    IconDirective.ctorParameters = function () { return [
        { type: IconService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    IconDirective.propDecorators = {
        type: [{ type: Input }],
        theme: [{ type: Input }],
        twoToneColor: [{ type: Input }]
    };
    return IconDirective;
}());
export { IconDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyLyIsInNvdXJjZXMiOlsiY29tcG9uZW50L2ljb24uZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsS0FBSyxFQUVMLFVBQVUsRUFDVixTQUFTLEVBQUUsU0FBUyxFQUNyQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxVQUFVLENBQUM7Ozs7QUFLMUY7SUFvRUUsdUJBQ1ksWUFBeUIsRUFDekIsV0FBdUIsRUFDdkIsU0FBb0I7UUFGcEIsaUJBQVksR0FBWixZQUFZLENBQWE7UUFDekIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsY0FBUyxHQUFULFNBQVMsQ0FBVztJQUVoQyxDQUFDO0lBakVEOztPQUVHOzs7OztJQUNPLG1DQUFXOzs7O0lBQXJCO1FBQUEsaUJBZ0JDO1FBZkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNkLEtBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO2FBQ3pCO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsSUFBSSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFJLENBQUMsWUFBWSxDQUFDO3FCQUM5RixTQUFTLENBQUMsVUFBQSxHQUFHO29CQUNaLElBQUksR0FBRyxFQUFFO3dCQUNQLEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxtQkFBQSxHQUFHLEVBQWUsQ0FBQyxDQUFDO3FCQUM3Qjt5QkFBTTt3QkFDTCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ2Q7Z0JBQ0gsQ0FBQyxDQUFDLENBQUM7YUFDSjtRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOztPQUVHOzs7Ozs7O0lBQ08sa0NBQVU7Ozs7OztJQUFwQixVQUFxQixJQUE2QixFQUFFLEtBQWdCO1FBQ2xFLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDMUIsT0FBTyxJQUFJLENBQUM7U0FDYjthQUFNO1lBQ0wsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDaEMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFO29CQUNYLFFBQVEsQ0FBQyxZQUFVLElBQUksZ0RBQTJDLEtBQUssc0JBQW1CLENBQUMsQ0FBQztpQkFDN0Y7Z0JBQ0QsT0FBTyxJQUFJLENBQUM7YUFDYjtpQkFBTTtnQkFDTCxPQUFPLFVBQVUsQ0FBQyxJQUFJLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDbEU7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRzs7Ozs7O0lBQ08sc0NBQWM7Ozs7O0lBQXhCLFVBQXlCLEdBQWU7O1lBQ2hDLElBQUksR0FBZ0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhO1FBQ3hELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDOzs7O0lBRVMsd0NBQWdCOzs7SUFBMUI7O1lBQ1EsSUFBSSxHQUFnQixJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWE7O1lBQ2xELFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVTs7WUFDMUIsVUFBVSxHQUFHLFFBQVEsQ0FBQyxNQUFNO1FBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsVUFBVSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFOztnQkFDbEMsS0FBSyxHQUFHLG1CQUFBLFFBQVEsQ0FBRSxDQUFDLENBQUUsRUFBZTtZQUMxQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDekM7U0FDRjtJQUNILENBQUM7Ozs7SUFTRCxtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Z0JBOUVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsV0FBVztpQkFDdEI7Ozs7Z0JBVFEsV0FBVztnQkFIbEIsVUFBVTtnQkFDQyxTQUFTOzs7dUJBYW5CLEtBQUs7d0JBQ0wsS0FBSzsrQkFDTCxLQUFLOztJQXlFUixvQkFBQztDQUFBLEFBL0VELElBK0VDO1NBNUVZLGFBQWE7OztJQUN4Qiw2QkFBdUM7O0lBQ3ZDLDhCQUEwQjs7SUFDMUIscUNBQThCOztJQStENUIscUNBQW1DOztJQUNuQyxvQ0FBaUM7O0lBQ2pDLGtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIEVsZW1lbnRSZWYsXG4gIERpcmVjdGl2ZSwgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNJY29uRGVmaW5pdGlvbiwgcHJpbnRFcnIsIHdpdGhTdWZmaXgsIGFscmVhZHlIYXNBVGhlbWVTdWZmaXggfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogRGV2ZWxvcGVycyB1c2UgdGhpcyBjb21wb25lbnQgdG8gcmVuZGVyIGFuIFNWRyBlbGVtZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW50SWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgfCBJY29uRGVmaW5pdGlvbjtcbiAgQElucHV0KCkgdGhlbWU6IFRoZW1lVHlwZTtcbiAgQElucHV0KCkgdHdvVG9uZUNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBpY29uIHdpdGggZ2l2ZW4gdHlwZSBhbmQgdGhlbWUuIFJldHVybiBhbiBTVkcgZWxlbWVudCBmb3IgZXh0cmEgYmVoYXZpb3JzIChleHRlbmRlZCBieSBjaGlsZCBjbGFzc2VzKS5cbiAgICovXG4gIHByb3RlY3RlZCBfY2hhbmdlSWNvbigpOiBQcm9taXNlPFNWR0FFbGVtZW50IHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMudHlwZSkge1xuICAgICAgICB0aGlzLl9jbGVhclNWR0VsZW1lbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLmdldFJlbmRlcmVkQ29udGVudCh0aGlzLl9wYXJzZUljb24odGhpcy50eXBlLCB0aGlzLnRoZW1lKSwgdGhpcy50d29Ub25lQ29sb3IpXG4gICAgICAgIC5zdWJzY3JpYmUoc3ZnID0+IHtcbiAgICAgICAgICBpZiAoc3ZnKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHN2Zyk7XG4gICAgICAgICAgICByZXNvbHZlKHN2ZyBhcyBTVkdBRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGFuIGljb24ncyB0eXBlLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9wYXJzZUljb24odHlwZTogc3RyaW5nIHwgSWNvbkRlZmluaXRpb24sIHRoZW1lOiBUaGVtZVR5cGUpOiBJY29uRGVmaW5pdGlvbiB8IHN0cmluZyB7XG4gICAgaWYgKGlzSWNvbkRlZmluaXRpb24odHlwZSkpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYWxyZWFkeUhhc0FUaGVtZVN1ZmZpeCh0eXBlKSkge1xuICAgICAgICBpZiAoISF0aGVtZSkge1xuICAgICAgICAgIHByaW50RXJyKGAndHlwZScgJHt0eXBlfSBhbHJlYWR5IGdldHMgYSB0aGVtZSBpbnNpZGUgc28gJ3RoZW1lJyAke3RoZW1lfSB3b3VsZCBiZSBpZ25vcmVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2l0aFN1ZmZpeCh0eXBlLCB0aGVtZSB8fCB0aGlzLl9pY29uU2VydmljZS5kZWZhdWx0VGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYW4gU1ZHIGVsZW1lbnQgaW50byB0aGUgZGlyZWN0aXZlIGFmdGVyIHJlbW92aW5nIG90aGVyIGljb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9zZXRTVkdFbGVtZW50KHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGY6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2NsZWFyU1ZHRWxlbWVudCgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHNlbGYsIHN2Zyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NsZWFyU1ZHRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmOiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHNlbGYuY2hpbGROb2RlcztcbiAgICBjb25zdCBjaGlsZENvdW50ID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bIGkgXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHNlbGYsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgX2ljb25TZXJ2aWNlOiBJY29uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlSWNvbigpLnRoZW4oKCkgPT4ge1xuICAgIH0pO1xuICB9XG59XG4iXX0=