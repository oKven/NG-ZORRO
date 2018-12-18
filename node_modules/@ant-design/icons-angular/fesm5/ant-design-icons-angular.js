import { generate } from 'ant-design-palettes';
import { __assign, __spread } from 'tslib';
import { DOCUMENT, CommonModule } from '@angular/common';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Optional, Inject, RendererFactory2, Input, ElementRef, Directive, Renderer2, NgModule } from '@angular/core';
import { of } from 'rxjs';
import { catchError, map, share, tap } from 'rxjs/operators';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * @param {?} message
 * @return {?}
 */
function printErr(message) {
    console.error("[@ant-design/icons-angular]: " + message + ".");
}
/**
 * @param {?} message
 * @return {?}
 */
function printWarn(message) {
    console.warn("[@ant-design/icons-angular]: " + message + ".");
}
/**
 * Use ant-design-palettes to generate a secondary color.
 * @param {?} primaryColor
 * @return {?}
 */
function getSecondaryColor(primaryColor) {
    return generate(primaryColor)[0];
}
/**
 * Append a theme suffix to a type.
 * @param {?} name
 * @param {?} theme
 * @return {?}
 */
function withSuffix(name, theme) {
    switch (theme) {
        case 'fill':
            return name + "-fill";
        case 'outline':
            return name + "-o";
        case 'twotone':
            return name + "-twotone";
        default:
            throw new TypeError("Unknown theme type: " + theme + ", name: " + name);
    }
}
/**
 * @param {?} name
 * @param {?} theme
 * @param {?} pri
 * @param {?} sec
 * @return {?}
 */
function withSuffixAndColor(name, theme, pri, sec) {
    return withSuffix(name, theme) + "-" + pri + "-" + sec;
}
/**
 * @param {?} abbr
 * @return {?}
 */
function mapAbbrToTheme(abbr) {
    return abbr === 'o' ? 'outline' : (/** @type {?} */ (abbr));
}
/**
 * @param {?} name
 * @return {?}
 */
function alreadyHasAThemeSuffix(name) {
    return name.endsWith('-fill') || name.endsWith('-o') || name.endsWith('-twotone');
}
/**
 * @param {?} target
 * @return {?}
 */
function isIconDefinition(target) {
    return (typeof target === 'object' &&
        typeof target.name === 'string' &&
        typeof target.theme === 'string' &&
        // IconDefinition.icon could be a SVG: We render SVG only once (the first time a icon is used)
        // and return a copy every time after that.
        (target.icon instanceof SVGElement || typeof target.icon === 'string'));
}
/**
 * @param {?} str
 * @return {?}
 */
function getIconDefinitionFromAbbr(str) {
    /** @type {?} */
    var arr = str.split('-');
    /** @type {?} */
    var theme = mapAbbrToTheme(arr.splice(arr.length - 1, 1)[0]);
    /** @type {?} */
    var name = arr.join('-');
    return (/** @type {?} */ ({
        name: name,
        theme: theme,
        icon: ''
    }));
}
/**
 * @param {?} svg
 * @return {?}
 */
function cloneSVG(svg) {
    return (/** @type {?} */ (svg.cloneNode(true)));
}
/**
 * @param {?} raw
 * @return {?}
 */
