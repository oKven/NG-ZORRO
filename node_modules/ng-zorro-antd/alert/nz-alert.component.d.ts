import { EventEmitter, OnChanges, SimpleChanges, TemplateRef } from '@angular/core';
import { NgClassType } from '../core/types/ng-class';
export declare class NzAlertComponent implements OnChanges {
    display: boolean;
    isTypeSet: boolean;
    isShowIconSet: boolean;
    iconType: string;
    iconTheme: string;
    readonly nzOnClose: EventEmitter<boolean>;
    nzCloseable: boolean;
    nzShowIcon: boolean;
    nzBanner: boolean;
    nzCloseText: string | TemplateRef<void>;
    nzIconType: NgClassType;
    nzMessage: string | TemplateRef<void>;
    nzDescription: string | TemplateRef<void>;
    nzType: string;
    closeAlert(): void;
    onFadeAnimationDone(): void;
    updateIconClassMap(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
