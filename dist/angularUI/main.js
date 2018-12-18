(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon/icon.component */ "./src/app/icon/icon.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./time/time.component */ "./src/app/time/time.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./swiper/swiper.component */ "./src/app/swiper/swiper.component.ts");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/tab/tab.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/drawer/drawer.component.ts");
/* harmony import */ var _showmodal_showmodal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./showmodal/showmodal.component */ "./src/app/showmodal/showmodal.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _backtop_backtop_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./backtop/backtop.component */ "./src/app/backtop/backtop.component.ts");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./switch/switch.component */ "./src/app/switch/switch.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");




















var routes = [
    {
        path: 'icon',
        component: _icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: 'button',
        component: _button_button_component__WEBPACK_IMPORTED_MODULE_5__["ButtonComponent"]
    },
    {
        path: 'nav',
        component: _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"]
    },
    {
        path: 'page',
        component: _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_7__["PaginationComponent"]
    },
    {
        path: 'time',
        component: _time_time_component__WEBPACK_IMPORTED_MODULE_8__["TimeComponent"]
    },
    {
        path: 'upload',
        component: _upload_upload_component__WEBPACK_IMPORTED_MODULE_9__["UploadComponent"]
    },
    {
        path: 'swiper',
        component: _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_10__["SwiperComponent"]
    },
    {
        path: 'tab',
        component: _tab_tab_component__WEBPACK_IMPORTED_MODULE_11__["TabComponent"]
    },
    {
        path: 'tree',
        component: _tree_tree_component__WEBPACK_IMPORTED_MODULE_12__["TreeComponent"]
    },
    {
        path: 'drawer',
        component: _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_13__["DrawerComponent"]
    },
    {
        path: 'showmodal',
        component: _showmodal_showmodal_component__WEBPACK_IMPORTED_MODULE_14__["ShowmodalComponent"]
    },
    {
        path: 'progress',
        component: _progress_progress_component__WEBPACK_IMPORTED_MODULE_15__["ProgressComponent"]
    },
    {
        path: 'loading',
        component: _loading_loading_component__WEBPACK_IMPORTED_MODULE_16__["LoadingComponent"]
    },
    {
        path: 'backtop',
        component: _backtop_backtop_component__WEBPACK_IMPORTED_MODULE_17__["BacktopComponent"]
    },
    {
        path: 'switch',
        component: _switch_switch_component__WEBPACK_IMPORTED_MODULE_18__["SwitchComponent"]
    },
    {
        path: 'layout',
        component: _layout_layout_component__WEBPACK_IMPORTED_MODULE_19__["LayoutComponent"]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-switch {\n  margin-bottom: 8px;\n}\n#rightBox{\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: calc( 100% - 240px );\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixPQUFPO0VBQ1AsU0FBUztFQUNULDRCQUE0Qjs7Q0FFN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LXN3aXRjaCB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cbiNyaWdodEJveHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDogY2FsYyggMTAwJSAtIDI0MHB4ICk7XG5cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<!-- Switch -->\n<!-- https://ng.ant.design/docs/introduce/zh -->\n\n\n<div style=\"width: 240px;\">\n  <button nz-button [nzType]=\"'primary'\" (click)=\"toggleCollapsed()\" style=\"width: 80px;border-radius:0px;\">\n    <i nz-icon [type]=\"isCollapsed?'menu-unfold':'menu-fold'\"></i>\n  </button>\n  <ul nz-menu [nzMode]=\"'inline'\" nzTheme='dark' [nzInlineCollapsed]=\"isCollapsed\" (nzClick)=\"toUrl($event)\">\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '页面布局(/layout)' : ''\" data-name=\"/layout\" >\n          <span title>\n            <i nz-icon type=\"table\"></i>\n            <span>页面布局(/layout)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '登录组件(/login)' : ''\" data-name=\"/login\" >\n          <span title>\n            <i nz-icon type=\"appstore\"></i>\n            <span>登录组件(/login)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '图标(/icon)' : ''\" data-name=\"/icon\" >\n          <span title>\n            <i nz-icon type=\"star\"></i>\n            <span>图标(/icon)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '按钮(/button)' : ''\" data-name=\"/button\" >\n          <span title>\n            <i nz-icon type=\"select\"></i>\n            <span>按钮(/button)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '菜单(/nav)' : ''\" data-name=\"/nav\" >\n          <span title>\n            <i nz-icon type=\"menu-fold\"></i>\n            <span>菜单(/nav)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '分页器(/page)' : ''\" data-name=\"/page\" >\n          <span title>\n            <i nz-icon type=\"read\"></i>\n            <span>分页器(/page)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '时间控件(/time)' : ''\" data-name=\"/time\" >\n          <span title>\n            <i nz-icon type=\"dashboard\"></i>\n            <span>时间控件(/time)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '上传控件(/upload)' : ''\" data-name=\"/upload\" >\n          <span title>\n            <i nz-icon type=\"upload\"></i>\n            <span>上传控件(/upload)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '跑马灯(/swiper)' : ''\" data-name=\"/swiper\" >\n          <span title>\n            <i nz-icon type=\"database\"></i>\n            <span>跑马灯(/swiper)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '列表切换控件(/tab)' : ''\" data-name=\"/tab\" >\n          <span title>\n            <i nz-icon type=\"radius-setting\"></i>\n            <span>列表切换控件(/tab)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '层级控件(/tree)' : ''\" data-name=\"/tree\" >\n          <span title>\n            <i nz-icon type=\"colum-height\"></i>\n            <span>层级控件(/tree)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '抽屉式侧边(/drawer)' : ''\" data-name=\"/drawer\" >\n          <span title>\n            <i nz-icon type=\"desktop\" ></i>\n            <span>抽屉式侧边(/drawer)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '弹窗组件(/showmodal)' : ''\" data-name=\"/showmodal\" >\n          <span title>\n            <i nz-icon type=\"bulb\"></i>\n            <span>弹窗组件(/showmodal)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '进度条组件(/progress)' : ''\" data-name=\"/progress\" >\n          <span title>\n            <i nz-icon type=\"sync\"></i>\n            <span>进度条组件(/progress)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '加载中自定义(/loading)' : ''\" data-name=\"/loading\" >\n          <span title>\n            <i nz-icon type=\"loading\"></i>\n            <span>加载中自定义(/loading)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '返回顶部控件(/backtop)' : ''\" data-name=\"/backtop\" >\n          <span title>\n            <i nz-icon type=\"arrow-up\"></i>\n            <span>返回顶部控件(/backtop)</span>\n          </span>\n    </li>\n    <li nz-menu-item nz-tooltip nzPlacement=\"right\" [nzTitle]=\"isCollapsed ? '开关(/switch)' : ''\" data-name=\"/switch\" >\n          <span title>\n            <i nz-icon type=\"swap\"></i>\n            <span>开关(/switch)</span>\n          </span>\n    </li>\n    <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"mail\"></i>\n            <span>待添加组件</span>\n          </span>\n      <ul>\n        <li nz-menu-item>功能</li>\n        <li nz-menu-item>功能</li>\n        <li nz-submenu>\n          <span title>待添加组件</span>\n          <ul>\n            <li nz-menu-item>功能</li>\n            <li nz-menu-item>功能</li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li nz-submenu>\n          <span title>\n            <i nz-icon type=\"setting\"></i>\n            <span>待添加组件</span>\n          </span>\n      <ul>\n        <li nz-menu-item>功能</li>\n        <li nz-menu-item>功能</li>\n        <li nz-menu-item>功能</li>\n      </ul>\n    </li>\n  </ul>\n</div>\n\n\n\n\n<div id=\"rightBox\">\n  <div style=\"padding: 40px;\">\n    <router-outlet></router-outlet>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");


 //导入router服务
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'angularUI';
        this.isCollapsed = false;
    }
    AppComponent.prototype.toggleCollapsed = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    AppComponent.prototype.toUrl = function (e) {
        console.log(e.hostElement.nativeElement.dataset.name);
        this.routerUrl = e.hostElement.nativeElement.dataset.name;
        this.router.navigateByUrl(this.routerUrl);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon/icon.component */ "./src/app/icon/icon.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/zh */ "./node_modules/@angular/common/locales/zh.js");
/* harmony import */ var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons-angular/icons */ "./node_modules/@ant-design/icons-angular/fesm5/ant-design-icons-angular-icons.js");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./button/button.component */ "./src/app/button/button.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var _time_time_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./time/time.component */ "./src/app/time/time.component.ts");
/* harmony import */ var _upload_upload_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./upload/upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./swiper/swiper.component */ "./src/app/swiper/swiper.component.ts");
/* harmony import */ var _tab_tab_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./tab/tab.component */ "./src/app/tab/tab.component.ts");
/* harmony import */ var _tree_tree_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./tree/tree.component */ "./src/app/tree/tree.component.ts");
/* harmony import */ var _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./drawer/drawer.component */ "./src/app/drawer/drawer.component.ts");
/* harmony import */ var _showmodal_showmodal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./showmodal/showmodal.component */ "./src/app/showmodal/showmodal.component.ts");
/* harmony import */ var _progress_progress_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./progress/progress.component */ "./src/app/progress/progress.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
/* harmony import */ var _backtop_backtop_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./backtop/backtop.component */ "./src/app/backtop/backtop.component.ts");
/* harmony import */ var _switch_switch_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./switch/switch.component */ "./src/app/switch/switch.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");





























