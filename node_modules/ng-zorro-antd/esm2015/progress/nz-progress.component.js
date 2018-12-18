/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
export class NzProgressComponent {
    constructor() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeLinecap = 'round';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = (percent) => `${percent}%`;
        this.isStatusSet = false;
        this.isStrokeWidthSet = false;
        this.isFormatSet = false;
        this.isGapDegreeSet = false;
        this.isGapPositionSet = false;
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzSuccessPercent = 0;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = value;
        if (this.nzSize === 'small' && !this.isStrokeWidthSet) {
            this._strokeWidth = 6;
        }
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzFormat(value) {
        if (isNotNil(value)) {
            this._format = value;
            this.isFormatSet = true;
        }
    }
    /**
     * @return {?}
     */
    get nzFormat() {
        return this._format;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzPercent(value) {
        this._percent = value;
        if (isNotNil(value)) {
            /** @type {?} */
            const fillAll = parseInt(value.toString(), 10) >= 100;
            if (fillAll && !this.isStatusSet) {
                this._status = 'success';
            }
            else {
                this._status = this._cacheStatus;
            }
            this.updatePathStyles();
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzPercent() {
        return this._percent;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStrokeWidth(value) {
        if (isNotNil(value)) {
            this._strokeWidth = value;
            this.isStrokeWidthSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzStrokeWidth() {
        return this._strokeWidth;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStatus(value) {
        if (isNotNil(value)) {
            this._status = value;
            this._cacheStatus = value;
            this.isStatusSet = true;
            this.updateIcon();
        }
    }
    /**
     * @return {?}
     */
    get nzStatus() {
        return this._status;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzType(value) {
        this._type = value;
        if (!this.isStrokeWidthSet) {
            if (this.nzType !== 'line') {
                this._strokeWidth = 6;
            }
        }
        if (this.nzType === 'dashboard') {
            if (!this.isGapPositionSet) {
                this._gapPosition = 'bottom';
            }
            if (!this.isGapDegreeSet) {
                this._gapDegree = 75;
            }
        }
        this.updateIcon();
        this.updatePathStyles();
    }
    /**
     * @return {?}
     */
    get nzType() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapDegree(value) {
        if (isNotNil(value)) {
            this._gapDegree = value;
            this.isGapDegreeSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapDegree() {
        return this._gapDegree;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzGapPosition(value) {
        if (isNotNil(value)) {
            this._gapPosition = value;
            this.isGapPositionSet = true;
            this.updatePathStyles();
        }
    }
    /**
     * @return {?}
     */
    get nzGapPosition() {
        return this._gapPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzStrokeLinecap(value) {
        this._strokeLinecap = value;
        this.updatePathStyles();
    }
    /**
     * @return {?}
     */
    get nzStrokeLinecap() {
        return this._strokeLinecap;
    }
    /**
     * @return {?}
     */
    get isCirCleStyle() {
        return this.nzType === 'circle' || this.nzType === 'dashboard';
    }
    /**
     * @return {?}
     */
    updatePathStyles() {
        /** @type {?} */
        const radius = 50 - (this.nzStrokeWidth / 2);
        /** @type {?} */
        let beginPositionX = 0;
        /** @type {?} */
        let beginPositionY = -radius;
        /** @type {?} */
        let endPositionX = 0;
        /** @type {?} */
        let endPositionY = radius * -2;
        switch (this.nzGapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
     a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
     a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        /** @type {?} */
        const len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: `${len - this.nzGapDegree}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: `${(this.nzPercent / 100) * (len - this.nzGapDegree)}px ${len}px`,
            strokeDashoffset: `-${this.nzGapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    }
    /**
     * @return {?}
     */
    updateIcon() {
        /** @type {?} */
        const isCircle = (this.nzType === 'circle' || this.nzType === 'dashboard');
        /** @type {?} */
        let ret = '';
        if (this.nzStatus === 'success') {
            ret = 'check';
        }
        if (this.nzStatus === 'exception') {
            ret = 'close';
        }
        if (ret) {
            if (!isCircle) {
                ret += '-circle';
                this.iconTheme = 'fill';
            }
            else {
                this.iconTheme = 'outline';
            }
        }
        this.icon = ret;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.updatePathStyles();
        this.updateIcon();
    }
}
NzProgressComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-progress',
                preserveWhitespaces: false,
                template: "<ng-template #progressInfoTemplate>\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\n    <ng-container *ngIf=\"(nzStatus=='exception')||(nzStatus=='success')&&(!isFormatSet); else formatTemplate\">\n      <!-- Theme is handled in type here. -->\n      <i nz-icon [type]=\"icon\" [theme]=\"iconTheme\"></i>\n    </ng-container>\n    <ng-template #formatTemplate>\n      {{ nzFormat(nzPercent) }}\n    </ng-template>\n  </span>\n</ng-template>\n<div [ngClass]=\"'ant-progress ant-progress-status-'+nzStatus\"\n  [class.ant-progress-line]=\"nzType=='line'\"\n  [class.ant-progress-small]=\"nzSize=='small'\"\n  [class.ant-progress-show-info]=\"nzShowInfo\"\n  [class.ant-progress-circle]=\"isCirCleStyle\">\n  <div *ngIf=\"nzType=='line'\">\n    <div class=\"ant-progress-outer\">\n      <div class=\"ant-progress-inner\">\n        <div class=\"ant-progress-bg\"\n          [style.width.%]=\"nzPercent\"\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n          [style.background]=\"nzStrokeColor\"\n          [style.height.px]=\"nzStrokeWidth\">\n        </div>\n        <div class=\"ant-progress-success-bg\"\n          [style.width.%]=\"nzSuccessPercent\"\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\n          [style.height.px]=\"nzStrokeWidth\"></div>\n      </div>\n    </div>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n  <div\n    [style.width.px]=\"this.nzWidth\"\n    [style.height.px]=\"this.nzWidth\"\n    [style.fontSize.px]=\"this.nzWidth*0.15+6\"\n    class=\"ant-progress-inner\"\n    *ngIf=\"isCirCleStyle\">\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\n      <path\n        class=\"ant-progress-circle-trail\"\n        stroke=\"#f3f3f3\"\n        fill-opacity=\"0\"\n        [attr.stroke-width]=\"nzStrokeWidth\"\n        [ngStyle]=\"trailPathStyle\"\n        [attr.d]=\"pathString\">\n      </path>\n      <path\n        class=\"ant-progress-circle-path\"\n        [attr.d]=\"pathString\"\n        [attr.stroke-linecap]=\"nzStrokeLinecap\"\n        fill-opacity=\"0\"\n        [attr.stroke]=\"nzStrokeColor || statusColorMap[nzStatus]\"\n        [attr.stroke-width]=\"nzPercent?nzStrokeWidth:0\"\n        [ngStyle]=\"strokePathStyle\">\n      </path>\n    </svg>\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\n  </div>\n</div>"
            }] }
];
NzProgressComponent.propDecorators = {
    nzShowInfo: [{ type: Input }],
    nzWidth: [{ type: Input }],
    nzSuccessPercent: [{ type: Input }],
    nzStrokeColor: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFormat: [{ type: Input }],
    nzPercent: [{ type: Input }],
    nzStrokeWidth: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzType: [{ type: Input }],
    nzGapDegree: [{ type: Input }],
    nzGapPosition: [{ type: Input }],
    nzStrokeLinecap: [{ type: Input }]
};
function NzProgressComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzProgressComponent.prototype._gapDegree;
    /** @type {?} */
    NzProgressComponent.prototype._gapPosition;
    /** @type {?} */
    NzProgressComponent.prototype._percent;
    /** @type {?} */
    NzProgressComponent.prototype._status;
    /** @type {?} */
    NzProgressComponent.prototype._cacheStatus;
    /** @type {?} */
    NzProgressComponent.prototype._strokeLinecap;
    /** @type {?} */
    NzProgressComponent.prototype._strokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype._size;
    /** @type {?} */
    NzProgressComponent.prototype._type;
    /** @type {?} */
    NzProgressComponent.prototype._format;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.iconTheme;
    /** @type {?} */
    NzProgressComponent.prototype.isStatusSet;
    /** @type {?} */
    NzProgressComponent.prototype.isStrokeWidthSet;
    /** @type {?} */
    NzProgressComponent.prototype.isFormatSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapDegreeSet;
    /** @type {?} */
    NzProgressComponent.prototype.isGapPositionSet;
    /** @type {?} */
    NzProgressComponent.prototype.statusColorMap;
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInByb2dyZXNzL256LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBTzlDLE1BQU0sT0FBTyxtQkFBbUI7OzBCQUNULENBQUM7NEJBQzRCLEtBQUs7d0JBQ3BDLENBQUM7dUJBQ29CLFFBQVE7NEJBQ0gsUUFBUTs4QkFDQyxPQUFPOzRCQUN0QyxDQUFDO3FCQUNSLFNBQVM7cUJBQ1csTUFBTTt1QkFDeEIsQ0FBQyxPQUFlLEVBQVUsRUFBRSxDQUFDLEdBQUcsT0FBTyxHQUFHO1FBTTVELG1CQUFjLEtBQUssQ0FBQztRQUNwQix3QkFBbUIsS0FBSyxDQUFDO1FBQ3pCLG1CQUFjLEtBQUssQ0FBQztRQUNwQixzQkFBaUIsS0FBSyxDQUFDO1FBQ3ZCLHdCQUFtQixLQUFLLENBQUM7UUFDekIsc0JBQWlCO1lBQ2YsTUFBTSxFQUFLLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFJLFNBQVM7U0FDckIsQ0FBQztRQUNGLGtCQUFzQixJQUFJLENBQUM7UUFDM0IsZUFBbUIsR0FBRyxDQUFDO1FBQ3ZCLHdCQUE0QixDQUFDLENBQUM7Ozs7OztJQUc5QixJQUNJLE1BQU0sQ0FBQyxLQUFhO1FBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDckQsSUFBSSxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7U0FDdkI7S0FDRjs7OztJQUVELElBQUksTUFBTTtRQUNSLE9BQU8s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QkFjTCxLQUFLOzhCQWFMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXRcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ3N1Y2Nlc3MnIHwgJ2V4Y2VwdGlvbicgfCAnYWN0aXZlJyB8ICdub3JtYWwnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnIHwgJ2NpcmNsZScgfCAnZGFzaGJvYXJkJztcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCcgfCAnc3F1YXJlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1wcm9ncmVzcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1wcm9ncmVzcy5jb21wb25lbnQuaHRtbCdcbn0pXG5leHBvcnQgY2xhc3MgTnpQcm9ncmVzc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHByaXZhdGUgX2dhcERlZ3JlZSA9IDA7XG4gIHByaXZhdGUgX2dhcFBvc2l0aW9uOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gIHByaXZhdGUgX3BlcmNlbnQgPSAwO1xuICBwcml2YXRlIF9zdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgX2NhY2hlU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIF9zdHJva2VMaW5lY2FwOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUgPSAncm91bmQnO1xuICBwcml2YXRlIF9zdHJva2VXaWR0aCA9IDg7XG4gIHByaXZhdGUgX3NpemUgPSAnZGVmYXVsdCc7XG4gIHByaXZhdGUgX3R5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcbiAgcHJpdmF0ZSBfZm9ybWF0ID0gKHBlcmNlbnQ6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwZXJjZW50fSVgO1xuICB0cmFpbFBhdGhTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBzdHJva2VQYXRoU3R5bGU6IHsgWyBrZXk6IHN0cmluZyBdOiBzdHJpbmcgfTtcbiAgcGF0aFN0cmluZzogc3RyaW5nO1xuICBpY29uO1xuICBpY29uVGhlbWU7XG4gIGlzU3RhdHVzU2V0ID0gZmFsc2U7XG4gIGlzU3Ryb2tlV2lkdGhTZXQgPSBmYWxzZTtcbiAgaXNGb3JtYXRTZXQgPSBmYWxzZTtcbiAgaXNHYXBEZWdyZWVTZXQgPSBmYWxzZTtcbiAgaXNHYXBQb3NpdGlvblNldCA9IGZhbHNlO1xuICBzdGF0dXNDb2xvck1hcCA9IHtcbiAgICBub3JtYWwgICA6ICcjMTA4ZWU5JyxcbiAgICBleGNlcHRpb246ICcjZmY1NTAwJyxcbiAgICBzdWNjZXNzICA6ICcjODdkMDY4J1xuICB9O1xuICBASW5wdXQoKSBuelNob3dJbmZvID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpXaWR0aCA9IDEzMjtcbiAgQElucHV0KCkgbnpTdWNjZXNzUGVyY2VudCA9IDA7XG4gIEBJbnB1dCgpIG56U3Ryb2tlQ29sb3I6IHN0cmluZztcblxuICBASW5wdXQoKVxuICBzZXQgbnpTaXplKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9zaXplID0gdmFsdWU7XG4gICAgaWYgKHRoaXMubnpTaXplID09PSAnc21hbGwnICYmICF0aGlzLmlzU3Ryb2tlV2lkdGhTZXQpIHtcbiAgICAgIHRoaXMuX3N0cm9rZVdpZHRoID0gNjtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTaXplKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3NpemU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpGb3JtYXQodmFsdWU6IChwZXJjZW50OiBudW1iZXIpID0+IHN0cmluZykge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX2Zvcm1hdCA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0Zvcm1hdFNldCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56Rm9ybWF0KCk6IChwZXJjZW50OiBudW1iZXIpID0+IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1hdDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelBlcmNlbnQodmFsdWU6IG51bWJlcikge1xuICAgIHRoaXMuX3BlcmNlbnQgPSB2YWx1ZTtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICBjb25zdCBmaWxsQWxsID0gcGFyc2VJbnQodmFsdWUudG9TdHJpbmcoKSwgMTApID49IDEwMDtcbiAgICAgIGlmIChmaWxsQWxsICYmICF0aGlzLmlzU3RhdHVzU2V0KSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHRoaXMuX2NhY2hlU3RhdHVzO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpQZXJjZW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3BlcmNlbnQ7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTdHJva2VXaWR0aCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNTdHJva2VXaWR0aFNldCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpTdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zdHJva2VXaWR0aDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0YXR1cyh2YWx1ZTogTnpQcm9ncmVzc1N0YXR1c1R5cGUpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuX2NhY2hlU3RhdHVzID0gdmFsdWU7XG4gICAgICB0aGlzLmlzU3RhdHVzU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelN0YXR1cygpOiBOelByb2dyZXNzU3RhdHVzVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelR5cGUodmFsdWU6IE56UHJvZ3Jlc3NUeXBlVHlwZSkge1xuICAgIHRoaXMuX3R5cGUgPSB2YWx1ZTtcbiAgICBpZiAoIXRoaXMuaXNTdHJva2VXaWR0aFNldCkge1xuICAgICAgaWYgKHRoaXMubnpUeXBlICE9PSAnbGluZScpIHtcbiAgICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSA2O1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XG4gICAgICBpZiAoIXRoaXMuaXNHYXBQb3NpdGlvblNldCkge1xuICAgICAgICB0aGlzLl9nYXBQb3NpdGlvbiA9ICdib3R0b20nO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmlzR2FwRGVncmVlU2V0KSB7XG4gICAgICAgIHRoaXMuX2dhcERlZ3JlZSA9IDc1O1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgfVxuXG4gIGdldCBuelR5cGUoKTogTnpQcm9ncmVzc1R5cGVUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fdHlwZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekdhcERlZ3JlZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZ2FwRGVncmVlID0gdmFsdWU7XG4gICAgICB0aGlzLmlzR2FwRGVncmVlU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cblxuICB9XG5cbiAgZ2V0IG56R2FwRGVncmVlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2dhcERlZ3JlZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekdhcFBvc2l0aW9uKHZhbHVlOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZ2FwUG9zaXRpb24gPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNHYXBQb3NpdGlvblNldCA9IHRydWU7XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpHYXBQb3NpdGlvbigpOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwUG9zaXRpb247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpTdHJva2VMaW5lY2FwKHZhbHVlOiBOelByb2dyZXNzU3Ryb2tlTGluZWNhcFR5cGUpIHtcbiAgICB0aGlzLl9zdHJva2VMaW5lY2FwID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gIH1cblxuICBnZXQgbnpTdHJva2VMaW5lY2FwKCk6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZUxpbmVjYXA7XG4gIH1cblxuICBnZXQgaXNDaXJDbGVTdHlsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJztcbiAgfVxuXG4gIHVwZGF0ZVBhdGhTdHlsZXMoKTogdm9pZCB7XG4gICAgY29uc3QgcmFkaXVzID0gNTAgLSAodGhpcy5uelN0cm9rZVdpZHRoIC8gMik7XG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcbiAgICBzd2l0Y2ggKHRoaXMubnpHYXBQb3NpdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cbiAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5IDogYCR7bGVuIC0gdGhpcy5uekdhcERlZ3JlZX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7dGhpcy5uekdhcERlZ3JlZSAvIDJ9cHhgLFxuICAgICAgdHJhbnNpdGlvbiAgICAgIDogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xuICAgIH07XG4gICAgdGhpcy5zdHJva2VQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXkgOiBgJHsodGhpcy5uelBlcmNlbnQgLyAxMDApICogKGxlbiAtIHRoaXMubnpHYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHt0aGlzLm56R2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZUljb24oKTogdm9pZCB7XG4gICAgY29uc3QgaXNDaXJjbGUgPSAodGhpcy5uelR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMubnpUeXBlID09PSAnZGFzaGJvYXJkJyk7XG4gICAgbGV0IHJldCA9ICcnO1xuICAgIGlmICh0aGlzLm56U3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgIHJldCA9ICdjaGVjayc7XG4gICAgfVxuICAgIGlmICh0aGlzLm56U3RhdHVzID09PSAnZXhjZXB0aW9uJykge1xuICAgICAgcmV0ID0gJ2Nsb3NlJztcbiAgICB9XG4gICAgaWYgKHJldCkge1xuICAgICAgaWYgKCFpc0NpcmNsZSkge1xuICAgICAgICByZXQgKz0gJy1jaXJjbGUnO1xuICAgICAgICB0aGlzLmljb25UaGVtZSA9ICdmaWxsJztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaWNvblRoZW1lID0gJ291dGxpbmUnO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmljb24gPSByZXQ7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgfVxuXG59XG4iXX0=