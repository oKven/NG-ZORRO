/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzI18nModule } from '../i18n/nz-i18n.module';
import { NzRadioModule } from '../radio/nz-radio.module';
import { NzSelectModule } from '../select/nz-select.module';
import { NzDateCellDirective, NzDateFullCellDirective, NzMonthCellDirective, NzMonthFullCellDirective } from './nz-calendar-cells';
import { NzCalendarHeaderComponent } from './nz-calendar-header.component';
import { NzCalendarComponent } from './nz-calendar.component';
export class NzCalendarModule {
}
NzCalendarModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    NzCalendarHeaderComponent,
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective
                ],
                exports: [
                    NzCalendarComponent,
                    NzDateCellDirective,
                    NzDateFullCellDirective,
                    NzMonthCellDirective,
                    NzMonthFullCellDirective
                ],
                imports: [CommonModule, FormsModule, NzI18nModule, NzRadioModule, NzSelectModule]
            },] }
];

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FsZW5kYXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC8iLCJzb3VyY2VzIjpbImNhbGVuZGFyL256LWNhbGVuZGFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDekQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQzVELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ25JLE9BQU8sRUFBRSx5QkFBeUIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBb0I5RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFsQjVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1oseUJBQXlCO29CQUN6QixtQkFBbUI7b0JBQ25CLG1CQUFtQjtvQkFDbkIsdUJBQXVCO29CQUN2QixvQkFBb0I7b0JBQ3BCLHdCQUF3QjtpQkFDekI7Z0JBQ0QsT0FBTyxFQUFPO29CQUNaLG1CQUFtQjtvQkFDbkIsbUJBQW1CO29CQUNuQix1QkFBdUI7b0JBQ3ZCLG9CQUFvQjtvQkFDcEIsd0JBQXdCO2lCQUN6QjtnQkFDRCxPQUFPLEVBQU8sQ0FBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsY0FBYyxDQUFFO2FBQ3pGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE56STE4bk1vZHVsZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5tb2R1bGUnO1xuaW1wb3J0IHsgTnpSYWRpb01vZHVsZSB9IGZyb20gJy4uL3JhZGlvL256LXJhZGlvLm1vZHVsZSc7XG5pbXBvcnQgeyBOelNlbGVjdE1vZHVsZSB9IGZyb20gJy4uL3NlbGVjdC9uei1zZWxlY3QubW9kdWxlJztcbmltcG9ydCB7IE56RGF0ZUNlbGxEaXJlY3RpdmUsIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLCBOek1vbnRoQ2VsbERpcmVjdGl2ZSwgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlIH0gZnJvbSAnLi9uei1jYWxlbmRhci1jZWxscyc7XG5pbXBvcnQgeyBOekNhbGVuZGFySGVhZGVyQ29tcG9uZW50IH0gZnJvbSAnLi9uei1jYWxlbmRhci1oZWFkZXIuY29tcG9uZW50JztcbmltcG9ydCB7IE56Q2FsZW5kYXJDb21wb25lbnQgfSBmcm9tICcuL256LWNhbGVuZGFyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIE56Q2FsZW5kYXJIZWFkZXJDb21wb25lbnQsXG4gICAgTnpDYWxlbmRhckNvbXBvbmVudCxcbiAgICBOekRhdGVDZWxsRGlyZWN0aXZlLFxuICAgIE56RGF0ZUZ1bGxDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhDZWxsRGlyZWN0aXZlLFxuICAgIE56TW9udGhGdWxsQ2VsbERpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzICAgICA6IFtcbiAgICBOekNhbGVuZGFyQ29tcG9uZW50LFxuICAgIE56RGF0ZUNlbGxEaXJlY3RpdmUsXG4gICAgTnpEYXRlRnVsbENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aENlbGxEaXJlY3RpdmUsXG4gICAgTnpNb250aEZ1bGxDZWxsRGlyZWN0aXZlXG4gIF0sXG4gIGltcG9ydHMgICAgIDogWyBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBOekkxOG5Nb2R1bGUsIE56UmFkaW9Nb2R1bGUsIE56U2VsZWN0TW9kdWxlIF1cbn0pXG5leHBvcnQgY2xhc3MgTnpDYWxlbmRhck1vZHVsZSB7IH1cbiJdfQ==