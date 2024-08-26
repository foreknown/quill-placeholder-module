import Quill, {EmitterSource} from 'quill'
import {Registry} from 'parchment'

import {Delta} from "quill/core";
import Toolbar from "quill/modules/toolbar";

import {PlaceholderBlot} from './placeholder-blot';
import {Placeholder} from './placeholder'
import {ModuleOptions} from './module-options'

const Module = Quill.import("core/module");

export class PlaceholderModule extends Module<ModuleOptions> {

  private placeholders: Placeholder[];

  constructor(quill: Quill, options?: Partial<ModuleOptions>) {
    super(quill, options);
    if (options) {
      if (Array.isArray(options.placeholders)) {
        this.placeholders = options.placeholders;
      }
      PlaceholderBlot.className = options.className || 'ql-placeholder-content';
      PlaceholderBlot.delimiters = options.delimiters || ['{', '}'];
    }
    Quill.register(PlaceholderBlot);
    
    const toolbar = quill.getModule('toolbar') as Toolbar;
    toolbar.addHandler('placeholder', this.toolbarHandler);
    quill.root.addEventListener('click', <EventListener>this.onClick);
    quill.on('text-change', this.onTextChange);
  }

  onClick(ev: Event) {
    let target = ev.target as any;
    const blot = Registry.find(target.parentNode);

    if (blot instanceof PlaceholderBlot) {
      const index = this.quill.getIndex(blot);
      this.quill.setSelection(index, blot.length(), Quill.sources.USER);
    }
  }

  toolbarHandler(identifier: string) {
    const selection = this.quill.getSelection();
    if (selection !== null) {
      const placeholder = this.placeholders.filter((pl: Placeholder) => pl.id === identifier)[0];
      if (!placeholder) {
        throw new Error(`Missing placeholder for ${identifier}`);
      }
      this.quill.deleteText(selection.index, selection.length);
      this.quill.insertEmbed(selection.index, 'placeholder', placeholder, Quill.sources.USER);
      this.quill.setSelection(selection.index + 1, 0);
    }
  }

  onTextChange(delta: Delta, oldDelta: Delta, source: EmitterSource) {
    if (source === Quill.sources.USER) {
      const currentContents = this.quill.getContents();
      const delta = currentContents.diff(oldDelta)

      const shouldRevert = delta.ops.filter(op => {
        let insertOp = op.insert as any;
        return insertOp && insertOp.placeholder && insertOp.placeholder.required;
      }).length;

      if (shouldRevert) {
        this.quill.updateContents(delta, Quill.sources.SILENT)
      }
    }
  }
}
