# ember-deprecate-tryinvoke-codemod


## Usage

```
npx ember-deprecate-tryinvoke-codemod ember-deprecate-tryinvoke-codemod path/of/files/ or/some**/*glob.js

# or

yarn global add ember-deprecate-tryinvoke-codemod
ember-deprecate-tryinvoke-codemod ember-deprecate-tryinvoke-codemod path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js ember-deprecate-tryinvoke-codemod path/of/files/ or/some**/*glob.js
```

## Input / Output

<!--FIXTURES_TOC_START-->
* [multiple-import-tryinvoke](#multiple-import-tryinvoke)
* [optional-chaining](#optional-chaining)
* [single-import-tryinvoke](#single-import-tryinvoke)
<!--FIXTURES_TOC_END-->

<!--FIXTURES_CONTENT_START-->
---
<a id="multiple-import-tryinvoke">**multiple-import-tryinvoke**</a>

**Input** (<small>[multiple-import-tryinvoke.input.js](transforms/ember-deprecate-tryinvoke-codemod/__testfixtures__/multiple-import-tryinvoke.input.js)</small>):
```js
import { tryInvoke, isEmpty } from '@ember/utils';

const test1 = tryInvoke(obj, 'foo', [args]);
```

**Output** (<small>[multiple-import-tryinvoke.output.js](transforms/ember-deprecate-tryinvoke-codemod/__testfixtures__/multiple-import-tryinvoke.output.js)</small>):
```js
import { isEmpty } from '@ember/utils';

const test1 = obj.foo?.(args);
```
---
<a id="optional-chaining">**optional-chaining**</a>

**Input** (<small>[optional-chaining.input.js](transforms/ember-deprecate-tryinvoke-codemod/__testfixtures__/optional-chaining.input.js)</small>):
```js
const test1 = tryInvoke(obj, 'key');
const test2 = tryInvoke(obj, 'key', ['foo']);
const test3 = tryInvoke(obj, 'key', ['foo', 1]);
const test4 = tryInvoke(obj, 'key', ['foo', 1, { bar: 'baz' }]);
const test5 = tryInvoke(obj, 'key', ['foo', 1, { bar: 'baz' }, ['array']]);
const test6 = tryInvoke(obj.args, 'key', ['foo', 1, { bar: 'baz' }, ['array'], () => {}]);
const test7 = tryInvoke(obj.args, 'key', ['foo', 1, { bar: 'baz' }, ['array'], () => {}, null]);
const test8 = tryInvoke(obj.args, 'key', ['foo', 1, { bar: 'baz' }, ['array'], () => {}, null, undefined]);
```

**Output** (<small>[optional-chaining.output.js](transforms/ember-deprecate-tryinvoke-codemod/__testfixtures__/optional-chaining.output.js)</small>):
```js
const test1 = obj.key?.();
const test2 = obj.key?.('foo');
const test3 = obj.key?.('foo', 1);
const test4 = obj.key?.('foo', 1, { bar: 'baz' });
const test5 = obj.key?.('foo', 1, { bar: 'baz' }, ['array']);
const test6 = obj.args.key?.('foo', 1, { bar: 'baz' }, ['array'], () => {});
const test7 = obj.args.key?.('foo', 1, { bar: 'baz' }, ['array'], () => {}, null);
const test8 = obj.args.key?.('foo', 1, { bar: 'baz' }, ['array'], () => {}, null, undefined);
```
---
<a id="single-import-tryinvoke">**single-import-tryinvoke**</a>

**Input** (<small>[single-import-tryinvoke.input.js](transforms/ember-deprecate-tryinvoke-codemod/__testfixtures__/single-import-tryinvoke.input.js)</small>):
```js
import { tryInvoke } from '@ember/utils';

const test1 = tryInvoke(obj, 'foo', [args]);
```

**Output** (<small>[single-import-tryinvoke.output.js](transforms/ember-deprecate-tryinvoke-codemod/__testfixtures__/single-import-tryinvoke.output.js)</small>):
```js
const test1 = obj.foo?.(args);
```
<!--FIXTURES_CONTENT_END-->