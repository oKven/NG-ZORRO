/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzInputModule } from '../input/nz-input.module';
import { NzCascaderOptionComponent } from './nz-cascader-li.component';
import { NzCascaderComponent } from './nz-cascader.component';
var NzCascaderModule = /** @class */ (function () {
    function NzCascaderModule() {
    }
    NzCascaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule, OverlayModule, NzInputModule, NzIconModule, NzI18nModule],
                    declarations: [
                        NzCascaderComponent,
                        NzCascaderOptionComponent
                    ],
                    exports: [
                        NzCascaderComponent
                    ]
                },] }
    ];
    return NzCascaderModule;
}());
export { NzCascaderModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhc2NhZGVyL256LWNhc2NhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUU3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Z0JBRTdELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLFlBQVksQ0FBRTtvQkFDckcsWUFBWSxFQUFFO3dCQUNaLG1CQUFtQjt3QkFDbkIseUJBQXlCO3FCQUMxQjtvQkFDRCxPQUFPLEVBQU87d0JBQ1osbUJBQW1CO3FCQUNwQjtpQkFDRjs7MkJBcEJEOztTQXFCYSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPdmVybGF5TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcbmltcG9ydCB7IE56SW5wdXRNb2R1bGUgfSBmcm9tICcuLi9pbnB1dC9uei1pbnB1dC5tb2R1bGUnO1xuaW1wb3J0IHsgTnpDYXNjYWRlck9wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FzY2FkZXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhc2NhZGVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBPdmVybGF5TW9kdWxlLCBOeklucHV0TW9kdWxlLCBOekljb25Nb2R1bGUsIE56STE4bk1vZHVsZSBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBOekNhc2NhZGVyQ29tcG9uZW50LFxuICAgIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnRcbiAgXSxcbiAgZXhwb3J0cyAgICAgOiBbXG4gICAgTnpDYXNjYWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJNb2R1bGUge1xufVxuIl19