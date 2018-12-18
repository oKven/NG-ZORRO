import { ElementRef, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { FocusMonitor } from '@angular/cdk/a11y';
export interface NzCheckBoxOptionInterface {
    label: string;
    value: string;
    checked?: boolean;
    disabled?: boolean;
}
export declare class NzCheckboxGroupComponent implements ControlValueAccessor, OnInit {
    private elementRef;
    private focusMonitor;
    onChange: (value: any) => void;
    onTouched: () => any;
    options: NzCheckBoxOptionInterface[];
    nzDisabled: boolean;
    onOptionChange(): void;
    constructor(elementRef: ElementRef, focusMonitor: FocusMonitor);
    ngOnInit(): void;
    writeValue(value: NzCheckBoxOptionInterface[]): void;
    registerOnChange(fn: (_: NzCheckBoxOptionInterface[]) => {}): void;
    registerOnTouched(fn: () => {}): void;
    setDisabledState(isDisabled: boolean): void;
}