Object(_angular_common__WEBPACK_IMPORTED_MODULE_10__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_11___default.a);
var icons = [_ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__["AccountBookFill"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__["AlertOutline"], _ant_design_icons_angular_icons__WEBPACK_IMPORTED_MODULE_13__["AlertFill"]];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _button_button_component__WEBPACK_IMPORTED_MODULE_14__["ButtonComponent"],
                _nav_nav_component__WEBPACK_IMPORTED_MODULE_15__["NavComponent"],
                _pagination_pagination_component__WEBPACK_IMPORTED_MODULE_16__["PaginationComponent"],
                _time_time_component__WEBPACK_IMPORTED_MODULE_17__["TimeComponent"],
                _upload_upload_component__WEBPACK_IMPORTED_MODULE_18__["UploadComponent"],
                _swiper_swiper_component__WEBPACK_IMPORTED_MODULE_19__["SwiperComponent"],
                _tab_tab_component__WEBPACK_IMPORTED_MODULE_20__["TabComponent"],
                _tree_tree_component__WEBPACK_IMPORTED_MODULE_21__["TreeComponent"],
                _drawer_drawer_component__WEBPACK_IMPORTED_MODULE_22__["DrawerComponent"],
                _showmodal_showmodal_component__WEBPACK_IMPORTED_MODULE_23__["ShowmodalComponent"],
                _progress_progress_component__WEBPACK_IMPORTED_MODULE_24__["ProgressComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_25__["LoadingComponent"],
                _backtop_backtop_component__WEBPACK_IMPORTED_MODULE_26__["BacktopComponent"],
                _switch_switch_component__WEBPACK_IMPORTED_MODULE_27__["SwitchComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_28__["LayoutComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NgZorroAntdModule"]
            ],
            providers: [
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NZ_I18N"], useValue: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["zh_CN"] },
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NZ_ICON_DEFAULT_TWOTONE_COLOR"], useValue: '#00ff00' },
                { provide: ng_zorro_antd__WEBPACK_IMPORTED_MODULE_9__["NZ_ICONS"], useValue: icons }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/backtop/backtop.component.css":
/*!***********************************************!*\
  !*** ./src/app/backtop/backtop.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep .ant-back-top {\n  bottom: 100px;\n}\n\n:host ::ng-deep .ant-back-top-inner {\n  height: 40px;\n  width: 40px;\n  line-height: 40px;\n  border-radius: 4px;\n  background-color: #1088e9;\n  color: #fff;\n  text-align: center;\n  font-size: 20px;\n}\n\n:host ::ng-deep strong {\n  color: #1088e9;\n}\n\n#top{\n  width: 100%;\n  height: 3000px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFja3RvcC9iYWNrdG9wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0NBQ2Y7O0FBRUQ7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCOztBQUVEO0VBQ0UsZUFBZTtDQUNoQjs7QUFDRDtFQUNFLFlBQVk7RUFDWixlQUFlO0NBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYmFja3RvcC9iYWNrdG9wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgLmFudC1iYWNrLXRvcCB7XG4gIGJvdHRvbTogMTAwcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LWJhY2stdG9wLWlubmVyIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogNDBweDtcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwODhlOTtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgc3Ryb25nIHtcbiAgY29sb3I6ICMxMDg4ZTk7XG59XG4jdG9we1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzMDAwcHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/backtop/backtop.component.html":
/*!************************************************!*\
  !*** ./src/app/backtop/backtop.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-back-top [nzTemplate]=\"tpl\" [nzVisibilityHeight]=\"100\" (nzOnClick)=\"notify()\">\n  <ng-template #tpl>\n    <div class=\"ant-back-top-inner\">UP</div>\n  </ng-template>\n</nz-back-top>\n\n<p id=\"top\">\n  Scroll down to see the bottom-right\n  <strong> blue </strong>\n  button.\n</p>\n\n"

/***/ }),

/***/ "./src/app/backtop/backtop.component.ts":
/*!**********************************************!*\
  !*** ./src/app/backtop/backtop.component.ts ***!
  \**********************************************/
/*! exports provided: BacktopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BacktopComponent", function() { return BacktopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BacktopComponent = /** @class */ (function () {
    function BacktopComponent() {
    }
    BacktopComponent.prototype.ngOnInit = function () {
    };
    BacktopComponent.prototype.notify = function () {
        console.log('notify');
    };
    BacktopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-backtop',
            template: __webpack_require__(/*! ./backtop.component.html */ "./src/app/backtop/backtop.component.html"),
            styles: [__webpack_require__(/*! ./backtop.component.css */ "./src/app/backtop/backtop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BacktopComponent);
    return BacktopComponent;
}());



/***/ }),

/***/ "./src/app/button/button.component.css":
/*!*********************************************!*\
  !*** ./src/app/button/button.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-button] {\n  margin-right: 8px;\n  margin-bottom: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnV0dG9uL2J1dHRvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2J1dHRvbi9idXR0b24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1idXR0b25dIHtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/button/button.component.html":
/*!**********************************************!*\
  !*** ./src/app/button/button.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"primary\">Primary</button>\n<button nz-button nzType=\"default\">Default</button>\n<button nz-button nzType=\"dashed\">Dashed</button>\n<button nz-button nzType=\"danger\">Danger</button>\n<!--加载中-->\n<button nz-button nzType=\"primary\" nzLoading><i nz-icon type=\"poweroff\"></i>Loading</button>\n<button nz-button nzType=\"primary\" nzSize=\"small\" nzLoading>Loading</button>\n<br>\n<button nz-button nzType=\"primary\" (click)=\"loadOne()\" [nzLoading]=\"isLoadingOne\">Click me!</button>\n<button nz-button nzType=\"primary\" (click)=\"loadTwo()\" [nzLoading]=\"isLoadingTwo\"><i nz-icon type=\"poweroff\"></i>Click me!</button>\n<br>\n<button nz-button nzLoading nzShape=\"circle\"></button>\n<button nz-button nzLoading nzType=\"primary\" nzShape=\"circle\"></button>\n"

/***/ }),

