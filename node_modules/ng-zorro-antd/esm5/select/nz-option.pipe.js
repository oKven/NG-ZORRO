/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Pipe } from '@angular/core';
var NzOptionPipe = /** @class */ (function () {
    function NzOptionPipe() {
    }
    /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzOptionPipe.prototype.transform = /**
     * @param {?} options
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (options, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return options;
        }
        else {
            return (/** @type {?} */ (options)).filter(function (o) { return filterOption(input, o); });
        }
    };
    NzOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzFilterOptionPipe' },] }
    ];
    return NzOptionPipe;
}());
export { NzOptionPipe };
var NzSubOptionPipe = /** @class */ (function () {
    function NzSubOptionPipe() {
    }
    /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    NzSubOptionPipe.prototype.transform = /**
     * @param {?} groups
     * @param {?} input
     * @param {?} filterOption
     * @param {?} serverSearch
     * @return {?}
     */
    function (groups, input, filterOption, serverSearch) {
        if (serverSearch || !input) {
            return groups;
        }
        else {
            return (/** @type {?} */ (groups)).filter(function (g) {
                return g.listOfNzOptionComponent.some(function (o) { return filterOption(input, o); });
            });
        }
    };
    NzSubOptionPipe.decorators = [
        { type: Pipe, args: [{ name: 'nzSubFilterOptionPipe' },] }
    ];
    return NzSubOptionPipe;
}());
export { NzSubOptionPipe };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotb3B0aW9uLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsic2VsZWN0L256LW9wdGlvbi5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQUUsSUFBSSxFQUE0QixNQUFNLGVBQWUsQ0FBQzs7Ozs7Ozs7Ozs7SUFTN0QsZ0NBQVM7Ozs7Ozs7SUFBVCxVQUFVLE9BQTJELEVBQUUsS0FBYSxFQUFFLFlBQTJCLEVBQUUsWUFBcUI7UUFDdEksSUFBSSxZQUFZLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDMUIsT0FBTyxPQUFPLENBQUM7U0FDaEI7YUFBTTtZQUNMLE9BQU8sbUJBQUMsT0FBOEIsRUFBQyxDQUFDLE1BQU0sQ0FBQyxVQUFBLENBQUMsSUFBSSxPQUFBLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FBQztTQUM3RTtLQUNGOztnQkFSRixJQUFJLFNBQUMsRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUU7O3VCQVJwQzs7U0FTYSxZQUFZOzs7Ozs7Ozs7OztJQVl2QixtQ0FBUzs7Ozs7OztJQUFULFVBQVUsTUFBb0UsRUFBRSxLQUFhLEVBQUUsWUFBMkIsRUFBRSxZQUFxQjtRQUMvSSxJQUFJLFlBQVksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUMxQixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLG1CQUFDLE1BQWtDLEVBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDO2dCQUNsRCxPQUFPLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUF0QixDQUFzQixDQUFDLENBQUM7YUFDcEUsQ0FBQyxDQUFDO1NBQ0o7S0FDRjs7Z0JBVkYsSUFBSSxTQUFDLEVBQUUsSUFBSSxFQUFFLHVCQUF1QixFQUFFOzswQkFuQnZDOztTQW9CYSxlQUFlOzs7Ozs7QUFZNUIsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWEsRUFBRSxNQUF5QjtJQUMxRSxJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsT0FBTyxFQUFFO1FBQzVCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDdkU7U0FBTTtRQUNMLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlOm5vLWFueSAqL1xuaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSwgUXVlcnlMaXN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOek9wdGlvbkdyb3VwQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24tZ3JvdXAuY29tcG9uZW50JztcbmltcG9ydCB7IE56T3B0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9uei1vcHRpb24uY29tcG9uZW50JztcblxuZXhwb3J0IHR5cGUgVEZpbHRlck9wdGlvbiA9IChpbnB1dD86IHN0cmluZywgb3B0aW9uPzogTnpPcHRpb25Db21wb25lbnQpID0+IGJvb2xlYW47XG5cbi8vIFRPRE86IGNhbiBub3QgZHluYW1pYyBjaGFuZ2UgcGlwZSBwdXJlIHlldFxuQFBpcGUoeyBuYW1lOiAnbnpGaWx0ZXJPcHRpb25QaXBlJyB9KVxuZXhwb3J0IGNsYXNzIE56T3B0aW9uUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICB0cmFuc2Zvcm0ob3B0aW9uczogTnpPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD4sIGlucHV0OiBzdHJpbmcsIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiwgc2VydmVyU2VhcmNoOiBib29sZWFuKTogTnpPcHRpb25Db21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkNvbXBvbmVudD4ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIWlucHV0KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChvcHRpb25zIGFzIE56T3B0aW9uQ29tcG9uZW50W10pLmZpbHRlcihvID0+IGZpbHRlck9wdGlvbihpbnB1dCwgbykpO1xuICAgIH1cbiAgfVxufVxuXG5AUGlwZSh7IG5hbWU6ICduelN1YkZpbHRlck9wdGlvblBpcGUnIH0pXG5leHBvcnQgY2xhc3MgTnpTdWJPcHRpb25QaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHRyYW5zZm9ybShncm91cHM6IE56T3B0aW9uR3JvdXBDb21wb25lbnRbXSB8IFF1ZXJ5TGlzdDxOek9wdGlvbkdyb3VwQ29tcG9uZW50PiwgaW5wdXQ6IHN0cmluZywgZmlsdGVyT3B0aW9uOiBURmlsdGVyT3B0aW9uLCBzZXJ2ZXJTZWFyY2g6IGJvb2xlYW4pOiBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10gfCBRdWVyeUxpc3Q8TnpPcHRpb25Hcm91cENvbXBvbmVudD4ge1xuICAgIGlmIChzZXJ2ZXJTZWFyY2ggfHwgIWlucHV0KSB7XG4gICAgICByZXR1cm4gZ3JvdXBzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKGdyb3VwcyBhcyBOek9wdGlvbkdyb3VwQ29tcG9uZW50W10pLmZpbHRlcihnID0+IHtcbiAgICAgICAgcmV0dXJuIGcubGlzdE9mTnpPcHRpb25Db21wb25lbnQuc29tZShvID0+IGZpbHRlck9wdGlvbihpbnB1dCwgbykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWZhdWx0RmlsdGVyT3B0aW9uKGlucHV0OiBzdHJpbmcsIG9wdGlvbjogTnpPcHRpb25Db21wb25lbnQpOiBib29sZWFuIHtcbiAgaWYgKG9wdGlvbiAmJiBvcHRpb24ubnpMYWJlbCkge1xuICAgIHJldHVybiBvcHRpb24ubnpMYWJlbC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoaW5wdXQudG9Mb3dlckNhc2UoKSkgPiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cbiJdfQ==