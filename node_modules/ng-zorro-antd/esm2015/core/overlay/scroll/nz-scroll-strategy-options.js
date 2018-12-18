/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, RendererFactory2 } from '@angular/core';
import { NzMeasureScrollbarService } from '../../services/nz-measure-scrollbar.service';
import { NzBlockScrollStrategy } from './nz-block-scroll-strategy';
import * as i0 from "@angular/core";
import * as i1 from "../../services/nz-measure-scrollbar.service";
import * as i2 from "@angular/common";
export class NzScrollStrategyOptions {
    /**
     * @param {?} rendererFactory
     * @param {?} nzMeasureScrollbarService
     * @param {?} document
     */
    constructor(rendererFactory, nzMeasureScrollbarService, 
    // tslint:disable-next-line:no-any
    document) {
        this.nzMeasureScrollbarService = nzMeasureScrollbarService;
        this.block = () => new NzBlockScrollStrategy(this.document, this.renderer, this.nzMeasureScrollbarService);
        this.document = document;
        this.renderer = rendererFactory.createRenderer(null, null);
    }
}
NzScrollStrategyOptions.decorators = [
    { type: Injectable, args: [{ providedIn: 'root' },] }
];
/** @nocollapse */
NzScrollStrategyOptions.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: NzMeasureScrollbarService },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] }
];
/** @nocollapse */ NzScrollStrategyOptions.ngInjectableDef = i0.defineInjectable({ factory: function NzScrollStrategyOptions_Factory() { return new NzScrollStrategyOptions(i0.inject(i0.RendererFactory2), i0.inject(i1.NzMeasureScrollbarService), i0.inject(i2.DOCUMENT)); }, token: NzScrollStrategyOptions, providedIn: "root" });
function NzScrollStrategyOptions_tsickle_Closure_declarations() {
    /** @type {?} */
    NzScrollStrategyOptions.prototype.document;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.renderer;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.block;
    /** @type {?} */
    NzScrollStrategyOptions.prototype.nzMeasureScrollbarService;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2Nyb2xsLXN0cmF0ZWd5LW9wdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY29yZS9vdmVybGF5L3Njcm9sbC9uei1zY3JvbGwtc3RyYXRlZ3ktb3B0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLDZDQUE2QyxDQUFBO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBR25FLE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUdsQyxZQUNFLGVBQWlDLEVBQ3pCOztJQUVVLFFBQWE7UUFGdkIsOEJBQXlCLEdBQXpCLHlCQUF5QjtRQVFuQyxhQUFRLEdBQUcsRUFBRSxDQUFDLElBQUkscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBSnBHLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDNUQ7OztZQVpGLFVBQVUsU0FBQyxFQUFDLFVBQVUsRUFBRSxNQUFNLEVBQUM7Ozs7WUFKUSxnQkFBZ0I7WUFDL0MseUJBQXlCOzRDQVc3QixNQUFNLFNBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSwgUmVuZGVyZXIyLCBSZW5kZXJlckZhY3RvcnkyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbnotbWVhc3VyZS1zY3JvbGxiYXIuc2VydmljZSdcbmltcG9ydCB7IE56QmxvY2tTY3JvbGxTdHJhdGVneSB9IGZyb20gJy4vbnotYmxvY2stc2Nyb2xsLXN0cmF0ZWd5JztcblxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG5leHBvcnQgY2xhc3MgTnpTY3JvbGxTdHJhdGVneU9wdGlvbnMge1xuICBwcml2YXRlIGRvY3VtZW50OiBEb2N1bWVudDtcbiAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyO1xuICBjb25zdHJ1Y3RvcihcbiAgICByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXG4gICAgcHJpdmF0ZSBuek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlOiBOek1lYXN1cmVTY3JvbGxiYXJTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55XG4gICkge1xuICAgIHRoaXMuZG9jdW1lbnQgPSBkb2N1bWVudDtcbiAgICB0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXJGYWN0b3J5LmNyZWF0ZVJlbmRlcmVyKG51bGwsIG51bGwpO1xuICB9XG5cbiAgYmxvY2sgPSAoKSA9PiBuZXcgTnpCbG9ja1Njcm9sbFN0cmF0ZWd5KHRoaXMuZG9jdW1lbnQsIHRoaXMucmVuZGVyZXIsIHRoaXMubnpNZWFzdXJlU2Nyb2xsYmFyU2VydmljZSk7XG59XG4iXX0=