/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
export class NzFormExplainComponent {
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
                styles: [`nz-form-explain {
      display: block;
    }`]
            }] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZm9ybS1leHBsYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJmb3JtL256LWZvcm0tZXhwbGFpbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUMxRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBeUN0RixNQUFNLE9BQU8sc0JBQXNCOzs7WUF2Q2xDLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQWEsaUJBQWlCO2dCQUN0QyxtQkFBbUIsRUFBRSxLQUFLO2dCQUMxQixhQUFhLEVBQVEsaUJBQWlCLENBQUMsSUFBSTtnQkFDM0MsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07Z0JBQ25ELFVBQVUsRUFBVztvQkFDbkIsT0FBTyxDQUFDLHNCQUFzQixFQUFFO3dCQUM5QixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUM7Z0NBQ0osT0FBTyxFQUFJLENBQUM7Z0NBQ1osU0FBUyxFQUFFLGtCQUFrQjs2QkFDOUIsQ0FBQzs0QkFDRixPQUFPLENBQUMsMkNBQTJDLEVBQUUsS0FBSyxDQUFDO2dDQUN6RCxPQUFPLEVBQUksQ0FBQztnQ0FDWixTQUFTLEVBQUUsZUFBZTs2QkFDM0IsQ0FBQyxDQUFDO3lCQUNKLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsS0FBSyxDQUFDO2dDQUNKLE9BQU8sRUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxlQUFlOzZCQUMzQixDQUFDOzRCQUNGLE9BQU8sQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLENBQUM7Z0NBQ3pELE9BQU8sRUFBSSxDQUFDO2dDQUNaLFNBQVMsRUFBRSxrQkFBa0I7NkJBQzlCLENBQUMsQ0FBQzt5QkFDSixDQUFDO3FCQUNILENBQUM7aUJBQ0g7Z0JBQ0QsOEVBQXVEO2dCQUN2RCxJQUFJLEVBQWlCO29CQUNuQiwwQkFBMEIsRUFBRSxNQUFNO2lCQUNuQzt5QkFFRzs7TUFFQTthQUVMIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotZm9ybS1leHBsYWluJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogW1xuICAgIHRyaWdnZXIoJ2Zvcm1FeHBsYWluQW5pbWF0aW9uJywgW1xuICAgICAgdHJhbnNpdGlvbigndm9pZCA9PiAqJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXG4gICAgICAgIH0pLFxuICAgICAgICBhbmltYXRlKCcwLjNzIGN1YmljLWJlemllcigwLjY0NSwgMC4wNDUsIDAuMzU1LCAxKScsIHN0eWxlKHtcbiAgICAgICAgICBvcGFjaXR5ICA6IDEsXG4gICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSdcbiAgICAgICAgfSkpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcbiAgICAgICAgc3R5bGUoe1xuICAgICAgICAgIG9wYWNpdHkgIDogMSxcbiAgICAgICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKDApJ1xuICAgICAgICB9KSxcbiAgICAgICAgYW5pbWF0ZSgnMC4zcyBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVkoLTVweCknXG4gICAgICAgIH0pKVxuICAgICAgXSlcbiAgICBdKVxuICBdLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1mb3JtLWV4cGxhaW4uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0ICAgICAgICAgICAgICAgOiB7XG4gICAgJ1tjbGFzcy5hbnQtZm9ybS1leHBsYWluXSc6ICd0cnVlJ1xuICB9LFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgICBgbnotZm9ybS1leHBsYWluIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1gXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpGb3JtRXhwbGFpbkNvbXBvbmVudCB7XG59XG4iXX0=