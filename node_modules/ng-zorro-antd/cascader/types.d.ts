export declare type NzCascaderExpandTrigger = 'click' | 'hover';
export declare type NzCascaderTriggerType = 'click' | 'hover';
export declare type NzCascaderSize = 'small' | 'large' | 'default';
export interface CascaderOption {
    value?: any;
    label?: string;
    title?: string;
    disabled?: boolean;
    loading?: boolean;
    isLeaf?: boolean;
    parent?: CascaderOption;
    children?: CascaderOption[];
    [key: string]: any;
}
export interface CascaderSearchOption extends CascaderOption {
    path: CascaderOption[];
}
export interface NzShowSearchOptions {
    filter?(inputValue: string, path: CascaderOption[]): boolean;
    sorter?(a: CascaderOption[], b: CascaderOption[], inputValue: string): number;
}