/***/ "./src/app/button/button.component.ts":
/*!********************************************!*\
  !*** ./src/app/button/button.component.ts ***!
  \********************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
        this.isLoadingOne = false;
        this.isLoadingTwo = false;
    }
    ButtonComponent.prototype.ngOnInit = function () {
    };
    ButtonComponent.prototype.loadOne = function () {
        var _this = this;
        this.isLoadingOne = true;
        setTimeout(function (_) {
            _this.isLoadingOne = false;
        }, 5000);
    };
    ButtonComponent.prototype.loadTwo = function () {
        var _this = this;
        this.isLoadingTwo = true;
        setTimeout(function (_) {
            _this.isLoadingTwo = false;
        }, 5000);
    };
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: __webpack_require__(/*! ./button.component.html */ "./src/app/button/button.component.html"),
            styles: [__webpack_require__(/*! ./button.component.css */ "./src/app/button/button.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());

// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'nz-demo-button-basic',
//   template: `
//     <button nz-button nzType="primary">Primary</button>
//     <button nz-button nzType="default">Default</button>
//     <button nz-button nzType="dashed">Dashed</button>
//     <button nz-button nzType="danger">Danger</button>`,
//   styles  : [
//     `
//       [nz-button] {
//         margin-right: 8px;
//         margin-bottom: 12px;
//       }
//     `
//   ]
// })
// export class NzDemoButtonBasicComponent {
// }


/***/ }),

