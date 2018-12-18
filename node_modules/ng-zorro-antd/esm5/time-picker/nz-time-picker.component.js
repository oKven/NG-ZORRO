/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkOverlayOrigin, Overlay, OverlayPositionBuilder } from '@angular/cdk/overlay';
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NzUpdateHostClassService as UpdateCls } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { toBoolean } from '../core/util/convert';
import { NzI18nService as I18n } from '../i18n/nz-i18n.service';
var NzTimePickerComponent = /** @class */ (function () {
    function NzTimePickerComponent(element, renderer, overlay, positionBuilder, i18n, updateCls) {
        this.element = element;
        this.renderer = renderer;
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.i18n = i18n;
        this.updateCls = updateCls;
        this._disabled = false;
        this._value = null;
        this._allowEmpty = true;
        this._autoFocus = false;
        this._hideDisabledOptions = false;
        this.isInit = false;
        this.overlayPositions = [{
                originX: 'start',
                originY: 'top',
                overlayX: 'end',
                overlayY: 'top',
                offsetX: 0,
                offsetY: 0
            }];
        this.nzSize = null;
        this.nzHourStep = 1;
        this.nzMinuteStep = 1;
        this.nzSecondStep = 1;
        this.nzClearText = 'clear';
        this.nzPopupClassName = '';
        this.nzPlaceHolder = '';
        this.nzDefaultOpenValue = new Date();
        this.nzFormat = 'HH:mm:ss';
        this.nzOpen = false;
        this.nzOpenChange = new EventEmitter();
    }
    Object.defineProperty(NzTimePickerComponent.prototype, "nzHideDisabledOptions", {
        get: /**
         * @return {?}
         */
        function () {
            return this._hideDisabledOptions;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._hideDisabledOptions = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerComponent.prototype, "nzAllowEmpty", {
        get: /**
         * @return {?}
         */
        function () {
            return this._allowEmpty;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._allowEmpty = toBoolean(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerComponent.prototype, "nzAutoFocus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._autoFocus;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._autoFocus = toBoolean(value);
            this.updateAutoFocus();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerComponent.prototype, "nzDisabled", {
        get: /**
         * @return {?}
         */
        function () {
            return this._disabled;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._disabled = toBoolean(value);
            /** @type {?} */
            var input = /** @type {?} */ (this.inputRef.nativeElement);
            if (this._disabled) {
                this.renderer.setAttribute(input, 'disabled', '');
            }
            else {
                this.renderer.removeAttribute(input, 'disabled');
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzTimePickerComponent.prototype, "value", {
        get: /**
         * @return {?}
         */
        function () {
            return this._value;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._value = value;
            if (this._onChange) {
                this._onChange(this.value);
            }
            if (this._onTouched) {
                this._onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.open = /**
     * @return {?}
     */
    function () {
        if (this.nzDisabled) {
            return;
        }
        this.nzOpen = true;
        this.nzOpenChange.emit(this.nzOpen);
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this.nzOpen = false;
        this.nzOpenChange.emit(this.nzOpen);
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.updateAutoFocus = /**
     * @return {?}
     */
    function () {
        if (this.isInit && !this.nzDisabled) {
            if (this.nzAutoFocus) {
                this.renderer.setAttribute(this.inputRef.nativeElement, 'autofocus', 'autofocus');
            }
            else {
                this.renderer.removeAttribute(this.inputRef.nativeElement, 'autofocus');
            }
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        var _a;
        this.updateCls.updateHostClass(this.element.nativeElement, (_a = {},
            _a["ant-time-picker"] = true,
            _a["ant-time-picker-" + this.nzSize] = isNotNil(this.nzSize),
            _a));
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        if (this.inputRef.nativeElement) {
            this.inputRef.nativeElement.blur();
        }
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setClassMap();
        this.origin = new CdkOverlayOrigin(this.element);
    };
    /**
     * @return {?}
     */
    NzTimePickerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.isInit = true;
        this.updateAutoFocus();
    };
    /**
     * @param {?} time
     * @return {?}
     */
    NzTimePickerComponent.prototype.writeValue = /**
     * @param {?} time
     * @return {?}
     */
    function (time) {
        this._value = time;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzTimePickerComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this._onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzTimePickerComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
    };
    NzTimePickerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-time-picker',
                    template: "<input\n  type=\"text\"\n  [nzTime]=\"nzFormat\"\n  class=\"ant-time-picker-input\"\n  [placeholder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n  [(ngModel)]=\"value\"\n  readonly=\"readonly\"\n  (click)=\"open()\"\n  #inputElement>\n<span class=\"ant-time-picker-icon\">\n  <i nz-icon type=\"clock-circle\"></i>\n</span>\n\n<ng-template\n  cdkConnectedOverlay\n  cdkConnectedOverlayHasBackdrop\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayOpen]=\"nzOpen\"\n  [cdkConnectedOverlayOffsetY]=\"-2\"\n  (detach)=\"close()\"\n  (backdropClick)=\"close()\">\n  <nz-time-picker-panel\n    [ngClass]=\"nzPopupClassName\"\n    [@dropDownAnimation]=\"'bottom'\"\n    [format]=\"nzFormat\"\n    [nzHourStep]=\"nzHourStep\"\n    [nzMinuteStep]=\"nzMinuteStep\"\n    [nzSecondStep]=\"nzSecondStep\"\n    [nzDisabledHours]=\"nzDisabledHours\"\n    [nzDisabledMinutes]=\"nzDisabledMinutes\"\n    [nzDisabledSeconds]=\"nzDisabledSeconds\"\n    [nzPlaceHolder]=\"nzPlaceHolder || ('TimePicker.placeholder' | nzI18n)\"\n    [nzHideDisabledOptions]=\"nzHideDisabledOptions\"\n    [nzDefaultOpenValue]=\"nzDefaultOpenValue\"\n    [nzAddOn]=\"nzAddOn\"\n    [opened]=\"nzOpen\"\n    [nzClearText]=\"nzClearText\"\n    [nzAllowEmpty]=\"nzAllowEmpty\"\n    (timeClear)=\"close()\"\n    [(ngModel)]=\"value\">\n  </nz-time-picker-panel>\n</ng-template>\n\n",
                    animations: [
                        trigger('dropDownAnimation', [
                            state('void', style({
                                opacity: 0,
                                display: 'none'
                            })),
                            state('*', style({
                                opacity: 1,
                                transform: 'scaleY(1)',
                                transformOrigin: '0% 0%'
                            })),
                            transition('void => *', [
                                style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }),
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)')
                            ]),
                            transition('* => void', [
                                animate('100ms cubic-bezier(0.755, 0.05, 0.855, 0.06)', style({
                                    opacity: 0,
                                    transform: 'scaleY(0.8)',
                                    transformOrigin: '0% 0%'
                                }))
                            ])
                        ])
                    ],
                    providers: [
                        UpdateCls,
                        { provide: NG_VALUE_ACCESSOR, useExisting: NzTimePickerComponent, multi: true }
                    ]
                }] }
    ];
    /** @nocollapse */
    NzTimePickerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: Overlay },
        { type: OverlayPositionBuilder },
        { type: I18n },
        { type: UpdateCls }
    ]; };
    NzTimePickerComponent.propDecorators = {
        inputRef: [{ type: ViewChild, args: ['inputElement',] }],
        nzSize: [{ type: Input }],
        nzHourStep: [{ type: Input }],
        nzMinuteStep: [{ type: Input }],
        nzSecondStep: [{ type: Input }],
        nzClearText: [{ type: Input }],
        nzPopupClassName: [{ type: Input }],
        nzPlaceHolder: [{ type: Input }],
        nzAddOn: [{ type: Input }],
        nzDefaultOpenValue: [{ type: Input }],
        nzDisabledHours: [{ type: Input }],
        nzDisabledMinutes: [{ type: Input }],
        nzDisabledSeconds: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzOpen: [{ type: Input }],
        nzOpenChange: [{ type: Output }],
        nzHideDisabledOptions: [{ type: Input }],
        nzAllowEmpty: [{ type: Input }],
        nzAutoFocus: [{ type: Input }],
        nzDisabled: [{ type: Input }]
    };
    return NzTimePickerComponent;
}());
export { NzTimePickerComponent };
function NzTimePickerComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzTimePickerComponent.prototype._disabled;
    /** @type {?} */
    NzTimePickerComponent.prototype._value;
    /** @type {?} */
    NzTimePickerComponent.prototype._allowEmpty;
    /** @type {?} */
    NzTimePickerComponent.prototype._autoFocus;
    /** @type {?} */
    NzTimePickerComponent.prototype._onChange;
    /** @type {?} */
    NzTimePickerComponent.prototype._onTouched;
    /** @type {?} */
    NzTimePickerComponent.prototype._hideDisabledOptions;
    /** @type {?} */
    NzTimePickerComponent.prototype.isInit;
    /** @type {?} */
    NzTimePickerComponent.prototype.origin;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlayPositions;
    /** @type {?} */
    NzTimePickerComponent.prototype.inputRef;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSize;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzHourStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzMinuteStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzSecondStep;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzClearText;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPopupClassName;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzAddOn;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDefaultOpenValue;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledHours;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledMinutes;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzDisabledSeconds;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzFormat;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpen;
    /** @type {?} */
    NzTimePickerComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzTimePickerComponent.prototype.element;
    /** @type {?} */
    NzTimePickerComponent.prototype.renderer;
    /** @type {?} */
    NzTimePickerComponent.prototype.overlay;
    /** @type {?} */
    NzTimePickerComponent.prototype.positionBuilder;
    /** @type {?} */
    NzTimePickerComponent.prototype.i18n;
    /** @type {?} */
    NzTimePickerComponent.prototype.updateCls;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGltZS1waWNrZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRpbWUtcGlja2VyL256LXRpbWUtcGlja2VyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLE9BQU8sRUFDUCxLQUFLLEVBQ0wsS0FBSyxFQUNMLFVBQVUsRUFDVixPQUFPLEVBQ1IsTUFBTSxxQkFBcUIsQ0FBQztBQUM3QixPQUFPLEVBQUUsZ0JBQWdCLEVBQTBCLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2pILE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBd0IsaUJBQWlCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV6RSxPQUFPLEVBQUUsd0JBQXdCLElBQUksU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDbkcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxJQUFJLElBQUksRUFBRSxNQUFNLHlCQUF5QixDQUFDOztJQTRLOUQsK0JBQW9CLE9BQW1CLEVBQ25CLFVBQ0EsU0FDQSxpQkFDQSxNQUNBO1FBTEEsWUFBTyxHQUFQLE9BQU8sQ0FBWTtRQUNuQixhQUFRLEdBQVIsUUFBUTtRQUNSLFlBQU8sR0FBUCxPQUFPO1FBQ1Asb0JBQWUsR0FBZixlQUFlO1FBQ2YsU0FBSSxHQUFKLElBQUk7UUFDSixjQUFTLEdBQVQsU0FBUzt5QkExSVQsS0FBSztzQkFDSyxJQUFJOzJCQUNaLElBQUk7MEJBQ0wsS0FBSztvQ0FHSyxLQUFLO1FB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Q0YsT0FBTyxDQUFDLDhDQUE4QyxDQUFDOzZCQUN4RCxDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLE9BQU8sQ0FBQyw4Q0FBOEMsRUFBRSxLQUFLLENBQUM7b0NBQzVELE9BQU8sRUFBVSxDQUFDO29DQUNsQixTQUFTLEVBQVEsYUFBYTtvQ0FDOUIsZUFBZSxFQUFFLE9BQU87aUNBQ3pCLENBQUMsQ0FBQzs2QkFDSixDQUFDO3lCQUNILENBQUM7cUJBQ0g7b0JBQ0QsU0FBUyxFQUFJO3dCQUNYLFNBQVM7d0JBQ1QsRUFBRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7cUJBQ2hGO2lCQUNGOzs7O2dCQW5EQyxVQUFVO2dCQUtWLFNBQVM7Z0JBVHdDLE9BQU87Z0JBQUUsc0JBQXNCO2dCQWtCeEQsSUFBSTtnQkFITyxTQUFTOzs7MkJBMkQzQyxTQUFTLFNBQUMsY0FBYzt5QkFDeEIsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7K0JBQ0wsS0FBSzs4QkFDTCxLQUFLO21DQUNMLEtBQUs7Z0NBQ0wsS0FBSzswQkFDTCxLQUFLO3FDQUNMLEtBQUs7a0NBQ0wsS0FBSztvQ0FDTCxLQUFLO29DQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOytCQUNMLE1BQU07d0NBRU4sS0FBSzsrQkFTTCxLQUFLOzhCQVNMLEtBQUs7NkJBVUwsS0FBSzs7Z0NBOUhSOztTQStEYSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhbmltYXRlLFxuICBzdGF0ZSxcbiAgc3R5bGUsXG4gIHRyYW5zaXRpb24sXG4gIHRyaWdnZXJcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDZGtPdmVybGF5T3JpZ2luLCBDb25uZWN0aW9uUG9zaXRpb25QYWlyLCBPdmVybGF5LCBPdmVybGF5UG9zaXRpb25CdWlsZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgZHJvcERvd25BbmltYXRpb24gfSBmcm9tICcuLi9jb3JlL2FuaW1hdGlvbi9kcm9wZG93bi1hbmltYXRpb25zJztcbmltcG9ydCB7IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBhcyBVcGRhdGVDbHMgfSBmcm9tICcuLi9jb3JlL3NlcnZpY2VzL3VwZGF0ZS1ob3N0LWNsYXNzLnNlcnZpY2UnO1xuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICcuLi9jb3JlL3V0aWwvY2hlY2snO1xuaW1wb3J0IHsgdG9Cb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSBhcyBJMThuIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICA6ICduei10aW1lLXBpY2tlcicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uei10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCcsXG4gIGFuaW1hdGlvbnMgOiBbXG4gICAgdHJpZ2dlcignZHJvcERvd25BbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgndm9pZCcsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgICB9KSksXG4gICAgICBzdGF0ZSgnKicsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgICAgICAgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMC44KScsXG4gICAgICAgICAgdHJhbnNmb3JtT3JpZ2luOiAnMCUgMCUnXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcxMDBtcyBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUsIDAuODU1LCAwLjA2KScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgYW5pbWF0ZSgnMTAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1LCAwLjg1NSwgMC4wNiknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHByb3ZpZGVycyAgOiBbXG4gICAgVXBkYXRlQ2xzLFxuICAgIHsgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsIHVzZUV4aXN0aW5nOiBOelRpbWVQaWNrZXJDb21wb25lbnQsIG11bHRpOiB0cnVlIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOelRpbWVQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBfdmFsdWU6IERhdGUgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBfYWxsb3dFbXB0eSA9IHRydWU7XG4gIHByaXZhdGUgX2F1dG9Gb2N1cyA9IGZhbHNlO1xuICBwcml2YXRlIF9vbkNoYW5nZTogKHZhbHVlOiBEYXRlKSA9PiB2b2lkO1xuICBwcml2YXRlIF9vblRvdWNoZWQ6ICgpID0+IHZvaWQ7XG4gIHByaXZhdGUgX2hpZGVEaXNhYmxlZE9wdGlvbnMgPSBmYWxzZTtcbiAgaXNJbml0ID0gZmFsc2U7XG4gIG9yaWdpbjogQ2RrT3ZlcmxheU9yaWdpbjtcbiAgb3ZlcmxheVBvc2l0aW9uczogQ29ubmVjdGlvblBvc2l0aW9uUGFpcltdID0gWyB7XG4gICAgb3JpZ2luWCA6ICdzdGFydCcsXG4gICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgb2Zmc2V0WCA6IDAsXG4gICAgb2Zmc2V0WSA6IDBcbiAgfSBdO1xuICBAVmlld0NoaWxkKCdpbnB1dEVsZW1lbnQnKSBpbnB1dFJlZjogRWxlbWVudFJlZjtcbiAgQElucHV0KCkgbnpTaXplOiBzdHJpbmcgfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgbnpIb3VyU3RlcCA9IDE7XG4gIEBJbnB1dCgpIG56TWludXRlU3RlcCA9IDE7XG4gIEBJbnB1dCgpIG56U2Vjb25kU3RlcCA9IDE7XG4gIEBJbnB1dCgpIG56Q2xlYXJUZXh0ID0gJ2NsZWFyJztcbiAgQElucHV0KCkgbnpQb3B1cENsYXNzTmFtZSA9ICcnO1xuICBASW5wdXQoKSBuelBsYWNlSG9sZGVyID0gJyc7XG4gIEBJbnB1dCgpIG56QWRkT246IFRlbXBsYXRlUmVmPHZvaWQ+O1xuICBASW5wdXQoKSBuekRlZmF1bHRPcGVuVmFsdWUgPSBuZXcgRGF0ZSgpO1xuICBASW5wdXQoKSBuekRpc2FibGVkSG91cnM6ICgpID0+IG51bWJlcltdO1xuICBASW5wdXQoKSBuekRpc2FibGVkTWludXRlczogKGhvdXI6IG51bWJlcikgPT4gbnVtYmVyW107XG4gIEBJbnB1dCgpIG56RGlzYWJsZWRTZWNvbmRzOiAoaG91cjogbnVtYmVyLCBtaW51dGU6IG51bWJlcikgPT4gbnVtYmVyW107XG4gIEBJbnB1dCgpIG56Rm9ybWF0ID0gJ0hIOm1tOnNzJztcbiAgQElucHV0KCkgbnpPcGVuID0gZmFsc2U7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XG5cbiAgQElucHV0KClcbiAgc2V0IG56SGlkZURpc2FibGVkT3B0aW9ucyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2hpZGVEaXNhYmxlZE9wdGlvbnMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICB9XG5cbiAgZ2V0IG56SGlkZURpc2FibGVkT3B0aW9ucygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5faGlkZURpc2FibGVkT3B0aW9ucztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekFsbG93RW1wdHkodmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hbGxvd0VtcHR5ID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekFsbG93RW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2FsbG93RW1wdHk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpBdXRvRm9jdXModmFsdWU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLl9hdXRvRm9jdXMgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIHRoaXMudXBkYXRlQXV0b0ZvY3VzKCk7XG4gIH1cblxuICBnZXQgbnpBdXRvRm9jdXMoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2F1dG9Gb2N1cztcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBuekRpc2FibGVkKHZhbHVlOiBib29sZWFuIHwgc3RyaW5nKSB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSB0b0Jvb2xlYW4odmFsdWUpO1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50IGFzIEhUTUxJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKHRoaXMuX2Rpc2FibGVkKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShpbnB1dCwgJ2Rpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG56RGlzYWJsZWQoKTogYm9vbGVhbiB8IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlOiBEYXRlIHwgbnVsbCkge1xuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX29uQ2hhbmdlKSB7XG4gICAgICB0aGlzLl9vbkNoYW5nZSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX29uVG91Y2hlZCkge1xuICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IERhdGUgfCBudWxsIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBvcGVuKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5uek9wZW4gPSB0cnVlO1xuICAgIHRoaXMubnpPcGVuQ2hhbmdlLmVtaXQodGhpcy5uek9wZW4pO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5uek9wZW4gPSBmYWxzZTtcbiAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgfVxuXG4gIHVwZGF0ZUF1dG9Gb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luaXQgJiYgIXRoaXMubnpEaXNhYmxlZCkge1xuICAgICAgaWYgKHRoaXMubnpBdXRvRm9jdXMpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJywgJ2F1dG9mb2N1cycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVBdHRyaWJ1dGUodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50LCAnYXV0b2ZvY3VzJyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZUNscy51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHtcbiAgICAgIFsgYGFudC10aW1lLXBpY2tlcmAgXSAgICAgICAgICAgICAgIDogdHJ1ZSxcbiAgICAgIFsgYGFudC10aW1lLXBpY2tlci0ke3RoaXMubnpTaXplfWAgXTogaXNOb3ROaWwodGhpcy5uelNpemUpXG4gICAgfSk7XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbnB1dFJlZi5uYXRpdmVFbGVtZW50KSB7XG4gICAgICB0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBibHVyKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmlucHV0UmVmLm5hdGl2ZUVsZW1lbnQpIHtcbiAgICAgIHRoaXMuaW5wdXRSZWYubmF0aXZlRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBwb3NpdGlvbkJ1aWxkZXI6IE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsXG4gICAgICAgICAgICAgIHByaXZhdGUgaTE4bjogSTE4bixcbiAgICAgICAgICAgICAgcHJpdmF0ZSB1cGRhdGVDbHM6IFVwZGF0ZUNscykge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICAgIHRoaXMub3JpZ2luID0gbmV3IENka092ZXJsYXlPcmlnaW4odGhpcy5lbGVtZW50KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmlzSW5pdCA9IHRydWU7XG4gICAgdGhpcy51cGRhdGVBdXRvRm9jdXMoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodGltZTogRGF0ZSB8IG51bGwpOiB2b2lkIHtcbiAgICB0aGlzLl92YWx1ZSA9IHRpbWU7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodGltZTogRGF0ZSkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uQ2hhbmdlID0gZm47XG4gIH1cblxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShpc0Rpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxufVxuIl19