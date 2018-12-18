/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, ElementRef, Host, Input, Optional, ViewEncapsulation } from '@angular/core';
import { FormControl, FormControlName, NgControl } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { toBoolean } from '../core/util/convert';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowDirective } from '../grid/nz-row.directive';
import { NzFormItemComponent } from './nz-form-item.component';
export class NzFormControlComponent extends NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzFormItemComponent
     * @param {?} nzRowDirective
     * @param {?} cdr
     */
    constructor(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective, cdr) {
        super(nzUpdateHostClassService, elementRef, nzFormItemComponent, nzRowDirective);
        this.cdr = cdr;
        this._hasFeedback = false;
        this.controlClassMap = {};
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzHasFeedback(value) {
        this._hasFeedback = toBoolean(value);
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    get nzHasFeedback() {
        return this._hasFeedback;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzValidateStatus(value) {
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
    }
    /**
     * @return {?}
     */
    removeSubscribe() {
        if (this.validateChanges) {
            this.validateChanges.unsubscribe();
            this.validateChanges = null;
        }
    }
    /**
     * @return {?}
     */
    watchControl() {
        this.removeSubscribe();
        /** miss detect https://github.com/angular/angular/issues/10887 **/
        if (this.validateControl && this.validateControl.statusChanges) {
            this.validateChanges = this.validateControl.statusChanges.pipe(startWith(null)).subscribe(() => {
                this.setControlClassMap();
                this.cdr.markForCheck();
            });
        }
    }
    /**
     * @param {?} status
     * @return {?}
     */
    validateControlStatus(status) {
        return this.validateControl && (this.validateControl.dirty || this.validateControl.touched) && (this.validateControl.status === status);
    }
    /**
     * @return {?}
     */
    setControlClassMap() {
        this.controlClassMap = {
            [`has-warning`]: this.validateString === 'warning',
            [`is-validating`]: this.validateString === 'validating' || this.validateString === 'pending' || this.validateControlStatus('PENDING'),
            [`has-error`]: this.validateString === 'error' || this.validateControlStatus('INVALID'),
            [`has-success`]: this.validateString === 'success' || this.validateControlStatus('VALID'),
            [`has-feedback`]: this.nzHasFeedback
        };
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
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.setControlClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.removeSubscribe();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        if (this.defaultValidateControl && (!this.validateControl) && (!this.validateString)) {
            this.nzValidateStatus = this.defaultValidateControl;
        }
    }
}
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
                styles: [`
      nz-form-control {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzFormControlComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzFormItemComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] },
    { type: ChangeDetectorRef }
];
NzFormControlComponent.propDecorators = {
    defaultValidateControl: [{ type: ContentChild, args: [NgControl,] }],
    nzHasFeedback: [{ type: Input }],
    nzValidateStatus: [{ type: Input }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tY29udHJvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLElBQUksRUFDSixLQUFLLEVBR0wsUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFFdEYsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFvQi9ELE1BQU0sT0FBTyxzQkFBdUIsU0FBUSxjQUFjOzs7Ozs7OztJQWtGeEQsWUFBWSx3QkFBa0QsRUFBRSxVQUFzQixFQUFzQixtQkFBd0MsRUFBc0IsY0FBOEIsRUFBVSxHQUFzQjtRQUN0TyxLQUFLLENBQUMsd0JBQXdCLEVBQUUsVUFBVSxFQUFFLG1CQUFtQixFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBRCtILFFBQUcsR0FBSCxHQUFHLENBQW1COzRCQWpGak4sS0FBSztRQUc1Qix1QkFBK0IsRUFBRSxDQUFDO0tBZ0ZqQzs7Ozs7SUEzRUQsSUFDSSxhQUFhLENBQUMsS0FBYztRQUM5QixJQUFJLENB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WUFBSSxJQUFJO1lBekh2SyxpQkFBaUI7OztxQ0E4Q2hCLFlBQVksU0FBQyxTQUFTOzRCQUV0QixLQUFLOytCQVVMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtQ29udHJvbE5hbWUsIE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IE5nQ2xhc3NUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9uZy1jbGFzcyc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekNvbENvbXBvbmVudCB9IGZyb20gJy4uL2dyaWQvbnotY29sLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelJvd0RpcmVjdGl2ZSB9IGZyb20gJy4uL2dyaWQvbnotcm93LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBOekZvcm1JdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1mb3JtLWl0ZW0uY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1mb3JtLWNvbnRyb2wnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgZW5jYXBzdWxhdGlvbiAgICAgIDogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlcl0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgICAgYFxuICAgICAgbnotZm9ybS1jb250cm9sIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUNvbnRyb2xDb21wb25lbnQgZXh0ZW5kcyBOekNvbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBBZnRlckNvbnRlbnRJbml0IHtcbiAgcHJpdmF0ZSBfaGFzRmVlZGJhY2sgPSBmYWxzZTtcbiAgdmFsaWRhdGVDaGFuZ2VzOiBTdWJzY3JpcHRpb247XG4gIHZhbGlkYXRlU3RyaW5nOiBzdHJpbmc7XG4gIGNvbnRyb2xDbGFzc01hcDogTmdDbGFzc1R5cGUgPSB7fTtcbiAgaWNvblR5cGU6IHN0cmluZztcbiAgdmFsaWRhdGVDb250cm9sOiBGb3JtQ29udHJvbDtcbiAgQENvbnRlbnRDaGlsZChOZ0NvbnRyb2wpIGRlZmF1bHRWYWxpZGF0ZUNvbnRyb2w6IEZvcm1Db250cm9sTmFtZTtcblxuICBASW5wdXQoKVxuICBzZXQgbnpIYXNGZWVkYmFjayh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hhc0ZlZWRiYWNrID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICB9XG5cbiAgZ2V0IG56SGFzRmVlZGJhY2soKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZlZWRiYWNrO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG56VmFsaWRhdGVTdGF0dXModmFsdWU6IHN0cmluZyB8IEZvcm1Db250cm9sIHwgRm9ybUNvbnRyb2xOYW1lKSB7XG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybUNvbnRyb2wpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDb250cm9sID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gbnVsbDtcbiAgICAgIHRoaXMud2F0Y2hDb250cm9sKCk7XG4gICAgfSBlbHNlIGlmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1Db250cm9sTmFtZSkge1xuICAgICAgdGhpcy52YWxpZGF0ZUNvbnRyb2wgPSB2YWx1ZS5jb250cm9sO1xuICAgICAgdGhpcy52YWxpZGF0ZVN0cmluZyA9IG51bGw7XG4gICAgICB0aGlzLndhdGNoQ29udHJvbCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRlU3RyaW5nID0gdmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlQ29udHJvbCA9IG51bGw7XG4gICAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZVN1YnNjcmliZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWxpZGF0ZUNoYW5nZXMpIHtcbiAgICAgIHRoaXMudmFsaWRhdGVDaGFuZ2VzLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgd2F0Y2hDb250cm9sKCk6IHZvaWQge1xuICAgIHRoaXMucmVtb3ZlU3Vic2NyaWJlKCk7XG4gICAgLyoqIG1pc3MgZGV0ZWN0IGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvaXNzdWVzLzEwODg3ICoqL1xuICAgIGlmICh0aGlzLnZhbGlkYXRlQ29udHJvbCAmJiB0aGlzLnZhbGlkYXRlQ29udHJvbC5zdGF0dXNDaGFuZ2VzKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlQ2hhbmdlcyA9IHRoaXMudmFsaWRhdGVDb250cm9sLnN0YXR1c0NoYW5nZXMucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKG51bGwpXG4gICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0Q29udHJvbENsYXNzTWFwKCk7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVDb250cm9sU3RhdHVzKHN0YXR1czogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsaWRhdGVDb250cm9sICYmICh0aGlzLnZhbGlkYXRlQ29udHJvbC5kaXJ0eSB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbC50b3VjaGVkKSAmJiAodGhpcy52YWxpZGF0ZUNvbnRyb2wuc3RhdHVzID09PSBzdGF0dXMpO1xuICB9XG5cbiAgc2V0Q29udHJvbENsYXNzTWFwKCk6IHZvaWQge1xuICAgIHRoaXMuY29udHJvbENsYXNzTWFwID0ge1xuICAgICAgWyBgaGFzLXdhcm5pbmdgIF0gIDogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3dhcm5pbmcnLFxuICAgICAgWyBgaXMtdmFsaWRhdGluZ2AgXTogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3ZhbGlkYXRpbmcnIHx8IHRoaXMudmFsaWRhdGVTdHJpbmcgPT09ICdwZW5kaW5nJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnUEVORElORycpLFxuICAgICAgWyBgaGFzLWVycm9yYCBdICAgIDogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ2Vycm9yJyB8fCB0aGlzLnZhbGlkYXRlQ29udHJvbFN0YXR1cygnSU5WQUxJRCcpLFxuICAgICAgWyBgaGFzLXN1Y2Nlc3NgIF0gIDogdGhpcy52YWxpZGF0ZVN0cmluZyA9PT0gJ3N1Y2Nlc3MnIHx8IHRoaXMudmFsaWRhdGVDb250cm9sU3RhdHVzKCdWQUxJRCcpLFxuICAgICAgWyBgaGFzLWZlZWRiYWNrYCBdIDogdGhpcy5uekhhc0ZlZWRiYWNrXG4gICAgfTtcblxuICAgIGlmICh0aGlzLmNvbnRyb2xDbGFzc01hcFsgJ2hhcy13YXJuaW5nJyBdKSB7XG4gICAgICB0aGlzLmljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZS1maWxsJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbENsYXNzTWFwWyAnaXMtdmFsaWRhdGluZycgXSkge1xuICAgICAgdGhpcy5pY29uVHlwZSA9ICdsb2FkaW5nJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbENsYXNzTWFwWyAnaGFzLWVycm9yJyBdKSB7XG4gICAgICB0aGlzLmljb25UeXBlID0gJ2Nsb3NlLWNpcmNsZS1maWxsJztcbiAgICB9IGVsc2UgaWYgKHRoaXMuY29udHJvbENsYXNzTWFwWyAnaGFzLXN1Y2Nlc3MnIF0pIHtcbiAgICAgIHRoaXMuaWNvblR5cGUgPSAnY2hlY2stY2lyY2xlLWZpbGwnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmljb25UeXBlID0gJyc7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IobnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlOiBOelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2UsIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIEBPcHRpb25hbCgpIEBIb3N0KCkgbnpGb3JtSXRlbUNvbXBvbmVudDogTnpGb3JtSXRlbUNvbXBvbmVudCwgQE9wdGlvbmFsKCkgQEhvc3QoKSBuelJvd0RpcmVjdGl2ZTogTnpSb3dEaXJlY3RpdmUsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xuICAgIHN1cGVyKG56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgZWxlbWVudFJlZiwgbnpGb3JtSXRlbUNvbXBvbmVudCwgbnpSb3dEaXJlY3RpdmUpO1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc3VwZXIubmdPbkluaXQoKTtcbiAgICB0aGlzLnNldENvbnRyb2xDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5yZW1vdmVTdWJzY3JpYmUoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5kZWZhdWx0VmFsaWRhdGVDb250cm9sICYmICghdGhpcy52YWxpZGF0ZUNvbnRyb2wpICYmICghdGhpcy52YWxpZGF0ZVN0cmluZykpIHtcbiAgICAgIHRoaXMubnpWYWxpZGF0ZVN0YXR1cyA9IHRoaXMuZGVmYXVsdFZhbGlkYXRlQ29udHJvbDtcbiAgICB9XG4gIH1cbn1cbiJdfQ==