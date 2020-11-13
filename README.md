# ember-deprecate-tryinvoke-codemod


A collection of codemods for ember-deprecate-tryinvoke-codemod.

## Usage

To run a specific codemod from this project, you would run the following:

```
npx ember-deprecate-tryinvoke-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js

# or

yarn global add ember-deprecate-tryinvoke-codemod
ember-deprecate-tryinvoke-codemod <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Local Usage
```
node ./bin/cli.js <TRANSFORM NAME> path/of/files/ or/some**/*glob.js
```

## Transforms

<!--TRANSFORMS_START-->

Before

```js
import { tryInvoke } from '@ember/utils';

const test1 = tryInvoke(foo, 'bar');
const test2 = tryInvoke(foo, 'bar', ['baz']);
```

After

```js
const test1 = foo.bar?.();
const test2 = foo.bar?.('baz');
```

<!--TRANSFORMS_END-->

## Contributing

### Installation

* clone the repo
* change into the repo directory
* `yarn`

### Running tests

* `yarn test`

### Update Documentation

* `yarn update-docs`