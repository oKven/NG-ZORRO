/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzCheckboxModule } from '../checkbox/nz-checkbox.module';
import { NzDropDownModule } from '../dropdown/nz-dropdown.module';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzIconModule } from '../icon/nz-icon.module';
import { NzMenuModule } from '../menu/nz-menu.module';
import { NzPaginationModule } from '../pagination/nz-pagination.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSpinModule } from '../spin/nz-spin.module';
import { NzTableComponent } from './nz-table.component';
import { NzTbodyDirective } from './nz-tbody.directive';
import { NzTdComponent } from './nz-td.component';
import { NzThComponent } from './nz-th.component';
import { NzTheadComponent } from './nz-thead.component';
import { NzTrDirective } from './nz-tr.directive';
export class NzTableModule {
}
NzTableModule.decorators = [
    { type: NgModule, args: [{
                declarations: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective],
                exports: [NzTableComponent, NzThComponent, NzTdComponent, NzTheadComponent, NzTbodyDirective, NzTrDirective],
                imports: [
                    NzMenuModule,
                    FormsModule,
                    NzRadioModule,
                    NzCheckboxModule,
                    NzDropDownModule,
                    CommonModule,
                    NzPaginationModule,
                    NzSpinModule,
                    NzI18nModule,
                    NzIconModule
                ]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbInRhYmxlL256LXRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNsRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFrQmxELE1BQU0sT0FBTyxhQUFhOzs7WUFoQnpCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBRSxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLGFBQWEsQ0FBRTtnQkFDbkgsT0FBTyxFQUFPLENBQUUsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxhQUFhLENBQUU7Z0JBQ25ILE9BQU8sRUFBTztvQkFDWixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsYUFBYTtvQkFDYixnQkFBZ0I7b0JBQ2hCLGdCQUFnQjtvQkFDaEIsWUFBWTtvQkFDWixrQkFBa0I7b0JBQ2xCLFlBQVk7b0JBQ1osWUFBWTtvQkFDWixZQUFZO2lCQUNiO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBOekNoZWNrYm94TW9kdWxlIH0gZnJvbSAnLi4vY2hlY2tib3gvbnotY2hlY2tib3gubW9kdWxlJztcbmltcG9ydCB7IE56RHJvcERvd25Nb2R1bGUgfSBmcm9tICcuLi9kcm9wZG93bi9uei1kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpJMThuTW9kdWxlIH0gZnJvbSAnLi4vaTE4bi9uei1pMThuLm1vZHVsZSc7XG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcbmltcG9ydCB7IE56TWVudU1vZHVsZSB9IGZyb20gJy4uL21lbnUvbnotbWVudS5tb2R1bGUnO1xuaW1wb3J0IHsgTnpQYWdpbmF0aW9uTW9kdWxlIH0gZnJvbSAnLi4vcGFnaW5hdGlvbi9uei1wYWdpbmF0aW9uLm1vZHVsZSc7XG5pbXBvcnQgeyBOelJhZGlvTW9kdWxlIH0gZnJvbSAnLi4vcmFkaW8vbnotcmFkaW8ubW9kdWxlJztcbmltcG9ydCB7IE56U3Bpbk1vZHVsZSB9IGZyb20gJy4uL3NwaW4vbnotc3Bpbi5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOelRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi9uei10YWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUYm9keURpcmVjdGl2ZSB9IGZyb20gJy4vbnotdGJvZHkuZGlyZWN0aXZlJztcbmltcG9ydCB7IE56VGRDb21wb25lbnQgfSBmcm9tICcuL256LXRkLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelRoQ29tcG9uZW50IH0gZnJvbSAnLi9uei10aC5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpUaGVhZENvbXBvbmVudCB9IGZyb20gJy4vbnotdGhlYWQuY29tcG9uZW50JztcbmltcG9ydCB7IE56VHJEaXJlY3RpdmUgfSBmcm9tICcuL256LXRyLmRpcmVjdGl2ZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogWyBOelRhYmxlQ29tcG9uZW50LCBOelRoQ29tcG9uZW50LCBOelRkQ29tcG9uZW50LCBOelRoZWFkQ29tcG9uZW50LCBOelRib2R5RGlyZWN0aXZlLCBOelRyRGlyZWN0aXZlIF0sXG4gIGV4cG9ydHMgICAgIDogWyBOelRhYmxlQ29tcG9uZW50LCBOelRoQ29tcG9uZW50LCBOelRkQ29tcG9uZW50LCBOelRoZWFkQ29tcG9uZW50LCBOelRib2R5RGlyZWN0aXZlLCBOelRyRGlyZWN0aXZlIF0sXG4gIGltcG9ydHMgICAgIDogW1xuICAgIE56TWVudU1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICBOelJhZGlvTW9kdWxlLFxuICAgIE56Q2hlY2tib3hNb2R1bGUsXG4gICAgTnpEcm9wRG93bk1vZHVsZSxcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgTnpQYWdpbmF0aW9uTW9kdWxlLFxuICAgIE56U3Bpbk1vZHVsZSxcbiAgICBOekkxOG5Nb2R1bGUsXG4gICAgTnpJY29uTW9kdWxlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpUYWJsZU1vZHVsZSB7XG59XG4iXX0=