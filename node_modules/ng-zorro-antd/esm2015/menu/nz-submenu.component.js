/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { animate, state, style, transition, trigger } from '@angular/animations';
import { CdkConnectedOverlay } from '@angular/cdk/overlay';
import { ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, HostBinding, Input, Optional, Output, QueryList, SkipSelf, ViewChild } from '@angular/core';
import { combineLatest, BehaviorSubject, Subject } from 'rxjs';
import { auditTime, map, takeUntil } from 'rxjs/operators';
import { POSITION_MAP } from '../core/overlay/overlay-position-map';
import { toBoolean } from '../core/util/convert';
import { NzDropDownButtonComponent } from '../dropdown/nz-dropdown-button.component';
import { NzDropDownComponent } from '../dropdown/nz-dropdown.component';
import { NzMenuDirective } from './nz-menu.directive';
export class NzSubMenuComponent {
    /**
     * @param {?} nzMenuDirective
     * @param {?} cd
     * @param {?} nzSubMenuComponent
     * @param {?} nzDropDownComponent
     * @param {?} nzDropDownButtonComponent
     */
    constructor(nzMenuDirective, cd, nzSubMenuComponent, nzDropDownComponent, nzDropDownButtonComponent) {
        this.nzMenuDirective = nzMenuDirective;
        this.cd = cd;
        this.nzSubMenuComponent = nzSubMenuComponent;
        this.nzDropDownComponent = nzDropDownComponent;
        this.nzDropDownButtonComponent = nzDropDownButtonComponent;
        this._open = false;
        this._disabled = false;
        this.$mouseSubject = new Subject();
        this.unsubscribe$ = new Subject();
        this.placement = 'rightTop';
        this.$subOpen = new BehaviorSubject(false);
        this.isInDropDown = false;
        this.isInSubMenu = false;
        this.level = 1;
        this.triggerWidth = null;
        this.nzOpenChange = new EventEmitter();
        this.handleOpenEvent = (data) => {
            if (this.nzDisabled) {
                return;
            }
            if (this.nzOpen !== data) {
                this.nzOpen = data;
                this.nzOpenChange.emit(this.nzOpen);
            }
            if (this.nzSubMenuComponent) {
                this.nzSubMenuComponent.$subOpen.next(this.nzOpen);
            }
            if (this.nzDropDownComponent) {
                this.nzDropDownComponent.$subOpen.next(this.nzOpen);
            }
            if (this.nzDropDownButtonComponent) {
                this.nzDropDownButtonComponent.$subOpen.next(this.nzOpen);
            }
        };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzOpen(value) {
        this._open = toBoolean(value);
        this.setTriggerWidth();
    }
    /**
     * @return {?}
     */
    get nzOpen() {
        return this._open;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzDisabled(value) {
        this._disabled = toBoolean(value);
    }
    /**
     * @return {?}
     */
    get nzDisabled() {
        return this._disabled;
    }
    /**
     * @return {?}
     */
    get subItemSelected() {
        return !!this.nzMenuDirective.menuItems.find(e => e.nzSelected && e.nzSubMenuComponent === this);
    }
    /**
     * @return {?}
     */
    get submenuSelected() {
        return !!this.subMenus.toArray().find(e => e !== this && e.subItemSelected);
    }
    /**
     * @return {?}
     */
    get expandState() {
        if (this.nzOpen && this.subMenuMode === 'inline') {
            return 'expand';
        }
        else if (this.nzOpen && this.subMenuMode === 'horizontal') {
            return 'bottom';
        }
        else if (this.nzOpen && this.subMenuMode === 'vertical') {
            return 'fade';
        }
        else {
            return 'hidden';
        }
    }
    /**
     * @return {?}
     */
    get overlayPositions() {
        if (this.subMenuMode === 'horizontal') {
            return [POSITION_MAP["bottomLeft"]];
        }
        else {
            return [POSITION_MAP["rightTop"], POSITION_MAP["leftTop"]];
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    clickSubMenuTitle($event) {
        if (this.nzDisabled) {
            $event.preventDefault();
            $event.stopPropagation();
            return;
        }
        if ((this.subMenuMode === 'inline') && (!this.isInDropDown)) {
            this.nzOpen = !this.nzOpen;
            this.nzOpenChange.emit(this.nzOpen);
        }
    }
    /**
     * @return {?}
     */
    clickSubMenuDropDown() {
        if (this.isInDropDown || (this.subMenuMode === 'vertical') || (this.subMenuMode === 'horizontal')) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get subMenuMode() {
        if (this.nzMenuDirective.nzMode === 'inline') {
            return 'inline';
        }
        else if ((this.nzMenuDirective.nzMode === 'vertical') || (this.isInSubMenu)) {
            return 'vertical';
        }
        else {
            return 'horizontal';
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseEnterEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(true);
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMouseLeaveEvent(e) {
        if ((this.subMenuMode === 'horizontal') || (this.subMenuMode === 'vertical') || this.isInDropDown) {
            this.$mouseSubject.next(false);
        }
    }
    /**
     * @return {?}
     */
    get setDropDownSubmenuClass() {
        return this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuOpenClass() {
        return (!this.isInDropDown) && (this.nzOpen);
    }
    /**
     * @return {?}
     */
    get setDropDownVerticalClass() {
        return this.isInDropDown && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setDropDownHorizontalClass() {
        return this.isInDropDown && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setDropDownDisabled() {
        return this.isInDropDown && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuClass() {
        return !this.isInDropDown;
    }
    /**
     * @return {?}
     */
    get setMenuSubmenuSelectedClass() {
        return this.submenuSelected || this.subItemSelected;
    }
    /**
     * @return {?}
     */
    get setMenuVerticalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'vertical');
    }
    /**
     * @return {?}
     */
    get setMenuHorizontalClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'horizontal');
    }
    /**
     * @return {?}
     */
    get setMenuInlineClass() {
        return (!this.isInDropDown) && (this.subMenuMode === 'inline');
    }
    /**
     * @return {?}
     */
    get setMenuDisabled() {
        return (!this.isInDropDown) && this.nzDisabled;
    }
    /**
     * @return {?}
     */
    setTriggerWidth() {
        if (this.subMenuMode === 'horizontal') {
            this.triggerWidth = this.trigger.nativeElement.getBoundingClientRect().width;
            /** should remove after after https://github.com/angular/material2/pull/8765 merged **/
            if (this.cdkOverlay && this.cdkOverlay.overlayRef) {
                this.cdkOverlay.overlayRef.updateSize({
                    width: this.triggerWidth
                });
            }
        }
    }
    /**
     * @param {?} $event
     * @return {?}
     */
    onPositionChange($event) {
        if ($event.connectionPair) {
            /** @type {?} */
            const originMap = {
                originX: $event.connectionPair.originX,
                originY: $event.connectionPair.originY,
                overlayX: $event.connectionPair.overlayX,
                overlayY: $event.connectionPair.overlayY
            };
            /** @type {?} */
            const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
            if (keyList.every(key => originMap[key] === POSITION_MAP["leftTop"][key])) {
                this.placement = 'leftTop';
            }
            else if (keyList.every(key => originMap[key] === POSITION_MAP["rightTop"][key])) {
                this.placement = 'rightTop';
            }
            this.cd.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.nzSubMenuComponent) {
            this.level = this.nzSubMenuComponent.level + 1;
            this.isInSubMenu = true;
        }
        this.nzMenuDirective.subMenus.push(this);
        /** @type {?} */
        const $combineAll = combineLatest(this.$subOpen, this.$mouseSubject.asObservable()).pipe(map(value => value[0] || value[1]), auditTime(150));
        $combineAll.pipe(takeUntil(this.unsubscribe$)).subscribe(this.handleOpenEvent);
        this.isInDropDown = this.nzMenuDirective.nzInDropDown;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
NzSubMenuComponent.decorators = [
    { type: Component, args: [{
                selector: '[nz-submenu]',
                preserveWhitespaces: false,
                animations: [
                    trigger('expandAnimation', [
                        state('expand', style({ height: '*' })),
                        state('hidden', style({ height: 0, overflow: 'hidden' })),
                        transition('expand => hidden', animate(150)),
                        transition('hidden => expand', animate(150)),
                        state('fade', style({ opacity: 1 })),
                        transition('fade => void', [
                            animate(150, style({ opacity: 0 }))
                        ]),
                        transition('void => fade', [
                            style({ opacity: '0' }),
                            animate(150)
                        ]),
                        state('bottom', style({
                            opacity: 1,
                            transform: 'scaleY(1)',
                            transformOrigin: '0% 0%'
                        })),
                        transition('void => bottom', [
                            style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }),
                            animate('150ms cubic-bezier(0.23, 1, 0.32, 1)')
                        ]),
                        transition('bottom => void', [
                            animate('150ms cubic-bezier(0.23, 1, 0.32, 1)', style({
                                opacity: 0,
                                transform: 'scaleY(0.8)',
                                transformOrigin: '0% 0%'
                            }))
                        ])
                    ])
                ],
                template: "<div\n  #trigger\n  cdkOverlayOrigin\n  #origin=\"cdkOverlayOrigin\"\n  [class.ant-dropdown-menu-submenu-title]=\"isInDropDown\"\n  [class.ant-menu-submenu-title]=\"!isInDropDown\"\n  (mouseenter)=\"onMouseEnterEvent($event)\"\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\n  (click)=\"clickSubMenuTitle($event)\"\n  [style.paddingLeft.px]=\"(nzMenuDirective.nzMode === 'inline')?(level*nzMenuDirective.nzInlineIndent):null\">\n  <ng-content select=\"[title]\"></ng-content>\n  <span *ngIf=\"isInDropDown; else notDropdownTpl\" class=\"ant-dropdown-menu-submenu-arrow\">\n    <i nz-icon type=\"right\" class=\"anticon-right ant-dropdown-menu-submenu-arrow-icon\"></i>\n  </span>\n  <ng-template #notDropdownTpl>\n    <i class=\"ant-menu-submenu-arrow\"></i>\n  </ng-template>\n</div>\n<ul\n  [class.ant-dropdown-menu]=\"isInDropDown\"\n  [@expandAnimation]=\"expandState\"\n  [class.ant-menu]=\"!isInDropDown\"\n  [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\n  [class.ant-menu-inline]=\"!isInDropDown\"\n  [class.ant-dropdown-menu-sub]=\"isInDropDown\"\n  [class.ant-menu-sub]=\"!isInDropDown\"\n  (mouseleave)=\"onMouseLeaveEvent($event)\"\n  (mouseenter)=\"onMouseEnterEvent($event)\"\n  *ngIf=\"(nzMenuDirective.nzMode=='inline')\">\n  <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n</ul>\n<ng-template\n  cdkConnectedOverlay\n  [cdkConnectedOverlayPositions]=\"overlayPositions\"\n  [cdkConnectedOverlayOrigin]=\"origin\"\n  [cdkConnectedOverlayWidth]=\"triggerWidth\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayOpen]=\"nzOpen&&(nzMenuDirective.nzMode!='inline')\">\n  <div\n    class=\"ant-menu-submenu ant-menu-submenu-popup\"\n    [class.ant-menu-light]=\"nzMenuDirective.nzTheme=='light'\"\n    [class.ant-menu-dark]=\"nzMenuDirective.nzTheme=='dark'\"\n    [class.ant-menu-submenu-placement-bottomLeft]=\"subMenuMode=='horizontal'\"\n    [class.ant-menu-submenu-placement-rightTop]=\"(subMenuMode=='vertical')&&(placement=='rightTop')\"\n    [class.ant-menu-submenu-placement-leftTop]=\"(subMenuMode=='vertical')&&(placement=='leftTop')\"\n    [@expandAnimation]=\"expandState\"\n    (mouseleave)=\"onMouseLeaveEvent($event)\"\n    (mouseenter)=\"onMouseEnterEvent($event)\">\n    <ul\n      [class.ant-dropdown-menu]=\"isInDropDown\"\n      [class.ant-menu]=\"!isInDropDown\"\n      [class.ant-dropdown-menu-vertical]=\"isInDropDown\"\n      [class.ant-menu-vertical]=\"!isInDropDown\"\n      [class.ant-dropdown-menu-sub]=\"isInDropDown\"\n      [class.ant-menu-sub]=\"!isInDropDown\">\n      <ng-template [ngTemplateOutlet]=\"subMenuTemplate\"></ng-template>\n    </ul>\n  </div>\n</ng-template>\n<ng-template #subMenuTemplate>\n  <ng-content></ng-content>\n</ng-template>",
                styles: [`
      .ant-menu-submenu-placement-bottomLeft {
        top: 6px;
        position: relative;
      }

      .ant-menu-submenu-placement-rightTop {
        left: 4px;
        position: relative;
      }

      .ant-menu-submenu-placement-leftTop {
        right: 4px;
        position: relative;
      }
    `]
            }] }
];
/** @nocollapse */
NzSubMenuComponent.ctorParameters = () => [
    { type: NzMenuDirective },
    { type: ChangeDetectorRef },
    { type: NzSubMenuComponent, decorators: [{ type: SkipSelf }, { type: Optional }] },
    { type: NzDropDownComponent, decorators: [{ type: Host }, { type: Optional }] },
    { type: NzDropDownButtonComponent, decorators: [{ type: Host }, { type: Optional }] }
];
NzSubMenuComponent.propDecorators = {
    subMenus: [{ type: ContentChildren, args: [NzSubMenuComponent, { descendants: true },] }],
    nzOpenChange: [{ type: Output }],
    cdkOverlay: [{ type: ViewChild, args: [CdkConnectedOverlay,] }],
    trigger: [{ type: ViewChild, args: ['trigger',] }],
    nzOpen: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    setDropDownSubmenuClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu',] }],
    setMenuSubmenuOpenClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-open',] }],
    setDropDownVerticalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-vertical',] }],
    setDropDownHorizontalClass: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-horizontal',] }],
    setDropDownDisabled: [{ type: HostBinding, args: ['class.ant-dropdown-menu-submenu-disabled',] }],
    setMenuSubmenuClass: [{ type: HostBinding, args: ['class.ant-menu-submenu',] }],
    setMenuSubmenuSelectedClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-selected',] }],
    setMenuVerticalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-vertical',] }],
    setMenuHorizontalClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-horizontal',] }],
    setMenuInlineClass: [{ type: HostBinding, args: ['class.ant-menu-submenu-inline',] }],
    setMenuDisabled: [{ type: HostBinding, args: ['class.ant-menu-submenu-disabled',] }]
};
function NzSubMenuComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzSubMenuComponent.prototype._open;
    /** @type {?} */
    NzSubMenuComponent.prototype._disabled;
    /** @type {?} */
    NzSubMenuComponent.prototype.$mouseSubject;
    /** @type {?} */
    NzSubMenuComponent.prototype.unsubscribe$;
    /** @type {?} */
    NzSubMenuComponent.prototype.placement;
    /** @type {?} */
    NzSubMenuComponent.prototype.$subOpen;
    /** @type {?} */
    NzSubMenuComponent.prototype.isInDropDown;
    /** @type {?} */
    NzSubMenuComponent.prototype.isInSubMenu;
    /** @type {?} */
    NzSubMenuComponent.prototype.level;
    /** @type {?} */
    NzSubMenuComponent.prototype.triggerWidth;
    /** @type {?} */
    NzSubMenuComponent.prototype.subMenus;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzOpenChange;
    /** @type {?} */
    NzSubMenuComponent.prototype.cdkOverlay;
    /** @type {?} */
    NzSubMenuComponent.prototype.trigger;
    /** @type {?} */
    NzSubMenuComponent.prototype.handleOpenEvent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzMenuDirective;
    /** @type {?} */
    NzSubMenuComponent.prototype.cd;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzSubMenuComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDropDownComponent;
    /** @type {?} */
    NzSubMenuComponent.prototype.nzDropDownButtonComponent;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3VibWVudS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkLyIsInNvdXJjZXMiOlsibWVudS9uei1zdWJtZW51LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsbUJBQW1CLEVBQTBELE1BQU0sc0JBQXNCLENBQUM7QUFDbkgsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLFVBQVUsRUFDVixZQUFZLEVBQ1osSUFBSSxFQUNKLFdBQVcsRUFDWCxLQUFLLEVBR0wsUUFBUSxFQUNSLE1BQU0sRUFDTixTQUFTLEVBQ1QsUUFBUSxFQUNSLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0QsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0QsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNyRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUE4RHRELE1BQU0sT0FBTyxrQkFBa0I7Ozs7Ozs7O0lBaU43QixZQUFtQixlQUFnQyxFQUFVLEVBQXFCLEVBQWtDLGtCQUFzQyxFQUE4QixtQkFBd0MsRUFBOEIseUJBQW9EO1FBQS9SLG9CQUFlLEdB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bFJ0Syx5QkFBeUIsdUJBa1JtTSxJQUFJLFlBQUksUUFBUTs7O3VCQXJNbFAsZUFBZSxTQUFDLGtCQUFrQixFQUFFLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRTsyQkFDekQsTUFBTTt5QkFDTixTQUFTLFNBQUMsbUJBQW1CO3NCQUM3QixTQUFTLFNBQUMsU0FBUztxQkFFbkIsS0FBSzt5QkFVTCxLQUFLO3NDQTZFTCxXQUFXLFNBQUMsaUNBQWlDO3NDQUs3QyxXQUFXLFNBQUMsNkJBQTZCO3VDQUt6QyxXQUFXLFNBQUMsMENBQTBDO3lDQUt0RCxXQUFXLFNBQUMsNENBQTRDO2tDQUt4RCxXQUFXLFNBQUMsMENBQTBDO2tDQUt0RCxXQUFXLFNBQUMsd0JBQXdCOzBDQUtwQyxXQUFXLFNBQUMsaUNBQWlDO21DQUs3QyxXQUFXLFNBQUMsaUNBQWlDO3FDQUs3QyxXQUFXLFNBQUMsbUNBQW1DO2lDQUsvQyxXQUFXLFNBQUMsK0JBQStCOzhCQUszQyxXQUFXLFNBQUMsaUNBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBDZGtDb25uZWN0ZWRPdmVybGF5LCBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIE91dHB1dCxcbiAgUXVlcnlMaXN0LFxuICBTa2lwU2VsZixcbiAgVmlld0NoaWxkXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGF1ZGl0VGltZSwgbWFwLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IFBPU0lUSU9OX01BUCB9IGZyb20gJy4uL2NvcmUvb3ZlcmxheS9vdmVybGF5LXBvc2l0aW9uLW1hcCc7XG5pbXBvcnQgeyB0b0Jvb2xlYW4gfSBmcm9tICcuLi9jb3JlL3V0aWwvY29udmVydCc7XG5pbXBvcnQgeyBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vbnotZHJvcGRvd24tYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOekRyb3BEb3duQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJvcGRvd24vbnotZHJvcGRvd24uY29tcG9uZW50JztcblxuaW1wb3J0IHsgTnpNZW51RGlyZWN0aXZlIH0gZnJvbSAnLi9uei1tZW51LmRpcmVjdGl2ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnW256LXN1Ym1lbnVdJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGFuaW1hdGlvbnMgICAgICAgICA6IFtcbiAgICB0cmlnZ2VyKCdleHBhbmRBbmltYXRpb24nLCBbXG4gICAgICBzdGF0ZSgnZXhwYW5kJywgc3R5bGUoeyBoZWlnaHQ6ICcqJyB9KSksXG4gICAgICBzdGF0ZSgnaGlkZGVuJywgc3R5bGUoeyBoZWlnaHQ6IDAsIG92ZXJmbG93OiAnaGlkZGVuJyB9KSksXG4gICAgICB0cmFuc2l0aW9uKCdleHBhbmQgPT4gaGlkZGVuJywgYW5pbWF0ZSgxNTApKSxcbiAgICAgIHRyYW5zaXRpb24oJ2hpZGRlbiA9PiBleHBhbmQnLCBhbmltYXRlKDE1MCkpLFxuICAgICAgc3RhdGUoJ2ZhZGUnLCBzdHlsZSh7IG9wYWNpdHk6IDEgfSkpLFxuICAgICAgdHJhbnNpdGlvbignZmFkZSA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKDE1MCwgc3R5bGUoeyBvcGFjaXR5OiAwIH0pKVxuICAgICAgXSksXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IGZhZGUnLCBbXG4gICAgICAgIHN0eWxlKHsgb3BhY2l0eTogJzAnIH0pLFxuICAgICAgICBhbmltYXRlKDE1MClcbiAgICAgIF0pLFxuICAgICAgc3RhdGUoJ2JvdHRvbScsIHN0eWxlKHtcbiAgICAgICAgb3BhY2l0eSAgICAgICAgOiAxLFxuICAgICAgICB0cmFuc2Zvcm0gICAgICA6ICdzY2FsZVkoMSknLFxuICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gYm90dG9tJywgW1xuICAgICAgICBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSksXG4gICAgICAgIGFuaW1hdGUoJzE1MG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKScpXG4gICAgICBdKSxcbiAgICAgIHRyYW5zaXRpb24oJ2JvdHRvbSA9PiB2b2lkJywgW1xuICAgICAgICBhbmltYXRlKCcxNTBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSknLCBzdHlsZSh7XG4gICAgICAgICAgb3BhY2l0eSAgICAgICAgOiAwLFxuICAgICAgICAgIHRyYW5zZm9ybSAgICAgIDogJ3NjYWxlWSgwLjgpJyxcbiAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW46ICcwJSAwJSdcbiAgICAgICAgfSkpXG4gICAgICBdKVxuICAgIF0pXG4gIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXN1Ym1lbnUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbXG4gICAgYFxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWJvdHRvbUxlZnQge1xuICAgICAgICB0b3A6IDZweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuYW50LW1lbnUtc3VibWVudS1wbGFjZW1lbnQtcmlnaHRUb3Age1xuICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLmFudC1tZW51LXN1Ym1lbnUtcGxhY2VtZW50LWxlZnRUb3Age1xuICAgICAgICByaWdodDogNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYFxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTnpTdWJNZW51Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIF9vcGVuID0gZmFsc2U7XG4gIHByaXZhdGUgX2Rpc2FibGVkID0gZmFsc2U7XG4gIHByaXZhdGUgJG1vdXNlU3ViamVjdCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XG4gIHByaXZhdGUgdW5zdWJzY3JpYmUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBwbGFjZW1lbnQgPSAncmlnaHRUb3AnO1xuICAkc3ViT3BlbiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Ym9vbGVhbj4oZmFsc2UpO1xuICBpc0luRHJvcERvd24gPSBmYWxzZTtcbiAgaXNJblN1Yk1lbnUgPSBmYWxzZTtcbiAgbGV2ZWwgPSAxO1xuICB0cmlnZ2VyV2lkdGggPSBudWxsO1xuICBAQ29udGVudENoaWxkcmVuKE56U3ViTWVudUNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBzdWJNZW51czogUXVlcnlMaXN0PE56U3ViTWVudUNvbXBvbmVudD47XG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9wZW5DaGFuZ2U6IEV2ZW50RW1pdHRlcjxib29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQFZpZXdDaGlsZChDZGtDb25uZWN0ZWRPdmVybGF5KSBjZGtPdmVybGF5OiBDZGtDb25uZWN0ZWRPdmVybGF5O1xuICBAVmlld0NoaWxkKCd0cmlnZ2VyJykgdHJpZ2dlcjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoKVxuICBzZXQgbnpPcGVuKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5fb3BlbiA9IHRvQm9vbGVhbih2YWx1ZSk7XG4gICAgdGhpcy5zZXRUcmlnZ2VyV2lkdGgoKTtcbiAgfVxuXG4gIGdldCBuek9wZW4oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX29wZW47XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbnpEaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdG9Cb29sZWFuKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBuekRpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgfVxuXG4gIGdldCBzdWJJdGVtU2VsZWN0ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICEhdGhpcy5uek1lbnVEaXJlY3RpdmUubWVudUl0ZW1zLmZpbmQoZSA9PiBlLm56U2VsZWN0ZWQgJiYgZS5uelN1Yk1lbnVDb21wb25lbnQgPT09IHRoaXMpO1xuICB9XG5cbiAgZ2V0IHN1Ym1lbnVTZWxlY3RlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gISF0aGlzLnN1Yk1lbnVzLnRvQXJyYXkoKS5maW5kKGUgPT4gZSAhPT0gdGhpcyAmJiBlLnN1Ykl0ZW1TZWxlY3RlZCk7XG4gIH1cblxuICBnZXQgZXhwYW5kU3RhdGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5uek9wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJldHVybiAnZXhwYW5kJztcbiAgICB9IGVsc2UgaWYgKHRoaXMubnpPcGVuICYmIHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuICdib3R0b20nO1xuICAgIH0gZWxzZSBpZiAodGhpcy5uek9wZW4gJiYgdGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgcmV0dXJuICdmYWRlJztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICdoaWRkZW4nO1xuICAgIH1cbiAgfVxuXG4gIGdldCBvdmVybGF5UG9zaXRpb25zKCk6IENvbm5lY3Rpb25Qb3NpdGlvblBhaXJbXSB7XG4gICAgaWYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykge1xuICAgICAgcmV0dXJuIFsgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFsgUE9TSVRJT05fTUFQLnJpZ2h0VG9wLCBQT1NJVElPTl9NQVAubGVmdFRvcCBdO1xuICAgIH1cbiAgfVxuXG4gIGNsaWNrU3ViTWVudVRpdGxlKCRldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoKHRoaXMuc3ViTWVudU1vZGUgPT09ICdpbmxpbmUnKSAmJiAoIXRoaXMuaXNJbkRyb3BEb3duKSkge1xuICAgICAgdGhpcy5uek9wZW4gPSAhdGhpcy5uek9wZW47XG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gIH1cblxuICBjbGlja1N1Yk1lbnVEcm9wRG93bigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pc0luRHJvcERvd24gfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8ICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpKSB7XG4gICAgICB0aGlzLiRtb3VzZVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN1Yk1lbnVNb2RlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMubnpNZW51RGlyZWN0aXZlLm56TW9kZSA9PT0gJ2lubGluZScpIHtcbiAgICAgIHJldHVybiAnaW5saW5lJztcbiAgICB9IGVsc2UgaWYgKCh0aGlzLm56TWVudURpcmVjdGl2ZS5uek1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8ICh0aGlzLmlzSW5TdWJNZW51KSkge1xuICAgICAgcmV0dXJuICd2ZXJ0aWNhbCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XG4gICAgfVxuICB9XG5cbiAgb25Nb3VzZUVudGVyRXZlbnQoZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGlmICgodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB8fCAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ3ZlcnRpY2FsJykgfHwgdGhpcy5pc0luRHJvcERvd24pIHtcbiAgICAgIHRoaXMuJG1vdXNlU3ViamVjdC5uZXh0KHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW91c2VMZWF2ZUV2ZW50KGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcbiAgICBpZiAoKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJykgfHwgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpIHx8IHRoaXMuaXNJbkRyb3BEb3duKSB7XG4gICAgICB0aGlzLiRtb3VzZVN1YmplY3QubmV4dChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51JylcbiAgZ2V0IHNldERyb3BEb3duU3VibWVudUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzSW5Ecm9wRG93bjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1vcGVuJylcbiAgZ2V0IHNldE1lbnVTdWJtZW51T3BlbkNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoIXRoaXMuaXNJbkRyb3BEb3duKSAmJiAodGhpcy5uek9wZW4pO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LXZlcnRpY2FsJylcbiAgZ2V0IHNldERyb3BEb3duVmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0luRHJvcERvd24gJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0RHJvcERvd25Ib3Jpem9udGFsQ2xhc3MoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmICh0aGlzLnN1Yk1lbnVNb2RlID09PSAnaG9yaXpvbnRhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtZHJvcGRvd24tbWVudS1zdWJtZW51LWRpc2FibGVkJylcbiAgZ2V0IHNldERyb3BEb3duRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNJbkRyb3BEb3duICYmIHRoaXMubnpEaXNhYmxlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudScpXG4gIGdldCBzZXRNZW51U3VibWVudUNsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhdGhpcy5pc0luRHJvcERvd247XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtc2VsZWN0ZWQnKVxuICBnZXQgc2V0TWVudVN1Ym1lbnVTZWxlY3RlZENsYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnN1Ym1lbnVTZWxlY3RlZCB8fCB0aGlzLnN1Ykl0ZW1TZWxlY3RlZDtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS12ZXJ0aWNhbCcpXG4gIGdldCBzZXRNZW51VmVydGljYWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICd2ZXJ0aWNhbCcpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hbnQtbWVudS1zdWJtZW51LWhvcml6b250YWwnKVxuICBnZXQgc2V0TWVudUhvcml6b250YWxDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdob3Jpem9udGFsJyk7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFudC1tZW51LXN1Ym1lbnUtaW5saW5lJylcbiAgZ2V0IHNldE1lbnVJbmxpbmVDbGFzcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKCF0aGlzLmlzSW5Ecm9wRG93bikgJiYgKHRoaXMuc3ViTWVudU1vZGUgPT09ICdpbmxpbmUnKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW50LW1lbnUtc3VibWVudS1kaXNhYmxlZCcpXG4gIGdldCBzZXRNZW51RGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuICghdGhpcy5pc0luRHJvcERvd24pICYmIHRoaXMubnpEaXNhYmxlZDtcbiAgfVxuXG4gIHNldFRyaWdnZXJXaWR0aCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zdWJNZW51TW9kZSA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICB0aGlzLnRyaWdnZXJXaWR0aCA9IHRoaXMudHJpZ2dlci5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgICAgLyoqIHNob3VsZCByZW1vdmUgYWZ0ZXIgYWZ0ZXIgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvbWF0ZXJpYWwyL3B1bGwvODc2NSBtZXJnZWQgKiovXG4gICAgICBpZiAodGhpcy5jZGtPdmVybGF5ICYmIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmKSB7XG4gICAgICAgIHRoaXMuY2RrT3ZlcmxheS5vdmVybGF5UmVmLnVwZGF0ZVNpemUoe1xuICAgICAgICAgIHdpZHRoOiB0aGlzLnRyaWdnZXJXaWR0aFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxuXG4gIG9uUG9zaXRpb25DaGFuZ2UoJGV2ZW50OiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiB2b2lkIHtcbiAgICBpZiAoJGV2ZW50LmNvbm5lY3Rpb25QYWlyKSB7XG4gICAgICBjb25zdCBvcmlnaW5NYXAgPSB7XG4gICAgICAgIG9yaWdpblggOiAkZXZlbnQuY29ubmVjdGlvblBhaXIub3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWSA6ICRldmVudC5jb25uZWN0aW9uUGFpci5vcmlnaW5ZLFxuICAgICAgICBvdmVybGF5WDogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlYLFxuICAgICAgICBvdmVybGF5WTogJGV2ZW50LmNvbm5lY3Rpb25QYWlyLm92ZXJsYXlZXG4gICAgICB9O1xuICAgICAgY29uc3Qga2V5TGlzdCA9IFsgJ29yaWdpblgnLCAnb3JpZ2luWScsICdvdmVybGF5WCcsICdvdmVybGF5WScgXTtcbiAgICAgIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBvcmlnaW5NYXBbIGtleSBdID09PSBQT1NJVElPTl9NQVAubGVmdFRvcFsga2V5IF0pKSB7XG4gICAgICAgIHRoaXMucGxhY2VtZW50ID0gJ2xlZnRUb3AnO1xuICAgICAgfSBlbHNlIGlmIChrZXlMaXN0LmV2ZXJ5KGtleSA9PiBvcmlnaW5NYXBbIGtleSBdID09PSBQT1NJVElPTl9NQVAucmlnaHRUb3BbIGtleSBdKSkge1xuICAgICAgICB0aGlzLnBsYWNlbWVudCA9ICdyaWdodFRvcCc7XG4gICAgICB9XG4gICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVPcGVuRXZlbnQgPSAoZGF0YTogYm9vbGVhbikgPT4ge1xuICAgIGlmICh0aGlzLm56RGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpPcGVuICE9PSBkYXRhKSB7XG4gICAgICB0aGlzLm56T3BlbiA9IGRhdGE7XG4gICAgICB0aGlzLm56T3BlbkNoYW5nZS5lbWl0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTdWJNZW51Q29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56U3ViTWVudUNvbXBvbmVudC4kc3ViT3Blbi5uZXh0KHRoaXMubnpPcGVuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpEcm9wRG93bkNvbXBvbmVudCkge1xuICAgICAgdGhpcy5uekRyb3BEb3duQ29tcG9uZW50LiRzdWJPcGVuLm5leHQodGhpcy5uek9wZW4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekRyb3BEb3duQnV0dG9uQ29tcG9uZW50KSB7XG4gICAgICB0aGlzLm56RHJvcERvd25CdXR0b25Db21wb25lbnQuJHN1Yk9wZW4ubmV4dCh0aGlzLm56T3Blbik7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHVibGljIG56TWVudURpcmVjdGl2ZTogTnpNZW51RGlyZWN0aXZlLCBwcml2YXRlIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgQFNraXBTZWxmKCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuelN1Yk1lbnVDb21wb25lbnQ6IE56U3ViTWVudUNvbXBvbmVudCwgQEhvc3QoKSBAT3B0aW9uYWwoKSBwcml2YXRlIG56RHJvcERvd25Db21wb25lbnQ6IE56RHJvcERvd25Db21wb25lbnQsIEBIb3N0KCkgQE9wdGlvbmFsKCkgcHJpdmF0ZSBuekRyb3BEb3duQnV0dG9uQ29tcG9uZW50OiBOekRyb3BEb3duQnV0dG9uQ29tcG9uZW50KSB7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5uelN1Yk1lbnVDb21wb25lbnQpIHtcbiAgICAgIHRoaXMubGV2ZWwgPSB0aGlzLm56U3ViTWVudUNvbXBvbmVudC5sZXZlbCArIDE7XG4gICAgICB0aGlzLmlzSW5TdWJNZW51ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5uek1lbnVEaXJlY3RpdmUuc3ViTWVudXMucHVzaCh0aGlzKTtcbiAgICBjb25zdCAkY29tYmluZUFsbCA9IGNvbWJpbmVMYXRlc3QodGhpcy4kc3ViT3BlbiwgdGhpcy4kbW91c2VTdWJqZWN0LmFzT2JzZXJ2YWJsZSgpKS5waXBlKG1hcCh2YWx1ZSA9PiB2YWx1ZVsgMCBdIHx8IHZhbHVlWyAxIF0pLCBhdWRpdFRpbWUoMTUwKSk7XG4gICAgJGNvbWJpbmVBbGwucGlwZSh0YWtlVW50aWwodGhpcy51bnN1YnNjcmliZSQpKS5zdWJzY3JpYmUodGhpcy5oYW5kbGVPcGVuRXZlbnQpO1xuICAgIHRoaXMuaXNJbkRyb3BEb3duID0gdGhpcy5uek1lbnVEaXJlY3RpdmUubnpJbkRyb3BEb3duO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmUkLmNvbXBsZXRlKCk7XG4gIH1cbn1cbiJdfQ==