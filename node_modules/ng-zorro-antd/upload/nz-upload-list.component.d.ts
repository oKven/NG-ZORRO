import { ElementRef, OnChanges } from '@angular/core';
import { NzUpdateHostClassService } from '../core/services/update-host-class.service';
import { ShowUploadListInterface, UploadFile, UploadListType } from './interface';
export declare class NzUploadListComponent implements OnChanges {
    private el;
    private updateHostClassService;
    locale: any;
    listType: UploadListType;
    items: UploadFile[];
    icons: ShowUploadListInterface;
    onPreview: (file: UploadFile) => void;
    onRemove: (file: UploadFile) => void;
    private prefixCls;
    private setClassMap;
    handlePreview(file: UploadFile, e: Event): void;
    handleRemove(file: UploadFile, e: Event): void;
    constructor(el: ElementRef, updateHostClassService: NzUpdateHostClassService);
    ngOnChanges(): void;
}
