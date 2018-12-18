/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Subject } from 'rxjs';
import { isNotNil } from '../core/util/check';
export class TimeHolder {
    constructor() {
        this._seconds = undefined;
        this._hours = undefined;
        this._minutes = undefined;
        this._defaultOpenValue = new Date();
        this._changes = new Subject();
    }
    /**
     * @return {?}
     */
    setDefaultValueIfNil() {
        if (!isNotNil(this._value)) {
            this._value = new Date(this.defaultOpenValue);
        }
    }
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    setMinutes(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.minutes = value;
        return this;
    }
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    setHours(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.hours = value;
        return this;
    }
    /**
     * @param {?} value
     * @param {?} disabled
     * @return {?}
     */
    setSeconds(value, disabled) {
        if (disabled) {
            return this;
        }
        this.setDefaultValueIfNil();
        this.seconds = value;
        return this;
    }
    /**
     * @return {?}
     */
    get changes() {
        return this._changes.asObservable();
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set value(value) {
        if (value !== this._value) {
            this._value = value;
            if (isNotNil(this._value)) {
                this._hours = this._value.getHours();
                this._minutes = this._value.getMinutes();
                this._seconds = this._value.getSeconds();
            }
            else {
                this._clear();
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        this.value = value;
        return this;
    }
    /**
     * @return {?}
     */
    clear() {
        this._clear();
        this.update();
    }
    /**
     * @return {?}
     */
    get isEmpty() {
        return !(isNotNil(this._hours) || isNotNil(this._minutes) || isNotNil(this._seconds));
    }
    /**
     * @return {?}
     */
    _clear() {
        this._hours = undefined;
        this._minutes = undefined;
        this._seconds = undefined;
    }
    /**
     * @return {?}
     */
    update() {
        if (this.isEmpty) {
            this._value = undefined;
        }
        else {
            if (!isNotNil(this._hours)) {
                this._hours = this.defaultHours;
            }
            else {
                this._value.setHours(this.hours);
            }
            if (!isNotNil(this._minutes)) {
                this._minutes = this.defaultMinutes;
            }
            else {
                this._value.setMinutes(this.minutes);
            }
            if (!isNotNil(this._seconds)) {
                this._seconds = this.defaultSeconds;
            }
            else {
                this._value.setSeconds(this.seconds);
            }
            this._value = new Date(this._value);
        }
        this.changed();
    }
    /**
     * @return {?}
     */
    changed() {
        this._changes.next(this._value);
    }
    /**
     * @return {?}
     */
    get hours() {
        return this._hours;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set hours(value) {
        if (value !== this._hours) {
            this._hours = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get minutes() {
        return this._minutes;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minutes(value) {
        if (value !== this._minutes) {
            this._minutes = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get seconds() {
        return this._seconds;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set seconds(value) {
        if (value !== this._seconds) {
            this._seconds = value;
            this.update();
        }
    }
    /**
     * @return {?}
     */
    get defaultOpenValue() {
        return this._defaultOpenValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set defaultOpenValue(value) {
        if (this._defaultOpenValue !== value) {
            this._defaultOpenValue = value;
            this.update();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setDefaultOpenValue(value) {
        this.defaultOpenValue = value;
        return this;
    }
    /**
     * @return {?}
     */
    get defaultHours() {
        return this._defaultOpenValue.getHours();
    }
    /**
     * @return {?}
     */
    get defaultMinutes() {
        return this._defaultOpenValue.getMinutes();
    }
    /**
     * @return {?}
     */
    get defaultSeconds() {
        return this._defaultOpenValue.getSeconds();
    }
}
function TimeHolder_tsickle_Closure_declarations() {
    /** @type {?} */
    TimeHolder.prototype._seconds;
    /** @type {?} */
    TimeHolder.prototype._hours;
    /** @type {?} */
    TimeHolder.prototype._minutes;
    /** @type {?} */
    TimeHolder.prototype._defaultOpenValue;
    /** @type {?} */
    TimeHolder.prototype._value;
    /** @type {?} */
    TimeHolder.prototype._changes;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZS1ob2xkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsidGltZS1waWNrZXIvdGltZS1ob2xkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBYyxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBRTlDLE1BQU0sT0FBTyxVQUFVO0lBOEtyQjt3QkE3S21CLFNBQVM7c0JBQ1gsU0FBUzt3QkFDUCxTQUFTO2lDQUNNLElBQUksSUFBSSxFQUFFO3dCQUV6QixJQUFJLE9BQU8sRUFBUTtLQXlLckM7Ozs7SUF2S0Qsb0JBQW9CO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0M7S0FDRjs7Ozs7O0lBRUQsVUFBVSxDQUFDLEtBQWEsRUFBRSxRQUFpQjtRQUN6QyxJQUFJLFFBQVEsRUFBRTtZQUNaLE9BQU8sSUFBSSxDQUFDO1NBQ2I7UUFDRCxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixPQUFPLElBQUksQ0FBQztLQUNiOzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBYSxFQUFFLFFBQWlCO1FBQ3ZDLElBQUksUUFBUSxFQUFFO1lBQ1osT0FBTyxJQUFJLENBQUM7U0FDYjtRQUNELElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0tBQ2I7Ozs7OztJQUVELFVBQVUsQ0FBQyxLQUFhLEVBQUUsUUFBaUI7UUFDekMsSUFBSSxRQUFRLEVBQUU7WUFDWixPQUFP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Q0FBQyxLQUFXO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsT0FBTyxJQUFJLENBQUM7S0FDYjs7OztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxDQUFDO0tBQzFDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQzVDOzs7O0lBRUQsSUFBSSxjQUFjO1FBQ2hCLE9BQU8sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxDQUFDO0tBQzVDO0NBS0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbC9jaGVjayc7XG5cbmV4cG9ydCBjbGFzcyBUaW1lSG9sZGVyIHtcbiAgcHJpdmF0ZSBfc2Vjb25kcyA9IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfaG91cnMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX21pbnV0ZXMgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2RlZmF1bHRPcGVuVmFsdWU6IERhdGUgPSBuZXcgRGF0ZSgpO1xuICBwcml2YXRlIF92YWx1ZTogRGF0ZTtcbiAgcHJpdmF0ZSBfY2hhbmdlcyA9IG5ldyBTdWJqZWN0PERhdGU+KCk7XG5cbiAgc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTogdm9pZCB7XG4gICAgaWYgKCFpc05vdE5pbCh0aGlzLl92YWx1ZSkpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gbmV3IERhdGUodGhpcy5kZWZhdWx0T3BlblZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBzZXRNaW51dGVzKHZhbHVlOiBudW1iZXIsIGRpc2FibGVkOiBib29sZWFuKTogdGhpcyB7XG4gICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGhpcy5zZXREZWZhdWx0VmFsdWVJZk5pbCgpO1xuICAgIHRoaXMubWludXRlcyA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0SG91cnModmFsdWU6IG51bWJlciwgZGlzYWJsZWQ6IGJvb2xlYW4pOiB0aGlzIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICB0aGlzLnNldERlZmF1bHRWYWx1ZUlmTmlsKCk7XG4gICAgdGhpcy5ob3VycyA9IHZhbHVlO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgc2V0U2Vjb25kcyh2YWx1ZTogbnVtYmVyLCBkaXNhYmxlZDogYm9vbGVhbik6IHRoaXMge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlSWZOaWwoKTtcbiAgICB0aGlzLnNlY29uZHMgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBjaGFuZ2VzKCk6IE9ic2VydmFibGU8RGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLl9jaGFuZ2VzLmFzT2JzZXJ2YWJsZSgpO1xuICB9XG5cbiAgZ2V0IHZhbHVlKCk6IERhdGUge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcbiAgfVxuXG4gIHNldCB2YWx1ZSh2YWx1ZTogRGF0ZSkge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fdmFsdWUpIHtcbiAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgICBpZiAoaXNOb3ROaWwodGhpcy5fdmFsdWUpKSB7XG4gICAgICAgIHRoaXMuX2hvdXJzID0gdGhpcy5fdmFsdWUuZ2V0SG91cnMoKTtcbiAgICAgICAgdGhpcy5fbWludXRlcyA9IHRoaXMuX3ZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgICAgICAgdGhpcy5fc2Vjb25kcyA9IHRoaXMuX3ZhbHVlLmdldFNlY29uZHMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NsZWFyKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgc2V0VmFsdWUodmFsdWU6IERhdGUpOiB0aGlzIHtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBjbGVhcigpOiB2b2lkIHtcbiAgICB0aGlzLl9jbGVhcigpO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gIShpc05vdE5pbCh0aGlzLl9ob3VycykgfHwgaXNOb3ROaWwodGhpcy5fbWludXRlcykgfHwgaXNOb3ROaWwodGhpcy5fc2Vjb25kcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBfY2xlYXIoKTogdm9pZCB7XG4gICAgdGhpcy5faG91cnMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fbWludXRlcyA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zZWNvbmRzID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuaXNFbXB0eSkge1xuICAgICAgdGhpcy5fdmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghaXNOb3ROaWwodGhpcy5faG91cnMpKSB7XG4gICAgICAgIHRoaXMuX2hvdXJzID0gdGhpcy5kZWZhdWx0SG91cnM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl92YWx1ZS5zZXRIb3Vycyh0aGlzLmhvdXJzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9taW51dGVzKSkge1xuICAgICAgICB0aGlzLl9taW51dGVzID0gdGhpcy5kZWZhdWx0TWludXRlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlLnNldE1pbnV0ZXModGhpcy5taW51dGVzKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05vdE5pbCh0aGlzLl9zZWNvbmRzKSkge1xuICAgICAgICB0aGlzLl9zZWNvbmRzID0gdGhpcy5kZWZhdWx0U2Vjb25kcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3ZhbHVlLnNldFNlY29uZHModGhpcy5zZWNvbmRzKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdmFsdWUgPSBuZXcgRGF0ZSh0aGlzLl92YWx1ZSk7XG4gICAgfVxuICAgIHRoaXMuY2hhbmdlZCgpO1xuICB9XG5cbiAgY2hhbmdlZCgpOiB2b2lkIHtcbiAgICB0aGlzLl9jaGFuZ2VzLm5leHQodGhpcy5fdmFsdWUpO1xuICB9XG5cbiAgZ2V0IGhvdXJzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2hvdXJzO1xuICB9XG5cbiAgc2V0IGhvdXJzKHZhbHVlOiBudW1iZXIpIHtcbiAgICBpZiAodmFsdWUgIT09IHRoaXMuX2hvdXJzKSB7XG4gICAgICB0aGlzLl9ob3VycyA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWludXRlcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9taW51dGVzO1xuICB9XG5cbiAgc2V0IG1pbnV0ZXModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbWludXRlcykge1xuICAgICAgdGhpcy5fbWludXRlcyA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc2Vjb25kcygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zZWNvbmRzO1xuICB9XG5cbiAgc2V0IHNlY29uZHModmFsdWU6IG51bWJlcikge1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fc2Vjb25kcykge1xuICAgICAgdGhpcy5fc2Vjb25kcyA9IHZhbHVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZGVmYXVsdE9wZW5WYWx1ZSgpOiBEYXRlIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZTtcbiAgfVxuXG4gIHNldCBkZWZhdWx0T3BlblZhbHVlKHZhbHVlOiBEYXRlKSB7XG4gICAgaWYgKHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLl9kZWZhdWx0T3BlblZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHNldERlZmF1bHRPcGVuVmFsdWUodmFsdWU6IERhdGUpOiB0aGlzIHtcbiAgICB0aGlzLmRlZmF1bHRPcGVuVmFsdWUgPSB2YWx1ZTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGdldCBkZWZhdWx0SG91cnMoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fZGVmYXVsdE9wZW5WYWx1ZS5nZXRIb3VycygpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRNaW51dGVzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0TWludXRlcygpO1xuICB9XG5cbiAgZ2V0IGRlZmF1bHRTZWNvbmRzKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2RlZmF1bHRPcGVuVmFsdWUuZ2V0U2Vjb25kcygpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gIH1cblxufVxuIl19