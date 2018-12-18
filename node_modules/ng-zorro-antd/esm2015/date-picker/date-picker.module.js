/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzIconModule } from '../icon/nz-icon.module';
import { LibPackerModule } from './lib/lib-packer.module';
import { NzDatePickerComponent } from './date-picker.component';
import { DateRangePickerComponent } from './date-range-picker.component';
import { HeaderPickerComponent } from './header-picker.component';
import { NzMonthPickerComponent } from './month-picker.component';
import { NzPickerComponent } from './picker.component';
import { NzRangePickerComponent } from './range-picker.component';
import { NzWeekPickerComponent } from './week-picker.component';
import { NzYearPickerComponent } from './year-picker.component';
export class NzDatePickerModule {
}
NzDatePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    OverlayModule,
                    LibPackerModule,
                    NzIconModule
                ],
                exports: [
                    NzDatePickerComponent,
                    NzRangePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent
                ],
                declarations: [
                    HeaderPickerComponent,
                    DateRangePickerComponent,
                    NzPickerComponent,
                    NzDatePickerComponent,
                    NzMonthPickerComponent,
                    NzYearPickerComponent,
                    NzWeekPickerComponent,
                    NzRangePickerComponent
                ],
                providers: []
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZS1waWNrZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImRhdGUtcGlja2VyL2RhdGUtcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFMUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDekUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDdkQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDaEUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUErQmhFLE1BQU0sT0FBTyxrQkFBa0I7OztZQTdCOUIsUUFBUSxTQUFDO2dCQUNSLE9BQU8sRUFBRTtvQkFDUCxZQUFZO29CQUNaLGFBQWE7b0JBRWIsZUFBZTtvQkFFZixZQUFZO2lCQUNiO2dCQUNELE9BQU8sRUFBRTtvQkFDUCxxQkFBcUI7b0JBQ3JCLHNCQUFzQjtvQkFDdEIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtpQkFDdEI7Z0JBQ0QsWUFBWSxFQUFFO29CQUNaLHFCQUFxQjtvQkFDckIsd0JBQXdCO29CQUN4QixpQkFBaUI7b0JBRWpCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHFCQUFxQjtvQkFDckIsc0JBQXNCO2lCQUN2QjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNkIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICcuLi9pY29uL256LWljb24ubW9kdWxlJztcblxuaW1wb3J0IHsgTGliUGFja2VyTW9kdWxlIH0gZnJvbSAnLi9saWIvbGliLXBhY2tlci5tb2R1bGUnO1xuXG5pbXBvcnQgeyBOekRhdGVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2RhdGUtcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFkZXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2hlYWRlci1waWNrZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56TW9udGhQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL21vbnRoLXBpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3BpY2tlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSYW5nZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vcmFuZ2UtcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOeldlZWtQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3dlZWstcGlja2VyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOelllYXJQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL3llYXItcGlja2VyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgT3ZlcmxheU1vZHVsZSxcblxuICAgIExpYlBhY2tlck1vZHVsZSxcblxuICAgIE56SWNvbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTnpEYXRlUGlja2VyQ29tcG9uZW50LFxuICAgIE56UmFuZ2VQaWNrZXJDb21wb25lbnQsXG4gICAgTnpNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBOelllYXJQaWNrZXJDb21wb25lbnQsXG4gICAgTnpXZWVrUGlja2VyQ29tcG9uZW50XG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEhlYWRlclBpY2tlckNvbXBvbmVudCxcbiAgICBEYXRlUmFuZ2VQaWNrZXJDb21wb25lbnQsXG4gICAgTnpQaWNrZXJDb21wb25lbnQsXG5cbiAgICBOekRhdGVQaWNrZXJDb21wb25lbnQsXG4gICAgTnpNb250aFBpY2tlckNvbXBvbmVudCxcbiAgICBOelllYXJQaWNrZXJDb21wb25lbnQsXG4gICAgTnpXZWVrUGlja2VyQ29tcG9uZW50LFxuICAgIE56UmFuZ2VQaWNrZXJDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBOekRhdGVQaWNrZXJNb2R1bGUgeyB9XG4iXX0=