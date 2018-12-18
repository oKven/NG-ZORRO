/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from '../candy-date';
/** @type {?} */
const MAX_ROW = 4;
/** @type {?} */
const MAX_COL = 3;
export class DecadePanelComponent {
    constructor() {
        this.valueChange = new EventEmitter();
        this.prefixCls = 'ant-calendar-decade-panel';
    }
    /**
     * @return {?}
     */
    get startYear() {
        return parseInt(`${this.value.getYear() / 100}`, 10) * 100;
    }
    /**
     * @return {?}
     */
    get endYear() {
        return this.startYear + 99;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes["value"]) {
            this.render();
        }
    }
    /**
     * @return {?}
     */
    previousCentury() {
        this.gotoYear(-100);
    }
    /**
     * @return {?}
     */
    nextCentury() {
        this.gotoYear(100);
    }
    /**
     * @param {?} index
     * @param {?} decadeData
     * @return {?}
     */
    trackPanelDecade(index, decadeData) {
        return decadeData.content;
    }
    /**
     * @return {?}
     */
    render() {
        if (this.value) {
            this.panelDecades = this.makePanelDecades();
        }
    }
    /**
     * @param {?} amount
     * @return {?}
     */
    gotoYear(amount) {
        this.value = this.value.addYears(amount);
        // this.valueChange.emit(this.value); // Do not try to trigger final value change
        this.render();
    }
    /**
     * @param {?} startYear
     * @return {?}
     */
    chooseDecade(startYear) {
        this.value = this.value.setYear(startYear);
        this.valueChange.emit(this.value);
    }
    /**
     * @return {?}
     */
    makePanelDecades() {
        /** @type {?} */
        const decades = [];
        /** @type {?} */
        const currentYear = this.value.getYear();
        /** @type {?} */
        const startYear = this.startYear;
        /** @type {?} */
        const endYear = this.endYear;
        /** @type {?} */
        const previousYear = startYear - 10;
        /** @type {?} */
        let index = 0;
        for (let rowIndex = 0; rowIndex < MAX_ROW; rowIndex++) {
            decades[rowIndex] = [];
            for (let colIndex = 0; colIndex < MAX_COL; colIndex++) {
                /** @type {?} */
                const start = previousYear + index * 10;
                /** @type {?} */
                const end = previousYear + index * 10 + 9;
                /** @type {?} */
                const content = `${start}-${end}`;
                /** @type {?} */
                const cell = decades[rowIndex][colIndex] = {
                    content,
                    title: content,
                    isCurrent: currentYear >= start && currentYear <= end,
                    isLowerThanStart: end < startYear,
                    isBiggerThanEnd: start > endYear,
                    classMap: null,
                    onClick: null
                };
                cell.classMap = {
                    [`${this.prefixCls}-cell`]: true,
                    [`${this.prefixCls}-selected-cell`]: cell.isCurrent,
                    [`${this.prefixCls}-last-century-cell`]: cell.isLowerThanStart,
                    [`${this.prefixCls}-next-century-cell`]: cell.isBiggerThanEnd
                };
                if (cell.isLowerThanStart) {
                    cell.onClick = () => this.previousCentury();
                }
                else if (cell.isBiggerThanEnd) {
                    cell.onClick = () => this.nextCentury();
                }
                else {
                    cell.onClick = () => this.chooseDecade(start);
                }
                index++;
            }
        }
        return decades;
    }
}
DecadePanelComponent.decorators = [
    { type: Component, args: [{
                selector: 'decade-panel',
                template: "<div class=\"{{ prefixCls }}\">\n  <div class=\"{{ prefixCls }}-header\">\n    <a\n      class=\"{{ prefixCls }}-prev-century-btn\"\n      role=\"button\"\n      (click)=\"previousCentury()\"\n      title=\"{{ locale.previousCentury }}\"\n    ></a>\n\n    <div class=\"{{ prefixCls }}-century\">\n      {{ startYear }}-{{ endYear }}\n    </div>\n    <a\n      class=\"{{ prefixCls }}-next-century-btn\"\n      role=\"button\"\n      (click)=\"nextCentury()\"\n      title=\"{{ locale.nextCentury }}\"\n    ></a>\n  </div>\n  <div class=\"{{ prefixCls }}-body\">\n    <table class=\"{{ prefixCls }}-table\" cellSpacing=\"0\" role=\"grid\">\n      <tbody class=\"{{ prefixCls }}-tbody\">\n        <tr *ngFor=\"let row of panelDecades\" role=\"row\">\n          <td *ngFor=\"let cell of row; trackBy: trackPanelDecade\"\n            role=\"gridcell\"\n            title=\"{{ cell.title }}\"\n            (click)=\"cell.onClick()\"\n            [ngClass]=\"cell.classMap\"\n          >\n            <a class=\"{{ prefixCls }}-decade\">{{ cell.content }}</a>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"
            }] }
];
/** @nocollapse */
DecadePanelComponent.ctorParameters = () => [];
DecadePanelComponent.propDecorators = {
    locale: [{ type: Input }],
    value: [{ type: Input }],
    valueChange: [{ type: Output }]
};
function DecadePanelComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    DecadePanelComponent.prototype.locale;
    /** @type {?} */
    DecadePanelComponent.prototype.value;
    /** @type {?} */
    DecadePanelComponent.prototype.valueChange;
    /** @type {?} */
    DecadePanelComponent.prototype.prefixCls;
    /** @type {?} */
    DecadePanelComponent.prototype.panelDecades;
}
/**
 * @record
 */
