/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { InputBoolean } from '../core/util/convert';
export class NzAlertComponent {
    constructor() {
        this.display = true;
        this.isTypeSet = false;
        this.isShowIconSet = false;
        this.iconType = 'info-circle';
        this.iconTheme = 'fill';
        this.nzOnClose = new EventEmitter();
        this.nzCloseable = false;
        this.nzShowIcon = false;
        this.nzBanner = false;
        this.nzType = 'info';
    }
    /**
     * @return {?}
     */
    closeAlert() {
        this.display = false;
    }
    /**
     * @return {?}
     */
    onFadeAnimationDone() {
        if (!this.display) {
            this.nzOnClose.emit(true);
        }
    }
    /**
     * @return {?}
     */
    updateIconClassMap() {
        switch (this.nzType) {
            case 'error':
                this.iconType = 'close-circle';
                break;
            case 'success':
                this.iconType = 'check-circle';
                break;
            case 'info':
                this.iconType = 'info-circle';
                break;
            case 'warning':
                this.iconType = 'exclamation-circle';
                break;
        }
        if (this.nzDescription) {
            this.iconTheme = 'outline';
        }
        else {
            this.iconTheme = `fill`;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["nzShowIcon"]) {
            this.isShowIconSet = true;
        }
        if (changes["nzDescription"] || changes["nzType"]) {
            this.updateIconClassMap();
        }
        if (changes["nzType"]) {
            this.isTypeSet = true;
        }
        if (changes["nzBanner"]) {
            if (!this.isTypeSet) {
                this.nzType = 'warning';
            }
            if (!this.isShowIconSet) {
                this.nzShowIcon = true;
            }
        }
    }
}
NzAlertComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-alert',
                animations: [fadeAnimation],
                template: "<div *ngIf=\"display\"\n  class=\"ant-alert\"\n  [class.ant-alert-success]=\"nzType === 'success'\"\n  [class.ant-alert-info]=\"nzType === 'info'\"\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\n  [class.ant-alert-error]=\"nzType === 'error'\"\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\n  [class.ant-alert-banner]=\"nzBanner\"\n  [class.ant-alert-with-description]=\"!!nzDescription\"\n  [@fadeAnimation]\n  (@fadeAnimation.done)=\"onFadeAnimationDone()\">\n  <ng-container *ngIf=\"nzShowIcon\">\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"nzIconType; else iconTemplate\"></i>\n    <ng-template #iconTemplate>\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\" [theme]=\"iconTheme\"></i>\n    </ng-template>\n  </ng-container>\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\n  </span>\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </span>\n  <a *ngIf=\"nzCloseable || nzCloseText\"\n    class=\"ant-alert-close-icon\"\n    (click)=\"closeAlert()\">\n    <ng-template #closeDefaultTemplate>\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\n    </ng-template>\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\n    </ng-container>\n  </a>\n</div>",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                preserveWhitespaces: false,
                styles: [`nz-alert {
      display: block;
    }`]
            }] }
];
NzAlertComponent.propDecorators = {
    nzOnClose: [{ type: Output }],
    nzCloseable: [{ type: Input }],
    nzShowIcon: [{ type: Input }],
    nzBanner: [{ type: Input }],
    nzCloseText: [{ type: Input }],
    nzIconType: [{ type: Input }],
    nzMessage: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzType: [{ type: Input }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAlertComponent.prototype, "nzCloseable", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAlertComponent.prototype, "nzShowIcon", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzAlertComponent.prototype, "nzBanner", void 0);
function NzAlertComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzAlertComponent.prototype.display;
    /** @type {?} */
    NzAlertComponent.prototype.isTypeSet;
    /** @type {?} */
    NzAlertComponent.prototype.isShowIconSet;
    /** @type {?} */
    NzAlertComponent.prototype.iconType;
    /** @type {?} */
    NzAlertComponent.prototype.iconTheme;
    /** @type {?} */
    NzAlertComponent.prototype.nzOnClose;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseable;
    /** @type {?} */
    NzAlertComponent.prototype.nzShowIcon;
    /** @type {?} */
    NzAlertComponent.prototype.nzBanner;
    /** @type {?} */
    NzAlertComponent.prototype.nzCloseText;
    /** @type {?} */
    NzAlertComponent.prototype.nzIconType;
    /** @type {?} */
    NzAlertComponent.prototype.nzMessage;
    /** @type {?} */
    NzAlertComponent.prototype.nzDescription;
    /** @type {?} */
    NzAlertComponent.prototype.nzType;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImFsZXJ0L256LWFsZXJ0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFbEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBZXBELE1BQU0sT0FBTyxnQkFBZ0I7O1FBQzNCLGVBQVUsSUFBSSxDQUFDO1FBQ2YsaUJBQVksS0FBSyxDQUFDO1FBQ2xCLHFCQUFnQixLQUFLLENBQUM7UUFDdEIsZ0JBQVcsYUFBYSxDQUFDO1FBQ3pCLGlCQUFZLE1BQU0sQ0FBQztRQUNuQixpQkFBc0QsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxtQkFBdUMsS0FBSyxDQUFDO1FBQzdDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsZ0JBQW9DLEtBQUssQ0FBQztRQUsxQyxjQUFrQixNQUFNLENBQUM7Ozs7O0lBRXpCLFVBQVU7UUFDUixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztLQUN0Qjs7OztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUMzQjtLQUNGOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLFFBQVEsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNuQixLQUFLLE9BQU87Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFjLENBQUM7Z0JBQy9CLE1BQU07WUFDUixLQUFLLE1BQU07Z0JBQ1QsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7Z0JBQzlCLE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBb0IsQ0FBQztnQkFDckMsTUFBTTtTQUNUO1FBQ0QsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO1NBQzVCO2FBQU07WUFDTCxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUN6QjtLQUNGOzs7OztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sZ0JBQWE7WUFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxJQUFJLE9BQU8scUJBQWtCLE9BQU8sVUFBTyxFQUFFO1lBQzNDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxPQUFPLFlBQVM7WUFDbEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7U0FDdkI7UUFDRCxJQUFJLE9BQU8sY0FBVztZQUNwQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtnQkFDbkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7YUFDeEI7U0FDRjtLQUNGOzs7WUEvRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBYSxVQUFVO2dCQUMvQixVQUFVLEVBQVcsQ0FBRSxhQUFhLENBQUU7Z0JBQ3RDLDBnREFBZ0Q7Z0JBQ2hELGVBQWUsRUFBTSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUNuRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsbUJBQW1CLEVBQUUsS0FBSzt5QkFFdEI7O01BRUE7YUFFTDs7O3dCQU9FLE1BQU07MEJBQ04sS0FBSzt5QkFDTCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSztxQkFDTCxLQUFLOzs7SUFQSSxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUU7Ozs7SUFDZCxZQUFZLEVBQUUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVGVtcGxhdGVSZWYsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMvbmctY2xhc3MnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWFsZXJ0JyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWFsZXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgICAgYG56LWFsZXJ0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGRpc3BsYXkgPSB0cnVlO1xuICBpc1R5cGVTZXQgPSBmYWxzZTtcbiAgaXNTaG93SWNvblNldCA9IGZhbHNlO1xuICBpY29uVHlwZSA9ICdpbmZvLWNpcmNsZSc7XG4gIGljb25UaGVtZSA9ICdmaWxsJztcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG56T25DbG9zZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpDbG9zZWFibGUgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56U2hvd0ljb24gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFubmVyID0gZmFsc2U7XG4gIEBJbnB1dCgpIG56Q2xvc2VUZXh0OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpJY29uVHlwZTogTmdDbGFzc1R5cGU7XG4gIEBJbnB1dCgpIG56TWVzc2FnZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelR5cGUgPSAnaW5mbyc7XG5cbiAgY2xvc2VBbGVydCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpc3BsYXkgPSBmYWxzZTtcbiAgfVxuXG4gIG9uRmFkZUFuaW1hdGlvbkRvbmUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmRpc3BsYXkpIHtcbiAgICAgIHRoaXMubnpPbkNsb3NlLmVtaXQodHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgdXBkYXRlSWNvbkNsYXNzTWFwKCk6IHZvaWQge1xuICAgIHN3aXRjaCAodGhpcy5uelR5cGUpIHtcbiAgICAgIGNhc2UgJ2Vycm9yJzpcbiAgICAgICAgdGhpcy5pY29uVHlwZSA9ICdjbG9zZS1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3N1Y2Nlc3MnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2NoZWNrLWNpcmNsZSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnaW5mbyc6XG4gICAgICAgIHRoaXMuaWNvblR5cGUgPSAnaW5mby1jaXJjbGUnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICB0aGlzLmljb25UeXBlID0gJ2V4Y2xhbWF0aW9uLWNpcmNsZSc7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekRlc2NyaXB0aW9uKSB7XG4gICAgICB0aGlzLmljb25UaGVtZSA9ICdvdXRsaW5lJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pY29uVGhlbWUgPSBgZmlsbGA7XG4gICAgfVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLm56U2hvd0ljb24pIHtcbiAgICAgIHRoaXMuaXNTaG93SWNvblNldCA9IHRydWU7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56RGVzY3JpcHRpb24gfHwgY2hhbmdlcy5uelR5cGUpIHtcbiAgICAgIHRoaXMudXBkYXRlSWNvbkNsYXNzTWFwKCk7XG4gICAgfVxuICAgIGlmIChjaGFuZ2VzLm56VHlwZSkge1xuICAgICAgdGhpcy5pc1R5cGVTZXQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoY2hhbmdlcy5uekJhbm5lcikge1xuICAgICAgaWYgKCF0aGlzLmlzVHlwZVNldCkge1xuICAgICAgICB0aGlzLm56VHlwZSA9ICd3YXJuaW5nJztcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5pc1Nob3dJY29uU2V0KSB7XG4gICAgICAgIHRoaXMubnpTaG93SWNvbiA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=