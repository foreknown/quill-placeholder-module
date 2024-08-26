import { default as Quill, EmitterSource } from 'quill';
import { Delta } from 'quill/core';
import { ModuleOptions } from './module-options';

declare const Module: typeof import('quill').Module;
export declare class PlaceholderModule extends Module<ModuleOptions> {
    private placeholders;
    constructor(quill: Quill, options?: Partial<ModuleOptions>);
    onClick(ev: Event): void;
    toolbarHandler(identifier: string): void;
    onTextChange(delta: Delta, oldDelta: Delta, source: EmitterSource): void;
}
export {};