export function PanelDecadeData() { }
function PanelDecadeData_tsickle_Closure_declarations() {
    /** @type {?} */
    PanelDecadeData.prototype.content;
    /** @type {?} */
    PanelDecadeData.prototype.title;
    /** @type {?} */
    PanelDecadeData.prototype.isCurrent;
    /** @type {?} */
    PanelDecadeData.prototype.isLowerThanStart;
    /** @type {?} */
    PanelDecadeData.prototype.isBiggerThanEnd;
    /** @type {?} */
    PanelDecadeData.prototype.classMap;
    /** @type {?} */
    PanelDecadeData.prototype.onClick;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJkYXRlLXBpY2tlci9saWIvZGVjYWRlL2RlY2FkZS1wYW5lbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBR2pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBRTFDLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQzs7QUFDbEIsTUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBT2xCLE1BQU0sT0FBTyxvQkFBb0I7SUFnQi9CO1FBWkEsbUJBQXdCLElBQUksWUFBWSxFQUFhLENBQUM7UUFTdEQsaUJBQW9CLDJCQUEyQixDQUFDO0tBR2hDOzs7O0lBVmhCLElBQUksU0FBUztRQUNYLE9BQU8sUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUM7S0FDNUQ7Ozs7SUFDRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0tBQzVCOzs7OztJQU9ELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sV0FBUTtZQUNqQixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDZjtLQUNGOzs7O0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztLQUNyQjs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ3BCOzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhLEVBQUUsVUFBMkI7UUFDekQsT0FBTyxVQUFVLENBQUMs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QUMsT0FBTyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQy9DO2dCQUVELEtBQUssRUFBRyxDQUFDO2FBQ1Y7U0FDRjtRQUNELE9BQU8sT0FBTyxDQUFDOzs7O1lBdEdsQixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLHluQ0FBMEM7YUFDM0M7Ozs7O3FCQUdFLEtBQUs7b0JBRUwsS0FBSzswQkFDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkNoYW5nZXMsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJy4uLy4uLy4uL2kxOG4vbnotaTE4bi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi4vY2FuZHktZGF0ZSc7XG5cbmNvbnN0IE1BWF9ST1cgPSA0O1xuY29uc3QgTUFYX0NPTCA9IDM7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlY2FkZS1wYW5lbCcsXG4gIHRlbXBsYXRlVXJsOiAnZGVjYWRlLXBhbmVsLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIERlY2FkZVBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgbG9jYWxlOiBOekNhbGVuZGFySTE4bkludGVyZmFjZTtcblxuICBASW5wdXQoKSB2YWx1ZTogQ2FuZHlEYXRlO1xuICBAT3V0cHV0KCkgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcblxuICBnZXQgc3RhcnRZZWFyKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHBhcnNlSW50KGAke3RoaXMudmFsdWUuZ2V0WWVhcigpIC8gMTAwfWAsIDEwKSAqIDEwMDtcbiAgfVxuICBnZXQgZW5kWWVhcigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnN0YXJ0WWVhciArIDk5O1xuICB9XG5cbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSAnYW50LWNhbGVuZGFyLWRlY2FkZS1wYW5lbCc7XG4gIHBhbmVsRGVjYWRlczogUGFuZWxEZWNhZGVEYXRhW11bXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGlmIChjaGFuZ2VzLnZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgfVxuXG4gIHByZXZpb3VzQ2VudHVyeSgpOiB2b2lkIHtcbiAgICB0aGlzLmdvdG9ZZWFyKC0xMDApO1xuICB9XG5cbiAgbmV4dENlbnR1cnkoKTogdm9pZCB7XG4gICAgdGhpcy5nb3RvWWVhcigxMDApO1xuICB9XG5cbiAgdHJhY2tQYW5lbERlY2FkZShpbmRleDogbnVtYmVyLCBkZWNhZGVEYXRhOiBQYW5lbERlY2FkZURhdGEpOiBzdHJpbmcge1xuICAgIHJldHVybiBkZWNhZGVEYXRhLmNvbnRlbnQ7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5wYW5lbERlY2FkZXMgPSB0aGlzLm1ha2VQYW5lbERlY2FkZXMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZS1yZW5kZXIgcGFuZWwgY29udGVudCBieSB0aGUgaGVhZGVyJ3MgYnV0dG9ucyAoTk9URTogRG8gbm90IHRyeSB0byB0cmlnZ2VyIGZpbmFsIHZhbHVlIGNoYW5nZSlcbiAgcHJpdmF0ZSBnb3RvWWVhcihhbW91bnQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZhbHVlLmFkZFllYXJzKGFtb3VudCk7XG4gICAgLy8gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KHRoaXMudmFsdWUpOyAvLyBEbyBub3QgdHJ5IHRvIHRyaWdnZXIgZmluYWwgdmFsdWUgY2hhbmdlXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgY2hvb3NlRGVjYWRlKHN0YXJ0WWVhcjogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy52YWx1ZSA9IHRoaXMudmFsdWUuc2V0WWVhcihzdGFydFllYXIpO1xuICAgIHRoaXMudmFsdWVDaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZVBhbmVsRGVjYWRlcygpOiBQYW5lbERlY2FkZURhdGFbXVtdIHtcbiAgICBjb25zdCBkZWNhZGVzOiBQYW5lbERlY2FkZURhdGFbXVtdID0gW107XG4gICAgY29uc3QgY3VycmVudFllYXIgPSB0aGlzLnZhbHVlLmdldFllYXIoKTtcbiAgICBjb25zdCBzdGFydFllYXIgPSB0aGlzLnN0YXJ0WWVhcjtcbiAgICBjb25zdCBlbmRZZWFyID0gdGhpcy5lbmRZZWFyO1xuICAgIGNvbnN0IHByZXZpb3VzWWVhciA9IHN0YXJ0WWVhciAtIDEwO1xuXG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBmb3IgKGxldCByb3dJbmRleCA9IDA7IHJvd0luZGV4IDwgTUFYX1JPVzsgcm93SW5kZXggKyspIHtcbiAgICAgIGRlY2FkZXNbcm93SW5kZXhdID0gW107XG4gICAgICBmb3IgKGxldCBjb2xJbmRleCA9IDA7IGNvbEluZGV4IDwgTUFYX0NPTDsgY29sSW5kZXggKyspIHtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwO1xuICAgICAgICBjb25zdCBlbmQgPSBwcmV2aW91c1llYXIgKyBpbmRleCAqIDEwICsgOTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGAke3N0YXJ0fS0ke2VuZH1gO1xuXG4gICAgICAgIGNvbnN0IGNlbGwgPSBkZWNhZGVzW3Jvd0luZGV4XVtjb2xJbmRleF0gPSB7XG4gICAgICAgICAgY29udGVudCxcbiAgICAgICAgICB0aXRsZTogY29udGVudCxcbiAgICAgICAgICBpc0N1cnJlbnQ6IGN1cnJlbnRZZWFyID49IHN0YXJ0ICYmIGN1cnJlbnRZZWFyIDw9IGVuZCxcbiAgICAgICAgICBpc0xvd2VyVGhhblN0YXJ0OiBlbmQgPCBzdGFydFllYXIsXG4gICAgICAgICAgaXNCaWdnZXJUaGFuRW5kOiBzdGFydCA+IGVuZFllYXIsXG4gICAgICAgICAgY2xhc3NNYXA6IG51bGwsXG4gICAgICAgICAgb25DbGljazogbnVsbFxuICAgICAgICB9O1xuXG4gICAgICAgIGNlbGwuY2xhc3NNYXAgPSB7XG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1jZWxsYF06IHRydWUsXG4gICAgICAgICAgW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3RlZC1jZWxsYF06IGNlbGwuaXNDdXJyZW50LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbGFzdC1jZW50dXJ5LWNlbGxgXTogY2VsbC5pc0xvd2VyVGhhblN0YXJ0LFxuICAgICAgICAgIFtgJHt0aGlzLnByZWZpeENsc30tbmV4dC1jZW50dXJ5LWNlbGxgXTogY2VsbC5pc0JpZ2dlclRoYW5FbmRcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2VsbC5pc0xvd2VyVGhhblN0YXJ0KSB7XG4gICAgICAgICAgY2VsbC5vbkNsaWNrID0gKCkgPT4gdGhpcy5wcmV2aW91c0NlbnR1cnkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChjZWxsLmlzQmlnZ2VyVGhhbkVuZCkge1xuICAgICAgICAgIGNlbGwub25DbGljayA9ICgpID0+IHRoaXMubmV4dENlbnR1cnkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjZWxsLm9uQ2xpY2sgPSAoKSA9PiB0aGlzLmNob29zZURlY2FkZShzdGFydCk7XG4gICAgICAgIH1cblxuICAgICAgICBpbmRleCArKztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGRlY2FkZXM7XG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBQYW5lbERlY2FkZURhdGEge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGlzQ3VycmVudDogYm9vbGVhbjtcbiAgaXNMb3dlclRoYW5TdGFydDogYm9vbGVhbjtcbiAgaXNCaWdnZXJUaGFuRW5kOiBib29sZWFuO1xuICBjbGFzc01hcDogb2JqZWN0O1xuICBvbkNsaWNrKCk6IHZvaWQ7XG59XG4iXX0=