import { Root, ScrollBlot, EmbedBlot } from 'parchment';
import { Placeholder } from './placeholder';

export declare function readNodeData(node: any): any;
export declare class PlaceholderEvent extends Event {
    value: object;
    event: Event;
    sourceNode: HTMLElement;
    constructor(name: string, options: EventInit);
}
export declare class PlaceholderBlot extends EmbedBlot {
    static blotName: string;
    static tagName: string;
    static className: string;
    static delimiters: string[];
    private mounted;
    private clickHandler?;
    constructor(scroll: ScrollBlot, node: Node);
    static create(value: Placeholder): Node;
    static value(node: HTMLElement): any;
    static formats(node: HTMLElement, scroll: Root): any;
    format(name: string, value: any): void;
    attach(): void;
    detach(): void;
    value(): any;
    length(): number;
    deleteAt(index: number, length: number): void;
    getClickHandler(): EventListener;
    private buildEvent;
}
