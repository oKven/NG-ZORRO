/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
/** @type {?} */
var defaultDisabledTime = {
    nzDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : /** @type {?} */ ({});
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxJQUFNLG1CQUFtQixHQUF1QjtJQUM5QyxlQUFlOzs7SUFBZjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0tBQ1g7Q0FDRixDQUFDOzs7Ozs7QUFFRixNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNEI7O0lBQzFFLElBQUksa0JBQWtCLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLG1CQUFDLEVBQXdCLENBQUEsQ0FBQztJQUMzRyxrQkFBa0Isd0JBQ2IsbUJBQW1CLEVBQ25CLGtCQUFrQixDQUN0QixDQUFDO0lBQ0YsT0FBTyxrQkFBa0IsQ0FBQztDQUMzQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUFDLEtBQWdCLEVBQUUsa0JBQXNDOztJQUMxRixJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDeEIsSUFBSSxLQUFLLEVBQUU7O1FBQ1QsSUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDOztRQUM5QixJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7O1FBQ25DLElBQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQzs7UUFDbkMsSUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0QsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFOztZQUN0QyxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNuRSxJQUFJLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O2dCQUMzQyxJQUFNLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQzVFLFdBQVcsR0FBRyxlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3ZEO2lCQUFNO2dCQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDcEI7U0FDRjthQUFNO1lBQ0wsV0FBVyxHQUFHLElBQUksQ0FBQztTQUNwQjtLQUNGO0lBQ0QsT0FBTyxDQUFDLFdBQVcsQ0FBQztDQUNyQjs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFnQixFQUFFLFlBQTRCOztJQUN4RSxJQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztDQUN2RDs7Ozs7OztBQUVELE1BQU0sVUFBVSxhQUFhLENBQUMsS0FBZ0IsRUFBRSxZQUE2QixFQUFFLFlBQTZCO0lBQzFHLElBQUksWUFBWSxFQUFFO1FBQ2hCLElBQUksWUFBWSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNsQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxZQUFZLENBQUMsRUFBRTtZQUNyQyxPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFDRCxPQUFPLElBQUksQ0FBQztDQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2NhbmR5LWRhdGUnO1xuXG5jb25zdCBkZWZhdWx0RGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVDb25maWcgPSB7XG4gIG56RGlzYWJsZWRIb3VycygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICBuekRpc2FibGVkTWludXRlcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9LFxuICBuekRpc2FibGVkU2Vjb25kcygpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogRGlzYWJsZWRUaW1lQ29uZmlnIHtcbiAgbGV0IGRpc2FibGVkVGltZUNvbmZpZyA9IGRpc2FibGVkVGltZSA/IGRpc2FibGVkVGltZSh2YWx1ZSAmJiB2YWx1ZS5uYXRpdmVEYXRlKSA6IHt9IGFzIERpc2FibGVkVGltZUNvbmZpZztcbiAgZGlzYWJsZWRUaW1lQ29uZmlnID0ge1xuICAgIC4uLmRlZmF1bHREaXNhYmxlZFRpbWUsXG4gICAgLi4uZGlzYWJsZWRUaW1lQ29uZmlnXG4gIH07XG4gIHJldHVybiBkaXNhYmxlZFRpbWVDb25maWc7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZUNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKTogYm9vbGVhbiB7XG4gIGxldCBpbnZhbGlkVGltZSA9IGZhbHNlO1xuICBpZiAodmFsdWUpIHtcbiAgICBjb25zdCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCBtaW51dGVzID0gdmFsdWUuZ2V0TWludXRlcygpO1xuICAgIGNvbnN0IHNlY29uZHMgPSB2YWx1ZS5nZXRTZWNvbmRzKCk7XG4gICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkSG91cnMoKTtcbiAgICBpZiAoZGlzYWJsZWRIb3Vycy5pbmRleE9mKGhvdXIpID09PSAtMSkge1xuICAgICAgY29uc3QgZGlzYWJsZWRNaW51dGVzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRNaW51dGVzKGhvdXIpO1xuICAgICAgaWYgKGRpc2FibGVkTWludXRlcy5pbmRleE9mKG1pbnV0ZXMpID09PSAtMSkge1xuICAgICAgICBjb25zdCBkaXNhYmxlZFNlY29uZHMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZFNlY29uZHMoaG91ciwgbWludXRlcyk7XG4gICAgICAgIGludmFsaWRUaW1lID0gZGlzYWJsZWRTZWNvbmRzLmluZGV4T2Yoc2Vjb25kcykgIT09IC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpbnZhbGlkVGltZSA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiAhaW52YWxpZFRpbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZCh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWU6IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XG4gIGNvbnN0IGRpc2FibGVkVGltZUNvbmZpZyA9IGdldFRpbWVDb25maWcodmFsdWUsIGRpc2FibGVkVGltZSk7XG4gIHJldHVybiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVDb25maWcpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxvd2VkRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbiwgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcbiAgaWYgKGRpc2FibGVkRGF0ZSkge1xuICAgIGlmIChkaXNhYmxlZERhdGUodmFsdWUubmF0aXZlRGF0ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpc2FibGVkVGltZSkge1xuICAgIGlmICghaXNUaW1lVmFsaWQodmFsdWUsIGRpc2FibGVkVGltZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=