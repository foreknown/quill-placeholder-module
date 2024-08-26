import Quill from 'quill'
import {EmbedBlot, ScrollBlot} from "parchment";
const Embed = Quill.import("blots/embed") as typeof EmbedBlot;

import {Placeholder} from './placeholder'

export class PlaceholderBlot extends Embed {
  
  static blotName = 'placeholder';
  static tagName = 'span';
  static className: string;
  static delimiters: string[];

  constructor(scroll: ScrollBlot, node: Node) {
    super(scroll, node);
  }

  static create(value: Placeholder) {
    let node = super.create(value);
    if (node instanceof HTMLElement === false) {
      return node;
    }

    if (value.required) {
      node.setAttribute('data-required', 'true');
    }
    node.setAttribute('data-id', value.id);
    node.setAttribute('data-label', value.label);
    node.setAttribute('spellcheck', 'false');

    const {delimiters} = PlaceholderBlot;
    const label = typeof delimiters === 'string' ?
      `${delimiters}${value.label}${delimiters}` :
      `${delimiters[0]}${value.label}${delimiters[1] || delimiters[0]}`;

    const labelNode = document.createTextNode(label);

    if (Quill.version < '1.3') {
      const wrapper = document.createElement('span');
      wrapper.setAttribute('contenteditable', 'false');
      wrapper.appendChild(labelNode);
      node.appendChild(wrapper);
    } else {
      node.appendChild(labelNode);
    }
    return node;
  }

  static value(domNode: HTMLElement): DOMStringMap {
    return domNode.dataset;
  }

  length(): number {
    return 1;
  }

  deleteAt(index: number, length: number): void {
    if (this.domNode instanceof HTMLElement && !this.domNode.dataset.required) {
      super.deleteAt(index, length);
    }
  }
}

