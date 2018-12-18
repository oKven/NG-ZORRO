import { QueryList, TemplateRef } from '@angular/core';
import { NzListItemMetaComponent } from './nz-list-item-meta.component';
export declare class NzListItemComponent {
    metas: QueryList<NzListItemMetaComponent>;
    nzActions: Array<TemplateRef<void>>;
    nzContent: string | TemplateRef<void>;
    nzExtra: TemplateRef<void>;
}
