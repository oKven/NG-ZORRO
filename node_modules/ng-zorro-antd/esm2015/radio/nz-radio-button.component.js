/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { DOCUMENT } from '@angular/common';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Inject, Renderer2, ViewEncapsulation } from '@angular/core';
import { FocusMonitor } from '@angular/cdk/a11y';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzRadioComponent } from './nz-radio.component';
export class NzRadioButtonComponent extends NzRadioComponent {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     * @param {?} document
     * @param {?} cdr
     * @param {?} focusMonitor
     */
    constructor(elementRef, renderer, document, cdr, focusMonitor) {
        super(elementRef, renderer, document, cdr, focusMonitor);
    }
}
NzRadioButtonComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-radio-button]',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => NzRadioComponent),
                        multi: true
                    },
                    {
                        provide: NzRadioComponent,
                        useExisting: forwardRef(() => NzRadioButtonComponent)
                    }
                ],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<span class=\"ant-radio-button\" [class.ant-radio-button-checked]=\"checked\" [class.ant-radio-button-disabled]=\"nzDisabled\">\n  <input type=\"radio\" #inputElement class=\"ant-radio-button-input\" [disabled]=\"nzDisabled\" [checked]=\"checked\" [attr.name]=\"name\">\n  <span class=\"ant-radio-button-inner\"></span>\n</span>\n<span><ng-content></ng-content></span>",
                host: {
                    '[class.ant-radio-button-wrapper]': 'true',
                    '[class.ant-radio-button-wrapper-checked]': 'checked',
                    '[class.ant-radio-button-wrapper-disabled]': 'nzDisabled'
                }
            }] }
];
/** @nocollapse */
NzRadioButtonComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ChangeDetectorRef },
    { type: FocusMonitor }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcmFkaW8tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJyYWRpby9uei1yYWRpby1idXR0b24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDM0MsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBeUJ4RCxNQUFNLE9BQU8sc0JBQXVCLFNBQVEsZ0JBQWdCOzs7Ozs7OztJQUUxRCxZQUFZLFVBQXNCLEVBQUUsUUFBbUIsRUFBb0IsUUFBYSxFQUFFLEdBQXNCLEVBQUUsWUFBMEI7UUFDMUksS0FBSyxDQUFDLFVBQVUsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztLQUMxRDs7O1lBM0JGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsbUJBQW1CO2dCQUN4QyxTQUFTLEVBQVk7b0JBQ25CO3dCQUNFLE9BQU8sRUFBTSxpQkFBaUI7d0JBQzlCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7d0JBQy9DLEtBQUssRUFBUSxJQUFJO3FCQUNsQjtvQkFDRDt3QkFDRSxPQUFPLEVBQU0sZ0JBQWdCO3dCQUM3QixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHNCQUFzQixDQUFDO3FCQUN0RDtpQkFDRjtnQkFDRCxhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLDRYQUF1RDtnQkFDdkQsSUFBSSxFQUFpQjtvQkFDbkIsa0NBQWtDLEVBQVcsTUFBTTtvQkFDbkQsMENBQTBDLEVBQUcsU0FBUztvQkFDdEQsMkNBQTJDLEVBQUUsWUFBWTtpQkFDMUQ7YUFDRjs7OztZQWhDQyxVQUFVO1lBRVYsU0FBUzs0Q0FpQ2lELE1BQU0sU0FBQyxRQUFRO1lBckN6RSxpQkFBaUI7WUFRVixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRE9DVU1FTlQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtcbiAgZm9yd2FyZFJlZixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEluamVjdCxcbiAgUmVuZGVyZXIyLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xuaW1wb3J0IHsgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOelJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi9uei1yYWRpby5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ1tuei1yYWRpby1idXR0b25dJyxcbiAgcHJvdmlkZXJzICAgICAgICAgIDogW1xuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE56UmFkaW9Db21wb25lbnQpLFxuICAgICAgbXVsdGkgICAgICA6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGUgICAgOiBOelJhZGlvQ29tcG9uZW50LFxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gTnpSYWRpb0J1dHRvbkNvbXBvbmVudClcbiAgICB9XG4gIF0sXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXJhZGlvLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1yYWRpby1idXR0b24td3JhcHBlcl0nICAgICAgICAgOiAndHJ1ZScsXG4gICAgJ1tjbGFzcy5hbnQtcmFkaW8tYnV0dG9uLXdyYXBwZXItY2hlY2tlZF0nIDogJ2NoZWNrZWQnLFxuICAgICdbY2xhc3MuYW50LXJhZGlvLWJ1dHRvbi13cmFwcGVyLWRpc2FibGVkXSc6ICduekRpc2FibGVkJ1xuICB9XG59KVxuZXhwb3J0IGNsYXNzIE56UmFkaW9CdXR0b25Db21wb25lbnQgZXh0ZW5kcyBOelJhZGlvQ29tcG9uZW50IHtcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xuICBjb25zdHJ1Y3RvcihlbGVtZW50UmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudDogYW55LCBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcikge1xuICAgIHN1cGVyKGVsZW1lbnRSZWYsIHJlbmRlcmVyLCBkb2N1bWVudCwgY2RyLCBmb2N1c01vbml0b3IpO1xuICB9XG59XG4iXX0=