function replaceFillColor(raw) {
    return raw
        .replace(/['"]#333['"]/g, '"primaryColor"')
        .replace(/['"]#E6E6E6['"]/g, '"secondaryColor"')
        .replace(/['"]#D9D9D9['"]/g, '"secondaryColor"')
        .replace(/['"]#D8D8D8['"]/g, '"secondaryColor"');
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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
            return (/** @type {?} */ (__assign({}, this._twoToneColorPalette))); // Make a copy to avoid unexpected changes.
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
        this._addIconLiteral.apply(this, __spread(icons));
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
            return of(null);
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
            return of(null);
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
        var $icon = definitionOrNull ? of(definitionOrNull) : this._getFromRemote((/** @type {?} */ (icon)));
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
            this._svgCachedDefinitions.set(key, (/** @type {?} */ (__assign({}, icon, { icon: svg }))));
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var IconModule = /** @class */ (function () {
    function IconModule() {
    }
    IconModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [IconDirective],
                    declarations: [IconDirective],
                    providers: [IconService]
                },] }
    ];
    return IconModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
// This icon file is generated by build/generate.ts
// tslint:disable
/** @type {?} */
var manifest = {
    fill: [
        'account-book',
        'alert',
        'alipay-square',
        'aliwangwang',
        'alipay-circle',
        'amazon-circle',
        'amazon-square',
        'api',
        'apple',
        'appstore',
        'audio',
        'bank',
        'behance-circle',
        'behance-square',
        'bell',
        'book',
        'box-plot',
        'build',
        'bulb',
        'calculator',
        'calendar',
        'camera',
        'car',
        'caret-down',
        'caret-right',
        'caret-left',
        'carry-out',
        'caret-up',
        'check-circle',
        'check-square',
        'chrome',
        'ci-circle',
        'close-circle',
        'close-square',
        'cloud',
        'code-sandbox-circle',
        'clock-circle',
        'code-sandbox-square',
        'code',
        'codepen-circle',
        'compass',
        'contacts',
        'container',
        'codepen-square',
        'control',
        'copy',
        'copyright-circle',
        'credit-card',
        'crown',
        'customer-service',
        'dashboard',
        'backward',
        'database',
        'delete',
        'diff',
        'dingtalk-circle',
        'dislike',
        'dollar-circle',
        'down-circle',
        'down-square',
        'dingtalk-square',
        'dribbble-square',
        'dropbox-circle',
        'dropbox-square',
        'edit',
        'environment',
        'euro-circle',
        'exclamation-circle',
        'experiment',
        'eye',
        'facebook',
        'fast-backward',
        'fast-forward',
        'file-add',
        'file-excel',
        'file-exclamation',
        'file-markdown',
        'file-pdf',
        'file-image',
        'file-ppt',
        'file-text',
        'file-unknown',
        'file-word',
        'file-zip',
        'file',
        'filter',
        'fire',
        'android',
        'folder-add',
        'folder-open',
        'flag',
        'forward',
        'fund',
        'folder',
        'frown',
        'gift',
        'funnel-plot',
        'github',
        'golden',
        'gitlab',
        'google-plus-circle',
        'google-circle',
        'google-plus-square',
        'google-square',
        'heart',
        'hdd',
        'highlight',
        'hourglass',
        'html5',
        'idcard',
        'home',
        'info-circle',
        'instagram',
        'ie-square',
        'interation',
        'layout',
        'left-circle',
        'left-square',
        'insurance',
        'like',
        'linkedin',
        'lock',
        'mail',
        'medicine-box',
        'medium-circle',
        'dribbble-circle',
        'message',
        'minus-circle',
        'minus-square',
        'medium-square',
        'mobile',
        'money-collect',
        'notification',
        'pause-circle',
        'pay-circle',
        'phone',
        'picture',
        'pie-chart',
        'play-circle',
        'meh',
        'play-square',
        'plus-circle',
        'plus-square',
        'pound-circle',
        'printer',
        'project',
        'property-safety',
        'profile',
        'pushpin',
        'qq-circle',
        'qq-square',
        'question-circle',
        'reconciliation',
        'read',
        'reddit-circle',
        'red-envelope',
        'rest',
        'right-circle',
        'right-square',
        'rocket',
        'safety-certificate',
        'save',
        'schedule',
        'security-scan',
        'setting',
        'shop',
        'shopping',
        'sketch-circle',
        'sketch-square',
        'skype',
        'skin',
        'slack-circle',
        'slack-square',
        'smile',
        'ie-circle',
        'snippets',
        'sound',
        'star',
        'sliders',
        'step-backward',
        'step-forward',
        'stop',
        'tablet',
        'tags',
        'tag',
        'taobao-circle',
        'taobao-square',
        'thunderbolt',
        'tool',
        'trophy',
        'twitter-circle',
        'twitter-square',
        'unlock',
        'up-circle',
        'up-square',
        'usb',
        'video-camera',
        'wallet',
        'warning',
        'wechat',
        'weibo-circle',
        'weibo-square',
        'trademark-circle',
        'windows',
        'yahoo',
        'switcher',
        'yuque',
        'zhihu-circle',
        'youtube',
        'zhihu-square',
        'reddit-square'
    ],
    outline: [
        'account-book',
        'alert',
        'aliwangwang',
        'alipay-circle',
        'api',
        'apple',
        'appstore',
        'audio',
        'bank',
        'behance-square',
        'bell',
        'book',
        'box-plot',
        'build',
        'bulb',
        'calculator',
        'calendar',
        'camera',
        'car',
        'caret-down',
        'caret-right',
        'caret-left',
        'carry-out',
        'caret-up',
        'check-circle',
        'check-square',
        'chrome',
        'close-circle',
        'close-square',
        'cloud',
        'clock-circle',
        'code',
        'codepen-circle',
        'compass',
        'contacts',
        'container',
        'control',
        'copy',
        'credit-card',
        'crown',
        'customer-service',
        'dashboard',
        'backward',
        'database',
        'delete',
        'diff',
        'dislike',
        'down-circle',
        'down-square',
        'dribbble-square',
        'edit',
        'environment',
        'exclamation-circle',
        'experiment',
        'eye',
        'facebook',
        'fast-backward',
        'fast-forward',
        'file-add',
        'file-excel',
        'file-exclamation',
        'file-markdown',
        'file-pdf',
        'file-image',
        'file-ppt',
        'file-text',
        'file-unknown',
        'file-word',
        'file-zip',
        'file',
        'filter',
        'fire',
        'android',
        'folder-add',
        'folder-open',
        'flag',
        'forward',
        'fund',
        'folder',
        'frown',
        'gift',
        'funnel-plot',
        'github',
        'gitlab',
        'heart',
        'hdd',
        'highlight',
        'hourglass',
        'html5',
        'idcard',
        'home',
        'info-circle',
        'instagram',
        'interation',
        'layout',
        'left-circle',
        'left-square',
        'insurance',
        'like',
        'linkedin',
        'lock',
        'mail',
        'medicine-box',
        'message',
        'minus-circle',
        'minus-square',
        'mobile',
        'money-collect',
        'notification',
        'pause-circle',
        'pay-circle',
        'phone',
        'picture',
        'pie-chart',
        'play-circle',
        'meh',
        'play-square',
        'plus-circle',
        'plus-square',
        'printer',
        'project',
        'property-safety',
        'profile',
        'pushpin',
        'question-circle',
        'reconciliation',
        'read',
        'red-envelope',
        'rest',
        'right-circle',
        'right-square',
        'rocket',
        'safety-certificate',
        'save',
        'schedule',
        'security-scan',
        'setting',
        'shop',
        'shopping',
        'skype',
        'skin',
        'slack-square',
        'smile',
        'snippets',
        'sound',
        'star',
        'sliders',
        'step-backward',
        'step-forward',
        'stop',
        'tablet',
        'tags',
        'tag',
        'taobao-circle',
        'thunderbolt',
        'tool',
        'trophy',
        'unlock',
        'up-circle',
        'up-square',
        'usb',
        'video-camera',
        'wallet',
        'warning',
        'wechat',
        'weibo-circle',
        'weibo-square',
        'windows',
        'yahoo',
        'switcher',
        'yuque',
        'youtube',
        'alibaba',
        'align-center',
        'align-left',
        'align-right',
        'alipay',
        'aliyun',
        'amazon',
        'ant-cloud',
        'ant-design',
        'apartment',
        'area-chart',
        'arrow-down',
        'arrow-left',
        'arrow-right',
        'arrow-up',
        'arrows-alt',
        'audit',
        'barcode',
        'bars',
        'behance',
        'bg-colors',
        'bold',
        'block',
        'border-horizontal',
        'border-inner',
        'border-outer',
        'border-left',
        'border-right',
        'border-top',
        'border-bottom',
        'border',
        'branches',
        'border-verticle',
        'bar-chart',
        'check',
        'ci',
        'close',
        'cloud-server',
        'cloud-download',
        'cloud-upload',
        'code-sandbox',
        'cluster',
        'cloud-sync',
        'codepen',
        'coffee',
        'column-width',
        'copyright',
        'dash',
        'deployment-unit',
        'desktop',
        'dingding',
        'disconnect',
        'dot-chart',
        'double-left',
        'double-right',
        'down',
        'download',
        'drag',
        'dribbble',
        'dropbox',
        'ellipsis',
        'enter',
        'euro',
        'exception',
        'exclamation',
        'export',
        'fall',
        'dollar',
        'file-done',
        'file-jpg',
        'file-protect',
        'file-search',
        'file-sync',
        'font-colors',
        'font-size',
        'fork',
        'form',
        'fullscreen-exit',
        'fullscreen',
        'colum-height',
        'gateway',
        'gold',
        'global',
        'google',
        'ie',
        'import',
        'inbox',
        'info',
        'issues-close',
        'italic',
        'key',
        'laptop',
        'heat-map',
        'left',
        'line-chart',
        'line-height',
        'link',
        'loading-3-quarters',
        'loading',
        'login',
        'logout',
        'man',
        'medium-workmark',
        'medium',
        'menu-fold',
        'line',
        'menu-unfold',
        'menu',
        'minus',
        'monitor',
        'mr',
        'number',
        'ordered-list',
        'paper-clip',
        'pause',
        'percentage',
        'pic-center',
        'pic-left',
        'pic-right',
        'plus',
        'pound',
        'poweroff',
        'qq',
        'qrcode',
        'question',
        'radar-chart',
        'radius-bottomright',
        'radius-bottomleft',
        'radius-setting',
        'radius-upleft',
        'radius-upright',
        'reddit',
        'redo',
        'reload-time',
        'reload',
        'retweet',
        'right',
        'rise',
        'robot',
        'rollback',
        'safety',
        'scan',
        'scissor',
        'search',
        'select',
        'share-alt',
        'shake',
        'google-plus',
        'shrink',
        'shopping-cart',
        'sketch',
        'slack',
        'small-dash',
        'sort-ascending',
        'solution',
        'sort-descending',
        'stock',
        'swap-right',
        'swap-left',
        'swap',
        'sync',
        'table',
        'taobao',
        'team',
        'to-top',
        'trademark',
        'transaction',
        'twitter',
        'undo',
        'underline',
        'unordered-list',
        'up',
        'upload',
        'user-add',
        'user-delete',
        'user',
        'usergroup-add',
        'vertical-align-bottom',
        'vertical-align-middle',
        'vertical-align-top',
        'vertical-left',
        'vertical-right',
        'strikethrough',
        'usergroup-delete',
        'weibo',
        'wifi',
        'zhihu',
        'zoom-in',
        'zoom-out',
        'woman'
    ],
    twotone: [
        'account-book',
        'alert',
        'api',
        'appstore',
        'audio',
        'bank',
        'bell',
        'book',
        'box-plot',
        'build',
        'bulb',
        'calculator',
        'camera',
        'car',
        'carry-out',
        'check-circle',
        'check-square',
        'close-circle',
        'close-square',
        'cloud',
        'clock-circle',
        'code',
        'compass',
        'contacts',
        'container',
        'control',
        'copy',
        'credit-card',
        'crown',
        'customer-service',
        'dashboard',
        'database',
        'delete',
        'diff',
        'dislike',
        'down-circle',
        'down-square',
        'edit',
        'environment',
        'exclamation-circle',
        'experiment',
        'eye',
        'file-add',
        'file-excel',
        'file-exclamation',
        'file-markdown',
        'file-pdf',
        'file-image',
        'file-ppt',
        'file-text',
        'file-unknown',
        'file-word',
        'file-zip',
        'file',
        'filter',
        'fire',
        'folder-add',
        'folder-open',
        'flag',
        'fund',
        'folder',
        'frown',
        'gift',
        'funnel-plot',
        'heart',
        'hdd',
        'highlight',
        'hourglass',
        'html5',
        'idcard',
        'home',
        'info-circle',
        'interation',
        'layout',
        'left-circle',
        'left-square',
        'insurance',
        'like',
        'lock',
        'mail',
        'medicine-box',
        'message',
        'minus-circle',
        'minus-square',
        'mobile',
        'money-collect',
        'notification',
        'pause-circle',
        'phone',
        'picture',
        'pie-chart',
        'play-circle',
        'meh',
        'play-square',
        'plus-circle',
        'plus-square',
        'pound-circle',
        'printer',
        'project',
        'property-safety',
        'profile',
        'pushpin',
        'question-circle',
        'reconciliation',
        'red-envelope',
        'rest',
        'right-circle',
        'right-square',
        'rocket',
        'safety-certificate',
        'save',
        'schedule',
        'security-scan',
        'setting',
        'shop',
        'shopping',
        'skin',
        'smile',
        'snippets',
        'sound',
        'star',
        'sliders',
        'stop',
        'tablet',
        'tags',
        'tag',
        'thunderbolt',
        'tool',
        'trophy',
        'unlock',
        'up-circle',
        'up-square',
        'usb',
        'video-camera',
        'wallet',
        'warning',
        'trademark-circle',
        'switcher',
        'ci',
        'copyright',
        'euro',
        'dollar',
        'gold',
        'canlendar'
    ]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { IconModule, IconService, IconDirective, printErr, printWarn, getSecondaryColor, withSuffix, withSuffixAndColor, mapAbbrToTheme, alreadyHasAThemeSuffix, isIconDefinition, getIconDefinitionFromAbbr, cloneSVG, replaceFillColor, manifest };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50LWRlc2lnbi1pY29ucy1hbmd1bGFyLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL3V0aWxzLnRzIiwibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2NvbXBvbmVudC9pY29uLnNlcnZpY2UudHMiLCJuZzovL0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvY29tcG9uZW50L2ljb24uZGlyZWN0aXZlLnRzIiwibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL2NvbXBvbmVudC9pY29uLm1vZHVsZS50cyIsIm5nOi8vQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9tYW5pZmVzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZW5lcmF0ZSBhcyBnZW5lcmF0ZUNvbG9yIH0gZnJvbSAnYW50LWRlc2lnbi1wYWxldHRlcyc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgVGhlbWVUeXBlIH0gZnJvbSAnLi90eXBlcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBwcmludEVycihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgY29uc29sZS5lcnJvcihgW0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXJdOiAke21lc3NhZ2V9LmApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRXYXJuKG1lc3NhZ2U6IHN0cmluZykge1xuICBjb25zb2xlLndhcm4oYFtAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyXTogJHttZXNzYWdlfS5gKTtcbn1cblxuLyoqXG4gKiBVc2UgYW50LWRlc2lnbi1wYWxldHRlcyB0byBnZW5lcmF0ZSBhIHNlY29uZGFyeSBjb2xvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZGFyeUNvbG9yKHByaW1hcnlDb2xvcjogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGdlbmVyYXRlQ29sb3IocHJpbWFyeUNvbG9yKVswXTtcbn1cblxuLyoqXG4gKiBBcHBlbmQgYSB0aGVtZSBzdWZmaXggdG8gYSB0eXBlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gd2l0aFN1ZmZpeChuYW1lOiBzdHJpbmcsIHRoZW1lOiBUaGVtZVR5cGUpOiBzdHJpbmcge1xuICBzd2l0Y2ggKHRoZW1lKSB7XG4gICAgY2FzZSAnZmlsbCc6XG4gICAgICByZXR1cm4gYCR7bmFtZX0tZmlsbGA7XG4gICAgY2FzZSAnb3V0bGluZSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX0tb2A7XG4gICAgY2FzZSAndHdvdG9uZSc6XG4gICAgICByZXR1cm4gYCR7bmFtZX0tdHdvdG9uZWA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoYFVua25vd24gdGhlbWUgdHlwZTogJHt0aGVtZX0sIG5hbWU6ICR7bmFtZX1gKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2l0aFN1ZmZpeEFuZENvbG9yKG5hbWU6IHN0cmluZywgdGhlbWU6IFRoZW1lVHlwZSwgcHJpOiBzdHJpbmcsIHNlYzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3dpdGhTdWZmaXgobmFtZSwgdGhlbWUpfS0ke3ByaX0tJHtzZWN9YDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hcEFiYnJUb1RoZW1lKGFiYnI6IHN0cmluZyk6IFRoZW1lVHlwZSB7XG4gIHJldHVybiBhYmJyID09PSAnbycgPyAnb3V0bGluZScgOiBhYmJyIGFzIFRoZW1lVHlwZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFscmVhZHlIYXNBVGhlbWVTdWZmaXgobmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBuYW1lLmVuZHNXaXRoKCctZmlsbCcpIHx8IG5hbWUuZW5kc1dpdGgoJy1vJykgfHwgbmFtZS5lbmRzV2l0aCgnLXR3b3RvbmUnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSWNvbkRlZmluaXRpb24odGFyZ2V0OiBhbnkpOiB0YXJnZXQgaXMgSWNvbkRlZmluaXRpb24ge1xuICByZXR1cm4gKFxuICAgIHR5cGVvZiB0YXJnZXQgPT09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIHRhcmdldC5uYW1lID09PSAnc3RyaW5nJyAmJlxuICAgIHR5cGVvZiB0YXJnZXQudGhlbWUgPT09ICdzdHJpbmcnICYmXG4gICAgLy8gSWNvbkRlZmluaXRpb24uaWNvbiBjb3VsZCBiZSBhIFNWRzogV2UgcmVuZGVyIFNWRyBvbmx5IG9uY2UgKHRoZSBmaXJzdCB0aW1lIGEgaWNvbiBpcyB1c2VkKVxuICAgIC8vIGFuZCByZXR1cm4gYSBjb3B5IGV2ZXJ5IHRpbWUgYWZ0ZXIgdGhhdC5cbiAgICAodGFyZ2V0Lmljb24gaW5zdGFuY2VvZiBTVkdFbGVtZW50IHx8IHR5cGVvZiB0YXJnZXQuaWNvbiA9PT0gJ3N0cmluZycpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRJY29uRGVmaW5pdGlvbkZyb21BYmJyKHN0cjogc3RyaW5nKTogSWNvbkRlZmluaXRpb24ge1xuICBjb25zdCBhcnIgPSBzdHIuc3BsaXQoJy0nKTtcbiAgY29uc3QgdGhlbWUgPSBtYXBBYmJyVG9UaGVtZShhcnIuc3BsaWNlKGFyci5sZW5ndGggLSAxLCAxKVswXSk7XG4gIGNvbnN0IG5hbWUgPSBhcnIuam9pbignLScpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICB0aGVtZSxcbiAgICBpY29uOiAnJ1xuICB9IGFzIEljb25EZWZpbml0aW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVTVkcoc3ZnOiBTVkdFbGVtZW50KTogU1ZHRWxlbWVudCB7XG4gIHJldHVybiBzdmcuY2xvbmVOb2RlKHRydWUpIGFzIFNWR0VsZW1lbnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlRmlsbENvbG9yKHJhdzogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHJhd1xuICAgIC5yZXBsYWNlKC9bJ1wiXSMzMzNbJ1wiXS9nLCAnXCJwcmltYXJ5Q29sb3JcIicpXG4gICAgLnJlcGxhY2UoL1snXCJdI0U2RTZFNlsnXCJdL2csICdcInNlY29uZGFyeUNvbG9yXCInKVxuICAgIC5yZXBsYWNlKC9bJ1wiXSNEOUQ5RDlbJ1wiXS9nLCAnXCJzZWNvbmRhcnlDb2xvclwiJylcbiAgICAucmVwbGFjZSgvWydcIl0jRDhEOEQ4WydcIl0vZywgJ1wic2Vjb25kYXJ5Q29sb3JcIicpO1xufVxuIiwiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEJhY2tlbmQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBPcHRpb25hbCwgSW5qZWN0LCBSZW5kZXJlcjIsIFJlbmRlcmVyRmFjdG9yeTIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIG9mIGFzIG9ic2VydmFibGVPZiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCBzaGFyZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHtcbiAgSWNvbkRlZmluaXRpb24sXG4gIENhY2hlZEljb25EZWZpbml0aW9uLFxuICBUd29Ub25lQ29sb3JQYWxldHRlLFxuICBUd29Ub25lQ29sb3JQYWxldHRlU2V0dGVyLFxuICBUaGVtZVR5cGVcbn0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHtcbiAgZ2V0U2Vjb25kYXJ5Q29sb3IsXG4gIHdpdGhTdWZmaXgsXG4gIGlzSWNvbkRlZmluaXRpb24sXG4gIHByaW50RXJyLFxuICBwcmludFdhcm4sXG4gIGNsb25lU1ZHLFxuICB3aXRoU3VmZml4QW5kQ29sb3IsXG4gIGdldEljb25EZWZpbml0aW9uRnJvbUFiYnIsXG4gIHJlcGxhY2VGaWxsQ29sb3Jcbn0gZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFJlcUljb25UYXNrIHtcbiAgb2I6IE9ic2VydmFibGU8SWNvbkRlZmluaXRpb24gfCBudWxsPjtcbn1cblxuZXhwb3J0IGNsYXNzIEljb25TZXJ2aWNlIHtcbiAgZGVmYXVsdFRoZW1lOiBUaGVtZVR5cGUgPSAnb3V0bGluZSc7XG5cbiAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyO1xuICBwcm90ZWN0ZWQgX2h0dHA6IEh0dHBDbGllbnQ7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGljb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9zdmdEZWZpbml0aW9ucyA9IG5ldyBNYXA8c3RyaW5nLCBJY29uRGVmaW5pdGlvbj4oKTtcblxuICAvKipcbiAgICogUmVnaXN0ZXIgcmVuZGVyZWQgKHdpdGggY29sb3IpIFNWRyBpY29ucy5cbiAgICovXG4gIHByb3RlY3RlZCBfc3ZnQ2FjaGVkRGVmaW5pdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgQ2FjaGVkSWNvbkRlZmluaXRpb24+KCk7XG5cbiAgLyoqXG4gICAqIERlZmF1bHQgY29sb3Igc2V0dGluZ3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3R3b1RvbmVDb2xvclBhbGV0dGU6IFR3b1RvbmVDb2xvclBhbGV0dGUgPSB7XG4gICAgcHJpbWFyeUNvbG9yICA6ICcjMzMzMzMzJyxcbiAgICBzZWNvbmRhcnlDb2xvcjogJyNFNkU2RTYnXG4gIH07XG5cbiAgLyoqXG4gICAqIEEgdXJsIHByZWZpeCBzbyB1c2VycyBjYW4gZGV0ZXJtaW5lIGEgc3RhdGljIGFzc2V0IHJvb3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2Fzc2V0c1NvdXJjZSA9ICcnO1xuXG4gIC8qKlxuICAgKiBUbyBub3RlIHdoZXRoZXIgYSByZXF1ZXN0IHRvIGFuIGljb24gaXMgdW5kZXIgcHJvY2Vzc2luZy5cbiAgICovXG4gIHByb3RlY3RlZCBfaHR0cFF1ZXVlID0gbmV3IE1hcDxzdHJpbmcsIFJlcUljb25UYXNrPigpO1xuXG4gIHNldCB0d29Ub25lQ29sb3IoeyBwcmltYXJ5Q29sb3IsIHNlY29uZGFyeUNvbG9yIH06IFR3b1RvbmVDb2xvclBhbGV0dGVTZXR0ZXIpIHtcbiAgICBpZiAocHJpbWFyeUNvbG9yICYmIHR5cGVvZiBwcmltYXJ5Q29sb3IgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBzZWNvbmRhcnlDb2xvciA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHNlY29uZGFyeUNvbG9yID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5fdHdvVG9uZUNvbG9yUGFsZXR0ZS5wcmltYXJ5Q29sb3IgPSBwcmltYXJ5Q29sb3I7XG4gICAgICB0aGlzLl90d29Ub25lQ29sb3JQYWxldHRlLnNlY29uZGFyeUNvbG9yID0gc2Vjb25kYXJ5Q29sb3IgfHwgZ2V0U2Vjb25kYXJ5Q29sb3IocHJpbWFyeUNvbG9yKTtcbiAgICB9XG4gIH1cblxuICBnZXQgdHdvVG9uZUNvbG9yKCk6IFR3b1RvbmVDb2xvclBhbGV0dGVTZXR0ZXIge1xuICAgIHJldHVybiB7IC4uLnRoaXMuX3R3b1RvbmVDb2xvclBhbGV0dGUgfSBhcyBUd29Ub25lQ29sb3JQYWxldHRlOyAvLyBNYWtlIGEgY29weSB0byBhdm9pZCB1bmV4cGVjdGVkIGNoYW5nZXMuXG4gIH1cblxuICBjaGFuZ2VBc3NldHNTb3VyY2UocHJlZml4OiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLl9hc3NldHNTb3VyY2UgPSBwcmVmaXguZW5kc1dpdGgoJy8nKSA/IHByZWZpeCA6IHByZWZpeCArICcvJztcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBJY29uRGVmaW5pdGlvbiBwcm92aWRlZCBieSBBbnQgRGVzaWduLCBwYXJzaW5nIEFic3RyYWN0Tm9kZSB0byBzdmcgc3RyaW5nLlxuICAgKiBAcGFyYW0gaWNvbnNcbiAgICovXG4gIGFkZEljb24oLi4uaWNvbnM6IEljb25EZWZpbml0aW9uW10pOiB2b2lkIHtcbiAgICB0aGlzLl9hZGRJY29uTGl0ZXJhbCguLi5pY29ucyk7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgaWNvbi5cbiAgICogQHBhcmFtIGljb25zIEljb25zIHRoYXQgdXNlcnMgd2FudCB0byB1c2UgaW4gdGhlaXIgcHJvamVjdHMuIFVzZXIgZGVmaW5lZCBpY29ucyBhbmQgcHJlZGVmaW5lZFxuICAgKiAgIGljb25zIHByb3ZpZGVkIGJ5IGFudC1kZXNpZ24gc2hvdWxkIGltcGxlbWVudCBJY29uRGVmaW5pdGlvbiBib3RoLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9hZGRJY29uTGl0ZXJhbCguLi5pY29uczogSWNvbkRlZmluaXRpb25bXSk6IHZvaWQge1xuICAgIGljb25zLmZvckVhY2goaWNvbiA9PiB7XG4gICAgICB0aGlzLl9zdmdEZWZpbml0aW9ucy5zZXQod2l0aFN1ZmZpeChpY29uLm5hbWUsIGljb24udGhlbWUpLCBpY29uKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfZ2V0KGtleTogc3RyaW5nKTogSWNvbkRlZmluaXRpb24gfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fc3ZnRGVmaW5pdGlvbnMuZ2V0KGtleSkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYW4gc3RhdGljIGZpbGUgYW5kIHJldHVybiBpdCBhcyBhIHN0cmluZywgY3JlYXRlIGEgSWNvbkRlZmluaXRpb24gYW5kIGNhY2hlIGl0IG9yIHJldHVybiBudWxsLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9nZXRGcm9tUmVtb3RlKHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJY29uRGVmaW5pdGlvbiB8IG51bGw+IHtcbiAgICBpZiAodGhpcy5faHR0cCkge1xuICAgICAgbGV0IHRhc2sgPSB0aGlzLl9odHRwUXVldWUuZ2V0KHVybCk7XG4gICAgICBsZXQgb2I6IE9ic2VydmFibGU8SWNvbkRlZmluaXRpb24gfCBudWxsPjtcbiAgICAgIGlmICh0YXNrKSB7XG4gICAgICAgIG9iID0gdGFzay5vYjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9iID0gdGhpcy5fY3JlYXRlT2JzZXJ2YWJsZVJlcXVlc3QodXJsKTtcbiAgICAgICAgdGFzayA9IHsgb2IgfTtcbiAgICAgICAgdGhpcy5faHR0cFF1ZXVlLnNldCh1cmwsIHRhc2spO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG9iO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcmludFdhcm4oJ1lvdSBuZWVkIHRvIGltcG9ydCBIdHRwQ2xpZW50IG1vZHVsZSB0byB1c2UgZHluYW1pYyBpbXBvcnRpbmcnKTtcbiAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY3JlYXRlT2JzZXJ2YWJsZVJlcXVlc3QodXJsOiBzdHJpbmcpOiBPYnNlcnZhYmxlPEljb25EZWZpbml0aW9uIHwgbnVsbD4ge1xuICAgIGNvbnN0IGljb246IEljb25EZWZpbml0aW9uID0gZ2V0SWNvbkRlZmluaXRpb25Gcm9tQWJicih1cmwpO1xuICAgIHJldHVybiB0aGlzLl9odHRwLmdldChcbiAgICAgIGAke3RoaXMuX2Fzc2V0c1NvdXJjZX1hc3NldHMvJHtpY29uLnRoZW1lfS8ke2ljb24ubmFtZX0uc3ZnYCxcbiAgICAgIHsgcmVzcG9uc2VUeXBlOiAndGV4dCcgfVxuICAgICkucGlwZShcbiAgICAgIHNoYXJlKCksIC8vIFVzZSBgc2hhcmVgIHNvIGlmIG11bHRpIGRpcmVjdGl2ZXMgcmVxdWVzdCB0aGUgc2FtZSBpY29uLCBIVFRQIHJlcXVlc3Qgd291bGQgb25seSBiZSBmaXJlZCBvbmNlLlxuICAgICAgdGFwKCgpID0+IHRoaXMuX2h0dHBRdWV1ZS5kZWxldGUodXJsKSksXG4gICAgICBtYXAoc3ZnU3RyaW5nID0+IHtcbiAgICAgICAgaWNvbi5pY29uID0gc3ZnU3RyaW5nO1xuICAgICAgICB0aGlzLl9hZGRJY29uTGl0ZXJhbChpY29uKTtcbiAgICAgICAgcmV0dXJuIGljb247XG4gICAgICB9KSxcbiAgICAgIGNhdGNoRXJyb3IoKCkgPT4ge1xuICAgICAgICBwcmludEVycihgdGhlIGljb24gJHt1cmx9IGRvZXMgbm90IGV4aXN0IGluIHlvdXIgYXNzZXRzIGZvbGRlcmApO1xuICAgICAgICB0aGlzLl9odHRwUXVldWUuZGVsZXRlKHVybCk7XG4gICAgICAgIHJldHVybiBvYnNlcnZhYmxlT2YobnVsbCk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSWNvbiBjb21wb25lbnQgd291bGQgY2FsbCB0aGlzIG1ldGhvZCB0byBnZXQgYSBTVkcgZWxlbWVudC5cbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhIE9ic2VydmFibGUgU1ZHIGVsZW1lbnQgYmVjYXVzZSB3aGVuIHVzZXIgd2FudHMgdG8gZ2V0IGFuIGljb24gZHluYW1pY2FsbHksIHRoYXQgd291bGQgYmUgYXN5bmMsXG4gICAqIHNvIHdlIHByb3ZpZGVkIGEgdW5pZmllZCBpbnRlcmZhY2UgaGVyZS5cbiAgICovXG4gIGdldFJlbmRlcmVkQ29udGVudChpY29uOiBJY29uRGVmaW5pdGlvbiB8IHN0cmluZywgdHdvVG9uZUNvbG9yPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxTVkdFbGVtZW50IHwgbnVsbD4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25Pck51bGw6IEljb25EZWZpbml0aW9uIHwgbnVsbCA9IGlzSWNvbkRlZmluaXRpb24oaWNvbilcbiAgICAgID8gaWNvbiBhcyBJY29uRGVmaW5pdGlvblxuICAgICAgOiB0aGlzLl9nZXQoaWNvbiBhcyBzdHJpbmcpO1xuICAgIGNvbnN0ICRpY29uID0gZGVmaW5pdGlvbk9yTnVsbCA/IG9ic2VydmFibGVPZihkZWZpbml0aW9uT3JOdWxsKSA6IHRoaXMuX2dldEZyb21SZW1vdGUoaWNvbiBhcyBzdHJpbmcpO1xuXG4gICAgcmV0dXJuICRpY29uLnBpcGUoXG4gICAgICBtYXAoaSA9PiB7XG4gICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuX2xvYWRTVkdGcm9tQ2FjaGVPckNyZWF0ZU5ldyhpLCB0d29Ub25lQ29sb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHByaW50RXJyKGB0aGUgaWNvbiAke2ljb259IGRvZXMgbm90IGV4aXN0IG9yIGlzIG5vdCByZWdpc3RlcmVkYCk7XG4gICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgIH0pKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfbG9hZFNWR0Zyb21DYWNoZU9yQ3JlYXRlTmV3KGljb246IEljb25EZWZpbml0aW9uLCB0d29Ub25lQ29sb3I/OiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBsZXQgc3ZnOiBTVkdFbGVtZW50O1xuICAgIGNvbnN0IHByaSA9IHR3b1RvbmVDb2xvciB8fCB0aGlzLl90d29Ub25lQ29sb3JQYWxldHRlLnByaW1hcnlDb2xvcjtcbiAgICBjb25zdCBzZWMgPSBnZXRTZWNvbmRhcnlDb2xvcihwcmkpIHx8IHRoaXMuX3R3b1RvbmVDb2xvclBhbGV0dGUuc2Vjb25kYXJ5Q29sb3I7XG4gICAgY29uc3Qga2V5ID0gd2l0aFN1ZmZpeEFuZENvbG9yKGljb24ubmFtZSwgaWNvbi50aGVtZSwgcHJpLCBzZWMpO1xuICAgIGNvbnN0IGNhY2hlZCA9IHRoaXMuX3N2Z0NhY2hlZERlZmluaXRpb25zLmdldChrZXkpO1xuXG4gICAgLy8gSWYgdGhpcyBpY29uIGlzIHVzZWQgYmVmb3JlLCB0aGVyZSBzaG91bGQgYmUgYSBjb3B5IGluIGNhY2hlZERlZmluaXRpb25zLCBqdXN0IGNvcHkgaXQuXG4gICAgLy8gT3RoZXJ3aXNlLCBnZW5lcmF0ZSBvbmUgZnJvbSBzdHJpbmcgb3IgU1ZHIGVsZW1lbnQsIGFuZCBjYWNoZSBpdC5cbiAgICBpZiAoIWNhY2hlZCkge1xuICAgICAgc3ZnID0gdGhpcy5fc2V0U1ZHQXR0cmlidXRlKHRoaXMuX2NvbG9yaXplU1ZHSWNvbihcbiAgICAgICAgdHlwZW9mIGljb24uaWNvbiA9PT0gJ3N0cmluZycgPyB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhpY29uLmljb24pIDogaWNvbi5pY29uLFxuICAgICAgICBpY29uLnRoZW1lID09PSAndHdvdG9uZScsXG4gICAgICAgIHByaSxcbiAgICAgICAgc2VjXG4gICAgICApKTtcbiAgICAgIHRoaXMuX3N2Z0NhY2hlZERlZmluaXRpb25zLnNldChrZXksIHsgLi4uaWNvbiwgaWNvbjogc3ZnIH0gYXMgQ2FjaGVkSWNvbkRlZmluaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdmcgPSBjYWNoZWQuaWNvbjtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvbmVTVkcoc3ZnKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBfY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoc3RyOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcbiAgICBjb25zdCBjb2xvclBhcnNlZCA9IHJlcGxhY2VGaWxsQ29sb3Ioc3RyKTtcbiAgICBjb25zdCBkaXYgPSB0aGlzLl9kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuaW5uZXJIVE1MID0gY29sb3JQYXJzZWQ7XG4gICAgY29uc3Qgc3ZnOiBTVkdFbGVtZW50ID0gZGl2LnF1ZXJ5U2VsZWN0b3IoJ3N2ZycpO1xuICAgIGlmICghc3ZnKSB7XG4gICAgICB0aHJvdyBFcnJvcignPHN2Zz4gdGFnIG5vdCBmb3VuZCcpO1xuICAgIH1cbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9zZXRTVkdBdHRyaWJ1dGUoc3ZnOiBTVkdFbGVtZW50KTogU1ZHRWxlbWVudCB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3dpZHRoJywgJzFlbScpO1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdoZWlnaHQnLCAnMWVtJyk7XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByb3RlY3RlZCBfY29sb3JpemVTVkdJY29uKHN2ZzogU1ZHRWxlbWVudCwgdHdvdG9uZTogYm9vbGVhbiwgcHJpOiBzdHJpbmcsIHNlYzogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgaWYgKHR3b3RvbmUpIHtcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gc3ZnLmNoaWxkTm9kZXM7XG4gICAgICBjb25zdCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkOiBIVE1MRWxlbWVudCA9IGNoaWxkcmVuWyBpIF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICAgIGlmIChjaGlsZC5nZXRBdHRyaWJ1dGUoJ2ZpbGwnKSA9PT0gJ3NlY29uZGFyeUNvbG9yJykge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShjaGlsZCwgJ2ZpbGwnLCBzZWMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShjaGlsZCwgJ2ZpbGwnLCBwcmkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdmaWxsJywgJ2N1cnJlbnRDb2xvcicpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9zdmdEZWZpbml0aW9ucy5jbGVhcigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgQE9wdGlvbmFsKCkgcHJvdGVjdGVkIF9oYW5kbGVyOiBIdHRwQmFja2VuZCxcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgX2RvY3VtZW50OiBhbnlcbiAgKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIgPSB0aGlzLl9yZW5kZXJlckZhY3RvcnkuY3JlYXRlUmVuZGVyZXIobnVsbCwgbnVsbCk7XG4gICAgaWYgKHRoaXMuX2hhbmRsZXIpIHtcbiAgICAgIHRoaXMuX2h0dHAgPSBuZXcgSHR0cENsaWVudCh0aGlzLl9oYW5kbGVyKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIEVsZW1lbnRSZWYsXG4gIERpcmVjdGl2ZSwgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvblNlcnZpY2UgfSBmcm9tICcuL2ljb24uc2VydmljZSc7XG5pbXBvcnQgeyBJY29uRGVmaW5pdGlvbiwgVGhlbWVUeXBlIH0gZnJvbSAnLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNJY29uRGVmaW5pdGlvbiwgcHJpbnRFcnIsIHdpdGhTdWZmaXgsIGFscmVhZHlIYXNBVGhlbWVTdWZmaXggfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogRGV2ZWxvcGVycyB1c2UgdGhpcyBjb21wb25lbnQgdG8gcmVuZGVyIGFuIFNWRyBlbGVtZW50LlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW50SWNvbl0nXG59KVxuZXhwb3J0IGNsYXNzIEljb25EaXJlY3RpdmUgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0eXBlOiBzdHJpbmcgfCBJY29uRGVmaW5pdGlvbjtcbiAgQElucHV0KCkgdGhlbWU6IFRoZW1lVHlwZTtcbiAgQElucHV0KCkgdHdvVG9uZUNvbG9yOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJlbmRlciBhbiBpY29uIHdpdGggZ2l2ZW4gdHlwZSBhbmQgdGhlbWUuIFJldHVybiBhbiBTVkcgZWxlbWVudCBmb3IgZXh0cmEgYmVoYXZpb3JzIChleHRlbmRlZCBieSBjaGlsZCBjbGFzc2VzKS5cbiAgICovXG4gIHByb3RlY3RlZCBfY2hhbmdlSWNvbigpOiBQcm9taXNlPFNWR0FFbGVtZW50IHwgbnVsbD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIXRoaXMudHlwZSkge1xuICAgICAgICB0aGlzLl9jbGVhclNWR0VsZW1lbnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2ljb25TZXJ2aWNlLmdldFJlbmRlcmVkQ29udGVudCh0aGlzLl9wYXJzZUljb24odGhpcy50eXBlLCB0aGlzLnRoZW1lKSwgdGhpcy50d29Ub25lQ29sb3IpXG4gICAgICAgIC5zdWJzY3JpYmUoc3ZnID0+IHtcbiAgICAgICAgICBpZiAoc3ZnKSB7XG4gICAgICAgICAgICB0aGlzLl9zZXRTVkdFbGVtZW50KHN2Zyk7XG4gICAgICAgICAgICByZXNvbHZlKHN2ZyBhcyBTVkdBRWxlbWVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlIGFuIGljb24ncyB0eXBlLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9wYXJzZUljb24odHlwZTogc3RyaW5nIHwgSWNvbkRlZmluaXRpb24sIHRoZW1lOiBUaGVtZVR5cGUpOiBJY29uRGVmaW5pdGlvbiB8IHN0cmluZyB7XG4gICAgaWYgKGlzSWNvbkRlZmluaXRpb24odHlwZSkpIHtcbiAgICAgIHJldHVybiB0eXBlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYWxyZWFkeUhhc0FUaGVtZVN1ZmZpeCh0eXBlKSkge1xuICAgICAgICBpZiAoISF0aGVtZSkge1xuICAgICAgICAgIHByaW50RXJyKGAndHlwZScgJHt0eXBlfSBhbHJlYWR5IGdldHMgYSB0aGVtZSBpbnNpZGUgc28gJ3RoZW1lJyAke3RoZW1lfSB3b3VsZCBiZSBpZ25vcmVkYCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gd2l0aFN1ZmZpeCh0eXBlLCB0aGVtZSB8fCB0aGlzLl9pY29uU2VydmljZS5kZWZhdWx0VGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW5kZXIgYW4gU1ZHIGVsZW1lbnQgaW50byB0aGUgZGlyZWN0aXZlIGFmdGVyIHJlbW92aW5nIG90aGVyIGljb25zLlxuICAgKi9cbiAgcHJvdGVjdGVkIF9zZXRTVkdFbGVtZW50KHN2ZzogU1ZHRWxlbWVudCk6IHZvaWQge1xuICAgIGNvbnN0IHNlbGY6IEhUTUxFbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICAgIHRoaXMuX2NsZWFyU1ZHRWxlbWVudCgpO1xuICAgIHRoaXMuX3JlbmRlcmVyLmFwcGVuZENoaWxkKHNlbGYsIHN2Zyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NsZWFyU1ZHRWxlbWVudCgpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmOiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBjaGlsZHJlbiA9IHNlbGYuY2hpbGROb2RlcztcbiAgICBjb25zdCBjaGlsZENvdW50ID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgIGZvciAobGV0IGkgPSBjaGlsZENvdW50IC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5bIGkgXSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlbW92ZUNoaWxkKHNlbGYsIGNoaWxkKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgX2ljb25TZXJ2aWNlOiBJY29uU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIF9yZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5fY2hhbmdlSWNvbigpLnRoZW4oKCkgPT4ge1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbkRpcmVjdGl2ZSB9IGZyb20gJy4vaWNvbi5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlIF0sXG4gIGV4cG9ydHMgICAgIDogWyBJY29uRGlyZWN0aXZlIF0sXG4gIGRlY2xhcmF0aW9uczogWyBJY29uRGlyZWN0aXZlIF0sXG4gIHByb3ZpZGVycyAgIDogWyBJY29uU2VydmljZSBdXG59KVxuZXhwb3J0IGNsYXNzIEljb25Nb2R1bGUge1xufVxuIiwiLy8gVGhpcyBpY29uIGZpbGUgaXMgZ2VuZXJhdGVkIGJ5IGJ1aWxkL2dlbmVyYXRlLnRzXG4vLyB0c2xpbnQ6ZGlzYWJsZVxuXG5pbXBvcnQgeyBNYW5pZmVzdCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgbWFuaWZlc3Q6IE1hbmlmZXN0ID0ge1xuICBmaWxsOiBbXG4gICAgJ2FjY291bnQtYm9vaycsXG4gICAgJ2FsZXJ0JyxcbiAgICAnYWxpcGF5LXNxdWFyZScsXG4gICAgJ2FsaXdhbmd3YW5nJyxcbiAgICAnYWxpcGF5LWNpcmNsZScsXG4gICAgJ2FtYXpvbi1jaXJjbGUnLFxuICAgICdhbWF6b24tc3F1YXJlJyxcbiAgICAnYXBpJyxcbiAgICAnYXBwbGUnLFxuICAgICdhcHBzdG9yZScsXG4gICAgJ2F1ZGlvJyxcbiAgICAnYmFuaycsXG4gICAgJ2JlaGFuY2UtY2lyY2xlJyxcbiAgICAnYmVoYW5jZS1zcXVhcmUnLFxuICAgICdiZWxsJyxcbiAgICAnYm9vaycsXG4gICAgJ2JveC1wbG90JyxcbiAgICAnYnVpbGQnLFxuICAgICdidWxiJyxcbiAgICAnY2FsY3VsYXRvcicsXG4gICAgJ2NhbGVuZGFyJyxcbiAgICAnY2FtZXJhJyxcbiAgICAnY2FyJyxcbiAgICAnY2FyZXQtZG93bicsXG4gICAgJ2NhcmV0LXJpZ2h0JyxcbiAgICAnY2FyZXQtbGVmdCcsXG4gICAgJ2NhcnJ5LW91dCcsXG4gICAgJ2NhcmV0LXVwJyxcbiAgICAnY2hlY2stY2lyY2xlJyxcbiAgICAnY2hlY2stc3F1YXJlJyxcbiAgICAnY2hyb21lJyxcbiAgICAnY2ktY2lyY2xlJyxcbiAgICAnY2xvc2UtY2lyY2xlJyxcbiAgICAnY2xvc2Utc3F1YXJlJyxcbiAgICAnY2xvdWQnLFxuICAgICdjb2RlLXNhbmRib3gtY2lyY2xlJyxcbiAgICAnY2xvY2stY2lyY2xlJyxcbiAgICAnY29kZS1zYW5kYm94LXNxdWFyZScsXG4gICAgJ2NvZGUnLFxuICAgICdjb2RlcGVuLWNpcmNsZScsXG4gICAgJ2NvbXBhc3MnLFxuICAgICdjb250YWN0cycsXG4gICAgJ2NvbnRhaW5lcicsXG4gICAgJ2NvZGVwZW4tc3F1YXJlJyxcbiAgICAnY29udHJvbCcsXG4gICAgJ2NvcHknLFxuICAgICdjb3B5cmlnaHQtY2lyY2xlJyxcbiAgICAnY3JlZGl0LWNhcmQnLFxuICAgICdjcm93bicsXG4gICAgJ2N1c3RvbWVyLXNlcnZpY2UnLFxuICAgICdkYXNoYm9hcmQnLFxuICAgICdiYWNrd2FyZCcsXG4gICAgJ2RhdGFiYXNlJyxcbiAgICAnZGVsZXRlJyxcbiAgICAnZGlmZicsXG4gICAgJ2Rpbmd0YWxrLWNpcmNsZScsXG4gICAgJ2Rpc2xpa2UnLFxuICAgICdkb2xsYXItY2lyY2xlJyxcbiAgICAnZG93bi1jaXJjbGUnLFxuICAgICdkb3duLXNxdWFyZScsXG4gICAgJ2Rpbmd0YWxrLXNxdWFyZScsXG4gICAgJ2RyaWJiYmxlLXNxdWFyZScsXG4gICAgJ2Ryb3Bib3gtY2lyY2xlJyxcbiAgICAnZHJvcGJveC1zcXVhcmUnLFxuICAgICdlZGl0JyxcbiAgICAnZW52aXJvbm1lbnQnLFxuICAgICdldXJvLWNpcmNsZScsXG4gICAgJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXG4gICAgJ2V4cGVyaW1lbnQnLFxuICAgICdleWUnLFxuICAgICdmYWNlYm9vaycsXG4gICAgJ2Zhc3QtYmFja3dhcmQnLFxuICAgICdmYXN0LWZvcndhcmQnLFxuICAgICdmaWxlLWFkZCcsXG4gICAgJ2ZpbGUtZXhjZWwnLFxuICAgICdmaWxlLWV4Y2xhbWF0aW9uJyxcbiAgICAnZmlsZS1tYXJrZG93bicsXG4gICAgJ2ZpbGUtcGRmJyxcbiAgICAnZmlsZS1pbWFnZScsXG4gICAgJ2ZpbGUtcHB0JyxcbiAgICAnZmlsZS10ZXh0JyxcbiAgICAnZmlsZS11bmtub3duJyxcbiAgICAnZmlsZS13b3JkJyxcbiAgICAnZmlsZS16aXAnLFxuICAgICdmaWxlJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnZmlyZScsXG4gICAgJ2FuZHJvaWQnLFxuICAgICdmb2xkZXItYWRkJyxcbiAgICAnZm9sZGVyLW9wZW4nLFxuICAgICdmbGFnJyxcbiAgICAnZm9yd2FyZCcsXG4gICAgJ2Z1bmQnLFxuICAgICdmb2xkZXInLFxuICAgICdmcm93bicsXG4gICAgJ2dpZnQnLFxuICAgICdmdW5uZWwtcGxvdCcsXG4gICAgJ2dpdGh1YicsXG4gICAgJ2dvbGRlbicsXG4gICAgJ2dpdGxhYicsXG4gICAgJ2dvb2dsZS1wbHVzLWNpcmNsZScsXG4gICAgJ2dvb2dsZS1jaXJjbGUnLFxuICAgICdnb29nbGUtcGx1cy1zcXVhcmUnLFxuICAgICdnb29nbGUtc3F1YXJlJyxcbiAgICAnaGVhcnQnLFxuICAgICdoZGQnLFxuICAgICdoaWdobGlnaHQnLFxuICAgICdob3VyZ2xhc3MnLFxuICAgICdodG1sNScsXG4gICAgJ2lkY2FyZCcsXG4gICAgJ2hvbWUnLFxuICAgICdpbmZvLWNpcmNsZScsXG4gICAgJ2luc3RhZ3JhbScsXG4gICAgJ2llLXNxdWFyZScsXG4gICAgJ2ludGVyYXRpb24nLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0LWNpcmNsZScsXG4gICAgJ2xlZnQtc3F1YXJlJyxcbiAgICAnaW5zdXJhbmNlJyxcbiAgICAnbGlrZScsXG4gICAgJ2xpbmtlZGluJyxcbiAgICAnbG9jaycsXG4gICAgJ21haWwnLFxuICAgICdtZWRpY2luZS1ib3gnLFxuICAgICdtZWRpdW0tY2lyY2xlJyxcbiAgICAnZHJpYmJibGUtY2lyY2xlJyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21pbnVzLWNpcmNsZScsXG4gICAgJ21pbnVzLXNxdWFyZScsXG4gICAgJ21lZGl1bS1zcXVhcmUnLFxuICAgICdtb2JpbGUnLFxuICAgICdtb25leS1jb2xsZWN0JyxcbiAgICAnbm90aWZpY2F0aW9uJyxcbiAgICAncGF1c2UtY2lyY2xlJyxcbiAgICAncGF5LWNpcmNsZScsXG4gICAgJ3Bob25lJyxcbiAgICAncGljdHVyZScsXG4gICAgJ3BpZS1jaGFydCcsXG4gICAgJ3BsYXktY2lyY2xlJyxcbiAgICAnbWVoJyxcbiAgICAncGxheS1zcXVhcmUnLFxuICAgICdwbHVzLWNpcmNsZScsXG4gICAgJ3BsdXMtc3F1YXJlJyxcbiAgICAncG91bmQtY2lyY2xlJyxcbiAgICAncHJpbnRlcicsXG4gICAgJ3Byb2plY3QnLFxuICAgICdwcm9wZXJ0eS1zYWZldHknLFxuICAgICdwcm9maWxlJyxcbiAgICAncHVzaHBpbicsXG4gICAgJ3FxLWNpcmNsZScsXG4gICAgJ3FxLXNxdWFyZScsXG4gICAgJ3F1ZXN0aW9uLWNpcmNsZScsXG4gICAgJ3JlY29uY2lsaWF0aW9uJyxcbiAgICAncmVhZCcsXG4gICAgJ3JlZGRpdC1jaXJjbGUnLFxuICAgICdyZWQtZW52ZWxvcGUnLFxuICAgICdyZXN0JyxcbiAgICAncmlnaHQtY2lyY2xlJyxcbiAgICAncmlnaHQtc3F1YXJlJyxcbiAgICAncm9ja2V0JyxcbiAgICAnc2FmZXR5LWNlcnRpZmljYXRlJyxcbiAgICAnc2F2ZScsXG4gICAgJ3NjaGVkdWxlJyxcbiAgICAnc2VjdXJpdHktc2NhbicsXG4gICAgJ3NldHRpbmcnLFxuICAgICdzaG9wJyxcbiAgICAnc2hvcHBpbmcnLFxuICAgICdza2V0Y2gtY2lyY2xlJyxcbiAgICAnc2tldGNoLXNxdWFyZScsXG4gICAgJ3NreXBlJyxcbiAgICAnc2tpbicsXG4gICAgJ3NsYWNrLWNpcmNsZScsXG4gICAgJ3NsYWNrLXNxdWFyZScsXG4gICAgJ3NtaWxlJyxcbiAgICAnaWUtY2lyY2xlJyxcbiAgICAnc25pcHBldHMnLFxuICAgICdzb3VuZCcsXG4gICAgJ3N0YXInLFxuICAgICdzbGlkZXJzJyxcbiAgICAnc3RlcC1iYWNrd2FyZCcsXG4gICAgJ3N0ZXAtZm9yd2FyZCcsXG4gICAgJ3N0b3AnLFxuICAgICd0YWJsZXQnLFxuICAgICd0YWdzJyxcbiAgICAndGFnJyxcbiAgICAndGFvYmFvLWNpcmNsZScsXG4gICAgJ3Rhb2Jhby1zcXVhcmUnLFxuICAgICd0aHVuZGVyYm9sdCcsXG4gICAgJ3Rvb2wnLFxuICAgICd0cm9waHknLFxuICAgICd0d2l0dGVyLWNpcmNsZScsXG4gICAgJ3R3aXR0ZXItc3F1YXJlJyxcbiAgICAndW5sb2NrJyxcbiAgICAndXAtY2lyY2xlJyxcbiAgICAndXAtc3F1YXJlJyxcbiAgICAndXNiJyxcbiAgICAndmlkZW8tY2FtZXJhJyxcbiAgICAnd2FsbGV0JyxcbiAgICAnd2FybmluZycsXG4gICAgJ3dlY2hhdCcsXG4gICAgJ3dlaWJvLWNpcmNsZScsXG4gICAgJ3dlaWJvLXNxdWFyZScsXG4gICAgJ3RyYWRlbWFyay1jaXJjbGUnLFxuICAgICd3aW5kb3dzJyxcbiAgICAneWFob28nLFxuICAgICdzd2l0Y2hlcicsXG4gICAgJ3l1cXVlJyxcbiAgICAnemhpaHUtY2lyY2xlJyxcbiAgICAneW91dHViZScsXG4gICAgJ3poaWh1LXNxdWFyZScsXG4gICAgJ3JlZGRpdC1zcXVhcmUnXG4gIF0sXG4gIG91dGxpbmU6IFtcbiAgICAnYWNjb3VudC1ib29rJyxcbiAgICAnYWxlcnQnLFxuICAgICdhbGl3YW5nd2FuZycsXG4gICAgJ2FsaXBheS1jaXJjbGUnLFxuICAgICdhcGknLFxuICAgICdhcHBsZScsXG4gICAgJ2FwcHN0b3JlJyxcbiAgICAnYXVkaW8nLFxuICAgICdiYW5rJyxcbiAgICAnYmVoYW5jZS1zcXVhcmUnLFxuICAgICdiZWxsJyxcbiAgICAnYm9vaycsXG4gICAgJ2JveC1wbG90JyxcbiAgICAnYnVpbGQnLFxuICAgICdidWxiJyxcbiAgICAnY2FsY3VsYXRvcicsXG4gICAgJ2NhbGVuZGFyJyxcbiAgICAnY2FtZXJhJyxcbiAgICAnY2FyJyxcbiAgICAnY2FyZXQtZG93bicsXG4gICAgJ2NhcmV0LXJpZ2h0JyxcbiAgICAnY2FyZXQtbGVmdCcsXG4gICAgJ2NhcnJ5LW91dCcsXG4gICAgJ2NhcmV0LXVwJyxcbiAgICAnY2hlY2stY2lyY2xlJyxcbiAgICAnY2hlY2stc3F1YXJlJyxcbiAgICAnY2hyb21lJyxcbiAgICAnY2xvc2UtY2lyY2xlJyxcbiAgICAnY2xvc2Utc3F1YXJlJyxcbiAgICAnY2xvdWQnLFxuICAgICdjbG9jay1jaXJjbGUnLFxuICAgICdjb2RlJyxcbiAgICAnY29kZXBlbi1jaXJjbGUnLFxuICAgICdjb21wYXNzJyxcbiAgICAnY29udGFjdHMnLFxuICAgICdjb250YWluZXInLFxuICAgICdjb250cm9sJyxcbiAgICAnY29weScsXG4gICAgJ2NyZWRpdC1jYXJkJyxcbiAgICAnY3Jvd24nLFxuICAgICdjdXN0b21lci1zZXJ2aWNlJyxcbiAgICAnZGFzaGJvYXJkJyxcbiAgICAnYmFja3dhcmQnLFxuICAgICdkYXRhYmFzZScsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2RpZmYnLFxuICAgICdkaXNsaWtlJyxcbiAgICAnZG93bi1jaXJjbGUnLFxuICAgICdkb3duLXNxdWFyZScsXG4gICAgJ2RyaWJiYmxlLXNxdWFyZScsXG4gICAgJ2VkaXQnLFxuICAgICdlbnZpcm9ubWVudCcsXG4gICAgJ2V4Y2xhbWF0aW9uLWNpcmNsZScsXG4gICAgJ2V4cGVyaW1lbnQnLFxuICAgICdleWUnLFxuICAgICdmYWNlYm9vaycsXG4gICAgJ2Zhc3QtYmFja3dhcmQnLFxuICAgICdmYXN0LWZvcndhcmQnLFxuICAgICdmaWxlLWFkZCcsXG4gICAgJ2ZpbGUtZXhjZWwnLFxuICAgICdmaWxlLWV4Y2xhbWF0aW9uJyxcbiAgICAnZmlsZS1tYXJrZG93bicsXG4gICAgJ2ZpbGUtcGRmJyxcbiAgICAnZmlsZS1pbWFnZScsXG4gICAgJ2ZpbGUtcHB0JyxcbiAgICAnZmlsZS10ZXh0JyxcbiAgICAnZmlsZS11bmtub3duJyxcbiAgICAnZmlsZS13b3JkJyxcbiAgICAnZmlsZS16aXAnLFxuICAgICdmaWxlJyxcbiAgICAnZmlsdGVyJyxcbiAgICAnZmlyZScsXG4gICAgJ2FuZHJvaWQnLFxuICAgICdmb2xkZXItYWRkJyxcbiAgICAnZm9sZGVyLW9wZW4nLFxuICAgICdmbGFnJyxcbiAgICAnZm9yd2FyZCcsXG4gICAgJ2Z1bmQnLFxuICAgICdmb2xkZXInLFxuICAgICdmcm93bicsXG4gICAgJ2dpZnQnLFxuICAgICdmdW5uZWwtcGxvdCcsXG4gICAgJ2dpdGh1YicsXG4gICAgJ2dpdGxhYicsXG4gICAgJ2hlYXJ0JyxcbiAgICAnaGRkJyxcbiAgICAnaGlnaGxpZ2h0JyxcbiAgICAnaG91cmdsYXNzJyxcbiAgICAnaHRtbDUnLFxuICAgICdpZGNhcmQnLFxuICAgICdob21lJyxcbiAgICAnaW5mby1jaXJjbGUnLFxuICAgICdpbnN0YWdyYW0nLFxuICAgICdpbnRlcmF0aW9uJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVmdC1jaXJjbGUnLFxuICAgICdsZWZ0LXNxdWFyZScsXG4gICAgJ2luc3VyYW5jZScsXG4gICAgJ2xpa2UnLFxuICAgICdsaW5rZWRpbicsXG4gICAgJ2xvY2snLFxuICAgICdtYWlsJyxcbiAgICAnbWVkaWNpbmUtYm94JyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21pbnVzLWNpcmNsZScsXG4gICAgJ21pbnVzLXNxdWFyZScsXG4gICAgJ21vYmlsZScsXG4gICAgJ21vbmV5LWNvbGxlY3QnLFxuICAgICdub3RpZmljYXRpb24nLFxuICAgICdwYXVzZS1jaXJjbGUnLFxuICAgICdwYXktY2lyY2xlJyxcbiAgICAncGhvbmUnLFxuICAgICdwaWN0dXJlJyxcbiAgICAncGllLWNoYXJ0JyxcbiAgICAncGxheS1jaXJjbGUnLFxuICAgICdtZWgnLFxuICAgICdwbGF5LXNxdWFyZScsXG4gICAgJ3BsdXMtY2lyY2xlJyxcbiAgICAncGx1cy1zcXVhcmUnLFxuICAgICdwcmludGVyJyxcbiAgICAncHJvamVjdCcsXG4gICAgJ3Byb3BlcnR5LXNhZmV0eScsXG4gICAgJ3Byb2ZpbGUnLFxuICAgICdwdXNocGluJyxcbiAgICAncXVlc3Rpb24tY2lyY2xlJyxcbiAgICAncmVjb25jaWxpYXRpb24nLFxuICAgICdyZWFkJyxcbiAgICAncmVkLWVudmVsb3BlJyxcbiAgICAncmVzdCcsXG4gICAgJ3JpZ2h0LWNpcmNsZScsXG4gICAgJ3JpZ2h0LXNxdWFyZScsXG4gICAgJ3JvY2tldCcsXG4gICAgJ3NhZmV0eS1jZXJ0aWZpY2F0ZScsXG4gICAgJ3NhdmUnLFxuICAgICdzY2hlZHVsZScsXG4gICAgJ3NlY3VyaXR5LXNjYW4nLFxuICAgICdzZXR0aW5nJyxcbiAgICAnc2hvcCcsXG4gICAgJ3Nob3BwaW5nJyxcbiAgICAnc2t5cGUnLFxuICAgICdza2luJyxcbiAgICAnc2xhY2stc3F1YXJlJyxcbiAgICAnc21pbGUnLFxuICAgICdzbmlwcGV0cycsXG4gICAgJ3NvdW5kJyxcbiAgICAnc3RhcicsXG4gICAgJ3NsaWRlcnMnLFxuICAgICdzdGVwLWJhY2t3YXJkJyxcbiAgICAnc3RlcC1mb3J3YXJkJyxcbiAgICAnc3RvcCcsXG4gICAgJ3RhYmxldCcsXG4gICAgJ3RhZ3MnLFxuICAgICd0YWcnLFxuICAgICd0YW9iYW8tY2lyY2xlJyxcbiAgICAndGh1bmRlcmJvbHQnLFxuICAgICd0b29sJyxcbiAgICAndHJvcGh5JyxcbiAgICAndW5sb2NrJyxcbiAgICAndXAtY2lyY2xlJyxcbiAgICAndXAtc3F1YXJlJyxcbiAgICAndXNiJyxcbiAgICAndmlkZW8tY2FtZXJhJyxcbiAgICAnd2FsbGV0JyxcbiAgICAnd2FybmluZycsXG4gICAgJ3dlY2hhdCcsXG4gICAgJ3dlaWJvLWNpcmNsZScsXG4gICAgJ3dlaWJvLXNxdWFyZScsXG4gICAgJ3dpbmRvd3MnLFxuICAgICd5YWhvbycsXG4gICAgJ3N3aXRjaGVyJyxcbiAgICAneXVxdWUnLFxuICAgICd5b3V0dWJlJyxcbiAgICAnYWxpYmFiYScsXG4gICAgJ2FsaWduLWNlbnRlcicsXG4gICAgJ2FsaWduLWxlZnQnLFxuICAgICdhbGlnbi1yaWdodCcsXG4gICAgJ2FsaXBheScsXG4gICAgJ2FsaXl1bicsXG4gICAgJ2FtYXpvbicsXG4gICAgJ2FudC1jbG91ZCcsXG4gICAgJ2FudC1kZXNpZ24nLFxuICAgICdhcGFydG1lbnQnLFxuICAgICdhcmVhLWNoYXJ0JyxcbiAgICAnYXJyb3ctZG93bicsXG4gICAgJ2Fycm93LWxlZnQnLFxuICAgICdhcnJvdy1yaWdodCcsXG4gICAgJ2Fycm93LXVwJyxcbiAgICAnYXJyb3dzLWFsdCcsXG4gICAgJ2F1ZGl0JyxcbiAgICAnYmFyY29kZScsXG4gICAgJ2JhcnMnLFxuICAgICdiZWhhbmNlJyxcbiAgICAnYmctY29sb3JzJyxcbiAgICAnYm9sZCcsXG4gICAgJ2Jsb2NrJyxcbiAgICAnYm9yZGVyLWhvcml6b250YWwnLFxuICAgICdib3JkZXItaW5uZXInLFxuICAgICdib3JkZXItb3V0ZXInLFxuICAgICdib3JkZXItbGVmdCcsXG4gICAgJ2JvcmRlci1yaWdodCcsXG4gICAgJ2JvcmRlci10b3AnLFxuICAgICdib3JkZXItYm90dG9tJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYnJhbmNoZXMnLFxuICAgICdib3JkZXItdmVydGljbGUnLFxuICAgICdiYXItY2hhcnQnLFxuICAgICdjaGVjaycsXG4gICAgJ2NpJyxcbiAgICAnY2xvc2UnLFxuICAgICdjbG91ZC1zZXJ2ZXInLFxuICAgICdjbG91ZC1kb3dubG9hZCcsXG4gICAgJ2Nsb3VkLXVwbG9hZCcsXG4gICAgJ2NvZGUtc2FuZGJveCcsXG4gICAgJ2NsdXN0ZXInLFxuICAgICdjbG91ZC1zeW5jJyxcbiAgICAnY29kZXBlbicsXG4gICAgJ2NvZmZlZScsXG4gICAgJ2NvbHVtbi13aWR0aCcsXG4gICAgJ2NvcHlyaWdodCcsXG4gICAgJ2Rhc2gnLFxuICAgICdkZXBsb3ltZW50LXVuaXQnLFxuICAgICdkZXNrdG9wJyxcbiAgICAnZGluZ2RpbmcnLFxuICAgICdkaXNjb25uZWN0JyxcbiAgICAnZG90LWNoYXJ0JyxcbiAgICAnZG91YmxlLWxlZnQnLFxuICAgICdkb3VibGUtcmlnaHQnLFxuICAgICdkb3duJyxcbiAgICAnZG93bmxvYWQnLFxuICAgICdkcmFnJyxcbiAgICAnZHJpYmJibGUnLFxuICAgICdkcm9wYm94JyxcbiAgICAnZWxsaXBzaXMnLFxuICAgICdlbnRlcicsXG4gICAgJ2V1cm8nLFxuICAgICdleGNlcHRpb24nLFxuICAgICdleGNsYW1hdGlvbicsXG4gICAgJ2V4cG9ydCcsXG4gICAgJ2ZhbGwnLFxuICAgICdkb2xsYXInLFxuICAgICdmaWxlLWRvbmUnLFxuICAgICdmaWxlLWpwZycsXG4gICAgJ2ZpbGUtcHJvdGVjdCcsXG4gICAgJ2ZpbGUtc2VhcmNoJyxcbiAgICAnZmlsZS1zeW5jJyxcbiAgICAnZm9udC1jb2xvcnMnLFxuICAgICdmb250LXNpemUnLFxuICAgICdmb3JrJyxcbiAgICAnZm9ybScsXG4gICAgJ2Z1bGxzY3JlZW4tZXhpdCcsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdjb2x1bS1oZWlnaHQnLFxuICAgICdnYXRld2F5JyxcbiAgICAnZ29sZCcsXG4gICAgJ2dsb2JhbCcsXG4gICAgJ2dvb2dsZScsXG4gICAgJ2llJyxcbiAgICAnaW1wb3J0JyxcbiAgICAnaW5ib3gnLFxuICAgICdpbmZvJyxcbiAgICAnaXNzdWVzLWNsb3NlJyxcbiAgICAnaXRhbGljJyxcbiAgICAna2V5JyxcbiAgICAnbGFwdG9wJyxcbiAgICAnaGVhdC1tYXAnLFxuICAgICdsZWZ0JyxcbiAgICAnbGluZS1jaGFydCcsXG4gICAgJ2xpbmUtaGVpZ2h0JyxcbiAgICAnbGluaycsXG4gICAgJ2xvYWRpbmctMy1xdWFydGVycycsXG4gICAgJ2xvYWRpbmcnLFxuICAgICdsb2dpbicsXG4gICAgJ2xvZ291dCcsXG4gICAgJ21hbicsXG4gICAgJ21lZGl1bS13b3JrbWFyaycsXG4gICAgJ21lZGl1bScsXG4gICAgJ21lbnUtZm9sZCcsXG4gICAgJ2xpbmUnLFxuICAgICdtZW51LXVuZm9sZCcsXG4gICAgJ21lbnUnLFxuICAgICdtaW51cycsXG4gICAgJ21vbml0b3InLFxuICAgICdtcicsXG4gICAgJ251bWJlcicsXG4gICAgJ29yZGVyZWQtbGlzdCcsXG4gICAgJ3BhcGVyLWNsaXAnLFxuICAgICdwYXVzZScsXG4gICAgJ3BlcmNlbnRhZ2UnLFxuICAgICdwaWMtY2VudGVyJyxcbiAgICAncGljLWxlZnQnLFxuICAgICdwaWMtcmlnaHQnLFxuICAgICdwbHVzJyxcbiAgICAncG91bmQnLFxuICAgICdwb3dlcm9mZicsXG4gICAgJ3FxJyxcbiAgICAncXJjb2RlJyxcbiAgICAncXVlc3Rpb24nLFxuICAgICdyYWRhci1jaGFydCcsXG4gICAgJ3JhZGl1cy1ib3R0b21yaWdodCcsXG4gICAgJ3JhZGl1cy1ib3R0b21sZWZ0JyxcbiAgICAncmFkaXVzLXNldHRpbmcnLFxuICAgICdyYWRpdXMtdXBsZWZ0JyxcbiAgICAncmFkaXVzLXVwcmlnaHQnLFxuICAgICdyZWRkaXQnLFxuICAgICdyZWRvJyxcbiAgICAncmVsb2FkLXRpbWUnLFxuICAgICdyZWxvYWQnLFxuICAgICdyZXR3ZWV0JyxcbiAgICAncmlnaHQnLFxuICAgICdyaXNlJyxcbiAgICAncm9ib3QnLFxuICAgICdyb2xsYmFjaycsXG4gICAgJ3NhZmV0eScsXG4gICAgJ3NjYW4nLFxuICAgICdzY2lzc29yJyxcbiAgICAnc2VhcmNoJyxcbiAgICAnc2VsZWN0JyxcbiAgICAnc2hhcmUtYWx0JyxcbiAgICAnc2hha2UnLFxuICAgICdnb29nbGUtcGx1cycsXG4gICAgJ3NocmluaycsXG4gICAgJ3Nob3BwaW5nLWNhcnQnLFxuICAgICdza2V0Y2gnLFxuICAgICdzbGFjaycsXG4gICAgJ3NtYWxsLWRhc2gnLFxuICAgICdzb3J0LWFzY2VuZGluZycsXG4gICAgJ3NvbHV0aW9uJyxcbiAgICAnc29ydC1kZXNjZW5kaW5nJyxcbiAgICAnc3RvY2snLFxuICAgICdzd2FwLXJpZ2h0JyxcbiAgICAnc3dhcC1sZWZ0JyxcbiAgICAnc3dhcCcsXG4gICAgJ3N5bmMnLFxuICAgICd0YWJsZScsXG4gICAgJ3Rhb2JhbycsXG4gICAgJ3RlYW0nLFxuICAgICd0by10b3AnLFxuICAgICd0cmFkZW1hcmsnLFxuICAgICd0cmFuc2FjdGlvbicsXG4gICAgJ3R3aXR0ZXInLFxuICAgICd1bmRvJyxcbiAgICAndW5kZXJsaW5lJyxcbiAgICAndW5vcmRlcmVkLWxpc3QnLFxuICAgICd1cCcsXG4gICAgJ3VwbG9hZCcsXG4gICAgJ3VzZXItYWRkJyxcbiAgICAndXNlci1kZWxldGUnLFxuICAgICd1c2VyJyxcbiAgICAndXNlcmdyb3VwLWFkZCcsXG4gICAgJ3ZlcnRpY2FsLWFsaWduLWJvdHRvbScsXG4gICAgJ3ZlcnRpY2FsLWFsaWduLW1pZGRsZScsXG4gICAgJ3ZlcnRpY2FsLWFsaWduLXRvcCcsXG4gICAgJ3ZlcnRpY2FsLWxlZnQnLFxuICAgICd2ZXJ0aWNhbC1yaWdodCcsXG4gICAgJ3N0cmlrZXRocm91Z2gnLFxuICAgICd1c2VyZ3JvdXAtZGVsZXRlJyxcbiAgICAnd2VpYm8nLFxuICAgICd3aWZpJyxcbiAgICAnemhpaHUnLFxuICAgICd6b29tLWluJyxcbiAgICAnem9vbS1vdXQnLFxuICAgICd3b21hbidcbiAgXSxcbiAgdHdvdG9uZTogW1xuICAgICdhY2NvdW50LWJvb2snLFxuICAgICdhbGVydCcsXG4gICAgJ2FwaScsXG4gICAgJ2FwcHN0b3JlJyxcbiAgICAnYXVkaW8nLFxuICAgICdiYW5rJyxcbiAgICAnYmVsbCcsXG4gICAgJ2Jvb2snLFxuICAgICdib3gtcGxvdCcsXG4gICAgJ2J1aWxkJyxcbiAgICAnYnVsYicsXG4gICAgJ2NhbGN1bGF0b3InLFxuICAgICdjYW1lcmEnLFxuICAgICdjYXInLFxuICAgICdjYXJyeS1vdXQnLFxuICAgICdjaGVjay1jaXJjbGUnLFxuICAgICdjaGVjay1zcXVhcmUnLFxuICAgICdjbG9zZS1jaXJjbGUnLFxuICAgICdjbG9zZS1zcXVhcmUnLFxuICAgICdjbG91ZCcsXG4gICAgJ2Nsb2NrLWNpcmNsZScsXG4gICAgJ2NvZGUnLFxuICAgICdjb21wYXNzJyxcbiAgICAnY29udGFjdHMnLFxuICAgICdjb250YWluZXInLFxuICAgICdjb250cm9sJyxcbiAgICAnY29weScsXG4gICAgJ2NyZWRpdC1jYXJkJyxcbiAgICAnY3Jvd24nLFxuICAgICdjdXN0b21lci1zZXJ2aWNlJyxcbiAgICAnZGFzaGJvYXJkJyxcbiAgICAnZGF0YWJhc2UnLFxuICAgICdkZWxldGUnLFxuICAgICdkaWZmJyxcbiAgICAnZGlzbGlrZScsXG4gICAgJ2Rvd24tY2lyY2xlJyxcbiAgICAnZG93bi1zcXVhcmUnLFxuICAgICdlZGl0JyxcbiAgICAnZW52aXJvbm1lbnQnLFxuICAgICdleGNsYW1hdGlvbi1jaXJjbGUnLFxuICAgICdleHBlcmltZW50JyxcbiAgICAnZXllJyxcbiAgICAnZmlsZS1hZGQnLFxuICAgICdmaWxlLWV4Y2VsJyxcbiAgICAnZmlsZS1leGNsYW1hdGlvbicsXG4gICAgJ2ZpbGUtbWFya2Rvd24nLFxuICAgICdmaWxlLXBkZicsXG4gICAgJ2ZpbGUtaW1hZ2UnLFxuICAgICdmaWxlLXBwdCcsXG4gICAgJ2ZpbGUtdGV4dCcsXG4gICAgJ2ZpbGUtdW5rbm93bicsXG4gICAgJ2ZpbGUtd29yZCcsXG4gICAgJ2ZpbGUtemlwJyxcbiAgICAnZmlsZScsXG4gICAgJ2ZpbHRlcicsXG4gICAgJ2ZpcmUnLFxuICAgICdmb2xkZXItYWRkJyxcbiAgICAnZm9sZGVyLW9wZW4nLFxuICAgICdmbGFnJyxcbiAgICAnZnVuZCcsXG4gICAgJ2ZvbGRlcicsXG4gICAgJ2Zyb3duJyxcbiAgICAnZ2lmdCcsXG4gICAgJ2Z1bm5lbC1wbG90JyxcbiAgICAnaGVhcnQnLFxuICAgICdoZGQnLFxuICAgICdoaWdobGlnaHQnLFxuICAgICdob3VyZ2xhc3MnLFxuICAgICdodG1sNScsXG4gICAgJ2lkY2FyZCcsXG4gICAgJ2hvbWUnLFxuICAgICdpbmZvLWNpcmNsZScsXG4gICAgJ2ludGVyYXRpb24nLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0LWNpcmNsZScsXG4gICAgJ2xlZnQtc3F1YXJlJyxcbiAgICAnaW5zdXJhbmNlJyxcbiAgICAnbGlrZScsXG4gICAgJ2xvY2snLFxuICAgICdtYWlsJyxcbiAgICAnbWVkaWNpbmUtYm94JyxcbiAgICAnbWVzc2FnZScsXG4gICAgJ21pbnVzLWNpcmNsZScsXG4gICAgJ21pbnVzLXNxdWFyZScsXG4gICAgJ21vYmlsZScsXG4gICAgJ21vbmV5LWNvbGxlY3QnLFxuICAgICdub3RpZmljYXRpb24nLFxuICAgICdwYXVzZS1jaXJjbGUnLFxuICAgICdwaG9uZScsXG4gICAgJ3BpY3R1cmUnLFxuICAgICdwaWUtY2hhcnQnLFxuICAgICdwbGF5LWNpcmNsZScsXG4gICAgJ21laCcsXG4gICAgJ3BsYXktc3F1YXJlJyxcbiAgICAncGx1cy1jaXJjbGUnLFxuICAgICdwbHVzLXNxdWFyZScsXG4gICAgJ3BvdW5kLWNpcmNsZScsXG4gICAgJ3ByaW50ZXInLFxuICAgICdwcm9qZWN0JyxcbiAgICAncHJvcGVydHktc2FmZXR5JyxcbiAgICAncHJvZmlsZScsXG4gICAgJ3B1c2hwaW4nLFxuICAgICdxdWVzdGlvbi1jaXJjbGUnLFxuICAgICdyZWNvbmNpbGlhdGlvbicsXG4gICAgJ3JlZC1lbnZlbG9wZScsXG4gICAgJ3Jlc3QnLFxuICAgICdyaWdodC1jaXJjbGUnLFxuICAgICdyaWdodC1zcXVhcmUnLFxuICAgICdyb2NrZXQnLFxuICAgICdzYWZldHktY2VydGlmaWNhdGUnLFxuICAgICdzYXZlJyxcbiAgICAnc2NoZWR1bGUnLFxuICAgICdzZWN1cml0eS1zY2FuJyxcbiAgICAnc2V0dGluZycsXG4gICAgJ3Nob3AnLFxuICAgICdzaG9wcGluZycsXG4gICAgJ3NraW4nLFxuICAgICdzbWlsZScsXG4gICAgJ3NuaXBwZXRzJyxcbiAgICAnc291bmQnLFxuICAgICdzdGFyJyxcbiAgICAnc2xpZGVycycsXG4gICAgJ3N0b3AnLFxuICAgICd0YWJsZXQnLFxuICAgICd0YWdzJyxcbiAgICAndGFnJyxcbiAgICAndGh1bmRlcmJvbHQnLFxuICAgICd0b29sJyxcbiAgICAndHJvcGh5JyxcbiAgICAndW5sb2NrJyxcbiAgICAndXAtY2lyY2xlJyxcbiAgICAndXAtc3F1YXJlJyxcbiAgICAndXNiJyxcbiAgICAndmlkZW8tY2FtZXJhJyxcbiAgICAnd2FsbGV0JyxcbiAgICAnd2FybmluZycsXG4gICAgJ3RyYWRlbWFyay1jaXJjbGUnLFxuICAgICdzd2l0Y2hlcicsXG4gICAgJ2NpJyxcbiAgICAnY29weXJpZ2h0JyxcbiAgICAnZXVybycsXG4gICAgJ2RvbGxhcicsXG4gICAgJ2dvbGQnLFxuICAgICdjYW5sZW5kYXInXG4gIF1cbn07XG4iXSwibmFtZXMiOlsiZ2VuZXJhdGVDb2xvciIsIm9ic2VydmFibGVPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFHQSxTQUFnQixRQUFRLENBQUMsT0FBZTtJQUN0QyxPQUFPLENBQUMsS0FBSyxDQUFDLGtDQUFnQyxPQUFPLE1BQUcsQ0FBQyxDQUFDO0NBQzNEOzs7OztBQUVELFNBQWdCLFNBQVMsQ0FBQyxPQUFlO0lBQ3ZDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0NBQWdDLE9BQU8sTUFBRyxDQUFDLENBQUM7Q0FDMUQ7Ozs7OztBQUtELFNBQWdCLGlCQUFpQixDQUFDLFlBQW9CO0lBQ3BELE9BQU9BLFFBQWEsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztDQUN2Qzs7Ozs7OztBQUtELFNBQWdCLFVBQVUsQ0FBQyxJQUFZLEVBQUUsS0FBZ0I7SUFDdkQsUUFBUSxLQUFLO1FBQ1gsS0FBSyxNQUFNO1lBQ1QsT0FBVSxJQUFJLFVBQU8sQ0FBQztRQUN4QixLQUFLLFNBQVM7WUFDWixPQUFVLElBQUksT0FBSSxDQUFDO1FBQ3JC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