/***/ "./src/app/drawer/drawer.component.css":
/*!*********************************************!*\
  !*** ./src/app/drawer/drawer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyYXdlci9kcmF3ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drawer/drawer.component.html":
/*!**********************************************!*\
  !*** ./src/app/drawer/drawer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button nzType=\"primary\" (click)=\"open()\">Open</button>\n<nz-drawer [nzClosable]=\"false\" [nzVisible]=\"visible\" nzPlacement=\"right\" nzTitle=\"Basic Drawer\" (nzOnClose)=\"close()\">\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n  <p>Some contents...</p>\n</nz-drawer>\n"

/***/ }),

/***/ "./src/app/drawer/drawer.component.ts":
/*!********************************************!*\
  !*** ./src/app/drawer/drawer.component.ts ***!
  \********************************************/
/*! exports provided: DrawerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerComponent", function() { return DrawerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrawerComponent = /** @class */ (function () {
    function DrawerComponent() {
        this.visible = false;
    }
    DrawerComponent.prototype.ngOnInit = function () {
    };
    DrawerComponent.prototype.open = function () {
        this.visible = true;
    };
    DrawerComponent.prototype.close = function () {
        this.visible = false;
    };
    DrawerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-drawer',
            template: __webpack_require__(/*! ./drawer.component.html */ "./src/app/drawer/drawer.component.html"),
            styles: [__webpack_require__(/*! ./drawer.component.css */ "./src/app/drawer/drawer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DrawerComponent);
    return DrawerComponent;
}());



/***/ }),

/***/ "./src/app/icon/icon.component.css":
/*!*****************************************!*\
  !*** ./src/app/icon/icon.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-icon] {\n  margin-right: 6px;\n  font-size: 24px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaWNvbi9pY29uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0NBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaWNvbi9pY29uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJbbnotaWNvbl0ge1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/icon/icon.component.html":
/*!******************************************!*\
  !*** ./src/app/icon/icon.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"icons-list\">\n  <!-- 基本使用 -->\n  <i nz-icon [type]=\"'home'\"></i>\n  <i nz-icon [type]=\"'setting'\" [theme]=\"'fill'\"></i>\n  <i nz-icon [type]=\"'smile'\" [theme]=\"'outline'\"></i>\n  <i nz-icon [type]=\"'sync'\" [spin]=\"true\"></i>\n  <!-- Loading with new API would spin automatically! -->\n  <i nz-icon [type]=\"'loading'\"></i>\n  <i nz-icon type=\"pie-chart\" [theme]=\"outline\"></i>\n  <i nz-icon type=\"down\" [theme]=\"outline\"></i>\n  <!-- 多色图标 -->\n  <i nz-icon [type]=\"'smile'\" [theme]=\"'twotone'\"></i>\n  <i nz-icon [type]=\"'heart'\" [theme]=\"'twotone'\" [twoToneColor]=\"'#eb2f96'\"></i>\n  <i nz-icon [type]=\"'check-circle'\" [theme]=\"'twotone'\" [twoToneColor]=\"'#52c41a'\"></i>\n</div>\n"

/***/ }),

/***/ "./src/app/icon/icon.component.ts":
/*!****************************************!*\
  !*** ./src/app/icon/icon.component.ts ***!
  \****************************************/
