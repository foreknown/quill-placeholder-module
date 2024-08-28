import { default as Quill, EmitterSource } from 'quill';
import { Delta } from 'quill/core';
import { PlaceholderEvent } from './placeholder-blot';
import { ModuleOptions } from './module-options';

declare const Module: typeof import('quill').Module;
export * from './placeholder-blot';
export default class PlaceholderModule extends Module<ModuleOptions> {
    private placeholders;
    private spaceAfterInsert;
    constructor(quill: Quill, options?: Partial<ModuleOptions>);
    onClick(ev: PlaceholderEvent): void;
    toolbarHandler(identifier: string): void;
    setSelection(index: number, length?: number, timeout?: number): void;
    onTextChange(newDelta: Delta, oldDelta: Delta, source: EmitterSource): void;
}
