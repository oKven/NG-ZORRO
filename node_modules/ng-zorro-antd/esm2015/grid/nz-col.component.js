/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, Host, HostBinding, Input, Optional, ViewEncapsulation } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { isNotNil } from '../core/util/check';
import { NzRowComponent } from './nz-row.component';
import { NzRowDirective } from './nz-row.directive';
/**
 * @record
 */
export function EmbeddedProperty() { }
function EmbeddedProperty_tsickle_Closure_declarations() {
    /** @type {?} */
    EmbeddedProperty.prototype.span;
    /** @type {?} */
    EmbeddedProperty.prototype.pull;
    /** @type {?} */
    EmbeddedProperty.prototype.push;
    /** @type {?} */
    EmbeddedProperty.prototype.offset;
    /** @type {?} */
    EmbeddedProperty.prototype.order;
}
export class NzColComponent {
    /**
     * @param {?} nzUpdateHostClassService
     * @param {?} elementRef
     * @param {?} nzRowComponent
     * @param {?} nzRowDirective
     */
    constructor(nzUpdateHostClassService, elementRef, nzRowComponent, nzRowDirective) {
        this.nzUpdateHostClassService = nzUpdateHostClassService;
        this.elementRef = elementRef;
        this.nzRowComponent = nzRowComponent;
        this.nzRowDirective = nzRowDirective;
        this.el = this.elementRef.nativeElement;
        this.prefixCls = 'ant-col';
    }
    /**
     * @return {?}
     */
    get paddingLeft() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * @return {?}
     */
    get paddingRight() {
        return this.nzRow && this.nzRow.actualGutter / 2;
    }
    /**
     * temp solution since no method add classMap to host https://github.com/angular/angular/issues/7289
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        const classMap = Object.assign({ [`${this.prefixCls}-${this.nzSpan}`]: isNotNil(this.nzSpan), [`${this.prefixCls}-order-${this.nzOrder}`]: isNotNil(this.nzOrder), [`${this.prefixCls}-offset-${this.nzOffset}`]: isNotNil(this.nzOffset), [`${this.prefixCls}-pull-${this.nzPull}`]: isNotNil(this.nzPull), [`${this.prefixCls}-push-${this.nzPush}`]: isNotNil(this.nzPush) }, this.generateClass());
        this.nzUpdateHostClassService.updateHostClass(this.el, classMap);
    }
    /**
     * @return {?}
     */
    generateClass() {
        /** @type {?} */
        const listOfSizeInputName = ['nzXs', 'nzSm', 'nzMd', 'nzLg', 'nzXl', 'nzXXl'];
        /** @type {?} */
        const listClassMap = {};
        listOfSizeInputName.forEach(name => {
            /** @type {?} */
            const sizeName = name.replace('nz', '').toLowerCase();
            if (isNotNil(this[name])) {
                if ((typeof (this[name]) === 'number') || (typeof (this[name]) === 'string')) {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name]}`] = true;
                }
                else {
                    listClassMap[`${this.prefixCls}-${sizeName}-${this[name].span}`] = this[name] && isNotNil(this[name].span);
                    listClassMap[`${this.prefixCls}-${sizeName}-pull-${this[name].pull}`] = this[name] && isNotNil(this[name].pull);
                    listClassMap[`${this.prefixCls}-${sizeName}-push-${this[name].push}`] = this[name] && isNotNil(this[name].push);
                    listClassMap[`${this.prefixCls}-${sizeName}-offset-${this[name].offset}`] = this[name] && isNotNil(this[name].offset);
                    listClassMap[`${this.prefixCls}-${sizeName}-order-${this[name].order}`] = this[name] && isNotNil(this[name].order);
                }
            }
        });
        return listClassMap;
    }
    /**
     * @return {?}
     */
    get nzRow() {
        return this.nzRowComponent || this.nzRowDirective;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setClassMap();
    }
}
NzColComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-col',
                providers: [NzUpdateHostClassService],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                preserveWhitespaces: false,
                template: "<ng-content></ng-content>"
            }] }
];
/** @nocollapse */
NzColComponent.ctorParameters = () => [
    { type: NzUpdateHostClassService },
    { type: ElementRef },
    { type: NzRowComponent, decorators: [{ type: Optional }, { type: Host }] },
    { type: NzRowDirective, decorators: [{ type: Optional }, { type: Host }] }
];
NzColComponent.propDecorators = {
    paddingLeft: [{ type: HostBinding, args: ['style.padding-left.px',] }],
    paddingRight: [{ type: HostBinding, args: ['style.padding-right.px',] }],
    nzSpan: [{ type: Input }],
    nzOrder: [{ type: Input }],
    nzOffset: [{ type: Input }],
    nzPush: [{ type: Input }],
    nzPull: [{ type: Input }],
    nzXs: [{ type: Input }],
    nzSm: [{ type: Input }],
    nzMd: [{ type: Input }],
    nzLg: [{ type: Input }],
    nzXl: [{ type: Input }],
    nzXXl: [{ type: Input }]
};
function NzColComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzColComponent.prototype.el;
    /** @type {?} */
    NzColComponent.prototype.prefixCls;
    /** @type {?} */
    NzColComponent.prototype.nzSpan;
    /** @type {?} */
    NzColComponent.prototype.nzOrder;
    /** @type {?} */
    NzColComponent.prototype.nzOffset;
    /** @type {?} */
    NzColComponent.prototype.nzPush;
    /** @type {?} */
    NzColComponent.prototype.nzPull;
    /** @type {?} */
    NzColComponent.prototype.nzXs;
    /** @type {?} */
    NzColComponent.prototype.nzSm;
    /** @type {?} */
    NzColComponent.prototype.nzMd;
    /** @type {?} */
    NzColComponent.prototype.nzLg;
    /** @type {?} */
    NzColComponent.prototype.nzXl;
    /** @type {?} */
    NzColComponent.prototype.nzXXl;
    /** @type {?} */
    NzColComponent.prototype.nzUpdateHostClassService;
    /** @type {?} */
    NzColComponent.prototype.elementRef;
    /** @type {?} */
    NzColComponent.prototype.nzRowComponent;
    /** @type {?} */
    NzColComponent.prototype.nzRowDirective;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJncmlkL256LWNvbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixJQUFJLEVBQ0osV0FBVyxFQUNYLEtBQUssRUFHTCxRQUFRLEVBRVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUU5QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG9CQUFvQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztBQWtCcEQsTUFBTSxPQUFPLGNBQWM7Ozs7Ozs7SUFvRXpCLFlBQW9CLHdCQUFrRCxFQUFVLFVBQXNCLEVBQTZCLGNBQThCLEVBQTZCLGNBQThCO1FBQXhNLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQTZCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUE2QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7a0JBbkVsTSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWE7eUJBQ25DLFNBQVM7S0FtRTVCOzs7O0lBakVELElBQ0ksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUM7S0FDbEQ7Ozs7SUFFRCxJQUNJLFlBQVk7UUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO0tBQ2xEOzs7OztJQWVELFdBQVc7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O29CQUNMLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0LFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgU2ltcGxlQ2hhbmdlLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTnpVcGRhdGVIb3N0Q2xhc3NTZXJ2aWNlIH0gZnJvbSAnLi4vY29yZS9zZXJ2aWNlcy91cGRhdGUtaG9zdC1jbGFzcy5zZXJ2aWNlJztcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnLi4vY29yZS91dGlsL2NoZWNrJztcblxuaW1wb3J0IHsgTnpSb3dDb21wb25lbnQgfSBmcm9tICcuL256LXJvdy5jb21wb25lbnQnO1xuaW1wb3J0IHsgTnpSb3dEaXJlY3RpdmUgfSBmcm9tICcuL256LXJvdy5kaXJlY3RpdmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVtYmVkZGVkUHJvcGVydHkge1xuICBzcGFuOiBudW1iZXI7XG4gIHB1bGw6IG51bWJlcjtcbiAgcHVzaDogbnVtYmVyO1xuICBvZmZzZXQ6IG51bWJlcjtcbiAgb3JkZXI6IG51bWJlcjtcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1jb2wnLFxuICBwcm92aWRlcnMgICAgICAgICAgOiBbIE56VXBkYXRlSG9zdENsYXNzU2VydmljZSBdLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZVVybCAgICAgICAgOiAnLi9uei1jb2wuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIE56Q29sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuICBwcml2YXRlIGVsOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtY29sJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLnBhZGRpbmctbGVmdC5weCcpXG4gIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLm56Um93ICYmIHRoaXMubnpSb3cuYWN0dWFsR3V0dGVyIC8gMjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUucGFkZGluZy1yaWdodC5weCcpXG4gIGdldCBwYWRkaW5nUmlnaHQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5uelJvdyAmJiB0aGlzLm56Um93LmFjdHVhbEd1dHRlciAvIDI7XG4gIH1cblxuICBASW5wdXQoKSBuelNwYW46IG51bWJlcjtcbiAgQElucHV0KCkgbnpPcmRlcjogbnVtYmVyO1xuICBASW5wdXQoKSBuek9mZnNldDogbnVtYmVyO1xuICBASW5wdXQoKSBuelB1c2g6IG51bWJlcjtcbiAgQElucHV0KCkgbnpQdWxsOiBudW1iZXI7XG4gIEBJbnB1dCgpIG56WHM6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56U206IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56TWQ6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56TGc6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56WGw6IG51bWJlciB8IEVtYmVkZGVkUHJvcGVydHk7XG4gIEBJbnB1dCgpIG56WFhsOiBudW1iZXIgfCBFbWJlZGRlZFByb3BlcnR5O1xuXG4gIC8qKiB0ZW1wIHNvbHV0aW9uIHNpbmNlIG5vIG1ldGhvZCBhZGQgY2xhc3NNYXAgdG8gaG9zdCBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2lzc3Vlcy83Mjg5Ki9cbiAgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgY29uc3QgY2xhc3NNYXAgPSB7XG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpTcGFufWAgXSAgICAgICAgIDogaXNOb3ROaWwodGhpcy5uelNwYW4pLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tb3JkZXItJHt0aGlzLm56T3JkZXJ9YCBdICA6IGlzTm90TmlsKHRoaXMubnpPcmRlciksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1vZmZzZXQtJHt0aGlzLm56T2Zmc2V0fWAgXTogaXNOb3ROaWwodGhpcy5uek9mZnNldCksXG4gICAgICBbIGAke3RoaXMucHJlZml4Q2xzfS1wdWxsLSR7dGhpcy5uelB1bGx9YCBdICAgIDogaXNOb3ROaWwodGhpcy5uelB1bGwpLFxuICAgICAgWyBgJHt0aGlzLnByZWZpeENsc30tcHVzaC0ke3RoaXMubnpQdXNofWAgXSAgICA6IGlzTm90TmlsKHRoaXMubnpQdXNoKSxcbiAgICAgIC4uLnRoaXMuZ2VuZXJhdGVDbGFzcygpXG4gICAgfTtcbiAgICB0aGlzLm56VXBkYXRlSG9zdENsYXNzU2VydmljZS51cGRhdGVIb3N0Q2xhc3ModGhpcy5lbCwgY2xhc3NNYXApO1xuICB9XG5cbiAgZ2VuZXJhdGVDbGFzcygpOiBvYmplY3Qge1xuICAgIGNvbnN0IGxpc3RPZlNpemVJbnB1dE5hbWUgPSBbICduelhzJywgJ256U20nLCAnbnpNZCcsICduekxnJywgJ256WGwnLCAnbnpYWGwnIF07XG4gICAgY29uc3QgbGlzdENsYXNzTWFwID0ge307XG4gICAgbGlzdE9mU2l6ZUlucHV0TmFtZS5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgY29uc3Qgc2l6ZU5hbWUgPSBuYW1lLnJlcGxhY2UoJ256JywgJycpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoaXNOb3ROaWwodGhpc1sgbmFtZSBdKSkge1xuICAgICAgICBpZiAoKHR5cGVvZiAodGhpc1sgbmFtZSBdKSA9PT0gJ251bWJlcicpIHx8ICh0eXBlb2YgKHRoaXNbIG5hbWUgXSkgPT09ICdzdHJpbmcnKSkge1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LSR7dGhpc1sgbmFtZSBdfWAgXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbGlzdENsYXNzTWFwWyBgJHt0aGlzLnByZWZpeENsc30tJHtzaXplTmFtZX0tJHt0aGlzWyBuYW1lIF0uc3Bhbn1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnNwYW4pO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LXB1bGwtJHt0aGlzWyBuYW1lIF0ucHVsbH1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnB1bGwpO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LXB1c2gtJHt0aGlzWyBuYW1lIF0ucHVzaH1gIF0gPSB0aGlzWyBuYW1lIF0gJiYgaXNOb3ROaWwodGhpc1sgbmFtZSBdLnB1c2gpO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LW9mZnNldC0ke3RoaXNbIG5hbWUgXS5vZmZzZXR9YCBdID0gdGhpc1sgbmFtZSBdICYmIGlzTm90TmlsKHRoaXNbIG5hbWUgXS5vZmZzZXQpO1xuICAgICAgICAgIGxpc3RDbGFzc01hcFsgYCR7dGhpcy5wcmVmaXhDbHN9LSR7c2l6ZU5hbWV9LW9yZGVyLSR7dGhpc1sgbmFtZSBdLm9yZGVyfWAgXSA9IHRoaXNbIG5hbWUgXSAmJiBpc05vdE5pbCh0aGlzWyBuYW1lIF0ub3JkZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9KTtcbiAgICByZXR1cm4gbGlzdENsYXNzTWFwO1xuICB9XG5cbiAgZ2V0IG56Um93KCk6IE56Um93Q29tcG9uZW50IHtcbiAgICByZXR1cm4gdGhpcy5uelJvd0NvbXBvbmVudCB8fCB0aGlzLm56Um93RGlyZWN0aXZlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbIHByb3BlcnR5TmFtZTogc3RyaW5nIF06IFNpbXBsZUNoYW5nZSB9KTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuelVwZGF0ZUhvc3RDbGFzc1NlcnZpY2U6IE56VXBkYXRlSG9zdENsYXNzU2VydmljZSwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCBAT3B0aW9uYWwoKSBASG9zdCgpIHB1YmxpYyBuelJvd0NvbXBvbmVudDogTnpSb3dDb21wb25lbnQsIEBPcHRpb25hbCgpIEBIb3N0KCkgcHVibGljIG56Um93RGlyZWN0aXZlOiBOelJvd0RpcmVjdGl2ZSkge1xuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG59XG4iXX0=