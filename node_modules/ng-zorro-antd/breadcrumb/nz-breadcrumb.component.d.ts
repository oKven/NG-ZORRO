import { ChangeDetectorRef, Injector, NgZone, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Params } from '@angular/router';
export declare const NZ_ROUTE_DATA_BREADCRUMB = "breadcrumb";
export interface BreadcrumbOption {
    label: string;
    params: Params;
    url: string;
}
export declare class NzBreadCrumbComponent implements OnInit, OnDestroy {
    private injector;
    private ngZone;
    private cd;
    nzAutoGenerate: boolean;
    nzSeparator: string | TemplateRef<void>;
    breadcrumbs: BreadcrumbOption[];
    private destroy$;
    constructor(injector: Injector, ngZone: NgZone, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    navigate(url: string, e: MouseEvent): void;
    private getBreadcrumbs;
}
