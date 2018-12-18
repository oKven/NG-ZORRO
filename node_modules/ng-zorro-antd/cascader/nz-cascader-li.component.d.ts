import { DomSanitizer } from '@angular/platform-browser';
import { CascaderOption } from './types';
export declare class NzCascaderOptionComponent {
    private sanitizer;
    option: CascaderOption;
    activated: boolean;
    highlightText: string;
    nzLabelProperty: string;
    constructor(sanitizer: DomSanitizer);
    getOptionLabel(): string;
    renderHighlightString(str: string): string;
}
