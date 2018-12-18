/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { isNotNil } from '../core/util/check';
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent() {
        this._gapDegree = 0;
        this._gapPosition = 'top';
        this._percent = 0;
        this._status = 'normal';
        this._cacheStatus = 'normal';
        this._strokeLinecap = 'round';
        this._strokeWidth = 8;
        this._size = 'default';
        this._type = 'line';
        this._format = function (percent) { return percent + "%"; };
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
    Object.defineProperty(NzProgressComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = value;
            if (this.nzSize === 'small' && !this.isStrokeWidthSet) {
                this._strokeWidth = 6;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzFormat", {
        get: /**
         * @return {?}
         */
        function () {
            return this._format;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._format = value;
                this.isFormatSet = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzPercent", {
        get: /**
         * @return {?}
         */
        function () {
            return this._percent;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._percent = value;
            if (isNotNil(value)) {
                /** @type {?} */
                var fillAll = parseInt(value.toString(), 10) >= 100;
                if (fillAll && !this.isStatusSet) {
                    this._status = 'success';
                }
                else {
                    this._status = this._cacheStatus;
                }
                this.updatePathStyles();
                this.updateIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStrokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeWidth;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._strokeWidth = value;
                this.isStrokeWidthSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._status = value;
                this._cacheStatus = value;
                this.isStatusSet = true;
                this.updateIcon();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzType", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzGapDegree", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapDegree;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapDegree = value;
                this.isGapDegreeSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzGapPosition", {
        get: /**
         * @return {?}
         */
        function () {
            return this._gapPosition;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (isNotNil(value)) {
                this._gapPosition = value;
                this.isGapPositionSet = true;
                this.updatePathStyles();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "nzStrokeLinecap", {
        get: /**
         * @return {?}
         */
        function () {
            return this._strokeLinecap;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._strokeLinecap = value;
            this.updatePathStyles();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCirCleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updatePathStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var radius = 50 - (this.nzStrokeWidth / 2);
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
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
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        this.trailPathStyle = {
            strokeDasharray: len - this.nzGapDegree + "px " + len + "px",
            strokeDashoffset: "-" + this.nzGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            strokeDasharray: (this.nzPercent / 100) * (len - this.nzGapDegree) + "px " + len + "px",
            strokeDashoffset: "-" + this.nzGapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s' // eslint-disable-line
        };
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updateIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCircle = (this.nzType === 'circle' || this.nzType === 'dashboard');
        /** @type {?} */
        var ret = '';
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
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePathStyles();
        this.updateIcon();
    };
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
    return NzProgressComponent;
}());
export { NzProgressComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInByb2dyZXNzL256LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFNdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7MEJBUXZCLENBQUM7NEJBQzRCLEtBQUs7d0JBQ3BDLENBQUM7dUJBQ29CLFFBQVE7NEJBQ0gsUUFBUTs4QkFDQyxPQUFPOzRCQUN0QyxDQUFDO3FCQUNSLFNBQVM7cUJBQ1csTUFBTTt1QkFDeEIsVUFBQyxPQUFlLElBQWEsT0FBRyxPQUFPLE1BQUcsRUFBYixDQUFhO1FBTTVELG1CQUFjLEtBQUssQ0FBQztRQUNwQix3QkFBbUIsS0FBSyxDQUFDO1FBQ3pCLG1CQUFjLEtBQUssQ0FBQztRQUNwQixzQkFBaUIsS0FBSyxDQUFDO1FBQ3ZCLHdCQUFtQixLQUFLLENBQUM7UUFDekIsc0JBQWlCO1lBQ2YsTUFBTSxFQUFLLFNBQVM7WUFDcEIsU0FBUyxFQUFFLFNBQVM7WUFDcEIsT0FBTyxFQUFJLFNBQVM7U0FDckIsQ0FBQztRQUNGLGtCQUFzQixJQUFJLENBQUM7UUFDM0IsZUFBbUIsR0FBRyxDQUFDO1FBQ3ZCLHdCQUE0QixDQUFDLENBQUM7O0lBRzlCLHNCQUNJLHVDQUFNOzs7O1FBT1Y7WUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7U0FDbkI7Ozs7O1FBVkQsVUFDVyxLQUFhO1lBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1lBQ25CLElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3JELElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO2FBQ3ZCO1NB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QkFFTCxLQUFLOzJCQVlMLEtBQUs7NEJBWUwsS0FBSztnQ0FtQkwsS0FBSzsyQkFhTCxLQUFLO3lCQWNMLEtBQUs7OEJBd0JMLEtBQUs7Z0NBY0wsS0FBSztrQ0FhTCxLQUFLOzs4QkF6S1I7O1NBaUJhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnIHwgJ2JvdHRvbScgfCAnbGVmdCcgfCAncmlnaHQnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXhjZXB0aW9uJyB8ICdhY3RpdmUnIHwgJ25vcm1hbCc7XG5leHBvcnQgdHlwZSBOelByb2dyZXNzVHlwZVR5cGUgPSAnbGluZScgfCAnY2lyY2xlJyB8ICdkYXNoYm9hcmQnO1xuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJyB8ICdzcXVhcmUnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXByb2dyZXNzJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXByb2dyZXNzLmNvbXBvbmVudC5odG1sJ1xufSlcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBfZ2FwRGVncmVlID0gMDtcbiAgcHJpdmF0ZSBfZ2FwUG9zaXRpb246IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJztcbiAgcHJpdmF0ZSBfcGVyY2VudCA9IDA7XG4gIHByaXZhdGUgX3N0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBfY2FjaGVTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XG4gIHByaXZhdGUgX3N0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCc7XG4gIHByaXZhdGUgX3N0cm9rZVdpZHRoID0gODtcbiAgcHJpdmF0ZSBfc2l6ZSA9ICdkZWZhdWx0JztcbiAgcHJpdmF0ZSBfdHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBwcml2YXRlIF9mb3JtYXQgPSAocGVyY2VudDogbnVtYmVyKTogc3RyaW5nID0+IGAke3BlcmNlbnR9JWA7XG4gIHRyYWlsUGF0aFN0eWxlOiB7IFsga2V5OiBzdHJpbmcgXTogc3RyaW5nIH07XG4gIHN0cm9rZVBhdGhTdHlsZTogeyBbIGtleTogc3RyaW5nIF06IHN0cmluZyB9O1xuICBwYXRoU3RyaW5nOiBzdHJpbmc7XG4gIGljb247XG4gIGljb25UaGVtZTtcbiAgaXNTdGF0dXNTZXQgPSBmYWxzZTtcbiAgaXNTdHJva2VXaWR0aFNldCA9IGZhbHNlO1xuICBpc0Zvcm1hdFNldCA9IGZhbHNlO1xuICBpc0dhcERlZ3JlZVNldCA9IGZhbHNlO1xuICBpc0dhcFBvc2l0aW9uU2V0ID0gZmFsc2U7XG4gIHN0YXR1c0NvbG9yTWFwID0ge1xuICAgIG5vcm1hbCAgIDogJyMxMDhlZTknLFxuICAgIGV4Y2VwdGlvbjogJyNmZjU1MDAnLFxuICAgIHN1Y2Nlc3MgIDogJyM4N2QwNjgnXG4gIH07XG4gIEBJbnB1dCgpIG56U2hvd0luZm8gPSB0cnVlO1xuICBASW5wdXQoKSBueldpZHRoID0gMTMyO1xuICBASW5wdXQoKSBuelN1Y2Nlc3NQZXJjZW50ID0gMDtcbiAgQElucHV0KCkgbnpTdHJva2VDb2xvcjogc3RyaW5nO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNpemUodmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuX3NpemUgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5uelNpemUgPT09ICdzbWFsbCcgJiYgIXRoaXMuaXNTdHJva2VXaWR0aFNldCkge1xuICAgICAgdGhpcy5fc3Ryb2tlV2lkdGggPSA2O1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelNpemUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekZvcm1hdCh2YWx1ZTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nKSB7XG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xuICAgICAgdGhpcy5fZm9ybWF0ID0gdmFsdWU7XG4gICAgICB0aGlzLmlzRm9ybWF0U2V0ID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbnpGb3JtYXQoKTogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZm9ybWF0O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56UGVyY2VudCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fcGVyY2VudCA9IHZhbHVlO1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh2YWx1ZS50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xuICAgICAgaWYgKGZpbGxBbGwgJiYgIXRoaXMuaXNTdGF0dXNTZXQpIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gdGhpcy5fY2FjaGVTdGF0dXM7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelBlcmNlbnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fcGVyY2VudDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0cm9rZVdpZHRoKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IHZhbHVlO1xuICAgICAgdGhpcy5pc1N0cm9rZVdpZHRoU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuelN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3N0cm9rZVdpZHRoO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56U3RhdHVzKHZhbHVlOiBOelByb2dyZXNzU3RhdHVzVHlwZSkge1xuICAgIGlmIChpc05vdE5pbCh2YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IHZhbHVlO1xuICAgICAgdGhpcy5fY2FjaGVTdGF0dXMgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNTdGF0dXNTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56U3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VHlwZSh2YWx1ZTogTnpQcm9ncmVzc1R5cGVUeXBlKSB7XG4gICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xuICAgIGlmICghdGhpcy5pc1N0cm9rZVdpZHRoU2V0KSB7XG4gICAgICBpZiAodGhpcy5uelR5cGUgIT09ICdsaW5lJykge1xuICAgICAgICB0aGlzLl9zdHJva2VXaWR0aCA9IDY7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCcpIHtcbiAgICAgIGlmICghdGhpcy5pc0dhcFBvc2l0aW9uU2V0KSB7XG4gICAgICAgIHRoaXMuX2dhcFBvc2l0aW9uID0gJ2JvdHRvbSc7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMuaXNHYXBEZWdyZWVTZXQpIHtcbiAgICAgICAgdGhpcy5fZ2FwRGVncmVlID0gNzU7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICB9XG5cbiAgZ2V0IG56VHlwZSgpOiBOelByb2dyZXNzVHlwZVR5cGUge1xuICAgIHJldHVybiB0aGlzLl90eXBlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56R2FwRGVncmVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9nYXBEZWdyZWUgPSB2YWx1ZTtcbiAgICAgIHRoaXMuaXNHYXBEZWdyZWVTZXQgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XG4gICAgfVxuXG4gIH1cblxuICBnZXQgbnpHYXBEZWdyZWUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZ2FwRGVncmVlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56R2FwUG9zaXRpb24odmFsdWU6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUpIHtcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XG4gICAgICB0aGlzLl9nYXBQb3NpdGlvbiA9IHZhbHVlO1xuICAgICAgdGhpcy5pc0dhcFBvc2l0aW9uU2V0ID0gdHJ1ZTtcbiAgICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBuekdhcFBvc2l0aW9uKCk6IE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUge1xuICAgIHJldHVybiB0aGlzLl9nYXBQb3NpdGlvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuelN0cm9rZUxpbmVjYXAodmFsdWU6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSkge1xuICAgIHRoaXMuX3N0cm9rZUxpbmVjYXAgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcbiAgfVxuXG4gIGdldCBuelN0cm9rZUxpbmVjYXAoKTogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5fc3Ryb2tlTGluZWNhcDtcbiAgfVxuXG4gIGdldCBpc0NpckNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xuICB9XG5cbiAgdXBkYXRlUGF0aFN0eWxlcygpOiB2b2lkIHtcbiAgICBjb25zdCByYWRpdXMgPSA1MCAtICh0aGlzLm56U3Ryb2tlV2lkdGggLyAyKTtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xuICAgIHN3aXRjaCAodGhpcy5uekdhcFBvc2l0aW9uKSB7XG4gICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAtMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gcmFkaXVzICogMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgIH1cbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XG4gICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXkgOiBgJHtsZW4gLSB0aGlzLm56R2FwRGVncmVlfXB4ICR7bGVufXB4YCxcbiAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHt0aGlzLm56R2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uICAgICAgOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcbiAgICB0aGlzLnN0cm9rZVBhdGhTdHlsZSA9IHtcbiAgICAgIHN0cm9rZURhc2hhcnJheSA6IGAkeyh0aGlzLm56UGVyY2VudCAvIDEwMCkgKiAobGVuIC0gdGhpcy5uekdhcERlZ3JlZSl9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke3RoaXMubnpHYXBEZWdyZWUgLyAyfXB4YCxcbiAgICAgIHRyYW5zaXRpb24gICAgICA6ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnIC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlSWNvbigpOiB2b2lkIHtcbiAgICBjb25zdCBpc0NpcmNsZSA9ICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKTtcbiAgICBsZXQgcmV0ID0gJyc7XG4gICAgaWYgKHRoaXMubnpTdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgcmV0ID0gJ2NoZWNrJztcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTdGF0dXMgPT09ICdleGNlcHRpb24nKSB7XG4gICAgICByZXQgPSAnY2xvc2UnO1xuICAgIH1cbiAgICBpZiAocmV0KSB7XG4gICAgICBpZiAoIWlzQ2lyY2xlKSB7XG4gICAgICAgIHJldCArPSAnLWNpcmNsZSc7XG4gICAgICAgIHRoaXMuaWNvblRoZW1lID0gJ2ZpbGwnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pY29uVGhlbWUgPSAnb3V0bGluZSc7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuaWNvbiA9IHJldDtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlUGF0aFN0eWxlcygpO1xuICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICB9XG5cbn1cbiJdfQ==