/*! exports provided: IconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconComponent", function() { return IconComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IconComponent = /** @class */ (function () {
    function IconComponent() {
    }
    IconComponent.prototype.ngOnInit = function () {
    };
    IconComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-icon',
            template: __webpack_require__(/*! ./icon.component.html */ "./src/app/icon/icon.component.html"),
            styles: [__webpack_require__(/*! ./icon.component.css */ "./src/app/icon/icon.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IconComponent);
    return IconComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  text-align: center;\n}\n\n:host ::ng-deep .ant-layout-header,\n:host ::ng-deep .ant-layout-footer {\n  background: #7dbcea;\n  color: #fff;\n}\n\n:host ::ng-deep .ant-layout-footer {\n  line-height: 1.5;\n}\n\n:host ::ng-deep .ant-layout-sider {\n  background: #3ba0e9;\n  color: #fff;\n  line-height: 120px;\n}\n\n:host ::ng-deep .ant-layout-content {\n  background: rgba(16, 142, 233, 1);\n  color: #fff;\n  min-height: 120px;\n  line-height: 120px;\n}\n\n:host > ::ng-deep .ant-layout {\n  margin-bottom: 48px;\n}\n\n:host ::ng-deep .ant-layout:last-child {\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0NBQ3BCOztBQUVEOztFQUVFLG9CQUFvQjtFQUNwQixZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLGtDQUFrQztFQUNsQyxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLFVBQVU7Q0FDWCIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9sYXlvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtaGVhZGVyLFxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGF5b3V0LWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICM3ZGJjZWE7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmFudC1sYXlvdXQtZm9vdGVyIHtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGF5b3V0LXNpZGVyIHtcbiAgYmFja2dyb3VuZDogIzNiYTBlOTtcbiAgY29sb3I6ICNmZmY7XG4gIGxpbmUtaGVpZ2h0OiAxMjBweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5hbnQtbGF5b3V0LWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDE2LCAxNDIsIDIzMywgMSk7XG4gIGNvbG9yOiAjZmZmO1xuICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgbGluZS1oZWlnaHQ6IDEyMHB4O1xufVxuXG46aG9zdCA+IDo6bmctZGVlcCAuYW50LWxheW91dCB7XG4gIG1hcmdpbi1ib3R0b206IDQ4cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYW50LWxheW91dDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/layout/layout.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/layout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-layout>\n  <nz-header>Header</nz-header>\n  <nz-content>Content</nz-content>\n  <nz-footer>Footer</nz-footer>\n</nz-layout>\n\n<nz-layout>\n  <nz-header>Header</nz-header>\n  <nz-layout>\n    <nz-sider>Sider</nz-sider>\n    <nz-content>Content</nz-content>\n  </nz-layout>\n  <nz-footer>Footer</nz-footer>\n</nz-layout>\n\n<nz-layout>\n  <nz-header>Header</nz-header>\n  <nz-layout>\n    <nz-content>Content</nz-content>\n    <nz-sider>Sider</nz-sider>\n  </nz-layout>\n  <nz-footer>Footer</nz-footer>\n</nz-layout>\n\n<nz-layout>\n  <nz-sider>Sider</nz-sider>\n  <nz-layout>\n    <nz-header>Header</nz-header>\n    <nz-content>Content</nz-content>\n    <nz-footer>Footer</nz-footer>\n  </nz-layout>\n</nz-layout>\n"

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./layout.component.html */ "./src/app/layout/layout.component.html"),
            styles: [__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example {\n  text-align: center;\n  background: rgba(0,0,0,0.05);\n  border-radius: 4px;\n  margin-bottom: 20px;\n  padding: 30px 50px;\n  margin: 20px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGVBQWU7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDMwcHggNTBweDtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/loading/loading.component.html":
/*!************************************************!*\
  !*** ./src/app/loading/loading.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example\">\n  <nz-spin></nz-spin>\n</div>\n"

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__(/*! ./loading.component.html */ "./src/app/loading/loading.component.html"),
            styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.login-form {\n  max-width: 300px;\n}\n\n.login-form-forgot {\n  float: right;\n}\n\n.login-form-button {\n  width: 100%;\n}\n\n#myForm .ant-form-explain, .has-error .ant-form-split{\n  color: orange;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxpQkFBaUI7Q0FDbEI7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBQ0Q7RUFDRSxjQUFjO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ubG9naW4tZm9ybSB7XG4gIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi5sb2dpbi1mb3JtLWZvcmdvdCB7XG4gIGZsb2F0OiByaWdodDtcbn1cblxuLmxvZ2luLWZvcm0tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4jbXlGb3JtIC5hbnQtZm9ybS1leHBsYWluLCAuaGFzLWVycm9yIC5hbnQtZm9ybS1zcGxpdHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <form id=\"myForm\" nz-form [formGroup]=\"validateForm\" class=\"login-form\" (ngSubmit)=\"submitForm()\">\n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group [nzPrefix]=\"prefixUser\">\n            <input type=\"text\" nz-input formControlName=\"userName\" placeholder=\"用户名\">\n          </nz-input-group>\n          <nz-form-explain *ngIf=\"validateForm.get('userName').dirty && validateForm.get('userName').errors\">请输入您的账户</nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control>\n          <nz-input-group [nzPrefix]=\"prefixLock\">\n            <input type=\"password\" nz-input formControlName=\"password\" placeholder=\"密码\">\n          </nz-input-group>\n          <nz-form-explain  *ngIf=\"validateForm.get('password').dirty && validateForm.get('password').errors\">请输入您的密码</nz-form-explain>\n        </nz-form-control>\n      </nz-form-item>\n      <nz-form-item>\n        <nz-form-control>\n          <label nz-checkbox formControlName=\"remember\">\n            <span>记住密码</span>\n          </label>\n          <a class=\"login-form-forgot\" class=\"login-form-forgot\">忘记密码</a>\n          <button nz-button class=\"login-form-button\" [nzType]=\"'primary'\">登录</button>\n          Or\n          <a href=\"\">现在去注册</a>\n        </nz-form-control>\n      </nz-form-item>\n    </form>\n    <ng-template #prefixUser><i nz-icon type=\"user\"></i></ng-template>\n    <ng-template #prefixLock><i nz-icon type=\"lock\"></i></ng-template>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb) {
        this.fb = fb;
    }
    LoginComponent.prototype.submitForm = function () {
        for (var i in this.validateForm.controls) {
            this.validateForm.controls[i].markAsDirty();
            this.validateForm.controls[i].updateValueAndValidity();
        }
        // console.log(this.validateForm);
        console.log(this.validateForm.value);
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.validateForm = this.fb.group({
            userName: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            remember: [true]
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/*!***************************************!*\
  !*** ./src/app/nav/nav.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/*!****************************************!*\
  !*** ./src/app/nav/nav.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul nz-menu [nzMode]=\"'inline'\" style=\"width: 240px;\">\n  <li nz-submenu>\n    <span title><i nz-icon type=\"mail\"></i> Navigation One</span>\n    <ul>\n      <li nz-menu-group>\n        <span title>Item 1</span>\n        <ul>\n          <li nz-menu-item>Option 1</li>\n          <li nz-menu-item>Option 2</li>\n        </ul>\n      </li>\n      <li nz-menu-group>\n        <span title>Item 2</span>\n        <ul>\n          <li nz-menu-item>Option 3</li>\n          <li nz-menu-item>Option 4</li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li nz-submenu>\n    <span title><i nz-icon type=\"appstore\"></i> Navigation Two</span>\n    <ul>\n      <li nz-menu-item>Option 5</li>\n      <li nz-menu-item>Option 6</li>\n      <li nz-submenu>\n        <span title>Submenu</span>\n        <ul>\n          <li nz-menu-item>Option 7</li>\n          <li nz-menu-item>Option 8</li>\n          <li nz-submenu>\n            <span title>Submenu</span>\n            <ul>\n              <li nz-menu-item>Option 9</li>\n              <li nz-menu-item>Option 10</li>\n            </ul>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </li>\n  <li nz-submenu>\n    <span title><i nz-icon type=\"setting\"></i> Navigation Three</span>\n    <ul>\n      <li nz-menu-item>Option 11</li>\n      <li nz-menu-item>Option 12</li>\n      <li nz-menu-item>Option 13</li>\n    </ul>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/nav/nav.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2luYXRpb24vcGFnaW5hdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-pagination [nzPageIndex]=\"2\" [nzTotal]=\"500\" nzShowQuickJumper></nz-pagination>\n"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    PaginationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/progress/progress.component.css":
/*!*************************************************!*\
  !*** ./src/app/progress/progress.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*nz-progress {*/\n  /*margin-right: 8px;*/\n  /*margin-bottom: 8px;*/\n  /*display: inline-block;*/\n  /*}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7RUFDZixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtFQUM1QixLQUFLIiwiZmlsZSI6InNyYy9hcHAvcHJvZ3Jlc3MvcHJvZ3Jlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qbnotcHJvZ3Jlc3MgeyovXG4gIC8qbWFyZ2luLXJpZ2h0OiA4cHg7Ki9cbiAgLyptYXJnaW4tYm90dG9tOiA4cHg7Ki9cbiAgLypkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ki9cbi8qfSovXG4iXX0= */"

/***/ }),

/***/ "./src/app/progress/progress.component.html":
/*!**************************************************!*\
  !*** ./src/app/progress/progress.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-progress [nzPercent]=\"30\"></nz-progress>\n<nz-progress [nzPercent]=\"50\" nzStatus=\"active\"></nz-progress>\n<nz-progress [nzPercent]=\"70\" nzStatus=\"exception\"></nz-progress>\n<nz-progress [nzPercent]=\"100\"></nz-progress>\n<nz-progress [nzPercent]=\"50\" [nzShowInfo]=\"false\"></nz-progress>\n\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n\n<!--<nz-progress [nzPercent]=\"75\" nzType=\"circle\" [nzWidth]=\"80\"></nz-progress>-->\n<!--<nz-progress [nzPercent]=\"70\" nzType=\"circle\" [nzWidth]=\"80\" nzStatus=\"exception\"></nz-progress>-->\n<!--<nz-progress [nzPercent]=\"100\" nzType=\"circle\" [nzWidth]=\"80\"></nz-progress>-->\n\n<!--<br>-->\n<!--<br>-->\n<!--<br>-->\n\n<!--<nz-progress [nzPercent]=\"percent\" nzType=\"circle\"></nz-progress>-->\n<!--<nz-button-group>-->\n  <!--<button nz-button (click)=\"decline()\"><i nz-icon type=\"minus\"></i></button>-->\n  <!--<button nz-button (click)=\"increase()\"><i nz-icon type=\"plus\"></i></button>-->\n<!--</nz-button-group>-->\n"

/***/ }),

/***/ "./src/app/progress/progress.component.ts":
/*!************************************************!*\
  !*** ./src/app/progress/progress.component.ts ***!
  \************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProgressComponent = /** @class */ (function () {
    // percent = 0;
    function ProgressComponent() {
    }
    ProgressComponent.prototype.ngOnInit = function () {
    };
    ProgressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__(/*! ./progress.component.html */ "./src/app/progress/progress.component.html"),
            styles: [__webpack_require__(/*! ./progress.component.css */ "./src/app/progress/progress.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/showmodal/showmodal.component.css":
/*!***************************************************!*\
  !*** ./src/app/showmodal/showmodal.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3dtb2RhbC9zaG93bW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/showmodal/showmodal.component.html":
/*!****************************************************!*\
  !*** ./src/app/showmodal/showmodal.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button nz-button [nzType]=\"'primary'\" (click)=\"showModal()\"><span>Show Modal</span></button>\n<nz-modal [(nzVisible)]=\"isVisible\" nzTitle=\"The first Modal\" (nzOnCancel)=\"handleCancel()\" (nzOnOk)=\"handleOk()\">\n  <p>Content one</p>\n  <p>Content two</p>\n  <p>Content three</p>\n</nz-modal>\n"

/***/ }),

/***/ "./src/app/showmodal/showmodal.component.ts":
/*!**************************************************!*\
  !*** ./src/app/showmodal/showmodal.component.ts ***!
  \**************************************************/
/*! exports provided: ShowmodalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowmodalComponent", function() { return ShowmodalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShowmodalComponent = /** @class */ (function () {
    function ShowmodalComponent() {
        this.isVisible = false;
    }
    ShowmodalComponent.prototype.ngOnInit = function () {
    };
    ShowmodalComponent.prototype.showModal = function () {
        this.isVisible = true;
    };
    ShowmodalComponent.prototype.handleOk = function () {
        console.log('Button ok clicked!');
        this.isVisible = false;
    };
    ShowmodalComponent.prototype.handleCancel = function () {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    };
    ShowmodalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showmodal',
            template: __webpack_require__(/*! ./showmodal.component.html */ "./src/app/showmodal/showmodal.component.html"),
            styles: [__webpack_require__(/*! ./showmodal.component.css */ "./src/app/showmodal/showmodal.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShowmodalComponent);
    return ShowmodalComponent;
}());



/***/ }),

/***/ "./src/app/swiper/swiper.component.css":
/*!*********************************************!*\
  !*** ./src/app/swiper/swiper.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[nz-carousel-content] {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: #364d79;\n  color: #fff;\n  overflow: hidden;\n}\nh3 {\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3dpcGVyL3N3aXBlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3N3aXBlci9zd2lwZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIltuei1jYXJvdXNlbC1jb250ZW50XSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAxNjBweDtcbiAgbGluZS1oZWlnaHQ6IDE2MHB4O1xuICBiYWNrZ3JvdW5kOiAjMzY0ZDc5O1xuICBjb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbmgzIHtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/swiper/swiper.component.html":
/*!**********************************************!*\
  !*** ./src/app/swiper/swiper.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-carousel nzAutoPlay [nzEffect]=\"'scrollx'\" [nzEnableSwipe]=\"true\">\n  <div nz-carousel-content *ngFor=\"let index of array\"><h3>{{index}}</h3></div>\n</nz-carousel>\n"

/***/ }),

/***/ "./src/app/swiper/swiper.component.ts":
/*!********************************************!*\
  !*** ./src/app/swiper/swiper.component.ts ***!
  \********************************************/
/*! exports provided: SwiperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwiperComponent", function() { return SwiperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwiperComponent = /** @class */ (function () {
    function SwiperComponent() {
        this.array = [1, 2, 3, 4];
    }
    SwiperComponent.prototype.ngOnInit = function () {
    };
    SwiperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-swiper',
            template: __webpack_require__(/*! ./swiper.component.html */ "./src/app/swiper/swiper.component.html"),
            styles: [__webpack_require__(/*! ./swiper.component.css */ "./src/app/swiper/swiper.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwiperComponent);
    return SwiperComponent;
}());



/***/ }),

/***/ "./src/app/switch/switch.component.css":
/*!*********************************************!*\
  !*** ./src/app/switch/switch.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaC9zd2l0Y2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/switch/switch.component.html":
/*!**********************************************!*\
  !*** ./src/app/switch/switch.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<p>Switch</p>\n<nz-switch [ngModel]=\"true\"></nz-switch>\n<br>\n<nz-switch nzSize=\"small\" [ngModel]=\"true\"></nz-switch>\n<br>\n<br>\n"

/***/ }),

