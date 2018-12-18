import { AfterContentInit, ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { Subscription } from 'rxjs';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NgClassType } from '../core/types/ng-class';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowDirective } from '../grid/nz-row.directive';
import { NzFormItemComponent } from './nz-form-item.component';
export declare class NzFormControlComponent extends NzColComponent implements OnDestroy, OnInit, AfterContentInit {
    private cdr;
    private _hasFeedback;
    validateChanges: Subscription;
    validateString: string;
    controlClassMap: NgClassType;
    iconType: string;
    validateControl: FormControl;
    defaultValidateControl: FormControlName;
    nzHasFeedback: boolean;
    nzValidateStatus: string | FormControl | FormControlName;
    removeSubscribe(): void;
    watchControl(): void;
    validateControlStatus(status: string): boolean;
    setControlClassMap(): void;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: NzFormItemComponent, nzRowDirective: NzRowDirective, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
}
