/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
export class IconService {
    /**
     * @param {?} _rendererFactory
     * @param {?} _handler
     * @param {?} _document
     */
    constructor(_rendererFactory, _handler, _document) {
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
    /**
     * @param {?} __0
     * @return {?}
     */
    set twoToneColor({ primaryColor, secondaryColor }) {
        if (primaryColor && typeof primaryColor === 'string' && typeof secondaryColor === 'string' || typeof secondaryColor === 'undefined') {
            this._twoToneColorPalette.primaryColor = primaryColor;
            this._twoToneColorPalette.secondaryColor = secondaryColor || getSecondaryColor(primaryColor);
        }
    }
    /**
     * @return {?}
     */
    get twoToneColor() {
        return (/** @type {?} */ (Object.assign({}, this._twoToneColorPalette))); // Make a copy to avoid unexpected changes.
    }
    /**
     * @param {?} prefix
     * @return {?}
     */
    changeAssetsSource(prefix) {
        this._assetsSource = prefix.endsWith('/') ? prefix : prefix + '/';
    }
    /**
     * Register IconDefinition provided by Ant Design, parsing AbstractNode to svg string.
     * @param {...?} icons
     * @return {?}
     */
    addIcon(...icons) {
        this._addIconLiteral(...icons);
    }
    /**
     * Register icon.
     * @param {...?} icons Icons that users want to use in their projects. User defined icons and predefined
     *   icons provided by ant-design should implement IconDefinition both.
     * @return {?}
     */
    _addIconLiteral(...icons) {
        icons.forEach(icon => {
            this._svgDefinitions.set(withSuffix(icon.name, icon.theme), icon);
        });
    }
    /**
     * @param {?} key
     * @return {?}
     */
    _get(key) {
        return this._svgDefinitions.get(key) || null;
    }
    /**
     * Get an static file and return it as a string, create a IconDefinition and cache it or return null.
     * @param {?} url
     * @return {?}
     */
    _getFromRemote(url) {
        if (this._http) {
            /** @type {?} */
            let task = this._httpQueue.get(url);
            /** @type {?} */
            let ob;
            if (task) {
                ob = task.ob;
            }
            else {
                ob = this._createObservableRequest(url);
                task = { ob };
                this._httpQueue.set(url, task);
            }
            return ob;
        }
        else {
            printWarn('You need to import HttpClient module to use dynamic importing');
            return observableOf(null);
        }
    }
    /**
     * @param {?} url
     * @return {?}
     */
    _createObservableRequest(url) {
        /** @type {?} */
        const icon = getIconDefinitionFromAbbr(url);
        return this._http.get(`${this._assetsSource}assets/${icon.theme}/${icon.name}.svg`, { responseType: 'text' }).pipe(share(), // Use `share` so if multi directives request the same icon, HTTP request would only be fired once.
        tap(() => this._httpQueue.delete(url)), map(svgString => {
            icon.icon = svgString;
            this._addIconLiteral(icon);
            return icon;
        }), catchError(() => {
            printErr(`the icon ${url} does not exist in your assets folder`);
            this._httpQueue.delete(url);
            return observableOf(null);
        }));
    }
    /**
     * Icon component would call this method to get a SVG element.
     * This method returns a Observable SVG element because when user wants to get an icon dynamically, that would be async,
     * so we provided a unified interface here.
     * @param {?} icon
     * @param {?=} twoToneColor
     * @return {?}
     */
    getRenderedContent(icon, twoToneColor) {
        /** @type {?} */
        const definitionOrNull = isIconDefinition(icon)
            ? (/** @type {?} */ (icon))
            : this._get((/** @type {?} */ (icon)));
        /** @type {?} */
        const $icon = definitionOrNull ? observableOf(definitionOrNull) : this._getFromRemote((/** @type {?} */ (icon)));
        return $icon.pipe(map(i => {
            if (i) {
                return this._loadSVGFromCacheOrCreateNew(i, twoToneColor);
            }
            else {
                printErr(`the icon ${icon} does not exist or is not registered`);
                return null;
            }
        }));
    }
    /**
     * @param {?} icon
     * @param {?=} twoToneColor
     * @return {?}
     */
    _loadSVGFromCacheOrCreateNew(icon, twoToneColor) {
        /** @type {?} */
        let svg;
        /** @type {?} */
        const pri = twoToneColor || this._twoToneColorPalette.primaryColor;
        /** @type {?} */
        const sec = getSecondaryColor(pri) || this._twoToneColorPalette.secondaryColor;
        /** @type {?} */
        const key = withSuffixAndColor(icon.name, icon.theme, pri, sec);
        /** @type {?} */
        const cached = this._svgCachedDefinitions.get(key);
        // If this icon is used before, there should be a copy in cachedDefinitions, just copy it.
        // Otherwise, generate one from string or SVG element, and cache it.
        if (!cached) {
            svg = this._setSVGAttribute(this._colorizeSVGIcon(typeof icon.icon === 'string' ? this._createSVGElementFromString(icon.icon) : icon.icon, icon.theme === 'twotone', pri, sec));
            this._svgCachedDefinitions.set(key, (/** @type {?} */ (Object.assign({}, icon, { icon: svg }))));
        }
        else {
            svg = cached.icon;
        }
        return cloneSVG(svg);
    }
    /**
     * @param {?} str
     * @return {?}
     */
    _createSVGElementFromString(str) {
        /** @type {?} */
        const colorParsed = replaceFillColor(str);
        /** @type {?} */
        const div = this._document.createElement('div');
        div.innerHTML = colorParsed;
        /** @type {?} */
        const svg = div.querySelector('svg');
        if (!svg) {
            throw Error('<svg> tag not found');
        }
        return svg;
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    _setSVGAttribute(svg) {
        this._renderer.setAttribute(svg, 'width', '1em');
        this._renderer.setAttribute(svg, 'height', '1em');
        return svg;
    }
    /**
     * @param {?} svg
     * @param {?} twotone
     * @param {?} pri
     * @param {?} sec
     * @return {?}
     */
    _colorizeSVGIcon(svg, twotone, pri, sec) {
        if (twotone) {
            /** @type {?} */
            const children = svg.childNodes;
            /** @type {?} */
            const length = children.length;
            for (let i = 0; i < length; i++) {
                /** @type {?} */
                const child = (/** @type {?} */ (children[i]));
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
    }
    /**
     * @return {?}
     */
    clear() {
        this._svgDefinitions.clear();
    }
}
/** @nocollapse */
IconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci8iLCJzb3VyY2VzIjpbImNvbXBvbmVudC9pY29uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlFLE9BQU8sRUFBYyxFQUFFLElBQUksWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVE3RCxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsUUFBUSxFQUNSLFNBQVMsRUFDVCxRQUFRLEVBQ1Isa0JBQWtCLEVBQ2xCLHlCQUF5QixFQUN6QixnQkFBZ0IsRUFDakIsTUFBTSxVQUFVLENBQUM7Ozs7QUFFbEIsaUNBRUM7OztJQURDLHlCQUFzQzs7QUFHeEMsTUFBTSxPQUFPLFdBQVc7Ozs7OztJQXNNdEIsWUFDWSxnQkFBa0MsRUFDdEIsUUFBcUIsRUFDSCxTQUFjO1FBRjVDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNILGNBQVMsR0FBVCxTQUFTLENBQUs7UUF4TXhELGlCQUFZLEdBQWMsU0FBUyxDQUFDOzs7O1FBUTFCLG9CQUFlLEdBQUcsSUFBSSxHQUFHLEVBQTBCLENBQUM7Ozs7UUFLcEQsMEJBQXFCLEdBQUcsSUFBSSxHQUFHLEVBQWdDLENBQUM7Ozs7UUFLaEUseUJBQW9CLEdBQXdCO1lBQ3BELFlBQVksRUFBSSxT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TSxDQUFDLEtBQUssZ0JBQWdCLEVBQUU7b0JBQ25ELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ2pEO3FCQUFNO29CQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLENBQUM7aUJBQ2pEO2FBQ0Y7U0FDRjtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDekQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7OztZQTlObUMsZ0JBQWdCO1lBRGpDLFdBQVcsdUJBbU8zQixRQUFROzRDQUNSLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTs7OztJQXhNOUIsbUNBQW9DOztJQUVwQyxnQ0FBK0I7O0lBQy9CLDRCQUE0Qjs7Ozs7SUFLNUIsc0NBQThEOzs7OztJQUs5RCw0Q0FBMEU7Ozs7O0lBSzFFLDJDQUdFOzs7OztJQUtGLG9DQUE2Qjs7Ozs7SUFLN0IsaUNBQXNEOztJQXVLcEQsdUNBQTRDOztJQUM1QywrQkFBMkM7O0lBQzNDLGdDQUFzRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEljb25EZWZpbml0aW9uLFxuICBDYWNoZWRJY29uRGVmaW5pdGlvbixcbiAgVHdvVG9uZUNvbG9yUGFsZXR0ZSxcbiAgVHdvVG9uZUNvbG9yUGFsZXR0ZVNldHRlcixcbiAgVGhlbWVUeXBlXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIGdldFNlY29uZGFyeUNvbG9yLFxuICB3aXRoU3VmZml4LFxuICBpc0ljb25EZWZpbml0aW9uLFxuICBwcmludEVycixcbiAgcHJpbnRXYXJuLFxuICBjbG9uZVNWRyxcbiAgd2l0aFN1ZmZpeEFuZENvbG9yLFxuICBnZXRJY29uRGVmaW5pdGlvbkZyb21BYmJyLFxuICByZXBsYWNlRmlsbENvbG9yXG59IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXFJY29uVGFzayB7XG4gIG9iOiBPYnNlcnZhYmxlPEljb25EZWZpbml0aW9uIHwgbnVsbD47XG59XG5cbmV4cG9ydCBjbGFzcyBJY29uU2VydmljZSB7XG4gIGRlZmF1bHRUaGVtZTogVGhlbWVUeXBlID0gJ291dGxpbmUnO1xuXG4gIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBpY29ucy5cbiAgICovXG4gIHByb3RlY3RlZCBfc3ZnRGVmaW5pdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgSWNvbkRlZmluaXRpb24+KCk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHJlbmRlcmVkICh3aXRoIGNvbG9yKSBTVkcgaWNvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3N2Z0NhY2hlZERlZmluaXRpb25zID0gbmV3IE1hcDxzdHJpbmcsIENhY2hlZEljb25EZWZpbml0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNvbG9yIHNldHRpbmdzLlxuICAgKi9cbiAgcHJvdGVjdGVkIF90d29Ub25lQ29sb3JQYWxldHRlOiBUd29Ub25lQ29sb3JQYWxldHRlID0ge1xuICAgIHByaW1hcnlDb2xvciAgOiAnIzMzMzMzMycsXG4gICAgc2Vjb25kYXJ5Q29sb3I6ICcjRTZFNkU2J1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIHVybCBwcmVmaXggc28gdXNlcnMgY2FuIGRldGVybWluZSBhIHN0YXRpYyBhc3NldCByb290LlxuICAgKi9cbiAgcHJvdGVjdGVkIF9hc3NldHNTb3VyY2UgPSAnJztcblxuICAvKipcbiAgICogVG8gbm90ZSB3aGV0aGVyIGEgcmVxdWVzdCB0byBhbiBpY29uIGlzIHVuZGVyIHByb2Nlc3NpbmcuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2h0dHBRdWV1ZSA9IG5ldyBNYXA8c3RyaW5nLCBSZXFJY29uVGFzaz4oKTtcblxuICBzZXQgdHdvVG9uZUNvbG9yKHsgcHJpbWFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvciB9OiBUd29Ub25lQ29sb3JQYWxldHRlU2V0dGVyKSB7XG4gICAgaWYgKHByaW1hcnlDb2xvciAmJiB0eXBlb2YgcHJpbWFyeUNvbG9yID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kYXJ5Q29sb3IgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzZWNvbmRhcnlDb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3R3b1RvbmVDb2xvclBhbGV0dGUucHJpbWFyeUNvbG9yID0gcHJpbWFyeUNvbG9yO1xuICAgICAgdGhpcy5fdHdvVG9uZUNvbG9yUGFsZXR0ZS5zZWNvbmRhcnlDb2xvciA9IHNlY29uZGFyeUNvbG9yIHx8IGdldFNlY29uZGFyeUNvbG9yKHByaW1hcnlDb2xvcik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHR3b1RvbmVDb2xvcigpOiBUd29Ub25lQ29sb3JQYWxldHRlU2V0dGVyIHtcbiAgICByZXR1cm4geyAuLi50aGlzLl90d29Ub25lQ29sb3JQYWxldHRlIH0gYXMgVHdvVG9uZUNvbG9yUGFsZXR0ZTsgLy8gTWFrZSBhIGNvcHkgdG8gYXZvaWQgdW5leHBlY3RlZCBjaGFuZ2VzLlxuICB9XG5cbiAgY2hhbmdlQXNzZXRzU291cmNlKHByZWZpeDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fYXNzZXRzU291cmNlID0gcHJlZml4LmVuZHNXaXRoKCcvJykgPyBwcmVmaXggOiBwcmVmaXggKyAnLyc7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgSWNvbkRlZmluaXRpb24gcHJvdmlkZWQgYnkgQW50IERlc2lnbiwgcGFyc2luZyBBYnN0cmFjdE5vZGUgdG8gc3ZnIHN0cmluZy5cbiAgICogQHBhcmFtIGljb25zXG4gICAqL1xuICBhZGRJY29uKC4uLmljb25zOiBJY29uRGVmaW5pdGlvbltdKTogdm9pZCB7XG4gICAgdGhpcy5fYWRkSWNvbkxpdGVyYWwoLi4uaWNvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGljb24uXG4gICAqIEBwYXJhbSBpY29ucyBJY29ucyB0aGF0IHVzZXJzIHdhbnQgdG8gdXNlIGluIHRoZWlyIHByb2plY3RzLiBVc2VyIGRlZmluZWQgaWNvbnMgYW5kIHByZWRlZmluZWRcbiAgICogICBpY29ucyBwcm92aWRlZCBieSBhbnQtZGVzaWduIHNob3VsZCBpbXBsZW1lbnQgSWNvbkRlZmluaXRpb24gYm90aC5cbiAgICovXG4gIHByb3RlY3RlZCBfYWRkSWNvbkxpdGVyYWwoLi4uaWNvbnM6IEljb25EZWZpbml0aW9uW10pOiB2b2lkIHtcbiAgICBpY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgdGhpcy5fc3ZnRGVmaW5pdGlvbnMuc2V0KHdpdGhTdWZmaXgoaWNvbi5uYW1lLCBpY29uLnRoZW1lKSwgaWNvbik7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldChrZXk6IHN0cmluZyk6IEljb25EZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3N2Z0RlZmluaXRpb25zLmdldChrZXkpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIHN0YXRpYyBmaWxlIGFuZCByZXR1cm4gaXQgYXMgYSBzdHJpbmcsIGNyZWF0ZSBhIEljb25EZWZpbml0aW9uIGFuZCBjYWNoZSBpdCBvciByZXR1cm4gbnVsbC5cbiAgICovXG4gIHByb3RlY3RlZCBfZ2V0RnJvbVJlbW90ZSh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8SWNvbkRlZmluaXRpb24gfCBudWxsPiB7XG4gICAgaWYgKHRoaXMuX2h0dHApIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy5faHR0cFF1ZXVlLmdldCh1cmwpO1xuICAgICAgbGV0IG9iOiBPYnNlcnZhYmxlPEljb25EZWZpbml0aW9uIHwgbnVsbD47XG4gICAgICBpZiAodGFzaykge1xuICAgICAgICBvYiA9IHRhc2sub2I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYiA9IHRoaXMuX2NyZWF0ZU9ic2VydmFibGVSZXF1ZXN0KHVybCk7XG4gICAgICAgIHRhc2sgPSB7IG9iIH07XG4gICAgICAgIHRoaXMuX2h0dHBRdWV1ZS5zZXQodXJsLCB0YXNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpbnRXYXJuKCdZb3UgbmVlZCB0byBpbXBvcnQgSHR0cENsaWVudCBtb2R1bGUgdG8gdXNlIGR5bmFtaWMgaW1wb3J0aW5nJyk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZU9ic2VydmFibGVSZXF1ZXN0KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJY29uRGVmaW5pdGlvbiB8IG51bGw+IHtcbiAgICBjb25zdCBpY29uOiBJY29uRGVmaW5pdGlvbiA9IGdldEljb25EZWZpbml0aW9uRnJvbUFiYnIodXJsKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXG4gICAgICBgJHt0aGlzLl9hc3NldHNTb3VyY2V9YXNzZXRzLyR7aWNvbi50aGVtZX0vJHtpY29uLm5hbWV9LnN2Z2AsXG4gICAgICB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH1cbiAgICApLnBpcGUoXG4gICAgICBzaGFyZSgpLCAvLyBVc2UgYHNoYXJlYCBzbyBpZiBtdWx0aSBkaXJlY3RpdmVzIHJlcXVlc3QgdGhlIHNhbWUgaWNvbiwgSFRUUCByZXF1ZXN0IHdvdWxkIG9ubHkgYmUgZmlyZWQgb25jZS5cbiAgICAgIHRhcCgoKSA9PiB0aGlzLl9odHRwUXVldWUuZGVsZXRlKHVybCkpLFxuICAgICAgbWFwKHN2Z1N0cmluZyA9PiB7XG4gICAgICAgIGljb24uaWNvbiA9IHN2Z1N0cmluZztcbiAgICAgICAgdGhpcy5fYWRkSWNvbkxpdGVyYWwoaWNvbik7XG4gICAgICAgIHJldHVybiBpY29uO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgcHJpbnRFcnIoYHRoZSBpY29uICR7dXJsfSBkb2VzIG5vdCBleGlzdCBpbiB5b3VyIGFzc2V0cyBmb2xkZXJgKTtcbiAgICAgICAgdGhpcy5faHR0cFF1ZXVlLmRlbGV0ZSh1cmwpO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEljb24gY29tcG9uZW50IHdvdWxkIGNhbGwgdGhpcyBtZXRob2QgdG8gZ2V0IGEgU1ZHIGVsZW1lbnQuXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBPYnNlcnZhYmxlIFNWRyBlbGVtZW50IGJlY2F1c2Ugd2hlbiB1c2VyIHdhbnRzIHRvIGdldCBhbiBpY29uIGR5bmFtaWNhbGx5LCB0aGF0IHdvdWxkIGJlIGFzeW5jLFxuICAgKiBzbyB3ZSBwcm92aWRlZCBhIHVuaWZpZWQgaW50ZXJmYWNlIGhlcmUuXG4gICAqL1xuICBnZXRSZW5kZXJlZENvbnRlbnQoaWNvbjogSWNvbkRlZmluaXRpb24gfCBzdHJpbmcsIHR3b1RvbmVDb2xvcj86IHN0cmluZyk6IE9ic2VydmFibGU8U1ZHRWxlbWVudCB8IG51bGw+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uT3JOdWxsOiBJY29uRGVmaW5pdGlvbiB8IG51bGwgPSBpc0ljb25EZWZpbml0aW9uKGljb24pXG4gICAgICA/IGljb24gYXMgSWNvbkRlZmluaXRpb25cbiAgICAgIDogdGhpcy5fZ2V0KGljb24gYXMgc3RyaW5nKTtcbiAgICBjb25zdCAkaWNvbiA9IGRlZmluaXRpb25Pck51bGwgPyBvYnNlcnZhYmxlT2YoZGVmaW5pdGlvbk9yTnVsbCkgOiB0aGlzLl9nZXRGcm9tUmVtb3RlKGljb24gYXMgc3RyaW5nKTtcblxuICAgIHJldHVybiAkaWNvbi5waXBlKFxuICAgICAgbWFwKGkgPT4ge1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkU1ZHRnJvbUNhY2hlT3JDcmVhdGVOZXcoaSwgdHdvVG9uZUNvbG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludEVycihgdGhlIGljb24gJHtpY29ufSBkb2VzIG5vdCBleGlzdCBvciBpcyBub3QgcmVnaXN0ZXJlZGApO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2xvYWRTVkdGcm9tQ2FjaGVPckNyZWF0ZU5ldyhpY29uOiBJY29uRGVmaW5pdGlvbiwgdHdvVG9uZUNvbG9yPzogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgbGV0IHN2ZzogU1ZHRWxlbWVudDtcbiAgICBjb25zdCBwcmkgPSB0d29Ub25lQ29sb3IgfHwgdGhpcy5fdHdvVG9uZUNvbG9yUGFsZXR0ZS5wcmltYXJ5Q29sb3I7XG4gICAgY29uc3Qgc2VjID0gZ2V0U2Vjb25kYXJ5Q29sb3IocHJpKSB8fCB0aGlzLl90d29Ub25lQ29sb3JQYWxldHRlLnNlY29uZGFyeUNvbG9yO1xuICAgIGNvbnN0IGtleSA9IHdpdGhTdWZmaXhBbmRDb2xvcihpY29uLm5hbWUsIGljb24udGhlbWUsIHByaSwgc2VjKTtcbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLl9zdmdDYWNoZWREZWZpbml0aW9ucy5nZXQoa2V5KTtcblxuICAgIC8vIElmIHRoaXMgaWNvbiBpcyB1c2VkIGJlZm9yZSwgdGhlcmUgc2hvdWxkIGJlIGEgY29weSBpbiBjYWNoZWREZWZpbml0aW9ucywganVzdCBjb3B5IGl0LlxuICAgIC8vIE90aGVyd2lzZSwgZ2VuZXJhdGUgb25lIGZyb20gc3RyaW5nIG9yIFNWRyBlbGVtZW50LCBhbmQgY2FjaGUgaXQuXG4gICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgIHN2ZyA9IHRoaXMuX3NldFNWR0F0dHJpYnV0ZSh0aGlzLl9jb2xvcml6ZVNWR0ljb24oXG4gICAgICAgIHR5cGVvZiBpY29uLmljb24gPT09ICdzdHJpbmcnID8gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoaWNvbi5pY29uKSA6IGljb24uaWNvbixcbiAgICAgICAgaWNvbi50aGVtZSA9PT0gJ3R3b3RvbmUnLFxuICAgICAgICBwcmksXG4gICAgICAgIHNlY1xuICAgICAgKSk7XG4gICAgICB0aGlzLl9zdmdDYWNoZWREZWZpbml0aW9ucy5zZXQoa2V5LCB7IC4uLmljb24sIGljb246IHN2ZyB9IGFzIENhY2hlZEljb25EZWZpbml0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnID0gY2FjaGVkLmljb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lU1ZHKHN2Zyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NyZWF0ZVNWR0VsZW1lbnRGcm9tU3RyaW5nKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgY29sb3JQYXJzZWQgPSByZXBsYWNlRmlsbENvbG9yKHN0cik7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGNvbG9yUGFyc2VkO1xuICAgIGNvbnN0IHN2ZzogU1ZHRWxlbWVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoIXN2Zykge1xuICAgICAgdGhyb3cgRXJyb3IoJzxzdmc+IHRhZyBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByb3RlY3RlZCBfc2V0U1ZHQXR0cmlidXRlKHN2ZzogU1ZHRWxlbWVudCk6IFNWR0VsZW1lbnQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd3aWR0aCcsICcxZW0nKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnaGVpZ2h0JywgJzFlbScpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbG9yaXplU1ZHSWNvbihzdmc6IFNWR0VsZW1lbnQsIHR3b3RvbmU6IGJvb2xlYW4sIHByaTogc3RyaW5nLCBzZWM6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGlmICh0d290b25lKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHN2Zy5jaGlsZE5vZGVzO1xuICAgICAgY29uc3QgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZDogSFRNTEVsZW1lbnQgPSBjaGlsZHJlblsgaSBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdmaWxsJykgPT09ICdzZWNvbmRhcnlDb2xvcicpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoY2hpbGQsICdmaWxsJywgc2VjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoY2hpbGQsICdmaWxsJywgcHJpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZmlsbCcsICdjdXJyZW50Q29sb3InKTtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc3ZnRGVmaW5pdGlvbnMuY2xlYXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBfaGFuZGxlcjogSHR0cEJhY2tlbmQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gdGhpcy5fcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICAgIGlmICh0aGlzLl9oYW5kbGVyKSB7XG4gICAgICB0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQodGhpcy5faGFuZGxlcik7XG4gICAgfVxuICB9XG59XG4iXX0=