(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('ant-design-palettes'), require('@angular/common'), require('@angular/common/http'), require('@angular/core'), require('rxjs'), require('rxjs/operators')) :
    typeof define === 'function' && define.amd ? define('@ant-design/icons-angular', ['exports', 'ant-design-palettes', '@angular/common', '@angular/common/http', '@angular/core', 'rxjs', 'rxjs/operators'], factory) :
    (factory((global['ant-design'] = global['ant-design'] || {}, global['ant-design']['icons-angular'] = {}),global.antDesignPalettes,global.ng.common,global.ng.common.http,global.ng.core,global.rxjs,global.rxjs.operators));
}(this, (function (exports,antDesignPalettes,common,http,core,rxjs,operators) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

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
        return antDesignPalettes.generate(primaryColor)[0];
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
        return abbr === 'o' ? 'outline' : ( /** @type {?} */(abbr));
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
        return ( /** @type {?} */({
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
        return ( /** @type {?} */(svg.cloneNode(true)));
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
                this._http = new http.HttpClient(this._handler);
            }
        }
        Object.defineProperty(IconService.prototype, "twoToneColor", {
            get: /**
             * @return {?}
             */ function () {
                return ( /** @type {?} */(__assign({}, this._twoToneColorPalette))); // Make a copy to avoid unexpected changes.
            },
            set: /**
             * @param {?} __0
             * @return {?}
             */ function (_a) {
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
                    return rxjs.of(null);
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
                return this._http.get(this._assetsSource + "assets/" + icon.theme + "/" + icon.name + ".svg", { responseType: 'text' }).pipe(operators.share(), // Use `share` so if multi directives request the same icon, HTTP request would only be fired once.
                operators.tap(function () { return _this._httpQueue.delete(url); }), operators.map(function (svgString) {
                    icon.icon = svgString;
                    _this._addIconLiteral(icon);
                    return icon;
                }), operators.catchError(function () {
                    printErr("the icon " + url + " does not exist in your assets folder");
                    _this._httpQueue.delete(url);
                    return rxjs.of(null);
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
                    ? ( /** @type {?} */(icon))
                    : this._get(( /** @type {?} */(icon)));
                /** @type {?} */
                var $icon = definitionOrNull ? rxjs.of(definitionOrNull) : this._getFromRemote(( /** @type {?} */(icon)));
                return $icon.pipe(operators.map(function (i) {
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
                    this._svgCachedDefinitions.set(key, ( /** @type {?} */(__assign({}, icon, { icon: svg }))));
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
                        var child = ( /** @type {?} */(children[i]));
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
        IconService.ctorParameters = function () {
            return [
                { type: core.RendererFactory2 },
                { type: http.HttpBackend, decorators: [{ type: core.Optional }] },
                { type: undefined, decorators: [{ type: core.Optional }, { type: core.Inject, args: [common.DOCUMENT,] }] }
            ];
        };
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
                                resolve(( /** @type {?} */(svg)));
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
                    var child = ( /** @type {?} */(children[i]));
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
            { type: core.Directive, args: [{
                        selector: '[antIcon]'
                    },] }
        ];
        /** @nocollapse */
        IconDirective.ctorParameters = function () {
            return [
                { type: IconService },
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        IconDirective.propDecorators = {
            type: [{ type: core.Input }],
            theme: [{ type: core.Input }],
            twoToneColor: [{ type: core.Input }]
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
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
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

    exports.IconModule = IconModule;
    exports.IconService = IconService;
    exports.IconDirective = IconDirective;
    exports.printErr = printErr;
    exports.printWarn = printWarn;
    exports.getSecondaryColor = getSecondaryColor;
    exports.withSuffix = withSuffix;
    exports.withSuffixAndColor = withSuffixAndColor;
    exports.mapAbbrToTheme = mapAbbrToTheme;
    exports.alreadyHasAThemeSuffix = alreadyHasAThemeSuffix;
    exports.isIconDefinition = isIconDefinition;
    exports.getIconDefinitionFromAbbr = getIconDefinitionFromAbbr;
    exports.cloneSVG = cloneSVG;
    exports.replaceFillColor = replaceFillColor;
    exports.manifest = manifest;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW50LWRlc2lnbi1pY29ucy1hbmd1bGFyLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvdXRpbHMudHMiLCJuZzovL0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvY29tcG9uZW50L2ljb24uc2VydmljZS50cyIsIm5nOi8vQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhci9jb21wb25lbnQvaWNvbi5kaXJlY3RpdmUudHMiLCJuZzovL0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvY29tcG9uZW50L2ljb24ubW9kdWxlLnRzIiwibmc6Ly9AYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyL21hbmlmZXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiaW1wb3J0IHsgZ2VuZXJhdGUgYXMgZ2VuZXJhdGVDb2xvciB9IGZyb20gJ2FudC1kZXNpZ24tcGFsZXR0ZXMnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIFRoZW1lVHlwZSB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgZnVuY3Rpb24gcHJpbnRFcnIobWVzc2FnZTogc3RyaW5nKSB7XG4gIGNvbnNvbGUuZXJyb3IoYFtAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyXTogJHttZXNzYWdlfS5gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHByaW50V2FybihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgY29uc29sZS53YXJuKGBbQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcl06ICR7bWVzc2FnZX0uYCk7XG59XG5cbi8qKlxuICogVXNlIGFudC1kZXNpZ24tcGFsZXR0ZXMgdG8gZ2VuZXJhdGUgYSBzZWNvbmRhcnkgY29sb3IuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZWNvbmRhcnlDb2xvcihwcmltYXJ5Q29sb3I6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBnZW5lcmF0ZUNvbG9yKHByaW1hcnlDb2xvcilbMF07XG59XG5cbi8qKlxuICogQXBwZW5kIGEgdGhlbWUgc3VmZml4IHRvIGEgdHlwZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTdWZmaXgobmFtZTogc3RyaW5nLCB0aGVtZTogVGhlbWVUeXBlKTogc3RyaW5nIHtcbiAgc3dpdGNoICh0aGVtZSkge1xuICAgIGNhc2UgJ2ZpbGwnOlxuICAgICAgcmV0dXJuIGAke25hbWV9LWZpbGxgO1xuICAgIGNhc2UgJ291dGxpbmUnOlxuICAgICAgcmV0dXJuIGAke25hbWV9LW9gO1xuICAgIGNhc2UgJ3R3b3RvbmUnOlxuICAgICAgcmV0dXJuIGAke25hbWV9LXR3b3RvbmVgO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKGBVbmtub3duIHRoZW1lIHR5cGU6ICR7dGhlbWV9LCBuYW1lOiAke25hbWV9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdpdGhTdWZmaXhBbmRDb2xvcihuYW1lOiBzdHJpbmcsIHRoZW1lOiBUaGVtZVR5cGUsIHByaTogc3RyaW5nLCBzZWM6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgJHt3aXRoU3VmZml4KG5hbWUsIHRoZW1lKX0tJHtwcml9LSR7c2VjfWA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXBBYmJyVG9UaGVtZShhYmJyOiBzdHJpbmcpOiBUaGVtZVR5cGUge1xuICByZXR1cm4gYWJiciA9PT0gJ28nID8gJ291dGxpbmUnIDogYWJiciBhcyBUaGVtZVR5cGU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhbHJlYWR5SGFzQVRoZW1lU3VmZml4KG5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gbmFtZS5lbmRzV2l0aCgnLWZpbGwnKSB8fCBuYW1lLmVuZHNXaXRoKCctbycpIHx8IG5hbWUuZW5kc1dpdGgoJy10d290b25lJyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0ljb25EZWZpbml0aW9uKHRhcmdldDogYW55KTogdGFyZ2V0IGlzIEljb25EZWZpbml0aW9uIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgdGFyZ2V0ID09PSAnb2JqZWN0JyAmJlxuICAgIHR5cGVvZiB0YXJnZXQubmFtZSA9PT0gJ3N0cmluZycgJiZcbiAgICB0eXBlb2YgdGFyZ2V0LnRoZW1lID09PSAnc3RyaW5nJyAmJlxuICAgIC8vIEljb25EZWZpbml0aW9uLmljb24gY291bGQgYmUgYSBTVkc6IFdlIHJlbmRlciBTVkcgb25seSBvbmNlICh0aGUgZmlyc3QgdGltZSBhIGljb24gaXMgdXNlZClcbiAgICAvLyBhbmQgcmV0dXJuIGEgY29weSBldmVyeSB0aW1lIGFmdGVyIHRoYXQuXG4gICAgKHRhcmdldC5pY29uIGluc3RhbmNlb2YgU1ZHRWxlbWVudCB8fCB0eXBlb2YgdGFyZ2V0Lmljb24gPT09ICdzdHJpbmcnKVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0SWNvbkRlZmluaXRpb25Gcm9tQWJicihzdHI6IHN0cmluZyk6IEljb25EZWZpbml0aW9uIHtcbiAgY29uc3QgYXJyID0gc3RyLnNwbGl0KCctJyk7XG4gIGNvbnN0IHRoZW1lID0gbWFwQWJiclRvVGhlbWUoYXJyLnNwbGljZShhcnIubGVuZ3RoIC0gMSwgMSlbMF0pO1xuICBjb25zdCBuYW1lID0gYXJyLmpvaW4oJy0nKTtcblxuICByZXR1cm4ge1xuICAgIG5hbWUsXG4gICAgdGhlbWUsXG4gICAgaWNvbjogJydcbiAgfSBhcyBJY29uRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsb25lU1ZHKHN2ZzogU1ZHRWxlbWVudCk6IFNWR0VsZW1lbnQge1xuICByZXR1cm4gc3ZnLmNsb25lTm9kZSh0cnVlKSBhcyBTVkdFbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUZpbGxDb2xvcihyYXc6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiByYXdcbiAgICAucmVwbGFjZSgvWydcIl0jMzMzWydcIl0vZywgJ1wicHJpbWFyeUNvbG9yXCInKVxuICAgIC5yZXBsYWNlKC9bJ1wiXSNFNkU2RTZbJ1wiXS9nLCAnXCJzZWNvbmRhcnlDb2xvclwiJylcbiAgICAucmVwbGFjZSgvWydcIl0jRDlEOUQ5WydcIl0vZywgJ1wic2Vjb25kYXJ5Q29sb3JcIicpXG4gICAgLnJlcGxhY2UoL1snXCJdI0Q4RDhEOFsnXCJdL2csICdcInNlY29uZGFyeUNvbG9yXCInKTtcbn1cbiIsImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgT3B0aW9uYWwsIEluamVjdCwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBvZiBhcyBvYnNlcnZhYmxlT2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgc2hhcmUsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEljb25EZWZpbml0aW9uLFxuICBDYWNoZWRJY29uRGVmaW5pdGlvbixcbiAgVHdvVG9uZUNvbG9yUGFsZXR0ZSxcbiAgVHdvVG9uZUNvbG9yUGFsZXR0ZVNldHRlcixcbiAgVGhlbWVUeXBlXG59IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7XG4gIGdldFNlY29uZGFyeUNvbG9yLFxuICB3aXRoU3VmZml4LFxuICBpc0ljb25EZWZpbml0aW9uLFxuICBwcmludEVycixcbiAgcHJpbnRXYXJuLFxuICBjbG9uZVNWRyxcbiAgd2l0aFN1ZmZpeEFuZENvbG9yLFxuICBnZXRJY29uRGVmaW5pdGlvbkZyb21BYmJyLFxuICByZXBsYWNlRmlsbENvbG9yXG59IGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGludGVyZmFjZSBSZXFJY29uVGFzayB7XG4gIG9iOiBPYnNlcnZhYmxlPEljb25EZWZpbml0aW9uIHwgbnVsbD47XG59XG5cbmV4cG9ydCBjbGFzcyBJY29uU2VydmljZSB7XG4gIGRlZmF1bHRUaGVtZTogVGhlbWVUeXBlID0gJ291dGxpbmUnO1xuXG4gIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMjtcbiAgcHJvdGVjdGVkIF9odHRwOiBIdHRwQ2xpZW50O1xuXG4gIC8qKlxuICAgKiBSZWdpc3RlciBpY29ucy5cbiAgICovXG4gIHByb3RlY3RlZCBfc3ZnRGVmaW5pdGlvbnMgPSBuZXcgTWFwPHN0cmluZywgSWNvbkRlZmluaXRpb24+KCk7XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIHJlbmRlcmVkICh3aXRoIGNvbG9yKSBTVkcgaWNvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgX3N2Z0NhY2hlZERlZmluaXRpb25zID0gbmV3IE1hcDxzdHJpbmcsIENhY2hlZEljb25EZWZpbml0aW9uPigpO1xuXG4gIC8qKlxuICAgKiBEZWZhdWx0IGNvbG9yIHNldHRpbmdzLlxuICAgKi9cbiAgcHJvdGVjdGVkIF90d29Ub25lQ29sb3JQYWxldHRlOiBUd29Ub25lQ29sb3JQYWxldHRlID0ge1xuICAgIHByaW1hcnlDb2xvciAgOiAnIzMzMzMzMycsXG4gICAgc2Vjb25kYXJ5Q29sb3I6ICcjRTZFNkU2J1xuICB9O1xuXG4gIC8qKlxuICAgKiBBIHVybCBwcmVmaXggc28gdXNlcnMgY2FuIGRldGVybWluZSBhIHN0YXRpYyBhc3NldCByb290LlxuICAgKi9cbiAgcHJvdGVjdGVkIF9hc3NldHNTb3VyY2UgPSAnJztcblxuICAvKipcbiAgICogVG8gbm90ZSB3aGV0aGVyIGEgcmVxdWVzdCB0byBhbiBpY29uIGlzIHVuZGVyIHByb2Nlc3NpbmcuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2h0dHBRdWV1ZSA9IG5ldyBNYXA8c3RyaW5nLCBSZXFJY29uVGFzaz4oKTtcblxuICBzZXQgdHdvVG9uZUNvbG9yKHsgcHJpbWFyeUNvbG9yLCBzZWNvbmRhcnlDb2xvciB9OiBUd29Ub25lQ29sb3JQYWxldHRlU2V0dGVyKSB7XG4gICAgaWYgKHByaW1hcnlDb2xvciAmJiB0eXBlb2YgcHJpbWFyeUNvbG9yID09PSAnc3RyaW5nJyAmJiB0eXBlb2Ygc2Vjb25kYXJ5Q29sb3IgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBzZWNvbmRhcnlDb2xvciA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuX3R3b1RvbmVDb2xvclBhbGV0dGUucHJpbWFyeUNvbG9yID0gcHJpbWFyeUNvbG9yO1xuICAgICAgdGhpcy5fdHdvVG9uZUNvbG9yUGFsZXR0ZS5zZWNvbmRhcnlDb2xvciA9IHNlY29uZGFyeUNvbG9yIHx8IGdldFNlY29uZGFyeUNvbG9yKHByaW1hcnlDb2xvcik7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHR3b1RvbmVDb2xvcigpOiBUd29Ub25lQ29sb3JQYWxldHRlU2V0dGVyIHtcbiAgICByZXR1cm4geyAuLi50aGlzLl90d29Ub25lQ29sb3JQYWxldHRlIH0gYXMgVHdvVG9uZUNvbG9yUGFsZXR0ZTsgLy8gTWFrZSBhIGNvcHkgdG8gYXZvaWQgdW5leHBlY3RlZCBjaGFuZ2VzLlxuICB9XG5cbiAgY2hhbmdlQXNzZXRzU291cmNlKHByZWZpeDogc3RyaW5nKTogdm9pZCB7XG4gICAgdGhpcy5fYXNzZXRzU291cmNlID0gcHJlZml4LmVuZHNXaXRoKCcvJykgPyBwcmVmaXggOiBwcmVmaXggKyAnLyc7XG4gIH1cblxuICAvKipcbiAgICogUmVnaXN0ZXIgSWNvbkRlZmluaXRpb24gcHJvdmlkZWQgYnkgQW50IERlc2lnbiwgcGFyc2luZyBBYnN0cmFjdE5vZGUgdG8gc3ZnIHN0cmluZy5cbiAgICogQHBhcmFtIGljb25zXG4gICAqL1xuICBhZGRJY29uKC4uLmljb25zOiBJY29uRGVmaW5pdGlvbltdKTogdm9pZCB7XG4gICAgdGhpcy5fYWRkSWNvbkxpdGVyYWwoLi4uaWNvbnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlZ2lzdGVyIGljb24uXG4gICAqIEBwYXJhbSBpY29ucyBJY29ucyB0aGF0IHVzZXJzIHdhbnQgdG8gdXNlIGluIHRoZWlyIHByb2plY3RzLiBVc2VyIGRlZmluZWQgaWNvbnMgYW5kIHByZWRlZmluZWRcbiAgICogICBpY29ucyBwcm92aWRlZCBieSBhbnQtZGVzaWduIHNob3VsZCBpbXBsZW1lbnQgSWNvbkRlZmluaXRpb24gYm90aC5cbiAgICovXG4gIHByb3RlY3RlZCBfYWRkSWNvbkxpdGVyYWwoLi4uaWNvbnM6IEljb25EZWZpbml0aW9uW10pOiB2b2lkIHtcbiAgICBpY29ucy5mb3JFYWNoKGljb24gPT4ge1xuICAgICAgdGhpcy5fc3ZnRGVmaW5pdGlvbnMuc2V0KHdpdGhTdWZmaXgoaWNvbi5uYW1lLCBpY29uLnRoZW1lKSwgaWNvbik7XG4gICAgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2dldChrZXk6IHN0cmluZyk6IEljb25EZWZpbml0aW9uIHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMuX3N2Z0RlZmluaXRpb25zLmdldChrZXkpIHx8IG51bGw7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFuIHN0YXRpYyBmaWxlIGFuZCByZXR1cm4gaXQgYXMgYSBzdHJpbmcsIGNyZWF0ZSBhIEljb25EZWZpbml0aW9uIGFuZCBjYWNoZSBpdCBvciByZXR1cm4gbnVsbC5cbiAgICovXG4gIHByb3RlY3RlZCBfZ2V0RnJvbVJlbW90ZSh1cmw6IHN0cmluZyk6IE9ic2VydmFibGU8SWNvbkRlZmluaXRpb24gfCBudWxsPiB7XG4gICAgaWYgKHRoaXMuX2h0dHApIHtcbiAgICAgIGxldCB0YXNrID0gdGhpcy5faHR0cFF1ZXVlLmdldCh1cmwpO1xuICAgICAgbGV0IG9iOiBPYnNlcnZhYmxlPEljb25EZWZpbml0aW9uIHwgbnVsbD47XG4gICAgICBpZiAodGFzaykge1xuICAgICAgICBvYiA9IHRhc2sub2I7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYiA9IHRoaXMuX2NyZWF0ZU9ic2VydmFibGVSZXF1ZXN0KHVybCk7XG4gICAgICAgIHRhc2sgPSB7IG9iIH07XG4gICAgICAgIHRoaXMuX2h0dHBRdWV1ZS5zZXQodXJsLCB0YXNrKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBvYjtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJpbnRXYXJuKCdZb3UgbmVlZCB0byBpbXBvcnQgSHR0cENsaWVudCBtb2R1bGUgdG8gdXNlIGR5bmFtaWMgaW1wb3J0aW5nJyk7XG4gICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NyZWF0ZU9ic2VydmFibGVSZXF1ZXN0KHVybDogc3RyaW5nKTogT2JzZXJ2YWJsZTxJY29uRGVmaW5pdGlvbiB8IG51bGw+IHtcbiAgICBjb25zdCBpY29uOiBJY29uRGVmaW5pdGlvbiA9IGdldEljb25EZWZpbml0aW9uRnJvbUFiYnIodXJsKTtcbiAgICByZXR1cm4gdGhpcy5faHR0cC5nZXQoXG4gICAgICBgJHt0aGlzLl9hc3NldHNTb3VyY2V9YXNzZXRzLyR7aWNvbi50aGVtZX0vJHtpY29uLm5hbWV9LnN2Z2AsXG4gICAgICB7IHJlc3BvbnNlVHlwZTogJ3RleHQnIH1cbiAgICApLnBpcGUoXG4gICAgICBzaGFyZSgpLCAvLyBVc2UgYHNoYXJlYCBzbyBpZiBtdWx0aSBkaXJlY3RpdmVzIHJlcXVlc3QgdGhlIHNhbWUgaWNvbiwgSFRUUCByZXF1ZXN0IHdvdWxkIG9ubHkgYmUgZmlyZWQgb25jZS5cbiAgICAgIHRhcCgoKSA9PiB0aGlzLl9odHRwUXVldWUuZGVsZXRlKHVybCkpLFxuICAgICAgbWFwKHN2Z1N0cmluZyA9PiB7XG4gICAgICAgIGljb24uaWNvbiA9IHN2Z1N0cmluZztcbiAgICAgICAgdGhpcy5fYWRkSWNvbkxpdGVyYWwoaWNvbik7XG4gICAgICAgIHJldHVybiBpY29uO1xuICAgICAgfSksXG4gICAgICBjYXRjaEVycm9yKCgpID0+IHtcbiAgICAgICAgcHJpbnRFcnIoYHRoZSBpY29uICR7dXJsfSBkb2VzIG5vdCBleGlzdCBpbiB5b3VyIGFzc2V0cyBmb2xkZXJgKTtcbiAgICAgICAgdGhpcy5faHR0cFF1ZXVlLmRlbGV0ZSh1cmwpO1xuICAgICAgICByZXR1cm4gb2JzZXJ2YWJsZU9mKG51bGwpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEljb24gY29tcG9uZW50IHdvdWxkIGNhbGwgdGhpcyBtZXRob2QgdG8gZ2V0IGEgU1ZHIGVsZW1lbnQuXG4gICAqIFRoaXMgbWV0aG9kIHJldHVybnMgYSBPYnNlcnZhYmxlIFNWRyBlbGVtZW50IGJlY2F1c2Ugd2hlbiB1c2VyIHdhbnRzIHRvIGdldCBhbiBpY29uIGR5bmFtaWNhbGx5LCB0aGF0IHdvdWxkIGJlIGFzeW5jLFxuICAgKiBzbyB3ZSBwcm92aWRlZCBhIHVuaWZpZWQgaW50ZXJmYWNlIGhlcmUuXG4gICAqL1xuICBnZXRSZW5kZXJlZENvbnRlbnQoaWNvbjogSWNvbkRlZmluaXRpb24gfCBzdHJpbmcsIHR3b1RvbmVDb2xvcj86IHN0cmluZyk6IE9ic2VydmFibGU8U1ZHRWxlbWVudCB8IG51bGw+IHtcbiAgICBjb25zdCBkZWZpbml0aW9uT3JOdWxsOiBJY29uRGVmaW5pdGlvbiB8IG51bGwgPSBpc0ljb25EZWZpbml0aW9uKGljb24pXG4gICAgICA/IGljb24gYXMgSWNvbkRlZmluaXRpb25cbiAgICAgIDogdGhpcy5fZ2V0KGljb24gYXMgc3RyaW5nKTtcbiAgICBjb25zdCAkaWNvbiA9IGRlZmluaXRpb25Pck51bGwgPyBvYnNlcnZhYmxlT2YoZGVmaW5pdGlvbk9yTnVsbCkgOiB0aGlzLl9nZXRGcm9tUmVtb3RlKGljb24gYXMgc3RyaW5nKTtcblxuICAgIHJldHVybiAkaWNvbi5waXBlKFxuICAgICAgbWFwKGkgPT4ge1xuICAgICAgICBpZiAoaSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLl9sb2FkU1ZHRnJvbUNhY2hlT3JDcmVhdGVOZXcoaSwgdHdvVG9uZUNvbG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwcmludEVycihgdGhlIGljb24gJHtpY29ufSBkb2VzIG5vdCBleGlzdCBvciBpcyBub3QgcmVnaXN0ZXJlZGApO1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICB9KSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2xvYWRTVkdGcm9tQ2FjaGVPckNyZWF0ZU5ldyhpY29uOiBJY29uRGVmaW5pdGlvbiwgdHdvVG9uZUNvbG9yPzogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgbGV0IHN2ZzogU1ZHRWxlbWVudDtcbiAgICBjb25zdCBwcmkgPSB0d29Ub25lQ29sb3IgfHwgdGhpcy5fdHdvVG9uZUNvbG9yUGFsZXR0ZS5wcmltYXJ5Q29sb3I7XG4gICAgY29uc3Qgc2VjID0gZ2V0U2Vjb25kYXJ5Q29sb3IocHJpKSB8fCB0aGlzLl90d29Ub25lQ29sb3JQYWxldHRlLnNlY29uZGFyeUNvbG9yO1xuICAgIGNvbnN0IGtleSA9IHdpdGhTdWZmaXhBbmRDb2xvcihpY29uLm5hbWUsIGljb24udGhlbWUsIHByaSwgc2VjKTtcbiAgICBjb25zdCBjYWNoZWQgPSB0aGlzLl9zdmdDYWNoZWREZWZpbml0aW9ucy5nZXQoa2V5KTtcblxuICAgIC8vIElmIHRoaXMgaWNvbiBpcyB1c2VkIGJlZm9yZSwgdGhlcmUgc2hvdWxkIGJlIGEgY29weSBpbiBjYWNoZWREZWZpbml0aW9ucywganVzdCBjb3B5IGl0LlxuICAgIC8vIE90aGVyd2lzZSwgZ2VuZXJhdGUgb25lIGZyb20gc3RyaW5nIG9yIFNWRyBlbGVtZW50LCBhbmQgY2FjaGUgaXQuXG4gICAgaWYgKCFjYWNoZWQpIHtcbiAgICAgIHN2ZyA9IHRoaXMuX3NldFNWR0F0dHJpYnV0ZSh0aGlzLl9jb2xvcml6ZVNWR0ljb24oXG4gICAgICAgIHR5cGVvZiBpY29uLmljb24gPT09ICdzdHJpbmcnID8gdGhpcy5fY3JlYXRlU1ZHRWxlbWVudEZyb21TdHJpbmcoaWNvbi5pY29uKSA6IGljb24uaWNvbixcbiAgICAgICAgaWNvbi50aGVtZSA9PT0gJ3R3b3RvbmUnLFxuICAgICAgICBwcmksXG4gICAgICAgIHNlY1xuICAgICAgKSk7XG4gICAgICB0aGlzLl9zdmdDYWNoZWREZWZpbml0aW9ucy5zZXQoa2V5LCB7IC4uLmljb24sIGljb246IHN2ZyB9IGFzIENhY2hlZEljb25EZWZpbml0aW9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ZnID0gY2FjaGVkLmljb247XG4gICAgfVxuXG4gICAgcmV0dXJuIGNsb25lU1ZHKHN2Zyk7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NyZWF0ZVNWR0VsZW1lbnRGcm9tU3RyaW5nKHN0cjogc3RyaW5nKTogU1ZHRWxlbWVudCB7XG4gICAgY29uc3QgY29sb3JQYXJzZWQgPSByZXBsYWNlRmlsbENvbG9yKHN0cik7XG4gICAgY29uc3QgZGl2ID0gdGhpcy5fZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2LmlubmVySFRNTCA9IGNvbG9yUGFyc2VkO1xuICAgIGNvbnN0IHN2ZzogU1ZHRWxlbWVudCA9IGRpdi5xdWVyeVNlbGVjdG9yKCdzdmcnKTtcbiAgICBpZiAoIXN2Zykge1xuICAgICAgdGhyb3cgRXJyb3IoJzxzdmc+IHRhZyBub3QgZm91bmQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN2ZztcbiAgfVxuXG4gIHByb3RlY3RlZCBfc2V0U1ZHQXR0cmlidXRlKHN2ZzogU1ZHRWxlbWVudCk6IFNWR0VsZW1lbnQge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd3aWR0aCcsICcxZW0nKTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnaGVpZ2h0JywgJzFlbScpO1xuICAgIHJldHVybiBzdmc7XG4gIH1cblxuICBwcm90ZWN0ZWQgX2NvbG9yaXplU1ZHSWNvbihzdmc6IFNWR0VsZW1lbnQsIHR3b3RvbmU6IGJvb2xlYW4sIHByaTogc3RyaW5nLCBzZWM6IHN0cmluZyk6IFNWR0VsZW1lbnQge1xuICAgIGlmICh0d290b25lKSB7XG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHN2Zy5jaGlsZE5vZGVzO1xuICAgICAgY29uc3QgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGlsZDogSFRNTEVsZW1lbnQgPSBjaGlsZHJlblsgaSBdIGFzIEhUTUxFbGVtZW50O1xuICAgICAgICBpZiAoY2hpbGQuZ2V0QXR0cmlidXRlKCdmaWxsJykgPT09ICdzZWNvbmRhcnlDb2xvcicpIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoY2hpbGQsICdmaWxsJywgc2VjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoY2hpbGQsICdmaWxsJywgcHJpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnZmlsbCcsICdjdXJyZW50Q29sb3InKTtcbiAgICByZXR1cm4gc3ZnO1xuICB9XG5cbiAgY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5fc3ZnRGVmaW5pdGlvbnMuY2xlYXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBfcmVuZGVyZXJGYWN0b3J5OiBSZW5kZXJlckZhY3RvcnkyLFxuICAgIEBPcHRpb25hbCgpIHByb3RlY3RlZCBfaGFuZGxlcjogSHR0cEJhY2tlbmQsXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChET0NVTUVOVCkgcHJvdGVjdGVkIF9kb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuX3JlbmRlcmVyID0gdGhpcy5fcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICAgIGlmICh0aGlzLl9oYW5kbGVyKSB7XG4gICAgICB0aGlzLl9odHRwID0gbmV3IEh0dHBDbGllbnQodGhpcy5faGFuZGxlcik7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQge1xuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBEaXJlY3RpdmUsIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25TZXJ2aWNlIH0gZnJvbSAnLi9pY29uLnNlcnZpY2UnO1xuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIFRoZW1lVHlwZSB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IGlzSWNvbkRlZmluaXRpb24sIHByaW50RXJyLCB3aXRoU3VmZml4LCBhbHJlYWR5SGFzQVRoZW1lU3VmZml4IH0gZnJvbSAnLi4vdXRpbHMnO1xuXG4vKipcbiAqIERldmVsb3BlcnMgdXNlIHRoaXMgY29tcG9uZW50IHRvIHJlbmRlciBhbiBTVkcgZWxlbWVudC5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FudEljb25dJ1xufSlcbmV4cG9ydCBjbGFzcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgdHlwZTogc3RyaW5nIHwgSWNvbkRlZmluaXRpb247XG4gIEBJbnB1dCgpIHRoZW1lOiBUaGVtZVR5cGU7XG4gIEBJbnB1dCgpIHR3b1RvbmVDb2xvcjogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZW5kZXIgYW4gaWNvbiB3aXRoIGdpdmVuIHR5cGUgYW5kIHRoZW1lLiBSZXR1cm4gYW4gU1ZHIGVsZW1lbnQgZm9yIGV4dHJhIGJlaGF2aW9ycyAoZXh0ZW5kZWQgYnkgY2hpbGQgY2xhc3NlcykuXG4gICAqL1xuICBwcm90ZWN0ZWQgX2NoYW5nZUljb24oKTogUHJvbWlzZTxTVkdBRWxlbWVudCB8IG51bGw+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnR5cGUpIHtcbiAgICAgICAgdGhpcy5fY2xlYXJTVkdFbGVtZW50KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9pY29uU2VydmljZS5nZXRSZW5kZXJlZENvbnRlbnQodGhpcy5fcGFyc2VJY29uKHRoaXMudHlwZSwgdGhpcy50aGVtZSksIHRoaXMudHdvVG9uZUNvbG9yKVxuICAgICAgICAuc3Vic2NyaWJlKHN2ZyA9PiB7XG4gICAgICAgICAgaWYgKHN2Zykge1xuICAgICAgICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudChzdmcpO1xuICAgICAgICAgICAgcmVzb2x2ZShzdmcgYXMgU1ZHQUVsZW1lbnQpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZWplY3QobnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZSBhbiBpY29uJ3MgdHlwZS5cbiAgICovXG4gIHByb3RlY3RlZCBfcGFyc2VJY29uKHR5cGU6IHN0cmluZyB8IEljb25EZWZpbml0aW9uLCB0aGVtZTogVGhlbWVUeXBlKTogSWNvbkRlZmluaXRpb24gfCBzdHJpbmcge1xuICAgIGlmIChpc0ljb25EZWZpbml0aW9uKHR5cGUpKSB7XG4gICAgICByZXR1cm4gdHlwZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGFscmVhZHlIYXNBVGhlbWVTdWZmaXgodHlwZSkpIHtcbiAgICAgICAgaWYgKCEhdGhlbWUpIHtcbiAgICAgICAgICBwcmludEVycihgJ3R5cGUnICR7dHlwZX0gYWxyZWFkeSBnZXRzIGEgdGhlbWUgaW5zaWRlIHNvICd0aGVtZScgJHt0aGVtZX0gd291bGQgYmUgaWdub3JlZGApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0eXBlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHdpdGhTdWZmaXgodHlwZSwgdGhlbWUgfHwgdGhpcy5faWNvblNlcnZpY2UuZGVmYXVsdFRoZW1lKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVuZGVyIGFuIFNWRyBlbGVtZW50IGludG8gdGhlIGRpcmVjdGl2ZSBhZnRlciByZW1vdmluZyBvdGhlciBpY29ucy5cbiAgICovXG4gIHByb3RlY3RlZCBfc2V0U1ZHRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBzZWxmOiBIVE1MRWxlbWVudCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICB0aGlzLl9jbGVhclNWR0VsZW1lbnQoKTtcbiAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZChzZWxmLCBzdmcpO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9jbGVhclNWR0VsZW1lbnQoKTogdm9pZCB7XG4gICAgY29uc3Qgc2VsZjogSFRNTEVsZW1lbnQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgY2hpbGRyZW4gPSBzZWxmLmNoaWxkTm9kZXM7XG4gICAgY29uc3QgY2hpbGRDb3VudCA9IGNoaWxkcmVuLmxlbmd0aDtcbiAgICBmb3IgKGxldCBpID0gY2hpbGRDb3VudCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBjb25zdCBjaGlsZCA9IGNoaWxkcmVuWyBpIF0gYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoY2hpbGQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnc3ZnJykge1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDaGlsZChzZWxmLCBjaGlsZCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIF9pY29uU2VydmljZTogSWNvblNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByb3RlY3RlZCBfcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKCgpID0+IHtcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBJY29uU2VydmljZSB9IGZyb20gJy4vaWNvbi5zZXJ2aWNlJztcbmltcG9ydCB7IEljb25EaXJlY3RpdmUgfSBmcm9tICcuL2ljb24uZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0cyAgICAgOiBbIENvbW1vbk1vZHVsZSBdLFxuICBleHBvcnRzICAgICA6IFsgSWNvbkRpcmVjdGl2ZSBdLFxuICBkZWNsYXJhdGlvbnM6IFsgSWNvbkRpcmVjdGl2ZSBdLFxuICBwcm92aWRlcnMgICA6IFsgSWNvblNlcnZpY2UgXVxufSlcbmV4cG9ydCBjbGFzcyBJY29uTW9kdWxlIHtcbn1cbiIsIi8vIFRoaXMgaWNvbiBmaWxlIGlzIGdlbmVyYXRlZCBieSBidWlsZC9nZW5lcmF0ZS50c1xuLy8gdHNsaW50OmRpc2FibGVcblxuaW1wb3J0IHsgTWFuaWZlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IG1hbmlmZXN0OiBNYW5pZmVzdCA9IHtcbiAgZmlsbDogW1xuICAgICdhY2NvdW50LWJvb2snLFxuICAgICdhbGVydCcsXG4gICAgJ2FsaXBheS1zcXVhcmUnLFxuICAgICdhbGl3YW5nd2FuZycsXG4gICAgJ2FsaXBheS1jaXJjbGUnLFxuICAgICdhbWF6b24tY2lyY2xlJyxcbiAgICAnYW1hem9uLXNxdWFyZScsXG4gICAgJ2FwaScsXG4gICAgJ2FwcGxlJyxcbiAgICAnYXBwc3RvcmUnLFxuICAgICdhdWRpbycsXG4gICAgJ2JhbmsnLFxuICAgICdiZWhhbmNlLWNpcmNsZScsXG4gICAgJ2JlaGFuY2Utc3F1YXJlJyxcbiAgICAnYmVsbCcsXG4gICAgJ2Jvb2snLFxuICAgICdib3gtcGxvdCcsXG4gICAgJ2J1aWxkJyxcbiAgICAnYnVsYicsXG4gICAgJ2NhbGN1bGF0b3InLFxuICAgICdjYWxlbmRhcicsXG4gICAgJ2NhbWVyYScsXG4gICAgJ2NhcicsXG4gICAgJ2NhcmV0LWRvd24nLFxuICAgICdjYXJldC1yaWdodCcsXG4gICAgJ2NhcmV0LWxlZnQnLFxuICAgICdjYXJyeS1vdXQnLFxuICAgICdjYXJldC11cCcsXG4gICAgJ2NoZWNrLWNpcmNsZScsXG4gICAgJ2NoZWNrLXNxdWFyZScsXG4gICAgJ2Nocm9tZScsXG4gICAgJ2NpLWNpcmNsZScsXG4gICAgJ2Nsb3NlLWNpcmNsZScsXG4gICAgJ2Nsb3NlLXNxdWFyZScsXG4gICAgJ2Nsb3VkJyxcbiAgICAnY29kZS1zYW5kYm94LWNpcmNsZScsXG4gICAgJ2Nsb2NrLWNpcmNsZScsXG4gICAgJ2NvZGUtc2FuZGJveC1zcXVhcmUnLFxuICAgICdjb2RlJyxcbiAgICAnY29kZXBlbi1jaXJjbGUnLFxuICAgICdjb21wYXNzJyxcbiAgICAnY29udGFjdHMnLFxuICAgICdjb250YWluZXInLFxuICAgICdjb2RlcGVuLXNxdWFyZScsXG4gICAgJ2NvbnRyb2wnLFxuICAgICdjb3B5JyxcbiAgICAnY29weXJpZ2h0LWNpcmNsZScsXG4gICAgJ2NyZWRpdC1jYXJkJyxcbiAgICAnY3Jvd24nLFxuICAgICdjdXN0b21lci1zZXJ2aWNlJyxcbiAgICAnZGFzaGJvYXJkJyxcbiAgICAnYmFja3dhcmQnLFxuICAgICdkYXRhYmFzZScsXG4gICAgJ2RlbGV0ZScsXG4gICAgJ2RpZmYnLFxuICAgICdkaW5ndGFsay1jaXJjbGUnLFxuICAgICdkaXNsaWtlJyxcbiAgICAnZG9sbGFyLWNpcmNsZScsXG4gICAgJ2Rvd24tY2lyY2xlJyxcbiAgICAnZG93bi1zcXVhcmUnLFxuICAgICdkaW5ndGFsay1zcXVhcmUnLFxuICAgICdkcmliYmJsZS1zcXVhcmUnLFxuICAgICdkcm9wYm94LWNpcmNsZScsXG4gICAgJ2Ryb3Bib3gtc3F1YXJlJyxcbiAgICAnZWRpdCcsXG4gICAgJ2Vudmlyb25tZW50JyxcbiAgICAnZXVyby1jaXJjbGUnLFxuICAgICdleGNsYW1hdGlvbi1jaXJjbGUnLFxuICAgICdleHBlcmltZW50JyxcbiAgICAnZXllJyxcbiAgICAnZmFjZWJvb2snLFxuICAgICdmYXN0LWJhY2t3YXJkJyxcbiAgICAnZmFzdC1mb3J3YXJkJyxcbiAgICAnZmlsZS1hZGQnLFxuICAgICdmaWxlLWV4Y2VsJyxcbiAgICAnZmlsZS1leGNsYW1hdGlvbicsXG4gICAgJ2ZpbGUtbWFya2Rvd24nLFxuICAgICdmaWxlLXBkZicsXG4gICAgJ2ZpbGUtaW1hZ2UnLFxuICAgICdmaWxlLXBwdCcsXG4gICAgJ2ZpbGUtdGV4dCcsXG4gICAgJ2ZpbGUtdW5rbm93bicsXG4gICAgJ2ZpbGUtd29yZCcsXG4gICAgJ2ZpbGUtemlwJyxcbiAgICAnZmlsZScsXG4gICAgJ2ZpbHRlcicsXG4gICAgJ2ZpcmUnLFxuICAgICdhbmRyb2lkJyxcbiAgICAnZm9sZGVyLWFkZCcsXG4gICAgJ2ZvbGRlci1vcGVuJyxcbiAgICAnZmxhZycsXG4gICAgJ2ZvcndhcmQnLFxuICAgICdmdW5kJyxcbiAgICAnZm9sZGVyJyxcbiAgICAnZnJvd24nLFxuICAgICdnaWZ0JyxcbiAgICAnZnVubmVsLXBsb3QnLFxuICAgICdnaXRodWInLFxuICAgICdnb2xkZW4nLFxuICAgICdnaXRsYWInLFxuICAgICdnb29nbGUtcGx1cy1jaXJjbGUnLFxuICAgICdnb29nbGUtY2lyY2xlJyxcbiAgICAnZ29vZ2xlLXBsdXMtc3F1YXJlJyxcbiAgICAnZ29vZ2xlLXNxdWFyZScsXG4gICAgJ2hlYXJ0JyxcbiAgICAnaGRkJyxcbiAgICAnaGlnaGxpZ2h0JyxcbiAgICAnaG91cmdsYXNzJyxcbiAgICAnaHRtbDUnLFxuICAgICdpZGNhcmQnLFxuICAgICdob21lJyxcbiAgICAnaW5mby1jaXJjbGUnLFxuICAgICdpbnN0YWdyYW0nLFxuICAgICdpZS1zcXVhcmUnLFxuICAgICdpbnRlcmF0aW9uJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVmdC1jaXJjbGUnLFxuICAgICdsZWZ0LXNxdWFyZScsXG4gICAgJ2luc3VyYW5jZScsXG4gICAgJ2xpa2UnLFxuICAgICdsaW5rZWRpbicsXG4gICAgJ2xvY2snLFxuICAgICdtYWlsJyxcbiAgICAnbWVkaWNpbmUtYm94JyxcbiAgICAnbWVkaXVtLWNpcmNsZScsXG4gICAgJ2RyaWJiYmxlLWNpcmNsZScsXG4gICAgJ21lc3NhZ2UnLFxuICAgICdtaW51cy1jaXJjbGUnLFxuICAgICdtaW51cy1zcXVhcmUnLFxuICAgICdtZWRpdW0tc3F1YXJlJyxcbiAgICAnbW9iaWxlJyxcbiAgICAnbW9uZXktY29sbGVjdCcsXG4gICAgJ25vdGlmaWNhdGlvbicsXG4gICAgJ3BhdXNlLWNpcmNsZScsXG4gICAgJ3BheS1jaXJjbGUnLFxuICAgICdwaG9uZScsXG4gICAgJ3BpY3R1cmUnLFxuICAgICdwaWUtY2hhcnQnLFxuICAgICdwbGF5LWNpcmNsZScsXG4gICAgJ21laCcsXG4gICAgJ3BsYXktc3F1YXJlJyxcbiAgICAncGx1cy1jaXJjbGUnLFxuICAgICdwbHVzLXNxdWFyZScsXG4gICAgJ3BvdW5kLWNpcmNsZScsXG4gICAgJ3ByaW50ZXInLFxuICAgICdwcm9qZWN0JyxcbiAgICAncHJvcGVydHktc2FmZXR5JyxcbiAgICAncHJvZmlsZScsXG4gICAgJ3B1c2hwaW4nLFxuICAgICdxcS1jaXJjbGUnLFxuICAgICdxcS1zcXVhcmUnLFxuICAgICdxdWVzdGlvbi1jaXJjbGUnLFxuICAgICdyZWNvbmNpbGlhdGlvbicsXG4gICAgJ3JlYWQnLFxuICAgICdyZWRkaXQtY2lyY2xlJyxcbiAgICAncmVkLWVudmVsb3BlJyxcbiAgICAncmVzdCcsXG4gICAgJ3JpZ2h0LWNpcmNsZScsXG4gICAgJ3JpZ2h0LXNxdWFyZScsXG4gICAgJ3JvY2tldCcsXG4gICAgJ3NhZmV0eS1jZXJ0aWZpY2F0ZScsXG4gICAgJ3NhdmUnLFxuICAgICdzY2hlZHVsZScsXG4gICAgJ3NlY3VyaXR5LXNjYW4nLFxuICAgICdzZXR0aW5nJyxcbiAgICAnc2hvcCcsXG4gICAgJ3Nob3BwaW5nJyxcbiAgICAnc2tldGNoLWNpcmNsZScsXG4gICAgJ3NrZXRjaC1zcXVhcmUnLFxuICAgICdza3lwZScsXG4gICAgJ3NraW4nLFxuICAgICdzbGFjay1jaXJjbGUnLFxuICAgICdzbGFjay1zcXVhcmUnLFxuICAgICdzbWlsZScsXG4gICAgJ2llLWNpcmNsZScsXG4gICAgJ3NuaXBwZXRzJyxcbiAgICAnc291bmQnLFxuICAgICdzdGFyJyxcbiAgICAnc2xpZGVycycsXG4gICAgJ3N0ZXAtYmFja3dhcmQnLFxuICAgICdzdGVwLWZvcndhcmQnLFxuICAgICdzdG9wJyxcbiAgICAndGFibGV0JyxcbiAgICAndGFncycsXG4gICAgJ3RhZycsXG4gICAgJ3Rhb2Jhby1jaXJjbGUnLFxuICAgICd0YW9iYW8tc3F1YXJlJyxcbiAgICAndGh1bmRlcmJvbHQnLFxuICAgICd0b29sJyxcbiAgICAndHJvcGh5JyxcbiAgICAndHdpdHRlci1jaXJjbGUnLFxuICAgICd0d2l0dGVyLXNxdWFyZScsXG4gICAgJ3VubG9jaycsXG4gICAgJ3VwLWNpcmNsZScsXG4gICAgJ3VwLXNxdWFyZScsXG4gICAgJ3VzYicsXG4gICAgJ3ZpZGVvLWNhbWVyYScsXG4gICAgJ3dhbGxldCcsXG4gICAgJ3dhcm5pbmcnLFxuICAgICd3ZWNoYXQnLFxuICAgICd3ZWliby1jaXJjbGUnLFxuICAgICd3ZWliby1zcXVhcmUnLFxuICAgICd0cmFkZW1hcmstY2lyY2xlJyxcbiAgICAnd2luZG93cycsXG4gICAgJ3lhaG9vJyxcbiAgICAnc3dpdGNoZXInLFxuICAgICd5dXF1ZScsXG4gICAgJ3poaWh1LWNpcmNsZScsXG4gICAgJ3lvdXR1YmUnLFxuICAgICd6aGlodS1zcXVhcmUnLFxuICAgICdyZWRkaXQtc3F1YXJlJ1xuICBdLFxuICBvdXRsaW5lOiBbXG4gICAgJ2FjY291bnQtYm9vaycsXG4gICAgJ2FsZXJ0JyxcbiAgICAnYWxpd2FuZ3dhbmcnLFxuICAgICdhbGlwYXktY2lyY2xlJyxcbiAgICAnYXBpJyxcbiAgICAnYXBwbGUnLFxuICAgICdhcHBzdG9yZScsXG4gICAgJ2F1ZGlvJyxcbiAgICAnYmFuaycsXG4gICAgJ2JlaGFuY2Utc3F1YXJlJyxcbiAgICAnYmVsbCcsXG4gICAgJ2Jvb2snLFxuICAgICdib3gtcGxvdCcsXG4gICAgJ2J1aWxkJyxcbiAgICAnYnVsYicsXG4gICAgJ2NhbGN1bGF0b3InLFxuICAgICdjYWxlbmRhcicsXG4gICAgJ2NhbWVyYScsXG4gICAgJ2NhcicsXG4gICAgJ2NhcmV0LWRvd24nLFxuICAgICdjYXJldC1yaWdodCcsXG4gICAgJ2NhcmV0LWxlZnQnLFxuICAgICdjYXJyeS1vdXQnLFxuICAgICdjYXJldC11cCcsXG4gICAgJ2NoZWNrLWNpcmNsZScsXG4gICAgJ2NoZWNrLXNxdWFyZScsXG4gICAgJ2Nocm9tZScsXG4gICAgJ2Nsb3NlLWNpcmNsZScsXG4gICAgJ2Nsb3NlLXNxdWFyZScsXG4gICAgJ2Nsb3VkJyxcbiAgICAnY2xvY2stY2lyY2xlJyxcbiAgICAnY29kZScsXG4gICAgJ2NvZGVwZW4tY2lyY2xlJyxcbiAgICAnY29tcGFzcycsXG4gICAgJ2NvbnRhY3RzJyxcbiAgICAnY29udGFpbmVyJyxcbiAgICAnY29udHJvbCcsXG4gICAgJ2NvcHknLFxuICAgICdjcmVkaXQtY2FyZCcsXG4gICAgJ2Nyb3duJyxcbiAgICAnY3VzdG9tZXItc2VydmljZScsXG4gICAgJ2Rhc2hib2FyZCcsXG4gICAgJ2JhY2t3YXJkJyxcbiAgICAnZGF0YWJhc2UnLFxuICAgICdkZWxldGUnLFxuICAgICdkaWZmJyxcbiAgICAnZGlzbGlrZScsXG4gICAgJ2Rvd24tY2lyY2xlJyxcbiAgICAnZG93bi1zcXVhcmUnLFxuICAgICdkcmliYmJsZS1zcXVhcmUnLFxuICAgICdlZGl0JyxcbiAgICAnZW52aXJvbm1lbnQnLFxuICAgICdleGNsYW1hdGlvbi1jaXJjbGUnLFxuICAgICdleHBlcmltZW50JyxcbiAgICAnZXllJyxcbiAgICAnZmFjZWJvb2snLFxuICAgICdmYXN0LWJhY2t3YXJkJyxcbiAgICAnZmFzdC1mb3J3YXJkJyxcbiAgICAnZmlsZS1hZGQnLFxuICAgICdmaWxlLWV4Y2VsJyxcbiAgICAnZmlsZS1leGNsYW1hdGlvbicsXG4gICAgJ2ZpbGUtbWFya2Rvd24nLFxuICAgICdmaWxlLXBkZicsXG4gICAgJ2ZpbGUtaW1hZ2UnLFxuICAgICdmaWxlLXBwdCcsXG4gICAgJ2ZpbGUtdGV4dCcsXG4gICAgJ2ZpbGUtdW5rbm93bicsXG4gICAgJ2ZpbGUtd29yZCcsXG4gICAgJ2ZpbGUtemlwJyxcbiAgICAnZmlsZScsXG4gICAgJ2ZpbHRlcicsXG4gICAgJ2ZpcmUnLFxuICAgICdhbmRyb2lkJyxcbiAgICAnZm9sZGVyLWFkZCcsXG4gICAgJ2ZvbGRlci1vcGVuJyxcbiAgICAnZmxhZycsXG4gICAgJ2ZvcndhcmQnLFxuICAgICdmdW5kJyxcbiAgICAnZm9sZGVyJyxcbiAgICAnZnJvd24nLFxuICAgICdnaWZ0JyxcbiAgICAnZnVubmVsLXBsb3QnLFxuICAgICdnaXRodWInLFxuICAgICdnaXRsYWInLFxuICAgICdoZWFydCcsXG4gICAgJ2hkZCcsXG4gICAgJ2hpZ2hsaWdodCcsXG4gICAgJ2hvdXJnbGFzcycsXG4gICAgJ2h0bWw1JyxcbiAgICAnaWRjYXJkJyxcbiAgICAnaG9tZScsXG4gICAgJ2luZm8tY2lyY2xlJyxcbiAgICAnaW5zdGFncmFtJyxcbiAgICAnaW50ZXJhdGlvbicsXG4gICAgJ2xheW91dCcsXG4gICAgJ2xlZnQtY2lyY2xlJyxcbiAgICAnbGVmdC1zcXVhcmUnLFxuICAgICdpbnN1cmFuY2UnLFxuICAgICdsaWtlJyxcbiAgICAnbGlua2VkaW4nLFxuICAgICdsb2NrJyxcbiAgICAnbWFpbCcsXG4gICAgJ21lZGljaW5lLWJveCcsXG4gICAgJ21lc3NhZ2UnLFxuICAgICdtaW51cy1jaXJjbGUnLFxuICAgICdtaW51cy1zcXVhcmUnLFxuICAgICdtb2JpbGUnLFxuICAgICdtb25leS1jb2xsZWN0JyxcbiAgICAnbm90aWZpY2F0aW9uJyxcbiAgICAncGF1c2UtY2lyY2xlJyxcbiAgICAncGF5LWNpcmNsZScsXG4gICAgJ3Bob25lJyxcbiAgICAncGljdHVyZScsXG4gICAgJ3BpZS1jaGFydCcsXG4gICAgJ3BsYXktY2lyY2xlJyxcbiAgICAnbWVoJyxcbiAgICAncGxheS1zcXVhcmUnLFxuICAgICdwbHVzLWNpcmNsZScsXG4gICAgJ3BsdXMtc3F1YXJlJyxcbiAgICAncHJpbnRlcicsXG4gICAgJ3Byb2plY3QnLFxuICAgICdwcm9wZXJ0eS1zYWZldHknLFxuICAgICdwcm9maWxlJyxcbiAgICAncHVzaHBpbicsXG4gICAgJ3F1ZXN0aW9uLWNpcmNsZScsXG4gICAgJ3JlY29uY2lsaWF0aW9uJyxcbiAgICAncmVhZCcsXG4gICAgJ3JlZC1lbnZlbG9wZScsXG4gICAgJ3Jlc3QnLFxuICAgICdyaWdodC1jaXJjbGUnLFxuICAgICdyaWdodC1zcXVhcmUnLFxuICAgICdyb2NrZXQnLFxuICAgICdzYWZldHktY2VydGlmaWNhdGUnLFxuICAgICdzYXZlJyxcbiAgICAnc2NoZWR1bGUnLFxuICAgICdzZWN1cml0eS1zY2FuJyxcbiAgICAnc2V0dGluZycsXG4gICAgJ3Nob3AnLFxuICAgICdzaG9wcGluZycsXG4gICAgJ3NreXBlJyxcbiAgICAnc2tpbicsXG4gICAgJ3NsYWNrLXNxdWFyZScsXG4gICAgJ3NtaWxlJyxcbiAgICAnc25pcHBldHMnLFxuICAgICdzb3VuZCcsXG4gICAgJ3N0YXInLFxuICAgICdzbGlkZXJzJyxcbiAgICAnc3RlcC1iYWNrd2FyZCcsXG4gICAgJ3N0ZXAtZm9yd2FyZCcsXG4gICAgJ3N0b3AnLFxuICAgICd0YWJsZXQnLFxuICAgICd0YWdzJyxcbiAgICAndGFnJyxcbiAgICAndGFvYmFvLWNpcmNsZScsXG4gICAgJ3RodW5kZXJib2x0JyxcbiAgICAndG9vbCcsXG4gICAgJ3Ryb3BoeScsXG4gICAgJ3VubG9jaycsXG4gICAgJ3VwLWNpcmNsZScsXG4gICAgJ3VwLXNxdWFyZScsXG4gICAgJ3VzYicsXG4gICAgJ3ZpZGVvLWNhbWVyYScsXG4gICAgJ3dhbGxldCcsXG4gICAgJ3dhcm5pbmcnLFxuICAgICd3ZWNoYXQnLFxuICAgICd3ZWliby1jaXJjbGUnLFxuICAgICd3ZWliby1zcXVhcmUnLFxuICAgICd3aW5kb3dzJyxcbiAgICAneWFob28nLFxuICAgICdzd2l0Y2hlcicsXG4gICAgJ3l1cXVlJyxcbiAgICAneW91dHViZScsXG4gICAgJ2FsaWJhYmEnLFxuICAgICdhbGlnbi1jZW50ZXInLFxuICAgICdhbGlnbi1sZWZ0JyxcbiAgICAnYWxpZ24tcmlnaHQnLFxuICAgICdhbGlwYXknLFxuICAgICdhbGl5dW4nLFxuICAgICdhbWF6b24nLFxuICAgICdhbnQtY2xvdWQnLFxuICAgICdhbnQtZGVzaWduJyxcbiAgICAnYXBhcnRtZW50JyxcbiAgICAnYXJlYS1jaGFydCcsXG4gICAgJ2Fycm93LWRvd24nLFxuICAgICdhcnJvdy1sZWZ0JyxcbiAgICAnYXJyb3ctcmlnaHQnLFxuICAgICdhcnJvdy11cCcsXG4gICAgJ2Fycm93cy1hbHQnLFxuICAgICdhdWRpdCcsXG4gICAgJ2JhcmNvZGUnLFxuICAgICdiYXJzJyxcbiAgICAnYmVoYW5jZScsXG4gICAgJ2JnLWNvbG9ycycsXG4gICAgJ2JvbGQnLFxuICAgICdibG9jaycsXG4gICAgJ2JvcmRlci1ob3Jpem9udGFsJyxcbiAgICAnYm9yZGVyLWlubmVyJyxcbiAgICAnYm9yZGVyLW91dGVyJyxcbiAgICAnYm9yZGVyLWxlZnQnLFxuICAgICdib3JkZXItcmlnaHQnLFxuICAgICdib3JkZXItdG9wJyxcbiAgICAnYm9yZGVyLWJvdHRvbScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JyYW5jaGVzJyxcbiAgICAnYm9yZGVyLXZlcnRpY2xlJyxcbiAgICAnYmFyLWNoYXJ0JyxcbiAgICAnY2hlY2snLFxuICAgICdjaScsXG4gICAgJ2Nsb3NlJyxcbiAgICAnY2xvdWQtc2VydmVyJyxcbiAgICAnY2xvdWQtZG93bmxvYWQnLFxuICAgICdjbG91ZC11cGxvYWQnLFxuICAgICdjb2RlLXNhbmRib3gnLFxuICAgICdjbHVzdGVyJyxcbiAgICAnY2xvdWQtc3luYycsXG4gICAgJ2NvZGVwZW4nLFxuICAgICdjb2ZmZWUnLFxuICAgICdjb2x1bW4td2lkdGgnLFxuICAgICdjb3B5cmlnaHQnLFxuICAgICdkYXNoJyxcbiAgICAnZGVwbG95bWVudC11bml0JyxcbiAgICAnZGVza3RvcCcsXG4gICAgJ2RpbmdkaW5nJyxcbiAgICAnZGlzY29ubmVjdCcsXG4gICAgJ2RvdC1jaGFydCcsXG4gICAgJ2RvdWJsZS1sZWZ0JyxcbiAgICAnZG91YmxlLXJpZ2h0JyxcbiAgICAnZG93bicsXG4gICAgJ2Rvd25sb2FkJyxcbiAgICAnZHJhZycsXG4gICAgJ2RyaWJiYmxlJyxcbiAgICAnZHJvcGJveCcsXG4gICAgJ2VsbGlwc2lzJyxcbiAgICAnZW50ZXInLFxuICAgICdldXJvJyxcbiAgICAnZXhjZXB0aW9uJyxcbiAgICAnZXhjbGFtYXRpb24nLFxuICAgICdleHBvcnQnLFxuICAgICdmYWxsJyxcbiAgICAnZG9sbGFyJyxcbiAgICAnZmlsZS1kb25lJyxcbiAgICAnZmlsZS1qcGcnLFxuICAgICdmaWxlLXByb3RlY3QnLFxuICAgICdmaWxlLXNlYXJjaCcsXG4gICAgJ2ZpbGUtc3luYycsXG4gICAgJ2ZvbnQtY29sb3JzJyxcbiAgICAnZm9udC1zaXplJyxcbiAgICAnZm9yaycsXG4gICAgJ2Zvcm0nLFxuICAgICdmdWxsc2NyZWVuLWV4aXQnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnY29sdW0taGVpZ2h0JyxcbiAgICAnZ2F0ZXdheScsXG4gICAgJ2dvbGQnLFxuICAgICdnbG9iYWwnLFxuICAgICdnb29nbGUnLFxuICAgICdpZScsXG4gICAgJ2ltcG9ydCcsXG4gICAgJ2luYm94JyxcbiAgICAnaW5mbycsXG4gICAgJ2lzc3Vlcy1jbG9zZScsXG4gICAgJ2l0YWxpYycsXG4gICAgJ2tleScsXG4gICAgJ2xhcHRvcCcsXG4gICAgJ2hlYXQtbWFwJyxcbiAgICAnbGVmdCcsXG4gICAgJ2xpbmUtY2hhcnQnLFxuICAgICdsaW5lLWhlaWdodCcsXG4gICAgJ2xpbmsnLFxuICAgICdsb2FkaW5nLTMtcXVhcnRlcnMnLFxuICAgICdsb2FkaW5nJyxcbiAgICAnbG9naW4nLFxuICAgICdsb2dvdXQnLFxuICAgICdtYW4nLFxuICAgICdtZWRpdW0td29ya21hcmsnLFxuICAgICdtZWRpdW0nLFxuICAgICdtZW51LWZvbGQnLFxuICAgICdsaW5lJyxcbiAgICAnbWVudS11bmZvbGQnLFxuICAgICdtZW51JyxcbiAgICAnbWludXMnLFxuICAgICdtb25pdG9yJyxcbiAgICAnbXInLFxuICAgICdudW1iZXInLFxuICAgICdvcmRlcmVkLWxpc3QnLFxuICAgICdwYXBlci1jbGlwJyxcbiAgICAncGF1c2UnLFxuICAgICdwZXJjZW50YWdlJyxcbiAgICAncGljLWNlbnRlcicsXG4gICAgJ3BpYy1sZWZ0JyxcbiAgICAncGljLXJpZ2h0JyxcbiAgICAncGx1cycsXG4gICAgJ3BvdW5kJyxcbiAgICAncG93ZXJvZmYnLFxuICAgICdxcScsXG4gICAgJ3FyY29kZScsXG4gICAgJ3F1ZXN0aW9uJyxcbiAgICAncmFkYXItY2hhcnQnLFxuICAgICdyYWRpdXMtYm90dG9tcmlnaHQnLFxuICAgICdyYWRpdXMtYm90dG9tbGVmdCcsXG4gICAgJ3JhZGl1cy1zZXR0aW5nJyxcbiAgICAncmFkaXVzLXVwbGVmdCcsXG4gICAgJ3JhZGl1cy11cHJpZ2h0JyxcbiAgICAncmVkZGl0JyxcbiAgICAncmVkbycsXG4gICAgJ3JlbG9hZC10aW1lJyxcbiAgICAncmVsb2FkJyxcbiAgICAncmV0d2VldCcsXG4gICAgJ3JpZ2h0JyxcbiAgICAncmlzZScsXG4gICAgJ3JvYm90JyxcbiAgICAncm9sbGJhY2snLFxuICAgICdzYWZldHknLFxuICAgICdzY2FuJyxcbiAgICAnc2Npc3NvcicsXG4gICAgJ3NlYXJjaCcsXG4gICAgJ3NlbGVjdCcsXG4gICAgJ3NoYXJlLWFsdCcsXG4gICAgJ3NoYWtlJyxcbiAgICAnZ29vZ2xlLXBsdXMnLFxuICAgICdzaHJpbmsnLFxuICAgICdzaG9wcGluZy1jYXJ0JyxcbiAgICAnc2tldGNoJyxcbiAgICAnc2xhY2snLFxuICAgICdzbWFsbC1kYXNoJyxcbiAgICAnc29ydC1hc2NlbmRpbmcnLFxuICAgICdzb2x1dGlvbicsXG4gICAgJ3NvcnQtZGVzY2VuZGluZycsXG4gICAgJ3N0b2NrJyxcbiAgICAnc3dhcC1yaWdodCcsXG4gICAgJ3N3YXAtbGVmdCcsXG4gICAgJ3N3YXAnLFxuICAgICdzeW5jJyxcbiAgICAndGFibGUnLFxuICAgICd0YW9iYW8nLFxuICAgICd0ZWFtJyxcbiAgICAndG8tdG9wJyxcbiAgICAndHJhZGVtYXJrJyxcbiAgICAndHJhbnNhY3Rpb24nLFxuICAgICd0d2l0dGVyJyxcbiAgICAndW5kbycsXG4gICAgJ3VuZGVybGluZScsXG4gICAgJ3Vub3JkZXJlZC1saXN0JyxcbiAgICAndXAnLFxuICAgICd1cGxvYWQnLFxuICAgICd1c2VyLWFkZCcsXG4gICAgJ3VzZXItZGVsZXRlJyxcbiAgICAndXNlcicsXG4gICAgJ3VzZXJncm91cC1hZGQnLFxuICAgICd2ZXJ0aWNhbC1hbGlnbi1ib3R0b20nLFxuICAgICd2ZXJ0aWNhbC1hbGlnbi1taWRkbGUnLFxuICAgICd2ZXJ0aWNhbC1hbGlnbi10b3AnLFxuICAgICd2ZXJ0aWNhbC1sZWZ0JyxcbiAgICAndmVydGljYWwtcmlnaHQnLFxuICAgICdzdHJpa2V0aHJvdWdoJyxcbiAgICAndXNlcmdyb3VwLWRlbGV0ZScsXG4gICAgJ3dlaWJvJyxcbiAgICAnd2lmaScsXG4gICAgJ3poaWh1JyxcbiAgICAnem9vbS1pbicsXG4gICAgJ3pvb20tb3V0JyxcbiAgICAnd29tYW4nXG4gIF0sXG4gIHR3b3RvbmU6IFtcbiAgICAnYWNjb3VudC1ib29rJyxcbiAgICAnYWxlcnQnLFxuICAgICdhcGknLFxuICAgICdhcHBzdG9yZScsXG4gICAgJ2F1ZGlvJyxcbiAgICAnYmFuaycsXG4gICAgJ2JlbGwnLFxuICAgICdib29rJyxcbiAgICAnYm94LXBsb3QnLFxuICAgICdidWlsZCcsXG4gICAgJ2J1bGInLFxuICAgICdjYWxjdWxhdG9yJyxcbiAgICAnY2FtZXJhJyxcbiAgICAnY2FyJyxcbiAgICAnY2Fycnktb3V0JyxcbiAgICAnY2hlY2stY2lyY2xlJyxcbiAgICAnY2hlY2stc3F1YXJlJyxcbiAgICAnY2xvc2UtY2lyY2xlJyxcbiAgICAnY2xvc2Utc3F1YXJlJyxcbiAgICAnY2xvdWQnLFxuICAgICdjbG9jay1jaXJjbGUnLFxuICAgICdjb2RlJyxcbiAgICAnY29tcGFzcycsXG4gICAgJ2NvbnRhY3RzJyxcbiAgICAnY29udGFpbmVyJyxcbiAgICAnY29udHJvbCcsXG4gICAgJ2NvcHknLFxuICAgICdjcmVkaXQtY2FyZCcsXG4gICAgJ2Nyb3duJyxcbiAgICAnY3VzdG9tZXItc2VydmljZScsXG4gICAgJ2Rhc2hib2FyZCcsXG4gICAgJ2RhdGFiYXNlJyxcbiAgICAnZGVsZXRlJyxcbiAgICAnZGlmZicsXG4gICAgJ2Rpc2xpa2UnLFxuICAgICdkb3duLWNpcmNsZScsXG4gICAgJ2Rvd24tc3F1YXJlJyxcbiAgICAnZWRpdCcsXG4gICAgJ2Vudmlyb25tZW50JyxcbiAgICAnZXhjbGFtYXRpb24tY2lyY2xlJyxcbiAgICAnZXhwZXJpbWVudCcsXG4gICAgJ2V5ZScsXG4gICAgJ2ZpbGUtYWRkJyxcbiAgICAnZmlsZS1leGNlbCcsXG4gICAgJ2ZpbGUtZXhjbGFtYXRpb24nLFxuICAgICdmaWxlLW1hcmtkb3duJyxcbiAgICAnZmlsZS1wZGYnLFxuICAgICdmaWxlLWltYWdlJyxcbiAgICAnZmlsZS1wcHQnLFxuICAgICdmaWxlLXRleHQnLFxuICAgICdmaWxlLXVua25vd24nLFxuICAgICdmaWxlLXdvcmQnLFxuICAgICdmaWxlLXppcCcsXG4gICAgJ2ZpbGUnLFxuICAgICdmaWx0ZXInLFxuICAgICdmaXJlJyxcbiAgICAnZm9sZGVyLWFkZCcsXG4gICAgJ2ZvbGRlci1vcGVuJyxcbiAgICAnZmxhZycsXG4gICAgJ2Z1bmQnLFxuICAgICdmb2xkZXInLFxuICAgICdmcm93bicsXG4gICAgJ2dpZnQnLFxuICAgICdmdW5uZWwtcGxvdCcsXG4gICAgJ2hlYXJ0JyxcbiAgICAnaGRkJyxcbiAgICAnaGlnaGxpZ2h0JyxcbiAgICAnaG91cmdsYXNzJyxcbiAgICAnaHRtbDUnLFxuICAgICdpZGNhcmQnLFxuICAgICdob21lJyxcbiAgICAnaW5mby1jaXJjbGUnLFxuICAgICdpbnRlcmF0aW9uJyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVmdC1jaXJjbGUnLFxuICAgICdsZWZ0LXNxdWFyZScsXG4gICAgJ2luc3VyYW5jZScsXG4gICAgJ2xpa2UnLFxuICAgICdsb2NrJyxcbiAgICAnbWFpbCcsXG4gICAgJ21lZGljaW5lLWJveCcsXG4gICAgJ21lc3NhZ2UnLFxuICAgICdtaW51cy1jaXJjbGUnLFxuICAgICdtaW51cy1zcXVhcmUnLFxuICAgICdtb2JpbGUnLFxuICAgICdtb25leS1jb2xsZWN0JyxcbiAgICAnbm90aWZpY2F0aW9uJyxcbiAgICAncGF1c2UtY2lyY2xlJyxcbiAgICAncGhvbmUnLFxuICAgICdwaWN0dXJlJyxcbiAgICAncGllLWNoYXJ0JyxcbiAgICAncGxheS1jaXJjbGUnLFxuICAgICdtZWgnLFxuICAgICdwbGF5LXNxdWFyZScsXG4gICAgJ3BsdXMtY2lyY2xlJyxcbiAgICAncGx1cy1zcXVhcmUnLFxuICAgICdwb3VuZC1jaXJjbGUnLFxuICAgICdwcmludGVyJyxcbiAgICAncHJvamVjdCcsXG4gICAgJ3Byb3BlcnR5LXNhZmV0eScsXG4gICAgJ3Byb2ZpbGUnLFxuICAgICdwdXNocGluJyxcbiAgICAncXVlc3Rpb24tY2lyY2xlJyxcbiAgICAncmVjb25jaWxpYXRpb24nLFxuICAgICdyZWQtZW52ZWxvcGUnLFxuICAgICdyZXN0JyxcbiAgICAncmlnaHQtY2lyY2xlJyxcbiAgICAncmlnaHQtc3F1YXJlJyxcbiAgICAncm9ja2V0JyxcbiAgICAnc2FmZXR5LWNlcnRpZmljYXRlJyxcbiAgICAnc2F2ZScsXG4gICAgJ3NjaGVkdWxlJyxcbiAgICAnc2VjdXJpdHktc2NhbicsXG4gICAgJ3NldHRpbmcnLFxuICAgICdzaG9wJyxcbiAgICAnc2hvcHBpbmcnLFxuICAgICdza2luJyxcbiAgICAnc21pbGUnLFxuICAgICdzbmlwcGV0cycsXG4gICAgJ3NvdW5kJyxcbiAgICAnc3RhcicsXG4gICAgJ3NsaWRlcnMnLFxuICAgICdzdG9wJyxcbiAgICAndGFibGV0JyxcbiAgICAndGFncycsXG4gICAgJ3RhZycsXG4gICAgJ3RodW5kZXJib2x0JyxcbiAgICAndG9vbCcsXG4gICAgJ3Ryb3BoeScsXG4gICAgJ3VubG9jaycsXG4gICAgJ3VwLWNpcmNsZScsXG4gICAgJ3VwLXNxdWFyZScsXG4gICAgJ3VzYicsXG4gICAgJ3ZpZGVvLWNhbWVyYScsXG4gICAgJ3dhbGxldCcsXG4gICAgJ3dhcm5pbmcnLFxuICAgICd0cmFkZW1hcmstY2lyY2xlJyxcbiAgICAnc3dpdGNoZXInLFxuICAgICdjaScsXG4gICAgJ2NvcHlyaWdodCcsXG4gICAgJ2V1cm8nLFxuICAgICdkb2xsYXInLFxuICAgICdnb2xkJyxcbiAgICAnY2FubGVuZGFyJ1xuICBdXG59O1xuIl0sIm5hbWVzIjpbImdlbmVyYXRlQ29sb3IiLCJIdHRwQ2xpZW50Iiwib2JzZXJ2YWJsZU9mIiwic2hhcmUiLCJ0YXAiLCJtYXAiLCJjYXRjaEVycm9yIiwiUmVuZGVyZXJGYWN0b3J5MiIsIkh0dHBCYWNrZW5kIiwiT3B0aW9uYWwiLCJJbmplY3QiLCJET0NVTUVOVCIsIkRpcmVjdGl2ZSIsIkVsZW1lbnRSZWYiLCJSZW5kZXJlcjIiLCJJbnB1dCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7SUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFjQSxJQWVPLElBQUksUUFBUSxHQUFHO1FBQ2xCLFFBQVEsR0FBRyxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsUUFBUSxDQUFDLENBQUM7WUFDM0MsS0FBSyxJQUFJLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2pELENBQUMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQztvQkFBRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDaEY7WUFDRCxPQUFPLENBQUMsQ0FBQztTQUNaLENBQUE7UUFDRCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzNDLENBQUMsQ0FBQTtBQUVELGFBNkVnQixNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLENBQUMsQ0FBQyxNQUFNLENB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