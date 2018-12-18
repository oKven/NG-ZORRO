/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
var NzListItemComponent = /** @class */ (function () {
    function NzListItemComponent() {
        this.nzActions = [];
    }
    NzListItemComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-list-item',
                    template: "<ng-template #contentTpl>\n  <div *ngIf=\"nzContent\" class=\"ant-list-item-content\" [ngClass]=\"{'ant-list-item-content-single': metas.length < 1}\">\n    <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n  </div>\n</ng-template>\n<ng-template #actionsTpl>\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\n    <li *ngFor=\"let i of nzActions; let last=last;\">\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\n    </li>\n  </ul>\n</ng-template>\n<ng-template #mainTpl>\n  <ng-content></ng-content>\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\n</ng-template>\n<div *ngIf=\"nzExtra; else mainTpl\" class=\"ant-list-item-extra-wrap\">\n  <div class=\"ant-list-item-main\">\n    <ng-template [ngTemplateOutlet]=\"mainTpl\"></ng-template>\n  </div>\n  <div class=\"ant-list-item-extra\">\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\n  </div>\n</div>",
                    preserveWhitespaces: false,
                    encapsulation: ViewEncapsulation.None,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    host: {
                        '[class.ant-list-item]': 'true'
                    }
                }] }
    ];
    NzListItemComponent.propDecorators = {
        metas: [{ type: ContentChildren, args: [NzListItemMetaComponent,] }],
        nzActions: [{ type: Input }],
        nzContent: [{ type: Input }],
        nzExtra: [{ type: Input }]
    };
    return NzListItemComponent;
}());
export { NzListItemComponent };
function NzListItemComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzListItemComponent.prototype.metas;
    /** @type {?} */
    NzListItemComponent.prototype.nzActions;
    /** @type {?} */
    NzListItemComponent.prototype.nzContent;
    /** @type {?} */
    NzListItemComponent.prototype.nzExtra;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbGlzdC1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJsaXN0L256LWxpc3QtaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsZUFBZSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXRJLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7UUFldEUsaUJBQStDLEVBQUUsQ0FBQzs7O2dCQWJuRCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLGNBQWM7b0JBQ25DLCtrQ0FBb0Q7b0JBQ3BELG1CQUFtQixFQUFFLEtBQUs7b0JBQzFCLGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtvQkFDbkQsSUFBSSxFQUFpQjt3QkFDbkIsdUJBQXVCLEVBQUUsTUFBTTtxQkFDaEM7aUJBQ0Y7Ozt3QkFFRSxlQUFlLFNBQUMsdUJBQXVCOzRCQUV2QyxLQUFLOzRCQUVMLEtBQUs7MEJBRUwsS0FBSzs7OEJBckJSOztTQWNhLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgSW5wdXQsIFF1ZXJ5TGlzdCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE56TGlzdEl0ZW1NZXRhQ29tcG9uZW50IH0gZnJvbSAnLi9uei1saXN0LWl0ZW0tbWV0YS5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LWxpc3QtaXRlbScsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LWxpc3QtaXRlbS5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGhvc3QgICAgICAgICAgICAgICA6IHtcbiAgICAnW2NsYXNzLmFudC1saXN0LWl0ZW1dJzogJ3RydWUnXG4gIH1cbn0pXG5leHBvcnQgY2xhc3MgTnpMaXN0SXRlbUNvbXBvbmVudCB7XG4gIEBDb250ZW50Q2hpbGRyZW4oTnpMaXN0SXRlbU1ldGFDb21wb25lbnQpIG1ldGFzICE6IFF1ZXJ5TGlzdDxOekxpc3RJdGVtTWV0YUNvbXBvbmVudD47XG5cbiAgQElucHV0KCkgbnpBY3Rpb25zOiBBcnJheTxUZW1wbGF0ZVJlZjx2b2lkPj4gPSBbXTtcblxuICBASW5wdXQoKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIEBJbnB1dCgpIG56RXh0cmE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xufVxuIl19