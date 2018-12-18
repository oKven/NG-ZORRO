/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
export class NzStepComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this._currentIndex = 0;
    }
    /**
     * @return {?}
     */
    get nzStatus() { return this._status; }
    /**
     * @param {?} status
     * @return {?}
     */
    set nzStatus(status) {
        this._status = status;
        this.isCustomStatus = true;
    }
    /**
     * @return {?}
     */
    get nzIcon() { return this._icon; }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzIcon(value) {
        if (!(value instanceof TemplateRef)) {
            this.isIconString = true;
            this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
        }
        else {
            this.isIconString = false;
        }
        this._icon = value;
    }
    /**
     * @return {?}
     */
    get currentIndex() { return this._currentIndex; }
    /**
     * @param {?} current
     * @return {?}
     */
    set currentIndex(current) {
        this._currentIndex = current;
        if (!this.isCustomStatus) {
            this._status = current > this.index
                ? 'finish'
                : current === this.index
                    ? this.outStatus || ''
                    : 'wait';
        }
    }
    /**
     * @return {?}
     */
    detectChanges() {
        this.cdr.detectChanges();
    }
}
NzStepComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-step',
                preserveWhitespaces: false,
                template: "<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\n<div class=\"ant-steps-item-icon\">\n  <ng-template [ngIf]=\"!showProcessDot\">\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon type=\"check\"></i></span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon type=\"close\"></i></span>\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{ index + 1 }}</span>\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\n      </ng-container>\n      <ng-template #iconTemplate>\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\n    </ng-template>\n    </span>\n  </ng-template>\n  <ng-template [ngIf]=\"showProcessDot\">\n    <span class=\"ant-steps-icon\">\n      <ng-template #processDotTemplate>\n        <span class=\"ant-steps-icon-dot\"></span>\n      </ng-template>\n      <ng-template\n        [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\"\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:nzStatus, index:index }\">\n      </ng-template>\n    </span>\n  </ng-template>\n</div>\n<div class=\"ant-steps-item-content\">\n  <div class=\"ant-steps-item-title\">\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n  </div>\n  <div class=\"ant-steps-item-description\">\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\n  </div>\n</div>\n",
                host: {
                    '[class.ant-steps-item]': 'true',
                    '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                    '[class.ant-steps-item-process]': 'nzStatus === "process"',
                    '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                    '[class.ant-steps-item-error]': 'nzStatus === "error"',
                    '[class.ant-steps-custom]': '!!nzIcon',
                    '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                }
            }] }
];
/** @nocollapse */
NzStepComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzStepComponent.propDecorators = {
    processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
    nzTitle: [{ type: Input }],
    nzDescription: [{ type: Input }],
    nzStatus: [{ type: Input }],
    nzIcon: [{ type: Input }]
};
function NzStepComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzTitle;
    /** @type {?} */
    NzStepComponent.prototype.nzDescription;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /** @type {?} */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /** @type {?} */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /** @type {?} */
    NzStepComponent.prototype._currentIndex;
    /** @type {?} */
    NzStepComponent.prototype.cdr;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic3RlcHMvbnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFvQnhJLE1BQU0sT0FBTyxlQUFlOzs7O0lBa0QxQixZQUFvQixHQUFzQjtRQUF0QixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQXRDMUMsc0JBQWlCLEtBQUssQ0FBQzt1QkFDTCxNQUFNO1FBYXhCLGtCQUFhLElBQUksQ0FBQztRQUNsQixvQkFBZSxJQUFJLENBQUM7UUFJcEIsaUJBQVksWUFBWSxDQUFDO1FBQ3pCLGFBQVEsQ0FBQyxDQUFDO1FBQ1YsWUFBTyxLQUFLLENBQUM7UUFDYixpQkFBWSxTQUFTLENBQUM7UUFDdEIsc0JBQWlCLEtBQUssQ0FBQzs2QkFhQyxDQUFDO0tBRXFCOzs7O0lBNUM5QyxJQUNJLFFBQVEsS0FBYSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRTs7Ozs7SUFDL0MsSUFBSSxRQUFRLENBQUMsTUFBYztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztLQUM1Qjs7OztJQUlELElBQ0ksTUFBTSxLQUFzQyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTs7Ozs7SUFDcEUsSUFBSSxNQUFNLENBQUMsS0FBc0M7UUFDL0MsSUFBSSxDQUFDLENBQUMsS0FBSyxZQUFZLFdBQVcsQ0FBQyxFQUFFO1lBQ25DLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDOUU7YUFBTTtZQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7S0FDcEI7Ozs7SUFZRCxJQUFJLFlBQVksS0FBYSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRTs7Ozs7SUFDekQsSUFBSSxZQUFZLENBQUMsT0FBZTtRQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSztnQkFDakMsQ0FBQyxDQUFDLFFBQVE7Z0JBQ1YsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsS0FBSztvQkFDdEIsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRTtvQkFDdEIsQ0FBQyxDQUFDLE1BQU0sQ0FBQztTQUNkO0tBQ0Y7Ozs7SUFLRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztLQUMxQjs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtnQkFDbkQsYUFBYSxFQUFRLGlCQUFpQixDQUFDLElBQUk7Z0JBQzNDLFFBQVEsRUFBYSxTQUFTO2dCQUM5QixtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixtcERBQStDO2dCQUMvQyxJQUFJLEVBQWlCO29CQUNuQix3QkFBd0IsRUFBVSxNQUFNO29CQUN4Qyw2QkFBNkIsRUFBSyxxQkFBcUI7b0JBQ3ZELGdDQUFnQyxFQUFFLHdCQUF3QjtvQkFDMUQsK0JBQStCLEVBQUcsdUJBQXVCO29CQUN6RCw4QkFBOEIsRUFBSSxzQkFBc0I7b0JBQ3hELDBCQUEwQixFQUFRLFVBQVU7b0JBQzVDLDhCQUE4QixFQUFJLHlEQUF5RDtpQkFDNUY7YUFDRjs7OztZQW5CaUMsaUJBQWlCOzs7aUNBcUJoRCxTQUFTLFNBQUMsb0JBQW9CO3NCQUU5QixLQUFLOzRCQUNMLEtBQUs7dUJBRUwsS0FBSztxQkFTTCxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBUZW1wbGF0ZVJlZiwgVmlld0NoaWxkLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ0NsYXNzVHlwZSB9IGZyb20gJy4uL2NvcmUvdHlwZXMvbmctY2xhc3MnO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uICAgIDogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotc3RlcCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zdGVwLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW1dJyAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS13YWl0XScgICA6ICduelN0YXR1cyA9PT0gXCJ3YWl0XCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tcHJvY2Vzc10nOiAnbnpTdGF0dXMgPT09IFwicHJvY2Vzc1wiJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWZpbmlzaF0nIDogJ256U3RhdHVzID09PSBcImZpbmlzaFwiJyxcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1pdGVtLWVycm9yXScgIDogJ256U3RhdHVzID09PSBcImVycm9yXCInLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWN1c3RvbV0nICAgICAgOiAnISFuekljb24nLFxuICAgICdbY2xhc3MuYW50LXN0ZXBzLW5leHQtZXJyb3JdJyAgOiAnKG91dFN0YXR1cyA9PT0gXCJlcnJvclwiKSAmJiAoY3VycmVudEluZGV4ID09PSBpbmRleCArIDEpJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56U3RlcENvbXBvbmVudCB7XG4gIEBWaWV3Q2hpbGQoJ3Byb2Nlc3NEb3RUZW1wbGF0ZScpIHByb2Nlc3NEb3RUZW1wbGF0ZTogVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgQElucHV0KCkgbnpUaXRsZTogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD47XG4gIEBJbnB1dCgpIG56RGVzY3JpcHRpb246IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpXG4gIGdldCBuelN0YXR1cygpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fc3RhdHVzOyB9XG4gIHNldCBuelN0YXR1cyhzdGF0dXM6IHN0cmluZykge1xuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcbiAgICB0aGlzLmlzQ3VzdG9tU3RhdHVzID0gdHJ1ZTtcbiAgfVxuICBpc0N1c3RvbVN0YXR1cyA9IGZhbHNlO1xuICBwcml2YXRlIF9zdGF0dXMgPSAnd2FpdCc7XG5cbiAgQElucHV0KClcbiAgZ2V0IG56SWNvbigpOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHsgcmV0dXJuIHRoaXMuX2ljb247IH1cbiAgc2V0IG56SWNvbih2YWx1ZTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xuICAgIGlmICghKHZhbHVlIGluc3RhbmNlb2YgVGVtcGxhdGVSZWYpKSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IHRydWU7XG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzSWNvblN0cmluZyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLl9pY29uID0gdmFsdWU7XG4gIH1cbiAgb2xkQVBJSWNvbiA9IHRydWU7XG4gIGlzSWNvblN0cmluZyA9IHRydWU7XG4gIHByaXZhdGUgX2ljb246IE5nQ2xhc3NUeXBlIHwgVGVtcGxhdGVSZWY8dm9pZD47XG5cbiAgY3VzdG9tUHJvY2Vzc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD4sIHN0YXR1czogc3RyaW5nLCBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxuICBkaXJlY3Rpb24gPSAnaG9yaXpvbnRhbCc7XG4gIGluZGV4ID0gMDtcbiAgbGFzdCA9IGZhbHNlO1xuICBvdXRTdGF0dXMgPSAncHJvY2Vzcyc7XG4gIHNob3dQcm9jZXNzRG90ID0gZmFsc2U7XG5cbiAgZ2V0IGN1cnJlbnRJbmRleCgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4OyB9XG4gIHNldCBjdXJyZW50SW5kZXgoY3VycmVudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fY3VycmVudEluZGV4ID0gY3VycmVudDtcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IGN1cnJlbnQgPiB0aGlzLmluZGV4XG4gICAgICAgID8gJ2ZpbmlzaCdcbiAgICAgICAgOiBjdXJyZW50ID09PSB0aGlzLmluZGV4XG4gICAgICAgICAgPyB0aGlzLm91dFN0YXR1cyB8fCAnJ1xuICAgICAgICAgIDogJ3dhaXQnO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIF9jdXJyZW50SW5kZXggPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge31cblxuICBkZXRlY3RDaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxufVxuIl19