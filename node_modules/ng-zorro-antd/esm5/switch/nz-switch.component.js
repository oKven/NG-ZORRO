/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from '../core/util/convert';
var NzSwitchComponent = /** @class */ (function () {
    function NzSwitchComponent(cdr, focusMonitor) {
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = function () { return null; };
        this.onTouched = function () { return null; };
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzSwitchComponent.prototype.onClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if ((!this.nzDisabled) && (!this.nzLoading) && (!this.nzControl)) {
            this.updateValue(!this.checked);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSwitchComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSwitchComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.nzControl) {
            if (e.keyCode === LEFT_ARROW) { // Left
                // Left
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) { // Right
                // Right
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) { // Space, Enter
                // Space, Enter
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.switchElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(function (focusOrigin) {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () { return _this.onTouched(); });
            }
        });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-switch',
                    preserveWhitespaces: false,
                    template: "<button type=\"button\" #switchElement\n  nz-wave\n  class=\"ant-switch\"\n  [disabled]=\"nzDisabled\"\n  [class.ant-switch-checked]=\"checked\"\n  [class.ant-switch-loading]=\"nzLoading\"\n  [class.ant-switch-disabled]=\"nzDisabled\"\n  [class.ant-switch-small]=\"nzSize === 'small'\"\n  [nzWaveExtraNode]=\"true\"\n  (keydown)=\"onKeyDown($event)\">\n  <i *ngIf=\"nzLoading\" nz-icon type=\"loading\" class=\"ant-switch-loading-icon\"></i>\n  <span class=\"ant-switch-inner\">\n    <span>\n      <ng-container *ngIf=\"checked\">\n        <ng-container *nzStringTemplateOutlet=\"nzCheckedChildren\">{{ nzCheckedChildren }}</ng-container>\n      </ng-container>\n      <ng-container *ngIf=\"!checked\">\n        <ng-container *nzStringTemplateOutlet=\"nzUnCheckedChildren\">{{ nzUnCheckedChildren }}</ng-container>\n      </ng-container>\n    </span>\n  </span>\n</button>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef(function () { return NzSwitchComponent; }),
                            multi: true
                        }
                    ],
                    styles: ["\n    nz-switch {\n      display: inline-block;\n    }"]
                }] }
    ];
    /** @nocollapse */
    NzSwitchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzSwitchComponent.propDecorators = {
        switchElement: [{ type: ViewChild, args: ['switchElement',] }],
        nzLoading: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzControl: [{ type: Input }],
        nzCheckedChildren: [{ type: Input }],
        nzUnCheckedChildren: [{ type: Input }],
        nzSize: [{ type: Input }],
        onClick: [{ type: HostListener, args: ['click', ['$event'],] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzLoading", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzDisabled", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzControl", void 0);
    return NzSwitchComponent;
}());
export { NzSwitchComponent };
function NzSwitchComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSwitchComponent.prototype.checked;
    /** @type {?} */
    NzSwitchComponent.prototype.switchElement;
    /** @type {?} */
    NzSwitchComponent.prototype.onChange;
    /** @type {?} */
    NzSwitchComponent.prototype.onTouched;
    /** @type {?} */
    NzSwitchComponent.prototype.nzLoading;
    /** @type {?} */
    NzSwitchComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSwitchComponent.prototype.nzControl;
    /** @type {?} */
    NzSwitchComponent.prototype.nzCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzUnCheckedChildren;
    /** @type {?} */
    NzSwitchComponent.prototype.nzSize;
    /** @type {?} */
    NzSwitchComponent.prototype.cdr;
    /** @type {?} */
    NzSwitchComponent.prototype.focusMonitor;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJzd2l0Y2gvbnotc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUUsT0FBTyxFQUNMLFVBQVUsRUFFVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7O0lBdUVsRCwyQkFBb0IsR0FBc0IsRUFBVSxZQUEwQjtRQUExRCxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBakQ5RSxlQUFVLEtBQUssQ0FBQztRQUVoQixnQkFBcUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUM7UUFDaEQsaUJBQXdCLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ25DLGlCQUFxQyxLQUFLLENBQUM7UUFDM0Msa0JBQXNDLEtBQUssQ0FBQztRQUM1QyxpQkFBcUMsS0FBSyxDQUFDO0tBNEMxQzs7Ozs7SUF0Q0QsbUNBQU87Ozs7SUFEUCxVQUNRLENBQWE7UUFDbkIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJ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STtvQkFDM0MsU0FBUyxFQUFZO3dCQUNuQjs0QkFDRSxPQUFPLEVBQU0saUJBQWlCOzRCQUM5QixXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxpQkFBaUIsRUFBakIsQ0FBaUIsQ0FBQzs0QkFDaEQsS0FBSyxFQUFRLElBQUk7eUJBQ2xCO3FCQUNGOzZCQUNzQix3REFHbkI7aUJBRUw7Ozs7Z0JBaENDLGlCQUFpQjtnQkFOVixZQUFZOzs7Z0NBeUNsQixTQUFTLFNBQUMsZUFBZTs0QkFHekIsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7b0NBQ0wsS0FBSztzQ0FDTCxLQUFLO3lCQUNMLEtBQUs7MEJBRUwsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFFLFFBQVEsQ0FBRTs7O1FBUHpCLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OztRQUNkLFlBQVksRUFBRTs7OzRCQTlDMUI7O1NBdUNhLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IEVOVEVSLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTnpTaXplRFNUeXBlIH0gZnJvbSAnLi4vY29yZS90eXBlcy9zaXplJztcblxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXN3aXRjaCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1zd2l0Y2guY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByb3ZpZGVycyAgICAgICAgICA6IFtcbiAgICB7XG4gICAgICBwcm92aWRlICAgIDogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelN3aXRjaENvbXBvbmVudCksXG4gICAgICBtdWx0aSAgICAgIDogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogWyBgXG4gICAgbnotc3dpdGNoIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56U3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQge1xuICBjaGVja2VkID0gZmFsc2U7XG4gIEBWaWV3Q2hpbGQoJ3N3aXRjaEVsZW1lbnQnKSBwcml2YXRlIHN3aXRjaEVsZW1lbnQ6IEVsZW1lbnRSZWY7XG4gIG9uQ2hhbmdlOiAodmFsdWU6IGJvb2xlYW4pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpMb2FkaW5nID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpc2FibGVkID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekNvbnRyb2wgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpDaGVja2VkQ2hpbGRyZW46IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuelVuQ2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcbiAgQElucHV0KCkgbnpTaXplOiBOelNpemVEU1R5cGU7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snLCBbICckZXZlbnQnIF0pXG4gIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoKCF0aGlzLm56RGlzYWJsZWQpICYmICghdGhpcy5uekxvYWRpbmcpICYmICghdGhpcy5uekNvbnRyb2wpKSB7XG4gICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZVZhbHVlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2hlY2tlZCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmNoZWNrZWQpO1xuICAgIH1cbiAgfVxuXG4gIG9uS2V5RG93bihlOiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLm56Q29udHJvbCkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gTEVGVF9BUlJPVykgeyAvLyBMZWZ0XG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoZmFsc2UpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHsgLy8gUmlnaHRcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZSh0cnVlKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFNQQUNFIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHsgLy8gU3BhY2UsIEVudGVyXG4gICAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuY2hlY2tlZCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnN3aXRjaEVsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2tleWJvYXJkJyk7XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIHRoaXMuc3dpdGNoRWxlbWVudC5uYXRpdmVFbGVtZW50LmJsdXIoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcikge1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5zd2l0Y2hFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XG4gICAgICBpZiAoIWZvY3VzT3JpZ2luKSB7XG4gICAgICAgIC8vIFdoZW4gYSBmb2N1c2VkIGVsZW1lbnQgYmVjb21lcyBkaXNhYmxlZCwgdGhlIGJyb3dzZXIgKmltbWVkaWF0ZWx5KiBmaXJlcyBhIGJsdXIgZXZlbnQuXG4gICAgICAgIC8vIEFuZ3VsYXIgZG9lcyBub3QgZXhwZWN0IGV2ZW50cyB0byBiZSByYWlzZWQgZHVyaW5nIGNoYW5nZSBkZXRlY3Rpb24sIHNvIGFueSBzdGF0ZSBjaGFuZ2VcbiAgICAgICAgLy8gKHN1Y2ggYXMgYSBmb3JtIGNvbnRyb2wncyAnbmctdG91Y2hlZCcpIHdpbGwgY2F1c2UgYSBjaGFuZ2VkLWFmdGVyLWNoZWNrZWQgZXJyb3IuXG4gICAgICAgIC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy8xNzc5My4gVG8gd29yayBhcm91bmQgdGhpcywgd2UgZGVmZXJcbiAgICAgICAgLy8gdGVsbGluZyB0aGUgZm9ybSBjb250cm9sIGl0IGhhcyBiZWVuIHRvdWNoZWQgdW50aWwgdGhlIG5leHQgdGljay5cbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBib29sZWFuKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19