/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
var NzFormExplainComponent = /** @class */ (function () {
    function NzFormExplainComponent() {
    }
    NzFormExplainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-form-explain',
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('formExplainAnimation', [
                            transition('void => *', [
                                style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)'
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }))
                            ]),
                            transition('* => void', [
                                style({
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }),
                                animate('0.3s cubic-bezier(0.645, 0.045, 0.355, 1)', style({
                                    opacity: 0,
                                    transform: 'translateY(-5px)'
                                }))
                            ])
                        ])
                    ],
                    template: "<div [@formExplainAnimation]>\n  <ng-content></ng-content>\n</div>",
                    host: {
                        '[class.ant-form-explain]': 'true'
                    },
                    styles: ["nz-form-explain {\n      display: block;\n    }"]
                }] }
    ];
    return NzFormExplainComponent;
}());
export { NzFormExplainComponent };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztnQkFFckYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBYSxpQkFBaUI7b0JBQ3RDLG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsVUFBVSxFQUFXO3dCQUNuQixPQUFPLENBQUMsc0JBQXNCLEVBQUU7NEJBQzlCLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLEtBQUssQ0FBQztvQ0FDSixPQUFPLEVBQUksQ0FBQztvQ0FDWixTQUFTLEVBQUUsa0JBQWtCO2lDQUM5QixDQUFDO2dDQUNGLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLENBQUM7b0NBQ3pELE9BQU8sRUFBSSxDQUFDO29DQUNaLFNBQVMsRUFBRSxlQUFlO2lDQUMzQixDQUFDLENBQUM7NkJBQ0osQ0FBQzs0QkFDRixVQUFVLENBQUMsV0FBVyxFQUFFO2dDQUN0QixLQUFLLENBQUM7b0NBQ0osT0FBTyxFQUFJLENBQUM7b0NBQ1osU0FBUyxFQUFFLGVBQWU7aUNBQzNCLENBQUM7Z0NBQ0YsT0FBTyxDQUFDLDJDQUEyQyxFQUFFLEtBQUssQ0FBQztvQ0FDekQsT0FBTyxFQUFJLENBQUM7b0NBQ1osU0FBUyxFQUFFLGtCQUFrQjtpQ0FDOUIsQ0FBQyxDQUFDOzZCQUNKLENBQUM7eUJBQ0gsQ0FBQztxQkFDSDtvQkFDRCw4RUFBdUQ7b0JBQ3ZELElBQUksRUFBaUI7d0JBQ25CLDBCQUEwQixFQUFFLE1BQU07cUJBQ25DOzZCQUVHLGlEQUVBO2lCQUVMOztpQ0F6Q0Q7O1NBMENhLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFuaW1hdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWZvcm0tZXhwbGFpbicsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdmb3JtRXhwbGFpbkFuaW1hdGlvbicsIFtcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAxLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoMCknXG4gICAgICAgIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXG4gICAgICAgIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzAuM3MgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpJywgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMCxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC01cHgpJ1xuICAgICAgICB9KSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdCAgICAgICAgICAgICAgIDoge1xuICAgICdbY2xhc3MuYW50LWZvcm0tZXhwbGFpbl0nOiAndHJ1ZSdcbiAgfSxcbiAgc3R5bGVzICAgICAgICAgICAgIDogW1xuICAgICAgYG56LWZvcm0tZXhwbGFpbiB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9YFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Rm9ybUV4cGxhaW5Db21wb25lbnQge1xufVxuIl19