/***/ "./src/app/switch/switch.component.ts":
/*!********************************************!*\
  !*** ./src/app/switch/switch.component.ts ***!
  \********************************************/
/*! exports provided: SwitchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwitchComponent", function() { return SwitchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
    }
    SwitchComponent.prototype.ngOnInit = function () {
    };
    SwitchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-switch',
            template: __webpack_require__(/*! ./switch.component.html */ "./src/app/switch/switch.component.html"),
            styles: [__webpack_require__(/*! ./switch.component.css */ "./src/app/switch/switch.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}());



/***/ }),

/***/ "./src/app/tab/tab.component.css":
/*!***************************************!*\
  !*** ./src/app/tab/tab.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi90YWIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/tab/tab.component.html":
/*!****************************************!*\
  !*** ./src/app/tab/tab.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tabset>\n  <nz-tab nzTitle=\"Tab 1\">\n    Content of Tab Pane 1\n  </nz-tab>\n  <nz-tab nzTitle=\"Tab 2\">\n    Content of Tab Pane 2\n  </nz-tab>\n  <nz-tab nzTitle=\"Tab 3\">\n    Content of Tab Pane 3\n  </nz-tab>\n</nz-tabset>`\n"

/***/ }),

/***/ "./src/app/tab/tab.component.ts":
/*!**************************************!*\
  !*** ./src/app/tab/tab.component.ts ***!
  \**************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TabComponent = /** @class */ (function () {
    function TabComponent() {
    }
    TabComponent.prototype.ngOnInit = function () {
    };
    TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__(/*! ./tab.component.html */ "./src/app/tab/tab.component.html"),
            styles: [__webpack_require__(/*! ./tab.component.css */ "./src/app/tab/tab.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "./src/app/time/time.component.css":
/*!*****************************************!*\
  !*** ./src/app/time/time.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nz-date-picker, nz-month-picker, nz-range-picker, nz-week-picker {\n  margin: 0 8px 12px 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGltZS90aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7Q0FDdEIiLCJmaWxlIjoic3JjL2FwcC90aW1lL3RpbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm56LWRhdGUtcGlja2VyLCBuei1tb250aC1waWNrZXIsIG56LXJhbmdlLXBpY2tlciwgbnotd2Vlay1waWNrZXIge1xuICBtYXJnaW46IDAgOHB4IDEycHggMDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/time/time.component.html":
/*!******************************************!*\
  !*** ./src/app/time/time.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-date-picker\n  nzShowTime\n  nzFormat=\"yyyy-MM-dd HH:mm:ss\"\n  nzPlaceHolder=\"Select Time\"\n  (ngModelChange)=\"onChange($event)\"\n  (nzOnOk)=\"onOk($event)\"\n></nz-date-picker>\n<br>\n<nz-range-picker\n  [nzShowTime]=\"{ nzFormat: 'HH:mm' }\"\n  nzFormat=\"yyyy-MM-dd HH:mm\"\n  [nzPlaceHolder]=\"[ 'Start Time', 'End Time' ]\"\n  (ngModelChange)=\"onChange($event)\"\n  (nzOnOk)=\"onOk($event)\"\n></nz-range-picker>\n"

/***/ }),

/***/ "./src/app/time/time.component.ts":
/*!****************************************!*\
  !*** ./src/app/time/time.component.ts ***!
  \****************************************/
/*! exports provided: TimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimeComponent", function() { return TimeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimeComponent = /** @class */ (function () {
    function TimeComponent() {
    }
    TimeComponent.prototype.ngOnInit = function () {
    };
    TimeComponent.prototype.onChange = function (result) {
        console.log('Selected Time: ', result);
    };
    TimeComponent.prototype.onOk = function (result) {
        console.log('onOk', result);
    };
    TimeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-time',
            template: __webpack_require__(/*! ./time.component.html */ "./src/app/time/time.component.html"),
            styles: [__webpack_require__(/*! ./time.component.css */ "./src/app/time/time.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimeComponent);
    return TimeComponent;
}());



/***/ }),

/***/ "./src/app/tree/tree.component.css":
/*!*****************************************!*\
  !*** ./src/app/tree/tree.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyZWUvdHJlZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/tree/tree.component.html":
/*!******************************************!*\
  !*** ./src/app/tree/tree.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nz-tree\n  [nzData]=\"nodes\"\n  nzShowLine=\"true\"\n  (nzClick)=\"nzEvent($event)\">\n</nz-tree>\n"

/***/ }),

