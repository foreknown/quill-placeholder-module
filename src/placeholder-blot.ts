import logger from 'quill/core/logger';
import {Root, ScrollBlot, EmbedBlot} from "parchment";
import {Placeholder} from './placeholder'

const debug = logger('quill-placeholder-blot');

export function readNodeData(node: any): any {
  if (!(node instanceof HTMLElement)) {
    return undefined;
  }
  let result: any = {};
  if (node.hasAttribute('data-id')) {
    result.id = node.getAttribute('data-id');
  }
  if (node.hasAttribute('data-label')) {
    result.label = node.getAttribute('data-label');
  }
  result.required = node.hasAttribute('data-required');
  return result;
}

export class PlaceholderEvent extends Event {
  public value: object;
  public event: Event;
  public sourceNode: HTMLElement;
  constructor(name: string, options: EventInit) {
    super(name, options);
    this.value = {};
    this.event = new Event(name);
  }
}

export class PlaceholderBlot extends EmbedBlot {
  
  static blotName = "placeholder";
  static tagName = "span";
  static className = "ql-placeholder-content";
  static delimiters: string[];

  private mounted: boolean;
  private clickHandler?: EventListener;
  
  constructor(scroll: ScrollBlot, node: Node) {
    super(scroll, node);
    this.mounted = false;
    debug.log('PlaceholderBlot constructed', node);
  }

  static create(value: Placeholder) {
    debug.log('create static', value);
    let node = super.create();
    if (!(node instanceof HTMLElement)) {
      return node;
    }
    debug.log(node);
    if (value.required) {
      node.setAttribute('data-required', 'true');
    }
    node.setAttribute('data-id', value.id);
    node.setAttribute('data-label', value.label);
    node.setAttribute('spellcheck', 'false');

    const contentNode = document.createElement('span');
    contentNode.setAttribute('contenteditable', 'false');
    const {delimiters} = PlaceholderBlot;
    const label = typeof delimiters === 'string' ?
      `${delimiters}${value.label}${delimiters}` :
      `${delimiters[0]}${value.label}${delimiters[1] || delimiters[0]}`;
    contentNode.innerText = label;
    node.appendChild(contentNode);
    return node;
  }

  static value(node: HTMLElement) {
    debug.log('value static');
    return readNodeData(node);
  }

  static formats(node: HTMLElement, scroll: Root): any {
    debug.log('formats (ignore)');
    return undefined;
  }
  
  format(name: string, value: any) {
    debug.log('format ' + name + ' (ignore)');
    //super.format(name, value);
  }

  attach() {
    debug.log('attach()')
    super.attach();
    if (!this.mounted) {
      // Register to allowedChildren / otherwise the node is removed during optimize phase. Bug?
      if (this.parent && this.parent.statics.allowedChildren) {
        let index = this.parent.statics.allowedChildren.indexOf(PlaceholderBlot);
        if (index < 0) {
          this.parent.statics.allowedChildren.push(PlaceholderBlot);
          debug.log('PlaceholderBlot alloweed for parent');
        }
      }
      // Add click handler
      this.clickHandler = this.getClickHandler();
      this.domNode.addEventListener("click", this.clickHandler, false);
    }
    
  }

  detach() {
    debug.log('detach()')
    super.detach();
    this.mounted = false;
    if (this.clickHandler) {
      this.domNode.removeEventListener("click", this.clickHandler);
      this.clickHandler = undefined;
    }
  }
  
  value() {
    debug.log('value');
    return readNodeData(this.domNode);
  }

  length(): number {
    return 1;
  }

  deleteAt(index: number, length: number): void {
    let placeholder = readNodeData(this.domNode);
    if (!placeholder || !placeholder.required) {
      super.deleteAt(index, length)
    }
  }

  getClickHandler(): EventListener {
    return (e) => {
      debug.log("onClick", e);
      const event = this.buildEvent("placeholder-clicked", e);
      this.scroll.domNode.dispatchEvent(event);
      e.preventDefault();
    };
  }

  private buildEvent(name: string, e: Event): PlaceholderEvent {
    const event = new PlaceholderEvent(name, {
      bubbles: true,
      cancelable: true,
    });
    event.value = Object.assign({}, (this.domNode as HTMLElement).dataset);
    event.event = e;
    event.sourceNode = this.domNode as HTMLElement;
    return event;
  }

}
