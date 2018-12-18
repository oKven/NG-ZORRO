/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { toCssPixel } from '../core/util';
export class NzSkeletonComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.nzActive = false;
        this.nzLoading = true;
        this.nzTitle = true;
        this.nzAvatar = false;
        this.nzParagraph = true;
        this.rowsList = [];
        this.widthList = [];
    }
    /**
     * @param {?=} value
     * @return {?}
     */
    toCSSUnit(value = '') {
        return toCssPixel(value);
    }
    /**
     * @return {?}
     */
    getTitleProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasParagraph = !!this.nzParagraph;
        /** @type {?} */
        let width;
        if (!hasAvatar && hasParagraph) {
            width = '38%';
        }
        else if (hasAvatar && hasParagraph) {
            width = '50%';
        }
        return Object.assign({ width }, this.getProps(this.nzTitle));
    }
    /**
     * @return {?}
     */
    getAvatarProps() {
        /** @type {?} */
        const shape = (!!this.nzTitle && !this.nzParagraph) ? 'square' : 'circle';
        /** @type {?} */
        const size = 'large';
        return Object.assign({ shape, size }, this.getProps(this.nzAvatar));
    }
    /**
     * @return {?}
     */
    getParagraphProps() {
        /** @type {?} */
        const hasAvatar = !!this.nzAvatar;
        /** @type {?} */
        const hasTitle = !!this.nzTitle;
        /** @type {?} */
        const basicProps = {};
        // Width
        if (!hasAvatar || !hasTitle) {
            basicProps.width = '61%';
        }
        // Rows
        if (!hasAvatar && hasTitle) {
            basicProps.rows = 3;
        }
        else {
            basicProps.rows = 2;
        }
        return Object.assign({}, basicProps, this.getProps(this.nzParagraph));
    }
    /**
     * @template T
     * @param {?} prop
     * @return {?}
     */
    getProps(prop) {
        return prop && typeof prop === 'object' ? prop : {};
    }
    /**
     * @return {?}
     */
    getWidthList() {
        const { width, rows } = this.paragraph;
        /** @type {?} */
        let widthList = [];
        if (width && Array.isArray(width)) {
            widthList = width;
        }
        else if (width && !Array.isArray(width)) {
            widthList = [];
            widthList[rows - 1] = width;
        }
        return widthList;
    }
    /**
     * @return {?}
     */
    updateProps() {
        this.title = this.getTitleProps();
        this.avatar = this.getAvatarProps();
        this.paragraph = this.getParagraphProps();
        this.rowsList = [...Array(this.paragraph.rows)];
        this.widthList = this.getWidthList();
        this.cdr.markForCheck();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updateProps();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzTitle"] || changes["nzAvatar"] || changes["nzParagraph"]) {
            this.updateProps();
        }
    }
}
NzSkeletonComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-skeleton',
                template: "<ng-container *ngIf=\"nzLoading\">\n  <div class=\"ant-skeleton-header\">\n    <span\n      *ngIf=\"!!nzAvatar\"\n      class=\"ant-skeleton-avatar\"\n      [class.ant-skeleton-avatar-lg]=\"avatar.size === 'large'\"\n      [class.ant-skeleton-avatar-sm]=\"avatar.size === 'small'\"\n      [class.ant-skeleton-avatar-circle]=\"avatar.shape === 'circle'\"\n      [class.ant-skeleton-avatar-square]=\"avatar.shape === 'square'\">\n    </span>\n  </div>\n  <div class=\"ant-skeleton-content\">\n    <h3 *ngIf=\"!!nzTitle\" class=\"ant-skeleton-title\" [style.width]=\"toCSSUnit(title.width)\"></h3>\n    <ul *ngIf=\"!!nzParagraph\" class=\"ant-skeleton-paragraph\">\n      <li *ngFor=\"let row of rowsList; let i=index\" [style.width]=\"toCSSUnit(widthList[i])\">\n      </li>\n    </ul>\n  </div>\n</ng-container>\n<ng-container *ngIf=\"!nzLoading\">\n  <ng-content></ng-content>\n</ng-container>",
                host: {
                    '[class.ant-skeleton]': 'true',
                    '[class.ant-skeleton-with-avatar]': '!!nzAvatar',
                    '[class.ant-skeleton-active]': 'nzActive'
                }
            }] }
];
/** @nocollapse */
NzSkeletonComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzSkeletonComponent.propDecorators = {
    nzActive: [{ type: Input }],
    nzLoading: [{ type: Input }],
    nzTitle: [{ type: Input }],
    nzAvatar: [{ type: Input }],
    nzParagraph: [{ type: Input }]
};
function NzSkeletonComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSkeletonComponent.prototype.nzActive;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzLoading;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzTitle;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzAvatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.nzParagraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.title;
    /** @type {?} */
    NzSkeletonComponent.prototype.avatar;
    /** @type {?} */
    NzSkeletonComponent.prototype.paragraph;
    /** @type {?} */
    NzSkeletonComponent.prototype.rowsList;
    /** @type {?} */
    NzSkeletonComponent.prototype.widthList;
    /** @type {?} */
    NzSkeletonComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2tlbGV0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInNrZWxldG9uL256LXNrZWxldG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQW9DLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRWxKLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFjMUMsTUFBTSxPQUFPLG1CQUFtQjs7OztJQWE5QixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQVoxQyxnQkFBb0IsS0FBSyxDQUFDO1FBQzFCLGlCQUFxQixJQUFJLENBQUM7UUFDMUIsZUFBOEMsSUFBSSxDQUFDO1FBQ25ELGdCQUFnRCxLQUFLLENBQUM7UUFDdEQsbUJBQXNELElBQUksQ0FBQztRQUszRCxnQkFBcUIsRUFBRSxDQUFDO1FBQ3hCLGlCQUFvQyxFQUFFLENBQUM7S0FFTzs7Ozs7SUFFOUMsU0FBUyxDQUFDLFFBQXlCLEVBQUU7UUFDbkMsT0FBTyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7S0FDMUI7Ozs7SUFFTyxhQUFhOztRQUNuQixNQUFNLFNBQVMsR0FBWSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQzs7UUFDM0MsTUFBTSxZQUFZLEdBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7O1FBQ2pELElBQUksS0FBSyxDQUFTO1FBQ2xCLElBQUksQ0FBQyxTQUFTLElBQUksWUFBWSxFQUFFO1lBQzlCLEtBQUssR0FBRyxLQUFLLENBQUM7U0FDZjthQUFNLElBQUksU0FBUyxJQUFJLFlBQVksRUFBRTtZQUNwQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ2Y7UUFDRCx1QkFBUyxLQUFLLElBQUssSUFBSSxDQUFDLFFBQVEsQ0FB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YTtnQkFDOUIseTRCQUErQztnQkFDL0MsSUFBSSxFQUFhO29CQUNmLHNCQUFzQixFQUFjLE1BQU07b0JBQzFDLGtDQUFrQyxFQUFFLFlBQVk7b0JBQ2hELDZCQUE2QixFQUFPLFVBQVU7aUJBQy9DO2FBQ0Y7Ozs7WUFmaUMsaUJBQWlCOzs7dUJBaUJoRCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzBCQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnLi4vY29yZS91dGlsJztcbmltcG9ydCB7IEF2YXRhclNoYXBlLCBBdmF0YXJTaXplLCBOelNrZWxldG9uQXZhdGFyLCBOelNrZWxldG9uUGFyYWdyYXBoLCBOelNrZWxldG9uVGl0bGUgfSBmcm9tICcuL256LXNrZWxldG9uLnR5cGUnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3IgICAgICAgOiAnbnotc2tlbGV0b24nLFxuICB0ZW1wbGF0ZVVybCAgICA6ICcuL256LXNrZWxldG9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtc2tlbGV0b25dJyAgICAgICAgICAgIDogJ3RydWUnLFxuICAgICdbY2xhc3MuYW50LXNrZWxldG9uLXdpdGgtYXZhdGFyXSc6ICchIW56QXZhdGFyJyxcbiAgICAnW2NsYXNzLmFudC1za2VsZXRvbi1hY3RpdmVdJyAgICAgOiAnbnpBY3RpdmUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpTa2VsZXRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbnpBY3RpdmUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpMb2FkaW5nID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpUaXRsZTogTnpTa2VsZXRvblRpdGxlIHwgYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIG56QXZhdGFyOiBOelNrZWxldG9uQXZhdGFyIHwgYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBuelBhcmFncmFwaDogTnpTa2VsZXRvblBhcmFncmFwaCB8IGJvb2xlYW4gPSB0cnVlO1xuXG4gIHRpdGxlOiBOelNrZWxldG9uVGl0bGU7XG4gIGF2YXRhcjogTnpTa2VsZXRvbkF2YXRhcjtcbiAgcGFyYWdyYXBoOiBOelNrZWxldG9uUGFyYWdyYXBoO1xuICByb3dzTGlzdDogbnVtYmVyW10gPSBbXTtcbiAgd2lkdGhMaXN0OiBBcnJheTxudW1iZXIgfCBzdHJpbmc+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuXG4gIHRvQ1NTVW5pdCh2YWx1ZTogbnVtYmVyIHwgc3RyaW5nID0gJycpOiBzdHJpbmcge1xuICAgIHJldHVybiB0b0Nzc1BpeGVsKHZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VGl0bGVQcm9wcygpOiBOelNrZWxldG9uVGl0bGUge1xuICAgIGNvbnN0IGhhc0F2YXRhcjogYm9vbGVhbiA9ICEhdGhpcy5uekF2YXRhcjtcbiAgICBjb25zdCBoYXNQYXJhZ3JhcGg6IGJvb2xlYW4gPSAhIXRoaXMubnpQYXJhZ3JhcGg7XG4gICAgbGV0IHdpZHRoOiBzdHJpbmc7XG4gICAgaWYgKCFoYXNBdmF0YXIgJiYgaGFzUGFyYWdyYXBoKSB7XG4gICAgICB3aWR0aCA9ICczOCUnO1xuICAgIH0gZWxzZSBpZiAoaGFzQXZhdGFyICYmIGhhc1BhcmFncmFwaCkge1xuICAgICAgd2lkdGggPSAnNTAlJztcbiAgICB9XG4gICAgcmV0dXJuIHsgd2lkdGgsIC4uLnRoaXMuZ2V0UHJvcHModGhpcy5uelRpdGxlKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBdmF0YXJQcm9wcygpOiBOelNrZWxldG9uQXZhdGFyIHtcbiAgICBjb25zdCBzaGFwZTogQXZhdGFyU2hhcGUgPSAoISF0aGlzLm56VGl0bGUgJiYgIXRoaXMubnpQYXJhZ3JhcGgpID8gJ3NxdWFyZScgOiAnY2lyY2xlJztcbiAgICBjb25zdCBzaXplOiBBdmF0YXJTaXplID0gJ2xhcmdlJztcbiAgICByZXR1cm4geyBzaGFwZSwgc2l6ZSwgLi4udGhpcy5nZXRQcm9wcyh0aGlzLm56QXZhdGFyKSB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRQYXJhZ3JhcGhQcm9wcygpOiBOelNrZWxldG9uUGFyYWdyYXBoIHtcbiAgICBjb25zdCBoYXNBdmF0YXI6IGJvb2xlYW4gPSAhIXRoaXMubnpBdmF0YXI7XG4gICAgY29uc3QgaGFzVGl0bGU6IGJvb2xlYW4gPSAhIXRoaXMubnpUaXRsZTtcbiAgICBjb25zdCBiYXNpY1Byb3BzOiBOelNrZWxldG9uUGFyYWdyYXBoID0ge307XG4gICAgLy8gV2lkdGhcbiAgICBpZiAoIWhhc0F2YXRhciB8fCAhaGFzVGl0bGUpIHtcbiAgICAgIGJhc2ljUHJvcHMud2lkdGggPSAnNjElJztcbiAgICB9XG4gICAgLy8gUm93c1xuICAgIGlmICghaGFzQXZhdGFyICYmIGhhc1RpdGxlKSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAzO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNpY1Byb3BzLnJvd3MgPSAyO1xuICAgIH1cbiAgICByZXR1cm4geyAuLi5iYXNpY1Byb3BzLCAuLi50aGlzLmdldFByb3BzKHRoaXMubnpQYXJhZ3JhcGgpIH07XG4gIH1cblxuICBwcml2YXRlIGdldFByb3BzPFQ+KHByb3A6IFQgfCBib29sZWFuIHwgdW5kZWZpbmVkKTogVCB8IHt9IHtcbiAgICByZXR1cm4gcHJvcCAmJiB0eXBlb2YgcHJvcCA9PT0gJ29iamVjdCcgPyBwcm9wIDoge307XG4gIH1cblxuICBwcml2YXRlIGdldFdpZHRoTGlzdCgpOiBBcnJheTxudW1iZXIgfCBzdHJpbmc+IHtcbiAgICBjb25zdCB7IHdpZHRoLCByb3dzIH0gPSB0aGlzLnBhcmFncmFwaDtcbiAgICBsZXQgd2lkdGhMaXN0ID0gW107XG4gICAgaWYgKHdpZHRoICYmIEFycmF5LmlzQXJyYXkod2lkdGgpKSB7XG4gICAgICB3aWR0aExpc3QgPSB3aWR0aDtcbiAgICB9IGVsc2UgaWYgKHdpZHRoICYmICFBcnJheS5pc0FycmF5KHdpZHRoKSkge1xuICAgICAgd2lkdGhMaXN0ID0gW107XG4gICAgICB3aWR0aExpc3RbIHJvd3MgLSAxIF0gPSB3aWR0aDtcbiAgICB9XG4gICAgcmV0dXJuIHdpZHRoTGlzdDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlUHJvcHMoKTogdm9pZCB7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuZ2V0VGl0bGVQcm9wcygpO1xuICAgIHRoaXMuYXZhdGFyID0gdGhpcy5nZXRBdmF0YXJQcm9wcygpO1xuICAgIHRoaXMucGFyYWdyYXBoID0gdGhpcy5nZXRQYXJhZ3JhcGhQcm9wcygpO1xuICAgIHRoaXMucm93c0xpc3QgPSBbIC4uLkFycmF5KHRoaXMucGFyYWdyYXBoLnJvd3MpIF07XG4gICAgdGhpcy53aWR0aExpc3QgPSB0aGlzLmdldFdpZHRoTGlzdCgpO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVQcm9wcygpO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56VGl0bGUgfHwgY2hhbmdlcy5uekF2YXRhciB8fCBjaGFuZ2VzLm56UGFyYWdyYXBoKSB7XG4gICAgICB0aGlzLnVwZGF0ZVByb3BzKCk7XG4gICAgfVxuICB9XG59XG4iXX0=