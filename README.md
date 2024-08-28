# quill-placeholder-module
Quill module for adding placeholders. [Demo](https://codepen.io/jspaine/pen/MozyNp)

This module supports Quill 2.x only and is a more or less usable version.

## Known Bugs

* Placeholder required feature not functional
* Placeholder select on click broken
* Karma tests not set up.

## Install
```
npm install --save quill-placeholder-module
```

## Usage
```js
import {PlaceholderModule} from 'quill-placeholder-module';

Quill.register('modules/placeholder', PlaceholderModule);

var quill = new Quill('#editor', {
  modules: {
    toolbar: {container: `#toolbar`},
    placeholder: {
      className: 'ql-placeholder-content',  // default
      delimiters: ['{', '}'],  // default
      placeholders: [
        {id: 'foo', label: 'Foo'},
        {id: 'required', label: 'Required', required: true}
      ]
    }
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'  // or 'bubble'
});
```
Define the toolbar menu (a more complete example can be found in the [demo](https://codepen.io/jspaine/pen/MozyNp)):
```html
<div id="toolbar">
  <select class="ql-placeholder">
    <option value="foo">Foo</option>
    <option value="required">Required</option>
  </select>
</div>
<div id="editor"></div>
```
And include the css from `dist/toolbar.css`.

The markup will contain (with default options) `<span class="ql-placeholder-content" data-id="placeholder-id" data-label="placeholder-label">...</span>`

To transform the output check out https://github.com/jspaine/html-ast-transform
