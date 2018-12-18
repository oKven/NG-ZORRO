import { OnInit } from '@angular/core';
export declare type NzProgressGapPositionType = 'top' | 'bottom' | 'left' | 'right';
export declare type NzProgressStatusType = 'success' | 'exception' | 'active' | 'normal';
export declare type NzProgressTypeType = 'line' | 'circle' | 'dashboard';
export declare type NzProgressStrokeLinecapType = 'round' | 'square';
export declare class NzProgressComponent implements OnInit {
    private _gapDegree;
    private _gapPosition;
    private _percent;
    private _status;
    private _cacheStatus;
    private _strokeLinecap;
    private _strokeWidth;
    private _size;
    private _type;
    private _format;
    trailPathStyle: {
        [key: string]: string;
    };
    strokePathStyle: {
        [key: string]: string;
    };
    pathString: string;
    icon: any;
    iconTheme: any;
    isStatusSet: boolean;
    isStrokeWidthSet: boolean;
    isFormatSet: boolean;
    isGapDegreeSet: boolean;
    isGapPositionSet: boolean;
    statusColorMap: {
        normal: string;
        exception: string;
        success: string;
    };
    nzShowInfo: boolean;
    nzWidth: number;
    nzSuccessPercent: number;
    nzStrokeColor: string;
    nzSize: string;
    nzFormat: (percent: number) => string;
    nzPercent: number;
    nzStrokeWidth: number;
    nzStatus: NzProgressStatusType;
    nzType: NzProgressTypeType;
    nzGapDegree: number;
    nzGapPosition: NzProgressGapPositionType;
    nzStrokeLinecap: NzProgressStrokeLinecapType;
    readonly isCirCleStyle: boolean;
    updatePathStyles(): void;
    updateIcon(): void;
    ngOnInit(): void;
}
