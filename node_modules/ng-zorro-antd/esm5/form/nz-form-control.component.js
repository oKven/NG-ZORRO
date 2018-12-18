/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { FormControl, FormControlName, NgControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowDirective } from '../grid/nz-row.directive';
import { NzFormItemComponent } from './nz-form-item.component';
var NzFormControlComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzFormControlComponent, _super);
    function NzFormControlComponent(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr) {
        var _this = _super.call(this, nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective) || this;
        _this.cdr = cdr;
        _this._hasFeedback = false;
        _this.controlClassMap = {};
        return _this;
    }
    Object.defineProperty(NzFormControlComponent.prototype, "nzHasFeedback", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hasFeedback;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hasFeedback = toBoolean(value);
            this.setControlClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzFormControlComponent.prototype, "nzValidateStatus", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value instanceof FormControl) {
                this.validateControl = value;
                this.validateString = null;
                this.watchControl();
            }
            else if (value instanceof FormControlName) {
                this.validateControl = value.control;
                this.validateString = null;
                this.watchControl();
            }
            else {
                this.validateString = value;
                this.validateControl = null;
                this.setControlClassMap();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.removeSubscribe = /**
     * @return {?}
     */
    function () {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.watchControl = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(function () {
                _this.setControlClassMap();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @param {?} status
     * @return {?}
     */
    NzFormControlComponent.prototype.validateControlStatus = /**
     * @param {?} status
     * @return {?}
     */
    function (status) {
        return this.validateControl && (this.validateControl.dirty || this.validateControl.touched) && (this.validateControl.status === status);
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.setControlClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.controlClassMap = (_a = {},
            _a["has-warning"] = this.validateString === 'warning',
            _a["is-validating"] = this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING'),
            _a["has-error"] = this.validateString === 'error' || this.validateControlStatus('INVALID'),
            _a["has-success"] = this.validateString === 'success' || this.validateControlStatus('VALID'),
            _a["has-feedback"] = this.nzHasFeedback,
            _a);
        if (this.controlClassMap['has-warning']) {
            this.iconType = 'exclamation-circle-fill';
        }
        else if (this.controlClassMap['is-validating']) {
            this.iconType = 'loading';
        }
        else if (this.controlClassMap['has-error']) {
            this.iconType = 'close-circle-fill';
        }
        else if (this.controlClassMap['has-success']) {
            this.iconType = 'check-circle-fill';
        }
        else {
            this.iconType = '';
        }
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        _super.prototype.ngOnInit.call(this);
        this.setControlClassMap();
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.removeSubscribe();
    };
    /**
     * @return {?}
     */
    NzFormControlComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        if (this.defaultValidateControl && (!this.validateControl) && (!this.validateString)) {
            this.nzValidateStatus = this.defaultValidateControl;
        }
    };
    NzFormControlComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-control',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    providers: [NzUpdateHostClassService],
                    template: "<div class=\"ant-form-item-control\" [ngClass]=\"controlClassMap\">\n  <span class=\"ant-form-item-children\">\n    <ng-content></ng-content>\n    <span class=\"ant-form-item-children-icon\">\n      <i *ngIf=\"nzHasFeedback && iconType\" nz-icon [type]=\"iconType\"></i>\n    </span>\n  </span>\n  <ng-content select=\"nz-form-explain\"></ng-content>\n</div>",
                    host: {
                        '[class.ant-form-item-control-wrapper]': 'true'
                    },
                    styles: ["\n      nz-form-control {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzFormControlComponent.ctorParameters = function () { return [
        { type: NzUpdateHostClassService },
        { type: ElementRef },
        { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
        { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
        { type: ChangeDetectorRef }
    ]; };
    NzFormControlComponent.propDecorators = {
        defaultValidateControl: [{ type: ContentChild, args: [NgControl,] }],
        nzHasFeedback: [{ type: Input }],
        nzValidateStatus: [{ type: Input }]
    };
    return NzFormControlComponent;
}(NzColComponent));
export { NzFormControlComponent };
function NzFormControlComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzFormControlComponent.prototype._hasFeedback;
    /** @type {?} */
    NzFormControlComponent.prototype.validateChanges;
    /** @type {?} */
    NzFormControlComponent.prototype.validateString;
    /** @type {?} */
    NzFormControlComponent.prototype.controlClassMap;
    /** @type {?} */
    NzFormControlComponent.prototype.iconType;
    /** @type {?} */
    NzFormControlComponent.prototype.validateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.defaultValidateControl;
    /** @type {?} */
    NzFormControlComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLFVBQVUsRUFDVixJQUFJLEVBQ0osS0FBSyxFQUdMLFFBQVEsRUFDUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXRGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQzFELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDOztJQW9CbkIsa0RBQWM7SUFrRnhELGdDQUFZLHdCQUFrRCxFQUFFLFVBQXNCLEVBQXNCLG1CQUF3QyxFQUFzQixjQUE4QixFQUFVLEdBQXNCO1FBQXhPLFlBQ0Usa0JBQU0sd0JBQXdCLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxTQUNqRjtRQUZpTixTQUFHLEdBQUgsR0FBRyxDQUFtQjs2QkFqRmpOLEtBQUs7UUFHNUIsd0JBQStCLEVBQUUsQ0FBQzs7S0FnRmpDO0lBM0VELHNCQUNJLGlEQUFhOzs7O1FBS2pCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQzFCOzs7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LFlBQUksSUFBSTtnQkF2R2xHLGNBQWMsdUJBdUdrSSxRQUFRLFlBQUksSUFBSTtnQkF6SHZLLGlCQUFpQjs7O3lDQThDaEIsWUFBWSxTQUFDLFNBQVM7Z0NBRXRCLEtBQUs7bUNBVUwsS0FBSzs7aUNBN0RSO0VBMEM0QyxjQUFjO1NBQTdDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyQ29udGVudEluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3QsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Db250cm9sTmFtZSwgTmdDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGggfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgTmdDbGFzc1R5cGUgfSBmcm9tICcuLi9jb3JlL3R5cGVzL25nLWNsYXNzJztcbmltcG9ydCB7IHRvQm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56Q29sQ29tcG9uZW50IH0gZnJvbSAnLi4vZ3JpZC9uei1jb2wuY29tcG9uZW50JztcbmltcG9ydCB7IE56Um93RGlyZWN0aXZlIH0gZnJvbSAnLi4vZ3JpZC9uei1yb3cuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56Rm9ybUl0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWZvcm0taXRlbS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0tY29udHJvbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWZvcm0tY29udHJvbC5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgICBgXG4gICAgICBuei1mb3JtLWNvbnRyb2wge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICBgXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtQ29udHJvbENvbXBvbmVudCBleHRlbmRzIE56Q29sQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQsIEFmdGVyQ29udGVudEluaXQge1xuICBwcml2YXRlIF9oYXNGZWVkYmFjayA9IGZhbHNlO1xuICB2YWxpZGF0ZUNoYW5nZXM6IFN1YnNjcmlwdGlvbjtcbiAgdmFsaWRhdGVTdHJpbmc6IHN0cmluZztcbiAgY29udHJvbENsYXNzTWFwOiBOZ0NsYXNzVHlwZSA9IHt9O1xuICBpY29uVHlwZTogc3RyaW5nO1xuICB2YWxpZGF0ZUNvbnRyb2w6IEZvcm1Db250cm9sO1xuICBAQ29udGVudENoaWxkKE5nQ29udHJvbCkgZGVmYXVsdFZhbGlkYXRlQ29udHJvbDogRm9ybUNvbnRyb2xOYW1lO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekhhc0ZlZWRiYWNrKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faGFzRmVlZGJhY2sgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gIH1cblxuICBnZXQgbnpIYXNGZWVkYmFjaygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGFzRmVlZGJhY2s7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpWYWxpZGF0ZVN0YXR1cyh2YWx1ZTogc3RyaW5nIHwgRm9ybUNvbnRyb2wgfCBGb3JtQ29udHJvbE5hbWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtQ29udHJvbCkge1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSBudWxsO1xuICAgICAgdGhpcy53YXRjaENvbnRyb2woKTtcbiAgICB9IGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IHZhbHVlLmNvbnRyb2w7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGVTdHJpbmcgPSB2YWx1ZTtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gbnVsbDtcbiAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU3Vic2NyaWJlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ2hhbmdlcykge1xuICAgICAgdGhpcy52YWxpZGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICB3YXRjaENvbnRyb2woKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgICAvKiogbWlzcyBkZXRlY3QgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTA4ODcgKiovXG4gICAgaWYgKHRoaXMudmFsaWRhdGVDb250cm9sICYmIHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzID0gdGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzQ2hhbmdlcy5waXBlKFxuICAgICAgICBzdGFydFdpdGgobnVsbClcbiAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zZXRDb250cm9sQ2xhc3NNYXAoKTtcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZUNvbnRyb2xTdGF0dXMoc3RhdHVzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZUNvbnRyb2wgJiYgKHRoaXMudmFsaWRhdGVDb250cm9sLmRpcnR5IHx8IHRoaXMudmFsaWRhdGVDb250cm9sLnRvdWNoZWQpICYmICh0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXMgPT09IHN0YXR1cyk7XG4gIH1cblxuICBzZXRDb250cm9sQ2xhc3NNYXAoKTogdm9pZCB7XG4gICAgdGhpcy5jb250cm9sQ2xhc3NNYXAgPSB7XG4gICAgICBbIGBoYXMtd2FybmluZ2AgXSAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnd2FybmluZycsXG4gICAgICBbIGBpcy12YWxpZGF0aW5nYCBdOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAndmFsaWRhdGluZycgfHwgdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3BlbmRpbmcnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdQRU5ESU5HJyksXG4gICAgICBbIGBoYXMtZXJyb3JgIF0gICAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnZXJyb3InIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdJTlZBTElEJyksXG4gICAgICBbIGBoYXMtc3VjY2Vzc2AgXSAgOiB0aGlzLnZhbGlkYXRlU3RyaW5nID09PSAnc3VjY2VzcycgfHwgdGhpcy52YWxpZGF0ZUNvbnRyb2xTdGF0dXMoJ1ZBTElEJyksXG4gICAgICBbIGBoYXMtZmVlZGJhY2tgIF0gOiB0aGlzLm56SGFzRmVlZGJhY2tcbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuY29udHJvbENsYXNzTWFwWyAnaGFzLXdhcm5pbmcnIF0pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnZXhjbGFtYXRpb24tY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbICdpcy12YWxpZGF0aW5nJyBdKSB7XG4gICAgICB0aGlzLmljb25UeXBlID0gJ2xvYWRpbmcnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbICdoYXMtZXJyb3InIF0pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2xvc2UtY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSBpZiAodGhpcy5jb250cm9sQ2xhc3NNYXBbICdoYXMtc3VjY2VzcycgXSkge1xuICAgICAgdGhpcy5pY29uVHlwZSA9ICdjaGVjay1jaXJjbGUtZmlsbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnJztcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3RvcihuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuekZvcm1JdGVtQ29tcG9uZW50OiBOekZvcm1JdGVtQ29tcG9uZW50LCBAT3B0aW9uYWwoKSBASG9zdCgpIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlLCBlbGVtZW50UmVmLCBuekZvcm1JdGVtQ29tcG9uZW50LCBuelJvd0RpcmVjdGl2ZSk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBzdXBlci5uZ09uSW5pdCgpO1xuICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbW92ZVN1YnNjcmliZSgpO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmRlZmF1bHRWYWxpZGF0ZUNvbnRyb2wgJiYgKCF0aGlzLnZhbGlkYXRlQ29udHJvbCkgJiYgKCF0aGlzLnZhbGlkYXRlU3RyaW5nKSkge1xuICAgICAgdGhpcy5uelZhbGlkYXRlU3RhdHVzID0gdGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sO1xuICAgIH1cbiAgfVxufVxuIl19