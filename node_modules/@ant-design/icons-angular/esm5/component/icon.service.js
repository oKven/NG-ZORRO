/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { DOCUMENT } from '@angular/common';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Optional, Inject, RendererFactory2 } from '@angular/core';
import { of as observableOf } from 'rxjs';
import { catchError, map, share, tap } from 'rxjs/operators';
import { getSecondaryColor, withSuffix, isIconDefinition, printErr, printWarn, cloneSVG, withSuffixAndColor, getIconDefinitionFromAbbr, replaceFillColor } from '../utils';
/**
 * @record
 */
export function ReqIconTask() { }
if (false) {
    /** @type {?} */
    ReqIconTask.prototype.ob;
}
var IconService = /** @class */ (function () {
    function IconService(_rendererFactory, _handler, _document) {
        this._rendererFactory = _rendererFactory;
        this._handler = _handler;
        this._document = _document;
        this.defaultTheme = 'outline';
        /**
         * Register icons.
         */
        this._svgDefinitions = new Map();
        /**
         * Register rendered (with color) SVG icons.
         */
        this._svgCachedDefinitions = new Map();
        /**
         * Default color settings.
         */
        this._twoToneColorPalette = {
            primaryColor: '#333333',
            secondaryColor: '#E6E6E6'
        };
        /**
         * A url prefix so users can determine a static asset root.
         */
        this._assetsSource = '';
        /**
         * To note whether a request to an icon is under processing.
         */
        this._httpQueue = new Map();
        this._renderer = this._rendererFactory.createRenderer(null, null);
        if (this._handler) {
            this._http = new HttpClient(this._handler);
        }
    }
    Object.defineProperty(IconService.prototype, "twoToneColor", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (tslib_1.__assign({}, this._twoToneColorPalette))); // Make a copy to avoid unexpected changes.
        },
        set: /**
         * @param {?} __0
         * @return {?}
         */
        function (_a) {
            var primaryColor = _a.primaryColor, secondaryColor = _a.secondaryColor;
            if (primaryColor && typeof primaryColor === 'string' && typeof secondaryColor === 'string' || typeof secondaryColor === 'undefined') {
                this._twoToneColorPalette.primaryColor = primaryColor;
                this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} prefix
     * @return {?}
     */
    IconService.prototype.changeAssetsSource = /**
     * @param {?} prefix
     * @return {?}
     */
    function (prefix) {
        this._assetsSource = prefix.endsWith('/') ? prefix : prefix + '/';
    };
    /**
     * Register IconDefinition provided by Ant Design, parsing AbstractNode to svg string.
     * @param icons
     */
    /**
     * Register IconDefinition provided by Ant Design, parsing AbstractNode to svg string.
     * @param {...?} icons
     * @return {?}
     */
    IconService.prototype.addIcon = /**
     * Register IconDefinition provided by Ant Design, parsing AbstractNode to svg string.
     * @param {...?} icons
     * @return {?}
     */
    function () {
        var icons = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            icons[_i] = arguments[_i];
        }
        this._addIconLiteral.apply(this, tslib_1.__spread(icons));
    };
    /**
     * Register icon.
     * @param icons Icons that users want to use in their projects. User defined icons and predefined
     *   icons provided by ant-design should implement IconDefinition both.
     */
    /**
     * Register icon.
     * @param {...?} icons Icons that users want to use in their projects. User defined icons and predefined
     *   icons provided by ant-design should implement IconDefinition both.
     * @return {?}
     */
    IconService.prototype._addIconLiteral = /**
     * Register icon.
     * @param {...?} icons Icons that users want to use in their projects. User defined icons and predefined
     *   icons provided by ant-design should implement IconDefinition both.
     * @return {?}
     */
    function () {
        var _this = this;
        var icons = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            icons[_i] = arguments[_i];
        }
        icons.forEach(function (icon) {
            _this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
        });
    };
    /**
     * @param {?} key
     * @return {?}
     */
    IconService.prototype._get = /**
     * @param {?} key
     * @return {?}
     */
    function (key) {
        return this._svgDefinitions.get(key) || null;
    };
    /**
     * Get an static file and return it as a string, create a IconDefinition and cache it or return null.
     */
    /**
     * Get an static file and return it as a string, create a IconDefinition and cache it or return null.
     * @param {?} url
     * @return {?}
     */
    IconService.prototype._getFromRemote = /**
     * Get an static file and return it as a string, create a IconDefinition and cache it or return null.
     * @param {?} url
     * @return {?}
     */
    function (url) {
        if (this._http) {
            /** @type {?} */
            var task = this._httpQueue.get(url);
            /** @type {?} */
            var ob = void 0;
            if (task) {
                ob = task.ob;
            }
            else {
                ob = this._createObservableRequest(url);
                task = { ob: ob };
                this._httpQueue.set(url, task);
            }
            return ob;
        }
        else {
            printWarn('You need to import HttpClient module to use dynamic importing');
            return observableOf(null);
        }
    };
    /**
     * @param {?} url
     * @return {?}
     */
    IconService.prototype._createObservableRequest = /**
     * @param {?} url
     * @return {?}
     */
    function (url) {
        var _this = this;
        /** @type {?} */
        var icon = getIconDefinitionFromAbbr(url);
        return this._http.get(this._assetsSource + "assets/" + icon.theme + "/" + icon.name + ".svg", { responseType: 'text' }).pipe(share(), // Use `share` so if multi directives request the same icon, HTTP request would only be fired once.
        tap(function () { return _this._httpQueue.delete(url); }), map(function (svgString) {
            icon.icon = svgString;
            _this._addIconLiteral(icon);
            return icon;
        }), catchError(function () {
            printErr("the icon " + url + " does not exist in your assets folder");
            _this._httpQueue.delete(url);
            return observableOf(null);
        }));
    };
    /**
     * Icon component would call this method to get a SVG element.
     * This method returns a Observable SVG element because when user wants to get an icon dynamically, that would be async,
     * so we provided a unified interface here.
     */
    /**
     * Icon component would call this method to get a SVG element.
     * This method returns a Observable SVG element because when user wants to get an icon dynamically, that would be async,
     * so we provided a unified interface here.
     * @param {?} icon
     * @param {?=} twoToneColor
     * @return {?}
     */
    IconService.prototype.getRenderedContent = /**
     * Icon component would call this method to get a SVG element.
     * This method returns a Observable SVG element because when user wants to get an icon dynamically, that would be async,
     * so we provided a unified interface here.
     * @param {?} icon
     * @param {?=} twoToneColor
     * @return {?}
     */
    function (icon, twoToneColor) {
        var _this = this;
        /** @type {?} */
        var definitionOrNull = isIconDefinition(icon)
            ? (/** @type {?} */ (icon))
            : this._get((/** @type {?} */ (icon)));
        /** @type {?} */
        var $icon = definitionOrNull ? observableOf(definitionOrNull) : this._getFromRemote((/** @type {?} */ (icon)));
        return $icon.pipe(map(function (i) {
            if (i) {
                return _this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
            }
            else {
                printErr("the icon " + icon + " does not exist or is not registered");
                return null;
            }
        }));
    };
    /**
     * @param {?} icon
     * @param {?=} twoToneColor
     * @return {?}
     */
    IconService.prototype._loadSVGFromCacheOrCreateNew = /**
     * @param {?} icon
     * @param {?=} twoToneColor
     * @return {?}
     */
    function (icon, twoToneColor) {
        /** @type {?} */
        var svg;
        /** @type {?} */
        var pri = twoToneColor || this._twoToneColorPalette.primaryColor;
        /** @type {?} */
        var sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
        /** @type {?} */
        var key = withSuffixAndColor(icon.name, icon.theme, pri, sec);
        /** @type {?} */
        var cached = this._svgCachedDefinitions.get(key);
        // If this icon is used before, there should be a copy in cachedDefinitions, just copy it.
        // Otherwise, generate one from string or SVG element, and cache it.
        if (!cached) {
            svg = this._setSVGAttribute(this._colorizeSVGIcon(typeof icon.icon === 'string' ? this._createSVGElementFromString(icon.icon) : icon.icon, icon.theme === 'twotone', pri, sec));
            this._svgCachedDefinitions.set(key, (/** @type {?} */ (tslib_1.__assign({}, icon, { icon: svg }))));
        }
        else {
            svg = cached.icon;
        }
        return cloneSVG(svg);
    };
    /**
     * @param {?} str
     * @return {?}
     */
    IconService.prototype._createSVGElementFromString = /**
     * @param {?} str
     * @return {?}
     */
    function (str) {
        /** @type {?} */
        var colorParsed = replaceFillColor(str);
        /** @type {?} */
        var div = this._document.createElement('div');
        div.innerHTML = colorParsed;
        /** @type {?} */
        var svg = div.querySelector('svg');
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    };
    /**
     * @param {?} svg
     * @return {?}
     */
    IconService.prototype._setSVGAttribute = /**
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        this._renderer.setAttribute(svg, 'width', '1em');
        this._renderer.setAttribute(svg, 'height', '1em');
        return svg;
    };
    /**
     * @param {?} svg
     * @param {?} twotone
     * @param {?} pri
     * @param {?} sec
     * @return {?}
     */
    IconService.prototype._colorizeSVGIcon = /**
     * @param {?} svg
     * @param {?} twotone
     * @param {?} pri
     * @param {?} sec
     * @return {?}
     */
    function (svg, twotone, pri, sec) {
        if (twotone) {
            /** @type {?} */
            var children = svg.childNodes;
            /** @type {?} */
            var length_1 = children.length;
            for (var i = 0; i < length_1; i++) {
                /** @type {?} */
                var child = (/** @type {?} */ (children[i]));
                if (child.getAttribute('fill') === 'secondaryColor') {
                    this._renderer.setAttribute(child, 'fill', sec);
                }
                else {
                    this._renderer.setAttribute(child, 'fill', pri);
                }
            }
        }
        this._renderer.setAttribute(svg, 'fill', 'currentColor');
        return svg;
    };
    /**
     * @return {?}
     */
    IconService.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._svgDefinitions.clear();
    };
    /** @nocollapse */
    IconService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: HttpBackend, decorators: [{ type: Optional }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
    ]; };
    return IconService;
}());
export { IconService };
if (false) {
    /** @type {?} */
    IconService.prototype.defaultTheme;
    /** @type {?} */
    IconService.prototype._renderer;
    /** @type {?} */
    IconService.prototype._http;
    /**
     * Register icons.
     * @type {?}
     */
    IconService.prototype._svgDefinitions;
    /**
     * Register rendered (with color) SVG icons.
     * @type {?}
     */
    IconService.prototype._svgCachedDefinitions;
    /**
     * Default color settings.
     * @type {?}
     */
    IconService.prototype._twoToneColorPalette;
    /**
     * A url prefix so users can determine a static asset root.
     * @type {?}
     */
    IconService.prototype._assetsSource;
    /**
     * To note whether a request to an icon is under processing.
     * @type {?}
     */
    IconService.prototype._httpQueue;
    /** @type {?} */
    IconService.prototype._rendererFactory;
    /** @type {?} */
    IconService.prototype._handler;
    /** @type {?} */
    IconService.prototype._document;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9pY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBYSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQWMsRUFBRSxJQUFJLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFRN0QsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixTQUFTLEVBQ1QsUUFBUSxFQUNSLGtCQUFrQixFQUNsQix5QkFBeUIsRUFDekIsZ0JBQWdCLEVBQ2pCLE1BQU0sVUFBVSxDQUFDOzs7O0FBRWxCLGlDQUVDOzs7SUFEQyx5QkFBc0M7O0FBR3hDO0lBc01FLHFCQUNZLGdCQUFrQyxFQUN0QixRQUFxQixFQUNILFNBQWM7UUFGNUMscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ0gsY0FBUyxHQUFULFNBQVMsQ0FBSztRQXhNeEQsaUJBQVksR0FBYyxTQUFTLENBQUM7Ozs7UUFRMUIsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBMEIsQ0FBQzs7OztRQUtwRCwwQkFBcUIsR0FBRyxJQUFJLEdBQUcsRUFBZ0MsQ0FBQzs7OztRQUtoRSx5QkFBb0IsR0FBd0I7WUFDcEQsWUFBWSxFQUFJLFNBQVM7WUFDekIsY0FBYyxFQUFF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Q0FBNEM7O0lBQzVDLCtCQUEyQzs7SUFDM0MsZ0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgSWNvbkRlZmluaXRpb24sXG4gIENhY2hlZEljb25EZWZpbml0aW9uLFxuICBUd29Ub25lQ29sb3JQYWxldHRlLFxuICBUd29Ub25lQ29sb3JQYWxldHRlU2V0dGVyLFxuICBUaGVtZVR5cGVcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgZ2V0U2Vjb25kYXJ5Q29sb3IsXG4gIHdpdGhTdWZmaXgsXG4gIGlzSWNvbkRlZmluaXRpb24sXG4gIHByaW50RXJyLFxuICBwcmludFdhcm4sXG4gIGNsb25lU1ZHLFxuICB3aXRoU3VmZml4QW5kQ29sb3IsXG4gIGdldEljb25EZWZpbml0aW9uRnJvbUFiYnIsXG4gIHJlcGxhY2VGaWxsQ29sb3Jcbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcUljb25UYXNrIHtcbiAgb2I6IE9ic2VydmFibGU8SWNvbkRlZmluaXRpb24gfCBudWxsPjtcbn1cblxuZXhwb3J0IGNsYXNzIEljb25TZXJ2aWNlIHtcbiAgZGVmYXVsdFRoZW1lOiBUaGVtZVR5cGUgPSAnb3V0bGluZSc7XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQ7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGljb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9zdmdEZWZpbml0aW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBJY29uRGVmaW5pdGlvbj4oKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgcmVuZGVyZWQgKHdpdGggY29sb3IpIFNWRyBpY29ucy5cbiAgICovXG4gIHByb3RlY3RlZCBfc3ZnQ2FjaGVkRGVmaW5pdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgQ2FjaGVkSWNvbkRlZmluaXRpb24+KCk7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY29sb3Igc2V0dGluZ3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3R3b1RvbmVDb2xvclBhbGV0dGU6IFR3b1RvbmVDb2xvclBhbGV0dGUgPSB7XG4gICAgcHJpbWFyeUNvbG9yICA6ICcjMzMzMzMzJyxcbiAgICBzZWNvbmRhcnlDb2xvcjogJyNFNkU2RTYnXG4gIH07XG5cbiAgLyoqXG4gICAqIEEgdXJsIHByZWZpeCBzbyB1c2VycyBjYW4gZGV0ZXJtaW5lIGEgc3RhdGljIGFzc2V0IHJvb3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2Fzc2V0c1NvdXJjZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBUbyBub3RlIHdoZXRoZXIgYSByZXF1ZXN0IHRvIGFuIGljb24gaXMgdW5kZXIgcHJvY2Vzc2luZy5cbiAgICovXG4gIHByb3RlY3RlZCBfaHR0cFF1ZXVlID0gbmV3IE1hcDxzdHJpbmcsIFJlcUljb25UYXNrPigpO1xuXG4gIHNldCB0d29Ub25lQ29sb3IoeyBwcmltYXJ5Q29sb3IsIHNlY29uZGFyeUNvbG9yIH06IFR3b1RvbmVDb2xvclBhbGV0dGVTZXR0ZXIpIHtcbiAgICBpZiAocHJpbWFyeUNvbG9yICYmIHR5cGVvZiBwcmltYXJ5Q29sb3IgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZWNvbmRhcnlDb2xvciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHNlY29uZGFyeUNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fdHdvVG9uZUNvbG9yUGFsZXR0ZS5wcmltYXJ5Q29sb3IgPSBwcmltYXJ5Q29sb3I7XG4gICAgICB0aGlzLl90d29Ub25lQ29sb3JQYWxldHRlLnNlY29uZGFyeUNvbG9yID0gc2Vjb25kYXJ5Q29sb3IgfHwgZ2V0U2Vjb25kYXJ5Q29sb3IocHJpbWFyeUNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdHdvVG9uZUNvbG9yKCk6IFR3b1RvbmVDb2xvclBhbGV0dGVTZXR0ZXIge1xuICAgIHJldHVybiB7IC4uLnRoaXMuX3R3b1RvbmVDb2xvclBhbGV0dGUgfSBhcyBUd29Ub25lQ29sb3JQYWxldHRlOyAvLyBNYWtlIGEgY29weSB0byBhdm9pZCB1bmV4cGVjdGVkIGNoYW5nZXMuXG4gIH1cblxuICBjaGFuZ2VBc3NldHNTb3VyY2UocHJlZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9hc3NldHNTb3VyY2UgPSBwcmVmaXguZW5kc1dpdGgoJy8nKSA/IHByZWZpeCA6IHByZWZpeCArICcvJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBJY29uRGVmaW5pdGlvbiBwcm92aWRlZCBieSBBbnQgRGVzaWduLCBwYXJzaW5nIEFic3RyYWN0Tm9kZSB0byBzdmcgc3RyaW5nLlxuICAgKiBAcGFyYW0gaWNvbnNcbiAgICovXG4gIGFkZEljb24oLi4uaWNvbnM6IEljb25EZWZpbml0aW9uW10pOiB2b2lkIHtcbiAgICB0aGlzLl9hZGRJY29uTGl0ZXJhbCguLi5pY29ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgaWNvbi5cbiAgICogQHBhcmFtIGljb25zIEljb25zIHRoYXQgdXNlcnMgd2FudCB0byB1c2UgaW4gdGhlaXIgcHJvamVjdHMuIFVzZXIgZGVmaW5lZCBpY29ucyBhbmQgcHJlZGVmaW5lZFxuICAgKiAgIGljb25zIHByb3ZpZGVkIGJ5IGFudC1kZXNpZ24gc2hvdWxkIGltcGxlbWVudCBJY29uRGVmaW5pdGlvbiBib3RoLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9hZGRJY29uTGl0ZXJhbCguLi5pY29uczogSWNvbkRlZmluaXRpb25bXSk6IHZvaWQge1xuICAgIGljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICB0aGlzLl9zdmdEZWZpbml0aW9ucy5zZXQod2l0aFN1ZmZpeChpY29uLm5hbWUsIGljb24udGhlbWUpLCBpY29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0KGtleTogc3RyaW5nKTogSWNvbkRlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc3ZnRGVmaW5pdGlvbnMuZ2V0KGtleSkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gc3RhdGljIGZpbGUgYW5kIHJldHVybiBpdCBhcyBhIHN0cmluZywgY3JlYXRlIGEgSWNvbkRlZmluaXRpb24gYW5kIGNhY2hlIGl0IG9yIHJldHVybiBudWxsLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9nZXRGcm9tUmVtb3RlKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJY29uRGVmaW5pdGlvbiB8IG51bGw+IHtcbiAgICBpZiAodGhpcy5faHR0cCkge1xuICAgICAgbGV0IHRhc2sgPSB0aGlzLl9odHRwUXVldWUuZ2V0KHVybCk7XG4gICAgICBsZXQgb2I6IE9ic2VydmFibGU8SWNvbkRlZmluaXRpb24gfCBudWxsPjtcbiAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgIG9iID0gdGFzay5vYjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iID0gdGhpcy5fY3JlYXRlT2JzZXJ2YWJsZVJlcXVlc3QodXJsKTtcbiAgICAgICAgdGFzayA9IHsgb2IgfTtcbiAgICAgICAgdGhpcy5faHR0cFF1ZXVlLnNldCh1cmwsIHRhc2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmludFdhcm4oJ1lvdSBuZWVkIHRvIGltcG9ydCBIdHRwQ2xpZW50IG1vZHVsZSB0byB1c2UgZHluYW1pYyBpbXBvcnRpbmcnKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlT2JzZXJ2YWJsZVJlcXVlc3QodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEljb25EZWZpbml0aW9uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGljb246IEljb25EZWZpbml0aW9uID0gZ2V0SWNvbkRlZmluaXRpb25Gcm9tQWJicih1cmwpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcbiAgICAgIGAke3RoaXMuX2Fzc2V0c1NvdXJjZX1hc3NldHMvJHtpY29uLnRoZW1lfS8ke2ljb24ubmFtZX0uc3ZnYCxcbiAgICAgIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfVxuICAgICkucGlwZShcbiAgICAgIHNoYXJlKCksIC8vIFVzZSBgc2hhcmVgIHNvIGlmIG11bHRpIGRpcmVjdGl2ZXMgcmVxdWVzdCB0aGUgc2FtZSBpY29uLCBIVFRQIHJlcXVlc3Qgd291bGQgb25seSBiZSBmaXJlZCBvbmNlLlxuICAgICAgdGFwKCgpID0+IHRoaXMuX2h0dHBRdWV1ZS5kZWxldGUodXJsKSksXG4gICAgICBtYXAoc3ZnU3RyaW5nID0+IHtcbiAgICAgICAgaWNvbi5pY29uID0gc3ZnU3RyaW5nO1xuICAgICAgICB0aGlzLl9hZGRJY29uTGl0ZXJhbChpY29uKTtcbiAgICAgICAgcmV0dXJuIGljb247XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICBwcmludEVycihgdGhlIGljb24gJHt1cmx9IGRvZXMgbm90IGV4aXN0IGluIHlvdXIgYXNzZXRzIGZvbGRlcmApO1xuICAgICAgICB0aGlzLl9odHRwUXVldWUuZGVsZXRlKHVybCk7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSWNvbiBjb21wb25lbnQgd291bGQgY2FsbCB0aGlzIG1ldGhvZCB0byBnZXQgYSBTVkcgZWxlbWVudC5cbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhIE9ic2VydmFibGUgU1ZHIGVsZW1lbnQgYmVjYXVzZSB3aGVuIHVzZXIgd2FudHMgdG8gZ2V0IGFuIGljb24gZHluYW1pY2FsbHksIHRoYXQgd291bGQgYmUgYXN5bmMsXG4gICAqIHNvIHdlIHByb3ZpZGVkIGEgdW5pZmllZCBpbnRlcmZhY2UgaGVyZS5cbiAgICovXG4gIGdldFJlbmRlcmVkQ29udGVudChpY29uOiBJY29uRGVmaW5pdGlvbiB8IHN0cmluZywgdHdvVG9uZUNvbG9yPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50IHwgbnVsbD4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25Pck51bGw6IEljb25EZWZpbml0aW9uIHwgbnVsbCA9IGlzSWNvbkRlZmluaXRpb24oaWNvbilcbiAgICAgID8gaWNvbiBhcyBJY29uRGVmaW5pdGlvblxuICAgICAgOiB0aGlzLl9nZXQoaWNvbiBhcyBzdHJpbmcpO1xuICAgIGNvbnN0ICRpY29uID0gZGVmaW5pdGlvbk9yTnVsbCA/IG9ic2VydmFibGVPZihkZWZpbml0aW9uT3JOdWxsKSA6IHRoaXMuX2dldEZyb21SZW1vdGUoaWNvbiBhcyBzdHJpbmcpO1xuXG4gICAgcmV0dXJuICRpY29uLnBpcGUoXG4gICAgICBtYXAoaSA9PiB7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRTVkdGcm9tQ2FjaGVPckNyZWF0ZU5ldyhpLCB0d29Ub25lQ29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50RXJyKGB0aGUgaWNvbiAke2ljb259IGRvZXMgbm90IGV4aXN0IG9yIGlzIG5vdCByZWdpc3RlcmVkYCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbG9hZFNWR0Zyb21DYWNoZU9yQ3JlYXRlTmV3KGljb246IEljb25EZWZpbml0aW9uLCB0d29Ub25lQ29sb3I/OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBsZXQgc3ZnOiBTVkdFbGVtZW50O1xuICAgIGNvbnN0IHByaSA9IHR3b1RvbmVDb2xvciB8fCB0aGlzLl90d29Ub25lQ29sb3JQYWxldHRlLnByaW1hcnlDb2xvcjtcbiAgICBjb25zdCBzZWMgPSBnZXRTZWNvbmRhcnlDb2xvcihwcmkpIHx8IHRoaXMuX3R3b1RvbmVDb2xvclBhbGV0dGUuc2Vjb25kYXJ5Q29sb3I7XG4gICAgY29uc3Qga2V5ID0gd2l0aFN1ZmZpeEFuZENvbG9yKGljb24ubmFtZSwgaWNvbi50aGVtZSwgcHJpLCBzZWMpO1xuICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMuX3N2Z0NhY2hlZERlZmluaXRpb25zLmdldChrZXkpO1xuXG4gICAgLy8gSWYgdGhpcyBpY29uIGlzIHVzZWQgYmVmb3JlLCB0aGVyZSBzaG91bGQgYmUgYSBjb3B5IGluIGNhY2hlZERlZmluaXRpb25zLCBqdXN0IGNvcHkgaXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBnZW5lcmF0ZSBvbmUgZnJvbSBzdHJpbmcgb3IgU1ZHIGVsZW1lbnQsIGFuZCBjYWNoZSBpdC5cbiAgICBpZiAoIWNhY2hlZCkge1xuICAgICAgc3ZnID0gdGhpcy5fc2V0U1ZHQXR0cmlidXRlKHRoaXMuX2NvbG9yaXplU1ZHSWNvbihcbiAgICAgICAgdHlwZW9mIGljb24uaWNvbiA9PT0gJ3N0cmluZycgPyB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhpY29uLmljb24pIDogaWNvbi5pY29uLFxuICAgICAgICBpY29uLnRoZW1lID09PSAndHdvdG9uZScsXG4gICAgICAgIHByaSxcbiAgICAgICAgc2VjXG4gICAgICApKTtcbiAgICAgIHRoaXMuX3N2Z0NhY2hlZERlZmluaXRpb25zLnNldChrZXksIHsgLi4uaWNvbiwgaWNvbjogc3ZnIH0gYXMgQ2FjaGVkSWNvbkRlZmluaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdmcgPSBjYWNoZWQuaWNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVTVkcoc3ZnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBjb2xvclBhcnNlZCA9IHJlcGxhY2VGaWxsQ29sb3Ioc3RyKTtcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gY29sb3JQYXJzZWQ7XG4gICAgY29uc3Qgc3ZnOiBTVkdFbGVtZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgIGlmICghc3ZnKSB7XG4gICAgICB0aHJvdyBFcnJvcignPHN2Zz4gdGFnIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXRTVkdBdHRyaWJ1dGUoc3ZnOiBTVkdFbGVtZW50KTogU1ZHRWxlbWVudCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3dpZHRoJywgJzFlbScpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdoZWlnaHQnLCAnMWVtJyk7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29sb3JpemVTVkdJY29uKHN2ZzogU1ZHRWxlbWVudCwgdHdvdG9uZTogYm9vbGVhbiwgcHJpOiBzdHJpbmcsIHNlYzogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgaWYgKHR3b3RvbmUpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gc3ZnLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkOiBIVE1MRWxlbWVudCA9IGNoaWxkcmVuWyBpIF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSA9PT0gJ3NlY29uZGFyeUNvbG9yJykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShjaGlsZCwgJ2ZpbGwnLCBzZWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShjaGlsZCwgJ2ZpbGwnLCBwcmkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9zdmdEZWZpbml0aW9ucy5jbGVhcigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIF9oYW5kbGVyOiBIdHRwQmFja2VuZCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSB0aGlzLl9yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgaWYgKHRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIHRoaXMuX2h0dHAgPSBuZXcgSHR0cENsaWVudCh0aGlzLl9oYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==