/***/ "./src/app/tree/tree.component.ts":
/*!****************************************!*\
  !*** ./src/app/tree/tree.component.ts ***!
  \****************************************/
/*! exports provided: TreeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeComponent", function() { return TreeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TreeComponent = /** @class */ (function () {
    function TreeComponent() {
        this.nodes = [{
                title: 'parent 1',
                key: '100',
                expanded: true,
                children: [{
                        title: 'parent 1-0',
                        key: '1001',
                        expanded: true,
                        children: [
                            { title: 'leaf', key: '10010', isLeaf: true },
                            { title: 'leaf', key: '10011', isLeaf: true },
                            { title: 'leaf', key: '10012', isLeaf: true }
                        ]
                    }, {
                        title: 'parent 1-1',
                        key: '1002',
                        children: [
                            { title: 'leaf', key: '10020', isLeaf: true }
                        ]
                    }, {
                        title: 'parent 1-2',
                        key: '1003',
                        children: [
                            { title: 'leaf', key: '10030', isLeaf: true },
                            { title: 'leaf', key: '10031', isLeaf: true }
                        ]
                    }]
            }];
    }
    TreeComponent.prototype.ngOnInit = function () {
    };
    TreeComponent.prototype.nzEvent = function (event) {
        console.log(event);
    };
    TreeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tree',
            template: __webpack_require__(/*! ./tree.component.html */ "./src/app/tree/tree.component.html"),
            styles: [__webpack_require__(/*! ./tree.component.css */ "./src/app/tree/tree.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TreeComponent);
    return TreeComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ::ng-deep i {\n  font-size: 32px;\n  color: #999;\n}\n:host ::ng-deep .ant-upload-text {\n  margin-top: 8px;\n  color: #666;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL3VwbG9hZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7Q0FDYiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IDo6bmctZGVlcCBpIHtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBjb2xvcjogIzk5OTtcbn1cbjpob3N0IDo6bmctZGVlcCAuYW50LXVwbG9hZC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBjb2xvcjogIzY2Njtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/upload/upload.component.html":
/*!**********************************************!*\
  !*** ./src/app/upload/upload.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix\">\n  <nz-upload\n    nzAction=\"https://jsonplaceholder.typicode.com/posts/\"\n    nzListType=\"picture-card\"\n    [(nzFileList)]=\"fileList\"\n    [nzShowButton]=\"fileList.length < 3\"\n    [nzPreview]=\"handlePreview\">\n    <i nz-icon type=\"plus\"></i>\n    <div class=\"ant-upload-text\">Upload</div>\n  </nz-upload>\n  <nz-modal [nzVisible]=\"previewVisible\" [nzContent]=\"modalContent\" [nzFooter]=\"null\" (nzOnCancel)=\"previewVisible=false\">\n    <ng-template #modalContent>\n      <img [src]=\"previewImage\" [ngStyle]=\"{ 'width': '100%' }\" />\n    </ng-template>\n  </nz-modal>\n</div>\n"

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-zorro-antd */ "./node_modules/ng-zorro-antd/fesm5/ng-zorro-antd.js");



var UploadComponent = /** @class */ (function () {
    function UploadComponent(msg) {
        var _this = this;
        this.msg = msg;
        this.fileList = [
            {
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
            }
        ];
        this.previewImage = '';
        this.previewVisible = false;
        this.handlePreview = function (file) {
            _this.previewImage = file.url || file.thumbUrl;
            _this.previewVisible = true;
        };
    }
    UploadComponent.prototype.ngOnInit = function () {
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng_zorro_antd__WEBPACK_IMPORTED_MODULE_2__["NzMessageService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/apple/Documents/angular/NG-ZORRO/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map