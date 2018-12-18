/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { toBoolean, toNumber, InputBoolean } from '../core/util/convert';
import { NzI18nService } from '../i18n/nz-i18n.service';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
export class NzUploadComponent {
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        // tslint:disable-next-line:no-any
        this.locale = {};
        // #region fields
        this.nzType = 'select';
        this._limit = 0;
        this._size = 0;
        this.nzDirectory = false;
        this.nzOpenFileDialogOnClick = true;
        this.nzFilter = [];
        this.nzFileList = [];
        this.nzDisabled = false;
        this.nzListType = 'text';
        this.nzMultiple = false;
        this.nzName = 'file';
        this._showUploadList = true;
        this.nzShowButton = true;
        this.nzWithCredentials = false;
        this.nzChange = new EventEmitter();
        this.nzFileListChange = new EventEmitter();
        this.onStart = (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            /** @type {?} */
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList.push(targetItem);
            this.genThumb(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.cdr.markForCheck();
        };
        this.onProgress = (e, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.cdr.detectChanges();
        };
        this.onSuccess = (res, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.cdr.detectChanges();
        };
        this.onError = (err, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem["message"] = this.genErr(targetItem);
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.cdr.detectChanges();
        };
        // #endregion
        // #region list
        this.onRemove = (file) => {
            this.upload.abort(file);
            file.status = 'removed';
            /** @type {?} */
            const fnRes = typeof this.nzRemove === 'function' ?
                this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes))
                .pipe(filter((res) => res))
                .subscribe(() => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cdr.detectChanges();
            });
        };
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzLimit(value) {
        this._limit = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get nzLimit() {
        return this._limit;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzSize(value) {
        this._size = toNumber(value, null);
    }
    /**
     * @return {?}
     */
    get nzSize() {
        return this._size;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
    }
    /**
     * @return {?}
     */
    get nzShowUploadList() {
        return this._showUploadList;
    }
    /**
     * @return {?}
     */
    zipOptions() {
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        /** @type {?} */
        const filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(w => w.name === 'limit') === -1) {
            filters.push({
                name: 'limit',
                fn: (fileList) => fileList.slice(-this.nzLimit)
            });
        }
        if (this.nzSize > 0 && filters.findIndex(w => w.name === 'size') === -1) {
            filters.push({
                name: 'size',
                fn: (fileList) => fileList.filter(w => (w.size / 1024) <= this.nzSize)
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(w => w.name === 'type') === -1) {
            /** @type {?} */
            const types = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (fileList) => fileList.filter(w => ~types.indexOf(w.type))
            });
        }
        this._btnOptions = {
            disabled: this.nzDisabled,
            accept: this.nzAccept,
            action: this.nzAction,
            directory: this.nzDirectory,
            openFileDialogOnClick: this.nzOpenFileDialogOnClick,
            beforeUpload: this.nzBeforeUpload,
            customRequest: this.nzCustomRequest,
            data: this.nzData,
            headers: this.nzHeaders,
            name: this.nzName,
            multiple: this.nzMultiple,
            withCredentials: this.nzWithCredentials,
            filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-any
            originFileObj: /** @type {?} */ (file)
        };
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    getFileItem(file, fileList) {
        return fileList.filter(item => item.uid === file.uid)[0];
    }
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    removeFileItem(file, fileList) {
        return fileList.filter(item => item.uid !== file.uid);
    }
    /**
     * @param {?} file
     * @return {?}
     */
    genErr(file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.locale.uploadError;
    }
    /**
     * @param {?} file
     * @return {?}
     */
    genThumb(file) {
        /** @type {?} */
        const win = /** @type {?} */ (window);
        if ((this.nzListType !== 'picture' && this.nzListType !== 'picture-card') ||
            typeof document === 'undefined' ||
            typeof win === 'undefined' ||
            !win.FileReader ||
            !win.File ||
            !(file.originFileObj instanceof File) ||
            file.thumbUrl != null) {
            return;
        }
        file.thumbUrl = '';
        /** @type {?} */
        const reader = new FileReader();
        reader.onloadend = () => file.thumbUrl = /** @type {?} */ (reader.result);
        reader.readAsDataURL(file.originFileObj);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    /**
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        let subCls = [];
        if (this.nzType === 'drag') {
            subCls = [
                this.nzFileList.some(file => file.status === 'uploading') && `${this.prefixCls}-drag-uploading`,
                this.dragState === 'dragover' && `${this.prefixCls}-drag-hover`
            ];
        }
        else {
            subCls = [
                `${this.prefixCls}-select-${this.nzListType}`
            ];
        }
        this.classList = [
            this.prefixCls,
            `${this.prefixCls}-${this.nzType}`,
            ...subCls,
            this.nzDisabled && `${this.prefixCls}-disabled`
        ].filter(item => !!item);
        this.cdr.detectChanges();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe(() => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.cdr.detectChanges();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach(file => file["message"] = this.genErr(file));
        }
        this.zipOptions().setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NzUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-upload',
                template: "<ng-template #list>\n  <nz-upload-list *ngIf=\"nzShowUploadList\"\n    [locale]=\"locale\"\n    [listType]=\"nzListType\"\n    [items]=\"nzFileList\"\n    [icons]=\"nzShowUploadList\"\n    [onPreview]=\"nzPreview\"\n    [onRemove]=\"onRemove\"></nz-upload-list>\n</ng-template>\n<ng-template #con><ng-content></ng-content></ng-template>\n<ng-template #btn>\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\n    <div nz-upload-btn #upload [options]=\"_btnOptions\">\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n    </div>\n  </div>\n</ng-template>\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\n  <div [ngClass]=\"classList\"\n    (drop)=\"fileDrop($event)\"\n    (dragover)=\"fileDrop($event)\"\n    (dragleave)=\"fileDrop($event)\">\n    <div nz-upload-btn #upload [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\n      <div class=\"ant-upload-drag-container\">\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\n      </div>\n    </div>\n  </div>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-container>\n<ng-template #select>\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  </ng-container>\n</ng-template>\n<ng-template #pic>\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\n</ng-template>",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzUploadComponent.propDecorators = {
    upload: [{ type: ViewChild, args: ['upload',] }],
    nzType: [{ type: Input }],
    nzLimit: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFileType: [{ type: Input }],
    nzAccept: [{ type: Input }],
    nzAction: [{ type: Input }],
    nzDirectory: [{ type: Input }],
    nzOpenFileDialogOnClick: [{ type: Input }],
    nzBeforeUpload: [{ type: Input }],
    nzCustomRequest: [{ type: Input }],
    nzData: [{ type: Input }],
    nzFilter: [{ type: Input }],
    nzFileList: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzHeaders: [{ type: Input }],
    nzListType: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzName: [{ type: Input }],
    nzShowUploadList: [{ type: Input }],
    nzShowButton: [{ type: Input }],
    nzWithCredentials: [{ type: Input }],
    nzRemove: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzChange: [{ type: Output }],
    nzFileListChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDirectory", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzShowButton", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzWithCredentials", void 0);
function NzUploadComponent_tsickle_Closure_declarations() {
    /** @type {?} */
    NzUploadComponent.prototype.i18n$;
    /** @type {?} */
    NzUploadComponent.prototype.upload;
    /** @type {?} */
    NzUploadComponent.prototype.locale;
    /** @type {?} */
    NzUploadComponent.prototype.nzType;
    /** @type {?} */
    NzUploadComponent.prototype._limit;
    /** @type {?} */
    NzUploadComponent.prototype._size;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileType;
    /** @type {?} */
    NzUploadComponent.prototype.nzAccept;
    /** @type {?} */
    NzUploadComponent.prototype.nzAction;
    /** @type {?} */
    NzUploadComponent.prototype.nzDirectory;
    /** @type {?} */
    NzUploadComponent.prototype.nzOpenFileDialogOnClick;
    /** @type {?} */
    NzUploadComponent.prototype.nzBeforeUpload;
    /** @type {?} */
    NzUploadComponent.prototype.nzCustomRequest;
    /** @type {?} */
    NzUploadComponent.prototype.nzData;
    /** @type {?} */
    NzUploadComponent.prototype.nzFilter;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileList;
    /** @type {?} */
    NzUploadComponent.prototype.nzDisabled;
    /** @type {?} */
    NzUploadComponent.prototype.nzHeaders;
    /** @type {?} */
    NzUploadComponent.prototype.nzListType;
    /** @type {?} */
    NzUploadComponent.prototype.nzMultiple;
    /** @type {?} */
    NzUploadComponent.prototype.nzName;
    /** @type {?} */
    NzUploadComponent.prototype._showUploadList;
    /** @type {?} */
    NzUploadComponent.prototype.nzShowButton;
    /** @type {?} */
    NzUploadComponent.prototype.nzWithCredentials;
    /** @type {?} */
    NzUploadComponent.prototype.nzRemove;
    /** @type {?} */
    NzUploadComponent.prototype.nzPreview;
    /** @type {?} */
    NzUploadComponent.prototype.nzChange;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileListChange;
    /** @type {?} */
    NzUploadComponent.prototype._btnOptions;
    /** @type {?} */
    NzUploadComponent.prototype.onStart;
    /** @type {?} */
    NzUploadComponent.prototype.onProgress;
    /** @type {?} */
    NzUploadComponent.prototype.onSuccess;
    /** @type {?} */
    NzUploadComponent.prototype.onError;
    /** @type {?} */
    NzUploadComponent.prototype.dragState;
    /** @type {?} */
    NzUploadComponent.prototype.onRemove;
    /** @type {?} */
    NzUploadComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadComponent.prototype.classList;
    /** @type {?} */
    NzUploadComponent.prototype.cdr;
    /** @type {?} */
    NzUploadComponent.prototype.i18n;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ1cGxvYWQvbnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBU2pFLE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBMEg1QixZQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQW5ELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTs7UUF0SHZFLGNBQWMsRUFBRSxDQUFDOztRQUlqQixjQUE4QixRQUFRLENBQUM7c0JBRWQsQ0FBQztxQkFXRixDQUFDO1FBY3pCLG1CQUF1QyxLQUFLLENBQUM7UUFDN0MsK0JBQW1ELElBQUksQ0FBQztRQUl4RCxnQkFBb0MsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFvQyxFQUFFLENBQUM7UUFDdkMsa0JBQXNDLEtBQUssQ0FBQztRQUU1QyxrQkFBc0MsTUFBTSxDQUFDO1FBQzdDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsY0FBa0IsTUFBTSxDQUFDOytCQUVvQyxJQUFJO1FBV2pFLG9CQUF3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TCxLQUFLO3VCQUNMLEtBQUs7MEJBQ0wsS0FBSztzQ0FDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLO3VCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3FCQUNMLEtBQUs7K0JBSUwsS0FBSzsyQkFTTCxLQUFLO2dDQUNMLEtBQUs7dUJBRUwsS0FBSzt3QkFDTCxLQUFLO3VCQUVMLE1BQU07K0JBQ04sTUFBTTs7O0lBL0JHLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRTs7OztJQU1kLFlBQVksRUFBRTs7OztJQUdkLFlBQVksRUFBRTs7OztJQWNkLFlBQVksRUFBRTs7OztJQUNkLFlBQVksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFNpbXBsZUNoYW5nZSxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IG9mLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgdG9Cb29sZWFuLCB0b051bWJlciwgSW5wdXRCb29sZWFuIH0gZnJvbSAnLi4vY29yZS91dGlsL2NvbnZlcnQnO1xuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJy4uL2kxOG4vbnotaTE4bi5zZXJ2aWNlJztcblxuaW1wb3J0IHtcbiAgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UsXG4gIFVwbG9hZENoYW5nZVBhcmFtLFxuICBVcGxvYWRGaWxlLFxuICBVcGxvYWRGaWx0ZXIsXG4gIFVwbG9hZExpc3RUeXBlLFxuICBVcGxvYWRUeXBlLFxuICBVcGxvYWRYSFJBcmdzLFxuICBaaXBCdXR0b25PcHRpb25zXG59IGZyb20gJy4vaW50ZXJmYWNlJztcbmltcG9ydCB7IE56VXBsb2FkQnRuQ29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtYnRuLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvciAgICAgICAgICAgOiAnbnotdXBsb2FkJyxcbiAgdGVtcGxhdGVVcmwgICAgICAgIDogJy4vbnotdXBsb2FkLmNvbXBvbmVudC5odG1sJyxcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIGNoYW5nZURldGVjdGlvbiAgICA6IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBOelVwbG9hZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGkxOG4kOiBTdWJzY3JpcHRpb247XG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZCcpIHVwbG9hZDogTnpVcGxvYWRCdG5Db21wb25lbnQ7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcbiAgbG9jYWxlOiBhbnkgPSB7fTtcblxuICAvLyAjcmVnaW9uIGZpZWxkc1xuXG4gIEBJbnB1dCgpIG56VHlwZTogVXBsb2FkVHlwZSA9ICdzZWxlY3QnO1xuXG4gIHByaXZhdGUgX2xpbWl0OiBudW1iZXIgPSAwO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuekxpbWl0KHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9saW1pdCA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIGdldCBuekxpbWl0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2xpbWl0O1xuICB9XG5cbiAgcHJpdmF0ZSBfc2l6ZTogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgbnpTaXplKHZhbHVlOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zaXplID0gdG9OdW1iZXIodmFsdWUsIG51bGwpO1xuICB9XG5cbiAgZ2V0IG56U2l6ZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zaXplO1xuICB9XG5cbiAgQElucHV0KCkgbnpGaWxlVHlwZTogc3RyaW5nO1xuICBASW5wdXQoKSBuekFjY2VwdDogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIG56QWN0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRpcmVjdG9yeSA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2sgPSB0cnVlO1xuICBASW5wdXQoKSBuekJlZm9yZVVwbG9hZDogKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBASW5wdXQoKSBuekN1c3RvbVJlcXVlc3Q6IChpdGVtOiBVcGxvYWRYSFJBcmdzKSA9PiBTdWJzY3JpcHRpb247XG4gIEBJbnB1dCgpIG56RGF0YToge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcbiAgQElucHV0KCkgbnpGaWx0ZXI6IFVwbG9hZEZpbHRlcltdID0gW107XG4gIEBJbnB1dCgpIG56RmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSA9IFtdO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xuICBASW5wdXQoKSBuekhlYWRlcnM6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG4gIEBJbnB1dCgpIG56TGlzdFR5cGU6IFVwbG9hZExpc3RUeXBlID0gJ3RleHQnO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xuICBASW5wdXQoKSBuek5hbWUgPSAnZmlsZSc7XG5cbiAgcHJpdmF0ZSBfc2hvd1VwbG9hZExpc3Q6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSA9IHRydWU7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2hvd1VwbG9hZExpc3QodmFsdWU6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSkge1xuICAgIHRoaXMuX3Nob3dVcGxvYWRMaXN0ID0gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicgPyB0b0Jvb2xlYW4odmFsdWUpIDogdmFsdWU7XG4gIH1cblxuICBnZXQgbnpTaG93VXBsb2FkTGlzdCgpOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2Uge1xuICAgIHJldHVybiB0aGlzLl9zaG93VXBsb2FkTGlzdDtcbiAgfVxuXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuelNob3dCdXR0b24gPSB0cnVlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpXaXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcblxuICBASW5wdXQoKSBuelJlbW92ZTogKGZpbGU6IFVwbG9hZEZpbGUpID0+IGJvb2xlYW4gfCBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBASW5wdXQoKSBuelByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xuXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekNoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkQ2hhbmdlUGFyYW0+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZpbGVMaXN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPigpO1xuXG4gIF9idG5PcHRpb25zOiBaaXBCdXR0b25PcHRpb25zO1xuXG4gIHByaXZhdGUgemlwT3B0aW9ucygpOiB0aGlzIHtcbiAgICBpZiAodHlwZW9mIHRoaXMubnpTaG93VXBsb2FkTGlzdCA9PT0gJ2Jvb2xlYW4nICYmIHRoaXMubnpTaG93VXBsb2FkTGlzdCkge1xuICAgICAgdGhpcy5uelNob3dVcGxvYWRMaXN0ID0ge1xuICAgICAgICBzaG93UHJldmlld0ljb246IHRydWUsXG4gICAgICAgIHNob3dSZW1vdmVJY29uIDogdHJ1ZVxuICAgICAgfTtcbiAgICB9XG4gICAgLy8gZmlsdGVyc1xuICAgIGNvbnN0IGZpbHRlcnM6IFVwbG9hZEZpbHRlcltdID0gdGhpcy5uekZpbHRlci5zbGljZSgpO1xuICAgIGlmICh0aGlzLm56TXVsdGlwbGUgJiYgdGhpcy5uekxpbWl0ID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ2xpbWl0JykgPT09IC0xKSB7XG4gICAgICBmaWx0ZXJzLnB1c2goe1xuICAgICAgICBuYW1lOiAnbGltaXQnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3Quc2xpY2UoLXRoaXMubnpMaW1pdClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uelNpemUgPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAnc2l6ZScpID09PSAtMSkge1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3NpemUnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gKHcuc2l6ZSAvIDEwMjQpIDw9IHRoaXMubnpTaXplKVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLm56RmlsZVR5cGUgJiYgdGhpcy5uekZpbGVUeXBlLmxlbmd0aCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICd0eXBlJykgPT09IC0xKSB7XG4gICAgICBjb25zdCB0eXBlcyA9IHRoaXMubnpGaWxlVHlwZS5zcGxpdCgnLCcpO1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ3R5cGUnLFxuICAgICAgICBmbiAgOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gfnR5cGVzLmluZGV4T2Yody50eXBlKSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLl9idG5PcHRpb25zID0ge1xuICAgICAgZGlzYWJsZWQgICAgICAgOiB0aGlzLm56RGlzYWJsZWQsXG4gICAgICBhY2NlcHQgICAgICAgICA6IHRoaXMubnpBY2NlcHQsXG4gICAgICBhY3Rpb24gICAgICAgICA6IHRoaXMubnpBY3Rpb24sXG4gICAgICBkaXJlY3RvcnkgICAgICA6IHRoaXMubnpEaXJlY3RvcnksXG4gICAgICBvcGVuRmlsZURpYWxvZ09uQ2xpY2sgICAgICA6IHRoaXMubnpPcGVuRmlsZURpYWxvZ09uQ2xpY2ssXG4gICAgICBiZWZvcmVVcGxvYWQgICA6IHRoaXMubnpCZWZvcmVVcGxvYWQsXG4gICAgICBjdXN0b21SZXF1ZXN0ICA6IHRoaXMubnpDdXN0b21SZXF1ZXN0LFxuICAgICAgZGF0YSAgICAgICAgICAgOiB0aGlzLm56RGF0YSxcbiAgICAgIGhlYWRlcnMgICAgICAgIDogdGhpcy5uekhlYWRlcnMsXG4gICAgICBuYW1lICAgICAgICAgICA6IHRoaXMubnpOYW1lLFxuICAgICAgbXVsdGlwbGUgICAgICAgOiB0aGlzLm56TXVsdGlwbGUsXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMubnpXaXRoQ3JlZGVudGlhbHMsXG4gICAgICBmaWx0ZXJzLFxuICAgICAgb25TdGFydCAgICAgICAgOiB0aGlzLm9uU3RhcnQsXG4gICAgICBvblByb2dyZXNzICAgICA6IHRoaXMub25Qcm9ncmVzcyxcbiAgICAgIG9uU3VjY2VzcyAgICAgIDogdGhpcy5vblN1Y2Nlc3MsXG4gICAgICBvbkVycm9yICAgICAgICA6IHRoaXMub25FcnJvclxuICAgIH07XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHtcbiAgfVxuXG4gIC8vICNyZWdpb24gdXBsb2FkXG5cbiAgcHJpdmF0ZSBmaWxlVG9PYmplY3QoZmlsZTogVXBsb2FkRmlsZSk6IFVwbG9hZEZpbGUge1xuICAgIHJldHVybiB7XG4gICAgICBsYXN0TW9kaWZpZWQgICAgOiBmaWxlLmxhc3RNb2RpZmllZCxcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcbiAgICAgIG5hbWUgICAgICAgICAgICA6IGZpbGUuZmlsZW5hbWUgfHwgZmlsZS5uYW1lLFxuICAgICAgc2l6ZSAgICAgICAgICAgIDogZmlsZS5zaXplLFxuICAgICAgdHlwZSAgICAgICAgICAgIDogZmlsZS50eXBlLFxuICAgICAgdWlkICAgICAgICAgICAgIDogZmlsZS51aWQsXG4gICAgICByZXNwb25zZSAgICAgICAgOiBmaWxlLnJlc3BvbnNlLFxuICAgICAgZXJyb3IgICAgICAgICAgIDogZmlsZS5lcnJvcixcbiAgICAgIHBlcmNlbnQgICAgICAgICA6IDAsXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICBvcmlnaW5GaWxlT2JqICAgOiBmaWxlIGFzIGFueVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGdldEZpbGVJdGVtKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgPT09IGZpbGUudWlkKVsgMCBdO1xuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZVtdIHtcbiAgICByZXR1cm4gZmlsZUxpc3QuZmlsdGVyKGl0ZW0gPT4gaXRlbS51aWQgIT09IGZpbGUudWlkKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2VuRXJyKGZpbGU6IFVwbG9hZEZpbGUpOiBzdHJpbmcge1xuICAgIHJldHVybiBmaWxlLnJlc3BvbnNlICYmIHR5cGVvZiBmaWxlLnJlc3BvbnNlID09PSAnc3RyaW5nJyA/XG4gICAgICBmaWxlLnJlc3BvbnNlIDpcbiAgICAgIChmaWxlLmVycm9yICYmIGZpbGUuZXJyb3Iuc3RhdHVzVGV4dCkgfHwgdGhpcy5sb2NhbGUudXBsb2FkRXJyb3I7XG4gIH1cblxuICBwcml2YXRlIGdlblRodW1iKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgY29uc3Qgd2luID0gd2luZG93IGFzIGFueTtcbiAgICBpZiAoXG4gICAgICAodGhpcy5uekxpc3RUeXBlICE9PSAncGljdHVyZScgJiYgdGhpcy5uekxpc3RUeXBlICE9PSAncGljdHVyZS1jYXJkJykgfHxcbiAgICAgIHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgIHR5cGVvZiB3aW4gPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAhd2luLkZpbGVSZWFkZXIgfHxcbiAgICAgICF3aW4uRmlsZSB8fFxuICAgICAgIShmaWxlLm9yaWdpbkZpbGVPYmogaW5zdGFuY2VvZiBGaWxlKSB8fFxuICAgICAgZmlsZS50aHVtYlVybCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZmlsZS50aHVtYlVybCA9ICcnO1xuXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKCkgPT4gZmlsZS50aHVtYlVybCA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nO1xuICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUub3JpZ2luRmlsZU9iaik7XG4gIH1cblxuICBwcml2YXRlIG9uU3RhcnQgPSAoZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIGlmICghdGhpcy5uekZpbGVMaXN0KSB7XG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSBbXTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZmlsZVRvT2JqZWN0KGZpbGUpO1xuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ3VwbG9hZGluZyc7XG4gICAgdGhpcy5uekZpbGVMaXN0LnB1c2godGFyZ2V0SXRlbSk7XG4gICAgdGhpcy5nZW5UaHVtYih0YXJnZXRJdGVtKTtcbiAgICB0aGlzLm56RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLm56RmlsZUxpc3QpO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7IGZpbGU6IHRhcmdldEl0ZW0sIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsIHR5cGU6ICdzdGFydCcgfSk7XG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XG4gIH1cblxuICBwcml2YXRlIG9uUHJvZ3Jlc3MgPSAoZTogeyBwZXJjZW50OiBudW1iZXIgfSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcbiAgICB0YXJnZXRJdGVtLnBlcmNlbnQgPSBlLnBlcmNlbnQ7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGV2ZW50ICAgOiBlLFxuICAgICAgZmlsZSAgICA6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcbiAgICAgIHR5cGUgICAgOiAncHJvZ3Jlc3MnXG4gICAgfSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblN1Y2Nlc3MgPSAocmVzOiB7fSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdkb25lJztcbiAgICB0YXJnZXRJdGVtLnJlc3BvbnNlID0gcmVzO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0LFxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnXG4gICAgfSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkVycm9yID0gKGVycjoge30sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5lcnJvciA9IGVycjtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICdlcnJvcic7XG4gICAgdGFyZ2V0SXRlbS5tZXNzYWdlID0gdGhpcy5nZW5FcnIodGFyZ2V0SXRlbSk7XG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxuICAgICAgZmlsZUxpc3QsXG4gICAgICB0eXBlOiAnZXJyb3InXG4gICAgfSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gZHJhZ1xuXG4gIHByaXZhdGUgZHJhZ1N0YXRlOiBzdHJpbmc7XG5cbiAgZmlsZURyb3AoZTogRHJhZ0V2ZW50KTogdm9pZCB7XG4gICAgaWYgKGUudHlwZSA9PT0gdGhpcy5kcmFnU3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmFnU3RhdGUgPSBlLnR5cGU7XG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gbGlzdFxuXG4gIG9uUmVtb3ZlID0gKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICB0aGlzLnVwbG9hZC5hYm9ydChmaWxlKTtcbiAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJztcbiAgICBjb25zdCBmblJlcyA9IHR5cGVvZiB0aGlzLm56UmVtb3ZlID09PSAnZnVuY3Rpb24nID9cbiAgICAgIHRoaXMubnpSZW1vdmUoZmlsZSkgOiB0aGlzLm56UmVtb3ZlID09IG51bGwgPyB0cnVlIDogdGhpcy5uelJlbW92ZTtcbiAgICAoZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcykpXG4gICAgLnBpcGUoZmlsdGVyKChyZXM6IGJvb2xlYW4pID0+IHJlcykpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSB0aGlzLnJlbW92ZUZpbGVJdGVtKGZpbGUsIHRoaXMubnpGaWxlTGlzdCk7XG4gICAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgICBmaWxlLFxuICAgICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxuICAgICAgICB0eXBlICAgIDogJ3JlbW92ZWQnXG4gICAgICB9KTtcbiAgICAgIHRoaXMubnpGaWxlTGlzdENoYW5nZS5lbWl0KHRoaXMubnpGaWxlTGlzdCk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyAjZW5kcmVnaW9uXG5cbiAgLy8gI3JlZ2lvbiBzdHlsZXNcblxuICBwcml2YXRlIHByZWZpeENscyA9ICdhbnQtdXBsb2FkJztcbiAgY2xhc3NMaXN0OiBzdHJpbmdbXSA9IFtdO1xuXG4gIHByaXZhdGUgc2V0Q2xhc3NNYXAoKTogdm9pZCB7XG4gICAgbGV0IHN1YkNsczogc3RyaW5nW10gPSBbXTtcbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkcmFnJykge1xuICAgICAgc3ViQ2xzID0gW1xuICAgICAgICB0aGlzLm56RmlsZUxpc3Quc29tZShmaWxlID0+IGZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctdXBsb2FkaW5nYCxcbiAgICAgICAgdGhpcy5kcmFnU3RhdGUgPT09ICdkcmFnb3ZlcicgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctaG92ZXJgXG4gICAgICBdO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdWJDbHMgPSBbXG4gICAgICAgIGAke3RoaXMucHJlZml4Q2xzfS1zZWxlY3QtJHt0aGlzLm56TGlzdFR5cGV9YFxuICAgICAgXTtcbiAgICB9XG5cbiAgICB0aGlzLmNsYXNzTGlzdCA9IFtcbiAgICAgIHRoaXMucHJlZml4Q2xzLFxuICAgICAgYCR7dGhpcy5wcmVmaXhDbHN9LSR7dGhpcy5uelR5cGV9YCxcbiAgICAgIC4uLnN1YkNscyxcbiAgICAgIHRoaXMubnpEaXNhYmxlZCAmJiBgJHt0aGlzLnByZWZpeENsc30tZGlzYWJsZWRgXG4gICAgXS5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pO1xuXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQgPSB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICB0aGlzLmxvY2FsZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGVEYXRhKCdVcGxvYWQnKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW1AgaW4ga2V5b2YgdGhpc10/OiBTaW1wbGVDaGFuZ2UgfSAmIFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlcy5uekZpbGVMaXN0KSB7XG4gICAgICAodGhpcy5uekZpbGVMaXN0IHx8IFtdKS5mb3JFYWNoKGZpbGUgPT4gZmlsZS5tZXNzYWdlID0gdGhpcy5nZW5FcnIoZmlsZSkpO1xuICAgIH1cbiAgICB0aGlzLnppcE9wdGlvbnMoKS5zZXRDbGFzc01hcCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5pMThuJC51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=