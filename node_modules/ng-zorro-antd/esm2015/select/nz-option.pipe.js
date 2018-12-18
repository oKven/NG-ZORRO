/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
export class NzOptionPipe {
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(o => filterOption(input, o));
        }
    }
}
NzOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzFilterOptionPipe' },] }
];
export class NzSubOptionPipe {
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    transform(groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(g => {
                return g.listOfNzOptionComponent.some(o => filterOption(input, o));
            });
        }
    }
}
NzSubOptionPipe.decorators = [
    { type: Pipe, args: [{ name: 'nzSubFilterOptionPipe' },] }
];
/**
 * @param {?} input
 * @param {?} option
 * @return {?}
 */
export function defaultFilterOption(input, option) {
    if (option && option.nzLabel) {
        return option.nzLabel.toLowerCase().indexOf(input.toLowerCase()) > -1;
    }
    else {
        return false;
    }
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQztBQVEvRCxNQUFNLE9BQU8sWUFBWTs7Ozs7Ozs7SUFDdkIsU0FBUyxDQUFDLE9BQTJELEVBQUUsS0FBYSxFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDdEksSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sbUJBQUMsT0FBOEIsRUFBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUM3RTtLQUNGOzs7WUFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O0FBWXBDLE1BQU0sT0FBTyxlQUFlOzs7Ozs7OztJQUMxQixTQUFTLENBQUMsTUFBb0UsRUFBRSxLQUFhLEVBQUUsWUFBMkIsRUFBRSxZQUFxQjtRQUMvSSxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLG1CQUFDLE1BQWtDLEVBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3JELE9BQU8sQ0FBQyxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwRSxDQUFDLENBQUM7U0FDSjtLQUNGOzs7WUFWRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUU7Ozs7Ozs7QUFhdkMsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWEsRUFBRSxNQUF5QjtJQUMxRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdkU7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dD86IHN0cmluZywgb3B0aW9uPzogTnpPcHRpb25Db21wb25lbnQpID0+IGJvb2xlYW47XG5cbi8vIFRPRE86IGNhbiBub3QgZHluYW1pYyBjaGFuZ2UgcGlwZSBwdXJlIHlldFxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJPcHRpb25QaXBlJyB9KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob3B0aW9uczogTnpPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD4sIGlucHV0OiBzdHJpbmcsIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiwgc2VydmVyU2VhcmNoOiBib29sZWFuKTogTnpPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD4ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIWlucHV0KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvcHRpb25zIGFzIE56T3B0aW9uQ29tcG9uZW50W10pLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbihpbnB1dCwgbykpO1xuICAgIH1cbiAgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICduelN1YkZpbHRlck9wdGlvblBpcGUnIH0pXG5leHBvcnQgY2xhc3MgTnpTdWJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShncm91cHM6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD4ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIWlucHV0KSB7XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGdyb3VwcyBhcyBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10pLmZpbHRlcihnID0+IHtcbiAgICAgICAgcmV0dXJuIGcubGlzdE9mTnpPcHRpb25Db21wb25lbnQuc29tZShvID0+IGZpbHRlck9wdGlvbihpbnB1dCwgbykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RmlsdGVyT3B0aW9uKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBib29sZWFuIHtcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24ubnpMYWJlbCkge1xuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==