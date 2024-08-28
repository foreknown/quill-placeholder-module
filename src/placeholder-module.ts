import Quill, {DebugLevel, EmitterSource, Range} from 'quill';
import {Delta} from "quill/core";
import logger from "quill/core/logger";
import Toolbar from "quill/modules/toolbar";
import {Registry} from 'parchment';
import {PlaceholderBlot, PlaceholderEvent} from './placeholder-blot';
import {Placeholder} from './placeholder';
import {ModuleOptions} from './module-options';

const debug = logger('quill-placeholder-blot');
const Module = Quill.import("core/module");

export * from './placeholder-blot';

export default class PlaceholderModule extends Module<ModuleOptions> {

  private placeholders: Placeholder[] = [];
  private spaceAfterInsert = true;

  constructor(quill: Quill, options?: Partial<ModuleOptions>) {
    super(quill, options);
    if (options) {
      this.spaceAfterInsert = options.spaceAfterInsert === true;
      const debugOption = (options.debug || 'warn') as DebugLevel;
      logger.level(debugOption);
      debug.log('Level: ' + debugOption);
      if (Array.isArray(options.placeholders)) {
        this.placeholders = options.placeholders;
      }
      PlaceholderBlot.className = options.className || 'ql-placeholder-content';
      PlaceholderBlot.delimiters = options.delimiters || ['{', '}'];
    }
    this.quill.scroll.statics.allowedChildren.push(PlaceholderBlot);
    const toolbar = quill.getModule('toolbar') as Toolbar;
    toolbar.addHandler('placeholder', this.toolbarHandler.bind(this));
    this.quill.scroll.domNode.addEventListener('placeholder-clicked', <EventListener>this.onClick.bind(this));
    //this.quill.container.addEventListener('click', <EventListener>this.onClick.bind(this), false);
    // TBD: Delta for placeholder is not emitted. Skipped for now.
    //this.quill.on('text-change', this.onTextChange.bind(this));
  }
  
  onClick(ev: PlaceholderEvent) {
    ev.preventDefault();
    debug.log("handle placeholder onClick()", ev);
    const blot = Registry.find(ev.sourceNode);
    debug.log(blot);
    if (blot instanceof PlaceholderBlot) {
      const index = this.quill.getIndex(blot);
      // Selection does not work (error: endNode is null)
      //this.setSelection(index, blot.length());
      this.setSelection(index + 1);
    }
  }

  toolbarHandler(identifier: string) {
    const selection = this.quill.getSelection();
    if (selection !== null) {
      const placeholder = this.placeholders.filter((pl: Placeholder) => pl.id === identifier)[0];
      if (!placeholder) {
        throw new Error(`Missing placeholder for ${identifier}`);
      }
      const insertIndex = selection.index;
      this.quill.deleteText(insertIndex, selection.length);
      this.quill.insertEmbed(insertIndex, 'placeholder', placeholder, Quill.sources.USER);
      if (this.spaceAfterInsert) {
        this.quill.insertText(insertIndex + 1, " ", Quill.sources.USER);
        this.setSelection(insertIndex + 2);
      } else {
        this.setSelection(insertIndex + 1);
      }
    }
  }
  
  setSelection(index: number, length = 0, timeout = 50) {
    debug.log('setSelection ' + index + ' => ' + length);
    this.quill.setSelection(new Range(index, length), Quill.sources.USER);
  }

  onTextChange(newDelta: Delta, oldDelta: Delta, source: EmitterSource) {
    if (source === Quill.sources.USER) {
      const currentContents = this.quill.getContents();
      debug.log(currentContents);
      try {
        // TBD error: diff called with non-document 
        const delta = currentContents.diff(oldDelta)
        const shouldRevert = delta.ops.filter(op => {
          let insertOp = op.insert as any;
          return insertOp && insertOp.placeholder && insertOp.placeholder.required;
        }).length;

        if (shouldRevert > 0) {
          this.quill.updateContents(delta, Quill.sources.SILENT)
        }
      } catch (e) {
        debug.error(e);
      }      
    }
  }
}
