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
var NzUploadComponent = /** @class */ (function () {
    // #endregion
    function NzUploadComponent(cdr, i18n) {
        var _this = this;
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
        this.onStart = function (file) {
            if (!_this.nzFileList) {
                _this.nzFileList = [];
            }
            /** @type {?} */
            var targetItem = _this.fileToObject(file);
            targetItem.status = 'uploading';
            _this.nzFileList.push(targetItem);
            _this.genThumb(targetItem);
            _this.nzFileListChange.emit(_this.nzFileList);
            _this.nzChange.emit({ file: targetItem, fileList: _this.nzFileList, type: 'start' });
            _this.cdr.markForCheck();
        };
        this.onProgress = function (e, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            _this.nzChange.emit({
                event: e,
                file: tslib_1.__assign({}, targetItem),
                fileList: _this.nzFileList,
                type: 'progress'
            });
            _this.cdr.detectChanges();
        };
        this.onSuccess = function (res, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            _this.nzChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'success'
            });
            _this.cdr.detectChanges();
        };
        this.onError = function (err, file) {
            /** @type {?} */
            var fileList = _this.nzFileList;
            /** @type {?} */
            var targetItem = _this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem["message"] = _this.genErr(targetItem);
            _this.nzChange.emit({
                file: tslib_1.__assign({}, targetItem),
                fileList: fileList,
                type: 'error'
            });
            _this.cdr.detectChanges();
        };
        // #endregion
        // #region list
        this.onRemove = function (file) {
            _this.upload.abort(file);
            file.status = 'removed';
            /** @type {?} */
            var fnRes = typeof _this.nzRemove === 'function' ?
                _this.nzRemove(file) : _this.nzRemove == null ? true : _this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes))
                .pipe(filter(function (res) { return res; }))
                .subscribe(function () {
                _this.nzFileList = _this.removeFileItem(file, _this.nzFileList);
                _this.nzChange.emit({
                    file: file,
                    fileList: _this.nzFileList,
                    type: 'removed'
                });
                _this.nzFileListChange.emit(_this.nzFileList);
                _this.cdr.detectChanges();
            });
        };
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    Object.defineProperty(NzUploadComponent.prototype, "nzLimit", {
        get: /**
         * @return {?}
         */
        function () {
            return this._limit;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._limit = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzSize", {
        get: /**
         * @return {?}
         */
        function () {
            return this._size;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._size = toNumber(value, null);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzUploadComponent.prototype, "nzShowUploadList", {
        get: /**
         * @return {?}
         */
        function () {
            return this._showUploadList;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.zipOptions = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (typeof this.nzShowUploadList === 'boolean' && this.nzShowUploadList) {
            this.nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true
            };
        }
        /** @type {?} */
        var filters = this.nzFilter.slice();
        if (this.nzMultiple && this.nzLimit > 0 && filters.findIndex(function (w) { return w.name === 'limit'; }) === -1) {
            filters.push({
                name: 'limit',
                fn: function (fileList) { return fileList.slice(-_this.nzLimit); }
            });
        }
        if (this.nzSize > 0 && filters.findIndex(function (w) { return w.name === 'size'; }) === -1) {
            filters.push({
                name: 'size',
                fn: function (fileList) { return fileList.filter(function (w) { return (w.size / 1024) <= _this.nzSize; }); }
            });
        }
        if (this.nzFileType && this.nzFileType.length > 0 && filters.findIndex(function (w) { return w.name === 'type'; }) === -1) {
            /** @type {?} */
            var types_1 = this.nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: function (fileList) { return fileList.filter(function (w) { return ~types_1.indexOf(w.type); }); }
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
            filters: filters,
            onStart: this.onStart,
            onProgress: this.onProgress,
            onSuccess: this.onSuccess,
            onError: this.onError
        };
        return this;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.fileToObject = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
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
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadComponent.prototype.getFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid === file.uid; })[0];
    };
    /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    NzUploadComponent.prototype.removeFileItem = /**
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    function (file, fileList) {
        return fileList.filter(function (item) { return item.uid !== file.uid; });
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.genErr = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        return file.response && typeof file.response === 'string' ?
            file.response :
            (file.error && file.error.statusText) || this.locale.uploadError;
    };
    /**
     * @param {?} file
     * @return {?}
     */
    NzUploadComponent.prototype.genThumb = /**
     * @param {?} file
     * @return {?}
     */
    function (file) {
        /** @type {?} */
        var win = /** @type {?} */ (window);
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
        var reader = new FileReader();
        reader.onloadend = function () { return file.thumbUrl = /** @type {?} */ (reader.result); };
        reader.readAsDataURL(file.originFileObj);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzUploadComponent.prototype.fileDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.setClassMap = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var subCls = [];
        if (this.nzType === 'drag') {
            subCls = [
                this.nzFileList.some(function (file) { return file.status === 'uploading'; }) && this.prefixCls + "-drag-uploading",
                this.dragState === 'dragover' && this.prefixCls + "-drag-hover"
            ];
        }
        else {
            subCls = [
                this.prefixCls + "-select-" + this.nzListType
            ];
        }
        this.classList = tslib_1.__spread([
            this.prefixCls,
            this.prefixCls + "-" + this.nzType
        ], subCls, [
            this.nzDisabled && this.prefixCls + "-disabled"
        ]).filter(function (item) { return !!item; });
        this.cdr.detectChanges();
    };
    // #endregion
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.i18n$ = this.i18n.localeChange.subscribe(function () {
            _this.locale = _this.i18n.getLocaleData('Upload');
            _this.cdr.detectChanges();
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach(function (file) { return file["message"] = _this.genErr(file); });
        }
        this.zipOptions().setClassMap();
    };
    /**
     * @return {?}
     */
    NzUploadComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.i18n$.unsubscribe();
    };
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
    NzUploadComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzI18nService }
    ]; };
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
    return NzUploadComponent;
}());
export { NzUploadComponent };
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvIiwic291cmNlcyI6WyJ1cGxvYWQvbnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUlMLE1BQU0sRUFHTixTQUFTLEVBQ1QsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFnQixNQUFNLE1BQU0sQ0FBQztBQUNwRCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBWXhELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDOztJQWlJL0QsYUFBYTtJQUViLDJCQUFvQixHQUFzQixFQUFVLElBQW1CO1FBQXZFLGlCQUNDO1FBRG1CLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTs7UUF0SHZFLGNBQWMsRUFBRSxDQUFDOztRQUlqQixjQUE4QixRQUFRLENBQUM7c0JBRWQsQ0FBQztxQkFXRixDQUFDO1FBY3pCLG1CQUF1QyxLQUFLLENBQUM7UUFDN0MsK0JBQW1ELElBQUksQ0FBQztRQUl4RCxnQkFBb0MsRUFBRSxDQUFDO1FBQ3ZDLGtCQUFvQyxFQUFFLENBQUM7UUFDdkMsa0JBQXNDLEtBQUssQ0FBQztRQUU1QyxrQkFBc0MsTUFBTSxDQUFDO1FBQzdDLGtCQUFzQyxLQUFLLENBQUM7UUFDNUMsY0FBa0IsTUFBTSxDQUFDOytCQUVvQyxJQUFJO1FBV2pFLG9CQUF3QyxJ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RUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxlQUFlLEVBQU0sdUJBQXVCLENBQUMsTUFBTTtpQkFDcEQ7Ozs7Z0JBckNDLGlCQUFpQjtnQkFpQlYsYUFBYTs7O3lCQXVCbkIsU0FBUyxTQUFDLFFBQVE7eUJBTWxCLEtBQUs7MEJBSUwsS0FBSzt5QkFXTCxLQUFLOzZCQVNMLEtBQUs7MkJBQ0wsS0FBSzsyQkFDTCxLQUFLOzhCQUNMLEtBQUs7MENBQ0wsS0FBSztpQ0FDTCxLQUFLO2tDQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLOzZCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO21DQUlMLEtBQUs7K0JBU0wsS0FBSztvQ0FDTCxLQUFLOzJCQUVMLEtBQUs7NEJBQ0wsS0FBSzsyQkFFTCxNQUFNO21DQUNOLE1BQU07OztRQS9CRyxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs7UUFNZCxZQUFZLEVBQUU7Ozs7UUFHZCxZQUFZLEVBQUU7Ozs7UUFjZCxZQUFZLEVBQUU7Ozs7UUFDZCxZQUFZLEVBQUU7Ozs0QkFwRzFCOztTQXdDYSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2UsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBmaWx0ZXIgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IHRvQm9vbGVhbiwgdG9OdW1iZXIsIElucHV0Qm9vbGVhbiB9IGZyb20gJy4uL2NvcmUvdXRpbC9jb252ZXJ0JztcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICcuLi9pMThuL256LWkxOG4uc2VydmljZSc7XG5cbmltcG9ydCB7XG4gIFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlLFxuICBVcGxvYWRDaGFuZ2VQYXJhbSxcbiAgVXBsb2FkRmlsZSxcbiAgVXBsb2FkRmlsdGVyLFxuICBVcGxvYWRMaXN0VHlwZSxcbiAgVXBsb2FkVHlwZSxcbiAgVXBsb2FkWEhSQXJncyxcbiAgWmlwQnV0dG9uT3B0aW9uc1xufSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBOelVwbG9hZEJ0bkNvbXBvbmVudCB9IGZyb20gJy4vbnotdXBsb2FkLWJ0bi5jb21wb25lbnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3IgICAgICAgICAgIDogJ256LXVwbG9hZCcsXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXVwbG9hZC5jb21wb25lbnQuaHRtbCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBlbmNhcHN1bGF0aW9uICAgICAgOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgTnpVcGxvYWRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xuICBAVmlld0NoaWxkKCd1cGxvYWQnKSB1cGxvYWQ6IE56VXBsb2FkQnRuQ29tcG9uZW50O1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gIGxvY2FsZTogYW55ID0ge307XG5cbiAgLy8gI3JlZ2lvbiBmaWVsZHNcblxuICBASW5wdXQoKSBuelR5cGU6IFVwbG9hZFR5cGUgPSAnc2VsZWN0JztcblxuICBwcml2YXRlIF9saW1pdDogbnVtYmVyID0gMDtcblxuICBASW5wdXQoKVxuICBzZXQgbnpMaW1pdCh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fbGltaXQgPSB0b051bWJlcih2YWx1ZSwgbnVsbCk7XG4gIH1cblxuICBnZXQgbnpMaW1pdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9saW1pdDtcbiAgfVxuXG4gIHByaXZhdGUgX3NpemU6IG51bWJlciA9IDA7XG5cbiAgQElucHV0KClcbiAgc2V0IG56U2l6ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc2l6ZSA9IHRvTnVtYmVyKHZhbHVlLCBudWxsKTtcbiAgfVxuXG4gIGdldCBuelNpemUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2l6ZTtcbiAgfVxuXG4gIEBJbnB1dCgpIG56RmlsZVR5cGU6IHN0cmluZztcbiAgQElucHV0KCkgbnpBY2NlcHQ6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBuekFjdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXJlY3RvcnkgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56T3BlbkZpbGVEaWFsb2dPbkNsaWNrID0gdHJ1ZTtcbiAgQElucHV0KCkgbnpCZWZvcmVVcGxvYWQ6IChmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpDdXN0b21SZXF1ZXN0OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xuICBASW5wdXQoKSBuekRhdGE6IHt9IHwgKChmaWxlOiBVcGxvYWRGaWxlKSA9PiB7fSk7XG4gIEBJbnB1dCgpIG56RmlsdGVyOiBVcGxvYWRGaWx0ZXJbXSA9IFtdO1xuICBASW5wdXQoKSBuekZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56RGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpIZWFkZXJzOiB7fSB8ICgoZmlsZTogVXBsb2FkRmlsZSkgPT4ge30pO1xuICBASW5wdXQoKSBuekxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZSA9ICd0ZXh0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56TXVsdGlwbGUgPSBmYWxzZTtcbiAgQElucHV0KCkgbnpOYW1lID0gJ2ZpbGUnO1xuXG4gIHByaXZhdGUgX3Nob3dVcGxvYWRMaXN0OiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UgPSB0cnVlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBuelNob3dVcGxvYWRMaXN0KHZhbHVlOiBib29sZWFuIHwgU2hvd1VwbG9hZExpc3RJbnRlcmZhY2UpIHtcbiAgICB0aGlzLl9zaG93VXBsb2FkTGlzdCA9IHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nID8gdG9Cb29sZWFuKHZhbHVlKSA6IHZhbHVlO1xuICB9XG5cbiAgZ2V0IG56U2hvd1VwbG9hZExpc3QoKTogYm9vbGVhbiB8IFNob3dVcGxvYWRMaXN0SW50ZXJmYWNlIHtcbiAgICByZXR1cm4gdGhpcy5fc2hvd1VwbG9hZExpc3Q7XG4gIH1cblxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QnV0dG9uID0gdHJ1ZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56V2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG5cbiAgQElucHV0KCkgbnpSZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQElucHV0KCkgbnpQcmV2aWV3OiAoZmlsZTogVXBsb2FkRmlsZSkgPT4gdm9pZDtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPigpO1xuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpGaWxlTGlzdENoYW5nZTogRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZEZpbGVbXT4oKTtcblxuICBfYnRuT3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcblxuICBwcml2YXRlIHppcE9wdGlvbnMoKTogdGhpcyB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2hvd1VwbG9hZExpc3QgPT09ICdib29sZWFuJyAmJiB0aGlzLm56U2hvd1VwbG9hZExpc3QpIHtcbiAgICAgIHRoaXMubnpTaG93VXBsb2FkTGlzdCA9IHtcbiAgICAgICAgc2hvd1ByZXZpZXdJY29uOiB0cnVlLFxuICAgICAgICBzaG93UmVtb3ZlSWNvbiA6IHRydWVcbiAgICAgIH07XG4gICAgfVxuICAgIC8vIGZpbHRlcnNcbiAgICBjb25zdCBmaWx0ZXJzOiBVcGxvYWRGaWx0ZXJbXSA9IHRoaXMubnpGaWx0ZXIuc2xpY2UoKTtcbiAgICBpZiAodGhpcy5uek11bHRpcGxlICYmIHRoaXMubnpMaW1pdCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdsaW1pdCcpID09PSAtMSkge1xuICAgICAgZmlsdGVycy5wdXNoKHtcbiAgICAgICAgbmFtZTogJ2xpbWl0JyxcbiAgICAgICAgZm4gIDogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LnNsaWNlKC10aGlzLm56TGltaXQpXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnpTaXplID4gMCAmJiBmaWx0ZXJzLmZpbmRJbmRleCh3ID0+IHcubmFtZSA9PT0gJ3NpemUnKSA9PT0gLTEpIHtcbiAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICdzaXplJyxcbiAgICAgICAgZm4gIDogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+ICh3LnNpemUgLyAxMDI0KSA8PSB0aGlzLm56U2l6ZSlcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5uekZpbGVUeXBlICYmIHRoaXMubnpGaWxlVHlwZS5sZW5ndGggPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAndHlwZScpID09PSAtMSkge1xuICAgICAgY29uc3QgdHlwZXMgPSB0aGlzLm56RmlsZVR5cGUuc3BsaXQoJywnKTtcbiAgICAgIGZpbHRlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6ICd0eXBlJyxcbiAgICAgICAgZm4gIDogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IH50eXBlcy5pbmRleE9mKHcudHlwZSkpXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5fYnRuT3B0aW9ucyA9IHtcbiAgICAgIGRpc2FibGVkICAgICAgIDogdGhpcy5uekRpc2FibGVkLFxuICAgICAgYWNjZXB0ICAgICAgICAgOiB0aGlzLm56QWNjZXB0LFxuICAgICAgYWN0aW9uICAgICAgICAgOiB0aGlzLm56QWN0aW9uLFxuICAgICAgZGlyZWN0b3J5ICAgICAgOiB0aGlzLm56RGlyZWN0b3J5LFxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrICAgICAgOiB0aGlzLm56T3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxuICAgICAgYmVmb3JlVXBsb2FkICAgOiB0aGlzLm56QmVmb3JlVXBsb2FkLFxuICAgICAgY3VzdG9tUmVxdWVzdCAgOiB0aGlzLm56Q3VzdG9tUmVxdWVzdCxcbiAgICAgIGRhdGEgICAgICAgICAgIDogdGhpcy5uekRhdGEsXG4gICAgICBoZWFkZXJzICAgICAgICA6IHRoaXMubnpIZWFkZXJzLFxuICAgICAgbmFtZSAgICAgICAgICAgOiB0aGlzLm56TmFtZSxcbiAgICAgIG11bHRpcGxlICAgICAgIDogdGhpcy5uek11bHRpcGxlLFxuICAgICAgd2l0aENyZWRlbnRpYWxzOiB0aGlzLm56V2l0aENyZWRlbnRpYWxzLFxuICAgICAgZmlsdGVycyxcbiAgICAgIG9uU3RhcnQgICAgICAgIDogdGhpcy5vblN0YXJ0LFxuICAgICAgb25Qcm9ncmVzcyAgICAgOiB0aGlzLm9uUHJvZ3Jlc3MsXG4gICAgICBvblN1Y2Nlc3MgICAgICA6IHRoaXMub25TdWNjZXNzLFxuICAgICAgb25FcnJvciAgICAgICAgOiB0aGlzLm9uRXJyb3JcbiAgICB9O1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7XG4gIH1cblxuICAvLyAjcmVnaW9uIHVwbG9hZFxuXG4gIHByaXZhdGUgZmlsZVRvT2JqZWN0KGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbGFzdE1vZGlmaWVkICAgIDogZmlsZS5sYXN0TW9kaWZpZWQsXG4gICAgICBsYXN0TW9kaWZpZWREYXRlOiBmaWxlLmxhc3RNb2RpZmllZERhdGUsXG4gICAgICBuYW1lICAgICAgICAgICAgOiBmaWxlLmZpbGVuYW1lIHx8IGZpbGUubmFtZSxcbiAgICAgIHNpemUgICAgICAgICAgICA6IGZpbGUuc2l6ZSxcbiAgICAgIHR5cGUgICAgICAgICAgICA6IGZpbGUudHlwZSxcbiAgICAgIHVpZCAgICAgICAgICAgICA6IGZpbGUudWlkLFxuICAgICAgcmVzcG9uc2UgICAgICAgIDogZmlsZS5yZXNwb25zZSxcbiAgICAgIGVycm9yICAgICAgICAgICA6IGZpbGUuZXJyb3IsXG4gICAgICBwZXJjZW50ICAgICAgICAgOiAwLFxuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgb3JpZ2luRmlsZU9iaiAgIDogZmlsZSBhcyBhbnlcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZSB7XG4gICAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udWlkID09PSBmaWxlLnVpZClbIDAgXTtcbiAgfVxuXG4gIHByaXZhdGUgcmVtb3ZlRmlsZUl0ZW0oZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSk6IFVwbG9hZEZpbGVbXSB7XG4gICAgcmV0dXJuIGZpbGVMaXN0LmZpbHRlcihpdGVtID0+IGl0ZW0udWlkICE9PSBmaWxlLnVpZCk7XG4gIH1cblxuICBwcml2YXRlIGdlbkVycihmaWxlOiBVcGxvYWRGaWxlKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZycgP1xuICAgICAgZmlsZS5yZXNwb25zZSA6XG4gICAgICAoZmlsZS5lcnJvciAmJiBmaWxlLmVycm9yLnN0YXR1c1RleHQpIHx8IHRoaXMubG9jYWxlLnVwbG9hZEVycm9yO1xuICB9XG5cbiAgcHJpdmF0ZSBnZW5UaHVtYihmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCB7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgIGNvbnN0IHdpbiA9IHdpbmRvdyBhcyBhbnk7XG4gICAgaWYgKFxuICAgICAgKHRoaXMubnpMaXN0VHlwZSAhPT0gJ3BpY3R1cmUnICYmIHRoaXMubnpMaXN0VHlwZSAhPT0gJ3BpY3R1cmUtY2FyZCcpIHx8XG4gICAgICB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICB0eXBlb2Ygd2luID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgIXdpbi5GaWxlUmVhZGVyIHx8XG4gICAgICAhd2luLkZpbGUgfHxcbiAgICAgICEoZmlsZS5vcmlnaW5GaWxlT2JqIGluc3RhbmNlb2YgRmlsZSkgfHxcbiAgICAgIGZpbGUudGh1bWJVcmwgIT0gbnVsbFxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZpbGUudGh1bWJVcmwgPSAnJztcblxuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IGZpbGUudGh1bWJVcmwgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcbiAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlLm9yaWdpbkZpbGVPYmopO1xuICB9XG5cbiAgcHJpdmF0ZSBvblN0YXJ0ID0gKGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICBpZiAoIXRoaXMubnpGaWxlTGlzdCkge1xuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gW107XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmZpbGVUb09iamVjdChmaWxlKTtcbiAgICB0YXJnZXRJdGVtLnN0YXR1cyA9ICd1cGxvYWRpbmcnO1xuICAgIHRoaXMubnpGaWxlTGlzdC5wdXNoKHRhcmdldEl0ZW0pO1xuICAgIHRoaXMuZ2VuVGh1bWIodGFyZ2V0SXRlbSk7XG4gICAgdGhpcy5uekZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5uekZpbGVMaXN0KTtcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoeyBmaWxlOiB0YXJnZXRJdGVtLCBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LCB0eXBlOiAnc3RhcnQnIH0pO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblByb2dyZXNzID0gKGU6IHsgcGVyY2VudDogbnVtYmVyIH0sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBldmVudCAgIDogZSxcbiAgICAgIGZpbGUgICAgOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsXG4gICAgICB0eXBlICAgIDogJ3Byb2dyZXNzJ1xuICAgIH0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25TdWNjZXNzID0gKHJlczoge30sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZG9uZSc7XG4gICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlcztcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xuICAgICAgZmlsZTogeyAuLi50YXJnZXRJdGVtIH0sXG4gICAgICBmaWxlTGlzdCxcbiAgICAgIHR5cGU6ICdzdWNjZXNzJ1xuICAgIH0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgb25FcnJvciA9IChlcnI6IHt9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xuICAgIHRhcmdldEl0ZW0uZXJyb3IgPSBlcnI7XG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZXJyb3InO1xuICAgIHRhcmdldEl0ZW0ubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKHRhcmdldEl0ZW0pO1xuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcbiAgICAgIGZpbGVMaXN0LFxuICAgICAgdHlwZTogJ2Vycm9yJ1xuICAgIH0pO1xuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGRyYWdcblxuICBwcml2YXRlIGRyYWdTdGF0ZTogc3RyaW5nO1xuXG4gIGZpbGVEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xuICAgIGlmIChlLnR5cGUgPT09IHRoaXMuZHJhZ1N0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZHJhZ1N0YXRlID0gZS50eXBlO1xuICAgIHRoaXMuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICAvLyAjcmVnaW9uIGxpc3RcblxuICBvblJlbW92ZSA9IChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XG4gICAgdGhpcy51cGxvYWQuYWJvcnQoZmlsZSk7XG4gICAgZmlsZS5zdGF0dXMgPSAncmVtb3ZlZCc7XG4gICAgY29uc3QgZm5SZXMgPSB0eXBlb2YgdGhpcy5uelJlbW92ZSA9PT0gJ2Z1bmN0aW9uJyA/XG4gICAgICB0aGlzLm56UmVtb3ZlKGZpbGUpIDogdGhpcy5uelJlbW92ZSA9PSBudWxsID8gdHJ1ZSA6IHRoaXMubnpSZW1vdmU7XG4gICAgKGZuUmVzIGluc3RhbmNlb2YgT2JzZXJ2YWJsZSA/IGZuUmVzIDogb2YoZm5SZXMpKVxuICAgIC5waXBlKGZpbHRlcigocmVzOiBib29sZWFuKSA9PiByZXMpKVxuICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5uekZpbGVMaXN0ID0gdGhpcy5yZW1vdmVGaWxlSXRlbShmaWxlLCB0aGlzLm56RmlsZUxpc3QpO1xuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcbiAgICAgICAgZmlsZSxcbiAgICAgICAgZmlsZUxpc3Q6IHRoaXMubnpGaWxlTGlzdCxcbiAgICAgICAgdHlwZSAgICA6ICdyZW1vdmVkJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLm56RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLm56RmlsZUxpc3QpO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gI2VuZHJlZ2lvblxuXG4gIC8vICNyZWdpb24gc3R5bGVzXG5cbiAgcHJpdmF0ZSBwcmVmaXhDbHMgPSAnYW50LXVwbG9hZCc7XG4gIGNsYXNzTGlzdDogc3RyaW5nW10gPSBbXTtcblxuICBwcml2YXRlIHNldENsYXNzTWFwKCk6IHZvaWQge1xuICAgIGxldCBzdWJDbHM6IHN0cmluZ1tdID0gW107XG4gICAgaWYgKHRoaXMubnpUeXBlID09PSAnZHJhZycpIHtcbiAgICAgIHN1YkNscyA9IFtcbiAgICAgICAgdGhpcy5uekZpbGVMaXN0LnNvbWUoZmlsZSA9PiBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpICYmIGAke3RoaXMucHJlZml4Q2xzfS1kcmFnLXVwbG9hZGluZ2AsXG4gICAgICAgIHRoaXMuZHJhZ1N0YXRlID09PSAnZHJhZ292ZXInICYmIGAke3RoaXMucHJlZml4Q2xzfS1kcmFnLWhvdmVyYFxuICAgICAgXTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3ViQ2xzID0gW1xuICAgICAgICBgJHt0aGlzLnByZWZpeENsc30tc2VsZWN0LSR7dGhpcy5uekxpc3RUeXBlfWBcbiAgICAgIF07XG4gICAgfVxuXG4gICAgdGhpcy5jbGFzc0xpc3QgPSBbXG4gICAgICB0aGlzLnByZWZpeENscyxcbiAgICAgIGAke3RoaXMucHJlZml4Q2xzfS0ke3RoaXMubnpUeXBlfWAsXG4gICAgICAuLi5zdWJDbHMsXG4gICAgICB0aGlzLm56RGlzYWJsZWQgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYFxuICAgIF0uZmlsdGVyKGl0ZW0gPT4gISFpdGVtKTtcblxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIC8vICNlbmRyZWdpb25cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmkxOG4kID0gdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVXBsb2FkJyk7XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtQIGluIGtleW9mIHRoaXNdPzogU2ltcGxlQ2hhbmdlIH0gJiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMubnpGaWxlTGlzdCkge1xuICAgICAgKHRoaXMubnpGaWxlTGlzdCB8fCBbXSkuZm9yRWFjaChmaWxlID0+IGZpbGUubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKGZpbGUpKTtcbiAgICB9XG4gICAgdGhpcy56aXBPcHRpb25zKCkuc2V0Q2xhc3NNYXAoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuaTE4biQudW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19