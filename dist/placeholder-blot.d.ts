import { EmbedBlot, ScrollBlot } from 'parchment';
import { Placeholder } from './placeholder';

declare const Embed: typeof EmbedBlot;
export declare class PlaceholderBlot extends Embed {
    static blotName: string;
    static tagName: string;
    static className: string;
    static delimiters: string[];
    constructor(scroll: ScrollBlot, node: Node);
    static create(value: Placeholder): Node;
    static value(domNode: HTMLElement): DOMStringMap;
    length(): number;
    deleteAt(index: number, length: number): void;
}
export {};
