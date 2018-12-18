import { ElementRef } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { NzColComponent } from '../grid/nz-col.component';
import { NzRowDirective } from '../grid/nz-row.directive';
import { NzFormItemComponent } from './nz-form-item.component';
export declare class NzFormLabelComponent extends NzColComponent {
    nzFor: string;
    nzRequired: boolean;
    constructor(nzUpdateHostClassService: NzUpdateHostClassService, elementRef: ElementRef, nzFormItemComponent: NzFormItemComponent, nzRowDirective: NzRowDirective);
}
