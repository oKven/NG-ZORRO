/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from '../core/addon/addon.module';
import { NzCardGridDirective } from './nz-card-grid.directive';
import { NzCardLoadingComponent } from './nz-card-loading.component';
import { NzCardMetaComponent } from './nz-card-meta.component';
import { NzCardTabComponent } from './nz-card-tab.component';
import { NzCardComponent } from './nz-card.component';
var NzCardModule = /** @class */ (function () {
    function NzCardModule() {
    }
    NzCardModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    declarations: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent],
                    exports: [NzCardComponent, NzCardGridDirective, NzCardMetaComponent, NzCardLoadingComponent, NzCardTabComponent]
                },] }
    ];
    return NzCardModule;
}());
export { NzCardModule };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FyZC5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsiY2FyZC9uei1jYXJkLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTNELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3JFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7Z0JBRXJELFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsYUFBYSxDQUFFO29CQUM3QyxZQUFZLEVBQUUsQ0FBRSxlQUFlLEVBQUUsbUJBQW1CLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUU7b0JBQ3ZILE9BQU8sRUFBTyxDQUFFLGVBQWUsRUFBRSxtQkFBbUIsRUFBRSxtQkFBbUIsRUFBRSxzQkFBc0IsRUFBRSxrQkFBa0IsQ0FBRTtpQkFDeEg7O3VCQWREOztTQWVhLFlBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICcuLi9jb3JlL2FkZG9uL2FkZG9uLm1vZHVsZSc7XG5cbmltcG9ydCB7IE56Q2FyZEdyaWREaXJlY3RpdmUgfSBmcm9tICcuL256LWNhcmQtZ3JpZC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTnpDYXJkTG9hZGluZ0NvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC1sb2FkaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekNhcmRNZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYXJkLW1ldGEuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FyZFRhYkNvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC10YWIuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FyZENvbXBvbmVudCB9IGZyb20gJy4vbnotY2FyZC5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzICAgICA6IFsgQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlIF0sXG4gIGRlY2xhcmF0aW9uczogWyBOekNhcmRDb21wb25lbnQsIE56Q2FyZEdyaWREaXJlY3RpdmUsIE56Q2FyZE1ldGFDb21wb25lbnQsIE56Q2FyZExvYWRpbmdDb21wb25lbnQsIE56Q2FyZFRhYkNvbXBvbmVudCBdLFxuICBleHBvcnRzICAgICA6IFsgTnpDYXJkQ29tcG9uZW50LCBOekNhcmRHcmlkRGlyZWN0aXZlLCBOekNhcmRNZXRhQ29tcG9uZW50LCBOekNhcmRMb2FkaW5nQ29tcG9uZW50LCBOekNhcmRUYWJDb21wb25lbnQgXVxufSlcbmV4cG9ydCBjbGFzcyBOekNhcmRNb2R1bGUge1xufVxuIl19